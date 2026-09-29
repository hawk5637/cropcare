import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import { callGemini, friendly, modelChain } from './api/_gemini.js';
import { findPlantEntry, getPlants, getAllDiseases, searchKnowledge } from './api/_knowledge.js';
import { buildFarmAdvisorPrompt, PROJECT_DATA } from './api/_advisorContext.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Allow CORS from Vite dev server and tunnel
app.use(cors());
app.use(express.json({ limit: '15mb' }));

// In-memory cache for scan results by SHA-256 hash
// Ensures: "Same image scanned twice must give the same result (temperature 0; cache result by image hash)."
const imageScanCache = new Map();

// In-memory review queue for Expert role
const expertReviewQueue = [
  {
    id: 'REV-101',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
    imageHash: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855',
    imageUrl: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    originalDiagnosis: {
      object_type: 'leaf',
      species: 'Wheat',
      species_confidence: 0.94,
      disease_name: 'Stripe Rust (Puccinia striiformis)',
      severity: 'moderate'
    },
    userCorrection: 'Confirmed Puccinia striiformis on PBW-550',
    feedbackType: 'approved',
    farmerName: 'Baldev Singh (Fazilka)',
    status: 'pending'
  },
  {
    id: 'REV-102',
    timestamp: new Date(Date.now() - 7200000).toISOString(),
    imageHash: 'f4b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b111',
    imageUrl: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80',
    originalDiagnosis: {
      object_type: 'leaf',
      species: 'Tomato',
      species_confidence: 0.88,
      disease_name: 'Early Blight (Alternaria solani)',
      severity: 'severe'
    },
    userCorrection: 'Suspected Late Blight (Phytophthora infestans)',
    feedbackType: 'corrected',
    farmerName: 'Sukhwinder K. (Jalandhar)',
    status: 'pending'
  }
];

// Rate limiter for AI endpoints (60 calls / 15 mins)
const aiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 60,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    error: 'Too many requests. Please wait a few moments before submitting another scan or query.',
    can_retry: true
  }
});

// JSON Schema for Google Gemini Structured Output (Universal Plant, Botanist, Agronomist & Medicinal Expert)
// JSON Schema for CropCare AI Doctor Structured Output
const scanResponseSchema = {
  type: "OBJECT",
  properties: {
    image_type: { 
      type: "STRING", 
      enum: ["leaf", "fruit", "vegetable", "seed", "tree", "flower", "root", "field", "other"]
    },
    title: { type: "STRING" },
    local_names: { 
      type: "ARRAY", 
      items: { type: "STRING" } 
    },
    scientific_name: { type: "STRING" },
    confidence: { 
      type: "STRING", 
      enum: ["high", "medium", "low"] 
    },
    other_possible_matches: { 
      type: "ARRAY", 
      items: { type: "STRING" } 
    },
    what_i_see: { 
      type: "STRING", 
      description: "2 simple lines about observed shapes, colors, lesions, insects, or background" 
    },
    health_status: { 
      type: "STRING", 
      enum: ["healthy", "diseased", "pest", "deficiency", "damaged", "not_applicable"] 
    },
    problem_name: { type: "STRING" },
    severity: { 
      type: "STRING", 
      enum: ["none", "mild", "moderate", "severe"] 
    },
    sections: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          heading: { type: "STRING" },
          icon: { type: "STRING", description: "one single emoji relevant to heading" },
          points: {
            type: "ARRAY",
            items: { type: "STRING" }
          }
        },
        required: ["heading", "icon", "points"]
      }
    },
    need_better_photo: { type: "STRING" },
    farmer_summary: { 
      type: "STRING", 
      description: "2 simple lines: what this is and what to do next" 
    }
  },
  required: [
    "image_type",
    "title",
    "local_names",
    "scientific_name",
    "confidence",
    "other_possible_matches",
    "what_i_see",
    "health_status",
    "problem_name",
    "severity",
    "sections",
    "need_better_photo",
    "farmer_summary"
  ]
};

// Helper: Resolve effective Gemini API Key (from env or runtime header)
function getApiKey(req) {
  return req.headers['x-gemini-api-key'] || process.env.GEMINI_API_KEY || '';
}

// Health & Status endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    hasApiKey: !!(process.env.GEMINI_API_KEY && process.env.GEMINI_API_KEY.trim()),
    cachedScans: imageScanCache.size,
    pendingReviews: expertReviewQueue.filter(q => q.status === 'pending').length
  });
});

// Diagnostic probe endpoint
app.get('/api/diag', async (req, res) => {
  const models = await modelChain();
  try {
    const { data, model } = await callGemini({
      contents: [{ role: "user", parts: [{ text: "Reply with OK" }] }],
    });
    res.json({ 
      ok: true, 
      working_model: model, 
      tried_order: models,
      reply: data.candidates?.[0]?.content?.parts?.[0]?.text 
    });
  } catch (e) {
    res.status(502).json({ ok: false, tried_order: models, errors: e.errors });
  }
});

// Configure API Key at runtime
app.post('/api/config/key', (req, res) => {
  const { apiKey } = req.body;
  if (!apiKey || typeof apiKey !== 'string' || apiKey.trim().length < 10) {
    return res.status(400).json({ error: 'Invalid API key provided' });
  }
  process.env.GEMINI_API_KEY = apiKey.trim();
  res.json({ success: true, message: 'Gemini API key configured successfully' });
});

// POST /api/scan & /api/analyze — Real Multimodal Vision Scanner
app.post(['/api/scan', '/api/analyze'], aiLimiter, async (req, res) => {
  try {
    const { image, language = 'en' } = req.body;

    if (!image) {
      return res.status(400).json({
        error: 'No image provided. Please upload an image or take a photo.',
        can_retry: true
      });
    }

    // Extract base64 data and mime type
    let mimeType = 'image/jpeg';
    let base64Data = image;

    if (image.startsWith('data:')) {
      const match = image.match(/^data:([a-zA-Z0-9/+-]+);base64,(.+)$/);
      if (match) {
        mimeType = match[1];
        base64Data = match[2];
      }
    }

    // Check size (< 8MB in bytes)
    const byteLength = Buffer.byteLength(base64Data, 'base64');
    if (byteLength > 8 * 1024 * 1024) {
      return res.status(400).json({
        error: 'Image file exceeds 8 MB size limit. Please upload a smaller compressed image.',
        can_retry: true
      });
    }

    // Compute SHA-256 hash for strict caching
    const hash = crypto.createHash('sha256').update(base64Data).digest('hex');
    const cacheKey = `${hash}_${language}`;

    if (imageScanCache.has(cacheKey)) {
      const cachedResult = imageScanCache.get(cacheKey);
      return res.json({
        ...cachedResult,
        cached: true,
        image_hash: hash
      });
    }

    const apiKey = getApiKey(req);
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please add your GEMINI_API_KEY to the .env file or configure it in settings.',
        needs_config: true,
        can_retry: true
      });
    }

    // Map language code to human-readable language for the model
    const langMap = {
      en: 'English',
      hi: 'Hindi (हिंदी)',
      ta: 'Tamil (தமிழ்)',
      fr: 'French (Français)'
    };
    const targetLang = langMap[language] || 'English';

    const systemPrompt = `You are CropCare AI Doctor, a world-class botanist, plant pathologist, entomologist, agronomist and medicinal-plant expert. You help farmers and students, especially in India.

SCOPE: You can analyze ANY of these from a photo:
fruits, vegetables, seeds and grains, leaves, flowers, roots, tubers, bark, whole trees and plants, crop fields, herbs and medicinal plants, spices, pulses, oilseeds, cash crops, ornamental plants, weeds, and plants damaged by disease, pests or nutrient problems.

WORKFLOW (follow in order):
1. OBSERVE: shape, color, margins (smooth/serrated/lobed), venation, leaf arrangement, texture, size clues, spots, lesions, powder, mold, holes, curling, yellowing, wilting, insects, webbing, background.
2. IDENTIFY: what part is shown (leaf/fruit/seed/tree/...). Then name the plant with common name, local names (Hindi, Tamil, Telugu, etc.) and scientific name. Compare against lookalikes before deciding (example: mango vs neem leaf, tulsi vs mint, chilli vs tomato). Never default to a popular plant. If unsure, give top 2 candidates.
3. DIAGNOSE (if a plant part is shown): decide healthy or problem. Consider all causes:
   - Fungal: blight, rust, powdery mildew, downy mildew, anthracnose, leaf spot, wilt, smut, blast, rot
   - Bacterial: bacterial spot, canker, blight, wilt, soft rot
   - Viral: mosaic, leaf curl, yellow vein mosaic, bunchy top
   - Pests: aphids, whitefly, thrips, mites, borers, armyworm, leaf miner, mealybug, scale, caterpillars, nematodes
   - Nutrient deficiency or toxicity: N, P, K, Mg, Fe, Zn, Ca, B
   - Environmental: sunburn, frost, drought, waterlogging, herbicide injury
   Give the most likely cause first, then alternatives. Never invent a disease. If the photo is unclear, say "not sure" and say what photo is needed.
4. CHOOSE SECTIONS by image type. Do not use a fixed template:
   - Leaf / plant part: identity, health status, problem name, symptoms, cause, treatment (organic first, then chemical), prevention, medicinal uses, benefits, cautions.
   - Fruit / vegetable: identity, ripeness/quality, nutrition per 100 g, health benefits, side effects, storage, season, farming info, any visible rot/pest/disease.
   - Seed / grain: identity, plant it grows into, sowing season, depth, spacing, soil, germination time, seed rate, storage, uses, seed-borne diseases.
   - Whole tree / plant: identity, uses (fruit, wood, shade, medicine), growth habit, care, common problems.
   - Field / crop: crop, growth stage, visible problems, fertilizer and water advice, next steps.
   - Not a plant: say what it is and ask for a plant photo.
5. TREATMENT RULES: give organic/cultural options first (neem oil, removing infected leaves, crop rotation, spacing, resistant varieties), then chemical options by ACTIVE INGREDIENT type only. Always say "follow the label and ask your local agriculture officer / KVK for exact dose". Never give unsafe mixing advice.
6. SAFETY: for medicinal uses say "traditional use, not a medical prescription, consult a doctor". Warn clearly if the plant is toxic or poisonous to humans, children or animals. Warn about edible lookalikes.
7. LANGUAGE: reply in ${targetLang}. Use very simple words and one short sentence per point.

Reply ONLY with valid JSON.`;

    const requestPayload = {
      contents: [
        {
          role: "user",
          parts: [
            { text: "Analyze this agricultural botanical specimen accurately according to the instructions." },
            {
              inlineData: {
                mimeType: mimeType,
                data: base64Data
              }
            }
          ]
        }
      ],
      generationConfig: {
        temperature: 0.1,
        responseMimeType: "application/json",
        responseSchema: scanResponseSchema
      }
    };

    const { data, model } = await callGemini(
      {
        systemInstruction: systemPrompt,
        contents: requestPayload.contents,
        generationConfig: requestPayload.generationConfig
      },
      9000,
      apiKey
    );
    const candidate = data.candidates?.[0]?.content?.parts?.[0]?.text;

    if (!candidate) {
      return res.status(502).json({
        code: 'MODEL',
        message: 'No diagnostic output generated by Gemini Vision model. Please try again with a clearer photo.',
        details: [{ model, status: 502, message: 'Empty candidate received' }]
      });
    }

    const structuredResult = JSON.parse(candidate);
    const isHealthy = structuredResult.health_status === 'healthy';

    // Cross-reference Indian agronomic knowledge base
    const kbMatch = findPlantEntry(structuredResult.title, structuredResult.scientific_name);
    if (kbMatch) {
      if (!structuredResult.local_names || structuredResult.local_names.length === 0) {
        structuredResult.local_names = Object.values(kbMatch.local_names || {});
      } else if (kbMatch.local_names) {
        const existing = new Set(structuredResult.local_names);
        Object.values(kbMatch.local_names).forEach(ln => {
          if (!existing.has(ln)) {
            structuredResult.local_names.push(ln);
            existing.add(ln);
          }
        });
      }
    }

    // Normalize result with universal schema & backward compatible aliases
    const normalizedResult = {
      ...structuredResult,
      is_plant_detected: structuredResult.image_type !== 'not_a_plant' && structuredResult.image_type !== 'other',
      plant_name: structuredResult.title || 'Botanical Specimen',
      species: `${structuredResult.title || 'Specimen'} (${structuredResult.scientific_name || ''})`,
      species_confidence: structuredResult.confidence === 'high' ? 0.95 : structuredResult.confidence === 'medium' ? 0.8 : 0.6,
      health_status: structuredResult.health_status || (isHealthy ? 'healthy' : 'diseased'),
      disease_name: structuredResult.problem_name || structuredResult.title,
      disease_confidence: structuredResult.confidence === 'high' ? 0.95 : 0.8,
      severity: structuredResult.severity || (isHealthy ? 'none' : 'moderate'),
      farmer_advice: structuredResult.farmer_summary || '',
      evidence: [structuredResult.what_i_see].filter(Boolean),
      knowledge_base_verified: !!kbMatch,
      knowledge_base_match: kbMatch ? {
        name: kbMatch.name,
        scientific_name: kbMatch.scientific_name,
        category: kbMatch.category,
        season: kbMatch.season,
        soil: kbMatch.soil,
        water: kbMatch.water,
        nutrition_per_100g: kbMatch.nutrition_per_100g,
        lookalikes: kbMatch.lookalikes
      } : null,
      model_used: model
    };

    // Cache the verified result by hash
    imageScanCache.set(cacheKey, normalizedResult);

    return res.status(200).json({
      ...normalizedResult,
      cached: false,
      image_hash: hash,
      _model: model
    });
  } catch (e) {
    const errors = e.errors || [{ status: 500, message: String(e.message || e) }];
    console.error("Gemini failed:", JSON.stringify(errors));
    return res.status(502).json({ ...friendly(errors), details: errors });
  }
});

// POST /api/chat — CropCare AI Assistant (Gemini Chatbot)
app.post('/api/chat', aiLimiter, async (req, res) => {
  try {
    const { message, history = [], language = 'en', userName = 'Farmer', userRole = 'farmer', image } = req.body;

    const apiKey = getApiKey(req);
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please add your GEMINI_API_KEY to the .env file.',
        needs_config: true
      });
    }

    const systemInstruction = `You are CropCare Assistant, a friendly and knowledgeable AI helper.

You can answer ANY question the user asks. You are not limited to the information on this website. Use your full general knowledge. Your special strength is agriculture, plants, trees, seeds, crop diseases, fertilizers, soil, weather, farming schemes, and medicinal plants, but you also help with general questions, studies, technology, health basics, and everyday topics.

User Context:
- User Name: ${userName}
- User Role: ${userRole.toUpperCase()}

How to answer:
- Give a complete, correct, and useful answer every time. Do not say "I only know about this website."
- Reply in the same language the user writes in (Tamil, English, Hindi, Tanglish, etc.).
- Use simple words. Explain like you are talking to a farmer or student.
- For step-by-step questions, use short numbered steps.
- If the user asks about a plant scan result, use it as context and explain it in more detail.
- If you are not sure about something, say so honestly instead of guessing.
- For serious medical, legal, or safety matters, give helpful basic information and suggest consulting a doctor or an agriculture officer.`;

    const contents = [];

    // Append prior history
    if (Array.isArray(history)) {
      for (const turn of history.slice(-8)) {
        if (turn.sender && turn.text) {
          contents.push({
            role: turn.sender === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }
    }

    // Build current user message parts
    const currentParts = [{ text: message || 'Analyze this agricultural query.' }];

    if (image) {
      let mimeType = 'image/jpeg';
      let base64Data = image;
      if (image.startsWith('data:')) {
        const match = image.match(/^data:([a-zA-Z0-9/+-]+);base64,(.+)$/);
        if (match) {
          mimeType = match[1];
          base64Data = match[2];
        }
      }
      currentParts.push({
        inlineData: {
          mimeType: mimeType,
          data: base64Data
        }
      });
    }

    contents.push({
      role: "user",
      parts: currentParts
    });

    const generationConfig = {
      temperature: 0.2,
      maxOutputTokens: 1024
    };

    try {
      const { data, model } = await callGemini({ systemInstruction, contents, generationConfig });
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text || "I'm sorry, I could not process your query at this moment.";

      return res.status(200).json({
        reply: replyText,
        language: language,
        _model: model
      });
    } catch (e) {
      const errors = e.errors || [{ status: 500, message: String(e.message || e) }];
      console.error("Gemini failed:", JSON.stringify(errors));
      return res.status(502).json({ ...friendly(errors), details: errors });
    }
  } catch (err) {
    console.error('Chat error:', err);
    res.status(500).json({ error: `Assistant error: ${err.message}` });
  }
});

// POST /api/farm-advisor — Grounded Farm Advisor AI Assistant
app.post('/api/farm-advisor', aiLimiter, async (req, res) => {
  try {
    const { 
      message, 
      history = [], 
      plotId = 'plot-1', 
      language = 'en', 
      userName = 'Farmer' 
    } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'A query message is required for Farm Advisor AI.' });
    }

    const apiKey = getApiKey(req);
    if (!apiKey) {
      return res.status(503).json({
        error: 'GEMINI_API_KEY is not configured on the server. Please add your GEMINI_API_KEY to the .env file.',
        needs_config: true
      });
    }

    const { systemPrompt, selectedPlot } = buildFarmAdvisorPrompt({
      plotId,
      language,
      userName
    });

    const contents = [];

    // Append prior history
    if (Array.isArray(history)) {
      for (const turn of history.slice(-8)) {
        if (turn.sender && turn.text && !turn.isError && !turn.text.startsWith('⚠️')) {
          contents.push({
            role: turn.sender === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }
      }
    }

    // Append user message
    contents.push({
      role: 'user',
      parts: [{ text: message.trim() }]
    });

    const generationConfig = {
      temperature: 0.1, // Low temperature for high factual adherence to project data
      maxOutputTokens: 600
    };

    try {
      const { data, model } = await callGemini(
        { systemInstruction: systemPrompt, contents, generationConfig },
        15000,
        apiKey
      );

      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!replyText) {
        return res.status(502).json({
          error: 'No response received from Farm Advisor model.',
          details: [{ model, status: 502, message: 'Empty candidate received' }]
        });
      }

      return res.status(200).json({
        reply: replyText,
        plot: {
          id: selectedPlot.id,
          name: selectedPlot.name,
          crop: selectedPlot.current_crop,
          soilType: selectedPlot.soil.type,
          moisture: selectedPlot.soil.moisture,
          healthScore: selectedPlot.health_score
        },
        model_used: model,
        grounded: true
      });
    } catch (e) {
      const errors = e.errors || [{ status: 500, message: String(e.message || e) }];
      console.error("[Farm Advisor AI] Gemini failed:", JSON.stringify(errors));
      return res.status(502).json({ ...friendly(errors), details: errors });
    }
  } catch (err) {
    console.error('Farm Advisor error:', err);
    res.status(500).json({ error: `Farm Advisor error: ${err.message}` });
  }
});

// POST /api/feedback — User 👍 / 👎 & Correction submission to Expert Queue
app.post('/api/feedback', (req, res) => {
  const { imageHash, isCorrect, userCorrection, originalDiagnosis, farmerName } = req.body;

  const item = {
    id: `REV-${Date.now().toString().slice(-4)}`,
    timestamp: new Date().toISOString(),
    imageHash: imageHash || 'unknown',
    originalDiagnosis: originalDiagnosis || {},
    userCorrection: userCorrection || (isCorrect ? 'User confirmed diagnosis' : 'User flagged incorrect diagnosis'),
    feedbackType: isCorrect ? 'approved' : 'corrected',
    farmerName: farmerName || 'CropCare Grower',
    status: 'pending'
  };

  expertReviewQueue.unshift(item);
  res.json({ success: true, item });
});

// GET /api/expert/queue — Expert Review Queue
app.get('/api/expert/queue', (req, res) => {
  res.json({ queue: expertReviewQueue });
});

// POST /api/expert/review/:id — Approve/Correct by Agronomist
app.post('/api/expert/review/:id', (req, res) => {
  const { id } = req.params;
  const { status, expertNotes } = req.body;

  const item = expertReviewQueue.find(q => q.id === id);
  if (!item) {
    return res.status(404).json({ error: 'Review item not found' });
  }

  item.status = status || 'reviewed';
  item.expertNotes = expertNotes || '';
  item.reviewedAt = new Date().toISOString();

  res.json({ success: true, item });
});

// GET /api/plants — Botanical knowledge base
app.get('/api/plants', (req, res) => {
  const { q, name, scientific_name } = req.query;
  if (q) {
    const results = searchKnowledge(q);
    return res.json({ success: true, query: q, count: results.length, results });
  }
  if (name || scientific_name) {
    const entry = findPlantEntry(name, scientific_name);
    if (entry) {
      return res.json({ success: true, plant: entry });
    }
    return res.status(404).json({ success: false, message: 'Plant not found in knowledge base' });
  }
  const plants = getPlants();
  res.json({
    success: true,
    count: plants.length,
    plants: plants.map(p => ({
      name: p.name,
      scientific_name: p.scientific_name,
      category: p.category,
      local_names: p.local_names,
      season: p.season,
      disease_count: (p.diseases || []).length
    }))
  });
});

// GET /api/plants/diseases — All verified crop diseases
app.get('/api/plants/diseases', (req, res) => {
  const list = getAllDiseases();
  res.json({ success: true, count: list.length, diseases: list });
});

// GET /api/plants/:name — Single plant details
app.get('/api/plants/:name', (req, res) => {
  const entry = findPlantEntry(req.params.name);
  if (entry) {
    return res.json({ success: true, plant: entry });
  }
  res.status(404).json({ success: false, message: 'Plant not found in knowledge base' });
});


app.listen(PORT, '0.0.0.0', () => {
  console.log(`[CropCare Server] API proxy running on http://0.0.0.0:${PORT}`);
  console.log(`[CropCare Server] GEMINI_API_KEY: ${process.env.GEMINI_API_KEY ? 'CONFIGURED' : 'NOT SET (.env or header required)'}`);
});
