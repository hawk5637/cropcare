import { getPlants, findPlantEntry, getAllDiseases, searchKnowledge } from "./_knowledge.js";

export default function handler(req, res) {
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

  const { q, name, scientific_name, diseases } = req.query || {};

  if (diseases === 'true' || diseases === '1') {
    const list = getAllDiseases();
    return res.status(200).json({ success: true, count: list.length, diseases: list });
  }

  if (q) {
    const results = searchKnowledge(q);
    return res.status(200).json({ success: true, query: q, count: results.length, results });
  }

  if (name || scientific_name) {
    const entry = findPlantEntry(name, scientific_name);
    if (entry) {
      return res.status(200).json({ success: true, plant: entry });
    }
    return res.status(404).json({ success: false, message: 'Plant not found in knowledge base' });
  }

  const plants = getPlants();
  return res.status(200).json({
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
}
