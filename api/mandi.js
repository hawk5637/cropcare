import { getMandiCommodities } from '../src/data/mandiData.js';

export default function handler(req, res) {
  const { state, crop, lang = 'en' } = req.query || {};
  let commodities = getMandiCommodities(lang);

  if (state && state !== 'All India') {
    commodities = commodities.filter(m => 
      (m.state && m.state.toLowerCase() === state.toLowerCase()) || 
      (m.mandi && m.mandi.toLowerCase().includes(state.toLowerCase()))
    );
  }

  if (crop) {
    commodities = commodities.filter(m => 
      (m.name && m.name.toLowerCase().includes(crop.toLowerCase())) || 
      (m.crop && m.crop.toLowerCase().includes(crop.toLowerCase()))
    );
  }

  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    status: 'success',
    timestamp: new Date().toISOString(),
    source: 'Agmarknet / e-NAM APMC Grid',
    count: commodities.length,
    commodities
  });
}
