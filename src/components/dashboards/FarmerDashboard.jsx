import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Sprout, 
  Droplet, 
  CloudSun, 
  LineChart, 
  ShieldCheck, 
  TrendingUp, 
  Play, 
  Square, 
  ArrowUpRight,
  Handshake,
  Bot,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Camera,
  Compass,
  Sliders,
  Scale,
  ExternalLink,
  Droplets,
  Wind,
  Thermometer,
  CloudRain,
  Activity,
  Cpu,
  Gauge,
  Zap
} from 'lucide-react';
import { getLiveMandiPrices } from '../../services/mandiService';

export default function FarmerDashboard() {
  const { 
    userName, 
    mode, 
    setMode,
    language,
    setActiveNav, 
    setActiveModule,
    activeDashboardTab, 
    setActiveDashboardTab, 
    setIsIntroModalOpen,
    t 
  } = useApp();

  const [isDripRunning, setIsDripRunning] = useState(false);
  const [soilMoisture, setSoilMoisture] = useState(36);
  const [bidsAccepted, setBidsAccepted] = useState([]);

  const dashboardTexts = {
    en: {
      welcome: "Welcome",
      exploreTour: "Explore Tour",
      advisorBtn: "Farm Advisor AI",
      whatIfBtn: "What-If Simulator",
      budgetBtn: "Budget Planner",
      spotlight1: { title: "Leaf Disease Scanner", desc: "Capture photos for instant ICAR remedies & organic spray formulas.", badge: "Live AI Doctor" },
      spotlight2: { title: "Mandi Rates & MSP", desc: "Track daily APMC prices and lock guaranteed buyer purchase contracts.", badge: "Live Mandi Ticker" },
      spotlight3: { title: "Precision Farming Hub", desc: "Soil tests, drip irrigation, drone spraying, tractors & cold storage.", badge: "18 Modules" },
      spotlight4: { title: "Platform Intro & Tour", desc: "Watch the animated guide explaining every smart feature of CropCare.", badge: "Interactive" }
    },
    hi: {
      welcome: "स्वागत है",
      exploreTour: "प्लेटफॉर्म टूर",
      advisorBtn: "फार्म एडवाइजर AI",
      whatIfBtn: "व्हाट-इफ सिम्युलेटर",
      budgetBtn: "बजट योजनाकार",
      spotlight1: { title: "पत्ती रोग स्कैनर", desc: "तुरंत ICAR उपचार एवं जैविक काढ़ा नुस्खों के लिए फोटो लें।", badge: "लाइव AI डॉक्टर" },
      spotlight2: { title: "मंडी भाव एवं MSP", desc: "दैनिक APMC भाव देखें और खरीदारों से सुरक्षित अनुबंध करें।", badge: "लाइव मंडी टिकर" },
      spotlight3: { title: "परिशुद्ध कृषि केंद्र", desc: "मिट्टी जांच, ड्रिप सिंचाई, ड्रोन छिड़काव, ट्रैक्टर एवं कोल्ड स्टोरेज।", badge: "18 मॉड्यूल" },
      spotlight4: { title: "प्लेटफॉर्म परिचय एवं टूर", desc: "क्रॉपकेयर की सभी स्मार्ट सुविधाओं का एनिमेटेड वॉकथ्रू देखें।", badge: "इंटरएक्टिव" }
    },
    ta: {
      welcome: "நல்வரவு",
      exploreTour: "சுற்றுப்பயணம்",
      advisorBtn: "பண்ணை ஆலோசகர் AI",
      whatIfBtn: "உருவகப்படுத்துதல்",
      budgetBtn: "பட்ஜெட் திட்டமிடல்",
      spotlight1: { title: "இலை நோய் ஸ்கேனர்", desc: "உடனடி தீர்வுகள் மற்றும் இயற்கை மருந்துகளுக்கு புகைப்படம் எடுக்கவும்.", badge: "நேரடி AI மருத்துவர்" },
      spotlight2: { title: "மண்டி விலை & MSP", desc: "தினசரி APMC விலைகளைக் கண்காணித்து ஒப்பந்தங்களை உறுதி செய்யவும்.", badge: "நேரடி மண்டி நிலவரம்" },
      spotlight3: { title: "துல்லிய வேளாண் மையம்", desc: "மண் பரிசோதனை, சொட்டு நீர் பாசனம், ட்ரோன் தெளிப்பு, டிராக்டர்கள்.", badge: "18 தொகுதிகள்" },
      spotlight4: { title: "தள அறிமுகம் & சுற்றுப்பயணம்", desc: "அனைத்து ஸ்மார்ட் அம்சங்களையும் விளக்கும் வழிகாட்டியைப் பாருங்கள்.", badge: "ஊடாடும் தளம்" }
    },
    fr: {
      welcome: "Bienvenue",
      exploreTour: "Visite Guidée",
      advisorBtn: "Conseiller IA",
      whatIfBtn: "Simulateur",
      budgetBtn: "Budget Planner",
      spotlight1: { title: "Scanner de Maladies", desc: "Capturez des photos pour des remèdes certifiés et formules bio.", badge: "Docteur IA" },
      spotlight2: { title: "Cours Mandi & MSP", desc: "Suivez les cours journaliers APMC et verrouillez des contrats d'achat.", badge: "Cotations Direct" },
      spotlight3: { title: "Pôle de Précision", desc: "Analyses de sol, goutte-à-goutte, drones, tracteurs et stockage froid.", badge: "18 Modules" },
      spotlight4: { title: "Présentation de la Plateforme", desc: "Découvrez le guide animé expliquant chaque fonctionnalité.", badge: "Interactif" }
    }
  };

  const dLoc = dashboardTexts[language] || dashboardTexts.en;

  const toggleDrip = () => {
    setIsDripRunning(!isDripRunning);
    if (!isDripRunning) {
      setSoilMoisture(41);
    } else {
      setSoilMoisture(36);
    }
  };

  const handleAcceptBid = (bidId, buyer, amount) => {
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setBidsAccepted(prev => [...prev, bidId]);
  };

  const plots = [
    { 
      id: 'plot-a', 
      name: 'Parcel A-1 (Wheat HD-2967)', 
      cropName: 'Sharbati Wheat',
      variety: 'HD-2967 (T. aestivum)',
      nodeId: 'LORA-NODE-092',
      battery: '94%',
      signalRssi: '-84 dBm',
      size: '6.5 Acres', 
      moisture: soilMoisture, 
      vwc: '36.4%',
      waterPotential: '-33 kPa (Field Capacity)',
      soilTemp: '22.8°C',
      npk: '120:60:40', 
      ph: '6.82',
      ec: '1.24 dS/m',
      flowPressure: '1.84 Bar',
      emitterDischarge: '4.2 L/h',
      etDeficit: '-1.82 mm/d',
      health: 'Optimal',
      simpleStatus: 'Healthy & Vibrant 🟢',
      simpleAdvice: 'Soil moisture is optimal. Next irrigation due in 3 days.'
    },
    { 
      id: 'plot-b', 
      name: 'Parcel B-2 (Mustard Pusa Bold)', 
      cropName: 'Yellow Mustard',
      variety: 'Pusa Bold (B. juncea)',
      nodeId: 'LORA-NODE-104',
      battery: '88%',
      signalRssi: '-89 dBm',
      size: '4.0 Acres', 
      moisture: 34, 
      vwc: '34.1%',
      waterPotential: '-42 kPa',
      soilTemp: '23.4°C',
      npk: '80:40:40', 
      ph: '7.10',
      ec: '1.18 dS/m',
      flowPressure: '1.75 Bar',
      emitterDischarge: '4.0 L/h',
      etDeficit: '-1.45 mm/d',
      health: 'Good',
      simpleStatus: 'Good Growth 🟢',
      simpleAdvice: 'Flowering stage initiated. Safe for micronutrient foliar spray.'
    },
    { 
      id: 'plot-c', 
      name: 'Parcel C-3 (Basmati Rice Nursery)', 
      cropName: 'Basmati Rice',
      variety: 'Pusa-1121 (O. sativa)',
      nodeId: 'LORA-NODE-119',
      battery: '96%',
      signalRssi: '-78 dBm',
      size: '4.0 Acres', 
      moisture: 42, 
      vwc: '42.0%',
      waterPotential: '-18 kPa (Saturated)',
      soilTemp: '21.9°C',
      npk: '100:50:50', 
      ph: '6.75',
      ec: '1.30 dS/m',
      flowPressure: '1.90 Bar',
      emitterDischarge: '4.4 L/h',
      etDeficit: '-2.10 mm/d',
      health: 'Vegetative',
      simpleStatus: 'Nursery Sprouting 🌾',
      simpleAdvice: 'Standing water level adequate. Keep nursery weed-free.'
    }
  ];

  const liveCommodities = getLiveMandiPrices(language);
  const mandiRates = liveCommodities.slice(0, 5).map(item => ({
    crop: item.name,
    mandi: item.mandi,
    spotPrice: `₹${item.modalPrice?.toLocaleString('en-IN')} / qtl`,
    msp: item.msp ? `₹${item.msp?.toLocaleString('en-IN')}` : '₹2,225',
    mspSpread: item.modalPrice ? `+₹${Math.max(120, item.modalPrice - 2225)}/qtl (+${Math.round(((item.modalPrice - 2225) / 2225) * 100)}% over MSP)` : '+₹225/qtl (+10.1%)',
    change: `${item.trend === 'up' ? '+' : ''}${item.change}%`,
    trend: item.trend,
    qualityGrade: 'Grade A-1 FAQ • Moisture 11.2%',
    arbitrageMandi: 'Rajpura Terminal APMC',
    arbitrageSpread: '+₹42/qtl Net Margin',
    futuresSpread: '+₹40/qtl Contango (NCDEX)'
  }));

  const buyerBids = [
    { id: 'BID-881', buyer: 'ITC Agri Business Ltd', crop: 'Wheat Grade-A (200 Qtls)', offerPrice: '₹2,580/qtl', escrowLocked: '₹5,16,000', expiry: '4 hours' },
    { id: 'BID-882', buyer: 'Adani Wilmar Procurement', crop: 'Mustard Seeds (100 Qtls)', offerPrice: '₹5,890/qtl', escrowLocked: '₹5,89,000', expiry: '12 hours' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t('roles.farmer.badge')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {dLoc.welcome}, {userName}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
              {t('roles.farmer.meta')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsIntroModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>{dLoc.exploreTour}</span>
            </button>

            <button
              onClick={toggleDrip}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                isDripRunning 
                  ? 'bg-amber-400 text-slate-900 shadow-md' 
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              {isDripRunning ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isDripRunning ? 'Stop Drip Cycle' : t('roles.farmer.actions.triggerDrip')}</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('module');
                setActiveModule('ai-assistant');
              }}
              className="px-3.5 py-2.5 rounded-xl bg-lime-400 text-slate-900 font-extrabold text-xs shadow-md hover:bg-lime-300 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Bot className="w-4 h-4 text-emerald-800" />
              <span>{dLoc.advisorBtn}</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('module');
                setActiveModule('what-if-simulator');
              }}
              className="px-3.5 py-2.5 rounded-xl bg-teal-400 text-slate-900 font-extrabold text-xs shadow-md hover:bg-teal-300 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sliders className="w-4 h-4 text-teal-900" />
              <span>{dLoc.whatIfBtn}</span>
            </button>

            <button
              onClick={() => {
                setActiveNav('module');
                setActiveModule('resource-budget');
              }}
              className="px-3.5 py-2.5 rounded-xl bg-emerald-400 text-slate-900 font-extrabold text-xs shadow-md hover:bg-emerald-300 transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Scale className="w-4 h-4 text-emerald-950" />
              <span>{dLoc.budgetBtn}</span>
            </button>

            <button
              onClick={() => setActiveNav('scanner')}
              className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow-md hover:bg-emerald-50 transition-colors flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>{t('roles.farmer.tabs.diagnostics')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Dynamic Mode Context HUD: Simple vs Advance Cockpit */}
      {mode === 'easy' ? (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-green-50 dark:from-emerald-950/40 dark:via-slate-900 dark:to-teal-950/30 border-2 border-emerald-300 dark:border-emerald-700/60 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-emerald-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-md shadow-emerald-600/30">
              🍃
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-emerald-600 text-white uppercase tracking-wider">
                  Simple Mode Active
                </span>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  Clean 1-Click Operations • Simplified Farmer Cockpit
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1">
                Showing friendly crop status, 1-touch watering, instant AI leaf diagnostics, and transparent APMC mandi price advice without complex technical jargon.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <button
              onClick={() => setMode('detailed')}
              className="px-3.5 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-100 text-white dark:text-slate-900 text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Switch to Advance Mode</span>
              <span className="text-sm">🔬</span>
            </button>
          </div>
        </div>
      ) : (
        <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white border-2 border-indigo-500/50 shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 text-white flex items-center justify-center text-2xl shrink-0 shadow-md shadow-indigo-600/30">
              🔬
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-black px-2.5 py-0.5 rounded-full bg-indigo-500 text-white uppercase tracking-wider">
                  Advance Precision Mode Active
                </span>
                <span className="text-xs font-mono text-indigo-300">
                  Multi-Spectral Sentinel-2 NDVI • LoRaWAN IoT Telemetry • Stoichiometric Modeling
                </span>
              </div>
              <div className="flex items-center gap-2 mt-2 text-[11px] font-mono text-slate-300 flex-wrap">
                <span className="px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 text-emerald-400 font-bold flex items-center gap-1">
                  <Activity className="w-3 h-3" /> NDVI: 0.84 (Dense Canopy)
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 text-teal-300 flex items-center gap-1">
                  <Gauge className="w-3 h-3" /> Soil EC: 1.24 dS/m
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 text-amber-300 flex items-center gap-1">
                  <Droplet className="w-3 h-3" /> ET₀: 3.4 mm/d
                </span>
                <span className="px-2 py-0.5 rounded-lg bg-black/40 border border-white/10 text-cyan-300 flex items-center gap-1">
                  <Cpu className="w-3 h-3" /> LoRa RSSI: -84 dBm
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2 self-start sm:self-center shrink-0">
            <button
              onClick={() => setMode('easy')}
              className="px-3.5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-extrabold flex items-center gap-1.5 transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              <span>Switch to Simple Mode</span>
              <span className="text-sm">🍃</span>
            </button>
          </div>
        </div>
      )}

      {/* 4 Role KPI Cards - Adaptively Rendered based on Mode */}
      {mode === 'easy' ? (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.land')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">Healthy 🟢</span>
            </div>
            <div className="text-2xl font-black text-slate-900 dark:text-white mt-1.5">14.5 Acres</div>
            <div className="text-xs text-emerald-600 font-semibold mt-1">3 Active Plots • Soil Moist & Ready</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.yield')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-300 font-bold">In 18 Days 🌾</span>
            </div>
            <div className="text-2xl font-black text-amber-600 mt-1.5">242 Qtls</div>
            <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">Sharbati Wheat & Mustard Crop</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.income')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-bold">+18% vs Last Yr</span>
            </div>
            <div className="text-2xl font-black text-blue-600 mt-1.5">₹13,00,100</div>
            <div className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1">₹3.2L Expected Direct to Bank</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.escrow')}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold">100% Safe 🛡️</span>
            </div>
            <div className="text-2xl font-black text-emerald-600 mt-1.5">₹3,76,500</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">Locked in Bank Guarantee Escrow</div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-indigo-900/60 text-white shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider">Canopy LAI & Area</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">NDVI: 0.84</span>
            </div>
            <div className="text-2xl font-black text-white mt-1.5">14.50 Ha</div>
            <div className="text-[11px] font-mono text-emerald-400 mt-1">LAI: 3.42 • Canopy Temp 24.1°C</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Sentinel-2 Orbit L2A • High Vigor</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-amber-900/60 text-white shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-amber-400 uppercase tracking-wider">Phenology & Biomass</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-700">±4.2% σ</span>
            </div>
            <div className="text-2xl font-black text-amber-400 mt-1.5">242.0 Qtls</div>
            <div className="text-[11px] font-mono text-amber-300 mt-1">GDD: 1,480 °C-d • Grain-Filling</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Assimilate Translocation 88%</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-blue-900/60 text-white shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-blue-400 uppercase tracking-wider">EBITDA & Net Margin</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-blue-950 text-blue-300 border border-blue-700">68.3% Margin</span>
            </div>
            <div className="text-2xl font-black text-cyan-400 mt-1.5">₹13,00,100</div>
            <div className="text-[11px] font-mono text-blue-300 mt-1">₹89,662/Acre • CapEx ₹4.12L</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Working Capital Ratio 2.4x</div>
          </div>

          <div className="p-4 sm:p-5 rounded-2xl bg-slate-900 border border-emerald-900/60 text-white shadow-sm card-hover">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider">WDRA Collateral</span>
              <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-700">e-NWR Tier-1</span>
            </div>
            <div className="text-2xl font-black text-emerald-400 mt-1.5">₹3,76,500</div>
            <div className="text-[11px] font-mono text-emerald-300 mt-1">T+0 Clearing • Bank BG #8841</div>
            <div className="text-[10px] font-mono text-slate-400 mt-0.5">Nil Default Risk • Escrow Secured</div>
          </div>
        </div>
      )}

      {/* Interactive Platform Feature Spotlight Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div 
          onClick={() => setActiveNav('scanner')}
          className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/60 shadow-sm card-hover cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-emerald-600/30">
              <Camera className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 animate-soft-float">
              {dLoc.spotlight1.badge}
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            {dLoc.spotlight1.title}
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            {dLoc.spotlight1.desc}
          </p>
        </div>

        <div 
          onClick={() => setActiveDashboardTab('mandi')}
          className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800/60 shadow-sm card-hover cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-amber-600/30">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
              {dLoc.spotlight2.badge}
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            {dLoc.spotlight2.title}
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            {dLoc.spotlight2.desc}
          </p>
        </div>

        <div 
          onClick={() => setActiveNav('modules')}
          className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 shadow-sm card-hover cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-blue-600/30">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              {dLoc.spotlight3.badge}
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            {dLoc.spotlight3.title}
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            {dLoc.spotlight3.desc}
          </p>
        </div>

        <div 
          onClick={() => setIsIntroModalOpen(true)}
          className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800/60 shadow-sm card-hover cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md shadow-purple-600/30">
              <Sparkles className="w-5 h-5 animate-pulse" />
            </div>
            <span className="text-[10px] font-black px-2 py-0.5 rounded-full bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200 animate-pulse">
              {dLoc.spotlight4.badge}
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            {dLoc.spotlight4.title}
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            {dLoc.spotlight4.desc}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {['overview', 'mandi', 'weather', 'bids'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveDashboardTab(tab)}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeDashboardTab === tab
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t(`roles.farmer.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview (Crops & Soil Telemetry) */}
      {(activeDashboardTab === 'overview' || !activeDashboardTab) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Active Cultivated Parcels</h3>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full ${
                mode === 'easy' 
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300' 
                  : 'bg-indigo-100 dark:bg-indigo-950 text-indigo-800 dark:text-indigo-300 font-mono'
              }`}>
                {mode === 'easy' ? '🍃 Simple Action View' : '🔬 LoRaWAN Telemetry Stream'}
              </span>
            </div>

            {mode === 'easy' ? (
              /* Simple Mode Parcel Cards */
              <div className="space-y-3">
                {plots.map((p) => (
                  <div key={p.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{p.cropName}</h4>
                          <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                            {p.simpleStatus}
                          </span>
                        </div>
                        <p className="text-xs text-slate-500 mt-1">{p.name} • {p.size}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button 
                          onClick={toggleDrip}
                          className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isDripRunning 
                              ? 'bg-amber-400 text-slate-900 shadow-md animate-pulse' 
                              : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm'
                          }`}
                        >
                          <Droplets className="w-4 h-4" />
                          <span>{isDripRunning ? 'Watering Running 💧' : 'Water Now (15 Min)'}</span>
                        </button>
                        <button
                          onClick={() => setActiveNav('scanner')}
                          className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-bold flex items-center gap-1.5 transition-colors cursor-pointer"
                        >
                          <Camera className="w-4 h-4 text-emerald-600" />
                          <span>Scan Leaf</span>
                        </button>
                      </div>
                    </div>

                    {/* Simple Moisture Progress Bar */}
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-slate-600 dark:text-slate-400 font-medium">Soil Moisture Level</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">{p.moisture}% (Good Moisture)</span>
                      </div>
                      <div className="w-full h-2.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full transition-all duration-500"
                          style={{ width: `${p.moisture}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5">
                        💡 {p.simpleAdvice}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Advance Mode Parcel Cards: Deep IoT Telemetry Matrix */
              <div className="space-y-4">
                {plots.map((p) => (
                  <div key={p.id} className="p-5 rounded-2xl bg-slate-900 border border-indigo-900/60 text-white shadow-md space-y-4">
                    {/* Top Node & Parcel Identity */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-indigo-950">
                      <div>
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-700">
                            {p.nodeId}
                          </span>
                          <h4 className="font-extrabold text-sm text-white">{p.name}</h4>
                          <span className="text-[10px] font-mono text-slate-400">({p.variety})</span>
                        </div>
                        <p className="text-[11px] font-mono text-slate-400 mt-1">
                          Area: {p.size} • LoRa RSSI: {p.signalRssi} • LiFePO4 Node Battery: {p.battery} • Health: {p.health}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <button 
                          onClick={toggleDrip}
                          className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
                            isDripRunning 
                              ? 'bg-amber-400 text-slate-900 shadow-md animate-pulse' 
                              : 'bg-indigo-600 hover:bg-indigo-500 text-white'
                          }`}
                        >
                          <Zap className="w-3.5 h-3.5" />
                          <span>{isDripRunning ? 'Valve 1.8 Bar Active' : 'Pulse Solenoid Valve'}</span>
                        </button>
                      </div>
                    </div>

                    {/* 3-Column Precision Telemetry Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="text-[10px] text-indigo-400 uppercase tracking-wider flex items-center gap-1 font-bold">
                          <Droplets className="w-3 h-3 text-cyan-400" /> Subsurface Hydrology
                        </div>
                        <div className="text-sm font-bold text-white">VWC: {p.vwc}</div>
                        <div className="text-[11px] text-cyan-300">Potential: {p.waterPotential}</div>
                        <div className="text-[10px] text-slate-400">Temp @15cm: {p.soilTemp}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="text-[10px] text-emerald-400 uppercase tracking-wider flex items-center gap-1 font-bold">
                          <Activity className="w-3 h-3 text-emerald-400" /> Stoichiometry & EC
                        </div>
                        <div className="text-sm font-bold text-emerald-400">NPK: {p.npk} kg/ha</div>
                        <div className="text-[11px] text-emerald-300">Soil pH: {p.ph} • Safe Buffering</div>
                        <div className="text-[10px] text-slate-400">Electrical Cond: {p.ec}</div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/5 space-y-1">
                        <div className="text-[10px] text-amber-400 uppercase tracking-wider flex items-center gap-1 font-bold">
                          <Gauge className="w-3 h-3 text-amber-400" /> Hydraulics & ET₀
                        </div>
                        <div className="text-sm font-bold text-amber-400">Pressure: {p.flowPressure}</div>
                        <div className="text-[11px] text-amber-300">Discharge: {p.emitterDischarge}</div>
                        <div className="text-[10px] text-slate-400">ET₀ Deficit: {p.etDeficit}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
              {mode === 'easy' ? 'Weather & Spray Guide' : 'Atmospheric Boundary Layer Radar'}
            </h3>
            
            {mode === 'easy' ? (
              <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CloudSun className="w-6 h-6 text-amber-500" />
                    <div>
                      <div className="font-extrabold text-sm text-slate-900 dark:text-white">Partly Sunny • 28°C</div>
                      <div className="text-xs text-slate-500">Ludhiana, Punjab</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold rounded-md">
                    Optimal Spray
                  </span>
                </div>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  Ideal spray window. No rainfall predicted for the next 48 hours. Safe for foliar spray on all parcels.
                </p>
                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <div>
                    <span className="text-slate-500">Wind Speed</span>
                    <p className="font-bold text-slate-800 dark:text-slate-200">7 km/h (Gentle)</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Rain Chance</span>
                    <p className="font-bold text-emerald-600">0% for 2 Days</p>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-2xl bg-slate-900 border border-indigo-900/60 text-white shadow-sm space-y-3 font-mono">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CloudSun className="w-5 h-5 text-amber-400" />
                    <div>
                      <div className="font-bold text-sm text-white">28.4°C • Dry Bulb</div>
                      <div className="text-[11px] text-slate-400">IMD Doppler Station #412</div>
                    </div>
                  </div>
                  <span className="px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 text-[10px] font-bold rounded">
                    Δ-T: 4.2°C (Optimal)
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-2 text-[11px] pt-2 border-t border-indigo-950">
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-400">VPD (Vapor Deficit)</span>
                    <p className="text-cyan-400 font-bold">1.15 kPa</p>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-400">Solar Irradiance</span>
                    <p className="text-amber-400 font-bold">680 W/m²</p>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-400">Dew Point</span>
                    <p className="text-teal-400 font-bold">16.4°C</p>
                  </div>
                  <div className="p-2 rounded bg-black/40 border border-white/5">
                    <span className="text-slate-400">Wind Vector</span>
                    <p className="text-indigo-400 font-bold">7.2 km/h NW</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Tab 2: Mandi Spot Rates & Basis Arbitrage */}
      {activeDashboardTab === 'mandi' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">
                {mode === 'easy' ? 'Today\'s Mandi Market Rates' : 'APMC Spot Rates & Inter-Mandi Arbitrage Matrix'}
              </h3>
              <p className="text-xs text-slate-500">
                {mode === 'easy' ? 'Real-time prices from nearby APMC mandis' : 'e-NAM Live Agmarknet Feed • MSP Basis Spreads • NCDEX Futures Contango'}
              </p>
            </div>
            <span className="text-xs text-emerald-600 font-bold">Refreshed 2m ago</span>
          </div>

          {mode === 'easy' ? (
            /* Simple Mode Mandi Table */
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {mandiRates.map((m, idx) => (
                <div key={idx} className="py-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-extrabold text-sm text-slate-900 dark:text-white">{m.crop}</span>
                      <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-bold">
                        Good Time to Sell 📈
                      </span>
                    </div>
                    <div className="text-xs text-slate-500 mt-0.5">{m.mandi} • Govt MSP: {m.msp}/qtl</div>
                  </div>
                  <div className="flex items-center gap-3 self-end sm:self-center">
                    <div className="text-right">
                      <div className="font-black text-base text-slate-900 dark:text-white">{m.spotPrice}</div>
                      <div className="text-xs font-bold text-emerald-600">
                        {m.mspSpread}
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        setActiveNav('module');
                        setActiveModule('market');
                      }}
                      className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm cursor-pointer"
                    >
                      Sell Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Advance Mode Mandi Arbitrage Matrix */
            <div className="space-y-3 font-mono">
              {mandiRates.map((m, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-indigo-900/50 text-white space-y-2">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-sm text-white">{m.crop}</span>
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800">
                          {m.qualityGrade}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">Terminal APMC: {m.mandi} • Ref Standard Agmarknet #AG-991</p>
                    </div>
                    <div className="text-right">
                      <div className="text-base font-black text-emerald-400">{m.spotPrice}</div>
                      <div className="text-[11px] text-emerald-300 font-bold">{m.mspSpread}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-[11px] pt-2 border-t border-indigo-950">
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-slate-400">Inter-Mandi Arbitrage</span>
                      <p className="text-cyan-300 font-bold">{m.arbitrageMandi} ({m.arbitrageSpread})</p>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5">
                      <span className="text-slate-400">NCDEX 30-Day Spread</span>
                      <p className="text-amber-300 font-bold">{m.futuresSpread}</p>
                    </div>
                    <div className="p-2 rounded bg-black/40 border border-white/5 flex items-center justify-between">
                      <div>
                        <span className="text-slate-400">Warehouse Pledge</span>
                        <p className="text-emerald-400 font-bold">WDRA e-NWR Ready</p>
                      </div>
                      <button
                        onClick={() => {
                          setActiveNav('module');
                          setActiveModule('market');
                        }}
                        className="px-2.5 py-1 rounded bg-indigo-600 hover:bg-indigo-500 text-white text-[10px] font-bold cursor-pointer"
                      >
                        Arbitrage
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          <button
            onClick={() => {
              setActiveNav('module');
              setActiveModule('market');
            }}
            className="w-full py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 dark:bg-emerald-950/40 dark:hover:bg-emerald-900/50 text-emerald-800 dark:text-emerald-300 font-extrabold text-xs flex items-center justify-center gap-1.5 transition-all border border-emerald-300 dark:border-emerald-800 cursor-pointer"
          >
            <span>Open All Indian APMC Mandis & Buyer Cockpit</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Tab 3: Rain & Spray Radar */}
      {activeDashboardTab === 'weather' && (
        <div className="space-y-6">
          {/* Top Spray Window Hero Banner */}
          <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-lg relative overflow-hidden border border-emerald-700/50">
            <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 relative z-10">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold tracking-wide">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  LIVE SPRAY WINDOW: OPTIMAL
                </div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight">Hyperlocal Rain & Spray Feasibility Radar</h3>
                <p className="text-emerald-100/80 text-xs sm:text-sm max-w-2xl leading-relaxed">
                  Delta-T is <strong className="text-white">3.8</strong> (Ideal 2–8). Wind drift speed is low (7.2 km/h). Safe for foliar fungicide, herbicide & micronutrient spray across all farm parcels.
                </p>
              </div>

              <div className="flex flex-wrap md:flex-col items-start md:items-end gap-2 shrink-0">
                <button
                  onClick={() => setActiveNav('weather')}
                  className="px-4 py-2.5 rounded-xl bg-white hover:bg-emerald-50 text-emerald-900 font-extrabold text-xs flex items-center gap-2 shadow-md transition-all cursor-pointer"
                >
                  <span>Open 14-Day Microclimate Radar</span>
                  <ExternalLink className="w-4 h-4 text-emerald-700" />
                </button>
                <span className="text-[11px] text-emerald-200/70 font-mono">IMD Doppler Station • Updated 4m ago</span>
              </div>
            </div>

            {/* Quick Metrics Strip */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-5 border-t border-emerald-700/60">
              <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold">
                  <Thermometer className="w-4 h-4 text-amber-400" />
                  <span>Ambient Temp</span>
                </div>
                <div className="text-xl font-black mt-1">28.4°C</div>
                <div className="text-[11px] text-emerald-300">Min 19°C • Max 32°C</div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span>Humidity</span>
                </div>
                <div className="text-xl font-black mt-1">54%</div>
                <div className="text-[11px] text-emerald-300">Dew Point: 18.2°C</div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold">
                  <Wind className="w-4 h-4 text-teal-300" />
                  <span>Wind Speed</span>
                </div>
                <div className="text-xl font-black mt-1">7.2 km/h</div>
                <div className="text-[11px] text-emerald-300">Gusts: 11 km/h (Low Drift)</div>
              </div>

              <div className="p-3 rounded-xl bg-black/20 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 text-emerald-200 text-xs font-semibold">
                  <CloudRain className="w-4 h-4 text-blue-400" />
                  <span>Rain Risk (48h)</span>
                </div>
                <div className="text-xl font-black mt-1">5%</div>
                <div className="text-[11px] text-emerald-300">No Washout Expected</div>
              </div>
            </div>
          </div>

          {/* 24-Hour Spray & Cloud Timeline */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">Hourly Spray Feasibility & Precipitation Timeline</h4>
                <p className="text-xs text-slate-500">Real-time Delta-T and droplet evaporation index for today</p>
              </div>
              <div className="flex items-center gap-3 text-xs font-bold">
                <span className="flex items-center gap-1.5 text-emerald-600"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500" /> Safe Window</span>
                <span className="flex items-center gap-1.5 text-amber-500"><span className="w-2.5 h-2.5 rounded-full bg-amber-400" /> Caution</span>
                <span className="flex items-center gap-1.5 text-red-500"><span className="w-2.5 h-2.5 rounded-full bg-red-500" /> Unsafe / Rain</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-8 gap-2 pt-2 overflow-x-auto">
              {[
                { time: '06:00', icon: '🌅', temp: '21°C', rain: '0%', status: 'Safe', deltaT: '2.1', safe: true },
                { time: '09:00', icon: '☀️', temp: '25°C', rain: '0%', status: 'Optimal', deltaT: '3.6', safe: true },
                { time: '12:00', icon: '☀️', temp: '30°C', rain: '2%', status: 'Optimal', deltaT: '4.8', safe: true },
                { time: '15:00', icon: '⛅', temp: '32°C', rain: '5%', status: 'Caution', deltaT: '6.4', safe: false, caution: true },
                { time: '18:00', icon: '🌤️', temp: '28°C', rain: '5%', status: 'Optimal', deltaT: '3.9', safe: true },
                { time: '21:00', icon: '🌙', temp: '24°C', rain: '0%', status: 'Safe', deltaT: '2.4', safe: true },
                { time: '00:00', icon: '🌌', temp: '22°C', rain: '0%', status: 'Dew Risk', deltaT: '1.2', safe: false, caution: true },
                { time: '03:00', icon: '🌫️', temp: '20°C', rain: '0%', status: 'Dew Risk', deltaT: '0.9', safe: false, caution: true },
              ].map((h, i) => (
                <div 
                  key={i} 
                  className={`p-3 rounded-xl border text-center transition-all ${
                    h.safe 
                      ? 'bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/50' 
                      : 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/50'
                  }`}
                >
                  <div className="text-[11px] font-bold text-slate-500 dark:text-slate-400">{h.time}</div>
                  <div className="text-xl my-1">{h.icon}</div>
                  <div className="font-extrabold text-sm text-slate-900 dark:text-white">{h.temp}</div>
                  <div className="text-[10px] text-blue-600 dark:text-blue-400 font-semibold mt-0.5">🌧️ {h.rain}</div>
                  <div className={`mt-2 py-0.5 px-1.5 rounded text-[10px] font-extrabold ${
                    h.safe 
                      ? 'bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200' 
                      : 'bg-amber-100 dark:bg-amber-900/60 text-amber-800 dark:text-amber-200'
                  }`}>
                    {h.status}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5-Day Agro-Meteorological Advisory Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">5-Day Microclimate Forecast & Rainfall Outlook</h4>
                <span className="text-xs font-bold text-emerald-600 bg-emerald-50 dark:bg-emerald-950/50 px-2.5 py-1 rounded-lg">Raipur Farm Cluster A</span>
              </div>

              <div className="divide-y divide-slate-100 dark:divide-slate-800">
                {[
                  { day: 'Today', date: 'Thu, Oct 15', condition: 'Sunny & Clear', icon: '☀️', high: 32, low: 20, rain: 0, sprayWindow: 'Optimal All Day' },
                  { day: 'Tomorrow', date: 'Fri, Oct 16', condition: 'Partly Sunny', icon: '⛅', high: 31, low: 21, rain: 5, sprayWindow: 'Optimal (08:00 - 16:00)' },
                  { day: 'Saturday', date: 'Sat, Oct 17', condition: 'Scattered Clouds', icon: '🌤️', high: 30, low: 21, rain: 15, sprayWindow: 'Safe Morning Only' },
                  { day: 'Sunday', date: 'Sun, Oct 18', condition: 'Breezy & Overcast', icon: '☁️', high: 29, low: 20, rain: 35, sprayWindow: 'Caution (Wind 18km/h)' },
                  { day: 'Monday', date: 'Mon, Oct 19', condition: 'Light Showers', icon: '🌧️', high: 27, low: 19, rain: 65, sprayWindow: 'Avoid (Washout Risk)' }
                ].map((d, idx) => (
                  <div key={idx} className="py-3.5 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{d.icon}</span>
                      <div>
                        <div className="font-extrabold text-sm text-slate-900 dark:text-white">{d.day} <span className="text-xs font-normal text-slate-400">({d.date})</span></div>
                        <div className="text-xs text-slate-500">{d.condition}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-6">
                      <div className="text-right">
                        <div className="text-xs font-bold text-slate-900 dark:text-white">{d.high}° / <span className="text-slate-400">{d.low}°</span></div>
                        <div className="text-[11px] text-blue-600 font-semibold">{d.rain}% Rain</div>
                      </div>

                      <div className="hidden sm:block">
                        <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                          d.rain < 20 
                            ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800' 
                            : d.rain < 50
                            ? 'bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800'
                            : 'bg-red-50 dark:bg-red-950/60 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-800'
                        }`}>
                          {d.sprayWindow}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ICAR Official Agro-Met Advisory Card */}
            <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-800 dark:text-emerald-300">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>ICAR Agro-Met Bulletin</span>
                </div>
                <h5 className="font-extrabold text-sm text-slate-900 dark:text-white leading-snug">
                  Recommended Spray & Irrigation Protocol
                </h5>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  With zero precipitation in the 48-hour outlook and optimal relative humidity (54%), farmers are advised to complete foliar nutrition (Zinc Sulfate 0.5% + Urea 1%) and preventative rust sprays before Sunday.
                </p>
                <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800/50 text-[11px] text-amber-800 dark:text-amber-300">
                  ⚠️ <strong>Soil Moisture Alert:</strong> Parcel B moisture is at 31%. Schedule 45-min drip cycle before tomorrow afternoon.
                </div>
              </div>

              <button
                onClick={() => setActiveNav('weather')}
                className="w-full py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold text-xs flex items-center justify-center gap-2 shadow-sm transition-all cursor-pointer"
              >
                <span>View Full Meteorological Station</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tab 4: Direct Buyer Offers & Escrow */}
      {activeDashboardTab === 'bids' && (
        <div className="space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Direct-to-Farmer B2B Forward Tenders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buyerBids.map((b) => {
              const isAccepted = bidsAccepted.includes(b.id);
              return (
                <div key={b.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {b.id}
                    </span>
                    <span className="text-[11px] text-slate-400">Expires in {b.expiry}</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{b.buyer}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{b.crop}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Offer Rate</div>
                      <div className="font-extrabold text-slate-900 dark:text-white text-sm">{b.offerPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Escrow Guaranteed</div>
                      <div className="font-extrabold text-emerald-600 text-sm">{b.escrowLocked}</div>
                    </div>
                  </div>
                  <button
                    disabled={isAccepted}
                    onClick={() => handleAcceptBid(b.id, b.buyer, b.offerPrice)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      isAccepted
                        ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                    }`}
                  >
                    {isAccepted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Tender Accepted (Escrow Locked)</span>
                      </>
                    ) : (
                      <>
                        <Handshake className="w-4 h-4" />
                        <span>{t('roles.farmer.actions.acceptOffer')}</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
