import { translations } from '../data/translations.js';
import { renderCropCareLogo } from './Logo.js';
import { renderLanguageSelector } from './LanguageSelector.js';

const headerLabels = {
  en: {
    alertsText: '3 Alerts',
    popoverTitle: 'Live Agri Notifications',
    realTimeBadge: 'Real-Time',
    verifiedText: 'Verified',
    kisanSubtitle: 'Ludhiana, Punjab • Kisan ID: PB-9042',
    totalLandLbl: 'Total Land:',
    cropsLbl: 'Crops:',
    escrowLbl: 'Escrow Payouts:',
    trustLbl: 'Trust Rating:',
    cropsVal: 'Wheat, Mustard',
    landVal: '14.5 Acres',
    notif1: '<strong>Wheat Spot Surge:</strong> Khanna Mandi rate climbed to ₹2,510/qtl (+₹40).',
    notif1Time: '8 mins ago',
    notif2: '<strong>Soil Probe A-1:</strong> LoRa moisture stable at 36%. Ready for scheduled drip.',
    notif2Time: '22 mins ago',
    notif3: '<strong>Buyer Escrow:</strong> ITC Agri has locked ₹3,76,500 for Durum Wheat tender.',
    notif3Time: '1 hour ago',
    modeLabel: 'Mode:'
  },
  hi: {
    alertsText: '3 नए अलर्ट',
    popoverTitle: 'लाइव कृषि सूचनाएं',
    realTimeBadge: 'रीयल-टाइम',
    verifiedText: 'सत्यापित',
    kisanSubtitle: 'लुधियाना, पंजाब • किसान आईडी: PB-9042',
    totalLandLbl: 'कुल भूमि:',
    cropsLbl: 'मुख्य फसलें:',
    escrowLbl: 'एस्क्रो भुगतान:',
    trustLbl: 'विश्वसनीयता:',
    cropsVal: 'गेहूं, सरसों',
    landVal: '14.5 एकड़',
    notif1: '<strong>गेहूं भाव उछाल:</strong> खन्ना मंडी में भाव ₹2,510/क्विंटल (+₹40) पहुंचा।',
    notif1Time: '8 मिनट पहले',
    notif2: '<strong>मृदा सेंसर A-1:</strong> मिट्टी की नमी 36% पर स्थिर। ड्रिप सिंचाई के लिए तैयार।',
    notif2Time: '22 मिनट पहले',
    notif3: '<strong>खरीदार एस्क्रो:</strong> आईटीसी एग्री ने गेहूं निविदा के लिए ₹3,76,500 जमा किए।',
    notif3Time: '1 घंटा पहले',
    modeLabel: 'मोड:'
  },
  ta: {
    alertsText: '3 எச்சரிக்கைகள்',
    popoverTitle: 'நேரடி விவசாய அறிவிப்புகள்',
    realTimeBadge: 'நேரலை',
    verifiedText: 'சான்றளிக்கப்பட்டது',
    kisanSubtitle: 'லூதியானா • உழவர் ஐடி: PB-9042',
    totalLandLbl: 'மொத்த நிலம்:',
    cropsLbl: 'பயிர்கள்:',
    escrowLbl: 'எஸ்க்ரோ பணம்:',
    trustLbl: 'நம்பகத்தன்மை:',
    cropsVal: 'கோதுமை, கடுகு',
    landVal: '14.5 ஏக்கர்',
    notif1: '<strong>கோதுமை விலை உயர்வு:</strong> கன்னா மண்டியில் விலை ₹2,510 ஆக உயர்ந்துள்ளது.',
    notif1Time: '8 நிமிடங்களுக்கு முன்',
    notif2: '<strong>மண் சென்சார் A-1:</strong> ஈரப்பதம் 36% நிலைபெற்றுள்ளது. பாசனத்திற்கு தயார்.',
    notif2Time: '22 நிமிடங்களுக்கு முன்',
    notif3: '<strong>வாங்குபவர் எஸ்க்ரோ:</strong> ITC நிறுவனம் ₹3,76,500 முன்பணம் செலுத்தியுள்ளது.',
    notif3Time: '1 மணி நேரத்திற்கு முன்',
    modeLabel: 'முறை:'
  },
  fr: {
    alertsText: '3 Alertes',
    popoverTitle: 'Notifications Agricoles en Direct',
    realTimeBadge: 'Temps Réel',
    verifiedText: 'Vérifié',
    kisanSubtitle: 'Ludhiana, Pendjab • ID Exploitant: PB-9042',
    totalLandLbl: 'Surface Totale :',
    cropsLbl: 'Cultures :',
    escrowLbl: 'Versements Séquestre :',
    trustLbl: 'Indice de Confiance :',
    cropsVal: 'Blé, Moutarde',
    landVal: '14,5 Hectares',
    notif1: '<strong>Hausse Cours du Blé :</strong> Marché de Khanna en hausse à ₹2 510/qtl (+₹40).',
    notif1Time: 'Il y a 8 min',
    notif2: '<strong>Sonde de Sol A-1 :</strong> Humidité stable à 36%. Prêt pour cycle d\'irrigation.',
    notif2Time: 'Il y a 22 min',
    notif3: '<strong>Séquestre Acheteur :</strong> ITC Agri a provisionné ₹376 500 pour le contrat blé.',
    notif3Time: 'Il y a 1h',
    modeLabel: 'Mode :'
  }
};

export function renderHeader(currentLang = 'en', understandingMode = 'easy', activeView = 'overview', userName = '', userRole = 'farmer') {
  const t = translations[currentLang] || translations.en;
  const s = t.sidebar || {};
  const lbl = headerLabels[currentLang] || headerLabels.en;

  // Calculate user initials
  const initials = userName
    ? userName.trim().split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : 'CC';

  const roleBadgeMap = {
    farmer: currentLang === 'hi' ? 'किसान' : currentLang === 'ta' ? 'விவசாயி' : currentLang === 'fr' ? 'Exploitant' : 'Farmer',
    buyer: currentLang === 'hi' ? 'खरीदार' : currentLang === 'ta' ? 'கொள்முதல்' : currentLang === 'fr' ? 'Négociant' : 'Buyer',
    supplier: currentLang === 'hi' ? 'आपूर्तिकर्ता' : currentLang === 'ta' ? 'விற்பனையாளர்' : currentLang === 'fr' ? 'Fournisseur' : 'Supplier',
    expert: currentLang === 'hi' ? 'कृषि विशेषज्ञ' : currentLang === 'ta' ? 'விஞ்ஞானி' : currentLang === 'fr' ? 'Agronome' : 'Expert'
  };
  const roleName = roleBadgeMap[userRole] || roleBadgeMap.farmer;

  return `
    <header class="site-header" id="mainHeader">
      <div class="header-inner">
        <!-- Brand with Upgraded Custom Vector Emblem & Typography -->
        <a href="#view-overview" class="brand" id="brandLink" data-view="overview" title="CropCare - From Soil to Success">
          ${renderCropCareLogo('md', true, t.tagline)}
        </a>

        <!-- Fast View Pills (Desktop Horizontal Quick Tabs) -->
        <div class="header-quick-tabs" id="headerQuickTabs">
          <button class="quick-tab-pill transition-all duration-300 ease-in-out ${activeView === 'overview' ? 'active' : ''}" data-view="overview">
            <i data-lucide="compass" class="icon-xs"></i>
            <span>${s.overview || 'Overview'}</span>
          </button>
          <button class="quick-tab-pill transition-all duration-300 ease-in-out ${activeView === 'workflow' ? 'active' : ''}" data-view="workflow">
            <i data-lucide="git-merge" class="icon-xs"></i>
            <span>${s.workflow || '6 Steps'}</span>
          </button>
          <button class="quick-tab-pill transition-all duration-300 ease-in-out ${activeView === 'pillars' ? 'active' : ''}" data-view="pillars">
            <i data-lucide="layers" class="icon-xs"></i>
            <span>${s.pillars || '18 Pillars'}</span>
          </button>
          <button class="quick-tab-pill transition-all duration-300 ease-in-out ${activeView === 'dashboard' ? 'active' : ''}" data-view="dashboard">
            <i data-lucide="layout-dashboard" class="icon-xs"></i>
            <span>${s.dashboard || 'Live Dashboard'}</span>
          </button>
          <button class="quick-tab-pill transition-all duration-300 ease-in-out ${activeView === 'scanner' ? 'active' : ''}" data-view="scanner">
            <i data-lucide="camera" class="icon-xs"></i>
            <span>${s.scanner || 'AI Leaf Doctor'}</span>
          </button>
        </div>

        <!-- Right Header Actions -->
        <div class="header-actions">
          <!-- Notification Pill with Dropdown Trigger -->
          <div class="header-pill-dropdown-wrap" id="notificationsDropdownWrap">
            <button class="header-action-pill pill-alert" id="notificationsPillBtn" aria-label="${lbl.alertsText}" title="${lbl.popoverTitle}">
              <span class="pill-dot-live"></span>
              <i data-lucide="bell" class="icon-xs"></i>
              <span class="pill-text">${lbl.alertsText}</span>
            </button>
            <div class="header-popover-menu" id="notificationsPopover">
              <div class="popover-header">
                <span class="popover-title">${lbl.popoverTitle}</span>
                <span class="badge-pill" style="padding: 2px 8px; font-size: 0.72rem;">${lbl.realTimeBadge}</span>
              </div>
              <div class="popover-list">
                <div class="popover-item unread">
                  <div class="popover-icon green"><i data-lucide="trending-up" class="icon-xs"></i></div>
                  <div class="popover-content">
                    <div class="popover-text">${lbl.notif1}</div>
                    <div class="popover-time">${lbl.notif1Time}</div>
                  </div>
                </div>
                <div class="popover-item">
                  <div class="popover-icon blue"><i data-lucide="droplet" class="icon-xs"></i></div>
                  <div class="popover-content">
                    <div class="popover-text">${lbl.notif2}</div>
                    <div class="popover-time">${lbl.notif2Time}</div>
                  </div>
                </div>
                <div class="popover-item">
                  <div class="popover-icon amber"><i data-lucide="shield-check" class="icon-xs"></i></div>
                  <div class="popover-content">
                    <div class="popover-text">${lbl.notif3}</div>
                    <div class="popover-time">${lbl.notif3Time}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Verified Farmer Profile Pill -->
          <div class="header-pill-dropdown-wrap" id="profileDropdownWrap">
            <button class="header-action-pill pill-profile" id="profilePillBtn" title="${userName} • ${roleName}">
              <div class="profile-avatar">${initials}</div>
              <div class="profile-info-text">
                <span class="profile-name">${userName}</span>
                <span class="profile-badge"><i data-lucide="check" class="icon-nano"></i> ${lbl.verifiedText}</span>
              </div>
            </button>
            <div class="header-popover-menu" id="profilePopover">
              <div class="popover-profile-header">
                <div class="big-avatar">${initials}</div>
                <div>
                  <div style="font-weight: 800; color: var(--slate-900); font-size: 1.05rem;">${userName}</div>
                  <div style="font-size: 0.78rem; color: var(--slate-600);">${roleName} • ${lbl.kisanSubtitle}</div>
                </div>
              </div>
              <div class="popover-divider"></div>
              <div class="popover-stat-row">
                <div><span>${lbl.totalLandLbl}</span> <strong>${lbl.landVal}</strong></div>
                <div><span>${lbl.cropsLbl}</span> <strong>${lbl.cropsVal}</strong></div>
              </div>
              <div class="popover-stat-row" style="margin-top: 6px;">
                <div><span>${lbl.escrowLbl}</span> <strong style="color: var(--primary-600);">₹18,40,000</strong></div>
                <div><span>${lbl.trustLbl}</span> <strong>4.9 ★</strong></div>
              </div>
              <div class="popover-divider"></div>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn btn-secondary btn-sm" id="headerEditProfileBtn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; cursor: pointer;">
                  <i data-lucide="edit-3" class="icon-xs"></i>
                  <span>${currentLang === 'hi' ? 'प्रोफ़ाइल बदलें' : currentLang === 'ta' ? 'சுயவிவரம் திருத்து' : currentLang === 'fr' ? 'Modifier' : 'Edit Profile'}</span>
                </button>
                <button type="button" class="btn btn-secondary btn-sm" id="headerSignOutBtn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px; font-weight: 700; color: #DC2626; border-color: rgba(220, 38, 38, 0.25); background: rgba(220, 38, 38, 0.05); cursor: pointer;">
                  <i data-lucide="log-out" class="icon-xs"></i>
                  <span>${currentLang === 'hi' ? 'लॉग आउट' : currentLang === 'ta' ? 'வெளியேறு' : currentLang === 'fr' ? 'Déconnexion' : 'Sign Out'}</span>
                </button>
              </div>
            </div>
          </div>

          <!-- Dual Mode Switcher Toggle (Easy vs Detailed) -->
          <div class="mode-toggle-wrap" id="modeToggleWrap" title="Switch between Farmer Simple View and Tech Advanced View">
            <button class="mode-btn transition-all duration-300 ease-in-out ${understandingMode === 'easy' ? 'active' : ''}" data-mode="easy" id="easyModeBtn">
              <span>🍃</span>
              <span>${t.modes.easyShort}</span>
            </button>
            <button class="mode-btn transition-all duration-300 ease-in-out ${understandingMode === 'detailed' ? 'active' : ''}" data-mode="detailed" id="detailedModeBtn">
              <span>🔬</span>
              <span>${t.modes.detailedShort}</span>
            </button>
          </div>

          <!-- Professional Custom Language Selector (EN, HI, TA, FR) -->
          ${renderLanguageSelector(currentLang, 'header')}

          <!-- Theme Toggle (Light / Dark) -->
          <button class="theme-toggle-btn" id="themeToggleBtn" aria-label="Toggle Theme" title="Toggle Light / Dark Mode">
            <i data-lucide="moon" class="icon-sm" id="themeIcon"></i>
          </button>

          <!-- GitHub Repository Link -->
          <a href="https://github.com/hawk5637/cropcare" target="_blank" rel="noopener noreferrer" class="theme-toggle-btn" title="View Source on GitHub" style="display: inline-flex; align-items: center; justify-content: center; text-decoration: none; color: inherit;">
            <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>

          <!-- Mobile Hamburger Toggle -->
          <button class="mobile-menu-btn" id="mobileMenuBtn" aria-label="Open Navigation Menu">
            <i data-lucide="menu" class="icon-md"></i>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation Drawer -->
      <div class="mobile-drawer" id="mobileDrawer">
        <!-- Prominent Language Selector in Mobile Drawer -->
        <div style="padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 10px;">
          <div style="font-size: 0.78rem; font-weight: 800; color: var(--slate-600); text-transform: uppercase; margin-bottom: 8px; letter-spacing: 0.04em;">🌐 Platform Language:</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px;">
            <button type="button" class="btn btn-xs ${currentLang === 'en' ? 'btn-primary' : 'btn-secondary'} mobile-drawer-lang-btn" data-lang="en" style="justify-content: flex-start; gap: 6px; padding: 6px 10px;">
              <span>🇺🇸</span> <span>English (EN)</span>
            </button>
            <button type="button" class="btn btn-xs ${currentLang === 'hi' ? 'btn-primary' : 'btn-secondary'} mobile-drawer-lang-btn" data-lang="hi" style="justify-content: flex-start; gap: 6px; padding: 6px 10px;">
              <span>🇮🇳</span> <span>हिंदी (HI)</span>
            </button>
            <button type="button" class="btn btn-xs ${currentLang === 'ta' ? 'btn-primary' : 'btn-secondary'} mobile-drawer-lang-btn" data-lang="ta" style="justify-content: flex-start; gap: 6px; padding: 6px 10px;">
              <span>🇮🇳</span> <span>தமிழ் (TA)</span>
            </button>
            <button type="button" class="btn btn-xs ${currentLang === 'fr' ? 'btn-primary' : 'btn-secondary'} mobile-drawer-lang-btn" data-lang="fr" style="justify-content: flex-start; gap: 6px; padding: 6px 10px;">
              <span>🇫🇷</span> <span>Français (FR)</span>
            </button>
          </div>
        </div>

        <!-- Mode Switcher in Mobile Drawer -->
        <div style="display: flex; justify-content: space-between; align-items: center; padding-bottom: 12px; border-bottom: 1px solid var(--border-subtle);">
          <span style="font-size: 0.85rem; font-weight: 700; color: var(--slate-700);">${lbl.modeLabel}</span>
          <div class="mode-toggle-wrap">
            <button class="mode-btn ${understandingMode === 'easy' ? 'active' : ''}" data-mode="easy">
              <span>🍃 ${t.modes.easyShort}</span>
            </button>
            <button class="mode-btn ${understandingMode === 'detailed' ? 'active' : ''}" data-mode="detailed">
              <span>🔬 ${t.modes.detailedShort}</span>
            </button>
          </div>
        </div>

        <!-- Nav Links -->
        <button class="nav-link mobile-link ${activeView === 'overview' ? 'active' : ''}" data-view="overview" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="compass" class="icon-sm" style="color:var(--primary-600);"></i> ${s.overview || 'Overview & Mission'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'workflow' ? 'active' : ''}" data-view="workflow" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="git-merge" class="icon-sm" style="color:var(--primary-600);"></i> ${s.workflow || '6-Step Workflow'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'pillars' ? 'active' : ''}" data-view="pillars" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="layers" class="icon-sm" style="color:var(--primary-600);"></i> ${s.pillars || '18 Feature Pillars'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'dashboard' ? 'active' : ''}" data-view="dashboard" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="layout-dashboard" class="icon-sm" style="color:var(--primary-600);"></i> ${s.dashboard || 'Live Agri-Dashboard'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'scanner' ? 'active' : ''}" data-view="scanner" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="camera" class="icon-sm" style="color:var(--primary-600);"></i> ${s.scanner || 'AI Leaf Doctor'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'marketplace' ? 'active' : ''}" data-view="marketplace" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="store" class="icon-sm" style="color:var(--primary-600);"></i> ${s.marketplace || 'Input Marketplace'}
        </button>
        <button class="nav-link mobile-link ${activeView === 'advisory' ? 'active' : ''}" data-view="advisory" style="text-align: left; width: 100%; display:flex; align-items:center; gap:10px;">
          <i data-lucide="bot" class="icon-sm" style="color:var(--primary-600);"></i> ${s.advisory || 'AI & Expert Advisory'}
        </button>

        <!-- Language + Theme Row in Drawer -->
        <div class="mobile-drawer-lang" style="display:flex; align-items:center; gap:10px; flex-wrap:wrap;">
          ${renderLanguageSelector(currentLang, 'mobileDrawer')}
          <button class="theme-toggle-btn" id="mobileThemeToggleBtn" aria-label="Toggle Theme" style="flex-shrink:0;">
            <i data-lucide="moon" class="icon-sm" id="mobileThemeIcon"></i>
          </button>
        </div>

        <!-- Sign Out in Drawer -->
        <div style="padding-top: 10px; border-top: 1px solid var(--border-subtle); margin-top: 4px;">
          <button type="button" id="drawerSignOutBtn" style="width:100%; display:flex; align-items:center; gap:10px; padding: 10px 0; font-size:0.92rem; font-weight:700; color:#DC2626; background:none; border:none; cursor:pointer;">
            <i data-lucide="log-out" class="icon-sm"></i>
            <span>${currentLang === 'hi' ? 'लॉग आउट' : currentLang === 'ta' ? 'வெளியேறு' : currentLang === 'fr' ? 'Déconnexion' : 'Sign Out'}</span>
          </button>
        </div>
      </div>
    </header>
  `;
}
