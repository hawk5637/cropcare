import { translations } from '../data/translations.js';

const heroLabels = {
  en: {
    smartPlatform: 'Smart Agriculture Platform:',
    weatherVal: '27°C • Sunny',
    sprayWindow: 'Optimal Spray Window',
    mandiVal: 'Wheat ₹2,480/qtl',
    mandiTrend: '▲ +3.2% Today',
    bannerBadge: 'Live Farm Telemetry • Parcel A-1',
    bannerTitle: 'Sharbati Durum Wheat • Day 78',
    soilMoistureLbl: 'Soil Moisture',
    moistureNoteEasy: 'Adequate Water',
    moistureNoteTech: 'Zone A • Optimal',
    harvestLblEasy: 'Expected Harvest',
    harvestLblTech: 'AI Yield Forecast',
    harvestNoteEasy: 'Heavy Yield',
    harvestNoteTech: 'vs Regional Avg',
    buyersLblEasy: 'Direct Buyers',
    buyersLblTech: 'Buyer Matches',
    buyersVal: '3 Ready',
    buyersNoteEasy: 'Best Cash Price',
    buyersNoteTech: 'Premium Bids',
    dripIrrigation: 'Drip Irrigation:',
    standby: 'Standby',
    active: 'Flowing (3.2 L/m)',
    btnDripEasy: 'Turn Water On/Off',
    btnDripTech: 'Test Solenoid Cycle'
  },
  hi: {
    smartPlatform: 'स्मार्ट कृषि मंच:',
    weatherVal: '27°C • धूप खिली हुई',
    sprayWindow: 'स्प्रे के लिए उत्तम समय',
    mandiVal: 'गेहूं ₹2,480/क्विंटल',
    mandiTrend: '▲ +3.2% आज की बढ़त',
    bannerBadge: 'लाइव खेत टेलीमेट्री • प्लॉट A-1',
    bannerTitle: 'शरबती गेहूं • 78वां दिन',
    soilMoistureLbl: 'मृदा नमी स्तर',
    moistureNoteEasy: 'पर्याप्त नमी मौजूद',
    moistureNoteTech: 'ज़ोन ए • आदर्श स्तर',
    harvestLblEasy: 'अनुमानित फसल',
    harvestLblTech: 'AI उपज पूर्वानुमान',
    harvestNoteEasy: 'बंपर पैदावार',
    harvestNoteTech: 'क्षेत्रीय औसत से अधिक',
    buyersLblEasy: 'सीधे खरीदार',
    buyersLblTech: 'खरीदार मिलान',
    buyersVal: '3 तैयार',
    buyersNoteEasy: 'सर्वोत्तम नकद भाव',
    buyersNoteTech: 'प्रीमियम बोलियां',
    dripIrrigation: 'ड्रिप सिंचाई प्रणाली:',
    standby: 'तैयार (स्टैंडबाय)',
    active: 'चालू (3.2 ली/मिनट)',
    btnDripEasy: 'सिंचाई चालू/बंद करें',
    btnDripTech: 'सोलेनोइड वॉल्व परीक्षण'
  },
  ta: {
    smartPlatform: 'ஸ்மார்ட் விவசாய தளம்:',
    weatherVal: '27°C • வெயில்',
    sprayWindow: 'மருந்து தெளிக்க உகந்த நேரம்',
    mandiVal: 'கோதுமை ₹2,480/குவிண்டால்',
    mandiTrend: '▲ +3.2% இன்று உயர்வு',
    bannerBadge: 'நேரடி பண்ணை தொலைத்தொடர்பு • நிலம் A-1',
    bannerTitle: 'துரம் கோதுமை • 78-வது நாள்',
    soilMoistureLbl: 'மண் ஈரப்பதம்',
    moistureNoteEasy: 'போதுமான நீர் உள்ளது',
    moistureNoteTech: 'பகுதி ஏ • உகந்த நிலை',
    harvestLblEasy: 'எதிர்பார்க்கப்படும் மகசூல்',
    harvestLblTech: 'AI விளைச்சல் மதிப்பீடு',
    harvestNoteEasy: 'அதிக விளைச்சல்',
    harvestNoteTech: 'சராசரியை விட அதிகம்',
    buyersLblEasy: 'நேரடி வாங்குபவர்கள்',
    buyersLblTech: 'நிறுவன வாங்குபவர்கள்',
    buyersVal: '3 தயார்',
    buyersNoteEasy: 'சிறந்த ரொக்க விலை',
    buyersNoteTech: 'பிரீமியம் ஏலம்',
    dripIrrigation: 'சொட்டுநீர் பாசனம்:',
    standby: 'தயார் நிலை',
    active: 'இயங்குகிறது (3.2 L/m)',
    btnDripEasy: 'நீரை இயக்கு/நிறுத்து',
    btnDripTech: 'வால்வு சுழற்சி சோதனை'
  },
  fr: {
    smartPlatform: 'Plateforme Agricole Intelligente :',
    weatherVal: '27°C • Ensoleillé',
    sprayWindow: 'Fenêtre Pulvérisation Optimale',
    mandiVal: 'Blé Dur ₹2,480/qtl',
    mandiTrend: '▲ +3.2% Aujourd\'hui',
    bannerBadge: 'Télémétrie Parcellaire • Parcelle A-1',
    bannerTitle: 'Blé Dur Sharbati • Jour 78',
    soilMoistureLbl: 'Humidité du Sol',
    moistureNoteEasy: 'Eau Suffisante',
    moistureNoteTech: 'Zone A • Optimale',
    harvestLblEasy: 'Récolte Attendue',
    harvestLblTech: 'Prévision Rendement IA',
    harvestNoteEasy: 'Haut Rendement',
    harvestNoteTech: 'vs Moyenne Régionale',
    buyersLblEasy: 'Acheteurs Directs',
    buyersLblTech: 'Appels d\'Offres',
    buyersVal: '3 Prêts',
    buyersNoteEasy: 'Meilleur Prix Comptant',
    buyersNoteTech: 'Offres Premium',
    dripIrrigation: 'Irrigation Goutte-à-Goutte :',
    standby: 'En Attente',
    active: 'Actif (3.2 L/min)',
    btnDripEasy: 'Activer / Arrêter Eau',
    btnDripTech: 'Tester Électrovanne'
  }
};

export function renderHero(currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const lbl = heroLabels[currentLang] || heroLabels.en;
  const subheadline = understandingMode === 'easy' ? t.hero.subheadlineEasy : t.hero.subheadlineDetailed;
  const soilStatus = understandingMode === 'easy' ? t.hero.soilStatusEasy : t.hero.soilStatusDetailed;

  return `
    <section class="hero-section" id="overview">
      <div class="container">
        <div class="hero-grid gap-6">
          <!-- Left Column: Typography & CTAs -->
          <div class="hero-content">
            <div class="hero-badge-row">
              <div class="badge-pill">
                <span class="live-pulse-dot"></span>
                <span>${t.hero.badge}</span>
              </div>
              <div class="badge-pill" style="background: var(--bg-card); border-color: var(--border-light); font-size: 0.78rem;">
                <span>${understandingMode === 'easy' ? '🍃 ' + t.modes.easy : '🔬 ' + t.modes.detailed}</span>
              </div>
            </div>

            <h1 class="hero-headline tracking-tight">
              ${lbl.smartPlatform} <br />
              <span class="text-gradient">${t.tagline}</span>
            </h1>

            <p class="hero-subheadline tracking-normal">
              ${subheadline}
            </p>

            <!-- Dual CTAs -->
            <div class="hero-ctas">
              <button class="btn btn-primary btn-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" id="heroExploreBtn" data-view="workflow">
                <i data-lucide="compass" class="icon-md"></i>
                <span>${t.hero.exploreBtn}</span>
              </button>

              <button class="btn btn-secondary btn-lg hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" id="heroDashboardBtn" data-view="dashboard">
                <i data-lucide="layout-dashboard" class="icon-md"></i>
                <span>${t.hero.dashboardBtn}</span>
              </button>
            </div>

            <!-- Quick Status Bar with Live Indicators -->
            <div class="quick-status-bar" id="quickStatusBar">
              <!-- Weather Item -->
              <div class="status-item hover-scale hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div class="status-icon-wrap weather">
                  <i data-lucide="cloud-sun" class="icon-md"></i>
                </div>
                <div class="status-meta">
                  <span class="status-label tracking-wide">${t.hero.weatherLabel}</span>
                  <span class="status-val">${lbl.weatherVal}</span>
                  <span class="status-trend-up">${lbl.sprayWindow}</span>
                </div>
              </div>

              <!-- Mandi Feeds Item -->
              <div class="status-item hover-scale hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div class="status-icon-wrap mandi">
                  <i data-lucide="line-chart" class="icon-md"></i>
                </div>
                <div class="status-meta">
                  <span class="status-label tracking-wide">${t.hero.mandiLabel}</span>
                  <span class="status-val">${lbl.mandiVal}</span>
                  <span class="status-trend-up">${lbl.mandiTrend}</span>
                </div>
              </div>

              <!-- Soil Health Item -->
              <div class="status-item hover-scale hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <div class="status-icon-wrap soil">
                  <i data-lucide="sprout" class="icon-md"></i>
                </div>
                <div class="status-meta">
                  <span class="status-label tracking-wide">${t.hero.soilLabel}</span>
                  <span class="status-val">${understandingMode === 'easy' ? 'Grade A+' : '92/100 Index'}</span>
                  <span class="status-trend-up">${soilStatus}</span>
                </div>
              </div>
            </div>
          </div>

          <!-- Right Column: Interactive Live Farm Visual Card -->
          <div class="hero-visual-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" id="heroVisualCard">
            <div class="hero-banner-container">
              <img 
                src="/cropora_hero_banner.jpg" 
                alt="CropCare Smart Agriculture Terraced Farm with Drone and IoT Station" 
                class="hero-banner-img"
              />
              <div class="hero-banner-overlay">
                <div class="hero-banner-badge">
                  <i data-lucide="satellite" class="icon-sm"></i>
                  <span>${lbl.bannerBadge}</span>
                </div>
                <h3 class="hero-banner-title tracking-tight">${lbl.bannerTitle}</h3>
              </div>
            </div>

            <div class="hero-telemetry-body">
              <div class="telemetry-row">
                <div class="telemetry-chip hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <span class="chip-lbl">${lbl.soilMoistureLbl}</span>
                  <span class="chip-val" id="heroMoistureVal">36%</span>
                  <span class="chip-note">${understandingMode === 'easy' ? lbl.moistureNoteEasy : lbl.moistureNoteTech}</span>
                </div>
                <div class="telemetry-chip hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <span class="chip-lbl">${understandingMode === 'easy' ? lbl.harvestLblEasy : lbl.harvestLblTech}</span>
                  <span class="chip-val">+24%</span>
                  <span class="chip-note">${understandingMode === 'easy' ? lbl.harvestNoteEasy : lbl.harvestNoteTech}</span>
                </div>
                <div class="telemetry-chip hover:-translate-y-1 transition-all duration-300 ease-in-out">
                  <span class="chip-lbl">${understandingMode === 'easy' ? lbl.buyersLblEasy : lbl.buyersLblTech}</span>
                  <span class="chip-val">${lbl.buyersVal}</span>
                  <span class="chip-note">${understandingMode === 'easy' ? lbl.buyersNoteEasy : lbl.buyersNoteTech}</span>
                </div>
              </div>

              <div class="hero-live-controls">
                <div class="live-valve-toggle">
                  <i data-lucide="droplets" class="icon-sm" style="color: #0284C7;"></i>
                  <span>${lbl.dripIrrigation} <strong id="heroValveState" style="color: var(--primary-700);">${lbl.standby}</strong></span>
                </div>
                <button class="btn btn-secondary btn-sm" id="quickDripToggleBtn">
                  <i data-lucide="play" class="icon-sm"></i>
                  <span>${understandingMode === 'easy' ? lbl.btnDripEasy : lbl.btnDripTech}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
