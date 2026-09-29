import { callGemini, modelChain } from "./_gemini.js";

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,POST');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-api-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

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
}
