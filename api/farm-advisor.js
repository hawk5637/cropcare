import { callGemini, friendly } from "./_gemini.js";
import { buildFarmAdvisorPrompt, PROJECT_DATA } from "./_advisorContext.js";

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
      userName = 'Farmer'
    } = req.body || {};

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'A query message is required for Farm Advisor AI.' });
    }

    const apiKey = 
      req.headers['x-gemini-api-key'] || 
      process.env.GEMINI_API_KEY || 
      process.env.VITE_GEMINI_API_KEY || 
      'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

    const { systemPrompt, selectedPlot } = buildFarmAdvisorPrompt({
      plotId,
      language,
      userName
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
      maxOutputTokens: 600
    };

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
  } catch (err) {
    const errors = err.errors || [{ status: 500, message: String(err.message || err) }];
    console.error('[Farm Advisor AI] Error:', JSON.stringify(errors));
    return res.status(502).json({
      ...friendly(errors),
      details: errors
    });
  }
}
