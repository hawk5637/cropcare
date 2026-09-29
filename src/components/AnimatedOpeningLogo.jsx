import React, { useEffect, useState } from 'react';
import { Sparkles, ArrowRight, Sprout, ShieldCheck, Zap } from 'lucide-react';

export default function AnimatedOpeningLogo({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  useEffect(() => {
    // Progress counter animation up to 100% over 2.6 seconds
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return Math.min(100, prev + 2);
      });
    }, 45);

    // Auto-advance after 2.8 seconds
    const timer = setTimeout(() => {
      handleProceed();
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  const handleProceed = () => {
    setIsFadingOut(true);
    setTimeout(() => {
      if (onComplete) onComplete();
    }, 400);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden transition-all duration-500 bg-gradient-to-br from-emerald-950 via-slate-950 to-emerald-900 text-white ${
        isFadingOut ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
      }`}
    >
      {/* Background Ambient Glows & Particle Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Core Center Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/15 rounded-full blur-[120px] animate-pulse"></div>
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-lime-400/10 rounded-full blur-[90px]"></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-teal-500/10 rounded-full blur-[100px]"></div>

        {/* Ambient Floating Stars / Light Specks */}
        <div className="absolute top-1/5 left-1/3 w-1.5 h-1.5 bg-emerald-300 rounded-full blur-[0.5px] animate-ping opacity-60"></div>
        <div className="absolute top-2/3 right-1/5 w-2 h-2 bg-lime-300 rounded-full blur-[0.5px] animate-ping opacity-40"></div>
        <div className="absolute bottom-1/6 left-1/5 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse"></div>
      </div>

      {/* Top Header / Skip Button */}
      <div className="w-full max-w-4xl flex items-center justify-between z-10">
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-[11px] font-semibold text-emerald-400 tracking-wider uppercase">
          <Sparkles className="w-3.5 h-3.5 text-lime-400 animate-spin" style={{ animationDuration: '6s' }} />
          <span>Agronomy Intelligence</span>
        </div>

        <button
          onClick={handleProceed}
          className="group px-4 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 backdrop-blur-md text-xs font-bold text-white transition-all flex items-center gap-1.5 hover:scale-105 active:scale-95 cursor-pointer shadow-lg"
        >
          <span>Skip Opening</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 text-emerald-400" />
        </button>
      </div>

      {/* Main Center Animated Logo & Brand Reveal */}
      <div className="flex flex-col items-center justify-center my-auto z-10 text-center max-w-xl">
        {/* Animated Icon Container */}
        <div className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center mb-8">
          {/* Outer Rotating Dotted Orbital Ring */}
          <div 
            className="absolute inset-0 rounded-full border border-dashed border-emerald-400/30 animate-spin"
            style={{ animationDuration: '24s' }}
          ></div>

          {/* Middle Concentric Gradient Ring with Pulse */}
          <div 
            className="absolute -inset-3 rounded-full border-2 border-emerald-500/20 animate-ping opacity-25"
            style={{ animationDuration: '3s' }}
          ></div>

          {/* Glowing Aura Ring */}
          <div className="absolute inset-2 rounded-full bg-gradient-to-tr from-emerald-600/30 via-lime-500/20 to-teal-400/30 blur-md"></div>

          {/* Inner Frosted Glass Circle with Drop Shadow */}
          <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-tr from-emerald-900/90 via-emerald-800/80 to-slate-900/90 border-2 border-emerald-400/40 backdrop-blur-2xl flex items-center justify-center shadow-[0_0_60px_rgba(16,185,129,0.35)] transform transition-transform hover:scale-105 duration-300">
            {/* Custom SVG Sprouting Plant Blooming Animation */}
            <svg 
              className="w-16 h-16 sm:w-20 sm:h-20 text-emerald-400 filter drop-shadow-[0_0_12px_rgba(52,211,153,0.8)]"
              viewBox="0 0 64 64" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Seed Base */}
              <ellipse cx="32" cy="54" rx="14" ry="4" fill="currentColor" fillOpacity="0.25" />
              
              {/* Plant Stem growing upward */}
              <path 
                d="M32 54V24" 
                stroke="url(#stemGrad)" 
                strokeWidth="4" 
                strokeLinecap="round" 
                className="animate-[drawStem_1.5s_ease-out_forwards]"
              />

              {/* Left Leaf Blooming */}
              <path 
                d="M32 38C22 38 14 30 14 20C24 20 32 28 32 38Z" 
                fill="url(#leafGradLeft)" 
                className="animate-[growLeafLeft_1.2s_ease-out_0.6s_both]"
              />

              {/* Right Leaf Blooming */}
              <path 
                d="M32 30C42 30 50 22 50 12C40 12 32 20 32 30Z" 
                fill="url(#leafGradRight)" 
                className="animate-[growLeafRight_1.2s_ease-out_0.9s_both]"
              />

              {/* Sunbeam Sparkle at the Top Shoot */}
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

        {/* Brand Name Typography */}
        <div className="space-y-2">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white flex items-center justify-center gap-1">
            <span className="bg-gradient-to-r from-white via-emerald-100 to-emerald-400 bg-clip-text text-transparent">
              CROP
            </span>
            <span className="bg-gradient-to-r from-lime-400 to-emerald-400 bg-clip-text text-transparent">
              CARE
            </span>
          </h1>

          <p className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-emerald-400 uppercase">
            Smart Agronomy Intelligence Platform
          </p>

          <p className="text-xs text-slate-400 max-w-md mx-auto pt-2 leading-relaxed">
            Uniting Farmers, Wholesalers, OEMs & ICAR Agronomists on a Next-Generation Agricultural Network
          </p>
        </div>
      </div>

      {/* Bottom Progress Bar & Loading Indicator */}
      <div className="w-full max-w-sm flex flex-col items-center gap-3 z-10">
        <div className="w-full flex items-center justify-between text-[11px] font-semibold text-slate-400">
          <span className="flex items-center gap-1.5 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
            Initializing System Engine...
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

        <div className="text-[10px] text-slate-500 tracking-wider">
          v2.5 • Powered by Google Gemini 3.5 AI & e-NAM Integration
        </div>
      </div>
    </div>
  );
}
