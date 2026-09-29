// Farm Advisor AI — Grounded Project Context & Recommendation Engine
// Provides structured agronomic data, telemetry, recommendation rationale, and uncertainty guidelines

export const APP_NAME = "CropCare";

export const PROJECT_DATA = {
  app_name: "CropCare",
  description: "Intelligent agriculture platform providing crop recommendation based on soil, water, and weather data.",
  parcels: [
    {
      id: "plot-1",
      code: "A-1",
      name: "North Parcel • Plot A-1",
      area: "4.5 Acres (Total 6.5 Acres)",
      current_crop: "Sharbati Durum Wheat",
      variety: "HI-8759 (Pusa Tejas)",
      growth_stage: "Grain Filling (Day 78 / 115)",
      season: "Rabi (Oct - Mar)",
      health_score: 94,
      health_status: "Excellent Vigour",
      soil: {
        type: "Loamy",
        ph: 6.8,
        ph_status: "Optimal (Neutral)",
        moisture: 36,
        moisture_target: "32% - 40%",
        nitrogen: 128,
        nitrogen_unit: "kg/ha",
        nitrogen_status: "Optimal (120+ is good)",
        phosphorus: 54,
        phosphorus_unit: "kg/ha",
        phosphorus_status: "Optimal (50+ is good)",
        potassium: 185,
        potassium_unit: "kg/ha",
        potassium_status: "Optimal (120+ is good)",
        organic_carbon: "0.8%",
        ec: "0.42 dS/m (Normal salinity)"
      },
      irrigation: {
        status: "Standby",
        next_cycle: "In 18 hours (Drip Schedule)",
        soil_moisture: "36% (Adequate, within target)"
      },
      ndvi: 0.81,
      pest_risk: "Low (Pheromone trap clean)",
      projected_yield: "22.5 Quintals / Acre",
      projected_revenue: "₹2,51,100",
      active_recommendation: {
        id: "REC-101",
        title: "Potassium Foliar Boost for Wheat Plot A-1",
        why: "Crop is in peak grain filling. Nitrogen uptake is complete; foliar spray of 00:00:50 (Potassium Sulphate) @ 1.5 kg/acre increases grain plumpness, weight by ~8%, and improves grain shine.",
        action: "Schedule spray via tractor or drone before Thursday's winds"
      }
    },
    {
      id: "plot-2",
      code: "B-2",
      name: "East Climate Polyhouse • B-3",
      area: "1.2 Acres (Protected Polyhouse)",
      current_crop: "Dutch Bell Pepper (Yellow)",
      variety: "Inspiration F1",
      growth_stage: "Fruit Maturation & Picking",
      season: "Protected / Year-round",
      health_score: 89,
      health_status: "Good • High Yielding",
      soil: {
        type: "Sandy Loam",
        ph: 6.4,
        ph_status: "Slightly acidic (Good for bell peppers)",
        moisture: 42,
        moisture_target: "40% - 46%",
        nitrogen: 160,
        nitrogen_unit: "kg/ha",
        nitrogen_status: "High/Optimal",
        phosphorus: 72,
        phosphorus_unit: "kg/ha",
        phosphorus_status: "Optimal",
        potassium: 210,
        potassium_unit: "kg/ha",
        potassium_status: "High/Optimal",
        organic_carbon: "0.6%",
        ec: "0.38 dS/m"
      },
      irrigation: {
        status: "Active Drip Cycle",
        next_cycle: "Currently running (12 min remaining)",
        soil_moisture: "42% (Optimal)"
      },
      ndvi: 0.88,
      pest_risk: "Moderate (Thrips watch active — yellow sticky traps placed)",
      projected_yield: "18.2 Tonnes Total",
      projected_revenue: "₹6,37,000",
      active_recommendation: {
        id: "REC-104",
        title: "Thrips Prevention & Calcium Nitrate Drench",
        why: "High fruit load requires continuous Calcium to prevent blossom-end rot. Sticky traps show early thrips activity.",
        action: "Drench 3 kg/acre Calcium Nitrate via drip; spray 5% neem oil on lower canopy"
      }
    },
    {
      id: "plot-3",
      code: "C-3",
      name: "South Orchard & Lowland • Parcel C-3",
      area: "4.0 Acres (Total 6.0 Acres)",
      current_crop: "Basmati Rice 1121 & Intercropped Mango",
      variety: "Pusa Basmati 1121 + Alphonso",
      growth_stage: "Panicle Emergence & Vegetative",
      season: "Kharif / Annual Orchard",
      health_score: 92,
      health_status: "Optimal Growth",
      soil: {
        type: "Clay Loam",
        ph: 7.1,
        ph_status: "Optimal Neutral",
        moisture: 31,
        moisture_target: "30% - 38%",
        nitrogen: 115,
        nitrogen_unit: "kg/ha",
        nitrogen_status: "Moderate",
        phosphorus: 48,
        phosphorus_unit: "kg/ha",
        phosphorus_status: "Adequate",
        potassium: 192,
        potassium_unit: "kg/ha",
        potassium_status: "Optimal",
        organic_carbon: "1.1%",
        ec: "0.45 dS/m"
      },
      irrigation: {
        status: "Standby",
        next_cycle: "Tomorrow morning 06:00 AM",
        soil_moisture: "31% (Nearing lower threshold)"
      },
      ndvi: 0.76,
      pest_risk: "Low (Bio-spray applied)",
      projected_yield: "14.0 Quintals Mustard / Rice + 8 Tonnes Mango",
      projected_revenue: "₹4,12,000",
      active_recommendation: {
        id: "REC-105",
        title: "Morning Flood Irrigation Scheduled",
        why: "Clay loam moisture is at 31%, near 30% baseline. Panicle emergence demands steady moisture.",
        action: "Run irrigation pump tomorrow at 06:00 AM for 90 minutes"
      }
    }
  ],
  weather: {
    location: "Farm Sector Central",
    current: {
      temperature: "27°C",
      condition: "Mostly Sunny",
      humidity: "58%",
      wind: "11 km/h NW",
      rainfall_probability: "10%",
      spray_suitability: "Ideal for Spraying",
      soil_temp_20cm: "21.8°C"
    },
    forecast: [
      { day: "Today", temp_max: 29, temp_min: 18, condition: "Sunny", rain_prob: "5%", spray: "Optimal" },
      { day: "Tomorrow", temp_max: 28, temp_min: 17, condition: "Partly Cloudy", rain_prob: "15%", spray: "Optimal" },
      { day: "Wednesday", temp_max: 27, temp_min: 19, condition: "Light Breeze", rain_prob: "20%", spray: "Good" },
      { day: "Thursday", temp_max: 26, temp_min: 16, condition: "Scattered Clouds & High Wind (gusts to 26 km/h)", rain_prob: "35%", spray: "Caution (Drift risk)" },
      { day: "Friday", temp_max: 25, temp_min: 15, condition: "Overcast & Rain Showers", rain_prob: "60%", spray: "Alert (Do not spray)" }
    ]
  },
  recommendation_logic: {
    crop_choice: {
      wheat: "Recommended for Plot A-1 because Loamy soil has neutral pH 6.8 and good drainage. Rabi winter season (15-28°C) fits grain development. High available Potassium (185 kg/ha) supports strong stems and heavy earheads.",
      bell_pepper: "Recommended for Plot B-2 polyhouse because Sandy Loam soil has fast drainage preventing collar rot, and controlled polyhouse buffers temperature spikes.",
      rice: "Recommended for Plot C-3 because Clay Loam has superior water holding capacity and high organic carbon (1.1%), which is ideal for semi-flooded rice root zones."
    },
    irrigation_rules: [
      "Critical wheat watering stages: Crown Root (21 DAP), Tillering (45 DAP), Jointing (65 DAP), Flag Leaf (80 DAP), Heading (95 DAP), Grain Filling (110 DAP).",
      "If rainfall exceeds 25 mm, skip scheduled irrigation to avoid waterlogging and root hypoxia.",
      "Morning irrigation (6:00 AM - 9:00 AM) cuts evaporation loss by up to 30% compared to midday watering."
    ],
    fertilizer_rules: [
      "Wheat: Total requirement 120N : 60P : 40K kg/acre. Nitrogen split: 1/3 at sowing, 1/3 at Crown Root (21 DAP), 1/3 at Jointing. Stop soil Nitrogen at grain filling.",
      "Grain Filling Boost: 00:00:50 (Potassium Sulphate) @ 1.5 kg/acre foliar spray improves grain weight by ~8% and grain lustre.",
      "Deficiency recognition: Yellow lower leaves = Nitrogen shortage; Purple stems = Phosphorus shortage; Scorched brown leaf tips = Potassium shortage; White interveinal stripes = Zinc shortage."
    ]
  },
  app_features_directory: {
    leaf_scan: "AI Leaf Doctor (Camera Scanner) — for diagnosing plant diseases, fungus, or pest damage from photos.",
    market_mandi: "Mandi & Market Module — for live APMC mandi prices, direct buyer tenders, and selling produce without middlemen.",
    soil_tests: "Land & Soil Module — for detailed soil health indices, organic carbon charts, and uploading lab soil test reports.",
    irrigation: "Water Module — for smart pump automation, drip timers, and moisture graph telemetry.",
    weather: "Weather Module — for 5-day forecasts, rain probability, and wind drift alerts.",
    fertilizer_calc: "Fertilizer & Nutrients Module — for exact kg/acre NPK calculator and fertilizer purchase.",
    expert_kvk: "Expert Support Module — for booking video calls with Krishi Vigyan Kendra (KVK) scientists and certified agronomists.",
    machinery: "Machinery & Labour Module — for tractor, drone sprayer, and harvester rental."
  }
};

/**
 * Builds the strict grounded context prompt for Farm Advisor AI
 */
export function buildFarmAdvisorPrompt({ plotId, language = 'en', userName = 'Farmer' } = {}) {
  const selectedPlot = PROJECT_DATA.parcels.find(p => p.id === plotId || p.code === plotId) || PROJECT_DATA.parcels[0];

  const systemPrompt = `You are Farm Advisor AI, an assistant inside ${APP_NAME}. Answer only using the provided project data and recommendations. Explain how different factors influence the results. If the data is insufficient, say so clearly and state your uncertainty. Never invent numbers or facts. Keep answers simple and practical for farmers.

CRITICAL INSTRUCTIONS:
1. STRICT GROUNDING: Answer using ONLY the project data provided below (plots, soil NPK/moisture, weather, crop calendars, fertilizer schedules, and app recommendations). Do not provide generic or invented numbers.
2. EXPLAIN "WHY": When asked why a crop, fertilizer, or irrigation was recommended, explain the specific factors: soil type/pH, water availability, weather/season, and crop growth stage.
3. COMMUNICATE UNCERTAINTY: If the requested information is not in the data, or if telemetry is incomplete, state clearly: "Based on the available data..." or "This may vary depending on in-field microclimate..." Never guess or make up numbers.
4. OUT-OF-SCOPE REDIRECTION: If the user asks something outside this project's available data (e.g. diagnosing a photo, buying seeds, tractor rental, market prices in other states), state that you don't have that specific data in this module and guide them to the exact feature in ${APP_NAME} (e.g. AI Leaf Doctor, Mandi Module, Fertilizer Module, Land & Soil Module, Water Module).
5. TONE & STYLE: Keep answers concise (2-4 short farmer-friendly sentences or bullet points), practical, and free of confusing scientific jargon. Address ${userName} respectfully. If they speak in Hindi, Tamil, or French, reply in that language while keeping all numbers grounded.

CURRENT APP PROJECT DATA:
- Active Selected Parcel: ${selectedPlot.name} (${selectedPlot.area})
- Current Crop: ${selectedPlot.current_crop} (${selectedPlot.variety})
- Growth Stage: ${selectedPlot.growth_stage}
- Soil Telemetry:
  * Type: ${selectedPlot.soil.type}
  * pH: ${selectedPlot.soil.ph} (${selectedPlot.soil.ph_status})
  * Moisture: ${selectedPlot.soil.moisture}% (Target: ${selectedPlot.soil.moisture_target})
  * Nitrogen (N): ${selectedPlot.soil.nitrogen} ${selectedPlot.soil.nitrogen_unit} (${selectedPlot.soil.nitrogen_status})
  * Phosphorus (P): ${selectedPlot.soil.phosphorus} ${selectedPlot.soil.phosphorus_unit} (${selectedPlot.soil.phosphorus_status})
  * Potassium (K): ${selectedPlot.soil.potassium} ${selectedPlot.soil.potassium_unit} (${selectedPlot.soil.potassium_status})
  * Organic Carbon: ${selectedPlot.soil.organic_carbon}
  * Electrical Conductivity (EC): ${selectedPlot.soil.ec}
- Irrigation Status: ${selectedPlot.irrigation.status} | Next: ${selectedPlot.irrigation.next_cycle}
- Health Score: ${selectedPlot.health_score}/100 (${selectedPlot.health_status}) | NDVI: ${selectedPlot.ndvi}
- Pest Risk: ${selectedPlot.pest_risk}
- Projected Yield: ${selectedPlot.projected_yield} | Projected Revenue: ${selectedPlot.projected_revenue}
- Active Advisory: "${selectedPlot.active_recommendation.title}" — Why: ${selectedPlot.active_recommendation.why} — Action: ${selectedPlot.active_recommendation.action}

OTHER REGISTERED PARCELS:
${PROJECT_DATA.parcels.map(p => `- ${p.name}: Crop ${p.current_crop} (${p.variety}), Stage: ${p.growth_stage}, Soil: ${p.soil.type}, pH ${p.soil.ph}, Moisture ${p.soil.moisture}%, NPK ${p.soil.nitrogen}-${p.soil.phosphorus}-${p.soil.potassium}`).join('\n')}

CURRENT WEATHER & FORECAST:
- Current: ${PROJECT_DATA.weather.current.temperature}, ${PROJECT_DATA.weather.current.condition}, Humidity: ${PROJECT_DATA.weather.current.humidity}, Wind: ${PROJECT_DATA.weather.current.wind}, Rain Probability: ${PROJECT_DATA.weather.current.rainfall_probability}, Spray Suitability: ${PROJECT_DATA.weather.current.spray_suitability}.
- Thursday Forecast: ${PROJECT_DATA.weather.forecast[3].condition}, Rain: ${PROJECT_DATA.weather.forecast[3].rain_prob}, Spray: ${PROJECT_DATA.weather.forecast[3].spray}.
- Friday Forecast: ${PROJECT_DATA.weather.forecast[4].condition}, Rain: ${PROJECT_DATA.weather.forecast[4].rain_prob}, Spray: ${PROJECT_DATA.weather.forecast[4].spray}.

RECOMMENDATION LOGIC:
- Wheat Rationale: ${PROJECT_DATA.recommendation_logic.crop_choice.wheat}
- Bell Pepper Rationale: ${PROJECT_DATA.recommendation_logic.crop_choice.bell_pepper}
- Rice Rationale: ${PROJECT_DATA.recommendation_logic.crop_choice.rice}
- Irrigation Guidelines: ${PROJECT_DATA.recommendation_logic.irrigation_rules.join(' ')}
- Fertilizer Guidelines: ${PROJECT_DATA.recommendation_logic.fertilizer_rules.join(' ')}

APP FEATURES FOR REDIRECTION:
${Object.entries(PROJECT_DATA.app_features_directory).map(([k, v]) => `- ${v}`).join('\n')}
`;

  return {
    systemPrompt,
    selectedPlot,
    availablePlots: PROJECT_DATA.parcels.map(p => ({ id: p.id, code: p.code, name: p.name, crop: p.current_crop }))
  };
}
