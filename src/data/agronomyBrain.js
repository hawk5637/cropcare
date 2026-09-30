// CropCare Agronomy Brain — Advanced Agricultural Intelligence & Reasoning Engine
// Powers intelligent, contextual, and grounded responses for Farm Advisor & General Agronomy
// Operates both online (as an intelligent fallback/enhancer) and offline with zero network dependency.

import plantKnowledgeBase from './plantKnowledgeBase.json' with { type: 'json' };
import { PROJECT_DATA } from './farmAdvisorContext.js';

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
// Core Generator 2: General Agronomy Assistant (Broad Knowledge)
// -------------------------------------------------------------
export function generateGeneralResponse(query, language = 'en', userName = 'Farmer', activePlot = null) {
  const q = cleanText(query);

  // 1. Greetings & Conversational
  if (isGreeting(q)) {
    return `Hello **${userName}**! 🌱 I am **CropCare Assistant**, your dedicated digital agronomist.

I can help you with:
- 🌾 **Crop Care & Cultivation:** Sowing seasons, spacing, seed rates, and soil suitability for 30+ crops.
- 🔬 **Pest & Disease Diagnosis:** Organic remedies (Neem, Trichoderma) and targeted chemical controls.
- 🧪 **Fertilizer & NPK Dosing:** Basal DAP, top-dress Urea, and water-soluble foliar sprays (19:19:19, 00:00:50).
- 💧 **Irrigation & Water:** Drip schedules, moisture management, and drought resilience.
- 🏛️ **Government Schemes:** PM-KISAN, PMFBY Crop Insurance, Kisan Credit Card (KCC), and subsidies.
- 📈 **Mandi & Market Trends:** MSP baselines and post-harvest grain storage advice.

What crop or farm question can I assist you with today?`;
  }

  // 2. Who are you / Bot capabilities
  if (q.includes('who are you') || q.includes('what can you do') || q.includes('kisan friend') || q.includes('about you')) {
    return `### 🌾 About CropCare AI Assistant
I am an intelligent agronomy and plant pathology assistant designed to empower farmers, students, and agricultural entrepreneurs across India.

**My Core Capabilities:**
1. **Universal Botanical & Crop Expertise:** Detailed agronomic knowledge on cereals, pulses, vegetables, fruits, cash crops, and medicinal herbs.
2. **Plant Pathology & IPM (Integrated Pest Management):** Identifying fungal, bacterial, viral, and pest damages with safe biological and chemical solutions.
3. **Telemetry Integration:** In **Farm Advisor** mode, I analyze real-time parcel soil sensors, moisture targets, and growth stages.
4. **Multilingual Assistance:** You can communicate in English, Hindi (हिंदी), Tamil (தமிழ்), or everyday farming terminology.

Feel free to ask a specific question or attach a photo for examination!`;
  }

  // 3. Government Scheme Question
  const scheme = findScheme(query);
  if (scheme) {
    return scheme.details;
  }

  // 4. Fertilizer / Nutrition Question
  const fert = findFertilizer(query);
  if (fert) {
    return fert.details;
  }

  // 5. Specific Disease or Pest Question
  const disease = findDisease(query);
  if (disease) {
    return formatDiseaseResponse(disease);
  }

  // 6. Organic Pesticide / Neem Oil Spray / Home remedies
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

  // 7. Specific Crop Question
  const plant = findPlant(query);
  if (plant) {
    return formatPlantResponse(plant, q);
  }

  // B. Soil Health & pH Management
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

  // C. Drip Irrigation & Water Saving
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

  // D. Mandi, MSP & Selling Crops
  if (q.includes('mandi') || q.includes('msp') || q.includes('price') || q.includes('sell crop') || q.includes('e-nam')) {
    return `### 📈 Mandi Selling & Minimum Support Price (MSP) Advisory

**1. Key MSP Baselines (Government Procurement Rates):**
- **Wheat:** ₹2,275 - ₹2,425 / Quintal
- **Paddy (Common):** ₹2,183 - ₹2,300 / Quintal
- **Mustard / Rapeseed:** ₹5,650 / Quintal
- **Chana (Gram):** ₹5,440 / Quintal

**2. Golden Rules for Getting Top Mandi Rates:**
- **Moisture Control:** Mandi buyers dock prices heavily for high moisture. Ensure grain moisture is below **12% for Wheat/Mustard** and below **17% for Paddy**.
- **Grading & Cleaning:** Winnow and pass grain through a cleaner to remove chaff, immature grains, and weed seeds. Clean grain fetches a ₹100 - ₹200/quintal premium.
- **e-NAM Integration:** Check live prices across nearby mandis using the e-NAM app or CropCare's **Mandi Module** before dispatching your trolley.`;
  }

  // E. Sowing calendar & seasons
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

  // 8. General Agronomic Response with Contextual Suggestion
  return `### 🌾 CropCare Agronomy Advisory

Thank you for your question about **"${query}"**.

Here are verified agronomic recommendations:
1. **Soil & Root Preparation:** Ensure good soil tilth, balanced organic matter (FYM or Vermicompost @ 2-3 tonnes/acre), and verify soil pH (6.5-7.5).
2. **Nutrient Balancing:** Follow balanced NPK fertilization rather than relying solely on Urea. For flowering and fruiting crops, supplement with water-soluble foliar sprays (**19:19:19** or **00:00:50**).
3. **Preventive Plant Protection:** Spray 5% Neem Seed Kernel Extract (NSKE) or 10,000 ppm Neem Oil at 15-day intervals to repel sucking insects before they transmit viral diseases.
4. **Diagnostic Scan:** If you are seeing strange spots, yellowing, or curling on leaves, snap a close-up photo and open the **AI Leaf Doctor** module for an instant multi-parameter diagnosis!

*Feel free to ask about any specific crop (like Wheat, Rice, Tomato, Cotton), disease symptoms, or government subsidies!*`;
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
