export const supportedLocales = [
  {
    code: 'en',
    flag: '🇺🇸',
    native: 'English (EN)',
    english: 'English',
    region: 'International • Global Agritech',
    short: 'EN'
  },
  {
    code: 'hi',
    flag: '🇮🇳',
    native: 'हिंदी (HI)',
    english: 'Hindi',
    region: 'भारत • सम्पूर्ण कृषि समाधान',
    short: 'HI'
  },
  {
    code: 'ta',
    flag: '🇮🇳',
    native: 'தமிழ் (TA)',
    english: 'Tamil',
    region: 'தமிழ்நாடு • உழவர் வழிகாட்டி',
    short: 'TA'
  },
  {
    code: 'fr',
    flag: '🇫🇷',
    native: 'Français (FR)',
    english: 'French',
    region: 'International • Agronomie & Équipements',
    short: 'FR'
  }
];

export function renderLanguageSelector(currentLang = 'en', idPrefix = 'header') {
  const current = supportedLocales.find(l => l.code === currentLang) || supportedLocales[0];
  const containerId = `${idPrefix}LangDropdownWrap`;
  const triggerId = `${idPrefix}LangDropdownTrigger`;
  const menuId = `${idPrefix}LangDropdownMenu`;
  const fallbackSelectId = idPrefix === 'header' ? 'langSelect' : 'loginLangSelect';

  const menuHeaders = {
    en: 'Select Platform Language',
    hi: 'मंच की भाषा चुनें',
    ta: 'தளத்தின் மொழியைத் தேர்ந்தெடுங்கள்',
    fr: 'Choisir la Langue du Système'
  };

  const headerTitle = menuHeaders[currentLang] || menuHeaders.en;

  return `
    <div class="lang-dropdown-container" id="${containerId}" style="position: relative;">
      <!-- Interactive Sleek Trigger Button -->
      <button 
        type="button" 
        id="${triggerId}" 
        class="lang-dropdown-btn hover-scale transition-all duration-300 ease-in-out" 
        aria-label="Select Language"
        aria-haspopup="true"
        aria-expanded="false"
        title="Select Language / भाषा चुनें / மொழியை மாற்று / Changer de langue"
      >
        <div style="display: flex; align-items: center; gap: 6px;">
          <i data-lucide="globe" class="icon-sm lang-globe-icon" style="color: var(--primary-600); flex-shrink: 0;"></i>
          <span class="lang-flag" style="font-size: 1.05rem;">${current.flag}</span>
          <span class="lang-native-text" style="font-size: 0.84rem; font-weight: 800; letter-spacing: -0.01em;">${current.native}</span>
          <span class="lang-mobile-code" style="font-size: 0.82rem; font-weight: 800;">${current.short}</span>
        </div>
        <i data-lucide="chevron-down" class="icon-xs lang-chevron" style="color: var(--slate-400); transition: transform 0.25s cubic-bezier(0.16, 1, 0.3, 1);"></i>
      </button>

      <!-- Animated Glassmorphism Dropdown Menu -->
      <div 
        id="${menuId}" 
        class="lang-dropdown-menu" 
        style="
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          width: 280px;
          background: var(--bg-card);
          border: 1.5px solid var(--border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-xl);
          padding: 8px;
          z-index: 1000;
          opacity: 0;
          pointer-events: none;
          transform: translateY(-8px) scale(0.97);
          transition: all 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
        "
      >
        <!-- Menu Header -->
        <div style="padding: 8px 12px 10px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 6px; display: flex; align-items: center; justify-content: space-between;">
          <span style="font-size: 0.72rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em; color: var(--slate-400);">
            ${headerTitle}
          </span>
          <span class="badge-pill" style="font-size: 0.65rem; padding: 1px 6px; background: var(--primary-50); color: var(--primary-700); border-color: var(--primary-100);">
            4 Locales
          </span>
        </div>

        <!-- Locales List -->
        <div style="display: flex; flex-direction: column; gap: 4px;">
          ${supportedLocales.map(loc => {
            const isActive = loc.code === currentLang;
            return `
              <button 
                type="button" 
                class="lang-menu-item ${isActive ? 'active' : ''}" 
                data-lang="${loc.code}"
                data-dropdown-prefix="${idPrefix}"
                style="
                  width: 100%;
                  display: flex;
                  align-items: center;
                  justify-content: space-between;
                  padding: 9px 12px;
                  border-radius: var(--radius-md);
                  border: 1px solid ${isActive ? 'rgba(46, 125, 50, 0.25)' : 'transparent'};
                  background: ${isActive ? 'rgba(46, 125, 50, 0.08)' : 'transparent'};
                  color: var(--slate-900);
                  cursor: pointer;
                  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                  text-align: left;
                "
              >
                <div style="display: flex; align-items: center; gap: 11px;">
                  <span style="font-size: 1.3rem; line-height: 1;">${loc.flag}</span>
                  <div>
                    <div style="font-size: 0.88rem; font-weight: ${isActive ? '800' : '600'}; color: var(--slate-900); line-height: 1.25;">
                      ${loc.native}
                    </div>
                    <div style="font-size: 0.72rem; color: var(--slate-500); line-height: 1.2; margin-top: 2px;">
                      ${loc.region}
                    </div>
                  </div>
                </div>

                ${isActive ? `
                  <div style="width: 22px; height: 22px; border-radius: 50%; background: var(--primary-600); color: #FFFFFF; display: flex; align-items: center; justify-content: center; flex-shrink: 0; box-shadow: 0 2px 6px rgba(46, 125, 50, 0.35);">
                    <i data-lucide="check" class="icon-nano" style="stroke-width: 3;"></i>
                  </div>
                ` : `
                  <span style="font-size: 0.72rem; font-weight: 700; color: var(--slate-400); letter-spacing: 0.03em;">
                    ${loc.short}
                  </span>
                `}
              </button>
            `;
          }).join('')}
        </div>
      </div>

      <!-- Hidden standard select element for accessibility & tests -->
      <select id="${fallbackSelectId}" style="display: none;" aria-hidden="true">
        ${supportedLocales.map(loc => `
          <option value="${loc.code}" ${loc.code === currentLang ? 'selected' : ''}>${loc.native}</option>
        `).join('')}
      </select>
    </div>
  `;
}
