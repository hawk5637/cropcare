import React, { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { Sparkles, ArrowRight, Sprout, Globe, Check } from 'lucide-react';

export default function AnimatedOpeningLogo({ onComplete }) {
  const { language, setLanguage, SUPPORTED_LOCALES } = useApp();
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const texts = {
    en: {
      badge: "Agronomy Intelligence",
      skip: "Skip Opening",
      tagline: "Smart Agronomy Intelligence Platform",
      sub: "Uniting Farmers, Wholesalers, OEMs & ICAR Agronomists on a Next-Generation Agricultural Network",
      status: "Initializing System Engine...",
      version: "v2.5 • Powered by Google Gemini 3.5 AI & e-NAM Integration"
    },
    hi: {
      badge: "कृषि बुद्धिमत्ता",
      skip: "छोड़ें (आगे बढ़ें)",
      tagline: "स्मार्ट कृषि एवं कृषि-विज्ञान बुद्धिमत्ता मंच",
      sub: "किसानों, थोक खरीदारों, मशीनरी निर्माताओं और कृषि वैज्ञानिकों का एकीकृत डिजिटल नेटवर्क",
      status: "सिस्टम इंजन प्रारंभ हो रहा है...",
      version: "संस्करण 2.5 • गूगल जेमिनी 3.5 AI एवं ई-नाम द्वारा संचालित"
    },
    ta: {
      badge: "விவசாய நுண்ணறிவு",
      skip: "தவிர் (தொடர்க)",
      tagline: "ஸ்மார்ட் வேளாண்மை மற்றும் விவசாய நுண்ணறிவு தளம்",
      sub: "விவசாயிகள், மொத்த வியாபாரிகள், உற்பத்தியாளர்கள் மற்றும் வேளாண் விஞ்ஞானிகளை இணைக்கும் தளம்",
      status: "கணினி தொடங்குகிறது...",
      version: "பதிப்பு 2.5 • கூகிள் ஜெமினி 3.5 AI & இ-நாம் ஒருங்கிணைப்பு"
    },
    fr: {
      badge: "Intelligence Agronomique",
      skip: "Passer l'Intro",
      tagline: "Plateforme Intelligente d'Agronomie & d'Agriculture",
      sub: "Fédération des Agriculteurs, Acheteurs, Fournisseurs et Experts Agronomes",
      status: "Initialisation du moteur système...",
      version: "v2.5 • Propulsé par Google Gemini 3.5 IA & e-NAM"
    }
  };

  const tOpening = texts[language] || texts.en;

  useEffect(() => {
    // Smooth progress counter up to 100% over 2.8 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + 2);
      });
    }, 45);

    // Auto-advance after 3.2 seconds
    const timer = setTimeout(() => {
      handleProceed();
    }, 3200);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleProceed = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 450);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-500 bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-950 text-white ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Animated Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core Center Radiant Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-emerald-500/15 via-teal-500/10 to-transparent rounded-full blur-[140px] animate-pulse"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 bg-lime-400/10 rounded-full blur-[100px]"></div>
        <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-emerald-600/15 rounded-full blur-[120px]"></div>

        {/* Ambient Subtle Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: '36px 36px'
          }}
        ></div>

        {/* Animated Light Specks */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full blur-[1px] animate-ping opacity-40"></div>
        <div className="absolute top-3/4 right-1/3 w-1.5 h-1.5 bg-lime-300 rounded-full blur-[0.5px] animate-ping opacity-50" style={{ animationDuration: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-teal-200 rounded-full opacity-60 animate-pulse"></div>
      </div>

      {/* Top Header Bar: Language Switcher & Skip Button */}
      <div className="w-full max-w-4xl flex items-center justify-between z-20">
        
        {/* Quick Language Switcher */}
        <div className="flex items-center gap-1.5 bg-white/10 backdrop-blur-xl rounded-full p-1 border border-white/15 shadow-lg">
          <div className="pl-2 pr-1 text-slate-400 flex items-center">
            <Globe className="w-3.5 h-3.5 text-emerald-400" />
          </div>
          {SUPPORTED_LOCALES.map((loc) => (
            <button
              key={loc.code}
              onClick={(e) => {
                e.stopPropagation();
                setLanguage(loc.code);
              }}
              className={`px-2.5 py-1 text-[11px] font-extrabold rounded-full transition-all cursor-pointer ${
                language === loc.code
                  ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-md shadow-emerald-500/30 scale-105'
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
              title={loc.name}
            >
              <span>{loc.flag}</span>
              <span className="hidden sm:inline ml-1">{loc.code.toUpperCase()}</span>
            </button>
          ))}
        </div>

        {/* Skip Button */}
        <button
          onClick={handleProceed}
          className="group px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-xs font-bold text-white transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer shadow-lg hover:border-emerald-400/50"
        >
          <span>{tOpening.skip}</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1 text-emerald-400" />
        </button>
      </div>

      {/* Center Animated Logo & Branding */}
      <div className="flex flex-col items-center justify-center my-auto z-10 text-center max-w-xl">
        
        {/* Animated Emblem Badge */}
        <div className="relative w-36 h-36 sm:w-48 sm:h-48 flex items-center justify-center mb-8">
          
          {/* Outer Orbital Orbit Ring */}
          <div 
            className="absolute inset-0 rounded-full border-2 border-dashed border-emerald-400/30 animate-spin"
            style={{ animationDuration: '20s' }}
          ></div>

          {/* Glowing Energy Ripple Ring */}
          <div 
            className="absolute -inset-3 rounded-full border border-emerald-400/20 animate-ping opacity-25"
            style={{ animationDuration: '3.5s' }}
          ></div>

          {/* Center Glow Backplate */}
          <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-emerald-600/40 via-lime-500/30 to-teal-400/30 blur-xl"></div>

          {/* Frosted Glass Emblem */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-emerald-900/90 via-slate-900/80 to-emerald-800/90 border-2 border-emerald-400/40 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.35)] transform transition-transform hover:scale-105 duration-300">
            
            {/* Vector SVG Blooming Plant */}
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 filter drop-shadow-[0_0_15px_rgba(52,211,153,0.8)]"
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Ground Nutrient Base */}
              <ellipse cx="32" cy="54" rx="14" ry="4" fill="currentColor" fillOpacity="0.3" />
              
              {/* Plant Stem */}
              <path 
                d="M32 54V24" 
                stroke="url(#stemGrad)" 
                strokeWidth="4" 
                strokeLinecap="round" 
              />

              {/* Left Leaf Bloom */}
              <path 
                d="M32 38C22 38 14 30 14 20C24 20 32 28 32 38Z" 
                fill="url(#leafGradLeft)" 
              />

              {/* Right Leaf Bloom */}
              <path 
                d="M32 30C42 30 50 22 50 12C40 12 32 20 32 30Z" 
                fill="url(#leafGradRight)" 
              />

              {/* Top Sun Shimmer Sparkle */}
              <circle cx="32" cy="18" r="3.5" fill="#facc15" className="animate-pulse" />

              <defs>
                <linearGradient id="stemGrad" x1="32" y1="54" x2="32" y2="24" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#059669" />
                  <stop offset="1" stopColor="#34d399" />
                </linearGradient>
                <linearGradient id="leafGradLeft" x1="14" y1="20" x2="32" y2="38" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#34d399" />
                  <stop offset="1" stopColor="#059669" />
                </linearGradient>
                <linearGradient id="leafGradRight" x1="32" y1="12" x2="50" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#a3e635" />
                  <stop offset="1" stopColor="#10b981" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Brand Typography */}
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-1">
            <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '8s' }} />
            <span>{tOpening.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-1">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              CROP
            </span>
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              CARE
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
            {tOpening.tagline}
          </p>

          <p className="text-xs text-slate-300 max-w-md mx-auto pt-2 leading-relaxed">
            {tOpening.sub}
          </p>
        </div>

      </div>

      {/* Bottom Progress Bar & Loading Indicator */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3 z-10">
        <div className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-300">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            {tOpening.status}
          </span>
          <span className="font-mono text-emerald-300 font-bold">{progress}%</span>
        </div>

        {/* Progress Track */}
        <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden backdrop-blur-sm border border-white/10">
          <div 
            className="h-full bg-gradient-to-r from-emerald-500 via-lime-400 to-teal-400 rounded-full transition-all duration-100 ease-out shadow-[0_0_12px_rgba(52,211,153,0.8)]"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <div className="text-[10px] text-slate-400 tracking-wider text-center">
          {tOpening.version}
        </div>
      </div>

    </div>
  );
}
