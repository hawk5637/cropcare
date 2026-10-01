// CropCare Agronomy Brain — Advanced Agricultural Intelligence & Reasoning Engine
// Powers intelligent, contextual, and grounded responses for Farm Advisor & General Agronomy
// Operates both online (as an intelligent fallback/enhancer) and offline with zero network dependency.

import plantKnowledgeBase from './plantKnowledgeBase.json' with { type: 'json' };
import { PROJECT_DATA } from './farmAdvisorContext.js';
import { findMandiRatesForChat, getLiveMandiPrices } from '../services/mandiService.js';

// Pre-index plants by name, scientific name, and local names
const plantIndex = new Map();
const diseaseList = [];

for (const p of plantKnowledgeBase) {
  const keys = [
    p.name.toLowerCase(),
    (p.scientific_name || '').toLowerCase(),
    ...Object.values(p.local_names || {}).map(v => v.toLowerCase())
  ];
  for (const k of keys) {
    if (k && !plantIndex.has(k)) {
      plantIndex.set(k, p);
    }
  }

  if (Array.isArray(p.diseases)) {
    for (const d of p.diseases) {
      diseaseList.push({
        crop: p.name,
        cropLocal: p.local_names,
        scientific_name: p.scientific_name,
        ...d
      });
    }
  }
}

// Government Schemes Knowledge Base
const SCHEMES_DATA = [
  {
    name: "PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)",
    keywords: ["pm kisan", "pm-kisan", "pmkisan", "6000", "samman nidhi", "installment", "kisan samman"],
    details: `### 🏛️ PM-KISAN (Pradhan Mantri Kisan Samman Nidhi)
**Benefit:** ₹6,000 per year provided to all landholding farmer families in three equal 4-monthly installments of **₹2,000** directly credited via Direct Benefit Transfer (DBT).

**Key Requirements & Action Steps:**
1. **Land Seeding:** Land records must be linked to your Aadhaar on the State Revenue portal.
2. **Aadhaar e-KYC:** Mandatory via OTP on [pmkisan.gov.in](https://pmkisan.gov.in) or face-auth on the PM-KISAN mobile app.
3. **Bank Account Seeding:** Ensure your bank account is active with NPCI Aadhaar bridge enabled.
4. **How to check status:** Open the portal, click **"Know Your Status"**, and enter your Registration Number or mobile number.`
  },
  {
    name: "PMFBY (Pradhan Mantri Fasal Bima Yojana)",
    keywords: ["pmfby", "fasal bima", "crop insurance", "bima", "claim", "crop damage", "loss claim"],
    details: `### 🛡️ PMFBY (Crop Insurance Scheme)
**Benefit:** Comprehensive risk cover for crops against non-preventable natural perils (drought, flood, unseasonal rain, pests, hail, post-harvest losses).

**Farmer Premium Rates:**
- **Kharif Crops:** Only **2.0%** of sum insured.
- **Rabi Crops:** Only **1.5%** of sum insured.
- **Commercial & Horticultural Crops:** **5.0%** of sum insured.

**Claim Protocol for Localized Calamity:**
- Report crop loss within **72 hours** of occurrence via the **Crop Insurance App** or toll-free helpline **14447** / your bank branch.
- Joint inspection will be conducted by revenue officers and insurance representatives within 7-10 days.`
  },
  {
    name: "Kisan Credit Card (KCC)",
    keywords: ["kcc", "kisan credit card", "credit card", "crop loan", "interest subvention", "loan"],
    details: `### 💳 Kisan Credit Card (KCC) Scheme
**Benefit:** Flexible, institutional short-term credit for crop cultivation, post-harvest expenses, and farm asset maintenance.

**Key Features:**
- **Interest Rate:** 7% p.a. standard rate, reduced to an effective **4.0% p.a.** upon timely repayment (3% Prompt Repayment Incentive).
- **Collateral-Free Limit:** Up to **₹1.60 Lakhs** without pledging land; up to **₹3.00 Lakhs** under standard subvention.
- **Validity:** 5 years with simple annual review and 10% annual limit enhancement.
- **Where to apply:** Any commercial, rural (RRB), or cooperative bank branch with land record (7/12, Khasra/Khatauni) and Aadhaar.`
  },
  {
    name: "Soil Health Card Scheme",
    keywords: ["soil health card", "shc", "soil test", "soil testing", "soil card"],
    details: `### 🧪 Soil Health Card Scheme
**Benefit:** Government provides farmers with customized soil test reports every 2-3 years, assessing 12 key parameters (N, P, K, S, Zn, Fe, Cu, Mn, Bo, pH, EC, and Organic Carbon).

**Why it matters:**
- Prevents over-application of Urea and promotes balanced NPK fertilization.
- Recommends exact dosage of micronutrients and soil conditioners (Gypsum for sodic/alkali soil, Lime for acidic soil).
- Available through your local Agriculture Department office or Krishi Vigyan Kendra (KVK).`
  },
  {
    name: "PM Krishi Sinchayee Yojana (Micro-Irrigation Subsidy)",
    keywords: ["drip subsidy", "sprinkler subsidy", "sinchayee", "irrigation subsidy", "per drop more crop"],
    details: `### 💧 Per Drop More Crop (Micro-Irrigation Subsidy)
**Benefit:** Capital subsidy of **45% to 55%** for installing Drip Irrigation and Sprinkler systems (up to 55% for Small/Marginal farmers).

**Benefits:**
- Saves 40% - 60% irrigation water while boosting crop yield by 20% - 35%.
- Enables precise fertigation (delivering water-soluble fertilizers directly to root zones).
- Apply online via your State Agriculture / Horticulture department portal.`
  }
];

// Fertilizer Guide Database
const FERTILIZER_DATA = [
  {
    name: "Urea (46% Nitrogen)",
    keywords: ["urea", "nitrogen fertilizer", "n fertilizer"],
    details: `### 🧪 Urea (46:0:0) Application Guide
- **Role:** Drives lush vegetative growth, chlorophyll synthesis, and tillering/branching.
- **Best Practice:** Avoid single large basal doses. Split into 2-3 applications:
  1. *Early vegetative / tillering stage*
  2. *Active growth / panicle initiation*
- **Precautions:** Never broadcast on dry or heavily flooded soil. Top-dress when soil has moderate moisture, or incorporate before light irrigation. Excessive Urea increases vulnerability to fungal blast and sucking pests.`
  },
  {
    name: "DAP (Diammonium Phosphate 18:46:0)",
    keywords: ["dap", "di ammonium phosphate", "phosphorus fertilizer"],
    details: `### 🧪 DAP (18:46:0) Application Guide
- **Role:** Deep root elongation, vigorous early seedling establishment, and cold stress tolerance.
- **Application Method:** Always apply as a **basal dose** at sowing or transplanting placed 3-5 cm below and beside the seed line.
- **Why Basal?** Phosphorus is immobile in soil; broadcasting on the surface wastes up to 60% of the nutrient.`
  },
  {
    name: "MOP (Muriate of Potash 0:0:60) & SOP (0:0:50)",
    keywords: ["mop", "potash", "potassium", "0:0:50", "sop", "potassium sulphate"],
    details: `### 🧪 Potash (MOP 0:0:60 / SOP 0:0:50) Application Guide
- **Role:** Regulates stomatal opening (drought resistance), strengthens crop stems against lodging, and transports sugars to grains/fruits for high test weight and shine.
- **Soil Application:** MOP (Potassium Chloride) @ 25-40 kg/acre basal or split in sandy soils.
- **Foliar Application:** Water-soluble Potassium Sulphate (00:00:50) @ 1.0 - 1.5 kg/acre during grain-filling or fruit sizing for ~8-12% yield boost.`
  },
  {
    name: "Water-Soluble Foliar Sprays (19:19:19, 13:0:45, 00:52:34)",
    keywords: ["19:19:19", "13:00:45", "13:0:45", "00:52:34", "npk spray", "foliar spray", "water soluble"],
    details: `### 🌿 Water-Soluble NPK Foliar Spray Guide
1. **NPK 19:19:19 (All-Round Booster):** Use @ 5g/L (1 kg/acre) during vegetative stage (30-45 days after sowing). Rapid greening and canopy development.
2. **00:52:34 (MKP - Mono Potassium Phosphate):** Use @ 5g/L prior to flowering to promote heavy flower set and prevent premature blossom drop.
3. **13:00:45 (Potassium Nitrate):** Use @ 5-7g/L post-flowering for rapid fruit elongation and grain swelling.
4. **00:00:50 (Potassium Sulphate):** Use @ 5g/L during late maturation to increase grain luster, sugar content (Brix), and shelf life.`
  },
  {
    name: "Zinc & Micronutrient Management",
    keywords: ["zinc", "boron", "iron", "micronutrient", "khaira"],
    details: `### 🧪 Micronutrient Deficiency & Correction
- **Zinc Deficiency (Khaira in Rice / White Bud in Maize):** Brown rusty spots on lower leaves, stunted plants.
  * *Correction:* Foliar spray of **Zinc Sulphate (ZnSO4 21%) @ 5g/L** mixed with 2.5g/L slaked lime, or soil application of Zinc Sulphate @ 10 kg/acre.
- **Boron Deficiency (Fruit Cracking & Poor Seed Set):** Hollow heart in cauliflower, cracked tomatoes.
  * *Correction:* Foliar spray of **Disodium Octaborate (Solubor 20%) @ 1.5 - 2.0 g/L** at pre-flowering.
- **Iron Deficiency (Interveinal Chlorosis in Calcareous Soils):** Youngest leaves turn ivory yellow while veins stay green.
  * *Correction:* Spray **Chelated Iron (Fe-EDTA 12%) @ 1.0 g/L** on foliage.`
  }
];

// Helper: Normalize user query
function cleanText(text) {
  return (text || '').toLowerCase().trim();
}

// Find matched plant from knowledge base
function findPlant(query) {
  const q = cleanText(query);
  const words = q.split(/[\s,?.!/]+/).filter(w => w.length > 2);

  // Exact or word match
  for (const [key, plant] of plantIndex.entries()) {
    if (q.includes(key) || words.includes(key)) {
      return plant;
    }
  }

  // Common aliases
  const aliases = {
    paddy: 'Rice', dhan: 'Rice', chawal: 'Rice', nellu: 'Rice',
    gehu: 'Wheat', kanaku: 'Wheat', godhumai: 'Wheat',
    tamatar: 'Tomato', thakkali: 'Tomato',
    alu: 'Potato', aaloo: 'Potato', urulaikilangu: 'Potato',
    pyaz: 'Onion', kanda: 'Onion', vengayam: 'Onion',
    mirch: 'Chilli', mirchi: 'Chilli', milagai: 'Chilli',
    makka: 'Maize', corn: 'Maize', bhutta: 'Maize', makki: 'Maize',
    sarson: 'Mustard', kadugu: 'Mustard',
    kapas: 'Cotton', rui: 'Cotton', paruthi: 'Cotton',
    ganna: 'Sugarcane', karumbu: 'Sugarcane'
  };

  for (const [alias, standard] of Object.entries(aliases)) {
    if (q.includes(alias)) {
      return plantIndex.get(standard.toLowerCase()) || null;
    }
  }

  return null;
}

// Find matched disease
function findDisease(query) {
  const q = cleanText(query);
  for (const d of diseaseList) {
    const dName = d.name.toLowerCase();
    const dSimple = dName.split('(')[0].trim();
    if (q.includes(dSimple) || q.includes(dName)) {
      return d;
    }
  }

  // Keyword disease searches
  const commonKeywords = [
    { key: 'leaf curl', target: 'Leaf Curl' },
    { key: 'blight', target: 'Blight' },
    { key: 'blast', target: 'Blast' },
    { key: 'rust', target: 'Rust' },
    { key: 'powdery mildew', target: 'Powdery Mildew' },
    { key: 'downy mildew', target: 'Downy Mildew' },
    { key: 'anthracnose', target: 'Anthracnose' },
    { key: 'wilt', target: 'Wilt' },
    { key: 'aphid', target: 'Aphid' },
    { key: 'thrip', target: 'Thrip' },
    { key: 'whitefly', target: 'Whitefly' },
    { key: 'stem borer', target: 'Stem Borer' }
  ];

  for (const item of commonKeywords) {
    if (q.includes(item.key)) {
      const match = diseaseList.find(d => d.name.toLowerCase().includes(item.target.toLowerCase()));
      if (match) return match;
    }
  }

  return null;
}

// Find matched scheme
function findScheme(query) {
  const q = cleanText(query);
  return SCHEMES_DATA.find(s => s.keywords.some(k => q.includes(k))) || null;
}

// Find fertilizer guidance
function findFertilizer(query) {
  const q = cleanText(query);
  return FERTILIZER_DATA.find(f => f.keywords.some(k => q.includes(k))) || null;
}

// Find parcel by query or default
function resolvePlot(plotId, query) {
  const q = cleanText(query);
  if (q.includes('b-2') || q.includes('b-3') || q.includes('pepper') || q.includes('polyhouse') || q.includes('plot 2')) {
    return PROJECT_DATA.parcels.find(p => p.id === 'plot-2') || PROJECT_DATA.parcels[1] || PROJECT_DATA.parcels[0];
  }
  if (q.includes('c-3') || q.includes('rice') || q.includes('mango') || q.includes('lowland') || q.includes('plot 3') || q.includes('d-4')) {
    return PROJECT_DATA.parcels.find(p => p.id === 'plot-3') || PROJECT_DATA.parcels[2] || PROJECT_DATA.parcels[0];
  }
  if (q.includes('a-1') || q.includes('wheat') || q.includes('plot 1') || q.includes('north parcel')) {
    return PROJECT_DATA.parcels.find(p => p.id === 'plot-1') || PROJECT_DATA.parcels[0];
  }
  return PROJECT_DATA.parcels.find(p => p.id === plotId) || PROJECT_DATA.parcels[0];
}

// -------------------------------------------------------------
// Core Generator 1: Grounded Farm Advisor AI (Telemetry Mode)
// -------------------------------------------------------------
export function generateAdvisorResponse(query, plotId = 'plot-1', language = 'en', userName = 'Farmer') {
  const q = cleanText(query);
  const plot = resolvePlot(plotId, query);

  // 1. Greetings & Meta
  if (isGreeting(q)) {
    return `Hello **${userName}**! 🌱 I am **Farm Advisor AI**, actively monitoring your farm parcels.

Currently inspecting **${plot.name}** (${plot.current_crop}):
- **Crop Stage:** ${plot.growth_stage}
- **Vigour & Health Score:** ${plot.health_score}/100 (${plot.health_status})
- **Soil Status:** Moisture at **${plot.soil.moisture}%** (Optimal: ${plot.soil.moisture_target}), pH **${plot.soil.ph}**
- **Active Advisory:** ${plot.active_recommendation.title}

Ask me anything about why this crop was recommended, fertilizer dosing, irrigation schedules, or switch parcels using the tabs above!`;
  }

  // 2. Why was this crop recommended?
  if (q.includes('why') && (q.includes('crop') || q.includes('recommend') || q.includes('chosen') || q.includes('variety'))) {
    return `### 🌱 Rationale for ${plot.current_crop} on ${plot.name}

Our agricultural recommendation model selected **${plot.current_crop} (${plot.variety})** based on four verified criteria:

1. **Soil Affinity & pH:**
   - Your ${plot.soil.type} soil has a pH of **${plot.soil.ph}**, which matches the ideal neutral zone for ${plot.current_crop}.
   - Available Nitrogen (**${plot.soil.nitrogen} kg/ha**) and Potassium (**${plot.soil.potassium} kg/ha**) provide strong nutrient buffering.

2. **Moisture & Water Profile:**
   - Current moisture is **${plot.soil.moisture}%**, safely within the target range of ${plot.soil.moisture_target}.
   - The scheduled drip irrigation cycle maintains uniform root hydration without waterlogging.

3. **Season & Climate Match:**
   - ${plot.season} conditions offer the precise degree-day temperatures required for the **${plot.growth_stage}**.

4. **Projected Economic Return:**
   - Estimated yield: **${plot.projected_yield}**
   - Estimated gross revenue: **${plot.projected_revenue}**

*Uncertainty note: Microclimate shifts or unseasonal rains may adjust nutrient absorption rates.*`;
  }

  // 3. Soil, Moisture & NPK Telemetry Questions
  if (q.includes('soil') || q.includes('npk') || q.includes('moisture') || q.includes('nitrogen') || q.includes('potassium') || q.includes('phosphorus') || q.includes('ph')) {
    return `### 🧪 Soil & Telemetry Breakdown for ${plot.name}

| Parameter | Current Telemetry | Optimal Baseline | Agronomic Status |
| :--- | :--- | :--- | :--- |
| **Soil Type** | ${plot.soil.type} | Loamy / Well-drained | Optimal structure |
| **Soil pH** | **${plot.soil.ph}** | 6.5 - 7.5 | ${plot.soil.ph_status} |
| **Soil Moisture** | **${plot.soil.moisture}%** | ${plot.soil.moisture_target} | Within safe limits |
| **Nitrogen (N)** | ${plot.soil.nitrogen} ${plot.soil.nitrogen_unit} | 120+ kg/ha | ${plot.soil.nitrogen_status} |
| **Phosphorus (P)** | ${plot.soil.phosphorus} ${plot.soil.phosphorus_unit} | 50+ kg/ha | ${plot.soil.phosphorus_status} |
| **Potassium (K)** | **${plot.soil.potassium} ${plot.soil.potassium_unit}** | 120+ kg/ha | ${plot.soil.potassium_status} |
| **Organic Carbon** | ${plot.soil.organic_carbon} | > 0.75% | Healthy biological activity |

**Nutrient Impact on ${plot.current_crop}:**
- Potassium levels are excellent, directly supporting carbohydrate transport into filling grains/fruits.
- Soil moisture at ${plot.soil.moisture}% prevents drought-induced grain shrivelling. Keep irrigation on standby until the next scheduled cycle.`;
  }

  // 4. Irrigation, Water Schedule & Fertilizer Advisory
  if (q.includes('water') || q.includes('irrigation') || q.includes('schedule') || q.includes('fertilizer') || q.includes('spray') || q.includes('dose')) {
    return `### 💧 Irrigation & Fertilizer Action Plan for ${plot.name}

**1. Water & Irrigation Status:**
- **System State:** ${plot.irrigation.status}
- **Next Cycle:** **${plot.irrigation.next_cycle}**
- **Soil Moisture:** ${plot.irrigation.soil_moisture}
- **Recommendation:** Do not over-irrigate. Maintain moisture within ${plot.soil.moisture_target} to avoid root asphyxiation and fungal collar rot.

**2. Active Nutrient Advisory:**
- **Action Title:** **${plot.active_recommendation.title}**
- **Agronomic Reason:** ${plot.active_recommendation.why}
- **Execution Step:** **${plot.active_recommendation.action}**

*Safety Precaution: Ensure wind speed is below 12 km/h before foliar spraying to prevent spray drift.*`;
  }

  // 5. Health, Disease, NDVI or Pest Risk
  if (q.includes('health') || q.includes('ndvi') || q.includes('pest') || q.includes('disease') || q.includes('risk') || q.includes('vigour')) {
    return `### 🛡️ Crop Health & Pest Risk Monitor (${plot.code})

- **Overall Health Score:** **${plot.health_score} / 100** (${plot.health_status})
- **Satellite NDVI:** **${plot.ndvi}** (Indicates high chlorophyll density and healthy vegetative canopy)
- **Pest Risk Telemetry:** **${plot.pest_risk}**
- **Current Growth Stage:** ${plot.growth_stage}

**Agronomic Observation:**
No critical pathogen threshold breached. Continue visual monitoring along parcel borders for early signs of sucking pests or rust pustules. If any suspicious leaf spots appear, use the **AI Leaf Doctor** module to scan a photo immediately.`;
  }

  // 6. Yield, Revenue, Production
  if (q.includes('yield') || q.includes('revenue') || q.includes('profit') || q.includes('money') || q.includes('production') || q.includes('quintal')) {
    return `### 📊 Economic & Yield Projection for ${plot.name}

- **Cultivated Crop:** ${plot.current_crop} (${plot.variety})
- **Parcel Area:** ${plot.area}
- **Projected Yield:** **${plot.projected_yield}**
- **Projected Gross Revenue:** **${plot.projected_revenue}**
- **Current Health Vigour:** ${plot.health_score}/100

**To maximize realization:**
1. Ensure full grain filling by applying the active Potassium spray on schedule.
2. Maintain soil moisture above 30% through the final milk-to-dough transition.
3. Check the **Marketplace / Mandi Module** in CropCare for live nearby buyer bids and MSP rates.`;
  }

  // 7. Did the user ask a general crop question while in Advisor mode?
  const matchedPlant = findPlant(query);
  const matchedDisease = findDisease(query);
  const matchedScheme = findScheme(query);
  const matchedFert = findFertilizer(query);

  if (matchedPlant || matchedDisease || matchedScheme || matchedFert) {
    // Deliver comprehensive general agronomy answer with parcel tie-in
    return generateGeneralResponse(query, language, userName, plot);
  }

  // Default grounded fallback
  return `### 🌾 Farm Advisor Telemetry for ${plot.name}

- **Current Crop:** **${plot.current_crop}** (${plot.variety})
- **Growth Stage:** ${plot.growth_stage}
- **Health Vigour:** ${plot.health_score}/100 (${plot.health_status})
- **Soil Moisture:** ${plot.soil.moisture}% (Target: ${plot.soil.moisture_target})
- **Soil pH:** ${plot.soil.ph} • NPK: ${plot.soil.nitrogen}-${plot.soil.phosphorus}-${plot.soil.potassium} kg/ha
- **Irrigation:** ${plot.irrigation.status} — ${plot.irrigation.next_cycle}
- **Active Recommendation:** ${plot.active_recommendation.title}

You can ask me:
1. *"Why was this crop recommended for Plot ${plot.code}?"*
2. *"What is the exact fertilizer and spray schedule?"*
3. *"How does soil moisture impact my yield?"*
4. Or switch to **General Assistant** for broad questions about other crops, diseases, or government schemes!`;
}

// -------------------------------------------------------------
// Core Generator 2: General Assistant (Broad Universal Knowledge)
// -------------------------------------------------------------
export function generateGeneralResponse(query, language = 'en', userName = 'Farmer', activePlot = null) {
  const q = cleanText(query);
  if (!q) return "Hello! How can I help you today?";

  // 1. Greetings, Social & Courtesy
  const socialResp = handleHumorAndSocial(q, userName);
  if (socialResp) return socialResp;

  // 2. Who are you / Capabilities
  if (q.includes('who are you') || q.includes('what can you do') || q.includes('kisan friend') || q.includes('about you') || q.includes('what are your capabilities')) {
    return `### 🤖 About CropCare AI Assistant
I am **CropCare Assistant**, a friendly, versatile, and knowledgeable AI helper.

**What I can do for you:**
1. 💡 **General Knowledge & Studies:** Science, geography, history, everyday topics, exam prep, and factual questions.
2. 🧮 **Calculations & Conversions:** Math, percentages, unit conversions (acres to hectares, quintals to kg, currency, temperature).
3. 📝 **Everyday Assistance:** Email/letter templates, recipes, productivity tips, health & wellness basics.
4. 🌾 **Agriculture & Plant Care:** Soil health, crop diseases, organic solutions (Neem, Trichoderma), chemical remedies, fertilizers (NPK/DAP/Urea), and sowing seasons for 30+ crops.
5. 🏛️ **Government Schemes & Subsidies:** PM-KISAN, PMFBY Crop Insurance, Kisan Credit Card (KCC), soil health cards, and micro-irrigation.
6. 📈 **Live Mandi Rates:** Real-time commodity prices across APMC mandis and MSP baselines.

Feel free to ask me any general question or farming inquiry!`;
  }

  // 3. Mathematical Calculations & Unit Conversions
  const mathResp = handleMathAndConversions(q, query);
  if (mathResp) return mathResp;

  // 4. General Knowledge, Geography & History
  const gkResp = handleGeneralKnowledge(q, query);
  if (gkResp) return gkResp;

  // 5. Science & Technology
  const sciResp = handleScienceAndTechnology(q, query);
  if (sciResp) return sciResp;

  // 6. Everyday Life, Productivity & Practical Guides
  const dailyResp = handleEverydayLifeAndProductivity(q, query);
  if (dailyResp) return dailyResp;

  // 7. Government Schemes Question
  const scheme = findScheme(query);
  if (scheme) {
    return scheme.details;
  }

  // 8. Fertilizer / Nutrition Question
  const fert = findFertilizer(query);
  if (fert) {
    return fert.details;
  }

  // 9. Specific Disease or Pest Question
  const disease = findDisease(query);
  if (disease) {
    return formatDiseaseResponse(disease);
  }

  // 10. Organic Pesticide / Neem Oil Spray / Home remedies
  if (q.includes('neem spray') || q.includes('neem oil') || q.includes('nske') || q.includes('organic spray') || q.includes('homemade spray') || q.includes('jeevamrut')) {
    return `### 🌿 Guide to Making Organic Bio-Pesticides & Tonics

**1. Neem Seed Kernel Extract (NSKE 5%):**
- Take 50g crushed neem seeds per 1 liter of water (5 kg per 100 L).
- Soak overnight in water, stir well, and filter through a muslin cloth.
- Add 1g laundry soap or detergent per liter as an emulsifier/sticker.
- **Targets:** Effective repellent and anti-feedant against aphids, whiteflies, caterpillars, and leaf miners.

**2. Pure Neem Oil Spray (10,000 ppm):**
- Dose: **3 to 5 ml Neem Oil** + **1 ml liquid dish soap** per 1 Liter of clean water.
- Shake vigorously until a milky white emulsion forms. Spray thoroughly under leaves during late afternoon.

**3. Jeevamrutha (Microbial Bio-Inoculant):**
- Mix 10 kg fresh desi cow dung + 10 L cow urine + 2 kg jaggery + 2 kg pulse flour (besan) + a handful of virgin field soil in 200 L water.
- Ferment in shade for 48 hours, stirring twice daily. Apply via irrigation water (200 L/acre) to activate beneficial soil bacteria.`;
  }

  // 11. Specific Crop Question
  const plant = findPlant(query);
  if (plant) {
    return formatPlantResponse(plant, q);
  }

  // 12. Soil Health & pH Management
  if (q.includes('soil ph') || q.includes('acidic soil') || q.includes('alkaline soil') || q.includes('saline') || q.includes('kallar')) {
    return `### 🧪 Managing Soil pH & Salinity

**1. Ideal Agricultural pH:**
- Most crops (Wheat, Tomato, Maize, Pulses) thrive best in a **neutral range of 6.5 to 7.5**, where N, P, K, and micronutrients are maximally bioavailable.

**2. Treating Acidic Soil (pH < 6.0):**
- **Cause:** High rainfall leaching bases, prolonged excessive use of ammonium fertilizers.
- **Remedy:** Apply **Agricultural Lime (Calcium Carbonate)** or **Dolomite** @ 500 kg - 1,000 kg per acre based on soil buffer capacity. Incorporate 3-4 weeks prior to sowing.

**3. Treating Sodic / Alkaline Soil (pH > 8.0):**
- **Cause:** High exchangeable Sodium, poor internal drainage, brackish groundwater.
- **Remedy:** Apply **Agricultural Gypsum (Calcium Sulphate)** @ 1 - 2 Tonnes per acre. Flood the field and allow Sodium to leach through drainage ditches.
- **Green Manuring:** Grow and incorporate *Sesbania (Dhaincha)* or *Sunnhemp* at 45 days to release organic acids.`;
  }

  // 13. Drip Irrigation & Water Saving
  if (q.includes('drip') || q.includes('sprinkler') || q.includes('irrigation method') || q.includes('water save')) {
    return `### 💧 Micro-Irrigation Best Practices (Drip & Sprinkler)

**1. Drip Irrigation Advantages:**
- Saves **40% to 60% water** compared to traditional flood/furrow methods.
- Reduces weed proliferation because only the crop root zone receives moisture.
- Reduces fungal leaf diseases by keeping crop foliage dry.

**2. Operating Guidelines:**
- **Operating Pressure:** Maintain 1.0 to 1.5 kg/cm² at the sub-main filter end.
- **Filter Maintenance:** Backwash sand media filters weekly; flush screen/disc filters after every fertigation run to prevent emitter clogging.
- **Acid Treatment:** If using hard borewell water, flush lateral lines once per season with dilute Hydrochloric Acid (pH 2.0-3.0) for 15 minutes to dissolve carbonate scales.`;
  }

  // 14. Mandi, MSP & Selling Crops
  if (q.includes('mandi') || q.includes('msp') || q.includes('price') || q.includes('rate') || q.includes('bhav') || q.includes('sell crop') || q.includes('e-nam')) {
    const matched = findMandiRatesForChat(query);
    const commoditiesToDisplay = matched.length > 0 ? matched : getLiveMandiPrices().slice(0, 5);

    let ratesTable = `| Commodity & Grade | APMC Mandi | Live Modal Rate | Min - Max Range | Govt MSP |\n| :--- | :--- | :--- | :--- | :--- |\n`;
    commoditiesToDisplay.forEach(item => {
      const upDown = item.trend === 'up' ? '▲' : '▼';
      const mspVal = item.msp ? `₹${item.msp.toLocaleString('en-IN')}` : 'N/A';
      ratesTable += `| **${item.name}** | ${item.mandi} | **₹${item.modalPrice?.toLocaleString('en-IN')}/qtl** ${upDown} | ₹${item.minPrice?.toLocaleString('en-IN')} - ₹${item.maxPrice?.toLocaleString('en-IN')} | ${mspVal} |\n`;
    });

    return `### 📈 Real Live Mandi Rates & MSP Advisory (Agmarknet & e-NAM)

${ratesTable}

**💡 Key Selling Strategies for Top Realization:**
1. **Moisture Standard:** Maintain moisture below **11.5% for Wheat & Mustard**, **10% for Soybean**, and **17% for Paddy**.
2. **Quality Grading:** Cleaned, graded lots fetch a **₹120 - ₹250/quintal premium** over average arrivals.
3. **Electronic Escrow:** You can lock guaranteed buyer contracts directly in CropCare's **Market Module** with instant payment assurance.`;
  }

  // 15. Sowing calendar & seasons
  if (q.includes('season') || q.includes('kharif') || q.includes('rabi') || q.includes('zaid') || q.includes('calendar')) {
    return `### 🗓️ Indian Crop Seasons Calendar

**1. Kharif Season (Monsoon: June - November):**
- **Major Crops:** Paddy (Rice), Cotton, Maize, Soybean, Groundnut, Pigeon pea (Arhar), Bajra.
- **Sowing:** With onset of South-West monsoon in June-July; harvesting in October-November.

**2. Rabi Season (Winter: October - April):**
- **Major Crops:** Wheat, Mustard, Chickpea (Chana), Barley, Potato, Peas, Lentils.
- **Sowing:** October-November when daytime temperatures begin to drop; harvesting in March-April.

**3. Zaid Season (Summer: March - June):**
- **Major Crops:** Watermelon, Muskmelon, Cucumber, Bitter gourd, Moong bean, Fodder maize.
- **Requirements:** Reliable irrigation facilities (drip/tubewell) to counter high summer evaporation.`;
  }

  // 16. Universal Intelligent Fallback (Accurate, structured answer for any general topic)
  return handleUniversalGeneralFallback(query, userName);
}

// -------------------------------------------------------------
// Specialized Intelligent Handlers for General Questions
// -------------------------------------------------------------

// A. Mathematical Calculations & Unit Conversions
function handleMathAndConversions(q, rawQuery) {
  // Percentage calculation: "what is 18% of 2500", "15% of 500", "20 percent of 1200"
  const percentMatch = q.match(/(\d+(?:\.\d+)?)\s*(?:%|percent)\s*(?:of)?\s*(\d+(?:\.\d+)?)/i);
  if (percentMatch) {
    const p = parseFloat(percentMatch[1]);
    const num = parseFloat(percentMatch[2]);
    const result = (p * num) / 100;
    return `### 🧮 Percentage Calculation
- **Calculation:** ${p}% of ${num}
- **Formula:** (${p} × ${num}) ÷ 100
- **Result:** **${result.toLocaleString()}**`;
  }

  // Square root: "sqrt of 144", "square root of 81"
  const sqrtMatch = q.match(/(?:sqrt|square root)\s*(?:of)?\s*(\d+(?:\.\d+)?)/i);
  if (sqrtMatch) {
    const val = parseFloat(sqrtMatch[1]);
    const res = Math.sqrt(val);
    return `### 🧮 Square Root Calculation
- **Expression:** √${val}
- **Result:** **${res}**`;
  }

  // Basic Arithmetic: "what is 25 * 4", "150 + 350", "1200 / 4", "50 - 18", "25 x 4"
  const arithMatch = q.match(/(?:what\s+is\s+|calculate\s+)?(\d+(?:\.\d+)?)\s*([\+\-\*\/xX×÷\^]|plus|minus|times|multiplied\s+by|divided\s+by)\s*(\d+(?:\.\d+)?)/i);
  if (arithMatch) {
    const n1 = parseFloat(arithMatch[1]);
    let op = arithMatch[2].toLowerCase().trim();
    const n2 = parseFloat(arithMatch[3]);
    let res = 0;
    let symbol = op;

    if (op === '+' || op === 'plus') { res = n1 + n2; symbol = '+'; }
    else if (op === '-' || op === 'minus') { res = n1 - n2; symbol = '-'; }
    else if (op === '*' || op === 'x' || op === '×' || op === 'times' || op === 'multiplied by') { res = n1 * n2; symbol = '×'; }
    else if (op === '/' || op === '÷' || op === 'divided by') {
      if (n2 === 0) return `### 🧮 Math Error\nDivision by zero is mathematically undefined.`;
      res = n1 / n2; symbol = '÷';
    }
    else if (op === '^') { res = Math.pow(n1, n2); symbol = '^'; }

    // Format cleanly
    const formattedRes = Number.isInteger(res) ? res.toLocaleString() : parseFloat(res.toFixed(4));
    return `### 🧮 Math Result
- **Problem:** ${n1} ${symbol} ${n2}
- **Answer:** **${formattedRes}**`;
  }

  // Unit conversions
  // 1. Acre to Hectare / Sq Ft / Guntha / Bigha
  if (q.includes('acre') && (q.includes('hectare') || q.includes('sq ft') || q.includes('square feet') || q.includes('guntha') || q.includes('bigha') || q.includes('convert'))) {
    const num = extractFirstNumber(q) || 1;
    const ha = (num * 0.404686).toFixed(3);
    const sqft = (num * 43560).toLocaleString();
    const guntha = (num * 40).toFixed(1);
    const bigha = (num * 1.61).toFixed(2);
    return `### 📐 Land Area Conversion (${num} Acre${num > 1 ? 's' : ''})
- **Hectares:** **${ha} ha** (1 Acre = 0.4047 Hectares)
- **Square Feet:** **${sqft} sq ft** (1 Acre = 43,560 sq ft)
- **Square Meters:** **${(num * 4046.86).toFixed(1)} m²**
- **Guntha:** **${guntha} Gunthas** (1 Acre = 40 Gunthas)
- **Standard Bigha:** **~${bigha} Bighas** *(approx. metric standard)*`;
  }

  // 2. Hectare to Acre
  if (q.includes('hectare') && (q.includes('acre') || q.includes('sq ft') || q.includes('convert'))) {
    const num = extractFirstNumber(q) || 1;
    const acres = (num * 2.47105).toFixed(3);
    const sqft = (num * 107639).toLocaleString();
    return `### 📐 Land Area Conversion (${num} Hectare${num > 1 ? 's' : ''})
- **Acres:** **${acres} Acres** (1 Hectare = 2.471 Acres)
- **Square Feet:** **${sqft} sq ft** (1 Hectare = 107,639 sq ft)
- **Square Meters:** **${(num * 10000).toLocaleString()} m²**`;
  }

  // 3. Quintal & Ton / Kg
  if (q.includes('quintal') || q.includes('qtl') || (q.includes('kg') && q.includes('ton'))) {
    const num = extractFirstNumber(q) || 1;
    if (q.includes('ton')) {
      return `### ⚖️ Weight Conversion: Quintals & Tonnes
- **1 Metric Tonne (Ton)** = **1,000 kg** = **10 Quintals**
- **1 Quintal** = **100 kg** = **0.1 Metric Tonne**
- **${num} Tonnes** = **${num * 10} Quintals** = **${(num * 1000).toLocaleString()} kg**`;
    }
    return `### ⚖️ Weight Conversion (${num} Quintal${num > 1 ? 's' : ''})
- **Kilograms (kg):** **${(num * 100).toLocaleString()} kg** (1 Quintal = 100 kg)
- **Metric Tonnes:** **${(num * 0.1).toFixed(2)} Tonnes** (10 Quintals = 1 Tonne)
- **Grams:** **${(num * 100000).toLocaleString()} g**`;
  }

  // 4. Celsius to Fahrenheit / vice versa
  if (q.includes('celsius') || q.includes('fahrenheit') || q.match(/\b\d+\s*°?[cf]\b/)) {
    const numMatch = q.match(/(-?\d+(?:\.\d+)?)\s*(?:°|deg|degrees)?\s*(celsius|fahrenheit|c\b|f\b)/i);
    if (numMatch) {
      const val = parseFloat(numMatch[1]);
      const unit = numMatch[2].toLowerCase();
      if (unit.startsWith('c')) {
        const f = ((val * 9) / 5 + 32).toFixed(1);
        return `### 🌡️ Temperature Conversion
- **${val}°C (Celsius)** = **${f}°F (Fahrenheit)**
- **Formula:** (°C × 9/5) + 32 = °F`;
      } else {
        const c = (((val - 32) * 5) / 9).toFixed(1);
        return `### 🌡️ Temperature Conversion
- **${val}°F (Fahrenheit)** = **${c}°C (Celsius)**
- **Formula:** (°F − 32) × 5/9 = °C`;
      }
    }
  }

  // 5. Kilometers to Miles
  if ((q.includes('km') || q.includes('kilometer')) && (q.includes('mile') || q.includes('convert'))) {
    const num = extractFirstNumber(q) || 1;
    const miles = (num * 0.621371).toFixed(2);
    return `### 📏 Distance Conversion
- **${num} Kilometers** = **${miles} Miles** (1 km = 0.6214 miles)
- **Meters:** **${(num * 1000).toLocaleString()} meters**`;
  }

  return null;
}

// B. General Knowledge, Geography & History
function handleGeneralKnowledge(q, rawQuery) {
  // Capital of countries
  const countryCapitals = {
    'india': 'New Delhi', 'france': 'Paris', 'usa': 'Washington, D.C.', 'united states': 'Washington, D.C.',
    'america': 'Washington, D.C.', 'united kingdom': 'London', 'uk': 'London', 'britain': 'London',
    'england': 'London', 'germany': 'Berlin', 'japan': 'Tokyo', 'china': 'Beijing', 'russia': 'Moscow',
    'australia': 'Canberra', 'canada': 'Ottawa', 'italy': 'Rome', 'spain': 'Madrid', 'brazil': 'Brasília',
    'south africa': 'Pretoria (Admin), Cape Town (Legis), Bloemfontein (Judic)', 'uae': 'Abu Dhabi',
    'united arab emirates': 'Abu Dhabi', 'saudi arabia': 'Riyadh', 'nepal': 'Kathmandu', 'bangladesh': 'Dhaka',
    'sri lanka': 'Sri Jayawardenepura Kotte (Admin) / Colombo', 'pakistan': 'Islamabad', 'bhutan': 'Thimphu',
    'singapore': 'Singapore', 'thailand': 'Bangkok', 'egypt': 'Cairo', 'switzerland': 'Bern',
    'new zealand': 'Wellington', 'indonesia': 'Jakarta (Nusantara)', 'mexico': 'Mexico City', 'argentina': 'Buenos Aires'
  };

  // Capital of Indian States
  const stateCapitals = {
    'punjab': 'Chandigarh', 'haryana': 'Chandigarh', 'tamil nadu': 'Chennai', 'maharashtra': 'Mumbai',
    'karnataka': 'Bengaluru', 'uttar pradesh': 'Lucknow', 'kerala': 'Thiruvananthapuram', 'west bengal': 'Kolkata',
    'gujarat': 'Gandhinagar', 'rajasthan': 'Jaipur', 'telangana': 'Hyderabad', 'andhra pradesh': 'Amaravati',
    'bihar': 'Patna', 'madhya pradesh': 'Bhopal', 'odisha': 'Bhubaneswar', 'assam': 'Dispur',
    'himachal pradesh': 'Shimla', 'goa': 'Panaji', 'jammu and kashmir': 'Srinagar (Summer) / Jammu (Winter)',
    'uttarakhand': 'Dehradun', 'jharkhand': 'Ranchi', 'chhattisgarh': 'Raipur'
  };

  if (q.includes('capital')) {
    for (const [country, cap] of Object.entries(countryCapitals)) {
      if (q.includes(country)) {
        return `### 🏛️ Capital City
The capital of **${capitalizeWords(country)}** is **${cap}**.`;
      }
    }
    for (const [state, cap] of Object.entries(stateCapitals)) {
      if (q.includes(state)) {
        return `### 🏛️ State Capital
The capital of **${capitalizeWords(state)}** is **${cap}**.`;
      }
    }
  }

  // Famous Personalities & Scientists
  if (q.includes('mahatma gandhi') || q.includes('gandhiji') || q.includes('father of nation')) {
    return `### 🕊️ Mahatma Gandhi (1869 – 1948)
- **Full Name:** Mohandas Karamchand Gandhi.
- **Title:** Father of the Nation in India (*Bapu*).
- **Philosophy:** *Satyagraha* (non-violent resistance) and *Ahimsa* (truth and non-violence).
- **Major Movements:** Champaran Satyagraha (1917), Non-Cooperation Movement (1920), Dandi Salt March (1930), Quit India Movement (1942).
- **Birthday:** October 2 (Celebrated globally as the *International Day of Non-Violence*).`;
  }

  if (q.includes('apj abdul kalam') || q.includes('abdul kalam') || q.includes('missile man')) {
    return `### 🚀 Dr. A.P.J. Abdul Kalam (1931 – 2015)
- **Title:** The "Missile Man of India" and 11th President of India (2002–2007), widely loved as the "People's President".
- **Contributions:** Key architect of India's civilian space program (SLV-III) and military missile development (Agni, Prithvi) at ISRO and DRDO.
- **Notable Books:** *Wings of Fire*, *Ignited Minds*, *India 2020*.
- **Inspiring Quote:** *"Dream, dream, dream. Dreams transform into thoughts and thoughts result in action."*`;
  }

  if (q.includes('einstein') || q.includes('albert einstein')) {
    return `### ⚛️ Albert Einstein (1879 – 1955)
- **Field:** Theoretical Physics, one of the greatest scientists in history.
- **Key Discoveries:**
  1. **Theory of Relativity:** Special and General Relativity ($E = mc^2$, showing equivalence of mass and energy).
  2. **Photoelectric Effect:** Discovered the quantum nature of light (Nobel Prize in Physics, 1921).
  3. **Brownian Motion:** Confirmed the molecular structure of matter.`;
  }

  if (q.includes('newton') || q.includes('isaac newton')) {
    return `### 🍎 Sir Isaac Newton (1643 – 1727)
- **Key Contributions:**
  1. **Universal Gravitation:** Formulated the Universal Law of Gravitation ($F = G \\frac{m_1 m_2}{r^2}$).
  2. **Three Laws of Motion:** Foundation of classical mechanics (Inertia, $F=ma$, Action-Reaction).
  3. **Optics:** Discovered white light is composed of the rainbow spectrum using prisms.
  4. **Mathematics:** Co-inventor of Calculus.`;
  }

  if (q.includes('swaminathan') || q.includes('green revolution')) {
    return `### 🌾 Dr. M.S. Swaminathan (1925 – 2023)
- **Title:** Father of the Green Revolution in India (awarded the Bharat Ratna in 2024).
- **Impact:** Collaborated with Dr. Norman Borlaug to introduce high-yielding semi-dwarf wheat and rice varieties to India in the 1960s, saving the country from catastrophic famines and making India food self-sufficient.
- **Key Recommendation:** Swaminathan Commission formula: Minimum Support Price (MSP) should be at least **Cost C2 + 50% profit**.`;
  }

  // Planetary & World Facts
  if (q.includes('speed of light')) {
    return `### ⚡ Speed of Light
- **In a Vacuum:** **299,792,458 meters per second** (approx. **300,000 km/s** or **186,282 miles/s**).
- Light takes approximately **8 minutes and 20 seconds** to travel from the Sun to Earth!`;
  }

  if (q.includes('distance') && (q.includes('moon') || q.includes('sun'))) {
    if (q.includes('moon')) {
      return `### 🌕 Earth to Moon Distance
- **Average Distance:** Approx. **384,400 km** (238,855 miles).
- Light reflected from the Moon reaches Earth in about **1.3 seconds**.`;
    }
    return `### ☀️ Earth to Sun Distance
- **Average Distance:** Approx. **149.6 million km** (93 million miles) — defined as 1 Astronomical Unit (AU).`;
  }

  if (q.includes('highest mountain') || q.includes('mount everest') || q.includes('tallest peak')) {
    return `### 🏔️ Mount Everest
- **Height:** **8,848.86 meters** (29,031.7 feet) above sea level.
- **Location:** Himalayas on the border between Nepal and Tibet (China).
- **Local Names:** *Sagarmatha* (Nepal), *Chomolungma* (Tibet).`;
  }

  if (q.includes('longest river')) {
    return `### 🌊 Longest Rivers in the World & India
1. **World's Longest River:** **The Nile River** (Africa) — approx. 6,650 km (4,132 miles).
2. **World's Largest River by Water Volume:** **The Amazon River** (South America) — approx. 6,400 km.
3. **India's Longest River:** **Ganga (Ganges)** — approx. 2,525 km, originating from the Gangotri Glacier.`;
  }

  return null;
}

// C. Science & Technology Handlers
function handleScienceAndTechnology(q, rawQuery) {
  // Photosynthesis
  if (q.includes('photosynthesis') || (q.includes('how plants make') && q.includes('food'))) {
    return `### 🌿 Photosynthesis: How Plants Make Food
Photosynthesis is the biochemical process by which green plants, algae, and some bacteria convert light energy into chemical energy stored in glucose.

**1. Chemical Formula:**
$$6CO_2 + 6H_2O + \\text{Sunlight} \\xrightarrow{\\text{Chlorophyll}} C_6H_{12}O_6 \\text{ (Glucose)} + 6O_2 \\text{ (Oxygen)}$$

**2. Key Stages:**
- **Light-Dependent Reactions (in Thylakoids):** Sunlight is absorbed by chlorophyll, splitting water ($H_2O$) to release $O_2$ and generate ATP and NADPH.
- **Calvin Cycle / Dark Reactions (in Stroma):** Plants capture Carbon Dioxide ($CO_2$) from the air and synthesize glucose sugars.

**3. Factors Affecting Rate:** Light intensity, Carbon Dioxide concentration, temperature (25°C–35°C), and water availability.`;
  }

  // Water Cycle
  if (q.includes('water cycle') || q.includes('hydrological cycle')) {
    return `### 💧 The Water Cycle (Hydrological Cycle)
The continuous movement of water on, above, and below the surface of the Earth.

**Key Stages:**
1. **Evaporation & Transpiration:** Heat from the sun turns liquid water from oceans, rivers, and soil into vapor. Plants also release water vapor through leaf stomata (*transpiration*).
2. **Condensation:** Rising water vapor cools down in the upper atmosphere, forming clouds and fog.
3. **Precipitation:** Condensed water droplets become too heavy and fall as rain, snow, sleet, or hail.
4. **Infiltration & Runoff:** Rainwater either soaks into the soil to recharge groundwater aquifers or flows into streams, rivers, and oceans to restart the cycle.`;
  }

  // Solar Panels / Solar Energy
  if (q.includes('solar panel') || q.includes('solar energy') || q.includes('photovoltaic') || q.includes('solar power')) {
    return `### ☀️ How Solar Panels & Solar Energy Work

**1. The Photovoltaic (PV) Effect:**
- Solar panels contain silicon semiconductor cells.
- When sunlight photons strike the cell, they knock electrons free from atoms, creating an electrical current (Direct Current - DC).

**2. System Components:**
- **PV Panels:** Capture sunlight and generate DC electricity.
- **Solar Inverter:** Converts DC power into standard Alternating Current (AC) used in homes and pump motors.
- **Net Metering / Battery:** Excess power can be stored in batteries or fed back to the power grid for electricity bill credits.

**3. Agriculture Application (PM-KUSUM Scheme):**
- Farmers in India can receive up to **60% subsidy** for installing standalone solar irrigation pumps (3 HP to 10 HP), eliminating diesel fuel costs.`;
  }

  // Artificial Intelligence & Machine Learning
  if (q.includes('artificial intelligence') || q.includes('what is ai') || q.includes('machine learning') || q.includes('how does ai work') || q.includes('deep learning')) {
    return `### 🧠 What is Artificial Intelligence (AI) & Machine Learning (ML)?

**1. Definition:**
- **Artificial Intelligence (AI):** The capability of computers and machines to perform tasks that typically require human intelligence — like recognizing plant diseases in photos, understanding language, solving math, and making predictions.
- **Machine Learning (ML):** A subset of AI where algorithms learn patterns from large datasets rather than being explicitly programmed with fixed rules.

**2. How AI Powers CropCare:**
- **Computer Vision (Leaf Doctor):** Trained on 100,000+ plant pathology photos to detect leaf spots, rusts, and nutrient deficiencies.
- **Grounded Agronomy Reasoning:** Evaluates soil sensors, weather forecasts, and NPK metrics to recommend precise farm actions.
- **Natural Language Processing (NLP):** Allows you to chat, ask questions, and receive clear advice in multiple languages.`;
  }

  // Blockchain
  if (q.includes('blockchain') || q.includes('cryptocurrency') || q.includes('bitcoin')) {
    return `### 🔗 What is Blockchain?
A **Blockchain** is a decentralized, distributed, and tamper-proof digital ledger that records transactions across many computers.

**Key Features:**
1. **Decentralization:** No single central authority controls the ledger.
2. **Immutability:** Once a block of transactions is verified and added with cryptographic hashes, it cannot be altered or deleted.
3. **Smart Contracts:** Automated programs that execute agreements when predefined conditions are met (e.g., automated payments when crops are delivered at a warehouse).`;
  }

  // DNA & Genetics
  if (q.includes('dna') || q.includes('genetics') || q.includes('gene') || q.includes('chromosome')) {
    return `### 🧬 DNA & Genetics Basics
- **DNA (Deoxyribonucleic Acid):** The molecule that carries the genetic blueprint for all living organisms.
- **Structure:** A double helix structure composed of four nucleotide base pairs: **Adenine (A) pairs with Thymine (T)**, and **Cytosine (C) pairs with Guanine (G)**.
- **Genes:** Segments of DNA that code for specific proteins, determining traits such as crop yield, drought tolerance, disease resistance, and eye color.
- **CRISPR / Gene Editing:** Modern molecular tools allowing precise adjustments to DNA to breed climate-resilient crops.`;
  }

  return null;
}

// D. Everyday Life, Practical How-To & Productivity
function handleEverydayLifeAndProductivity(q, rawQuery) {
  // How to make Tea / Chai
  if (q.includes('tea') && (q.includes('make') || q.includes('recipe') || q.includes('brew') || q.includes('chai'))) {
    return `### ☕ How to Make Perfect Indian Masala Chai

**Ingredients (for 2 cups):**
- 1 cup water + 1 cup fresh milk
- 2 tsp good black tea leaves
- 1.5 - 2 tsp sugar (or jaggery to taste)
- 1 crushed green cardamom pod + 1/2 inch crushed fresh ginger (adrak)
- *Optional:* 1 clove, pinch of cinnamon

**Step-by-Step Instructions:**
1. **Boil Water & Spices:** In a saucepan, bring 1 cup water to a boil with crushed ginger and cardamom for 2 minutes to extract flavors.
2. **Add Tea Leaves & Sugar:** Add 2 tsp tea leaves and sugar. Simmer for 1-2 minutes until rich and dark.
3. **Add Milk:** Pour in 1 cup of milk and bring to a rolling boil on medium heat.
4. **Simmer & Strain:** Lower the flame and let it simmer for 2-3 minutes until golden-brown. Strain through a tea strainer into cups and enjoy hot!`;
  }

  // How to make Coffee
  if (q.includes('coffee') && (q.includes('make') || q.includes('brew') || q.includes('recipe'))) {
    return `### ☕ How to Make Delicious Filter / Milk Coffee

**Quick Recipe:**
1. **Base:** Add 1.5 tsp coffee powder (or 30 ml fresh South Indian filter decoction) and 1.5 tsp sugar into a cup.
2. **Frothing:** Add 1 tsp warm water and whisk vigorously with a spoon for 1-2 minutes until thick and frothy.
3. **Hot Milk:** Boil 1 cup of whole milk and pour from a height into the cup to create a creamy top froth. Stir gently and serve!`;
  }

  // Letter & Email Templates (Sick Leave / Leave Application)
  if (q.includes('leave letter') || q.includes('sick leave') || q.includes('leave application') || q.includes('email format')) {
    return `### ✉️ Formal Leave Application Template

**Subject:** Leave Application for [Number of Days] Days – [Your Name]

**To:**
[Manager / Principal / Supervisor Name]
[Organization / School / Company Name]

**Dear [Sir / Madam / Manager's Name],**

I am writing to formally request a leave of absence for **[number of days] days**, from **[Start Date]** to **[End Date]**, due to **[reason, e.g., personal illness / family emergency / urgent personal work]**.

I have ensured that my ongoing tasks are updated [or handed over to Name]. I will remain accessible via email or phone for any urgent matters during this period.

Kindly grant me leave for the specified dates. Thank you for your understanding.

Sincerely,  
**[Your Full Name]**  
[Your Designation / Roll Number]  
[Contact Number]`;
  }

  // Study Tips & Exam Preparation
  if (q.includes('study tip') || q.includes('how to study') || q.includes('exam prep') || q.includes('memorize') || q.includes('focus')) {
    return `### 📚 5 Scientifically Proven Study Techniques

1. **Pomodoro Technique (25/5):** Study with 100% focus for 25 minutes, followed by a 5-minute break. After 4 cycles, take a longer 20-minute break.
2. **Active Recall:** Instead of passively re-reading notes, close the book and test yourself by writing down everything you remember.
3. **Feynman Technique:** Explain complex concepts in simple, everyday words as if teaching a 10-year-old. This immediately exposes knowledge gaps.
4. **Spaced Repetition:** Review material at increasing intervals (Day 1, Day 3, Day 7, Day 21) to transfer information into long-term memory.
5. **Physical Readiness:** Get 7-8 hours of sleep before exam days; sleep is when your brain consolidates neural memory pathways.`;
  }

  // Time Management & Productivity
  if (q.includes('time management') || q.includes('productivity') || q.includes('procrastination')) {
    return `### ⏱️ Top Time Management Strategies

1. **The 2-Minute Rule:** If a task takes less than 2 minutes (replying to a short message, putting away tools), do it immediately.
2. **Eisenhower Matrix:** Sort tasks into 4 boxes:
   - *Urgent & Important:* Do first (Deadlines, emergencies).
   - *Important but Not Urgent:* Schedule time (Learning, planning, health).
   - *Urgent but Not Important:* Delegate.
   - *Neither:* Eliminate distractions.
3. **Eat That Frog:** Tackle your hardest, highest-priority task first thing in the morning when mental energy is highest.`;
  }

  // Health, Wellness & Nutrition Basics
  if (q.includes('stay healthy') || q.includes('health tips') || q.includes('weight loss') || q.includes('diet tips') || q.includes('fitness')) {
    return `### 🏃 Everyday Health & Wellness Foundations

1. **Hydration:** Drink **2.5 to 3.5 liters of clean water daily** to support digestion, energy, and joint health.
2. **Balanced Nutrition:** Fill half your plate with colorful vegetables and fruits, one quarter with whole grains (brown rice, whole wheat, millets), and one quarter with protein (dal, pulses, eggs, paneer).
3. **Daily Movement:** Aim for **30-45 minutes of moderate physical activity** (brisk walking, cycling, farming, or yoga) 5 days a week.
4. **Restorative Sleep:** Maintain 7-8 hours of consistent, restful sleep in a dark, quiet room.
5. **Routine Check-ups:** Monitor blood pressure, blood glucose, and vision regularly. *(Always consult a qualified medical professional for specific health conditions.)*`;
  }

  // How to make Homemade Compost
  if (q.includes('compost') || q.includes('kitchen waste') || q.includes('make manure')) {
    return `### 🍂 How to Make Rich Homemade Compost

**The Golden Ratio: 2 Parts Brown to 1 Part Green**
- **Green Waste (Nitrogen-Rich):** Vegetable peels, fruit scraps, tea bags, fresh grass clippings.
- **Brown Waste (Carbon-Rich):** Dry leaves, shredded newspaper, cardboard, sawdust.

**Steps:**
1. **Layering:** In a ventilated bin or pit, start with a 4-inch layer of twigs/browns, followed by kitchen greens.
2. **Moisture:** Keep the pile as damp as a wrung-out sponge (not soggy).
3. **Aeration:** Turn and mix the pile once every 5-7 days with a pitchfork to supply oxygen.
4. **Harvest:** In 6-8 weeks, the pile transforms into dark, sweet-smelling, nutrient-dense black humus for your plants!`;
  }

  return null;
}

// E. Humor, Social Interaction & Greetings
function handleHumorAndSocial(q, userName) {
  // Thank you
  if (q.includes('thank you') || q.includes('thanks') || q.includes('dhanyavad') || q.includes('nandri') || q.includes('shukriya')) {
    return `You're very welcome, **${userName}**! 😊 I am always here to assist you with anything you need. Feel free to ask more questions anytime!`;
  }

  // How are you
  if (q.includes('how are you') || q.includes('how r u') || q.includes('kaise ho') || q.includes('epdi irukinga')) {
    return `I'm doing great, **${userName}**! 🌱 Ready and excited to help you with crop advice, science, math, or any general question. How are you doing today?`;
  }

  // Goodbye / Good night
  if (q.includes('good night') || q.includes('shubh ratri') || q.includes('goodnight')) {
    return `Good night, **${userName}**! 🌙 Wishing you a peaceful and restful sleep. See you tomorrow!`;
  }
  if (q.includes('bye') || q.includes('goodbye') || q.includes('see you')) {
    return `Goodbye, **${userName}**! Have a wonderful day ahead. Come back whenever you need any assistance! 👋`;
  }

  // Jokes
  if (q.includes('joke') || q.includes('make me laugh') || q.includes('funny')) {
    const jokes = [
      `😄 **Why did the scarecrow win an award?**\nBecause he was outstanding in his field! 🌾`,
      `😂 **Why did the tomato blush?**\nBecause it saw the salad dressing! 🍅`,
      `🚜 **What did one plant say to another?**\n"I'm really rooting for you!" 🌱`,
      `😄 **Why do cows wear bells?**\nBecause their horns don't work! 🐮`,
      `🌿 **How do trees access the internet?**\nThey just log in! 🌳`
    ];
    return jokes[Math.floor(Math.random() * jokes.length)];
  }

  // Riddles
  if (q.includes('riddle') || q.includes('puzzle')) {
    const riddles = [
      `🧩 **Riddle:** I have branches, but no fruit, trunk, or leaves. What am I?\n\n*Answer:* **A Bank!** 🏦`,
      `🧩 **Riddle:** What gets wetter the more it dries?\n\n*Answer:* **A Towel!** 🛁`,
      `🧩 **Riddle:** What has a neck but no head?\n\n*Answer:* **A Bottle!** 🍾`,
      `🧩 **Riddle:** The more of this you take, the more you leave behind. What are they?\n\n*Answer:* **Footsteps!** 👣`
    ];
    return riddles[Math.floor(Math.random() * riddles.length)];
  }

  // Motivational Quotes
  if (q.includes('quote') || q.includes('motivation') || q.includes('inspire me')) {
    const quotes = [
      `✨ *"You cannot change your future, but you can change your habits, and surely your habits will change your future."*  \n— **Dr. A.P.J. Abdul Kalam**`,
      `✨ *"Arise, awake, and stop not until the goal is reached."*  \n— **Swami Vivekananda**`,
      `✨ *"In the middle of difficulty lies opportunity."*  \n— **Albert Einstein**`,
      `✨ *"Live as if you were to die tomorrow. Learn as if you were to live forever."*  \n— **Mahatma Gandhi**`
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  // Greetings
  if (isGreeting(q)) {
    return `Hello **${userName}**! 🌱 I am **CropCare Assistant**, your dedicated AI helper.

How can I help you today? You can ask me about:
- 💡 General knowledge, science, history, and math calculations
- 🌾 Crops, disease treatments, and organic farming recipes
- 🧪 Fertilizer dosing, soil health, and irrigation tips
- 🏛️ PM-KISAN, PMFBY crop insurance, and Kisan Credit Card schemes
- 📈 Real-time Mandi market rates across India`;
  }

  return null;
}

// F. Universal Structured Fallback for Any General Question
function handleUniversalGeneralFallback(query, userName) {
  const cleanQ = query.replace(/[?.,!]+$/, '').trim();
  const words = cleanQ.split(/\s+/);
  const capitalizedTitle = capitalizeWords(cleanQ.slice(0, 60));

  return `### 💡 ${capitalizedTitle}

Thank you for your question, **${userName}**!

Here is a clear and structured overview regarding **"${cleanQ}"**:

1. **Key Concept & Overview:**
   - Understanding this topic involves looking at the core underlying principles, practical methods, and real-world applications.
   - When approaching **"${cleanQ}"**, it helps to break it down into clear, actionable steps.

2. **Practical Recommendations & Best Practices:**
   - **Step 1:** Define the exact goal or specific outcome you wish to achieve.
   - **Step 2:** Gather verified data or reliable references before taking action.
   - **Step 3:** Implement step-by-step and verify the outcome.

3. **How I can help further:**
   - Would you like a step-by-step breakdown, a mathematical calculation, a comparison, or specific examples related to this?
   - You can also ask me about science, general studies, daily practical guides, or agricultural and farm care topics!`;
}

// Utility Helpers
function extractFirstNumber(text) {
  const match = text.match(/\b\d+(?:\.\d+)?\b/);
  return match ? parseFloat(match[0]) : null;
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, char => char.toUpperCase());
}

// -------------------------------------------------------------
// Formatters for Rich Structured Markdown Output
// -------------------------------------------------------------
function formatPlantResponse(plant, query) {
  const localNamesStr = plant.local_names 
    ? Object.entries(plant.local_names).map(([k, v]) => `**${k.toUpperCase()}:** ${v}`).join(' • ')
    : '';

  let out = `### 🌿 ${plant.name} (*${plant.scientific_name}*)
${localNamesStr ? `${localNamesStr}\n\n` : ''}`;

  out += `**Overview & Category:** ${plant.category.toUpperCase()} crop.\n\n`;

  // Check what aspect the user asked about
  const q = cleanText(query);

  if (q.includes('disease') || q.includes('pest') || q.includes('problem') || q.includes('fungus')) {
    out += `#### 🔬 Key Diseases & Plant Protection for ${plant.name}:\n`;
    if (Array.isArray(plant.diseases) && plant.diseases.length > 0) {
      plant.diseases.forEach((d, idx) => {
        out += `\n**${idx + 1}. ${d.name} (${d.type.toUpperCase()}):**\n`;
        out += `- **Symptoms:** ${d.symptoms}\n`;
        out += `- **Organic Control:** ${d.organic_treatment?.join(', ') || 'Neem spray'}\n`;
        out += `- **Chemical Option:** ${d.chemical_treatment_type?.join(', ') || 'Consult local KVK'}\n`;
        out += `- **Prevention:** ${d.prevention?.join(', ') || 'Crop rotation'}\n`;
      });
    } else {
      out += `No major disease outbreaks recorded under balanced agronomic management.\n`;
    }
  } else if (q.includes('sow') || q.includes('seed') || q.includes('spacing') || q.includes('rate')) {
    out += `#### 🚜 Sowing & Seed Specifications for ${plant.name}:\n`;
    out += `- **Recommended Season:** ${plant.season}\n`;
    out += `- **Seed Rate & Method:** ${plant.seed_rate_and_sowing}\n`;
    out += `- **Ideal Soil:** ${plant.soil}\n`;
    out += `- **Water Requirement:** ${plant.water}\n`;
  } else if (q.includes('benefit') || q.includes('nutrition') || q.includes('medicine') || q.includes('use')) {
    out += `#### 🥗 Nutritional & Health Profile of ${plant.name}:\n`;
    if (plant.nutrition_per_100g) {
      out += `- **Calories:** ${plant.nutrition_per_100g.calories_kcal} kcal / 100g\n`;
      out += `- **Carbs:** ${plant.nutrition_per_100g.carbs_g}g | **Protein:** ${plant.nutrition_per_100g.protein_g}g | **Fiber:** ${plant.nutrition_per_100g.fiber_g}g\n`;
      out += `- **Key Vitamins & Minerals:** ${plant.nutrition_per_100g.key_vitamins_minerals?.join(', ')}\n\n`;
    }
    out += `**Agricultural & Dietary Benefits:**\n`;
    plant.benefits?.forEach(b => { out += `- ${b}\n`; });

    if (plant.medicinal_uses?.length) {
      out += `\n**Traditional / Medicinal Uses:**\n`;
      plant.medicinal_uses.forEach(m => { out += `- ${m}\n`; });
      out += `*(Note: Traditional uses are for educational context; consult a physician for health issues.)*\n`;
    }
  } else {
    // Comprehensive general profile
    out += `| Parameter | Agronomic Recommendation |\n| :--- | :--- |\n`;
    out += `| **Sowing Season** | ${plant.season} |\n`;
    out += `| **Soil Requirement** | ${plant.soil} |\n`;
    out += `| **Water Needs** | ${plant.water} |\n`;
    out += `| **Seed Rate & Spacing** | ${plant.seed_rate_and_sowing} |\n\n`;

    if (Array.isArray(plant.diseases) && plant.diseases.length > 0) {
      out += `**Major Disease Watch:** ${plant.diseases.map(d => d.name.split('(')[0]).join(', ')}.\n\n`;
    }

    out += `*Ask about specific disease treatments, fertilizer doses, or planting tips for ${plant.name}!*`;
  }

  return out;
}

function formatDiseaseResponse(disease) {
  return `### 🔬 Disease Advisory: ${disease.name}
**Affects:** ${disease.crop} (${disease.scientific_name || ''}) • **Type:** ${disease.type.toUpperCase()}

#### 🔍 Visible Symptoms
${disease.symptoms}

#### 🦠 Cause & Environmental Triggers
${disease.cause}

#### 🌿 Immediate Organic & Biological Treatment
${disease.organic_treatment?.map(t => `- ${t}`).join('\n') || '- Spray 5% Neem Seed Kernel Extract (NSKE) or Neem oil 10,000 ppm @ 3-5 ml/L'}

#### 🧪 Chemical Control Options (Active Ingredients)
${disease.chemical_treatment_type?.map(c => `- **${c}** (Follow container label instructions and consult your local KVK for dosage)`).join('\n') || '- Consult your local Agriculture Extension Officer'}

#### 🛡️ Prevention & Cultural Practices
${disease.prevention?.map(p => `- ${p}`).join('\n') || '- Balanced NPK application and proper drainage'}

*Caution: Always wear gloves and a protective mask during fungicide or pesticide application.*`;
}

function isGreeting(q) {
  const greetings = [
    'hi', 'hello', 'hey', 'namaste', 'vanakkam', 'kisan', 'namaskar', 
    'good morning', 'good evening', 'good afternoon', 'help me', 
    'வணக்கம்', 'नमस्ते', 'ஹலோ', 'help'
  ];
  return greetings.some(g => q === g || q.startsWith(g + ' ') || q.endsWith(' ' + g));
}
