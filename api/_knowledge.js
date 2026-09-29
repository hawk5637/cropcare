import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

let plants = [];

try {
  // Resolve plantKnowledgeBase.json from multiple possible locations (local vs Vercel)
  const __dirname = path.dirname(fileURLToPath(import.meta.url));
  const candidatePaths = [
    path.join(__dirname, '..', 'src', 'data', 'plantKnowledgeBase.json'),
    path.join(process.cwd(), 'src', 'data', 'plantKnowledgeBase.json'),
    path.join(process.cwd(), 'data', 'plantKnowledgeBase.json')
  ];

  for (const cp of candidatePaths) {
    if (fs.existsSync(cp)) {
      const content = fs.readFileSync(cp, 'utf8');
      plants = JSON.parse(content);
      break;
    }
  }
} catch (err) {
  console.warn('[KnowledgeBase] Could not load plantKnowledgeBase.json:', err.message);
}

export function getPlants() {
  return plants;
}

export function findPlantEntry(name, scientificName) {
  if (!name && !scientificName) return null;
  const qName = (name || '').toLowerCase().trim();
  const qSci = (scientificName || '').toLowerCase().trim();

  // 1. Exact match on English name
  const exact = plants.find(p => p.name.toLowerCase() === qName);
  if (exact) return exact;

  // 2. Exact match on scientific name
  if (qSci) {
    const sciExact = plants.find(p => p.scientific_name && p.scientific_name.toLowerCase() === qSci);
    if (sciExact) return sciExact;
  }

  // 3. Local names exact or substring match
  if (qName) {
    const localMatch = plants.find(p => {
      if (!p.local_names) return false;
      return Object.values(p.local_names).some(n => {
        const nl = n.toLowerCase();
        return nl === qName || nl.includes(qName) || qName.includes(nl);
      });
    });
    if (localMatch) return localMatch;
  }

  // 4. Substring match on English or scientific name
  return plants.find(p => {
    const pName = p.name.toLowerCase();
    if (qName && (qName.includes(pName) || pName.includes(qName))) return true;
    if (p.scientific_name) {
      const pSci = p.scientific_name.toLowerCase();
      if (qSci && (qSci.includes(pSci) || pSci.includes(qSci))) return true;
      if (qName && (qName.includes(pSci) || pSci.includes(qName))) return true;
    }
    return false;
  }) || null;
}

export function getAllDiseases() {
  const list = [];
  for (const p of plants) {
    if (Array.isArray(p.diseases)) {
      for (const d of p.diseases) {
        list.push({
          crop: p.name,
          scientific_name: p.scientific_name,
          category: p.category,
          ...d
        });
      }
    }
  }
  return list;
}

export function searchKnowledge(query) {
  if (!query || typeof query !== 'string') return [];
  const q = query.toLowerCase().trim();
  const results = [];

  for (const p of plants) {
    let score = 0;
    const matchReasons = [];

    if (p.name.toLowerCase().includes(q)) {
      score += 10;
      matchReasons.push('Plant name');
    }
    if (p.scientific_name && p.scientific_name.toLowerCase().includes(q)) {
      score += 8;
      matchReasons.push('Scientific name');
    }
    if (p.local_names && Object.values(p.local_names).some(n => n.toLowerCase().includes(q))) {
      score += 6;
      matchReasons.push('Local name');
    }
    if (p.category && p.category.toLowerCase().includes(q)) {
      score += 4;
      matchReasons.push('Category');
    }

    const matchedDiseases = (p.diseases || []).filter(d => 
      d.name.toLowerCase().includes(q) ||
      (d.symptoms && d.symptoms.toLowerCase().includes(q)) ||
      (d.cause && d.cause.toLowerCase().includes(q))
    );

    if (matchedDiseases.length > 0) {
      score += 7 * matchedDiseases.length;
      matchReasons.push(`${matchedDiseases.length} disease(s)`);
    }

    if (score > 0) {
      results.push({
        plant: p,
        score,
        matchReasons,
        matchedDiseases
      });
    }
  }

  return results.sort((a, b) => b.score - a.score);
}

