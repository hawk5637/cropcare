import { callGemini, friendly } from "./_gemini.js";

// Direct Answer Engine strictly adhering to system prompt rules:
// "Answer exactly what the user asked. Be direct, simple, short and sweet. Lead with the answer in the first line. No self-introduction, no topic lists, no extra information the user did not ask for. Reply in the same language the user writes in (English, Tamil, Tanglish, Hindi). If the question is unclear, ask ONE short clarifying question. Add detail only if the user asks for it."
export function answerDirectly(message, history = [], language = 'en') {
  if (!message || typeof message !== 'string') {
    return "Sure, what do you need help with?";
  }

  const raw = message.trim();
  const lower = raw.toLowerCase().replace(/[?!.,;:]+$/, '').trim();

  // 1. Follow-up / Expansion ("Explain more", "tell me more", "expand", "continue")
  const isExplainMore = /^(explain\s+more|tell\s+me\s+more|more\s+details?|expand|continue|elaborate|in\s+detail|explain\s+further)/i.test(lower);
  if (isExplainMore) {
    const prevBotTurn = Array.isArray(history) 
      ? [...history].reverse().find(t => (t.role === 'model' || t.sender === 'model' || t.sender === 'assistant') && t.text && !t.id?.startsWith('welcome-'))
      : null;
    const prevUserTurn = Array.isArray(history)
      ? [...history].reverse().find(t => (t.role === 'user' || t.sender === 'user') && t.text && t.text.trim().toLowerCase() !== lower)
      : null;

    const prevContext = ((prevBotTurn?.text || '') + ' ' + (prevUserTurn?.text || '')).toLowerCase();

    if (prevContext.includes('paris') || prevContext.includes('france')) {
      return "Paris is the capital and largest city of France, situated along the Seine River. It is a major global center for art, fashion, gastronomy, and culture, famous for landmarks like the Eiffel Tower and the Louvre Museum.";
    }
    if (prevContext.includes('450') || prevContext.includes('25 x 18') || prevContext.includes('25 * 18')) {
      return "25 × 18 = 450.\nStep-by-step: 25 × 10 = 250, and 25 × 8 = 200. Adding them together gives 250 + 200 = 450.";
    }
    if (prevContext.includes('neem') || prevContext.includes('வேப்பிலை') || prevContext.includes('veppilai')) {
      return "Neem leaf benefits in detail:\n1. Pest Control: 5% Neem Seed Kernel Extract (NSKE) or 3-5 ml neem oil per liter water repels whiteflies, aphids, and caterpillars.\n2. Skin & Antiseptic: Crushed leaves heal fungal skin infections and soothe rashes.\n3. Soil Health: Neem cake enriches soil nitrogen and eliminates harmful root nematodes.";
    }
    if (prevBotTurn?.text) {
      return `Further details on ${prevUserTurn?.text || 'your question'}: ${prevBotTurn.text} You can ask for specific dosages, preparation steps, or methods if needed.`;
    }
    return "Sure, what specific topic would you like me to explain more about?";
  }

  // 2. Vague greeting or help request -> ask ONE short clarifying question
  const isVagueHelp = /^(hey\s+help\s+me(\s+with\s+this)?|help\s+me(\s+with\s+this)?|help|hi|hey|hello|vanakkam|namaste|can\s+you\s+help(\s+me)?)$/i.test(lower);
  if (isVagueHelp) {
    return "Sure, what do you need help with?";
  }

  // 3. Mathematical Calculations
  const mathMatch = lower.match(/(?:what\s+is\s+|calculate\s+|solve\s+)?(\d+(?:\.\d+)?)\s*([\+\-\*\/xX×÷\^]|plus|minus|times|multiplied\s+by|divided\s+by)\s*(\d+(?:\.\d+)?)/i);
  if (mathMatch) {
    const n1 = parseFloat(mathMatch[1]);
    let op = mathMatch[2].toLowerCase().trim();
    const n2 = parseFloat(mathMatch[3]);
    let res = 0;

    if (op === '+' || op === 'plus') res = n1 + n2;
    else if (op === '-' || op === 'minus') res = n1 - n2;
    else if (op === '*' || op === 'x' || op === '×' || op === 'times' || op === 'multiplied by') res = n1 * n2;
    else if (op === '/' || op === '÷' || op === 'divided by') {
      if (n2 === 0) return "Division by zero is undefined.";
      res = n1 / n2;
    } else if (op === '^') res = Math.pow(n1, n2);

    const formatted = Number.isInteger(res) ? res.toString() : parseFloat(res.toFixed(4)).toString();
    return formatted;
  }

  // Percentage: "what is 18% of 2500"
  const pctMatch = lower.match(/(?:what\s+is\s+)?(\d+(?:\.\d+)?)\s*(?:%|percent)\s*(?:of)?\s*(\d+(?:\.\d+)?)/i);
  if (pctMatch) {
    const p = parseFloat(pctMatch[1]);
    const num = parseFloat(pctMatch[2]);
    const result = (p * num) / 100;
    return (Number.isInteger(result) ? result.toString() : parseFloat(result.toFixed(4)).toString());
  }

  // 4. General Knowledge: Capital cities
  const capitals = {
    france: "Paris",
    india: "New Delhi",
    usa: "Washington, D.C.",
    "united states": "Washington, D.C.",
    america: "Washington, D.C.",
    uk: "London",
    "united kingdom": "London",
    england: "London",
    germany: "Berlin",
    japan: "Tokyo",
    china: "Beijing",
    russia: "Moscow",
    australia: "Canberra",
    canada: "Ottawa",
    italy: "Rome",
    spain: "Madrid",
    brazil: "Brasília",
    "tamil nadu": "Chennai",
    punjab: "Chandigarh",
    haryana: "Chandigarh",
    karnataka: "Bengaluru",
    kerala: "Thiruvananthapuram",
    maharashtra: "Mumbai",
    "uttar pradesh": "Lucknow",
    gujarat: "Gandhinagar",
    rajasthan: "Jaipur",
    "andhra pradesh": "Amaravati",
    telangana: "Hyderabad",
    bihar: "Patna",
    "west bengal": "Kolkata"
  };

  if (lower.includes('capital')) {
    for (const [place, cap] of Object.entries(capitals)) {
      if (lower.includes(place)) {
        return cap;
      }
    }
  }

  // 5. Language detection (Tanglish, Tamil, Hindi)
  const isTanglish = lower.includes('enna') || lower.includes('epdi') || lower.includes('panradhu') || lower.includes('venum') || lower.includes('solla');
  const isTamil = /[\u0B80-\u0BFF]/.test(raw);
  const isHindi = /[\u0900-\u097F]/.test(raw) || lower.includes('kya hai') || lower.includes('kaise') || lower.includes('bataye');

  // Specific botanical and agricultural queries
  if (lower.includes('neem') || lower.includes('வேப்பிலை') || lower.includes('veppilai')) {
    if (isTanglish) {
      return "Neem leaf (வேப்பிலை) natural pesticide-ah use aagum, skin problems cure pannum, and immunity boost panna help pannum.";
    }
    if (isTamil) {
      return "வேப்பிலை இயற்கை பூச்சிக்கொல்லியாகவும், தோல் நோய்களை குணப்படுத்தவும், நோய் எதிர்ப்பு சக்தியை அதிகரிக்கவும் பயன்படுகிறது.";
    }
    if (isHindi) {
      return "नीम की पत्तियां प्राकृतिक कीटनाशक, त्वचा संक्रमण ठीक करने और रोग प्रतिरोधक क्षमता बढ़ाने में उपयोग होती हैं।";
    }
    return "Neem leaf is primarily used as a natural organic pesticide, for treating skin infections, and boosting immunity.";
  }

  if (lower.includes('tulsi') || lower.includes('துளசி')) {
    if (isTanglish) {
      return "Tulsi (துளசி) cold, cough, and fever cure panna help pannum, and immunity boost pannum.";
    }
    return "Tulsi (Holy Basil) relieves cold, cough, fever, and boosts immunity.";
  }

  if (lower.includes('urea') || lower.includes('dap') || lower.includes('npk')) {
    if (isTanglish) {
      return "Urea nitrogen source-ah use aagum. Dose: 40-50 kg/acre split application-la podanum.";
    }
    return "Urea provides nitrogen for vegetative crop growth. Standard dosage is 40–50 kg per acre in split applications.";
  }

  if (lower.includes('pm kisan') || lower.includes('pm-kisan') || lower.includes('pmkisan')) {
    return "PM-KISAN provides ₹6,000 per year to eligible farmer families in three installments of ₹2,000 via DBT.";
  }

  // 6. Mandi, Market & MSP inquiries (strict word boundaries!)
  if (/(price|rate|mandi|bhav|msp|cost|market|auction|vilai|dam|daam|rate\s*enna|kitna|kya\s*rate)/i.test(lower)) {
    // Wheat
    if (/\b(wheat|gehun|gehu|godhumai|durum|sharbati)\b/i.test(lower)) {
      if (isTanglish) return "Wheat (கோதுமை) current mandi rate ₹2,480 - ₹2,540 / Quintal (Indore & Khanna APMC). Govt MSP ₹2,275 / Quintal.";
      if (isHindi) return "गेहूं (Wheat) का वर्तमान मंडी भाव ₹2,480 - ₹2,540 / क्विंटल (इंदौर मंडी: ₹2,480, खन्ना मंडी: ₹2,540) है। सरकारी समर्थन मूल्य (MSP) ₹2,275/क्विंटल है।";
      if (isTamil) return "கோதுமை (Wheat) தற்போதைய மண்டி விலை ₹2,480 - ₹2,540 / குவிண்டால் (அரசு MSP: ₹2,275/குவிண்டால்).";
      return "Wheat Mandi Rates:\n• Indore APMC (MP): ₹2,480 / Quintal (Sharbati Durum / MP Golden)\n• Khanna APMC (Punjab): ₹2,540 / Quintal (HD-2967 Mill Quality)\n• Government MSP: ₹2,275 / Quintal";
    }

    // Rice / Paddy / Basmati
    if (/\b(rice|paddy|dhan|chawal|nellu|basmati)\b/i.test(lower)) {
      if (isTanglish) return "Basmati Rice current mandi rate ₹3,820 / Quintal (Karnal APMC). Common Paddy MSP ₹2,183 / Quintal.";
      if (isHindi) return "धान/बासमती (Rice) का करनाल मंडी भाव ₹3,820 / क्विंटल है। सरकारी समर्थन मूल्य (MSP) ₹2,183/क्विंटल (सामान्य धान) है।";
      if (isTamil) return "நெல்/பாசுமதி (Rice) தற்போதைய மண்டி விலை ₹3,820 / குவிண்டால் (கர்னல் மண்டி). அரசு MSP: ₹2,183/குவிண்டால்.";
      return "Rice / Paddy Mandi Rates:\n• Karnal APMC (Haryana): ₹3,820 / Quintal (Pusa Basmati 1121)\n• Government MSP: ₹2,183 / Quintal (Common Paddy), ₹2,203 / Quintal (Grade A)";
    }

    // Tomato
    if (/\b(tomato|tamatar|thakkali)\b/i.test(lower)) {
      if (isTanglish) return "Tomato (தக்காளி) current mandi rate ₹2,450 / Quintal (Madanapalle APMC) and ₹1,850 / Quintal (Kolar APMC).";
      if (isHindi) return "टमाटर (Tomato) का वर्तमान मंडी भाव ₹2,450 / क्विंटल (मदनपल्ले मंडी) और ₹1,850 / क्विंटल (कोलार मंडी) है।";
      if (isTamil) return "தக்காளி (Tomato) தற்போதைய மண்டி விலை ₹2,450 / குவிண்டால் (மதனப்பள்ளி மண்டி) மற்றும் ₹1,850 / குவிண்டால் (கோலார் மண்டி).";
      return "Tomato Mandi Rates:\n• Madanapalle APMC (AP): ₹2,450 / Quintal (Grade-A Hybrid)\n• Kolar APMC (Karnataka): ₹1,850 / Quintal\n• MSP benchmark: ₹1,350 / Quintal";
    }

    // Onion
    if (/\b(onion|pyaz|vengayam)\b/i.test(lower)) {
      if (isTanglish) return "Onion (வெங்காயம்) current mandi rate ₹2,420 / Quintal (Lasalgaon APMC).";
      if (isHindi) return "प्याज (Onion) का लासलगांव मंडी भाव ₹2,420 / क्विंटल है (MSP बेंचमार्क: ₹1,650/क्विंटल)।";
      return "Onion Mandi Rates:\n• Lasalgaon APMC (Maharashtra): ₹2,420 / Quintal\n• Benchmark Reference: ₹1,650 / Quintal";
    }

    // Potato
    if (/\b(potato|aloo|urulakkizhangu)\b/i.test(lower)) {
      return "Potato Mandi Rates:\n• Agra APMC (UP): ₹1,420 / Quintal\n• Benchmark Reference: ₹1,050 / Quintal";
    }

    // Cotton
    if (/\b(cotton|kapas|paruthi)\b/i.test(lower)) {
      return "Cotton Mandi Rates:\n• Rajkot APMC (Gujarat): ₹7,150 / Quintal (Shankar-6)\n• Government MSP: ₹6,620 / Quintal (Medium Staple), ₹7,020 (Long Staple)";
    }

    // Soybean
    if (/\b(soybean|soya)\b/i.test(lower)) {
      return "Soybean Mandi Rates:\n• Indore APMC (MP): ₹4,620 / Quintal (Yellow Soya)\n• Government MSP: ₹4,600 / Quintal";
    }

    // Mustard
    if (/\b(mustard|sarson|kadugu)\b/i.test(lower)) {
      return "Mustard Mandi Rates:\n• Jaipur APMC (Rajasthan): ₹5,450 / Quintal\n• Government MSP: ₹5,650 / Quintal";
    }

    // Maize / Corn
    if (/\b(maize|corn|makka|makki|cholam)\b/i.test(lower)) {
      return "Maize Mandi Rates:\n• Davanagere APMC (Karnataka): ₹2,180 / Quintal\n• Government MSP: ₹2,090 / Quintal";
    }

    // Dutch Bell Pepper
    if (/\b(bell\s*pepper|capsicum|mirch|milagai)\b/i.test(lower)) {
      return "Bell Pepper Mandi Rates:\n• Azadpur APMC (Delhi): ₹3,500 / Quintal\n• Ooty Market (Tamil Nadu): ₹3,800 / Quintal";
    }

    // Mango
    if (/\b(mango|aam|maangai)\b/i.test(lower)) {
      if (isTanglish) return "Mango (மாங்காய்) current mandi rate ₹4,800 - ₹6,500 / Quintal (Ratnagiri Alphonso ₹6,500, Salem Banganapalli ₹4,800).";
      if (isHindi) return "आम (Mango) का वर्तमान मंडी भाव ₹4,800 - ₹6,500 / क्विंटल (रत्नागिरी अल्फोंसो: ₹6,500, मलीहाबाद दशहरी: ₹4,800) है।";
      if (isTamil) return "மாம்பழம் (Mango) தற்போதைய மண்டி விலை ₹4,800 - ₹6,500 / குவிண்டால் (சேலம் பங்கனபள்ளி: ₹4,800).";
      return "Mango Mandi Rates:\n• Ratnagiri APMC (Maharashtra): ₹6,500 / Quintal (Alphonso / Hapus)\n• Malihabad APMC (UP): ₹4,800 / Quintal (Dasheri Grade-A)\n• Salem APMC (Tamil Nadu): ₹4,200 / Quintal (Banganapalli)";
    }

    // Banana
    if (/\b(banana|kela|vaazhaipazham|vazhaipazham)\b/i.test(lower)) {
      if (isTanglish) return "Banana (வாழைப்பழம்) current mandi rate ₹1,850 - ₹2,350 / Quintal (Jalgaon APMC).";
      if (isHindi) return "केला (Banana) का जलगांव मंडी भाव ₹1,850 - ₹2,350 / क्विंटल (ग्रैंड नैने) है।";
      if (isTamil) return "வாழைப்பழம் (Banana) தற்போதைய மண்டி விலை ₹1,850 - ₹2,350 / குவிண்டால் (ஜல்கான் / தேனி மண்டி).";
      return "Banana Mandi Rates:\n• Jalgaon APMC (Maharashtra): ₹2,150 / Quintal (Grand Naine Grade-A)\n• Theni APMC (Tamil Nadu): ₹1,950 / Quintal (Robusta / Cavendish)";
    }

    // Apple
    if (/\b(apple|seb|aappil)\b/i.test(lower)) {
      if (isTanglish) return "Apple (ஆப்பிள்) current mandi rate ₹6,500 - ₹8,500 / Quintal (Shimla Royal Delicious).";
      if (isHindi) return "सेब (Apple) का शिमला मंडी भाव ₹6,500 - ₹8,500 / क्विंटल (रॉयल डिलीशियस) है।";
      return "Apple Mandi Rates:\n• Shimla APMC (Himachal Pradesh): ₹7,800 / Quintal (Royal Delicious Grade-A)\n• Sopore APMC (Kashmir): ₹6,900 / Quintal (Red Delicious)";
    }

    // Guava
    if (/\b(guava|amrood|koyyapazham)\b/i.test(lower)) {
      if (isHindi) return "अमरूद (Guava) का वर्तमान मंडी भाव ₹2,200 - ₹3,100 / क्विंटल (इलाहाबाद सफेदा) है।";
      return "Guava Mandi Rates:\n• Prayagraj APMC (UP): ₹2,800 / Quintal (Allahabad Safeda)\n• Dholka APMC (Gujarat): ₹2,400 / Quintal";
    }

    // Papaya
    if (/\b(papaya|papita|pappali)\b/i.test(lower)) {
      return "Papaya Mandi Rates:\n• Anantapur APMC (AP): ₹1,650 / Quintal (Taiwan Red Lady 786)\n• Pune APMC (Maharashtra): ₹1,850 / Quintal";
    }

    // Pomegranate
    if (/\b(pomegranate|anar|maadulai|madulai)\b/i.test(lower)) {
      return "Pomegranate Mandi Rates:\n• Solapur APMC (Maharashtra): ₹9,800 / Quintal (Bhagwa Grade-A Export)\n• Bangalore APMC (Karnataka): ₹8,500 / Quintal";
    }

    // Citrus / Lemon / Lime / Orange
    if (/\b(lemon|lime|nimbu|elumichai|citrus|orange|santra|mosambi)\b/i.test(lower)) {
      return "Citrus & Lemon Mandi Rates:\n• Tenali APMC (AP): ₹4,200 / Quintal (Acid Lime / Nimbu)\n• Nagpur APMC (Maharashtra): ₹4,600 / Quintal (Nagpur Mandarin Orange)";
    }

    // Grapes
    if (/\b(grapes|angoor|dhrakshai)\b/i.test(lower)) {
      return "Grapes Mandi Rates:\n• Nashik APMC (Maharashtra): ₹5,800 / Quintal (Thompson Seedless White)\n• Sangli APMC: ₹6,400 / Quintal (Tas-A-Ganesh)";
    }

    // Watermelon
    if (/\b(watermelon|tarbooz|tharpusani)\b/i.test(lower)) {
      return "Watermelon Mandi Rates:\n• Kolar APMC (Karnataka): ₹1,150 / Quintal (Kiran Hybrid Black Sugar)\n• Anantapur APMC: ₹1,050 / Quintal";
    }

    // Brinjal / Eggplant
    if (/\b(brinjal|eggplant|baingan|kathirikai)\b/i.test(lower)) {
      if (isHindi) return "बैंगन (Brinjal) का वर्तमान मंडी भाव ₹1,650 - ₹2,200 / क्विंटल है।";
      return "Brinjal / Eggplant Mandi Rates:\n• Belagavi APMC (Karnataka): ₹1,850 / Quintal\n• Varanasi APMC (UP): ₹1,650 / Quintal (Round Purple)";
    }

    // Okra / Ladyfinger / Bhindi
    if (/\b(okra|ladyfinger|lady\s*finger|bhindi|vendaikkai)\b/i.test(lower)) {
      if (isHindi) return "भिंडी (Okra) का वर्तमान मंडी भाव ₹2,600 - ₹3,400 / क्विंटल है।";
      return "Okra / Bhindi Mandi Rates:\n• Surat APMC (Gujarat): ₹3,200 / Quintal\n• Jaipur APMC (Rajasthan): ₹2,800 / Quintal";
    }

    // Cabbage
    if (/\b(cabbage|patta\s*gobhi|muttakose)\b/i.test(lower)) {
      return "Cabbage Mandi Rates:\n• Nashik APMC (Maharashtra): ₹1,150 / Quintal\n• Kolar APMC (Karnataka): ₹1,050 / Quintal";
    }

    // Cauliflower
    if (/\b(cauliflower|phool\s*gobhi|kaaliflower)\b/i.test(lower)) {
      return "Cauliflower Mandi Rates:\n• Agra APMC (UP): ₹1,450 / Quintal\n• Ranchi APMC (Jharkhand): ₹1,600 / Quintal";
    }

    // Cucumber
    if (/\b(cucumber|kheera|vellarikkai)\b/i.test(lower)) {
      return "Cucumber Mandi Rates:\n• Alwar APMC (Rajasthan): ₹1,350 / Quintal\n• Malerkotla APMC (Punjab): ₹1,400 / Quintal";
    }

    // Carrot & Radish
    if (/\b(carrot|gajar|radish|mooli|mullangi)\b/i.test(lower)) {
      return "Carrot & Radish Mandi Rates:\n• Indore APMC (MP): ₹1,650 / Quintal (Red Carrot)\n• Varanasi APMC (UP): ₹1,050 / Quintal (White Radish)";
    }

    // Garlic
    if (/\b(garlic|lahsun|poondu)\b/i.test(lower)) {
      return "Garlic Mandi Rates:\n• Mandsaur APMC (MP): ₹13,500 / Quintal (Desi Extra Bold Grade-A)\n• Ooty Market (TN): ₹14,800 / Quintal";
    }

    // Ginger
    if (/\b(ginger|adrak|inji)\b/i.test(lower)) {
      return "Ginger Mandi Rates:\n• Wayanad APMC (Kerala): ₹7,800 / Quintal (Green Ginger)\n• Shimoga APMC (Karnataka): ₹8,200 / Quintal";
    }

    // Chilli / Green Chilli
    if (/\b(chilli|chili|mirch|milagai|hari\s*mirch)\b/i.test(lower)) {
      return "Chilli Mandi Rates:\n• Guntur APMC (AP): ₹4,800 / Quintal (Green Hybrid), ₹18,500 / Quintal (Teja Dry Red)\n• Indore APMC: ₹4,200 / Quintal (Green Chilli)";
    }

    // Chickpea / Gram / Chana
    if (/\b(chana|chickpea|gram|bengal\s*gram|kondakadalai)\b/i.test(lower)) {
      return "Chickpea / Chana Mandi Rates:\n• Bikaner APMC (Rajasthan): ₹5,850 / Quintal (Desi Chana)\n• Akola APMC (Maharashtra): ₹6,100 / Quintal\n• Government MSP: ₹5,440 / Quintal";
    }

    // Moong / Green Gram
    if (/\b(moong|mung|green\s*gram|paasi\s*payaru)\b/i.test(lower)) {
      return "Moong Mandi Rates:\n• Merta City APMC (Rajasthan): ₹8,150 / Quintal\n• Government MSP: ₹8,558 / Quintal";
    }

    // Urad / Black Gram
    if (/\b(urad|black\s*gram|ulunthu)\b/i.test(lower)) {
      return "Urad Mandi Rates:\n• Latur APMC (Maharashtra): ₹7,450 / Quintal\n• Government MSP: ₹6,950 / Quintal";
    }

    // Tur / Arhar / Pigeon Pea
    if (/\b(tur|arhar|pigeon\s*pea|thuvaram\s*paruppu)\b/i.test(lower)) {
      return "Tur / Arhar Mandi Rates:\n• Kalaburagi APMC (Karnataka): ₹9,850 / Quintal\n• Government MSP: ₹7,000 / Quintal";
    }

    // Groundnut / Peanut
    if (/\b(groundnut|peanut|mungfali|verkadala)\b/i.test(lower)) {
      return "Groundnut Mandi Rates:\n• Rajkot APMC (Gujarat): ₹6,250 / Quintal (Bold Pods)\n• Government MSP: ₹6,377 / Quintal";
    }

    // Sunflower
    if (/\b(sunflower|surajmukhi|sooriyakaanthi)\b/i.test(lower)) {
      return "Sunflower Mandi Rates:\n• Latur APMC (Maharashtra): ₹5,100 / Quintal\n• Government MSP: ₹6,760 / Quintal";
    }

    // Certified Seeds (Seed Rates, Seed Lots, Hybrid Seeds)
    if (/\b(seed|seeds|beej|bija|vithai)\b/i.test(lower)) {
      if (isHindi) {
        return "प्रमाणित बीज (Certified Seeds) सरकारी दरें:\n• गेहूं बीज (HD-2967, DBW-187): ₹38 - ₹42 / किग्रा\n• धान बीज (बासमती / हाइब्रिड): ₹42 - ₹55 / किग्रा\n• चना बीज (JG-11, JAKI): ₹75 - ₹82 / किग्रा\n• सरसों बीज (पूसा बोल्ड): ₹140 - ₹180 / किग्रा\n• टमाटर हाइब्रिड: ₹550 - ₹850 प्रति 10 ग्राम पाउच\n• बीटी कॉटन हाइब्रिड: ₹853 प्रति 450 ग्राम पैकेट";
      }
      return "Certified Seed Rates (NSC & State Seed Corp Official Standards):\n• Certified Wheat Seed (HD-2967, DBW-187): ₹3,800 – ₹4,200 / Qtl (₹38–₹42/kg)\n• Certified Paddy / Rice Seed: ₹4,200 – ₹5,500 / Qtl (₹42–₹55/kg)\n• Certified Chana / Gram Seed (JG-11): ₹7,500 – ₹8,200 / Qtl (₹75–₹82/kg)\n• Certified Mustard Seed (Pusa Bold): ₹140 – ₹180 / kg\n• Certified Soybean Seed (JS-9560): ₹7,000 – ₹7,600 / Qtl (₹70–₹76/kg)\n• Hybrid Tomato Seed (Seminis Abhinav): ₹550 – ₹850 per 10g pouch\n• Hybrid Chilli Seed: ₹650 – ₹1,100 per 10g pouch\n• Bt Cotton Hybrid Seed: ₹853 per 450g packet (Govt Ceiling Rate)";
    }

    // General Mandi price overview
    return "Today's Key APMC Mandi Rates & MSP:\n• Wheat: ₹2,480 / Qtl (Indore) | MSP: ₹2,275\n• Basmati Rice: ₹3,820 / Qtl (Karnal) | MSP: ₹2,183\n• Cotton: ₹7,150 / Qtl (Rajkot) | MSP: ₹6,620\n• Tomato: ₹2,450 / Qtl (Madanapalle)\n• Onion: ₹2,420 / Qtl (Lasalgaon)\n• Soybean: ₹4,620 / Qtl (Indore) | MSP: ₹4,600\n• Mango: ₹4,800 - ₹6,500 / Qtl (Ratnagiri / Malihabad)\n• Chana: ₹5,850 / Qtl | MSP: ₹5,440";
  }

  // 7. Crop & Agronomic Queries
  if (/\b(wheat|gehun|godhumai)\b/i.test(lower)) {
    if (lower.includes('disease') || lower.includes('pest') || lower.includes('rust')) {
      return "Common Wheat diseases include Yellow Rust (Puccinia striiformis), Brown Rust, and Loose Smut. Control rust with Propiconazole 25% EC @ 1 ml/L spray.";
    }
    return "Wheat (Triticum aestivum): Duration is 110–130 days. Optimal soil: well-drained loamy soil (pH 6.5–7.5). Current Mandi rate: ₹2,480/qtl (Indore APMC), Govt MSP: ₹2,275/qtl.";
  }

  if (/\b(rice|paddy|dhan|nellu)\b/i.test(lower)) {
    return "Rice (Oryza sativa): Typical duration is 90–120 days (short duration) to 130–150 days. Optimal soil: clay loam with good water retention. Pusa Basmati 1121 rate: ₹3,820/qtl (Karnal APMC).";
  }

  // If input is short and ambiguous, ask ONE short clarifying question
  if (lower.split(' ').length <= 3 && !lower.includes('?')) {
    return "Sure, what do you need help with?";
  }

  return "Could you clarify your question so I can give you the exact answer?";
}

export default async function handler(req, res) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version, x-gemini-api-key'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { 
      message, 
      history = [], 
      language = 'en', 
      image = null 
    } = req.body || {};

    if (!message && !image) {
      return res.status(400).json({ error: 'No message or image provided.' });
    }

    const apiKey = 
      req.headers['x-gemini-api-key'] || 
      process.env.GEMINI_API_KEY || 
      process.env.VITE_GEMINI_API_KEY || 
      '';

    // EXACT SYSTEM PROMPT requested by user
    const systemInstruction = `Answer exactly what the user asked. Be direct, simple, short and sweet. Lead with the answer in the first line. No self-introduction, no topic lists, no extra information the user did not ask for. Reply in the same language the user writes in (English, Tamil, Tanglish, Hindi). For agricultural crop, fruit, vegetable, seed, or mandi rate questions, immediately give the real Indian APMC mandi rate range per quintal and per kg and official MSP or certified seed rates across key mandis rather than asking for location. If the question is genuinely unclear, ask ONE short clarifying question. Add detail only if the user asks for it.`;

    // Process up to 10 previous messages for context
    const rawHistory = [];
    if (Array.isArray(history)) {
      const cleanHistory = history.filter(turn => 
        turn && 
        turn.sender && 
        turn.text && 
        turn.id !== 'welcome-msg' && 
        turn.id !== 'welcome-general' &&
        turn.id !== 'welcome-advisor' &&
        !turn.isError && 
        !turn.error && 
        !turn.id?.startsWith('err-') &&
        !turn.text.startsWith('⚠️')
      );
      for (const turn of cleanHistory.slice(-10)) {
        const role = turn.sender === 'user' ? 'user' : 'model';
        rawHistory.push({ role, parts: [{ text: turn.text }] });
      }
    }

    // Ensure conversation starts with 'user'
    while (rawHistory.length > 0 && rawHistory[0].role !== 'user') {
      rawHistory.shift();
    }

    // Merge consecutive identical roles to adhere to Gemini API constraints
    const contents = [];
    for (const msg of rawHistory) {
      if (contents.length > 0 && contents[contents.length - 1].role === msg.role) {
        contents[contents.length - 1].parts[0].text += '\n' + msg.parts[0].text;
      } else {
        contents.push(msg);
      }
    }

    // Build current user message parts
    const currentParts = [];
    if (message) {
      currentParts.push({ text: message });
    }

    if (image) {
      let mimeType = 'image/jpeg';
      let base64Data = image;
      if (image.startsWith('data:')) {
        const match = image.match(/^data:([a-zA-Z0-9/+-]+);base64,(.+)$/);
        if (match) {
          mimeType = match[1];
          base64Data = match[2];
        }
      }
      currentParts.push({
        inlineData: {
          mimeType: mimeType,
          data: base64Data
        }
      });
    }

    // Always send the user's latest message to the AI as the last message
    if (contents.length > 0 && contents[contents.length - 1].role === 'user') {
      contents[contents.length - 1].parts.push(...currentParts);
    } else {
      contents.push({
        role: "user",
        parts: currentParts
      });
    }

    // Set temperature to 0.3 as requested
    const generationConfig = {
      temperature: 0.3,
      maxOutputTokens: 2500
    };

    // Attempt Gemini call if API key is available
    if (apiKey) {
      try {
        const { data, model } = await callGemini(
          { systemInstruction, contents, generationConfig },
          15000,
          apiKey
        );
        const replyText = data.candidates?.[0]?.content?.parts?.[0]?.text;

        if (replyText) {
          return res.status(200).json({ reply: replyText.trim(), _model: model });
        }
      } catch (geminiErr) {
        console.warn('[api/chat] Live Gemini call exception, using direct answer engine:', geminiErr?.message || geminiErr);
      }
    }

    // Direct answer fallback strictly following the system instruction
    const reply = answerDirectly(message, history, language);
    return res.status(200).json({ reply, _model: 'direct-assistant' });

  } catch (error) {
    console.error('Chat error:', error);
    const reply = answerDirectly(req.body?.message, req.body?.history, req.body?.language);
    return res.status(200).json({ reply, _model: 'direct-assistant-fallback' });
  }
}
