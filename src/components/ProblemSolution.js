import { translations } from '../data/translations.js';

const psItems = {
  en: {
    struggleBadgeEasy: 'The Old Struggle',
    struggleBadgeTech: 'Systemic Supply-Chain Failure',
    solutionBadgeEasy: 'The CropCare Way',
    solutionBadgeTech: 'Connected Agri-Continuum',
    lossLabelEasy: 'Estimated Value Loss',
    lossLabelTech: 'Realization Delta',
    btnCtaEasy: 'See 6 Steps',
    btnCtaTech: 'Explore Architecture',
    problemDescEasy: 'Farmers are often forced to buy expensive seeds without knowing if they are fake, sell to local middlemen who decide the price, and wait months to receive payments.',
    problemDescTech: 'Structural information asymmetry, fragmented brokerage layers, uncalibrated weighing bridges, and lack of timely plant pathology interventions result in systemic agricultural value erosion.',
    solutionDescEasy: 'CropCare connects you directly to verified seed sellers, honest buyers, and agricultural scientists on your smartphone, giving you the best price and peace of mind.',
    solutionDescTech: 'A full-stack agricultural operating system synchronizing IoT soil intelligence, satellite vegetative telemetry, direct digital auctions, and automated T+0 escrow bank transfers.',
    problems: [
      {
        titleEasy: 'Fake Seeds & Ineffective Sprays:',
        titleTech: 'Counterfeit & Substandard Inputs:',
        descEasy: '1 in 4 seed bags fail to grow properly because shops sell unverified packets with no guarantee.',
        descTech: 'Up to 28% of seeds, fertilizers, and crop chemicals are adulterated or lack certified lot traceability.'
      },
      {
        titleEasy: 'Selling in the Dark:',
        titleTech: 'Opaque Price Discovery & Distress Selling:',
        descEasy: 'Farmers sell during harvest gluts at throwaway prices because they cannot check rates in other mandis.',
        descTech: 'Absence of forward-looking price forecasting models and warehouse pledge financing leads to seasonal price collapse.'
      },
      {
        titleEasy: 'Unfair Cuts & Weight Deductions:',
        titleTech: 'Predatory Brokerage & Weight Manipulation:',
        descEasy: 'Middlemen take 2 to 3 kg extra per quintal (katta/chhan) and delay payments for weeks.',
        descTech: '12% to 20% commission cuts, delayed T+30 payments, and arbitrary quality deductions.'
      },
      {
        titleEasy: 'Crop Advice Comes Too Late:',
        titleTech: 'Delayed Agronomic Diagnostics:',
        descEasy: 'By the time a field officer visits, pests have already eaten half the crop.',
        descTech: 'Average 7-day turnaround for field agronomist visits during acute fungal spore infestation cycles.'
      }
    ],
    solutions: [
      {
        titleEasy: '100% Original Seeds Guaranteed:',
        titleTech: 'QR-Authenticated Inputs:',
        descEasy: 'Scan the code with your phone camera to verify manufacturer purity before planting.',
        descTech: 'Cryptographic batch traceability from verified ICAR breeders with replant insurance warranties.'
      },
      {
        titleEasy: 'Live Mandi Prices Across 1,200+ Markets:',
        titleTech: 'Real-Time APMC Price Arbitrage:',
        descEasy: 'Know today\'s price in all nearby mandis so you always sell at the highest bidder.',
        descTech: '1,200+ mandi live spot rates with 60-day price trend projections and inter-market arbitrage routing.'
      },
      {
        titleEasy: 'Direct Sale & Instant Bank Payment:',
        titleTech: 'Direct Institutional Escrow Settlement:',
        descEasy: 'Sell directly to big flour mills and exporters. Money arrives in your bank before the truck leaves.',
        descTech: 'Disintermediated digital auctions with pre-funded buyer escrow accounts and instant T+0 bank credits.'
      },
      {
        titleEasy: 'Instant AI Crop Doctor in 2 Seconds:',
        titleTech: 'Gemini AI Vision Pathology Inference:',
        descEasy: 'Snap a photo of sick leaves and get instant treatment advice in your own language.',
        descTech: 'Sub-2-second automated multimodal leaf pathology classification with verified agronomic recipes.'
      }
    ]
  },
  hi: {
    struggleBadgeEasy: 'पारंपरिक संघर्ष',
    struggleBadgeTech: 'व्यवस्थागत आपूर्ति विफलता',
    solutionBadgeEasy: 'क्रोपोरा का समाधान',
    solutionBadgeTech: 'एकीकृत डिजिटल समाधान',
    lossLabelEasy: 'अनुमानित आय नुकसान',
    lossLabelTech: 'शुद्ध प्राप्ति घाटा',
    btnCtaEasy: '6 आसान चरण देखें',
    btnCtaTech: 'आर्किटेक्चर देखें',
    problemDescEasy: 'किसानों को अक्सर बिना गारंटी के महंगे बीज खरीदने पड़ते हैं, स्थानीय बिचौलियों की मनमानी कीमत पर बेचना पड़ता है और हफ्तों भुगतान का इंतजार करना पड़ता है।',
    problemDescTech: 'सूचना विषमता, खंडित दलाली परतें, अमानक तौल और समय पर रोग निदान के अभाव से किसानों को भारी आर्थिक नुकसान उठाना पड़ता है।',
    solutionDescEasy: 'क्रोपोरा आपको आपके फोन पर ही प्रमाणित बीज विक्रेताओं, सीधे खरीदारों और कृषि वैज्ञानिकों से जोड़ता है ताकि आपको सही दाम और सुरक्षा मिले।',
    solutionDescTech: 'मृदा IoT सेंसर, उपग्रह निगरानी, पारदर्शी डिजिटल नीलामी और T+0 डिजिटल एस्क्रो भुगतान का संपूर्ण ऑपरेटिंग सिस्टम।',
    problems: [
      {
        titleEasy: 'नकली बीज व बेअसर दवाएं:',
        titleTech: 'अमानक व मिलावटी इनपुट:',
        descEasy: 'हर 4 में से 1 बीज की बोरी अंकुरित नहीं होती क्योंकि बिना गारंटी खुले पैकेट बेचे जाते हैं।',
        descTech: '28% तक बीज, उर्वरक और रसायन अमानक होते हैं जिनमें कोई डिजिटल ट्रैसेबिलिटी नहीं होती।'
      },
      {
        titleEasy: 'मंडी भाव की जानकारी न होना:',
        titleTech: 'अपारदर्शी मूल्य खोज व मजबूरी की बिक्री:',
        descEasy: 'आसपास की अन्य मंडियों का भाव पता न होने से किसान कम दाम पर ही फसल बेच देते हैं।',
        descTech: 'मूल्य पूर्वानुमान और भंडार रसीद वित्तपोषण के अभाव में फसल आने पर भारी मंदी।'
      },
      {
        titleEasy: 'गलत तौल और भारी कटौती:',
        titleTech: 'आढ़ती दलाली व मनमानी कटौती:',
        descEasy: 'बिचौलिए प्रति क्विंटल 2 से 3 किलो अधिक काटते हैं और भुगतान में हफ्तों की देरी करते हैं।',
        descTech: '12% से 20% तक कमीशन कटौती, 30 दिन का भुगतान विलंब और मनमाने गुणवत्ता दंड।'
      },
      {
        titleEasy: 'फसल सलाह में बहुत देरी:',
        titleTech: 'विलंबित रोग निदान:',
        descEasy: 'जब तक कोई कृषि अधिकारी खेत पहुंचता है, तब तक कीट आधी फसल चट कर जाते हैं।',
        descTech: 'फफूंद या कीट प्रकोप के समय विशेषज्ञ परामर्श मिलने में औसतन 7 दिन का विलंब।'
      }
    ],
    solutions: [
      {
        titleEasy: '100% असली बीजों की गारंटी:',
        titleTech: 'QR-सत्यापित कृषि इनपुट:',
        descEasy: 'बुवाई से पहले अपने फोन से क्यूआर कोड स्कैन करके शुद्धता व अंकुरण दर जांचें।',
        descTech: 'आईसीएआर प्रजनक केंद्रों से क्रिप्टोग्राफिक बैच ट्रैकिंग और रीप्लांट बीमा गारंटी।'
      },
      {
        titleEasy: '1,200+ मंडियों के लाइव भाव:',
        titleTech: 'रीयल-टाइम एपीएमसी आर्बिट्रेज:',
        descEasy: 'आज ही अपने आसपास की सभी मंडियों के भाव जानें ताकि आप सबसे ऊंची बोली पर बेच सकें।',
        descTech: '1,200+ मंडियों के लाइव भाव, 60-दिवसीय रुझान मॉडल और अंतर-मंडी मध्यस्थता।'
      },
      {
        titleEasy: 'सीधी बिक्री व तुरंत बैंक भुगतान:',
        titleTech: 'संस्थागत एस्क्रो निपटान:',
        descEasy: 'सीधे बड़े मिलर्स व निर्यातकों को बेचें। ट्रक निकलने से पहले पैसा आपके खाते में जमा।',
        descTech: 'पूर्व-वित्तपोषित एस्क्रो खातों के साथ बिचौलिया-मुक्त डिजिटल नीलामी और T+0 भुगतान।'
      },
      {
        titleEasy: 'मात्र 2 सेकंड में AI डॉक्टर:',
        titleTech: 'जेमिनी AI विजन पैथोलॉजी:',
        descEasy: 'बीमार पत्ती का फोटो खींचें और तुरंत अपनी भाषा में सटीक दवा व उपचार पाएं।',
        descTech: '2 सेकंड से कम में 2,50,000+ नमूनों पर आधारित एआई रोग वर्गीकरण एवं नुस्खा।'
      }
    ]
  },
  ta: {
    struggleBadgeEasy: 'பழைய சிரமங்கள்',
    struggleBadgeTech: 'விநியோக கட்டமைப்பு தோல்வி',
    solutionBadgeEasy: 'க்ரோபோரா தீர்வு',
    solutionBadgeTech: 'ஒருங்கிணைந்த டிஜிட்டல் முறை',
    lossLabelEasy: 'மதிப்பிடப்பட்ட வருமான இழப்பு',
    lossLabelTech: 'நிகர இழப்பு விகிதம்',
    btnCtaEasy: '6 படிகளைப் பார்க்க',
    btnCtaTech: 'கட்டமைப்பை ஆராய்க',
    problemDescEasy: 'விவசாயிகள் போலி விதைகளை அதிக விலைக்கு வாங்க நேரிடுகிறது, இடைத்தரகர்கள் நிர்ணயிக்கும் குறைந்த விலைக்கு விற்று மாதக்கணக்கில் பணத்திற்காக காத்திருக்கிறார்கள்.',
    problemDescTech: 'தகவல் பற்றாக்குறை, அதிக தரகு கட்டணங்கள், முறையற்ற எடை அளவீடுகள் மற்றும் தாமதமான நோய் கண்டறிதல் ஆகியவை விவசாய இழப்பை ஏற்படுத்துகின்றன.',
    solutionDescEasy: 'க்ரோபோரா சான்றளிக்கப்பட்ட விதை விற்பனையாளர்கள், நிறுவன வாங்குபவர்கள் மற்றும் வேளாண் விஞ்ஞானிகளை உங்கள் தொலைபேசியிலேயே இணைக்கிறது.',
    solutionDescTech: 'மண் IoT சென்சார்கள், செயற்கைக்கோள் பயிர் நலம், நேரடி ஏலம் மற்றும் T+0 எஸ்க்ரோ வங்கி கட்டணங்களை இணைக்கும் முழுமையான தளம்.',
    problems: [
      {
        titleEasy: 'போலி விதைகள் மற்றும் மருந்துகள்:',
        titleTech: 'தரமற்ற மற்றும் கலப்பட உள்ளீடுகள்:',
        descEasy: '4-ல் 1 விதை பை சரியாக முளைப்பதில்லை, ஏனெனில் உத்தரவாதமற்ற பாக்கெட்டுகள் விற்கப்படுகின்றன.',
        descTech: '28% வரை விதைகள் மற்றும் உரங்கள் கலப்படமாக உள்ளன, டிஜிட்டல் சான்றிதழ் இல்லை.'
      },
      {
        titleEasy: 'சந்தை விலைகள் தெரியாத நிலை:',
        titleTech: 'வெளிப்படையற்ற விலை கண்டறிதல்:',
        descEasy: 'அருகிலுள்ள மண்டி விலைகளை அறிய முடியாததால் குறைந்த விலைக்கு விற்க நேரிடுகிறது.',
        descTech: 'விலை முன்னறிவிப்பு மற்றும் சேமிப்பு நிதி வசதி இல்லாததால் அறுவடை காலத்தில் விலை வீழ்ச்சி.'
      },
      {
        titleEasy: 'அநியாய கழிவுகள் மற்றும் எடை குறைப்பு:',
        titleTech: 'கட்டாய தரகு மற்றும் எடை கையாளுதல்:',
        descEasy: 'இடைத்தரகர்கள் குவிண்டாலுக்கு 2-3 கிலோ கூடுதலாக எடுத்துக்கொண்டு பணத்தை தாமதப்படுத்துகிறார்கள்.',
        descTech: '12% முதல் 20% வரை தரகு வெட்டுக்கள், 30 நாள் கட்டண தாமதம் மற்றும் தன்னிச்சையான விலக்குகள்.'
      },
      {
        titleEasy: 'தாமதமாகும் பயிர் ஆலோசனை:',
        titleTech: 'தாமதமான தாவர நோயியல் சிகிச்சை:',
        descEasy: 'அதிகாரி வந்து பார்ப்பதற்குள் பூச்சிகள் பாதி பயிரை அழித்துவிடுகின்றன.',
        descTech: 'பூஞ்சை தொற்று பரவும் காலத்தில் வேளாண் நிபுணர் வருகைக்கு சராசரியாக 7 நாட்கள் ஆகிறது.'
      }
    ],
    solutions: [
      {
        titleEasy: '100% அசல் விதைகள் உத்தரவாதம்:',
        titleTech: 'QR-குறியீடு சரிபார்க்கப்பட்ட உள்ளீடுகள்:',
        descEasy: 'விதைப்பதற்கு முன் உங்கள் மொபைல் மூலம் QR குறியீட்டை ஸ்கேன் செய்து தூய்மையை சரிபார்க்கவும்.',
        descTech: 'ICAR மையங்களின் சான்றளிக்கப்பட்ட தொகுதி கண்காணிப்பு மற்றும் மறுவிதைப்பு காப்பீடு.'
      },
      {
        titleEasy: '1,200+ மண்டிகளின் நேரடி விலைகள்:',
        titleTech: 'நிகழ்நேர APMC சந்தை விலை ஒப்பீடு:',
        descEasy: 'எல்லா மண்டி விலைகளையும் அறிந்து அதிக விலை கொடுப்பவருக்கு விற்கலாம்.',
        descTech: '1,200+ சந்தைகளின் நேரடி விலைகள் மற்றும் 60-நாள் சந்தை முன்னறிவிப்பு மாதிரிகள்.'
      },
      {
        titleEasy: 'நேரடி விற்பனை & உடனடி வங்கி வரவு:',
        titleTech: 'நிறுவன நேரடி எஸ்க்ரோ தீர்வு:',
        descEasy: 'பெரிய ஆலைகளுக்கு நேரடியாக விற்கலாம். வண்டி புறப்படுவதற்கு முன்பே பணம் வங்கியில் சேரும்.',
        descTech: 'முன்-வைப்பு எஸ்க்ரோ கணக்குகள் மற்றும் உடனடி T+0 வங்கி பரிமாற்றங்களுடன் நேரடி டிஜிட்டல் ஏலம்.'
      },
      {
        titleEasy: '2 நொடிகளில் AI பயிர் மருத்துவர்:',
        titleTech: 'ஜெமினி AI பார்வை நோயியல்:',
        descEasy: 'பாதிக்கப்பட்ட இலையை புகைப்படம் எடுத்து உங்கள் சொந்த மொழியிலேயே உடனடி சிகிச்சை பெறவும்.',
        descTech: '2,50,000+ மாதிரிகளில் பயிற்சி பெற்ற AI மூலம் 2 நொடிக்குள் துல்லியமான மருந்து பரிந்துரை.'
      }
    ]
  },
  fr: {
    struggleBadgeEasy: 'Les Difficultés d\'Autrefois',
    struggleBadgeTech: 'Défaillances Systémiques de la Filière',
    solutionBadgeEasy: 'L\'Approche CropCare',
    solutionBadgeTech: 'L\'Écosystème Connecté',
    lossLabelEasy: 'Perte de Revenu Estimée',
    lossLabelTech: 'Delta de Réalisation Nette',
    btnCtaEasy: 'Voir les 6 Étapes',
    btnCtaTech: 'Explorer l\'Architecture',
    problemDescEasy: 'Les agriculteurs doivent souvent acheter des semences coûteuses sans garantie, vendre à des intermédiaires locaux qui fixent les prix et attendre des semaines pour être payés.',
    problemDescTech: 'Asymétrie d\'information structurelle, strates de courtage fragmentées, ponts-bascules non calibrés et retards de diagnostic entraînant une érosion de valeur agricole.',
    solutionDescEasy: 'CropCare vous connecte directement aux semenciers certifiés, aux acheteurs transparents et aux agronomes sur votre smartphone, avec garantie du meilleur prix.',
    solutionDescTech: 'Système d\'exploitation agricole intégrant sondes de sol IoT, télémétrie satellitaire, enchères numériques directes et règlements par séquestre bancaire T+0.',
    problems: [
      {
        titleEasy: 'Semences Douteuses & Produits Inefficaces :',
        titleTech: 'Intrants Falsifiés & Hors Normes :',
        descEasy: '1 sac de semences sur 4 ne pousse pas correctement car les emballages ne comportent aucune garantie vérifiable.',
        descTech: 'Jusqu\'à 28% des semences, engrais et produits phytosanitaires sont frelatés ou sans traçabilité de lot.'
      },
      {
        titleEasy: 'Vendre sans Connaître les Prix :',
        titleTech: 'Manque de Visibilité & Ventes Précipitées :',
        descEasy: 'Les producteurs bradent leurs récoltes à la hâte sans pouvoir consulter les cours des marchés voisins.',
        descTech: 'Absence de modèles de prévision des prix et de financement sur récépissé d\'entrepôt provoquant l\'effondrement des cours.'
      },
      {
        titleEasy: 'Commissions Abusives & Retraits de Poids :',
        titleTech: 'Courtage Prédateur & Manipulation de Pesée :',
        descEasy: 'Les intermédiaires prélèvent 2 à 3 kg de trop par quintal et diffèrent les paiements de plusieurs semaines.',
        descTech: '12% à 20% de retenues de commission, délais T+30 et réfactions qualitatives arbitraires.'
      },
      {
        titleEasy: 'Conseils Techniques Trop Tardifs :',
        titleTech: 'Retard de Diagnostic Phytosanitaire :',
        descEasy: 'Le temps qu\'un conseiller arrive sur la parcelle, les ravageurs ont déjà dévoré la moitié du champ.',
        descTech: 'Délai moyen de 7 jours pour une visite agronomique lors d\'une attaque fongique virulente.'
      }
    ],
    solutions: [
      {
        titleEasy: 'Semences 100% Authentiques Garanties :',
        titleTech: 'Intrants Authentifiés par QR Code :',
        descEasy: 'Scannez le code avec votre caméra pour vérifier la pureté et le taux de germination avant le semis.',
        descTech: 'Traçabilité cryptographique certifiée ICAR avec assurance réensemencement garantie.'
      },
      {
        titleEasy: 'Cours en Direct sur 1 200+ Marchés :',
        titleTech: 'Arbitrage de Marché APMC en Temps Réel :',
        descEasy: 'Connaissez le prix du jour sur tous les marchés voisins pour vendre au plus offrant.',
        descTech: '1 200+ marchés cotés en direct avec projections tendancielles à 60 jours et routage d\'arbitrage.'
      },
      {
        titleEasy: 'Vente Directe & Virement Immédiat :',
        titleTech: 'Règlement Séquestre Institutionnel T+0 :',
        descEasy: 'Vendez directement aux minoteries et exportateurs. L\'argent arrive sur votre compte avant le départ du camion.',
        descTech: 'Enchères numériques désintermédiées avec comptes séquestres pré-provisionnés et virement T+0.'
      },
      {
        titleEasy: 'Médecin IA des Cultures en 2 Secondes :',
        titleTech: 'Inférence Pathologique IA Vision Gemini :',
        descEasy: 'Prenez une photo des feuilles malades et recevez instantanément le protocole de soin dans votre langue.',
        descTech: 'Classification pathologique automatisée en moins de 2 secondes sur 250 000+ échantillons certifiés.'
      }
    ]
  }
};

export function renderProblemSolution(currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const ps = t.problemSolution;
  const data = psItems[currentLang] || psItems.en;

  return `
    <section class="section-padding" id="problem-solution" style="background: var(--bg-page);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-head">
          <div class="badge-pill">
            <i data-lucide="scale" class="icon-sm"></i>
            <span>${ps.badge}</span>
          </div>
          <h2 class="section-title tracking-tight">
            ${understandingMode === 'easy' ? ps.titleEasy : ps.titleDetailed}
          </h2>
          <p class="section-subtitle tracking-normal">
            ${understandingMode === 'easy' ? ps.subtitleEasy : ps.subtitleDetailed}
          </p>
        </div>

        <!-- Problem vs Solution Comparison Grid -->
        <div class="problem-solution-grid gap-6">
          <!-- Left: The Core Problem -->
          <div class="problem-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div class="framework-badge problem-badge">
              <i data-lucide="alert-triangle" class="icon-sm"></i>
              <span>${understandingMode === 'easy' ? data.struggleBadgeEasy : data.struggleBadgeTech}</span>
            </div>

            <h3 class="framework-title tracking-tight" style="color: #B71C1C;">
              ${understandingMode === 'easy' ? ps.problemTitleEasy : ps.problemTitleDetailed}
            </h3>

            <p style="color: var(--slate-600); font-size: 0.95rem; line-height: 1.6;">
              ${understandingMode === 'easy' ? data.problemDescEasy : data.problemDescTech}
            </p>

            <ul class="framework-list">
              ${data.problems.map(prob => `
                <li class="framework-item">
                  <div class="framework-item-icon problem-item-icon">
                    <i data-lucide="x" class="icon-sm"></i>
                  </div>
                  <div>
                    <strong>${understandingMode === 'easy' ? prob.titleEasy : prob.titleTech}</strong>
                    <span>${understandingMode === 'easy' ? prob.descEasy : prob.descTech}</span>
                  </div>
                </li>
              `).join('')}
            </ul>

            <div style="background: rgba(239, 68, 68, 0.12); border-radius: var(--radius-md); padding: 14px 18px; display: flex; align-items: center; justify-content: space-between; margin-top: auto;">
              <span style="font-weight: 700; color: #DC2626; font-size: 0.88rem;">${understandingMode === 'easy' ? data.lossLabelEasy : data.lossLabelTech}</span>
              <span style="font-size: 1.35rem; font-weight: 800; color: #B71C1C;">-38.5% Net</span>
            </div>
          </div>

          <!-- Right: Our Solution -->
          <div class="solution-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
            <div class="framework-badge solution-badge">
              <i data-lucide="check-circle-2" class="icon-sm"></i>
              <span>${understandingMode === 'easy' ? data.solutionBadgeEasy : data.solutionBadgeTech}</span>
            </div>

            <h3 class="framework-title tracking-tight" style="color: var(--primary-700);">
              ${understandingMode === 'easy' ? ps.solutionTitleEasy : ps.solutionTitleDetailed}
            </h3>

            <p style="color: var(--slate-600); font-size: 0.95rem; line-height: 1.6;">
              ${understandingMode === 'easy' ? data.solutionDescEasy : data.solutionDescTech}
            </p>

            <ul class="framework-list">
              ${data.solutions.map(sol => `
                <li class="framework-item">
                  <div class="framework-item-icon solution-item-icon">
                    <i data-lucide="check" class="icon-sm"></i>
                  </div>
                  <div>
                    <strong>${understandingMode === 'easy' ? sol.titleEasy : sol.titleTech}</strong>
                    <span>${understandingMode === 'easy' ? sol.descEasy : sol.descTech}</span>
                  </div>
                </li>
              `).join('')}
            </ul>

            <div class="solution-metric-box">
              <div>
                <div class="sol-metric-val">+32% to +48%</div>
                <div class="sol-metric-lbl">${understandingMode === 'easy' ? ps.gainEasy : ps.gainDetailed}</div>
              </div>
              <button class="btn btn-primary btn-sm" id="psWorkflowCtaBtn" data-view="workflow">
                <span>${understandingMode === 'easy' ? data.btnCtaEasy : data.btnCtaTech}</span>
                <i data-lucide="arrow-right" class="icon-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
