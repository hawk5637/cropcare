// 6-Step Farm-to-Market Continuum Workflow
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

const rawStepsEn = [
  {
    step: 1,
    id: "plan",
    title: "Plan",
    subtitle: "Location, Season & Soil Analysis",
    icon: "sprout",
    emoji: "🌿",
    badge: "Stage 01: Pre-Sowing Intelligence",
    tagline: "Precision foundations before the first seed drops",
    description: "CropCare ingests multi-depth soil test metrics (pH, Nitrogen, Phosphorus, Potassium, Organic Carbon) alongside localized micro-climate forecasts to recommend the most profitable, resilient crop varieties for your specific GPS coordinates.",
    keyMetrics: [
      { label: "Yield Uplift Potential", value: "+24%" },
      { label: "Fertilizer Cost Savings", value: "18-22%" },
      { label: "Optimal Sowing Window", value: "Oct 15 - Nov 05" }
    ],
    checklist: [
      "Digital geo-tagged soil fertility mapping (NPK & micronutrients)",
      "Season-by-season rotation recommendation based on historical yield",
      "Dynamic seed variety selector tailored to salinity and moisture levels",
      "Automatic subsidy & soil health card compliance validation"
    ],
    simulator: {
      type: "soil-planner",
      headline: "Interactive Soil & Variety Suitability Calculator",
      defaultSoil: "Alluvial Clay Loam",
      defaultPh: "6.8",
      defaultNpk: "120:60:40 kg/ha",
      recommendedCrops: ["Sharbati Durum Wheat", "Pusa Mustard-31", "Zero-Till Chickpea"]
    }
  },
  {
    step: 2,
    id: "discover",
    title: "Discover",
    subtitle: "Crop Calendars & Daily Market Prices",
    icon: "search",
    emoji: "🔍",
    badge: "Stage 02: Market & Timing Intelligence",
    tagline: "Anticipate market dynamics before deciding what to cultivate",
    description: "Access hyper-local, stage-by-stage agronomic calendars with automatic irrigation, weeding, and spraying schedules synchronized with forward-looking APMC Mandi price forecast models.",
    keyMetrics: [
      { label: "Mandi Mandates Tracked", value: "1,200+ APMCs" },
      { label: "Price Forecast Accuracy", value: "91.4%" },
      { label: "Pest Warning Lead Time", value: "72 Hours" }
    ],
    checklist: [
      "Dynamic Gantt-style crop timeline from land prep to harvest",
      "Predictive Mandi price curves for 30, 60, and 90-day harvest horizons",
      "Weather-indexed spray and fertilizer application alerts via SMS & WhatsApp",
      "Commodity supply glut alerts to prevent selling into oversupplied markets"
    ],
    simulator: {
      type: "market-discover",
      headline: "Commodity Calendar & Arbitrage Scout",
      sampleCrop: "Durum Wheat",
      harvestDate: "April 2027",
      projectedMandiPrice: "₹2,480 / qtl",
      mspPrice: "₹2,275 / qtl"
    }
  },
  {
    step: 3,
    id: "match",
    title: "Match",
    subtitle: "Connect with Verified Buyers & Lock Tenders",
    icon: "users",
    emoji: "🤝",
    badge: "Stage 03: Direct-to-Buyer Procurement",
    tagline: "Disintermediate brokers with direct buyer bidding rooms",
    description: "Connect directly with verified food processing conglomerates, flour millers, exporters, and retail chains. Receive pre-harvest forward bids with transparent quality grade parameters.",
    keyMetrics: [
      { label: "Average Realization Delta", value: "+18.5%" },
      { label: "Verified Buyer Network", value: "850+ Enterprises" },
      { label: "Contract Default Rate", value: "0.02%" }
    ],
    checklist: [
      "Direct reverse auction rooms for certified commodity lots",
      "Pre-harvest forward purchase contract locking with price floors",
      "Institutional buyer KYC, credit rating, and payment history scores",
      "Standardized grain quality grading matrices (Moisture, Admixture, Protein)"
    ],
    simulator: {
      type: "buyer-matching",
      headline: "Live Institutional Buyer Bid Board",
      activeTenders: [
        { buyer: "ITC Agri-Business Division", offer: "₹2,540/qtl", qty: "250 Qtls", terms: "Farmgate Pickup • 100% Escrow" },
        { buyer: "Adani Wilmar Consumer", offer: "₹2,510/qtl", qty: "500 Qtls", terms: "Railhead Delivery • T+0 RTGS" },
        { buyer: "BigBasket Direct Farm", offer: "₹2,580/qtl", qty: "100 Qtls", terms: "Grade-A Sorting • Instant UPI" }
      ]
    }
  },
  {
    step: 4,
    id: "coordinate",
    title: "Coordinate",
    subtitle: "Farmgate Transport & Reefer Cold Chain",
    icon: "truck",
    emoji: "🚚",
    badge: "Stage 04: Intelligent Logistics & Storage",
    tagline: "End-to-end farmgate collection without handling losses",
    description: "Automate harvest transportation scheduling. Dispatch verified mini-trucks, tractor-trolleys, or temperature-regulated reefer containers right to your farm gate with real-time GPS tracking.",
    keyMetrics: [
      { label: "Transit Spoilage Reduction", value: "Down to 1.8%" },
      { label: "Fleet Dispatch Latency", value: "< 45 Mins" },
      { label: "GPS Tracking Uptime", value: "99.9%" }
    ],
    checklist: [
      "On-demand dispatch of farmgate pickup vehicles matching load size",
      "Real-time GPS telematics with live ETA and road condition optimization",
      "Active cold-chain monitoring for perishable horticulture commodities",
      "Electronic weighbridge slips and e-Way bill automated documentation"
    ],
    simulator: {
      type: "logistics-simulator",
      headline: "Farmgate Fleet Dispatch & Reefer Tracker",
      vehicleId: "MH-12-AG-9041",
      vehicleType: "14ft Insulated Reefer Van",
      tempStatus: "14.2°C • Optimal Chilled",
      eta: "38 Mins to Field Gate A-1"
    }
  },
  {
    step: 5,
    id: "sell",
    title: "Sell & Act",
    subtitle: "Calibrated Weighing & Instant Escrow Settlement",
    icon: "wallet",
    emoji: "💰",
    badge: "Stage 05: Financial Settlement & Escrow",
    tagline: "T+0 direct bank payment upon digital scale signoff",
    description: "Execute transparent farmgate sales with IoT-calibrated digital weighing scales. The buyer's pre-funded bank escrow deposit is released directly into your bank account via instant RTGS / UPI.",
    keyMetrics: [
      { label: "Settlement Time", value: "T+0 (Under 3 mins)" },
      { label: "Weighing Deduction Leakage", value: "0% Guarantee" },
      { label: "Escrow Backed Vault", value: "100% Protected" }
    ],
    checklist: [
      "Zero commission deductions and zero arbitrary 'Katta/Chhant' cuts",
      "IoT digital load-cell weighing scale transmitting tare and net weight",
      "Instant multi-rail bank payout (Aadhaar UPI, IMPS, RTGS)",
      "Digitally signed GST invoice and e-Soil nutrient replenishment advice"
    ],
    simulator: {
      type: "escrow-simulator",
      headline: "T+0 Digital Escrow Payout Simulation",
      lotWeight: "150.00 Quintals",
      settledRate: "₹2,510 / Quintal",
      totalPayout: "₹3,76,500",
      payoutStatus: "Ready to Release into Punjab National Bank A/c *9042"
    }
  },
  {
    step: 6,
    id: "track",
    title: "Track",
    subtitle: "Satellite Telemetry & Multi-Season Profit Audits",
    icon: "line-chart",
    emoji: "📈",
    badge: "Stage 06: Post-Harvest Yield Intelligence",
    tagline: "Data-driven analytics to maximize next season's margins",
    description: "Close the agronomic loop with comprehensive farm analytics. Analyze net profit per acre, fertilizer utilization efficiency, satellite NDVI crop vigor history, and generate verified carbon credit certifications.",
    keyMetrics: [
      { label: "Net Margin Improvement", value: "+32.4% YoY" },
      { label: "NDVI Resolution", value: "10m Multispectral" },
      { label: "Carbon Credit Monetization", value: "₹1,850 / Acre" }
    ],
    checklist: [
      "Multi-season soil organic carbon (SOC) regeneration tracking",
      "Plot-by-plot profit and loss balance sheet generation",
      "Sentinel-2 multispectral NDVI and NDRE historical canopy graphs",
      "Verified carbon credits minted for zero-stubble-burning practices"
    ],
    simulator: {
      type: "ndvi-tracker",
      headline: "Sentinel-2 Multi-Spectral Canopy Vigour Analyzer",
      parcelId: "Parcel A-1 (Durum Wheat)",
      ndviScore: "0.84 (High Canopy Vigour)",
      carbonCreditYield: "₹2,400 Verified Value"
    }
  }
];

// Localized Hindi Steps
const rawStepsHi = [
  {
    step: 1,
    title: "योजना (Plan)",
    subtitle: "मिट्टी जांच, स्थान व मौसम विश्लेषण",
    badge: "चरण 01: बुवाई पूर्व वैज्ञानिक योजना",
    tagline: "पहला बीज बोने से पहले सटीक तैयारी",
    description: "क्रॉपोरा आपकी मिट्टी के एनपीके, पीएच और जैविक कार्बन की जांच स्थानीय मौसम के साथ मिलाकर आपके खेत के लिए सबसे अधिक मुनाफा देने वाली फसल किस्म सुझाता है।",
    keyMetrics: [
      { label: "पैदावार वृद्धि क्षमता", value: "+24%" },
      { label: "खाद लागत में बचत", value: "18-22%" },
      { label: "सर्वोत्तम बुवाई समय", value: "15 अक्टू - 05 नवं" }
    ],
    checklist: [
      "डिजिटल जीपीएस मृदा उर्वरता मैपिंग (एनपीके व सूक्ष्म पोषक तत्व)",
      "पिछले रिकॉर्ड के आधार पर मौसम अनुसार फसल चक्र सलाह",
      "मिट्टी की नमी व खारेपन के अनुसार उपयुक्त बीज चयन",
      "सरकारी मृदा स्वास्थ्य कार्ड और सब्सिडी सत्यापन"
    ],
    simulator: {
      headline: "मृदा एवं फसल उपयुक्तता कैलकुलेटर",
      defaultSoil: "जलोढ़ दोमट मिट्टी",
      defaultPh: "6.8",
      defaultNpk: "120:60:40 किग्रा/हे",
      recommendedCrops: ["शरबती गेहूं", "पूसा सरसों-31", "चना"]
    }
  },
  {
    step: 2,
    title: "खोज (Discover)",
    subtitle: "फसल कैलेंडर व दैनिक मंडी भाव",
    badge: "चरण 02: बाजार व समय बुद्धिमत्ता",
    tagline: "बुवाई से पहले ही बाजार मांग और भाव का अनुमान",
    description: "बुवाई से कटाई तक का स्वचालित दैनिक कैलेंडर पाएं जिसमें सिंचाई, निराई और छिड़काव की तारीखें 1200+ मंडियों के भाव पूर्वानुमान से जुड़ी होती हैं।",
    keyMetrics: [
      { label: "ट्रैक की जाने वाली मंडियां", value: "1,200+ मंडियां" },
      { label: "मूल्य पूर्वानुमान सटीकता", value: "91.4%" },
      { label: "कीट चेतावनी अग्रिम समय", value: "72 घंटे" }
    ],
    checklist: [
      "खेत तैयारी से कटाई तक का दैनिक कार्य कैलेंडर",
      "30, 60 और 90 दिनों के बाद कटाई पर मिलने वाले मंडी भाव का अनुमान",
      "मौसम अनुसार कीटनाशक छिड़काव की एसएमएस चेतावनी",
      "बाजार में अधिक आवक होने पर फसल रोकने का सुझाव"
    ],
    simulator: {
      headline: "मंडी कैलेंडर एवं आर्बिट्राज विश्लेषक",
      sampleCrop: "शरबती गेहूं",
      harvestDate: "अप्रैल 2027",
      projectedMandiPrice: "₹2,480 / क्विंटल",
      mspPrice: "₹2,275 / क्विंटल"
    }
  },
  {
    step: 3,
    title: "खरीदार मिलान (Match)",
    subtitle: "सत्यापित खरीदारों से सीधी बोली",
    badge: "चरण 03: सीधे खरीदार से व्यापार",
    tagline: "बिचौलियों और आढ़तियों से मुक्ति, सीधा मुकाबला",
    description: "आटा मिलों, तेल एक्सपेलरों, निर्यातकों और बड़ी कंपनियों से सीधे जुड़ें। फसल तैयार होने से पहले ही न्यूनतम मूल्य का गारंटीड समझौता करें।",
    keyMetrics: [
      { label: "औसत शुद्ध लाभ वृद्धि", value: "+18.5%" },
      { label: "सत्यापित खरीदार नेटवर्क", value: "850+ कंपनियां" },
      { label: "अनुबंध डिफ़ॉल्ट दर", value: "0.02%" }
    ],
    checklist: [
      "प्रमाणित कृषि लॉट के लिए लाइव डिजिटल नीलामी कक्ष",
      "फसल पूर्व न्यूनतम गारंटीड मूल्य समझौता",
      "खरीदार की बैंक साख और भुगतान इतिहास की जांच",
      "मानकीकृत गुणवत्ता ग्रेड (नमी, दाने की चमक, प्रोटीन)"
    ],
    simulator: {
      headline: "लाइव संस्थागत खरीदार बोली बोर्ड",
      activeTenders: [
        { buyer: "ITC एग्री-बिजनेस डिवीज़न", offer: "₹2,540/क्विं", qty: "250 क्विं", terms: "खेत से लोडिंग • 100% एस्क्रो" },
        { buyer: "अडानी विल्मर कंज्यूमर", offer: "₹2,510/क्विं", qty: "500 क्विं", terms: "T+0 बैंक आरटीजीएस" },
        { buyer: "बिगबास्केट फ्रेश फार्म", offer: "₹2,580/क्विं", qty: "100 क्विं", terms: "ग्रेड-ए छंटाई • तत्काल यूपीआई" }
      ]
    }
  },
  {
    step: 4,
    title: "परिवहन (Coordinate)",
    subtitle: "खेत से सीधी ट्रक लोडिंग व कोल्ड चेन",
    badge: "चरण 04: स्मार्ट रसद व परिवहन",
    tagline: "खेत के किनारे से सीधी लोडिंग, zero हैंडलिंग नुकसान",
    description: "कटाई के तुरंत बाद परिवहन गाड़ी बुक करें। छोटा हाथी, ट्रैक्टर या वातानुकूलित रीफर वैन सीधे आपके खेत के किनारे पहुंचेगी। लाइव जीपीएस से ट्रैक करें।",
    keyMetrics: [
      { label: "रास्ते में नुकसान में कमी", value: "सिर्फ 1.8%" },
      { label: "वाहन पहुंचने का समय", value: "< 45 मिनट" },
      { label: "जीपीएस ट्रैकिंग सटीकता", value: "99.9%" }
    ],
    checklist: [
      "फसल की मात्रा के अनुसार सही मालवाहक गाड़ी का आवंटन",
      "लाइव जीपीएस ट्रैकिंग और खराब रास्तों से बचने का रूट",
      "टमाटर व सब्जियों के लिए तापमान नियंत्रित रीफर वाहन",
      "इलेक्ट्रॉनिक वे-ब्रिज वजन पर्ची और ई-वे बिल स्वचालन"
    ],
    simulator: {
      headline: "खेत से वाहन प्रेषण एवं रीफर ट्रैकर",
      vehicleId: "MH-12-AG-9041",
      vehicleType: "14-फुट इंसुलेटेड रीफर वैन",
      tempStatus: "14.2°C • उत्तम ठंडक",
      eta: "खेत गेट A-1 पर पहुंचने में 38 मिनट"
    }
  },
  {
    step: 5,
    title: "बिक्री व भुगतान (Sell & Act)",
    subtitle: "डिजिटल कांटा तौल व तत्काल बैंक भुगतान",
    badge: "चरण 05: डिजिटल एस्क्रो भुगतान (T+0)",
    tagline: "कांटा तौलते ही 3 मिनट में खाते में पैसा",
    description: "IoT कैलिब्रेटेड डिजिटल कांटे पर पारदर्शी तौल। तौल पर्ची पर किसान के हस्ताक्षर होते ही बैंक एस्क्रो से पैसा सीधे आपके बैंक खाते में पहुंच जाता है।",
    keyMetrics: [
      { label: "भुगतान समय", value: "T+0 (3 मिनट के अंदर)" },
      { label: "वजन कटौती व छंट", value: "0% गारंटी" },
      { label: "एस्क्रो सुरक्षा वॉल्ट", value: "100% सुरक्षित" }
    ],
    checklist: [
      "बिचौलियों की कोई कमीशन कटौती नहीं, मनमाना कट्टा नहीं",
      "डिजिटल लोड-सेल कांटा जो सटीक वजन सीधे फोन पर भेजता है",
      "आधार यूपीआई, आईएमपीएस या आरटीजीएस से तत्काल भुगतान",
      "डिजिटल हस्ताक्षरित पक्की रसीद और अगली फसल के लिए पोषण सलाह"
    ],
    simulator: {
      headline: "T+0 डिजिटल एस्क्रो भुगतान सिमुलेशन",
      lotWeight: "150.00 क्विंटल",
      settledRate: "₹2,510 / क्विंटल",
      totalPayout: "₹3,76,500",
      payoutStatus: "पंजाब नेशनल बैंक खाता *9042 में भुगतान के लिए तैयार"
    }
  },
  {
    step: 6,
    title: "निगरानी (Track)",
    subtitle: "उपग्रह निगरानी व मौसमी मुनाफा रिपोर्ट",
    badge: "चरण 06: कटाई उपरांत फार्म ऑडिट",
    tagline: "अगले मौसम में और अधिक कमाई के लिए डेटा विश्लेषण",
    description: "कटाई के बाद पूरा हिसाब-किताब देखें: प्रति एकड़ शुद्ध लाभ, खाद की उपयोग दक्षता, उपग्रह एनडीवीआई फसल हरियाली और जैविक कार्बन क्रेडिट प्रमाणपत्र।",
    keyMetrics: [
      { label: "शुद्ध लाभ वृद्धि दर", value: "+32.4% वार्षिक" },
      { label: "उपग्रह रिज़ॉल्यूशन", value: "10 मीटर स्पेक्ट्रल" },
      { label: "कार्बन क्रेडिट आमदनी", value: "₹1,850 / एकड़" }
    ],
    checklist: [
      "मृदा जैविक कार्बन सुधार और खेत स्वास्थ्य ट्रैकिंग",
      "खेतवार आय-व्यय व शुद्ध लाभ बैलेंस शीट",
      "सेंटिनल-2 उपग्रह फसल कैनोपी हरियाली सूचकांक",
      "पराली न जलाने और शून्य जुताई पर प्रमाणित कार्बन क्रेडिट"
    ],
    simulator: {
      headline: "सेंटिनल-2 उपग्रह फसल स्वास्थ्य विश्लेषक",
      parcelId: "पार्सल A-1 (शरबती गेहूं)",
      ndviScore: "0.84 (उत्कृष्ट फसल स्वास्थ्य)",
      carbonCreditYield: "₹2,400 सत्यापित मूल्य"
    }
  }
];

// Localized Tamil Steps
const rawStepsTa = [
  {
    step: 1,
    title: "திட்டம் (Plan)",
    subtitle: "மண் ஆய்வு, இருப்பிடம் & பருவகால திட்டமிடல்",
    badge: "படி 01: விதைப்புக்கு முந்தைய தயாரிப்பு",
    tagline: "முதல் விதை விதைக்கும் முன் துல்லியமான அடித்தளம்",
    description: "மண்ணின் NPK, pH மற்றும் கரிம அளவுகளை ஆய்வு செய்து, உங்கள் நிலத்தின் ஜிபிஎஸ் இருப்பிடத்திற்கு ஏற்ற அதிக லாபம் தரும் பயிர் வகைகளை பரிந்துரைக்கிறது.",
    keyMetrics: [
      { label: "விளைச்சல் பெருக்க சாத்தியம்", value: "+24%" },
      { label: "உரச்செலவு சேமிப்பு", value: "18-22%" },
      { label: "உகந்த விதைப்பு காலம்", value: "அக் 15 - நவ 05" }
    ],
    checklist: [
      "டிஜிட்டல் மண் வள வரைபடம் (NPK & நுண்ணூட்டச்சத்துக்கள்)",
      "முந்தைய பருவ விளைச்சல் அடிப்படையிலான பயிர் சுழற்சி",
      "மண் உப்புத்தன்மைக்கு ஏற்ற சான்றளிக்கப்பட்ட விதை தேர்வு",
      "மண் வள அட்டை மற்றும் அரசு மானிய தகுதி சரிபார்ப்பு"
    ],
    simulator: {
      headline: "மண் மற்றும் பயிர் பொருத்தப்பாடு கால்குலேட்டர்",
      defaultSoil: "வண்டல் களிமண் நிலம்",
      defaultPh: "6.8",
      defaultNpk: "120:60:40 கிலோ/ஹெக்",
      recommendedCrops: ["கோதுமை", "கடுகு-31", "கொண்டைக்கடலை"]
    }
  },
  {
    step: 2,
    title: "கண்டறிதல் (Discover)",
    subtitle: "பயிர் காலண்டர் & தினசரி மண்டி விலைகள்",
    badge: "படி 02: சந்தை & நேர நுண்ணறிவு",
    tagline: "பயிர் செய்வதற்கு முன்பே சந்தை தேவையை கணித்தல்",
    description: "1,200+ மண்டிகளின் நேரடி விலை நிலவரங்களுடன் இணைக்கப்பட்ட தானியங்கி பாசன மற்றும் மருந்து தெளிக்கும் தினசரி கால அட்டவணை.",
    keyMetrics: [
      { label: "கண்காணிக்கப்படும் மண்டிகள்", value: "1,200+ மண்டிகள்" },
      { label: "விலை கணிப்பு துல்லியம்", value: "91.4%" },
      { label: "பூச்சி எச்சரிக்கை முன்கூட்டிய நேரம்", value: "72 மணி நேரம்" }
    ],
    checklist: [
      "நில தயாரிப்பு முதல் அறுவடை வரையிலான கால அட்டவணை",
      "30, 60 மற்றும் 90 நாட்கள் பிந்தைய மண்டி விலை முன்னறிவிப்பு",
      "வானிலை அடிப்படையிலான ஸ்ப்ரே எஸ்எம்எஸ் எச்சரிக்கைகள்",
      "சந்தையில் வரத்து அதிகம் இருக்கும்போது எச்சரிக்கை"
    ],
    simulator: {
      headline: "மண்டி காலண்டர் மற்றும் லாப கணிப்பான்",
      sampleCrop: "கோதுமை",
      harvestDate: "ஏப்ரல் 2027",
      projectedMandiPrice: "₹2,480 / குவிண்டால்",
      mspPrice: "₹2,275 / குவிண்டால்"
    }
  },
  {
    step: 3,
    title: "பொருத்தம் (Match)",
    subtitle: "சான்றளிக்கப்பட்ட வாங்குபவர்களுடன் நேரடி தொடர்பு",
    badge: "படி 03: நேரடி வர்த்தகம் & ஏலம்",
    tagline: "இடைத்தரகர் இல்லாமல் நிறுவனங்களுக்கு நேரடி விற்பனை",
    description: "மில்கள், ஏற்றுமதியாளர்கள் மற்றும் சில்லறை வணிக நிறுவனங்களுடன் நேரடியாக இணைந்து போட்டி ஏல முறையில் அதிக விலை பெறுங்கள்.",
    keyMetrics: [
      { label: "சராசரி நிகர லாப உயர்வு", value: "+18.5%" },
      { label: "சான்றளிக்கப்பட்ட நிறுவனங்கள்", value: "850+ வாங்குபவர்கள்" },
      { label: "ஒப்பந்த பாதுகாப்பு", value: "99.98%" }
    ],
    checklist: [
      "சான்றளிக்கப்பட்ட பயிர்களுக்கான நேரடி டிஜிட்டல் ஏல அறை",
      "குறைந்தபட்ச விலை உத்தரவாதத்துடன் கூடிய முன்கூட்டிய ஒப்பந்தம்",
      "வாங்குபவரின் வங்கி மதிப்பீடு மற்றும் கட்டண வரலாறு",
      "தர நிர்ணய அளவீடுகள் (ஈரப்பதம், தானிய தரம், புரதம்)"
    ],
    simulator: {
      headline: "நேரடி நிறுவன வாங்குபவர் ஏல பலகை",
      activeTenders: [
        { buyer: "ITC அக்ரி-பிசினஸ் பிரிவு", offer: "₹2,540/குவி", qty: "250 குவி", terms: "பண்ணையிலேயே ஏற்றுதல் • 100% எஸ்க்ரோ" },
        { buyer: "அதானி வில்மர் கன்ஸ்யூமர்", offer: "₹2,510/குவி", qty: "500 குவி", terms: "T+0 RTGS வங்கி பரிவர்த்தனை" },
        { buyer: "பிக்பாஸ்கெட் பிரஷ் பார்ம்", offer: "₹2,580/குவி", qty: "100 குவி", terms: "கிரேடு-ஏ தரம் • உடனடி UPI" }
      ]
    }
  },
  {
    step: 4,
    title: "ஒருங்கிணைப்பு (Coordinate)",
    subtitle: "பண்ணைக்கே வரும் லாரிகள் & குளிரூட்டப்பட்ட வாகனங்கள்",
    badge: "படி 04: புத்திசாலி போக்குவரத்து & தளவாடங்கள்",
    tagline: "பண்ணை வாசலில் நேரடி ஏற்றுதல், பூஜ்ஜிய சேதாரம்",
    description: "அறுவடைக்கு பின் சிறு லாரிகள் அல்லது குளிரூட்டப்பட்ட வாகனங்களை நேரடியாக பண்ணைக்கே வரவழைத்து நேரடி ஜிபிஎஸ் மூலம் கண்காணிக்கலாம்.",
    keyMetrics: [
      { label: "வழியில் சேதாரம் குறைப்பு", value: "வெறும் 1.8%" },
      { label: "வாகனம் வரும் நேரம்", value: "< 45 நிமிடம்" },
      { label: "ஜிபிஎஸ் கண்காணிப்பு", value: "99.9%" }
    ],
    checklist: [
      "விளைபொருளின் எடைக்கேற்ப சரியான வாகன ஒதுக்கீடு",
      "மோசமான கிராமப்புற சாலைகளை தவிர்க்கும் நேரடி ஜிபிஎஸ் பாதை",
      "காய்கறிகள் கெடாமல் இருக்க குளிரூட்டப்பட்ட ரீபர் வாகனங்கள்",
      "மின்னணு எடைச்சீட்டு மற்றும் இ-வே பில் தானியங்கி ஆவணங்கள்"
    ],
    simulator: {
      headline: "பண்ணை வாகன ஒதுக்கீடு & ரீபர் டிராக்கர்",
      vehicleId: "MH-12-AG-9041",
      vehicleType: "14 அடி குளிரூட்டப்பட்ட வேன்",
      tempStatus: "14.2°C • உகந்த குளிர்ச்சி",
      eta: "பண்ணை வாசல் A-1 க்கு வர 38 நிமிடங்கள்"
    }
  },
  {
    step: 5,
    title: "விற்பனை (Sell & Act)",
    subtitle: "டிஜிட்டல் எடை & உடனடி எஸ்க்ரோ வங்கி பணம்",
    badge: "படி 05: டிஜிட்டல் எஸ்க்ரோ தீர்வு (T+0)",
    tagline: "எடை போட்டதும் 3 நிமிடங்களில் வங்கியில் பணம்",
    description: "டிஜிட்டல் எடைக் கருவி மூலம் துல்லியமான எடை. எடையை உறுதி செய்த உடனே வாங்குபவர் எஸ்க்ரோவில் வைத்துள்ள பணம் உங்கள் கணக்கிற்கு வரும்.",
    keyMetrics: [
      { label: "பணம் சேரும் நேரம்", value: "T+0 (3 நிமிடத்திற்குள்)" },
      { label: "தேவையற்ற எடை பிடித்தம்", value: "0% உத்தரவாதம்" },
      { label: "எஸ்க்ரோ வங்கி பாதுகாப்பு", value: "100% பாதுகாப்பானது" }
    ],
    checklist: [
      "இடைத்தரகர் கமிஷன் பிடித்தம் இல்லை, அநியாய கழிவு இல்லை",
      "சரியான எடையை போனுக்கு அனுப்பும் டிஜிட்டல் எடைக்கருவி",
      "ஆதார் UPI, IMPS அல்லது RTGS வழியாக உடனடி வங்கி செலுத்துதல்",
      "டிஜிட்டல் ரசீது மற்றும் அடுத்த பருவத்திற்கான மண் வள வழிகாட்டுதல்"
    ],
    simulator: {
      headline: "T+0 டிஜிட்டல் எஸ்க்ரோ கட்டண சிமுலேஷன்",
      lotWeight: "150.00 குவிண்டால்",
      settledRate: "₹2,510 / குவிண்டால்",
      totalPayout: "₹3,76,500",
      payoutStatus: "பஞ்சாப் நேஷனல் வங்கி கணக்கு *9042 இல் செலுத்த தயார்"
    }
  },
  {
    step: 6,
    title: "கண்காணிப்பு (Track)",
    subtitle: "செயற்கைக்கோள் கண்காணிப்பு & லாப பகுப்பாய்வு",
    badge: "படி 06: அறுவடைக்கு பிந்தைய ஆய்வு",
    tagline: "அடுத்த பருவ லாபத்தை பெருக்கும் தரவு நுண்ணறிவு",
    description: "அறுவடைக்கு பின் உங்கள் ஏக்கரிலான நிகர லாபம், உரப்பயன்பாட்டு திறன், செயற்கைக்கோள் பயிர் பசுமை குறியீடு மற்றும் கார்பன் கிரெடிட்டை அறியலாம்.",
    keyMetrics: [
      { label: "நிகர லாப வளர்ச்சி", value: "+32.4% ஆண்டுதோறும்" },
      { label: "செயற்கைக்கோள் துல்லியம்", value: "10 மீட்டர்" },
      { label: "கார்பன் கிரெடிட் வருமானம்", value: "₹1,850 / ஏக்கர்" }
    ],
    checklist: [
      "மண் கரிம வளர்ச்சி மற்றும் நில ஆரோக்கிய கண்காணிப்பு",
      "ஒவ்வொரு நிலத்திற்குமான வரவு-செலவு நிகர லாப அறிக்கை",
      "சென்டினல்-2 செயற்கைக்கோள் பயிர் வளர்ச்சி வரைபடங்கள்",
      "சுற்றுச்சூழல் விவசாய நடைமுறைகளுக்கான சான்றளிக்கப்பட்ட கார்பன் கிரெடிட்"
    ],
    simulator: {
      headline: "சென்டினல்-2 செயற்கைக்கோள் பயிர் பசுமை பகுப்பாய்வி",
      parcelId: "பார்சல் A-1 (கோதுமை)",
      ndviScore: "0.84 (அற்புதமான பயிர் ஆரோக்கியம்)",
      carbonCreditYield: "₹2,400 சான்றளிக்கப்பட்ட மதிப்பு"
    }
  }
];

// Localized French Steps
const rawStepsFr = [
  {
    step: 1,
    title: "Planifier (Plan)",
    subtitle: "Analyse du Sol, Saison & Géolocalisation",
    badge: "Étape 01 : Intelligence Pré-Semis",
    tagline: "Bases de précision avant le premier semis",
    description: "CropCare analyse la chimie des sols (NPK, pH, carbone organique) et les microclimats pour recommander les variétés les plus rentables et résistantes.",
    keyMetrics: [
      { label: "Potentiel de Rendement", value: "+24%" },
      { label: "Économie d'Engrais", value: "18-22%" },
      { label: "Période Idéale de Semis", value: "15 Oct - 05 Nov" }
    ],
    checklist: [
      "Cartographie géolocalisée de fertilité du sol (NPK et oligo-éléments)",
      "Recommandations d'assolement basées sur l'historique de rendement",
      "Sélectionneur dynamique de semences selon salinité et humidité",
      "Validation automatique des aides et carnet de santé des sols"
    ],
    simulator: {
      headline: "Calculateur d'Aptitude des Sols et Variétés",
      defaultSoil: "Limon Argileux Alluvial",
      defaultPh: "6.8",
      defaultNpk: "120:60:40 kg/ha",
      recommendedCrops: ["Blé Dur Sharbati", "Moutarde Pusa-31", "Pois Chiche Semis Direct"]
    }
  },
  {
    step: 2,
    title: "Découvrir (Discover)",
    subtitle: "Calendrier Cultural & Cours du Marché",
    badge: "Étape 02 : Intelligence Marché & Timing",
    tagline: "Anticipez la demande avant de choisir vos cultures",
    description: "Accédez à des calendriers culturaux synchronisés avec les modèles prédictifs des cours sur 1 200+ marchés de gros.",
    keyMetrics: [
      { label: "Marchés Suivis", value: "1 200+ Marchés" },
      { label: "Précision des Cours", value: "91.4%" },
      { label: "Préavis Alertes Parasites", value: "72 Heures" }
    ],
    checklist: [
      "Calendrier de tâches dynamique de la préparation à la récolte",
      "Courbes prédictives des cours à 30, 60 et 90 jours",
      "Alertes météo pour pulvérisations par SMS et WhatsApp",
      "Alertes d'engorgement du marché pour éviter de brader"
    ],
    simulator: {
      headline: "Calendrier des Cours et Arbitrage",
      sampleCrop: "Blé Dur",
      harvestDate: "Avril 2027",
      projectedMandiPrice: "₹2 480 / qtl",
      mspPrice: "₹2 275 / qtl"
    }
  },
  {
    step: 3,
    title: "Associer (Match)",
    subtitle: "Mise en Relation Acheteurs & Contrats Fermes",
    badge: "Étape 03 : Vente Directe aux Industriels",
    tagline: "Supprimez les courtiers avec des salles d'enchères directes",
    description: "Connectez-vous directement avec des minoteries, industriels et exportateurs certifiés. Validez des contrats fermes avant récolte.",
    keyMetrics: [
      { label: "Marge Nette Supplémentaire", value: "+18.5%" },
      { label: "Réseau d'Acheteurs Agréés", value: "850+ Entreprises" },
      { label: "Taux de Défaut Contrat", value: "0.02%" }
    ],
    checklist: [
      "Salles d'enchères inversées pour lots certifiés",
      "Contrats de vente garantis avant récolte avec prix plancher",
      "Vérification de solvabilité et historique de paiement des acheteurs",
      "Grilles normalisées de qualité des grains (Humidité, Protéine)"
    ],
    simulator: {
      headline: "Tableau d'Appels d'Offres Industriels en Direct",
      activeTenders: [
        { buyer: "Division Agro ITC", offer: "₹2 540/qtl", qty: "250 Qtls", terms: "Enlèvement au champ • Séquestre 100%" },
        { buyer: "Adani Wilmar Consumer", offer: "₹2 510/qtl", qty: "500 Qtls", terms: "Livraison quai • T+0 RTGS" },
        { buyer: "BigBasket Direct Ferme", offer: "₹2 580/qtl", qty: "100 Qtls", terms: "Tri Grade A • Paiement Immédiat" }
      ]
    }
  },
  {
    step: 4,
    title: "Coordonner (Coordinate)",
    subtitle: "Transport au Champ & Camions Frigorifiques",
    badge: "Étape 04 : Logistique & Fret Connecté",
    tagline: "Collecte directe au champ sans pertes de manutention",
    description: "Planifiez le transport dès la récolte : camionnettes, camions 10 roues ou caisses frigorifiques sous surveillance GPS continue.",
    keyMetrics: [
      { label: "Pertes de Transport Réduites", value: "À seulement 1.8%" },
      { label: "Délai d'Arrivée Camion", value: "< 45 Mins" },
      { label: "Disponibilité GPS", value: "99.9%" }
    ],
    checklist: [
      "Attribution de véhicules adaptés au tonnage directement au champ",
      "Télématique GPS en direct évitant les pistes rurales dégradées",
      "Suivi de température pour produits horticoles périssables",
      "Bons de pesée électroniques et bordereaux dématérialisés"
    ],
    simulator: {
      headline: "Gestion de Flotte et Suivi Frigorifique",
      vehicleId: "MH-12-AG-9041",
      vehicleType: "Fourgon Frigorifique Isolé 14 pieds",
      tempStatus: "14.2°C • Fraîcheur Optimale",
      eta: "Arrivée à la porte du champ A-1 dans 38 mins"
    }
  },
  {
    step: 5,
    title: "Vendre & Agir (Sell & Act)",
    subtitle: "Pesée Certifiée & Règlement Séquestre Immédiat",
    badge: "Étape 05 : Règlement Séquestre T+0",
    tagline: "Paiement bancaire T+0 dès validation du pont-bascule",
    description: "Vente transparente avec pesons numériques IoT. Les fonds bloqués par l'acheteur sont débloqués immédiatement sur votre compte bancaire.",
    keyMetrics: [
      { label: "Délai de Règlement", value: "T+0 (< 3 minutes)" },
      { label: "Pertes ou Déductions Abusives", value: "0% Garanti" },
      { label: "Protection Bancaire Séquestre", value: "100% Sécurisé" }
    ],
    checklist: [
      "Zéro commission de courtage et zéro réfaction arbitraire",
      "Peson numérique transmettant le poids net directement au smartphone",
      "Paiement bancaire direct instantané (UPI, IMPS, RTGS)",
      "Facture acquittée et plan de régénération des sols pour la saison suivante"
    ],
    simulator: {
      headline: "Simulation de Règlement par Séquestre T+0",
      lotWeight: "150.00 Quintaux",
      settledRate: "₹2 510 / Quintal",
      totalPayout: "₹376 500",
      payoutStatus: "Prêt au versement sur le compte bancaire Punjab National Bank *9042"
    }
  },
  {
    step: 6,
    title: "Suivre (Track)",
    subtitle: "Télémétrie Satellite & Bilan Financier Saisonnier",
    badge: "Étape 06 : Intelligence Post-Récolte",
    tagline: "Des données pour maximiser vos marges futures",
    description: "Bouclez le cycle agronomique : marge nette par hectare, efficacité des intrants, historique NDVI satellitaire et crédits carbone monétisables.",
    keyMetrics: [
      { label: "Hausse de Marge Nette", value: "+32.4% / an" },
      { label: "Résolution Satellite", value: "10m Multispectral" },
      { label: "Revenu Crédits Carbone", value: "₹1 850 / Hectare" }
    ],
    checklist: [
      "Suivi de régénération du carbone organique du sol (SOC)",
      "Bilan financier et compte de résultat parcelle par parcelle",
      "Historique de vigueur végétale NDVI/NDRE Sentinel-2",
      "Émission de crédits carbone certifiés pour pratiques sans labour"
    ],
    simulator: {
      headline: "Analyseur de Vigueur Végétale Sentinel-2",
      parcelId: "Parcelle A-1 (Blé Dur)",
      ndviScore: "0.84 (Vigueur Élevée)",
      carbonCreditYield: "₹2 400 Valeur Vérifiée"
    }
  }
];

export function getEcosystemSteps(lang = 'en') {
  const map = {
    en: rawStepsEn,
    hi: rawStepsHi,
    ta: rawStepsTa,
    fr: rawStepsFr
  };

  const selected = map[lang] || map.en;

  return rawStepsEn.map((baseStep, index) => {
    const loc = selected[index] || {};
    return {
      ...baseStep,
      title: loc.title || baseStep.title,
      subtitle: loc.subtitle || baseStep.subtitle,
      badge: loc.badge || baseStep.badge,
      tagline: loc.tagline || baseStep.tagline,
      description: loc.description || baseStep.description,
      keyMetrics: loc.keyMetrics || baseStep.keyMetrics,
      checklist: loc.checklist || baseStep.checklist,
      simulator: {
        ...baseStep.simulator,
        ...(loc.simulator || {})
      }
    };
  });
}

export const ecosystemSteps = rawStepsEn;
