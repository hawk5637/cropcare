// 18 Comprehensive Feature Pillars of the CropCare Smart Agriculture Platform
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

export const pillarCategories = {
  en: [
    'All',
    'Agronomy & Soil',
    'Operations & Farm',
    'Intelligence & Advisory',
    'Market & Commerce',
    'Logistics & Storage',
    'Finance & Legal'
  ],
  hi: [
    'सभी स्तंभ',
    'मृदा एवं कृषि विज्ञान',
    'खेत संचालन एवं प्रबंधन',
    'AI व वैज्ञानिक सलाह',
    'मंडी व प्रत्यक्ष व्यापार',
    'भंडारण एवं परिवहन',
    'वित्त एवं डिजिटल भुगतान'
  ],
  ta: [
    'அனைத்து தூண்கள்',
    'மண் மற்றும் வேளாண்மை',
    'பண்ணை செயல்பாடுகள்',
    'AI & நிபுணர் ஆலோசனை',
    'சந்தை மற்றும் வர்த்தகம்',
    'சேமிப்பு & தளவாடங்கள்',
    'நிதி மற்றும் எஸ்க்ரோ'
  ],
  fr: [
    'Tous les Piliers',
    'Agronomie & Sols',
    'Opérations & Gestion',
    'Intelligence IA & Conseil',
    'Commerce & Marchés',
    'Logistique & Stockage',
    'Finance & Séquestre'
  ]
};

const rawPillarsEn = [
  {
    id: 1,
    title: "Land & Soil Analysis",
    slug: "land-soil-analysis",
    category: "Agronomy & Soil",
    icon: "globe",
    emoji: "🌍",
    tagline: "Precision Soil Chemistry & Boundary Telemetry",
    easyTagline: "Know Your Soil & Field Health",
    easySummary: "Find out what your soil needs to grow heavy, healthy crops. Test soil nutrients and get clear advice on how much fertilizer or manure to add.",
    detailedSummary: "Complete GIS field polygon boundary mapping, sub-meter GPS soil sample logging, N-P-K-Zn-Fe-pH profiling, and automated e-Soil Health Card compliance.",
    easyBenefits: [
      "Walk field edges once with your phone to map your land",
      "Get a simple report showing if soil is acidic or sweet",
      "Know exactly how much DAP or Urea to buy—stop wasting money",
      "Understand how well your soil holds water during dry weeks"
    ],
    detailedBenefits: [
      "GPS boundary polygon generation with sub-meter GIS coordinates",
      "Automated split-dosage prescription algorithms matching lab test assays",
      "Moisture retention mapping across shallow and deep root zones",
      "Salinity, sodicity, electrical conductivity (EC), and drainage diagnostics"
    ],
    metric: "98.4% Mapping Accuracy",
    actionLabel: "Analyze Plot Soil"
  },
  {
    id: 2,
    title: "Seed & Input Management",
    slug: "seed-input-management",
    category: "Agronomy & Soil",
    icon: "sprout",
    emoji: "🌱",
    tagline: "Certified Germination & Anti-Counterfeit Verification",
    easyTagline: "Guaranteed Original Seeds & Fertilizers",
    easySummary: "Never get cheated by fake seeds or low-grade chemicals. Scan the code on the bag with your phone to verify authenticity before you plant.",
    detailedSummary: "Direct breeder-to-farm supply chain with cryptographic QR verification, laboratory germination rate validation, and temperature-adjusted seed treatment.",
    easyBenefits: [
      "Scan QR code on seed bags to confirm 100% original brand",
      "High germination guarantee—seeds sprout strongly",
      "Buy directly from research universities at fair government rates",
      "Free replant support if seeds fail to germinate as promised"
    ],
    detailedBenefits: [
      "Blockchain-authenticated QR codes for all seed and agrochemical batches",
      "Germination viability models adjusted for local soil temperature and moisture",
      "Direct procurement from ICAR breeders, state universities & verified labs",
      "Automated germination insurance warranty and lot recall alerts"
    ],
    metric: "0% Counterfeit Input Guarantee",
    actionLabel: "Verify Input Batch"
  },
  {
    id: 3,
    title: "Crop Planning & Calendars",
    slug: "crop-planning-calendars",
    category: "Operations & Farm",
    icon: "calendar-days",
    emoji: "📅",
    tagline: "Dynamic Seasonal Timelines & Task Orchestration",
    easyTagline: "Day-by-Day Farming Guide",
    easySummary: "Get a clear daily calendar telling you when to prepare land, sow seeds, water, weed, and harvest. Automatically updates if it rains.",
    detailedSummary: "Predictive phenological growth stage modeling based on cumulative Growing Degree Days (GDD), labor allocation logs, and weather-shifting task alerts.",
    easyBenefits: [
      "Daily SMS reminders telling you what job to do in the field",
      "If rain is coming, tasks like spraying are automatically rescheduled",
      "Rotate crops easily each season so your land stays fertile",
      "Know your harvest date weeks in advance to prepare buyers"
    ],
    detailedBenefits: [
      "Dynamic weather-shifting task alerts (postpones spray if rain/wind occurs)",
      "Multi-plot rotation planning preventing pathogen carryover and soil exhaustion",
      "Labor allocation schedule with automated worker attendance SMS",
      "Harvest readiness index based on cumulative Growing Degree Days (GDD)"
    ],
    metric: "Day-by-Day Task Precision",
    actionLabel: "Generate Crop Calendar"
  },
  {
    id: 4,
    title: "AI Farm Assistant",
    slug: "ai-farm-assistant",
    category: "Intelligence & Advisory",
    icon: "bot",
    emoji: "🤖",
    tagline: "24/7 Gemini-Powered Voice & Vision Agronomist",
    easyTagline: "Your Personal AI Crop Doctor",
    easySummary: "Take a picture of any yellowing or damaged leaf with your phone. The AI tells you the disease in 2 seconds and how to fix it in simple words.",
    detailedSummary: "Multimodal Gemini Vision pathology inference engine trained on 250,000+ plant leaf datasets, providing instant localized bio-chemical treatment recipes.",
    easyBenefits: [
      "Snap a photo of any sick leaf for instant disease answer",
      "Ask questions by speaking in your regional mother tongue",
      "Clear dosage instructions: grams per pump or kg per acre",
      "Works 24 hours a day, even in the middle of the night"
    ],
    detailedBenefits: [
      "Point phone camera at stressed foliage for instant pathogen classification",
      "Voice query support in 12 regional languages & native farm dialects",
      "Synthesizes soil test, current weather, and pest outbreaks simultaneously",
      "Instant dosage guidance in local units (grams/pump, kg/bigha, ltr/acre)"
    ],
    metric: "< 2 Sec Response Time",
    actionLabel: "Ask CropCare AI"
  },
  {
    id: 5,
    title: "Water & Irrigation Tracking",
    slug: "water-irrigation-tracking",
    category: "Operations & Farm",
    icon: "droplets",
    emoji: "💧",
    tagline: "Smart Drip Automation & Evapotranspiration Models",
    easyTagline: "Save Water, Never Under-Water",
    easySummary: "Know exactly when your crops are thirsty before leaves wilt. Turn drip irrigation pumps on or off straight from your phone.",
    detailedSummary: "IoT wireless soil matric potential probes, canal schedule sync, groundwater level monitoring, and automated solenoid drip valve control saving 42% water.",
    easyBenefits: [
      "See soil moisture percentage like a battery gauge on your phone",
      "Start or stop your water pump remotely without walking to the field",
      "Save electricity and water while giving crops the exact moisture they need",
      "Get alerted when canal water is scheduled for release in your village"
    ],
    detailedBenefits: [
      "Evapotranspiration (ET0) calculations based on solar radiation & wind",
      "Remote solar pump and drip irrigation valve trigger from mobile app",
      "Subsurface soil moisture alert before crop stress wilting point occurs",
      "Canal release schedule notifications from regional water irrigation boards"
    ],
    metric: "Up to 42% Water Saved",
    actionLabel: "Check Irrigation Status"
  },
  {
    id: 6,
    title: "Fertilizer & Nutrient Guidance",
    slug: "fertilizer-nutrient-guidance",
    category: "Agronomy & Soil",
    icon: "flask-conical",
    emoji: "🧪",
    tagline: "Targeted Fertigation & Micro-Nutrient Balancing",
    easyTagline: "Feed Crops What They Need",
    easySummary: "Stop guessing fertilizer bags. Get custom dosage guides for every crop stage to grow bigger grains and save money on unnecessary chemicals.",
    detailedSummary: "Stage-specific NPK split dosages, micronutrient foliar spray advisories, bio-fertilizer consortia recipes, and soil acidity neutralization plans.",
    easyBenefits: [
      "Exact schedule for when to apply fertilizer at sowing, growing, and flowering",
      "Avoid chemical burning on leaves with safe mixing charts",
      "Recipes for making organic vermicompost and liquid jeevamrut at home",
      "Save up to ₹2,500 per acre by cutting out unneeded fertilizers"
    ],
    detailedBenefits: [
      "Custom split-dose schedule tailored to vegetative vs flowering stages",
      "Foliar spray compatibility charts to prevent tank mix clumping",
      "Organic compost and vermicompost ratio calculators",
      "Direct delivery orders for urea, DAP, MOP, and zinc chelate"
    ],
    metric: "25% Reduced Chemical Cost",
    actionLabel: "Calculate Fertilizer Dose"
  },
  {
    id: 7,
    title: "Pest & Disease Early Warning",
    slug: "pest-disease-early-warning",
    category: "Intelligence & Advisory",
    icon: "shield-alert",
    emoji: "🛡️",
    tagline: "Geo-Fenced Infestation Radar & Proactive Defense",
    easyTagline: "3-Day Early Warning Before Pests Strike",
    easySummary: "If pests attack a farm 5 km away, CropCare warns you 72 hours early so you can protect your crop before any damage happens.",
    detailedSummary: "Epidemiological spore models, automated pheromone trap telemetry, and neighbor-farm pest outbreak radars giving 72-hour warning.",
    easyBenefits: [
      "Get SMS alerts when locusts, armyworms, or blight are spotted nearby",
      "Use safe organic neem sprays first before spending money on poisons",
      "Prevent pests from becoming resistant to medicines",
      "Protect your entire harvest with timely action"
    ],
    detailedBenefits: [
      "Community pest radar warns when fall armyworm or rust is 5 km away",
      "Bio-control beneficial insect and neem oil formulations",
      "Chemical rotation guidance to prevent pesticide resistance",
      "Drone spraying prescription maps for targeted hot-spot application"
    ],
    metric: "72h Outbreak Warning Lead",
    actionLabel: "Scan Disease Photo"
  },
  {
    id: 8,
    title: "Weather Forecasting",
    slug: "weather-forecasting",
    category: "Intelligence & Advisory",
    icon: "cloud-sun",
    emoji: "⛅",
    tagline: "Hyper-Local Radar & Spray Window Feasibility",
    easyTagline: "Accurate Weather for Your Village",
    easySummary: "Check if it will rain, blow strong winds, or frost over your farm today. Know the exact hours when it is safe to spray medicine.",
    detailedSummary: "Farmgate 1km-resolution meteorological forecasting, hourly rain probability, wind speed for spraying, frost alerts, and hail warnings.",
    easyBenefits: [
      "Know if rain will wash away your spray medicine today",
      "Alerts for unexpected hailstorms or heatwaves",
      "Check wind speed before spraying to avoid chemicals drifting into your face",
      "Plan harvesting when sunny days are guaranteed"
    ],
    detailedBenefits: [
      "Hourly spray feasibility index (wind speed, droplet drift, rain risk)",
      "Extreme weather warning for unseasonal rainfall, hailstorms, heatwaves",
      "Solar radiation and UV index tracking for greenhouse vent management",
      "Historical rainfall comparison against 30-year agro-climatic norms"
    ],
    metric: "1 km Hyper-Local Resolution",
    actionLabel: "View Radar Forecast"
  },
  {
    id: 9,
    title: "Machinery & Labour Coordination",
    slug: "machinery-labour-coordination",
    category: "Operations & Farm",
    icon: "tractor",
    emoji: "🚜",
    tagline: "Uber-Style Harvester & Drone Fleet Dispatch",
    easyTagline: "Rent Tractors, Harvesters & Drones Easily",
    easySummary: "Book combine harvesters, laser levellers, or drone sprayers like booking a taxi. Fixed hourly rates, verified drivers, no overcharging.",
    detailedSummary: "Shared economy equipment booking: combine harvesters, laser land levellers, rotavators, and certified agricultural drone pilots.",
    easyBenefits: [
      "No need to take loans to buy expensive machinery—just rent on demand",
      "Book combine harvesters at harvest peak without begging agents",
      "Hire certified agricultural drone sprayers for only ₹380 per acre",
      "Find reliable local farm labour crews when you need extra hands"
    ],
    detailedBenefits: [
      "GPS tracking of booked tractors, balers, and threshers to your farm",
      "Transparent hourly or per-acre rental tariffs with zero surge pricing",
      "Verified local farm labour crews with group attendance and wage logs",
      "Custom implement sharing between neighboring farming cooperatives"
    ],
    metric: "35% Lower Capex on Implements",
    actionLabel: "Book Equipment"
  },
  {
    id: 10,
    title: "Expert & Agronomist Support",
    slug: "expert-agronomist-support",
    category: "Intelligence & Advisory",
    icon: "stethoscope",
    emoji: "👨‍🌾",
    tagline: "Certified ICAR & State Agri University Tele-Consults",
    easyTagline: "Video Call Agricultural Doctors for Free",
    easySummary: "Talk directly to verified university scientists and soil doctors over phone or video call. Get honest, unbiased medicine prescriptions.",
    detailedSummary: "Direct video call and field-visit booking with verified agronomists, soil scientists, plant pathologists, and horticulture specialists.",
    easyBenefits: [
      "Free 1-on-1 video call with certified agricultural doctors",
      "Get a signed prescription you can show at any agri-shop",
      "Unbiased advice: doctors have no interest in selling you extra poison",
      "Community forum with answers to thousands of real farmer questions"
    ],
    detailedBenefits: [
      "1-on-1 scheduled video call with crop-specific agronomy doctor",
      "Prescription upload with certified digital signature and chemist reference",
      "Dedicated agronomist assigned to high-value horticulture & polyhouses",
      "Community forum with 50,000+ peer-reviewed farmer Q&As"
    ],
    metric: "500+ Verified Agronomists",
    actionLabel: "Connect to Agronomist"
  },
  {
    id: 11,
    title: "Farm Management Dashboard",
    slug: "farm-management-dashboard",
    category: "Operations & Farm",
    icon: "layout-dashboard",
    emoji: "📊",
    tagline: "End-to-End Enterprise Farm Operations at a Glance",
    easyTagline: "Your Farm on One Screen",
    easySummary: "Keep track of all your plots, how much money you spent on seed and fertilizer, and how much profit you will make at harvest.",
    detailedSummary: "Centralized command center tracking plot boundaries, live IoT sensor feeds, active labour, equipment utilization, and crop economics.",
    easyBenefits: [
      "See all your fields and crops clearly on an interactive map",
      "Track your expenses so you always know your exact profit",
      "Get notified if any field needs watering or weeding",
      "Download farm reports for easy bank Kisan Credit Card (KCC) loans"
    ],
    detailedBenefits: [
      "Multi-plot map interface with live vegetative color status",
      "Cost-of-production tracker per quintal and per acre",
      "Real-time alerts banner for irrigation, weather anomalies, and bids",
      "Exportable financial ledger for KCC loan renewals and crop insurance"
    ],
    metric: "Single Unified Cockpit",
    actionLabel: "Open Live Dashboard"
  },
  {
    id: 12,
    title: "Market Intelligence & Live Prices",
    slug: "market-intelligence-live-prices",
    category: "Market & Commerce",
    icon: "trending-up",
    emoji: "📈",
    tagline: "Real-Time APMC Mandi Tickers & AI Price Predictions",
    easyTagline: "Today's Mandi Rates in Your Pocket",
    easySummary: "Never sell blindly again. Check today's real opening auction rates in all nearby mandis and know if prices will go up next week.",
    detailedSummary: "Instant live spot rates across 1,200+ Mandis with volume arrivals, modal prices, 30-day trends, and inter-mandi transport arbitrage scouts.",
    easyBenefits: [
      "Check daily rates for Wheat, Soybean, Mustard, Rice, Onion, Tomato",
      "See which nearby mandi is paying the highest price today",
      "Get daily morning WhatsApp messages with today's opening mandi bids",
      "Know if you should sell today or wait a week for higher prices"
    ],
    detailedBenefits: [
      "Live commodity tickers for grains, pulses, oilseeds, spices, vegetables",
      "Arbitrage calculator: calculates whether trucking to a distant Mandi yields more net profit",
      "Historic 5-year price seasonality curves to time harvest sales",
      "Daily WhatsApp and SMS broadcast of opening auction prices"
    ],
    metric: "1,200+ Live Mandis",
    actionLabel: "Explore Live Mandis"
  },
  {
    id: 13,
    title: "Buyer Management & Direct Sales",
    slug: "buyer-management-direct-sales",
    category: "Market & Commerce",
    icon: "handshake",
    emoji: "🤝",
    tagline: "Sell Directly to Food Processors, Exporters & Retailers",
    easyTagline: "Direct Sale to Big Buyers (Zero Middlemen)",
    easySummary: "Sell your crop directly to verified flour mills, oil expellers, and exporters. They bid against each other so you get the highest price.",
    detailedSummary: "Eliminate middlemen through reverse auctions, institutional bulk purchasing tenders, and pre-harvest forward contract agreements.",
    easyBenefits: [
      "Cut out commission agents who take 15% of your hard-earned money",
      "Verified corporate buyers like ITC, Adani, and BigBasket bid for your crop",
      "Agree on price and quality before harvest so you have guaranteed sales",
      "Buyers collect the grain straight from your farm gate"
    ],
    detailedBenefits: [
      "Verified corporate buyer directory: flour mills, oil expellers, retail chains",
      "Post crop lots with moisture test, purity certificates, and photos",
      "Competitive live bidding room ensuring highest market clearance price",
      "Legal forward contracts with guaranteed minimum price floor"
    ],
    metric: "15-25% Higher Realized Price",
    actionLabel: "List Produce for Sale"
  },
  {
    id: 14,
    title: "Storage & Warehouse Solutions",
    slug: "storage-warehouse-solutions",
    category: "Logistics & Storage",
    icon: "warehouse",
    emoji: "📦",
    tagline: "Certified Scientific Silos & Electronic Warehouse Receipts",
    easyTagline: "Safe Grain Storage & Emergency Cash",
    easySummary: "Store your grain in clean, government-certified silos when prices are low. Get instant bank loans against your stored grain so you never have to sell in distress.",
    detailedSummary: "Book verified WDRA-accredited dry grain warehouses, cold storages, and ripening chambers with negotiable electronic warehouse receipts (e-NWR).",
    easyBenefits: [
      "Store grain safely without rats, fungus, or rotting",
      "Get up to 75% loan against stored grain on the spot for household needs",
      "Wait 2-3 months until market prices rise, then sell for higher profits",
      "Government-backed electronic warehouse receipts protect your rights"
    ],
    detailedBenefits: [
      "Instant pledge financing against stored produce up to 75% market value",
      "Real-time temperature, carbon dioxide, and humidity sensor logging",
      "Pest fumigation, rodent control, and hermetic bag storage options",
      "Prevent distress selling at harvest glut; sell when prices peak"
    ],
    metric: "WDRA Accredited Network",
    actionLabel: "Find Storage Facility"
  },
  {
    id: 15,
    title: "Logistics & Transport Tracking",
    slug: "logistics-transport-tracking",
    category: "Logistics & Storage",
    icon: "truck",
    emoji: "🚚",
    tagline: "Farmgate Pickup, GPS Fleets & Cold-Chain Telematics",
    easyTagline: "Truck Pickup from Your Farm Gate",
    easySummary: "Book mini-trucks, tractors, or cold-vans right to your farm gate. Track the driver on your phone and ensure your fruits and vegetables never spoil in heat.",
    detailedSummary: "Dedicated agricultural freight network: farmgate pickup mini-trucks, 10-wheelers, and reefer containers with full GPS journey tracking.",
    easyBenefits: [
      "Trucks come straight to your farm—no carrying heavy bags on carts",
      "Cold-chain vans keep tomatoes and vegetables fresh in the summer",
      "Track your shipment live on your phone until it reaches the factory",
      "Transit insurance protects your goods if an accident happens"
    ],
    detailedBenefits: [
      "Automated route optimization avoiding bad rural roads and delays",
      "IoT temperature sensors inside reefer trucks transmitting every 60 seconds",
      "Driver KYC verification and in-transit cargo insurance included",
      "Electronic toll and border crossing e-Way bill compliance handled"
    ],
    metric: "99.8% On-Time Farmgate Pickup",
    actionLabel: "Track Active Shipments"
  },
  {
    id: 16,
    title: "Secure Digital Payments & Escrow",
    slug: "secure-digital-payments",
    category: "Finance & Legal",
    icon: "credit-card",
    emoji: "💳",
    tagline: "T+0 Settlement, Buyer Escrow & Zero Deductions",
    easyTagline: "Instant Payment Straight to Your Bank (T+0)",
    easySummary: "Buyer must deposit the money before loading grain. The moment your bags are weighed on the electronic scale, the money reaches your bank account instantly.",
    detailedSummary: "End-to-end banking integration: buyer deposits funds into secure escrow before trucks load; instant release upon digital weighbridge signoff.",
    easyBenefits: [
      "Zero commission cuts, no unfair weight deductions, no delay",
      "Money credited to your bank account via UPI/IMPS before the truck leaves",
      "Safe escrow bank vault guarantees buyers can never run away without paying",
      "Clear digital receipt on your phone for tax and record keeping"
    ],
    detailedBenefits: [
      "Zero commission or unfair weight deduction practices (Katta / Chhant)",
      "Instant direct bank transfer via Aadhaar-linked UPI, NEFT, and IMPS",
      "Flexible micro-credit lines for seasonal seed & fertilizer purchases",
      "Downloadable GST-compliant sales receipt and TDS certification"
    ],
    metric: "100% Escrow Backed Payout",
    actionLabel: "View Settlement Vault"
  },
  {
    id: 17,
    title: "After-Selling Support & Analytics",
    slug: "after-selling-analytics",
    category: "Finance & Legal",
    icon: "pie-chart",
    emoji: "📊",
    tagline: "Seasonal Profitability Audits & Carbon Credit Claims",
    easyTagline: "End-of-Season Profit Summary",
    easySummary: "See exactly how much money you made this season, which fields gave the highest profit, and earn extra income by adopting organic farming practices.",
    detailedSummary: "Comprehensive post-harvest debriefs: net profit per acre, fertilizer efficiency scores, input ROI, and carbon credit monetisation for green practices.",
    easyBenefits: [
      "Clear summary showing total income minus costs = your exact net profit",
      "Know which crop variety made you the most money",
      "Earn extra cash from carbon credits if you use natural farming methods",
      "Build a strong credit score to get cheaper bank loans next season"
    ],
    detailedBenefits: [
      "Season-over-season revenue, expense, and yield variance reports",
      "Soil nutrient depletion balance sheet to prepare for following crop",
      "Accredited carbon sequestration verification for zero-tillage / biochar",
      "Automated credit score building for lower-interest future farm loans"
    ],
    metric: "+38% Sustained Profit Growth",
    actionLabel: "View Season Analytics"
  },
  {
    id: 18,
    title: "Accessibility & Multi-language Support",
    slug: "accessibility-multilingual",
    category: "Intelligence & Advisory",
    icon: "languages",
    emoji: "🌐",
    tagline: "Voice-First, Offline-Ready & Regional Dialects",
    easyTagline: "Use in Your Own Language & Voice",
    easySummary: "Use CropCare in Hindi, Tamil, French, or English. Speak your questions instead of typing. Works even in bright sunlight and with weak phone network.",
    detailedSummary: "Engineered for grassroots rural accessibility: 12 regional languages, high-contrast daylight mode, voice-guided navigation, and SMS fallbacks.",
    easyBenefits: [
      "Available in your regional language: English, हिन्दी, தமிழ், Français",
      "Just speak into your phone—no need to type complex spellings",
      "Big, clear buttons that are easy to read outside in the bright sun",
      "Save notes and crop photos even when you have no internet signal"
    ],
    detailedBenefits: [
      "Full voice interface: speak questions in local rural dialects",
      "Offline sync: records field notes and sensor readings without 4G/5G",
      "SMS & automated IVR phone call alerts for feature phone users",
      "WCAG 2.1 AAA high-contrast styling for outdoor sunlight readability"
    ],
    metric: "12+ Regional Languages",
    actionLabel: "Change Language"
  }
];

// Localized Hindi Pillars (18 Pillars)
const rawPillarsHi = [
  {
    id: 1,
    title: "मृदा एवं भूमि विश्लेषण",
    category: "मृदा एवं कृषि विज्ञान",
    tagline: "सटीक मृदा रसायन व भू-सीमा टेलीमेट्री",
    easyTagline: "खेत की मिट्टी व स्वास्थ्य की पूरी जानकारी",
    easySummary: "अपनी मिट्टी के पोषक तत्वों की जांच करें। खाद या उर्वरक की सही मात्रा जानें ताकि पैदावार बढ़े और अनावश्यक खर्च से बचत हो।",
    detailedSummary: "जीआईएस आधारित भू-सीमा मैपिंग, सब-मीटर जीपीएस मृदा नमूना विश्लेषण, एन-पी-के-पीएच प्रोफाइलिंग एवं डिजिटल मृदा स्वास्थ्य कार्ड अनुपालन।",
    metric: "98.4% मैपिंग सटीकता",
    actionLabel: "मिट्टी की जांच करें"
  },
  {
    id: 2,
    title: "प्रमाणित बीज व इनपुट प्रबंधन",
    category: "मृदा एवं कृषि विज्ञान",
    tagline: "प्रमाणित अंकुरण एवं नकली उत्पाद रोधी सत्यापन",
    easyTagline: "असली बीज व खाद की 100% गारंटी",
    easySummary: "नकली बीज या खराब कीटनाशकों से बचें। बुवाई से पहले अपने फोन से पैकेट पर छपे क्यूआर कोड को स्कैन करके असली होने की पुष्टि करें।",
    detailedSummary: "क्रिप्टोग्राफिक क्यूआर सत्यापन के साथ सीधा अनुसंधान केंद्र से खेत तक इनपुट वितरण, प्रयोगशाला अंकुरण दर परीक्षण और बीज उपचार।",
    metric: "0% नकली इनपुट गारंटी",
    actionLabel: "बीज बैच जांचें"
  },
  {
    id: 3,
    title: "फसल योजना व कैलेंडर",
    category: "खेत संचालन एवं प्रबंधन",
    tagline: "गतिशील मौसमी समय-सारणी व कार्य समन्वय",
    easyTagline: "दिन-प्रतिदिन का आसान खेती गाइड",
    easySummary: "खेत की तैयारी, बुवाई, सिंचाई, निराई और कटाई के लिए एक स्पष्ट दैनिक कैलेंडर पाएं। बारिश होने पर यह अपने आप समय बदल देता है।",
    detailedSummary: "संचयी ग्रोइंग डिग्री डेज (GDD) पर आधारित पादप विकास मॉडलिंग, श्रमिक आवंटन लॉग एवं मौसम अनुसार कार्य चेतावनी।",
    metric: "दैनिक कार्य सटीकता",
    actionLabel: "फसल कैलेंडर बनाएं"
  },
  {
    id: 4,
    title: "AI किसान सहायक",
    category: "AI व वैज्ञानिक सलाह",
    tagline: "24/7 जेमिनी आधारित वॉइस व विज़न कृषि विशेषज्ञ",
    easyTagline: "आपका निजी AI फसल डॉक्टर",
    easySummary: "खराब या पीली पड़ी पत्ती की फोटो खींचें। AI केवल 2 सेकंड में बीमारी का नाम और सरल घरेलू या जैविक इलाज बताएगा।",
    detailedSummary: "2,50,000+ पत्तियों के डेटासेट पर प्रशिक्षित जेमिनी विज़न पैथोलॉजी मॉडल, जो तत्काल स्थानीयकृत उपचार प्रोटोकॉल प्रदान करता है।",
    metric: "< 2 सेकंड में उत्तर",
    actionLabel: "AI से सवाल पूछें"
  },
  {
    id: 5,
    title: "स्मार्ट ड्रिप सिंचाई ट्रैकिंग",
    category: "खेत संचालन एवं प्रबंधन",
    tagline: "स्मार्ट ड्रिप ऑटोमेशन व वाष्पोत्सर्जन मॉडल",
    easyTagline: "पानी व बिजली बचाएं, फसल को सही पानी दें",
    easySummary: "पत्ते मुरझाने से पहले जानें कि फसल को कब पानी चाहिए। अपने मोबाइल से ड्रिप सिंचाई मोटर चालू या बंद करें।",
    detailedSummary: "IoT वायरलेस मृदा नमी सेंसर, नहर रोस्टर समन्वय, भूजल स्तर ट्रैकिंग एवं स्वचालित सोलेनोइड वाल्व नियंत्रण, 42% तक पानी की बचत।",
    metric: "42% तक पानी की बचत",
    actionLabel: "सिंचाई स्थिति देखें"
  },
  {
    id: 6,
    title: "खाद व पोषक तत्व सलाह",
    category: "मृदा एवं कृषि विज्ञान",
    tagline: "लक्षित फर्टिगेशन व सूक्ष्म पोषक संतुलन",
    easyTagline: "फसल को केवल जरूरत के अनुसार पोषण दें",
    easySummary: "अंदाजे से खाद डालना बंद करें। बुवाई, बढ़वार और फूल आने के समय के अनुसार सही खुराक चार्ट पाएं और पैसे बचाएं।",
    detailedSummary: "फसल अवस्था अनुसार एनपीके विभाजन खुराक, पर्णीय स्प्रे फॉर्मूलेशन, जैव उर्वरक जीवाणु मिश्रण एवं मृदा सुधारक चार्ट।",
    metric: "25% रासायनिक खर्च बचत",
    actionLabel: "खाद की मात्रा निकालें"
  },
  {
    id: 7,
    title: "कीट व रोग पूर्व चेतावनी",
    category: "AI व वैज्ञानिक सलाह",
    tagline: "क्षेत्रीय संक्रमण रडार एवं अग्रिम सुरक्षा",
    easyTagline: "कीट हमले से 3 दिन पहले चेतावनी",
    easySummary: "यदि 5 किमी दूर किसी खेत में कीट हमला हुआ है, तो क्रॉपोरा आपको 72 घंटे पहले सचेत कर देता है ताकि आप पहले ही बचाव कर सकें।",
    detailedSummary: "महामारी बीजाणु मॉडल, स्वचालित फेरोमोन ट्रैप टेलीमेट्री और पड़ोसी खेतों के कीट रडार से 72 घंटे पहले सटीक चेतावनी।",
    metric: "72 घंटे पूर्व चेतावनी",
    actionLabel: "पत्ती रोग स्कैन करें"
  },
  {
    id: 8,
    title: "सटीक मौसम पूर्वानुमान",
    category: "AI व वैज्ञानिक सलाह",
    tagline: "अति-स्थानीय रडार एवं सुरक्षित छिड़काव खिड़की",
    easyTagline: "आपके गांव का सटीक मौसम अनुमान",
    easySummary: "जानें कि आज बारिश होगी या तेज हवा चलेगी। कीटनाशक या खाद का छिड़काव करने के लिए सुरक्षित घंटों की जानकारी पाएं।",
    detailedSummary: "खेत स्तर पर 1 किमी रिज़ॉल्यूशन का मौसम पूर्वानुमान, प्रति घंटा वर्षा संभावना, छिड़काव हेतु हवा की गति, पाला व ओलावृष्टि अलर्ट।",
    metric: "1 किमी स्थानीय रिज़ॉल्यूशन",
    actionLabel: "मौसम रडार देखें"
  },
  {
    id: 9,
    title: "मशीनरी व ड्रोन किराया",
    category: "खेत संचालन एवं प्रबंधन",
    tagline: "कंबाइन हार्वेस्टर व ड्रोन फ्लीट की आसान बुकिंग",
    easyTagline: "ट्रैक्टर, हार्वेस्टर व ड्रोन आसानी से किराए पर लें",
    easySummary: "टैक्सी की तरह कंबाइन हार्वेस्टर या स्प्रेयर ड्रोन बुक करें। निश्चित प्रति एकड़ दर, सत्यापित चालक और बिना किसी बिचौलिए के।",
    detailedSummary: "सहकारी कृषि उपकरण बुकिंग: कंबाइन हार्वेस्टर, लेजर लैंड लेवलर, रोटावेटर और डीजीसीए प्रमाणित कृषि ड्रोन पायलट।",
    metric: "35% कम मशीनरी खर्च",
    actionLabel: "उपकरण बुक करें"
  },
  {
    id: 10,
    title: "विशेषज्ञ कृषि वैज्ञानिक सलाह",
    category: "AI व वैज्ञानिक सलाह",
    tagline: "ICAR व कृषि विश्वविद्यालय वैज्ञानिकों से वीडियो परामर्श",
    easyTagline: "कृषि डॉक्टरों से मुफ्त वीडियो कॉल पर बात करें",
    easySummary: "सरकारी कृषि वैज्ञानिकों और मृदा विशेषज्ञों से फोन या वीडियो कॉल पर सीधी सलाह लें। सही और निष्पक्ष दवा का पर्चा पाएं।",
    detailedSummary: "प्रमाणित कृषि वैज्ञानिकों, पादप रोग विशेषज्ञों और बागवानी विशेषज्ञों के साथ 1-ऑन-1 वीडियो कंसल्टेशन एवं डिजिटल हस्ताक्षर युक्त पर्चा।",
    metric: "500+ सत्यापित कृषि वैज्ञानिक",
    actionLabel: "वैज्ञानिक से जुड़ें"
  },
  {
    id: 11,
    title: "एकीकृत फार्म डैशबोर्ड",
    category: "खेत संचालन एवं प्रबंधन",
    tagline: "संपूर्ण कृषि परिचालन एक ही स्क्रीन पर",
    easyTagline: "आपका पूरा खेत एक मोबाइल स्क्रीन पर",
    easySummary: "अपने सभी खेतों, बीज-खाद के खर्च और कटाई पर मिलने वाले मुनाफे का पूरा हिसाब-किताब आसानी से रखें।",
    detailedSummary: "केंद्रीकृत नियंत्रण कक्ष: खेत सीमाएं, लाइव IoT सेंसर डेटा, कार्यरत श्रमिक, उपकरण उपयोग और प्रति क्विंटल उत्पादन लागत।",
    metric: "एकल एकीकृत कॉकपिट",
    actionLabel: "लाइव डैशबोर्ड खोलें"
  },
  {
    id: 12,
    title: "लाइव मंडी भाव व विश्लेषण",
    category: "मंडी व प्रत्यक्ष व्यापार",
    tagline: "1200+ मंडियों के लाइव भाव व AI मूल्य पूर्वानुमान",
    easyTagline: "आज के ताजा मंडी भाव आपकी जेब में",
    easySummary: "बिना जाने कभी फसल न बेचें। आस-पास की सभी मंडियों के आज के वास्तविक बोली भाव देखें और जानें कि अगले हफ्ते दाम बढ़ेंगे या नहीं।",
    detailedSummary: "1,200+ मंडियों के वास्तविक लाइव स्पॉट भाव, दैनिक आवक, मॉडल मूल्य, 30-दिवसीय मूल्य रुझान और अंतर-मंडी परिवहन आर्बिट्राज।",
    metric: "1,200+ लाइव मंडियां",
    actionLabel: "लाइव मंडी देखें"
  },
  {
    id: 13,
    title: "सीधी खरीदार बिक्री",
    category: "मंडी व प्रत्यक्ष व्यापार",
    tagline: "फ्लोर मिलों, निर्यातकों व कंपनियों को सीधी बिक्री",
    easyTagline: "बड़े खरीदारों को सीधी बिक्री (बिचौलिया मुक्त)",
    easySummary: "अपनी फसल आटा मिलों, तेल एक्सपेलरों और बड़ी कंपनियों को सीधे बेचें। वे आपस में बोली लगाते हैं जिससे आपको सबसे अधिक दाम मिलता है।",
    detailedSummary: "बिचौलियों और आढ़तियों को हटाकर रिवर्स नीलामी, संस्थागत थोक खरीद निविदाएं और फसल पूर्व न्यूनतम मूल्य अनुबंध।",
    metric: "15-25% अधिक शुद्ध आय",
    actionLabel: "फसल बिक्री के लिए जोड़ें"
  },
  {
    id: 14,
    title: "सुरक्षित भंडारण व वेयरहाउस",
    category: "भंडारण एवं परिवहन",
    tagline: "प्रमाणित साइलो एवं इलेक्ट्रॉनिक वेयरहाउस रसीद (e-NWR)",
    easyTagline: "सुरक्षित अनाज भंडारण व तत्काल बैंक लोन",
    easySummary: "मंडी में भाव कम होने पर अपना अनाज सुरक्षित सरकारी वेयरहाउस में रखें। रखे अनाज पर तत्काल 75% तक बैंक लोन पाएं।",
    detailedSummary: "WDRA मान्यता प्राप्त ड्राई साइलो, कोल्ड स्टोरेज और राइपनिंग चैंबर बुकिंग, हस्तांतरणीय इलेक्ट्रॉनिक वेयरहाउस रसीद (e-NWR) के साथ।",
    metric: "WDRA मान्यता प्राप्त नेटवर्क",
    actionLabel: "वेयरहाउस खोजें"
  },
  {
    id: 15,
    title: "खेत से परिवहन ट्रैकिंग",
    category: "भंडारण एवं परिवहन",
    tagline: "खेत से लोडिंग, जीपीएस वाहन व कोल्ड-चेन टेलीमैटिक्स",
    easyTagline: "खेत के किनारे से सीधी ट्रक लोडिंग",
    easySummary: "छोटा हाथी, ट्रैक्टर ट्रॉली या वातानुकूलित वैन सीधे अपने खेत पर मंगाएं। मोबाइल पर वाहन को ट्रैक करें और फल-सब्जियों को खराब होने से बचाएं।",
    detailedSummary: "समर्पित कृषि मालवाहक नेटवर्क: खेत से लोडिंग, रीफर कंटेनर, लाइव जीपीएस रूट मॉनिटरिंग और 60-सेकंड इन-ट्रांजिट तापमान टेलीमेट्री।",
    metric: "99.8% समय पर खेत पिकअप",
    actionLabel: "सक्रिय वाहन ट्रैक करें"
  },
  {
    id: 16,
    title: "सुरक्षित डिजिटल एस्क्रो भुगतान",
    category: "वित्त एवं डिजिटल भुगतान",
    tagline: "T+0 तत्काल निपटान, बैंक एस्क्रो सुरक्षा व शून्य कटौती",
    easyTagline: "कांटा तौलते ही खाते में सीधा भुगतान (T+0)",
    easySummary: "गाड़ी में माल भरने से पहले खरीदार बैंक में पैसा जमा करता है। इलेक्ट्रॉनिक कांटे पर तौल होते ही पूरा पैसा तुरंत आपके बैंक खाते में पहुंच जाता है।",
    detailedSummary: "पूर्ण बैंकिंग एकीकरण: लोडिंग पूर्व एस्क्रो सुरक्षा जमा, इलेक्ट्रॉनिक वे-ब्रिज वजन सत्यापन के साथ तत्काल UPI/RTGS T+0 भुगतान।",
    metric: "100% एस्क्रो सुरक्षित भुगतान",
    actionLabel: "एस्क्रो वॉल्ट देखें"
  },
  {
    id: 17,
    title: "बिक्री उपरांत विश्लेषण व कार्बन क्रेडिट",
    category: "वित्त एवं डिजिटल भुगतान",
    tagline: "मौसमी लाभप्रदता ऑडिट एवं कार्बन क्रेडिट आय",
    easyTagline: "सीज़न का पूरा मुनाफा व बचत रिपोर्ट",
    easySummary: "देखें कि इस मौसम में आपको कुल कितना शुद्ध मुनाफा हुआ। प्राकृतिक खेती अपनाकर अतिरिक्त कार्बन क्रेडिट आय अर्जित करें।",
    detailedSummary: "कटाई उपरांत विस्तृत समीक्षा: प्रति एकड़ शुद्ध लाभ, उर्वरक उपयोग दक्षता, इनपुट रिटर्न एवं शून्य जुताई प्रथाओं से कार्बन क्रेडिट मुद्रीकरण।",
    metric: "+38% निरंतर मुनाफा वृद्धि",
    actionLabel: "सीज़न रिपोर्ट देखें"
  },
  {
    id: 18,
    title: "ग्रामीण बहुभाषी व वॉइस एक्सेस",
    category: "AI व वैज्ञानिक सलाह",
    tagline: "वॉइस-फर्स्ट, ऑफलाइन मोड व 12 स्थानीय भाषाएं",
    easyTagline: "अपनी भाषा में बोलकर आसानी से चलाएं",
    easySummary: "क्रॉपोरा को हिंदी, तमिल, फ्रेंच या अंग्रेजी में चलाएं। लिखने की जरूरत नहीं, बस बोलकर सवाल पूछें। तेज धूप और कमजोर नेटवर्क में भी चलता है।",
    detailedSummary: "ग्रामीण उपयोगकर्ताओं के लिए विशेष डिजाइन: 12 क्षेत्रीय भाषाएं, उच्च-कंट्रास्ट धूप मोड, वॉइस नेविगेशन और एसएमएस आधारित ऑफलाइन बैकअप।",
    metric: "12+ क्षेत्रीय भाषाएं",
    actionLabel: "भाषा बदलें"
  }
];

// Localized Tamil Pillars (18 Pillars)
const rawPillarsTa = [
  {
    id: 1,
    title: "மண் மற்றும் நில பகுப்பாய்வு",
    category: "மண் மற்றும் வேளாண்மை",
    tagline: "துல்லியமான மண் வேதியியல் & எல்லை அளவீடு",
    easyTagline: "உங்கள் நிலத்தின் மண் ஆரோக்கியத்தை அறிக",
    easySummary: "உங்கள் மண்ணிற்கு என்ன உரம் தேவை என்பதை அறிந்து கொள்ளுங்கள். விளைச்சலை பெருக்க சரியான உர அளவை கணக்கிடுங்கள்.",
    detailedSummary: "துல்லியமான ஜிஐஎஸ் நில வரைபடம், ஜிபிஎஸ் மண் மாதிரி ஆய்வு, என்-பி-கே மற்றும் காரத்தன்மை (pH) அளவீடு.",
    metric: "98.4% வரைபட துல்லியம்",
    actionLabel: "மண் பரிசோதனை செய்"
  },
  {
    id: 2,
    title: "சான்றளிக்கப்பட்ட விதை மேலாண்மை",
    category: "மண் மற்றும் வேளாண்மை",
    tagline: "சான்றளிக்கப்பட்ட முளைப்புத் திறன் & போலி எதிர்ப்பு",
    easyTagline: "100% அசல் விதை மற்றும் உர உத்தரவாதம்",
    easySummary: "போலி விதைகளை தவிர்த்து, விதை பையில் உள்ள QR குறியீட்டை ஸ்கேன் செய்து அசல் தரத்தை உடனடியாக உறுதி செய்யுங்கள்.",
    detailedSummary: "பல்கலைக்கழகங்களிலிருந்து நேரடி விநியோகம், பிளாக்செயின் க்யூஆர் குறியீடு சரிபார்ப்பு மற்றும் முளைப்பு உத்தரவாதம்.",
    metric: "0% போலி பொருட்கள்",
    actionLabel: "விதை தரம் சரிபார்"
  },
  {
    id: 3,
    title: "பயிர் திட்டமிடல் மற்றும் காலண்டர்",
    category: "பண்ணை செயல்பாடுகள்",
    tagline: "பருவகால விவசாய கால அட்டவணை",
    easyTagline: "அன்றாட விவசாய வழிகாட்டி",
    easySummary: "விதைப்பு, நீர்ப்பாசனம் மற்றும் அறுவடை நாட்களை முன்கூட்டியே அறிய உதவும் தினசரி பயிர் காலண்டர்.",
    detailedSummary: "வளர்ச்சி நிலை மாடலிங், தொழிலாளர் ஒதுக்கீடு மற்றும் வானிலை மாற்றங்களுக்கு ஏற்ப மாறும் பணிகள்.",
    metric: "துல்லிய தினசரி வழிகாட்டுதல்",
    actionLabel: "காலண்டர் உருவாக்கு"
  },
  {
    id: 4,
    title: "AI பண்ணை உதவியாளர்",
    category: "AI & நிபுணர் ஆலோசனை",
    tagline: "24/7 ஜெமினி AI பயிர் மருத்துவர்",
    easyTagline: "உங்கள் பாக்கெட் பயிர் மருத்துவர்",
    easySummary: "பாதிக்கப்பட்ட இலையை புகைப்படம் எடுங்கள். 2 வினாடிகளில் நோய் மற்றும் எளிமையான சிகிச்சை முறையை தெரிந்து கொள்ளுங்கள்.",
    detailedSummary: "2,50,000+ இலை படங்களை கொண்ட ஜெமினி விஷன் AI மாதிரி, உடனடி மருந்தளவு பரிந்துரைகளை வழங்குகிறது.",
    metric: "< 2 வினாடி பதில்",
    actionLabel: "AI-யிடம் கேள்"
  },
  {
    id: 5,
    title: "நீர்ப்பாசன கண்காணிப்பு",
    category: "பண்ணை செயல்பாடுகள்",
    tagline: "ஸ்மார்ட் சொட்டு நீர் பாசனம் & ஈரப்பத சென்சார்கள்",
    easyTagline: "தண்ணீர் சேமிப்பு, சரியான பாசனம்",
    easySummary: "மண்ணின் ஈரப்பதத்தை போனில் பார்த்து, மோட்டாரை போன் மூலமாகவே இயக்கலாம் அல்லது நிறுத்தலாம்.",
    detailedSummary: "IoT வயர்லெஸ் மண் ஈரப்பத சென்சார்கள், கால்வாய் நீர் அட்டவணை மற்றும் தானியங்கி சொட்டு நீர் வால்வு கட்டுப்பாடு.",
    metric: "42% வரை நீர் சேமிப்பு",
    actionLabel: "பாசன நிலை காண்க"
  },
  {
    id: 6,
    title: "உர வழிகாட்டுதல்",
    category: "மண் மற்றும் வேளாண்மை",
    tagline: "துல்லியமான உர மேலாண்மை & சமநிலை ஊட்டச்சத்து",
    easyTagline: "பயிருக்கு தேவையான சரியான உரம் மட்டும்",
    easySummary: "அளவுக்கு அதிகமாக உரம் இடுவதை தடுத்து, பயிர் நிலைக்கு ஏற்ப துல்லியமான உர அட்டவணையை பெறுங்கள்.",
    detailedSummary: "பயிர் வளர்ச்சி நிலைகளுக்கான NPK கலவை அட்டவணை, நுண்ணூட்டச்சத்து ஸ்ப்ரே வழிகாட்டிகள்.",
    metric: "25% உரச்செலவு மிச்சம்",
    actionLabel: "உர அளவு கணக்கிடு"
  },
  {
    id: 7,
    title: "பூச்சி மற்றும் நோய் முன்கூட்டிய எச்சரிக்கை",
    category: "AI & நிபுணர் ஆலோசனை",
    tagline: "72 மணி நேரத்திற்கு முந்தைய நோய் தாக்குதல் ரேடார்",
    easyTagline: "பூச்சி தாக்குதலுக்கு 3 நாள் முன் எச்சரிக்கை",
    easySummary: "அருகிலுள்ள கிராமங்களில் பூச்சி தாக்குதல் ஏற்பட்டால், உங்கள் பயிரை பாதுகாக்க 72 மணி நேரம் முன்பே செய்தி வரும்.",
    detailedSummary: "சமூக பூச்சி ரேடார் மற்றும் தானியங்கி எச்சரிக்கை மூலம் பயிர் சேதத்தை முழுமையாக தடுக்கிறது.",
    metric: "72 மணி நேர முன்னறிவிப்பு",
    actionLabel: "நோய் படம் ஸ்கேன் செய்"
  },
  {
    id: 8,
    title: "வானிலை முன்னறிவிப்பு",
    category: "AI & நிபுணர் ஆலோசனை",
    tagline: "1 கி.மீ கிராம அளவிலான துல்லிய வானிலை ரேடார்",
    easyTagline: "உங்கள் கிராமத்திற்கான துல்லிய வானிலை",
    easySummary: "மழை, காற்று அல்லது வெயில் அளவை துல்லியமாக அறிந்து மருந்து தெளிக்கும் நேரத்தை திட்டமிடுங்கள்.",
    detailedSummary: "மணிநேர மழை வாய்ப்பு, காற்றின் வேகம் மற்றும் பூச்சிக்கொல்லி தெளிக்கும் சாதக குறியீடு.",
    metric: "1 கி.மீ துல்லிய ரேடார்",
    actionLabel: "வானிலை காண்க"
  },
  {
    id: 9,
    title: "இயந்திரங்கள் மற்றும் ட்ரோன் வாடகை",
    category: "பண்ணை செயல்பாடுகள்",
    tagline: "ஹார்வெஸ்டர் & ட்ரோன் விரைவு வாடகை",
    easyTagline: "டிராக்டர், அறுவடை இயந்திரம், ட்ரோன் வாடகை",
    easySummary: "அறுவடை இயந்திரங்கள் மற்றும் ட்ரோன்களை நியாயமான வாடகையில் சுலபமாக புக் செய்யுங்கள்.",
    detailedSummary: "ஜிபிஎஸ் இணைக்கப்பட்ட டிராக்டர்கள், பேலர்கள் மற்றும் சான்றளிக்கப்பட்ட ட்ரோன் விமானிகள்.",
    metric: "35% இயந்திர முதலீட்டு சேமிப்பு",
    actionLabel: "இயந்திரம் பதிவு செய்"
  },
  {
    id: 10,
    title: "விவசாய நிபுணர் ஆலோசனை",
    category: "AI & நிபுணர் ஆலோசனை",
    tagline: "வேளாண் பல்கலைக்கழக விஞ்ஞானிகளுடன் வீடியோ அழைப்பு",
    easyTagline: "விவசாய விஞ்ஞானிகளிடம் இலவச ஆலோசனை",
    easySummary: "பல்கலைக்கழக வேளாண் விஞ்ஞானிகளிடம் வீடியோ கால் மூலம் நேரடி சிகிச்சை முறைகளை பெறுங்கள்.",
    detailedSummary: "சான்றளிக்கப்பட்ட தாவரவியல் மற்றும் மண் விஞ்ஞானிகளுடன் 1-ஆன்-1 ஆலோசனை.",
    metric: "500+ வேளாண் மருத்துவர்கள்",
    actionLabel: "நிபுணரை தொடர்பு கொள்"
  },
  {
    id: 11,
    title: "பண்ணை மேலாண்மை டாஷ்போர்டு",
    category: "பண்ணை செயல்பாடுகள்",
    tagline: "முழுமையான விவசாய செயல்பாடுகள் ஒரே பார்வையில்",
    easyTagline: "உங்கள் பண்ணை கணக்குகள் ஒரே திரையில்",
    easySummary: "அனைத்து நிலங்களின் நிலை, செலவு மற்றும் அறுவடை லாபத்தை எளிமையாக நிர்வகிக்கலாம்.",
    detailedSummary: "மண் சென்சார்கள், பயிர் பரப்பளவு, செலவு கணக்குகள் மற்றும் கேசிசி வங்கி ஆவணங்கள்.",
    metric: "ஒருங்கிணைந்த கட்டுப்பாட்டு மையம்",
    actionLabel: "டாஷ்போர்டு திறக்க"
  },
  {
    id: 12,
    title: "சந்தை விலைகள் மற்றும் நுண்ணறிவு",
    category: "சந்தை மற்றும் வர்த்தகம்",
    tagline: "1,200+ மண்டிகளின் நேரடி ஏல விலைகள்",
    easyTagline: "இன்றைய மண்டி விலைகள் உங்கள் கைகளில்",
    easySummary: "அருகிலுள்ள அனைத்து மண்டிகளின் விலை நிலவரங்களை ஒப்பிட்டு அதிக விலைக்கு விற்று லாபம் ஈட்டுங்கள்.",
    detailedSummary: "1,200+ மண்டிகளின் நேரடி விலை நகர்வுகள், வரத்து விவரங்கள் மற்றும் விலை முன்னறிவிப்பு.",
    metric: "1,200+ நேரடி மண்டிகள்",
    actionLabel: "மண்டி விலைகள் காண்க"
  },
  {
    id: 13,
    title: "நேரடி விற்பனை மற்றும் வாங்குபவர் மேலாண்மை",
    category: "சந்தை மற்றும் வர்த்தகம்",
    tagline: "நிறுவனங்களுக்கு நேரடி விற்பனை (இடைத்தரகர் இல்லை)",
    easyTagline: "நேரடி விற்பனை, இடைத்தரகர் கட்டணம் பூஜ்ஜியம்",
    easySummary: "ஆட்டா மில்கள் மற்றும் ஏற்றுமதியாளர்களுக்கு நேரடியாக விற்று 15-25% கூடுதல் லாபம் பெறுங்கள்.",
    detailedSummary: "ஐடிசி, அதானி போன்ற நிறுவனங்களின் நேரடி ஏலமுறை மற்றும் முன்கூட்டிய ஒப்பந்தங்கள்.",
    metric: "15-25% அதிக வருமானம்",
    actionLabel: "பயிரை விற்பனைக்கு வை"
  },
  {
    id: 14,
    title: "கிடங்கு மற்றும் சேமிப்பு தீர்வுகள்",
    category: "சேமிப்பு & தளவாடங்கள்",
    tagline: "அரசு அங்கீகாரம் பெற்ற சேமிப்பு & உடனடி கடன்",
    easyTagline: "பாதுகாப்பான தானிய சேமிப்பு & பண உதவி",
    easySummary: "விலை உயரும் வரை தானியங்களை அரசு கிடங்குகளில் சேமித்து, அதன் பேரில் 75% வரை வங்கி கடன் பெறுங்கள்.",
    detailedSummary: "WDRA அங்கீகாரம் பெற்ற சேமிப்பு கிடங்குகள் மற்றும் e-NWR மின்னணு ரசீதுகள்.",
    metric: "WDRA அங்கீகாரம்",
    actionLabel: "கிடங்கு தேடு"
  },
  {
    id: 15,
    title: "போக்குவரத்து மற்றும் சரக்கு கண்காணிப்பு",
    category: "சேமிப்பு & தளவாடங்கள்",
    tagline: "பண்ணைக்கே வரும் லாரிகள் & நேரடி ஜிபிஎஸ்",
    easyTagline: "உங்கள் பண்ணை வாசலில் சரக்கு ஏற்றுதல்",
    easySummary: "மினி லாரிகள் அல்லது குளிரூட்டப்பட்ட வாகனங்களை நேரடியாக உங்கள் பண்ணைக்கு அழைத்து விளைபொருட்களை அனுப்புங்கள்.",
    detailedSummary: "பிரத்யேக விவசாய சரக்கு நெட்வொர்க் மற்றும் நேரடி ஜிபிஎஸ் பயண கண்காணிப்பு.",
    metric: "99.8% சரியான நேர பிக்-அப்",
    actionLabel: "வாகனத்தை டிராக் செய்"
  },
  {
    id: 16,
    title: "டிஜிட்டல் எஸ்க்ரோ பாதுகாப்பான கட்டணம்",
    category: "நிதி மற்றும் எஸ்க்ரோ",
    tagline: "எடை போட்டதும் வங்கி கணக்கில் பணம் (T+0)",
    easyTagline: "உடனடி வங்கி செலுத்துதல் (T+0 எஸ்க்ரோ)",
    easySummary: "லாரியில் ஏற்றுவதற்கு முன்பே வாங்குபவர் வங்கியில் பணம் செலுத்துகிறார். எடை போட்ட உடனேயே பணம் உங்கள் கணக்கிற்கு வரும்.",
    detailedSummary: "டிஜிட்டல் எடைமேடை சரிபார்ப்பு மற்றும் உடனடி UPI/RTGS T+0 எஸ்க்ரோ பரிவர்த்தனை.",
    metric: "100% எஸ்க்ரோ பாதுகாப்பு",
    actionLabel: "எஸ்க்ரோ விவரம் காண்க"
  },
  {
    id: 17,
    title: "விற்பனைக்கு பிந்தைய பகுப்பாய்வு",
    category: "நிதி மற்றும் எஸ்க்ரோ",
    tagline: "பருவகால லாப அறிக்கை & கார்பன் கிரெடிட்",
    easyTagline: "பருவத்தின் மொத்த நிகர லாப கணக்கு",
    easySummary: "மொத்த வருமானம் மற்றும் செலவுகளை ஒப்பிட்டு நிகர லாபத்தை அறியலாம். இயற்கை விவசாய முறையில் கார்பன் கிரெடிட் வருமானமும் உண்டு.",
    detailedSummary: "ஏக்கருக்கு நிகர லாப அறிக்கை மற்றும் விவசாய கடன் மதிப்பீட்டு புள்ளிகள்.",
    metric: "+38% தொடர் லாப உயர்வு",
    actionLabel: "லாப அறிக்கை காண்க"
  },
  {
    id: 18,
    title: "பன்மொழி மற்றும் குரல் ஆதரவு",
    category: "AI & நிபுணர் ஆலோசனை",
    tagline: "குரல் வழி பயன்பாடு & 12 இந்திய மொழிகள்",
    easyTagline: "உங்கள் தாய்மொழியில் பேசி பயன்படுத்துங்கள்",
    easySummary: "தமிழ், இந்தி, பிரெஞ்சு அல்லது ஆங்கிலத்தில் பயன்படுத்தலாம். டைப் செய்யாமல் குரல் வழியே கேள்வி கேட்கலாம்.",
    detailedSummary: "12 வட்டார மொழிகள், வெளிச்சத்திலும் தெளிவாக தெரியும் அமைப்பு மற்றும் குரல் வழி நேவிகேஷன்.",
    metric: "12+ பிராந்திய மொழிகள்",
    actionLabel: "மொழி மாற்றுக"
  }
];

// Localized French Pillars (18 Pillars)
const rawPillarsFr = [
  {
    id: 1,
    title: "Analyse des Sols & Parcelles",
    category: "Agronomie & Sols",
    tagline: "Chimie de Précision du Sol & Télémétrie SIG",
    easyTagline: "Connaître la Santé de Votre Terre",
    easySummary: "Découvrez ce dont votre terre a besoin pour produire de belles récoltes. Testez les nutriments et recevez des conseils clairs sur les engrais.",
    detailedSummary: "Cartographie parcellaire SIG au centimètre, profilage N-P-K-Zn-Fe-pH et conformité numérique du carnet de santé des sols.",
    metric: "Précision SIG 98.4%",
    actionLabel: "Analyser la Parcelle"
  },
  {
    id: 2,
    title: "Gestion des Semences Certifiées",
    category: "Agronomie & Sols",
    tagline: "Taux de Germination Garanti & Anti-Contrefaçon",
    easyTagline: "Semences & Engrais 100% Authentiques",
    easySummary: "Ne vous faites plus duper par de fausses semences. Scannez le code QR sur le sac avec votre téléphone pour vérifier l'authenticité.",
    detailedSummary: "Approvisionnement direct sélectionneur-ferme avec QR code cryptographique et validation en laboratoire du taux de germination.",
    metric: "0% Risque Contrefaçon",
    actionLabel: "Vérifier le Lot"
  },
  {
    id: 3,
    title: "Planification & Calendrier des Cultures",
    category: "Opérations & Gestion",
    tagline: "Échéanciers Saisonniers Dynamiques & Tâches",
    easyTagline: "Guide Agricole Jour par Jour",
    easySummary: "Obtenez un calendrier quotidien indiquant quand préparer le sol, semer, arroser et récolter. S'adapte automatiquement à la météo.",
    detailedSummary: "Modélisation prédictive de la croissance basée sur les Degrés-Jours de Croissance (GDD) et réaffectation dynamique selon la météo.",
    metric: "Précision Quotidienne",
    actionLabel: "Générer le Calendrier"
  },
  {
    id: 4,
    title: "Assistant IA Agricole",
    category: "Intelligence IA & Conseil",
    tagline: "Agronome Multimodal 24/7 Propulsé par Gemini",
    easyTagline: "Votre Médecin des Plantes sur Mobile",
    easySummary: "Prenez une photo de n'importe quelle feuille malade. L'IA identifie la maladie en 2 secondes et vous explique le traitement en termes simples.",
    detailedSummary: "Moteur d'inférence pathologique Gemini Vision entraîné sur 250 000+ images végétales, fournissant des protocoles de traitement ciblés.",
    metric: "Réponse < 2 Sec",
    actionLabel: "Consulter l'IA"
  },
  {
    id: 5,
    title: "Suivi de l'Irrigation Goutte-à-Goutte",
    category: "Opérations & Gestion",
    tagline: "Automatisation Intelligente & Évapotranspiration",
    easyTagline: "Économisez l'Eau, Arrosez au Juste Besoin",
    easySummary: "Sachez exactement quand votre culture a soif. Déclenchez ou coupez l'arrosage goutte-à-goutte directement depuis votre smartphone.",
    detailedSummary: "Sondes d'humidité du sol sans fil IoT, calculs d'évapotranspiration (ET0) et pilotage automatique de vannes solénoïdes.",
    metric: "Jusqu'à 42% d'Eau Économisée",
    actionLabel: "Vérifier l'Irrigation"
  },
  {
    id: 6,
    title: "Conseils en Fertilisation & Nutriments",
    category: "Agronomie & Sols",
    tagline: "Fertigation Ciblée & Équilibrage NPK",
    easyTagline: "Nourrissez Vos Cultures sans Gaspillage",
    easySummary: "Fini les dosages au hasard. Obtenez des guides précis pour chaque stade de croissance afin d'optimiser le rendement et faire des économies.",
    detailedSummary: "Apports fractionnés NPK par phase végétative, pulvérisations foliaires de micro-nutriments et plans de compostage organique.",
    metric: "Coût Chimique Réduit de 25%",
    actionLabel: "Calculer les Doses"
  },
  {
    id: 7,
    title: "Alerte Précoce Ravageurs & Maladies",
    category: "Intelligence IA & Conseil",
    tagline: "Radar Géolocalisé d'Infestation & Prévention",
    easyTagline: "Alerte 72h avant l'Attaque des Parasites",
    easySummary: "Si des parasites frappent une ferme à 5 km, CropCare vous alerte 72 heures à l'avance pour protéger votre champ avant tout dégât.",
    detailedSummary: "Modélisation épidémiologique des spores, pièges à phéromones connectés et radar communautaire d'alertes sanitaires.",
    metric: "Préavis d'Alerte de 72h",
    actionLabel: "Scanner la Feuille"
  },
  {
    id: 8,
    title: "Prévisions Météorologiques Précises",
    category: "Intelligence IA & Conseil",
    tagline: "Radar Météo Hyperlocal & Fenêtres de Traitement",
    easyTagline: "Météo Exacte à l'Échelle de Votre Village",
    easySummary: "Vérifiez s'il va pleuvoir ou s'il y aura du vent aujourd'hui. Identifiez les heures idéales pour pulvériser sans perte de produit.",
    detailedSummary: "Prévisions météorologiques à résolution de 1 km, risque horaire de pluie, vitesse du vent pour la dérive et alertes de gel ou grêle.",
    metric: "Résolution 1 km Hyperlocale",
    actionLabel: "Voir le Radar Météo"
  },
  {
    id: 9,
    title: "Coordination Machinisme & Drones",
    category: "Opérations & Gestion",
    tagline: "Location de Moissonneuses & Flottes de Drones",
    easyTagline: "Louez Tracteurs & Drones sans Intermédiaire",
    easySummary: "Réservez des moissonneuses-batteuses ou des drones de traitement comme on réserve un taxi. Tarifs fixes à l'hectare, sans surfacturation.",
    detailedSummary: "Plateforme d'équipements partagés : moissonneuses, niveleuses laser, broyeurs et télépilotes agricoles de drones certifiés.",
    metric: "-35% d'Investissement Matériel",
    actionLabel: "Réserver du Matériel"
  },
  {
    id: 10,
    title: "Support d'Agronomes & Experts",
    category: "Intelligence IA & Conseil",
    tagline: "Télé-Consultations avec Chercheurs & Agronomes",
    easyTagline: "Appelez en Vidéo des Médecins Agricoles",
    easySummary: "Échangez directement avec des agronomes et scientifiques certifiés par appel vidéo. Obtenez des ordonnances indépendantes et fiables.",
    detailedSummary: "Consultations vidéo programmées avec des docteurs en agronomie, spécialistes des sols et pathologistes certifiés.",
    metric: "500+ Agronomes Agréés",
    actionLabel: "Consulter un Agronome"
  },
  {
    id: 11,
    title: "Poste de Pilotage d'Exploitation",
    category: "Opérations & Gestion",
    tagline: "Gestion Complète de l'Exploitation en Un Coup d'Œil",
    easyTagline: "Toute Votre Ferme sur un Seul Écran",
    easySummary: "Suivez l'état de toutes vos parcelles, vos dépenses en intrants et calculez votre bénéfice net attendu à la récolte.",
    detailedSummary: "Tableau de bord centralisé : délimitation des parcelles, flux de capteurs IoT, rentabilité à l'hectare et registres financiers.",
    metric: "Cockpit Unique Intégré",
    actionLabel: "Ouvrir le Tableau de Bord"
  },
  {
    id: 12,
    title: "Intelligence Marché & Cours Spot",
    category: "Commerce & Marchés",
    tagline: "Cours en Direct de 1 200+ Marchés & Prédictions",
    easyTagline: "Les Prix du Marché Quotidien dans Votre Poche",
    easySummary: "Ne vendez plus jamais à l'aveugle. Consultez les cours réels de tous les marchés environnants et sachez si les prix vont monter.",
    detailedSummary: "Cotations spot en temps réel sur 1 200+ marchés de gros, volumes d'arrivage, tendances et calculateur d'arbitrage de transport.",
    metric: "1 200+ Marchés Connectés",
    actionLabel: "Voir les Cours en Direct"
  },
  {
    id: 13,
    title: "Ventes Directes & Acheteurs Agréés",
    category: "Commerce & Marchés",
    tagline: "Vente Directe aux Minoteries, Exportateurs & Usines",
    easyTagline: "Vente Directe aux Grands Acheteurs (Sans Courtier)",
    easySummary: "Vendez directement vos récoltes aux minoteries et industriels agroalimentaires. Ils rivalisent d'offres pour vous garantir le meilleur prix.",
    detailedSummary: "Suppression des intermédiaires via enchères inversées, appels d'offres institutionnels et contrats d'achat garantis avant récolte.",
    metric: "+15% à +25% de Revenu Net",
    actionLabel: "Mettre en Vente"
  },
  {
    id: 14,
    title: "Stockage Sécurisé & Silos Agréés",
    category: "Logistique & Stockage",
    tagline: "Silos Scientifiques & Récépissés Électroniques",
    easyTagline: "Stockage Sécurisé & Avance de Trésorerie",
    easySummary: "Stockez vos grains dans des silos certifiés si les cours baissent. Obtenez une avance bancaire immédiate jusqu'à 75% de la valeur stockée.",
    detailedSummary: "Réservation d'entrepôts et silos certifiés WDRA avec récépissés négociables électroniques (e-NWR) pour éviter les ventes précipitées.",
    metric: "Réseau Homologué WDRA",
    actionLabel: "Trouver un Entrepôt"
  },
  {
    id: 15,
    title: "Logistique & Télématique Frigorifique",
    category: "Logistique & Stockage",
    tagline: "Collecte à la Ferme & Télématique Camion Frigo",
    easyTagline: "Enlèvement Direct par Camion au Champ",
    easySummary: "Faites venir des camionnettes ou camions frigorifiques directement au bord de votre champ. Suivez le trajet en direct sur votre mobile.",
    detailedSummary: "Réseau de fret agricole dédié : enlèvement au champ, caisses frigorifiques sous surveillance de température toutes les 60 secondes.",
    metric: "99.8% de Ponctualité",
    actionLabel: "Suivre les Camions"
  },
  {
    id: 16,
    title: "Paiements Sécurisés & Séquestre T+0",
    category: "Finance & Séquestre",
    tagline: "Règlement T+0 Immédiat sur Compte Bancaire",
    easyTagline: "Paiement Immédiat à la Pesée (Séquestre T+0)",
    easySummary: "L'acheteur dépose l'argent avant le chargement. Dès la pesée électronique des sacs terminée, les fonds sont crédités sur votre compte bancaire.",
    detailedSummary: "Intégration bancaire directe : séquestre bloqué avant départ du camion, libération instantanée T+0 dès validation du pont-bascule.",
    metric: "Paiement 100% Sécurisé",
    actionLabel: "Voir le Coffre Séquestre"
  },
  {
    id: 17,
    title: "Analyses Post-Vente & Crédits Carbone",
    category: "Finance & Séquestre",
    tagline: "Bilan Financier Saisonnier & Monétisation Carbone",
    easyTagline: "Bilan Complet de Vos Bénéfices",
    easySummary: "Découvrez exactement combien vous avez gagné cette saison. Valorisez vos pratiques régénératrices en vendant des crédits carbone certifiés.",
    detailedSummary: "Rapports post-récolte approfondis : marge nette par hectare, efficacité des intrants et certification de séquestration carbone.",
    metric: "+38% de Croissance Durable",
    actionLabel: "Voir le Bilan de Saison"
  },
  {
    id: 18,
    title: "Accessibilité & Support Multilingue Vocale",
    category: "Intelligence IA & Conseil",
    tagline: "Interface Vocale, Mode Hors-Ligne & Dialectes",
    easyTagline: "Utilisez l'Appli dans Votre Langue Maternelle",
    easySummary: "Utilisez CropCare en français, hindi, tamoul ou anglais. Parlez à votre téléphone au lieu de taper. Fonctionne même en plein soleil.",
    detailedSummary: "Conçu pour l'accessibilité agricole : 12 langues régionales, interface vocale, mode plein soleil à haut contraste et synchronisation hors-ligne.",
    metric: "12+ Langues Prises en Charge",
    actionLabel: "Changer de Langue"
  }
];

// Helper to get localized pillars data
export function getPillarsData(lang = 'en') {
  const map = {
    en: rawPillarsEn,
    hi: rawPillarsHi,
    ta: rawPillarsTa,
    fr: rawPillarsFr
  };
  
  const selected = map[lang] || map.en;

  // Merge with icon, emoji, benefits, slug from English base to guarantee full data
  return rawPillarsEn.map((basePillar, index) => {
    const loc = selected[index] || {};
    return {
      ...basePillar,
      title: loc.title || basePillar.title,
      category: loc.category || basePillar.category,
      tagline: loc.tagline || basePillar.tagline,
      easyTagline: loc.easyTagline || basePillar.easyTagline,
      easySummary: loc.easySummary || basePillar.easySummary,
      detailedSummary: loc.detailedSummary || basePillar.detailedSummary,
      metric: loc.metric || basePillar.metric,
      actionLabel: loc.actionLabel || basePillar.actionLabel,
      easyBenefits: basePillar.easyBenefits,
      detailedBenefits: basePillar.detailedBenefits
    };
  });
}

// Export default English array for backward compatibility
export const pillarsData = rawPillarsEn;
