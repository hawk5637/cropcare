import fs from 'fs';
import path from 'path';
import handler from '../api/analyze.js';

const SPECIMENS = [
  {
    target: 'neem',
    scientific: 'Azadirachta indica',
    name: 'Neem',
    url: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Neem_%28Azadirachta_indica%29_leaves_%26_flowers_in_Kolkata_W_IMG_6199.jpg'
  },
  {
    target: 'tulsi',
    scientific: 'Ocimum tenuiflorum',
    name: 'Tulsi',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8b/Holy_Basil_edit2.jpg/960px-Holy_Basil_edit2.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=thumbnail'
  },
  {
    target: 'tomato',
    scientific: 'Solanum lycopersicum',
    name: 'Tomato Leaf',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Tomato_je.jpg/960px-Tomato_je.jpg'
  },
  {
    target: 'mango',
    scientific: 'Mangifera indica',
    name: 'Mango Leaf',
    url: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Mangifera_indica20090409_16.jpg'
  },
  {
    target: 'rice',
    scientific: 'Oryza sativa',
    name: 'Rice',
    url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg/960px-20201102.Hengnan.Hybrid_rice_Sanyou-1.6.jpg'
  },
  {
    target: 'wheat',
    scientific: 'Triticum aestivum',
    name: 'Wheat',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/54/Bruine_roest_op_tarwe_%28Puccinia_recondita_f.sp._tritici_on_Triticum_aestivum%29.jpg/960px-Bruine_roest_op_tarwe_%28Puccinia_recondita_f.sp._tritici_on_Triticum_aestivum%29.jpg'
  },
  {
    target: 'groundnut',
    scientific: 'Arachis hypogaea',
    name: 'Groundnut',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a4/Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg/960px-Arachis_hypogaea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-163.jpg'
  },
  {
    target: 'cotton',
    scientific: 'Gossypium',
    name: 'Cotton',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/Starr_011104-0039_Gossypium_tomentosum.jpg/960px-Starr_011104-0039_Gossypium_tomentosum.jpg'
  },
  {
    target: 'banana',
    scientific: 'Musa',
    name: 'Banana',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/a/ae/Banana_leaves.jpg/960px-Banana_leaves.jpg'
  },
  {
    target: 'hibiscus',
    scientific: 'Hibiscus rosa-sinensis',
    name: 'Hibiscus',
    url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/8/8e/%D0%93%D1%96%D0%B1%D1%96%D1%81%D0%BA_%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_%D1%80%D0%BE%D0%B6%D0%B0_DSCF5953.jpg/960px-%D0%93%D1%96%D0%B1%D1%96%D1%81%D0%BA_%D0%BA%D0%B8%D1%82%D0%B0%D0%B9%D1%81%D1%8C%D0%BA%D0%B0_%D1%80%D0%BE%D0%B6%D0%B0_DSCF5953.jpg'
  }
];

async function fetchImageBase64(url) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'CropCareBot/1.0 (https://cropcare.app; info@cropcare.app)' }
  });
  if (!res.ok) throw new Error(`HTTP ${res.status} fetching ${url}`);
  const contentType = res.headers.get('content-type') || 'image/jpeg';
  const arrayBuffer = await res.arrayBuffer();
  const base64 = Buffer.from(arrayBuffer).toString('base64');
  return `data:${contentType};base64,${base64}`;
}

async function testSingle(specimen, index) {
  console.log(`[${index + 1}/10] Testing: ${specimen.name}...`);
  try {
    const dataUrl = await fetchImageBase64(specimen.url);

    const req = {
      method: 'POST',
      body: {
        image: dataUrl,
        language: 'en',
        category: 'leaf'
      }
    };

    let statusCode = 200;
    let responseData = null;
    const res = {
      setHeader: () => {},
      status: (code) => { statusCode = code; return res; },
      json: (data) => { responseData = data; return res; },
      end: () => {}
    };

    await handler(req, res);

    if (statusCode !== 200 || !responseData) {
      return {
        expected: specimen.name,
        predicted: `Error: HTTP ${statusCode} (${responseData?.error || 'No response'})`,
        confidence: 0,
        label: 'Failed',
        match: false
      };
    }

    const predictedTitle = responseData.title || responseData.plant_name || responseData.species || 'Unknown';
    const scientificName = responseData.scientific_name || '';
    const fullPredicted = `${predictedTitle} (${scientificName})`.toLowerCase();
    const conf = responseData.confidence_pct || Math.round((responseData.species_confidence || 0) * 100);
    const label = responseData.confidence_label || (conf >= 80 ? 'Likely match' : conf >= 50 ? 'Possible match, please verify' : 'Cannot identify reliably, retake the photo');

    const expectedTokens = [
      specimen.target.toLowerCase(),
      specimen.scientific.toLowerCase().split(' ')[0],
      specimen.name.toLowerCase()
    ];
    const isMatch = expectedTokens.some(token => fullPredicted.includes(token));

    return {
      expected: specimen.name,
      predicted: `${predictedTitle} (${scientificName})`,
      confidence: conf,
      label,
      match: isMatch
    };
  } catch (err) {
    return {
      expected: specimen.name,
      predicted: `Exception: ${err.message}`,
      confidence: 0,
      label: 'Error',
      match: false
    };
  }
}

async function run() {
  console.log('=== Starting 10-Plant Visual AI Diagnostic Test ===\n');
  const results = [];

  for (let i = 0; i < SPECIMENS.length; i++) {
    const res = await testSingle(SPECIMENS[i], i);
    results.push(res);
    console.log(`  -> Predicted: ${res.predicted} | Conf: ${res.confidence}% | Label: ${res.label} | Match: ${res.match ? '✅' : '❌'}\n`);
    // brief delay between requests to respect rate limits
    await new Promise(r => setTimeout(r, 1500));
  }

  const passedCount = results.filter(r => r.match).length;
  console.log('\n================== FINAL RESULTS ==================');
  console.log(`Passed: ${passedCount} / ${results.length} (${passedCount >= 9 ? 'PASSED >= 9/10' : 'NEEDS ADJUSTMENT'})\n`);

  console.table(results.map((r, i) => ({
    '#': i + 1,
    'Expected': r.expected,
    'Predicted': r.predicted,
    'Confidence %': r.confidence,
    'Confidence Label': r.label,
    'Match': r.match ? 'YES' : 'NO'
  })));
}

run();
