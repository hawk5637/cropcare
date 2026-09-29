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
  Scale, 
  Sliders, 
  ShieldCheck, 
  Play, 
  Compass,
  Award
} from 'lucide-react';

export default function AnimatedIntroScreen({ onComplete }) {
  const { userName, userRole } = useApp();
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    // Initial celebratory confetti upon entering the intro
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch (e) { /* ignore */ }
  }, []);

  const slides = [
    {
      id: 'welcome',
      badge: 'Welcome to CropCare',
      title: 'Smart Agriculture & Agronomy Intelligence Platform',
      tagline: 'Better Farms, Brighter Futures • From Soil to Success',
      description: `Welcome aboard, ${userName || 'Farmer'}! CropCare unites farmers, agricultural buyers, equipment suppliers, and ICAR agronomists onto a unified, next-generation intelligent digital ecosystem.`,
      icon: Sprout,
      color: 'from-emerald-600 to-green-500',
      bgGlow: 'bg-emerald-500/10',
      highlights: [
        'Direct connection between verified farmers and bulk buyers with zero middleman deductions',
        'AI Agronomy diagnostics and personalized parcel telemetry farm advisories',
        'Transparent e-NAM and APMC real-time market rates and MSP price alerts',
        'Comprehensive farm lifecycle management across all 18 smart modules'
      ]
    },
    {
      id: 'scanner',
      badge: 'Multimodal AI Vision',
      title: 'Instant Crop Disease & Leaf Health Scanner',
      tagline: 'Point your camera at any crop leaf for instant clinical remedies',
      description: 'Powered by multimodal Google Gemini 3.5 vision intelligence and ICAR agricultural standards, our AI Leaf Doctor detects blights, rusts, deficiencies, and insect attacks in seconds.',
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
      id: 'budget-simulator',
      badge: 'Simulations & Budgeting',
      title: 'Resource Budget Planner & What-If Farm Simulator',
      tagline: 'Simulate crop yield scenarios and allocate finite resources with live trade-offs',
      description: 'Never guess water or fertilizer needs again. Set total farm budget caps for water, fertilizer, labor, and power, adjust sliders across crops, and see projected yields, costs, and profit in real time.',
      icon: Scale,
      color: 'from-emerald-600 to-teal-500',
      bgGlow: 'bg-emerald-500/10',
      highlights: [
        'Finite resource limits for Water (m³), Fertilizer (kg NPK), Labor (Days), and Power (kWh)',
        'Live trade-off indicator showing yield & financial impact as you shift resources',
        'Agronomic optimizer providing balanced allocation recommendations with clear reasoning',
        'What-If Simulator allowing side-by-side comparison of rainfall and crop scenarios'
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
      id: 'suite',
      badge: 'Complete Agronomy Suite',
      title: '18 Precision Modules & 24/7 AI Farm Advisor',
      tagline: 'End-to-end farm management and instantaneous agronomist guidance',
      description: 'From pre-sowing soil health testing to cold storage bookings, smart irrigation pumps, and machinery hire, CropCare puts complete agricultural intelligence into your hands.',
      icon: Bot,
      color: 'from-violet-600 to-indigo-500',
      bgGlow: 'bg-violet-500/10',
      highlights: [
        'Soil fertility mapping with NPK ratio balancing recommendations',
        'Automated irrigation scheduling based on live weather and evapotranspiration',
        'Farm Advisor AI chatbot answering with your app’s real farm telemetry',
        'One-click multi-language support (English, Hindi, Tamil, and French)'
      ]
    }
  ];

  const slide = slides[currentSlide];
  const isLast = currentSlide === slides.length - 1;

  const handleNext = () => {
    if (isLast) {
      handleComplete();
    } else {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    try {
      confetti({
        particleCount: 110,
        spread: 80,
        origin: { y: 0.6 }
      });
    } catch (e) { /* ignore */ }
    localStorage.setItem('cropcare_intro_seen', 'true');
    if (onComplete) onComplete();
  };

  const IconComponent = slide.icon;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-emerald-950 to-slate-900 text-white flex flex-col justify-between p-4 sm:p-8 relative overflow-hidden select-none">
      
      {/* Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      {/* Top Bar with Step & Skip Button */}
      <div className="max-w-4xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
            <Sprout className="w-5 h-5 text-emerald-400" />
          </div>
          <div>
            <span className="font-extrabold text-sm tracking-tight text-white">CropCare Intro</span>
            <span className="text-[11px] text-slate-400 ml-2 hidden sm:inline">Feature Walkthrough</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold text-slate-400">
            {currentSlide + 1} of {slides.length}
          </span>
          <button
            onClick={handleComplete}
            className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
          >
            <span>Skip to Dashboard</span>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>
      </div>

      {/* Main Slide Card Container */}
      <div className="max-w-4xl mx-auto w-full my-auto z-10 py-6">
        <div className="relative bg-slate-900/80 backdrop-blur-2xl border border-white/15 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden transition-all duration-300">
          
          {/* Subtle Ambient Color Shimmer behind current slide */}
          <div className={`absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl pointer-events-none ${slide.bgGlow}`}></div>

          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 sm:gap-10">
            
            {/* Animated Slide Icon Circle */}
            <div className="relative flex-shrink-0 mx-auto md:mx-0">
              <div className={`w-24 h-24 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-tr ${slide.color} flex items-center justify-center shadow-xl shadow-emerald-950/50 transform transition-transform duration-300 hover:scale-105`}>
                <IconComponent className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-pulse" />
              </div>
              <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 rounded-full bg-slate-950/90 border border-white/20 text-[10px] font-bold text-emerald-400">
                Part {currentSlide + 1}
              </div>
            </div>

            {/* Slide Text & Highlights */}
            <div className="flex-1 space-y-3 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-wide uppercase">
                <Sparkles className="w-3 h-3 text-lime-400" />
                <span>{slide.badge}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {slide.title}
              </h2>

              <p className="text-xs sm:text-sm font-semibold text-emerald-400">
                {slide.tagline}
              </p>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pt-1">
                {slide.description}
              </p>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-3">
                {slide.highlights.map((h, i) => (
                  <div 
                    key={i} 
                    className="flex items-start gap-2 p-2.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Navigation Controls & Progress Dots */}
      <div className="max-w-4xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        
        {/* Progress Dots */}
        <div className="flex items-center gap-2 order-2 sm:order-1">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setCurrentSlide(i)}
              className={`h-2.5 rounded-full transition-all cursor-pointer ${
                currentSlide === i 
                  ? 'w-8 bg-emerald-400 shadow-md shadow-emerald-400/50' 
                  : 'w-2.5 bg-white/20 hover:bg-white/40'
              }`}
              aria-label={`Jump to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Back & Next / Enter Website Buttons */}
        <div className="flex items-center gap-3 order-1 sm:order-2 w-full sm:w-auto justify-end">
          {currentSlide > 0 && (
            <button
              type="button"
              onClick={handlePrev}
              className="px-4 py-2.5 text-xs font-bold rounded-xl text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>
          )}

          <button
            type="button"
            onClick={handleNext}
            className={`px-6 py-2.5 rounded-xl text-white font-extrabold text-xs shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer ${
              isLast
                ? 'bg-gradient-to-r from-emerald-500 via-green-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-emerald-500/30 hover:scale-105 active:scale-95'
                : 'bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/30 hover:scale-105 active:scale-95'
            }`}
          >
            <span>{isLast ? '🚀 Enter Main Website & Open Dashboard' : 'Next Feature'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>

    </div>
  );
}
