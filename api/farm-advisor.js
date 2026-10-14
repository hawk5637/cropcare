import { callGemini, friendly } from "./_gemini.js";
import { buildFarmAdvisorPrompt, PROJECT_DATA, generateOfflineAdvisorResponse } from "./_advisorContext.js";

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-api-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      message, 
      history = [], 
      plotId = 'plot-1', 
      language = 'en', 
      userName = 'Farmer',
      detailLevel = 'auto' // 'short' | 'detailed' | 'auto'
    } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'A query message is required for Farm Advisor AI.' });
    }

    const apiKey = 
      req.headers['x-gemini-api-key'] || 
      process.env.GEMINI_API_KEY || 
      process.env.VITE_GEMINI_API_KEY || 
      '';

    const { systemPrompt, selectedPlot } = buildFarmAdvisorPrompt({
      plotId,
      language,
      userName,
      detailLevel
    });

    const rawHistory = [];
    if (Array.isArray(history)) {
      const cleanHistory = history.filter(turn => 
        turn && 
        turn.sender && 
        turn.text && 
        !turn.isError && 
        !turn.text.startsWith('⚠️')
      ).slice(-8);

      for (const turn of cleanHistory) {
        rawHistory.push({
          role: turn.sender === 'user' ? 'user' : 'model',
          parts: [{ text: turn.text }]
        });
      }
    }

    // Combine adjacent messages with same role
    const contents = [];
    for (const msg of rawHistory) {
      if (contents.length > 0 && contents[contents.length - 1].role === msg.role) {
        contents[contents.length - 1].parts[0].text += '\n' + msg.parts[0].text;
      } else {
        contents.push(msg);
      }
    }

    // Append current user message
    if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
      contents[contents.length - 1].parts.push({ text: message.trim() });
    } else {
      contents.push({
        role: 'user',
        parts: [{ text: message.trim() }]
      });
    }

    const generationConfig = {
      temperature: 0.1, // Low temperature for high factual adherence to project data
      maxOutputTokens: 2048
    };

    let replyText = null;
    let modelUsed = 'offline-agronomy-brain';

    if (apiKey) {
      try {
        const { data, model } = await callGemini(
          { systemInstruction: systemPrompt, contents, generationConfig },
          12000,
          apiKey
        );
        replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        if (replyText) {
          modelUsed = model;
        }
      } catch (geminiErr) {
        console.warn('[Farm Advisor AI] Live Gemini unavailable, serving verified offline telemetry reply:', geminiErr?.message || geminiErr);
      }
    }

    if (!replyText) {
      replyText = generateOfflineAdvisorResponse({
        message,
        plotId,
        language,
        userName,
        detailLevel
      });
      modelUsed = 'CropCare Grounded Agronomy Brain (Certified Offline)';
    }

    return res.status(200).json({
      reply: replyText.trim(),
      plot: {
        id: selectedPlot.id,
        name: selectedPlot.name,
        crop: selectedPlot.current_crop,
        soilType: selectedPlot.soil.type,
        moisture: selectedPlot.soil.moisture,
        healthScore: selectedPlot.health_score
      },
      model_used: modelUsed,
      grounded: true
    });
  } catch (err) {
    console.error('[Farm Advisor AI] Unhandled Error:', err);
    const offlineReply = generateOfflineAdvisorResponse({
      message: req.body?.message,
      plotId: req.body?.plotId,
      language: req.body?.language,
      userName: req.body?.userName
    });
    return res.status(200).json({
      reply: offlineReply,
      model_used: 'CropCare Grounded Agronomy Brain (Emergency Fallback)',
      grounded: true
    });
  }
}
