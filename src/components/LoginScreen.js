import { renderCropCareLogo } from './Logo.js';
import { renderLanguageSelector } from './LanguageSelector.js';

const loginTranslations = {
  en: {
    welcomeTitle: 'Sign in to CropCare',
    welcomeSubtitle: "India's Premier Smart Agriculture & Direct Trading Ecosystem",
    roleLabel: 'Select Your Platform Role',
    roles: [
      { id: 'farmer',   label: 'Farmer / Grower',       icon: 'sprout',      emoji: '👨‍🌾', desc: 'Manage crops, soil sensors & sell at APMC rates' },
      { id: 'buyer',    label: 'Buyer / Wholesaler',     icon: 'building-2',  emoji: '🏢', desc: 'Procure bulk farmgate produce with T+0 escrow' },
      { id: 'supplier', label: 'Supplier / Mechanic',    icon: 'wrench',      emoji: '🚜', desc: 'Sell certified seeds, tractors & genuine spares' },
      { id: 'expert',   label: 'Agronomist / Expert',    icon: 'microscope',  emoji: '🔬', desc: 'Provide pathology triage & tele-consultations' }
    ],
    nameLabel:    'Full Name / Operator Name',
    namePlaceholder: 'Enter your full name',
    phoneLabel:   'Mobile Number / Kisan ID',
    phonePlaceholder: 'Enter 10-digit mobile number',
    otpLabel:     'One-Time Passcode (OTP)',
    otpPlaceholder: 'Enter 6-digit OTP',
    otpSentHint:  '✓ Demo OTP auto-filled for instant verification',
    loginBtn:     'Verify & Enter Dashboard',
    demoBtn:      '⚡ Demo Quick Login',
    securityBadge:'Protected by Government e-NAM & Aadhaar KYC protocol',
    stat1: '12,000+ Verified Farmers',
    stat2: '1,200+ APMC Mandis Live',
    stat3: 'T+0 Escrow Settlement',
    tagline: 'Better Farms, Brighter Futures'
  },
  hi: {
    welcomeTitle: 'क्रॉपकेयर में लॉगिन करें',
    welcomeSubtitle: 'भारत का अग्रणी स्मार्ट कृषि मंच और सीधा डिजिटल व्यापार इकोसिस्टम',
    roleLabel: 'अपनी भूमिका चुनें',
    roles: [
      { id: 'farmer',   label: 'किसान / उत्पादक',        icon: 'sprout',      emoji: '👨‍🌾', desc: 'फसल, मिट्टी के सेंसर देखें और मंडी भाव पर बेचें' },
      { id: 'buyer',    label: 'व्यापारी / थोक खरीदार',  icon: 'building-2',  emoji: '🏢', desc: 'खेत से सीधे थोक उपज खरीदें एस्क्रो सुरक्षा के साथ' },
      { id: 'supplier', label: 'आपूर्तिकर्ता व मैकेनिक', icon: 'wrench',      emoji: '🚜', desc: 'प्रमाणित बीज, ट्रैक्टर और स्पेयर पार्ट्स बेचें' },
      { id: 'expert',   label: 'कृषि वैज्ञानिक',         icon: 'microscope',  emoji: '🔬', desc: 'पौध रोग निदान और वीडियो परामर्श दें' }
    ],
    nameLabel:    'पूरा नाम / किसान का नाम',
    namePlaceholder: 'अपना पूरा नाम दर्ज करें',
    phoneLabel:   'मोबाइल नंबर / किसान पहचान',
    phonePlaceholder: '10 अंकों का मोबाइल नंबर',
    otpLabel:     'वन-टाइम पासवर्ड (OTP)',
    otpPlaceholder: '6 अंकों का ओटीपी',
    otpSentHint:  '✓ त्वरित डेमो हेतु ओटीपी स्वतः भरा हुआ है',
    loginBtn:     'सत्यापित करें और डैशबोर्ड में जाएं',
    demoBtn:      '⚡ डेमो क्विक लॉगिन (1-क्लिक)',
    securityBadge:'सरकारी ई-नाम और आधार सत्यापन द्वारा सुरक्षित',
    stat1: '12,000+ पंजीकृत किसान',
    stat2: '1,200+ लाइव कृषि मंडियां',
    stat3: 'T+0 एस्क्रो सुरक्षित भुगतान',
    tagline: 'उन्नत खेती, समृद्ध भविष्य'
  },
  ta: {
    welcomeTitle: 'க்ராப்கேரில் உள்நுழைக',
    welcomeSubtitle: 'இந்தியாவின் முன்னணி ஸ்மார்ட் விவசாயம் மற்றும் நேரடி வர்த்தக தளம்',
    roleLabel: 'உங்கள் பங்கை தேர்ந்தெடுக்கவும்',
    roles: [
      { id: 'farmer',   label: 'விவசாயி / பயிரிடுபவர்', icon: 'sprout',     emoji: '👨‍🌾', desc: 'பயிர்கள், மண் ஈரப்பதம் மற்றும் மண்டி விலைகளை அறிய' },
      { id: 'buyer',    label: 'மொத்த கொள்முதலாளர்',    icon: 'building-2', emoji: '🏢', desc: 'பண்ணை நேரடி விளைபொருட்களை எஸ்க்ரோ மூலம் வாங்க' },
      { id: 'supplier', label: 'விற்பனையாளர் / மெக்கானிக்', icon: 'wrench', emoji: '🚜', desc: 'சான்றளிக்கப்பட்ட விதைகள் மற்றும் உதிரிபாகங்கள் விற்க' },
      { id: 'expert',   label: 'வேளாண் விஞ்ஞானி',      icon: 'microscope', emoji: '🔬', desc: 'பயிர் நோய் கண்டறிதல் மற்றும் ஆலோசனை வழங்க' }
    ],
    nameLabel:    'முழு பெயர் / உழவர் பெயர்',
    namePlaceholder: 'உங்கள் முழு பெயரை உள்ளிடவும்',
    phoneLabel:   'கைப்பேசி எண் / உழவர் அடையாளம்',
    phonePlaceholder: '10 இலக்க கைப்பேசி எண்',
    otpLabel:     'ஒருமுறை கடவுச்சொல் (OTP)',
    otpPlaceholder: '6 இலக்க OTP',
    otpSentHint:  '✓ உடனடி சோதனைக்காக OTP தானாக நிரப்பப்பட்டுள்ளது',
    loginBtn:     'சரிபார்த்து கட்டுப்பாட்டு அறைக்குள் நுழைக',
    demoBtn:      '⚡ டெமோ விரைவு உள்நுழைவு (1-கிளிக்)',
    securityBadge:'மத்திய அரசு e-NAM மற்றும் ஆதார் நெறிமுறையால் பாதுகாக்கப்பட்டது',
    stat1: '12,000+ பதிவு செய்த விவசாயிகள்',
    stat2: '1,200+ நேரலை மண்டிகள்',
    stat3: 'T+0 உடனடி வங்கி தீர்வு',
    tagline: 'சிறந்த பண்ணைகள், பிரகாசமான எதிர்காலம்'
  },
  fr: {
    welcomeTitle: 'Connexion à CropCare',
    welcomeSubtitle: 'Écosystème Numérique Agricole et Négoce Direct Sans Intermédiaire',
    roleLabel: 'Sélectionnez Votre Profil Métier',
    roles: [
      { id: 'farmer',   label: 'Agriculteur / Exploitant',      icon: 'sprout',     emoji: '👨‍🌾', desc: 'Pilotage parcellaire, sondes de sol et vente au cours APMC' },
      { id: 'buyer',    label: 'Acheteur / Négociant de Gros',  icon: 'building-2', emoji: '🏢', desc: 'Approvisionnement bord-champ garanti par séquestre bancaire' },
      { id: 'supplier', label: 'Fournisseur / Mécanicien',      icon: 'wrench',     emoji: '🚜', desc: 'Distribution de semences certifiées, tracteurs et pièces' },
      { id: 'expert',   label: 'Agronome / Expert Conseil',     icon: 'microscope', emoji: '🔬', desc: 'Télédétection pathologique et télé-consultations' }
    ],
    nameLabel:    'Nom Complet / Exploitant',
    namePlaceholder: 'Entrez votre nom complet',
    phoneLabel:   'Numéro de Mobile / Identifiant Agricole',
    phonePlaceholder: 'Saisissez votre numéro de mobile',
    otpLabel:     'Code de Sécurité Unique (OTP)',
    otpPlaceholder: 'Code à 6 chiffres',
    otpSentHint:  '✓ Le code OTP de démonstration est pré-rempli',
    loginBtn:     'Valider et Accéder au Tableau de Bord',
    demoBtn:      '⚡ Démo Rapide (1-Clic)',
    securityBadge:'Protégé par les protocoles bancaires sécurisés et e-NAM',
    stat1: '12 000+ Exploitants Vérifiés',
    stat2: '1 200+ Marchés Connectés',
    stat3: 'Règlements T+0 Sécurisés',
    tagline: 'De Meilleures Fermes, un Avenir Radieux'
  }
};

export function renderLoginScreen(currentLang = 'en', selectedRole = 'farmer') {
  const lbl = loginTranslations[currentLang] || loginTranslations.en;

  return `
    <div class="login-page-wrapper" id="loginPageWrapper">

      <!-- Minimal Login Header -->
      <header class="login-header">
        <div id="loginBrandWrap">
          ${renderCropCareLogo('md', true, lbl.tagline)}
        </div>
        <div style="display:flex;align-items:center;gap:10px;">
          ${renderLanguageSelector(currentLang, 'login')}
          <button class="theme-toggle-btn" id="loginThemeToggleBtn" aria-label="Toggle Theme">
            <i data-lucide="moon" class="icon-sm" id="loginThemeIcon"></i>
          </button>
        </div>
      </header>

      <!-- Centered Auth Body -->
      <main class="login-main">
        <div class="login-card" id="loginCard">

          <!-- ── LEFT: Brand / Ecosystem Panel ── -->
          <div class="login-brand-panel">
            <!-- Decorative blobs -->
            <div class="login-blob login-blob-1"></div>
            <div class="login-blob login-blob-2"></div>

            <div style="position:relative;z-index:1;">
              <div class="login-live-badge">
                <span class="login-dot-pulse"></span>
                <span>Next-Gen Smart Agri Portal</span>
              </div>

              <h2 class="login-brand-headline">
                Better Farms,<br/>
                <span style="color:#4ADE80;">Brighter Futures.</span>
              </h2>

              <p class="login-brand-sub">${lbl.welcomeSubtitle}</p>

              <!-- Metrics -->
              <div class="login-metrics">
                <div class="login-metric-row">
                  <div class="login-metric-icon" style="background:rgba(74,222,128,0.18);">
                    <i data-lucide="users" class="icon-sm" style="color:#4ADE80;"></i>
                  </div>
                  <div>
                    <div class="login-metric-val">${lbl.stat1}</div>
                    <div class="login-metric-sub">Across 18 State Clusters</div>
                  </div>
                </div>
                <div class="login-metric-row">
                  <div class="login-metric-icon" style="background:rgba(56,189,248,0.18);">
                    <i data-lucide="trending-up" class="icon-sm" style="color:#38BDF8;"></i>
                  </div>
                  <div>
                    <div class="login-metric-val">${lbl.stat2}</div>
                    <div class="login-metric-sub">Sub-second Spot Price Feeds</div>
                  </div>
                </div>
                <div class="login-metric-row">
                  <div class="login-metric-icon" style="background:rgba(250,204,21,0.18);">
                    <i data-lucide="shield-check" class="icon-sm" style="color:#FACC15;"></i>
                  </div>
                  <div>
                    <div class="login-metric-val">${lbl.stat3}</div>
                    <div class="login-metric-sub">100% Bank-Protected Vault</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="login-enc-badge">
              <i data-lucide="lock" class="icon-xs"></i>
              <span>256-Bit Encryption • WDRA Registered</span>
            </div>
          </div>

          <!-- ── RIGHT: Login Form ── -->
          <div class="login-form-panel">
            <div class="login-form-inner">
              <div style="margin-bottom:20px;">
                <h3 class="login-form-title">${lbl.welcomeTitle}</h3>
                <p class="login-form-sub">${lbl.roleLabel}</p>
              </div>

              <!-- Role Grid -->
              <div class="login-role-grid">
                ${lbl.roles.map(r => `
                  <button
                    type="button"
                    class="role-select-btn ${r.id === selectedRole ? 'active' : ''}"
                    data-role="${r.id}"
                  >
                    <span class="role-emoji">${r.emoji}</span>
                    <span class="role-label">${r.label}</span>
                  </button>
                `).join('')}
              </div>

              <!-- Form -->
              <form id="portalLoginForm" class="login-form-fields">
                <!-- Name -->
                <div class="login-field">
                  <label class="login-label">${lbl.nameLabel}</label>
                  <div style="position:relative;">
                    <i data-lucide="user" class="icon-sm login-field-icon"></i>
                    <input
                      type="text"
                      id="loginNameInput"
                      placeholder="${lbl.namePlaceholder}"
                      class="login-input login-input-icon"
                      autocomplete="name"
                    />
                  </div>
                </div>

                <!-- Phone -->
                <div class="login-field">
                  <label class="login-label">${lbl.phoneLabel}</label>
                  <div style="display:flex;gap:8px;">
                    <span class="login-phone-prefix">🇮🇳 +91</span>
                    <input
                      type="tel"
                      id="loginPhoneInput"
                      placeholder="${lbl.phonePlaceholder}"
                      class="login-input"
                      style="flex:1;"
                      autocomplete="tel"
                    />
                  </div>
                </div>

                <!-- OTP -->
                <div class="login-field">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                    <label class="login-label" style="margin-bottom:0;">${lbl.otpLabel}</label>
                    <span class="login-otp-hint">${lbl.otpSentHint}</span>
                  </div>
                  <input
                    type="text"
                    id="loginOtpInput"
                    value="482910"
                    placeholder="${lbl.otpPlaceholder}"
                    class="login-input login-otp-field"
                    autocomplete="one-time-code"
                    maxlength="6"
                    inputmode="numeric"
                  />
                </div>

                <!-- Submit -->
                <button type="submit" class="btn btn-primary login-submit-btn">
                  <i data-lucide="check-circle" class="icon-sm"></i>
                  <span>${lbl.loginBtn}</span>
                </button>
              </form>

              <!-- 1-Click Demo -->
              <div style="margin-top:14px;">
                <button type="button" id="instantDemoLoginBtn" class="login-demo-btn">
                  <span>${lbl.demoBtn}</span>
                  <i data-lucide="arrow-right" class="icon-xs"></i>
                </button>
              </div>
            </div>

            <!-- Bottom badge -->
            <div class="login-security-badge">
              <i data-lucide="shield" class="icon-xs" style="color:var(--primary-600);"></i>
              <span>${lbl.securityBadge}</span>
            </div>
          </div>

        </div>
      </main>
    </div>
  `;
}
