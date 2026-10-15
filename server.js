import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import crypto from 'crypto';
import rateLimit from 'express-rate-limit';
import { callGemini, friendly, modelChain, isLikelyGeminiKey } from './api/_gemini.js';
import { findPlantEntry, getPlants, getAllDiseases, searchKnowledge } from './api/_knowledge.js';
import { buildFarmAdvisorPrompt, PROJECT_DATA } from './api/_advisorContext.js';
import { getMandiCommodities } from './src/data/mandiData.js';
import weatherHandler from './api/weather.js';
import mandiHandler from './api/mandi.js';
import identifyHandler from './api/identify.js';
import healthHandler from './api/health.js';
import analyzeHandler from './api/analyze.js';

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



// Helper: Resolve effective Gemini API Key (from env or runtime header)
function getApiKey(req) {
  return req.headers['x-gemini-api-key'] || process.env.GEMINI_API_KEY || '';
}

// Pl@ntNet Plant Identification endpoint
app.all('/api/identify', (req, res) => identifyHandler(req, res));

// Health & Status endpoint
app.get('/api/health', (req, res) => healthHandler(req, res));

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

// GET /api/weather — 14-Day Agricultural Agro-Meteorological Weather Service
app.get('/api/weather', weatherHandler);

// POST /api/scan & /api/analyze — Real Multimodal Vision Scanner
app.post(['/api/scan', '/api/analyze'], aiLimiter, (req, res) => analyzeHandler(req, res));

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
      const { data, model } = await callGemini(
        { systemInstruction, contents, generationConfig },
        15000,
        apiKey
      );
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

// GET /api/weather — 14-day Agro-Meteorological Weather
app.get('/api/weather', (req, res) => weatherHandler(req, res));

// GET /api/mandi — Live APMC Mandi prices (Data.gov.in Agmarknet API)
app.get('/api/mandi', (req, res) => mandiHandler(req, res));

app.listen(PORT, '0.0.0.0', () => {
  console.log(`[CropCare Server] API proxy running on http://0.0.0.0:${PORT}`);
  console.log(`[CropCare Server] GEMINI_API_KEY: ${process.env.GEMINI_API_KEY ? 'CONFIGURED' : 'NOT SET (.env or header required)'}`);
  console.log(`[CropCare Server] MANDI_API_KEY: ${process.env.MANDI_API_KEY ? 'CONFIGURED (Data.gov.in Live)' : 'DEFAULT KEY ACTIVE'}`);
});
