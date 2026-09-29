import { translations } from '../data/translations.js';

const sidebarLabels = {
  en: {
    telemetryTitle: 'Farm Telemetry',
    online: 'Online',
    loraLabel: 'LoRaWAN',
    loraVal: '3 Probes',
    moistureLabel: 'Moisture',
    moistureVal: '36% Opt',
    ndviLabel: 'NDVI Vigour',
    escrowLabel: 'Escrow',
    askAiBtn: 'Ask Gemini AI',
    modeLabel: 'Mode:'
  },
  hi: {
    telemetryTitle: 'खेत टेलीमेट्री',
    online: 'सक्रिय',
    loraLabel: 'लोरा प्रोब',
    loraVal: '3 सेंसर',
    moistureLabel: 'मृदा नमी',
    moistureVal: '36% आदर्श',
    ndviLabel: 'NDVI मान',
    escrowLabel: 'एस्क्रो फंड',
    askAiBtn: 'जेमिनी AI से पूछें',
    modeLabel: 'मोड:'
  },
  ta: {
    telemetryTitle: 'பண்ணை சென்சார்',
    online: 'ஆன்லைன்',
    loraLabel: 'LoRa சென்சார்',
    loraVal: '3 உணரிகள்',
    moistureLabel: 'மண் ஈரப்பதம்',
    moistureVal: '36% உகந்தது',
    ndviLabel: 'NDVI தாவர குறியீடு',
    escrowLabel: 'எஸ்க்ரோ',
    askAiBtn: 'ஜெமினி AI-யிடம் கேட்க',
    modeLabel: 'முறை:'
  },
  fr: {
    telemetryTitle: 'Télémétrie de la Ferme',
    online: 'En Ligne',
    loraLabel: 'Sondes LoRa',
    loraVal: '3 Capteurs',
    moistureLabel: 'Humidité Sol',
    moistureVal: '36% Optimal',
    ndviLabel: 'Vigueur NDVI',
    escrowLabel: 'Séquestre',
    askAiBtn: 'Demander à Gemini IA',
    modeLabel: 'Mode :'
  }
};

export function renderSidebar(activeView = 'overview', currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const s = t.sidebar || {};
  const lbl = sidebarLabels[currentLang] || sidebarLabels.en;

  const navItems = [
    {
      id: 'overview',
      label: s.overview || 'Overview & Mission',
      icon: 'compass',
      badge: 'Hub',
      badgeColor: 'primary'
    },
    {
      id: 'workflow',
      label: s.workflow || '6-Step Workflow',
      icon: 'git-merge',
      badge: '6 Steps',
      badgeColor: 'blue'
    },
    {
      id: 'pillars',
      label: s.pillars || '18 Feature Pillars',
      icon: 'layers',
      badge: '18 Core',
      badgeColor: 'purple'
    },
    {
      id: 'dashboard',
      label: s.dashboard || 'Live Agri-Dashboard',
      icon: 'layout-dashboard',
      badge: 'Live',
      badgeColor: 'emerald'
    },
    {
      id: 'marketplace',
      label: s.marketplace || 'Input Marketplace',
      icon: 'shopping-bag',
      badge: 'Direct',
      badgeColor: 'amber'
    },
    {
      id: 'scanner',
      label: s.scanner || 'AI Leaf Doctor & Scanner',
      icon: 'camera',
      badge: 'Vision AI',
      badgeColor: 'emerald'
    },
    {
      id: 'advisory',
      label: s.advisory || 'AI & Expert Advisory',
      icon: 'sparkles',
      badge: 'Gemini',
      badgeColor: 'neon'
    }
  ];

  return `
    <aside class="app-sidebar" id="appSidebar">
      <div class="sidebar-header">
        <div class="sidebar-label tracking-wide">${s.workspace || 'Workspace Navigation'}</div>
        <div class="sidebar-status-chip" title="LoRaWAN Soil Nodes Connected">
          <span class="status-dot-pulse"></span>
          <span>${s.systemOnline || 'IoT Synced'}</span>
        </div>
      </div>

      <!-- Navigation Tabs -->
      <nav class="sidebar-nav">
        <ul class="sidebar-menu">
          ${navItems.map(item => `
            <li class="sidebar-menu-item">
              <button 
                class="sidebar-nav-tab transition-all duration-300 ease-in-out ${activeView === item.id ? 'active' : ''}" 
                data-view="${item.id}"
                id="sidebarTab-${item.id}"
                aria-label="${item.label}"
              >
                <div class="tab-icon-wrap">
                  <i data-lucide="${item.icon}" class="icon-sm"></i>
                </div>
                <span class="tab-label tracking-normal">${item.label}</span>
                <span class="tab-badge badge-${item.badgeColor}">${item.badge}</span>
              </button>
            </li>
          `).join('')}
        </ul>
      </nav>

      <!-- Sidebar Telemetry Card -->
      <div class="sidebar-telemetry-box hover:-translate-y-1 transition-all duration-300 ease-in-out">
        <div class="telemetry-box-header">
          <div style="display: flex; align-items: center; gap: 8px;">
            <i data-lucide="radio" class="icon-xs" style="color: var(--primary-600);"></i>
            <span style="font-weight: 700; font-size: 0.8rem; color: var(--slate-900);">${lbl.telemetryTitle}</span>
          </div>
          <span class="badge-status-green">${lbl.online}</span>
        </div>
        
        <div class="telemetry-stats-grid">
          <div class="telemetry-mini-stat">
            <span class="label">${lbl.loraLabel}</span>
            <span class="val">${lbl.loraVal}</span>
          </div>
          <div class="telemetry-mini-stat">
            <span class="label">${lbl.moistureLabel}</span>
            <span class="val" id="sidebarMoisture">${lbl.moistureVal}</span>
          </div>
          <div class="telemetry-mini-stat">
            <span class="label">${lbl.ndviLabel}</span>
            <span class="val">0.84</span>
          </div>
          <div class="telemetry-mini-stat">
            <span class="label">${lbl.escrowLabel}</span>
            <span class="val" style="color: var(--primary-600); font-weight: 700;">₹3.76L</span>
          </div>
        </div>

        <button class="btn btn-secondary btn-sm" id="sidebarChatTriggerBtn" style="width: 100%; margin-top: 12px; display: flex; align-items: center; justify-content: center; gap: 6px;">
          <i data-lucide="bot" class="icon-sm" style="color: var(--primary-600);"></i>
          <span>${lbl.askAiBtn}</span>
        </button>
      </div>

      <!-- Footer Info -->
      <div class="sidebar-footer">
        <div class="sidebar-mode-indicator">
          <span>${lbl.modeLabel}</span>
          <strong>${understandingMode === 'easy' ? '🍃 ' + t.modes.easyShort : '🔬 ' + t.modes.detailedShort}</strong>
        </div>
        <div class="sidebar-version">v2.5.0 Pro • 2026</div>
      </div>
    </aside>
  `;
}
