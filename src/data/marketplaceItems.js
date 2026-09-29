// Verified Agritech Marketplace Catalog: Real-World Produce, Tractors, Spares, Seeds & Tech
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

const baseItems = [
  // ================= VEGETABLES & FRUITS =================
  {
    id: "prod-mango",
    categoryKey: "produce",
    easyEmoji: "🥭",
    name: {
      en: "Ratnagiri Alphonso Mango (Hapus)",
      hi: "रत्नागिरी हापुस आम (जीआई-टैग्ड)",
      ta: "ரத்னகிரி அல்போன்சா மாம்பழம் (GI)",
      fr: "Mangues Alphonso de Ratnagiri (AOP)"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Konkan Mango Growers Cooperative",
    rating: "5.0 ★ (4,920 Reviews)",
    price: "₹650",
    unit: {
      en: "per Dozen (12 Fruits)",
      hi: "प्रति दर्जन (12 फल)",
      ta: "டஜன் (12 பழங்கள்)",
      fr: "la Douzaine (12 Fruits)"
    },
    discount: "Export Grade",
    badge: {
      en: "GI Certified Authentic",
      hi: "प्रमाणित जीआई टैग",
      ta: "அங்கீகரிக்கப்பட்ட GI குறியீடு",
      fr: "Indication Géographique Protégée"
    },
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Sweet saffron pulp, heavenly aroma, zero fiber, naturally ripened in clean grass hay. Ready to eat at home!",
      hi: "केसरिया मीठा गूदा, मनमोहक खुशबू, बिना रेशे वाला और घास की पाल में प्राकृतिक रूप से पका हुआ। परिवार के लिए सर्वोत्तम!",
      ta: "நறுமணமிக்க குங்குமப்பூ நிற சதைப்பகுதி, நார் இல்லாத தித்திக்கும் சுவை. வைக்கோலில் பழுக்க வைக்கப்பட்டது!",
      fr: "Pulpe safranée fondante et sucrée, arôme incomparable, sans fibres, mûri naturellement sous paille."
    },
    specsDetailed: {
      en: "Brix Index: 19.2° • Weight: 250-280g/fruit • VHT Vapor Heat Treated • APEDA export phytosanitary clearance • APMC Mandi Basis: +18.4%.",
      hi: "ब्रिक्स मिठास: 19.2° • फल वजन: 250-280 ग्राम • वाष्प ताप उपचारित (VHT) • एपीडा निर्यात क्लीयरेंस • मंडी प्रीमियम: +18.4%।",
      ta: "பிரிக்ஸ் இனிப்பு: 19.2° • எடை: 250-280 கிராம் • VHT வெப்ப சிகிச்சை • APEDA ஏற்றுமதி சான்றிதழ் • மண்டி லாபம்: +18.4%.",
      fr: "Indice Brix: 19.2° • Poids: 250-280g • Traité vapeur VHT • Homologué APEDA export • Marge APMC: +18.4%."
    },
    quickMetrics: {
      brix: "19.2° Brix",
      shelfLife: "12 Days @ 12°C",
      mrlStatus: "0.00 ppm (Clean)",
      marginSpread: "+18.4% APMC"
    }
  },
  {
    id: "prod-orange",
    categoryKey: "produce",
    easyEmoji: "🍊",
    name: {
      en: "Nagpur Juicy Sweet Mandarin Oranges",
      hi: "नागपुरी संतरा (रसीला व मीठा)",
      ta: "நாக்பூர் இனிப்பு ஆரஞ்சு பழங்கள்",
      fr: "Oranges Douces Mandarines de Nagpur"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Vidarbha Citrus FPO Collective",
    rating: "4.9 ★ (3,150 Reviews)",
    price: "₹65",
    unit: {
      en: "per kg (₹1,200 / 20kg Box)",
      hi: "प्रति किलो (₹1,200 / 20किग्रा पेटी)",
      ta: "கிலோவிற்கு (₹1,200 / 20கிலோ பெட்டி)",
      fr: "par kg (₹1,200 / Caisse 20kg)"
    },
    discount: "Direct Orchard Harvest",
    badge: {
      en: "Thin-Skinned Extra Juicy",
      hi: "पतला छिलका व भरपूर रस",
      ta: "மெல்லிய தோல், அதிக சாறு",
      fr: "Peau Fine & Très Juteuse"
    },
    image: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Bright orange, easy to peel with your hands, bursting with vitamin C juice. Great for morning breakfast!",
      hi: "चमकदार नारंगी, हाथ से आसानी से छिलने वाला और ताज़े रस से भरपूर। रोज़ाना सेहत और नाश्ते के लिए उत्तम!",
      ta: "எளிதில் உரிக்கக்கூடிய மெல்லிய தோல், வைட்டமின் சி நிறைந்த இனிப்பான சாறு. உடலுக்கு ஆரோக்கியமானது!",
      fr: "Facile à éplucher à la main, gorgé de jus riche en vitamine C naturelle. Idéal au petit-déjeuner!"
    },
    specsDetailed: {
      en: "Juice Content: 48.5% by weight • Acidity: 0.72% • TSS/Acid Ratio: 14.8 • Ozone washed & food-grade carnauba waxed.",
      hi: "रस प्रतिशत: 48.5% • अम्लता: 0.72% • मिठास अनुपात: 14.8 • ओजोन धुलाई व खाद्य-ग्रेड कार्नौबा वैक्स उपचारित।",
      ta: "சாறு அளவு: 48.5% • அமிலத்தன்மை: 0.72% • ஓசோன் சுத்திகரிப்பு மற்றும் உணவு தர மெழுகு பூச்சு செய்யப்பட்டது.",
      fr: "Teneur en jus: 48.5% • Acidité: 0.72% • Ratio E/A: 14.8 • Lavage ozone et cirage carnauba alimentaire."
    },
    quickMetrics: {
      brix: "12.4° Brix",
      shelfLife: "21 Days @ 6°C",
      mrlStatus: "Zero Residue",
      marginSpread: "+15.2% Farmgate"
    }
  },
  {
    id: "prod-apple",
    categoryKey: "produce",
    easyEmoji: "🍎",
    name: {
      en: "Kashmiri Royal Delicious Red Apples",
      hi: "कश्मीरी रॉयल डिलीशियस सेब (A-ग्रेड)",
      ta: "காஷ்மீர் ராயல் சுவையான ஆப்பிள்",
      fr: "Pommes Royal Delicious du Cachemire"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Shopian Valley Apple Growers",
    rating: "4.9 ★ (4,110 Reviews)",
    price: "₹130",
    unit: {
      en: "per kg (₹2,400 / 20kg Wooden Box)",
      hi: "प्रति किलो (₹2,400 / 20किग्रा पेटी)",
      ta: "கிலோவிற்கு (₹2,400 / 20கிலோ பெட்டி)",
      fr: "par kg (₹2,400 / Caisse Bois 20kg)"
    },
    discount: "High-Altitude Orchard",
    badge: {
      en: "Crisp & High-Crunch",
      hi: "क्रंची व प्राकृतिक मिठास",
      ta: "மொறுமொறுப்பான சுவை",
      fr: "Croquante & Parfumée"
    },
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Deep red, super crunchy, sweet taste with no wax coating. Harvested straight from Kashmir hill orchards.",
      hi: "गहरा लाल, कुरकुरा और मीठा सेब, बिना किसी केमिकल मोम के। कश्मीर की पहाड़ियों से सीधे आपके घर।",
      ta: "அடர் சிவப்பு நிறம், அதிக மொறுமொறுப்பு, இரசாயன மெழுகு இல்லாத காஷ்மீர் ஆப்பிள்.",
      fr: "Robe rouge rubis, croquante et sucrée, sans enrobage de cire chimique. Récoltée en altitude."
    },
    specsDetailed: {
      en: "Fruit Pressure: 7.8 kg/cm² • Diameter: 70-80 mm • Controlled Atmosphere (CA) Store: 0.5°C, 1.5% O₂, 1.0% CO₂.",
      hi: "दबाव दृढ़ता: 7.8 kg/cm² • आकार: 70-80 मिमी • नियंत्रित वातावरण (CA) कोल्ड स्टोर: 0.5°C पर संरक्षित।",
      ta: "அழுத்த உறுதி: 7.8 kg/cm² • விட்டம்: 70-80 மிமீ • CA குளிர்சாதன கிடங்கு பாதுகாப்பு (0.5°C).",
      fr: "Pression: 7.8 kg/cm² • Calibre: 70-80 mm • Conservation Atmosphère Contrôlée (CA): 0.5°C, 1.5% O₂."
    },
    quickMetrics: {
      brix: "14.6° Brix",
      shelfLife: "90 Days in CA",
      mrlStatus: "Certified Organic",
      marginSpread: "+22.1% Premium"
    }
  },
  {
    id: "prod-banana",
    categoryKey: "produce",
    easyEmoji: "🍌",
    name: {
      en: "Robusta G-9 Cavendish Bananas",
      hi: "रोबस्टा जी-9 कैवेंडिश केला (एक्सपोर्ट पैक)",
      ta: "ரோபஸ்டா G-9 வாழைப்பழம்",
      fr: "Bananes Cavendish Grand Naine (G-9)"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Jalgaon Banana Export Consortium",
    rating: "4.8 ★ (1,560 Reviews)",
    price: "₹32",
    unit: {
      en: "per Dozen (₹1,400 / 100kg Lot)",
      hi: "प्रति दर्जन (₹1,400 / 100किग्रा लॉट)",
      ta: "டஜன் (₹1,400 / 100கிலோ குவியல்)",
      fr: "la Douzaine (₹1,400 / Lot 100kg)"
    },
    discount: "Direct Orchard Pack",
    badge: {
      en: "Ethylene Chamber Ripened",
      hi: "सुरक्षित एथिलीन चैंबर में पका",
      ta: "பாதுகாப்பாக பழுக்க வைக்கப்பட்டது",
      fr: "Mûrissage Éthylène Contrôlé"
    },
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Thick unblemished skin, uniform yellow color, sweet creamy pulp with zero chemical carbide.",
      hi: "चमकदार पीला छिलका, बिना किसी दाग के, बिना कार्बाइड के सुरक्षित रूप से पकाया गया मीठा केला।",
      ta: "கார்பைடு இல்லாத ஆரோக்கியமான வாழைப்பழம். சமச்சீரான மஞ்சள் நிறம் மற்றும் இனிப்பு சுவை.",
      fr: "Fruits calibrés sans taches, pulpe crémeuse et douce. Mûri sans carbure de calcium."
    },
    specsDetailed: {
      en: "Finger Length: 18-22 cm • Caliper: 38-42 mm • Controlled Atmosphere Reefer shipping at 13.5°C.",
      hi: "केले की लंबाई: 18-22 सेमी • मोटाई: 38-42 मिमी • 13.5°C नियंत्रित तापमान पर प्रशीतित परिवहन।",
      ta: "நீளம்: 18-22 செமீ • தடிமன்: 38-42 மிமீ • 13.5°C குளிரூட்டப்பட்ட பெட்டிகளில் விநியோகம்.",
      fr: "Longueur: 18-22 cm • Calibre: 38-42 mm • Transport sous température dirigée à 13.5°C."
    },
    quickMetrics: {
      brix: "21.0° Brix",
      shelfLife: "8 Days Room Temp",
      mrlStatus: "Carbide-Free",
      marginSpread: "+12.0% FPO"
    }
  },
  {
    id: "prod-pomegranate",
    categoryKey: "produce",
    easyEmoji: "🌺",
    name: {
      en: "Bhagwa Ruby Red Pomegranates",
      hi: "भगवा रूबी रेड अनार (सुपर दाना)",
      ta: "பகவா மாதுளை (சிவப்பு முத்துக்கள்)",
      fr: "Grenades Bhagwa Rouge Rubis Extra"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Solapur Pomegranate Board",
    rating: "4.9 ★ (1,190 Reviews)",
    price: "₹140",
    unit: {
      en: "per kg (₹2,800 / 20kg Master Box)",
      hi: "प्रति किलो (₹2,800 / 20किग्रा पेटी)",
      ta: "கிலோவிற்கு (₹2,800 / 20கிலோ பெட்டி)",
      fr: "par kg (₹2,800 / Colis 20kg)"
    },
    discount: "Export Certified",
    badge: {
      en: "Soft-Seeded Deep Red",
      hi: "मुलायम बीज व गहरा लाल दाना",
      ta: "மென்மையான விதைகள்",
      fr: "Graines Tendres Très Juteuses"
    },
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Glossy red exterior with sweet, soft seeds rich in antioxidants. Ideal for juicing and table fruit.",
      hi: "चमकदार लाल छिलका, मीठे और मुलायम बीज। एंटीऑक्सीडेंट से भरपूर और अधिक रस देने वाला अनार।",
      ta: "பளபளப்பான சிவப்பு நிறம், அதிக சாறு மற்றும் இனிப்பான மென்மையான விதைகள் கொண்ட மாதுளை.",
      fr: "Arilles rouge grenat d'une grande douceur, pépins tendres, très riches en antioxydants naturels."
    },
    specsDetailed: {
      en: "Aril Content: 68% • Acidity: 0.32% • Fruit Weight: 300-350g • APEDA registered phytosanitary clearance.",
      hi: "दाने का प्रतिशत: 68% • अम्लता: 0.32% • फल वजन: 300-350 ग्राम • एपीडा निर्यात पंजीकृत।",
      ta: "முத்து அளவு: 68% • பழ எடை: 300-350 கிராம் • APEDA ஏற்றுமதி சான்றிதழ் பெற்றது.",
      fr: "Taux d'arilles: 68% • Acidité: 0.32% • Poids unitaire: 300-350g • Agréé APEDA pour l'export."
    },
    quickMetrics: {
      brix: "16.8° Brix",
      shelfLife: "30 Days @ 7°C",
      mrlStatus: "Export Clear",
      marginSpread: "+19.0% Direct"
    }
  },
  {
    id: "prod-tomato",
    categoryKey: "produce",
    easyEmoji: "🍅",
    name: {
      en: "Organic Sun-Ripened Red Tomatoes",
      hi: "जैविक लाल टमाटर (देसी/हाइब्रिड)",
      ta: "இயற்கை சிவப்பு தக்காளி",
      fr: "Tomates Rouges Biologiques de Plein Champ"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Nashik Farmers Producer Co. (FPO)",
    rating: "4.9 ★ (1,840 Reviews)",
    price: "₹28",
    unit: {
      en: "per kg (₹550 / 20kg Crate)",
      hi: "प्रति किलो (₹550 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹550 / 20கிலோ பெட்டி)",
      fr: "par kg (₹550 / Caisse 20kg)"
    },
    discount: "Farmgate Direct",
    badge: {
      en: "Grade-A Export Quality",
      hi: "ग्रेड-ए निर्यात गुणवत्ता",
      ta: "முதல் தரம்",
      fr: "Qualité Extra Calibre A"
    },
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Plump, naturally ripened, long shelf life (7+ days). Perfect for everyday curries and fresh salads.",
      hi: "प्राकृतिक रूप से पके हुए ठोस टमाटर, 7 दिन तक खराब नहीं होते। होटल, रसोई व थोक बाज़ार हेतु उत्तम।",
      ta: "இயற்கையாக பழுத்த திடமான தக்காளி, 7 நாட்கள் வரை கெடாது. சமையலுக்கும் சாலட்டுக்கும் சிறந்தது.",
      fr: "Tomates charnues mûries au soleil, excellente tenue (7+ jours). Idéal pour salades et sauces."
    },
    specsDetailed: {
      en: "Brix Sugar: 4.8° • Firmness: 6.2 kg/cm² • Cold-Chain Storage: 10-12°C at 90% RH • Zero pesticide residue (MRL tested).",
      hi: "ब्रिक्स मिठास: 4.8° • कठोरता: 6.2 kg/cm² • भंडारण: 10-12°C (90% आर्द्रता) • शून्य कीटनाशक अवशेष।",
      ta: "பிரிக்ஸ் இனிப்பு: 4.8° • கடினத்தன்மை: 6.2 kg/cm² • சேமிப்பு: 10-12°C • பூச்சிக்கொல்லி இல்லாத சான்றிதழ்.",
      fr: "Taux Brix: 4.8° • Fermeté: 6.2 kg/cm² • Conservation: 10-12°C à 90% HR • Conforme LMR zéro résidu."
    },
    quickMetrics: {
      brix: "4.8° Brix",
      shelfLife: "10 Days @ 11°C",
      mrlStatus: "Zero Residue",
      marginSpread: "+14.0% Mandi"
    }
  },
  {
    id: "prod-potato",
    categoryKey: "produce",
    easyEmoji: "🥔",
    name: {
      en: "Desi Agra Jyoti & Chipsona Potatoes",
      hi: "देसी आगरा आलू (चिप्सोना व ज्योति)",
      ta: "ஆக்ரா உருளைக்கிழங்கு (ஜோதி)",
      fr: "Pommes de Terre Agra Jyoti & Chipsona"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Agra Cold Storage Cluster",
    rating: "4.8 ★ (2,120 Reviews)",
    price: "₹22",
    unit: {
      en: "per kg (₹1,050 / 50kg Sack)",
      hi: "प्रति किलो (₹1,050 / 50किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹1,050 / 50கிலோ மூட்டை)",
      fr: "par kg (₹1,050 / Sac 50kg)"
    },
    discount: "Direct Cold-Store",
    badge: {
      en: "Low Sugar / High Solids",
      hi: "कम शर्करा / उच्च स्टार्च",
      ta: "குறைந்த சர்க்கரை / உயர் தரம்",
      fr: "Faible Teneur en Sucre"
    },
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Clean, dry, smooth-skinned potatoes. Great for boiling, frying, and long home storage without rotting.",
      hi: "साफ़, सूखी और चमकदार छिलके वाली आलू। सब्जी बनाने और लंबे समय तक भंडारण के लिए बिल्कुल सही।",
      ta: "சுத்தமான, மென்மையான தோல் கொண்ட உருளைக்கிழங்கு. சமையலுக்கும் நீண்ட சேமிப்பிற்கும் ஏற்றது.",
      fr: "Tubercules réguliers, peau fine et saine. Excellente tenue à la cuisson et conservation prolongée."
    },
    specsDetailed: {
      en: "Dry Matter: 21.4% • Reducing Sugars: <0.15% (Golden fry without browning) • CIPC sprout inhibition treated.",
      hi: "ठोस पदार्थ: 21.4% • कम शर्करा: <0.15% (तलने पर काला नहीं पड़ता) • सीआईपीसी अंकुरण रोधी उपचारित।",
      ta: "உலர்ந்த பொருள்: 21.4% • குறைந்த சர்க்கரை: <0.15% • முளைக்காமல் சேமிக்கும் பாதுகாப்பு வசதி.",
      fr: "Matière sèche: 21.4% • Sucres réducteurs: <0.15% • Traitement antigerme conforme CIPC."
    },
    quickMetrics: {
      brix: "21.4% Dry",
      shelfLife: "60 Days Dry",
      mrlStatus: "Certified Safe",
      marginSpread: "+11.5% Direct"
    }
  },
  {
    id: "prod-onion",
    categoryKey: "produce",
    easyEmoji: "🧅",
    name: {
      en: "Nashik Red Garwa Storage Onions",
      hi: "नासिक लाल गरवा प्याज़ (55mm+)",
      ta: "நாசிக் சிவப்பு வெங்காயம் (55mm+)",
      fr: "Oignons Rouges de Nashik Garwa"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Lasalgaon Mandi Direct Collective",
    rating: "4.9 ★ (3,400 Reviews)",
    price: "₹34",
    unit: {
      en: "per kg (₹1,650 / 50kg Bag)",
      hi: "प्रति किलो (₹1,650 / 50किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹1,650 / 50கிலோ மூட்டை)",
      fr: "par kg (₹1,650 / Sac 50kg)"
    },
    discount: "Bulk Mandi Rate",
    badge: {
      en: "4-Month Storage Life",
      hi: "4 महीने टिकाऊ क्षमता",
      ta: "4 மாத சேமிப்பு காலம்",
      fr: "Conservation 4 Mois"
    },
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Crisp, pungent, multi-layered ruby red skins. Cured naturally in shaded field chawls, won't rot quickly.",
      hi: "कड़क, तीखा और गहरा लाल प्याज़। धूप-छांव में सुखाकर तैयार किया गया, जल्दी नहीं सड़ता।",
      ta: "காரமான, பல அடுக்கு சிவப்பு தோல் கொண்ட வெங்காயம். இயற்கை முறையில் உலர்த்தப்பட்டது.",
      fr: "Bulbes fermes et piquants, tuniques épaisses pourpre vif. Séchage naturel sous abri ventilé."
    },
    specsDetailed: {
      en: "Diameter: 55-65 mm • Total Soluble Solids (TSS): 13.2% • Pyruvic Acid: 11.8 µmol/g (High pungency index).",
      hi: "आकार: 55-65 मिमी • कुल घुलनशील ठोस: 13.2% • पाइरुविक अम्ल: 11.8 µmol/g (तीखापन सूचकांक)।",
      ta: "விட்டம்: 55-65 மிமீ • TSS: 13.2% • அதிக காரத்தன்மை குறியீடு கொண்ட தரம்.",
      fr: "Calibre: 55-65 mm • Matière sèche: 13.2% • Indice d'acide pyruvique élevé pour longue conservation."
    },
    quickMetrics: {
      brix: "13.2% TSS",
      shelfLife: "120 Days Chawl",
      mrlStatus: "Grade-A APMC",
      marginSpread: "+24.5% Spread"
    }
  },
  {
    id: "prod-cauliflower",
    categoryKey: "produce",
    easyEmoji: "🥦",
    name: {
      en: "Snow White Tight Cauliflower",
      hi: "स्नोबॉल फूल गोभी (ताज़ी कटी हुई)",
      ta: "காலிஃபிளவர் (ஸ்னோ ஒயிட் ரகம்)",
      fr: "Chou-Fleur Blanc Compact de Saison"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Malwa Agri Hydroponics & Farms",
    rating: "4.7 ★ (850 Reviews)",
    price: "₹35",
    unit: {
      en: "per kg (₹420 / 12kg Box)",
      hi: "प्रति किलो (₹420 / 12किग्रा पेटी)",
      ta: "கிலோவிற்கு (₹420 / 12கிலோ பெட்டி)",
      fr: "par kg (₹420 / Colis 12kg)"
    },
    discount: "Harvest Day Direct",
    badge: {
      en: "100% Worm-Free",
      hi: "100% कीड़ा-मुक्त गारंटी",
      ta: "பூச்சி இல்லாத உத்தரவாதம்",
      fr: "Garanti Sans Chenille"
    },
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Tight, spotless white curds wrapped in protective green leaves. Cut fresh at dawn for your kitchen.",
      hi: "सफ़ेद, घनी और बिना दाग की फूलगोभी। सुबह ताज़ी कटी हुई और हरी पत्तियों में सुरक्षित।",
      ta: "வெண்மையான, அடர்த்தியான காலிஃபிளவர். அதிகாலையில் பறிக்கப்பட்டு புதியதாக அனுப்பப்படுகிறது.",
      fr: "Pommes denses et immaculées, protégées par leur collerette foliaire. Récolté à l'aube."
    },
    specsDetailed: {
      en: "Curd Weight: 800-1100g • Solar pre-cooled to 4°C within 90 minutes of cutting to arrest discoloration.",
      hi: "वजन: 800-1100 ग्राम • कटाई के 90 मिनट के भीतर 4°C तक प्री-कूल्ड ताकि सफ़ेदी बनी रहे।",
      ta: "எடை: 800-1100 கிராம் • வெண்மை மாறாமல் இருக்க 90 நிமிடத்திற்குள் 4°C குளிரூட்டப்பட்டது.",
      fr: "Poids unitaire: 800-1100g • Pré-réfrigéré à 4°C sous 90 min pour préserver la blancheur."
    },
    quickMetrics: {
      brix: "Spotless A1",
      shelfLife: "7 Days @ 4°C",
      mrlStatus: "Zero Spray",
      marginSpread: "+16.8% Spot"
    }
  },
  {
    id: "prod-chilli",
    categoryKey: "produce",
    easyEmoji: "🌶️",
    name: {
      en: "G-4 Green Teja Hot Chillies",
      hi: "जी-4 तीखी हरी मिर्च (तेजा वैरायटी)",
      ta: "பச்சை மிளகாய் (தேஜா ரகம்)",
      fr: "Piments Verts Teja Épicés G-4"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Guntur Chilli Mandi Growers",
    rating: "4.8 ★ (1,340 Reviews)",
    price: "₹48",
    unit: {
      en: "per kg (₹720 / 15kg Bag)",
      hi: "प्रति किलो (₹720 / 15किग्रा थैला)",
      ta: "கிலோவிற்கு (₹720 / 15கிலோ பை)",
      fr: "par kg (₹720 / Sac 15kg)"
    },
    discount: "Fresh Farm Pull",
    badge: {
      en: "40,000+ SHU Pungency",
      hi: "40,000+ एसएचयू तीखापन",
      ta: "அதிக காரத்தன்மை (40,000 SHU)",
      fr: "Puissance 40 000+ SHU"
    },
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Fresh green, firm, slender chillies with high heat and pungent aroma. Retains crispness for days.",
      hi: "ताज़ी हरी, चमकदार और अत्यधिक तीखी मिर्च। कई दिनों तक ताज़ी और कड़क बनी रहती है।",
      ta: "நல்ல பச்சை நிறம், உறுதியான மற்றும் அதிக காரமான மிளகாய். நீண்ட நாட்கள் புதியதாக இருக்கும்.",
      fr: "Piments vert vif effilés, croquants et très piquants. Excellente tenue post-récolte."
    },
    specsDetailed: {
      en: "Capsaicin Content: 0.58% • Length: 8-11 cm • Hydro-cooled post harvest to reduce field heat respiration.",
      hi: "कैप्साइसिन: 0.58% • लंबाई: 8-11 सेमी • कटाई के तुरंत बाद हाइड्रो-कूल्ड ताकि ताजगी न खोए।",
      ta: "காரச்சத்து (Capsaicin): 0.58% • நீளம்: 8-11 செமீ • புதிய தன்மையை பாதுகாக்க விரைவு குளிர்விப்பு.",
      fr: "Teneur en capsaïcine: 0.58% • Longueur: 8-11 cm • Hydro-cooling pour stopper la dégradation."
    },
    quickMetrics: {
      brix: "40k SHU",
      shelfLife: "14 Days Cool",
      mrlStatus: "Export Clear",
      marginSpread: "+18.2% Guntur"
    }
  },
  {
    id: "prod-brinjal",
    categoryKey: "produce",
    easyEmoji: "🍆",
    name: {
      en: "Glossy Purple Desi Eggplant / Brinjal",
      hi: "देसी गोल चमकदार बैंगन (ताज़ा तुड़ाई)",
      ta: "நாட்டு ஊதா கத்தரிக்காய்",
      fr: "Aubergines Pourpres Régionales Fraîches"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Mysuru Organic Veggie Cluster",
    rating: "4.8 ★ (980 Reviews)",
    price: "₹30",
    unit: {
      en: "per kg (₹600 / 20kg Crate)",
      hi: "प्रति किलो (₹600 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹600 / 20கிலோ பெட்டி)",
      fr: "par kg (₹600 / Caisse 20kg)"
    },
    discount: "Pesticide-Free Certified",
    badge: {
      en: "Tender & Seedless",
      hi: "मुलायम गूदा व कम बीज",
      ta: "மென்மையான சதைப்பகுதி",
      fr: "Chair Tendre & Peu de Graines"
    },
    image: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Glossy purple skin, soft melt-in-mouth texture when cooked, zero bitterness. Great for bharta or curries!",
      hi: "चमकदार बैंगनी छिलका, पकने पर मक्खन जैसा मुलायम, कोई कड़वाहट नहीं। भरता व सब्जी के लिए एकदम सही।",
      ta: "பளபளப்பான தோல், கசப்பு இல்லாத இனிமையான சுவை, வதக்க மற்றும் குழம்பிற்கு சிறந்தது.",
      fr: "Peau violette brillante, texture fondante après cuisson, sans amertume. Parfait pour ragoûts."
    },
    specsDetailed: {
      en: "Average Weight: 180-220g • Phenolic content: 1.12 g GAE/100g • Shipped in ventilated corrugated boxes at 12°C.",
      hi: "औसत वजन: 180-220 ग्राम • फेनोलिक एंटीऑक्सीडेंट से भरपूर • 12°C हवादार क्रेट्स में सुरक्षित आपूर्ति।",
      ta: "சராசரி எடை: 180-220 கிராம் • ஆன்டி-ஆக்ஸிடன்ட் நிறைந்தது • 12°C வெப்பநிலையில் விநியோகம்.",
      fr: "Poids moyen: 180-220g • Teneur en antioxydants phénoliques élevée • Expédié en caisses aérées à 12°C."
    },
    quickMetrics: {
      brix: "Grade A+",
      shelfLife: "8 Days @ 12°C",
      mrlStatus: "Zero Residue",
      marginSpread: "+15.0% Direct"
    }
  },
  {
    id: "prod-spinach",
    categoryKey: "produce",
    easyEmoji: "🥬",
    name: {
      en: "Farm-Fresh Hydroponic Green Spinach",
      hi: "ताज़ा हरा देशी पालक (मिट्टी-रहित)",
      ta: "புதிய பசலைக்கீரை (இயற்கை)",
      fr: "Épinards Frais Biologiques de Pleine Terre"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Bengaluru Clean Leaf Hydroponics",
    rating: "4.9 ★ (1,430 Reviews)",
    price: "₹25",
    unit: {
      en: "per 500g Bunch (Clean Pack)",
      hi: "प्रति 500 ग्राम गड्डी (धुला हुआ)",
      ta: "500 கிராம் கட்டு",
      fr: "la Botte de 500g (Lavage Frais)"
    },
    discount: "Hydroponic Clean",
    badge: {
      en: "100% Mud-Free & Washed",
      hi: "100% मिट्टी-मुक्त व साफ़",
      ta: "மண் இல்லாத சுத்தமான கீரை",
      fr: "Lavé Garanti Sans Terre"
    },
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Tender, crunchy green leaves washed in ozone water. Ready to cook directly without hours of washing!",
      hi: "मुलायम हरी पत्तियां, ओजोन पानी से धुली हुई। बिना मिट्टी की परेशानी के सीधे कढ़ाई में पकाने के लिए तैयार!",
      ta: "அடர் பச்சை இலைகள், நீரில் சுத்திகரிக்கப்பட்டு சமையலுக்கு உடனடியாக பயன்படுத்தக்கூடியது.",
      fr: "Feuilles tendres et craquantes lavées à l'eau ozonée. Prêtes à cuire sans rinçage laborieux."
    },
    specsDetailed: {
      en: "Iron: 2.7 mg/100g • Nitrate Content: <1800 ppm (Complies with EU limits) • Harvest-to-gate delivery in <6 hours.",
      hi: "आयरन: 2.7 mg/100g • सुरक्षित नाइट्रेट स्तर • कटाई के 6 घंटे के भीतर कोल्ड-वैन द्वारा डिलीवरी।",
      ta: "இரும்புச்சத்து: 2.7 mg/100g • ஆரோக்கியமான தரம் • அறுவடை செய்த 6 மணி நேரத்தில் டெலிவரி.",
      fr: "Fer: 2.7 mg/100g • Teneur en nitrates <1800 ppm conforme UE • Livraison bord-champ en moins de 6h."
    },
    quickMetrics: {
      brix: "Iron 2.7mg",
      shelfLife: "5 Days Chilled",
      mrlStatus: "Ozone Washed",
      marginSpread: "+20.0% Cold"
    }
  },
  {
    id: "prod-guava",
    categoryKey: "produce",
    easyEmoji: "🍈",
    name: {
      en: "Allahabad Safeda Sweet White Guava",
      hi: "इलाहाबादी सफेदा मीठा अमरूद (A-ग्रेड)",
      ta: "அலகாபாத் சஃபேதா கொய்யா பழங்கள்",
      fr: "Goyaves Blanches Douces d'Allahabad Safeda"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Prayagraj Guava Orchard Cooperative",
    rating: "4.9 ★ (2,140 Reviews)",
    price: "₹45",
    unit: {
      en: "per kg (₹900 / 20kg Crate)",
      hi: "प्रति किलो (₹900 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹900 / 20கிலோ பெட்டி)",
      fr: "par kg (₹900 / Caisse 20kg)"
    },
    discount: "Direct Orchard Harvest",
    badge: {
      en: "High Vitamin C & Fiber",
      hi: "विटामिन-सी व फाइबर से भरपूर",
      ta: "வைட்டமின் சி நிறைந்தது",
      fr: "Riche en Vitamine C & Fibres"
    },
    image: "https://images.unsplash.com/photo-1536511132770-e5058c7e8c46?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Crisp snowy-white flesh, soft edible seeds, intense sweet aroma, harvested ripe from orchards. Delicious everyday fruit!",
      hi: "बर्फ जैसा सफेद गूदा, मुलायम चबाने योग्य बीज, मनमोहक खुशबू। बाग से सीधे तोड़ा गया मीठा अमरूद!",
      ta: "வெள்ளை சதைப்பகுதி, மென்மையான விதைகள், அதிக வைட்டமின் சி மற்றும் இனிமையான சுவை கொண்ட கொய்யா.",
      fr: "Chair blanche croquante et parfumée, graines tendres, mûrie sur l'arbre. Riche en antioxydants."
    },
    specsDetailed: {
      en: "Brix Sugar: 12.8° • Vitamin C: 260 mg/100g (4x of Orange) • Fruit Weight: 180-220g • Foam-net cushioned shipping.",
      hi: "ब्रिक्स मिठास: 12.8° • विटामिन-सी: 260 mg/100g • फल वजन: 180-220 ग्राम • फोम नेट पैकेजिंग।",
      ta: "பிரிக்ஸ் இனிப்பு: 12.8° • வைட்டமின் சி: 260 mg/100g • பழ எடை: 180-220 கிராம் • பாதுகாப்பான பேக்கேஜிங்.",
      fr: "Brix: 12.8° • Vitamine C: 260 mg/100g • Calibre: 180-220g • Conditionné sous filet mousse protecteur."
    },
    quickMetrics: {
      brix: "12.8° Brix",
      shelfLife: "7 Days @ 10°C",
      mrlStatus: "Residue Free",
      marginSpread: "+16.2% FPO"
    }
  },
  {
    id: "prod-papaya",
    categoryKey: "produce",
    easyEmoji: "🍈",
    name: {
      en: "Taiwan Red Lady Sweet Papaya",
      hi: "ताइवान रेड लेडी पपीता (मीठा व रसीला)",
      ta: "தைவான் ரெட் லேடி பப்பாளி",
      fr: "Papayes Red Lady de Taïwan Extra Sucrées"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Andhra Sun-Valley Papaya FPO",
    rating: "4.8 ★ (1,870 Reviews)",
    price: "₹38",
    unit: {
      en: "per kg (₹760 / 20kg Crate)",
      hi: "प्रति किलो (₹760 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹760 / 20கிலோ பெட்டி)",
      fr: "par kg (₹760 / Caisse 20kg)"
    },
    discount: "High Lycopene Rich",
    badge: {
      en: "Thick Flesh & Small Cavity",
      hi: "गाढ़ा लाल गूदा व छोटा बीज कक्ष",
      ta: "அடர்ந்த சதைப்பகுதி",
      fr: "Chair Dense & Petite Cavité"
    },
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Deep red-orange flesh, melt-in-mouth sweet taste, digestion boosting papain enzyme. No bad odor, long shelf life.",
      hi: "गहरा लाल गूदा, शहद जैसी मिठास, पाचन शक्ति बढ़ाने वाला। कोई दुर्गंध नहीं, कई दिनों तक ताज़ा रहे।",
      ta: "அடர் சிவப்பு சதைப்பகுதி, இனிப்பான சுவை, செரிமானத்திற்கு சிறந்த இயற்கை பப்பாளி பழம்.",
      fr: "Chair rouge orangé fondante et très douce, riche en papaïne digestive, sans odeur musquée."
    },
    specsDetailed: {
      en: "Brix Index: 13.5° • Unit Weight: 1.2-1.8 kg • Ring Spot Virus resistant stock • Ripened in temp-controlled rooms at 20°C.",
      hi: "ब्रिक्स मिठास: 13.5° • प्रति फल वजन: 1.2-1.8 किग्रा • रिंग स्पॉट वायरस मुक्त • 20°C नियंत्रित कक्ष में पकाया गया।",
      ta: "பிரிக்ஸ்: 13.5° • பழ எடை: 1.2-1.8 கிலோ • தரக் கட்டுப்பாடு மற்றும் பாதுகாப்பான பழுக்க வைக்கும் முறை.",
      fr: "Brix: 13.5° • Poids moyen: 1.2-1.8 kg • Tolérance PRSV • Maturation contrôlée à 20°C."
    },
    quickMetrics: {
      brix: "13.5° Brix",
      shelfLife: "9 Days Chilled",
      mrlStatus: "Zero Carbide",
      marginSpread: "+14.8% Mandi"
    }
  },
  {
    id: "prod-lemon",
    categoryKey: "produce",
    easyEmoji: "🍋",
    name: {
      en: "Kagzi Juicy Seedless Lemon",
      hi: "कागज़ी रसदार देसी नींबू (पतला छिलका)",
      ta: "காகித எலுமிச்சை (அதிக சாறு)",
      fr: "Citrons Kagzi à Peau Fine Extra Juteux"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Tenali & Vijayawada Citrus Mandi",
    rating: "4.9 ★ (3,110 Reviews)",
    price: "₹60",
    unit: {
      en: "per kg (₹600 / 10kg Net Bag)",
      hi: "प्रति किलो (₹600 / 10किग्रा जालीदार बैग)",
      ta: "கிலோவிற்கு (₹600 / 10கிலோ பை)",
      fr: "par kg (₹600 / Filet 10kg)"
    },
    discount: "52% Juice Content by Volume",
    badge: {
      en: "Paper-Thin Rind Extra Juicy",
      hi: "कागज़ी छिलका व 52% रस",
      ta: "மெல்லிய தோல், அதிக சாறு",
      fr: "Peau Fine & Très Juteux"
    },
    image: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Paper-thin skin, brimming with zesty tangy juice, barely any seeds. One lemon yields twice as much juice as market lemons!",
      hi: "कागज़ जैसा पतला छिलका, रस से लबालब भरा, बीज न के बराबर। एक नींबू में बाज़ार के दो नींबू जितना रस निकलता है!",
      ta: "மெல்லிய தோல், அதிக புளிப்பு சாறு, குறைவான விதைகள். நீண்ட நாட்கள் கெடாமல் இருக்கும் எலுமிச்சை.",
      fr: "Peau fine comme du papier, gorgé de jus acidulé et très peu de pépins. Rendement en jus exceptionnel."
    },
    specsDetailed: {
      en: "Juice Yield: 52% by weight • Acidity: 5.8% citric acid • Diameter: 42-48 mm • Food grade natural beeswax wash.",
      hi: "रस प्रतिशत: 52% • अम्लता: 5.8% साइट्रिक एसिड • आकार: 42-48 मिमी • प्राकृतिक बीज़वैक्स कोटिंग।",
      ta: "சாறு அளவு: 52% • சிட்ரிக் அமிலம்: 5.8% • விட்டம்: 42-48 மிமீ • உணவு தர மெழுகு பூச்சு.",
      fr: "Rendement jus: 52% • Acidité citrique: 5.8% • Calibre: 42-48 mm • Cire d'abeille naturelle protectrice."
    },
    quickMetrics: {
      brix: "52% Juice Vol",
      shelfLife: "25 Days Cool",
      mrlStatus: "Export Certified",
      marginSpread: "+21.0% Spot"
    }
  },
  {
    id: "prod-bittergourd",
    categoryKey: "produce",
    easyEmoji: "🥒",
    name: {
      en: "Organic Dark Green Bitter Gourd (Karela)",
      hi: "देसी गहरा हरा करेला (कम कड़वाहट)",
      ta: "நாட்டு பாகற்காய் (அடர்பச்சை)",
      fr: "Margoses / Concombres Amers Vert Foncé (Karela)"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Satara Valley Organic Growers",
    rating: "4.8 ★ (1,220 Reviews)",
    price: "₹42",
    unit: {
      en: "per kg (₹840 / 20kg Crate)",
      hi: "प्रति किलो (₹840 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹840 / 20கிலோ பெட்டி)",
      fr: "par kg (₹840 / Caisse 20kg)"
    },
    discount: "Blood Sugar Balancing",
    badge: {
      en: "Crisp & Tender Spines",
      hi: "कुरकुरा व कोमल कांटेदार",
      ta: "இயற்கை மருத்துவ குணம்",
      fr: "Qualité Maraîchère Extra"
    },
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Tender, crunchy dark green ridges with pleasant mild bitterness. Packed with charantin for healthy blood sugar!",
      hi: "गहरे हरे कांटेदार छिलके वाला कोमल करेला, कम कड़वा और स्वादिष्ट। शुगर नियंत्रण और स्वास्थ्य के लिए वरदान!",
      ta: "இயற்கை மருத்துவ குணம் கொண்ட நாட்டு பாகற்காய். ரத்த சர்க்கரையை சீராக வைக்க உதவும் சிறந்த உணவு.",
      fr: "Tégument vert sombre à crêtes tendres, amertume subtile. Réputé pour ses vertus hypoglycémiantes."
    },
    specsDetailed: {
      en: "Length: 15-20 cm • Charantin Content: 0.18% • Hydro-cooled post harvest at 10°C to arrest yellowing.",
      hi: "लंबाई: 15-20 सेमी • चैरेंटिन तत्व: 0.18% • कटाई के तुरंत बाद 10°C हाइड्रो-कूल्ड ताकि पीलापन न आए।",
      ta: "நீளம்: 15-20 செமீ • சர்க்கரை கட்டுப்படுத்தும் சத்துக்கள் • மஞ்சள் நிறமாக மாறாமல் தடுக்க குளிர்விப்பு.",
      fr: "Longueur: 15-20 cm • Teneur en charantine: 0.18% • Hydro-cooling à 10°C pour stopper le jaunissement."
    },
    quickMetrics: {
      brix: "Crisp A-Grade",
      shelfLife: "8 Days @ 10°C",
      mrlStatus: "Zero Chemical",
      marginSpread: "+17.5% Farmgate"
    }
  },
  {
    id: "prod-bottlegourd",
    categoryKey: "produce",
    easyEmoji: "🥒",
    name: {
      en: "Tender Long Green Bottle Gourd (Lauki)",
      hi: "ताज़ी हरी मुलायम लौकी (देसी घिया)",
      ta: "நீள சுரைக்காய் (மென்மையானது)",
      fr: "Calebasses Vertes Tendres (Lauki)"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Sonipat Green Belt Farmer Producer Co.",
    rating: "4.8 ★ (1,590 Reviews)",
    price: "₹24",
    unit: {
      en: "per kg (₹480 / 20kg Crate)",
      hi: "प्रति किलो (₹480 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹480 / 20கிலோ பெட்டி)",
      fr: "par kg (₹480 / Caisse 20kg)"
    },
    discount: "Tender Without Hard Seeds",
    badge: {
      en: "92% Hydration Value",
      hi: "92% प्राकृतिक जल व ठंडक",
      ta: "நீர்ச்சத்து நிறைந்தது",
      fr: "92% Teneur en Eau Naturelle"
    },
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Silky light green skin, soft and seedless core, cooks quickly with melt-in-mouth texture. Cooling for the stomach!",
      hi: "चमकदार हल्की हरी, बिल्कुल मुलायम बिना कड़े बीजों की लौकी। तुरंत पकने वाली, पेट को ठंडक व हल्कापन दे!",
      ta: "மென்மையான, விதை இல்லாத சுரைக்காய். உடல் சூட்டை தணிக்கும் நீர்ச்சத்து நிறைந்த ஆரோக்கிய உணவு.",
      fr: "Peau vert tendre soyeuse, chair sans graines dures, cuisson rapide et très digeste."
    },
    specsDetailed: {
      en: "Weight: 800-1200g • Fiber: 1.2g/100g • Zero bitterness guaranteed (tested cucurbitacin-free).",
      hi: "वजन: 800-1200 ग्राम • फाइबर: 1.2g/100g • कड़वाहट-रहित गारंटी (कुकुरबिटासिन मुक्त)।",
      ta: "எடை: 800-1200 கிராம் • நார்ச்சத்து நிறைந்தது • கசப்பற்ற இயற்கை சுவை உத்தரவாதம்.",
      fr: "Poids: 800-1200g • Fibres: 1.2g/100g • Garanti sans cucurbitacines toxiques (sans amertume)."
    },
    quickMetrics: {
      brix: "Hydration 92%",
      shelfLife: "7 Days Cool",
      mrlStatus: "Pure Farmgate",
      marginSpread: "+13.4% Mandi"
    }
  },
  {
    id: "prod-cabbage",
    categoryKey: "produce",
    easyEmoji: "🥬",
    name: {
      en: "Crisp Green Tight-Head Cabbage",
      hi: "हरी ठोस पत्तागोभी (ताज़ा खेत से)",
      ta: "பச்சை முட்டைகோஸ் (திடமான தலை)",
      fr: "Choux Blancs / Verts Pommés Croquants"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Ooty & Nilgiris Hill Produce Co.",
    rating: "4.7 ★ (1,100 Reviews)",
    price: "₹20",
    unit: {
      en: "per kg (₹400 / 20kg Bag)",
      hi: "प्रति किलो (₹400 / 20किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹400 / 20கிலோ பை)",
      fr: "par kg (₹400 / Sac 20kg)"
    },
    discount: "Solid & Worm-Free Guaranteed",
    badge: {
      en: "Heavy Solid Density",
      hi: "भारी ठोस घनत्व व ताज़ा",
      ta: "உறுதியான முட்டைகோஸ்",
      fr: "Pommes Denses & Fermes"
    },
    image: "https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Rock solid heads with sweet crunchy leaves. Kept cold from the farm so it stays crisp in your kitchen for over two weeks!",
      hi: "पत्थर जैसी ठोस गड्डी, मीठी और कुरकुरी पत्तियां। खेत से कोल्ड-वैन द्वारा सीधी डिलीवरी, 2 हफ्ते तक बिल्कुल ताज़ी!",
      ta: "திடமான முட்டைகோஸ், மொறுமொறுப்பான இலைகள், சமையல் மற்றும் சாலட்டிற்கு 2 வாரங்கள் வரை கெடாது.",
      fr: "Pommes très denses aux feuilles sucrées et croquantes. Chaîne du froid respectée, se conserve plus de 2 semaines."
    },
    specsDetailed: {
      en: "Head Weight: 1.0-1.5 kg • Density: 0.88 g/cm³ • Vitamin K: 76 µg/100g • Washed and trimmed outer wrapper leaves.",
      hi: "वजन: 1.0-1.5 किग्रा • घनत्व: 0.88 g/cm³ • विटामिन-के से भरपूर • बाहरी पत्तियां छंटी हुई।",
      ta: "தலை எடை: 1.0-1.5 கிலோ • அடர்த்தி: 0.88 g/cm³ • வைட்டமின் கே சத்து நிறைந்தது.",
      fr: "Poids unitaire: 1.0-1.5 kg • Densité: 0.88 g/cm³ • Vitamine K: 76 µg/100g • Feuilles externes parées."
    },
    quickMetrics: {
      brix: "Solid Density",
      shelfLife: "16 Days @ 4°C",
      mrlStatus: "Clean Verified",
      marginSpread: "+15.6% Direct"
    }
  },
  {
    id: "prod-carrot",
    categoryKey: "produce",
    easyEmoji: "🥕",
    name: {
      en: "Sweet Red Desi Winter Carrots",
      hi: "लाल देसी मीठी गाजर (हलवा व जूस स्पेशल)",
      ta: "நாட்டு சிவப்பு கேரட் (இனிப்பானது)",
      fr: "Carottes Rouges Douces Fermières"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Panipat & Karnal Fresh Harvest FPO",
    rating: "4.9 ★ (2,800 Reviews)",
    price: "₹32",
    unit: {
      en: "per kg (₹640 / 20kg Bag)",
      hi: "प्रति किलो (₹640 / 20किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹640 / 20கிலோ மூட்டை)",
      fr: "par kg (₹640 / Sac 20kg)"
    },
    discount: "Extra Sweet Beta-Carotene Rich",
    badge: {
      en: "Tender Red Core",
      hi: "लाल मुलायम गूदा (बिना लकड़ी)",
      ta: "மென்மையான சிவப்பு மையம்",
      fr: "Cœur Rouge Tendre Sans Bois"
    },
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c317?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Vibrant deep red color, crunchy sweet bite without tough yellow wood in the middle. Perfect for fresh juicing and gajar halwa!",
      hi: "गहरा लाल रंग, अत्यधिक मीठी और कुरकुरी गाजर, बीच में कोई पीली लकड़ी नहीं। गाजर के हलवे व जूस के लिए सर्वोत्तम!",
      ta: "அடர் சிவப்பு நிறம், இயற்கையான இனிப்பு சுவை, புதிய ஜூஸ் மற்றும் கேரட் அல்வாவிற்கு மிகச் சிறந்தது.",
      fr: "Superbe couleur rouge rubis, croquant sucré sans cœur ligneux. Idéal pour jus frais et desserts."
    },
    specsDetailed: {
      en: "Brix Index: 10.4° • Beta-Carotene: 8,285 µg/100g • Washed in hydro-recirculating ozone flumes to remove soil.",
      hi: "ब्रिक्स मिठास: 10.4° • बीटा-कैरोटीन: 8,285 µg/100g • ओजोन पानी में धुली हुई मिट्टी-मुक्त गाजर।",
      ta: "பிரிக்ஸ்: 10.4° • பீட்டா கரோட்டின் சத்து நிறைந்தது • நீரில் சுத்திகரிக்கப்பட்ட மண் இல்லாத கேரட்.",
      fr: "Brix: 10.4° • Bêta-carotène: 8 285 µg/100g • Lavage en canaux d'eau ozonée à recirculation."
    },
    quickMetrics: {
      brix: "10.4° Brix",
      shelfLife: "14 Days @ 5°C",
      mrlStatus: "Ozone Washed",
      marginSpread: "+19.2% Direct"
    }
  },
  {
    id: "prod-radish",
    categoryKey: "produce",
    easyEmoji: "🌱",
    name: {
      en: "Crisp White Pungent Desi Radish (Mooli)",
      hi: "सफ़ेद कड़क देसी मूली (हरी पत्तियों सहित)",
      ta: "நாட்டு வெண் முள்ளங்கி",
      fr: "Radis Blancs Daikon Fermiers Croquants"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Yamuna Khadar Farmer Union",
    rating: "4.8 ★ (1,340 Reviews)",
    price: "₹18",
    unit: {
      en: "per kg (₹360 / 20kg Sack)",
      hi: "प्रति किलो (₹360 / 20किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹360 / 20கிலோ மூட்டை)",
      fr: "par kg (₹360 / Sac 20kg)"
    },
    discount: "Fresh Crisp Morning Pull",
    badge: {
      en: "Zero Pithy Texture",
      hi: "बिना खोखलेपन के ठोस मूली",
      ta: "திடமான முள்ளங்கி",
      fr: "Racines Pleines Non Creuses"
    },
    image: "https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Long straight white radishes with sharp peppery crunch and tender green tops. Never hollow or spongy!",
      hi: "लंबी सीधी सफेद मूली, कुरकुरी और तीखी, हरी ताज़ी पत्तियों सहित। कभी अंदर से खोखली या स्पंज जैसी नहीं निकलेगी!",
      ta: "நீளமான வெள்ளை முள்ளங்கி, நல்ல காரமான சுவை, செரிமானத்திற்கு உதவும் பசுமையான இலைகளுடன்.",
      fr: "Racines longues droites bien blanches, croquant tonique et piquant, jamais spongieuses."
    },
    specsDetailed: {
      en: "Root Length: 25-32 cm • Diameter: 3.5-4.5 cm • Glucosinolates: 18.2 µmol/g • Shipped with fresh foliage intact.",
      hi: "लंबाई: 25-32 सेमी • मोटाई: 3.5-4.5 सेमी • ग्लूकोसिनोलेट्स: 18.2 µmol/g • हरी पत्तियों सहित ताज़ा प्रेषण।",
      ta: "நீளம்: 25-32 செமீ • தடிமன்: 3.5-4.5 செமீ • புதிய பச்சை இலைகளுடன் அனுப்பப்படுகிறது.",
      fr: "Longueur: 25-32 cm • Diamètre: 3.5-4.5 cm • Glucosinolates: 18.2 µmol/g • Livré avec fanes fraîches."
    },
    quickMetrics: {
      brix: "Crisp Solid",
      shelfLife: "6 Days Chilled",
      mrlStatus: "Farmgate Pure",
      marginSpread: "+16.0% Spot"
    }
  },
  {
    id: "prod-greenpeas",
    categoryKey: "produce",
    easyEmoji: "🫛",
    name: {
      en: "Sweet Tender Farm-Fresh Green Peas (Matar)",
      hi: "मीठे व ताज़े हरे मटर (देसी दानेदार)",
      ta: "பண்ணை பசுமை பட்டாணி (Sweet Green Peas)",
      fr: "Petits Pois Verts Sucrés de Plein Champ"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Himachal Mountain Pea Growers Association",
    rating: "4.9 ★ (2,680 Reviews)",
    price: "₹45",
    unit: {
      en: "per kg (₹1,800 / 40kg Bag)",
      hi: "प्रति किलो (₹1,800 / 40किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹1,800 / 40கிலோ பை)",
      fr: "par kg (₹1,800 / Sac 40kg)"
    },
    discount: "Fresh Morning Harvest",
    badge: {
      en: "Sweet 9-11 Seed Pods",
      hi: "भरे हुए 9-11 दाने प्रति फली",
      ta: "முழுமையான இனிப்பு மணிகள்",
      fr: "Gousses Pleines 9-11 Grains"
    },
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Plump green pods packed with naturally sweet, tender green peas. Easy to shell, perfect for curries, pulao, and freezing!",
      hi: "प्राकृतिक मिठास से भरपूर ताज़ी हरी फलियां, जिनमें 9 से 11 भरे हुए दाने होते हैं। मटर पनीर, पुलाव और फ्रोजन के लिए सर्वोत्तम!",
      ta: "இயற்கையான இனிப்பு சுவை கொண்ட புதிய பச்சை பட்டாணி மணிகள். குழம்பு மற்றும் புலாவ் செய்ய மிகவும் சுவையானது!",
      fr: "Gousses charnues bien vertes gorgées de petits pois tendres et sucrés. Idéal pour la cuisine fraîche ou surgélation."
    },
    specsDetailed: {
      en: "Variety: Arkel & GS-10 High Sugar • Moisture: 78.4% • Shelling Percentage: 48-52% • Cold-chain hydrocooled at 2°C.",
      hi: "किस्म: अर्केल व जीएस-10 • नमी: 78.4% • दाना प्रतिशत: 48-52% • 2°C पर हाइड्रो-कूल्ड ताकि मिठास बनी रहे।",
      ta: "ரகம்: ஆர்கெல் • ஈரப்பதம்: 78.4% • விதை அளவு: 48-52% • 2°C குளிரூட்டல் முறையில் பாதுகாக்கப்படுகிறது.",
      fr: "Variété Arkel & GS-10 • Teneur en eau: 78.4% • Rendement égrenage: 48-52% • Hydrocooling à 2°C."
    },
    quickMetrics: {
      brix: "14.2° Brix",
      shelfLife: "10 Days @ 2°C",
      mrlStatus: "Zero Residue",
      marginSpread: "+19.2% Mandi"
    }
  },
  {
    id: "prod-cucumber",
    categoryKey: "produce",
    easyEmoji: "🥒",
    name: {
      en: "Crisp Desi Seedless Salad Cucumber (Kheera)",
      hi: "कुरकुरा देसी खीरा (सलाद स्पेशल)",
      ta: "மிருதுவான வெள்ளரிக்காய் (Kheera)",
      fr: "Concombres Croquants Sans Pépins"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Polyhouse Hydroponic Farmers Collective",
    rating: "4.8 ★ (1,890 Reviews)",
    price: "₹28",
    unit: {
      en: "per kg (₹560 / 20kg Crate)",
      hi: "प्रति किलो (₹560 / 20किग्रा क्रेट)",
      ta: "கிலோவிற்கு (₹560 / 20கிலோ பெட்டி)",
      fr: "par kg (₹560 / Cagette 20kg)"
    },
    discount: "Polyhouse Clean Grade",
    badge: {
      en: "Zero Bitterness Guaranteed",
      hi: "कड़वाहट मुक्त गारंटी",
      ta: "கசப்பு இல்லாத வெள்ளரி",
      fr: "Garantie Sans Aucune Amertume"
    },
    image: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Super crisp, thin-skinned green cucumbers packed with refreshing hydration. Never bitter, thin skin needs no peeling!",
      hi: "पतले छिलके वाला, रसदार और कुरकुरा खीरा। बिना कड़वाहट और तुरंत ताजगी देने वाला!",
      ta: "மெல்லிய தோல், அதிக நீர்ச்சத்து கொண்ட மொறுமொறு வெள்ளரிக்காய். கசப்பு இல்லாதது!",
      fr: "Concombres verts croquants à peau fine, ultra-rafraîchissants et jamais amers."
    },
    specsDetailed: {
      en: "Length: 18-22 cm • Diameter: 3.5 cm • Water Content: 96.2% • Post-harvest cold-chain washed.",
      hi: "लंबाई: 18-22 सेमी • व्यास: 3.5 सेमी • जल सामग्री: 96.2% • कोल्ड-चेन द्वारा सुरक्षित।",
      ta: "நீளம்: 18-22 செமீ • விட்டம்: 3.5 செமீ • நீர்ச்சத்து: 96.2% • சுகாதாரமான முறையில் பறிக்கப்பட்டது.",
      fr: "Longueur: 18-22 cm • Diamètre: 3.5 cm • Teneur en eau: 96.2% • Lavé en chaîne du froid."
    },
    quickMetrics: {
      brix: "Crisp Grade-A",
      shelfLife: "7 Days @ 10°C",
      mrlStatus: "Residue Free",
      marginSpread: "+24.8% APMC"
    }
  },
  {
    id: "prod-watermelon",
    categoryKey: "produce",
    easyEmoji: "🍉",
    name: {
      en: "Sweet Crimson Giant Watermelon (Tarbooj)",
      hi: "मीठा लाल रसीला तरबूज (देसी व हाइब्रिड)",
      ta: "இனிப்பு தர்பூசணி (முழு பழம்)",
      fr: "Pastèque Crimson Sucrée & Juteuse"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Deccan River Basin Melon Growers",
    rating: "4.9 ★ (3,420 Reviews)",
    price: "₹18",
    unit: {
      en: "per kg (3-5 kg / Whole Fruit)",
      hi: "प्रति किलो (3-5 किग्रा साबुत फल)",
      ta: "கிலோவிற்கு (3-5 கிலோ / பழம்)",
      fr: "par kg (3-5 kg / Fruit Entier)"
    },
    discount: "Field-Ripened Honey Sweet",
    badge: {
      en: "Deep Crimson Red Flesh",
      hi: "गहरा लाल व रसीला गूदा",
      ta: "அடர் சிவப்பு இனிப்பு சதை",
      fr: "Chair Rouge Rubis & Fondante"
    },
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Deep crimson red flesh with tiny seeds and thirst-quenching sweet juice. Tested with sound-tap resonance for peak ripeness!",
      hi: "गहरा लाल, कुरकुरा और मीठे रस से भरा तरबूज। खेत से सीधे तोड़ा हुआ, गर्मी में तुरंत ठंडक और ताज़गी देता है!",
      ta: "அடர் சிவப்பு சதைப்பகுதி, குறைந்த விதைகள் மற்றும் தாகம் தீர்க்கும் இனிப்பு சாறு. வெயில் காலத்திற்கு உகந்தது!",
      fr: "Pastèque à chair rouge rubis fondante, graines minuscules et jus abondant très sucré. Idéale en période chaude."
    },
    specsDetailed: {
      en: "Brix Index: 12.8° • Lycopene: 6.8 mg/100g • Average Weight: 3.5 - 5.2 kg • Uniform stripe rind with ground-spot yellowing.",
      hi: "ब्रिक्स मिठास: 12.8° • लाइकोपीन: 6.8 mg/100g • फल वजन: 3.5-5.2 किग्रा • परिपक्व पीले निशान युक्त।",
      ta: "பிரிக்ஸ் இனிப்பு: 12.8° • லைகோபீன் சத்து: 6.8 mg/100g • எடை: 3.5-5.2 கிலோ • இயற்கையாக பழுத்தது.",
      fr: "Indice Brix: 12.8° • Teneur en lycopène: 6.8 mg/100g • Poids moyen: 3.5 - 5.2 kg • Écorce solide."
    },
    quickMetrics: {
      brix: "12.8° Brix",
      shelfLife: "20 Days Ambient",
      mrlStatus: "Pure Natural",
      marginSpread: "+21.5% Farmgate"
    }
  },
  {
    id: "prod-muskmelon",
    categoryKey: "produce",
    easyEmoji: "🍈",
    name: {
      en: "Aromatic Sweet Netted Muskmelon (Kharbooja)",
      hi: "सुगंधित व मीठा जालीदार खरबूजा (मधु रस)",
      ta: "நறுமணமிக்க இனிப்பு முலாம் பழம் (Muskmelon)",
      fr: "Melons Cantaloup Brodés Parfumés"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Ganga Khadar Melon Producers FPO",
    rating: "4.8 ★ (2,150 Reviews)",
    price: "₹35",
    unit: {
      en: "per kg (1.2-2 kg / Fruit)",
      hi: "प्रति किलो (1.2-2 किग्रा प्रति फल)",
      ta: "கிலோவிற்கு (1.2-2 கிலோ பழம்)",
      fr: "par kg (1.2-2 kg / Fruit)"
    },
    discount: "Peak Aroma Selection",
    badge: {
      en: "High Honey Scent & Brix",
      hi: "शहद जैसी मिठास व मनमोहक सुगंध",
      ta: "தேன் போன்ற இனிப்பு மற்றும் மணம்",
      fr: "Arôme Mielleux & Chair Orangée"
    },
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Dense golden-orange flesh with a rich musky honey aroma. Super juicy and sweet, perfect for breakfast bowls and shakes!",
      hi: "केसरिया नारंगी गूदा, मनमोहक भीनी-भीनी खुशबू और शहद जैसी मिठास। सुबह नाश्ते और शेक के लिए सबसे पौष्टिक फल!",
      ta: "தங்க நிற சதைப்பகுதி, தேன் போன்ற மணம் மற்றும் அதிக சாறு. காலை உணவிற்கும் ஜூஸ் செய்வதற்கும் மிகச் சிறந்தது!",
      fr: "Chair dense orangée safranée, parfum musqué intense et goût mielleux incomparable. Idéal en tranches fraîches."
    },
    specsDetailed: {
      en: "Brix Index: 13.5° • Rind Netting: 92% uniform slip-stage • Flesh Depth: 4.2 cm • Beta-carotene: 2,020 µg/100g.",
      hi: "ब्रिक्स मिठास: 13.5° • जाली घनत्व: 92% • गूदे की मोटाई: 4.2 सेमी • बीटा-कैरोटीन: 2,020 µg/100g।",
      ta: "பிரிக்ஸ் இனிப்பு: 13.5° • தடிமன்: 4.2 செமீ • பீட்டா-கரோட்டின் சத்து நிறைந்தது • தரமான தேர்வு.",
      fr: "Indice Brix: 13.5° • Réticulation écorce: 92% • Épaisseur de chair: 4.2 cm • Bêta-carotène: 2,020 µg/100g."
    },
    quickMetrics: {
      brix: "13.5° Brix",
      shelfLife: "9 Days @ 8°C",
      mrlStatus: "Clean Verified",
      marginSpread: "+17.6% APMC"
    }
  },
  {
    id: "prod-pineapple",
    categoryKey: "produce",
    easyEmoji: "🍍",
    name: {
      en: "Queen Sweet Golden Pineapple (Ananas)",
      hi: "त्रिपुरा क्वीन रसीला मीठा अनानास",
      ta: "இனிப்பு தங்க அன்னாசி பழம் (Pineapple)",
      fr: "Ananas Queen Victoria Dorés et Juteux"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Tripura Hill Agro-Horticulture Guild",
    rating: "4.9 ★ (2,430 Reviews)",
    price: "₹70",
    unit: {
      en: "per Piece (1.2-1.5 kg)",
      hi: "प्रति नग (1.2-1.5 किग्रा फल)",
      ta: "ஒரு பழம் (1.2-1.5 கிலோ)",
      fr: "la Pièce (1.2-1.5 kg)"
    },
    discount: "GI-Tagged Queen Variety",
    badge: {
      en: "Low-Fiber Golden Meat",
      hi: "बिना रेशे का सुनहरा गूदा",
      ta: "நார் குறைந்த தங்க சதைப்பகுதி",
      fr: "Chair Jaune Sans Fibres Dures"
    },
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Famous GI Queen Pineapple from hill slopes! Super sweet, golden yellow, pleasant aroma, and zero throat itchiness.",
      hi: "पहाड़ी ढलानों से तोड़ा गया प्रसिद्ध क्वीन अनानास! कम रेशे वाला, शहद जैसा मीठा, गले में बिना किसी खराश के खाने में आनंददायक।",
      ta: "புகழ்பெற்ற குயின் ரக அன்னாசி பழம்! தேன் போன்ற இனிப்பு சுவை, தொண்டையில் அரிப்பு ஏற்படுத்தாத மென்மையான பழம்.",
      fr: "Célèbre variété Queen des coteaux orientaux. Chair jaune bouton d'or très sucrée, parfum capiteux et sans piquant en gorge."
    },
    specsDetailed: {
      en: "Brix Index: 16.2° • Acidity: 0.65% • Crown Ratio: 1:1.2 • Rich in Bromelain enzyme (2,400 GDU/g) • APEDA cleared.",
      hi: "ब्रिक्स मिठास: 16.2° • अम्लता: 0.65% • ब्रोमेलेन एंजाइम युक्त (2,400 GDU/g) • एपीडा निर्यात स्वीकृत।",
      ta: "பிரிக்ஸ் இனிப்பு: 16.2° • புளிப்பு தன்மை: 0.65% • புரோமெலைன் என்சைம் நிறைந்தது • APEDA ஏற்றுமதி தரம்.",
      fr: "Indice Brix: 16.2° • Acidité: 0.65% • Richesse en bromélaïne (2,400 GDU/g) • Certifié export."
    },
    quickMetrics: {
      brix: "16.2° Brix",
      shelfLife: "14 Days @ 12°C",
      mrlStatus: "Organic Certified",
      marginSpread: "+24.0% Direct"
    }
  },
  {
    id: "prod-sweetlime",
    categoryKey: "produce",
    easyEmoji: "🍈",
    name: {
      en: "Fresh Juicy Sweet Lime (Mosambi)",
      hi: "ताज़ा रसीला मीठा मौसंबी (जूस स्पेशल)",
      ta: "புதிய சாறு நிறைந்த சாத்துக்குடி (Mosambi)",
      fr: "Limettes Douces Mosambi Extra-Juteuses"
    },
    category: {
      en: "Vegetables & Fruits",
      hi: "ताज़ी सब्ज़ियाँ व फल",
      ta: "காய்கறி & பழங்கள்",
      fr: "Légumes & Fruits"
    },
    supplier: "Marathwada Citrus Growers Cooperative",
    rating: "4.8 ★ (2,890 Reviews)",
    price: "₹55",
    unit: {
      en: "per kg (₹1,100 / 20kg Crate)",
      hi: "प्रति किलो (₹1,100 / 20किग्रा पेटी)",
      ta: "கிலோவிற்கு (₹1,100 / 20கிலோ பெட்டி)",
      fr: "par kg (₹1,100 / Caisse 20kg)"
    },
    discount: "Extra High Juice Extraction",
    badge: {
      en: "52% Juice Yield by Weight",
      hi: "52% सर्वाधिक रस निष्कर्षण",
      ta: "52% அதிக சாறு அளவு",
      fr: "Rendement en Jus Supérieur 52%"
    },
    image: "https://images.unsplash.com/photo-1590005354167-6da97870c757?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Golden-green thin skinned Mosambi packed with sweet, cooling vitamin C juice. The perfect fruit for fresh immune boosting juice!",
      hi: "पतले छिलके वाली रसीली मौसंबी, जिसमें कड़वाहट बिल्कुल नहीं होती। घर पर ताज़ा जूस निकालकर पीने और इम्यूनिटी बढ़ाने के लिए सर्वोत्तम!",
      ta: "மெல்லிய தோல் கொண்ட சாத்துக்குடி, அதிக சாறு மற்றும் வைட்டமின் சி நிறைந்தது. நோயெதிர்ப்பு சக்திக்கு மிகவும் நல்லது!",
      fr: "Limettes douces à peau fine jaune-vert, gorgées d'un jus doux et désaltérant riche en vitamine C. Parfait pour les jus matinaux."
    },
    specsDetailed: {
      en: "Juice Yield: 52.4% • TSS: 11.2° Brix • Acidity: 0.38% • Non-bitter limonin content (<2 ppm) • Wax coated for shelf life.",
      hi: "रस निष्कर्षण: 52.4% • मिठास: 11.2° ब्रिक्स • कड़वाहट तत्व: <2 ppm • प्राकृतिक फूड-ग्रेड वैक्स उपचारित।",
      ta: "சாறு அளவு: 52.4% • இனிப்பு: 11.2° • கசப்பு தன்மை அற்றது • உணவு தர மெழுகு பூச்சு செய்யப்பட்டது.",
      fr: "Rendement en jus: 52.4% • Échelle TSS: 11.2° Brix • Teneur en limonine amère <2 ppm • Cirage alimentaire."
    },
    quickMetrics: {
      brix: "11.2° Brix",
      shelfLife: "18 Days @ 8°C",
      mrlStatus: "Zero Chemical",
      marginSpread: "+16.5% Mandi"
    }
  },

  // ================= TRACTORS & FARM VEHICLES =================
  {
    id: "veh-mahindra-575",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "Mahindra 575 DI XP Plus Tractor (50 HP)",
      hi: "महिंद्रा 575 डीआई एक्सपी प्लस (50 HP)",
      ta: "மஹிந்திரா 575 DI XP பிளஸ் டிராக்டர் (50 HP)",
      fr: "Tracteur Mahindra 575 DI XP Plus (50 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Mahindra Agri-Machinery Authorized Hub",
    rating: "4.9 ★ (3,120 Reviews)",
    price: "₹6,85,000",
    unit: {
      en: "On-Road / EMI ₹14,200/mo",
      hi: "ऑन-रोड कीमत / EMI ₹14,200/माह",
      ta: "ஆன்-ரோடு / EMI ₹14,200/மாதம்",
      fr: "Prix TTC / Financement ₹14,200/mois"
    },
    discount: "₹25,000 Festive Subsidy",
    badge: {
      en: "6-Year Engine Warranty",
      hi: "6 साल की इंजन वारंटी",
      ta: "6 ஆண்டு உத்தரவாதம்",
      fr: "Garantie Constructeur 6 Ans"
    },
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "India's most trusted 50 HP tractor. Low diesel consumption, pulls 7-foot rotavator with ease, easy resale.",
      hi: "भारत का सबसे भरोसेमंद 50 एचपी ट्रैक्टर। कम डीजल खपत, 7 फीट रोटावेटर आसानी से चलाए, आसान लोन।",
      ta: "இந்தியாவின் நம்பகமான 50 HP டிராக்டர். குறைந்த டீசல் செலவு, 7 அடி ரோட்டவேட்டரை எளிதாக இயக்கும்.",
      fr: "Le tracteur 50 CV le plus éprouvé. Faible consommation de carburant, entraîne rotavator 7 pieds sans peine."
    },
    specsDetailed: {
      en: "Engine: 4 Cylinder 2979 cc ELS • Rated Power: 50 HP @ 2100 RPM • PTO: 43.5 HP • Lift: 1,500 kg High Precision Hydraulics.",
      hi: "इंजन: 4 सिलेंडर 2979 cc ELS • रेटेड पावर: 50 HP @ 2100 RPM • पीटीओ: 43.5 HP • लिफ्ट क्षमता: 1,500 किग्रा।",
      ta: "என்ஜின்: 4 சிலிண்டர் 2979 cc • பவர்: 50 HP @ 2100 RPM • PTO: 43.5 HP • தூக்கும் எடை: 1,500 கிலோ.",
      fr: "Moteur 4 cylindres 2979 cm³ ELS • Puissance: 50 CV @ 2100 tr/min • PDF: 43.5 CV • Relevage: 1 500 kg."
    },
    quickMetrics: {
      hp: "50 HP (37.3 kW)",
      displacement: "2979 cc 4-Cyl",
      ptoRpm: "43.5 HP @ 540 RPM",
      liftCapacity: "1,500 kg",
      torque: "192 Nm @ 1400 RPM",
      emi: "₹14,200/mo (KCC)"
    }
  },
  {
    id: "veh-sonalika-tiger",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "Sonalika Tiger DI 75 CRDS Tractor (75 HP)",
      hi: "सोनालिका टाइगर डीआई 75 CRDS (75 HP)",
      ta: "சோனாலிகா டைகர் DI 75 டிராக்டர் (75 HP)",
      fr: "Tracteur Sonalika Tiger DI 75 CRDS (75 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Sonalika Heavy Tractors Division",
    rating: "4.9 ★ (2,890 Reviews)",
    price: "₹11,40,000",
    unit: {
      en: "On-Road / EMI ₹23,500/mo",
      hi: "ऑन-रोड कीमत / EMI ₹23,500/माह",
      ta: "ஆன்-ரோடு / EMI ₹23,500/மாதம்",
      fr: "Prix TTC / Financement ₹23,500/mois"
    },
    discount: "Free Laser Leveller Trial",
    badge: {
      en: "12F + 12R Shuttle Tech",
      hi: "12 फॉरवर्ड + 12 रिवर्स शटल",
      ta: "12F + 12R ஷட்டில் கியர்",
      fr: "Boîte Synchronisée 12AV + 12AR"
    },
    image: "https://images.unsplash.com/photo-1544984243-ec57ea16fe25?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Beast of a 75 HP engine. Pulls massive 9-foot rotavators, heavy laser levellers, and loaded sugar trailers without sweating.",
      hi: "75 एचपी का महाबली इंजन। 9 फीट रोटावेटर, लेज़र लेवलर और भारी गन्ना ट्रॉली को बिना किसी परेशानी के खींचे।",
      ta: "75 HP ஆற்றல் கொண்ட பிரம்மாண்ட டிராக்டர். 9 அடி ரோட்டவேட்டர் மற்றும் கனரக லேசர் சமன்படுத்திக்கு ஏற்றது.",
      fr: "Puissance phénoménale de 75 CV. Entraîne rotavators 9 pieds, niveleuses laser lourdes et bennes sucrières."
    },
    specsDetailed: {
      en: "Engine: 4712 cc CRDS High-Torque • Torque: 290 Nm @ 1300 RPM • PTO: 66 HP • Lift: 2,500 kg Exso-Sensing Hydraulics.",
      hi: "इंजन: 4712 cc CRDS टॉर्क • 290 Nm टॉर्क @ 1300 RPM • पीटीओ: 66 HP • लिफ्ट क्षमता: 2,500 किग्रा।",
      ta: "என்ஜின்: 4712 cc • டார்க்: 290 Nm • PTO: 66 HP • தூக்கும் எடை: 2,500 கிலோ.",
      fr: "Moteur 4712 cm³ Rampe Commune • Couple: 290 Nm à 1300 tr/min • PDF: 66 CV • Relevage: 2 500 kg."
    },
    quickMetrics: {
      hp: "75 HP (55.9 kW)",
      displacement: "4712 cc CRDS",
      ptoRpm: "66 HP Dual Speed",
      liftCapacity: "2,500 kg",
      torque: "290 Nm @ 1300 RPM",
      emi: "₹23,500/mo (KCC)"
    }
  },
  {
    id: "veh-johndeere-5310",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "John Deere 5310 GearPro 4WD (55 HP)",
      hi: "जॉन डियर 5310 गियरप्रो 4WD (55 HP)",
      ta: "ஜான் டீர் 5310 கியர்ப்ரோ 4WD (55 HP)",
      fr: "Tracteur John Deere 5310 GearPro 4RM (55 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "John Deere India Premier Dealership",
    rating: "5.0 ★ (2,450 Reviews)",
    price: "₹10,25,000",
    unit: {
      en: "On-Road / EMI ₹21,300/mo",
      hi: "ऑन-रोड कीमत / EMI ₹21,300/माह",
      ta: "ஆன்-ரோடு / EMI ₹21,300/மாதம்",
      fr: "Prix TTC / Financement ₹21,300/mois"
    },
    discount: "5-Year Full Care Plan",
    badge: {
      en: "4-Wheel Drive PowrReverser",
      hi: "4-व्हील ड्राइव पावर रिवर्सर",
      ta: "4-வீல் டிரைவ் (4WD)",
      fr: "4 Roues Motrices Inverseur Électro"
    },
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Top-tier premium 4WD tractor for muddy wetland puddling, heavy sugarcane haulage, and laser levelling.",
      hi: "प्रीमियम 4WD ट्रैक्टर, गीले धान के खेतों (लेव लगाने), भारी गन्ना ढुलाई और लेज़र लैंड लेवलर के लिए सर्वश्रेष्ठ।",
      ta: "சேற்று நில நெல் உழவு மற்றும் அதிக எடை கொண்ட கரும்பு போக்குவரத்திற்கு ஏற்ற 4WD பிரீமியம் டிராக்டர்.",
      fr: "Tracteur 4RM haut de gamme pour rizières humides, transport lourd de canne à sucre et nivellement laser."
    },
    specsDetailed: {
      en: "Engine: John Deere 3029H Turbocharged Piston-Cooled • Oil Immersed Disc Brakes • Transmission: 12F + 4R Collarshift • PTO: 46.7 HP.",
      hi: "इंजन: जॉन डियर टर्बोचार्ज्ड पिस्टन-कूल्ड • तेल में डूबे डिस्क ब्रेक • 12F + 4R गियरबॉक्स • पीटीओ: 46.7 HP।",
      ta: "டர்போசார்ஜ்டு என்ஜின் • ஆயில் டிஸ்க் பிரேக் • 12F + 4R கியர் பாக்ஸ் • PTO: 46.7 HP.",
      fr: "Moteur 3029H turbocompressé refroidi par jets d'huile • Freins multidisques bain d'huile • PDF: 46.7 CV."
    },
    quickMetrics: {
      hp: "55 HP Turbo",
      displacement: "2938 cc Turbo",
      ptoRpm: "46.7 HP Dual 540E",
      liftCapacity: "2,000 kg",
      torque: "205 Nm @ 1400 RPM",
      emi: "₹21,300/mo (KCC)"
    }
  },
  {
    id: "veh-swaraj-744",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "Swaraj 744 FE High-Torque Tractor (48 HP)",
      hi: "स्वराज 744 एफई हाई-टॉर्क (48 HP)",
      ta: "ஸ்வராஜ் 744 FE டிராக்டர் (48 HP)",
      fr: "Tracteur Swaraj 744 FE (48 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Swaraj Mahindra & Mahindra Division",
    rating: "4.8 ★ (3,650 Reviews)",
    price: "₹6,90,000",
    unit: {
      en: "On-Road / EMI ₹14,500/mo",
      hi: "ऑन-रोड कीमत / EMI ₹14,500/माह",
      ta: "ஆன்-ரோடு / EMI ₹14,500/மாதம்",
      fr: "Prix TTC / Financement ₹14,500/mois"
    },
    discount: "Free Tool Kit & Canopy",
    badge: {
      en: "Pure Mechanical Reliability",
      hi: "अटूट विश्वसनीयता व किफ़ायती",
      ta: "நீண்ட ஆயுள் மற்றும் குறைவான பராமரிப்பு",
      fr: "Fiabilité Mécanique Robuste"
    },
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Super strong, beloved by Punjab & Haryana farmers for trolley haulage and dry field tilling. Low maintenance!",
      hi: "अत्यधिक मजबूत और टिकाऊ, ट्रॉली ढुलाई और जुताई में सबका चहेता। बहुत कम मरम्मत खर्च और बेहतरीन रिसेल वैल्यू!",
      ta: "மிகவும் உறுதியானது, குறைந்த பராமரிப்பு செலவு மற்றும் டிராலி இழுவைக்கு மிகவும் ஏற்றது.",
      fr: "Ultra robuste, plébiscité pour le transport et les labours profonds. Entretien ultra économique."
    },
    specsDetailed: {
      en: "Engine: 3-Cylinder 3136 cc Water-Cooled • Torque: 173 Nm @ 1300 RPM • PTO: 41.8 HP Multi-Speed Reverse • Lift: 1,700 kg.",
      hi: "इंजन: 3 सिलेंडर 3136 cc वाटर-कूल्ड • 173 Nm टॉर्क @ 1300 RPM • पीटीओ: 41.8 HP मल्टी-स्पीड रिवर्स • लिफ्ट: 1,700 किग्रा।",
      ta: "என்ஜின்: 3 சிலிண்டர் 3136 cc • டார்க்: 173 Nm • PTO: 41.8 HP • தூக்கும் எடை: 1,700 கிலோ.",
      fr: "Moteur 3 cylindres 3136 cm³ refroidi par eau • Couple: 173 Nm • PDF: 41.8 CV multi-vitesses • Relevage: 1 700 kg."
    },
    quickMetrics: {
      hp: "48 HP (35.8 kW)",
      displacement: "3136 cc 3-Cyl",
      ptoRpm: "41.8 HP Multi-Rev",
      liftCapacity: "1,700 kg",
      torque: "173 Nm @ 1300 RPM",
      emi: "₹14,500/mo (KCC)"
    }
  },
  {
    id: "veh-farmtrac-45",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "Escorts Farmtrac 45 Classic Powermaxx (45 HP)",
      hi: "एस्कॉर्ट्स फार्मट्रैक 45 क्लासिक (45 HP)",
      ta: "எஸ்கார்ட் ஃபார்ம்ட்ராக் 45 (45 HP)",
      fr: "Tracteur Escorts Farmtrac 45 Classic (45 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Escorts Agri Machinery Authorized Hub",
    rating: "4.9 ★ (2,840 Reviews)",
    price: "₹6,40,000",
    unit: {
      en: "On-Road / EMI ₹13,800/mo",
      hi: "ऑन-रोड कीमत / EMI ₹13,800/माह",
      ta: "ஆன்-ரோடு / EMI ₹13,800/மாதம்",
      fr: "Prix TTC / Financement ₹13,800/mois"
    },
    discount: "5-Year T20 Warranty & Free Service",
    badge: {
      en: "Heavy-Duty 45 HP Diesel",
      hi: "दमदार 45 एचपी डीजल इंजन",
      ta: "சக்திவாய்ந்த 45 HP என்ஜின்",
      fr: "Moteur Diesel 45 CV Éprouvé"
    },
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Legendary 45 HP workhorse. Renowned fuel economy, heavy hauling capability, balanced weight for rotavator and trolley work.",
      hi: "भारत का दिग्गज 45 HP ट्रैक्टर। सबसे कम डीजल खपत, भारी ट्रॉली खींचने में माहिर और रोटावेटर के लिए सबसे संतुलित मशीन।",
      ta: "இந்தியாவின் புகழ்பெற்ற 45 HP டிராக்டர். குறைந்த டீசல் செலவு, அதிக எடை இழுக்கும் திறன், ரோட்டவேட்டருக்கு மிகச்சிறந்தது.",
      fr: "Le tracteur de référence 45 CV. Économie de carburant réputée, grande force de traction pour remorque et rotavator."
    },
    specsDetailed: {
      en: "Engine: 3-Cylinder 2868 cc AVL Technology • Rated Power: 45 HP @ 2000 RPM • PTO: 38.3 HP • Lift: 1,800 kg ADDC Hydraulics.",
      hi: "इंजन: 3 सिलेंडर 2868 cc AVL तकनीक • रेटेड पावर: 45 HP @ 2000 RPM • पीटीओ: 38.3 HP • लिफ्ट क्षमता: 1,800 किग्रा ADDC।",
      ta: "என்ஜின்: 3 சிலிண்டர் 2868 cc • பவர்: 45 HP @ 2000 RPM • PTO: 38.3 HP • தூக்கும் எடை: 1,800 கிலோ.",
      fr: "Moteur 3 cylindres 2868 cm³ technologie AVL • Puissance: 45 CV @ 2000 tr/min • PDF: 38.3 CV • Relevage: 1 800 kg."
    },
    quickMetrics: {
      hp: "45 HP (33.6 kW)",
      displacement: "2868 cc 3-Cyl",
      ptoRpm: "38.3 HP @ 540 RPM",
      liftCapacity: "1,800 kg",
      torque: "185 Nm @ 1300 RPM",
      emi: "₹13,800/mo (KCC)"
    }
  },
  {
    id: "veh-farmtrac-60",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "Escorts Kubota Farmtrac 60 Powermaxx (55 HP)",
      hi: "एस्कॉर्ट्स कुबोटा फार्मट्रैक 60 (55 HP)",
      ta: "எஸ்கார்ட் குபோடா ஃபார்ம்ட்ராக் 60 (55 HP)",
      fr: "Tracteur Escorts Kubota Farmtrac 60 (55 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Escorts Kubota Agri Machinery",
    rating: "4.9 ★ (2,180 Reviews)",
    price: "₹7,80,000",
    unit: {
      en: "On-Road / EMI ₹16,200/mo",
      hi: "ऑन-रोड कीमत / EMI ₹16,200/माह",
      ta: "ஆன்-ரோடு / EMI ₹16,200/மாதம்",
      fr: "Prix TTC / Financement ₹16,200/mois"
    },
    discount: "5-Year T20 Warranty",
    badge: {
      en: "EPI Reduction Axle",
      hi: "ईपीआई रिडक्शन एक्सल टेक्नोलॉजी",
      ta: "EPI தொழில்நுட்ப அச்சு",
      fr: "Pont Arrière à Réduction Épicycloïdale"
    },
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Powerful 55 HP tractor with smooth power steering, wide operator platform, and power to spare on heavy clay soil.",
      hi: "पावर स्टीयरिंग और आरामदायक चौड़ी सीट वाला 55 HP ट्रैक्टर। भारी काली मिट्टी में भी बिना रुके गहरी जुताई करे।",
      ta: "பவர் ஸ்டீயரிங் மற்றும் வசதியான இருக்கை கொண்ட 55 HP டிராக்டர். கடினமான களிமண் நிலத்திலும் எளிதாக உழும்.",
      fr: "Tracteur 55 CV à direction assistée douce, plateforme spacieuse et puissance idéale en terres lourdes."
    },
    specsDetailed: {
      en: "Engine: 3-Cylinder 3514 cc T20 • Torque: 228 Nm @ 1200 RPM • EPI Bull Gear Reduction • Lift: 1,800 kg ADDC.",
      hi: "इंजन: 3 सिलेंडर 3514 cc T20 • 228 Nm टॉर्क @ 1200 RPM • ईपीआई बुल गियर रिडक्शन • लिफ्ट: 1,800 किग्रा ADDC।",
      ta: "என்ஜின்: 3514 cc T20 • டார்க்: 228 Nm • EPI கியர் ரிடக்ஷன் • தூக்கும் எடை: 1,800 கிலோ.",
      fr: "Moteur 3 cylindres 3514 cm³ • Couple: 228 Nm à 1200 tr/min • Réduction épicycloïdale • Relevage: 1 800 kg."
    },
    quickMetrics: {
      hp: "55 HP T20",
      displacement: "3514 cc",
      ptoRpm: "49 HP @ 540 RPM",
      liftCapacity: "1,800 kg",
      torque: "228 Nm @ 1200 RPM",
      emi: "₹16,200/mo (KCC)"
    }
  },
  {
    id: "veh-shaktiman-rotavator",
    categoryKey: "vehicles",
    easyEmoji: "⚙️",
    name: {
      en: "Shaktiman Semi-Champion 7-Foot Rotary Tiller",
      hi: "शक्तिमान सेमी-चैंपियन रोटावेटर (7 फीट)",
      ta: "சக்திமான் 7-அடி ரோட்டவேட்டர்",
      fr: "Rotavator Shaktiman Semi-Champion 7 Pieds"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "Shaktiman OEM Certified Hub",
    rating: "4.9 ★ (3,110 Reviews)",
    price: "₹1,15,000",
    unit: {
      en: "Complete with PTO Propeller Shaft",
      hi: "पीटीओ शाफ़्ट सहित पूर्ण सेट",
      ta: "PTO ஷாஃப்ட் உட்பட முழு தொகுப்பு",
      fr: "Complet avec Arbre de Transmission PDF"
    },
    discount: "Govt Subsidy Approved (SMAM)",
    badge: {
      en: "Multi-Speed Gearbox",
      hi: "मल्टी-स्पीड हेवी गियरबॉक्स",
      ta: "மல்டி-ஸ்பீடு கியர்பாக்ஸ்",
      fr: "Boîtier Multi-Vitesses Renforcé"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Chops paddy straw, sugarcane stubble, and pulverizes soil into fine seedbeds in a single pass. Saves 50% diesel!",
      hi: "धान की पराली व गन्ने की जड़ों को बारीक काटे और 1 ही चक्कर में मिट्टी को बिल्कुल भुरभुरा बनाए। 50% डीजल की बचत!",
      ta: "நெல் தாளடிகள் மற்றும் கரும்பு வேர்களை தூளாக்கி ஒரே உழவில் மண்ணை விதைப்பதற்கு தயார் செய்யும்.",
      fr: "Broie les chaumes de riz et canne à sucre, prépare le lit de semence en un seul passage. Économise 50% de gasoil."
    },
    specsDetailed: {
      en: "Working Width: 210 cm (7 ft) • Blades: 48 L-Type Boron Steel • Tractor Power Required: 45-60 HP • Depth: up to 8 inches.",
      hi: "कार्य चौड़ाई: 210 सेमी (7 फीट) • ब्लेड: 48 L-टाइप बोरोन स्टील • आवश्यक ट्रैक्टर पावर: 45-60 HP • जुताई गहराई: 8 इंच।",
      ta: "உழும் அகலம்: 210 செமீ (7 அடி) • பிளேடுகள்: 48 L-வகை போரான் ஸ்டீல் • தேவையான பவர்: 45-60 HP.",
      fr: "Largeur de travail: 210 cm (7 pieds) • 48 lames type L en acier au bore • Puissance requise: 45-60 CV."
    },
    quickMetrics: {
      hp: "45-60 HP Req.",
      displacement: "210 cm Width",
      ptoRpm: "540 Multi-Speed",
      liftCapacity: "475 kg Net",
      torque: "Gear Drive Side",
      emi: "Govt Subsidy 40%"
    }
  },
  {
    id: "veh-power-tiller",
    categoryKey: "vehicles",
    easyEmoji: "🚜",
    name: {
      en: "VST Shakti 135 DI Power Tiller (13.5 HP)",
      hi: "वीएसटी शक्ति 135 डीआई पावर टिलर (13.5 HP)",
      ta: "VST சக்தி 135 DI பவர் டில்லர் (13.5 HP)",
      fr: "Motoculteur VST Shakti 135 DI (13.5 CV)"
    },
    category: {
      en: "Tractors & Vehicles",
      hi: "ट्रैक्टर व कृषि वाहन",
      ta: "டிராக்டர் & வாகனங்கள்",
      fr: "Tracteurs & Véhicules"
    },
    supplier: "VST Tillers Tractors Certified Depot",
    rating: "4.8 ★ (1,420 Reviews)",
    price: "₹1,85,000",
    unit: {
      en: "Complete with Rotary Tiller",
      hi: "रोटरी टिलर सहित पूर्ण सेट",
      ta: "ரோட்டரியுடன் முழு தொகுப்பு",
      fr: "Ensemble Complet avec Fraise Rotative"
    },
    discount: "40% SMAM Govt Subsidy Eligible",
    badge: {
      en: "Govt Subsidy Approved",
      hi: "सरकारी सब्सिडी स्वीकृत",
      ta: "அரசு மானியம் உண்டு",
      fr: "Éligible Subvention de l'État"
    },
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Lightweight, easy to turn in tight orchard rows, vegetable beds, and hilly terraced farms. Electric self-start.",
      hi: "हल्का, बागवानी, सब्जी की क्यारियों और पहाड़ी सीढ़ीदार खेतों में आसानी से मुड़ने वाला। चाबी से सेल्फ-स्टार्ट।",
      ta: "தோட்டக்கலை பயிர்கள் மற்றும் மலைத்தோட்டங்களில் எளிதாக இயங்கக்கூடிய சிறிய எடையுள்ள பவர் டில்லர்.",
      fr: "Léger et maniable pour vergers étroits, maraîchage et terrasses. Démarrage électrique à clé."
    },
    specsDetailed: {
      en: "Engine: 13.5 HP Horizontal 4-Stroke Diesel • Tilling Width: 600 mm • Rotary Blades: 18 • Fuel Consumption: ~1.2 Liters/Hour.",
      hi: "इंजन: 13.5 HP 4-स्ट्रोक डीजल • जुताई चौड़ाई: 600 मिमी • रोटरी ब्लेड: 18 • डीजल खपत: मात्र 1.2 लीटर/घंटा।",
      ta: "என்ஜின்: 13.5 HP டீசல் • உழும் அகலம்: 600 மிமீ • பிளேடுகள்: 18 • டீசல் நுகர்வு: ~1.2 லிட்டர்/மணிநேரம்.",
      fr: "Moteur diesel 4 temps 13.5 CV • Largeur de travail: 600 mm • 18 couteaux rotatifs • Consommation: ~1.2 L/h."
    },
    quickMetrics: {
      hp: "13.5 HP Diesel",
      displacement: "661 cc Single",
      ptoRpm: "Dual Rotary Drive",
      liftCapacity: "Tow Hitch 1 Ton",
      torque: "42 Nm @ 1800 RPM",
      emi: "₹4,200/mo (SMAM)"
    }
  },

  // ================= SPARE PARTS & IMPLEMENTS =================
  {
    id: "spare-rotavator-blades",
    categoryKey: "spares",
    easyEmoji: "🔪",
    name: {
      en: "Heavy-Duty Boron Steel Rotavator Blades (48 Pcs)",
      hi: "बोरोन स्टील रोटावेटर ब्लेड सेट (48 पीस)",
      ta: "ரோட்டவேட்டர் போரான் ஸ்டீல் பிளேடுகள் (48 எண்கள்)",
      fr: "Lames de Rotavator Acier au Bore Haute Résistance"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "FieldKing & Shaktiman OEM Factory",
    rating: "4.9 ★ (2,870 Reviews)",
    price: "₹6,800",
    unit: {
      en: "Full Set of 48 Blades (L/C Type)",
      hi: "48 ब्लेड का पूरा सेट (L या C प्रकार)",
      ta: "48 பிளேடுகள் கொண்ட முழு தொகுப்பு",
      fr: "Jeu Complet de 48 Lames (Type L/C)"
    },
    discount: "Free High-Tensile Bolts Kit",
    badge: {
      en: "50-52 HRC Hardened Boron",
      hi: "50-52 HRC कठोर बोरोन स्टील",
      ta: "அதிக கடினத்தன்மை கொண்ட எஃகு",
      fr: "Trempé Haute Dureté 50-52 HRC"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Super sharp, wears 3x slower in rocky soil. Universal fit for Shaktiman, Fieldking, Maschio, and Mahindra rotavators.",
      hi: "अत्यधिक मजबूत और धारदार, पथरीली मिट्टी में भी 3 गुना अधिक चले। सभी प्रमुख रोटावेटर ब्रांड्स के लिए उपयुक्त।",
      ta: "கற்கள் நிறைந்த மண்ணிலும் 3 மடங்கு நீண்ட ஆயுள் தரும். அனைத்து முன்னணி ரோட்டவேட்டர்களுக்கும் பொருந்தும்.",
      fr: "Tranchant durable, usure 3x plus lente en sols caillouteux. Adaptable Shaktiman, Maschio, etc."
    },
    specsDetailed: {
      en: "Material: 28MnB5 European Boron Alloy Steel • Quenched & Tempered • Rockwell Hardness: 50-52 HRC • Hole Pitch: 57 mm.",
      hi: "धातु: 28MnB5 यूरोपीय बोरोन अलॉय • तप्त एवं कठोरित • कठोरता: 50-52 HRC • छेद की दूरी: 57 मिमी।",
      ta: "பொருள்: 28MnB5 ஐரோப்பிய போரான் அலாய் • கடினத்தன்மை: 50-52 HRC • துளை அளவு: 57 மிமீ.",
      fr: "Nuance: Acier 28MnB5 au bore • Traité thermique trempe-revenu • Dureté: 50-52 HRC • Entraxe perçage: 57 mm."
    },
    quickMetrics: {
      material: "28MnB5 Boron Steel",
      hardness: "50-52 HRC",
      tensile: "1650 MPa Tensile",
      interchange: "Universal 57mm Pitch"
    }
  },
  {
    id: "spare-clutch-assembly",
    categoryKey: "spares",
    easyEmoji: "⚙️",
    name: {
      en: "Tractor Dual Ceramic Clutch Plate & Pressure Assembly",
      hi: "ट्रैक्टर सेरामिक क्लच प्लेट व प्रेशर असेंबली (11-इंच)",
      ta: "டிராக்டர் செராமிக் கிளட்ச் பிளேட் மற்றும் அசெம்பிளி",
      fr: "Ensemble Mécanisme & Disque d'Embrayage Céramique"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Luk & Valeo Heavy Friction Systems",
    rating: "4.9 ★ (1,580 Reviews)",
    price: "₹5,850",
    unit: {
      en: "Complete Plate + Diaphragm Assembly",
      hi: "क्लच प्लेट + डायाफ्राम असेंबली",
      ta: "முழு கிளட்ச் அசெம்பிளி கிட்",
      fr: "Kit Complet Disque + Mécanisme à Diaphragme"
    },
    discount: "Anti-Slippage Guaranteed",
    badge: {
      en: "Zero Slip Under Overload",
      hi: "ओवरलोड में भी नो-स्लिप गारंटी",
      ta: "சறுக்கல் இல்லாத உழைப்பு",
      fr: "Anti-Patinage Haute Charge"
    },
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Stops tractor clutch burning during heavy trolley haulage or rotavator use. Smooth shifting, lasts years without replacing!",
      hi: "भारी ट्रॉली खींचने या रोटावेटर चलाने पर क्लच जलने की समस्या खत्म। गियर आसानी से बदलें, सालों-साल चले!",
      ta: "அதிக எடை கொண்ட டிராலி அல்லது ரோட்டவேட்டர் இயக்கும்போது கிளட்ச் தேய்மானத்தை தடுக்கும். மென்மையான கியர் மாற்றம்.",
      fr: "Supprime les risques de brûlage d'embrayage lors des fortes tractions de bennes ou broyeurs."
    },
    specsDetailed: {
      en: "Facing: 6-Paddle Sintered Metallic Ceramic Button • Hub: Heat-treated Chrome-Moly Spline • Burst Speed tested to 8500 RPM.",
      hi: "फेसिंग: 6-पैडल सिंटर्ड मेटैलिक सेरामिक • हब: क्रोम-मोली स्प्लाइन • 8500 RPM तक सुरक्षित परीक्षण।",
      ta: "6-பட்டன் செராமிக் முலாம் • வெப்ப சிகிச்சை செய்யப்பட்ட பல் மையம் • 8500 RPM தாங்கும் திறன்.",
      fr: "Garniture: Céramo-métallique frittée 6 patins • Moyeu traité chrome-molybdène • Équilibré à 8500 tr/min."
    },
    quickMetrics: {
      material: "Sintered Ceramic",
      hardness: "Friction Coeff 0.45",
      tensile: "8500 RPM Burst Limit",
      interchange: "Mahindra/John Deere/Swaraj"
    }
  },
  {
    id: "spare-tiller-gearbox",
    categoryKey: "spares",
    easyEmoji: "🔩",
    name: {
      en: "Power Tiller Heavy-Duty Transmission Gearbox Parts",
      hi: "पावर टिलर हेवी-ड्यूटी गियरबॉक्स क्राउन व्हील व पिनियन",
      ta: "பவர் டில்லர் டிரான்ஸ்மிஷன் கியர்பாக்ஸ் பாகங்கள்",
      fr: "Pignons & Arbres de Transmission pour Motoculteur"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "VST & Kamco OEM Gears Foundry",
    rating: "4.8 ★ (820 Reviews)",
    price: "₹3,200",
    unit: {
      en: "Crown Wheel + Bevel Pinion Set",
      hi: "क्राउन व्हील + बेवल पिनियन सेट",
      ta: "கிரவுன் வீல் + பினியன் செட்",
      fr: "Jeu Couple Conique Couronne & Pignon"
    },
    discount: "High-Tensile Case Hardened",
    badge: {
      en: "Zero Gear Tooth Chipping",
      hi: "टूथ-चिपिंग प्रतिरोधी गारंटी",
      ta: "பல் உடைதல் இல்லாத உழைப்பு",
      fr: "Cémenté Anti-Ébréchure"
    },
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Hardened steel gear parts for smooth tiller shifting. Prevents gear slippage and oil leaks under deep wetland tilling.",
      hi: "कठोर स्टील गियर, जिससे टिलर का गियर आराम से बदलता है। गीले खेत में काम करते समय गियर टूटने का डर नहीं।",
      ta: "சேற்று நிலத்திலும் எளிதாக இயங்கும் உறுதியான கியர்பாக்ஸ் உதிரிபாகங்கள்.",
      fr: "Engrenages en acier cémenté pour passage de vitesses doux. Évite l'usure prématurée en rizières humides."
    },
    specsDetailed: {
      en: "Material: 20MnCr5 Case Carburized Alloy Steel • Case Depth: 0.8-1.0 mm • Tooth Surface Hardness: 58-62 HRC.",
      hi: "धातु: 20MnCr5 कार्ब्युराइज्ड अलॉय स्टील • सतह कठोरता: 58-62 HRC • सटीक सीएनसी ग्राइंडिंग।",
      ta: "பொருள்: 20MnCr5 அலாய் எஃகு • மேற்பரப்பு கடினத்தன்மை: 58-62 HRC • CNC துல்லியம்.",
      fr: "Matière: Acier allié 20MnCr5 cémenté-trempé • Profondeur de cémentation: 0.8-1.0 mm • Dureté: 58-62 HRC."
    },
    quickMetrics: {
      material: "20MnCr5 Alloy",
      hardness: "58-62 HRC Carburized",
      tensile: "1200 MPa Core",
      interchange: "VST 130DI / Kamco KMB"
    }
  },
  {
    id: "spare-hydraulic-filter",
    categoryKey: "spares",
    easyEmoji: "🛢️",
    name: {
      en: "High-Pressure Hydraulic Lift Pump Filter Kit",
      hi: "ट्रैक्टर हाइड्रोलिक पंप व ऑयल फ़िल्टर किट",
      ta: "டிராக்டர் ஹைட்ராலிக் பம்ப் & ஆயில் ஃபில்டர்",
      fr: "Kit Filtre Hydraulique et Pompe de Relevage"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரिபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Bosch Rexroth & Donaldson Filtration",
    rating: "4.9 ★ (1,680 Reviews)",
    price: "₹1,250",
    unit: {
      en: "Spin-On Filter + 2 O-Rings",
      hi: "स्पिन-ऑन फ़िल्टर + 2 सीलिंग रिंग",
      ta: "ஃபில்டர் + 2 ஓ-ரிங் ரப்பர்கள்",
      fr: "Filtre Vissable + 2 Joints Toriques"
    },
    discount: "Pump Protection Guaranteed",
    badge: {
      en: "10-Micron Microglass",
      hi: "10-माइक्रोन माइक्रो-ग्लास फ़िल्टर",
      ta: "10-மைக்ரான் நுண் வடிகட்டி",
      fr: "Fibre de Verre 10 Microns"
    },
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Keeps your hydraulic lift fast and smooth. Prevents pump choking, jerking, and costly breakdown repairs.",
      hi: "हाइड्रोलिक लिफ्ट को तेज़ और सुचारू रखे। पंप में कचरा फंसने और झटके लगने की समस्या से हमेशा सुरक्षित रखे।",
      ta: "ஹைட்ராலிக் லிப்ட் சீராகவும் வேகமாகவும் இயங்க உதவும். பம்ப் அடைப்பை தடுத்து ஆயுளை நீட்டிக்கும்.",
      fr: "Maintient un relevage rapide et fluide. Protège la pompe hydraulique contre les impuretés."
    },
    specsDetailed: {
      en: "Filtration Media: Dual-layer synthetic inorganic microglass • Beta Ratio: β10(c) ≥ 1000 • Collapse Rating: 350 Bar.",
      hi: "फ़िल्टर मीडिया: सिंथेटिक माइक्रो-ग्लास • बीटा अनुपात: β10 ≥ 1000 • दबाव सहनशीलता: 350 बार।",
      ta: "10-மைக்ரான் ஃபைபர் கிளாஸ் • பிரஷர் தாங்கும் திறன்: 350 Bar • பம்ப் ஆயுள் பாதுகாப்பு.",
      fr: "Média filtrant: Microfibre de verre inorganique multicouche • Ratio Beta: β10(c) ≥ 1000 • Pression d'éclatement: 350 bar."
    },
    quickMetrics: {
      material: "Inorganic Microglass",
      hardness: "Beta β10(c) ≥ 1000",
      tensile: "350 Bar Burst Limit",
      interchange: "OEM HF-6510 Series"
    }
  },
  {
    id: "spare-fuel-injector",
    categoryKey: "spares",
    easyEmoji: "⛽",
    name: {
      en: "Bosch Common-Rail Diesel Engine Fuel Injector Nozzle",
      hi: "बॉश सीआरडीआई डीज़ल फ़्यूल इंजेक्टर नोज़ल (ओईएम)",
      ta: "போஷ் டீசல் ஃபியூவல் இன்ஜெக்டர் முனை",
      fr: "Injecteur Diesel Common-Rail Bosch Haute Pression"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Bosch Automotive Diesel Aftermarket",
    rating: "4.9 ★ (1,120 Reviews)",
    price: "₹2,750",
    unit: {
      en: "Single Calibrated Injector Unit",
      hi: "प्रति कैलिब्रेटेड इंजेक्टर पीस",
      ta: "ஒரு யூனிட் (அளவீடு செய்யப்பட்டது)",
      fr: "Injecteur Calibré Unitaire"
    },
    discount: "15% Fuel Savings Verified",
    badge: {
      en: "Zero Black Smoke",
      hi: "काला धुआं बंद व अधिक माइलेज",
      ta: "கருப்பு புகையை தடுக்கும்",
      fr: "Anti-Fumée Noire & Économie"
    },
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Stops black smoke, saves diesel, makes your tractor start with one quick key turn on cold winter mornings.",
      hi: "ट्रैक्टर का काला धुआं बंद करे, डीज़ल बचाए और सर्दियों की सुबह में भी एक ही सेल्फ में स्टार्ट करे।",
      ta: "கருப்பு புகையை கட்டுப்படுத்தி டீசல் நுகர்வை குறைக்கும். குளிர்ந்த காலையிலும் ஒரே செல்பில் ஸ்டார்ட் ஆகும்.",
      fr: "Supprime les fumées noires, réduit la consommation de gasoil et facilite le démarrage à froid."
    },
    specsDetailed: {
      en: "Operating Pressure: 1600 Bar Common-Rail • Micro-Holes: 7 Laser-Drilled 0.12mm orifices for ultra-fine atomization.",
      hi: "दबाव: 1600 बार कॉमन-रेल • 7 लेज़र-ड्रिल्ड 0.12 मिमी बारीक छिद्र ताकि डीज़ल की पूरी फुहार बने।",
      ta: "அழுத்தம்: 1600 Bar • 7 லேசர் துளைகள் (0.12mm) • முழுமையான எரிப்பு திறன்.",
      fr: "Pression d'injection: 1600 bar • 7 micro-trous percés au laser (0.12 mm) pour atomisation ultra-fine."
    },
    quickMetrics: {
      material: "Nitrided Tool Steel",
      hardness: "1600 Bar Rated",
      tensile: "0.12mm 7-Hole Laser",
      interchange: "Bosch 0445110 Series"
    }
  },
  {
    id: "spare-cultivator-tines",
    categoryKey: "spares",
    easyEmoji: "⛏️",
    name: {
      en: "Heavy-Duty Cultivator Spring Tines & Reversible Points",
      hi: "कल्टीवेटर हैवी स्प्रिंग टाइन्स व खुर्पा सेट (9 पीस)",
      ta: "கல்டிவேட்டர் ஸ்பிரிங் பிளேடுகள் (9 எண்கள்)",
      fr: "Dents de Cultivateur Renforcées à Ressort (9 Pièces)"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Kisan Forge Implement Spares",
    rating: "4.8 ★ (1,340 Reviews)",
    price: "₹4,600",
    unit: {
      en: "Set of 9 Spring Tines + Points",
      hi: "9 स्प्रिंग टाइन + रिवर्सिबल पॉइंट सेट",
      ta: "9 ஸ்பிரிங் பிளேடுகள் அடங்கிய தொகுப்பு",
      fr: "Jeu de 9 Dents Ressort + Socs Réversibles"
    },
    discount: "Direct Forge Factory Price",
    badge: {
      en: "Forged Silicon Spring Steel",
      hi: "फोर्म्ड स्प्रिंग स्टील गारंटी",
      ta: "உறுதியான ஸ்பிரிங் எஃகு",
      fr: "Acier Forgé Ressort Haute Tenacité"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Springs back automatically when hitting underground rocks without bending or breaking. Turn points around when worn!",
      hi: "ज़मीन में छुपे पत्थर से टकराने पर स्प्रिंग झटका झेल लेता है और मुड़ता नहीं। घिसने पर खुरपा पलटकर दोबारा चलाएं!",
      ta: "பாறைகளில் மோதும் போது தானாக மீளக்கூடிய ஸ்பிரிங் வசதி. பிளேடு தேய்ந்தால் திருப்பி பயன்படுத்தலாம்!",
      fr: "Système de sécurité non-stop à ressort évitant les déformations sur pierres. Socs réversibles 2 vies."
    },
    specsDetailed: {
      en: "Material: EN-45 Silicon Manganese Spring Steel • Drop-forged and oil quenched • Resistance to bending deformation.",
      hi: "धातु: EN-45 सिलिकॉन मैंगनीज स्प्रिंग स्टील • ड्रॉप-फोर्ज्ड और तेल में तप्त • मुड़ने से पूर्ण सुरक्षित।",
      ta: "பொருள்: EN-45 சிலிக்கான் மாங்கனீசு எஃகு • வளைந்து போகாத உறுதித்தன்மை கொண்டது.",
      fr: "Matière: Acier au silicium-manganèse EN-45 • Forgé à chaud et trempé à l'huile • Anti-déformation."
    },
    quickMetrics: {
      material: "EN-45 Spring Steel",
      hardness: "44-48 HRC Tempered",
      tensile: "1400 MPa Yield",
      interchange: "Universal 9-Tyne Frame"
    }
  },
  {
    id: "spare-radiator-hose",
    categoryKey: "spares",
    easyEmoji: "🚰",
    name: {
      en: "Water Pump to Radiator Heavy-Duty EPDM Hose Assembly",
      hi: "वाटर पंप से रेडिएटर होज़ पाइप असेंबली (हीट-प्रूफ़)",
      ta: "வாட்டர் பம்ப் ரேடியேட்டர் குழாய் அசெம்பிளி கிட்",
      fr: "Durite Haute Température Pompe à Eau Radiateur Tracteur"
    },
    category: {
      en: "Tractor Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Gates Agri-Fluid Systems",
    rating: "4.9 ★ (890 Reviews)",
    price: "₹850",
    unit: {
      en: "Set of Upper & Lower Hoses + 4 Clamps",
      hi: "ऊपरी व निचली होज़ + 4 हेवी क्लैम्प्स",
      ta: "மேல் & கீழ் குழாய் + 4 கிளாம்புகள்",
      fr: "Jeu de 2 Durites + 4 Colliers Inox"
    },
    discount: "Burst-Proof Warranty",
    badge: {
      en: "140°C Heat Resistant EPDM",
      hi: "140°C तापमान प्रतिरोधी ईपीडीएम",
      ta: "அதிக வெப்பத்தை தாங்கும் தரம்",
      fr: "Résiste à 140°C EPDM Renforcé"
    },
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Stops tractor engine overheating in blazing summer heat. Flexible synthetic rubber won't crack or leak coolant.",
      hi: "भीषण गर्मी में भी ट्रैक्टर इंजन को ठंडा रखे। मजबूत रबर जो कभी फटे या लीक नहीं होता।",
      ta: "கோடை வெப்பத்திலும் என்ஜின் சூடாவதை தடுக்கும். விரிசல் ஏற்படாத உறுதியான ரப்பர் குழாய்.",
      fr: "Empêche la surchauffe moteur par forte chaleur. Caoutchouc synthétique renforcé anti-fissure."
    },
    specsDetailed: {
      en: "Material: Kevlar-reinforced EPDM Synthetic Elastomer • Burst Pressure: 4.5 Bar • Operating Range: -40°C to +140°C.",
      hi: "धातु: केवलार-प्रबलित ईपीडीएम सिंथेटिक रबर • दबाव: 4.5 बार • तापमान सीमा: -40°C से +140°C।",
      ta: "பொருள்: கெவ்லர் நார் முலாம் • வெடிப்பு அழுத்தம்: 4.5 Bar • வெப்பநிலை: -40°C முதல் +140°C வரை.",
      fr: "Élastomère EPDM tramé fibres aramide Kevlar • Pression d'éclatement: 4.5 bar • Plage: -40°C à +140°C."
    },
    quickMetrics: {
      material: "Kevlar EPDM Rubber",
      hardness: "4.5 Bar Burst Rating",
      tensile: "140°C Max Thermal",
      interchange: "OEM Hose Mahindra/JohnDeere"
    }
  },
  {
    id: "spare-tierod-end",
    categoryKey: "spares",
    easyEmoji: "🛞",
    name: {
      en: "Tractor Steering Box Tie Rod End & Ball Joint Assembly",
      hi: "ट्रैक्टर स्टीयरिंग टाई रॉड एंड व बॉल जॉइंट (दाएं/बाएं)",
      ta: "டிராக்டர் ஸ்டீயரிங் டை ராடு என்ட் & பால் ஜாயிண்ட்",
      fr: "Rotule de Direction Renforcée & Barre d'Accouplement"
    },
    category: {
      en: "Tractor Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Rane Madras & Sona Steering OEM",
    rating: "4.9 ★ (1,450 Reviews)",
    price: "₹1,450",
    unit: {
      en: "Pair (Left & Right Hand Thread)",
      hi: "जोड़ी (दाएं व बाएं हाथ की चूड़ी)",
      ta: "ஒரு ஜோடி (வலது மற்றும் இடது)",
      fr: "la Paire (Pas à Droite & Gauche)"
    },
    discount: "Precision Turning Guaranteed",
    badge: {
      en: "Forged Alloy Ball Stud",
      hi: "फोर्म्ड अलॉय बॉल स्टड",
      ta: "துல்லியமான ஸ்டீயரிங் திருப்பம்",
      fr: "Goujon Forgé Cémenté"
    },
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Fixes loose, wobbly steering wheels. Makes your tractor turn smoothly with zero play or vibration on bumpy field roads.",
      hi: "स्टीयरिंग के कंपन और ढीलेपन को पूरी तरह ठीक करे। ऊबड़-खाबड़ खेत में भी बिल्कुल सीधा और आसान घुमाव।",
      ta: "ஸ்டீயரிங் அலைபாய்தலை தடுத்து சீரான திருப்பத்தை தரும். நீண்ட தூர பயணத்திலும் கை வலிக்காது.",
      fr: "Supprime le jeu dans le volant et les vibrations sur chemins défoncés. Conduite précise et stable."
    },
    specsDetailed: {
      en: "Material: 40Cr Chrome Alloy Steel Ball Pin • Induction Hardened Stud • Chloroprene Dust Boot with M20x1.5 Thread.",
      hi: "धातु: 40Cr क्रोम अलॉय स्टील बॉल पिन • इंडक्शन हार्डन्ड स्टड • डस्ट-प्रूफ बूट व M20 चूड़ी।",
      ta: "பொருள்: 40Cr குரோம் அலாய் எஃகு • தூசி புகாத ரப்பர் கவர் • M20x1.5 துல்லியமான திருகு.",
      fr: "Acier au chrome 40Cr trempé par induction • Soufflet néoprène étanche • Filetage métrique M20x1.5."
    },
    quickMetrics: {
      material: "40Cr Chrome Alloy",
      hardness: "55-60 HRC Ball Stud",
      tensile: "Zero Steering Play",
      interchange: "Mahindra 575 / Swaraj 744"
    }
  },
  {
    id: "spare-king-pin",
    categoryKey: "spares",
    easyEmoji: "🔩",
    name: {
      en: "Tractor Heavy-Duty Front Axle King Pin & Phosphor Bush Set",
      hi: "ट्रैक्टर फ्रंट एक्सल किंग पिन व फॉस्फोर ब्रॉन्ज बुश किट",
      ta: "டிராக்டர் முன்பக்க அச்சு கிங் பின் & புஷ் செட்",
      fr: "Kit Pivot de Fusée / King Pin Essieu Avant Tracteur Renforcé"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Talbros & Federal-Mogul Heavy Duty",
    rating: "4.9 ★ (1,150 Reviews)",
    price: "₹1,850",
    unit: {
      en: "Complete Axle Pin + 4 Phosphor Bushes",
      hi: "किंग पिन + 4 ब्रॉन्ज बुश किट",
      ta: "முழு கிங் பின் கிட் (4 புஷ்கள்)",
      fr: "Jeu Complet Pivot + 4 Bagues Bronze"
    },
    discount: "Zero Front Wheel Wobble",
    badge: {
      en: "Case-Hardened 20MnCr5",
      hi: "20MnCr5 केस-हार्डन्ड स्टील",
      ta: "அதிர்வு இல்லாத ஸ்டீயரிங்",
      fr: "Acier 20MnCr5 Cémenté Rectifié"
    },
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Eliminates dangerous front wheel shaking and uneven tire wear when driving on rough rural dirt tracks.",
      hi: "कच्ची सड़कों और खेत में ट्रैक्टर के अगले पहियों का कांपना और टायर एक तरफ घिसना पूरी तरह बंद करे।",
      ta: "முன்பக்க சக்கர அசைவு மற்றும் டயர் தேய்மானத்தை தடுத்து பாதுகாப்பான ஓட்டுதலை தரும்.",
      fr: "Supprime le flottement dangereux du train avant et l'usure asymétrique des pneumatiques."
    },
    specsDetailed: {
      en: "Material: 20MnCr5 Case Hardened Alloy Steel • Surface: Precision ground to 0.4 Ra • Bushes: SAE 660 Phosphor Bronze.",
      hi: "धातु: 20MnCr5 अलॉय स्टील • सतह परिशुद्धता: 0.4 Ra • बुश: SAE 660 फॉस्फोर ब्रॉन्ज।",
      ta: "பொருள்: 20MnCr5 எஃகு • பாஸ்பர் வெண்கல புஷ்கள் • துல்லியமான CNC உருவாக்கம்.",
      fr: "Acier 20MnCr5 trempé rectifié (rugosité 0.4 Ra) • Bagues d'usure en bronze phosphoreux SAE 660."
    },
    quickMetrics: {
      material: "20MnCr5 Alloy",
      hardness: "60-64 HRC Surface",
      tensile: "SAE 660 Bronze",
      interchange: "Mahindra 575 / Sonalika 750"
    }
  },
  {
    id: "spare-fuel-lift-pump",
    categoryKey: "spares",
    easyEmoji: "⛽",
    name: {
      en: "Mechanical Diesel Fuel Feed Lift Pump Assembly",
      hi: "डीजल फ़्यूल लिफ्ट फीड पंप असेंबली (हैंड प्राइमर सहित)",
      ta: "டீசல் ஃபியூவல் லிப்ட் பம்ப் அசெம்பிளி கிட்",
      fr: "Pompe d'Alimentation Mécanique Gasoil avec Amorceur"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரिபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Motorpal & Bosch Fuel Technologies",
    rating: "4.8 ★ (930 Reviews)",
    price: "₹1,150",
    unit: {
      en: "Complete Pump Unit + Gasket",
      hi: "पूर्ण पंप यूनिट + सीलिंग गैसकेट",
      ta: "பம்ப் யூனிட் + கேஸ்கெட்",
      fr: "Corps de Pompe Complet + Joint"
    },
    discount: "Instant Air-Bleeding Primer",
    badge: {
      en: "Cold Morning Fast Start",
      hi: "सर्दियों में तुरंत स्टार्ट",
      ta: "குளிர்ந்த காலையிலும் தொடங்கும்",
      fr: "Amorçage Manuel Rapide"
    },
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Pumps diesel effortlessly from tank to engine. Built-in hand primer clears air locks instantly if you run out of fuel.",
      hi: "डीजल टैंक से इंजन तक ईंधन की निर्बाध सप्लाई। डीज़ल खत्म होने पर हैंड प्राइमर से हवा तुरंत निकालें।",
      ta: "எரிபொருள் அடைப்பை நீக்கி இன்ஜினுக்கு சீரான டீசல் விநியோகத்தை தரும் கை பம்ப் வசதி கொண்டது.",
      fr: "Alimentation constante en carburant. Amorceur manuel intégré pour purger les poches d'air après panne sèche."
    },
    specsDetailed: {
      en: "Flow Rate: 45 L/hr @ 1.2 Bar • Viton Diaphragm resistant to Biodiesel B20 • M14x1.5 Banjo inlet/outlet ports.",
      hi: "प्रवाह दर: 45 लीटर/घंटा @ 1.2 बार • बायो-डीजल प्रतिरोधी वीटन डायाफ्राम • M14 बैंजो पोर्ट्स।",
      ta: "விநியோக வேகம்: 45 லிட்டர்/மணி • பயோடீசல் எதிர்ப்பு தன்மை • பிரஷர்: 1.2 Bar.",
      fr: "Débit: 45 L/h à 1.2 bar • Membrane Viton compatible biogasoil B20 • Raccords banjo M14x1.5."
    },
    quickMetrics: {
      material: "Die-Cast Aluminum",
      hardness: "1.2 Bar Delivery",
      tensile: "B20 Bio-Resistant",
      interchange: "Universal 2-Bolt Flange"
    }
  },
  {
    id: "spare-alternator-kit",
    categoryKey: "spares",
    easyEmoji: "⚡",
    name: {
      en: "Tractor 12V 45A Alternator Dynamo Overhaul & Rectifier Kit",
      hi: "ट्रैक्टर अल्टरनेटर डायनमो रिपेयर किट (12V 45A रेक्टिफायर)",
      ta: "டிராக்டர் ஆல்டர்னேட்டர் பழுதுபார்ப்பு கிட் (12V)",
      fr: "Kit de Réparation Alternateur 12V 45A & Pont de Diodes"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரिபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Lucas-TVS & Denso Heavy Duty",
    rating: "4.9 ★ (1,290 Reviews)",
    price: "₹1,650",
    unit: {
      en: "Full Overhaul Kit (Diodes, Bearings, Brushes)",
      hi: "फुल रिपेयर किट (डायोड, बेयरिंग, कार्बन ब्रश)",
      ta: "முழு கிட் (டயோடுகள், பேரிங், பிரஷ்)",
      fr: "Kit Complet (Diodes, Roulements, Charbons)"
    },
    discount: "Fixes Battery Draining Issues",
    badge: {
      en: "Heavy-Duty Copper Windings",
      hi: "तांबे की वाइंडिंग व जापानी बेयरिंग",
      ta: "காப்பர் சுருள் தரம்",
      fr: "Composants Électriques Renforcés"
    },
    image: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Keeps your tractor battery fully charged for bright nighttime headlights, GPS monitors, and instant morning starts.",
      hi: "रात में तेज हेडलाइट और सुबह एक झटके में स्टार्ट के लिए बैटरी को हमेशा फुल चार्ज रखे। बैटरी डिस्चार्ज होना बंद!",
      ta: "இரவு நேர விவசாய விளக்குகள் மற்றும் பேட்டரி சார்ஜிங்கை சீராக வைத்திருக்கும் பழுது நீக்கும் கிட்.",
      fr: "Maintient la batterie chargée à 100% pour les phares de travail nocturnes et les démarrages au quart de tour."
    },
    specsDetailed: {
      en: "Output: 12V 45A • Avalanche Rectifier Diodes • Sealed Japanese Deep Groove 6203-2RS & 6201-2RS Bearings.",
      hi: "आउटपुट: 12V 45A • एवलांच रेक्टिफायर डायोड • जापानी सील्ड बेयरिंग (6203-2RS)।",
      ta: "மின்சாரம்: 12V 45A • ஜப்பானிய சீல் செய்யப்பட்ட பேரிங்குகள் • அதிக ஆயுள்.",
      fr: "Régulation: 12V 45A • Diodes avalanche renforcées anti-surintensité • Roulements étanches 6203-2RS."
    },
    quickMetrics: {
      material: "Electrolytic Copper",
      hardness: "45A Output Current",
      tensile: "14.2V Regulated",
      interchange: "Lucas TVS 2414 / Mico"
    }
  },
  {
    id: "spare-valve-seal-kit",
    categoryKey: "spares",
    easyEmoji: "🔧",
    name: {
      en: "Spool Valve Hydraulic Cylinder & Lift Seal Kit (PU/Viton)",
      hi: "हाइड्रोलिक कंट्रोल वाल्व व लिफ्ट सिलेंडर सील किट (वीटन)",
      ta: "ஹைட்ராலிக் வால்வு சீல் கிட் (PU/Viton)",
      fr: "Pochette de Joints Vérin & Distributeur Hydraulique"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரிபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Parker Hannifin & Hallite Agri Seals",
    rating: "4.9 ★ (880 Reviews)",
    price: "₹950",
    unit: {
      en: "18-Piece Polyurethane & Viton Seal Kit",
      hi: "18 पीस पॉलीयूरेथेन व वीटन सील सेट",
      ta: "18 உதிரிபாகங்கள் கொண்ட சீல் தொகுப்பு",
      fr: "Pochette Complète 18 Joints Polyuréthane"
    },
    discount: "Stops Hydraulic Pressure Drops",
    badge: {
      en: "Zero Oil Leakage Guaranteed",
      hi: "तेल रिसाव शून्य करने की गारंटी",
      ta: "எண்ணெய் கசிவு இல்லாத உத்தரவாதம்",
      fr: "Anti-Fuite Haute Pression 250 Bar"
    },
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Stops your rear tractor cultivator or plow from slowly sinking while you work. No more oil leaks under your seat!",
      hi: "काम करते समय कल्टीवेटर या हल का धीरे-धीरे नीचे गिरना बंद करे। सीट के नीचे से तेल टपकने की समस्या खत्म!",
      ta: "வேலையின் போது கலப்பை கீழே இறங்குவதை தடுக்கும். ஹைட்ராலிக் எண்ணெய் கசிவை முற்றிலும் நிறுத்தும்.",
      fr: "Empêche l'affaissement intempestif des outils portés (charrue, herse) et les fuites d'huile sous le siège."
    },
    specsDetailed: {
      en: "Rating: 250 Bar Dynamic Pressure • Hardness: 93 Shore A PU + Viton Backup Rings • Temperature: -30°C to +110°C.",
      hi: "प्रेशर: 250 बार • कठोरता: 93 शोर A पॉलीयूरेथेन + वीटन बैकअप रिंग • तापमान: -30°C से +110°C।",
      ta: "அழுத்த தாங்குதிறன்: 250 Bar • தீவிர வெப்ப தாங்குதிறன் • நீடித்த ஆயுள்.",
      fr: "Pression dynamique: 250 bar • Dureté: 93 Shore A Polyuréthane + Bague anti-extrusion Viton."
    },
    quickMetrics: {
      material: "93 Shore A PU",
      hardness: "250 Bar Pressure",
      tensile: "Zero Leak Hydro",
      interchange: "Mahindra / Swaraj / Massey"
    }
  },
  {
    id: "spare-air-cleaner",
    categoryKey: "spares",
    easyEmoji: "🌪️",
    name: {
      en: "Heavy-Duty Oil-Bath & Dry Air Cleaner Element Filter Set",
      hi: "ट्रैक्टर ऑयल-बाथ व ड्राय एयर क्लीनर फ़िल्टर सेट",
      ta: "டிராக்டர் ஏர் கிளீனர் ஃபில்டர் எலிமெண்ட்",
      fr: "Cartouches Filtrantes Double Filtre à Air Sec & Bain d'Huile"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரिபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Fleetguard & Donaldson Filtration",
    rating: "4.8 ★ (1,670 Reviews)",
    price: "₹780",
    unit: {
      en: "Outer Primary + Inner Safety Filter",
      hi: "मुख्य बाहरी फ़िल्टर + आंतरिक सुरक्षा फ़िल्टर",
      ta: "இரட்டை வடிகட்டி தொகுப்பு",
      fr: "Jeu Filtre Principal + Cartouche de Sécurité"
    },
    discount: "99.9% Dust Filtration",
    badge: {
      en: "Protects Engine Piston Liners",
      hi: "इंजन पिस्टन व बोर की सुरक्षा",
      ta: "என்ஜின் பாதுகாப்பு உத்தரவாதம்",
      fr: "Protection Cylindres 99.9% Poussière"
    },
    image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Traps fine dust and chaff in dry harvest fields. Protects your engine from eating sand, giving your tractor 10 extra years of life!",
      hi: "थ्रेशर और खेत की धूल को इंजन के अंदर जाने से रोके। इंजन के पिस्टन और लाइनर को घिसने से बचाकर उम्र 10 साल बढ़ाए!",
      ta: "தூசி நிறைந்த நிலங்களிலும் சுத்தமான காற்றை இன்ஜினுக்குள் அனுப்பும். இன்ஜின் ஆயுளை பல மடங்கு அதிகரிக்கும்.",
      fr: "Bloque les fines poussières et débris de paille en battage. Évite l'usure abrasive des chemises de piston."
    },
    specsDetailed: {
      en: "Filtration Efficiency: 99.9% ISO 5011 tested • Nano-pleated cellulose media with flame-retardant synthetic finish.",
      hi: "दक्षता: 99.9% आईएसओ 5011 प्रमाणित • नैनो-प्लीटेड सेलुलोज मीडिया • अग्निरोधी सिंथेटिक कोटिंग।",
      ta: "திறன்: 99.9% • சர்வதேச தரம் ISO 5011 • தீப்பற்றாத பாதுகாப்பு தொழில்நுட்பம்.",
      fr: "Efficacité: 99.9% selon ISO 5011 • Média cellulose plissé nano-fibres ignifugé."
    },
    quickMetrics: {
      material: "Nano-Pleat Media",
      hardness: "99.9% ISO 5011",
      tensile: "Flame Retardant",
      interchange: "Universal 3 & 4 Cyl Tractors"
    }
  },
  {
    id: "spare-piston-rings",
    categoryKey: "spares",
    easyEmoji: "⭕",
    name: {
      en: "OEM Chrome-Plated Engine Piston Ring Set (Complete 4-Cylinder)",
      hi: "इंजन पिस्टन रिंग सेट (4-सिलेंडर क्रोम प्लेटेड सेट)",
      ta: "என்ஜின் பிஸ்டன் ரிங் செட் (4 சிலிண்டர்)",
      fr: "Jeu de Segments de Piston Moteur Chromés (4 Cylindres)"
    },
    category: {
      en: "Spare Parts & Implements",
      hi: "स्पेयर पार्ट्स व उपकरण",
      ta: "உதிரिபாகங்கள்",
      fr: "Pièces Détachées"
    },
    supplier: "Mahle & Goetze Piston Systems",
    rating: "4.9 ★ (1,520 Reviews)",
    price: "₹2,600",
    unit: {
      en: "Complete Set for 4 Pistons (12 Rings)",
      hi: "4 पिस्टन का पूरा सेट (12 रिंग्स)",
      ta: "4 பிஸ்டன் கொண்ட முழு செட் (12 வளையங்கள்)",
      fr: "Jeu Complet pour 4 Pistons (12 Segments)"
    },
    discount: "Full Engine Compression Restored",
    badge: {
      en: "Molybdenum Chrome Facing",
      hi: "मोलिब्डेनम क्रोम कोटिंग",
      ta: "உயர் செயல்திறன் ரிங் செட்",
      fr: "Revêtement Chrome-Molybdène Inusable"
    },
    image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Restores like-new pulling power and stops white/blue engine oil smoke. Restores factory compression so your tractor pulls anything!",
      hi: "ट्रैक्टर की खोई हुई ताकत और माइलेज वापस लाए। इंजन से सफेद व नीला धुआं निकलना बंद करे, नया जैसा पिकअप दे!",
      ta: "இன்ஜின் இழுவை திறனை மீட்கும் மற்றும் வெள்ளை/நீல நிற புகையை முற்றிலும் தடுக்கும் தரமான ரிங் செட்.",
      fr: "Restaure la compression d'origine et élimine les fumées d'huile bleutées. Rendement moteur optimal."
    },
    specsDetailed: {
      en: "Material: Spheroidal Ductile Cast Iron • Top Ring: Hard Chrome Plated with Plasma Moly in-lay • Oil Ring: Expander with chrome rails.",
      hi: "धातु: डक्टाइल कास्ट आयरन • टॉप रिंग: प्लाज्मा मोली इनले युक्त हार्ड क्रोम • ऑयल रिंग: क्रोम रेल एक्सपैंडर।",
      ta: "பொருள்: டக்டைல் இரும்பு • பிளாஸ்மா குரோம் முலாம் • 100% அழுத்த கட்டுப்பாடு.",
      fr: "Fonte ductile sphéroïdale • Segment de feu chromé dur avec insert plasma molybdène • Racleur hélicoïdal."
    },
    quickMetrics: {
      material: "Ductile Cast Iron",
      hardness: "Chrome Plasma Inlay",
      tensile: "Max Compression Ring",
      interchange: "Mahindra 575 / Swaraj 744"
    }
  },

  // ================= SEEDS & BIO-INPUTS =================
  {
    id: "seed-wheat-hd2967",
    categoryKey: "seeds",
    easyEmoji: "🌾",
    name: {
      en: "Certified Wheat Seeds (HD-2967 High Yield)",
      hi: "प्रमाणित गेहूं बीज एचडी-2967 (बंपर पैदावार)",
      ta: "சான்றளிக்கப்பட்ட கோதுமை விதைகள் (HD-2967)",
      fr: "Semences de Blé Certifiées HD-2967 Haut Rendement"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "ICAR-IARI Seed Production Division",
    rating: "4.9 ★ (4,200 Reviews)",
    price: "₹1,380",
    unit: {
      en: "per 40 kg Bag (Treated)",
      hi: "प्रति 40 किग्रा बोरी (उपचारित)",
      ta: "40 கிலோ மூட்டை (மருந்து பூசப்பட்டது)",
      fr: "par Sac de 40 kg (Traité)"
    },
    discount: "Govt Subsidized Rate",
    badge: {
      en: "95% High Germination",
      hi: "95% उच्चतम अंकुरण गारंटी",
      ta: "95% முளைப்புத்திறன் உத்தரவாதம்",
      fr: "95% Taux de Germination"
    },
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "India's highest yielding wheat variety! Gives 24-28 quintals per acre, strong stems that won't fall down in winter rain.",
      hi: "भारत की सबसे लोकप्रिय और अधिक पैदावार देने वाली गेहूं! 24-28 क्विंटल/एकड़ उपज, तेज आंधी में गिरती नहीं।",
      ta: "இந்தியாவின் அதிக மகசூல் தரும் கோதுமை ரகம்! ஏக்கருக்கு 24-28 குவிண்டால் விளைச்சல் தரும்.",
      fr: "Variété star à très haut rendement: 24-28 qtls/ha, excellente tenue de tige contre la verse."
    },
    specsDetailed: {
      en: "Maturity: 140-143 Days • Yellow Rust Immune (Yr27 gene) • Protein: 12.8% • Seed Purity: 99.5% certified by NSC.",
      hi: "परिपक्वता: 140-143 दिन • पीला रतुआ रोग प्रतिरोधी (Yr27 जीन) • प्रोटीन: 12.8% • शुद्धता: 99.5%।",
      ta: "முதிர்வு காலம்: 140-143 நாட்கள் • மஞ்சள் துரு நோய் எதிர்ப்பு திறன் • புரத சத்து: 12.8%.",
      fr: "Cycle: 140-143 jours • Résistance rouille jaune (gène Yr27) • Protéines: 12.8% • Pureté: 99.5%."
    },
    quickMetrics: {
      purity: "99.5% Genetic Purity",
      germination: "95% Germination Lab",
      yieldScore: "28 qtls / acre",
      maturity: "140-143 Days"
    }
  },
  {
    id: "seed-basmati-pusa1121",
    categoryKey: "seeds",
    easyEmoji: "🌾",
    name: {
      en: "Pusa Basmati Rice Seeds (PB-1121 Extra Long Grain)",
      hi: "पूसा बासमती धान बीज (पीबी-1121 लंबा दाना)",
      ta: "பூசா பாசுமதி நெல் விதைகள் (PB-1121)",
      fr: "Semences de Riz Basmati Pusa 1121 Grain Extra Long"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "Punjab Agri University (PAU) Certified",
    rating: "4.9 ★ (3,150 Reviews)",
    price: "₹1,650",
    unit: {
      en: "per 25 kg Bag",
      hi: "प्रति 25 किग्रा बोरी",
      ta: "25 கிலோ மூட்டை",
      fr: "par Sac de 25 kg"
    },
    discount: "Export Premium Price at Mandi",
    badge: {
      en: "8.4mm Raw Grain Length",
      hi: "8.4 मिमी लंबा दाना (पकने पर 21mm)",
      ta: "நீளமான அரிசி தானியம்",
      fr: "Grain Extra Long 8.4mm"
    },
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "World record holding aromatic basmati rice! Fetches the highest cash price at the mandi from export buyers.",
      hi: "विश्व रिकॉर्ड लंबा सुगंधित बासमती चावल! मंडी में व्यापारियों द्वारा सबसे ऊंची नकद कीमत पर खरीदा जाता है।",
      ta: "உலகத்தரம் வாய்ந்த வாசனை பாசுமதி நெல்! ஏற்றுமதி வியாபாரிகளால் அதிக விலைக்கு வாங்கப்படுகிறது.",
      fr: "Le riz basmati le plus réputé au monde pour l'exportation. Arôme d'exception et prime de cours élevée."
    },
    specsDetailed: {
      en: "Grain Elongation: 2.5x on cooking • Amylose Content: 24.5% • Bacterial Leaf Blight tolerant • Seed Rate: 5-6 kg/acre.",
      hi: "पकने पर फैलाव: 2.5 गुना • एमाइलोज: 24.5% • बैक्टीरियल ब्लाइट सहनशील • बीज दर: 5-6 किग्रा/एकड़।",
      ta: "சமைக்கும் போது 2.5 மடங்கு நீளமாகும் • அமைலோஸ்: 24.5% • ஏக்கருக்கு 5-6 கிலோ தேவை.",
      fr: "Élongation à la cuisson: x2.5 • Taux d'amylose: 24.5% • Tolérant bactériose foliaire."
    },
    quickMetrics: {
      purity: "99.8% Pure Basmati",
      germination: "92% Verified Lab",
      yieldScore: "20-22 qtls / acre",
      maturity: "135-140 Days"
    }
  },
  {
    id: "seed-hybrid-maize",
    categoryKey: "seeds",
    easyEmoji: "🌽",
    name: {
      en: "High-Yielding Hybrid Maize Seeds (Double Cob Pioneer)",
      hi: "हाइब्रिड संकर मक्का बीज (दोहरा भुट्टा वैरायटी)",
      ta: "வீரிய மக்காச்சோள விதைகள் (இரட்டை கதிர்)",
      fr: "Semences de Maïs Hybride Double Épi"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "Corteva Pioneer Agri Science",
    rating: "4.8 ★ (2,100 Reviews)",
    price: "₹1,850",
    unit: {
      en: "per 4 kg Pack (1 Acre Seed Rate)",
      hi: "प्रति 4 किग्रा पैक (1 एकड़ हेतु)",
      ta: "4 கிலோ பாக்கெட் (1 ஏக்கர்)",
      fr: "le Paquet de 4 kg (Dose pour 1 Acre)"
    },
    discount: "High Starch Content",
    badge: {
      en: "Double Cob Guarantee",
      hi: "प्रति पौधा 2 बड़े भुट्टे गारंटी",
      ta: "செடிக்கு 2 பெரிய கதிர்கள்",
      fr: "Garantie Deux Épis par Pied"
    },
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Every stalk bears two huge golden cobs tightly packed with grains to the tip. Huge demand from poultry feed millers.",
      hi: "हर पौधे पर दो बड़े-बड़े सुनहरे भुट्टे जो ऊपर तक दानों से भरे होते हैं। पोल्ट्री व स्टार्च मिलों में हाथों-हाथ बिके।",
      ta: "ஒவ்வொரு செடியிலும் தானியங்கள் நிறைந்த இரண்டு பெரிய கதிர்கள் விளையும். கோழி தீவன ஆலைகளில் அதிக தேவை.",
      fr: "Chaque tige porte deux gros épis dorés bien pleins jusqu'à la pointe. Très recherché en meunerie animale."
    },
    specsDetailed: {
      en: "Cob Length: 20-24 cm • Grains per Cob: 550-650 • Stay-Green Foliage trait • Starch Index: 72% • Drought tolerant.",
      hi: "भुट्टे की लंबाई: 20-24 सेमी • प्रति भुट्टा दाने: 550-650 • स्टे-ग्रीन तकनीक • स्टार्च: 72% • सूखा सहनशील।",
      ta: "கதிர் நீளம்: 20-24 செமீ • 550-650 தானியங்கள் • வறட்சியை தாங்கும் பசுமை இலை தொழில்நுட்பம்.",
      fr: "Longueur des épis: 20-24 cm • 550-650 grains/épi • Caractère Stay-Green anti-dessèchement • Amidon: 72%."
    },
    quickMetrics: {
      purity: "99.9% Single Cross",
      germination: "96% Highest Lab",
      yieldScore: "38-42 qtls / acre",
      maturity: "95-105 Days"
    }
  },
  {
    id: "seed-soybean-js335",
    categoryKey: "seeds",
    easyEmoji: "🌱",
    name: {
      en: "Certified Soybean Seeds (JS-335 High Oil & Protein)",
      hi: "प्रमाणित सोयाबीन बीज जेएस-335 (40% प्रोटीन)",
      ta: "சான்றளிக்கப்பட்ட சோயாபீன் விதைகள் (JS-335)",
      fr: "Semences de Soja Certifiées JS-335 Forte Teneur en Huile"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "ICAR-IISR Indore Seed Center",
    rating: "4.8 ★ (1,890 Reviews)",
    price: "₹2,400",
    unit: {
      en: "per 30 kg Bag",
      hi: "प्रति 30 किग्रा बोरी",
      ta: "30 கிலோ மூட்டை",
      fr: "par Sac de 30 kg"
    },
    discount: "Rhizobium Inoculated",
    badge: {
      en: "Pod Shattering Resistant",
      hi: "फली चटकन प्रतिरोधी वैरायटी",
      ta: "காய் வெடிக்காத பாதுகாப்பு",
      fr: "Résistant à l'Égrenage"
    },
    image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Matures in 95-100 days. Pods don't split open even if rain delays harvesting, preventing heavy grain loss in the field.",
      hi: "95-100 दिन में पककर तैयार। बारिश होने पर भी फलियां चटकती नहीं हैं, जिससे खेत में फसल बर्बाद होने का खतरा नहीं रहता।",
      ta: "95-100 நாட்களில் அறுவடைக்கு தயாராகும். மழை பெய்தாலும் காய்கள் வெடித்து சேதமடையாது.",
      fr: "Maturation en 95-100 jours. Gousses indéhiscentes évitant les pertes au sol même en récolte retardée."
    },
    specsDetailed: {
      en: "Oil Content: 19.5% • Protein: 40.2% • Resistant to Girdle Beetle and Yellow Mosaic Virus (YMV) • Moisture: <9%.",
      hi: "तेल की मात्रा: 19.5% • प्रोटीन: 40.2% • गर्डल बीटल व पीला मोज़ेक वायरस प्रतिरोधी • नमी: 9% से कम।",
      ta: "எண்ணெய் அளவு: 19.5% • புரதம்: 40.2% • மஞ்சள் மொசைக் நோய் எதிர்ப்பு திறன் கொண்டது.",
      fr: "Teneur en huile: 19.5% • Protéines: 40.2% • Résistant au virus de la mosaïque jaune (YMV)."
    },
    quickMetrics: {
      purity: "99.0% Genetic Lab",
      germination: "85% Field Vigor",
      yieldScore: "12-14 qtls / acre",
      maturity: "95-100 Days"
    }
  },
  {
    id: "seed-mustard-pusabold",
    categoryKey: "seeds",
    easyEmoji: "🌼",
    name: {
      en: "Pusa Bold Mustard Seeds (42% High Oil Extraction)",
      hi: "पूसा बोल्ड सरसों बीज (42% तेल निष्कर्षण दर)",
      ta: "பூசா போல்ட் கடுகு விதைகள் (42% எண்ணெய்)",
      fr: "Semences de Moutarde Pusa Bold Huile 42%"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "ICAR-DRMR Bharatpur Mustard Directorate",
    rating: "4.9 ★ (2,450 Reviews)",
    price: "₹650",
    unit: {
      en: "per 2 kg Pack (1 Acre Seed Rate)",
      hi: "प्रति 2 किग्रा पैक (1 एकड़ हेतु)",
      ta: "2 கிலோ பாக்கெட் (1 ஏக்கர்)",
      fr: "le Paquet de 2 kg (Dose pour 1 Acre)"
    },
    discount: "Oil Mill Favorite",
    badge: {
      en: "Bold Seeds 42% Oil",
      hi: "मोटे दाने व 42% शुद्ध तेल",
      ta: "அதிக எண்ணெய் தரும் தரம்",
      fr: "Rendement en Huile 42%"
    },
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Large black grains packed with oil. Oil mill owners pay top premium price for Pusa Bold harvest.",
      hi: "मोटे चमकदार काले दाने जिसमें तेल सबसे ज्यादा निकलता है। तेल मिल मालिक इसके लिए मंडी में सबसे ऊंचा भाव देते हैं।",
      ta: "அதிக எண்ணெய் வளம் கொண்ட அடர் கருப்பு தானியங்கள். எண்ணெய் ஆலைகள் அதிக விலை தந்து வாங்கும்.",
      fr: "Gros grains noirs très riches en huile pure. Fortement primé par les huileries et triturateurs."
    },
    specsDetailed: {
      en: "1000-Seed Weight: 5.2g • Erucic Acid: <28% • White Rust Resistant • Low irrigation required (only 2 waterings).",
      hi: "1000 दानों का वजन: 5.2 ग्राम • सफेद रतुआ रोग प्रतिरोधी • मात्र 2 पानी में पकने वाली किफ़ायती फसल।",
      ta: "1000 தானியங்களின் எடை: 5.2 கிராம் • வெள்ளை துரு நோய் எதிர்ப்பு • வெறும் 2 முறை நீர் பாய்ச்சினால் போதும்.",
      fr: "Poids de 1000 grains: 5.2g • Résistant à la rouille blanche • Faible besoin hydrique (2 arrosages suffisent)."
    },
    quickMetrics: {
      purity: "99.7% Pure Line",
      germination: "94% Lab Certified",
      yieldScore: "10-12 qtls / acre",
      maturity: "130-135 Days"
    }
  },
  {
    id: "seed-cotton-bt",
    categoryKey: "seeds",
    easyEmoji: "☁️",
    name: {
      en: "Hybrid Bt Cotton Seeds (Bollgard-II Pest Guard)",
      hi: "बोलगार्ड-II बीटी संकर कपास बीज (गुलाबी सुंडी सुरक्षा)",
      ta: "வீரிய பிடி பருத்தி விதைகள் (Bollgard-II)",
      fr: "Semences de Coton Hybride Bt Bollgard-II"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "Kaveri & Nuziveedu Seed Biotech",
    rating: "4.8 ★ (1,780 Reviews)",
    price: "₹853",
    unit: {
      en: "per 450g Packet (Govt Mandated Rate)",
      hi: "प्रति 450 ग्राम पैकेट (सरकारी मूल्य)",
      ta: "450 கிராம் பாக்கெட் (அரசு விலை)",
      fr: "le Paquet de 450g (Prix Réglementé)"
    },
    discount: "Pink Bollworm Resistant",
    badge: {
      en: "Long Staple Fiber",
      hi: "लंबा रेशा व बड़ा टिंडा (6 ग्राम)",
      ta: "நீண்ட இழை பருத்தி",
      fr: "Fibre Extra-Longue Staple"
    },
    image: "https://images.unsplash.com/photo-1606041008023-472dfb5e530f?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Huge bolls that burst open with fluffy white cotton. Protected against caterpillars so you spend less on spray chemicals.",
      hi: "बड़े-बड़े टिंडे जो खिलकर भरपूर सफेद रुई देते हैं। सुंडी से सुरक्षित जिससे कीटनाशक दवा का खर्चा आधा हो जाता है।",
      ta: "அடர்த்தியான வெண்மையான பருத்தி. புழுக்களின் தாக்குதலை தடுக்கும் தொழில்நுட்பம் கொண்டது.",
      fr: "Grosses capsules ouvertes à coton d'un blanc éclatant. Protection naturelle contre la chenille de la capsule."
    },
    specsDetailed: {
      en: "Boll Weight: 5.5-6.2g • Staple Length: 30.5-31.5 mm • Ginning Outturn: 36.5% • Fiber Strength: 29.5 g/tex.",
      hi: "टिंडे का वजन: 5.5-6.2 ग्राम • रेशे की लंबाई: 31 मिमी • जिनिंग अनुपात: 36.5% • रेशा मजबूती: 29.5 g/tex।",
      ta: "காய் எடை: 5.5-6.2 கிராம் • இழை நீளம்: 31 மிமீ • ஜின்னிங் அளவு: 36.5% • நூல் உறுதித்தன்மை அதிகம்.",
      fr: "Poids unitaire de capsule: 5.5-6.2g • Longueur de soie: 31 mm • Rendement à l'égrenage: 36.5%."
    },
    quickMetrics: {
      purity: "99.5% Transgenic Bt",
      germination: "88% Lab Standard",
      yieldScore: "14-16 qtls / acre",
      maturity: "150-160 Days"
    }
  },
  {
    id: "seed-moong-greengram",
    categoryKey: "seeds",
    easyEmoji: "🟢",
    name: {
      en: "Short-Duration Green Gram / Moong Seeds (Virat IPM-205-7)",
      hi: "अल्पकालिक हरा मूंग बीज विराट (60 दिन की फसल)",
      ta: "பச்சை பாசிப்பயறு விதைகள் (விராட் ரகம்)",
      fr: "Semences de Haricot Mungo Vert (Moong) Cycle Court"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "ICAR-IIPR Kanpur Pulses Institute",
    rating: "4.9 ★ (1,560 Reviews)",
    price: "₹1,250",
    unit: {
      en: "per 10 kg Bag (1 Acre Seed Rate)",
      hi: "प्रति 10 किग्रा बोरी (1 एकड़ हेतु)",
      ta: "10 கிலோ மூட்டை (1 ஏக்கர்)",
      fr: "par Sac de 10 kg (Dose 1 Acre)"
    },
    discount: "Extra Crop Cycle in 60 Days",
    badge: {
      en: "60-Day Quick Catch Crop",
      hi: "मात्र 60 दिन में बंपर पैदावार",
      ta: "வெறும் 60 நாட்களில் அறுவடை",
      fr: "Récolte Express en 60 Jours"
    },
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Takes only 60 days from planting to harvest! Grow it between wheat and rice crops to make extra cash and enrich soil with nitrogen.",
      hi: "बुवाई के मात्र 60 दिनों में कटाई के लिए तैयार! गेहूं और धान के बीच खाली समय में उगाएं, अतिरिक्त कमाई करें और जमीन को उपजाऊ बनाएं।",
      ta: "விதைத்த 60 நாட்களில் அறுவடை செய்யலாம்! கோதுமைக்கும் நெல்லுக்கும் இடைப்பட்ட காலத்தில் சாகுபடி செய்து கூடுதல் வருமானம் பெறலாம்.",
      fr: "Cycle ultra court de 60 jours! Idéal en dérobée entre blé et riz pour un revenu d'appoint et fixer l'azote naturel."
    },
    specsDetailed: {
      en: "Protein: 24.8% • Yellow Mosaic Virus Resistant (MYMV immune) • Synchronous maturity (single-pass harvesting) • Nodulation score: High.",
      hi: "प्रोटीन: 24.8% • पीला मोज़ेक वायरस प्रतिरोधी • एक साथ पकने वाली फलियां (एक ही बार में कटाई) • नाइट्रोजन फिक्सेशन।",
      ta: "புரதம்: 24.8% • மஞ்சள் தேமல் நோய் எதிர்ப்பு • ஒரே நேரத்தில் பழுத்து அறுவடைக்கு தயாராகும் ரகம்.",
      fr: "Protéines: 24.8% • Résistant au virus de la mosaïque jaune • Maturation synchrone pour récolte mécanisée en 1 passage."
    },
    quickMetrics: {
      purity: "99.8% Pure Line",
      germination: "94% Field Vigor",
      yieldScore: "6-8 qtls / acre",
      maturity: "55-60 Days Only"
    }
  },
  {
    id: "seed-wheat-poshan",
    categoryKey: "seeds",
    easyEmoji: "🌾",
    name: {
      en: "HI-8663 Pusa Poshan Sharbati Durum Wheat Seeds",
      hi: "एचआई-8663 पूसा पोषण शरबती गेहूं बीज (प्रमाणित)",
      ta: "HI-8663 பூசா போஷன் துரம் கோதுமை விதைகள்",
      fr: "Semences de Blé Dur HI-8663 Pusa Poshan"
    },
    category: {
      en: "Seeds & Bio-Inputs",
      hi: "प्रमाणित बीज व खाद",
      ta: "விதைகள் & உரங்கள்",
      fr: "Semences & Intrants"
    },
    supplier: "ICAR-IARI Regional Genebank",
    rating: "4.9 ★ (2,140 Reviews)",
    price: "₹1,420",
    unit: {
      en: "per 40 kg Bag",
      hi: "प्रति 40 किग्रा बोरी",
      ta: "40 கிலோ மூட்டை",
      fr: "par Sac de 40 kg"
    },
    discount: "12% Gov Subsidy Rebate",
    badge: {
      en: "Government Certified",
      hi: "सरकारी प्रमाणित",
      ta: "அரசு சான்றளிக்கப்பட்டது",
      fr: "Certifié par l'État"
    },
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Heat-tolerant durum wheat yielding 24-26 quintals per acre. Makes soft golden rotis with rich nutrition.",
      hi: "गर्मी सहनशील शरबती गेहूं, 24-26 क्विंटल/एकड़ पैदावार, उच्च प्रोटीन और स्वादिष्ट रोटी के लिए सर्वोत्तम।",
      ta: "வெப்பத்தை தாங்கும் துரம் கோதுமை, ஏக்கருக்கு 24-26 குவிண்டால் விளைச்சல், சத்துமிக்க ரொட்டிக்கு சிறந்தது.",
      fr: "Blé dur tolérant à la chaleur, rendement de 24-26 qtls/ha, excellente qualité meunière."
    },
    specsDetailed: {
      en: "Purity: 99.8% • Germination: 94% • Rust resistance (Sr31/Lr24 gene complex) • Anti-counterfeit NFC tag on bag.",
      hi: "शुद्धता: 99.8% • अंकुरण: 94% • पीला रतुआ प्रतिरोधी (Sr31 जीन) • बोरी पर डिजिटल सुरक्षा एनएफसी टैग।",
      ta: "தூய்மை: 99.8% • முளைப்புத்திறன்: 94% • மஞ்சள் துரு நோய் எதிர்ப்பு திறன் கொண்டது.",
      fr: "Pureté: 99.8% • Germination: 94% • Résistance génétique aux rouilles • Tag NFC d'authentification."
    },
    quickMetrics: {
      purity: "99.8% Certified",
      germination: "94% Germination",
      yieldScore: "26 qtls/acre",
      protein: "13.8% Protein"
    }
  },
  {
    id: "seed-bajra-pearlmillet",
    categoryKey: "seeds",
    easyEmoji: "🌾",
    name: {
      en: "Certified Hybrid Pearl Millet Seeds (Bajra MPMH-17)",
      hi: "प्रमाणित संकर बाजरा बीज (एमपीएमएच-17 उच्च उपज)",
      ta: "சான்றளிக்கப்பட்ட கம்பு விதைகள் (Bajra MPMH-17)",
      fr: "Semences Certifiées de Millet Perle (Bajra MPMH-17)"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "ICAR-AICRP on Pearl Millet (Jodhpur Hub)",
    rating: "4.9 ★ (2,450 Reviews)",
    price: "₹340",
    unit: {
      en: "per 1.5 kg Pack (Acre Dose)",
      hi: "प्रति 1.5 किग्रा पैकेट (एकड़ खुराक)",
      ta: "1.5 கிலோ பாக்கெட் (ஏக்கர் அளவு)",
      fr: "par sachet de 1.5 kg (dose/acre)"
    },
    discount: "Drought & Heat Resistant",
    badge: {
      en: "High Iron & Zinc Biofortified",
      hi: "आयरन व जिंक से भरपूर बायोफोर्टिफाइड",
      ta: "இரும்பு மற்றும் துத்தநாக சத்து நிறைந்தது",
      fr: "Biofortifié en Fer & Zinc"
    },
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Fast-maturing 80-85 day Bajra with thick compact earheads and exceptional tolerance to extreme heat and water stress.",
      hi: "80-85 दिन में पकने वाला संकर बाजरा। ठोस लंबी बालियां, कम बारिश और भीषण गर्मी में भी बंपर पैदावार देने में सक्षम।",
      ta: "80-85 நாட்களில் அறுவடைக்கு வரும் உயர் விளைச்சல் கம்பு. வறட்சி மற்றும் அதிக வெப்பத்தைத் தாங்கி வளரும்.",
      fr: "Cycle court 80-85 jours, épis compacts et très denses, résistance remarquable à la sécheresse et fortes chaleurs."
    },
    specsDetailed: {
      en: "Maturity: 82-85 Days • Potential Yield: 34-38 q/ha • Iron: 73 ppm • Zinc: 41 ppm • Downy Mildew Resistant.",
      hi: "परिपक्वता: 82-85 दिन • पैदावार क्षमता: 34-38 क्विंटल/हेक्टेयर • आयरन: 73 ppm • डाउनी मिल्ड्यू रोधी।",
      ta: "முதிர்வு: 82-85 நாட்கள் • விளைச்சல்: 34-38 குவிண்டால்/ஹெக்டேர் • பூஞ்சை நோய் எதிர்ப்பு திறன் கொண்டது.",
      fr: "Maturité: 82-85 jours • Rendement potentiel: 34-38 q/ha • Teneur Fer: 73 ppm • Résistant au mildiou."
    },
    quickMetrics: {
      germination: "91% Lab Tested",
      purity: "99.2% Certified",
      seedRate: "1.5 kg / Acre",
      moisture: "10.4% Safe"
    }
  },
  {
    id: "seed-groundnut-peanut",
    categoryKey: "seeds",
    easyEmoji: "🥜",
    name: {
      en: "Certified Bold Groundnut / Peanut Seeds (TAG-24)",
      hi: "प्रमाणित बोल्ड मूंगफली बीज (टीएजी-24 उच्च तेल)",
      ta: "சான்றளிக்கப்பட்ட நிலக்கடலை விதைகள் (TAG-24)",
      fr: "Semences Certifiées d'Arachide / Cacahuète (TAG-24)"
    },
    category: {
      en: "Agricultural Seeds",
      hi: "प्रमाणित बीज",
      ta: "விதைகள்",
      fr: "Semences Agricoles"
    },
    supplier: "BARC & ICAR-DGR Junagadh Seed Center",
    rating: "4.8 ★ (1,920 Reviews)",
    price: "₹165",
    unit: {
      en: "per kg (₹4,950 / 30kg Bag)",
      hi: "प्रति किलो (₹4,950 / 30किग्रा बोरी)",
      ta: "கிலோவிற்கு (₹4,950 / 30கிலோ பை)",
      fr: "par kg (₹4,950 / sac de 30kg)"
    },
    discount: "51% High Oil Content",
    badge: {
      en: "Semi-Dwarf Heavy Podding",
      hi: "मजबूत फलियां व अधिक दाने",
      ta: "அதிக எண்ணெய் சத்து & திரட்சியான பருப்பு",
      fr: "Rendement Élevé en Gousses Pleines"
    },
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Compact semi-dwarf peanut with two-seeded bold pods, high shelling turnover (72%), and resistance to bud necrosis.",
      hi: "मध्यम ऊंचाई वाला पौधा, दो दानों वाली सुडौल फलियां, 72% दाने का अनुपात और उच्च तेल मात्रा से भरपूर उत्तम किस्म।",
      ta: "குறுகிய கால பயிர், பருப்பான காய்கள், 72% பருப்பு விகிதம் மற்றும் பூச்சி நோய் தாக்குதலை தாங்கும் வீரிய விதை.",
      fr: "Arachide semi-naine à gousses pleines à 2 grains, rendement à l'égoussage 72%, haute concentration en lipides."
    },
    specsDetailed: {
      en: "Maturity: 105-110 Days • Oil Content: 50.8% • Shelling Turnover: 72.4% • 100-seed mass: 42g • Cercospora tolerant.",
      hi: "परिपक्वता: 105-110 दिन • तेल प्रतिशत: 50.8% • शेलिंग टर्नओवर: 72.4% • 100 दानों का वजन: 42 ग्राम।",
      ta: "முதிர்வு: 105-110 நாட்கள் • எண்ணெய் அளவு: 50.8% • 100 விதை எடை: 42 கிராம் • திக்கா நோய் எதிர்ப்பு.",
      fr: "Maturité: 105-110 jours • Teneur en huile: 50.8% • Poids de 100 graines: 42g • Tolérance Cercosporiose."
    },
    quickMetrics: {
      germination: "89% Certified",
      purity: "99.0% Genetic",
      seedRate: "40 kg / Acre",
      moisture: "9.2% Dry Stored"
    }
  },
  {
    id: "item-bio-fertilizer",
    categoryKey: "seeds",
    easyEmoji: "🧪",
    name: {
      en: "Soluble Bio-NPK 19:19:19 Micro-Fertilizer",
      hi: "घुलनशील बायो-एनपीके 19:19:19 सूक्ष्म उर्वरक",
      ta: "கரையக்கூடிய பயோ-NPK 19:19:19 உரம்",
      fr: "Bio-NPK 19:19:19 Soluble & Chélaté"
    },
    category: {
      en: "Seeds & Bio-Inputs",
      hi: "प्रमाणित बीज व खाद",
      ta: "விதைகள் & உரங்கள்",
      fr: "Semences & Intrants"
    },
    supplier: "IFFCO Green Technologies",
    rating: "4.8 ★ (1,740 Reviews)",
    price: "₹1,850",
    unit: {
      en: "per 25 kg Bag",
      hi: "प्रति 25 किग्रा बोरी",
      ta: "25 கிலோ மூட்டை",
      fr: "par Sac de 25 kg"
    },
    discount: "Free Micronutrient Pack",
    badge: {
      en: "100% Water Soluble",
      hi: "100% जल में घुलनशील",
      ta: "100% நீரில் கரையும்",
      fr: "100% Soluble dans l'Eau"
    },
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Balanced plant food for root and fruit growth. Use via drip irrigation or spray pump for quick greening.",
      hi: "जड़ों के विकास और फलों के आकार के लिए संतुलित खाद। ड्रिप या स्प्रे पंप से सीधे पौधों को तुरंत ताकत दे।",
      ta: "பயிர்களின் துரித வளர்ச்சிக்கு உதவும் சமச்சீர் உரம். சொட்டுநீர் மூலமாகவோ தெளிப்பான் மூலமாகவோ பயன்படுத்தலாம்.",
      fr: "Nutrition équilibrée pour stimulation racinaire et foliaire. Idéal en fertirrigation goutte-à-goutte."
    },
    specsDetailed: {
      en: "N: 19%, P2O5: 19%, K2O: 19% with EDTA chelated Zinc (0.05%), Iron (0.05%), Boron (0.02%) • Zero biuret content.",
      hi: "एन: 19%, पी: 19%, के: 19% साथ में चिलेटेड जिंक, आयरन और बोरोन • शून्य बायोरेट सामग्री।",
      ta: "N: 19%, P: 19%, K: 19% மற்றும் துத்தநாகம், இரும்பு, போரான் சத்துக்கள் அடங்கியது.",
      fr: "Formulation NPK 19-19-19 avec oligo-éléments chélatés EDTA (Zn, Fe, B) • Indice de salinité très bas."
    },
    quickMetrics: {
      formula: "19:19:19 + EDTA",
      solubility: "100% Water Soluble",
      biuret: "0.00% Zero Biuret",
      phStability: "pH 5.5 - 7.0 Range"
    }
  },

  // ================= SMART TECH & DRONES =================
  {
    id: "item-drone-service",
    categoryKey: "tech",
    easyEmoji: "🛸",
    name: {
      en: "Autonomous Agro-Drone Spraying Service",
      hi: "स्वचालित कृषि ड्रोन छिड़काव सेवा",
      ta: "தானியங்கி விவசாய ட்ரோன் தெளிப்பு சேவை",
      fr: "Service de Pulvérisation par Drone Autonome"
    },
    category: {
      en: "Smart Tech & Drones",
      hi: "स्मार्ट तकनीक व ड्रोन",
      ta: "ஸ்மார்ட் கருவிகள் & ட்ரோன்",
      fr: "Drones & Technologies"
    },
    supplier: "AeroKisan Certified Drone Fleet",
    rating: "4.9 ★ (3,800 Bookings)",
    price: "₹380",
    unit: {
      en: "per Acre (Pilot & Fuel Inc.)",
      hi: "प्रति एकड़ (पायलट व बैटरी सहित)",
      ta: "ஏக்கருக்கு (பைலட் கட்டணம் உட்பட)",
      fr: "par Hectare (Pilote Inclus)"
    },
    discount: "90% Water Savings",
    badge: {
      en: "DGCA Certified Pilots",
      hi: "डीजीसीए प्रमाणित पायलट",
      ta: "அரசு உரிமம் பெற்ற பைலட்டுகள்",
      fr: "Pilotes Certifiés DGCA"
    },
    image: "https://images.unsplash.com/photo-1527977966376-1c8408f9f108?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Spray 1 acre in just 7 minutes with zero soil stomping. Uniform mist covers underneath leaves where pests hide.",
      hi: "मात्र 7 मिनट में 1 एकड़ में छिड़काव, फसल को पैरों से कोई नुकसान नहीं। पत्तियों के नीचे तक बारीक फुहार पहुंचे।",
      ta: "1 ஏக்கர் பரப்பளவில் வெறும் 7 நிமிடங்களில் சீரான மருந்து தெளிப்பு. பயிர்கள் மிதிபடுவதில்லை.",
      fr: "Pulvérise 1 hectare en 15 min sans tassement de sol. Micro-gouttelettes couvrant le dessous des feuilles."
    },
    specsDetailed: {
      en: "Droplet Size: 80-120 Microns Centrifugal Atomizer • RTK Centimeter Navigation • Autonomous terrain following radar.",
      hi: "बूंद का आकार: 80-120 माइक्रोन • आरटीके सेंटीमीटर नेविगेशन • ज़मीन की ऊंचाई के अनुसार स्वचालित उड़ान रडार।",
      ta: "துல்லியமான RTK ஜிபிஎஸ் வழிகாட்டுதல் • 80-120 மைக்ரான் நுண் துளிகள் • தரை உயர சென்சார்.",
      fr: "Gouttelettes: 80-120 µm par buses centrifuges • Précision RTK centimétrique • Radar de suivi de relief."
    },
    quickMetrics: {
      speed: "7 Mins / Acre",
      droplet: "80-120 Microns",
      gps: "RTK Centimeter Level",
      waterSavings: "90% Reduction"
    }
  },
  {
    id: "item-iot-probe",
    categoryKey: "tech",
    easyEmoji: "📡",
    name: {
      en: "Solar Wireless 4G IoT Soil Moisture Node",
      hi: "सौर-ऊर्जा 4G मृदा नमी व तापमान IoT सेंसर",
      ta: "சூரிய சக்தி 4G மண் ஈரப்பதம் சென்சார்",
      fr: "Sonde IoT Solaire Sans Fil pour le Sol"
    },
    category: {
      en: "Smart Tech & Drones",
      hi: "स्मार्ट तकनीक व ड्रोन",
      ta: "ஸ்மார்ட் கருவிகள் & ட்ரோன்",
      fr: "Drones & Technologies"
    },
    supplier: "CropCare Hardware Labs",
    rating: "5.0 ★ (1,230 Reviews)",
    price: "₹3,999",
    unit: {
      en: "Single Node + 3-Year SIM",
      hi: "सिंगल सेंसर + 3 साल सिम डेटा",
      ta: "சென்சார் + 3 ஆண்டு சிம் டேட்டா",
      fr: "Sonde + Carte SIM 3 Ans"
    },
    discount: "20% Subsidy Rebate",
    badge: {
      en: "Plug & Play",
      hi: "प्लग एंड प्ले",
      ta: "எளிதான பயன்பாடு",
      fr: "Prêt à l'Emploi"
    },
    image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?auto=format&fit=crop&w=600&q=80",
    specsEasy: {
      en: "Stick it into the soil, see water level on your phone. Tells you exactly when and how long to water your field.",
      hi: "खेत में गाड़ें और फोन पर मिट्टी की नमी देखें। यह आपको बताएगा कि कब और कितनी देर पानी देना है।",
      ta: "மண்ணில் நட்டு வைத்தால் போதும், ஈரப்பதத்தை போனில் பார்க்கலாம். எப்போது நீர் பாய்ச்ச வேண்டும் என்பதை துல்லியமாக கூறும்.",
      fr: "Plantez la sonde dans la parcelle et suivez l'humidité sur votre téléphone. Recommandations d'arrosage en temps réel."
    },
    specsDetailed: {
      en: "Measures 3 depths (10cm, 20cm, 40cm) soil moisture, soil temperature, and EC with live 4G sync to CropCare dashboard.",
      hi: "तीन गहराई (10 सेमी, 20 सेमी, 40 सेमी) पर मिट्टी की नमी, तापमान और पीएच मापकर सीधे मोबाइल पर भेजता है।",
      ta: "3 ஆழங்களில் (10cm, 20cm, 40cm) மண் ஈரப்பதம் மற்றும் வெப்பநிலையை அளந்து மொபைலுக்கு அனுப்பும்.",
      fr: "Mesure l'humidité, la température et la conductivité à 3 profondeurs (10cm, 20cm, 40cm) synchronisé en 4G."
    },
    quickMetrics: {
      depths: "10, 20, 40 cm Depths",
      battery: "Solar + 10-Yr LiFePO4",
      connectivity: "4G LTE-M + LoRaWAN",
      ipRating: "IP68 Submersible"
    }
  }
];

export function getMarketplaceItems(lang = 'en') {
  return baseItems.map(item => ({
    ...item,
    name: item.name[lang] || item.name.en,
    category: item.category[lang] || item.category.en,
    unit: item.unit[lang] || item.unit.en,
    badge: typeof item.badge === 'object' ? (item.badge[lang] || item.badge.en) : item.badge,
    discount: typeof item.discount === 'object' ? (item.discount[lang] || item.discount.en) : item.discount,
    description: (item.specsEasy && item.specsEasy[lang]) ? item.specsEasy[lang] : (item.name[lang] || item.name.en),
    specsEasy: item.specsEasy ? (item.specsEasy[lang] || item.specsEasy.en) : '',
    specsDetailed: item.specsDetailed ? (item.specsDetailed[lang] || item.specsDetailed.en) : '',
    easyEmoji: item.easyEmoji || '🌿',
    quickMetrics: item.quickMetrics || {}
  }));
}

export const marketplaceItems = getMarketplaceItems('en');
