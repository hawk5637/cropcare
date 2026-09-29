import { callGemini, friendly } from "./_gemini.js";

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
      language = 'en', 
      userName = 'Farmer', 
      userRole = 'farmer',
      image = null 
    } = req.body || {};

    if (!message && !image) {
      return res.status(400).json({ error: 'No message or image provided.' });
    }

    const apiKey = 
      req.headers['x-gemini-api-key'] || 
      process.env.GEMINI_API_KEY || 
      process.env.VITE_GEMINI_API_KEY || 
      'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

    const systemInstruction = `You are CropCare Assistant, a friendly and knowledgeable AI helper.

You can answer ANY question the user asks. You are not limited to the information on this website. Use your full general knowledge. Your special strength is agriculture, plants, trees, seeds, crop diseases, fertilizers, soil, weather, farming schemes, and medicinal plants, but you also help with general questions, studies, technology, health basics, and everyday topics.

User Context:
- User Name: ${userName}
- User Role: ${userRole.toUpperCase()}

How to answer:
- Give a complete, correct, and useful answer every time. Do not say "I only know about this website."
- Reply in the same language the user writes in (Tamil, English, Hindi, Tanglish, Telugu, Kannada, Marathi, etc.).
- Use simple words. Explain like you are talking to a farmer or student.
- For step-by-step questions, use short numbered steps.
- If the user asks about a plant scan result, use it as context and explain it in more detail.
- If you are not sure about something, say so honestly instead of guessing.
- For serious medical, legal, or safety matters, give helpful basic information and suggest consulting a doctor or an agriculture officer.`;

    const rawHistory = [];
    if (Array.isArray(history)) {
      const cleanHistory = history.filter(turn => 
        turn && 
        turn.sender && 
        turn.text && 
        turn.id !== 'welcome-msg' && 
        !turn.isError && 
        !turn.error && 
        !turn.id?.startsWith('err-') &&
        !turn.text.startsWith('⚠️')
      );
      for (const turn of cleanHistory.slice(-10)) {
        const role = turn.sender === 'user' ? 'user' : 'model';
        rawHistory.push({ role, parts: [{ text: turn.text }] });
      }
    }

    // Ensure conversation starts with 'user'
    while (rawHistory.length > 0 && rawHistory[0].role !== 'user') {
      rawHistory.shift();
    }

    // Merge consecutive identical roles to adhere to Gemini API constraints
    const contents = [];
    for (const msg of rawHistory) {
      if (contents.length > 0 && contents[contents.length - 1].role === msg.role) {
        contents[contents.length - 1].parts[0].text += '\n' + msg.parts[0].text;
      } else {
        contents.push(msg);
      }
    }

    // Build current message parts
    const currentParts = [];
    if (message) {
      currentParts.push({ text: message });
    }

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

    if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
      contents[contents.length - 1].parts.push(...currentParts);
    } else {
      contents.push({
        role: "user",
        parts: currentParts
      });
    }

    const generationConfig = {
      temperature: 0.7,
      maxOutputTokens: 2048
    };

    try {
      const { data, model } = await callGemini(
        { systemInstruction, contents, generationConfig },
        9000,
        apiKey
      );
      const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

      if (!replyText) {
        return res.status(502).json({
          code: 'MODEL',
          message: 'No response received from CropCare Assistant.',
          details: [{ model, status: 502, message: 'Empty candidate received' }]
        });
      }

      return res.status(200).json({ reply: replyText, _model: model });
    } catch (e) {
      const errors = e.errors || [{ status: 500, message: String(e.message || e) }];
      console.error("Gemini failed:", JSON.stringify(errors));
      return res.status(502).json({ ...friendly(errors), details: errors });
    }
  } catch (error) {
    console.error('Chat error:', error);
    const errors = [{ status: 500, message: error.message || 'Internal server error' }];
    return res.status(502).json({ ...friendly(errors), details: errors });
  }
}
