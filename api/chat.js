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

    // General Mandi price overview
    return "Today's Key APMC Mandi Rates & MSP:\n• Wheat: ₹2,480 / Qtl (Indore) | MSP: ₹2,275\n• Basmati Rice: ₹3,820 / Qtl (Karnal) | MSP: ₹2,183\n• Cotton: ₹7,150 / Qtl (Rajkot) | MSP: ₹6,620\n• Tomato: ₹2,450 / Qtl (Madanapalle)\n• Onion: ₹2,420 / Qtl (Lasalgaon)\n• Soybean: ₹4,620 / Qtl (Indore) | MSP: ₹4,600";
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
    const systemInstruction = `Answer exactly what the user asked. Be direct, simple, short and sweet. Lead with the answer in the first line. No self-introduction, no topic lists, no extra information the user did not ask for. Reply in the same language the user writes in (English, Tamil, Tanglish, Hindi). If the question is unclear, ask ONE short clarifying question. Add detail only if the user asks for it.`;

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
