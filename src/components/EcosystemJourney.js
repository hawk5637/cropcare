import { getEcosystemSteps } from '../data/ecosystemSteps.js';
import { translations } from '../data/translations.js';

const journeyLabels = {
  en: {
    stageOf: (cur, total) => `Stage ${cur} of ${total} in Ecosystem Flow`,
    nextStep: (next) => `Next: Step ${next}`,
    backToStep1: 'Back to Step 1',
    easyGuidance: 'Get full step-by-step guidance. Everything is clearly explained so you never have to guess what to do next.',
    opProtocol: 'Operational Protocol: ',
    soilType: 'Soil Type:',
    phLevel: 'pH Level:',
    npkRatio: 'NPK Ratio:',
    topCrop: 'Top Recommended Crop:',
    btnSoilEasy: 'Test My Soil Now',
    btnSoilTech: 'Recalculate Soil Fertility Matrix',
    targetCrop: 'Target Crop:',
    projHarvest: 'Projected Harvest:',
    govMsp: 'Government MSP:',
    projected: 'Projected:',
    btnMandiEasy: 'See Best Month to Sell',
    btnMandiTech: 'Check 60-Day Price Forecast Model',
    activeTenders: 'Active Buyer Tenders:',
    bidsAvail: 'Bids Available',
    highestOffer: 'Highest Offer:',
    bulkInput: 'Bulk Input Deal:',
    btnMatchEasy: 'Match with Direct Buyers',
    btnMatchTech: 'Review & Match Buyer Tender Matrix',
    activeTransport: 'Active Reefer Transport:',
    driver: 'Driver:',
    status: 'Status:',
    liveSensor: 'Live Sensor:',
    spoilageZero: '(Spoilage Risk: 0%)',
    btnTrackEasy: 'Track Truck Location',
    btnTrackTech: 'Track Live Telematics GPS',
    lotWeight: 'Lot Weight:',
    escrowBadge: '(T+0 Escrow)',
    payoutStatus: 'Status:',
    btnPayoutEasy: 'Get Instant Bank Payment',
    btnPayoutTech: 'Simulate Instant Bank Disbursal',
    sentinelTitle: 'Sentinel-2 Satellite Health',
    ndviLabel: 'NDVI Vegetative Index:',
    canopyMoisture: 'Canopy Moisture:',
    pestAlert: 'Pest:',
    btnNdviEasy: 'Check Crop Health Photo',
    btnNdviTech: 'Sync Real-Time NDVI Telemetry'
  },
  hi: {
    stageOf: (cur, total) => `पारिस्थितिकी तंत्र प्रवाह में चरण ${cur}/${total}`,
    nextStep: (next) => `अगला: चरण ${next}`,
    backToStep1: 'वापस चरण 1 पर जाएं',
    easyGuidance: 'इस चरण के लिए पूरा मार्गदर्शन प्राप्त करें। सब कुछ सरल भाषा में समझाया गया है ताकि कोई परेशानी न हो।',
    opProtocol: 'परिचालन प्रोटोकॉल: ',
    soilType: 'मिट्टी का प्रकार:',
    phLevel: 'पीएच स्तर:',
    npkRatio: 'एनपीके अनुपात:',
    topCrop: 'शीर्ष अनुशंसित फसल:',
    btnSoilEasy: 'अपनी मिट्टी की अभी जांच करें',
    btnSoilTech: 'मृदा उर्वरता मैट्रिक्स पुनर्गणना करें',
    targetCrop: 'लक्षित फसल:',
    projHarvest: 'अनुमानित कटाई:',
    govMsp: 'सरकारी एमएसपी:',
    projected: 'प्रक्षेपित भाव:',
    btnMandiEasy: 'बेचने का सही महीना जानें',
    btnMandiTech: '60-दिवसीय मूल्य पूर्वानुमान मॉडल देखें',
    activeTenders: 'सक्रिय खरीदार निविदाएं:',
    bidsAvail: 'बोलियां उपलब्ध',
    highestOffer: 'उच्चतम बोली:',
    bulkInput: 'थोक खाद-बीज सौदा:',
    btnMatchEasy: 'सीधे खरीदारों से मिलान करें',
    btnMatchTech: 'खरीदार निविदा मैट्रिक्स की समीक्षा करें',
    activeTransport: 'सक्रिय प्रशीतित परिवहन:',
    driver: 'चालक:',
    status: 'स्थिति:',
    liveSensor: 'लाइव सेंसर:',
    spoilageZero: '(खराबी जोखिम: 0%)',
    btnTrackEasy: 'ट्रक की स्थिति ट्रैक करें',
    btnTrackTech: 'लाइव टेलीमैटिक्स जीपीएस ट्रैक करें',
    lotWeight: 'लॉट वजन:',
    escrowBadge: '(T+0 एस्क्रो)',
    payoutStatus: 'भुगतान स्थिति:',
    btnPayoutEasy: 'तुरंत बैंक भुगतान प्राप्त करें',
    btnPayoutTech: 'त्वरित बैंक संवितरण सिमुलेट करें',
    sentinelTitle: 'सेंटिनल-2 उपग्रह स्वास्थ्य',
    ndviLabel: 'एनडीवीआई वनस्पति सूचकांक:',
    canopyMoisture: 'कैनोपी नमी:',
    pestAlert: 'कीट चेतावनी:',
    btnNdviEasy: 'फसल स्वास्थ्य फोटो देखें',
    btnNdviTech: 'रीयल-टाइम एनडीवीआई टेलीमेट्री सिंक करें'
  },
  ta: {
    stageOf: (cur, total) => `சுற்றுச்சூழல் ஓட்டத்தில் படி ${cur}/${total}`,
    nextStep: (next) => `அடுத்து: படி ${next}`,
    backToStep1: 'மீண்டும் படி 1-க்குச் செல்க',
    easyGuidance: 'இந்த படிநிலைக்கு முழு வழிகாட்டுதலைப் பெறுங்கள். நீங்கள் அடுத்து என்ன செய்ய வேண்டும் என்பதை எளிதாக அறியலாம்.',
    opProtocol: 'செயல்பாட்டு நெறிமுறை: ',
    soilType: 'மண் வகை:',
    phLevel: 'pH அளவு:',
    npkRatio: 'NPK விகிதம்:',
    topCrop: 'பரிந்துரைக்கப்பட்ட முதன்மை பயிர்:',
    btnSoilEasy: 'என் மண்ணை இப்போது சோதிக்கவும்',
    btnSoilTech: 'மண் வள மேட்ரிக்ஸை மறு கணக்கிடுக',
    targetCrop: 'இலக்கு பயிர்:',
    projHarvest: 'எதிர்பார்க்கப்படும் அறுவடை:',
    govMsp: 'அரசு MSP விலை:',
    projected: 'எதிர்பார்ப்பு விலை:',
    btnMandiEasy: 'விற்பனைக்கான சிறந்த மாதத்தைக் காண்க',
    btnMandiTech: '60-நாள் சந்தை விலை முன்னறிவிப்பைப் பார்க்கவும்',
    activeTenders: 'செயலில் உள்ள வாங்குபவர் டெண்டர்கள்:',
    bidsAvail: 'கேட்புகள் உள்ளன',
    highestOffer: 'அதிகபட்ச சலுகை:',
    bulkInput: 'மொத்த இடுபொருள் சலுகை:',
    btnMatchEasy: 'நேரடி வாங்குபவர்களுடன் இணையுங்கள்',
    btnMatchTech: 'வாங்குபவர் டெண்டர் மேட்ரிக்ஸை ஆய்வு செய்க',
    activeTransport: 'செயலில் உள்ள குளிர்சாதன போக்குவரத்து:',
    driver: 'ஓட்டுநர்:',
    status: 'நிலை:',
    liveSensor: 'நேரடி சென்சார்:',
    spoilageZero: '(அழுகும் ஆபத்து: 0%)',
    btnTrackEasy: 'வாகன இருப்பிடத்தைக் கண்காணிக்கவும்',
    btnTrackTech: 'நேரடி டெலிமேடிக்ஸ் ஜிபிஎஸ் காண்க',
    lotWeight: 'தொகுதி எடை:',
    escrowBadge: '(T+0 எஸ்க்ரோ)',
    payoutStatus: 'நிலை:',
    btnPayoutEasy: 'உடனடி வங்கி கட்டணம் பெறுக',
    btnPayoutTech: 'உடனடி வங்கி பரிவர்த்தனையை சோதிக்கவும்',
    sentinelTitle: 'சென்டினல்-2 செயற்கைக்கோள் பயிர் நலம்',
    ndviLabel: 'NDVI தாவரக் குறியீடு:',
    canopyMoisture: 'மேற்பரப்பு ஈரப்பதம்:',
    pestAlert: 'பூச்சி எச்சரிக்கை:',
    btnNdviEasy: 'பயிர் நல புகைப்படத்தை காண்க',
    btnNdviTech: 'நேரடி NDVI தொலைத்தொடர்பை ஒத்திசைக்கவும்'
  },
  fr: {
    stageOf: (cur, total) => `Étape ${cur} sur ${total} du Flux Écosystème`,
    nextStep: (next) => `Suivant: Étape ${next}`,
    backToStep1: 'Retour à l\'Étape 1',
    easyGuidance: 'Bénéficiez d\'un accompagnement complet pas à pas. Tout est expliqué clairement sans devinette.',
    opProtocol: 'Protocole Opérationnel: ',
    soilType: 'Type de Sol:',
    phLevel: 'Niveau de pH:',
    npkRatio: 'Ratio NPK:',
    topCrop: 'Culture Recommandée:',
    btnSoilEasy: 'Tester Mon Sol Maintenant',
    btnSoilTech: 'Recalculer la Matrice de Fertilité',
    targetCrop: 'Culture Cible:',
    projHarvest: 'Récolte Prévue:',
    govMsp: 'Prix Minimum Garanti (MSP):',
    projected: 'Projeté:',
    btnMandiEasy: 'Voir le Meilleur Mois pour Vendre',
    btnMandiTech: 'Consulter le Modèle Prévisionnel 60 Jours',
    activeTenders: 'Appels d\'Offres Acheteurs Actifs:',
    bidsAvail: 'Offres Disponibles',
    highestOffer: 'Meilleure Offre:',
    bulkInput: 'Offre Intrants Groupée:',
    btnMatchEasy: 'Associer aux Acheteurs Directs',
    btnMatchTech: 'Examiner la Matrice d\'Appels d\'Offres',
    activeTransport: 'Transport Frigorifique Actif:',
    driver: 'Chauffeur:',
    status: 'Statut:',
    liveSensor: 'Capteur en Direct:',
    spoilageZero: '(Risque de Perte: 0%)',
    btnTrackEasy: 'Localiser le Camion en Direct',
    btnTrackTech: 'Suivre la Télématique GPS en Direct',
    lotWeight: 'Poids du Lot:',
    escrowBadge: '(Garantie Séquestre T+0)',
    payoutStatus: 'Statut:',
    btnPayoutEasy: 'Recevoir le Virement Immédiat',
    btnPayoutTech: 'Simuler le Virement Bancaire Immédiat',
    sentinelTitle: 'Santé Végétale Sentinel-2',
    ndviLabel: 'Indice Végétatif NDVI:',
    canopyMoisture: 'Humidité du Feuillage:',
    pestAlert: 'Alerte Ravageurs:',
    btnNdviEasy: 'Vérifier la Photo Sanitaire',
    btnNdviTech: 'Synchroniser la Télémétrie NDVI en Direct'
  }
};

export function renderEcosystemJourney(activeStepNumber = 1, currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const steps = getEcosystemSteps(currentLang);
  const currentStep = steps.find(s => s.step === activeStepNumber) || steps[0];
  const stepTitles = t.ecosystem.steps || ["Plan", "Discover", "Match", "Coordinate", "Sell & Act", "Track"];
  const lbl = journeyLabels[currentLang] || journeyLabels.en;

  return `
    <section class="section-padding ecosystem-section" id="ecosystem">
      <div class="container">
        <!-- Section Header -->
        <div class="section-head">
          <div class="badge-pill">
            <i data-lucide="layers" class="icon-sm"></i>
            <span>${t.ecosystem.badge}</span>
          </div>
          <h2 class="section-title tracking-tight">
            ${t.ecosystem.title}
          </h2>
          <p class="section-subtitle tracking-normal">
            ${understandingMode === 'easy' ? t.ecosystem.subtitleEasy : t.ecosystem.subtitleDetailed}
          </p>
        </div>

        <!-- 6 Stepper Navigation Tabs -->
        <div class="stepper-nav" id="stepperNav" role="tablist">
          ${steps.map((step, idx) => `
            <div 
              class="step-tab hover-scale transition-all duration-300 ease-in-out ${step.step === currentStep.step ? 'active' : ''}" 
              data-step-id="${step.step}" 
              role="tab" 
              tabindex="0"
              aria-selected="${step.step === currentStep.step}"
            >
              <div class="step-number">${step.step}</div>
              <span class="step-tab-emoji">${step.emoji}</span>
              <div class="step-tab-title">${stepTitles[idx] || step.title}</div>
            </div>
          `).join('')}
        </div>

        <!-- Active Stage Container -->
        <div class="step-stage-container hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" id="stepStageContainer">
          <!-- Left Column: Details & Checklist -->
          <div class="stage-left">
            <div class="stage-badge">
              <i data-lucide="${currentStep.icon}" class="icon-sm"></i>
              <span>${currentStep.badge}</span>
            </div>

            <h3 class="stage-title tracking-tight">
              ${stepTitles[currentStep.step - 1] || currentStep.title}: ${currentStep.subtitle}
            </h3>
            
            <p class="stage-tagline">
              ${understandingMode === 'easy' ? currentStep.tagline : lbl.opProtocol + currentStep.tagline}
            </p>
            
            <p class="stage-desc">
              ${understandingMode === 'easy' 
                ? lbl.easyGuidance 
                : currentStep.description}
            </p>

            <!-- Checklist -->
            <ul class="stage-checklist">
              ${currentStep.checklist.map(item => `
                <li class="stage-check-item">
                  <i data-lucide="check-circle" class="icon-sm stage-check-icon"></i>
                  <span>${item}</span>
                </li>
              `).join('')}
            </ul>
          </div>

          <!-- Right Column: Interactive Step Simulator Card -->
          <div class="stage-sim-box hover:-translate-y-1 transition-all duration-300 ease-in-out" id="stageSimBox">
            <div class="sim-box-title">
              <i data-lucide="cpu" class="icon-md" style="color: var(--primary-600);"></i>
              <span>${currentStep.simulator.headline}</span>
            </div>

            <!-- Key Metrics for this stage -->
            <div class="sim-metrics-grid">
              ${currentStep.keyMetrics.map(km => `
                <div class="sim-metric-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
                  <div class="sim-m-val">${km.value}</div>
                  <div class="sim-m-lbl">${km.label}</div>
                </div>
              `).join('')}
            </div>

            <!-- Stage-Specific Simulator Area -->
            <div class="sim-action-area" id="simActionArea">
              ${renderStageSimulatorContent(currentStep, understandingMode, currentLang, lbl)}
            </div>

            <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.825rem; color: var(--slate-500); margin-top: 14px;">
              <span>${lbl.stageOf(currentStep.step, 6)}</span>
              <button class="btn btn-primary btn-sm" id="nextStepBtn" data-next-step="${currentStep.step < 6 ? currentStep.step + 1 : 1}">
                <span>${currentStep.step < 6 ? lbl.nextStep(currentStep.step + 1) : lbl.backToStep1}</span>
                <i data-lucide="chevron-right" class="icon-sm"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderStageSimulatorContent(step, mode = 'easy', lang = 'en', lbl) {
  if (step.step === 1) {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.soilType} <strong>${step.simulator.defaultSoil || 'Alluvial Clay Loam'}</strong></div>
        <div style="font-size: 0.82rem; color: var(--slate-600);">${lbl.phLevel} <strong>${step.simulator.defaultPh || '6.8'}</strong> | ${lbl.npkRatio} <strong>${step.simulator.defaultNpk || '120:60:40 kg/ha'}</strong></div>
        <div style="background: var(--primary-50); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; color: var(--primary-800);">
          <strong>${lbl.topCrop}</strong> ${(step.simulator.recommendedCrops && step.simulator.recommendedCrops[0]) || 'Durum Wheat'}
        </div>
        <button class="btn btn-secondary btn-sm" id="runSoilCalcBtn" style="margin-top: 4px;">
          <i data-lucide="calculator" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnSoilEasy : lbl.btnSoilTech}</span>
        </button>
      </div>
    `;
  } else if (step.step === 2) {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.targetCrop} <strong>${step.simulator.sampleCrop || 'Wheat'}</strong></div>
        <div style="font-size: 0.82rem; color: var(--slate-600);">${lbl.projHarvest} <strong>${step.simulator.harvestDate || 'April 2027'}</strong></div>
        <div style="display: flex; justify-content: space-between; background: var(--bg-card); padding: 8px 12px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle); font-size: 0.85rem;">
          <span>${lbl.govMsp} <strong>${step.simulator.mspPrice || '₹2,275/qtl'}</strong></span>
          <span style="color: var(--primary-600); font-weight: 700;">${lbl.projected} <strong>${step.simulator.projectedMandiPrice || '₹2,580/qtl'}</strong></span>
        </div>
        <button class="btn btn-secondary btn-sm" id="viewMandiForecastBtn" style="margin-top: 4px;">
          <i data-lucide="trending-up" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnMandiEasy : lbl.btnMandiTech}</span>
        </button>
      </div>
    `;
  } else if (step.step === 3) {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.activeTenders} <strong style="color: var(--primary-600);">${step.simulator.activeBids || '14'} ${lbl.bidsAvail}</strong></div>
        <div style="background: var(--bg-card); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.825rem; border: 1px solid var(--border-subtle);">
          ${lbl.highestOffer} <strong>${step.simulator.highestOffer || '₹2,640/qtl (ITC)'}</strong>
        </div>
        <div style="background: var(--bg-card); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.825rem; border: 1px solid var(--border-subtle);">
          ${lbl.bulkInput} <strong>${step.simulator.lowestInputCost || '18% Group Discount'}</strong>
        </div>
        <button class="btn btn-primary btn-sm" id="openBuyerMatchingModalBtn" style="margin-top: 4px;">
          <i data-lucide="handshake" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnMatchEasy : lbl.btnMatchTech}</span>
        </button>
      </div>
    `;
  } else if (step.step === 4) {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.activeTransport} <strong>${step.simulator.truckId || 'PB-10-CZ-4412'}</strong></div>
        <div style="font-size: 0.82rem; color: var(--slate-600);">${lbl.driver} ${step.simulator.driver || 'Harpreet S.'} | ${lbl.status} <strong style="color: #0284C7;">${step.simulator.status || 'En Route'}</strong></div>
        <div style="background: #E0F2FE; color: #0369A1; padding: 6px 12px; border-radius: var(--radius-sm); font-size: 0.8rem; font-weight: 600;">
          ${lbl.liveSensor} ${step.simulator.tempStatus || '4.2°C Cold Chain'} ${lbl.spoilageZero}
        </div>
        <button class="btn btn-secondary btn-sm" id="trackGpsLiveBtn" style="margin-top: 4px;">
          <i data-lucide="navigation" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnTrackEasy : lbl.btnTrackTech}</span>
        </button>
      </div>
    `;
  } else if (step.step === 5) {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.lotWeight} <strong>${step.simulator.totalLifting || '140 Quintals'}</strong></div>
        <div style="font-size: 1.15rem; font-weight: 800; color: var(--primary-600);">${step.simulator.settlementAmount || '₹3,56,720'} ${lbl.escrowBadge}</div>
        <div style="font-size: 0.8rem; color: var(--slate-600);">${lbl.payoutStatus} ${step.simulator.payoutStatus || '100% Escrow Deposited'}</div>
        <button class="btn btn-primary btn-sm" id="simulatePayoutBtn" style="margin-top: 4px;">
          <i data-lucide="shield-check" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnPayoutEasy : lbl.btnPayoutTech}</span>
        </button>
      </div>
    `;
  } else {
    return `
      <div style="display: flex; flex-direction: column; gap: 8px;">
        <div style="font-size: 0.85rem; font-weight: 700; color: var(--slate-800);">${lbl.sentinelTitle}</div>
        <div style="background: var(--bg-card); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.825rem; border: 1px solid var(--border-subtle);">
          ${lbl.ndviLabel} <strong style="color: var(--primary-600);">${step.simulator.vegetativeScore || step.simulator.ndviScore || '0.84 (Healthy)'}</strong>
        </div>
        <div style="background: var(--bg-card); padding: 8px 12px; border-radius: var(--radius-sm); font-size: 0.825rem; border: 1px solid var(--border-subtle);">
          ${lbl.canopyMoisture} <strong>${step.simulator.canopyMoisture || '62% Optimal'}</strong> | ${lbl.pestAlert} <strong>${step.simulator.pestAlert || 'Zero Infestation'}</strong>
        </div>
        <button class="btn btn-secondary btn-sm" id="refreshNdviBtn" style="margin-top: 4px;">
          <i data-lucide="refresh-cw" class="icon-sm"></i>
          <span>${mode === 'easy' ? lbl.btnNdviEasy : lbl.btnNdviTech}</span>
        </button>
      </div>
    `;
  }
}
