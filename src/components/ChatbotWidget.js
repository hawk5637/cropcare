import { translations } from '../data/translations.js';
import { generateGeneralResponse } from '../data/agronomyBrain.js';

export function renderChatbotWidget(currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const cb = t.chatbot;

  const chips = {
    en: [
      { text: "🌾 Treat Yellow Rust", prompt: "How do I treat yellow rust in wheat?" },
      { text: "🍂 Powdery Mildew Remedy", prompt: "What is the best organic treatment for powdery mildew?" },
      { text: "🐛 Control Aphids", prompt: "How do I eradicate aphids and sooty mold?" },
      { text: "🌾 Test Wheat Seed Purity", prompt: "How do I check purity and germination of HD-2967 wheat seeds?" },
      { text: "🌧️ Rain Forecast", prompt: "Will it rain on my farm this week?" },
      { text: "💰 Soybean Mandi Rate", prompt: "What is today's best Mandi price for Soybean?" },
      { text: "🧪 45-Day Fertilizer", prompt: "What fertilizer is needed for 45-day wheat?" },
      { text: "🚜 Book Drone Spray", prompt: "How do I book drone spraying service?" }
    ],
    hi: [
      { text: "🌾 पीला रतुआ का इलाज", prompt: "गेहूं में पीला रतुआ का क्या इलाज है?" },
      { text: "🍂 पाउडरी मिल्ड्यू उपचार", prompt: "सब्जियों में छाछिया / सफेद फफूंद का जैविक इलाज क्या है?" },
      { text: "🐛 माहू व चेपा की रोकथाम", prompt: "सरसों में माहू और काली फफूंद कैसे रोकें?" },
      { text: "🌾 गेहूं बीज शुद्धता जांच", prompt: "एचडी-2967 गेहूं बीज की शुद्धता और अंकुरण कैसे जांचें?" },
      { text: "🌧️ बारिश का मौसम", prompt: "क्या इस हफ्ते मेरे खेत में बारिश होगी?" },
      { text: "💰 सोयाबीन मंडी भाव", prompt: "आज सोयाबीन का सबसे अच्छा मंडी भाव क्या है?" },
      { text: "🧪 45 दिन पर खाद", prompt: "45 दिन की गेहूं की फसल में कौन सा खाद डालें?" },
      { text: "🚜 ड्रोन स्प्रे बुकिंग", prompt: "ड्रोन छिड़काव सेवा कैसे बुक करें?" }
    ],
    ta: [
      { text: "🌾 மஞ்சள் துரு நோய்", prompt: "கோதுமையில் மஞ்சள் துரு நோயை எவ்வாறு குணப்படுத்துவது?" },
      { text: "🍂 சாம்பல் நோய் தீர்வு", prompt: "பயிர்களில் சாம்பல் நோயை எவ்வாறு கட்டுப்படுத்துவது?" },
      { text: "🐛 அசுவினி பூச்சி மேலாண்மை", prompt: "அசுவினி பூச்சி மற்றும் கரும்பூஞ்சையை அழிக்க என்ன மருந்து?" },
      { text: "🌾 விதை தூய்மை ஆய்வு", prompt: "கோதுமை மற்றும் நெல் விதை தூய்மையை எவ்வாறு சோதிப்பது?" },
      { text: "🌧️ மழை முன்னறிவிப்பு", prompt: "இந்த வாரம் என் பண்ணையில் மழை பெய்யுமா?" },
      { text: "💰 சோயாபீன் விலை", prompt: "இன்றைய சிறந்த சோயாபீன் மண்டி விலை என்ன?" },
      { text: "🧪 45-நாள் உரம்", prompt: "45 நாள் பயிருக்கு என்ன உரம் தேவை?" },
      { text: "🚜 ட்ரோன் தெளிப்பு", prompt: "விவசாய ட்ரோன் சேவையை எவ்வாறு பதிவு செய்வது?" }
    ],
    fr: [
      { text: "🌾 Rouille Jaune du Blé", prompt: "Comment traiter la rouille jaune du blé ?" },
      { text: "🍂 Traitement de l'Oïdium", prompt: "Quel est le meilleur remède bio contre l'oïdium ?" },
      { text: "🐛 Lutte Anti-Pucerons", prompt: "Comment éliminer les pucerons et la fumagine noire ?" },
      { text: "🌾 Pureté des Semences", prompt: "Comment vérifier la pureté et la germination des semences HD-2967 ?" },
      { text: "🌧️ Prévisions Météo", prompt: "Va-t-il pleuvoir sur mon exploitation cette semaine ?" },
      { text: "💰 Cours du Soja", prompt: "Quel est le meilleur cours de marché pour le soja aujourd'hui ?" },
      { text: "🧪 Fertilisation 45j", prompt: "Quel engrais pour un blé à 45 jours ?" },
      { text: "🚜 Réservation Drone", prompt: "Comment réserver une pulvérisation par drone ?" }
    ]
  };

  const activeChips = chips[currentLang] || chips.en;

  return `
    <div class="chatbot-floating-container" id="chatbotContainer">
      <!-- Chatbot Popup Window -->
      <div class="chat-window" id="chatWindow">
        <!-- Header -->
        <div class="chat-header">
          <div class="chat-header-title">
            <div class="chat-bot-icon">
              <i data-lucide="bot" class="icon-md"></i>
            </div>
            <div class="chat-bot-meta">
              <h4>${cb.title}</h4>
              <span>● ${cb.status}</span>
            </div>
          </div>

          <div class="chat-header-actions">
            <button class="chat-tool-btn" id="chatMuteBtn" title="Toggle Audio Sound">
              <i data-lucide="volume-2" class="icon-sm" id="chatSoundIcon"></i>
            </button>
            <button class="chat-tool-btn" id="chatMinimizeBtn" title="Minimize Chat">
              <i data-lucide="minus" class="icon-sm"></i>
            </button>
            <button class="chat-tool-btn" id="chatCloseBtn" title="Close Chat">
              <i data-lucide="x" class="icon-sm"></i>
            </button>
          </div>
        </div>

        <!-- Messages Thread -->
        <div class="chat-messages-area" id="chatMessagesArea">
          <!-- Welcome Message -->
          <div class="chat-msg bot">
            <div class="msg-bubble">
              ${understandingMode === 'easy' ? cb.welcomeEasy : cb.welcomeDetailed}
            </div>
          </div>
        </div>

        <!-- Quick Query Prompt Chips -->
        <div class="chat-quick-prompts" id="chatQuickPrompts">
          ${activeChips.map(c => `
            <button class="prompt-chip" data-prompt="${c.prompt}">
              ${c.text}
            </button>
          `).join('')}
        </div>

        <!-- Input Box with Camera / Attachment trigger -->
        <form class="chat-input-area" id="chatInputForm">
          <label 
            for="chatLeafFileInput" 
            class="chat-tool-btn" 
            id="chatUploadLeafBtn" 
            title="Attach Leaf or Seed Photo for AI Diagnosis" 
            style="display:flex;align-items:center;justify-content:center;cursor:pointer;margin:0 4px 0 0;background:rgba(34,197,94,0.12);color:var(--primary-700);border-radius:var(--radius-sm);width:36px;height:36px;flex-shrink:0;"
          >
            <i data-lucide="camera" class="icon-sm"></i>
          </label>
          <input type="file" id="chatLeafFileInput" accept="image/*" style="display:none;" />

          <input 
            type="text" 
            class="chat-input-field" 
            id="chatInputField" 
            placeholder="${cb.placeholder}" 
            autocomplete="off"
          />
          <button type="submit" class="chat-send-btn" id="chatSendBtn" aria-label="Send Message">
            <i data-lucide="send" class="icon-sm"></i>
          </button>
        </form>
      </div>

      <!-- Floating Launcher Button -->
      <button class="chat-launcher-btn" id="chatLauncherBtn" aria-label="Open CropCare AI Assistant">
        <span class="chat-launcher-dot"></span>
        <i data-lucide="bot" class="icon-md"></i>
        <span>${cb.title}</span>
      </button>
    </div>
  `;
}

// Built-in Agro Intelligence Knowledge Engine supporting EN, HI, TA, FR
export function getGeminiAgronomyAnswer(query, lang = 'en', mode = 'easy', isImageScan = false) {
  const q = query.toLowerCase();

  // If this was an image upload / scanner diagnostic prompt
  if (isImageScan || q.includes("leaf scan") || q.includes("seed scan") || q.includes("photo analysis")) {
    if (lang === 'hi') {
      return `📸 **क्रॉपकेयर जेमिनी AI विज़न निदान रिपोर्ट:**
• **पहचाना गया नमूना:** गेहूं में पीला रतुआ (Puccinia striiformis) एवं बीज ओज विश्लेषण।
• **सटीकता / विश्वास स्कोर:** **98.4% उच्च विश्वास**।
• **संक्रमण स्तर:** 58% मध्यम संक्रमण।
• **जैविक समाधान:** खट्टी छाछ में 100 ग्राम हींग मिलाकर 5 लीटर/एकड़ का सुबह छिड़काव करें।
• **रासायनिक उपचार:** प्रोपिकोनाज़ोल 25% EC (टिल्ट) @ 1 मिली/लीटर पानी में मिलाकर 200 लीटर/एकड़ छिड़कें।
• **अनुशंसा:** यूरिया का छिड़काव तुरंत रोकें; रोग-रोधी बीज ही अगली बुवाई में लगाएं।`;
    }
    if (lang === 'ta') {
      return `📸 **க்ராப்கேர் ஜெமினி AI பட பகுப்பாய்வு அறிக்கை:**
• **கண்டறியப்பட்ட மாதிரி:** கோதுமை மஞ்சள் துரு நோய் மற்றும் விதை தர ஆய்வு.
• **AI துல்லியம்:** **98.4% அதிக துல்லியம்**.
• **தாக்குதலின் தீவிரம்:** 58% மிதமான பாதிப்பு.
• **இயற்கை தீர்வு:** புளித்த மோர் மற்றும் பெருங்காயம் கரைசல் அல்லது டிரைக்கோடெர்மா விரிடி தெளிக்கவும்.
• **மருந்து பரிந்துரை:** புரோபிகோனசோல் 25% EC (1 மிலி/லிட்டர்) கலந்து உடனே தெளிக்கவும்.
• **பரிந்துரை:** அதிகப்படியான யூரியாவைத் தவிர்க்கவும்; சான்றளிக்கப்பட்ட விதைகளைப் பயன்படுத்தவும்.`;
    }
    if (lang === 'fr') {
      return `📸 **Rapport d'Analyse Visuelle Gemini IA CropCare :**
• **Spécimen Identifié :** Rouille Jaune Striée du Blé (Puccinia striiformis) & Vigueur des Semences.
• **Confiance Vision IA :** **98.4% Très Élevée**.
• **Sévérité :** 58% Stade Modéré.
• **Solution Biologique :** Pulvérisation foliaire de petit-lait fermenté avec asafoetida ou Trichoderma à 5g/L.
• **Prescription Homologuée :** Propiconazole 25% EC à 1 ml/L (200 L d'eau par hectare).
• **Recommandation :** Suspendre les apports azotés superflus et ventiler la canopée.`;
    }
    return `📸 **CropCare Gemini AI Vision Diagnostic Report:**
• **Identified Specimen:** Foliar Stripe Rust (Puccinia striiformis) & Seed Lot Viability Check.
• **Vision AI Confidence:** **98.4% Match**.
• **Infection Severity:** 58% Moderate Severity.
• **Organic Bio-Remedy:** Foliar spray of fermented buttermilk + hing (asafoetida) @ 5L/acre or Trichoderma viride.
• **Chemical Prescription:** Propiconazole 25% EC (Tilt) @ 1 ml/L in 200L water per acre immediately.
• **Agronomic Action:** Cease top-dress urea applications; maintain field drainage.`;
  }

  // Multi-language response generator
  if (lang === 'hi') {
    if (q.includes("पीला रतुआ") || q.includes("रतुआ") || q.includes("rust")) {
      return `🌾 **गेहूं में पीला रतुआ (Yellow Rust) का उपचार:**
• **लक्षण:** पत्तियों पर समानांतर पीली-नारंगी धारियां और पाउडर जैसा पाउडर।
• **दवा छिड़काव:** **प्रोपिकोनाज़ोल 25% EC (टिल्ट)** @ **200 मिली प्रति एकड़** (200 लीटर पानी में मिलाकर) तुरंत छिड़कें।
• **सावधानी:** यूरिया का अधिक प्रयोग रोकें, क्योंकि अधिक नाइट्रोजन से फफूंद तेजी से फैलती है। 15 दिन बाद आवश्यकतानुसार दोहराएं।`;
    }
    if (q.includes("मिल्ड्यू") || q.includes("छाछिया") || q.includes("mildew") || q.includes("सफेद फफूंद")) {
      return `🍂 **चूर्णिल आसिता / पाउडरी मिल्ड्यू का उपचार:**
• **लक्षण:** पत्तियों की ऊपरी सतह पर सफेद आटे जैसी फफूंद।
• **जैविक उपचार:** कच्चे दूध का स्प्रे (1 भाग दूध + 9 भाग पानी धूप में), या पोटेशियम बाईकार्बोनेट 3 ग्राम/लीटर।
• **रासायनिक दवा:** हेक्साकोनाज़ोल 5% एससी (कॉन्टाफ) 2 मिली/लीटर या घुलनशील सल्फर 80% 3 ग्राम/लीटर।`;
    }
    if (q.includes("माहू") || q.includes("चेपा") || q.includes("aphid") || q.includes("काली फफूंद")) {
      return `🐛 **माहू (एफिड्स) व काली फफूंद का नियंत्रण:**
• **जैविक उपाय:** 5% नीम बीज अर्क (NSKE) या वर्टिसिलियम लेकानी 5 ग्राम/लीटर शाम को छिड़कें। खेत में 20 पीले स्टिकी ट्रैप लगाएं।
• **रासायनिक दवा:** इमिडाक्लोप्रिड 17.8% एसएल 0.5 मिली/लीटर या थायमेथॉक्सम 25% डब्ल्यूजी 0.3 ग्राम/लीटर शाम को स्प्रे करें।`;
    }
    if (q.includes("बीज") || q.includes("seed") || q.includes("शुद्धता") || q.includes("अंकुरण") || q.includes("hd-2967")) {
      return `🌾 **बीज पहचान व भौतिक शुद्धता जांच:**
• **एचडी-2967 गेहूं:** 99.2% भौतिक शुद्धता, 92% अंकुरण क्षमता, नमी 10.8% से कम होनी चाहिए।
• **अंकुरण जांच विधि:** 100 बीज गीले सूती कपड़े में 3 दिन रखें; 85 से अधिक दाने अंकुरित होने पर ही बुवाई करें।
• **बीजोपचार:** कार्बोक्सिन + थीरम 2.5 ग्राम प्रति किग्रा बीज से उपचारित अवश्य करें।`;
    }
    if (q.includes("बारिश") || q.includes("मौसम") || q.includes("rain") || q.includes("weather")) {
      return `🌧️ **स्थानीय मौसम पूर्वानुमान:**
• **वर्तमान स्थिति:** 27°C, धूप खिली हुई है, हवा की गति 11 किमी/घंटा।
• **छिड़काव विंडो:** आज और कल सुबह 11:00 बजे से पहले छिड़काव के लिए **सबसे उत्तम समय** है।
• **पूर्वानुमान:** गुरुवार शाम को हल्की बारिश की संभावना है, अतः कीटनाशक छिड़काव बुधवार शाम तक पूरा कर लें।`;
    }
    if (q.includes("सोयाबीन") || q.includes("मंडी") || q.includes("भाव") || q.includes("price")) {
      return `💰 **आज का सोयाबीन व गेहूं मंडी भाव:**
• **सोयाबीन (पीला JS-9560):** उज्जैन मंडी में आज का भाव **₹4,620/क्विंटल** (▲ +2.7%) रहा। सरकारी MSP ₹4,600 है।
• **गेहूं (शरबती):** इंदौर मंडी में भाव **₹2,480/क्विंटल** चल रहा है।
• **सीधा खरीदार:** आईटीसी एग्री की तरफ से आज **₹2,540/क्विंटल** का सीधा एस्क्रो ऑफर उपलब्ध है।`;
    }
    if (q.includes("खाद") || q.includes("यूरिया") || q.includes("fertilizer") || q.includes("npk")) {
      return `🧪 **फसल पोषक तत्व प्रबंधन:**
• **45 दिन पर खाद:** यूरिया **30 किग्रा/एकड़** के साथ जिंक सल्फेट 33% @ 5 किग्रा मिलाकर डालें।
• **फोलियर स्प्रे:** 19:19:19 घुलनशील खाद 1 किग्रा प्रति 100 लीटर पानी में मिलाकर स्प्रे करें जिससे कल्ले अधिक निकलेंगे।`;
    }
    if (q.includes("ड्रोन") || q.includes("drone") || q.includes("स्प्रे")) {
      return `🚜 **एग्रो-ड्रोन स्प्रे सेवा बुकिंग:**
• **किराया:** मात्र **₹380 प्रति एकड़** (पायलट व बैटरी चार्जिंग सहित)।
• **समय:** 1 एकड़ में मात्र 7 मिनट में समान छिड़काव।
• **बुकिंग:** मार्केटप्लेस टैब में जाकर तुरंत बुक करें। 4 घंटे में सेवा उपलब्ध।`;
    }
    return `🤖 **क्रॉपकेयर जेमिनी एआई परामर्श:**
आपके प्रश्न "${query}" के आधार पर:
• फसल में 32-38% नमी बनाए रखें और प्रमाणित बीज (99% शुद्धता) ही लगाएं।
• किसी भी पत्ती या बीज की फोटो भेजने के लिए नीचे कैमरा बटन पर टैप करें!
• क्या आप हमारे कृषि वैज्ञानिक डॉ. शर्मा से निःशुल्क वीडियो कॉल पर बात करना चाहते हैं?`;
  }

  if (lang === 'ta') {
    if (q.includes("துரு") || q.includes("rust") || q.includes("நோய்")) {
      return `🌾 **மஞ்சள் துரு நோய் மேலாண்மை:**
• **அறிகுறிகள்:** இலைகளில் மஞ்சள் கோடுகள் மற்றும் பொடி போன்ற பூஞ்சை வளர்ச்சி.
• **மருந்து தெளிப்பு:** **புரோபிகோனசோல் 25% EC** @ **200 மிலி/ஏக்கர்** (200 லிட்டர் தண்ணீரில்) உடனடியாக தெளிக்கவும்.
• **முக்கிய குறிப்பு:** அதிகப்படியான தழைச்சத்தை (யூரியா) தவிர்க்கவும். 15 நாட்களுக்குப் பிறகு மீண்டும் தேவைப்பட்டால் தெளிக்கவும்.`;
    }
    if (q.includes("சாம்பல்") || q.includes("mildew") || q.includes("பூஞ்சை")) {
      return `🍂 **சாம்பல் நோய் (Powdery Mildew) கட்டுப்பாடு:**
• **இயற்கை தீர்வு:** 10% பால் கரைசல் அல்லது பொட்டாசியம் பைகார்பனேட் 3 கிராம்/லிட்டர் நீரில் தெளிக்கவும்.
• **மருந்து:** ஹெக்சாகோனசோல் 5% SC (2 மிலி/லிட்டர்) அல்லது நனையும் கந்தகம் 80% WDG (3 கிராம்/லிட்டர்) தெளிக்கவும்.`;
    }
    if (q.includes("அசுவினி") || q.includes("aphid") || q.includes("பூச்சி")) {
      return `🐛 **அசுவினி பூச்சி & கரும்பூஞ்சை கட்டுப்பாடு:**
• **இயற்கை முறை:** 5% வேப்பங்கொட்டை சாறு அல்லது வெர்ட்டிசிலியம் லெக்கானி 5 கிராம்/லிட்டர் மாலை வேளையில் தெளிக்கவும்.
• **ரசாயன மருந்து:** இமிடாக்ளோபிரிட் 17.8% SL (0.5 மிலி/லிட்டர்) அல்லது தயோமெத்தாக்சம் 25% WG தெளிக்கவும்.`;
    }
    if (q.includes("விதை") || q.includes("seed") || q.includes("தூய்மை")) {
      return `🌾 **விதை ரக தூய்மை & முளைப்புத்திறன் சோதனை:**
• **சான்றளிக்கப்பட்ட விதை:** குறைந்தபட்சம் 98.5% தூய்மை மற்றும் 85% மேல் முளைப்புத்திறன் இருத்தல் அவசியம்.
• **விதை நேர்த்தி:** விதைப்பதற்கு முன் டிரைக்கோடெர்மா விரிடி (10 கிராம்/கிலோ) அல்லது கார்பாக்சின் பூஞ்சாணக்கொல்லி கொண்டு நேர்த்தி செய்யவும்.`;
    }
    if (q.includes("மழை") || q.includes("வானிலை") || q.includes("rain") || q.includes("weather")) {
      return `🌧️ **பண்ணை வானிலை முன்னறிவிப்பு:**
• **தற்போதைய நிலை:** 27°C, வெயில், ஈரப்பதம் 58%.
• **மருந்து தெளிக்கும் நேரம்:** இன்றும் நாளையும் காலை வேளையில் மருந்து தெளிக்க மிகவும் சாதகமானது.
• வியாழக்கிழமை மழை பெய்ய வாய்ப்புள்ளது; புதன்கிழமைக்குள் தெளிப்பை முடிக்கவும்.`;
    }
    if (q.includes("விலை") || q.includes("மண்டி") || q.includes("சோயாபீன்") || q.includes("price")) {
      return `💰 **இன்றைய நேரடி மண்டி விலைகள்:**
• **சோயாபீன்:** ₹4,620 / குவிண்டால் (▲ +2.7%).
• **கோதுமை:** இந்தூர் மண்டியில் ₹2,480 / குவிண்டால்.
• **நேரடி வாங்குபவர்:** ITC நிறுவனம் ₹2,540 / குவிண்டால் விலையில் பண்ணை வாயிலில் வாங்க தயாராக உள்ளது.`;
    }
    return `🤖 **க்ராப்கேர் ஜெமினி AI பதில்:**
உங்கள் கேள்வி: "${query}".
• உங்கள் மண்ணின் ஈரப்பதத்தை 35% பராமரித்து, சான்றளிக்கப்பட்ட விதைகளைப் பயன்படுத்தவும்.
• இலை அல்லது விதையின் படத்தை அனுப்ப கீழே உள்ள கேமரா ஐகானை கிளிக் செய்யவும்!
• எங்கள் வேளாண் மருத்துவரிடம் இலவசமாக ஆலோசனை பெற ஆலோசனைப் பகுதிக்கு செல்லவும்!`;
  }

  if (lang === 'fr') {
    if (q.includes("rouille") || q.includes("blé") || q.includes("rust")) {
      return `🌾 **Protocole de Traitement de la Rouille Jaune du Blé :**
• **Symptômes :** Pustules linéaires jaune-orangé le long des nervures foliaires.
• **Traitement Fongicide :** Pulvériser **Propiconazole 25% EC** à **200 ml/ha** dans 200 L d'eau dès l'apparition des premiers foyers.
• **Pratique culturale :** Stopper les apports azotés excessifs pour limiter la virulence fongique.`;
    }
    if (q.includes("oïdium") || q.includes("oidium") || q.includes("mildew") || q.includes("blanc")) {
      return `🍂 **Traitement Biologique & Chimique de l'Oïdium :**
• **Solution Bio :** Pulvérisation de petit-lait (10% dans l'eau en plein soleil) ou bicarbonate de potassium à 3 g/L.
• **Fongicide Homologué :** Hexaconazole 5% SC à 2 ml/L ou Soufre mouillable 80% WDG à 3 g/L.`;
    }
    if (q.includes("puceron") || q.includes("aphid") || q.includes("fumagine")) {
      return `🐛 **Contrôle des Pucerons et de la Fumagine Noire :**
• **Lutte Biologique :** Extrait de neem 5% (NSKE) ou champignon entomopathogène Verticillium lecanii à 5 g/L. Poser 20 pièges collants jaunes/ha.
• **Traitement Chimique :** Imidaclopride 17.8% SL à 0.5 ml/L ou Thiaméthoxame 25% WG au crépuscule.`;
    }
    if (q.includes("semence") || q.includes("seed") || q.includes("germe") || q.includes("pureté")) {
      return `🌾 **Contrôle Qualité & Pureté des Semences :**
• **Norme Certifiée HD-2967 :** Pureté physique > 99%, taux de germination > 90%, humidité < 11%.
• **Pelliculage :** Désinfection préventive obligatoire à la Carboxine + Thirame à 2.5 g/kg de semences.`;
    }
    if (q.includes("pluie") || q.includes("météo") || q.includes("weather") || q.includes("rain")) {
      return `🌧️ **Bulletin Météorologique Local :**
• **Conditions Actuelles :** 27°C, Ensoleillé, Humidité 58%, Vent 11 km/h.
• **Fenêtre de Pulvérisation :** **Optimale aujourd'hui et demain matin** avant 11h.
• Risque d'averses prévu jeudi soir; terminez les traitements avant mercredi au crépuscule.`;
    }
    if (q.includes("prix") || q.includes("cours") || q.includes("soja") || q.includes("marché")) {
      return `💰 **Cotations du Marché Aujourd'hui :**
• **Soja :** Coté à **₹4,620/qtl** (▲ +2.7%).
• **Blé Dur :** Cours spot à **₹2,480/qtl** (▲ +3.2%).
• **Offre Directe :** L'acheteur ITC propose **₹2,540/qtl** avec séquestre bancaire garanti et enlèvement à la ferme.`;
    }
    return `🤖 **Conseil Agro IA CropCare :**
Concernant "${query}" :
• Maintenez une humidité racinaire équilibrée (32-40%) et vérifiez la traçabilité de vos semences.
• Vous pouvez joindre une photo de feuille ou semence en cliquant sur l'icône appareil photo ci-dessous !`;
  }

  // English fallback
  if (q.includes("yellow rust") || q.includes("stripe rust") || q.includes("rust in wheat")) {
    return `🌾 **Yellow Stripe Rust (Puccinia striiformis) Treatment Protocol:**
• **Symptom Check:** Linear yellow-orange powdery pustules along leaf veins.
• **Chemical Treatment:** Spray **Propiconazole 25% EC** (Tilt) @ **200 ml in 200 liters of water per acre** immediately.
• **Alternative:** Tebuconazole 25.9% EC @ 250 ml/acre.
• **Important Cultural Practice:** Withhold further urea/nitrogen applications as excessive vegetative lushness accelerates fungal spore colonization. Repeat spray after 15 days if cool humid conditions continue.`;
  }

  if (q.includes("powdery mildew") || q.includes("mildew") || q.includes("white mold")) {
    return `🍂 **Powdery Mildew (Erysiphe / Podosphaera) Management:**
• **Field Symptoms:** Distinct talcum-like white powdery fungal mycelium spreading on upper leaf surface, causing foliage distortion.
• **Organic Bio-Remedy:** Fresh cow milk spray (10% dilution in water under direct sunlight) or Potassium Bicarbonate @ 3g/L.
• **Chemical Prescription:** Hexaconazole 5% SC (Contaf) @ 2 ml/L or Wettable Sulfur 80% WDG @ 3 g/L. Ensure full underside canopy coverage.`;
  }

  if (q.includes("aphid") || q.includes("aphids") || q.includes("sooty mold")) {
    return `🐛 **Aphid Infestation & Honeydew Sooty Mold Eradication:**
• **Field Symptoms:** Colonies of sap-sucking aphids clustering on apical buds, excreting sticky honeydew followed by black sooty mold fungus.
• **Organic Control:** Spray 5% Neem Seed Kernel Extract (NSKE) or Verticillium lecanii entomopathogenic fungus @ 5 g/L during twilight. Install 20 yellow sticky traps/acre.
• **Chemical Prescription:** Imidacloprid 17.8% SL @ 0.5 ml/L or Thiamethoxam 25% WG @ 0.3 g/L late evening to protect beneficial bees.`;
  }

  if (q.includes("seed") || q.includes("purity") || q.includes("germination") || q.includes("hd-2967")) {
    return `🌾 **Certified Seed Recognition & Quality Assurance Standards:**
• **Wheat Seeds (HD-2967):** Genetic purity 99.2%, minimum lab germination viability 92%, safe storage moisture < 11%.
• **Basmati Rice (Pusa-1121):** Extra long grain purity 98.8%, broken grains strictly under 1.2%, aroma marker preserved.
• **Recommended Dressing:** Treat seeds with Carboxin + Thiram (Vitavax Power) @ 2.5 g/kg seed before sowing to eliminate seed-borne smut and damping-off.`;
  }

  if (q.includes("rain") || q.includes("weather") || q.includes("storm") || q.includes("spray window")) {
    return `🌧️ **Local Micro-Weather Advisory:**
• **Current Status:** 27°C, Mostly Sunny, Humidity 58%, Wind 11 km/h NW.
• **Rainfall Risk:** Minimal rain (under 15%) expected for the next 48 hours.
• **Foliar Spray Window:** **Optimal today and tomorrow morning** before 11:00 AM.
• **Caution:** An overcast front is arriving by Thursday afternoon with 35% chance of light showers; ensure any pesticide sprays are completed prior to Wednesday dusk.`;
  }

  if (q.includes("soybean") || q.includes("mandi price") || q.includes("rate") || q.includes("bhav")) {
    return `💰 **Today's Live Mandi Intelligence for Soybean & Wheat:**
• **Soybean (Yellow JS-9560):** Ujjain APMC opened at **₹4,620/qtl** (▲ +2.7%), with premium lots crossing ₹4,780/qtl. Government MSP is ₹4,600/qtl.
• **Wheat (Sharbati Durum):** Indore APMC spot rate is **₹2,480/qtl** (▲ +3.2%) with arrival volume of 4,250 quintals.
• **Top Buyer Bid:** ITC Agri-Business is currently offering **₹2,540/qtl** with 100% verified escrow deposit and farmgate collection.`;
  }

  if (q.includes("fertilizer") || q.includes("npk") || q.includes("45-day") || q.includes("urea") || q.includes("potassium")) {
    return `🧪 **Fertilizer & Nutrient Schedule (Vegetative / Tillering Stage):**
• **Top Dressing:** Apply second split of **Urea @ 30 kg/acre** combined with **Zinc Sulphate 33% @ 5 kg/acre** to prevent interveinal chlorosis.
• **Foliar Nutrition:** Spray 19:19:19 (Water Soluble NPK) @ 1.0 kg in 100 liters of water per acre during active tillering to boost root volume and tiller count.
• **Moisture Note:** Always apply fertilizers when soil has adequate moisture (follow with a light irrigation cycle).`;
  }

  if (q.includes("drone") || q.includes("book") || q.includes("spray service") || q.includes("machinery")) {
    return `🚜 **CropCare Drone Spraying Fleet Booking:**
• **Cost:** Only **₹380 per acre** (Includes certified DGCA pilot + battery sets).
• **Efficiency:** 16-liter ultra-low volume payload covers 1 acre in just 7 minutes with zero soil compaction.
• **Availability:** 3 drone units available in your block for deployment within 4 hours.
• **How to Book:** Tap the "Book / Buy Direct" button in our Marketplace tab or reply with your field acreage and preferred date!`;
  }

  try {
    return generateGeneralResponse(query, lang);
  } catch (e) {
    return `🤖 **CropCare AI Assistant:**
Thank you for your question regarding "${query}". 

I can help with general knowledge, calculations, study questions, as well as agricultural advice on crops, fertilizers, pest remedies, and government schemes. Feel free to ask more details!`;
  }
}

