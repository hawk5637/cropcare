const advisoryData = {
  en: {
    badge: 'ICAR & University Tele-Advisory',
    title: 'Direct Access to Verified Agronomists & Soil Scientists',
    subtitleEasy: 'Got a pest problem or yellowing leaves? Talk directly to government-certified agricultural doctors for free.',
    subtitleTech: 'Multi-spectral pathology triage, verified soil science tele-consults, and digital prescription issuance in minutes.',
    btnBook: 'Book Call (Free)',
    communityTitle: 'Verified Agronomy Q&A Community',
    communitySubtitle: 'Over 54,000 peer-reviewed questions answered by certified agronomy scientists.',
    btnAsk: 'Ask a Question',
    answeredBy: 'Verified Answer by',
    farmersHelped: 'Farmers helped',
    experts: [
      {
        name: "Dr. Arvind K. Sharma",
        title: "Senior Soil Scientist & Agronomist",
        credentials: "Ex-ICAR • 22 Yrs Experience",
        specialty: "Cereal Crops, Saline Soil Reclamation",
        rating: "4.9 ★ (1,420 Consults)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Dr. Meenakshi Sundaram",
        title: "Plant Pathologist & IPM Specialist",
        credentials: "TNAU Alumni • Organic Protection",
        specialty: "Horticulture, Fungal Blight, Thrips",
        rating: "5.0 ★ (980 Consults)",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Er. Balwinder Singh",
        title: "Agri-Robotics & Precision Irrigation Engineer",
        credentials: "Punjab Agri University • Drone Specialist",
        specialty: "Drip Automation, Sensor Calibration",
        rating: "4.8 ★ (810 Consults)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    questions: [
      {
        q: "What is the optimal water requirement for Durum Wheat during the crown root initiation (CRI) stage?",
        a: "The CRI stage (20-25 days after sowing) is the single most critical moisture window. Ensure 50-60mm irrigation depth. If using micro-drip, run at 4 lph for 3.5 hours per sector.",
        answeredBy: "Dr. Arvind K. Sharma",
        upvotes: 84
      },
      {
        q: "How can I prevent early blight in greenhouse Dutch Bell Pepper without chemical residue buildup?",
        a: "Prune bottom foliage up to 25cm off the soil bed to improve airflow. Apply Trichoderma viride bio-fungicide @ 5g/liter as foliar spray every 10 days.",
        answeredBy: "Dr. Meenakshi Sundaram",
        upvotes: 62
      }
    ]
  },
  hi: {
    badge: 'आईसीएआर एवं विश्वविद्यालय टेली-सलाहकार',
    title: 'सत्यापित कृषि वैज्ञानिकों व मृदा विशेषज्ञों से सीधी बात',
    subtitleEasy: 'पत्तियों में पीलापन या कीट लगने की समस्या? हमारे विशेषज्ञ डॉक्टरों से वीडियो कॉल पर मुफ्त सलाह लें।',
    subtitleTech: 'मल्टी-स्पेक्ट्रल पैथोलॉजी ट्रायज, प्रमाणित मृदा परीक्षण विश्लेषण एवं डिजिटल पर्ची वितरण।',
    btnBook: 'मुफ्त वीडियो कॉल करें',
    communityTitle: 'सत्यापित कृषि प्रश्नोत्तरी मंच',
    communitySubtitle: 'प्रमाणित कृषि वैज्ञानिकों द्वारा 54,000+ समीक्षा किए गए उत्तर।',
    btnAsk: 'प्रश्न पूछें',
    answeredBy: 'सत्यापित उत्तर:',
    farmersHelped: 'किसानों को लाभ मिला',
    experts: [
      {
        name: "डॉ. अरविंद के. शर्मा",
        title: "वरिष्ठ मृदा वैज्ञानिक एवं कृषि विशेषज्ञ",
        credentials: "पूर्व-आईसीएआर • 22 वर्ष का अनुभव",
        specialty: "अनाज फसलें, क्षारीय भूमि सुधार",
        rating: "4.9 ★ (1,420 परामर्श)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "डॉ. मीनाक्षी सुंदरम",
        title: "पादप रोग विशेषज्ञ (पैथोलॉजिस्ट)",
        credentials: "टीएनएयू पूर्व छात्र • जैविक संरक्षण",
        specialty: "बागवानी, फफूंद झुलसा, थ्रिप्स नियंत्रण",
        rating: "5.0 ★ (980 परामर्श)",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "इंजी. बलविंदर सिंह",
        title: "कृषि रोबोटिक्स एवं ड्रिप सिंचाई इंजीनियर",
        credentials: "पंजाब कृषि वि.वि. • ड्रोन विशेषज्ञ",
        specialty: "ड्रिप ऑटोमेशन, मृदा सेंसर कैलिब्रेशन",
        rating: "4.8 ★ (810 परामर्श)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    questions: [
      {
        q: "गेहूं में ताज जड़ विकास (CRI) के समय पानी की सही आवश्यकता क्या है?",
        a: "बुवाई के 20-25 दिन बाद सीआरआई अवस्था सबसे महत्वपूर्ण है। 50-60 मिमी गहरी सिंचाई करें। यदि ड्रिप है तो प्रति सेक्टर 3.5 घंटे 4 एलपीएच पर चलाएं।",
        answeredBy: "डॉ. अरविंद के. शर्मा",
        upvotes: 84
      },
      {
        q: "शिमला मिर्च में बिना जहरीले रसायनों के अगेती झुलसा रोग की रोकथाम कैसे करें?",
        a: "हवा का प्रवाह बढ़ाने के लिए नीचे की 25 सेमी तक की पत्तियों की छंटाई करें। ट्राइकोडर्मा विरिडे जैविक फफूंदनाशी 5 ग्राम/लीटर पानी में मिलाकर हर 10 दिन पर छिड़कें।",
        answeredBy: "डॉ. मीनाक्षी सुंदरम",
        upvotes: 62
      }
    ]
  },
  ta: {
    badge: 'ICAR மற்றும் பல்கலைக்கழக ஆலோசனை மையம்',
    title: 'வேளாண் விஞ்ஞானிகளுடன் நேரடி ஆலோசனை',
    subtitleEasy: 'பயிரில் பூச்சி தாக்குதலா? விவசாய மருத்துவரிடம் இலவசமாக வீடியோ காலில் பேசி தீர்வு பெறுங்கள்.',
    subtitleTech: 'தாவர நோயியல் ஆய்வு, மண் பரிசோதனை பகுப்பாய்வு மற்றும் டிஜிட்டல் மருந்து பரிந்துரைகள்.',
    btnBook: 'இலவச அழைப்பு பதிவு',
    communityTitle: 'சான்றளிக்கப்பட்ட விவசாய கேள்வி-பதில் சமூகம்',
    communitySubtitle: 'விஞ்ஞானிகளால் பதிலளிக்கப்பட்ட 54,000+ கேள்விகள்.',
    btnAsk: 'கேள்வி கேட்க',
    answeredBy: 'விஞ்ஞானி பதில்:',
    farmersHelped: 'விவசாயிகள் பயனடைந்தனர்',
    experts: [
      {
        name: "டாக்டர் அரவிந்த் கே. சர்மா",
        title: "மூத்த மண் விஞ்ஞானி & பயிர் ஆலோசகர்",
        credentials: "முன்னாள் ICAR • 22 ஆண்டு அனுபவம்",
        specialty: "தானிய பயிர்கள், களர் நில மீட்பு",
        rating: "4.9 ★ (1,420 ஆலோசனைகள்)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "டாக்டர் மீனாட்சி சுந்தரம்",
        title: "தாவர நோயியல் நிபுணர்",
        credentials: "TNAU முன்னாள் மாணவர் • இயற்கை பாதுகாப்பு",
        specialty: "தோட்டக்கலை, பூஞ்சை கருகல், இலைப்பேன்",
        rating: "5.0 ★ (980 ஆலோசனைகள்)",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "பொறி. பல்விந்தர் சிங்",
        title: "துல்லிய பாசன & ட்ரோன் பொறியாளர்",
        credentials: "பஞ்சாப் வேளாண் வி.வி. • ட்ரோன் நிபுணர்",
        specialty: "சொட்டுநீர் ஆட்டோமேஷன், சென்சார்கள்",
        rating: "4.8 ★ (810 ஆலோசனைகள்)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    questions: [
      {
        q: "கோதுமையில் வேர் வளர்ச்சி (CRI) கட்டத்தில் நீர் தேவை என்ன?",
        a: "விதைத்த 20-25 நாட்களுக்குப் பிறகு இந்த நிலை மிக முக்கியமானது. 50-60 மி.மீ ஆழமான பாசனம் வழங்க வேண்டும்.",
        answeredBy: "டாக்டர் அரவிந்த் கே. சர்மா",
        upvotes: 84
      },
      {
        q: "குடைமிளகாயில் ரசாயனங்கள் இன்றி கருகல் நோயை எவ்வாறு தடுப்பது?",
        a: "காற்றோட்டத்தை அதிகரிக்க தரைமட்டத்திலிருந்து 25 செ.மீ உயரம் வரை இலைகளை நீக்கவும். ட்ரைக்கோடெர்மா விரிடி 5 கிராம்/லிட்டர் தெளிக்கவும்.",
        answeredBy: "டாக்டர் மீனாட்சி சுந்தரம்",
        upvotes: 62
      }
    ]
  },
  fr: {
    badge: 'Télé-Conseil ICAR & Centres de Recherche',
    title: 'Accès Direct aux Agronomes & Pédologues Agréés',
    subtitleEasy: 'Un problème de maladie foliaire ? Échangez gratuitement par appel vidéo avec nos médecins des plantes.',
    subtitleTech: 'Triage phytosanitaire multi-spectral, diagnostic pédologique certifié et ordonnances numériques en direct.',
    btnBook: 'Réserver un Appel (Gratuit)',
    communityTitle: 'Communauté d\'Entraide Agronomique Validée',
    communitySubtitle: 'Plus de 54 000 questions vérifiées et traitées par des docteurs en agronomie.',
    btnAsk: 'Poser une Question',
    answeredBy: 'Réponse Certifiée par',
    farmersHelped: 'Agriculteurs aidés',
    experts: [
      {
        name: "Dr. Arvind K. Sharma",
        title: "Pédologue & Agronome Senior",
        credentials: "Ex-ICAR • 22 Ans d'Expérience",
        specialty: "Grandes Cultures, Réhabilitation des Sols",
        rating: "4.9 ★ (1 420 Consultations)",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Dr. Meenakshi Sundaram",
        title: "Phytopathologiste & Spécialiste Protection Intégrée",
        credentials: "Alumni TNAU • Protection Biologique",
        specialty: "Arboriculture, Mildiou, Thrips",
        rating: "5.0 ★ (980 Consultations)",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80"
      },
      {
        name: "Ing. Balwinder Singh",
        title: "Ingénieur Robotique & Irrigation de Précision",
        credentials: "Univ. Agri Pendjab • Spécialiste Drones",
        specialty: "Automatisation Goutte-à-Goutte, Sondes IoT",
        rating: "4.8 ★ (810 Consultations)",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80"
      }
    ],
    questions: [
      {
        q: "Quel est le besoin hydrique optimal pour le blé dur lors du tallage et de l'enracinement initial ?",
        a: "Le stade 20-25 jours après semis est la fenêtre critique. Assurez 50-60 mm d'irrigation. En micro-irrigation, appliquez 4 L/h pendant 3,5 heures par secteur.",
        answeredBy: "Dr. Arvind K. Sharma",
        upvotes: 84
      },
      {
        q: "Comment prévenir l'alternariose du poivron sous serre sans accumulation de résidus chimiques ?",
        a: "Effeuillez le bas de tige jusqu'à 25 cm pour aérer la canopée. Appliquez le bio-fongicide Trichoderma viride à raison de 5 g/litre en pulvérisation foliaire tous les 10 jours.",
        answeredBy: "Dr. Meenakshi Sundaram",
        upvotes: 62
      }
    ]
  }
};

export function renderAdvisorySection(currentLang = 'en', understandingMode = 'easy') {
  const data = advisoryData[currentLang] || advisoryData.en;

  return `
    <section class="section-padding" id="advisory" style="background: linear-gradient(180deg, var(--bg-page) 0%, var(--bg-card) 100%);">
      <div class="container">
        <!-- Section Header -->
        <div class="section-head">
          <div class="badge-pill">
            <i data-lucide="stethoscope" class="icon-sm"></i>
            <span>${data.badge}</span>
          </div>
          <h2 class="section-title tracking-tight">
            ${data.title}
          </h2>
          <p class="section-subtitle tracking-normal">
            ${understandingMode === 'easy' ? data.subtitleEasy : data.subtitleTech}
          </p>
        </div>

        <!-- 3 Agronomist Cards Grid -->
        <div class="gap-6" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); margin-bottom: 48px;">
          ${data.experts.map(expert => `
            <div class="hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 24px; box-shadow: var(--shadow-sm); display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; align-items: center; gap: 14px;">
                <div style="width: 56px; height: 56px; border-radius: 50%; overflow: hidden; border: 2px solid var(--primary-400); flex-shrink: 0;">
                  <img src="${expert.image}" alt="${expert.name}" style="width: 100%; height: 100%; object-fit: cover;" />
                </div>
                <div>
                  <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--slate-900);">${expert.name}</h4>
                  <span style="font-size: 0.78rem; color: var(--slate-500);">${expert.credentials}</span>
                </div>
              </div>

              <div>
                <span style="font-size: 0.75rem; font-weight: 700; color: var(--primary-700); background: var(--primary-50); padding: 3px 8px; border-radius: var(--radius-full);">
                  ${expert.specialty}
                </span>
                <p style="font-size: 0.85rem; color: var(--slate-600); margin-top: 8px;">${expert.title}</p>
              </div>

              <div style="margin-top: auto; display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 14px;">
                <span style="font-size: 0.85rem; font-weight: 700; color: #F57F17;">${expert.rating}</span>
                <button class="btn btn-primary btn-sm book-consult-btn" data-doctor="${expert.name}">
                  <i data-lucide="video" class="icon-sm"></i>
                  <span>${data.btnBook}</span>
                </button>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Community Knowledge Forum Preview -->
        <div class="hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-xl); padding: 32px; box-shadow: var(--shadow-md);">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px; flex-wrap: wrap; gap: 12px;">
            <div>
              <h3 class="tracking-tight" style="font-size: 1.35rem; font-weight: 800; color: var(--slate-900);">${data.communityTitle}</h3>
              <p style="font-size: 0.88rem; color: var(--slate-600);">${data.communitySubtitle}</p>
            </div>

            <button class="btn btn-secondary btn-sm" id="askCommunityBtn">
              <i data-lucide="message-square-plus" class="icon-sm"></i>
              <span>${data.btnAsk}</span>
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${data.questions.map(item => `
              <div class="hover:-translate-y-1 hover:shadow-sm transition-all duration-300 ease-in-out" style="background: var(--slate-50); border: 1px solid var(--border-subtle); border-radius: var(--radius-md); padding: 18px;">
                <h5 style="font-size: 0.98rem; font-weight: 700; color: var(--slate-900); margin-bottom: 8px;">
                  ${item.q}
                </h5>
                <p style="font-size: 0.88rem; color: var(--slate-700); line-height: 1.6; margin-bottom: 12px;">
                  ${item.a}
                </p>
                <div style="display: flex; align-items: center; justify-content: space-between; font-size: 0.8rem; color: var(--slate-500); flex-wrap: wrap; gap: 8px;">
                  <span>${data.answeredBy} <strong>${item.answeredBy}</strong></span>
                  <span style="display: flex; align-items: center; gap: 4px; color: var(--primary-700); font-weight: 700;">
                    <i data-lucide="thumbs-up" class="icon-sm"></i>
                    <span>${item.upvotes} ${data.farmersHelped}</span>
                  </span>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </section>
  `;
}
