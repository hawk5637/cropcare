import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  Camera, 
  TrendingUp, 
  Layers, 
  Bot, 
  Sparkles, 
  ArrowRight, 
  ArrowLeft, 
  CheckCircle, 
  X, 
  ShieldCheck, 
  Play, 
  Compass,
  Award
} from 'lucide-react';

export default function PlatformIntroModal({ isOpen, onClose }) {
  const { userName, userRole, setActiveNav } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'welcome',
      badge: 'Welcome to CropCare',
      title: 'Smart Agriculture & Agronomy Intelligence Platform',
      tagline: 'Better Farms, Brighter Futures • From Soil to Success',
      description: `Welcome aboard, ${userName || 'Farmer'}! CropCare unites farmers, buyers, agricultural suppliers, and ICAR agronomists onto a unified, next-generation intelligent digital ecosystem.`,
      icon: Sprout,
      color: 'from-emerald-600 to-green-500',
      bgGlow: 'bg-emerald-500/10',
      highlights: [
        'Direct connection between verified farmers and bulk buyers with zero middlemen',
        'Next-generation AI Agronomy diagnostics and personalized farm advisories',
        'Transparent e-NAM and APMC real-time market rates and MSP protection',
        'Comprehensive farm lifecycle management across all 18 smart modules'
      ]
    },
    {
      id: 'scanner',
      badge: 'AI Vision Diagnosis',
      title: 'Instant Crop Disease & Leaf Health Scanner',
      tagline: 'Point your camera at any crop leaf for instant clinical remedies',
      description: 'Powered by multimodal Google Gemini 3.5 vision intelligence and ICAR agricultural standards, our AI Leaf Doctor detects blights, rusts, nutrient deficiencies, and insect attacks in seconds.',
      icon: Camera,
      color: 'from-teal-600 to-emerald-500',
      bgGlow: 'bg-teal-500/10',
      highlights: [
        'Live device camera stream with real-time HUD targeting alignment',
        'Identifies over 80+ crop diseases across Cereals, Vegetables, Fruits, and Pulses',
        'Instant dual-remedy breakdown: Organic botanical recipes & ICAR chemical doses',
        'Audio voice readout to listen to treatments directly in the field'
      ]
    },
    {
      id: 'mandi',
      badge: 'Transparent Marketplace',
      title: 'Real-Time Mandi Rates & Direct Farm Trade',
      tagline: 'Maximize harvest profits with zero middleman deductions',
      description: 'Access live wholesale mandi prices across APMCs nationwide. Connect directly with institutional food processors, mills, and exporters for assured forward-purchase agreements.',
      icon: TrendingUp,
      color: 'from-amber-600 to-yellow-500',
      bgGlow: 'bg-amber-500/10',
      highlights: [
        'Real-time price tickers for Wheat, Basmati Rice, Mustard, Cotton, Tomato, and more',
        'Digital escrow payments ensuring 100% fraud-proof settlement upon delivery',
        'Buyer procurement bids with transparent quality grade inspection protocols',
        'Direct logistics coordination from farm gate to warehouse storage'
      ]
    },
    {
      id: 'modules',
      badge: 'End-to-End Suite',
      title: '18 Precision Agriculture Modules',
      tagline: 'Manage your farm lifecycle from pre-sowing soil tests to post-harvest sales',
      description: 'Everything a modern farmer, agribusiness, or agronomist needs is built-in. Seamlessly navigate between specialized tools tailored to every stage of agriculture.',
      icon: Layers,
      color: 'from-blue-600 to-cyan-500',
      bgGlow: 'bg-blue-500/10',
      highlights: [
        'Land & Soil health mapping with NPK ratio optimization',
        'IoT smart irrigation scheduling and rainfall probability radar',
        'Heavy farm machinery & tractor hiring network at hourly village rates',
        'Cold storage locator and climate-controlled warehouse booking'
      ]
    },
    {
      id: 'assistant',
      badge: '24/7 Agronomist Companion',
      title: 'CropCare Multilingual AI Assistant',
      tagline: 'Ask anything anytime via text or voice in your native language',
      description: 'Your personal farming assistant is always on duty in the bottom-right corner. Chat or speak freely to calculate fertilizer mixtures, verify pest spray intervals, or plan your crop rotation.',
      icon: Bot,
      color: 'from-indigo-600 to-purple-500',
      bgGlow: 'bg-indigo-500/10',
      highlights: [
        'Multilingual voice recognition in English, Hindi, Tamil, Telugu, and more',
        'Immediate calculation of DAP, Urea, and micronutrient application schedules',
        'Step-by-step instructions for zero-cost organic bio-pesticide concoctions',
        'Audio speech synthesis button to read answers aloud for field convenience'
      ]
    }
  ];

  const slide = slides[currentSlide];
  const isLast = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      triggerConfetti();
      localStorage.setItem('cropcare_intro_seen', 'true');
      onClose();
    } else {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (e) {
      // fallback if confetti fails
    }
  };

  const handleDirectAction = (navTarget) => {
    localStorage.setItem('cropcare_intro_seen', 'true');
    onClose();
    setActiveNav(navTarget);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-2xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top Decorative Header */}
        <div className={`p-6 sm:p-8 bg-gradient-to-r ${slide.color} text-white relative overflow-hidden transition-all duration-500`}>
          {/* Subtle Ambient Circles */}
          <div className="absolute -top-12 -right-12 w-48 h-48 rounded-full bg-white/10 blur-2xl pointer-events-none" />
          <div className="absolute -bottom-12 -left-12 w-48 h-48 rounded-full bg-black/10 blur-2xl pointer-events-none" />

          {/* Close button */}
          <button
            onClick={() => {
              localStorage.setItem('cropcare_intro_seen', 'true');
              onClose();
            }}
            className="absolute top-5 right-5 p-2 rounded-full bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
            aria-label="Close Tour"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md text-white border border-white/20 flex items-center gap-1.5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              {slide.badge}
            </span>
            <span className="text-xs text-white/80 font-medium">
              Step {currentSlide + 1} of {slides.length}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight">
            {slide.title}
          </h2>
          <p className="text-sm text-white/90 font-medium mt-1">
            {slide.tagline}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            {slide.description}
          </p>

          {/* Highlights checklist */}
          <div className="space-y-3 bg-slate-50 dark:bg-slate-800/60 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              Key Platform Highlights
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {slide.highlights.map((h, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-slate-200">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Slide specific quick action shortcuts on last slide */}
          {isLast && (
            <div className="pt-2 flex flex-wrap gap-2.5 justify-center">
              <button
                type="button"
                onClick={() => handleDirectAction('scanner')}
                className="px-4 py-2.5 rounded-xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Camera className="w-4 h-4 text-emerald-600" />
                Launch AI Leaf Doctor
              </button>
              <button
                type="button"
                onClick={() => handleDirectAction('modules')}
                className="px-4 py-2.5 rounded-xl bg-blue-100 hover:bg-blue-200 dark:bg-blue-950 dark:hover:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Layers className="w-4 h-4 text-blue-600" />
                Explore All 18 Modules
              </button>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="p-4 sm:p-6 bg-slate-50 dark:bg-slate-900/80 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between">
          {/* Slide Indicator Dots */}
          <div className="flex items-center gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentSlide(i)}
                className={`h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === i 
                    ? 'w-6 bg-emerald-600' 
                    : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400'
                }`}
                aria-label={`Jump to slide ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-3">
            {currentSlide > 0 && (
              <button
                type="button"
                onClick={handlePrev}
                className="px-4 py-2 text-xs font-bold rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                Previous
              </button>
            )}

            <button
              type="button"
              onClick={handleNext}
              className={`px-5 py-2.5 rounded-xl text-white font-extrabold text-xs shadow-lg transition-all flex items-center gap-2 cursor-pointer ${
                isLast
                  ? 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 shadow-emerald-600/30 hover:scale-105 active:scale-95'
                  : 'bg-emerald-600 hover:bg-emerald-700 shadow-emerald-600/25'
              }`}
            >
              <span>{isLast ? 'Get Started & Explore Dashboard' : 'Next Feature'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
