import { renderCropCareLogo } from './Logo.js';
import { translations } from '../data/translations.js';

const footerLabels = {
  en: {
    tagline: 'Better Farms, Brighter Futures',
    desc: 'CropCare is a full-stack smart agriculture platform transforming fragmented rural supply chains into an intelligent, connected ecosystem. From precision soil testing and AI disease vision to direct-to-buyer digital auctions with T+0 escrow.',
    compliance: 'WDRA & e-NAM Compliant',
    col1Title: 'Ecosystem Hub',
    col2Title: 'Advisory & Legal',
    col3Title: 'Daily Mandi Price Broadcast',
    broadcastDesc: 'Receive opening auction rates for your district\'s Mandis every morning at 08:30 AM via WhatsApp or SMS.',
    phonePlaceholder: 'Enter Mobile Number (WhatsApp)',
    btnSubscribe: 'Subscribe',
    rights: '© 2026 CropCare Agritech Systems. All rights reserved.',
    links: {
      overview: 'Platform Overview',
      workflow: '6-Step Farm Journey',
      pillars: '18 Agritech Pillars',
      dashboard: 'Farmer Cockpit',
      marketplace: 'Certified Input Shop',
      advisory: 'AI & Expert Advisory',
      talkDoc: 'Talk to Agronomist',
      pathology: 'AI Plant Pathology',
      warehousing: 'Warehouse Silo Booking',
      escrowTerms: 'T+0 Escrow Terms',
      privacy: 'Privacy Policy',
      charter: 'Kisan Charter & Terms'
    }
  },
  hi: {
    tagline: 'उन्नत खेती, समृद्ध भविष्य',
    desc: 'क्रॉपकेयर एक संपूर्ण स्मार्ट कृषि मंच है जो पारंपरिक कृषि आपूर्ति श्रृंखला को एक आधुनिक, सुरक्षित और डिजिटल नेटवर्क में बदलता है। मिट्टी परीक्षण से लेकर सीधे खरीदार को बिक्री और बैंक में तुरंत भुगतान तक।',
    compliance: 'WDRA एवं e-NAM पंजीकृत व सुरक्षित',
    col1Title: 'इकोसिस्टम हब',
    col2Title: 'सलाहकार एवं नियम',
    col3Title: 'दैनिक व्हाट्सएप मंडी भाव सेवा',
    broadcastDesc: 'हर सुबह 08:30 बजे अपने जिले की मंडियों के ताज़ा बोली भाव व्हाट्सएप या एसएमएस पर मुफ्त प्राप्त करें।',
    phonePlaceholder: 'अपना मोबाइल नंबर दर्ज करें (व्हाट्सएप)',
    btnSubscribe: 'शुरू करें',
    rights: '© 2026 क्रॉपकेयर एग्रीटेक सिस्टम्स। सर्वाधिकार सुरक्षित।',
    links: {
      overview: 'प्लेटफॉर्म अवलोकन',
      workflow: '6-चरणीय कृषि यात्रा',
      pillars: '18 मुख्य कृषि स्तंभ',
      dashboard: 'किसान कॉकपिट',
      marketplace: 'प्रमाणित कृषि बाज़ार',
      advisory: 'AI व विशेषज्ञ सलाह',
      talkDoc: 'कृषि डॉक्टर से बात करें',
      pathology: 'AI फसल रोग जांच',
      warehousing: 'वेयरहाउस व साइलो बुकिंग',
      escrowTerms: 'T+0 एस्क्रो नियम',
      privacy: 'गोपनीयता नीति',
      charter: 'किसान अधिकार पत्र'
    }
  },
  ta: {
    tagline: 'சிறந்த பண்ணைகள், பிரகாசமான எதிர்காலம்',
    desc: 'க்ராப்கேர் என்பது துல்லியமான மண் பரிசோதனை முதல் AI நோய் கண்டறிதல் மற்றும் T+0 எஸ்க்ரோ நேரடி விற்பனை வரை விவசாய விநியோகச் சங்கிலியை இணைக்கும் முழுமையான தளம்.',
    compliance: 'WDRA & e-NAM முறைப்படி பாதுகாக்கப்பட்டது',
    col1Title: 'சுற்றுச்சூழல் மையம்',
    col2Title: 'ஆலோசனை & விதிகள்',
    col3Title: 'தினசரி வாட்ஸ்அப் மண்டி விலைகள்',
    broadcastDesc: 'ஒவ்வொரு நாளும் காலை 08:30 மணிக்கு உங்கள் மாவட்ட மண்டி ஏல விலைகளை வாட்ஸ்அப் அல்லது எஸ்எம்எஸ் மூலம் பெறுங்கள்.',
    phonePlaceholder: 'மொபைல் எண் உள்ளிடவும் (வாட்ஸ்அப்)',
    btnSubscribe: 'இணையுங்கள்',
    rights: '© 2026 க்ராப்கேர் அக்ரிடெக் அமைப்புகள். அனைத்து உரிமைகளும் பாதுகாக்கப்பட்டவை.',
    links: {
      overview: 'தள கண்ணோட்டம்',
      workflow: '6-படி பண்ணை பயணம்',
      pillars: '18 முக்கிய தூண்கள்',
      dashboard: 'விவசாயி டாஷ்போர்டு',
      marketplace: 'சான்றளிக்கப்பட்ட சந்தை',
      advisory: 'AI & நிபுணர் ஆலோசனை',
      talkDoc: 'விவசாய மருத்துவரிடம் பேசுக',
      pathology: 'AI பயிர் நோய் கண்டறிதல்',
      warehousing: 'சேமிப்பு கிடங்கு முன்பதிவு',
      escrowTerms: 'T+0 எஸ்க்ரோ விதிமுறைகள்',
      privacy: 'தனியுரிமை கொள்கை',
      charter: 'விவசாயி உரிமை சாசனம்'
    }
  },
  fr: {
    tagline: 'De Meilleures Fermes, un Avenir Radieux',
    desc: 'CropCare est une plateforme d\'agriculture intelligente de bout en bout qui transforme les filières agricoles en un écosystème connecté : du diagnostic pédologique à la vente directe aux industriels avec séquestre T+0.',
    compliance: 'Conforme WDRA & Normes de Marché e-NAM',
    col1Title: 'Pôles de l\'Écosystème',
    col2Title: 'Conseil & Cadre Juridique',
    col3Title: 'Diffusion Quotidienne des Cours',
    broadcastDesc: 'Recevez chaque matin à 08h30 les cours d\'ouverture des marchés de votre région par WhatsApp ou SMS.',
    phonePlaceholder: 'Numéro de mobile (WhatsApp)',
    btnSubscribe: 'S\'inscrire',
    rights: '© 2026 CropCare Agritech Systems. Tous droits réservés.',
    links: {
      overview: 'Aperçu de la Plateforme',
      workflow: 'Parcours en 6 Étapes',
      pillars: '18 Piliers Technologiques',
      dashboard: 'Poste de Pilotage Fermier',
      marketplace: 'Boutique d\'Intrants Agréés',
      advisory: 'Conseils IA & Experts',
      talkDoc: 'Consulter un Agronome',
      pathology: 'Phytopathologie par Vision IA',
      warehousing: 'Réservation de Silos & Entrepôts',
      escrowTerms: 'Conditions Séquestre T+0',
      privacy: 'Politique de Confidentialité',
      charter: 'Charte & Droits des Agriculteurs'
    }
  }
};

export function renderFooter(currentLang = 'en', understandingMode = 'easy') {
  const lbl = footerLabels[currentLang] || footerLabels.en;

  return `
    <footer class="site-footer" id="contact">
      <div class="container">
        <div class="footer-grid gap-6">
          <!-- Col 1: Brand & Mission -->
          <div class="footer-brand-col">
            <div style="cursor: pointer;" id="footerBrand">
              ${renderCropCareLogo('md', true, lbl.tagline)}
            </div>

            <p style="margin-top: 16px; color: var(--slate-300); font-size: 0.88rem; line-height: 1.6;">
              ${lbl.desc}
            </p>

            <div style="display: flex; gap: 12px; margin-top: 16px;">
              <span class="badge-pill" style="background: rgba(255, 255, 255, 0.1); color: #C8E6C9; border-color: rgba(255, 255, 255, 0.2);">
                <i data-lucide="shield-check" class="icon-sm" style="color: #4ADE80;"></i>
                <span>${lbl.compliance}</span>
              </span>
            </div>
          </div>

          <!-- Col 2: Platform Links -->
          <div class="footer-col">
            <h5>${lbl.col1Title}</h5>
            <ul class="footer-links">
              <li><a href="#view-overview" class="footer-link" data-view="overview">${lbl.links.overview}</a></li>
              <li><a href="#view-workflow" class="footer-link" data-view="workflow">${lbl.links.workflow}</a></li>
              <li><a href="#view-pillars" class="footer-link" data-view="pillars">${lbl.links.pillars}</a></li>
              <li><a href="#view-dashboard" class="footer-link" data-view="dashboard">${lbl.links.dashboard}</a></li>
              <li><a href="#view-marketplace" class="footer-link" data-view="marketplace">${lbl.links.marketplace}</a></li>
              <li><a href="#view-advisory" class="footer-link" data-view="advisory">${lbl.links.advisory}</a></li>
            </ul>
          </div>

          <!-- Col 3: Support & Advisory -->
          <div class="footer-col">
            <h5>${lbl.col2Title}</h5>
            <ul class="footer-links">
              <li><a href="#view-advisory" class="footer-link" data-view="advisory">${lbl.links.talkDoc}</a></li>
              <li><a href="#view-dashboard" class="footer-link" data-view="dashboard">${lbl.links.pathology}</a></li>
              <li><a href="#view-pillars" class="footer-link" data-view="pillars">${lbl.links.warehousing}</a></li>
              <li><a href="#view-pillars" class="footer-link" data-view="pillars">${lbl.links.escrowTerms}</a></li>
              <li><a href="#" class="footer-link">${lbl.links.privacy}</a></li>
              <li><a href="#" class="footer-link">${lbl.links.charter}</a></li>
            </ul>
          </div>

          <!-- Col 4: Daily WhatsApp / SMS Mandi Alerts -->
          <div class="footer-col">
            <h5>${lbl.col3Title}</h5>
            <p style="font-size: 0.85rem; color: var(--slate-300); margin-bottom: 12px; line-height: 1.5;">
              ${lbl.broadcastDesc}
            </p>

            <form class="footer-newsletter-form" id="newsletterForm">
              <div class="newsletter-input-group">
                <input 
                  type="tel" 
                  class="newsletter-input" 
                  id="newsletterPhone" 
                  placeholder="${lbl.phonePlaceholder}" 
                  required 
                />
                <button type="submit" class="newsletter-submit-btn">
                  <span>${lbl.btnSubscribe}</span>
                  <i data-lucide="send" class="icon-xs"></i>
                </button>
              </div>
            </form>
          </div>
        </div>

        <div class="footer-bottom">
          <p>${lbl.rights}</p>
          <div class="footer-social-links" style="display: flex; align-items: center; gap: 14px;">
            <a href="https://github.com/hawk5637/cropcare" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 6px; color: var(--slate-300); text-decoration: none; font-size: 0.825rem; font-weight: 700;">
              <svg style="width: 16px; height: 16px; fill: currentColor;" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub Repository</span>
            </a>
            <span style="font-size: 0.825rem; color: var(--slate-400);">• e-NAM • ICAR • WDRA • ISO 27001</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
