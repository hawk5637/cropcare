export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-api-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const hasApiKey = !!(
    process.env.GEMINI_API_KEY ||
    req.headers['x-gemini-api-key'] ||
    process.env.VITE_GEMINI_API_KEY
  );

  res.status(200).json({
    status: 'ok',
    hasApiKey,
    timestamp: new Date().toISOString()
  });
}
