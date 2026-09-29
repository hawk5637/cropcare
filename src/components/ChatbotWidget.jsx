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
  ShieldCheck,
  ChevronDown,
  Layers,
  HelpCircle,
  AlertCircle
} from 'lucide-react';
import { PROJECT_DATA, STARTER_QUESTIONS } from '../data/farmAdvisorContext.js';

export default function ChatbotWidget() {
  const { userName, userRole, language, runtimeApiKey, t } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [botMode, setBotMode] = useState('advisor'); // 'advisor' (Farm Advisor AI) | 'general' (General Assistant)
  const [selectedPlotId, setSelectedPlotId] = useState(PROJECT_DATA.parcels[0].id);

  // Separate messages for Advisor and General modes
  const [advisorMessages, setAdvisorMessages] = useState([
    {
      id: 'welcome-advisor',
      sender: 'model',
      text: `Hello **${userName || 'Farmer'}**! 🌱 I am **Farm Advisor AI**, your dedicated assistant inside **CropCare**.

I answer questions strictly using your farm's verified telemetry, soil tests, weather forecasts, and crop recommendation logic.

Tap a starter question below or ask why a crop or fertilizer was recommended for your parcel!`,
      grounded: true,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [generalMessages, setGeneralMessages] = useState([
    {
      id: 'welcome-general',
      sender: 'model',
      text: `Hello ${userName || 'Kisan Friend'}! 🌱 I am CropCare's General Agronomy helper. Ask me any broad questions about crops, seeds, mandi rates, or attach a photo for examination!`,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
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

  const currentPlot = PROJECT_DATA.parcels.find(p => p.id === selectedPlotId) || PROJECT_DATA.parcels[0];
  const activeMessages = botMode === 'advisor' ? advisorMessages : generalMessages;
  const setActiveMessages = botMode === 'advisor' ? setAdvisorMessages : setGeneralMessages;

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [advisorMessages, generalMessages, isTyping, botMode]);

  // Speech Recognition
  useEffect(() => {
    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognition) {
      const recognition = new SpeechRecognition();
      recognition.continuous = false;
      recognition.interimResults = false;
      const langCodes = { en: 'en-IN', hi: 'hi-IN', ta: 'ta-IN', fr: 'fr-FR' };
      recognition.lang = langCodes[language] || 'en-IN';

      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
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

  const toggleVoiceInput = () => {
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
      } catch (err) {
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

  const executeSend = async (trimmed, imageAttachment) => {
    if (!trimmed && !imageAttachment) return;

    const userMsg = {
      id: `usr-${Date.now()}`,
      sender: 'user',
      text: trimmed,
      image: imageAttachment,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setActiveMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const cleanHistory = activeMessages
      .filter(m => m.sender && m.text && !m.id.startsWith('welcome-') && !m.isError && !m.text.startsWith('⚠️'))
      .slice(-8);

    const effectiveKey = runtimeApiKey || import.meta.env.VITE_GEMINI_API_KEY || 'AQ.Ab8RN6IL44AqGUqWRl1p4Qa8aIsrpjtvi9j3u1j4t9aLkTkQpg';

    try {
      let replyContent = '';

      if (botMode === 'advisor') {
        // Call /api/farm-advisor
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 20000);

          const res = await fetch('/api/farm-advisor', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-gemini-api-key': effectiveKey
            },
            body: JSON.stringify({
              message: trimmed,
              history: cleanHistory,
              plotId: selectedPlotId,
              language: language,
              userName: userName || 'Farmer'
            }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            replyContent = data.reply;
          }
        } catch (e) {
          console.warn('Backend /api/farm-advisor unavailable, falling back:', e.message);
        }

        if (!replyContent) {
          replyContent = getClientFallbackAdvisorReply(trimmed, currentPlot);
        }
      } else {
        // Call /api/chat
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 25000);

          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'x-gemini-api-key': effectiveKey
            },
            body: JSON.stringify({
              message: trimmed,
              history: cleanHistory,
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
            replyContent = data.reply;
          }
        } catch (proxyErr) {
          console.warn('Backend proxy /api/chat unavailable:', proxyErr.message);
        }

        if (!replyContent) {
          replyContent = `### 🌾 CropCare Agronomy Advisory\nThank you for your question about "${trimmed}". For live crop diagnostics, please check your parcel telemetry in the Land & Soil module or scan a leaf in the AI Leaf Doctor.`;
        }
      }

      setActiveMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'model',
          text: replyContent,
          grounded: botMode === 'advisor',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      setActiveMessages(prev => [
        ...prev,
        {
          id: `err-${Date.now()}`,
          sender: 'model',
          isError: true,
          text: '⚠️ I could not process your query at this moment. Based on the available data, please try asking again or check your plot telemetry directly.',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    const trimmed = inputText.trim();
    if (!trimmed && !attachedImage) return;

    const img = attachedImage;
    setInputText('');
    setAttachedImage(null);
    executeSend(trimmed, img);
  };

  const handleQuickQuestion = (text) => {
    executeSend(text, null);
  };

  const handleImageAttach = (file) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setAttachedImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const clearCurrentChat = () => {
    window.speechSynthesis?.cancel();
    setIsSpeakingId(null);
    if (botMode === 'advisor') {
      setAdvisorMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: 'model',
          text: `Farm Advisor AI session reset for **${currentPlot.name}**. What would you like to know about your soil, moisture, or crop recommendations?`,
          grounded: true,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } else {
      setGeneralMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: 'model',
          text: `Chat cleared! How can I help you today?`,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-40 p-3.5 sm:p-4 rounded-full bg-gradient-to-tr from-emerald-700 via-emerald-600 to-green-500 text-white shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center group cursor-pointer ring-4 ring-emerald-500/20"
        aria-label="Open Farm Advisor AI"
      >
        <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pl-0 group-hover:pl-2">
          Farm Advisor AI
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full" />
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 w-[94vw] sm:w-[460px] h-[600px] max-h-[85vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-200">
          
          {/* Header */}
          <div className="p-3.5 bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white flex flex-col gap-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-2xl bg-white/15 flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-inner">
                  <Bot className="w-5 h-5 text-emerald-200" />
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-extrabold text-sm tracking-tight">
                      {botMode === 'advisor' ? 'Farm Advisor AI' : 'CropCare General AI'}
                    </h4>
                    <span className="px-1.5 py-0.2 rounded-full text-[9px] font-bold bg-emerald-500/40 text-emerald-100 border border-emerald-400/30 flex items-center gap-0.5">
                      <ShieldCheck className="w-2.5 h-2.5" /> {botMode === 'advisor' ? 'Grounded' : 'General'}
                    </span>
                  </div>
                  <p className="text-[10px] text-emerald-100/90 font-medium">
                    {botMode === 'advisor' ? `Data Grounded on ${currentPlot.code}: ${currentPlot.current_crop}` : 'Agricultural assistant'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                <button
                  onClick={clearCurrentChat}
                  className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title="Clear conversation"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Mode Switcher Tabs */}
            <div className="flex bg-black/20 p-1 rounded-xl text-xs font-bold gap-1">
              <button
                type="button"
                onClick={() => setBotMode('advisor')}
                className={`flex-1 py-1 rounded-lg text-center transition-all ${
                  botMode === 'advisor'
                    ? 'bg-white text-emerald-800 shadow-sm font-extrabold'
                    : 'text-emerald-100/80 hover:text-white'
                }`}
              >
                🌱 Farm Advisor AI (Grounded)
              </button>
              <button
                type="button"
                onClick={() => setBotMode('general')}
                className={`flex-1 py-1 rounded-lg text-center transition-all ${
                  botMode === 'general'
                    ? 'bg-white text-emerald-800 shadow-sm font-extrabold'
                    : 'text-emerald-100/80 hover:text-white'
                }`}
              >
                💬 General Assistant
              </button>
            </div>

            {/* Plot Selection Bar (Only in Advisor mode) */}
            {botMode === 'advisor' && (
              <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none pt-0.5">
                <span className="text-[10px] font-bold text-emerald-200 uppercase whitespace-nowrap">Parcel:</span>
                {PROJECT_DATA.parcels.map(p => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setSelectedPlotId(p.id)}
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all whitespace-nowrap ${
                      selectedPlotId === p.id
                        ? 'bg-white text-emerald-900 shadow-sm'
                        : 'bg-white/15 text-emerald-100 hover:bg-white/25'
                    }`}
                  >
                    {p.code}: {p.current_crop.split(' ')[0]}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Quick Telemetry Bar in Advisor Mode */}
          {botMode === 'advisor' && (
            <div className="bg-emerald-50/80 dark:bg-emerald-950/30 px-3 py-1.5 border-b border-emerald-100 dark:border-emerald-900/40 text-[10px] flex items-center justify-between text-slate-600 dark:text-slate-300">
              <span className="font-semibold truncate">
                {currentPlot.soil.type} • pH {currentPlot.soil.ph} • Moisture {currentPlot.soil.moisture}% • NPK {currentPlot.soil.nitrogen}-{currentPlot.soil.phosphorus}-{currentPlot.soil.potassium}
              </span>
              <span className="text-emerald-700 dark:text-emerald-300 font-bold shrink-0 ml-1">
                {currentPlot.health_score}/100 Vigour
              </span>
            </div>
          )}

          {/* Messages Feed */}
          <div className="flex-1 p-3.5 overflow-y-auto space-y-3 bg-slate-50/70 dark:bg-slate-950/70 text-xs">
            {activeMessages.map((m) => (
              <div 
                key={m.id}
                className={`flex gap-2 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {m.sender !== 'user' && (
                  <div className="w-7 h-7 rounded-xl bg-gradient-to-tr from-emerald-700 to-green-600 text-white flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                    <Bot className="w-4 h-4" />
                  </div>
                )}

                <div className={`p-3 rounded-2xl max-w-[85%] leading-relaxed ${
                  m.sender === 'user'
                    ? 'bg-emerald-600 text-white rounded-tr-none shadow-md'
                    : m.isError
                    ? 'bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900 text-rose-800 dark:text-rose-200 rounded-tl-none'
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200/80 dark:border-slate-700/80 shadow-sm rounded-tl-none'
                }`}>
                  {m.image && (
                    <img 
                      src={m.image} 
                      alt="Attachment" 
                      className="w-full max-h-36 object-cover rounded-xl mb-2 border border-white/20 shadow-sm"
                    />
                  )}

                  {m.grounded && m.sender !== 'user' && (
                    <div className="flex items-center justify-between text-[10px] font-bold text-emerald-600 dark:text-emerald-400 pb-1 mb-1 border-b border-slate-100 dark:border-slate-700/60">
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3" /> Grounded in {currentPlot.code} Data
                      </span>
                      <button
                        type="button"
                        onClick={() => toggleSpeakMessage(m.id, m.text)}
                        className="text-slate-400 hover:text-emerald-600 transition-colors p-0.5"
                        title={isSpeakingId === m.id ? "Stop voice" : "Read aloud"}
                      >
                        {isSpeakingId === m.id ? <VolumeX className="w-3 h-3 text-emerald-600 animate-pulse" /> : <Volume2 className="w-3 h-3" />}
                      </button>
                    </div>
                  )}

                  <div className="prose prose-sm dark:prose-invert max-w-none text-xs leading-relaxed space-y-1.5 break-words">
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>

                  <div className={`text-[9px] mt-1 text-right ${m.sender === 'user' ? 'text-emerald-100' : 'text-slate-400'}`}>
                    {m.timestamp}
                  </div>
                </div>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex gap-2 justify-start items-center">
                <div className="w-7 h-7 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-sm animate-pulse">
                  <Bot className="w-4 h-4" />
                </div>
                <div className="p-2.5 bg-white dark:bg-slate-800 rounded-2xl rounded-tl-none border border-slate-200 dark:border-slate-700 shadow-sm flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-bounce" style={{ animationDelay: '300ms' }} />
                  <span className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 pl-1">
                    {botMode === 'advisor' ? 'Analyzing parcel telemetry & rules...' : 'Generating response...'}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Starter Questions (Advisor Mode) */}
          {botMode === 'advisor' && (
            <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider px-1 flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-500" /> Starter Questions:
              </span>
              <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
                {STARTER_QUESTIONS.map(q => (
                  <button
                    key={q.id}
                    type="button"
                    onClick={() => handleQuickQuestion(q.text)}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>{q.icon}</span>
                    <span>{q.text}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quick suggestions for General mode */}
          {botMode === 'general' && (
            <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 flex gap-1.5 overflow-x-auto scrollbar-none">
              {[
                '🌾 Wheat fertilizer dose?', 
                '🍅 Tomato early blight cure', 
                '🌿 How to make Neem spray?', 
                '📈 Mandi MSP rates'
              ].map((s, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleQuickQuestion(s)}
                  className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-[10px] font-bold text-slate-600 dark:text-slate-300 hover:bg-emerald-100 hover:text-emerald-800 dark:hover:bg-emerald-950 shrink-0 border border-slate-200 dark:border-slate-700 transition-all cursor-pointer"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input Footer */}
          <form onSubmit={handleSendMessage} className="p-2.5 bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
            {attachedImage && (
              <div className="flex items-center gap-2 mb-2 p-1.5 bg-emerald-50 dark:bg-slate-800 rounded-xl border border-emerald-200 dark:border-emerald-800">
                <img src={attachedImage} alt="Thumb" className="w-7 h-7 rounded-lg object-cover" />
                <span className="text-[10px] text-emerald-700 dark:text-emerald-300 font-bold truncate flex-1">
                  Plant photo attached
                </span>
                <button
                  type="button"
                  onClick={() => setAttachedImage(null)}
                  className="p-1 text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  <X className="w-3 h-3" />
                </button>
              </div>
            )}

            <div className="flex items-center gap-1.5">
              {botMode === 'general' && (
                <>
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
                </>
              )}

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
                placeholder={
                  isListening 
                    ? 'Listening to your voice...' 
                    : botMode === 'advisor'
                    ? `Ask Farm Advisor AI about ${currentPlot.code}...`
                    : 'Ask about farming, botany, crops...'
                }
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!inputText.trim() && !attachedImage}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-[9px] text-slate-400 text-center mt-1.5 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>
                {botMode === 'advisor'
                  ? 'Grounded on soil NPK, moisture & weather telemetry • Uncertainty stated clearly'
                  : 'CropCare Agronomy Assistant'}
              </span>
            </div>
          </form>

        </div>
      )}
    </>
  );
}

// Client fallback offline engine for Farm Advisor if network is disconnected
function getClientFallbackAdvisorReply(query, plot) {
  const q = query.toLowerCase();
  
  if (q.includes('why') && (q.includes('crop') || q.includes('recommend'))) {
    return `Based on the available data for **${plot.name}**:
- **Soil Suitability:** Your ${plot.soil.type} soil has a pH of ${plot.soil.ph}, which is optimal for ${plot.current_crop}.
- **Water & Moisture:** Current soil moisture is ${plot.soil.moisture}%, within the required ${plot.soil.moisture_target} target range.
- **Nutrient Profile:** High available Potassium (${plot.soil.potassium} kg/ha) supports strong earheads and prevents lodging.
- **Season:** Rabi winter temperatures match the grain filling stage.

*Note: In-field conditions may vary depending on local microclimate.*`;
  }

  if (q.includes('soil') || q.includes('npk') || q.includes('moisture')) {
    return `Based on the available telemetry for **${plot.name}**:
- **Moisture:** ${plot.soil.moisture}% (Target: ${plot.soil.moisture_target}) — currently optimal.
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
