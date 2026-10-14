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

  const hasMandiApiKey = !!(
    process.env.MANDI_API_KEY ||
    process.env.DATA_GOV_IN_API_KEY ||
    process.env.VITE_MANDI_API_KEY ||
    '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'
  );

  res.status(200).json({
    status: 'ok',
    hasApiKey,
    hasMandiApiKey,
    mandi_source: 'Data.gov.in (Agmarknet Live)',
    timestamp: new Date().toISOString()
  });
}
