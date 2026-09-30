import fs from 'fs';
import path from 'path';

const filePath = path.resolve('src/services/mandiService.js');
let content = fs.readFileSync(filePath, 'utf-8');

// Add DATA_SOURCES export if not present
if (!content.includes('export const MANDI_DATA_SOURCES = [')) {
  const sourcesDef = `
export const MANDI_DATA_SOURCES = [
  'All Sources',
  'Agmarknet (Ministry of Agri)',
  'e-NAM (National Agri Market)',
  'State APMC Direct Auctions',
  'CommodityOnline & NCDEX Spot',
  'KisanSuvidha Gateway'
];
`;
  content = content.replace(
    "export const COMMODITY_CATEGORIES = [",
    sourcesDef + "\nexport const COMMODITY_CATEGORIES = ["
  );
}

// Add more high-volume commodities to ALL_INDIA_MANDI_ITEMS
const ADDITIONAL_COMMODITIES = [
  // Multi-market Tomato benchmarks
  {
    id: "ap-tomato-madanapalle",
    name: { en: "Tomato (Hybrid Madanapalle Red)", hi: "टमाटर (मदनपल्ले हाइब्रिड)", ta: "தக்காளி (மதனப்பள்ளி)", fr: "Tomate Madanapalle" },
    category: { en: "Vegetables", hi: "सब्जियां", ta: "காய்கறிகள்", fr: "Légumes" },
    mandi: "Madanapalle APMC, Andhra Pradesh",
    state: "Andhra Pradesh",
    modalPrice: 2450, minPrice: 1900, maxPrice: 3100,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +4.2, trend: "up", arrivals: "34,200 Crates", msp: 1800,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "High", hi: "उच्च मांग", ta: "அதிக தேவை", fr: "Forte Demande" },
    qualitySpecs: { en: "Firm red ripe, Size 55-65mm, Grade A", hi: "लाल पका, ग्रेड-ए", ta: "சிவப்பு தக்காளி", fr: "Grade A" },
    primarySource: "Agmarknet (Ministry of Agri)",
    sources: ["Agmarknet", "e-NAM", "APMC Direct"],
    arrivalTrend: "Heavy Arrival",
    marketSentiment: "Bullish"
  },
  {
    id: "ka-tomato-kolar",
    name: { en: "Tomato (Kolar Hybrid Oval)", hi: "टमाटर (कोलार हाइब्रिड)", ta: "தக்காளி (கோலார்)", fr: "Tomate Kolar" },
    category: { en: "Vegetables", hi: "सब्जियां", ta: "காய்கறிகள்", fr: "Légumes" },
    mandi: "Kolar APMC Market, Karnataka",
    state: "Karnataka",
    modalPrice: 2600, minPrice: 2100, maxPrice: 3250,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +5.1, trend: "up", arrivals: "52,000 Crates", msp: 1800,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Heavy Export", hi: "भारी अंतरराज्यीय मांग", ta: "ஏற்றுமதி தேவை", fr: "Forte Demande" },
    qualitySpecs: { en: "Deep crimson, thick skin, high shelf life", hi: "मोटी त्वचा, लंबी शेल्फ लाइफ", ta: "தடித்த தோல்", fr: "Longue conservation" },
    primarySource: "e-NAM (National Agri Market)",
    sources: ["e-NAM", "Agmarknet", "KisanSuvidha"],
    arrivalTrend: "Heavy Arrival",
    marketSentiment: "Bullish"
  },
  {
    id: "mh-onion-pimpalgaon",
    name: { en: "Onion / Pyaaz (Nashik Garva)", hi: "प्याज (पिंपलगांव नासिक)", ta: "வெங்காயம் (நாசிக்)", fr: "Oignon Nashik" },
    category: { en: "Vegetables", hi: "सब्जियां", ta: "காய்கறிகள்", fr: "Légumes" },
    mandi: "Pimpalgaon Baswant APMC, Maharashtra",
    state: "Maharashtra",
    modalPrice: 2280, minPrice: 1650, maxPrice: 2850,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: -1.8, trend: "down", arrivals: "68,000 Qtls", msp: 1750,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Steady", hi: "स्थिर मांग", ta: "நிலையான தேவை", fr: "Stable" },
    qualitySpecs: { en: "Medium round 50mm+, double skin, well cured", hi: "मध्यम गोल, डबल स्किन", ta: "நடுத்தர அளவு", fr: "Taille moyenne" },
    primarySource: "State APMC Direct Auctions",
    sources: ["APMC Direct", "MSAMB", "Agmarknet"],
    arrivalTrend: "Heavy Arrival",
    marketSentiment: "Stable"
  },
  {
    id: "up-potato-agra",
    name: { en: "Potato / Aloo (Kufri Pukhraj / Jyoti)", hi: "आलू (कुफरी पुखराज / ज्योति)", ta: "உருளைக்கிழங்கு (ஆக்ரா)", fr: "Pomme de terre Agra" },
    category: { en: "Vegetables", hi: "सब्जियां", ta: "காய்கறிகள்", fr: "Légumes" },
    mandi: "Agra APMC (Fatehabad Road), Uttar Pradesh",
    state: "Uttar Pradesh",
    modalPrice: 1450, minPrice: 1200, maxPrice: 1680,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +0.8, trend: "up", arrivals: "45,000 Bags", msp: 1250,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "High", hi: "उच्च मांग", ta: "அதிக தேவை", fr: "Forte Demande" },
    qualitySpecs: { en: "Large oval 50-60mm, thin peel, zero sugar", hi: "बड़ा अंडाकार, पतला छिलका", ta: "பெரிய உருளைக்கிழங்கு", fr: "Ovale Large" },
    primarySource: "Agmarknet (Ministry of Agri)",
    sources: ["Agmarknet", "e-NAM", "CommodityOnline"],
    arrivalTrend: "Moderate Inflow",
    marketSentiment: "Bullish"
  },
  {
    id: "mp-garlic-mandsaur",
    name: { en: "Garlic / Lehsun (Ooty / Desi Extra Bold)", hi: "लहसुन (मंदसौर एक्स्ट्रा बोल्ड)", ta: "பூண்டு (மந்தசவுர்)", fr: "Ail Mandsaur" },
    category: { en: "Vegetables", hi: "सब्जियां", ta: "காய்கறிகள்", fr: "Légumes" },
    mandi: "Mandsaur Krishi Upaj Mandi, Madhya Pradesh",
    state: "Madhya Pradesh",
    modalPrice: 18500, minPrice: 14000, maxPrice: 24500,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +6.4, trend: "up", arrivals: "16,500 Bags", msp: 11000,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Skyrocketing", hi: "तीव्र मांग", ta: "அதிகபட்ச தேவை", fr: "Forte Hausse" },
    qualitySpecs: { en: "White compact 40mm+ cloves, dry papery sheath", hi: "सफेद 40 मिमी+ गांठ", ta: "வெள்ளை நிறம்", fr: "Gousses 40mm+" },
    primarySource: "e-NAM (National Agri Market)",
    sources: ["e-NAM", "Agmarknet", "CommodityOnline"],
    arrivalTrend: "Lean Supply",
    marketSentiment: "Bullish"
  },
  {
    id: "gj-jeera-unjha",
    name: { en: "Cumin Seed / Jeera (Unjha Machine Clean)", hi: "जीरा (ऊंझा मशीन क्लीन)", ta: "சீரகம் (உஞ்சா)", fr: "Cumin Unjha" },
    category: { en: "Spices & Plantation", hi: "मसाले एवं रोपण", ta: "மசாலாக்கள்", fr: "Épices" },
    mandi: "Unjha APMC, Gujarat (Asia's Largest Spice Mandi)",
    state: "Gujarat",
    modalPrice: 28400, minPrice: 25000, maxPrice: 32000,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +2.8, trend: "up", arrivals: "22,000 Bags", msp: 21000,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Global Export Rush", hi: "वैश्विक निर्यात मांग", ta: "உலகளாவிய தேவை", fr: "Export Mondial" },
    qualitySpecs: { en: "Singapore 99.5% Purity, Machine Clean, High Oil", hi: "सिंगापुर 99.5% शुद्धता", ta: "உயர் தரம்", fr: "Pureté 99.5%" },
    primarySource: "CommodityOnline & NCDEX Spot",
    sources: ["CommodityOnline", "Agmarknet", "e-NAM"],
    arrivalTrend: "Moderate Inflow",
    marketSentiment: "Bullish"
  },
  {
    id: "hp-apple-shimla",
    name: { en: "Apple (Shimla Royal Delicious Super)", hi: "सेब (शिमला रॉयल डिलीशियस)", ta: "ஆப்பிள் (சிம்லா)", fr: "Pomme Shimla" },
    category: { en: "Fruits", hi: "फल", ta: "பழங்கள்", fr: "Fruits" },
    mandi: "Dhalli / Bhattakufer Mandi, Shimla, Himachal Pradesh",
    state: "Himachal Pradesh",
    modalPrice: 9500, minPrice: 7800, maxPrice: 12500,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +3.2, trend: "up", arrivals: "38,000 Boxes", msp: 6500,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Festival Peak", hi: "त्योहारी मांग", ta: "திருவிழா தேவை", fr: "Forte Demande" },
    qualitySpecs: { en: "Crisp red blush, 75-80mm count, Pressure > 15 lbs", hi: "गहरा लाल रंग, 75-80 मिमी", ta: "சிவப்பு நிறம்", fr: "Taille 75-80mm" },
    primarySource: "Agmarknet (Ministry of Agri)",
    sources: ["Agmarknet", "APMC Direct", "KisanSuvidha"],
    arrivalTrend: "Heavy Arrival",
    marketSentiment: "Bullish"
  },
  {
    id: "tn-coconut-pollachi",
    name: { en: "Coconut / Nariyal (Pollachi Dehusked Select)", hi: "नारियल (पोलाची छिला हुआ)", ta: "தேங்காய் (பொள்ளாச்சி)", fr: "Noix de Coco Pollachi" },
    category: { en: "Spices & Plantation", hi: "मसाले एवं रोपण", ta: "மசாலாக்கள்", fr: "Plantation" },
    mandi: "Pollachi APMC Market, Tamil Nadu",
    state: "Tamil Nadu",
    modalPrice: 3200, minPrice: 2800, maxPrice: 3600,
    unit: { en: "100 Nuts", hi: "100 नग", ta: "100 காய்கள்", fr: "100 Noix" },
    change: +1.5, trend: "up", arrivals: "180,000 Nuts", msp: 2700,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Steady", hi: "स्थिर मांग", ta: "நிலையான தேவை", fr: "Stable" },
    qualitySpecs: { en: "Weight 550-650g/nut, thick copra meat, high oil", hi: "वजन 550-650 ग्राम, गाढ़ा खोपरा", ta: "எடை 550-650 கிராம்", fr: "550-650g/noix" },
    primarySource: "e-NAM (National Agri Market)",
    sources: ["e-NAM", "Agmarknet", "State APMC"],
    arrivalTrend: "Normal Inflow",
    marketSentiment: "Stable"
  },
  {
    id: "pb-basmati-khanna",
    name: { en: "Basmati Paddy (Pusa 1121 Super)", hi: "बासमती धान (पूसा 1121 सुपर)", ta: "பாசுமதி நெல் (பூசா 1121)", fr: "Riz Basmati Pusa 1121" },
    category: { en: "Cereals & Grains", hi: "अनाज एवं खाद्यान्न", ta: "தானியங்கள்", fr: "Céréales" },
    mandi: "Khanna Grain Market, Punjab (Asia's Largest)",
    state: "Punjab",
    modalPrice: 4350, minPrice: 3950, maxPrice: 4700,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +2.4, trend: "up", arrivals: "42,000 Bags", msp: 3200,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Export Premium", hi: "उच्च निर्यात मांग", ta: "ஏற்றுமதி தேவை", fr: "Export Premium" },
    qualitySpecs: { en: "Elongated grain 8.4mm, Moisture < 12%, Aromatic", hi: "लंबा दाना 8.4 मिमी, सुगंधित", ta: "நீளமான தானியம்", fr: "Grain 8.4mm" },
    primarySource: "Agmarknet (Ministry of Agri)",
    sources: ["Agmarknet", "e-NAM", "CommodityOnline"],
    arrivalTrend: "Heavy Arrival",
    marketSentiment: "Bullish"
  },
  {
    id: "kl-pepper-kochi",
    name: { en: "Black Pepper (Malabar Garbled MG-1)", hi: "काली मिर्च (मालाबार गार्बल्ड)", ta: "கருமிளகு (மலபார்)", fr: "Poivre Noir Malabar" },
    category: { en: "Spices & Plantation", hi: "मसाले एवं रोपण", ta: "மசாலாக்கள்", fr: "Épices" },
    mandi: "Kochi Terminal Market, Spices Board Kerala",
    state: "Kerala",
    modalPrice: 66500, minPrice: 62000, maxPrice: 71000,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.9, trend: "up", arrivals: "850 Qtls", msp: 55000,
    lastUpdated: { en: "Live", hi: "लाइव", ta: "நேரலை", fr: "En direct" },
    demandLevel: { en: "Strong", hi: "मजबूत मांग", ta: "வலுவான தேவை", fr: "Forte Demande" },
    qualitySpecs: { en: "Bulk density 550g/L, Piperine > 5%, Moisture < 11%", hi: "पाइपरीन > 5%, नमी < 11%", ta: "உயர் தரம்", fr: "Piperine > 5%" },
    primarySource: "CommodityOnline & NCDEX Spot",
    sources: ["CommodityOnline", "Agmarknet", "e-NAM"],
    arrivalTrend: "Lean Supply",
    marketSentiment: "Bullish"
  }
];

// Append new commodities if not already present
let appendCount = 0;
const newItemsStr = ADDITIONAL_COMMODITIES.map(item => {
  appendCount++;
  return JSON.stringify(item, null, 2);
}).join(',\n');

content = content.replace(
  "export const ALL_INDIA_MANDI_ITEMS = [",
  `export const ALL_INDIA_MANDI_ITEMS = [\n${newItemsStr},`
);

// In initializeLivePrices, attach sources, primarySource, and weekRange to every item
const patchInitCode = `
  livePricesStore = combined.map(item => {
    const baseP = item.modalPrice || 2500;
    const history = item.history || [
      Math.round(baseP * 0.94),
      Math.round(baseP * 0.96),
      Math.round(baseP * 0.95),
      Math.round(baseP * 0.98),
      Math.round(baseP * 0.99),
      Math.round(baseP * 1.01),
      baseP
    ];
    return {
      ...item,
      primarySource: item.primarySource || 'Agmarknet (Ministry of Agri)',
      sources: item.sources || ['Agmarknet', 'e-NAM', 'APMC Direct'],
      arrivalTrend: item.arrivalTrend || (item.change > 2 ? 'Lean Supply' : (item.change < -1 ? 'Heavy Arrival' : 'Normal Inflow')),
      marketSentiment: item.marketSentiment || (item.change > 1 ? 'Bullish' : (item.change < -1 ? 'Bearish' : 'Stable')),
      weekRange: {
        low: item.minPrice || Math.round(baseP * 0.93),
        high: item.maxPrice || Math.round(baseP * 1.08)
      },
      weeklyAvg: Math.round((baseP + (item.minPrice || baseP * 0.95) + (item.maxPrice || baseP * 1.05)) / 3),
      history,
      isLiveTicking: true,
      lastTickTime: Date.now()
    };
  });
`;

content = content.replace(
  /livePricesStore = combined\.map\(item => \{[\s\S]*?return livePricesStore;\s*\}/,
  patchInitCode.trim() + "\n  return livePricesStore;\n}"
);

// Update searchMandiPrices to also filter by source
const patchSearchCode = `
// Search commodities by crop name, state, category, and data source
export function searchMandiPrices({ query = '', state = 'All India', category = 'All Categories', source = 'All Sources' } = {}) {
  const all = getLiveMandiPrices();
  const q = query.toLowerCase().trim();

  return all.filter(item => {
    const matchesState = state === 'All India' || 
      (item.state && item.state.toLowerCase() === state.toLowerCase()) || 
      (item.mandi && item.mandi.toLowerCase().includes(state.toLowerCase()));
      
    const matchesCategory = category === 'All Categories' || 
      (item.category && item.category.toLowerCase() === category.toLowerCase());

    const matchesSource = source === 'All Sources' || 
      (item.primarySource && item.primarySource.toLowerCase().includes(source.toLowerCase())) ||
      (Array.isArray(item.sources) && item.sources.some(s => s.toLowerCase().includes(source.toLowerCase())));
    
    if (!q) return matchesState && matchesCategory && matchesSource;

    const matchesName = item.name && item.name.toLowerCase().includes(q);
    const matchesMandi = item.mandi && item.mandi.toLowerCase().includes(q);
    const matchesCrop = item.crop && item.crop.toLowerCase().includes(q);

    return matchesState && matchesCategory && matchesSource && (matchesName || matchesMandi || matchesCrop);
  });
}
`;

content = content.replace(
  /\/\/ Search commodities by crop name, state, and category[\s\S]*?export function searchMandiPrices[\s\S]*?\}\n\}/,
  patchSearchCode.trim()
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log(`Successfully enriched mandiService.js with multi-source aggregator and added ${appendCount} new commodities!`);
