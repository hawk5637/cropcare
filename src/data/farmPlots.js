// Farm plots telemetry, weather forecasts, AI recommendations, and diagnostic pathology samples
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

const basePlots = [
  {
    id: "plot-1",
    name: {
      en: "North Parcel • Plot A-1",
      hi: "उत्तर पार्सल • प्लाट A-1",
      ta: "வடக்கு பார்சல் • பிளாட் A-1",
      fr: "Parcelle Nord • Lot A-1"
    },
    crop: {
      en: "Sharbati Durum Wheat",
      hi: "शरबती गेहूं (कठिया)",
      ta: "ஷர்பதி துரம் கோதுமை",
      fr: "Blé Dur Sharbati"
    },
    variety: "HI-8759 (Pusa Tejas)",
    area: {
      en: "4.5 Acres",
      hi: "4.5 एकड़",
      ta: "4.5 ஏக்கர்",
      fr: "4.5 Hectares"
    },
    stage: {
      en: "Grain Filling (Day 78 / 115)",
      hi: "दाना भराव (78वां दिन / 115)",
      ta: "தானிய உருவாக்கம் (78வது நாள் / 115)",
      fr: "Remplissage du Grain (Jour 78 / 115)"
    },
    healthScore: 94,
    healthStatus: {
      en: "Excellent Vigour",
      hi: "उत्कृष्ट स्वास्थ्य व बढ़वार",
      ta: "சிறந்த பயிர் வளர்ச்சி",
      fr: "Vigueur Exceptionnelle"
    },
    soilMoisture: 36,
    moistureTarget: "32% - 40%",
    soilTemp: "21.4°C",
    soilPh: 6.8,
    nitrogen: "128 kg/ha",
    phosphorus: "54 kg/ha",
    potassium: "185 kg/ha",
    irrigationStatus: {
      en: "Standby",
      hi: "स्टैंडबाय (तैयार)",
      ta: "தயார் நிலை",
      fr: "En Attente"
    },
    nextIrrigation: {
      en: "In 18 hours (Drip Schedule)",
      hi: "18 घंटे बाद (ड्रिप शेड्यूल)",
      ta: "18 மணி நேரத்தில் (சொட்டு நீர்)",
      fr: "Dans 18 heures (Goutte-à-goutte)"
    },
    satelliteNdvi: 0.81,
    pestRisk: {
      en: "Low (Pheromone trap clean)",
      hi: "सुरक्षित (फेरोमोन ट्रैप साफ)",
      ta: "குறைவு (பூச்சி தாக்குதல் இல்லை)",
      fr: "Faible (Pièges phéromones sains)"
    },
    estimatedYield: {
      en: "22.5 Quintals / Acre",
      hi: "22.5 क्विंटल / एकड़",
      ta: "22.5 குவிண்டால் / ஏக்கர்",
      fr: "5.5 Tonnes / Hectare"
    },
    projectedRevenue: "₹2,51,100"
  },
  {
    id: "plot-2",
    name: {
      en: "East Climate Polyhouse • B-3",
      hi: "पूर्वी पॉलीहाउस • B-3",
      ta: "கிழக்கு பாலிஹவுஸ் • B-3",
      fr: "Serre Orientale • Lot B-3"
    },
    crop: {
      en: "Dutch Bell Pepper (Yellow)",
      hi: "पीली शिमला मिर्च (डच किस्म)",
      ta: "மஞ்சள் குடைமிளகாய்",
      fr: "Poivron Jaune Hollandais"
    },
    variety: "Inspiration F1",
    area: {
      en: "1.2 Acres (Protected)",
      hi: "1.2 एकड़ (संरक्षित शेड)",
      ta: "1.2 ஏக்கர் (பசுமைக்குடில்)",
      fr: "1.2 Hectares (Sous Serre)"
    },
    stage: {
      en: "Fruit Maturation & Picking",
      hi: "फल पकना एवं तुड़ाई चालू",
      ta: "காய் முதிர்ச்சி & பறிப்பு நிலை",
      fr: "Maturation & Récolte en Cours"
    },
    healthScore: 89,
    healthStatus: {
      en: "Good • High Yielding",
      hi: "उत्तम • भारी पैदावार",
      ta: "நன்று • அதிக விளைச்சல்",
      fr: "Bon • Rendement Élevé"
    },
    soilMoisture: 42,
    moistureTarget: "40% - 46%",
    soilTemp: "23.8°C",
    soilPh: 6.4,
    nitrogen: "160 kg/ha",
    phosphorus: "72 kg/ha",
    potassium: "210 kg/ha",
    irrigationStatus: {
      en: "Active Drip Cycle",
      hi: "ड्रिप सिंचाई सक्रिय",
      ta: "சொட்டு நீர் பாசனம் இயங்குகிறது",
      fr: "Cycle Goutte-à-Goutte Actif"
    },
    nextIrrigation: {
      en: "Currently running (12 min remaining)",
      hi: "वर्तमान में चालू (12 मिनट शेष)",
      ta: "இயங்குகிறது (12 நிமிடம் உள்ளது)",
      fr: "En cours (12 min restantes)"
    },
    satelliteNdvi: 0.88,
    pestRisk: {
      en: "Moderate (Thrips watch active)",
      hi: "मध्यम (थ्रिप्स निगरानी सक्रिय)",
      ta: "மிதமானது (இலைப்பேன் கண்காணிப்பு)",
      fr: "Modéré (Surveillance thrips)"
    },
    estimatedYield: {
      en: "18.2 Tonnes Total",
      hi: "18.2 टन कुल",
      ta: "18.2 டன் மொத்தம்",
      fr: "18.2 Tonnes Total"
    },
    projectedRevenue: "₹6,37,000"
  },
  {
    id: "plot-3",
    name: {
      en: "South Orchard • Parcel C-2",
      hi: "दक्षिणी बाग • पार्सल C-2",
      ta: "தெற்கு தோட்டம் • பார்சல் C-2",
      fr: "Verger Sud • Parcelle C-2"
    },
    crop: {
      en: "Mustard & Intercropped Mango",
      hi: "सरसों एवं आम बागवानी",
      ta: "கடுகு மற்றும் மாந்தோட்டம்",
      fr: "Moutarde & Manguiers Associés"
    },
    variety: "Pusa Mustard-31 + Alphonso",
    area: {
      en: "6.0 Acres",
      hi: "6.0 एकड़",
      ta: "6.0 ஏக்கர்",
      fr: "6.0 Hectares"
    },
    stage: {
      en: "Panicle Emergence & Vegetative",
      hi: "फूल व फली आने की अवस्था",
      ta: "பூக்கும் மற்றும் கதிர் நிலை",
      fr: "Floraison & Phase Végétative"
    },
    healthScore: 92,
    healthStatus: {
      en: "Optimal Growth",
      hi: "अनुकूलतम बढ़वार",
      ta: "உகந்த வளர்ச்சி",
      fr: "Croissance Optimale"
    },
    soilMoisture: 31,
    moistureTarget: "30% - 38%",
    soilTemp: "22.1°C",
    soilPh: 7.1,
    nitrogen: "115 kg/ha",
    phosphorus: "48 kg/ha",
    potassium: "192 kg/ha",
    irrigationStatus: {
      en: "Standby",
      hi: "स्टैंडबाय (तैयार)",
      ta: "தயார் நிலை",
      fr: "En Attente"
    },
    nextIrrigation: {
      en: "Tomorrow morning 06:00 AM",
      hi: "कल सुबह 06:00 बजे",
      ta: "நாளை காலை 06:00 மணிக்கு",
      fr: "Demain matin à 06h00"
    },
    satelliteNdvi: 0.76,
    pestRisk: {
      en: "Low (Bio-spray applied)",
      hi: "सुरक्षित (जैविक छिड़काव पूर्ण)",
      ta: "குறைவு (இயற்கை தெளிப்பு செய்யப்பட்டது)",
      fr: "Faible (Traitement bio effectué)"
    },
    estimatedYield: {
      en: "14.0 Quintals Mustard + 8T Mango",
      hi: "14 क्विंटल सरसों + 8 टन आम",
      ta: "14 குவிண்டால் கடுகு + 8 டன் மாம்பழம்",
      fr: "3.5T Moutarde + 8T Mangues"
    },
    projectedRevenue: "₹4,12,000"
  }
];

export function getFarmPlots(lang = 'en') {
  return basePlots.map(plot => ({
    ...plot,
    name: plot.name[lang] || plot.name.en,
    crop: plot.crop[lang] || plot.crop.en,
    area: plot.area[lang] || plot.area.en,
    stage: plot.stage[lang] || plot.stage.en,
    healthStatus: plot.healthStatus[lang] || plot.healthStatus.en,
    irrigationStatus: plot.irrigationStatus[lang] || plot.irrigationStatus.en,
    nextIrrigation: plot.nextIrrigation[lang] || plot.nextIrrigation.en,
    pestRisk: plot.pestRisk[lang] || plot.pestRisk.en,
    estimatedYield: plot.estimatedYield[lang] || plot.estimatedYield.en
  }));
}

export function getWeatherForecast(lang = 'en') {
  const conditions = {
    en: { current: "Mostly Sunny", spray: "Ideal for Spraying", today: "Sunny", tomorrow: "Partly Cloudy", wed: "Light Breeze", thu: "Scattered Clouds", fri: "Overcast" },
    hi: { current: "साफ व धूप खिली", spray: "छिड़काव के लिए सर्वोत्तम समय", today: "धूप", tomorrow: "हल्के बादल", wed: "हल्की हवा", thu: "बादल छाए रहेंगे", fri: "घने बादल / वर्षा" },
    ta: { current: "வெயில் நிலவுகிறது", spray: "மருந்தடிக்க உகந்த நேரம்", today: "வெயில்", tomorrow: "பகுதி மேகமூட்டம்", wed: "மிதமான காற்று", thu: "மேகமூட்டம்", fri: "மழை வாய்ப்பு" },
    fr: { current: "Ensoleillé", spray: "Idéal pour Pulvérisation", today: "Soleil", tomorrow: "Partiellement Nuageux", wed: "Brise Légère", thu: "Nuages Épars", fri: "Couvert" }
  };
  const c = conditions[lang] || conditions.en;

  return {
    current: {
      temp: 27,
      condition: c.current,
      icon: "sun",
      humidity: 58,
      windSpeed: "11 km/h NW",
      rainfallProb: "10%",
      spraySuitability: c.spray,
      uvIndex: "6 (Moderate)",
      soilTemp20cm: "21.8°C"
    },
    daily: [
      { day: lang === 'hi' ? 'आज' : lang === 'ta' ? 'இன்று' : lang === 'fr' ? 'Aujourd\'hui' : 'Today', tempMax: 29, tempMin: 18, condition: c.today, rain: "5%", spray: "Optimal" },
      { day: lang === 'hi' ? 'कल' : lang === 'ta' ? 'நாளை' : lang === 'fr' ? 'Demain' : 'Tomorrow', tempMax: 28, tempMin: 17, condition: c.tomorrow, rain: "15%", spray: "Optimal" },
      { day: lang === 'hi' ? 'बुधवार' : lang === 'ta' ? 'புதன்' : lang === 'fr' ? 'Mer' : 'Wed', tempMax: 27, tempMin: 19, condition: c.wed, rain: "20%", spray: "Good" },
      { day: lang === 'hi' ? 'गुरुवार' : lang === 'ta' ? 'வியாழன்' : lang === 'fr' ? 'Jeu' : 'Thu', tempMax: 26, tempMin: 16, condition: c.thu, rain: "35%", spray: "Caution" },
      { day: lang === 'hi' ? 'शुक्रवार' : lang === 'ta' ? 'வெள்ளி' : lang === 'fr' ? 'Ven' : 'Fri', tempMax: 25, tempMin: 15, condition: c.fri, rain: "60%", spray: "Alert" }
    ]
  };
}

export function getAiRecommendations(lang = 'en') {
  const recs = {
    en: [
      {
        id: "REC-101",
        type: "Fertigation Alert",
        priority: "High",
        title: "Potassium Foliar Boost for Wheat Plot A-1",
        description: "Crop is entering peak grain formation. Applying 00:00:50 (Potassium Sulphate) @ 1.5 kg/acre now increases grain weight by ~8% and improves lustre.",
        suggestedAction: "Schedule Spray via Drone or Tractor"
      },
      {
        id: "REC-102",
        type: "Weather Alert",
        priority: "Medium",
        title: "High Wind Alert on Thursday Afternoon",
        description: "Forecast predicts wind gusts up to 26 km/h on Thursday. Complete pesticide or micronutrient spraying before Wednesday dusk to prevent droplet drift.",
        suggestedAction: "Reschedule Spray to Tomorrow Morning"
      },
      {
        id: "REC-103",
        type: "Market Arbitrage",
        priority: "Opportunity",
        title: "Indore Mandi Wheat Premium Spike (+₹85)",
        description: "Wholesale flour millers in Indore have raised bids to ₹2,540/qtl due to low depot stocks. Your harvest timeline perfectly aligns with peak bidding.",
        suggestedAction: "Lock Advance Buyer Tender"
      }
    ],
    hi: [
      {
        id: "REC-101",
        type: "खाद व पोषण चेतावनी",
        priority: "उच्च",
        title: "गेहूं प्लाट A-1 के लिए पोटाश स्प्रे सलाह",
        description: "फसल दाना भराव की अवस्था में है। 00:00:50 (पोटैशियम सल्फेट) 1.5 किग्रा प्रति एकड़ छिड़कने से दाने का वजन 8% बढ़ता है और चमक आती है।",
        suggestedAction: "ड्रोन या ट्रैक्टर से स्प्रे बुक करें"
      },
      {
        id: "REC-102",
        type: "मौसम चेतावनी",
        priority: "मध्यम",
        title: "गुरुवार दोपहर तेज हवा चलने की संभावना",
        description: "गुरुवार को 26 किमी/घंटा की गति से हवा चलने का अनुमान है। दवा की बर्बादी रोकने के लिए बुधवार शाम से पहले छिड़काव पूरा करें।",
        suggestedAction: "छिड़काव कल सुबह तक पूरा करें"
      },
      {
        id: "REC-103",
        type: "मंडी मुनाफा अवसर",
        priority: "अवसर",
        title: "इंदौर मंडी में गेहूं के भाव में उछाल (+₹85)",
        description: "आटा मिलों की भारी मांग के कारण इंदौर में भाव ₹2,540/क्विंटल पहुंच गया है। अपनी फसल के लिए अभी खरीदार टेंडर लॉक करें।",
        suggestedAction: "अग्रिम खरीदार टेंडर लॉक करें"
      }
    ],
    ta: [
      {
        id: "REC-101",
        type: "உர எச்சரிக்கை",
        priority: "முக்கியம்",
        title: "கோதுமை பிளாட் A-1 க்கு பொட்டாஷ் ஸ்ப்ரே",
        description: "பயிர் தானிய உருவாக்கம் பெறுகிறது. 00:00:50 பொட்டாசியம் சல்பேட் ஏக்கருக்கு 1.5 கிலோ தெளிப்பது தானிய எடையை 8% அதிகரிக்கும்.",
        suggestedAction: "ட்ரோன் மூலம் ஸ்ப்ரே பதிவு செய்"
      },
      {
        id: "REC-102",
        type: "வானிலை எச்சரிக்கை",
        priority: "நடுத்தரம்",
        title: "வியாழன் மதியம் பலத்த காற்று வீசக்கூடும்",
        description: "வியாழன் அன்று 26 கி.மீ வேகத்தில் காற்று வீச வாய்ப்புள்ளது. மருந்து வீணாவதை தடுக்க புதன்கிழமை மாலைக்குள் தெளிப்பை முடியுங்கள்.",
        suggestedAction: "நாளை காலைக்குள் தெளிக்கவும்"
      },
      {
        id: "REC-103",
        type: "சந்தை வாய்ப்பு",
        priority: "வாய்ப்பு",
        title: "இந்தூர் மண்டியில் கோதுமை விலை உயர்வு (+₹85)",
        description: "ஆலைகளின் உடனடி தேவையால் விலை குவிண்டாலுக்கு ₹2,540 ஆக உயர்ந்துள்ளது. உங்கள் அறுவடைக்கு இப்போதே டெண்டரை உறுதி செய்யுங்கள்.",
        suggestedAction: "வாங்குபவர் டெண்டரை பதிவு செய்"
      }
    ],
    fr: [
      {
        id: "REC-101",
        type: "Alerte Fertigation",
        priority: "Haute",
        title: "Apport Foliaire en Potassium - Blé Lot A-1",
        description: "La culture entre en phase de remplissage du grain. L'application de sulfate de potassium à 1.5 kg/ha augmente le poids du grain d'environ 8%.",
        suggestedAction: "Programmer la Pulvérisation par Drone"
      },
      {
        id: "REC-102",
        type: "Alerte Météo",
        priority: "Moyenne",
        title: "Rafales de Vent Prévues Jeudi Après-Midi",
        description: "Des rafales jusqu'à 26 km/h sont prévues jeudi. Terminez les pulvérisations avant mercredi soir pour éviter toute dérive de produit.",
        suggestedAction: "Reporter la Pulvérisation à Demain Matin"
      },
      {
        id: "REC-103",
        type: "Arbitrage Marché",
        priority: "Opportunité",
        title: "Hausse des Cours du Blé à Indore (+₹85)",
        description: "Les minoteries industrielles d'Indore ont relevé leurs offres à ₹2 540/qtl en raison de stocks faibles. Sécurisez votre contrat dès maintenant.",
        suggestedAction: "Verrouiller le Contrat d'Achat"
      }
    ]
  };

  return recs[lang] || recs.en;
}

export function getDiagnosticSamples(lang = 'en') {
  const samples = {
    en: [
      {
        id: "sample-wheat-rust",
        crop: "Wheat",
        label: "Yellow Stripe Rust (Puccinia striiformis)",
        confidence: "98.4%",
        status: "Fungal Pathogen Detected",
        remedy: "Apply Propiconazole 25% EC @ 200 ml in 200 liters of water per acre. Repeat after 15 days if yellow stripes persist. Restrict excessive nitrogen fertilization."
      },
      {
        id: "sample-tomato-blight",
        crop: "Tomato",
        label: "Early Blight (Alternaria solani)",
        confidence: "96.7%",
        status: "Concentric Leaf Spots Identified",
        remedy: "Spray Mancozeb 75% WP @ 2.5 g/liter or Chlorothalonil 75% WP. Remove lower infected leaves and avoid overhead sprinkler wetting."
      },
      {
        id: "sample-healthy-leaf",
        crop: "Bell Pepper",
        label: "Healthy Foliage (Vigorous Canopy)",
        confidence: "99.1%",
        status: "Zero Pathogens Detected",
        remedy: "Plant vigour is optimal. Continue balanced micro-drip fertigation and maintain regular yellow sticky trap monitoring for preventive thrips management."
      }
    ],
    hi: [
      {
        id: "sample-wheat-rust",
        crop: "गेहूं",
        label: "पीला रतुआ / हल्दी रोग (Puccinia striiformis)",
        confidence: "98.4%",
        status: "फफूंद रोग की पहचान हुई",
        remedy: "प्रोपिकोनाज़ोल 25% EC @ 200 मिली को 200 लीटर पानी में मिलाकर प्रति एकड़ छिड़कें। 15 दिन बाद आवश्यकतानुसार दोहराएं। यूरिया का अत्यधिक उपयोग न करें।"
      },
      {
        id: "sample-tomato-blight",
        crop: "टमाटर",
        label: "अगेती झुलसा रोग (Alternaria solani)",
        confidence: "96.7%",
        status: "पत्तियों पर गोल धब्बे पाए गए",
        remedy: "मैंकोज़ेब 75% WP @ 2.5 ग्राम प्रति लीटर पानी में मिलाकर छिड़कें। नीचे की रोगग्रस्त पत्तियों को तोड़कर नष्ट कर दें।"
      },
      {
        id: "sample-healthy-leaf",
        crop: "शिमला मिर्च",
        label: "स्वस्थ पत्ती (उत्कृष्ट हरियाली)",
        confidence: "99.1%",
        status: "कोई बीमारी नहीं पाई गई",
        remedy: "फसल पूर्णतः स्वस्थ है। नियमित संतुलित ड्रिप फर्टिगेशन जारी रखें और रसचूसक कीटों की रोकथाम हेतु पीले स्टिकी ट्रैप लगाएं।"
      }
    ],
    ta: [
      {
        id: "sample-wheat-rust",
        crop: "கோதுமை",
        label: "மஞ்சள் துரு நோய் (Puccinia striiformis)",
        confidence: "98.4%",
        status: "பூஞ்சை தொற்று கண்டறியப்பட்டது",
        remedy: "புரோபிகோனசோல் 25% EC மருந்தை ஏக்கருக்கு 200 மி.லி வீதம் 200 லிட்டர் தண்ணீரில் கலந்து தெளிக்கவும். தழைச்சத்தை அளவுக்கு அதிகமாக இடவேண்டாம்."
      },
      {
        id: "sample-tomato-blight",
        crop: "தக்காளி",
        label: "ஆரம்ப இலை கருகல் நோய் (Alternaria solani)",
        confidence: "96.7%",
        status: "வட்ட வடிவ இலை புள்ளிகள்",
        remedy: "மேன்கோசெப் 75% WP மருந்தை லிட்டருக்கு 2.5 கிராம் வீதம் கலந்து தெளிக்கவும். பாதிக்கப்பட்ட கீழ் இலைகளை அகற்றி அழிக்கவும்."
      },
      {
        id: "sample-healthy-leaf",
        crop: "குடைமிளகாய்",
        label: "ஆரோக்கியமான இலை (சிறந்த வளர்ச்சி)",
        confidence: "99.1%",
        status: "நோய் தொற்று இல்லை",
        remedy: "பயிர் ஆரோக்கியமாக உள்ளது. சீரான சொட்டு நீர் பாசனத்தை தொடருங்கள். பூச்சி தடுப்பிற்கு மஞ்சள் ஒட்டும் பொறிகளை பராமரிக்கவும்."
      }
    ],
    fr: [
      {
        id: "sample-wheat-rust",
        crop: "Blé",
        label: "Rouille Jaune Striée (Puccinia striiformis)",
        confidence: "98.4%",
        status: "Pathogène Fongique Détecté",
        remedy: "Appliquer du Propiconazole 25% EC à raison de 200 ml dans 200 litres d'eau par hectare. Renouveler après 15 jours si nécessaire. Limiter les apports excessifs d'azote."
      },
      {
        id: "sample-tomato-blight",
        crop: "Tomate",
        label: "Alternariose / Mildiou Précoce (Alternaria solani)",
        confidence: "96.7%",
        status: "Taches Foliaires Concentriques Identifiées",
        remedy: "Pulvériser du Mancozèbe 75% WP à 2.5 g/litre ou Chlorothalonil. Supprimer les feuilles basses infectées et éviter l'aspersion directe sur le feuillage."
      },
      {
        id: "sample-healthy-leaf",
        crop: "Poivron",
        label: "Feuillage Sain (Canopée Vigoureuse)",
        confidence: "99.1%",
        status: "Aucun Pathogène Détecté",
        remedy: "La vigueur de la plante est optimale. Poursuivez la fertigation équilibrée au goutte-à-goutte et maintenez les pièges chromatiques jaunes pour le suivi des thrips."
      }
    ]
  };

  return samples[lang] || samples.en;
}

export const farmPlots = basePlots.map(p => ({
  ...p,
  name: p.name.en,
  crop: p.crop.en,
  area: p.area.en,
  stage: p.stage.en,
  healthStatus: p.healthStatus.en,
  irrigationStatus: p.irrigationStatus.en,
  nextIrrigation: p.nextIrrigation.en,
  pestRisk: p.pestRisk.en,
  estimatedYield: p.estimatedYield.en
}));
export const weatherForecast = getWeatherForecast('en');
export const aiRecommendations = getAiRecommendations('en');
export const diagnosticSamples = getDiagnosticSamples('en');
