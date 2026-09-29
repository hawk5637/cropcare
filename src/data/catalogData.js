// Comprehensive Agricultural Catalog for CropCare Smart Agriculture Platform
// Sourced from Govt of India (ICAR, Agmarknet, e-NAM, NSC) & Certified Equipment OEMs (Mahindra, Sonalika, John Deere, Bosch, Luk, Exide)
// Categories: 'produce' (26), 'seeds' (12), 'machinery' (12), 'spares' (14) = 64 Total SKUs
// Fully localized names across English (en), Hindi (hi), Tamil (ta), and French (fr)

export const catalogItems = [
  // ═════════════════════════════════════════════════════════════════
  // ─── 1. FRESH FRUITS & VEGETABLES (26 items) ─────────────────────
  // ═════════════════════════════════════════════════════════════════
  {
    id: "prod-mango",
    key: "mango",
    category: "produce",
    name: {
      en: "Ratnagiri Alphonso Mango (Hapus GI Tagged)",
      hi: "रत्नागिरी हापुस आम (जीआई प्रमाणित)",
      ta: "ரத்னகிரி அல்போன்சா மாம்பழம் (GI முத்திரை)",
      fr: "Mangue Alphonso de Ratnagiri (IGP)"
    },
    price: 950,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Ratnagiri APMC, Maharashtra",
    specs: { brix: "18.5°", grade: "Export A+ Handpicked", shelfLife: "14 Days", packaging: "Foam Padded Vent Box" }
  },
  {
    id: "prod-orange",
    key: "orange",
    category: "produce",
    name: {
      en: "Nagpur Mandarin Orange (Grade-A Table)",
      hi: "नागपुर संतरा (ग्रेड-ए टेबल फ्रूट)",
      ta: "நாக்பூர் ஆரஞ்சு பழம் (கிரேடு-ஏ)",
      fr: "Mandarine de Nagpur (Qualité Supérieure)"
    },
    price: 680,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Nagpur APMC, Maharashtra",
    specs: { brix: "12.8°", grade: "Grade-A Table", shelfLife: "21 Days", packaging: "Reinforced Mesh Crate" }
  },
  {
    id: "prod-apple",
    key: "apple",
    category: "produce",
    name: {
      en: "Kashmir Royal Delicious Apple (Crisp Red)",
      hi: "कश्मीरी रॉयल डिलीशियस सेब",
      ta: "காஷ்மீர் ராயல் ஆப்பிள் பழம்",
      fr: "Pomme Royal Delicious du Cachemire"
    },
    price: 1850,
    unit: "box (15kg)",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "Sopore Fruit Mandi, Kashmir",
    specs: { variety: "Royal Delicious", grade: "Extra Fancy 75-80mm", shelfLife: "45 Days", packaging: "Cell Tray Corrugated Box" }
  },
  {
    id: "prod-banana",
    key: "banana",
    category: "produce",
    name: {
      en: "Jalgaon Grand Naine Banana (G-9 Fresh)",
      hi: "जलगांव ग्रैंड नैने केला (जी-9)",
      ta: "ஜல்கான் கிராண்ட் நைனே வாழைப்பழம் (G-9)",
      fr: "Banane Grand Naine de Jalgaon (G-9)"
    },
    price: 420,
    unit: "box (13kg)",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    rating: 4.78,
    origin: "Jalgaon APMC, Maharashtra",
    specs: { calibration: "39-44 mm", grade: "Export Class 1", shelfLife: "10 Days", packaging: "Cold Gas Flushed Box" }
  },
  {
    id: "prod-pomegranate",
    key: "pomegranate",
    category: "produce",
    name: {
      en: "Solapur Bhagwa Ruby Pomegranate",
      hi: "सोलापुर भगवा अनार (गहरा लाल दाना)",
      ta: "சோலாப்பூர் பக்வா மாதுளம்பழம்",
      fr: "Grenade Bhagwa Rubis de Solapur"
    },
    price: 1400,
    unit: "box (10kg)",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Solapur APMC, Maharashtra",
    specs: { variety: "Bhagwa", arilColor: "Deep Ruby Red", shelfLife: "30 Days", packaging: "Foam Cell Export Tray" }
  },
  {
    id: "prod-tomato",
    key: "tomato",
    category: "produce",
    name: {
      en: "Kolar F1 Hybrid Red Tomato",
      hi: "कोलार F1 हाइब्रिड लाल टमाटर",
      ta: "கோலார் கலப்பின சிவப்பு தக்காளி",
      fr: "Tomate Hybride F1 de Kolar"
    },
    price: 450,
    unit: "crate (25kg)",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "Kolar APMC, Karnataka",
    specs: { variety: "Syngenta Abhinav F1", firmness: "94% Table Hard", shelfLife: "14 Days", packaging: "Poly Vented Crate" }
  },
  {
    id: "prod-potato",
    key: "potato",
    category: "produce",
    name: {
      en: "Agra Kufri Jyoti Table Potato",
      hi: "आगरा कुफरी ज्योति टेबल आलू",
      ta: "ஆக்ரா குப்ரி ஜோதி உருளைக்கிழங்கு",
      fr: "Pomme de Terre Kufri Jyoti d'Agra"
    },
    price: 1100,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Agra APMC, Uttar Pradesh",
    specs: { variety: "Kufri Jyoti", dryMatter: "19.5%", shelfLife: "90 Days", packaging: "Treated Jute Gunny Bag" }
  },
  {
    id: "prod-onion",
    key: "onion",
    category: "produce",
    name: {
      en: "Lasalgaon Red Storage Onion",
      hi: "लासलगांव लाल प्याज (उच्च भंडारण क्षमता)",
      ta: "லாசல்கான் சிவப்பு சேமிப்பு வெங்காயம்",
      fr: "Oignon Rouge de Lasalgaon"
    },
    price: 1850,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Lasalgaon APMC, Maharashtra",
    specs: { variety: "Garwa Red", pungency: "High Pyruvic Acid", shelfLife: "75 Days", packaging: "High-Airflow Leno Mesh Bag" }
  },
  {
    id: "prod-cauliflower",
    key: "cauliflower",
    category: "produce",
    name: {
      en: "Snow White Compact Cauliflower",
      hi: "स्नो व्हाइट ठोस फूलगोभी",
      ta: "பனி வெள்ளை காலிஃபிளவர்",
      fr: "Chou-Fleur Blanc Neige Compact"
    },
    price: 360,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Azadpur APMC, Delhi",
    specs: { curdColor: "Snow White Solid", compactness: "Grade-1 Tight", shelfLife: "8 Days", packaging: "Micro-Perforated Sack" }
  },
  {
    id: "prod-chilli",
    key: "chilli",
    category: "produce",
    name: {
      en: "Guntur Teja S17 Hot Red Chilli",
      hi: "गुंटूर तेजा S17 तीखी लाल मिर्च",
      ta: "குண்டூர் தேஜா S17 கார மிளகாய்",
      fr: "Piment Rouge Fort Guntur Teja S17"
    },
    price: 980,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Guntur APMC, Andhra Pradesh",
    specs: { heatUnits: "75,000 SHU", length: "8-10 cm", shelfLife: "20 Days", packaging: "Moisture-Proof Carton" }
  },
  {
    id: "prod-brinjal",
    key: "brinjal",
    category: "produce",
    name: {
      en: "Round Glossy Deep Purple Brinjal",
      hi: "गोल चमकदार गहरा बैंगनी बैंगन",
      ta: "பளபளப்பான கத்தரிக்காய்",
      fr: "Aubergine Ronde Pourpre Brillante"
    },
    price: 380,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1628773822503-930a846e49a8?auto=format&fit=crop&w=800&q=80",
    rating: 4.65,
    origin: "Karnal APMC, Haryana",
    specs: { variety: "Round Deep Purple", calyx: "Fresh Green Spine-Free", shelfLife: "9 Days", packaging: "Vented Agri Crate" }
  },
  {
    id: "prod-spinach",
    key: "spinach",
    category: "produce",
    name: {
      en: "Hydroponic Fresh Farmgate Spinach",
      hi: "हाइड्रोपोनिक ताजा पालक (कीटनाशक मुक्त)",
      ta: "புதிய பசலைக்கீரை",
      fr: "Épinards Frais Hydroponiques"
    },
    price: 240,
    unit: "crate (10kg)",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Ludhiana Polyhouse Cluster, Punjab",
    specs: { harvestTime: "Same Day Morning Cut", organic: "Yes (NPOP Certified)", shelfLife: "5 Days", packaging: "Refrigerated Transit Crate" }
  },
  {
    id: "prod-guava",
    key: "guava",
    category: "produce",
    name: {
      en: "Prayagraj Allahabad Safeda Guava",
      hi: "प्रयागराज इलाहाबादी सफेदा अमरूद",
      ta: "அலகாபாத் சபேதா கொய்யாப்பழம்",
      fr: "Goyave Allahabad Safeda de Prayagraj"
    },
    price: 520,
    unit: "crate (15kg)",
    image: "https://images.unsplash.com/photo-1536511135899-7360216298b4?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "Prayagraj Mandi, Uttar Pradesh",
    specs: { variety: "Allahabad Safeda", pulp: "Cream White Dense", shelfLife: "10 Days", packaging: "Shock-Absorbing Molded Tray" }
  },
  {
    id: "prod-papaya",
    key: "papaya",
    category: "produce",
    name: {
      en: "Anantapur Red Lady 786 Sweet Papaya",
      hi: "अनंतपुर रेड लेडी 786 मीठा पपीता",
      ta: "அனந்தபூர் ரெட் லேடி 786 பப்பாளி",
      fr: "Papaye Douce Red Lady 786 d'Anantapur"
    },
    price: 420,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Anantapur APMC, Andhra Pradesh",
    specs: { variety: "Red Lady 786", sweetness: "13.2° Brix", shelfLife: "12 Days", packaging: "Foam Net Sleeve Wrapped" }
  },
  {
    id: "prod-lemon",
    key: "lemon",
    category: "produce",
    name: {
      en: "Eluru Kagzi Juicy Thin-Skinned Lemon",
      hi: "एलुरु कागजी रसदार पतला छिलका नींबू",
      ta: "எலுரு காக்சி தாகமுள்ள எலுமிச்சை",
      fr: "Citron Kagzi Juteux à Peau Fine d'Eluru"
    },
    price: 650,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Eluru APMC, Andhra Pradesh",
    specs: { variety: "Kagzi Lime", juiceContent: "49.5%", shelfLife: "25 Days", packaging: "Woven Cotton Net Bag" }
  },
  {
    id: "prod-bitter-gourd",
    key: "bitterGourd",
    category: "produce",
    name: {
      en: "Dark Green Prickly Karela (Bitter Gourd)",
      hi: "गहरा हरा कांटेदार करेला",
      ta: "பாகற்காய் (கசப்பு சுவை)",
      fr: "Margose Verte Épineuse (Courge Amère)"
    },
    price: 480,
    unit: "bag (15kg)",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
    rating: 4.68,
    origin: "Hisar APMC, Haryana",
    specs: { variety: "Green Ribbed", color: "Dark Glossy Green", shelfLife: "9 Days", packaging: "Vent Plastic Crate" }
  },
  {
    id: "prod-bottle-gourd",
    key: "bottleGourd",
    category: "produce",
    name: {
      en: "Tender Cylindrical Lauki (Bottle Gourd)",
      hi: "कोमल बेलनाकार लौकी / घिया",
      ta: "சுரைக்காய் (நீள வடிவம்)",
      fr: "Calebasse Cylindrique Tendre (Lauki)"
    },
    price: 320,
    unit: "bag (25kg)",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Rohtak APMC, Haryana",
    specs: { shape: "Straight Cylindrical 40cm", tenderness: "Optimum Seedless Core", shelfLife: "10 Days", packaging: "Breathable Gunny Sack" }
  },
  {
    id: "prod-cabbage",
    key: "cabbage",
    category: "produce",
    name: {
      en: "Ooty Express Crisp Green Cabbage",
      hi: "ऊटी एक्सप्रेस कुरकुरी हरी पत्तागोभी",
      ta: "ஊட்டி எக்ஸ்பிரஸ் முட்டைக்கோஸ்",
      fr: "Chou Vert Croquant Ooty Express"
    },
    price: 350,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.74,
    origin: "Ooty Market, Nilgiris, Tamil Nadu",
    specs: { density: "Extra Compact Head", variety: "Green Express", shelfLife: "20 Days", packaging: "Heavy Poly Mesh Sack" }
  },
  {
    id: "prod-carrot",
    key: "carrot",
    category: "produce",
    name: {
      en: "Pusa Rudhira Sweet Red Carrot",
      hi: "पूसा रुधिरा मीठी लाल गाजर",
      ta: "பூசா ருதிரா சிவப்பு கேரட்",
      fr: "Carotte Rouge Sucrée Pusa Rudhira"
    },
    price: 490,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "Karnal APMC, Haryana",
    specs: { variety: "Pusa Rudhira Red", lycopene: "High Antioxidant Red", shelfLife: "15 Days", packaging: "Hydro-Washed Cold Bags" }
  },
  {
    id: "prod-radish",
    key: "radish",
    category: "produce",
    name: {
      en: "Japanese Long Crisp White Radish",
      hi: "जापानी सफेद लंबी कुरकुरी मूली",
      ta: "வெள்ளை முள்ளங்கி",
      fr: "Radis Blanc Long Croquant Japonais"
    },
    price: 280,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    rating: 4.62,
    origin: "Amritsar Mandi, Punjab",
    specs: { variety: "Japanese White", rootLength: "32-35 cm", shelfLife: "7 Days", packaging: "Tied Fresh Bunches" }
  },
  {
    id: "prod-green-peas",
    key: "greenPeas",
    category: "produce",
    name: {
      en: "Shimla Hill Pod-Filled Sweet Green Peas",
      hi: "शिमला पहाड़ी मीठी हरी मटर",
      ta: "சிம்லா இனிப்பு பச்சை பட்டாணி",
      fr: "Petits Pois Doux des Collines de Shimla"
    },
    price: 850,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Shimla APMC, Himachal Pradesh",
    specs: { podFill: "9-11 Plump Sweet Grains", sweetness: "Extra High Sugars", shelfLife: "9 Days", packaging: "Insulated Chilled Crate" }
  },
  {
    id: "prod-cucumber",
    key: "cucumber",
    category: "produce",
    name: {
      en: "Greenhouse English Seedless Crisp Cucumber",
      hi: "ग्रीनहाउस इंग्लिश बिना बीज वाला खीरा",
      ta: "விதையற்ற வெள்ளரிக்காய்",
      fr: "Concombre Anglais Sans Pépins de Serre"
    },
    price: 410,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    rating: 4.79,
    origin: "Faridabad Polyhouse, Haryana",
    specs: { type: "Polyhouse European Seedless", bitterness: "100% Zero Bitterness", shelfLife: "12 Days", packaging: "Foam Sleeved Carton" }
  },
  {
    id: "prod-watermelon",
    key: "watermelon",
    category: "produce",
    name: {
      en: "Namdhari Black Sweet Crimson Watermelon",
      hi: "नामधारी काला मीठा तरबूज",
      ta: "நாம்தாரி இனிப்பு தர்பூசணி",
      fr: "Pastèque Noire Sucrée Namdhari"
    },
    price: 850,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Villupuram Mandi, Tamil Nadu",
    specs: { variety: "Namdhari Sugar Baby", sweetness: "12.5° Brix", shelfLife: "18 Days", packaging: "Straw Bedded Truckload / Bulk" }
  },
  {
    id: "prod-muskmelon",
    key: "muskmelon",
    category: "produce",
    name: {
      en: "Kundan Madhur Dense Netted Muskmelon",
      hi: "कुंदन मधुर घना जालीदार खरबूजा",
      ta: "குந்தன் மதுர் முலாம் பழம்",
      fr: "Melon Cantaloup Brodé Kundan Madhur"
    },
    price: 680,
    unit: "crate (25kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Bikaner APMC, Rajasthan",
    specs: { variety: "Kundan Madhur", netting: "Dense Symmetrical", shelfLife: "11 Days", packaging: "Corrugated Cushion Crate" }
  },
  {
    id: "prod-pineapple",
    key: "pineapple",
    category: "produce",
    name: {
      en: "Siliguri Giant Kew Aromatic Pineapple",
      hi: "सिलीगुड़ी जायंट क्यू सुगंधित अनानास",
      ta: "சிலிகுரி பெரிய அன்னாசி பழம்",
      fr: "Ananas Aromatique Géant Kew de Siliguri"
    },
    price: 1100,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Siliguri APMC, West Bengal",
    specs: { variety: "Giant Kew", crown: "Intact Export Trimmed", shelfLife: "20 Days", packaging: "Heavy Cardboard Export Box" }
  },
  {
    id: "prod-sweet-lime",
    key: "sweetLime",
    category: "produce",
    name: {
      en: "Nalgonda Mosambi Sweet Juicy Lime",
      hi: "नलगोंडा मोसंबी मीठा रसदार नींबू",
      ta: "நல்கொண்டா சாத்துக்குடி (மொசாம்பி)",
      fr: "Lime Douce Juteuse Mosambi de Nalgonda"
    },
    price: 780,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    rating: 4.84,
    origin: "Nalgonda APMC, Telangana",
    specs: { variety: "Mosambi Gold", juiceContent: "54%", shelfLife: "22 Days", packaging: "High-Strength Mesh Bag" }
  },

  // ═════════════════════════════════════════════════════════════════
  // ─── 2. CERTIFIED AGRICULTURAL SEEDS (12 items) ──────────────────
  // ═════════════════════════════════════════════════════════════════
  {
    id: "seed-wheat",
    key: "wheatSeed",
    category: "seeds",
    name: {
      en: "ICAR HD-2967 Certified Foundation Wheat Seeds",
      hi: "आईसीएआर एचडी-2967 प्रमाणित गेहूं बीज",
      ta: "ICAR HD-2967 சான்றளிக்கப்பட்ட கோதுமை விதைகள்",
      fr: "Semences de Blé Certifiées ICAR HD-2967"
    },
    price: 2450,
    unit: "bag (40kg)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "ICAR-IARI Karnal Regional Station",
    specs: { variety: "HD-2967", purity: "99.4%", germination: "95%", seedTreatment: "Carboxin 37.5% + Thiram 37.5% WS", yieldPotential: "26 Qtls/Acre" }
  },
  {
    id: "seed-wheat-dbw187",
    key: "wheatSeedDbw187",
    category: "seeds",
    name: {
      en: "ICAR-IIWBR DBW-187 Karan Vandana Wheat Seeds",
      hi: "आईसीएआर डीबीडब्ल्यू-187 करण वंदना गेहूं बीज",
      ta: "ICAR DBW-187 கரண் வந்தனா கோதுமை விதைகள்",
      fr: "Semences de Blé ICAR DBW-187 Karan Vandana"
    },
    price: 2750,
    unit: "bag (40kg)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    origin: "Indian Institute of Wheat & Barley Research, Karnal",
    specs: { variety: "DBW-187", purity: "99.5%", germination: "96%", biofortified: "Iron (43.1 ppm) & Zinc (40.5 ppm)", rustResistance: "Yellow & Brown Rust Immune" }
  },
  {
    id: "seed-rice",
    key: "riceSeed",
    category: "seeds",
    name: {
      en: "Pusa Basmati 1121 Pedigree Certified Paddy Seeds",
      hi: "पूसा बासमती 1121 प्रमाणित धान बीज",
      ta: "பூசா பாசுமதி 1121 சான்றளிக்கப்பட்ட நெல் விதைகள்",
      fr: "Semences de Riz Basmati Certifiées Pusa 1121"
    },
    price: 3600,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    rating: 4.94,
    origin: "IARI Pusa Institute, New Delhi",
    specs: { variety: "Pusa 1121", purity: "99.8%", germination: "93%", grainLength: "8.4 mm Milled", blastResistance: "Gene Pi-54 Fortified" }
  },
  {
    id: "seed-maize",
    key: "maizeSeed",
    category: "seeds",
    name: {
      en: "PAU PMH-1 High-Yield Hybrid Corn Seeds",
      hi: "पीएयू पीएमएच-1 उच्च उपज हाइब्रिड मक्का बीज",
      ta: "PAU PMH-1 கலப்பின சோள விதைகள்",
      fr: "Semences de Maïs Hybride à Haut Rendement PMH-1"
    },
    price: 1850,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Punjab Agricultural University (PAU), Ludhiana",
    specs: { variety: "PMH-1 Single Cross", purity: "99.0%", germination: "97%", maturity: "95 Days", yieldPotential: "34 Qtls/Acre" }
  },
  {
    id: "seed-soybean",
    key: "soybeanSeed",
    category: "seeds",
    name: {
      en: "IISR JS-9560 Certified Early-Maturity Soybean Seeds",
      hi: "भाकृअनुप जेएस-9560 प्रमाणित शीघ्र पकने वाला सोयाबीन बीज",
      ta: "JS-9560 சான்றளிக்கப்பட்ட சோயாபீன் விதைகள்",
      fr: "Semences de Soja Précoces Certifiées JS-9560"
    },
    price: 2900,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "ICAR-IISR Indore, Madhya Pradesh",
    specs: { variety: "JS-9560", purity: "98.9%", germination: "89%", oilContent: "21.2%", maturity: "84-88 Days" }
  },
  {
    id: "seed-mustard",
    key: "mustardSeed",
    category: "seeds",
    name: {
      en: "DRMR Pusa Bold Bold-Grain Certified Mustard Seeds",
      hi: "डीआरएमआर पूसा बोल्ड मोटा दाना प्रमाणित सरसों बीज",
      ta: "பூசா போல்ட் சான்றளிக்கப்பட்ட கடுகு விதைகள்",
      fr: "Graines de Moutarde Certifiées Pusa Bold"
    },
    price: 750,
    unit: "pouch (2kg)",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Directorate of Rapeseed-Mustard Research, Bharatpur",
    specs: { variety: "Pusa Bold", purity: "99.2%", germination: "94%", oilContent: "42.1%", testWeight: "5.8g / 1000 grains" }
  },
  {
    id: "seed-cotton",
    key: "cottonSeed",
    category: "seeds",
    name: {
      en: "RCH-659 BG-II Bollgard-II Hybrid Cotton Seeds",
      hi: "आरसीएच-659 बीजी-II बोलगार्ड-II हाइब्रिड कपास बीज",
      ta: "RCH-659 BG-II கலப்பின பருத்தி விதைகள்",
      fr: "Semences de Coton Hybride BG-II Bollgard-II"
    },
    price: 880,
    unit: "packet (450g + 120g Refuge)",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Central Institute for Cotton Research (CICR), Nagpur",
    specs: { trait: "Bollgard II Cry1Ac + Cry2Ab", stapleLength: "30.5 mm", strength: "29.5 g/tex", bollWeight: "5.2g" }
  },
  {
    id: "seed-green-gram",
    key: "greenGramSeed",
    category: "seeds",
    name: {
      en: "PAU SML-668 Yellow Mosaic Resistant Moong Seeds",
      hi: "पीएयू एसएमएल-668 पीला मोजेक प्रतिरोधी मूंग बीज",
      ta: "SML-668 மஞ்சள் மொசைக் எதிர்ப்பு பாசிப்பயறு",
      fr: "Semences de Haricot Mungo SML-668 Résistantes au Virus"
    },
    price: 1100,
    unit: "bag (5kg)",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    rating: 4.79,
    origin: "Punjab Agricultural University (PAU), Ludhiana",
    specs: { variety: "SML-668", maturity: "60-63 Days", germination: "92%", virusResistance: "MYMV Immune", podCluster: "Synchronous" }
  },
  {
    id: "seed-pearl-millet",
    key: "pearlMilletSeed",
    category: "seeds",
    name: {
      en: "ICRISAT Dhanashakti Biofortified Bajra Seeds",
      hi: "आईसीआरआईएसएटी धनशक्ति बायोफोर्टिफाइड बाजरा बीज",
      ta: "தனசக்தி சத்துமிக்க கம்பு விதைகள்",
      fr: "Semences de Millet Perlé Biofortifié Dhanashakti"
    },
    price: 450,
    unit: "bag (3kg)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "ICRISAT Patancheru, Telangana",
    specs: { variety: "ICTP 8203 Fe (Dhanashakti)", ironContent: "72 ppm Fe + 40 ppm Zn", droughtTolerance: "Extreme", maturity: "80 Days" }
  },
  {
    id: "seed-groundnut",
    key: "groundnutSeed",
    category: "seeds",
    name: {
      en: "ICAR-DGR TG-37A Certified Trombay Groundnut Seeds",
      hi: "भाकृअनुप टीजी-37ए ट्रॉम्बे प्रमाणित मूंगफली बीज",
      ta: "TG-37A டிரோம்பே சான்றளிக்கப்பட்ட வேர்க்கடலை விதைகள்",
      fr: "Semences d'Arachide Certifiées Trombay TG-37A"
    },
    price: 3200,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
    rating: 4.86,
    origin: "Directorate of Groundnut Research (DGR), Junagadh",
    specs: { variety: "TG-37A", shellingPercentage: "74.5%", oilContent: "51.8%", maturity: "105 Days" }
  },
  {
    id: "seed-chana-jg11",
    key: "chanaSeedJg11",
    category: "seeds",
    name: {
      en: "ICRISAT JG-11 Certified Wilt-Resistant Desi Chickpea Seeds",
      hi: "आईसीआरआईएसएटी जेजी-11 उकठा प्रतिरोधी देसी चना बीज",
      ta: "JG-11 சான்றளிக்கப்பட்ட கொண்டைக்கடலை விதைகள்",
      fr: "Semences de Pois Chiche Certifiées JG-11 Résistantes"
    },
    price: 2850,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    rating: 4.91,
    origin: "JNKVV Jabalpur & ICRISAT",
    specs: { variety: "JG-11 Desi", purity: "99.1%", germination: "93%", wiltResistance: "Fusarium Wilt Immune", seedWeight: "26g / 100 seeds" }
  },
  {
    id: "seed-tomato-abhinav",
    key: "tomatoSeedAbhinav",
    category: "seeds",
    name: {
      en: "Syngenta Abhinav F1 TyLCV Resistant Hybrid Tomato Seeds",
      hi: "सिंजेंटा अभिनव F1 हाइब्रिड टमाटर बीज (लीफ कर्ल प्रतिरोधी)",
      ta: "சின்ஜெண்டா அபினவ் F1 கலப்பின தக்காளி விதைகள்",
      fr: "Semences de Tomate Hybride F1 Syngenta Abhinav"
    },
    price: 980,
    unit: "pouch (3,000 seeds)",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80",
    rating: 4.97,
    origin: "Syngenta India Certified R&D",
    specs: { variety: "Abhinav F1", germination: "98%", firmness: "Superb Long Distance Transport", fruitWeight: "85-100g", tolerance: "TyLCV & Bacterial Wilt" }
  },

  // ═════════════════════════════════════════════════════════════════
  // ─── 3. FARMING VEHICLES & HEAVY MACHINERY (12 items) ────────────
  // ═════════════════════════════════════════════════════════════════
  {
    id: "mach-mahindra-575",
    key: "mahindra575",
    category: "machinery",
    name: {
      en: "Mahindra 575 DI XP Plus Agricultural Tractor (47 HP)",
      hi: "महिंद्रा 575 डीआई एक्सपी प्लस ट्रैक्टर (47 एचपी)",
      ta: "மகிந்திரா 575 DI XP பிளஸ் டிராக்டர் (47 HP)",
      fr: "Tracteur Agricole Mahindra 575 DI XP Plus (47 CV)"
    },
    price: 745000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "Mahindra & Mahindra Swaraj Tractors OEM",
    specs: { hp: "47 HP @ 2000 RPM", engine: "4-Cylinder Extra Long Stroke ELS DI", pto: "42 HP 540 RPM", liftCapacity: "1500 kg Hydraulic", warranty: "6 Years Industry Warranty" }
  },
  {
    id: "mach-sonalika-tiger",
    key: "sonalikaTiger",
    category: "machinery",
    name: {
      en: "Sonalika Tiger DI 75 4WD CRDi Heavy-Duty Tractor (75 HP)",
      hi: "सोनालिका टाइगर डीआई 75 4WD सीआरडीआई ट्रैक्टर (75 एचपी)",
      ta: "சோனாலிகா டைகர் DI 75 4WD டிராக்டர் (75 HP)",
      fr: "Tracteur Lourd Sonalika Tiger DI 75 4WD CRDi (75 CV)"
    },
    price: 1120000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    rating: 4.93,
    origin: "Sonalika International Hoshiarpur OEM",
    specs: { hp: "75 HP CRDi Trem-IV", engine: "4-Cylinder 4712cc Turbocharged", pto: "65 HP Multi-Speed Reverse", liftCapacity: "2200 kg Exosensing", transmission: "12F + 12R Shuttle Shift" }
  },
  {
    id: "mach-johndeere-5310",
    key: "johnDeere5310",
    category: "machinery",
    name: {
      en: "John Deere 5310 GearPro Dual Clutch 4WD Tractor (55 HP)",
      hi: "जॉन डियर 5310 गियरप्रो ड्यूल क्लच 4WD ट्रैक्टर (55 एचपी)",
      ta: "ஜான் டீர் 5310 கியர்ப்ரோ 4WD டிராக்டர் (55 HP)",
      fr: "Tracteur John Deere 5310 GearPro 4WD (55 CV)"
    },
    price: 980000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.97,
    origin: "John Deere India OEM, Pune",
    specs: { hp: "55 HP Turbocharged", engine: "John Deere 3029T 3-Cylinder", pto: "46.7 HP Independent", liftCapacity: "2000 kg PowrReverser", brakes: "Self-Adjusting Oil Immersed" }
  },
  {
    id: "mach-swaraj-744",
    key: "swaraj744",
    category: "machinery",
    name: {
      en: "Swaraj 855 FE Multi-Speed PTO Tractor (52 HP)",
      hi: "स्वराज 855 एफई मल्टी-स्पीड पीटीओ ट्रैक्टर (52 एचपी)",
      ta: "சுவராஜ் 855 FE மல்டி-ஸ்பீட் PTO டிராக்டர் (52 HP)",
      fr: "Tracteur Agricole Swaraj 855 FE Multi-Régimes (52 CV)"
    },
    price: 810000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
    rating: 4.91,
    origin: "Swaraj Division (Mahindra), Mohali",
    specs: { hp: "52 HP @ 2000 RPM", engine: "3-Cylinder RB-33 TR 3478cc", pto: "46 HP Multi-Speed & Reverse", liftCapacity: "1700 kg", steering: "Balanced Power Steering" }
  },
  {
    id: "mach-kubota-mu4501",
    key: "kubotaMu4501",
    category: "machinery",
    name: {
      en: "Kubota MU4501 4WD High-Torque Japanese Tractor (45 HP)",
      hi: "कुबोटा MU4501 4WD जापानी तकनीक ट्रैक्टर (45 एचपी)",
      ta: "குபோடா MU4501 4WD ஜப்பானிய டிராக்டர் (45 HP)",
      fr: "Tracteur Japonais 4WD Kubota MU4501 (45 CV)"
    },
    price: 895000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Kubota Agricultural Machinery India",
    specs: { hp: "45 HP Japanese E-CDIS", engine: "4-Cylinder 2434cc 16-Valve", pto: "38.3 HP Dual Speed", liftCapacity: "1640 kg", transmission: "Synchromesh Shuttle" }
  },
  {
    id: "mach-farmtrac-45",
    key: "farmtrac45",
    category: "machinery",
    name: {
      en: "Escorts Farmtrac 60 Powermaxx T20 Tractor (55 HP)",
      hi: "एस्कॉर्ट्स फार्मट्रैक 60 पावरमैक्स T20 ट्रैक्टर (55 एचपी)",
      ta: "எஸ்கார்ட்ஸ் ஃபார்ம்ட்ராக் 60 டிராக்டர் (55 HP)",
      fr: "Tracteur Escorts Farmtrac 60 Powermaxx (55 CV)"
    },
    price: 790000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.87,
    origin: "Escorts Kubota Agri Machinery, Faridabad",
    specs: { hp: "55 HP @ 2000 RPM", engine: "3-Cylinder AVL 3514cc", pto: "49 HP Multi-Speed", liftCapacity: "1800 kg Sensi-1", transmission: "16F + 4R Constant Mesh T20" }
  },
  {
    id: "mach-preet-combine",
    key: "preetCombineHarvester",
    category: "machinery",
    name: {
      en: "Preet 987 Deluxe Self-Propelled Multi-Crop Combine Harvester",
      hi: "प्रीत 987 डीलक्स मल्टी-क्रॉप कंबाइन हार्वेस्टर (101 एचपी)",
      ta: "பிரீத் 987 டீலக்ஸ் ஒருங்கிணைந்த அறுவடை இயந்திரம்",
      fr: "Moissonneuse-Batteuse Automotrice Preet 987 Deluxe (101 CV)"
    },
    price: 2450000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "Preet Agro Industries, Nabha, Punjab",
    specs: { engine: "101 HP 6-Cylinder Water-Cooled", cutterBar: "14 Feet Heavy Duty", grainTank: "2400 Liters Capacity", crops: "Paddy, Wheat, Soybean, Mustard, Gram" }
  },
  {
    id: "mach-garuda-drone",
    key: "garudaAgriDrone",
    category: "machinery",
    name: {
      en: "Garuda Kisan DGCA-Certified Autonomous Agricultural Spraying Drone (16L)",
      hi: "गरुड़ किसान डीजीसीए प्रमाणित स्वायत्त कृषि ड्रोन (16 लीटर)",
      ta: "கருடா கிசான் ட்ரோன் (16 லிட்டர் பூச்சிக்கொல்லி தெளிப்பான்)",
      fr: "Drone Agricole Autonome Homologué Garuda Kisan (16L)"
    },
    price: 495000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    origin: "Garuda Aerospace DGCA Authorized",
    specs: { payload: "16 Liters Liquid Chemical / Seeds", coverage: "1 Acre in 6 Minutes", navigation: "RTK Centimeter GPS + Radar Obstacle Avoidance", battery: "Dual 22,000mAh Smart Lipo (Fast Charging 15m)" }
  },
  {
    id: "mach-shaktiman-rotavator",
    key: "shaktimanRotavator",
    category: "machinery",
    name: {
      en: "Shaktiman 7-Foot Semi-Champion Heavy Rotavator (48 Blades)",
      hi: "शक्तिमान 7-फीट सेमी-चैंपियन हैवी रोटावेटर (48 ब्लेड)",
      ta: "சக்திமான் 7-அடி செமி-சாம்பியன் ரோட்டாவேட்டர் (48 பிளேடுகள்)",
      fr: "Fraise Rotative Lourde Shaktiman 7 Pieds (48 Lames)"
    },
    price: 128000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.94,
    origin: "Tirth Agro Technology, Rajkot, Gujarat",
    specs: { width: "7 Feet (210 cm Working Width)", blades: "48 L-Type Boron Steel Blades", gearbox: "Multi-Speed Cast Iron Oil Bath", weight: "490 kg Reinforced Chassis" }
  },
  {
    id: "mach-fieldking-cultivator",
    key: "fieldkingCultivator",
    category: "machinery",
    name: {
      en: "Fieldking Extra Heavy-Duty 9-Tyne Spring Loaded Cultivator",
      hi: "फील्डकिंग 9-टाइन स्प्रिंग लोडेड कल्टीवेटर",
      ta: "ஃபீல்ட்கிங் 9-டைன் ஸ்பிரிங் கலப்பை",
      fr: "Cultivateur Lourd à 9 Dents Fieldking avec Ressorts"
    },
    price: 42000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Fieldking Beri Udyog, Karnal",
    specs: { tynes: "9 Drop-Forged Spring Loaded", frame: "Double Heavy Tubular Steel 65x65mm", hitch: "3-Point Cat-II Universal", tractorHP: "35-55 HP Required" }
  },
  {
    id: "mach-lemken-plough",
    key: "lemkenMbPlough",
    category: "machinery",
    name: {
      en: "Lemken Opal 090 2-Bottom Hydraulic Reversible MB Plough",
      hi: "लेमकेन ओपल 090 2-बॉटम हाइड्रोलिक पलटाऊ हल (एमबी प्लाउ)",
      ta: "லெம்கென் 2-பாட்டம் ஹைட்ராலிக் உழவு கலப்பை",
      fr: "Charrue Réversible Hydraulique 2 Corps Lemken Opal 090"
    },
    price: 185000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "Lemken India Agricultural Machinery, Nagpur",
    specs: { furrows: "2-Bottom Reversible", turnover: "Hydraulic Double-Acting Cylinder", cuttingWidth: "60-90 cm Adjustable", soilDepth: "Up to 35 cm Deep Inversion" }
  },
  {
    id: "mach-aspee-sprayer",
    key: "aspeeMarutSprayer",
    category: "machinery",
    name: {
      en: "Aspee Marut 16L Hi-Tech Dual Battery Knapsack Sprayer",
      hi: "एस्पी मारुत 16L हाई-टेक ड्यूल बैटरी नैपसैक स्प्रेयर",
      ta: "அஸ்பீ 16 லிட்டர் இரட்டை பேட்டரி தெளிப்பான்",
      fr: "Pulvérisateur à Dos Haute Pression Aspee Marut (16L)"
    },
    price: 4850,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.89,
    origin: "American Spring & Pressing Works (ASPEE), Mumbai",
    specs: { tank: "16 Liters High-Density UV Stabilized PE", battery: "12V 12Ah Sealed Lead-Acid (8hr runtime)", pressure: "4.5 Bar Dual Diaphragm Auto Cut-Off", lance: "Stainless Steel Telescopic with 4 Nozzles" }
  },

  // ═════════════════════════════════════════════════════════════════
  // ─── 4. TRACTOR & MACHINE GENUINE SPARE PARTS (14 items) ─────────
  // ═════════════════════════════════════════════════════════════════
  {
    id: "spar-fuel-injectors",
    key: "fuelInjectors",
    category: "spares",
    name: {
      en: "Bosch CRDi Common Rail Diesel Fuel Injector Assembly",
      hi: "बॉश सीआरडीआई कॉमन रेल डीजल फ्यूल इंजेक्टर असेंबली",
      ta: "பாஷ் டீசல் எரிபொருள் உட்செலுத்தி (இன்ஜெக்டர்)",
      fr: "Ensemble Injecteur Diesel Common Rail Bosch CRDi"
    },
    price: 2400,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Bosch Rexroth OEM Plant, Bengaluru",
    specs: { nozzleType: "Multi-Hole Micro-Laser Drilled Orifice", sprayPressure: "2200 Bar CRDi Certified", calibration: "ISO 9001 Factory Calibrated", compatibility: "Mahindra, Sonalika, John Deere, Swaraj" }
  },
  {
    id: "spar-clutch-plate",
    key: "clutchPlate",
    category: "spares",
    name: {
      en: "Luk India Cerametallic Heavy-Duty Dual Tractor Clutch Plate (280mm)",
      hi: "लुक इंडिया सेरामीटैलिक हैवी-ड्यूटी ड्यूल ट्रैक्टर क्लच प्लेट (280mm)",
      ta: "லக் இந்தியா கனரக கிளட்ச் பிளேட் (280 மிமீ)",
      fr: "Disque d'Embrayage Céramétallique Luk India Heavy Duty (280mm)"
    },
    price: 4850,
    unit: "set",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Schaeffler Luk OEM Division, Hosur",
    specs: { diameter: "280 mm Dual Driven", material: "Heat-Resistant Cerametallic Buttons", dampers: "6 Heavy-Duty Coil Springs", tractors: "Mahindra 575 DI / Swaraj 855 FE / Farmtrac 60" }
  },
  {
    id: "spar-battery-exide",
    key: "exideJaiKisanBattery",
    category: "spares",
    name: {
      en: "Exide Jai Kisan 88Ah Heavy Vibration-Proof Tractor Battery",
      hi: "एक्साइड जय किसान 88Ah कंपन-रोधी हैवी ट्रैक्टर बैटरी",
      ta: "எக்சைடு ஜெய் கிசான் 88Ah டிராக்டர் பேட்டரி",
      fr: "Batterie Anti-Vibration Exide Jai Kisan 88Ah pour Tracteur"
    },
    price: 7200,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "Exide Industries OEM Plant, Haldia",
    specs: { capacity: "12V 88Ah @ 20Hr Rate", cca: "680 Cold Cranking Amps", design: "Heavy-Duty Polyethylene Container with Ribs", warranty: "36 Months (18+18 Pro-Rata)" }
  },
  {
    id: "spar-rotavator-blades",
    key: "rotavatorBlades",
    category: "spares",
    name: {
      en: "Shaktiman 8mm Hardened Boron Steel L-Type Rotavator Blades",
      hi: "शक्तिमान 8mm कठोर बोरॉन स्टील एल-टाइप रोटावेटर ब्लेड",
      ta: "சக்திமான் 8மிமீ போரான் எஃகு ரோட்டாவேட்டர் பிளேடுகள்",
      fr: "Lames de Rotavator Shaktiman en Acier au Bore Trempé 8mm"
    },
    price: 360,
    unit: "per blade (Pack of 48: ₹16,800)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.97,
    origin: "Shaktiman Genuine Spares, Rajkot",
    specs: { material: "Hardened Boron Steel 30MnB5", thickness: "8 mm Heavy Gauge", hardness: "50 ± 2 HRC", compatibility: "Universal 6ft & 7ft Multi-Speed Rotavators" }
  },
  {
    id: "spar-hydraulic-filter",
    key: "hydraulicFilter",
    category: "spares",
    name: {
      en: "Fleetguard Micro-Glass Hydraulic System Spin-On Filter Kit",
      hi: "फ्लीटगार्ड माइक्रो-ग्लास हाइड्रोलिक सिस्टम स्पिन-ऑन फिल्टर किट",
      ta: "ஃபீட்கார்ட் ஹைட்ராலிக் வடிகட்டி கிட்",
      fr: "Kit Filtre Hydraulique Spin-On Fleetguard Micro-Verre"
    },
    price: 850,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Fleetguard Cummins Filtration, Pune",
    specs: { filtration: "10-Micron Synthetic Beta 200", burstPressure: "35 Bar Continuous Rating", seal: "Dual Nitrile Anti-Leak Gasket", flowRate: "Up to 55 L/min Hydraulic Flow" }
  },
  {
    id: "spar-fuel-lift-pump",
    key: "fuelLiftPump",
    category: "spares",
    name: {
      en: "MICO Bosch Inline Diesel Fuel Feed & Lift Pump Assembly",
      hi: "मीको बॉश इनलाइन डीजल फ्यूल फीड व लिफ्ट पंप असेंबली",
      ta: "மைக்கோ பாஷ் டீசல் லிப்ட் பம்ப்",
      fr: "Pompe d'Alimentation et de Relevage Carburant MICO Bosch"
    },
    price: 1250,
    unit: "assembly",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.84,
    origin: "MICO Bosch India OEM",
    specs: { diaphragm: "Viton Chemical & Diesel Resistant", primingLever: "Hand Primer Steel Lever", deliveryPressure: "1.0 - 1.4 Bar Stable", fitment: "All 3-Cylinder & 4-Cylinder Diesel Tractors" }
  },
  {
    id: "spar-steering-tie-rod",
    key: "steeringTieRod",
    category: "spares",
    name: {
      en: "Rane Madras Drop-Forged Power Steering Tie Rod End Kit (Pair)",
      hi: "राने मद्रास ड्रॉप-फोर्ज्ड पावर स्टीयरिंग टाई रॉड एंड किट (जोड़ी)",
      ta: "ரானே மெட்ராஸ் ஸ்டீயரிங் டை ராட் ஜோடி",
      fr: "Paire d'Embouts de Biellette de Direction Rane Madras"
    },
    price: 1650,
    unit: "pair (LH + RH)",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.89,
    origin: "Rane Madras OEM Plant, Chennai",
    specs: { material: "Drop-Forged 40Cr Alloy Steel", thread: "M18 x 1.5 Precision Ground", dustBoot: "Chloroprene High-Flex Grease Seal", ballPin: "Induction Hardened Mirror Finish" }
  },
  {
    id: "spar-front-axle-king-pin",
    key: "kingPin",
    category: "spares",
    name: {
      en: "Talbros Heavy-Duty Case-Hardened Front Axle King Pin & Bush Kit",
      hi: "टालब्रोस हैवी-ड्यूटी केस-हार्डन्ड फ्रंट एक्सल किंग पिन व बुश किट",
      ta: "தால்பிரோஸ் முன்புற அச்சு கிங் பின் மற்றும் புஷ் கிட்",
      fr: "Kit Pivot de Fusée d'Essieu Avant Talbros Haute Résistance"
    },
    price: 1950,
    unit: "set",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Talbros Automotive Components, Faridabad",
    specs: { hardness: "Case Hardened 62 HRC Core 35 HRC", bushings: "Heavy Phosphor Bronze Machined", thrustBearings: "Taper Roller High Load Sealed", kitContains: "2 Pins, 4 Bronze Bushes, 2 Thrust Bearings, Shims" }
  },
  {
    id: "spar-kirloskar-impeller",
    key: "kirloskarPumpImpeller",
    category: "spares",
    name: {
      en: "Kirloskar 5HP Agricultural Submersible Pump Stainless Steel Impeller & Carbon Seal",
      hi: "किर्लोस्कर 5HP कृषि सबमर्सिबल पंप एसएस इम्पेलर व कार्बन सील",
      ta: "கிர்லோஸ்கர் 5HP பம்ப் ஸ்டெயின்லெஸ் இம்பெல்லர்",
      fr: "Turbine en Acier Inox et Joint Carbone pour Pompe Kirloskar 5CV"
    },
    price: 2100,
    unit: "set",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.93,
    origin: "Kirloskar Brothers Limited, Dewas",
    specs: { material: "SS 410 Investment Cast Stainless Steel", balance: "Dynamically Balanced to ISO 1940 G2.5", seal: "Silicon Carbide vs Carbon Mechanical Face", rating: "Head up to 85m @ 5HP Submersible" }
  },
  {
    id: "spar-castrol-oil",
    key: "castrolAgriTransPlus",
    category: "spares",
    name: {
      en: "Castrol Agri TransPlus 80W Heavy-Duty Universal Tractor Transmission Oil (20L)",
      hi: "कैस्ट्रॉल एग्री ट्रांसप्लस 80W हैवी-ड्यूटी ट्रैक्टर ट्रांसमिशन ऑयल (20L)",
      ta: "காஸ்ட்ரோல் அக்ரி டிரான்ஸ்பிளஸ் 80W டிராக்டர் ஆயில் (20L)",
      fr: "Huile de Transmission Universelle Tracteur Castrol Agri TransPlus 80W (20L)"
    },
    price: 5400,
    unit: "can (20 Liters)",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.98,
    origin: "Castrol India Lubricants, Silvassa",
    specs: { viscosity: "SAE 80W / 10W-30 UTTO", application: "Wet Brakes, Hydraulic Lift, Hydrostatic Steering & Gearbox", antiSquawk: "Wet Brake Anti-Chatter Formula", certification: "John Deere J20C, Massey M1145, Case MS1209" }
  },
  {
    id: "spar-air-cleaner-filter",
    key: "airCleanerFilter",
    category: "spares",
    name: {
      en: "Donaldson Dual Radial-Seal Heavy-Duty Air Cleaner Cartridge Kit",
      hi: "डोनाल्डसन ड्यूल रेडियल-सील हैवी-ड्यूटी एयर क्लीनर कार्ट्रिज किट",
      ta: "டொனால்ட்சன் இரட்டை ரேடியல் சீல் ஏர் பில்டர் கிட்",
      fr: "Kit Cartouche Filtre à Air Double Radial-Seal Donaldson"
    },
    price: 920,
    unit: "set (Primary + Safety Element)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.91,
    origin: "Donaldson Filtration Solutions OEM",
    specs: { filtration: "99.9% Dust Removal @ ISO 5011", media: "Flame-Retardant Pleated Cellulose with Wire Mesh", seal: "Urethane Radial Compression Molded", elements: "Primary Outer Element + Inner Safety Secondary" }
  },
  {
    id: "spar-piston-ring-set",
    key: "pistonRingSet",
    category: "spares",
    name: {
      en: "Federal-Mogul Goetze Plasma-Moly Coated Engine Piston Ring Set (4 Cyl)",
      hi: "फेडरल-मोगुल गोएत्जे प्लाज्मा-मोली कोटेड पिस्टन रिंग सेट (4 सिलिंडर)",
      ta: "கோயட்சே என்ஜின் பிஸ்டன் ரிங் செட் (4 சிலிண்டர்)",
      fr: "Jeu de Segments de Piston Moteur Fédéral-Mogul Goetze (4 Cylindres)"
    },
    price: 3400,
    unit: "engine set (4 Cylinders)",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Federal-Mogul Goetze India OEM, Patiala",
    specs: { coating: "Plasma Infilled Molybdenum on Top Ring", boreStandard: "100 mm Standard Bore Size", oilRing: "Chromium Plated Multi-Piece Spiral Expander", compression: "Low Friction High Gas Seal 18:1 Ratio" }
  },
  {
    id: "spar-skf-bearings",
    key: "skfWheelBearings",
    category: "spares",
    name: {
      en: "SKF Explorer Heavy-Duty Front Wheel Hub Taper Roller Bearings (Matched Pair)",
      hi: "एसकेएफ एक्सप्लोरर हैवी फ्रंट व्हील हब टेपर रोलर बेयरिंग (जोड़ी)",
      ta: "SKF எக்ஸ்ப்ளோரர் சக்கர டேப்பர் ரோலர் பேரிங் (ஜோடி)",
      fr: "Roulements à Rouleaux Coniques Moyeu SKF Explorer (Paire)"
    },
    price: 1450,
    unit: "pair (Inner + Outer)",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "SKF India OEM Plant, Pune",
    specs: { standard: "SKF Explorer Deep Carburized Steel", rating: "Dynamic Load 48.5 kN / Static Load 62 kN", precision: "ISO Normal Tolerance P0", fitment: "Front Axle Spindles Mahindra, Swaraj, Sonalika, John Deere" }
  },
  {
    id: "spar-gates-vbelt",
    key: "gatesAgriVBelt",
    category: "spares",
    name: {
      en: "Gates Tri-Power High-Temperature Aramid Core Agricultural V-Belt (B-Section)",
      hi: "गेट्स ट्राई-पावर उच्च तापमान एरामिड कोर कृषि वी-बेल्ट (B-सेक्शन)",
      ta: "கேட்ஸ் ட்ரை-பவர் விவசாய வி-பெல்ட் (B-பிரிவு)",
      fr: "Courroie Trapézoïdale Agricole Gates Tri-Power Cœur Aramide"
    },
    price: 680,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.87,
    origin: "Gates India Power Transmission, Lalru",
    specs: { reinforcement: "Aramid Tensile Cord (Zero Stretch)", temperature: "-40°C to +130°C Oil & Heat Resistant", profile: "B-Section Raw Edge Molded Cogged", application: "Alternator, Water Pump & Radiator Fan Drive" }
  }
];
