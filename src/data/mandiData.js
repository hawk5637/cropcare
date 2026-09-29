// APMC Live Mandi Commodities and Buyer Tenders
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

const baseMandi = [
  {
    id: "wheat-sharbati",
    name: {
      en: "Wheat (Sharbati Durum)",
      hi: "गेहूं (शरबती / कठिया)",
      ta: "கோதுமை (துரம்)",
      fr: "Blé Dur (Sharbati)"
    },
    category: {
      en: "Cereals & Grains",
      hi: "अनाज एवं खाद्यान्न",
      ta: "தானியங்கள்",
      fr: "Céréales & Grains"
    },
    mandi: "Indore APMC, MP",
    state: "Madhya Pradesh",
    modalPrice: 2480,
    minPrice: 2350,
    maxPrice: 2620,
    unit: {
      en: "Quintal (100 kg)",
      hi: "क्विंटल (100 किग्रा)",
      ta: "குவிண்டால் (100 கிலோ)",
      fr: "Quintal (100 kg)"
    },
    change: +3.2,
    trend: "up",
    arrivals: "4,250 Qtls",
    msp: 2275,
    lastUpdated: {
      en: "Just now",
      hi: "अभी-अभी",
      ta: "இப்போது",
      fr: "À l'instant"
    },
    demandLevel: {
      en: "Very High",
      hi: "अत्यधिक मांग",
      ta: "அதிக தேவை",
      fr: "Très Forte Demande"
    },
    qualitySpecs: {
      en: "Moisture < 11.5%, Lustrous, Protein > 13%",
      hi: "नमी < 11.5%, चमकदार दाना, प्रोटीन > 13%",
      ta: "ஈரப்பதம் < 11.5%, புரதம் > 13%",
      fr: "Humidité < 11.5%, Protéine > 13%"
    }
  },
  {
    id: "rice-basmati-1121",
    name: {
      en: "Basmati Rice (Pusa 1121)",
      hi: "बासमती धान (पूसा 1121)",
      ta: "பாசுமதி அரிசி (பூசா 1121)",
      fr: "Riz Basmati (Pusa 1121)"
    },
    category: {
      en: "Cereals & Grains",
      hi: "अनाज एवं खाद्यान्न",
      ta: "தானியங்கள்",
      fr: "Céréales & Grains"
    },
    mandi: "Karnal APMC, HR",
    state: "Haryana",
    modalPrice: 3820,
    minPrice: 3600,
    maxPrice: 4100,
    unit: {
      en: "Quintal (100 kg)",
      hi: "क्विंटल (100 किग्रा)",
      ta: "குவிண்டால் (100 கிலோ)",
      fr: "Quintal (100 kg)"
    },
    change: +1.8,
    trend: "up",
    arrivals: "6,800 Qtls",
    msp: 2183,
    lastUpdated: {
      en: "5 mins ago",
      hi: "5 मिनट पहले",
      ta: "5 நிமிடம் முன்",
      fr: "Il y a 5 min"
    },
    demandLevel: {
      en: "Export Surge",
      hi: "निर्यात उछाल",
      ta: "ஏற்றுமதி தேவை",
      fr: "Forte Demande Export"
    },
    qualitySpecs: {
      en: "Grain length 8.2mm, Moisture < 12%",
      hi: "दाने की लंबाई 8.2 मिमी, नमी < 12%",
      ta: "தானிய நீளம் 8.2 மி.மீ, ஈரப்பதம் < 12%",
      fr: "Longueur du grain 8.2mm, Humidité < 12%"
    }
  },
  {
    id: "mustard-seed",
    name: {
      en: "Mustard Seed (Sarson)",
      hi: "सरसों / राई (काली सरसों)",
      ta: "கடுகு (கருப்பு கடுகு)",
      fr: "Graines de Moutarde"
    },
    category: {
      en: "Oilseeds",
      hi: "तिलहन फसलें",
      ta: "எண்ணெய் வித்துக்கள்",
      fr: "Oléagineux"
    },
    mandi: "Kota APMC, RJ",
    state: "Rajasthan",
    modalPrice: 5460,
    minPrice: 5200,
    maxPrice: 5650,
    unit: {
      en: "Quintal (100 kg)",
      hi: "क्विंटल (100 किग्रा)",
      ta: "குவிண்டால் (100 கிலோ)",
      fr: "Quintal (100 kg)"
    },
    change: -0.6,
    trend: "down",
    arrivals: "3,100 Qtls",
    msp: 5650,
    lastUpdated: {
      en: "12 mins ago",
      hi: "12 मिनट पहले",
      ta: "12 நிமிடம் முன்",
      fr: "Il y a 12 min"
    },
    demandLevel: {
      en: "Stable",
      hi: "स्थिर भाव",
      ta: "நிலையான விலை",
      fr: "Cours Stable"
    },
    qualitySpecs: {
      en: "Oil content 41.5%, Impurity < 1.5%",
      hi: "तेल की मात्रा 41.5%, अशुद्धता < 1.5%",
      ta: "எண்ணெய் அளவு 41.5%, தூய்மை > 98.5%",
      fr: "Teneur en huile 41.5%, Impuretés < 1.5%"
    }
  },
  {
    id: "soybean-yellow",
    name: {
      en: "Soybean (Yellow JS-9560)",
      hi: "सोयाबीन (पीला JS-9560)",
      ta: "சோயாபீன் (மஞ்சள்)",
      fr: "Soja Jaune (JS-9560)"
    },
    category: {
      en: "Oilseeds",
      hi: "तिलहन फसलें",
      ta: "எண்ணெய் வித்துக்கள்",
      fr: "Oléagineux"
    },
    mandi: "Ujjain APMC, MP",
    state: "Madhya Pradesh",
    modalPrice: 4620,
    minPrice: 4400,
    maxPrice: 4780,
    unit: {
      en: "Quintal (100 kg)",
      hi: "क्विंटल (100 किग्रा)",
      ta: "குவிண்டால் (100 கிலோ)",
      fr: "Quintal (100 kg)"
    },
    change: +2.7,
    trend: "up",
    arrivals: "5,400 Qtls",
    msp: 4600,
    lastUpdated: {
      en: "8 mins ago",
      hi: "8 मिनट पहले",
      ta: "8 நிமிடம் முன்",
      fr: "Il y a 8 min"
    },
    demandLevel: {
      en: "Strong",
      hi: "मजबूत मांग",
      ta: "வலுவான தேவை",
      fr: "Forte Demande"
    },
    qualitySpecs: {
      en: "Moisture < 10%, Foreign matter < 2%",
      hi: "नमी < 10%, कचरा < 2%",
      ta: "ஈரப்பதம் < 10%",
      fr: "Humidité < 10%, Impuretés < 2%"
    }
  },
  {
    id: "chana-desi",
    name: {
      en: "Gram / Chickpea (Desi Chana)",
      hi: "चना (देसी चना)",
      ta: "கொண்டைக்கடலை (நாட்டு கடலை)",
      fr: "Pois Chiches (Desi)"
    },
    category: {
      en: "Pulses",
      hi: "दलहन फसलें",
      ta: "பருப்பு வகைகள்",
      fr: "Légumineuses & Pulses"
    },
    mandi: "Bikaner APMC, RJ",
    state: "Rajasthan",
    modalPrice: 5850,
    minPrice: 5600,
    maxPrice: 6050,
    unit: {
      en: "Quintal (100 kg)",
      hi: "क्विंटल (100 किग्रा)",
      ta: "குவிண்டால் (100 கிலோ)",
      fr: "Quintal (100 kg)"
    },
    change: +3.6,
    trend: "up",
    arrivals: "1,850 Qtls",
    msp: 5440,
    lastUpdated: {
      en: "3 mins ago",
      hi: "3 मिनट पहले",
      ta: "3 நிமிடம் முன்",
      fr: "Il y a 3 min"
    },
    demandLevel: {
      en: "Festival Spike",
      hi: "त्योहारी मांग",
      ta: "பண்டிகை தேவை",
      fr: "Forte Demande Saisonnière"
    },
    qualitySpecs: {
      en: "Admixture < 1%, Bold seed size",
      hi: "मिलावट < 1%, मोटा दाना",
      ta: "கலப்படம் < 1%, பெரிய தானியம்",
      fr: "Mélange < 1%, Calibre Gros"
    }
  }
];

const baseBids = [
  {
    bidId: "BID-8921",
    buyerName: {
      en: "ITC Agri-Business Division",
      hi: "आईटीसी एग्री-बिजनेस डिवीज़न",
      ta: "ITC அக்ரி-பிசினஸ் பிரிவு",
      fr: "Division Agro-Industrielle ITC"
    },
    rating: "4.9 ★",
    commodity: {
      en: "Wheat (Sharbati Durum)",
      hi: "शरबती गेहूं (कठिया)",
      ta: "கோதுமை (துரம்)",
      fr: "Blé Dur Sharbati"
    },
    requestedQuantity: {
      en: "250 Quintals",
      hi: "250 क्विंटल",
      ta: "250 குவிண்டால்",
      fr: "250 Quintaux"
    },
    offeredPrice: "₹2,540 / qtl",
    premiumVsMandi: {
      en: "+₹60 / qtl over Indore Spot",
      hi: "+₹60/क्विंटल इंदौर मंडी से अधिक",
      ta: "+₹60/குவிண்டால் இந்தூர் விலையை விட அதிகம்",
      fr: "+₹60/qtl au-dessus du cours d'Indore"
    },
    destination: {
      en: "Pithampur Processing Facility",
      hi: "पीथमपुर प्रोसेसिंग प्लांट",
      ta: "பிதாம்பூர் ஆலை",
      fr: "Usine de Transformation de Pithampur"
    },
    terms: {
      en: "Farmgate pickup by buyer; 100% Escrow deposit verified",
      hi: "खेत से खरीदार द्वारा लोडिंग; 100% एस्क्रो बैंक जमा सत्यापित",
      ta: "பண்ணையிலேயே ஏற்றுதல்; 100% எஸ்க்ரோ வைப்பு உறுதி",
      fr: "Enlèvement direct au champ; Séquestre 100% vérifié"
    },
    expiresIn: {
      en: "4 hours",
      hi: "4 घंटे शेष",
      ta: "4 மணி நேரம் உள்ளது",
      fr: "4 heures restantes"
    }
  },
  {
    bidId: "BID-8922",
    buyerName: {
      en: "Adani Wilmar Consumer Hub",
      hi: "अडानी विल्मर कंज्यूमर हब",
      ta: "அதானி வில்மர் கன்ஸ்யூமர்",
      fr: "Centrale d'Achat Adani Wilmar"
    },
    rating: "4.8 ★",
    commodity: {
      en: "Mustard Seed (Sarson)",
      hi: "सरसों / राई",
      ta: "கடுகு",
      fr: "Graines de Moutarde"
    },
    requestedQuantity: {
      en: "120 Quintals",
      hi: "120 क्विंटल",
      ta: "120 குவிண்டால்",
      fr: "120 Quintaux"
    },
    offeredPrice: "₹5,520 / qtl",
    premiumVsMandi: {
      en: "+₹60 / qtl over Kota Spot",
      hi: "+₹60/क्विंटल कोटा मंडी से अधिक",
      ta: "+₹60/குவிண்டால் கோட்டா விலையை விட அதிகம்",
      fr: "+₹60/qtl au-dessus du cours de Kota"
    },
    destination: {
      en: "Alwar Edible Oil Refinery",
      hi: "अलवर खाद्य तेल रिफाइनरी",
      ta: "ஆல்வார் எண்ணெய் சுத்திகரிப்பு ஆலை",
      fr: "Raffinerie d'Huile d'Alwar"
    },
    terms: {
      en: "Electronic weight scale; instant UPI T+0 settlement",
      hi: "इलेक्ट्रॉनिक कांटा तौल; तत्काल UPI T+0 बैंक निपटान",
      ta: "டிஜிட்டல் எடைமேடை; உடனடி UPI T+0 எஸ்க்ரோ கட்டணம்",
      fr: "Pont-bascule électronique; Règlement immédiat T+0"
    },
    expiresIn: {
      en: "7 hours",
      hi: "7 घंटे शेष",
      ta: "7 மணி நேரம் உள்ளது",
      fr: "7 heures restantes"
    }
  }
];

export function getMandiCommodities(lang = 'en') {
  return baseMandi.map(m => ({
    ...m,
    name: m.name[lang] || m.name.en,
    category: m.category[lang] || m.category.en,
    unit: m.unit[lang] || m.unit.en,
    lastUpdated: m.lastUpdated[lang] || m.lastUpdated.en,
    demandLevel: m.demandLevel[lang] || m.demandLevel.en,
    qualitySpecs: m.qualitySpecs[lang] || m.qualitySpecs.en
  }));
}

export function getBuyerBids(lang = 'en') {
  return baseBids.map(b => ({
    ...b,
    buyerName: b.buyerName[lang] || b.buyerName.en,
    commodity: b.commodity[lang] || b.commodity.en,
    requestedQuantity: b.requestedQuantity[lang] || b.requestedQuantity.en,
    premiumVsMandi: b.premiumVsMandi[lang] || b.premiumVsMandi.en,
    destination: b.destination[lang] || b.destination.en,
    terms: b.terms[lang] || b.terms.en,
    expiresIn: b.expiresIn[lang] || b.expiresIn.en
  }));
}

export const mandiCommodities = getMandiCommodities('en');
export const buyerBids = getBuyerBids('en');
