import './style.css';
import { createIcons, icons } from 'lucide';
import confetti from 'canvas-confetti';

import { renderHeader } from './components/Header.js';
import { renderSidebar } from './components/Sidebar.js';
import { renderHero } from './components/Hero.js';
import { renderProblemSolution } from './components/ProblemSolution.js';
import { renderEcosystemJourney } from './components/EcosystemJourney.js';
import { renderFeatureSuite } from './components/FeatureSuite.js';
import { renderFarmerDashboard } from './components/FarmerDashboard.js';
import { roleDashboardTranslations } from './components/RoleDashboard.js';
import { renderMarketplaceSection } from './components/MarketplaceSection.js';
import { renderAdvisorySection } from './components/AdvisorySection.js';
import { renderChatbotWidget, getGeminiAgronomyAnswer } from './components/ChatbotWidget.js';
import { renderAuthModal } from './components/AuthModal.js';
import { renderPillarModal, generatePillarModalContent } from './components/PillarModal.js';
import { renderFooter } from './components/Footer.js';
import { renderLoginScreen } from './components/LoginScreen.js';
import { renderEditDataModal, editModalTranslations } from './components/EditDataModal.js';
import { getMarketplaceItems } from './data/marketplaceItems.js';
import { getMandiCommodities } from './data/mandiData.js';
import { renderLeafScannerSection, cropDiseasesDatabase } from './components/LeafScannerSection.js';

import { translations } from './data/translations.js';
import { pillarsData } from './data/pillarsData.js';

// Application State
const state = {
  isAuthenticated: false, // Starts on Authentication / Login Screen
  selectedRole: 'farmer', // 'farmer', 'buyer', 'supplier', 'expert'
  userName: '', // Personalized user name from login
  userPhone: '98765 43210',
  userRole: 'farmer',
  farmData: {
    farmName: 'Raipur Farm, Cluster A',
    acreage: '14.5 Acres',
    yield: '242 Qtls',
    projectedIncome: '₹13,00,100',
    escrowPayout: '₹3,76,500',
    targetMoisture: '36%',
    primaryCrops: 'Wheat, Mustard, Basmati Rice'
  },
  marketplaceItems: null, // Initialized dynamically with getMarketplaceItems(state.currentLang)
  mandiCommodities: null, // Initialized dynamically with getMandiCommodities(state.currentLang)
  editModal: {
    open: false,
    mode: null,
    targetId: null
  },
  currentLang: 'en', // 'en', 'hi', 'ta', 'fr'
  understandingMode: 'easy', // 'easy' (Farmer Simple View) | 'detailed' (Tech Advanced View)
  theme: 'light', // 'light' | 'dark'
  activeView: 'overview', // 'overview' | 'workflow' | 'pillars' | 'dashboard' | 'marketplace' | 'advisory'
  activeEcosystemStep: 1,
  activePillarCategory: 'All',
  pillarSearchQuery: '',
  activeDashboardTab: 'overview',
  mandiSearch: '',
  selectedDiagnosticSampleId: 'sample-wheat-rust',
  isScanningActive: false,
  capturedLeafImage: null,
  cameraStream: null,
  activeMarketCategory: 'All',
  isDripRunning: false,
  heroMoisture: 36,
  chatOpen: false,
  chatSound: true,
  authModalOpen: false,
  pillarModalOpen: false,
  activePillar: null,
  activeEscrowTotal: 376500,
  isLoggedIn: false
};

function getActiveMarketplaceItems() {
  if (!state.marketplaceItems) {
    state.marketplaceItems = getMarketplaceItems(state.currentLang);
  }
  return state.marketplaceItems;
}

function getActiveMandiCommodities() {
  if (!state.mandiCommodities) {
    state.mandiCommodities = getMandiCommodities(state.currentLang);
  }
  return state.mandiCommodities;
}

function syncCatalogLanguage(newLang) {
  const freshMarket = getMarketplaceItems(newLang);
  const freshMandi = getMandiCommodities(newLang);
  
  if (state.marketplaceItems) {
    state.marketplaceItems = state.marketplaceItems.map(item => {
      const match = freshMarket.find(f => f.id === item.id);
      if (match) {
        return {
          ...match,
          price: item.isCustomPrice ? item.price : match.price,
          unit: item.isCustomPrice ? item.unit : match.unit,
          stock: item.stock || match.stock
        };
      }
      return item;
    });
  } else {
    state.marketplaceItems = freshMarket;
  }

  if (state.mandiCommodities) {
    state.mandiCommodities = state.mandiCommodities.map(m => {
      const match = freshMandi.find(f => f.id === m.id);
      if (match) {
        return {
          ...match,
          modalPrice: m.isCustomPrice ? m.modalPrice : match.modalPrice,
          minPrice: m.isCustomPrice ? m.minPrice : match.minPrice,
          maxPrice: m.isCustomPrice ? m.maxPrice : match.maxPrice
        };
      }
      return m;
    });
  } else {
    state.mandiCommodities = freshMandi;
  }
}

// Web Audio API synthesizer for sound effects
function playSound(type = 'msg') {
  if (!state.chatSound) return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);

    if (type === 'msg') {
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.15);
      gain.gain.setValueAtTime(0.08, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.15);
      osc.start();
      osc.stop(ctx.currentTime + 0.15);
    } else if (type === 'success') {
      osc.frequency.setValueAtTime(523.25, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1046.50, ctx.currentTime + 0.25);
      gain.gain.setValueAtTime(0.12, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.25);
      osc.start();
      osc.stop(ctx.currentTime + 0.25);
    }
  } catch (e) {
    // Ignore audio permission restrictions
  }
}

// Global Toast System
export function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.style.borderLeftColor = type === 'success' ? 'var(--primary-600)' : type === 'info' ? '#0284C7' : '#DC2626';

  const iconName = type === 'success' ? 'check-circle' : type === 'info' ? 'info' : 'alert-circle';
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="icon-sm" style="color: ${type === 'success' ? 'var(--primary-600)' : type === 'info' ? '#0284C7' : '#DC2626'}; flex-shrink: 0;"></i>
    <div style="flex: 1; font-weight: 500; font-size: 0.88rem; color: var(--slate-900);">${message}</div>
  `;

  container.appendChild(toast);
  createIcons({ icons });
  playSound('msg');

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(40px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4500);
}

// Workspace Breadcrumb & Header Title Metadata
const workspaceHeadersByLang = {
  en: {
    overview: {
      heading: (mode) => mode === 'easy' ? 'CropCare Smart Agriculture Platform' : 'Agricultural Operating Continuum',
      subheading: (mode) => mode === 'easy' 
        ? 'From Soil to Success • Easy tools to test soil, check prices, and earn higher profits.'
        : 'Synchronized IoT soil telemetry, predictive APMC price arbitrage, and T+0 digital escrow settlements.'
    },
    marketplace: {
      heading: (mode) => mode === 'easy' ? 'Direct Farm Inputs & Drone Services' : 'Certified Input Procurement & Machinery Terminal',
      subheading: (mode) => mode === 'easy'
        ? 'Buy genuine seeds, book crop spraying drones, and order bio-fertilizers with guaranteed authenticity.'
        : 'ICAR-certified seed genebanks, high-precision autonomous spraying UAVs, and decentralized equipment rentals.'
    },
    advisory: {
      heading: (mode) => mode === 'easy' ? 'Crop Doctor & AI Advisory Hub' : 'Agronomic Decision Support & Pathology Intelligence',
      subheading: (mode) => mode === 'easy'
        ? 'Talk to agricultural university doctors or ask our 24/7 AI assistant about any crop issue.'
        : 'Gemini Agro 2.5 multi-spectral diagnostic engine, university agronomist telemetry sessions, and disease triage.'
    },
    scanner: {
      heading: (mode) => mode === 'easy' ? 'AI Leaf Doctor & Vision Scanner' : 'Multi-Spectral Phytopathology & Lesion Diagnostic Console',
      subheading: (mode) => mode === 'easy'
        ? 'Snap or upload a leaf photo to get immediate diagnosis, disease severity meter, and organic cure solutions.'
        : 'Gemini Vision AI neural feature extraction for leaf venation chlorosis, spore quantification, and chemical prescriptions.'
    }
  },
  hi: {
    overview: {
      heading: (mode) => mode === 'easy' ? 'क्रॉपकेयर स्मार्ट कृषि मंच' : 'एकीकृत कृषि परिचालन प्रणाली',
      subheading: (mode) => mode === 'easy'
        ? 'मिट्टी से मुनाफे तक • मिट्टी परीक्षण, रोज़ के सही मंडी भाव और सीधे खाते में भुगतान।'
        : 'IoT मृदा सेंसर, उपग्रह निगरानी, पारदर्शी डिजिटल नीलामी और T+0 डिजिटल एस्क्रो भुगतान।'
    },
    marketplace: {
      heading: (mode) => mode === 'easy' ? 'प्रमाणित बीज, खाद व ड्रोन सेवाएं' : 'प्रमाणित कृषि इनपुट व कस्टम मशीनरी टर्मिनल',
      subheading: (mode) => mode === 'easy'
        ? 'असली बीज खरीदें, स्प्रे के लिए ड्रोन बुक करें और उच्च गुणवत्ता वाली खाद सीधे मंगाएं।'
        : 'आईसीएआर प्रमाणित ब्रीडर बीज, स्वायत्त स्प्रे यूएवी और पंजीकृत कृषि मशीनरी रेंटल सेवाएं।'
    },
    advisory: {
      heading: (mode) => mode === 'easy' ? 'फसल डॉक्टर एवं एआई सलाहकार केंद्र' : 'कृषि निर्णय समर्थन एवं पादप रोग विज्ञान हब',
      subheading: (mode) => mode === 'easy'
        ? 'विश्वविद्यालय के कृषि वैज्ञानिकों से मुफ्त सलाह लें या 24/7 एआई सहायक से तुरंत पूछें।'
        : 'जेमिनी एग्रो 2.5 मल्टी-स्पेक्ट्रल डायग्नोस्टिक इंजन, कृषि वैज्ञानिकों से लाइव टेली-कंसल्ट और त्वरित पर्ची।'
    },
    scanner: {
      heading: (mode) => mode === 'easy' ? 'एआई पत्ता डॉक्टर एवं विज़न स्कैनर' : 'मल्टी-स्पेक्ट्रल पादपरोग एवं घाव निदान कंसोल',
      subheading: (mode) => mode === 'easy'
        ? 'पत्ती की फोटो खींचें या अपलोड करें, तुरंत रोग का नाम, गंभीरता और सटीक जैविक व रासायनिक दवा पाएं।'
        : 'जेमिनी विज़न एआई न्यूरल नेटवर्क द्वारा पत्तियों की शिराओं, फफूंद के बीजाणुओं और रासायनिक खुराक का विश्लेषण।'
    }
  },
  ta: {
    overview: {
      heading: (mode) => mode === 'easy' ? 'க்ராப்கேர் ஸ்மார்ட் விவசாய தளம்' : 'ஒருங்கிணைந்த வேளாண் இயக்க தளம்',
      subheading: (mode) => mode === 'easy'
        ? 'மண்ணிலிருந்து வெற்றி வரை • மண் பரிசோதனை, நேரடி மண்டி விலைகள் மற்றும் அதிக லாபம்.'
        : 'மண் IoT சென்சார்கள், செயற்கைக்கோள் பயிர் நலம், நேரடி ஏலம் மற்றும் T+0 எஸ்க்ரோ வங்கி கட்டணங்கள்.'
    },
    marketplace: {
      heading: (mode) => mode === 'easy' ? 'நேரடி விவசாய உள்ளீடுகள் & ட்ரோன் சேவைகள்' : 'சான்றளிக்கப்பட்ட இடுபொருட்கள் & இயந்திர முனையம்',
      subheading: (mode) => mode === 'easy'
        ? 'உண்மையான விதைகளை வாங்கவும், மருந்து தெளிக்க ட்ரோன்களை பதிவு செய்யவும், தரமான உரங்களை பெறவும்.'
        : 'ICAR சான்றளிக்கப்பட்ட விதைகள், தானியங்கி தெளிப்பு ட்ரோன்கள் மற்றும் விவசாய இயந்திர வாடகை மையம்.'
    },
    advisory: {
      heading: (mode) => mode === 'easy' ? 'பயிர் மருத்துவர் & AI ஆலோசனை மையம்' : 'வேளாண் முடிவெடுக்கும் மையம் & நோயியல் நுண்ணறிவு',
      subheading: (mode) => mode === 'easy'
        ? 'பல்கலைக்கழக வேளாண் மருத்துவரிடம் பேசவும் அல்லது 24/7 AI உதவியாளரிடம் கேள்வி கேட்கவும்.'
        : 'ஜெமினி அக்ரோ 2.5 மல்டி-ஸ்பெக்ட்ரல் நோய் கண்டறிதல், விஞ்ஞானிகளுடன் நேரடி ஆலோசனை மற்றும் மருந்து பரிந்துரை.'
    },
    scanner: {
      heading: (mode) => mode === 'easy' ? 'AI இலை மருத்துவர் & பார்வை ஸ்கேனர்' : 'மல்டி-ஸ்பெக்ட்ரல் தாவர நோயியல் & புண் கண்டறிதல் மையம்',
      subheading: (mode) => mode === 'easy'
        ? 'இலையின் புகைப்படத்தை எடுத்து உடனடியாக நோய், அதன் தீவிரம் மற்றும் இயற்கை மருந்துகளை அறியவும்.'
        : 'ஜெமினி விஷன் AI நரம்பியல் நெட்வொர்க் மூலம் இலை நரம்புகள், மஞ்சள் புள்ளிகள் மற்றும் மருந்து அளவு கணக்கீடு.'
    }
  },
  fr: {
    overview: {
      heading: (mode) => mode === 'easy' ? 'Plateforme Agricole Intelligente CropCare' : 'Système d\'Exploitation Agricole Intégré',
      subheading: (mode) => mode === 'easy'
        ? 'De la Terre au Succès • Outils simples pour tester le sol, suivre les cours et maximiser vos profits.'
        : 'Télémétrie de sol IoT synchronisée, arbitrage des cours spot et règlements garantis par séquestre T+0.'
    },
    marketplace: {
      heading: (mode) => mode === 'easy' ? 'Semences Certifiées & Services de Drones' : 'Centrale d\'Approvisionnement & Machinisme Agricole',
      subheading: (mode) => mode === 'easy'
        ? 'Achetez des semences authentiques, réservez des drones d\'épandage et commandez vos biofertilisants en direct.'
        : 'Banques de semences certifiées ICAR, drones autonomes de pulvérisation et location de matériel agricole.'
    },
    advisory: {
      heading: (mode) => mode === 'easy' ? 'Docteur des Plantes & Conseil IA' : 'Aide à la Décision Agronomique & Intelligence Pathologique',
      subheading: (mode) => mode === 'easy'
        ? 'Échangez avec des agronomes de recherche ou consultez notre assistant IA 24h/24 pour toute maladie.'
        : 'Moteur de diagnostic multi-spectral Gemini Agro 2.5, télé-consultations d\'experts et ordonnances numériques.'
    },
    scanner: {
      heading: (mode) => mode === 'easy' ? 'Docteur des Plantes IA & Scanner de Feuilles' : 'Console de Diagnostic Phytopathologique & Lésionnel Multi-Spectral',
      subheading: (mode) => mode === 'easy'
        ? 'Prenez ou téléversez une photo de feuille pour un diagnostic immédiat, la sévérité et les remèdes biologiques.'
        : 'Réseaux neuronaux Gemini Vision pour segmentation des nécroses foliaires, étiologie et prescriptions ciblées.'
    }
  }
};

const overviewJumpLabels = {
  en: {
    badge: 'Modular Ecosystem Architecture',
    title: 'Explore CropCare Workspaces',
    sub: 'Select any module below or use the persistent sidebar to navigate',
    jumps: [
      { view: 'workflow', title: '6-Step Workflow Continuum', desc: 'Plan ➔ Discover ➔ Match ➔ Coordinate ➔ Sell & Act ➔ Track with live stage simulators.', cta: 'Launch Workflow', icon: 'git-merge', color: '#0369A1', bg: '#E0F2FE' },
      { view: 'pillars', title: 'The 18 Core Pillars', desc: 'Interactive card grid with dedicated vector icons, category filters, and live search.', cta: 'Explore Pillars', icon: 'layers', color: '#7E22CE', bg: '#F3E8FF' },
      { view: 'dashboard', title: 'Live Farmer Cockpit', desc: 'Multi-plot LoRaWAN moisture telemetry, 1200+ Mandi spot curves, and AI leaf pathology.', cta: 'Enter Cockpit', icon: 'layout-dashboard', color: '#15803D', bg: '#DCFCE7' },
      { view: 'scanner', title: 'AI Leaf Doctor & Scanner', desc: 'Interactive camera viewfinder & photo upload diagnosing blight, rust & mildew with instant remedies.', cta: 'Scan Crop Leaf', icon: 'camera', color: '#059669', bg: '#D1FAE5' },
      { view: 'advisory', title: 'AI & Expert Advisory', desc: 'Gemini Agro 2.5 intelligence, tele-consults with certified agronomists, and community triage.', cta: 'Ask Gemini AI', icon: 'bot', color: '#B45309', bg: '#FEF3C7' }
    ]
  },
  hi: {
    badge: 'मॉड्यूलर इकोसिस्टम आर्किटेक्चर',
    title: 'क्रॉपकेयर कार्यक्षेत्र का अन्वेषण करें',
    sub: 'नीचे दिए गए किसी भी मॉड्यूल को चुनें या साइडबार से नेविगेट करें',
    jumps: [
      { view: 'workflow', title: '6-चरणीय कार्यप्रणाली', desc: 'योजना ➔ खोज ➔ मिलान ➔ परिवहन ➔ बिक्री ➔ निगरानी लाइव सिमुलेटर के साथ।', cta: 'कार्यप्रणाली शुरू करें', icon: 'git-merge', color: '#0369A1', bg: '#E0F2FE' },
      { view: 'pillars', title: '18 मुख्य कृषि स्तंभ', desc: 'वेक्टर आइकन, श्रेणी फ़िल्टर और लाइव खोज के साथ 18 इंटरैक्टिव स्तंभ।', cta: 'स्तंभ देखें', icon: 'layers', color: '#7E22CE', bg: '#F3E8FF' },
      { view: 'dashboard', title: 'लाइव किसान कॉकपिट', desc: 'मृदा नमी सेंसर, 1200+ मंडियों के भाव और एआई पत्ती रोग निदान।', cta: 'कॉकपिट में जाएं', icon: 'layout-dashboard', color: '#15803D', bg: '#DCFCE7' },
      { view: 'scanner', title: 'एआई पत्ता डॉक्टर व स्कैनर', desc: 'कैमरा व फोटो अपलोड से पत्ती रोगों (रतुआ, झुलसा, थ्रिप्स) की तुरंत पहचान व सटीक उपचार।', cta: 'पत्ती स्कैन करें', icon: 'camera', color: '#059669', bg: '#D1FAE5' },
      { view: 'advisory', title: 'AI व विशेषज्ञ सलाह', desc: 'जेमिनी एग्रो 2.5 एआई, प्रमाणित कृषि वैज्ञानिकों से वीडियो कॉल और प्रश्नोत्तरी।', cta: 'जेमिनी AI से पूछें', icon: 'bot', color: '#B45309', bg: '#FEF3C7' }
    ]
  },
  ta: {
    badge: 'ஒருங்கிணைந்த கட்டமைப்பு',
    title: 'க்ராப்கேர் பணிப்பகுதிகள்',
    sub: 'கீழே உள்ள தொகுதியை தேர்ந்தெடுக்கவும் அல்லது பக்கப்பட்டியை பயன்படுத்தவும்',
    jumps: [
      { view: 'workflow', title: '6-படி பணிப்பாய்வு', desc: 'திட்டம் ➔ கண்டறிதல் ➔ பொருத்தம் ➔ ஒருங்கிணைப்பு ➔ விற்பனை ➔ கண்காணிப்பு.', cta: 'பணிப்பாய்வு திறக்க', icon: 'git-merge', color: '#0369A1', bg: '#E0F2FE' },
      { view: 'pillars', title: '18 முக்கிய தூண்கள்', desc: 'வெக்டர் ஐகான்கள், வகை வடிகட்டிகள் மற்றும் நேரடி தேடலுடன் 18 தூண்கள்.', cta: 'தூண்களை ஆராய்க', icon: 'layers', color: '#7E22CE', bg: '#F3E8FF' },
      { view: 'dashboard', title: 'விவசாயி கட்டுப்பாட்டு மையம்', desc: 'மண் ஈரப்பதம் சென்சார், 1200+ மண்டி விலைகள் மற்றும் AI நோய் ஸ்கேனர்.', cta: 'மையத்திற்கு செல்ல', icon: 'layout-dashboard', color: '#15803D', bg: '#DCFCE7' },
      { view: 'scanner', title: 'AI இலை மருத்துவர் & ஸ்கேனர்', desc: 'கேமரா & பட பதிவேற்றம் மூலம் பயிர் இலை நோய்களை கண்டறிந்து உடனடி மருந்து பெறுங்கள்.', cta: 'இலை ஸ்கேன் செய்க', icon: 'camera', color: '#059669', bg: '#D1FAE5' },
      { view: 'advisory', title: 'AI & நிபுணர் ஆலோசனை', desc: 'ஜெமினி அக்ரோ AI, வேளாண் விஞ்ஞானிகளுடன் வீடியோ அழைப்பு மற்றும் சமூகம்.', cta: 'AI-யிடம் கேட்க', icon: 'bot', color: '#B45309', bg: '#FEF3C7' }
    ]
  },
  fr: {
    badge: 'Architecture Modulaire de l\'Écosystème',
    title: 'Explorer les Espaces CropCare',
    sub: 'Sélectionnez un module ci-dessous ou naviguez via la barre latérale',
    jumps: [
      { view: 'workflow', title: 'Flux Continu en 6 Étapes', desc: 'Planifier ➔ Découvrir ➔ Associer ➔ Coordonner ➔ Vendre ➔ Suivre avec simulateurs.', cta: 'Lancer le Flux', icon: 'git-merge', color: '#0369A1', bg: '#E0F2FE' },
      { view: 'pillars', title: 'Les 18 Piliers Majeurs', desc: 'Grille interactive avec icônes vectorielles, filtres de catégories et recherche.', cta: 'Explorer les Piliers', icon: 'layers', color: '#7E22CE', bg: '#F3E8FF' },
      { view: 'dashboard', title: 'Poste de Pilotage Fermier', desc: 'Télémétrie LoRaWAN multi-parcelles, 1 200+ cours APMC et vision IA des feuilles.', cta: 'Entrer dans le Cockpit', icon: 'layout-dashboard', color: '#15803D', bg: '#DCFCE7' },
      { view: 'scanner', title: 'Docteur des Plantes & Scanner IA', desc: 'Viseur caméra direct et import photo pour diagnostiquer rouille, alternariose et thrips.', cta: 'Scanner Feuille', icon: 'camera', color: '#059669', bg: '#D1FAE5' },
      { view: 'advisory', title: 'Conseil IA & Experts', desc: 'Intelligence Gemini Agro 2.5, télé-consultations d\'agronomes et triage communautaire.', cta: 'Demander à Gemini IA', icon: 'bot', color: '#B45309', bg: '#FEF3C7' }
    ]
  }
};

function getWorkspaceCrumbInfo(viewId, lang, mode) {
  const t = translations[lang] || translations.en;
  const s = t.sidebar || {};
  const customHeaders = (workspaceHeadersByLang[lang] || workspaceHeadersByLang.en)[viewId];

  const map = {
    overview: {
      crumb: s.overview || 'Overview & Mission',
      heading: customHeaders ? customHeaders.heading(mode) : (mode === 'easy' ? 'CropCare Smart Agriculture Platform' : 'Agricultural Operating Continuum'),
      subheading: customHeaders ? customHeaders.subheading(mode) : (mode === 'easy' ? 'From Soil to Success' : 'Operating Continuum')
    },
    workflow: {
      crumb: s.workflow || '6-Step Workflow',
      heading: t.ecosystem.title || 'Interactive Ecosystem Workflow',
      subheading: mode === 'easy' ? t.ecosystem.subtitleEasy : t.ecosystem.subtitleDetailed
    },
    pillars: {
      crumb: s.pillars || '18 Feature Pillars',
      heading: t.features.title || 'Comprehensive Agriculture Feature Suite',
      subheading: mode === 'easy' ? t.features.subtitleEasy : t.features.subtitleDetailed
    },
    dashboard: {
      crumb: s.dashboard || 'Live Agri-Dashboard',
      heading: (roleDashboardTranslations[lang]?.roles[state.userRole || 'farmer']?.title) || t.dashboard.title || 'Interactive Farmer Operating Cockpit',
      subheading: (roleDashboardTranslations[lang]?.roles[state.userRole || 'farmer']?.meta) || (mode === 'easy' ? t.dashboard.subtitleEasy : t.dashboard.subtitleDetailed)
    },
    marketplace: {
      crumb: s.marketplace || 'Input Marketplace',
      heading: customHeaders ? customHeaders.heading(mode) : (mode === 'easy' ? 'Direct Farm Inputs & Drone Services' : 'Certified Input Procurement & Machinery Terminal'),
      subheading: customHeaders ? customHeaders.subheading(mode) : (mode === 'easy' ? 'Buy genuine seeds, drones, and fertilizers' : 'Certified input genebanks')
    },
    advisory: {
      crumb: s.advisory || 'AI & Expert Advisory',
      heading: customHeaders ? customHeaders.heading(mode) : (mode === 'easy' ? 'Crop Doctor & AI Advisory Hub' : 'Agronomic Decision Support & Pathology Intelligence'),
      subheading: customHeaders ? customHeaders.subheading(mode) : (mode === 'easy' ? 'Talk to doctors or ask AI' : 'Gemini Agro intelligence')
    },
    scanner: {
      crumb: s.scanner || 'AI Leaf Doctor & Scanner',
      heading: customHeaders ? customHeaders.heading(mode) : (mode === 'easy' ? 'AI Leaf Doctor & Vision Scanner' : 'Phytopathology Console'),
      subheading: customHeaders ? customHeaders.subheading(mode) : (mode === 'easy' ? 'Snap or upload leaf photo' : 'Multi-spectral leaf vision')
    }
  };

  return map[viewId] || map.overview;
}

// Render dynamic workspace view content based on activeView
function renderCurrentViewContent() {
  switch (state.activeView) {
    case 'overview': {
      const jumpsData = overviewJumpLabels[state.currentLang] || overviewJumpLabels.en;
      return `
        ${renderHero(state.currentLang, state.understandingMode)}
        ${renderProblemSolution(state.currentLang, state.understandingMode)}
        
        <!-- Quick Jump Navigation Cards for Modular Workflow -->
        <section class="overview-quick-jumps" style="padding: 36px 0 48px; background: var(--bg-card); border-top: 1px solid var(--border-subtle);">
          <div class="container">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
              <div>
                <span class="badge-pill" style="margin-bottom: 8px;">
                  <i data-lucide="sparkles" class="icon-xs" style="color: var(--primary-600);"></i>
                  <span>${jumpsData.badge}</span>
                </span>
                <h3 class="tracking-tight" style="font-size: 1.5rem; color: var(--slate-900);">${jumpsData.title}</h3>
              </div>
              <div style="font-size: 0.85rem; color: var(--slate-600);">
                ${jumpsData.sub}
              </div>
            </div>

            <div class="gap-6" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));">
              ${jumpsData.jumps.map(jump => `
                <div class="overview-jump-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" data-view="${jump.view}" style="padding: 22px; background: var(--bg-page); border: 1px solid var(--border-light); border-radius: var(--radius-md); cursor: pointer;">
                  <div style="width: 40px; height: 40px; border-radius: 10px; background: ${jump.bg}; color: ${jump.color}; display: flex; align-items: center; justify-content: center; margin-bottom: 14px;">
                    <i data-lucide="${jump.icon}" class="icon-sm"></i>
                  </div>
                  <h4 class="tracking-tight" style="font-size: 1.15rem; margin-bottom: 6px; color: var(--slate-900);">${jump.title}</h4>
                  <p style="font-size: 0.825rem; color: var(--slate-600); margin-bottom: 12px; line-height: 1.5;">
                    ${jump.desc}
                  </p>
                  <span style="font-size: 0.8rem; font-weight: 700; color: ${jump.color}; display: inline-flex; align-items: center; gap: 4px;">
                    ${jump.cta} <i data-lucide="arrow-right" class="icon-xs"></i>
                  </span>
                </div>
              `).join('')}
            </div>
          </div>
        </section>
      `;
    }
    case 'workflow':
      return renderEcosystemJourney(state.activeEcosystemStep, state.currentLang, state.understandingMode);
    case 'pillars':
      return renderFeatureSuite(state.activePillarCategory, state.pillarSearchQuery, state.currentLang, state.understandingMode);
    case 'dashboard':
      return renderFarmerDashboard(
        state.activeDashboardTab, 
        state.mandiSearch, 
        state.selectedDiagnosticSampleId, 
        state.currentLang, 
        state.understandingMode,
        state.userName,
        state.userRole,
        state.farmData,
        getActiveMandiCommodities()
      );
    case 'marketplace':
      return renderMarketplaceSection(
        state.activeMarketCategory, 
        state.currentLang, 
        state.understandingMode,
        getActiveMarketplaceItems()
      );
    case 'advisory':
      return renderAdvisorySection(state.currentLang, state.understandingMode);
    case 'scanner':
      return renderLeafScannerSection(
        state.currentLang,
        state.understandingMode,
        state.selectedDiagnosticSampleId,
        state.isScanningActive,
        state.capturedLeafImage,
        state.scannerActiveFilter || 'all'
      );
    default:
      return renderHero(state.currentLang, state.understandingMode);
  }
}

function changeGlobalLanguage(targetLang) {
  if (!targetLang) return;
  state.currentLang = targetLang;
  syncCatalogLanguage(targetLang);
  renderApp();

  const langNames = {
    en: 'English (EN)',
    hi: 'हिंदी (HI)',
    ta: 'தமிழ் (TA)',
    fr: 'Français (FR)'
  };
  const toasts = {
    en: `Language set to ${langNames[targetLang] || targetLang}`,
    hi: `भाषा बदलकर ${langNames[targetLang] || targetLang} की गई`,
    ta: `மொழி ${langNames[targetLang] || targetLang} என மாற்றப்பட்டது`,
    fr: `Langue configurée sur ${langNames[targetLang] || targetLang}`
  };
  showToast(toasts[targetLang] || toasts.en, 'info');
}

function attachLanguageDropdownListeners(idPrefix) {
  const wrap = document.getElementById(`${idPrefix}LangDropdownWrap`);
  const trigger = document.getElementById(`${idPrefix}LangDropdownTrigger`);
  if (!wrap || !trigger) return;

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    // Close other dropdowns
    document.querySelectorAll('.lang-dropdown-container').forEach(c => {
      if (c !== wrap) {
        c.classList.remove('open');
        c.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      }
    });
    document.getElementById('notificationsPopover')?.classList.remove('open');
    document.getElementById('profilePopover')?.classList.remove('open');

    const isOpen = wrap.classList.toggle('open');
    trigger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  wrap.querySelectorAll('.lang-menu-item').forEach(item => {
    item.addEventListener('click', (e) => {
      e.stopPropagation();
      const newLang = item.dataset.lang;
      wrap.classList.remove('open');
      trigger.setAttribute('aria-expanded', 'false');
      changeGlobalLanguage(newLang);
    });
  });

  // Fallback select element sync
  const select = document.getElementById(idPrefix === 'header' ? 'langSelect' : 'loginLangSelect');
  if (select) {
    select.addEventListener('change', (e) => {
      changeGlobalLanguage(e.target.value);
    });
  }
}

function attachLoginScreenListeners() {
  // Role selector buttons
  document.querySelectorAll('.role-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const role = btn.dataset.role;
      if (role && role !== state.selectedRole) {
        state.selectedRole = role;
        renderApp();
      }
    });
  });

  // Custom Language Selector Dropdown on Login Screen
  attachLanguageDropdownListeners('login');

  // Theme toggle on Login Screen
  const loginThemeBtn = document.getElementById('loginThemeToggleBtn');
  if (loginThemeBtn) {
    loginThemeBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      const icon = document.getElementById('loginThemeIcon');
      if (icon) {
        icon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
        createIcons({ icons });
      }
      showToast(`Theme changed to ${state.theme === 'dark' ? 'Dark OLED' : 'Crisp Agricultural Light'}`, 'info');
    });
  }

  // 1-Click Instant Demo Login
  const demoBtn = document.getElementById('instantDemoLoginBtn');
  if (demoBtn) {
    demoBtn.addEventListener('click', () => {
      handleSuccessfulLogin('demo');
    });
  }

  // Mobile / OTP Login Form
  const form = document.getElementById('portalLoginForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleSuccessfulLogin('standard');
    });
  }
}

function handleSuccessfulLogin(loginMode = 'standard') {
  confetti({
    particleCount: 90,
    spread: 75,
    origin: { y: 0.6 }
  });
  playSound('success');

  state.isAuthenticated = true;
  state.isLoggedIn = true;

  // Retrieve user-entered full name
  const nameInput = document.getElementById('loginNameInput');
  const enteredName = nameInput ? nameInput.value.trim() : '';
  if (enteredName) {
    state.userName = enteredName;
  } else {
    state.userName = 'Demo User';
  }

  const phoneInput = document.getElementById('loginPhoneInput');
  if (phoneInput && phoneInput.value.trim()) {
    state.userPhone = phoneInput.value.trim();
  }

  state.userRole = state.selectedRole;
  state.activeView = 'dashboard';
  if (state.selectedRole === 'buyer') {
    state.activeDashboardTab = 'procurement';
  } else if (state.selectedRole === 'supplier') {
    state.activeDashboardTab = 'inventory';
  } else if (state.selectedRole === 'expert') {
    state.activeDashboardTab = 'telemetry';
  } else {
    state.activeDashboardTab = 'overview';
  }

  const roleTitles = {
    farmer: state.currentLang === 'hi' ? 'प्रमाणित किसान • पंजाब' : state.currentLang === 'ta' ? 'சான்றளிக்கப்பட்ட உழவர்' : state.currentLang === 'fr' ? 'Exploitant Vérifié' : 'Verified Farmer • Punjab',
    buyer: state.currentLang === 'hi' ? 'थोक कृषि खरीदार' : state.currentLang === 'ta' ? 'மொத்த கொள்முதலாளர்' : state.currentLang === 'fr' ? 'Acheteur Agréé' : 'Agri Procurement Buyer',
    supplier: state.currentLang === 'hi' ? 'कृषि मशीनरी व बीज डीलर' : state.currentLang === 'ta' ? 'டிராக்டர் டீலர்' : state.currentLang === 'fr' ? 'Concessionnaire Matériel' : 'Certified Equipment Dealer',
    expert: state.currentLang === 'hi' ? 'कृषि वैज्ञानिक सलाहकार' : state.currentLang === 'ta' ? 'வேளாண் விஞ்ஞானி' : state.currentLang === 'fr' ? 'Agronome Référent' : 'Agronomist Expert'
  };

  const title = roleTitles[state.selectedRole] || roleTitles.farmer;
  const welcomeMsg = loginMode === 'demo'
    ? `${state.currentLang === 'hi' ? 'त्वरित डेमो प्रवेश स्वीकृत!' : state.currentLang === 'ta' ? 'டெமோ உள்நுழைவு தயார்!' : state.currentLang === 'fr' ? 'Accès démo validé !' : 'Demo access granted!'} ${state.userName} (${title})`
    : `${state.currentLang === 'hi' ? 'ई-नाम आधार सत्यापन सफल! स्वागत है' : state.currentLang === 'ta' ? 'சரிபார்க்கப்பட்டது! வருக' : state.currentLang === 'fr' ? 'Identité vérifiée ! Bienvenue' : 'e-NAM & Aadhaar KYC Verified! Welcome'}, ${state.userName}`;

  showToast(welcomeMsg, 'success');

  // Smooth slide out animation before rendering app shell
  const wrapper = document.getElementById('loginPageWrapper');
  if (wrapper) {
    wrapper.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
    wrapper.style.transform = 'translateY(-15px) scale(0.98)';
    wrapper.style.opacity = '0';
    setTimeout(() => {
      renderApp();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 320);
  } else {
    renderApp();
  }
}

// Initial Full Render with App-Shell Layout
function renderApp() {
  const app = document.getElementById('app');
  if (!app) return;

  // Initial Auth / Login Screen Check
  if (!state.isAuthenticated) {
    app.innerHTML = renderLoginScreen(state.currentLang, state.selectedRole);
    createIcons({ icons });
    attachLoginScreenListeners();
    return;
  }

  const crumbInfo = getWorkspaceCrumbInfo(state.activeView, state.currentLang, state.understandingMode);

  app.innerHTML = `
    <div class="app-shell" id="appShell">
      <!-- Persistent Top Navigation Bar -->
      ${renderHeader(state.currentLang, state.understandingMode, state.activeView, state.userName, state.userRole)}

      <div class="app-shell-body">
        <!-- Persistent Sidebar Navigation -->
        ${renderSidebar(state.activeView, state.currentLang, state.understandingMode)}

        <!-- Dynamic Main Workspace Container -->
        <main class="app-workspace" id="appWorkspace">
          <!-- Workspace Header Bar -->
          <div class="workspace-header-bar">
            <div class="workspace-title-group">
              <div class="workspace-breadcrumbs">
                <span>CropCare OS</span>
                <span class="sep">/</span>
                <span class="active-crumb" id="activeWorkspaceCrumb">${crumbInfo.crumb}</span>
              </div>
              <h1 class="workspace-title tracking-tight" id="workspaceHeading">${crumbInfo.heading}</h1>
              <p class="workspace-desc" id="workspaceSubheading">${crumbInfo.subheading}</p>
            </div>
            
            <div class="workspace-actions" style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <span class="badge-pill" style="font-size: 0.78rem;">
                <i data-lucide="shield-check" class="icon-xs" style="color: var(--primary-600);"></i>
                <span>${state.understandingMode === 'easy' ? '🍃 ' + (translations[state.currentLang] || translations.en).modes.easy : '🔬 ' + (translations[state.currentLang] || translations.en).modes.detailed}</span>
              </span>
              
              <button class="btn btn-secondary btn-sm" id="workspaceSyncBtn" title="Sync live feeds across platform">
                <i data-lucide="refresh-cw" class="icon-xs"></i>
                <span>${state.currentLang === 'hi' ? 'सिंक करें' : state.currentLang === 'ta' ? 'ஒத்திசை' : state.currentLang === 'fr' ? 'Synchroniser' : 'Sync'}</span>
              </button>
            </div>
          </div>

          <!-- Dynamic Workspace Central Content View -->
          <div class="workspace-content-container fade-in" id="workspaceView">
            ${renderCurrentViewContent()}
          </div>

          <!-- Platform Footer inside Workspace -->
          ${renderFooter(state.currentLang, state.understandingMode)}
        </main>
      </div>
    </div>

    <!-- Floating Gemini AI Assistant Chatbot -->
    ${renderChatbotWidget(state.currentLang, state.understandingMode)}
    
    <!-- Modals -->
    ${renderAuthModal()}
    ${renderPillarModal()}
    ${renderEditDataModal()}
  `;

  // Hydrate Lucide Icons
  createIcons({ icons });

  // Attach All Global & View Listeners
  attachGlobalEventListeners();
  attachViewSpecificListeners();
}

// Seamless Workspace View Switching
function switchWorkspaceView(viewId) {
  if (!viewId) return;
  state.activeView = viewId;

  const workspaceView = document.getElementById('workspaceView');
  const workspaceHeading = document.getElementById('workspaceHeading');
  const workspaceSubheading = document.getElementById('workspaceSubheading');
  const activeCrumb = document.getElementById('activeWorkspaceCrumb');

  const crumbInfo = getWorkspaceCrumbInfo(viewId, state.currentLang, state.understandingMode);
  if (workspaceHeading) workspaceHeading.textContent = crumbInfo.heading;
  if (workspaceSubheading) workspaceSubheading.textContent = crumbInfo.subheading;
  if (activeCrumb) activeCrumb.textContent = crumbInfo.crumb;

  // Update Sidebar Tabs
  document.querySelectorAll('.sidebar-nav-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.view === viewId);
  });

  // Update Header Quick Tabs
  document.querySelectorAll('.quick-tab-pill').forEach(pill => {
    pill.classList.toggle('active', pill.dataset.view === viewId);
  });

  // Update Mobile Drawer Links
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.classList.toggle('active', link.dataset.view === viewId);
  });

  // Render view smoothly with subtle fade animation
  if (workspaceView) {
    workspaceView.classList.remove('fade-in');
    void workspaceView.offsetWidth; // trigger reflow
    workspaceView.innerHTML = renderCurrentViewContent();
    workspaceView.classList.add('fade-in');
    createIcons({ icons });
    attachViewSpecificListeners();
  }

  // Close mobile drawer if open
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileDrawer) mobileDrawer.classList.remove('open');

  window.scrollTo({ top: 0, behavior: 'smooth' });
  showToast(`Switched workspace to: ${crumbInfo.crumb}`, 'info');
}

// Partial UI re-renders for fast micro-interactions within views
function reRenderEcosystem() {
  const section = document.getElementById('ecosystem');
  if (!section) return;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderEcosystemJourney(state.activeEcosystemStep, state.currentLang, state.understandingMode);
  section.replaceWith(tempDiv.firstElementChild);
  createIcons({ icons });
  attachEcosystemListeners();
}

function reRenderPillars() {
  const section = document.getElementById('features');
  if (!section) return;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderFeatureSuite(state.activePillarCategory, state.pillarSearchQuery, state.currentLang, state.understandingMode);
  section.replaceWith(tempDiv.firstElementChild);
  createIcons({ icons });
  attachPillarsListeners();
}

function reRenderDashboard() {
  const section = document.getElementById('dashboard');
  if (!section) return;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderFarmerDashboard(
    state.activeDashboardTab, 
    state.mandiSearch, 
    state.selectedDiagnosticSampleId, 
    state.currentLang, 
    state.understandingMode,
    state.userName,
    state.userRole,
    state.farmData,
    getActiveMandiCommodities()
  );
  section.replaceWith(tempDiv.firstElementChild);
  createIcons({ icons });
  attachDashboardListeners();
}

function reRenderMarketplace() {
  const section = document.getElementById('marketplace');
  if (!section) return;
  const tempDiv = document.createElement('div');
  tempDiv.innerHTML = renderMarketplaceSection(
    state.activeMarketCategory, 
    state.currentLang, 
    state.understandingMode,
    getActiveMarketplaceItems()
  );
  section.replaceWith(tempDiv.firstElementChild);
  createIcons({ icons });
  attachMarketplaceListeners();
}

// Attach View Specific Event Handlers
function attachViewSpecificListeners() {
  // Always attach overview & jump handlers
  attachOverviewListeners();

  // Attach module listeners
  switch (state.activeView) {
    case 'workflow':
      attachEcosystemListeners();
      break;
    case 'pillars':
      attachPillarsListeners();
      break;
    case 'dashboard':
      attachDashboardListeners();
      break;
    case 'marketplace':
      attachMarketplaceListeners();
      break;
    case 'advisory':
      attachAdvisoryListeners();
      break;
    case 'scanner':
      attachLeafScannerListeners();
      break;
  }
}

// Overview & Jump Card Listeners
function attachOverviewListeners() {
  // Jump Cards
  document.querySelectorAll('.overview-jump-card').forEach(card => {
    card.addEventListener('click', () => {
      const targetView = card.dataset.view;
      if (targetView) switchWorkspaceView(targetView);
    });
  });

  // Hero CTAs
  const heroExploreBtn = document.getElementById('heroExploreBtn');
  if (heroExploreBtn) {
    heroExploreBtn.addEventListener('click', () => switchWorkspaceView('workflow'));
  }

  const heroDashboardBtn = document.getElementById('heroDashboardBtn');
  if (heroDashboardBtn) {
    heroDashboardBtn.addEventListener('click', () => switchWorkspaceView('dashboard'));
  }

  // Hero Solenoid Quick Drip Toggle
  const quickDripToggleBtn = document.getElementById('quickDripToggleBtn');
  if (quickDripToggleBtn) {
    quickDripToggleBtn.addEventListener('click', () => {
      state.isDripRunning = !state.isDripRunning;
      const moistureEl = document.getElementById('heroMoistureVal');
      const valveStateEl = document.getElementById('heroValveState');
      const sidebarMoisture = document.getElementById('sidebarMoisture');
      
      if (state.isDripRunning) {
        if (moistureEl) moistureEl.textContent = '41%';
        if (sidebarMoisture) sidebarMoisture.textContent = '41% Flow';
        if (valveStateEl) {
          valveStateEl.textContent = 'Active (4.2 L/h)';
          valveStateEl.style.color = '#0284C7';
        }
        quickDripToggleBtn.innerHTML = `<i data-lucide="square" class="icon-sm"></i><span>Stop Cycle</span>`;
        showToast('Micro-Drip solenoid opened for Parcel A-1. Flow: 4.2 L/hr', 'success');
      } else {
        if (moistureEl) moistureEl.textContent = '36%';
        if (sidebarMoisture) sidebarMoisture.textContent = '36% Opt';
        if (valveStateEl) {
          valveStateEl.textContent = 'Standby';
          valveStateEl.style.color = 'var(--primary-700)';
        }
        quickDripToggleBtn.innerHTML = `<i data-lucide="play" class="icon-sm"></i><span>${state.understandingMode === 'easy' ? 'Turn Water On/Off' : 'Test Solenoid Cycle'}</span>`;
        showToast('Micro-Drip irrigation paused. Soil moisture stabilized at 36%', 'info');
      }
      createIcons({ icons });
    });
  }
}

// Global App-Shell Listeners (Header, Sidebar, Modals, Popovers, Chat)
function attachGlobalEventListeners() {
  // Brand Click -> Return to Overview
  const brandLink = document.getElementById('brandLink');
  if (brandLink) {
    brandLink.addEventListener('click', (e) => {
      e.preventDefault();
      switchWorkspaceView('overview');
    });
  }

  const footerBrand = document.getElementById('footerBrand');
  if (footerBrand) {
    footerBrand.addEventListener('click', () => switchWorkspaceView('overview'));
  }

  // Header Quick-Switch Tabs
  document.querySelectorAll('.quick-tab-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      const view = pill.dataset.view;
      if (view) switchWorkspaceView(view);
    });
  });

  // Sidebar Navigation Tabs
  document.querySelectorAll('.sidebar-nav-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const view = tab.dataset.view;
      if (view) switchWorkspaceView(view);
    });
  });

  // Mobile Drawer Links
  document.querySelectorAll('.mobile-drawer .mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      const view = link.dataset.view;
      if (view) switchWorkspaceView(view);
    });
  });

  // Footer Navigation Links with data-view
  document.querySelectorAll('.footer-link[data-view]').forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const view = link.dataset.view;
      if (view) switchWorkspaceView(view);
    });
  });

  // Notification Pill Popover Toggle
  const notifBtn = document.getElementById('notificationsPillBtn');
  const notifPopover = document.getElementById('notificationsPopover');
  if (notifBtn && notifPopover) {
    notifBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      notifPopover.classList.toggle('open');
      document.getElementById('profilePopover')?.classList.remove('open');
    });
  }

  // Profile Pill Popover Toggle
  const profileBtn = document.getElementById('profilePillBtn');
  const profilePopover = document.getElementById('profilePopover');
  if (profileBtn && profilePopover) {
    profileBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      profilePopover.classList.toggle('open');
    });
  }

  // Profile Edit Profile Button
  const headerEditProfileBtn = document.getElementById('headerEditProfileBtn');
  if (headerEditProfileBtn) {
    headerEditProfileBtn.addEventListener('click', () => {
      document.getElementById('profilePopover')?.classList.remove('open');
      openEditDataModal('edit-profile');
    });
  }

  // Profile Sign Out / Switch Role Button
  const headerSignOutBtn = document.getElementById('headerSignOutBtn');
  if (headerSignOutBtn) {
    headerSignOutBtn.addEventListener('click', () => {
      document.getElementById('profilePopover')?.classList.remove('open');
      state.isAuthenticated = false;
      state.isLoggedIn = false;
      showToast('Signed out of CropCare. Select your role to sign in again.', 'info');
      renderApp();
    });
  }

  // Close popovers and custom dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#notificationsDropdownWrap')) {
      document.getElementById('notificationsPopover')?.classList.remove('open');
    }
    if (!e.target.closest('#profileDropdownWrap')) {
      document.getElementById('profilePopover')?.classList.remove('open');
    }
    if (!e.target.closest('.lang-dropdown-container')) {
      document.querySelectorAll('.lang-dropdown-container').forEach(c => {
        c.classList.remove('open');
        c.querySelector('.lang-dropdown-btn')?.setAttribute('aria-expanded', 'false');
      });
    }
  });

  // Mobile drawer quick language buttons
  document.querySelectorAll('.mobile-drawer-lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const newLang = btn.dataset.lang;
      if (newLang) {
        changeGlobalLanguage(newLang);
      }
    });
  });

  // Sidebar "Ask Gemini AI" button
  const sidebarChatBtn = document.getElementById('sidebarChatTriggerBtn');
  if (sidebarChatBtn) {
    sidebarChatBtn.addEventListener('click', openChatbot);
  }

  // Workspace Sync Button
  const syncBtn = document.getElementById('workspaceSyncBtn');
  if (syncBtn) {
    syncBtn.addEventListener('click', () => {
      showToast('IoT Mesh synchronized: All 3 LoRaWAN probes, Khanna Mandi spot curve, and weather radars up to date!', 'success');
      playSound('success');
    });
  }

  // Dual Understanding Mode Switcher (Easy vs Detailed)
  const easyModeBtn = document.getElementById('easyModeBtn');
  const detailedModeBtn = document.getElementById('detailedModeBtn');
  
  if (easyModeBtn && detailedModeBtn) {
    easyModeBtn.addEventListener('click', () => {
      if (state.understandingMode !== 'easy') {
        state.understandingMode = 'easy';
        renderApp();
        showToast('Switched to Easy Mode (Farmer Friendly View)', 'info');
      }
    });

    detailedModeBtn.addEventListener('click', () => {
      if (state.understandingMode !== 'detailed') {
        state.understandingMode = 'detailed';
        renderApp();
        showToast('Switched to Detailed Mode (Tech & Business Analytics)', 'info');
      }
    });
  }

  // Mobile Drawer Mode Buttons
  const mobileDrawer = document.getElementById('mobileDrawer');
  if (mobileDrawer) {
    mobileDrawer.querySelectorAll('.mode-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const mode = btn.dataset.mode;
        if (mode && mode !== state.understandingMode) {
          state.understandingMode = mode;
          renderApp();
          showToast(`Switched to ${mode === 'easy' ? 'Easy Mode' : 'Detailed Mode'}`, 'info');
        }
      });
    });
  }

  // Multi-Language Custom Dropdown Selector in Header
  attachLanguageDropdownListeners('header');

  // Theme Toggle (Light / Dark OLED)
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      const icon = document.getElementById('themeIcon');
      if (icon) {
        icon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
        createIcons({ icons });
      }
      showToast(`Switched to ${state.theme === 'dark' ? 'Dark OLED' : 'Crisp Agricultural Light'} Mode`, 'info');
    });
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn && mobileDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileDrawer.classList.toggle('open');
    });
  }

  // Mobile Drawer: Sign Out Button
  const drawerSignOutBtn = document.getElementById('drawerSignOutBtn');
  if (drawerSignOutBtn) {
    drawerSignOutBtn.addEventListener('click', () => {
      if (mobileDrawer) mobileDrawer.classList.remove('open');
      state.isAuthenticated = false;
      state.isLoggedIn = false;
      showToast('Signed out of CropCare. Select your role to sign in again.', 'info');
      renderApp();
    });
  }

  // Mobile Drawer: Theme Toggle
  const mobileThemeToggleBtn = document.getElementById('mobileThemeToggleBtn');
  if (mobileThemeToggleBtn) {
    mobileThemeToggleBtn.addEventListener('click', () => {
      state.theme = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', state.theme);
      const icon = document.getElementById('mobileThemeIcon');
      if (icon) {
        icon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
        createIcons({ icons });
      }
      const headerIcon = document.getElementById('themeIcon');
      if (headerIcon) {
        headerIcon.setAttribute('data-lucide', state.theme === 'dark' ? 'sun' : 'moon');
        createIcons({ icons });
      }
      showToast(`Switched to ${state.theme === 'dark' ? 'Dark OLED' : 'Crisp Agricultural Light'} Mode`, 'info');
    });
  }

  // Mobile Drawer Language Selector
  attachLanguageDropdownListeners('mobileDrawer');

  // Floating Chatbot Listeners
  attachChatbotListeners();

  // Modals Listeners
  attachModalListeners();

  // Newsletter SMS subscription
  attachNewsletterListeners();
}

// 6-Step Ecosystem Listeners
function attachEcosystemListeners() {
  const tabs = document.querySelectorAll('.step-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const stepId = parseInt(tab.dataset.stepId, 10);
      if (!isNaN(stepId)) {
        state.activeEcosystemStep = stepId;
        reRenderEcosystem();
      }
    });
  });

  const nextBtn = document.getElementById('nextStepBtn');
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      const nextStep = parseInt(nextBtn.dataset.nextStep, 10);
      state.activeEcosystemStep = nextStep;
      reRenderEcosystem();
    });
  }

  const runSoilCalcBtn = document.getElementById('runSoilCalcBtn');
  if (runSoilCalcBtn) {
    runSoilCalcBtn.addEventListener('click', () => {
      showToast('Soil Telemetry Re-analyzed: Optimum NPK balance confirmed for Durum Wheat!', 'success');
    });
  }

  const simulatePayoutBtn = document.getElementById('simulatePayoutBtn');
  if (simulatePayoutBtn) {
    simulatePayoutBtn.addEventListener('click', () => {
      confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
      playSound('success');
      showToast('Instant Escrow Payout: ₹3,76,500 credited to Punjab National Bank A/c *9042 via T+0 RTGS!', 'success');
    });
  }

  const trackGpsLiveBtn = document.getElementById('trackGpsLiveBtn');
  if (trackGpsLiveBtn) {
    trackGpsLiveBtn.addEventListener('click', () => {
      showToast('Reefer Truck MH-12-AG-9041: 14°C chilled chamber • ETA to Central Silo: 38 mins', 'info');
    });
  }

  const refreshNdviBtn = document.getElementById('refreshNdviBtn');
  if (refreshNdviBtn) {
    refreshNdviBtn.addEventListener('click', () => {
      showToast('Sentinel-2 Multispectral Tile refreshed: Canopy vegetation vigour score 0.84 (Exceptional)', 'success');
    });
  }

  const openBuyerMatchingModalBtn = document.getElementById('openBuyerMatchingModalBtn');
  if (openBuyerMatchingModalBtn) {
    openBuyerMatchingModalBtn.addEventListener('click', () => {
      state.activeDashboardTab = 'bids';
      switchWorkspaceView('dashboard');
    });
  }
}

// 18 Pillars Listeners
function attachPillarsListeners() {
  const filterBtns = document.querySelectorAll('#pillarFilterPills .filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.activePillarCategory = btn.dataset.category;
      reRenderPillars();
    });
  });

  const searchInput = document.getElementById('pillarSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.pillarSearchQuery = e.target.value;
      reRenderPillars();
      const newSearchInput = document.getElementById('pillarSearchInput');
      if (newSearchInput) {
        newSearchInput.focus();
        newSearchInput.setSelectionRange(newSearchInput.value.length, newSearchInput.value.length);
      }
    });
  }

  const resetBtn = document.getElementById('resetPillarsBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      state.activePillarCategory = 'All';
      state.pillarSearchQuery = '';
      reRenderPillars();
    });
  }

  const pillarCards = document.querySelectorAll('.pillar-card');
  pillarCards.forEach(card => {
    card.addEventListener('click', () => {
      const pid = parseInt(card.dataset.pillarId, 10);
      const pillar = pillarsData.find(p => p.id === pid);
      if (pillar) {
        openPillarModal(pillar);
      }
    });
  });
}

// Farmer Dashboard Listeners
function attachDashboardListeners() {
  const tabs = document.querySelectorAll('#dashTabBar .dash-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      state.activeDashboardTab = tab.dataset.tab;
      reRenderDashboard();
    });
  });

  const refreshDashboardBtn = document.getElementById('refreshDashboardBtn');
  if (refreshDashboardBtn) {
    refreshDashboardBtn.addEventListener('click', () => {
      showToast('All 3 in-field LoRaWAN soil moisture probes synchronized successfully!', 'success');
    });
  }

  const triggerDripBtns = document.querySelectorAll('.trigger-drip-btn');
  triggerDripBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const plotId = btn.dataset.plotId;
      const moistureSpan = document.getElementById(`plotMoisture-${plotId}`);
      if (moistureSpan) {
        let current = parseInt(moistureSpan.textContent, 10) || 36;
        current = Math.min(current + 4, 46);
        moistureSpan.textContent = `${current}%`;
      }
      showToast(`Micro-drip irrigation cycle triggered for ${plotId.toUpperCase()}! Running for 20 mins.`, 'success');
    });
  });

  const recBtns = document.querySelectorAll('.apply-rec-btn');
  recBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      showToast(`Recommendation applied: ${btn.dataset.recTitle}`, 'success');
    });
  });

  const mandiSearchInput = document.getElementById('mandiSearchInput');
  if (mandiSearchInput) {
    mandiSearchInput.addEventListener('input', (e) => {
      state.mandiSearch = e.target.value;
      reRenderDashboard();
      const newMandiInput = document.getElementById('mandiSearchInput');
      if (newMandiInput) {
        newMandiInput.focus();
        newMandiInput.setSelectionRange(newMandiInput.value.length, newMandiInput.value.length);
      }
    });
  }

  const directSellBtns = document.querySelectorAll('.direct-sell-btn');
  directSellBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const crop = btn.dataset.crop;
      const price = btn.dataset.price;
      state.activeDashboardTab = 'bids';
      reRenderDashboard();
      showToast(`Direct tender room opened for ${crop} at spot price ₹${price}/qtl!`, 'info');
    });
  });

  const sampleBtns = document.querySelectorAll('.sample-btn');
  sampleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.selectedDiagnosticSampleId = btn.dataset.sampleId;
      reRenderDashboard();
    });
  });

  const orderPesticideKitBtn = document.getElementById('orderPesticideKitBtn');
  if (orderPesticideKitBtn) {
    orderPesticideKitBtn.addEventListener('click', () => {
      showToast('Prescribed Bio-Treatment Kit added to cart. Dispatched via Agri-Express Cold Van.', 'success');
    });
  }

  const talkAgronomistBtn = document.getElementById('talkAgronomistBtn');
  if (talkAgronomistBtn) {
    talkAgronomistBtn.addEventListener('click', () => {
      switchWorkspaceView('advisory');
    });
  }

  const dashboardOpenScannerBtn = document.getElementById('dashboardOpenScannerBtn');
  if (dashboardOpenScannerBtn) {
    dashboardOpenScannerBtn.addEventListener('click', () => {
      switchWorkspaceView('scanner');
    });
  }

  const acceptBidBtns = document.querySelectorAll('.accept-bid-btn');
  acceptBidBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const buyer = btn.dataset.buyer;
      const price = btn.dataset.price;
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      playSound('success');
      showToast(`Tender Accepted! ${buyer} has locked ${price} in Escrow Vault. Farmgate truck scheduled.`, 'success');
    });
  });

  const counterBidBtns = document.querySelectorAll('.counter-bid-btn');
  counterBidBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const bidId = btn.dataset.bidId;
      showToast(`Counter offer dialog opened for tender ${bidId}. Propose +₹75/qtl premium.`, 'info');
    });
  });

  // Edit Farm Data Button
  const openEditFarmModalBtn = document.getElementById('openEditFarmModalBtn');
  if (openEditFarmModalBtn) {
    openEditFarmModalBtn.addEventListener('click', () => {
      openEditDataModal('edit-farm');
    });
  }

  // Edit Mandi Rates Buttons
  document.querySelectorAll('.edit-mandi-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const commodityId = btn.dataset.commodityId;
      if (commodityId) openEditDataModal('edit-mandi', commodityId);
    });
  });

  // Buyer Actions
  const createBuyerTenderBtn = document.getElementById('createBuyerTenderBtn');
  if (createBuyerTenderBtn) {
    createBuyerTenderBtn.addEventListener('click', () => {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      playSound('success');
      showToast('B2B Procurement Tender published! Broadcasted to 4,800+ verified growers.', 'success');
    });
  }

  document.querySelectorAll('.buyer-quote-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lot = btn.dataset.lot || 'Produce Lot';
      const price = btn.dataset.price || 'Market Rate';
      showToast(`Procurement counter-quote for ${lot} submitted at ₹${price}. Escrow reserved.`, 'success');
    });
  });

  document.querySelectorAll('.buyer-inspect-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lot = btn.dataset.lot || 'Produce Lot';
      showToast(`Quality Inspection Certificate (QIC) verified for ${lot}: Moisture 11.2%, Purity 99.4%.`, 'info');
    });
  });

  document.querySelectorAll('.buyer-lock-spot-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const crop = btn.dataset.crop || 'Crop Lot';
      confetti({ particleCount: 75, spread: 70, origin: { y: 0.6 } });
      playSound('success');
      showToast(`Spot trade locked for ${crop}! 50 MT allocated with T+0 escrow bank guarantee.`, 'success');
    });
  });

  const newContractBtn = document.getElementById('newContractBtn');
  if (newContractBtn) {
    newContractBtn.addEventListener('click', () => {
      showToast('Forward harvest contracting wizard initialized for upcoming cycle.', 'info');
    });
  }

  document.querySelectorAll('.buyer-contract-view-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id || 'Contract';
      showToast(`Contract ${id} audit file opened. APMC license stamp and biometric signatures verified.`, 'info');
    });
  });

  document.querySelectorAll('.buyer-track-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Reefer GPS Cold-Chain telematics live: Internal temp +4.2°C, Route: GT Road Karnal.', 'info');
    });
  });

  const depositEscrowBtn = document.getElementById('depositEscrowBtn');
  if (depositEscrowBtn) {
    depositEscrowBtn.addEventListener('click', () => {
      confetti({ particleCount: 80, spread: 65, origin: { y: 0.6 } });
      playSound('success');
      showToast('₹10,00,000 deposited into CropCare Escrow Trust Vault. Total guaranteed balance updated!', 'success');
    });
  }

  // Supplier Actions
  const dispatchNewMechanicBtn = document.getElementById('dispatchNewMechanicBtn');
  if (dispatchNewMechanicBtn) {
    dispatchNewMechanicBtn.addEventListener('click', () => {
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
      showToast('Emergency mechanic van #VAN-04 dispatched to Raipur Sector A! ETA: 24 mins.', 'success');
    });
  }

  document.querySelectorAll('.supplier-resolve-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const ticket = btn.dataset.ticket || 'Ticket';
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      playSound('success');
      showToast(`Service ticket ${ticket} marked as COMPLETED. Job card signed & warranty logged.`, 'success');
    });
  });

  document.querySelectorAll('.supplier-call-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const farmer = btn.dataset.farmer || 'Farmer';
      showToast(`Dialing field hotline for ${farmer}... Connected via CropCare Tele-Bridge.`, 'info');
    });
  });

  document.querySelectorAll('.supplier-dispatch-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const order = btn.dataset.order || 'Order';
      confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
      showToast(`Order ${order} verified & dispatched via Agro-Logistics Express. Waybill generated!`, 'success');
    });
  });

  const supplierAddPartBtn = document.getElementById('supplierAddPartBtn');
  if (supplierAddPartBtn) {
    supplierAddPartBtn.addEventListener('click', () => {
      openEditDataModal('add-item');
    });
  }

  document.querySelectorAll('.supplier-edit-stock-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Inventory buffer adjusted (+10 units). Synchronized with OEM distribution network.', 'success');
    });
  });

  // Expert Actions
  const expertOpenFullScannerBtn = document.getElementById('expertOpenFullScannerBtn');
  if (expertOpenFullScannerBtn) {
    expertOpenFullScannerBtn.addEventListener('click', () => {
      switchWorkspaceView('scanner');
    });
  }

  document.querySelectorAll('.expert-sign-rx-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id || 'DX-401';
      const crop = btn.dataset.crop || 'Crop';
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
      playSound('success');
      showToast(`Digital Agronomy Prescription signed for ${crop} (Case #${id}). Farmer alerted via SMS & App.`, 'success');
    });
  });

  document.querySelectorAll('.expert-inspect-scan-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id || 'DX-401';
      showToast(`High-resolution multi-spectral microscopy loaded for diagnostic #${id}. Chlorophyll index: 0.42.`, 'info');
    });
  });

  const expertPublishAdvisoryBtn = document.getElementById('expertPublishAdvisoryBtn');
  if (expertPublishAdvisoryBtn) {
    expertPublishAdvisoryBtn.addEventListener('click', () => {
      confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
      playSound('success');
      showToast('Regional Alert broadcasted to 12,400+ farmers across Punjab & Haryana via Push & SMS!', 'success');
    });
  }

  document.querySelectorAll('.expert-telemetry-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      showToast('Telemetry sensor log exported: Sentinel-2 NDVI 0.84, Soil Moisture 36%, NPK ratio balanced.', 'info');
    });
  });

  // Additional Farmer Actions
  const farmerOpenFullScannerBtn = document.getElementById('farmerOpenFullScannerBtn');
  if (farmerOpenFullScannerBtn) {
    farmerOpenFullScannerBtn.addEventListener('click', () => {
      switchWorkspaceView('scanner');
    });
  }

  const orderSampleTreatmentBtn = document.getElementById('orderSampleTreatmentBtn');
  if (orderSampleTreatmentBtn) {
    orderSampleTreatmentBtn.addEventListener('click', () => {
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      playSound('success');
      showToast('Certified Bio-Treatment formulation added to cart! Dispatched via Agri-Express.', 'success');
    });
  }

  document.querySelectorAll('.btn-sell-action').forEach(btn => {
    btn.addEventListener('click', () => {
      const crop = btn.dataset.crop || 'Crop';
      const price = btn.dataset.price || 'Spot Price';
      state.activeDashboardTab = 'bids';
      reRenderDashboard();
      showToast(`Direct tender room opened for ${crop} at spot price ₹${price}/qtl!`, 'info');
    });
  });

  document.querySelectorAll('.btn-accept-tender').forEach(btn => {
    btn.addEventListener('click', () => {
      const buyer = btn.dataset.buyer || 'Buyer';
      const price = btn.dataset.price || 'Market Rate';
      confetti({ particleCount: 100, spread: 75, origin: { y: 0.6 } });
      playSound('success');
      showToast(`Tender Accepted! ${buyer} has locked ${price} in Escrow Vault. Farmgate pickup scheduled.`, 'success');
    });
  });
}

// Marketplace Listeners
function attachMarketplaceListeners() {
  // Add New Item / Produce Button
  const openAddItemModalBtn = document.getElementById('openAddItemModalBtn');
  if (openAddItemModalBtn) {
    openAddItemModalBtn.addEventListener('click', () => {
      openEditDataModal('add-item');
    });
  }

  // Edit Item Buttons
  document.querySelectorAll('.edit-item-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const itemId = btn.dataset.itemId;
      if (itemId) openEditDataModal('edit-item', itemId);
    });
  });

  const catBtns = document.querySelectorAll('.market-cat-btn');
  catBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.activeMarketCategory = btn.dataset.cat;
      reRenderMarketplace();
    });
  });

  const searchInput = document.getElementById('marketplaceSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const query = (e.target.value || '').trim().toLowerCase();
      document.querySelectorAll('.market-item-card').forEach(card => {
        const title = (card.querySelector('.market-item-name')?.textContent || '').toLowerCase();
        const desc = (card.querySelector('.market-desc')?.textContent || '').toLowerCase();
        const supplier = (card.querySelector('.market-supplier')?.textContent || '').toLowerCase();
        const category = (card.querySelector('.market-category')?.textContent || '').toLowerCase();
        const match = !query || title.includes(query) || desc.includes(query) || supplier.includes(query) || category.includes(query);
        card.style.display = match ? 'flex' : 'none';
      });
    });
  }

  const orderBtns = document.querySelectorAll('.order-item-btn');
  orderBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.itemName;
      const price = btn.dataset.itemPrice;
      const cat = btn.dataset.itemCategory;
      confetti({ particleCount: 65, spread: 60, origin: { y: 0.7 } });
      playSound('success');

      if (cat === 'vehicles') {
        showToast(`Vehicle Inquiry Registered: "${name}" (${price})! Nearest dealership executive assigned for test drive & subsidy paperwork.`, 'success');
      } else if (cat === 'produce') {
        showToast(`Farmgate Produce Trade Locked: "${name}" (${price})! Cold-chain pickup van scheduled with T+0 Escrow protection.`, 'success');
      } else if (cat === 'spares') {
        showToast(`OEM Genuine Part Dispatched: "${name}" (${price})! Guaranteed fitting warranty certificate issued.`, 'success');
      } else if (cat === 'tech') {
        showToast(`Agri-Tech Order Confirmed: "${name}" (${price})! Field technician scheduled for farm installation.`, 'success');
      } else {
        showToast(`Order Placed: "${name}" (${price})! ICAR verification certificate attached.`, 'success');
      }
    });
  });
}

// AI Leaf Scanner Listeners
function attachLeafScannerListeners() {
  let cameraStream = null;

  // Category Filter Pills (All, Leaves, Seeds, Fruits)
  document.querySelectorAll('.scanner-filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      state.scannerActiveFilter = btn.dataset.filter || 'all';
      const workspaceView = document.getElementById('workspaceView');
      if (workspaceView) {
        workspaceView.innerHTML = renderCurrentViewContent();
        createIcons({ icons });
        attachLeafScannerListeners();
      }
    });
  });

  // Sample Disease Button clicks - switch active diagnosis
  document.querySelectorAll('.sample-disease-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleId = btn.dataset.sampleId;
      if (sampleId) {
        state.selectedDiagnosticSampleId = sampleId;
        state.isScanningActive = true;
        // Trigger animated scan for a moment
        const laserLine = document.getElementById('scannerLaserLine');
        if (laserLine) laserLine.style.display = 'block';
        setTimeout(() => {
          if (laserLine) laserLine.style.display = 'none';
          // Re-render just the scanner to show new disease results
          const workspaceView = document.getElementById('workspaceView');
          if (workspaceView) {
            workspaceView.innerHTML = renderCurrentViewContent();
            createIcons({ icons });
            attachLeafScannerListeners();
          }
        }, 1800);
        showToast('🔬 Analyzing agricultural specimen...', 'info');
      }
    });
  });

  // Camera Tab toggle
  const cameraTabBtn = document.getElementById('scannerCameraTabBtn');
  const uploadTabBtn = document.getElementById('scannerUploadTabBtn');

  if (cameraTabBtn) {
    cameraTabBtn.addEventListener('click', () => {
      cameraTabBtn.className = 'btn btn-sm btn-primary';
      if (uploadTabBtn) uploadTabBtn.className = 'btn btn-sm btn-secondary';
      const startCameraBtn = document.getElementById('startCameraBtn');
      if (startCameraBtn) startCameraBtn.style.display = 'flex';
    });
  }

  if (uploadTabBtn) {
    uploadTabBtn.addEventListener('click', () => {
      uploadTabBtn.className = 'btn btn-sm btn-primary';
      if (cameraTabBtn) cameraTabBtn.className = 'btn btn-sm btn-secondary';
      // Trigger file input
      const leafFileInput = document.getElementById('leafFileInput');
      if (leafFileInput) leafFileInput.click();
    });
  }

  // Start/Stop Camera Button
  const startCameraBtn = document.getElementById('startCameraBtn');
  const snapPhotoBtn = document.getElementById('snapPhotoBtn');
  const cameraVideoStream = document.getElementById('cameraVideoStream');
  const scannerPreviewImg = document.getElementById('scannerPreviewImg');

  if (startCameraBtn) {
    startCameraBtn.addEventListener('click', async () => {
      if (cameraStream) {
        // Stop camera
        cameraStream.getTracks().forEach(t => t.stop());
        cameraStream = null;
        if (cameraVideoStream) cameraVideoStream.style.display = 'none';
        if (scannerPreviewImg) scannerPreviewImg.style.display = 'block';
        if (snapPhotoBtn) snapPhotoBtn.style.display = 'none';
        const label = document.getElementById('startCameraBtnLabel');
        if (label) label.textContent = 'Start Camera';
        startCameraBtn.className = 'btn btn-primary hover-scale';
        return;
      }
      try {
        cameraStream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' }, audio: false });
        if (cameraVideoStream) {
          cameraVideoStream.srcObject = cameraStream;
          cameraVideoStream.style.display = 'block';
        }
        if (scannerPreviewImg) scannerPreviewImg.style.display = 'none';
        if (snapPhotoBtn) snapPhotoBtn.style.display = 'flex';
        const label = document.getElementById('startCameraBtnLabel');
        if (label) label.textContent = '⏹ Stop Camera';
        startCameraBtn.className = 'btn btn-secondary hover-scale';
        showToast('📷 Camera active — position leaf in the green frame and tap Snap!', 'info');
      } catch (err) {
        showToast('Camera access denied. Please upload a leaf photo instead.', 'info');
        // Trigger file input as fallback
        const leafFileInput = document.getElementById('leafFileInput');
        if (leafFileInput) leafFileInput.click();
      }
    });
  }

  // Snap Photo Button - capture frame from camera
  if (snapPhotoBtn && cameraVideoStream) {
    snapPhotoBtn.addEventListener('click', () => {
      const canvas = document.getElementById('cameraSnapCanvas');
      if (!canvas || !cameraVideoStream) return;

      canvas.width = cameraVideoStream.videoWidth;
      canvas.height = cameraVideoStream.videoHeight;
      const ctx = canvas.getContext('2d');
      ctx.drawImage(cameraVideoStream, 0, 0, canvas.width, canvas.height);

      const dataUrl = canvas.toDataURL('image/jpeg', 0.9);
      state.capturedLeafImage = dataUrl;

      // Stop camera and show captured image
      if (cameraStream) {
        cameraStream.getTracks().forEach(t => t.stop());
        cameraStream = null;
      }
      if (cameraVideoStream) cameraVideoStream.style.display = 'none';
      if (scannerPreviewImg) {
        scannerPreviewImg.src = dataUrl;
        scannerPreviewImg.style.display = 'block';
      }
      if (snapPhotoBtn) snapPhotoBtn.style.display = 'none';
      const label = document.getElementById('startCameraBtnLabel');
      if (label) label.textContent = 'Start Camera';

      // Trigger AI analysis simulation
      triggerScanAnalysis();
    });
  }

  // File Upload Handler
  const leafFileInput = document.getElementById('leafFileInput');
  if (leafFileInput) {
    leafFileInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;

      if (!file.type.startsWith('image/')) {
        showToast('Please upload an image file (JPG, PNG, WebP)', 'info');
        return;
      }

      // Precision recognition: Map uploaded file name keywords to verified agricultural samples
      const name = (file.name || '').toLowerCase();
      if (name.includes('mango') || name.includes('anthracnose')) {
        state.selectedDiagnosticSampleId = 'sample-mango-anthracnose';
      } else if (name.includes('guava') || name.includes('bronzing')) {
        state.selectedDiagnosticSampleId = 'sample-guava-bronzing';
      } else if (name.includes('apple') || name.includes('scab')) {
        state.selectedDiagnosticSampleId = 'sample-apple-scab';
      } else if (name.includes('rice') || name.includes('paddy') || name.includes('blight')) {
        state.selectedDiagnosticSampleId = 'sample-rice-bacterial-blight';
      } else if (name.includes('wheat') || name.includes('rust')) {
        state.selectedDiagnosticSampleId = 'sample-wheat-rust';
      } else if (name.includes('tomato')) {
        state.selectedDiagnosticSampleId = 'sample-tomato-blight';
      } else if (name.includes('seed') || name.includes('grain')) {
        state.selectedDiagnosticSampleId = 'seed-sample-wheat';
      } else if (name.includes('healthy') || name.includes('fresh') || name.includes('green')) {
        state.selectedDiagnosticSampleId = 'sample-healthy-crop';
      } else if (name.includes('cotton') || name.includes('aphid')) {
        state.selectedDiagnosticSampleId = 'sample-aphids-sooty';
      } else if (name.includes('mildew')) {
        state.selectedDiagnosticSampleId = 'sample-powdery-mildew';
      }

      const reader = new FileReader();
      reader.onload = (ev) => {
        state.capturedLeafImage = ev.target.result;
        if (scannerPreviewImg) {
          scannerPreviewImg.src = ev.target.result;
          scannerPreviewImg.style.display = 'block';
        }
        if (cameraVideoStream) cameraVideoStream.style.display = 'none';

        // Trigger AI analysis simulation
        triggerScanAnalysis();
      };
      reader.readAsDataURL(file);
    });
  }

  function triggerScanAnalysis() {
    state.isScanningActive = true;
    const laserLine = document.getElementById('scannerLaserLine');
    const statusText = document.getElementById('scannerStatusText');
    if (laserLine) laserLine.style.display = 'block';
    if (statusText) statusText.textContent = '🔬 Scanning...';

    const scanMessages = [
      'Extracting leaf venation pattern...',
      'Detecting chlorosis zones...',
      'Matching pathogen signatures...',
      'Cross-referencing ICAR disease atlas...',
      'Generating prescription...'
    ];
    let msgIdx = 0;
    const msgInterval = setInterval(() => {
      if (statusText && msgIdx < scanMessages.length) {
        statusText.textContent = scanMessages[msgIdx++];
      }
    }, 350);

    setTimeout(() => {
      clearInterval(msgInterval);
      if (laserLine) laserLine.style.display = 'none';
      state.isScanningActive = false;

      const workspaceView = document.getElementById('workspaceView');
      if (workspaceView) {
        workspaceView.innerHTML = renderCurrentViewContent();
        createIcons({ icons });
        attachLeafScannerListeners();
      }
      showToast('✅ AI Diagnosis complete! Prescription ready.', 'success');
      playSound('success');
    }, 2000);
  }

  // Order Prescribed Kit button
  const orderKitBtn = document.getElementById('orderPrescribedKitBtn');
  if (orderKitBtn) {
    orderKitBtn.addEventListener('click', () => {
      const crop = orderKitBtn.dataset.crop || 'Crop';
      const disease = orderKitBtn.dataset.disease || 'Disease';
      confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
      playSound('success');
      showToast(`Bio-Treatment Kit prescribed for ${crop} (${disease}) added to cart. Agri-Express delivery in 24h!`, 'success');
    });
  }

  // Ask AI Doctor Button
  const askAiBtn = document.getElementById('scannerAskAiDoctorBtn');
  if (askAiBtn) {
    askAiBtn.addEventListener('click', () => {
      const disease = askAiBtn.dataset.disease || 'crop disease';
      openChatbot();
      setTimeout(() => {
        const input = document.getElementById('chatInputField');
        if (input) {
          input.value = `What is the best treatment for ${disease}?`;
          input.focus();
        }
      }, 200);
    });
  }

  // Download Prescription Report Button
  const downloadBtn = document.getElementById('downloadPrescriptionBtn');
  if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
      showToast('📋 Prescription PDF generated and ready for download! (Demo mode — actual download in production build)', 'info');
    });
  }
}

// Advisory Listeners
function attachAdvisoryListeners() {
  const consultBtns = document.querySelectorAll('.book-consult-btn');
  consultBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const doctor = btn.dataset.doctor;
      showToast(`Free Video Consult confirmed with ${doctor} for tomorrow at 10:30 AM!`, 'success');
    });
  });

  const askCommunityBtn = document.getElementById('askCommunityBtn');
  if (askCommunityBtn) {
    askCommunityBtn.addEventListener('click', () => {
      openChatbot();
      const input = document.getElementById('chatInputField');
      if (input) {
        input.focus();
        input.placeholder = "Type your agronomy question here...";
      }
    });
  }
}

// Floating Chatbot Listeners
function attachChatbotListeners() {
  const launcher = document.getElementById('chatLauncherBtn');
  const chatWindow = document.getElementById('chatWindow');
  const closeBtn = document.getElementById('chatCloseBtn');
  const minimizeBtn = document.getElementById('chatMinimizeBtn');
  const muteBtn = document.getElementById('chatMuteBtn');
  const inputForm = document.getElementById('chatInputForm');
  const inputField = document.getElementById('chatInputField');
  const promptChips = document.querySelectorAll('.prompt-chip');

  if (launcher) launcher.addEventListener('click', openChatbot);
  if (closeBtn) closeBtn.addEventListener('click', closeChatbot);
  if (minimizeBtn) minimizeBtn.addEventListener('click', closeChatbot);

  if (muteBtn) {
    muteBtn.addEventListener('click', () => {
      state.chatSound = !state.chatSound;
      const soundIcon = document.getElementById('chatSoundIcon');
      if (soundIcon) {
        soundIcon.setAttribute('data-lucide', state.chatSound ? 'volume-2' : 'volume-x');
        createIcons({ icons });
      }
      showToast(`Chat audio ${state.chatSound ? 'Enabled' : 'Muted'}`, 'info');
    });
  }

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const prompt = chip.dataset.prompt;
      if (prompt) {
        sendChatMessage(prompt);
      }
    });
  });

  const chatLeafInput = document.getElementById('chatLeafFileInput');
  if (chatLeafInput) {
    chatLeafInput.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (!file) return;
      if (!file.type.startsWith('image/')) {
        showToast('Please upload an image file (JPG, PNG, WebP)', 'info');
        return;
      }
      const reader = new FileReader();
      reader.onload = (ev) => {
        sendChatImageMessage(ev.target.result);
      };
      reader.readAsDataURL(file);
    });
  }

  if (inputForm && inputField) {
    inputForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const text = inputField.value.trim();
      if (text) {
        sendChatMessage(text);
        inputField.value = '';
      }
    });
  }
}

function openChatbot() {
  state.chatOpen = true;
  const chatWindow = document.getElementById('chatWindow');
  const launcher = document.getElementById('chatLauncherBtn');
  if (chatWindow) chatWindow.classList.add('open');
  if (launcher) launcher.style.display = 'none';
  document.getElementById('chatInputField')?.focus();
}

function closeChatbot() {
  state.chatOpen = false;
  const chatWindow = document.getElementById('chatWindow');
  const launcher = document.getElementById('chatLauncherBtn');
  if (chatWindow) chatWindow.classList.remove('open');
  if (launcher) launcher.style.display = 'flex';
}

function sendChatMessage(text) {
  const container = document.getElementById('chatMessagesArea');
  if (!container) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.innerHTML = `<div class="msg-bubble">${escapeHtml(text)}</div>`;
  container.appendChild(userMsg);
  container.scrollTop = container.scrollHeight;

  playSound('msg');

  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-msg bot';
  typingIndicator.id = 'botTyping';
  typingIndicator.innerHTML = `
    <div class="msg-bubble">
      <div class="typing-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(typingIndicator);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();
    const answer = getGeminiAgronomyAnswer(text, state.currentLang, state.understandingMode);

    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg bot';
    const formattedAnswer = answer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/• /g, '<br />• ')
      .replace(/\n/g, '<br />');

    botMsg.innerHTML = `<div class="msg-bubble">${formattedAnswer}</div>`;
    container.appendChild(botMsg);
    container.scrollTop = container.scrollHeight;

    playSound('msg');
  }, 650);
}

function sendChatImageMessage(imgUrl) {
  const container = document.getElementById('chatMessagesArea');
  if (!container) return;

  const userMsg = document.createElement('div');
  userMsg.className = 'chat-msg user';
  userMsg.innerHTML = `
    <div class="msg-bubble" style="text-align: center;">
      <img src="${imgUrl}" alt="Specimen Scan" style="max-width: 200px; max-height: 140px; border-radius: 8px; object-fit: cover; margin-bottom: 6px; border: 1.5px solid rgba(255,255,255,0.4);" />
      <div style="font-size: 0.78rem; font-weight: 700; opacity: 0.95;">📷 Crop Pathology & Seed Specimen Attached</div>
    </div>
  `;
  container.appendChild(userMsg);
  container.scrollTop = container.scrollHeight;

  playSound('msg');

  const typingIndicator = document.createElement('div');
  typingIndicator.className = 'chat-msg bot';
  typingIndicator.id = 'botTyping';
  typingIndicator.innerHTML = `
    <div class="msg-bubble">
      <div class="typing-dots">
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
        <span class="typing-dot"></span>
      </div>
    </div>
  `;
  container.appendChild(typingIndicator);
  container.scrollTop = container.scrollHeight;

  setTimeout(() => {
    typingIndicator.remove();
    const answer = getGeminiAgronomyAnswer('leaf scan', state.currentLang, state.understandingMode, true);

    const botMsg = document.createElement('div');
    botMsg.className = 'chat-msg bot';
    const formattedAnswer = answer
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/• /g, '<br />• ')
      .replace(/\n/g, '<br />');

    botMsg.innerHTML = `<div class="msg-bubble">${formattedAnswer}</div>`;
    container.appendChild(botMsg);
    container.scrollTop = container.scrollHeight;

    playSound('msg');
  }, 850);
}

// Modal Listeners
function attachModalListeners() {
  const authBackdrop = document.getElementById('authModalBackdrop');
  const closeAuthBtn = document.getElementById('closeAuthModalBtn');
  const authForm = document.getElementById('authLoginForm');
  const roleBtns = document.querySelectorAll('.auth-role-btn');

  if (closeAuthBtn) closeAuthBtn.addEventListener('click', closeAuthModal);
  if (authBackdrop) {
    authBackdrop.addEventListener('click', (e) => {
      if (e.target === authBackdrop) closeAuthModal();
    });
  }

  roleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      roleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  if (authForm) {
    authForm.addEventListener('submit', (e) => {
      e.preventDefault();
      closeAuthModal();
      state.isLoggedIn = true;
      confetti({ particleCount: 70, spread: 60 });
      showToast('Aadhaar / Kisan e-KYC Verified! Logged in as Sardar Gurpreet Singh', 'success');
      switchWorkspaceView('dashboard');
    });
  }

  const pillarBackdrop = document.getElementById('pillarModalBackdrop');
  const closePillarBtn = document.getElementById('closePillarModalBtn');

  if (closePillarBtn) closePillarBtn.addEventListener('click', closePillarModal);
  if (pillarBackdrop) {
    pillarBackdrop.addEventListener('click', (e) => {
      if (e.target === pillarBackdrop) closePillarModal();
    });
  }

  // Edit Data Modal Backdrop & Close Button
  const editModalBackdrop = document.getElementById('editDataModalBackdrop');
  const closeEditBtn = document.getElementById('closeEditDataModalBtn');
  if (closeEditBtn) closeEditBtn.addEventListener('click', closeEditDataModal);
  if (editModalBackdrop) {
    editModalBackdrop.addEventListener('click', (e) => {
      if (e.target === editModalBackdrop) closeEditDataModal();
    });
  }
}

function openEditDataModal(mode, targetId = null) {
  state.editModal = { open: true, mode, targetId };
  const backdrop = document.getElementById('editDataModalBackdrop');
  const headingEl = document.getElementById('editModalHeading');
  const subHeadingEl = document.getElementById('editModalSubheading');
  const bodyEl = document.getElementById('editModalBody');
  if (!backdrop || !headingEl || !subHeadingEl || !bodyEl) return;

  const t = editModalTranslations[state.currentLang] || editModalTranslations.en;

  if (mode === 'add-item') {
    headingEl.textContent = t.addItemTitle;
    subHeadingEl.textContent = t.addItemSubtitle;
    bodyEl.innerHTML = `
      <form id="editDataForm" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.itemNameLabel} *</label>
            <input type="text" id="editItemName" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" placeholder="e.g. Organic Strawberries / स्ट्रॉबेरी" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.categoryLabel} *</label>
            <select id="editItemCategory" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);">
              <option value="produce">Vegetables & Fruits / फल व सब्ज़ियाँ</option>
              <option value="seeds">Agricultural Seeds / बीज</option>
              <option value="vehicles">Tractors & Machinery / ट्रैक्टर व मशीनरी</option>
              <option value="spares">Tractor Spare Parts & Implements / स्पेयर पार्ट्स</option>
              <option value="tech">Smart Tech & Drones / ड्रोन व तकनीक</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.priceLabel} *</label>
            <input type="text" id="editItemPrice" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" placeholder="e.g. ₹220 or ₹7,25,000" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.unitLabel} *</label>
            <input type="text" id="editItemUnit" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" placeholder="e.g. / kg, / qtl, ex-showroom" value="/ kg" required />
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.imageLabel} *</label>
          <input type="url" id="editItemImage" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=700&q=80" required />
          
          <div style="margin-top: 8px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
            <span style="font-size: 0.74rem; color: var(--slate-500); font-weight: 600;">${t.imagePresetsLabel}</span>
            <button type="button" class="btn btn-secondary btn-xs preset-img-btn" data-url="https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80" style="padding: 2px 8px; font-size: 0.72rem;">🥭 Mango</button>
            <button type="button" class="btn btn-secondary btn-xs preset-img-btn" data-url="https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=700&q=80" style="padding: 2px 8px; font-size: 0.72rem;">🍅 Tomato</button>
            <button type="button" class="btn btn-secondary btn-xs preset-img-btn" data-url="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=80" style="padding: 2px 8px; font-size: 0.72rem;">🌾 Rice/Wheat</button>
            <button type="button" class="btn btn-secondary btn-xs preset-img-btn" data-url="https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=700&q=80" style="padding: 2px 8px; font-size: 0.72rem;">🚜 Tractor</button>
            <button type="button" class="btn btn-secondary btn-xs preset-img-btn" data-url="https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80" style="padding: 2px 8px; font-size: 0.72rem;">🔧 Spares</button>
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.easyDescLabel}</label>
          <textarea id="editItemEasyDesc" rows="2" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900); font-family: inherit; font-size: 0.85rem;" placeholder="e.g. Pure farmgate harvest with natural sweetness and zero chemical spray."></textarea>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.techDescLabel}</label>
          <textarea id="editItemTechDesc" rows="2" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900); font-family: inherit; font-size: 0.85rem;" placeholder="e.g. Brix 18.2%, APMC Grade A, Nitrogen packed cold chain logistics at 4°C."></textarea>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.supplierLabel}</label>
            <input type="text" id="editItemSupplier" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${state.userName} Farmgate Co-op" />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.stockLabel}</label>
            <input type="text" id="editItemStock" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="1,200 kg" />
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
          <button type="button" id="cancelEditDataModalBtn" class="btn btn-secondary">${t.cancelBtn}</button>
          <button type="submit" class="btn btn-primary font-bold"><i data-lucide="check" class="icon-sm"></i> <span>${t.saveBtn}</span></button>
        </div>
      </form>
    `;
  } else if (mode === 'edit-item') {
    const items = getActiveMarketplaceItems();
    const item = items.find(i => i.id === targetId) || items[0];
    headingEl.textContent = t.editItemTitle;
    subHeadingEl.textContent = `${t.editItemSubtitle} (${item.name})`;
    bodyEl.innerHTML = `
      <form id="editDataForm" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.itemNameLabel} *</label>
            <input type="text" id="editItemName" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.name)}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.categoryLabel} *</label>
            <select id="editItemCategory" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);">
              <option value="produce" ${item.categoryKey === 'produce' ? 'selected' : ''}>Vegetables & Fruits / फल व सब्ज़ियाँ</option>
              <option value="seeds" ${item.categoryKey === 'seeds' ? 'selected' : ''}>Agricultural Seeds / बीज</option>
              <option value="vehicles" ${item.categoryKey === 'vehicles' ? 'selected' : ''}>Tractors & Machinery / ट्रैक्टर व मशीनरी</option>
              <option value="spares" ${item.categoryKey === 'spares' ? 'selected' : ''}>Tractor Spare Parts & Implements / स्पेयर पार्ट्स</option>
              <option value="tech" ${item.categoryKey === 'tech' ? 'selected' : ''}>Smart Tech & Drones / ड्रोन व तकनीक</option>
            </select>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.priceLabel} *</label>
            <input type="text" id="editItemPrice" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.price)}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.unitLabel} *</label>
            <input type="text" id="editItemUnit" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.unit || '/ kg')}" required />
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.imageLabel} *</label>
          <input type="url" id="editItemImage" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.image)}" required />
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.easyDescLabel}</label>
          <textarea id="editItemEasyDesc" rows="2" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900); font-family: inherit; font-size: 0.85rem;">${escapeHtml(item.specsEasy || item.description || '')}</textarea>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.techDescLabel}</label>
          <textarea id="editItemTechDesc" rows="2" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900); font-family: inherit; font-size: 0.85rem;">${escapeHtml(item.specsDetailed || item.description || '')}</textarea>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.supplierLabel}</label>
            <input type="text" id="editItemSupplier" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.supplier || '')}" />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.stockLabel}</label>
            <input type="text" id="editItemStock" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(item.stock || 'Available')}" />
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
          <button type="button" id="deleteItemBtn" class="btn btn-secondary font-bold" style="color: #DC2626; border-color: rgba(220, 38, 38, 0.3); background: rgba(220, 38, 38, 0.05);">
            <i data-lucide="trash-2" class="icon-xs"></i> <span>${t.deleteBtn}</span>
          </button>
          <div style="display: flex; gap: 10px;">
            <button type="button" id="cancelEditDataModalBtn" class="btn btn-secondary">${t.cancelBtn}</button>
            <button type="submit" class="btn btn-primary font-bold"><i data-lucide="check" class="icon-sm"></i> <span>${t.saveBtn}</span></button>
          </div>
        </div>
      </form>
    `;

    document.getElementById('deleteItemBtn')?.addEventListener('click', () => {
      state.marketplaceItems = state.marketplaceItems.filter(i => i.id !== targetId);
      reRenderMarketplace();
      closeEditDataModal();
      showToast(`Listing "${item.name}" deleted from marketplace.`, 'info');
    });
  } else if (mode === 'edit-farm') {
    headingEl.textContent = t.editFarmTitle;
    subHeadingEl.textContent = t.editFarmSubtitle;
    bodyEl.innerHTML = `
      <form id="editDataForm" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.farmerNameLabel} *</label>
            <input type="text" id="editFarmFarmer" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.userName)}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.farmNameLabel} *</label>
            <input type="text" id="editFarmName" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.farmData.farmName)}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.acreageLabel} *</label>
            <input type="text" id="editFarmAcreage" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.farmData.acreage)}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.moistureTargetLabel} *</label>
            <input type="text" id="editFarmMoisture" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.farmData.targetMoisture)}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.projectedIncomeLabel}</label>
            <input type="text" id="editFarmIncome" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.farmData.projectedIncome)}" />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.primaryCropsLabel}</label>
            <input type="text" id="editFarmCrops" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.farmData.primaryCrops)}" />
          </div>
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
          <button type="button" id="cancelEditDataModalBtn" class="btn btn-secondary">${t.cancelBtn}</button>
          <button type="submit" class="btn btn-primary font-bold"><i data-lucide="check" class="icon-sm"></i> <span>${t.saveBtn}</span></button>
        </div>
      </form>
    `;
  } else if (mode === 'edit-mandi') {
    const list = getActiveMandiCommodities();
    const commodity = list.find(c => c.id === targetId) || list[0];
    headingEl.textContent = t.editMandiTitle;
    subHeadingEl.textContent = `${t.editMandiSubtitle} (${commodity.name})`;
    bodyEl.innerHTML = `
      <form id="editDataForm" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 14px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.commodityLabel} *</label>
            <input type="text" id="editMandiName" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(commodity.name)}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.mandiNameLabel} *</label>
            <input type="text" id="editMandiCenter" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(commodity.mandi)}" required />
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 12px;">
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.modalPriceLabel} *</label>
            <input type="number" id="editMandiModal" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${commodity.modalPrice}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.minPriceLabel} *</label>
            <input type="number" id="editMandiMin" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${commodity.minPrice}" required />
          </div>
          <div>
            <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.maxPriceLabel} *</label>
            <input type="number" id="editMandiMax" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${commodity.maxPrice}" required />
          </div>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">${t.trendLabel}</label>
          <input type="text" id="editMandiTrend" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${commodity.change > 0 ? '+' : ''}${commodity.change}%" />
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
          <button type="button" id="cancelEditDataModalBtn" class="btn btn-secondary">${t.cancelBtn}</button>
          <button type="submit" class="btn btn-primary font-bold"><i data-lucide="check" class="icon-sm"></i> <span>${t.saveBtn}</span></button>
        </div>
      </form>
    `;
  } else if (mode === 'edit-profile') {
    headingEl.textContent = t.editProfileTitle;
    subHeadingEl.textContent = t.editProfileSubtitle;
    bodyEl.innerHTML = `
      <form id="editDataForm" style="display: flex; flex-direction: column; gap: 16px;">
        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">Full Name / पूरा नाम *</label>
          <input type="text" id="editProfileName" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.userName)}" required />
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">Role / भूमिका *</label>
          <select id="editProfileRole" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);">
            <option value="farmer" ${state.userRole === 'farmer' ? 'selected' : ''}>🌾 Farmer / Grower • किसान</option>
            <option value="buyer" ${state.userRole === 'buyer' ? 'selected' : ''}>💼 Buyer / Wholesaler • खरीदार</option>
            <option value="supplier" ${state.userRole === 'supplier' ? 'selected' : ''}>🚜 Supplier / Machinery Dealer • डीलर</option>
            <option value="expert" ${state.userRole === 'expert' ? 'selected' : ''}>🔬 Expert / Agronomist • कृषि वैज्ञानिक</option>
          </select>
        </div>

        <div>
          <label style="display: block; font-size: 0.825rem; font-weight: 700; color: var(--slate-700); margin-bottom: 6px;">Phone / मोबाइल नंबर</label>
          <input type="text" id="editProfilePhone" class="form-input" style="width: 100%; padding: 10px 14px; border: 1px solid var(--border-light); border-radius: var(--radius-md); background: var(--bg-page); color: var(--slate-900);" value="${escapeHtml(state.userPhone)}" />
        </div>

        <div style="display: flex; justify-content: flex-end; gap: 10px; margin-top: 10px; padding-top: 16px; border-top: 1px solid var(--border-subtle);">
          <button type="button" id="cancelEditDataModalBtn" class="btn btn-secondary">${t.cancelBtn}</button>
          <button type="submit" class="btn btn-primary font-bold"><i data-lucide="check" class="icon-sm"></i> <span>${t.saveBtn}</span></button>
        </div>
      </form>
    `;
  }

  // Handle Preset Image Buttons
  bodyEl.querySelectorAll('.preset-img-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const url = btn.dataset.url;
      const input = document.getElementById('editItemImage');
      if (input && url) input.value = url;
    });
  });

  // Handle Cancel Button inside form
  document.getElementById('cancelEditDataModalBtn')?.addEventListener('click', closeEditDataModal);

  // Handle Form Submit
  const form = document.getElementById('editDataForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      handleEditFormSubmit(mode, targetId);
    });
  }

  backdrop.style.display = 'flex';
  createIcons({ icons });
}

function closeEditDataModal() {
  state.editModal = { open: false, mode: null, targetId: null };
  const backdrop = document.getElementById('editDataModalBackdrop');
  if (backdrop) backdrop.style.display = 'none';
}

function handleEditFormSubmit(mode, targetId) {
  if (mode === 'add-item') {
    const name = document.getElementById('editItemName')?.value.trim() || 'Custom Produce';
    const categoryKey = document.getElementById('editItemCategory')?.value || 'produce';
    const price = document.getElementById('editItemPrice')?.value.trim() || '₹100';
    const unit = document.getElementById('editItemUnit')?.value.trim() || '/ kg';
    const image = document.getElementById('editItemImage')?.value.trim() || 'https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=700&q=80';
    const easyDesc = document.getElementById('editItemEasyDesc')?.value.trim() || 'Fresh high-quality produce direct from farm.';
    const techDesc = document.getElementById('editItemTechDesc')?.value.trim() || 'Standardized quality grade with verified harvest telemetry.';
    const supplier = document.getElementById('editItemSupplier')?.value.trim() || `${state.userName} Farmgate`;
    const stock = document.getElementById('editItemStock')?.value.trim() || '1,000 kg';

    const categoryNames = {
      produce: 'Vegetables & Fruits',
      seeds: 'Agricultural Seeds',
      vehicles: 'Tractors & Machinery',
      spares: 'Spare Parts & Implements',
      tech: 'Smart Tech & Drones'
    };

    const emojis = {
      produce: '🍎',
      seeds: '🌱',
      vehicles: '🚜',
      spares: '⚙️',
      tech: '🛰️'
    };

    const newItem = {
      id: `item-custom-${Date.now()}`,
      categoryKey,
      category: categoryNames[categoryKey] || 'Farmgate Produce',
      name,
      price,
      unit,
      image,
      badge: 'Farmgate Direct',
      discount: 'Direct Rate',
      supplier,
      rating: '★ 5.0 (New)',
      stock,
      specsEasy: easyDesc,
      specsDetailed: techDesc,
      description: easyDesc,
      easyEmoji: emojis[categoryKey] || '🌿',
      isCustomPrice: true,
      quickMetrics: {
        origin: 'Punjab Farmgate',
        verified: '100% Direct'
      }
    };

    const items = getActiveMarketplaceItems();
    items.unshift(newItem);
    reRenderMarketplace();
    closeEditDataModal();
    confetti({ particleCount: 60, spread: 55, origin: { y: 0.6 } });
    playSound('success');
    showToast(`Added "${name}" to marketplace catalog!`, 'success');
  } else if (mode === 'edit-item') {
    const items = getActiveMarketplaceItems();
    const item = items.find(i => i.id === targetId);
    if (item) {
      item.name = document.getElementById('editItemName')?.value.trim() || item.name;
      item.categoryKey = document.getElementById('editItemCategory')?.value || item.categoryKey;
      item.price = document.getElementById('editItemPrice')?.value.trim() || item.price;
      item.unit = document.getElementById('editItemUnit')?.value.trim() || item.unit;
      item.image = document.getElementById('editItemImage')?.value.trim() || item.image;
      item.specsEasy = document.getElementById('editItemEasyDesc')?.value.trim() || item.specsEasy;
      item.specsDetailed = document.getElementById('editItemTechDesc')?.value.trim() || item.specsDetailed;
      item.supplier = document.getElementById('editItemSupplier')?.value.trim() || item.supplier;
      item.stock = document.getElementById('editItemStock')?.value.trim() || item.stock;
      item.isCustomPrice = true;

      reRenderMarketplace();
      closeEditDataModal();
      playSound('success');
      showToast(`Updated "${item.name}" listing details!`, 'success');
    }
  } else if (mode === 'edit-farm') {
    const farmer = document.getElementById('editFarmFarmer')?.value.trim();
    const farmName = document.getElementById('editFarmName')?.value.trim();
    const acreage = document.getElementById('editFarmAcreage')?.value.trim();
    const targetMoisture = document.getElementById('editFarmMoisture')?.value.trim();
    const projectedIncome = document.getElementById('editFarmIncome')?.value.trim();
    const primaryCrops = document.getElementById('editFarmCrops')?.value.trim();

    if (farmer) state.userName = farmer;
    if (farmName) state.farmData.farmName = farmName;
    if (acreage) state.farmData.acreage = acreage;
    if (targetMoisture) state.farmData.targetMoisture = targetMoisture;
    if (projectedIncome) state.farmData.projectedIncome = projectedIncome;
    if (primaryCrops) state.farmData.primaryCrops = primaryCrops;

    reRenderDashboard();
    renderApp();
    closeEditDataModal();
    playSound('success');
    showToast(`Farm profile & parameters updated for ${state.userName}!`, 'success');
  } else if (mode === 'edit-mandi') {
    const list = getActiveMandiCommodities();
    const commodity = list.find(c => c.id === targetId);
    if (commodity) {
      commodity.name = document.getElementById('editMandiName')?.value.trim() || commodity.name;
      commodity.mandi = document.getElementById('editMandiCenter')?.value.trim() || commodity.mandi;
      commodity.modalPrice = parseInt(document.getElementById('editMandiModal')?.value, 10) || commodity.modalPrice;
      commodity.minPrice = parseInt(document.getElementById('editMandiMin')?.value, 10) || commodity.minPrice;
      commodity.maxPrice = parseInt(document.getElementById('editMandiMax')?.value, 10) || commodity.maxPrice;
      commodity.isCustomPrice = true;

      reRenderDashboard();
      closeEditDataModal();
      playSound('success');
      showToast(`Mandi rate updated for ${commodity.name}: ₹${commodity.modalPrice}/qtl`, 'success');
    }
  } else if (mode === 'edit-profile') {
    const name = document.getElementById('editProfileName')?.value.trim();
    const role = document.getElementById('editProfileRole')?.value;
    const phone = document.getElementById('editProfilePhone')?.value.trim();

    if (name) state.userName = name;
    if (role) {
      state.userRole = role;
      state.selectedRole = role;
    }
    if (phone) state.userPhone = phone;

    renderApp();
    closeEditDataModal();
    playSound('success');
    showToast(`Profile updated! Welcome ${state.userName}`, 'success');
  }
}

function openPillarModal(pillar) {
  const modal = document.getElementById('pillarModalBackdrop');
  const body = document.getElementById('pillarModalDynamicBody');
  if (modal && body) {
    body.innerHTML = generatePillarModalContent(pillar, state.understandingMode);
    modal.classList.add('open');
    createIcons({ icons });

    body.querySelector('.pillar-action-btn')?.addEventListener('click', (e) => {
      const action = e.currentTarget.dataset.action;
      const title = e.currentTarget.dataset.pillar;
      closePillarModal();
      showToast(`Action Triggered: "${action}" on ${title}`, 'success');
      switchWorkspaceView('dashboard');
    });
  }
}

function closePillarModal() {
  const modal = document.getElementById('pillarModalBackdrop');
  if (modal) modal.classList.remove('open');
}

function closeAuthModal() {
  const modal = document.getElementById('authModalBackdrop');
  if (modal) modal.classList.remove('open');
}

function attachNewsletterListeners() {
  const form = document.getElementById('newsletterForm');
  const input = document.getElementById('newsletterPhoneInput');
  if (form && input) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const phone = input.value.trim();
      if (phone) {
        showToast(`Subscribed! Daily 08:30 AM Mandi Price broadcast activated for +91 ${phone}`, 'success');
        input.value = '';
      }
    });
  }
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Bootstrap Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderApp();
  console.log('🌾 CropCare Smart Agriculture Platform initialized with Auth Portal, App-Shell Layout, Dual Understanding Modes, and Multi-Language Engine.');
});
