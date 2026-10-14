import { isLikelyGeminiKey } from './_gemini.js';
import { getLastKnownQuota } from './identify.js';

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-api-key, x-plantnet-api-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const keyCandidate = req.headers['x-gemini-api-key'] || process.env.GEMINI_API_KEY || process.env.VITE_GEMINI_API_KEY;
  const hasApiKey = isLikelyGeminiKey(keyCandidate);

  const hasMandiApiKey = !!(
    process.env.MANDI_API_KEY ||
    process.env.DATA_GOV_IN_API_KEY ||
    process.env.VITE_MANDI_API_KEY ||
    '579b464db66ec23bdd000001cdd3946e44ce4aad7209ff7b23ac571b'
  );

  const plantNetKey = (
    req.headers['x-plantnet-api-key'] ||
    process.env.PLANTNET_API_KEY ||
    process.env.VITE_PLANTNET_API_KEY ||
    ''
  ).trim();
  const hasPlantNetApiKey = !!plantNetKey;
  let remainingQuota = getLastKnownQuota();

  // If key is present and quota is unknown, try querying Pl@ntNet status/quota
  if (hasPlantNetApiKey && remainingQuota === null) {
    try {
      const qRes = await fetch(`https://my-api.plantnet.org/v2/quota?api-key=${encodeURIComponent(plantNetKey)}`);
      if (qRes.ok) {
        const qJson = await qRes.json();
        remainingQuota = qJson.remainingCalls ?? qJson.remaining ?? null;
      }
    } catch {
      // Non-blocking quota lookup failure
    }
  }

  res.status(200).json({
    status: 'ok',
    hasApiKey,
    hasMandiApiKey,
    mandi_source: 'Data.gov.in (Agmarknet Live)',
    hasPlantNetApiKey,
    plantNetStatus: hasPlantNetApiKey ? 'configured' : 'missing_key',
    plantNetEngine: 'Pl@ntNet API v2 (identify/all project)',
    plantNetRemainingQuota: remainingQuota,
    timestamp: new Date().toISOString()
  });
}

