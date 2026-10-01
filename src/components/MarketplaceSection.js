import { getMarketplaceItems } from '../data/marketplaceItems.js';

const marketLabels = {
  en: {
    badge: 'Verified Agricultural Marketplace & Directory',
    title: 'Farm Produce, Tractors, Spares & Field Services',
    subtitleEasy: 'Direct farmgate fresh fruits & vegetables, trusted tractors, genuine spare parts, and certified drone spraying.',
    subtitleTech: 'Disintermediated APMC mandi supply chain, OEM-certified agricultural machinery, boron-grade spares, and ag-fintech.',
    searchPlaceholder: 'Search fresh produce, tractor models, implements, or spare parts...',
    easyBannerTitle: '🍃 Farmer-Friendly Simple View Active',
    easyBannerDesc: 'Plain everyday words, verified quality produce, and doorstep delivery with zero confusing technical jargon.',
    techBannerTitle: '🔬 B2B Agronomy & Machinery Matrix Active',
    techBannerDesc: 'Laboratory assay metrics, engine dynamometer ratings, cold-chain temperature thresholds, and wholesale APMC spreads unlocked.',
    categories: [
      { key: 'all', label: 'All Listings', icon: 'layout-grid' },
      { key: 'produce', label: 'Vegetables & Fruits', icon: 'apple' },
      { key: 'vehicles', label: 'Tractors & Machinery', icon: 'truck' },
      { key: 'spares', label: 'Spare Parts & Implements', icon: 'wrench' },
      { key: 'seeds', label: 'Seeds & Bio-Inputs', icon: 'sprout' },
      { key: 'tech', label: 'Smart Tech & Drones', icon: 'cpu' }
    ],
    easyBadge: 'Farmer Simple View',
    techBadge: 'Technical Specification',
    buyBtnProduceEasy: 'Order to Doorstep 🚚',
    buyBtnVehicleEasy: 'Book Free Village Test Drive 🚜',
    buyBtnSpareEasy: 'Order Part to Doorstep 🔧',
    buyBtnGeneralEasy: 'Order Now 📦',
    buyBtnProduceTech: 'Lock B2B Wholesale Lot (T+0)',
    buyBtnVehicleTech: 'Apply KCC Loan / Dealer PO',
    buyBtnSpareTech: 'Purchase OEM Certified Lot',
    buyBtnGeneralTech: 'Initiate Procurement Order',
    directMandiTag: 'Direct Mandi Spot Rate',
    emiTag: 'KCC Loan / EMI Eligible',
    oemTag: '100% OEM Genuine',
    quickSpecEasyLabel: 'Everyday Farmer Benefit',
    quickSpecTechLabel: 'Agronomy & Engineering Metric Matrix',
    addItemBtn: '➕ Add New Item / Produce',
    editBtn: '✏️ Edit'
  },
  hi: {
    badge: 'सत्यापित कृषि बाज़ार व निर्देशिका',
    title: 'ताज़ा उपज, ट्रैक्टर, स्पेयर पार्ट्स व ड्रोन सेवाएं',
    subtitleEasy: 'खेत से सीधे ताज़े फल व सब्ज़ियाँ, भरोसेमंद ट्रैक्टर, असली स्पेयर पार्ट्स और ड्रोन छिड़काव सेवाएं।',
    subtitleTech: 'बिचौलिया-मुक्त एपीएमसी मंडी आपूर्ति श्रृंखला, ओईएम प्रमाणित ट्रैक्टर, बोरोन स्टील उपकरण व कृषि ऋण सुविधा।',
    searchPlaceholder: 'फल, सब्ज़ी, ट्रैक्टर मॉडल या स्पेयर पार्ट खोजें...',
    easyBannerTitle: '🍃 किसान-हितैषी सरल दृष्टिकोण सक्रिय',
    easyBannerDesc: 'सरल भाषा, बिना किसी तकनीकी उलझन के स्पष्ट दाम, घर तक सुरक्षित डिलीवरी और शुद्धता की गारंटी।',
    techBannerTitle: '🔬 B2B कृषि विज्ञान व मशीनरी मैट्रिक्स सक्रिय',
    techBannerDesc: 'प्रयोगशाला परीक्षण मानक, इंजन डायनेमोमीटर रेटिंग, कोल्ड-चेन तापमान सीमा व थोक मंडी स्प्रेड विवरण अनलॉक।',
    categories: [
      { key: 'all', label: 'सभी उत्पाद', icon: 'layout-grid' },
      { key: 'produce', label: 'ताज़ी सब्ज़ियाँ व फल', icon: 'apple' },
      { key: 'vehicles', label: 'ट्रैक्टर व कृषि वाहन', icon: 'truck' },
      { key: 'spares', label: 'स्पेयर पार्ट्स व उपकरण', icon: 'wrench' },
      { key: 'seeds', label: 'प्रमाणित बीज व खाद', icon: 'sprout' },
      { key: 'tech', label: 'स्मार्ट तकनीक व ड्रोन', icon: 'cpu' }
    ],
    easyBadge: 'सरल किसान दृष्टिकोण',
    techBadge: 'तकनीकी विनिर्देश',
    buyBtnProduceEasy: 'घर मंगवाएं 🚚',
    buyBtnVehicleEasy: 'मुफ़्त टेस्ट ड्राइव बुक करें 🚜',
    buyBtnSpareEasy: 'असली पार्ट मंगवाएं 🔧',
    buyBtnGeneralEasy: 'अभी ऑर्डर करें 📦',
    buyBtnProduceTech: 'थोक मंडी लॉट बुक करें (T+0)',
    buyBtnVehicleTech: 'KCC ऋण / डीलर पीओ आवेदन',
    buyBtnSpareTech: 'OEM प्रमाणित लॉट ऑर्डर करें',
    buyBtnGeneralTech: 'संस्थागत खरीद शुरू करें',
    directMandiTag: 'सीधा मंडी भाव',
    emiTag: 'किसान क्रेडिट कार्ड / EMI मान्य',
    oemTag: '100% असली गारंटी',
    quickSpecEasyLabel: 'किसानों के लिए सीधा लाभ',
    quickSpecTechLabel: 'इंजीनियरिंग व गुणवत्ता मानक मैट्रिक्स',
    addItemBtn: '➕ नया उत्पाद / उपज जोड़ें',
    editBtn: '✏️ संपादित करें'
  },
  ta: {
    badge: 'சான்றளிக்கப்பட்ட விவசாய சந்தை & அடைவு',
    title: 'விளைபொருட்கள், டிராக்டர்கள், உதிரிபாகங்கள் & சேவைகள்',
    subtitleEasy: 'பண்ணை நேரடி காய்கறி மற்றும் பழங்கள், டிராக்டர்கள், அசல் உதிரிபாகங்கள் மற்றும் ட்ரோன் தெளிப்பு.',
    subtitleTech: 'இடைத்தரகர் இல்லாத மண்டி சங்கிலி, OEM சான்றளிக்கப்பட்ட விவசாய இயந்திரங்கள் மற்றும் கிசான் கடன் அட்டை வசதி.',
    searchPlaceholder: 'பழங்கள், காய்கறிகள், டிராக்டர் மாதிரி அல்லது உதிரிபாகங்களை தேட...',
    easyBannerTitle: '🍃 விவசாயிகளுக்கு ஏற்ற எளிய பார்வை தயார்',
    easyBannerDesc: 'எளிய தமிழ் சொற்கள், தெளிவான விலைகள், வீட்டுக்கே நேரடி விநியோகம், குழப்பமான தொழில்நுட்ப வார்த்தைகள் இல்லை.',
    techBannerTitle: '🔬 B2B வேளாண்மை மற்றும் இயந்திர அணிவரிசை',
    techBannerDesc: 'ஆராய்ச்சி ஆய்வக அளவீடுகள், இயந்திர ஆற்றல் விவரங்கள், குளிரூட்டும் வெப்பநிலை நிலைகள் மற்றும் மொத்த சந்தை விலைகள்.',
    categories: [
      { key: 'all', label: 'அனைத்தும்', icon: 'layout-grid' },
      { key: 'produce', label: 'காய்கறி & பழங்கள்', icon: 'apple' },
      { key: 'vehicles', label: 'டிராக்டர் & இயந்திரங்கள்', icon: 'truck' },
      { key: 'spares', label: 'உதிரிபாகங்கள்', icon: 'wrench' },
      { key: 'seeds', label: 'விதைகள் & உரங்கள்', icon: 'sprout' },
      { key: 'tech', label: 'ஸ்மார்ட் கருவிகள் & ட்ரோன்', icon: 'cpu' }
    ],
    easyBadge: 'எளிய பார்வை',
    techBadge: 'தொழில்நுட்ப விவரம்',
    buyBtnProduceEasy: 'பண்ணைக்கே கொண்டுவர 🚚',
    buyBtnVehicleEasy: 'இலவச டெஸ்ட் டிரைவ் பதிவு 🚜',
    buyBtnSpareEasy: 'உதிரிபாகம் பெற 🔧',
    buyBtnGeneralEasy: 'ஆர்டர் செய்ய 📦',
    buyBtnProduceTech: 'மொத்த கொள்முதல் பதிவு (T+0)',
    buyBtnVehicleTech: 'KCC கடன் / டீலர் ஆர்டர்',
    buyBtnSpareTech: 'சான்றளிக்கப்பட்ட பாகம் வாங்க',
    buyBtnGeneralTech: 'வணிக கொள்முதல் தொடங்க',
    directMandiTag: 'நேரடி மண்டி விலை',
    emiTag: 'KCC கடன் / தவணை வசதி',
    oemTag: '100% அசல் உத்தரவாதம்',
    quickSpecEasyLabel: 'விவசாயிக்கு நேரடி நன்மை',
    quickSpecTechLabel: 'தொழில்நுட்ப மதிப்பீட்டு அணிவரிசை',
    addItemBtn: '➕ புதிய பொருள் சேர்க்க',
    editBtn: '✏️ திருத்து'
  },
  fr: {
    badge: 'Répertoire & Marché Agricole Certifié',
    title: 'Produits Frais, Tracteurs, Pièces & Services Drones',
    subtitleEasy: 'Fruits et légumes frais bord-champ, tracteurs fiables, pièces d\'origine et pulvérisation par drone.',
    subtitleTech: 'Chaîne logistique directe sans intermédiaire, machinisme certifié constructeur, pièces renforcées au bore et crédit agri.',
    searchPlaceholder: 'Rechercher fruits, légumes, modèles de tracteurs ou pièces détachées...',
    easyBannerTitle: '🍃 Vue Simple Agriculteur Active',
    easyBannerDesc: 'Termes simples du quotidien, qualité fraîche certifiée bord-champ, zéro jargon technique rébarbatif.',
    techBannerTitle: '🔬 Matrice Agronomique & Machinisme B2B Active',
    techBannerDesc: 'Analyses de laboratoire, courbes de puissance moteur au banc, seuils de température frigorifique et spreads de gros.',
    categories: [
      { key: 'all', label: 'Tous les Articles', icon: 'layout-grid' },
      { key: 'produce', label: 'Légumes & Fruits', icon: 'apple' },
      { key: 'vehicles', label: 'Tracteurs & Matériel', icon: 'truck' },
      { key: 'spares', label: 'Pièces Détachées', icon: 'wrench' },
      { key: 'seeds', label: 'Semences & Intrants', icon: 'sprout' },
      { key: 'tech', label: 'Drones & Technologies', icon: 'cpu' }
    ],
    easyBadge: 'Vue Simple Agriculteur',
    techBadge: 'Spécifications Techniques',
    buyBtnProduceEasy: 'Livraison Bord-Champ 🚚',
    buyBtnVehicleEasy: 'Essai Gratuit au Champ 🚜',
    buyBtnSpareEasy: 'Recevoir la Pièce 🔧',
    buyBtnGeneralEasy: 'Commander Direct 📦',
    buyBtnProduceTech: 'Verrouiller Lot de Gros (T+0)',
    buyBtnVehicleTech: 'Dossier Crédit Bail / Concession',
    buyBtnSpareTech: 'Achat Lot Pièces Certifiées',
    buyBtnGeneralTech: 'Passer Commande B2B',
    directMandiTag: 'Cours Spot Direct Mandi',
    emiTag: 'Éligible Financement Bancaire',
    oemTag: '100% Origine Constructeur',
    quickSpecEasyLabel: 'Bénéfice Concret pour l\'Agriculteur',
    quickSpecTechLabel: 'Matrice d\'Indicateurs Techniques & Agronomiques',
    addItemBtn: '➕ Ajouter un Article / Récolte',
    editBtn: '✏️ Modifier'
  }
};

export function renderMarketplaceSection(activeFilter = 'all', currentLang = 'en', understandingMode = 'easy', customItems = null) {
  const lbl = marketLabels[currentLang] || marketLabels.en;
  const items = (customItems && customItems.length > 0) ? customItems : getMarketplaceItems(currentLang);

  // Normalize active filter key
  const normalizedFilter = (activeFilter || 'all').toLowerCase().trim();
  const isAll = normalizedFilter === 'all' || normalizedFilter === 'tous' || normalizedFilter === 'सभी' || normalizedFilter === 'அனைத்தும்';

  const filtered = isAll 
    ? items 
    : items.filter(item => {
        if (item.categoryKey === normalizedFilter) return true;
        const catStr = (item.category || '').toLowerCase();
        return catStr.includes(normalizedFilter);
      });

  const isEasy = understandingMode === 'easy';

  return `
    <section class="section-padding p-6 md:p-10" id="marketplace" style="background: var(--bg-page);">
      <div class="container" style="max-width: 1400px; margin: 0 auto;">
        
        <!-- Section Header -->
        <div class="section-head" style="text-align: center; max-width: 900px; margin: 0 auto 28px;">
          <div class="badge-pill" style="display: inline-flex; align-items: center; gap: 8px; padding: 6px 16px; border-radius: var(--radius-full); background: var(--primary-50); border: 1px solid var(--border-light); color: var(--primary-700); font-size: 0.85rem; font-weight: 600; margin-bottom: 12px;">
            <i data-lucide="store" class="icon-sm" style="color: var(--primary-600);"></i>
            <span>${lbl.badge}</span>
          </div>
          <h2 class="section-title tracking-tight font-extrabold text-green-700 dark:text-green-400" style="font-size: clamp(2rem, 3.8vw, 2.8rem); margin-bottom: 12px; line-height: 1.2;">
            ${lbl.title}
          </h2>
          <p class="section-subtitle tracking-normal" style="font-size: 1.05rem; color: var(--slate-600); line-height: 1.6;">
            ${isEasy ? lbl.subtitleEasy : lbl.subtitleTech}
          </p>
        </div>

        <!-- DRAMATIC DUAL-UNDERSTANDING MODE CALLOUT BANNER -->
        <div 
          class="mode-dramatic-callout hover-scale transition-all duration-300 ease-in-out" 
          style="
            margin: 0 auto 30px;
            max-width: 1100px;
            padding: 16px 24px;
            border-radius: var(--radius-lg);
            background: ${isEasy ? 'linear-gradient(135deg, rgba(220, 252, 231, 0.9) 0%, rgba(240, 253, 244, 0.95) 100%)' : 'linear-gradient(135deg, rgba(224, 242, 254, 0.9) 0%, rgba(240, 249, 255, 0.95) 100%)'};
            border: 2px solid ${isEasy ? 'var(--primary-400)' : '#0284C7'};
            box-shadow: ${isEasy ? '0 8px 24px -6px rgba(34, 197, 94, 0.25)' : '0 8px 24px -6px rgba(2, 132, 199, 0.25)'};
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 16px;
            flex-wrap: wrap;
          "
        >
          <div style="display: flex; align-items: center; gap: 14px; flex: 1; min-width: 280px;">
            <div style="
              width: 48px;
              height: 48px;
              border-radius: var(--radius-md);
              background: ${isEasy ? 'var(--primary-600)' : '#0284C7'};
              color: #FFFFFF;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 1.6rem;
              flex-shrink: 0;
              box-shadow: var(--shadow-sm);
            ">
              ${isEasy ? '🍃' : '🔬'}
            </div>
            <div>
              <div style="font-weight: 800; font-size: 1.05rem; color: ${isEasy ? 'var(--primary-900)' : '#0369A1'}; display: flex; align-items: center; gap: 8px;">
                <span>${isEasy ? lbl.easyBannerTitle : lbl.techBannerTitle}</span>
                <span style="font-size: 0.72rem; padding: 2px 8px; border-radius: var(--radius-full); background: ${isEasy ? 'var(--primary-700)' : '#0284C7'}; color: #FFFFFF; text-transform: uppercase;">
                  ${isEasy ? 'SIMPLE' : 'ADVANCED B2B'}
                </span>
              </div>
              <div style="font-size: 0.86rem; color: var(--slate-700); margin-top: 3px; line-height: 1.4;">
                ${isEasy ? lbl.easyBannerDesc : lbl.techBannerDesc}
              </div>
            </div>
          </div>

          <!-- Add Item & Search Actions Toolbar -->
          <div style="display: flex; align-items: center; gap: 12px; flex-wrap: wrap;">
            <button 
              type="button" 
              id="openAddItemModalBtn" 
              class="btn btn-primary hover-scale transition-all duration-300 ease-in-out" 
              style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: var(--radius-full); font-weight: 800; font-size: 0.88rem; cursor: pointer; box-shadow: 0 4px 12px rgba(22, 163, 74, 0.3);"
            >
              <i data-lucide="plus-circle" class="icon-sm"></i>
              <span>${lbl.addItemBtn}</span>
            </button>

            <!-- Real-Time Filter & Search Input -->
            <div style="position: relative; width: 260px; max-width: 100%;">
              <i data-lucide="search" class="icon-sm" style="position: absolute; left: 14px; top: 50%; transform: translateY(-50%); color: var(--slate-400);"></i>
              <input 
                type="text" 
                id="marketplaceSearchInput" 
                placeholder="${lbl.searchPlaceholder}" 
                style="width: 100%; padding: 10px 14px 10px 40px; border-radius: var(--radius-full); border: 1px solid var(--border-light); background: var(--bg-card); color: var(--slate-900); font-size: 0.86rem; outline: none; transition: border-color var(--transition-fast);"
              />
            </div>
          </div>
        </div>

        <!-- Marketplace Category Filter Tabs -->
        <div class="market-category-nav" style="display: flex; gap: 10px; justify-content: center; margin-bottom: 36px; flex-wrap: wrap;">
          ${lbl.categories.map(cat => {
            const isTabActive = isAll ? (cat.key === 'all') : (cat.key === normalizedFilter);
            return `
              <button 
                class="filter-btn market-cat-btn transition-all duration-300 ease-in-out ${isTabActive ? 'active' : ''}" 
                data-cat="${cat.key}"
                style="display: inline-flex; align-items: center; gap: 8px; padding: 10px 18px; border-radius: var(--radius-full); font-size: 0.9rem; font-weight: 700; cursor: pointer;"
              >
                <i data-lucide="${cat.icon}" class="icon-sm"></i>
                <span>${cat.label}</span>
              </button>
            `;
          }).join('')}
        </div>

        <!-- Marketplace Cards Grid with Dramatic Mode Alterations -->
        <div class="marketplace-grid gap-8" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(330px, 1fr)); gap: 28px;">
          ${filtered.map(item => {
            // Pick CTA button text based on item category and mode
            let ctaText = isEasy ? lbl.buyBtnGeneralEasy : lbl.buyBtnGeneralTech;
            let ctaIcon = isEasy ? 'shopping-cart' : 'file-text';
            let featureTag = '';

            if (item.categoryKey === 'produce') {
              ctaText = isEasy ? lbl.buyBtnProduceEasy : lbl.buyBtnProduceTech;
              ctaIcon = isEasy ? 'shopping-bag' : 'trending-up';
              featureTag = `<span class="market-tag-produce" style="font-size: 0.72rem; font-weight: 700; background: #DCFCE7; color: #15803D; padding: 2px 8px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="check-circle-2" class="icon-xs"></i> ${lbl.directMandiTag}</span>`;
            } else if (item.categoryKey === 'vehicles') {
              ctaText = isEasy ? lbl.buyBtnVehicleEasy : lbl.buyBtnVehicleTech;
              ctaIcon = isEasy ? 'phone-call' : 'badge-percent';
              featureTag = `<span class="market-tag-vehicle" style="font-size: 0.72rem; font-weight: 700; background: #E0F2FE; color: #0369A1; padding: 2px 8px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="badge-percent" class="icon-xs"></i> ${lbl.emiTag}</span>`;
            } else if (item.categoryKey === 'spares') {
              ctaText = isEasy ? lbl.buyBtnSpareEasy : lbl.buyBtnSpareTech;
              ctaIcon = isEasy ? 'wrench' : 'shield-check';
              featureTag = `<span class="market-tag-spares" style="font-size: 0.72rem; font-weight: 700; background: #FEF3C7; color: #B45309; padding: 2px 8px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 4px;"><i data-lucide="shield-check" class="icon-xs"></i> ${lbl.oemTag}</span>`;
            }

            const currentSpecText = isEasy 
              ? (item.specsEasy || item.description) 
              : (item.specsDetailed || item.description);

            // Technical Matrix rendering for Detailed View
            let technicalMatrixHtml = '';
            if (!isEasy && item.quickMetrics && Object.keys(item.quickMetrics).length > 0) {
              technicalMatrixHtml = `
                <div class="technical-matrix-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 6px; margin-top: 10px; padding: 8px 10px; background: rgba(2, 132, 199, 0.06); border: 1px dashed rgba(2, 132, 199, 0.3); border-radius: var(--radius-sm); font-size: 0.76rem;">
                  ${Object.entries(item.quickMetrics).map(([key, val]) => `
                    <div style="display: flex; flex-direction: column;">
                      <span style="color: var(--slate-500); text-transform: uppercase; font-size: 0.65rem; font-weight: 700; letter-spacing: 0.03em;">${key.replace(/([A-Z])/g, ' $1')}</span>
                      <span style="color: var(--slate-900); font-weight: 800; font-family: monospace;">${val}</span>
                    </div>
                  `).join('')}
                </div>
              `;
            }

            return `
              <div 
                class="market-item-card hover-scale hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-in-out" 
                data-item-id="${item.id}"
                data-category-key="${item.categoryKey}"
                style="background: var(--bg-card); border: 1.5px solid ${isEasy ? 'var(--border-light)' : 'rgba(2, 132, 199, 0.25)'}; border-radius: var(--radius-lg); overflow: hidden; display: flex; flex-direction: column;"
              >
                <!-- Item Image & Badges -->
                <div class="market-item-img-wrap" style="position: relative; height: 215px; overflow: hidden; background: var(--slate-100);">
                  <img 
                    src="${item.image}" 
                    alt="${item.name}" 
                    loading="lazy" 
                    onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80';"
                    style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;"
                    class="market-img"
                  />

                  <!-- Easy Mode Big Emoji Float -->
                  ${isEasy ? `
                    <div style="position: absolute; bottom: 12px; left: 12px; width: 44px; height: 44px; border-radius: 50%; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); display: flex; align-items: center; justify-content: center; font-size: 1.6rem; box-shadow: var(--shadow-md); z-index: 3;">
                      ${item.easyEmoji}
                    </div>
                  ` : ''}

                  <!-- Status Badges -->
                  <div style="position: absolute; top: 12px; left: 12px; display: flex; flex-direction: column; gap: 6px; z-index: 2;">
                    <span class="market-badge" style="background: rgba(15, 23, 42, 0.85); backdrop-filter: blur(8px); color: #FFFFFF; font-size: 0.75rem; font-weight: 700; padding: 4px 10px; border-radius: var(--radius-full); display: inline-flex; align-items: center; gap: 4px; box-shadow: var(--shadow-sm);">
                      <i data-lucide="${isEasy ? 'smile' : 'check-circle'}" class="icon-xs" style="color: ${isEasy ? '#86EFAC' : '#38BDF8'};"></i>
                      ${item.badge}
                    </span>
                  </div>

                  <div style="position: absolute; top: 12px; right: 12px; z-index: 4; display: flex; align-items: center; gap: 6px;">
                    <span style="font-size: 0.74rem; font-weight: 800; color: #FFFFFF; background: ${isEasy ? 'var(--primary-600)' : '#0284C7'}; padding: 4px 10px; border-radius: var(--radius-full); box-shadow: var(--shadow-sm);">
                      ${item.discount || 'Verified'}
                    </span>
                    <button 
                      type="button" 
                      class="edit-item-btn hover-scale transition-all duration-200" 
                      data-item-id="${item.id}"
                      title="${lbl.editBtn}: ${item.name}"
                      style="background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(8px); border: 1px solid var(--border-light); border-radius: var(--radius-full); padding: 4px 10px; font-size: 0.74rem; font-weight: 800; color: var(--slate-900); display: inline-flex; align-items: center; gap: 4px; cursor: pointer; box-shadow: var(--shadow-sm);"
                    >
                      <i data-lucide="edit-2" class="icon-nano" style="color: var(--primary-600);"></i>
                      <span>${lbl.editBtn}</span>
                    </button>
                  </div>
                </div>

                <!-- Card Body -->
                <div class="market-body" style="padding: 22px; flex: 1; display: flex; flex-direction: column;">
                  
                  <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 6px;">
                    <span class="market-category" style="font-size: 0.8rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: ${isEasy ? 'var(--primary-600)' : '#0284C7'};">
                      ${item.category}
                    </span>
                    ${featureTag}
                  </div>

                  <h4 class="market-item-name tracking-tight font-extrabold" style="font-size: 1.18rem; color: var(--slate-900); margin-bottom: 6px; line-height: 1.3;">
                    ${item.name}
                  </h4>

                  <div class="market-supplier" style="font-size: 0.82rem; color: var(--slate-500); margin-bottom: 12px; display: flex; align-items: center; gap: 6px; flex-wrap: wrap;">
                    <span style="display: inline-flex; align-items: center; gap: 4px;">
                      <i data-lucide="award" class="icon-xs" style="color: var(--primary-500);"></i>
                      ${item.supplier}
                    </span>
                    <span style="color: var(--slate-400);">•</span>
                    <span style="color: #F59E0B; font-weight: 700;">${item.rating}</span>
                  </div>

                  <!-- Dynamic Dual-Mode Specs Box -->
                  <div class="market-specs-box" style="padding: 12px 14px; border-radius: var(--radius-sm); background: var(--bg-page); border: 1px solid var(--border-subtle); margin-bottom: 16px; flex: 1;">
                    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 5px; font-size: 0.74rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.04em; color: ${isEasy ? 'var(--primary-700)' : '#0284C7'};">
                      <i data-lucide="${isEasy ? 'leaf' : 'activity'}" class="icon-xs"></i>
                      <span>${isEasy ? lbl.quickSpecEasyLabel : lbl.quickSpecTechLabel}</span>
                    </div>
                    <p class="market-desc" style="font-size: 0.86rem; color: var(--slate-700); line-height: 1.55; margin: 0;">
                      ${currentSpecText}
                    </p>
                    
                    ${technicalMatrixHtml}
                  </div>

                  <!-- Price & Action Button -->
                  <div class="market-price-row" style="display: flex; align-items: baseline; gap: 8px; margin-bottom: 16px; flex-wrap: wrap;">
                    <div class="market-price" style="font-size: 1.55rem; font-weight: 900; color: var(--slate-900); letter-spacing: -0.03em;">
                      ${item.price}
                    </div>
                    <div class="market-unit" style="font-size: 0.825rem; color: var(--slate-500); font-weight: 600;">
                      ${item.unit}
                    </div>
                  </div>

                  <button 
                    class="btn ${isEasy ? 'btn-primary' : 'btn-outline'} order-item-btn hover-scale transition-all duration-300 ease-in-out" 
                    style="width: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; padding: 12px 18px; border-radius: var(--radius-md); font-weight: 800; font-size: 0.92rem; ${!isEasy ? 'border-color: #0284C7; color: #0284C7;' : ''}" 
                    data-item-name="${item.name}" 
                    data-item-price="${item.price}"
                    data-item-category="${item.categoryKey}"
                  >
                    <i data-lucide="${ctaIcon}" class="icon-sm"></i>
                    <span>${ctaText}</span>
                  </button>
                </div>
              </div>
            `;
          }).join('')}
        </div>

        <!-- Bottom Trust & Delivery Guarantee Footer Banner -->
        <div style="margin-top: 54px; padding: 28px; border-radius: var(--radius-lg); background: var(--bg-card); border: 1px solid var(--border-light); display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 24px; text-align: center;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: var(--primary-50); color: var(--primary-600); display: flex; align-items: center; justify-content: center;">
              <i data-lucide="shield-check" class="icon-sm"></i>
            </div>
            <h5 class="tracking-tight font-extrabold" style="font-size: 1rem; color: var(--slate-900);">
              ${currentLang === 'hi' ? '100% सत्यापित स्रोत' : currentLang === 'ta' ? '100% சான்றளிக்கப்பட்டவை' : currentLang === 'fr' ? 'Origine 100% Contrôlée' : '100% Verified Origin'}
            </h5>
            <p style="font-size: 0.825rem; color: var(--slate-500); line-height: 1.45;">
              ${currentLang === 'hi' ? 'आईसीएआर और सरकारी मान्यता प्राप्त एफपीओ से सीधे प्रमाणित' : currentLang === 'ta' ? 'ICAR மற்றும் அங்கீகரிக்கப்பட்ட FPO-க்கள் மூலம் நேரடி விநியோகம்' : currentLang === 'fr' ? 'Garantie traçabilité FPO et sélectionneurs agréés' : 'Direct traceability from registered FPOs and OEM depots'}
            </p>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #E0F2FE; color: #0369A1; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="truck" class="icon-sm"></i>
            </div>
            <h5 class="tracking-tight font-extrabold" style="font-size: 1rem; color: var(--slate-900);">
              ${currentLang === 'hi' ? 'कोल्ड-चेन व फार्मगेट डिलीवरी' : currentLang === 'ta' ? 'குளிரூட்டப்பட்ட பண்ணை விநியோகம்' : currentLang === 'fr' ? 'Livraison Directe Bord-Champ' : 'Cold-Chain & Farmgate Logistics'}
            </h5>
            <p style="font-size: 0.825rem; color: var(--slate-500); line-height: 1.45;">
              ${currentLang === 'hi' ? 'तापमान-नियंत्रित वैन द्वारा 24 घंटे में खेत तक सुरक्षित आपूर्ति' : currentLang === 'ta' ? '24 மணி நேரத்திற்குள் பண்ணைக்கே நேரடியாக வந்து சேரும் வசதி' : currentLang === 'fr' ? 'Flotte frigorifique géolocalisée sous 24h ouvrées' : 'Temperature-managed reefers & implement flatbeds'}
            </p>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <div style="width: 48px; height: 48px; border-radius: 50%; background: #FEF3C7; color: #B45309; display: flex; align-items: center; justify-content: center;">
              <i data-lucide="lock" class="icon-sm"></i>
            </div>
            <h5 class="tracking-tight font-extrabold" style="font-size: 1rem; color: var(--slate-900);">
              ${currentLang === 'hi' ? 'एस्क्रो सुरक्षित भुगतान' : currentLang === 'ta' ? 'எஸ்க்ரோ பாதுகாப்பான கட்டணம்' : currentLang === 'fr' ? 'Séquestre T+0 Garanti' : 'T+0 Escrow Protection'}
            </h5>
            <p style="font-size: 0.825rem; color: var(--slate-500); line-height: 1.45;">
              ${currentLang === 'hi' ? 'संतुष्ट होने और निरीक्षण के बाद ही खाते से राशि जारी की जाती है' : currentLang === 'ta' ? 'பொருட்கள் வந்து சரிபார்த்த பின்னரே தொகை விடுவிக்கப்படும்' : currentLang === 'fr' ? 'Paiement débloqué uniquement après inspection et validation' : 'Funds release only after farmgate digital receipt confirmation'}
            </p>
          </div>
        </div>

      </div>
    </section>
  `;
}
