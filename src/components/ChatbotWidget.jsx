import React, { useState, useRef, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { useApp } from '../context/AppContext';
import { 
  Bot, 
  X, 
  Send, 
  Paperclip, 
  Sparkles, 
  RotateCcw, 
  Mic, 
  MicOff, 
  Volume2, 
  VolumeX, 
  CheckCircle2, 
  ShieldCheck, 
  Key, 
  Copy, 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ExternalLink,
  Cpu,
  AlertTriangle,
  Maximize2,
  Minimize2,
  Camera,
  TrendingUp
} from 'lucide-react';
import { PROJECT_DATA, STARTER_QUESTIONS } from '../data/farmAdvisorContext.js';
import { generateAdvisorResponse, generateGeneralResponse } from '../data/agronomyBrain.js';

export default function ChatbotWidget() {
  const { userName, userRole, language, runtimeApiKey, saveRuntimeApiKey, setActiveNav, t } = useApp();

  const [isOpen, setIsOpen] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [botMode, setBotMode] = useState('advisor'); // 'advisor' (Farm Advisor AI) | 'general' (General Assistant)
  const [selectedPlotId, setSelectedPlotId] = useState(PROJECT_DATA.parcels[0].id);

  // Key configuration panel
  const [showKeyConfig, setShowKeyConfig] = useState(false);
  const [customKeyInput, setCustomKeyInput] = useState(runtimeApiKey || '');
  const [keyNotice, setKeyNotice] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Separate messages for Advisor and General modes
  const [advisorMessages, setAdvisorMessages] = useState([
    {
      id: 'welcome-advisor',
      sender: 'model',
      text: `Hello **${userName || 'Farmer'}**! 🌱 I am **Farm Advisor AI**, your dedicated assistant inside **CropCare**.

I answer questions strictly using your farm's verified telemetry, soil tests, weather forecasts, and crop recommendation logic.

Tap a starter question below or ask why a crop or fertilizer was recommended for your parcel!`,
      grounded: true,
      source: 'brain',
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);

  const [generalMessages, setGeneralMessages] = useState([
    {
      id: 'welcome-general',
      sender: 'model',
      text: `Hello **${userName || 'Kisan Friend'}**! 🌱 I am CropCare's General Agronomy helper. Ask me any questions about crops, diseases, fertilizers, mandi rates, or attach a photo for examination!`,
      source: 'brain',
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

  const isGeminiKeyValid = Boolean(
    runtimeApiKey && 
    !runtimeApiKey.startsWith('AQ.') && 
    (runtimeApiKey.startsWith('AIza') || runtimeApiKey.length >= 35)
  );

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [advisorMessages, generalMessages, isTyping, botMode, showKeyConfig, isMaximized]);

  // Listen for diagnosis handoff from Leaf Scanner
  useEffect(() => {
    const handleLeafDiagnosis = (e) => {
      const detail = e.detail;
      if (!detail) return;
      setIsOpen(true);
      setBotMode('general');
      const cropText = detail.species || detail.name || 'Crop Specimen';
      const condText = detail.condition || detail.disease_name || 'Plant Health Check';
      const prompt = `I just scanned a **${cropText}** with the Leaf Scanner. Diagnosis detected: **${condText}**. What are the organic treatments, chemical controls, and preventive steps?`;

      const userMsg = {
        id: `user-diag-${Date.now()}`,
        sender: 'user',
        text: prompt,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };

      setGeneralMessages(prev => [...prev, userMsg]);
      setIsTyping(true);

      setTimeout(async () => {
        try {
          const resp = await generateGeneralResponse({
            query: `Diagnosis: ${cropText} with ${condText}. What are the organic treatments, chemical controls, and preventive steps?`,
            language
          });
          const modelMsg = {
            id: `model-diag-${Date.now()}`,
            sender: 'model',
            text: resp.text,
            source: resp.source,
            timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
          };
          setGeneralMessages(prev => [...prev, modelMsg]);
        } catch (err) {
          console.error(err);
        } finally {
          setIsTyping(false);
        }
      }, 500);
    };

    window.addEventListener('cropcare:diagnose-leaf', handleLeafDiagnosis);
    return () => window.removeEventListener('cropcare:diagnose-leaf', handleLeafDiagnosis);
  }, [language]);

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

  const copyToClipboard = (msgId, text) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(msgId);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const handleSaveKey = async (e) => {
    e.preventDefault();
    const trimmed = customKeyInput.trim();
    if (!trimmed) {
      saveRuntimeApiKey('');
      setKeyNotice({ type: 'info', text: 'Using Built-in Agronomy Brain (No API Key needed)' });
      setTimeout(() => setKeyNotice(null), 3500);
      return;
    }

    if (trimmed.startsWith('AQ.') || trimmed.length < 25) {
      setKeyNotice({ type: 'error', text: 'Invalid key. Google Gemini keys start with "AIzaSy..."' });
      return;
    }

    await saveRuntimeApiKey(trimmed);
    setKeyNotice({ type: 'success', text: 'Gemini API key saved! Live AI active.' });
    setTimeout(() => {
      setKeyNotice(null);
      setShowKeyConfig(false);
    }, 2000);
  };

  const handleResetToBrain = async () => {
    setCustomKeyInput('');
    await saveRuntimeApiKey('');
    setKeyNotice({ type: 'info', text: 'Switched to Built-in Agronomy Brain.' });
    setTimeout(() => setKeyNotice(null), 3000);
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

    try {
      let replyContent = '';
      let replySource = 'brain';

      // 1. Try Live AI backend (Server Gemini or custom key)
      const reqHeaders = { 'Content-Type': 'application/json' };
      if (runtimeApiKey) {
        reqHeaders['x-gemini-api-key'] = runtimeApiKey;
      }

      if (botMode === 'advisor') {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 12000);

          const res = await fetch('/api/farm-advisor', {
            method: 'POST',
            headers: reqHeaders,
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
            if (data.reply) {
              replyContent = data.reply;
              replySource = 'gemini';
            }
          }
        } catch (e) {
          console.warn('Live advisor backend unavailable, using built-in Agronomy Brain:', e.message);
        }
      } else {
        try {
          const controller = new AbortController();
          const timeoutId = setTimeout(() => controller.abort(), 12000);

          const res = await fetch('/api/chat', {
            method: 'POST',
            headers: reqHeaders,
            body: JSON.stringify({
              message: trimmed,
              history: cleanHistory,
              language: language,
              userName: userName || 'Friend',
              userRole: userRole || 'user',
              image: userMsg.image
            }),
            signal: controller.signal
          });
          clearTimeout(timeoutId);

          if (res.ok) {
            const data = await res.json();
            if (data.reply) {
              replyContent = data.reply;
              replySource = 'gemini';
            }
          }
        } catch (e) {
          console.warn('Live chat backend unavailable, using built-in Assistant Brain:', e.message);
        }
      }

      // 2. Intelligent Agronomy Brain fallback / offline engine
      if (!replyContent) {
        if (botMode === 'advisor') {
          replyContent = generateAdvisorResponse(trimmed, selectedPlotId, language, userName);
        } else {
          replyContent = generateGeneralResponse(trimmed, language, userName, currentPlot);
        }
        replySource = 'brain';
      }

      setActiveMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'model',
          text: replyContent,
          grounded: botMode === 'advisor',
          source: replySource,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } catch (err) {
      console.error('Chat error:', err);
      // Even on severe error, never show broken canned reply; provide helpful agronomy response
      const fallbackReply = botMode === 'advisor'
        ? generateAdvisorResponse(trimmed, selectedPlotId, language, userName)
        : generateGeneralResponse(trimmed, language, userName, currentPlot);

      setActiveMessages(prev => [
        ...prev,
        {
          id: `bot-${Date.now()}`,
          sender: 'model',
          text: fallbackReply,
          grounded: botMode === 'advisor',
          source: 'brain',
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
          source: 'brain',
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    } else {
      setGeneralMessages([
        {
          id: `welcome-${Date.now()}`,
          sender: 'model',
          text: `Chat cleared! How can I assist you with your crops, fertilizers, or diseases today?`,
          source: 'brain',
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
        aria-label="Open CropCare AI Assistant"
      >
        <Bot className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 font-bold text-xs pl-0 group-hover:pl-2">
          {botMode === 'advisor' ? 'Farm Advisor AI' : 'CropCare AI'}
        </span>
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full animate-ping" />
        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-slate-900 rounded-full" />
      </button>

      {/* Floating Chat Modal */}
      {isOpen && (
        <div className={`z-50 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden transition-all duration-200 ${
          isMaximized
            ? 'fixed inset-2 sm:inset-6 max-w-5xl mx-auto h-[92vh] max-h-[95vh] ring-4 ring-emerald-500/20'
            : 'fixed bottom-20 right-3 sm:right-6 w-[95vw] sm:w-[500px] h-[660px] max-h-[85vh] animate-in fade-in slide-in-from-bottom-5'
        }`}>
          
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
                    
                    {/* Live Engine Indicator */}
                    <button
                      type="button"
                      onClick={() => setShowKeyConfig(!showKeyConfig)}
                      className={`px-1.5 py-0.5 rounded-full text-[9px] font-bold border transition-colors flex items-center gap-1 cursor-pointer ${
                        isGeminiKeyValid
                          ? 'bg-amber-400/20 text-amber-200 border-amber-300/40 hover:bg-amber-400/30'
                          : 'bg-emerald-500/40 text-emerald-100 border-emerald-400/30 hover:bg-emerald-500/50'
                      }`}
                      title="Click to configure Gemini API Key"
                    >
                      {isGeminiKeyValid ? (
                        <>
                          <Sparkles className="w-2.5 h-2.5 text-amber-300" /> Live Gemini
                        </>
                      ) : (
                        <>
                          <Cpu className="w-2.5 h-2.5 text-emerald-200" /> Agronomy Brain
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[10px] text-emerald-100/90 font-medium">
                    {botMode === 'advisor' 
                      ? `Telemetry Grounded on ${currentPlot.code}: ${currentPlot.current_crop}` 
                      : 'World-Class Agronomy & Plant Pathology Helper'}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {setActiveNav && (
                  <button
                    type="button"
                    onClick={() => {
                      setActiveNav('scanner');
                      if (!isMaximized) setIsOpen(false);
                    }}
                    className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer flex items-center gap-1 text-[11px] font-bold"
                    title="Open Camera Scanner"
                  >
                    <Camera className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Scan</span>
                  </button>
                )}
                <button
                  type="button"
                  onClick={() => setIsMaximized(!isMaximized)}
                  className="p-1.5 rounded-xl text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
                  title={isMaximized ? "Restore window" : "Maximize window"}
                >
                  {isMaximized ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>
                <button
                  type="button"
                  onClick={() => setShowKeyConfig(!showKeyConfig)}
                  className={`p-1.5 rounded-xl transition-colors cursor-pointer ${
                    showKeyConfig ? 'bg-white/25 text-white' : 'text-emerald-200 hover:text-white hover:bg-white/10'
                  }`}
                  title="Configure Gemini API Key"
                >
                  <Key className="w-4 h-4" />
                </button>
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
                  title="Close chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Collapsible Key Setup Drawer */}
            {showKeyConfig && (
              <div className="bg-black/30 p-2.5 rounded-2xl border border-white/15 text-xs animate-in fade-in duration-150 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[11px] font-bold text-emerald-100">
                  <span className="flex items-center gap-1">
                    <Key className="w-3.5 h-3.5 text-amber-300" /> Gemini API Key (Optional)
                  </span>
                  <a
                    href="https://aistudio.google.com/app/apikey"
                    target="_blank"
                    rel="noreferrer"
                    className="text-[10px] text-amber-200 hover:text-white underline flex items-center gap-0.5"
                  >
                    Get Free Key <ExternalLink className="w-2.5 h-2.5" />
                  </a>
                </div>

                <p className="text-[10px] text-emerald-200/90 leading-tight">
                  {isGeminiKeyValid 
                    ? 'Connected to Google Gemini Live API. Responses are powered by multimodal LLM.' 
                    : 'Currently powered by CropCare’s Built-in Agronomy Brain (100% offline, 0s latency). You can add a Gemini key for open-ended cloud AI.'}
                </p>

                <form onSubmit={handleSaveKey} className="flex gap-1.5 items-center">
                  <input
                    type="password"
                    value={customKeyInput}
                    onChange={(e) => setCustomKeyInput(e.target.value)}
                    placeholder="Paste AIzaSy... key or leave empty"
                    className="flex-1 px-2.5 py-1.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-emerald-200/50 text-[11px] focus:outline-none focus:ring-1 focus:ring-amber-300 font-mono"
                  />
                  <button
                    type="submit"
                    className="px-2.5 py-1.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-900 font-bold text-[11px] shadow-sm cursor-pointer whitespace-nowrap"
                  >
                    Save Key
                  </button>
                  {isGeminiKeyValid && (
                    <button
                      type="button"
                      onClick={handleResetToBrain}
                      className="px-2 py-1.5 rounded-xl bg-white/10 hover:bg-white/20 text-white text-[10px] font-semibold cursor-pointer whitespace-nowrap"
                      title="Clear key and use Agronomy Brain"
                    >
                      Clear
                    </button>
                  )}
                </form>

                {keyNotice && (
                  <div className={`p-1.5 rounded-lg text-[10px] font-semibold flex items-center gap-1 ${
                    keyNotice.type === 'error' ? 'bg-rose-500/30 text-rose-100' : 'bg-emerald-500/30 text-emerald-100'
                  }`}>
                    <CheckCircle2 className="w-3 h-3" /> {keyNotice.text}
                  </div>
                )}
              </div>
            )}

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
                    className={`px-2 py-0.5 rounded-md text-[10px] font-bold transition-all whitespace-nowrap cursor-pointer ${
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

                  {/* Header bar on model messages */}
                  {m.sender !== 'user' && (
                    <div className="flex items-center justify-between text-[10px] font-bold text-slate-400 pb-1 mb-1 border-b border-slate-100 dark:border-slate-700/60">
                      <div className="flex items-center gap-1.5">
                        {m.grounded && (
                          <span className="flex items-center gap-0.5 text-emerald-600 dark:text-emerald-400">
                            <ShieldCheck className="w-3 h-3" /> Grounded ({currentPlot.code})
                          </span>
                        )}
                        <span className="px-1.5 py-0.2 rounded-full text-[9px] bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300">
                          {m.source === 'gemini' ? '✨ Gemini Live' : '🌱 Agronomy Brain'}
                        </span>
                      </div>

                      <div className="flex items-center gap-1">
                        <button
                          type="button"
                          onClick={() => copyToClipboard(m.id, m.text)}
                          className="text-slate-400 hover:text-emerald-600 transition-colors p-0.5"
                          title="Copy response"
                        >
                          {copiedId === m.id ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                        </button>
                        <button
                          type="button"
                          onClick={() => toggleSpeakMessage(m.id, m.text)}
                          className="text-slate-400 hover:text-emerald-600 transition-colors p-0.5"
                          title={isSpeakingId === m.id ? "Stop voice" : "Read aloud"}
                        >
                          {isSpeakingId === m.id ? <VolumeX className="w-3 h-3 text-emerald-600 animate-pulse" /> : <Volume2 className="w-3 h-3" />}
                        </button>
                      </div>
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
                    {botMode === 'advisor' ? 'Analyzing plot telemetry & agronomy...' : 'Formulating agricultural advisory...'}
                  </span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Quick Starter Suggestions Bar */}
          <div className="p-2 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex flex-col gap-1">
            <div className="flex items-center justify-between px-1">
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-emerald-500" /> 
                {botMode === 'advisor' ? 'Plot Inquiries:' : 'Recommended Topics:'}
              </span>
            </div>
            
            <div className="flex gap-1.5 overflow-x-auto scrollbar-none pb-0.5">
              {botMode === 'advisor' ? (
                <>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('Why was this crop recommended for my parcel?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>🌱</span>
                    <span>Why this crop?</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('How do soil moisture and NPK affect this crop?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>🧪</span>
                    <span>NPK & Moisture</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What water and fertilizer schedule should I follow now?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>💧</span>
                    <span>Water & Spray plan</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What are the pest risks and NDVI score for this plot?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>🛡️</span>
                    <span>Pest Risk & Vigour</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What is my projected yield and revenue for this harvest?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>📊</span>
                    <span>Yield & Revenue</span>
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What are today\'s real live mandi prices across APMCs?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-amber-50 dark:bg-amber-950/60 text-[10px] font-bold text-amber-800 dark:text-amber-200 hover:bg-amber-100 border border-amber-300 dark:border-amber-700 transition-all shrink-0 cursor-pointer flex items-center gap-1"
                  >
                    <span>📈</span>
                    <span>Live Mandi Rates</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What is the current mandi price and MSP for Wheat and Mustard?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🌾 Wheat & Mustard Price
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What is the optimal fertilizer dose for Wheat?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🌾 Wheat Fertilizer
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('How to treat Tomato early blight and leaf curl?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🍅 Tomato Diseases
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('How to prepare 5% Neem oil spray for pests?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🌿 Organic Neem Spray
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('Explain PM-KISAN ₹6,000 scheme eligibility')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🏛️ PM-KISAN Scheme
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('What are current MSP rates for major crops?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    📈 Mandi MSP Rates
                  </button>
                  <button
                    type="button"
                    onClick={() => handleQuickQuestion('How to treat acidic and alkaline soils?')}
                    disabled={isTyping}
                    className="px-2.5 py-1 rounded-xl bg-slate-100 dark:bg-slate-800 text-[10px] font-semibold text-slate-700 dark:text-slate-200 hover:bg-emerald-50 hover:text-emerald-700 dark:hover:bg-emerald-950/60 dark:hover:text-emerald-300 border border-slate-200 dark:border-slate-700 transition-all shrink-0 cursor-pointer"
                  >
                    🧪 Soil pH Remedy
                  </button>
                </>
              )}
            </div>
          </div>

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

              {setActiveNav && (
                <button
                  type="button"
                  onClick={() => {
                    setActiveNav('scanner');
                    if (!isMaximized) setIsOpen(false);
                  }}
                  className="p-2 text-slate-500 hover:text-emerald-600 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
                  title="Scan Plant Leaf with Camera"
                >
                  <Camera className="w-4 h-4" />
                </button>
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
                    ? `Ask Farm Advisor about Plot ${currentPlot.code}...`
                    : 'Ask about crops, diseases, fertilizers...'
                }
                className="flex-1 px-3 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 border-none focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white placeholder:text-slate-400"
              />

              <button
                type="submit"
                disabled={!inputText.trim() && !attachedImage}
                className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 disabled:opacity-40 text-white transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
                title="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
            
            <div className="text-[9px] text-slate-400 text-center mt-1.5 flex items-center justify-center gap-1">
              <CheckCircle2 className="w-3 h-3 text-emerald-500" />
              <span>
                {botMode === 'advisor'
                  ? 'Telemetry verified: Soil NPK, moisture & weather • Precision Agronomy'
                  : 'CropCare Agronomy Brain • 30+ Crops, IPM & Government Schemes'}
              </span>
            </div>
          </form>

        </div>
      )}
    </>
  );
}
