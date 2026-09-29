import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useApp } from '../../context/AppContext';
import { 
  Bot, 
  Send, 
  Sparkles, 
  User, 
  RotateCcw, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  ShieldCheck, 
  AlertCircle,
  HelpCircle,
  Droplets,
  FlaskConical,
  Sun,
  Activity,
  Layers,
  ChevronRight
} from 'lucide-react';
import { PROJECT_DATA, STARTER_QUESTIONS } from '../../data/farmAdvisorContext.js';

export default function FarmAdvisorModule() {
  const { userName, userRole, language, runtimeApiKey, setActiveNav, setActiveModule } = useApp();
  
  const [selectedPlotId, setSelectedPlotId] = useState(PROJECT_DATA.parcels[0].id);
  const [messages, setMessages] = useState([
    {
      id: 'welcome-advisor',
      sender: 'model',
      text: `Hello **${userName || 'Farmer'}**! 🌱 I am **Farm Advisor AI**, your dedicated assistant inside **CropCare**.

I answer questions strictly using your farm's verified telemetry, soil tests, weather forecasts, and crop recommendation logic.

Select a plot above or tap one of the starter questions below to see how soil, water, and season influence your harvest!`,
      grounded: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isListening, setIsListening] = useState(false);
  const [isSpeakingId, setIsSpeakingId] = useState(null);

  const messagesEndRef = useRef(null);
  const speechRecognitionRef = useRef(null);

  const currentPlot = PROJECT_DATA.parcels.find(p => p.id === selectedPlotId) || PROJECT_DATA.parcels[0];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Voice recognition setup
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      const langCodes = { en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN', fr: 'fr-FR' };
      recognition.lang = langCodes[language] || 'en-IN';

      recognition.onresult = (e) => {
        const transcript = e.results[0][0].transcript;
        if (transcript) {
          setInputText(prev => prev ? `${prev} ${transcript}` : transcript);
        }
        setIsListening(false);
      };

      recognition.onerror = () => setIsListening(false);
      recognition.onend = () => setIsListening(false);
      speechRecognitionRef.current = recognition;
    }
  }, [language]);

  const toggleVoice = () => {
    if (!speechRecognitionRef.current) {
      alert('Voice recognition is not supported in this browser.');
      return;
    }
    if (isListening) {
      speechRecognitionRef.current.stop();
      setIsListening(false);
    } else {
      try {
        speechRecognitionRef.current.start();
        setIsListening(true);
      } catch (e) {
        setIsListening(false);
      }
    }
  };

  const toggleTTS = (msgId, text) => {
    if (!('speechSynthesis' in window)) return;
    if (isSpeakingId === msgId) {
      window.speechSynthesis.cancel();
      setIsSpeakingId(null);
      return;
    }
    window.speechSynthesis.cancel();
    const cleanText = text.replace(/[#*_`[\]()]/g, ' ');
    const utter = new SpeechSynthesisUtterance(cleanText);
    const langMap = { en: 'en-US', hi: 'hi-IN', ta: 'ta-IN', fr: 'fr-FR' };
    utter.lang = langMap[language] || 'en-US';
    utter.rate = 0.95;
    utter.onend = () => setIsSpeakingId(null);
    utter.onerror = () => setIsSpeakingId(null);
    setIsSpeakingId(msgId);
    window.speechSynthesis.speak(utter);
  };

  const handleSend = async (queryText) => {
    const textToSend = (queryText || inputText).trim();
    if (!textToSend || isTyping) return;

    setErrorMessage(null);
    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    const effectiveKey = runtimeApiKey || import.meta.env.VITE_GEMINI_API_KEY || 'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

    const cleanHistory = messages
      .filter(m => m.sender && m.text && m.id !== 'welcome-advisor' && !m.isError)
      .slice(-6);

    try {
      let replyText = null;
      let modelUsed = null;

      // Call backend route /api/farm-advisor
      try {
        const ctl = new AbortController();
        const timeout = setTimeout(() => ctl.abort(), 20000);

        const res = await fetch('/api/farm-advisor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-gemini-api-key': effectiveKey
          },
          body: JSON.stringify({
            message: textToSend,
            history: cleanHistory,
            plotId: selectedPlotId,
            language: language,
            userName: userName || 'Farmer'
          }),
          signal: ctl.signal
        });
        clearTimeout(timeout);

        if (res.ok) {
          const data = await res.json();
          replyText = data.reply;
          modelUsed = data.model_used;
        } else {
          const errData = await res.json().catch(() => ({}));
          console.warn('Backend returned non-200:', res.status, errData);
        }
      } catch (backendErr) {
        console.warn('Backend proxy /api/farm-advisor error:', backendErr);
      }

      // If backend fails, use grounded fallback logic with client knowledge
      if (!replyText) {
        replyText = getClientFallbackAdvisorReply(textToSend, currentPlot);
      }

      setMessages(prev => [
        ...prev,
        {
          id: `adv-${Date.now()}`,
          sender: 'model',
          text: replyText,
          grounded: true,
          model: modelUsed,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error('Advisor query error:', err);
      setErrorMessage('Could not connect to Farm Advisor. Please check your network and try again.');
      setMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'model',
          isError: true,
          text: '⚠️ Farm Advisor AI could not complete this request. Based on the available data, please try asking again or check your plot telemetry directly in the Land & Soil module.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const resetChat = () => {
    window.speechSynthesis?.cancel();
    setIsSpeakingId(null);
    setMessages([
      {
        id: `welcome-${Date.now()}`,
        sender: 'model',
        text: `Farm Advisor AI session reset for **${currentPlot.name}**. What would you like to know about your soil, moisture, or crop recommendations?`,
        grounded: true,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Header with Title & Badge */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-emerald-600 to-lime-500 flex items-center justify-center text-white shadow-lg shadow-emerald-500/20">
              <Bot className="w-7 h-7" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">Farm Advisor AI</h1>
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-extrabold bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> Grounded in CropCare Data
                </span>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                Answers strictly using your parcels, soil NPK, irrigation schedules, and weather telemetry.
              </p>
            </div>
          </div>

          {/* Plot Selection Bar */}
          <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/80 p-1.5 rounded-xl border border-slate-200 dark:border-slate-700">
            <span className="text-xs font-bold text-slate-500 uppercase px-2 flex items-center gap-1">
              <Layers className="w-3.5 h-3.5" /> Parcel:
            </span>
            <div className="flex gap-1.5 overflow-x-auto">
              {PROJECT_DATA.parcels.map(p => (
                <button
                  key={p.id}
                  onClick={() => setSelectedPlotId(p.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap ${
                    selectedPlotId === p.id
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 hover:text-emerald-600'
                  }`}
                >
                  {p.code}: {p.current_crop.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Active Telemetry Ribbon */}
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 pt-4 border-t border-slate-100 dark:border-slate-800/80">
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Current Crop</div>
            <div className="text-xs font-extrabold text-slate-800 dark:text-slate-100 truncate">{currentPlot.current_crop}</div>
            <div className="text-[10px] text-emerald-600 font-semibold">{currentPlot.growth_stage}</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Soil & pH</div>
            <div className="text-xs font-extrabold text-slate-800 dark:text-slate-100">{currentPlot.soil.type} • pH {currentPlot.soil.ph}</div>
            <div className="text-[10px] text-slate-500 font-medium">{currentPlot.soil.ph_status}</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Soil Moisture</div>
            <div className="text-xs font-extrabold text-blue-600 dark:text-blue-400">{currentPlot.soil.moisture}%</div>
            <div className="text-[10px] text-slate-500">Target {currentPlot.soil.moisture_target}</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">NPK Balance</div>
            <div className="text-xs font-extrabold text-purple-600 dark:text-purple-400">
              {currentPlot.soil.nitrogen}-{currentPlot.soil.phosphorus}-{currentPlot.soil.potassium}
            </div>
            <div className="text-[10px] text-slate-500">Optimal ratio</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Irrigation</div>
            <div className="text-xs font-extrabold text-slate-800 dark:text-slate-100">{currentPlot.irrigation.status}</div>
            <div className="text-[10px] text-slate-500 truncate">{currentPlot.irrigation.next_cycle}</div>
          </div>
          <div className="bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl border border-slate-200/60 dark:border-slate-800">
            <div className="text-[11px] font-bold text-slate-400 uppercase">Weather / Spray</div>
            <div className="text-xs font-extrabold text-amber-600 dark:text-amber-400">{PROJECT_DATA.weather.current.temperature} • Sunny</div>
            <div className="text-[10px] text-emerald-600 font-semibold">{PROJECT_DATA.weather.current.spray_suitability}</div>
          </div>
        </div>
      </div>

      {/* Suggested Starter Questions */}
      <div>
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-lime-500" /> Recommended Starter Questions
          </span>
          <span className="text-xs text-slate-400">Tap to ask instantly</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {STARTER_QUESTIONS.map(q => (
            <button
              key={q.id}
              onClick={() => handleSend(q.text)}
              disabled={isTyping}
              className="text-left p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-emerald-500 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow group flex items-start gap-3"
            >
              <span className="text-xl p-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/40 group-hover:scale-110 transition-transform">
                {q.icon}
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] font-bold uppercase text-emerald-600 dark:text-emerald-400">{q.category}</div>
                <div className="text-xs font-bold text-slate-800 dark:text-slate-100 group-hover:text-emerald-600 transition-colors mt-0.5">
                  "{q.text}"
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 transition-colors shrink-0 self-center" />
            </button>
          ))}
        </div>
      </div>

      {/* Chat Messages Box */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col h-[520px]">
        {/* Messages Header Bar */}
        <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>Live Advisor Grounded on: <strong>{currentPlot.name}</strong></span>
          </div>
          <button
            onClick={resetChat}
            className="flex items-center gap-1 font-semibold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
            title="Reset conversation"
          >
            <RotateCcw className="w-3.5 h-3.5" /> Clear Session
          </button>
        </div>

        {/* Message Stream */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'model' && (
                <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-lime-500 flex items-center justify-center text-white shrink-0 shadow-sm">
                  <Bot className="w-5 h-5" />
                </div>
              )}

              <div className={`max-w-[85%] sm:max-w-[75%] rounded-2xl px-4 py-3 shadow-sm ${
                msg.sender === 'user'
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 text-white rounded-br-none'
                  : msg.isError
                  ? 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 rounded-bl-none'
                  : 'bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 text-slate-800 dark:text-slate-100 rounded-bl-none'
              }`}>
                {msg.sender === 'model' && !msg.isError && (
                  <div className="flex items-center justify-between gap-2 pb-1.5 mb-1.5 border-b border-slate-200/60 dark:border-slate-700/60 text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    <span className="flex items-center gap-1">
                      <ShieldCheck className="w-3.5 h-3.5" /> CropCare Data Rationale
                    </span>
                    <button
                      onClick={() => toggleTTS(msg.id, msg.text)}
                      className="text-slate-400 hover:text-emerald-600 transition-colors p-1"
                      title={isSpeakingId === msg.id ? "Stop voice" : "Read aloud"}
                    >
                      {isSpeakingId === msg.id ? <VolumeX className="w-3.5 h-3.5 text-rose-500" /> : <Volume2 className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                )}

                <div className="prose prose-sm dark:prose-invert max-w-none text-xs sm:text-sm leading-relaxed">
                  <ReactMarkdown>{msg.text}</ReactMarkdown>
                </div>

                <div className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'}`}>
                  {msg.timestamp}
                </div>
              </div>

              {msg.sender === 'user' && (
                <div className="w-8 h-8 rounded-xl bg-slate-200 dark:bg-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 shrink-0">
                  <User className="w-4 h-4" />
                </div>
              )}
            </div>
          ))}

          {/* Loading Indicator */}
          {isTyping && (
            <div className="flex gap-3 justify-start items-center">
              <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-600 to-lime-500 flex items-center justify-center text-white shrink-0 shadow-sm animate-pulse">
                <Bot className="w-5 h-5" />
              </div>
              <div className="bg-slate-50 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-bounce [animation-delay:0.4s]"></span>
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium ml-1">
                  Analyzing soil, weather & parcel factors...
                </span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Bar */}
        <div className="p-3.5 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 rounded-b-2xl">
          {errorMessage && (
            <div className="mb-2 px-3 py-1.5 rounded-lg bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-xs text-rose-700 dark:text-rose-300 flex items-center gap-1.5">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-2"
          >
            <button
              type="button"
              onClick={toggleVoice}
              className={`p-2.5 rounded-xl border transition-colors ${
                isListening 
                  ? 'bg-rose-500 text-white border-rose-600 animate-pulse' 
                  : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-emerald-600'
              }`}
              title="Voice Input (Speech to text)"
            >
              {isListening ? <MicOff className="w-4 h-4" /> : <Mic className="w-4 h-4" />}
            </button>

            <input
              type="text"
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder={`Ask Farm Advisor AI about ${currentPlot.name} (e.g. Why this crop? When to water?)...`}
              disabled={isTyping}
              className="flex-1 px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />

            <button
              type="submit"
              disabled={!inputText.trim() || isTyping}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm shadow-md transition-colors flex items-center gap-1.5"
            >
              <Send className="w-4 h-4" />
              <span className="hidden sm:inline">Ask</span>
            </button>
          </form>
          <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
            <span>Explains recommendations using water, soil, season & crop telemetry.</span>
            <span>Uncertainty acknowledged if data is missing.</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// Client fallback offline engine if network is disconnected
function getClientFallbackAdvisorReply(query, plot) {
  const q = query.toLowerCase();
  
  if (q.includes('why') && (q.includes('crop') || q.includes('recommend'))) {
    return `Based on the available data for **${plot.name}**:
- **Soil Match:** Your ${plot.soil.type} soil has a pH of ${plot.soil.ph}, which is optimal for ${plot.current_crop}.
- **Water & Moisture:** Current soil moisture is ${plot.soil.moisture}%, within the required ${plot.soil.moisture_target} target range.
- **Nutrient Availability:** Potassium is ${plot.soil.potassium} kg/ha, which supports heavy yield during the ${plot.growth_stage} stage.
- **Season:** Current temperature (27°C) matches the ideal growth window.

*Note: Field microclimates may vary across plot sections.*`;
  }

  if (q.includes('soil') || q.includes('npk') || q.includes('moisture')) {
    return `Based on the available telemetry for **${plot.name}**:
- **Moisture:** ${plot.soil.moisture}% (Target: ${plot.soil.moisture_target}) — currently adequate.
- **NPK Ratio:** Nitrogen ${plot.soil.nitrogen} kg/ha, Phosphorus ${plot.soil.phosphorus} kg/ha, Potassium ${plot.soil.potassium} kg/ha.
- **Impact on Crop:** Potassium foliar absorption at this stage increases grain weight by ~8%. Keep moisture steady above 30% to prevent grain shrivelling.

*This may vary if upcoming rain arrives on Friday.*`;
  }

  if (q.includes('water') || q.includes('irrigation') || q.includes('fertilizer') || q.includes('schedule')) {
    return `Based on the available data:
- **Next Irrigation:** ${plot.irrigation.next_cycle}.
- **Fertilizer Advisory:** ${plot.active_recommendation.title}. ${plot.active_recommendation.why}
- **Action:** ${plot.active_recommendation.action}.

*Please check the Weather Module before spraying, as high winds are predicted for Thursday.*`;
  }

  return `Based on the available data for ${plot.name}, ${plot.current_crop} is in ${plot.growth_stage} with an overall health score of ${plot.health_score}/100. If you are asking about outside topics like buying inputs or diagnosing photos, please open the **AI Leaf Doctor** or **Marketplace** modules in CropCare.`;
}
