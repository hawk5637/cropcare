import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  Camera, 
  TrendingUp, 
  Layers, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  Scale, 
  Globe
} from 'lucide-react';

export default function AnimatedIntroScreen({ onComplete }) {
  const { userName, userRole, language, setLanguage, SUPPORTED_LOCALES } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) { /* ignore */ }
  }, []);

  const slideDeck = {
    en: [
      {
        id: 'welcome',
        badge: 'Welcome to CropCare',
        title: 'Smart Agriculture & Agronomy Intelligence Platform',
        tagline: 'Better Farms, Brighter Futures • From Soil to Success',
        description: `Welcome aboard, ${userName || 'Farmer'}! CropCare unites farmers, agricultural buyers, equipment suppliers, and ICAR agronomists onto a unified, next-generation intelligent digital ecosystem.`,
        icon: Sprout,
        color: 'from-emerald-600 to-green-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'Direct connection between verified farmers and bulk buyers with zero middleman deductions',
          'AI Agronomy diagnostics and personalized parcel telemetry farm advisories',
          'Transparent e-NAM and APMC real-time market rates and MSP price alerts',
          'Comprehensive farm lifecycle management across all 18 smart modules'
        ]
      },
      {
        id: 'scanner',
        badge: 'Multimodal AI Vision',
        title: 'Instant Crop Disease & Leaf Health Scanner',
        tagline: 'Point your camera at any crop leaf for instant clinical remedies',
        description: 'Powered by multimodal Google Gemini 3.5 vision intelligence and ICAR agricultural standards, our AI Leaf Doctor detects blights, rusts, deficiencies, and insect attacks in seconds.',
        icon: Camera,
        color: 'from-teal-600 to-emerald-500',
        bgGlow: 'bg-teal-500/10',
        highlights: [
          'Live device camera stream with real-time HUD targeting alignment',
          'Identifies over 80+ crop diseases across Cereals, Vegetables, Fruits, and Pulses',
          'Instant dual-remedy breakdown: Organic botanical recipes & ICAR chemical doses',
          'Audio voice readout to listen to treatments directly in the field'
        ]
      },
      {
        id: 'budget-simulator',
        badge: 'Simulations & Budgeting',
        title: 'Resource Budget Planner & What-If Farm Simulator',
        tagline: 'Simulate crop yield scenarios and allocate finite resources with live trade-offs',
        description: 'Never guess water or fertilizer needs again. Set total farm budget caps for water, fertilizer, labor, and power, adjust sliders across crops, and see projected yields, costs, and profit in real time.',
        icon: Scale,
        color: 'from-emerald-600 to-teal-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'Finite resource limits for Water (m³), Fertilizer (kg NPK), Labor (Days), and Power (kWh)',
          'Live trade-off indicator showing yield & financial impact as you shift resources',
          'Agronomic optimizer providing balanced allocation recommendations with clear reasoning',
          'What-If Simulator allowing side-by-side comparison of rainfall and crop scenarios'
        ]
      },
      {
        id: 'mandi',
        badge: 'Transparent Marketplace',
        title: 'Real-Time Mandi Rates & Direct Farm Trade',
        tagline: 'Maximize harvest profits with zero middleman deductions',
        description: 'Access live wholesale mandi prices across APMCs nationwide. Connect directly with institutional food processors, mills, and exporters for assured forward-purchase agreements.',
        icon: TrendingUp,
        color: 'from-amber-600 to-yellow-500',
        bgGlow: 'bg-amber-500/10',
        highlights: [
          'Real-time price tickers for Wheat, Basmati Rice, Mustard, Cotton, Tomato, and more',
          'Digital escrow payments ensuring 100% fraud-proof settlement upon delivery',
          'Buyer procurement bids with transparent quality grade inspection protocols',
          'Direct logistics coordination from farm gate to warehouse storage'
        ]
      },
      {
        id: 'suite',
        badge: 'Complete Agronomy Suite',
        title: '18 Precision Modules & 24/7 AI Farm Advisor',
        tagline: 'End-to-end farm management and instantaneous agronomist guidance',
        description: 'From pre-sowing soil health testing to cold storage bookings, smart irrigation pumps, and machinery hire, CropCare puts complete agricultural intelligence into your hands.',
        icon: Bot,
        color: 'from-violet-600 to-indigo-500',
        bgGlow: 'bg-violet-500/10',
        highlights: [
          'Soil fertility mapping with NPK ratio balancing recommendations',
          'Automated irrigation scheduling based on live weather and evapotranspiration',
          'Farm Advisor AI chatbot answering with your app’s real farm telemetry',
          'One-click multi-language support (English, Hindi, Tamil, and French)'
        ]
      }
    ],
    hi: [
      {
        id: 'welcome',
        badge: 'क्रॉपकेयर में आपका स्वागत है',
        title: 'स्मार्ट कृषि एवं कृषि-विज्ञान बुद्धिमत्ता मंच',
        tagline: 'बेहतर खेती, उज्ज्वल भविष्य • मिट्टी से समृद्धि तक',
        description: `स्वागत है, ${userName || 'किसान मित्र'}! क्रॉपकेयर किसानों, थोक खरीदारों, कृषि उपकरण प्रदाताओं और ICAR वैज्ञानिकों को एक संपूर्ण डिजिटल मंच पर जोड़ता है।`,
        icon: Sprout,
        color: 'from-emerald-600 to-green-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'सत्यापित किसानों और थोक खरीदारों के बीच बिना बिचौलियों के सीधा संपर्क',
          'AI कृषि रोग निदान एवं खेत के अनुसार व्यक्तिगत सलाह',
          'पारदर्शी e-NAM और APMC लाइव मंडी भाव व न्यूनतम समर्थन मूल्य अलर्ट',
          'सभी 18 स्मार्ट कृषि मॉड्यूल के साथ फसल चक्र का पूरा प्रबंधन'
        ]
      },
      {
        id: 'scanner',
        badge: 'AI विजन पत्ती स्कैनर',
        title: 'त्वरित फसल रोग एवं स्वास्थ्य स्कैनर',
        tagline: 'किसी भी पत्ती पर कैमरा केंद्रित करें और तुरंत उपचार उपाय पाएं',
        description: 'गूगल जेमिनी 3.5 विजन और ICAR मानकों द्वारा संचालित हमारा AI फसल डॉक्टर कुछ ही सेकंडों में झुलसा, रतुआ, पोषक तत्वों की कमी व कीटों की पहचान करता है।',
        icon: Camera,
        color: 'from-teal-600 to-emerald-500',
        bgGlow: 'bg-teal-500/10',
        highlights: [
          'लाइव कैमरा स्ट्रीम के साथ सटीक पत्ती पहचान फ्रेम',
          'अनाज, सब्जियों, फलों व दालों के 80+ से अधिक रोगों की तुरंत पहचान',
          'दोहरा उपचार: घरेलू जैविक काढ़ा नुस्खे एवं ICAR प्रमाणित रासायनिक मात्रा',
          'खेत में काम करते हुए सुनने के लिए ऑडियो आवाज़ में समाधान'
        ]
      },
      {
        id: 'budget-simulator',
        badge: 'सिम्युलेटर व बजटिंग',
        title: 'संसाधन बजट योजनाकार एवं वॉट-इफ फार्म सिम्युलेटर',
        tagline: 'फसल पैदावार परिदृश्यों का अनुकरण करें और सीमित संसाधनों का सही आवंटन करें',
        description: 'पानी या खाद के लिए कभी भी अंदाज़ा न लगाएं। पानी, खाद, श्रम और बिजली की कुल सीमाएं तय करें, स्लाइडर हिलाएं और पैदावार व मुनाफे का लाइव प्रभाव देखें।',
        icon: Scale,
        color: 'from-emerald-600 to-teal-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'पानी (m³), खाद (kg NPK), श्रम (दिन) और बिजली (kWh) की निश्चित बजट सीमा',
          'संसाधन बदलने पर पैदावार व मुनाफे में होने वाले बदलाव का लाइव सूचक',
          'सटीक वैज्ञानिक कारणों के साथ संतुलित योजना सुझाव बटन',
          'मौसम और सिंचाई की स्थितियों की एक साथ तुलना'
        ]
      },
      {
        id: 'mandi',
        badge: 'पारदर्शी मंडी बाजार',
        title: 'लाइव मंडी भाव एवं सीधा कृषि व्यापार',
        tagline: 'बिना बिचौलियों के अपनी फसल का सर्वोत्तम मूल्य प्राप्त करें',
        description: 'देशभर की APMC मंडियों के थोक भाव लाइव देखें। खाद्य प्रसंस्करण मिलों, निर्यातकों व खरीदारों से सीधे अग्रिम खरीद अनुबंध करें।',
        icon: TrendingUp,
        color: 'from-amber-600 to-yellow-500',
        bgGlow: 'bg-amber-500/10',
        highlights: [
          'गेहूं, बासमती चावल, सरसों, कपास, टमाटर आदि के लाइव रेट टिकर',
          '100% सुरक्षित डिजिटल बैंक एस्क्रो भुगतान व्यवस्था',
          'गुणवत्ता ग्रेडिंग व पारदर्शी बोली प्रणाली',
          'खेत से गोदाम तक सीधी परिवहन और लॉजिस्टिक्स सुविधा'
        ]
      },
      {
        id: 'suite',
        badge: 'संपूर्ण कृषि सूट',
        title: '18 स्मार्ट मॉड्यूल एवं 24/7 AI फार्म सलाहकार',
        tagline: 'मिट्टी की जांच से लेकर फसल बिक्री तक एक ही जगह सब कुछ',
        description: 'ड्रिप सिंचाई, मिट्टी स्वास्थ्य परीक्षण, खाद कैलकुलेटर, कोल्ड स्टोरेज और ट्रैक्टर किराए पर लेने की सुविधा अब आपकी उंगलियों पर है।',
        icon: Bot,
        color: 'from-violet-600 to-indigo-500',
        bgGlow: 'bg-violet-500/10',
        highlights: [
          'NPK अनुपात सुधार के साथ मिट्टी की उर्वरता मैपिंग',
          'मौसम के आधार पर स्वचालित सिंचाई सारणी',
          'खेत के वास्तविक आंकड़ों पर उत्तर देने वाला AI फार्म सलाहकार चैटबॉट',
          'हिंदी, तमिल, अंग्रेजी और फ्रेंच में तत्काल भाषा परिवर्तन'
        ]
      }
    ],
    ta: [
      {
        id: 'welcome',
        badge: 'பயிர்பாதுகாப்பிற்கு நல்வரவு',
        title: 'ஸ்மார்ட் வேளாண்மை மற்றும் விவசாய நுண்ணறிவு தளம்',
        tagline: 'சிறந்த பண்ணைகள், பிரகாசமான எதிர்காலம் • மண்ணிலிருந்து வெற்றி வரை',
        description: `நல்வரவு, ${userName || 'விவசாயி'}! விவசாயிகள், மொத்த வியாபாரிகள், வேளாண் நிறுவனங்கள் மற்றும் ICAR விஞ்ஞானிகளை இணைக்கும் அதிநவீன டிஜிட்டல் தளம்.`,
        icon: Sprout,
        color: 'from-emerald-600 to-green-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'இடைத்தரகர்கள் இன்றி விவசாயிகள் மற்றும் மொத்த வாங்குபவர்களிடையே நேரடி தொடர்பு',
          'AI வேளாண்மை நோய் கண்டறிதல் மற்றும் தனிப்பயனாக்கப்பட்ட ஆலோசனை',
          'நேரடி e-NAM மற்றும் APMC மண்டி விலை நிலவரம் & குறைந்தபட்ச ஆதரவு விலை விழிப்பூட்டல்',
          '18 ஸ்மார்ட் தொகுதிகளுடன் முழுமையான பண்ணை மேலாண்மை'
        ]
      },
      {
        id: 'scanner',
        badge: 'AI பார்வை ஸ்கேனர்',
        title: 'உடனடி பயிர் நோய் மற்றும் இலை ஸ்கேனர்',
        tagline: 'இலையை நோக்கி கேமராவைத் திருப்பினால் நொடிகளில் தீர்வு கிடைக்கும்',
        description: 'கூகிள் ஜெமினி 3.5 பார்வை நுண்ணறிவு மூலம் இலைக்கருகல், பூஞ்சை, ஊட்டச்சத்துக் குறைபாடு மற்றும் பூச்சிகளை நொடிகளில் துல்லியமாகக் கண்டறியும்.',
        icon: Camera,
        color: 'from-teal-600 to-emerald-500',
        bgGlow: 'bg-teal-500/10',
        highlights: [
          'நேரடி கேமரா வழிகாட்டி மூலம் துல்லியமான இலையைக் கண்டறிதல்',
          '80+ க்கும் மேற்பட்ட பயிர் நோய்களை உடனடியாக அடையாளம் காணுதல்',
          'இருவழித் தீர்வு: பாரம்பரிய இயற்கை மருந்து & ICAR அங்கீகரித்த மருந்தளவு',
          'பண்ணையில் வேலை செய்யும்போது கேட்கக்கூடிய குரல் ஒலி வசதி'
        ]
      },
      {
        id: 'budget-simulator',
        badge: 'திட்டமிடல் & மாதிரி சோதனைகள்',
        title: 'வள பட்ஜெட் திட்டமிடல் & பண்ணை உருவகப்படுத்துதல்',
        tagline: 'வரையறுக்கப்பட்ட வளங்களைச் சரியாக ஒதுக்கீடு செய்து விளைச்சலை அதிகரியுங்கள்',
        description: 'தண்ணீர், உரம், உழைப்பு மற்றும் மின்சார வரம்புகளை நிர்ணயித்து, ஸ்லைடர்களை நகர்த்தி நிகழ்நேர விளைச்சல் மற்றும் லாப மாற்றங்களைக் காணுங்கள்.',
        icon: Scale,
        color: 'from-emerald-600 to-teal-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'தண்ணீர் (m³), உரம் (kg), மனித உழைப்பு (நாட்கள்), மின்சாரம் (kWh) வரம்புகள்',
          'வளங்களை மாற்றும்போது கிடைக்கும் கூடுதல் விளைச்சல் மற்றும் லாப மாற்றம்',
          'விவசாய காரணங்களுடன் கூடிய சமநிலையான பரிந்துரைத் திட்டம்',
          'மழைப்பொழிவு மாற்றங்களின் ஒப்பீட்டு ஆய்வு'
        ]
      },
      {
        id: 'mandi',
        badge: 'வெளிப்படையான சந்தை',
        title: 'நிகழ்நேர மண்டி விலை & நேரடி வர்த்தகம்',
        tagline: 'இடைத்தரகர்கள் இன்றி விளைபொருளுக்கு அதிக லாபம் பெறுங்கள்',
        description: 'நாடு முழுவதும் உள்ள APMC மண்டிகளின் மொத்த விலையை உடனுக்குடன் தெரிந்து கொள்ளுங்கள். மொத்த வாங்குபவர்களுடன் நேரடி ஒப்பந்தம் செய்யுங்கள்.',
        icon: TrendingUp,
        color: 'from-amber-600 to-yellow-500',
        bgGlow: 'bg-amber-500/10',
        highlights: [
          'நெல், கோதுமை, கடுகு, தக்காளி போன்றவற்றின் நேரடி விலை நிலவரம்',
          '100% பாதுகாப்பான வங்கி எஸ்க்ரோ கட்டண முறை',
          'தரம் வாரியான விலை மற்றும் ஒப்பந்தங்கள்',
          'பண்ணையிலிருந்து கிடங்கிற்கு நேரடி போக்குவரத்து வசதி'
        ]
      },
      {
        id: 'suite',
        badge: 'முழுமையான விவசாய தளம்',
        title: '18 துல்லிய வேளாண் தொகுதிகள் & 24/7 AI ஆலோசகர்',
        tagline: 'மண் பரிசோதனை முதல் விளைபொருள் விற்பனை வரை ஒரே இடத்தில்',
        description: 'சொட்டு நீர் பாசனம், டிராக்டர் வாடகை, குளிர்சாதன கிடங்கு முன்பதிவு மற்றும் AI விவசாய ஆலோசகர் எந்நேரமும் உங்களுடன்.',
        icon: Bot,
        color: 'from-violet-600 to-indigo-500',
        bgGlow: 'bg-violet-500/10',
        highlights: [
          'மண் ஊட்டச்சத்து NPK சமநிலை பரிந்துரைகள்',
          'வானிலை அடிப்படையிலான தானியங்கி பாசன அட்டவணை',
          'பண்ணை விபரங்களின் அடிப்படையில் பதிலளிக்கும் AI ஆலோசகர்',
          'தமிழ், இந்தி, ஆங்கிலம் மற்றும் பிரெஞ்சு மொழிகளில் உடனடி மொழி மாற்றம்'
        ]
      }
    ],
    fr: [
      {
        id: 'welcome',
        badge: 'Bienvenue sur CropCare',
        title: "Plateforme Intelligente d'Agronomie et d'Agriculture",
        tagline: 'De Meilleurs Rendements, un Avenir Durable',
        description: `Bienvenue, ${userName || 'Agriculteur'} ! CropCare connecte agriculteurs, négociants, fournisseurs d'équipements et agronomes sur un écosystème numérique unifié.`,
        icon: Sprout,
        color: 'from-emerald-600 to-green-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'Liaison directe entre producteurs vérifiés et acheteurs en gros sans intermédiaires',
          'Diagnostics agronomiques par IA et conseils parcellaires personnalisés',
          'Cours du marché en temps réel et alertes sur les prix garantis',
          'Gestion complète du cycle agricole à travers 18 modules intelligents'
        ]
      },
      {
        id: 'scanner',
        badge: 'Vision Multimodale IA',
        title: 'Scanner Instantané de Maladies et Santé Foliaire',
        tagline: 'Visez les feuilles avec votre caméra pour obtenir des remèdes cliniques',
        description: "Propulsé par Google Gemini 3.5 et les protocoles agronomiques certifiés, notre scanner détecte rouilles, brûlures, carences et ravageurs en quelques secondes.",
        icon: Camera,
        color: 'from-teal-600 to-emerald-500',
        bgGlow: 'bg-teal-500/10',
        highlights: [
          'Flux vidéo en direct avec viseur d’alignement automatique',
          'Détection de plus de 80 pathologies végétales (céréales, légumes, fruits)',
          'Double traitement : recettes botaniques bio et posologies chimiques homologuées',
          'Lecture vocale des recommandations directement au champ'
        ]
      },
      {
        id: 'budget-simulator',
        badge: 'Budgétisation & Simulation',
        title: 'Planificateur de Budget des Ressources & Simulateur',
        tagline: 'Allouez eau, engrais, main-d’œuvre et énergie avec analyse d’impact en direct',
        description: "Définissez vos plafonds de ressources, ajustez les curseurs par parcelle et visualisez instantanément les rendements attendus et le bénéfice net.",
        icon: Scale,
        color: 'from-emerald-600 to-teal-500',
        bgGlow: 'bg-emerald-500/10',
        highlights: [
          'Plafonds stricts pour Eau (m³), Engrais (kg), Main-d’œuvre (Jours) et Énergie (kWh)',
          'Indicateur d’arbitrage affichant le gain de rendement et de profit à chaque modification',
          'Optimiseur agronomique avec explications agronomiques détaillées',
          'Simulateur météo comparant plusieurs scénarios d’irrigation'
        ]
      },
      {
        id: 'mandi',
        badge: 'Marché Transparent',
        title: 'Cotations en Direct et Vente Directe',
        tagline: 'Valorisez vos récoltes avec un règlement sécurisé sans intermédiaires',
        description: 'Suivez les cours des marchés de gros APMC. Négociez directement avec les transformateurs agroalimentaires avec contrats d’achat à terme garantis.',
        icon: TrendingUp,
        color: 'from-amber-600 to-yellow-500',
        bgGlow: 'bg-amber-500/10',
        highlights: [
          'Cotations en direct sur le blé, riz basmati, moutarde, coton et maraîchage',
          'Paiements numériques sécurisés par séquestre bancaire',
          'Enchères d’acheteurs avec critères de conformité et de qualité',
          'Coordination logistique de l’exploitation jusqu’aux entrepôts'
        ]
      },
      {
        id: 'suite',
        badge: 'Suite Agronomique Complète',
        title: '18 Modules de Précision et Conseiller IA 24/7',
        tagline: 'Gestion intégrée de la fertilité des sols jusqu’à la vente finale',
        description: 'Tests de sol, irrigation goutte-à-goutte, location de matériel et réservations en chaîne du froid à portée de main.',
        icon: Bot,
        color: 'from-violet-600 to-indigo-500',
        bgGlow: 'bg-violet-500/10',
        highlights: [
          'Cartographie de la fertilité et équilibre des ratios NPK',
          'Planification intelligente de l’arrosage basée sur l’évapotranspiration',
          'Assistant Farm Advisor IA entraîné sur vos données d’exploitation réelles',
          'Support multilingue complet (Anglais, Hindi, Tamoul et Français)'
        ]
      }
    ]
  };

  const uiTexts = {
    en: {
      stepOf: "of",
      skip: "Skip to Dashboard",
      prev: "Previous",
      next: "Next Feature",
      enter: "🚀 Enter Main Website & Open Dashboard",
      part: "Part"
    },
    hi: {
      stepOf: "का",
      skip: "सीधे डैशबोर्ड पर जाएं",
      prev: "पिछला",
      next: "अगली सुविधा",
      enter: "🚀 मुख्य वेबसाइट पर जाएं और डैशबोर्ड खोलें",
      part: "भाग"
    },
    ta: {
      stepOf: "இல்",
      skip: "டாஷ்போர்டுக்குச் செல்க",
      prev: "முந்தையது",
      next: "அடுத்த அம்சம்",
      enter: "🚀 முதன்மை தளத்திற்குச் செல்க",
      part: "பகுதி"
    },
    fr: {
      stepOf: "sur",
      skip: "Accéder au Tableau de Bord",
      prev: "Précédent",
      next: "Fonctionnalité Suivante",
      enter: "🚀 Entrer sur le Site et Ouvrir le Tableau de Bord",
      part: "Partie"
    }
  };

  const currentDeck = slideDeck[language] || slideDeck.en;
  const currentUI = uiTexts[language] || uiTexts.en;
  const slide = currentDeck[currentSlide] || currentDeck[0];
  const isLast = currentSlide === currentDeck.length - 1;

  const handleNext = () => {
    if (isLast) {
      handleComplete();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) { /* ignore */ }
    localStorage.setItem('cropcare_intro_seen', 'true');
    if (onComplete) onComplete();
  };

  const IconComponent = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden select-none">
      
      {/* Background Atmosphere */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Bar with Language Selector & Skip */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between z-20 gap-3">
        
        {/* Language Selector in Intro */}
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/15 shadow-lg">
          <div className="pl-2 pr-1 text-slate-400 flex items-center">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          {SUPPORTED_LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={() => setLanguage(loc.code)}
              className={`px-2.5 py-1 text-[11px] font-extrabold rounded-full transition-all cursor-pointer ${
                language === loc.code
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title={loc.name}
            >
              <span>{loc.flag}</span>
              <span className="hidden sm:inline ml-1">{loc.code.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Counter and Skip */}
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400 font-mono">
            {currentSlide + 1} {currentUI.stepOf} {currentDeck.length}
          </span>
          <button
            onClick={handleComplete}
            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>{currentUI.skip}</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="max-w-4xl mx-auto w-full my-auto z-10 py-4">
        <div className="relative bg-slate-900/85 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Ambient Glow */}
          <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none ${slide.bgGlow}`}></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10">
            
            {/* Animated Slide Icon */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr ${slide.color} flex items-center justify-center shadow-xl shadow-emerald-950/50 transform transition-transform duration-300 hover:scale-105`}>
                <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-white/20 text-[10px] font-bold text-emerald-400">
                {currentUI.part} {currentSlide + 1}
              </div>
            </div>

            {/* Slide Text */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-lime-400" />
                <span>{slide.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
                {slide.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                {slide.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {slide.description}
              </p>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                {slide.highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Controls */}
      <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        
        {/* Progress Dots */}
        <div className="flex items-center gap-2 order-2 sm:order-1">
          {currentDeck.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === i 
                  ? 'w-8 bg-emerald-400 shadow-md shadow-emerald-400/50' 
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-3 order-1 sm:order-2 w-full sm:w-auto justify-end">
          {currentSlide > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2.5 text-xs font-bold rounded-xl text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>{currentUI.prev}</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            className={`px-6 py-2.5 rounded-xl text-white font-extrabold text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isLast
                ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/30 hover:scale-105 active:scale-95'
                : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30 hover:scale-105 active:scale-95'
            }`}
          >
            <span>{isLast ? currentUI.enter : currentUI.next}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
