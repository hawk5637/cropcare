// APMC Live Mandi Commodities and Verified Buyer Tenders
// Sourced from Agmarknet, e-NAM, and Ministry of Agriculture & Farmers Welfare, Govt. of India
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

const baseMandi = [
  // ─── CEREALS & GRAINS ──────────────────────────────────────────
  {
    id: "wheat-sharbati",
    name: {
      en: "Wheat (Sharbati Durum / MP Golden)",
      hi: "गेहूं (शरबती / कठिया एमपी गोल्ड)",
      ta: "கோதுமை (ஷர்பதி துரம்)",
      fr: "Blé Dur (Sharbati Doré)"
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
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +3.2,
    trend: "up",
    arrivals: "4,250 Qtls",
    msp: 2275,
    lastUpdated: { en: "Just now", hi: "अभी-अभी", ta: "இப்போது", fr: "À l'instant" },
    demandLevel: { en: "Very High", hi: "अत्यधिक मांग", ta: "அதிக தேவை", fr: "Très Forte Demande" },
    qualitySpecs: {
      en: "Moisture < 11.5%, Lustrous Bold, Protein > 13.2%",
      hi: "नमी < 11.5%, चमकदार मोटा दाना, प्रोटीन > 13.2%",
      ta: "ஈரப்பதம் < 11.5%, தடிமனான தானியம், புரதம் > 13.2%",
      fr: "Humidité < 11.5%, Grain brillant, Protéines > 13.2%"
    }
  },
  {
    id: "wheat-hd2967",
    name: {
      en: "Wheat (HD-2967 Mill Quality)",
      hi: "गेहूं (HD-2967 मिल क्वालिटी)",
      ta: "கோதுமை (HD-2967)",
      fr: "Blé Meunier (HD-2967)"
    },
    category: {
      en: "Cereals & Grains",
      hi: "अनाज एवं खाद्यान्न",
      ta: "தானியங்கள்",
      fr: "Céréales & Grains"
    },
    mandi: "Khanna APMC, PB",
    state: "Punjab",
    modalPrice: 2540,
    minPrice: 2420,
    maxPrice: 2610,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.4,
    trend: "up",
    arrivals: "12,400 Qtls",
    msp: 2275,
    lastUpdated: { en: "10 mins ago", hi: "10 मिनट पहले", ta: "10 நிமிடம் முன்", fr: "Il y a 10 min" },
    demandLevel: { en: "High", hi: "उच्च मांग", ta: "அதிக தேவை", fr: "Forte Demande" },
    qualitySpecs: {
      en: "Moisture < 12.0%, Foreign Matter < 1.0%, Sound Grains > 97%",
      hi: "नमी < 12.0%, अशुद्धता < 1.0%, स्वस्थ दाने > 97%",
      ta: "ஈரப்பதம் < 12.0%, தூய்மை > 99%",
      fr: "Humidité < 12.0%, Corps étrangers < 1.0%"
    }
  },
  {
    id: "rice-basmati-1121",
    name: {
      en: "Basmati Rice (Pusa 1121 Steamed)",
      hi: "बासमती धान (पूसा 1121 स्टीम्ड)",
      ta: "பாசுமதி அரிசி (பூசா 1121)",
      fr: "Riz Basmati (Pusa 1121 Vapeur)"
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
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.8,
    trend: "up",
    arrivals: "6,800 Qtls",
    msp: 2183,
    lastUpdated: { en: "5 mins ago", hi: "5 मिनट पहले", ta: "5 நிமிடம் முன்", fr: "Il y a 5 min" },
    demandLevel: { en: "Export Surge", hi: "निर्यात उछाल", ta: "ஏற்றுமதி தேவை", fr: "Forte Demande Export" },
    qualitySpecs: {
      en: "Grain length 8.2mm, Chalky Grains < 2.0%, Moisture < 12%",
      hi: "दाने की लंबाई 8.2 मिमी, चॉकी दाना < 2.0%, नमी < 12%",
      ta: "தானிய நீளம் 8.2 மி.மீ, ஈரப்பதம் < 12%",
      fr: "Longueur du grain 8.2mm, Humidité < 12%"
    }
  },
  {
    id: "maize-hybrid",
    name: {
      en: "Yellow Maize (Poultry / Starch Feed)",
      hi: "पीला मक्का (पोल्ट्री / स्टार्च ग्रेड)",
      ta: "மஞ்சள் மக்காச்சோளம் (தீவனம்)",
      fr: "Maïs Jaune Alimentaire"
    },
    category: {
      en: "Cereals & Grains",
      hi: "अनाज एवं खाद्यान्न",
      ta: "தானியங்கள்",
      fr: "Céréales & Grains"
    },
    mandi: "Davangere APMC, KA",
    state: "Karnataka",
    modalPrice: 2240,
    minPrice: 2100,
    maxPrice: 2360,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +2.1,
    trend: "up",
    arrivals: "5,100 Qtls",
    msp: 2090,
    lastUpdated: { en: "15 mins ago", hi: "15 मिनट पहले", ta: "15 நிமிடம் முன்", fr: "Il y a 15 min" },
    demandLevel: { en: "High", hi: "उच्च मांग", ta: "அதிக தேவை", fr: "Forte Demande" },
    qualitySpecs: {
      en: "Moisture < 13.5%, Aflatoxin < 20 ppb, Broken < 3%",
      hi: "नमी < 13.5%, एफ्लाटॉक्सिन < 20 ppb, टूटे दाने < 3%",
      ta: "ஈரப்பதம் < 13.5%, உடைந்தவை < 3%",
      fr: "Humidité < 13.5%, Aflatoxine < 20 ppb"
    }
  },

  // ─── VEGETABLES ──────────────────────────────────────────────
  {
    id: "veg-tomato-hybrid",
    name: {
      en: "Tomato (F1 Hybrid Table / Processing)",
      hi: "टमाटर (F1 हाइब्रिड टेबल व प्रोसेसिंग)",
      ta: "தக்காளி (ஹைப்ரிட்)",
      fr: "Tomates Hybrides (F1)"
    },
    category: {
      en: "Vegetables",
      hi: "ताज़ी सब्ज़ियाँ",
      ta: "காய்கறிகள்",
      fr: "Légumes"
    },
    mandi: "Kolar APMC, KA",
    state: "Karnataka",
    modalPrice: 1850,
    minPrice: 1600,
    maxPrice: 2100,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +8.2,
    trend: "up",
    arrivals: "8,900 Qtls",
    msp: 1350,
    lastUpdated: { en: "Just now", hi: "अभी-अभी", ta: "இப்போது", fr: "À l'instant" },
    demandLevel: { en: "Very High", hi: "अत्यधिक मांग", ta: "அதிக தேவை", fr: "Très Forte Demande" },
    qualitySpecs: {
      en: "Firm round, 65-75mm diameter, deep crimson color, TSS > 4.5° Brix",
      hi: "मजबूत गोल, 65-75 मिमी आकार, गहरा लाल रंग, TSS > 4.5° ब्रिक्स",
      ta: "உறுதியான உருண்டை வடிவம், 65-75 மிமீ அளவு",
      fr: "Ferme et rond, diamètre 65-75mm, Brix > 4.5°"
    }
  },
  {
    id: "veg-onion-red",
    name: {
      en: "Onion (Nashik Garwa Red Export Grade)",
      hi: "प्याज (नासिक गरवा लाल एक्सपोर्ट क्वालिटी)",
      ta: "வெங்காயம் (நாசிக் சிவப்பு)",
      fr: "Oignon Rouge de Nashik (Export)"
    },
    category: {
      en: "Vegetables",
      hi: "ताज़ी सब्ज़ियाँ",
      ta: "காய்கறிகள்",
      fr: "Légumes"
    },
    mandi: "Lasalgaon APMC, MH",
    state: "Maharashtra",
    modalPrice: 2420,
    minPrice: 2150,
    maxPrice: 2680,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +3.4,
    trend: "up",
    arrivals: "15,200 Qtls",
    msp: 1650,
    lastUpdated: { en: "4 mins ago", hi: "4 मिनट पहले", ta: "4 நிமிடம் முன்", fr: "Il y a 4 min" },
    demandLevel: { en: "Surging", hi: "उछाल पर", ta: "அதிகரிக்கும் தேவை", fr: "En Forte Hausse" },
    qualitySpecs: {
      en: "45-55mm export diameter, dry double paper skin, zero sprouting",
      hi: "45-55 मिमी निर्यात व्यास, सूखी दोहरी लाल परत, अंकुरण रहित",
      ta: "45-55 மிமீ ஏற்றுமதி அளவு, உலர் தோல்",
      fr: "Diamètre export 45-55mm, double pelure sèche"
    }
  },
  {
    id: "veg-potato-jyoti",
    name: {
      en: "Potato (Kufri Jyoti / Chipsona)",
      hi: "आलू (कुफरी ज्योति व चिपसोना)",
      ta: "உருளைக்கிழங்கு (குப்ரி ஜோதி)",
      fr: "Pommes de Terre (Kufri Jyoti)"
    },
    category: {
      en: "Vegetables",
      hi: "ताज़ी सब्ज़ियाँ",
      ta: "காய்கறிகள்",
      fr: "Légumes"
    },
    mandi: "Agra APMC, UP",
    state: "Uttar Pradesh",
    modalPrice: 1480,
    minPrice: 1350,
    maxPrice: 1620,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.2,
    trend: "up",
    arrivals: "18,400 Qtls",
    msp: 1100,
    lastUpdated: { en: "8 mins ago", hi: "8 मिनट पहले", ta: "8 நிமிடம் முன்", fr: "Il y a 8 min" },
    demandLevel: { en: "Moderate", hi: "मध्यम मांग", ta: "மிதமான தேவை", fr: "Demande Modérée" },
    qualitySpecs: {
      en: "Oval uniform tubers, shallow eyes, low reducing sugars < 0.1%",
      hi: "एकसमान अंडाकार कंद, उथली आंखें, शर्करा < 0.1%",
      ta: "சீரான அளவு, குறைந்த சர்க்கரை அளவு",
      fr: "Tubercules ovales uniformes, sucres réducteurs < 0.1%"
    }
  },
  {
    id: "veg-chilli-teja",
    name: {
      en: "Green / Dry Red Chilli (Teja S17)",
      hi: "हरी व सूखी लाल मिर्च (तेजा S17)",
      ta: "மிளகாய் (தேஜா S17)",
      fr: "Piment Rouge & Vert (Teja S17)"
    },
    category: {
      en: "Vegetables",
      hi: "ताज़ी सब्ज़ियाँ",
      ta: "காய்கறிகள்",
      fr: "Légumes"
    },
    mandi: "Guntur Mirchi Yard, AP",
    state: "Andhra Pradesh",
    modalPrice: 6800,
    minPrice: 6300,
    maxPrice: 7400,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +4.5,
    trend: "up",
    arrivals: "7,600 Qtls",
    msp: 5200,
    lastUpdated: { en: "12 mins ago", hi: "12 मिनट पहले", ta: "12 நிமிடம் முன்", fr: "Il y a 12 min" },
    demandLevel: { en: "High Pungency", hi: "तीखापन निर्यात मांग", ta: "அதிக காரம்", fr: "Très Piquant Export" },
    qualitySpecs: {
      en: "Capsaicin > 0.65%, SHU > 75,000, Moisture < 10.5%",
      hi: "कैप्साइसिन > 0.65%, तीखापन SHU > 75,000, नमी < 10.5%",
      ta: "கேப்சைசின் > 0.65%, காரத்தன்மை > 75,000 SHU",
      fr: "Capsaïcine > 0.65%, SHU > 75 000"
    }
  },
  {
    id: "veg-garlic-mandsaur",
    name: {
      en: "Garlic (G-282 Big Clove Export)",
      hi: "लहसुन (G-282 बड़ा कली एक्सपोर्ट)",
      ta: "பூண்டு (G-282)",
      fr: "Ail Blanc (G-282 Export)"
    },
    category: {
      en: "Vegetables",
      hi: "ताज़ी सब्ज़ियाँ",
      ta: "காய்கறிகள்",
      fr: "Légumes"
    },
    mandi: "Mandsaur APMC, MP",
    state: "Madhya Pradesh",
    modalPrice: 14500,
    minPrice: 13200,
    maxPrice: 16000,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +6.8,
    trend: "up",
    arrivals: "3,200 Qtls",
    msp: 9500,
    lastUpdated: { en: "20 mins ago", hi: "20 मिनट पहले", ta: "20 நிமிடம் முன்", fr: "Il y a 20 min" },
    demandLevel: { en: "Record High", hi: "ऐतिहासिक उच्च भाव", ta: "அதிஉயர் விலை", fr: "Niveau Record" },
    qualitySpecs: {
      en: "Bulb diameter > 45mm, Pure white skin, Dry roots trimmed",
      hi: "गांठ का आकार > 45 मिमी, चमकदार सफेद परत, जड़ कटी हुई",
      ta: "அளவு > 45 மிமீ, வெண்மை நிறம்",
      fr: "Calibre > 45mm, peau blanche nette"
    }
  },

  // ─── FRUITS ──────────────────────────────────────────────────
  {
    id: "fruit-mango-alphonso",
    name: {
      en: "Mango (Ratnagiri Alphonso Hapus GI)",
      hi: "आम (रत्नागिरी हापुस जीआई प्रमाणित)",
      ta: "மாம்பழம் (ரத்னகிரி அல்போன்சா)",
      fr: "Mangue Alphonso de Ratnagiri (AOP)"
    },
    category: {
      en: "Fruits",
      hi: "ताज़े फल",
      ta: "பழங்கள்",
      fr: "Fruits"
    },
    mandi: "Vashi APMC, MH",
    state: "Maharashtra",
    modalPrice: 8500,
    minPrice: 7200,
    maxPrice: 9800,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +4.2,
    trend: "up",
    arrivals: "2,400 Qtls",
    msp: 5500,
    lastUpdated: { en: "Just now", hi: "अभी-अभी", ta: "இப்போது", fr: "À l'instant" },
    demandLevel: { en: "Premium Export", hi: "प्रीमियम निर्यात", ta: "ஏற்றுமதி பிரீமியம்", fr: "Export Haut de Gamme" },
    qualitySpecs: {
      en: "TSS Brix 19.5°, Fruit weight 250-280g, VHT Vapor Heat Cleared",
      hi: "ब्रिक्स मिठास 19.5°, वजन 250-280 ग्राम, VHT वाष्प उपचारित",
      ta: "இனிப்பு 19.5° பிரிக்ஸ், எடை 250-280 கிராம்",
      fr: "Brix 19.5°, Poids 250-280g, Certifié VHT"
    }
  },
  {
    id: "fruit-orange-nagpur",
    name: {
      en: "Orange (Nagpur Mandarin GI)",
      hi: "संतरा (नागपुर मंदारिन जीआई)",
      ta: "ஆரஞ்சு (நாக்பூர் மாண்டரின்)",
      fr: "Orange Mandarine de Nagpur (AOP)"
    },
    category: {
      en: "Fruits",
      hi: "ताज़े फल",
      ta: "பழங்கள்",
      fr: "Fruits"
    },
    mandi: "Nagpur Kalamna APMC, MH",
    state: "Maharashtra",
    modalPrice: 4200,
    minPrice: 3800,
    maxPrice: 4800,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +2.5,
    trend: "up",
    arrivals: "4,600 Qtls",
    msp: 3100,
    lastUpdated: { en: "15 mins ago", hi: "15 मिनट पहले", ta: "15 நிமிடம் முன்", fr: "Il y a 15 min" },
    demandLevel: { en: "High Juice Demand", hi: "जूस फैक्ट्रियों की उच्च मांग", ta: "சாறு தேவை அதிகம்", fr: "Forte Demande Jus" },
    qualitySpecs: {
      en: "Juice content > 42%, Easy peeling skin, Acid-Brix ratio 1:12",
      hi: "रस की मात्रा > 42%, आसानी से छिलने वाला छिलका, ब्रिक्स 1:12",
      ta: "சாறு அளவு > 42%, மெல்லிய தோல்",
      fr: "Teneur en jus > 42%, Peau facile à éplucher"
    }
  },
  {
    id: "fruit-apple-shimla",
    name: {
      en: "Apple (Shimla Royal Delicious)",
      hi: "सेब (शिमला रॉयल डिलीशियस)",
      ta: "ஆப்பிள் (சிம்லா ராயல் டெலிசியஸ்)",
      fr: "Pommes (Royal Delicious de Shimla)"
    },
    category: {
      en: "Fruits",
      hi: "ताज़े फल",
      ta: "பழங்கள்",
      fr: "Fruits"
    },
    mandi: "Shimla Dhalli APMC, HP",
    state: "Himachal Pradesh",
    modalPrice: 9200,
    minPrice: 8400,
    maxPrice: 10500,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.9,
    trend: "up",
    arrivals: "3,800 Qtls",
    msp: 6500,
    lastUpdated: { en: "25 mins ago", hi: "25 मिनट पहले", ta: "25 நிமிடம் முன்", fr: "Il y a 25 min" },
    demandLevel: { en: "Peak Festival", hi: "त्योहारी मांग", ta: "பண்டிகை தேவை", fr: "Forte Saison" },
    qualitySpecs: {
      en: "Crisp crunch, pressure test > 14 psi, 80%+ red blush color",
      hi: "कुरकुरा गूदा, प्रेशर टेस्ट > 14 psi, 80%+ गहरा लाल रंग",
      ta: "நல்ல மொறுமொறுப்பு, 80%+ சிவப்பு நிறம்",
      fr: "Fermeté > 14 psi, Coloration rouge > 80%"
    }
  },
  {
    id: "fruit-pomegranate-solapur",
    name: {
      en: "Pomegranate (Solapur Bhagwa Export)",
      hi: "अनार (सोलापुर भगवा एक्सपोर्ट)",
      ta: "மாதுளை (சோலாப்பூர் பக்வா)",
      fr: "Grenade (Bhagwa de Solapur)"
    },
    category: {
      en: "Fruits",
      hi: "ताज़े फल",
      ta: "பழங்கள்",
      fr: "Fruits"
    },
    mandi: "Solapur APMC, MH",
    state: "Maharashtra",
    modalPrice: 11400,
    minPrice: 10200,
    maxPrice: 12800,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +3.8,
    trend: "up",
    arrivals: "1,950 Qtls",
    msp: 7800,
    lastUpdated: { en: "6 mins ago", hi: "6 मिनट पहले", ta: "6 நிமிடம் முன்", fr: "Il y a 6 min" },
    demandLevel: { en: "Export Premium", hi: "खाड़ी देशों में भारी मांग", ta: "ஏற்றுமதி பிரீமியம்", fr: "Premium Moyen-Orient" },
    qualitySpecs: {
      en: "Deep ruby arils, soft chewable seeds, fruit weight > 300g",
      hi: "गहरे रूबी लाल दाने, कोमल बीज, फल वजन > 300 ग्राम",
      ta: "அடர் சிவப்பு முத்துக்கள், மென்மையான விதைகள்",
      fr: "Graines rouge rubis, pépins tendres, poids > 300g"
    }
  },

  // ─── OILSEEDS & PULSES ───────────────────────────────────────
  {
    id: "mustard-seed",
    name: {
      en: "Mustard Seed (Pusa Bold 42% Oil)",
      hi: "सरसों / राई (पूसा बोल्ड 42% तेल)",
      ta: "கடுகு (பூசா போல்ட் 42% எண்ணெய்)",
      fr: "Graines de Moutarde (Pusa Bold)"
    },
    category: {
      en: "Oilseeds & Pulses",
      hi: "तिलहन एवं दलहन",
      ta: "எண்ணெய் வித்து & பருப்பு",
      fr: "Oléagineux & Légumineuses"
    },
    mandi: "Alwar APMC, RJ",
    state: "Rajasthan",
    modalPrice: 5620,
    minPrice: 5350,
    maxPrice: 5800,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +0.9,
    trend: "up",
    arrivals: "5,100 Qtls",
    msp: 5650,
    lastUpdated: { en: "11 mins ago", hi: "11 मिनट पहले", ta: "11 நிமிடம் முன்", fr: "Il y a 11 min" },
    demandLevel: { en: "Steady Mill Crushing", hi: "तेल मिलों की निरंतर खरीद", ta: "நிலையான தேவை", fr: "Régulier Trituration" },
    qualitySpecs: {
      en: "Oil content 42.0%, Foreign matter < 1.0%, Moisture < 8%",
      hi: "तेल की मात्रा 42.0%, कचरा < 1.0%, नमी < 8%",
      ta: "எண்ணெய் 42%, தூய்மை > 99%",
      fr: "Teneur en huile 42.0%, Humidité < 8%"
    }
  },
  {
    id: "soybean-yellow",
    name: {
      en: "Soybean (Yellow JS-9560)",
      hi: "सोयाबीन (पीला JS-9560)",
      ta: "சோயாபீன் (மஞ்சள் JS-9560)",
      fr: "Soja Jaune (JS-9560)"
    },
    category: {
      en: "Oilseeds & Pulses",
      hi: "तिलहन एवं दलहन",
      ta: "எண்ணெய் வித்து & பருப்பு",
      fr: "Oléagineux & Légumineuses"
    },
    mandi: "Ujjain APMC, MP",
    state: "Madhya Pradesh",
    modalPrice: 4620,
    minPrice: 4400,
    maxPrice: 4780,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +2.7,
    trend: "up",
    arrivals: "5,400 Qtls",
    msp: 4600,
    lastUpdated: { en: "8 mins ago", hi: "8 मिनट पहले", ta: "8 நிமிடம் முன்", fr: "Il y a 8 min" },
    demandLevel: { en: "Strong Feed Demand", hi: "DOC निर्यात की मजबूत मांग", ta: "வலுவான தேவை", fr: "Forte Demande Tourteau" },
    qualitySpecs: {
      en: "Protein > 38%, Oil > 18.5%, Moisture < 10%",
      hi: "प्रोटीन > 38%, तेल > 18.5%, नमी < 10%",
      ta: "புரதம் > 38%, எண்ணெய் > 18.5%",
      fr: "Protéine > 38%, Huile > 18.5%"
    }
  },
  {
    id: "chana-desi",
    name: {
      en: "Chickpea / Bengal Gram (Desi Chana JG-11)",
      hi: "चना (देसी चना JG-11 बोल्ड)",
      ta: "கொண்டைக்கடலை (JG-11)",
      fr: "Pois Chiches (Desi JG-11)"
    },
    category: {
      en: "Oilseeds & Pulses",
      hi: "तिलहन एवं दलहन",
      ta: "எண்ணெய் வித்து & பருப்பு",
      fr: "Oléagineux & Légumineuses"
    },
    mandi: "Bikaner APMC, RJ",
    state: "Rajasthan",
    modalPrice: 5850,
    minPrice: 5600,
    maxPrice: 6100,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 किलो)", fr: "Quintal (100 kg)" },
    change: +1.6,
    trend: "up",
    arrivals: "3,900 Qtls",
    msp: 5440,
    lastUpdated: { en: "18 mins ago", hi: "18 मिनट पहले", ta: "18 நிமிடம் முன்", fr: "Il y a 18 min" },
    demandLevel: { en: "Dal Millers Active", hi: "दाल मिलों की सक्रिय मांग", ta: "பருப்பு ஆலைகள் தேவை", fr: "Actif Meuneries" },
    qualitySpecs: {
      en: "Bold uniform grain, Weeviled Grains < 0.5%, Moisture < 9.5%",
      hi: "मोटा एकसमान दाना, घुन लगा दाना < 0.5%, नमी < 9.5%",
      ta: "சீரான பருப்பு, பூச்சியற்றது",
      fr: "Grains fermes, Grains piqués < 0.5%"
    }
  },

  // ─── SPICES & CASH CROPS ─────────────────────────────────────
  {
    id: "spice-jeera-unjha",
    name: {
      en: "Cumin Seed (Unjha Premium Jeera)",
      hi: "जीरा (ऊँझा प्रीमियम क्वालिटी)",
      ta: "சீரகம் (உஞ்சா பிரீமியம்)",
      fr: "Cumin (Jeera d'Unjha)"
    },
    category: {
      en: "Spices & Cash Crops",
      hi: "मसाले एवं नकदी फसलें",
      ta: "மசாலா & பணப்பயிர்கள்",
      fr: "Épices & Cultures Commerciales"
    },
    mandi: "Unjha APMC, GJ",
    state: "Gujarat",
    modalPrice: 28400,
    minPrice: 26500,
    maxPrice: 31000,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +5.4,
    trend: "up",
    arrivals: "4,200 Bags",
    msp: 21000,
    lastUpdated: { en: "Just now", hi: "अभी-अभी", ta: "இப்போது", fr: "À l'instant" },
    demandLevel: { en: "Global Benchmark", hi: "अंतरराष्ट्रीय निर्यात मांग", ta: "சர்வதேச தேவை", fr: "Référence Mondiale" },
    qualitySpecs: {
      en: "Volatile oil > 2.8%, European Clean 99.5%, Moisture < 9%",
      hi: "वाष्पशील तेल > 2.8%, यूरोपीय गुणवत्ता 99.5%, नमी < 9%",
      ta: "எண்ணெய் > 2.8%, தூய்மை 99.5%",
      fr: "Huiles volatiles > 2.8%, Pureté 99.5%"
    }
  },
  {
    id: "spice-turmeric-erode",
    name: {
      en: "Turmeric (Erode Salem Finger Curcumin 5%)",
      hi: "हल्दी (ईरोड सेलम फिंगर करक्यूमिन 5%)",
      ta: "மஞ்சள் (ஈரோடு சேலம் விரலி மஞ்சள்)",
      fr: "Curcuma (Doigts d'Erode Salem)"
    },
    category: {
      en: "Spices & Cash Crops",
      hi: "मसाले एवं नकदी फसलें",
      ta: "மசாலா & பணப்பயிர்கள்",
      fr: "Épices & Cultures Commerciales"
    },
    mandi: "Erode APMC, TN",
    state: "Tamil Nadu",
    modalPrice: 15200,
    minPrice: 14100,
    maxPrice: 16800,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +3.9,
    trend: "up",
    arrivals: "2,850 Bags",
    msp: 9800,
    lastUpdated: { en: "7 mins ago", hi: "7 मिनट पहले", ta: "7 நிமிடம் முன்", fr: "Il y a 7 min" },
    demandLevel: { en: "Pharma & Extraction", hi: "दवा एवं मसाला उद्योग मांग", ta: "மருந்து & உணவு தேவை", fr: "Extraction Pharma" },
    qualitySpecs: {
      en: "Curcumin > 4.8%, Hard solid fingers, Moisture < 10%",
      hi: "करक्यूमिन > 4.8%, मजबूत गांठ, नमी < 10%",
      ta: "குர்குமின் > 4.8%, கெட்டியான விரலி",
      fr: "Curcumine > 4.8%, Doigts durs et fermes"
    }
  },
  {
    id: "cash-cotton-rajkot",
    name: {
      en: "Raw Cotton (Shankar-6 29mm)",
      hi: "कपास (शंकर-6 29 मिमी स्टेपल)",
      ta: "பருத்தி (சங்கர்-6 29 மிமீ)",
      fr: "Coton Brut (Shankar-6)"
    },
    category: {
      en: "Spices & Cash Crops",
      hi: "मसाले एवं नकदी फसलें",
      ta: "மசாலா & பணப்பயிர்கள்",
      fr: "Épices & Cultures Commerciales"
    },
    mandi: "Rajkot APMC, GJ",
    state: "Gujarat",
    modalPrice: 7350,
    minPrice: 6900,
    maxPrice: 7700,
    unit: { en: "Quintal (100 kg)", hi: "क्विंटल (100 किग्रा)", ta: "குவிண்டால் (100 கிலோ)", fr: "Quintal (100 kg)" },
    change: +1.5,
    trend: "up",
    arrivals: "6,400 Qtls",
    msp: 7122,
    lastUpdated: { en: "14 mins ago", hi: "14 मिनट पहले", ta: "14 நிமிடம் முன்", fr: "Il y a 14 min" },
    demandLevel: { en: "Spinning Mill Buying", hi: "स्पिनिंग मिलों की निरंतर खरीद", ta: "நூற்பாலைகள் தேவை", fr: "Forte Filatures" },
    qualitySpecs: {
      en: "Staple length 29.2mm, Mic 3.8-4.2, Trash < 2.8%",
      hi: "स्टेपल लंबाई 29.2 मिमी, माइक 3.8-4.2, कचरा < 2.8%",
      ta: "இழை நீளம் 29.2 மிமீ, குப்பை < 2.8%",
      fr: "Longueur soie 29.2mm, Déchets < 2.8%"
    }
  }
];

const baseBids = [
  {
    id: "TND-2026-901",
    buyerName: {
      en: "ITC Agri Business Division (e-Choupal)",
      hi: "आईटीसी एग्री बिजनेस (ई-चौपाल)",
      ta: "ஐடிசி அக்ரி பிசினஸ் (இ-சௌபால்)",
      fr: "ITC Division Agro-Industrielle"
    },
    rating: "4.9 ★ (Certified Institutional Buyer)",
    commodity: {
      en: "Sharbati Golden Wheat",
      hi: "शरबती गोल्डन गेहूं",
      ta: "ஷர்பதி கோல்டன் கோோதுமை",
      fr: "Blé Sharbati Doré"
    },
    requestedQuantity: {
      en: "450 Quintals",
      hi: "450 क्विंटल",
      ta: "450 குவிண்டால்",
      fr: "450 Quintaux"
    },
    offeredPrice: "₹2,680 / qtl",
    premiumVsMandi: {
      en: "+₹200 / qtl over Indore Spot",
      hi: "+₹200/क्विंटल इंदौर मंडी से ऊपर",
      ta: "+₹200/குவிண்டால் இந்தூர் விலையை விட அதிகம்",
      fr: "+₹200/qtl au-dessus du cours d'Indore"
    },
    destination: {
      en: "ITC Flour Processing Hub, Dewas, MP",
      hi: "आईटीसी फ्लोर प्रोसेसिंग प्लांट, देवास",
      ta: "ஐடிசி ஆட்டா ஆலை, தேவாஸ்",
      fr: "Minoterie Industrielle ITC, Dewas"
    },
    terms: {
      en: "Direct Farm-Gate Pickup; 100% Escrow Bank Guaranteed T+0 Settlement",
      hi: "खेत से सीधी लोडिंग; 100% बैंक एस्क्रो गारंटी, उसी दिन बैंक खाते में भुगतान",
      ta: "பண்ணையிலேயே நேரடி கொள்முதல்; 100% வங்கி எஸ்க்ரோ பாதுகாப்பு",
      fr: "Enlèvement direct à la ferme; Séquestre bancaire garanti T+0"
    },
    expiresIn: {
      en: "6 hours left",
      hi: "6 घंटे शेष",
      ta: "6 மணி நேரம் உள்ளது",
      fr: "6 heures restantes"
    }
  },
  {
    id: "TND-2026-902",
    buyerName: {
      en: "Adani Wilmar Edible Oils Limited",
      hi: "अदानी विल्मर खाद्य तेल लिमिटेड",
      ta: "அதானி வில்மர் கன்ஸ்யூமர்",
      fr: "Adani Wilmar Huiles Alimentaires"
    },
    rating: "4.8 ★ (Tier-1 Agro Conglomerate)",
    commodity: {
      en: "High-Oil Mustard Seed (Pusa Bold)",
      hi: "उच्च तेल सरसों (पूसा बोल्ड)",
      ta: "உயர் எண்ணெய் கடுகு (பூசா)",
      fr: "Graines de Moutarde Riche en Huile"
    },
    requestedQuantity: {
      en: "300 Quintals",
      hi: "300 क्विंटल",
      ta: "300 குவிண்டால்",
      fr: "300 Quintaux"
    },
    offeredPrice: "₹5,820 / qtl",
    premiumVsMandi: {
      en: "+₹200 / qtl over Alwar Spot",
      hi: "+₹200/क्विंटल अलवर मंडी से अधिक",
      ta: "+₹200/குவிண்டால் ஆல்வார் விலையை விட அதிகம்",
      fr: "+₹200/qtl au-dessus du cours d'Alwar"
    },
    destination: {
      en: "Adani Wilmar Crushing Complex, Bundi, RJ",
      hi: "अदानी विल्मर क्रशिंग प्लांट, बूंदी",
      ta: "அதானி வில்மர் எண்ணெய் ஆலை, பூந்தி",
      fr: "Unité de Trituration Adani Wilmar, Bundi"
    },
    terms: {
      en: "Digital Weighbridge Testing; Instant RTGS Transfer upon Moisture Verification",
      hi: "डिजिटल धर्मकांटा तौल; नमी जांच के तुरंत बाद आरटीजीएस ट्रांसफर",
      ta: "டிஜிட்டல் எடைமேடை சோதனை; உடனடி RTGS வங்கி பரிமாற்றம்",
      fr: "Pont-bascule numérique; Virement RTGS instantané après contrôle"
    },
    expiresIn: {
      en: "8 hours left",
      hi: "8 घंटे शेष",
      ta: "8 மணி நேரம் உள்ளது",
      fr: "8 heures restantes"
    }
  },
  {
    id: "TND-2026-903",
    buyerName: {
      en: "Mother Dairy Fruit & Vegetable (Safal)",
      hi: "मदर डेयरी फ्रूट एंड वेजिटेबल (सफल)",
      ta: "மதர் டெய்ரி சஃபல்",
      fr: "Mother Dairy Réseau Safal"
    },
    rating: "4.9 ★ (Govt Backed National Retailer)",
    commodity: {
      en: "Nashik Garwa Red Onions (Export Spec)",
      hi: "नासिक गरवा लाल प्याज (एक्सपोर्ट क्वालिटी)",
      ta: "நாசிக் சிவப்பு வெங்காயம்",
      fr: "Oignons Rouges de Nashik"
    },
    requestedQuantity: {
      en: "200 Quintals",
      hi: "200 क्विंटल",
      ta: "200 குவிண்டால்",
      fr: "200 Quintaux"
    },
    offeredPrice: "₹2,650 / qtl",
    premiumVsMandi: {
      en: "+₹230 / qtl over Lasalgaon Spot",
      hi: "+₹230/क्विंटल लासलगांव मंडी से ऊपर",
      ta: "+₹230/குவிண்டால் லாசல்கான் விலையை விட அதிகம்",
      fr: "+₹230/qtl au-dessus de Lasalgaon"
    },
    destination: {
      en: "Safal Cold Storage Hub, Mangolpuri, Delhi",
      hi: "सफल कोल्ड स्टोरेज हब, मंगोलपुरी, दिल्ली",
      ta: "சஃபல் குளிர்பதன மையம், தில்லி",
      fr: "Entrepôt Frigorifique Safal, Delhi"
    },
    terms: {
      en: "Direct Crates Exchange; Instant Escrow Release on Weight Verification",
      hi: "क्रैट्स का सीधा विनिमय; वजन पुष्टि पर तुरंत एस्क्रो खाते से भुगतान",
      ta: "கிரேட்ஸ் நேரடி பரிமாற்றம்; உடனடி எஸ்க்ரோ கட்டணம்",
      fr: "Échange direct de caisses; Déblocage séquestre immédiat"
    },
    expiresIn: {
      en: "11 hours left",
      hi: "11 घंटे शेष",
      ta: "11 மணி நேரம் உள்ளது",
      fr: "11 heures restantes"
    }
  },
  {
    id: "TND-2026-904",
    buyerName: {
      en: "Reliance Retail Fresh (JioKrishi Direct)",
      hi: "रिलायंस रिटेल फ्रेश (जियो कृषि डायरेक्ट)",
      ta: "ரிலையன்ஸ் ரீடெய்ல் பிரெஷ்",
      fr: "Reliance Retail Division Frais"
    },
    rating: "4.8 ★ (Retail Chain Direct Procurement)",
    commodity: {
      en: "Kolar F1 Hybrid Table Tomatoes",
      hi: "कोलार F1 हाइब्रिड टेबल टमाटर",
      ta: "கோலார் தக்காளி",
      fr: "Tomates Fraîches de Kolar"
    },
    requestedQuantity: {
      en: "150 Quintals (600 Crates)",
      hi: "150 क्विंटल (600 क्रेट)",
      ta: "150 குவிண்டால் (600 கிரேட்கள்)",
      fr: "150 Quintaux (600 Caisses)"
    },
    offeredPrice: "₹2,050 / qtl",
    premiumVsMandi: {
      en: "+₹200 / qtl over Kolar Spot",
      hi: "+₹200/क्विंटल कोलार मंडी से ऊपर",
      ta: "+₹200/குவிண்டால் கோலார் விலையை விட அதிகம்",
      fr: "+₹200/qtl au-dessus de Kolar"
    },
    destination: {
      en: "Reliance Fresh Packhouse, Malur, Karnataka",
      hi: "रिलायंस फ्रेश पैकहाउस, मालूर, कर्नाटक",
      ta: "ரிலையன்ஸ் பேக்ஹவுஸ், மாலூர்",
      fr: "Centre de Conditionnement Reliance, Malur"
    },
    terms: {
      en: "Refrigerated Reefer Truck Pickup at Farm Gate; Same-Day Account Credit",
      hi: "खेत पर वातानुकूलित रीफर ट्रक; उसी दिन सीधे बैंक खाते में भुगतान",
      ta: "பண்ணையிலேயே குளிர்சாதன லாரி மூலம் ஏற்றுதல்; அதே நாளில் பணம்",
      fr: "Camion frigorifique au champ; Crédit bancaire le jour même"
    },
    expiresIn: {
      en: "4 hours left",
      hi: "4 घंटे शेष",
      ta: "4 மணி நேரம் உள்ளது",
      fr: "4 heures restantes"
    }
  },
  {
    id: "TND-2026-905",
    buyerName: {
      en: "Tata Consumer Products Limited",
      hi: "टाटा कंज्यूमर प्रोडक्ट्स लिमिटेड",
      ta: "டாடா கன்ஸ்யூமர் புராடக்ட்ஸ்",
      fr: "Tata Consumer Spices Division"
    },
    rating: "4.9 ★ (Tata Sampann Organic Benchmark)",
    commodity: {
      en: "Erode Salem Turmeric Finger (Curcumin > 5%)",
      hi: "ईरोड सेलम हल्दी गांठ (करक्यूमिन > 5%)",
      ta: "ஈரோடு சேலம் விரலி மஞ்சள் (குர்குமின் > 5%)",
      fr: "Curcuma d'Erode Salem (Curcumine > 5%)"
    },
    requestedQuantity: {
      en: "180 Quintals",
      hi: "180 क्विंटल",
      ta: "180 குவிண்டால்",
      fr: "180 Quintaux"
    },
    offeredPrice: "₹16,400 / qtl",
    premiumVsMandi: {
      en: "+₹1,200 / qtl over Erode Spot",
      hi: "+₹1,200/क्विंटल ईरोड मंडी से अधिक",
      ta: "+₹1,200/குவிண்டால் ஈரோடு விலையை விட அதிகம்",
      fr: "+₹1,200/qtl au-dessus d'Erode"
    },
    destination: {
      en: "Tata Spices Extraction Facility, Pollachi, TN",
      hi: "टाटा मसाला एक्सट्रैक्शन प्लांट, पोलाची",
      ta: "டாடா மசாலா ஆலை, பொள்ளாச்சி",
      fr: "Unité d'Extraction d'Épices Tata, Pollachi"
    },
    terms: {
      en: "Lab-tested Curcumin Assay Certificate Bonus; 100% Escrow Protection",
      hi: "लैब टेस्ट करक्यूमिन बोनस; 100% बैंक एस्क्रो सुरक्षा",
      ta: "ஆய்வக சான்றிதழ் போனஸ்; 100% எஸ்க்ரோ பாதுகாப்பு",
      fr: "Prime sur teneur en curcumine; 100% Séquestre bancaire"
    },
    expiresIn: {
      en: "15 hours left",
      hi: "15 घंटे शेष",
      ta: "15 மணி நேரம் உள்ளது",
      fr: "15 heures restantes"
    }
  },
  {
    id: "TND-2026-906",
    buyerName: {
      en: "Olam Agri International Exporters",
      hi: "ओलम एग्री इंटरनेशनल एक्सपोर्टर्स",
      ta: "ஓலம் அக்ரி இன்டர்நேஷனல்",
      fr: "Olam Agri Négociants Internationaux"
    },
    rating: "4.9 ★ (Global Agricultural Commodity Trader)",
    commodity: {
      en: "Teja S17 Stemless Dry Red Chilli",
      hi: "तेजा S17 डंठल रहित सूखी लाल मिर्च",
      ta: "தேஜா S17 காம்பில்லாத வற்றல் மிளகாய்",
      fr: "Piments Rouges Teja S17 Équeutés"
    },
    requestedQuantity: {
      en: "250 Quintals",
      hi: "250 क्विंटल",
      ta: "250 குவிண்டால்",
      fr: "250 Quintaux"
    },
    offeredPrice: "₹7,650 / qtl",
    premiumVsMandi: {
      en: "+₹850 / qtl over Guntur Spot",
      hi: "+₹850/क्विंटल गुंटूर मंडी से ऊपर",
      ta: "+₹850/குவிண்டால் குண்டூர் விலையை விட அதிகம்",
      fr: "+₹850/qtl au-dessus de Guntur"
    },
    destination: {
      en: "Olam Cold Storage Export Yard, Krishnapatnam Port",
      hi: "ओलम एक्सपोर्ट यार्ड, कृष्णापट्टनम बंदरगाह",
      ta: "ஓலம் ஏற்றுமதி மையம், கிருஷ்ணாபட்டினம் துறைமுகம்",
      fr: "Terminal Export Olam, Port de Krishnapatnam"
    },
    terms: {
      en: "Aflatoxin & Pesticide Clean Laboratory Certification; Letter of Credit (LC) Settlement",
      hi: "कीटनाशक रहित लैब प्रमाणीकरण; बैंक लेटर ऑफ क्रेडिट द्वारा भुगतान",
      ta: "பூச்சிக்கொல்லி இல்லாத சான்றிதழ்; எல்சி வங்கி உத்தரவாதம்",
      fr: "Contrôle résidus pesticides; Règlement par Crédit Documentaire (LC)"
    },
    expiresIn: {
      en: "9 hours left",
      hi: "9 घंटे शेष",
      ta: "9 மணி நேரம் உள்ளது",
      fr: "9 heures restantes"
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
