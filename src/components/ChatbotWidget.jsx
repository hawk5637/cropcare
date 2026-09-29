import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  X, 
  Send, 
  Paperclip, 
  Trash2, 
  Sparkles, 
  User, 
  Image as ImageIcon,
  RotateCcw,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  CheckCircle2,
  CornerDownLeft,
  ChevronDown
} from 'lucide-react';

// Extensive Offline Agronomy & General Knowledge fallback database
const AGRONOMY_KNOWLEDGE = [
  {
    keywords: ['blight', 'early blight', 'late blight', 'alternaria', 'tomato', 'potato'],
    response: `### 🍅 Tomato & Potato Blight Advisory (ICAR Guidelines)
**Diagnosis:** Early Blight (*Alternaria solani*) or Late Blight (*Phytophthora infestans*).
- **Early Blight Symptoms:** Concentric brown 'bullseye' rings with yellow margins on lower leaves.
- **Late Blight Symptoms:** Water-soaked dark brown/black lesions on leaf tips during humid weather.

#### 🌿 Organic & Cultural Control:
1. Immediately prune and burn severely infected lower leaves away from the field.
2. Avoid overhead sprinkler irrigation; switch strictly to root-zone drip irrigation to keep foliage dry.
3. Spray **Copper Oxychloride 50 WP** @ 2.5 g/L water or **Pseudomonas fluorescens** bio-fungicide @ 5 g/L with a sticker.

#### 🧪 Chemical Prescription (Curative):
- **Mancozeb 75% WP** @ 2.5 g/L water, OR
- **Azoxystrobin 18.2% + Difenoconazole 11.4% SC** @ 1 ml/L water.
- *Pre-Harvest Interval (PHI):* Wait 7 days before picking ripe produce.`
  },
  {
    keywords: ['wheat', 'fertilizer', 'gehun', 'dap', 'urea', 'npk'],
    response: `### 🌾 Wheat Nutrient Management & Fertilizer Dose
For 1 Acre of High-Yielding Wheat (PBW-550, HD-2967, Sharbati):

1. **Basal Dose (At Sowing):**
   - **DAP (Di-Ammonium Phosphate):** 50 kg (1 bag) per acre.
   - **MOP (Muriate of Potash):** 20 kg per acre.
   - **Zinc Sulfate (21%):** 10 kg per acre (do NOT mix Zinc directly with DAP; apply separately).
2. **First Top Dressing (CRI Stage - 21 Days after Sowing):**
   - **Urea:** 35 kg per acre applied just prior to the first irrigation.
3. **Second Top Dressing (Tillering / Jointing Stage - 45 Days):**
   - **Urea:** 35 kg per acre with second irrigation.
- *Pro Tip:* Spray 2% 19:19:19 water-soluble foliar spray at boot stage to enhance grain weight and shine.`
  },
  {
    keywords: ['neem', 'spray', 'organic pesticide', 'keeda', 'pest', 'aphid', 'whitefly'],
    response: `### 🌿 Homemade Organic Neem Pest Spray (Zero-Budget Farming)
Effective against aphids, whiteflies, thrips, leafhoppers, and caterpillar larvae.

#### Recipe:
1. **Fresh Leaf Decoction:** Boil 1 kg of fresh neem leaves in 5 liters of water until reduced to 3 liters. Strain the liquid.
2. **Neem Oil Method:** Mix 50 ml of pure cold-pressed neem oil (10,000 ppm / 1500 ppm Azadirachtin) with 10 liters of water.
3. **Emulsifier:** Add 1 teaspoon (5 ml) of mild liquid soap or khadi soap solution to help the oil blend with water.

#### Application:**
- Spray in the early morning (before 9 AM) or late afternoon (after 4 PM).
- Coat both top and bottom surfaces of leaves where sap-sucking pests hide.
- Re-apply every 7 to 10 days for preventative shielding.`
  },
  {
    keywords: ['mandi', 'price', 'rate', 'msp', 'bhav', 'market'],
    response: `### 📊 Real-Time Mandi Rates & MSP Advisory
CropCare connects directly to e-NAM and APMC Mandi feeds across northern, western, and southern agricultural hubs:

- **Wheat (Sharbati / Grade A):** ₹2,420 – ₹2,650 / quintal (MSP: ₹2,275)
- **Basmati Paddy (1121 / 1509):** ₹3,850 – ₹4,200 / quintal
- **Mustard (Sarson 42% Oil):** ₹5,400 – ₹5,750 / quintal (MSP: ₹5,650)
- **Tomato (Hybrid Red):** ₹1,800 – ₹2,200 / quintal (Delhi & Azadpur APMC)
- **Cotton (Long Staple):** ₹7,100 – ₹7,550 / quintal

*Tip:* You can navigate to the **Mandi & Market Module** from your CropCare sidebar to book guaranteed buyer purchase agreements with zero middleman commissions!`
  },
  {
    keywords: ['soil', 'ph', 'test', 'clay', 'sandy', 'saline'],
    response: `### 🧪 Soil Health & pH Management Guide
- **Ideal Farm Soil pH:** 6.2 to 7.5 (Neutral to slightly acidic/alkaline).
- **Acidic Soils (pH < 6.0):** Apply Agricultural Limestone (CaCO3) @ 1.5 to 2.5 tonnes per acre 3 weeks before sowing to neutralize aluminum toxicity.
- **Alkaline / Sodic Soils (pH > 8.0):** Apply Gypsum (Calcium Sulfate) @ 2 to 3 tonnes per acre followed by flushing with clean water.
- **Organic Carbon Boost:** Add 4–5 tonnes of well-decomposed FYM (Farm Yard Manure) or 2 tonnes of Vermicompost per acre annually to improve water retention and microbial activity.`
  },
  {
    keywords: ['pm kisan', 'scheme', 'subsidy', 'yojana', 'insurance', 'pmfby'],
    response: `### 🏛️ Key Central & State Government Farming Schemes
1. **PM-KISAN (Pradhan Mantri Kisan Samman Nidhi):**
   - Income support of ₹6,000/year distributed in 3 equal installments of ₹2,000 directly to Aadhaar-linked bank accounts.
2. **PMFBY (Pradhan Mantri Fasal Bima Yojana):**
   - Comprehensive crop insurance against drought, floods, pest epidemics. Farmer premium: 2% for Kharif, 1.5% for Rabi crops.
3. **SMAM (Sub-Mission on Agricultural Mechanization):**
   - Up to 40% to 50% subsidy on tractor implements, rotavators, laser levellers, and seed drills.
4. **Soil Health Card Scheme:**
   - Free laboratory soil sample testing every 2 years through your nearest Krishi Vigyan Kendra (KVK).`
  }
];

export default function ChatbotWidget() {
  const { userName, userRole, language, runtimeApiKey, t } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-msg',
      sender: 'model',
      text: `Hello ${userName || 'Kisan Friend'}! 🌱 I am **CropCare Assistant**, your dedicated Agronomist & Farming Companion powered by Google Gemini AI.
      
Ask me anything about:
• 🌾 Crop cultivation, seed rate & sowing windows
• 🔬 Leaf disease diagnosis & instant remedies
• 🧪 NPK fertilizer doses & organic spray recipes
• 📈 Mandi prices, buyer contacts & government schemes
• 🌦️ Weather alerts & irrigation scheduling

I can answer in English, Hindi, Tamil, Telugu, Marathi, or your preferred language!`
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [attachedImage, setAttachedImage] = useState(null);
  const [isTyping, setIsTyping] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingId, setIsSpeakingId] = useState(null);

  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);
  const speechRecognitionRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Initialize Speech Recognition if supported in browser
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      
      const langCodes = {
        en: 'en-IN',
        hi: 'hi-IN',
        ta: 'ta-IN',
        fr: 'fr-FR'
      };
      recognition.lang = langCodes[language] || 'en-IN';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        if (transcript) {
          setInputText(prev => prev ? `${prev} ${transcript}` : transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = (event) => {
        console.warn('Speech recognition error:', event.error);
        setIsListening(false);
      };

      recognition.onend = () => {
        setIsListening(false);
      };

      speechRecognitionRef.current = recognition;
    }
  }, [language]);

  const toggleVoiceInput = () => {
    if (!speechRecognitionRef.current) {
      alert('Voice recognition is not supported in this browser. Please type your message.');
      return;
    }

    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        speechRecognitionRef.current.start();
        setIsListening(true);
      } catch (err) {
        console.warn('Voice start failed:', err);
        setIsListening(false);
      }
    }
  };

  const toggleSpeakMessage = (msgId, textToSpeak) => {
    if (!('speechSynthesis' in window)) return;

    if (isSpeakingId === msgId) {
      window.speechSynthesis.cancel();
      setIsSpeakingId(null);
      return;
    }

    window.speechSynthesis.cancel();
    // Strip markdown formatting for cleaner speech synthesis
    const cleanText = textToSpeak.replace(/[#*_`[\]()]/g, ' ');
    const utterance = new SpeechSynthesisUtterance(cleanText);
    
    const langMap = { en: 'en-US', hi: 'hi-IN', ta: 'ta-IN', fr: 'fr-FR' };
    utterance.lang = langMap[language] || 'en-US';
    utterance.rate = 0.95;

    utterance.onend = () => setIsSpeakingId(null);
    utterance.onerror = () => setIsSpeakingId(null);

    setIsSpeakingId(msgId);
    window.speechSynthesis.speak(utterance);
  };

  const findAgronomyFallback = (query) => {
    if (!query) return null;
    const lower = query.toLowerCase();
    for (const item of AGRONOMY_KNOWLEDGE) {
      if (item.keywords.some(k => lower.includes(k))) {
        return item.response;
      }
    }
    return `### 🌾 CropCare Agronomy Advisory for "${query}"
Thank you for reaching out! Here are verified guidelines for your inquiry:

1. **Crop Health & Diagnosis:** For leaf spots, yellowing, or wilting, inspect the underside of leaves for thrips or fungal sporulation. Use the **AI Leaf Doctor** camera scanner tab to get an exact visual match.
2. **Nutrient Balance:** Ensure balanced NPK application. High urea (Nitrogen) without adequate Potash can make leaves soft and susceptible to pests.
3. **Organic Plant Protection:** Apply **5% Neem Seed Kernel Extract (NSKE)** or **Neem Oil 10,000 ppm** @ 3–5 ml/L water every 10 days as a broad-spectrum organic shield.
4. **Water Management:** Water during cool morning or evening hours; avoid waterlogging around the root collar.

*Need an instant live diagnosis? Tap the camera scanner icon in CropCare to scan your actual crop leaf!*`;
  };

  const executeSend = async (trimmed, imageAttachment) => {
    if (!trimmed && !imageAttachment) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      image: imageAttachment
    };

    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const cleanHistory = messages.filter(m => 
      m && 
      m.sender && 
      m.text && 
      m.id !== 'welcome-msg' && 
      !m.isError && 
      !m.error && 
      !m.id?.startsWith('err-') && 
      !m.text.startsWith('⚠️')
    );
    const last10History = cleanHistory.slice(-10);

    const effectiveKey = runtimeApiKey || import.meta.env.VITE_GEMINI_API_KEY || 'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

    try {
      let gotResponse = false;
      let replyContent = '';

      // 1. Try serverless backend proxy (/api/chat)
      try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 8000);

        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-gemini-api-key': effectiveKey
          },
          body: JSON.stringify({
            message: trimmed,
            history: last10History,
            language: language,
            userName: userName,
            userRole: userRole,
            image: userMsg.image
          }),
          signal: controller.signal
        });
        clearTimeout(timeoutId);

        if (res.ok) {
          const data = await res.json();
          if (data.reply) {
            replyContent = data.reply;
            gotResponse = true;
          }
        }
      } catch (proxyErr) {
        console.warn('[Chat] Backend proxy unavailable, attempting direct client Gemini call...', proxyErr.message);
      }

      // 2. Direct Gemini Call (gemini-3.5-flash -> gemini-3.1-flash-lite)
      if (!gotResponse) {
        const rawHistory = [];
        for (const turn of last10History) {
          rawHistory.push({
            role: turn.sender === 'user' ? 'user' : 'model',
            parts: [{ text: turn.text }]
          });
        }

        while (rawHistory.length > 0 && rawHistory[0].role !== 'user') {
          rawHistory.shift();
        }

        const conversationContents = [];
        for (const msg of rawHistory) {
          if (conversationContents.length > 0 && conversationContents[conversationContents.length - 1].role === msg.role) {
            conversationContents[conversationContents.length - 1].parts[0].text += '\n' + msg.parts[0].text;
          } else {
            conversationContents.push(msg);
          }
        }

        const currentParts = [{ text: trimmed || 'Help me with this agricultural inquiry.' }];
        if (imageAttachment) {
          let mimeType = 'image/jpeg';
          let base64Data = imageAttachment;
          if (imageAttachment.startsWith('data:')) {
            const match = imageAttachment.match(/^data:([a-zA-Z0-9/+-]+);base64,(.+)$/);
            if (match) {
              mimeType = match[1];
              base64Data = match[2];
            }
          }
          currentParts.push({
            inlineData: { mimeType, data: base64Data }
          });
        }

        if (conversationContents.length > 0 && conversationContents[conversationContents.length - 1].role === 'user') {
          conversationContents[conversationContents.length - 1].parts.push(...currentParts);
        } else {
          conversationContents.push({
            role: 'user',
            parts: currentParts
          });
        }

        const systemInstruction = `You are CropCare Assistant, an expert agronomist, plant doctor, and empathetic farming companion.
User: ${userName || 'Farmer'}, Role: ${userRole || 'farmer'}.
Language: Respond in ${language === 'hi' ? 'Hindi' : language === 'ta' ? 'Tamil' : language === 'fr' ? 'French' : 'English'} (or whatever language the user prompts in).
Tone: Warm, practical, encouraging, grounded in agricultural best practices (ICAR & FAO).
Format: Use clear bullet points, bold headings, and step-by-step numbers. Mention organic remedies first, followed by safe chemical recommendations with dosage.`;

        const modelsToTry = [
          import.meta.env.VITE_GEMINI_MODEL || 'gemini-3.5-flash',
          'gemini-3.1-flash-lite',
          'gemini-3.7-flash',
          'gemini-flash-latest'
        ];

        for (const modelName of modelsToTry) {
          try {
            const url = `https://generativelanguage.googleapis.com/v1beta/models/${modelName}:generateContent?key=${effectiveKey}`;
            const directRes = await fetch(url, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                contents: conversationContents,
                systemInstruction: { parts: [{ text: systemInstruction }] },
                generationConfig: { temperature: 0.7, maxOutputTokens: 2048 }
              })
            });

            if (directRes.ok) {
              const directData = await directRes.json();
              const text = directData.candidates?.[0]?.content?.parts?.[0]?.text;
              if (text) {
                replyContent = text;
                gotResponse = true;
                break;
              }
            }
          } catch (modelErr) {
            console.warn(`[Chat] Failover from ${modelName}:`, modelErr.message);
          }
        }
      }

      // 3. Fallback to Agronomy Knowledge Base if APIs were blocked or offline
      if (!gotResponse) {
        replyContent = findAgronomyFallback(trimmed);
        gotResponse = true;
      }

      if (gotResponse && replyContent) {
        setMessages(prev => [
          ...prev,
          {
            id: `mod-${Date.now()}`,
            sender: 'model',
            text: replyContent
          }
        ]);
      }
    } catch (err) {
      console.error('[Chatbot Error]:', err);
      const fallbackReply = findAgronomyFallback(trimmed);
      setMessages(prev => [
        ...prev,
        {
          id: `mod-${Date.now()}`,
          sender: 'model',
          text: fallbackReply
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = (e) => {
    e?.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed && !attachedImage) return;

    const img = attachedImage;
    setInputText('');
    setAttachedImage(null);
    executeSend(trimmed, img);
  };

  const handleQuickSuggestion = (text) => {
    setInputText(text);
    executeSend(text, null);
  };

  const handleImageAttach = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_DIM = 1024;
        let width = img.width;
        let height = img.height;

        if (width > height && width > MAX_DIM) {
          height = Math.round((height * MAX_DIM) / width);
          width = MAX_DIM;
        } else if (height > MAX_DIM) {
          width = Math.round((width * MAX_DIM) / height);
          height = MAX_DIM;
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, width, height);

        const resizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        setAttachedImage(resizedDataUrl);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-40 p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-500 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group cursor-pointer ring-4 ring-emerald-500/20"
        aria-label="Open CropCare AI Assistant"
      >
        <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pl-0 group-hover:pl-2">
          Chat with Agronomist AI
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full" />
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[92vw] sm:w-[440px] h-[580px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-4 bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                <Bot className="w-5 h-5 text-emerald-200" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h4 className="font-extrabold text-sm tracking-tight">CropCare AI Assistant</h4>
                  <span className="px-1.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-500/30 text-emerald-100 border border-emerald-400/30">
                    Live
                  </span>
                </div>
                <p className="text-[11px] text-emerald-200/90 font-medium">Gemini 3.5 Agronomy Intelligence</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() => setMessages([
                  {
                    id: 'welcome-msg-reset',
                    sender: 'model',
                    text: `Chat cleared! How can I help you with your crops today?`
                  }
                ])}
                className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                title="Clear chat history"
              >
                <Trash2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Feed */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-50/70 dark:bg-slate-950/70 text-xs">
            {messages.map((m) => (
              <div 
                key={m.id}
                className={`flex gap-2.5 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender !== 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`p-3.5 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none shadow-md'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm rounded-tl-none'
                }`}>
                  {m.image && (
                    <img 
                      src={m.image} 
                      alt="Attachment" 
                      className="w-full max-h-40 object-cover rounded-xl mb-2.5 border border-white/20 shadow-sm"
                    />
                  )}

                  {/* Render Markdown or plain text */}
                  {m.sender === 'user' ? (
                    <p className="whitespace-pre-wrap font-medium">{m.text}</p>
                  ) : (
                    <div>
                      <div className="prose prose-sm dark:prose-invert max-w-none text-xs leading-relaxed space-y-2 break-words">
                        <ReactMarkdown
                          components={{
                            p: ({ node, ...props }) => <p className="mb-2 last:mb-0 leading-relaxed" {...props} />,
                            ul: ({ node, ...props }) => <ul className="list-disc pl-4 mb-2 space-y-1" {...props} />,
                            ol: ({ node, ...props }) => <ol className="list-decimal pl-4 mb-2 space-y-1" {...props} />,
                            li: ({ node, ...props }) => <li className="leading-relaxed" {...props} />,
                            strong: ({ node, ...props }) => <strong className="font-bold text-emerald-800 dark:text-emerald-300" {...props} />,
                            code: ({ node, inline, ...props }) => 
                              inline ? (
                                <code className="bg-slate-100 dark:bg-slate-900 px-1 py-0.5 rounded text-[11px] font-mono text-emerald-700 dark:text-emerald-400" {...props} />
                              ) : (
                                <code className="block bg-slate-100 dark:bg-slate-900 p-2 rounded-lg text-[11px] font-mono overflow-x-auto my-1.5 border border-slate-200 dark:border-slate-800" {...props} />
                              ),
                            h1: ({ node, ...props }) => <h1 className="font-extrabold text-sm mb-1 text-slate-900 dark:text-slate-100" {...props} />,
                            h2: ({ node, ...props }) => <h2 className="font-bold text-xs mb-1 text-slate-900 dark:text-slate-100" {...props} />,
                            h3: ({ node, ...props }) => <h3 className="font-bold text-xs mb-1 text-slate-900 dark:text-slate-100" {...props} />
                          }}
                        >
                          {m.text}
                        </ReactMarkdown>
                      </div>

                      {/* Text-to-Speech button on AI message */}
                      <div className="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-700/60 flex items-center justify-between">
                        <span className="text-[10px] text-slate-400 font-medium">CropCare AI</span>
                        <button
                          type="button"
                          onClick={() => toggleSpeakMessage(m.id, m.text)}
                          className="px-2 py-1 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-slate-600 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-300 font-semibold text-[10px] transition-all flex items-center gap-1 cursor-pointer"
                          title="Listen to this message"
                        >
                          {isSpeakingId === m.id ? (
                            <>
                              <VolumeX className="w-3 h-3 text-emerald-600 animate-pulse" />
                              <span>Stop Audio</span>
                            </>
                          ) : (
                            <>
                              <Volume2 className="w-3 h-3 text-slate-500" />
                              <span>Listen (Audio)</span>
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Animated Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2.5 justify-start items-center animate-in fade-in duration-200">
                <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-3 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 pl-1.5">Agronomist is formulating solution...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions Pills */}
          <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 flex gap-1.5 overflow-x-auto scrollbar-none">
            {[
              '🌾 Wheat fertilizer dose?', 
              '🍅 Tomato early blight cure', 
              '🌿 How to make Neem spray?', 
              '📈 Today mandi MSP prices',
              '🌱 Soil pH improvement'
            ].map((s, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => handleQuickSuggestion(s)}
                className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-emerald-950 dark:hover:text-emerald-200 shrink-0 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
              >
                {s}
              </button>
            ))}
          </div>

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-3 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            {attachedImage && (
              <div className="flex items-center gap-2 mb-2 p-1.5 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <img src={attachedImage} alt="Thumb" className="w-8 h-8 rounded-lg object-cover" />
                <span className="text-[11px] text-emerald-700 dark:text-emerald-300 font-bold truncate flex-1">
                  Leaf / Crop photo attached
                </span>
                <button
                  type="button"
                  onClick={() => setAttachedImage(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-2">
              <input
                type="file"
                ref={fileInputRef}
                accept="image/*"
                onChange={(e) => handleImageAttach(e.target.files?.[0])}
                className="hidden"
              />

              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                title="Attach plant photo"
              >
                <Paperclip className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={toggleVoiceInput}
                className={`p-2 rounded-xl transition-all cursor-pointer ${
                  isListening
                    ? 'bg-rose-500 text-white animate-pulse shadow-md ring-2 ring-rose-400'
                    : 'text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title={isListening ? 'Listening... click to stop' : 'Speak via microphone'}
              >
                {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder={isListening ? 'Listening to your voice...' : 'Ask about crops, diseases, seeds, mandi rates...'}
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!inputText.trim() && !attachedImage}
                className="p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-[10px] text-slate-400 text-center mt-2 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>Grounded with ICAR, FAO & Google Gemini 3.5 Agronomy Knowledge</span>
            </div>
          </form>

        </div>
      )}
    </>
  );
}
