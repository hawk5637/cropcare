import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  MapPin, Layers, Sprout, Globe, ArrowRight, CheckCircle2, X, Plus
} from 'lucide-react';

const STATES = [
  'Punjab', 'Haryana', 'Uttar Pradesh', 'Rajasthan', 'Madhya Pradesh',
  'Maharashtra', 'Gujarat', 'Karnataka', 'Tamil Nadu', 'Andhra Pradesh',
  'Telangana', 'West Bengal', 'Bihar', 'Odisha', 'Assam', 'Other'
];

const CROP_SUGGESTIONS = [
  'Wheat', 'Rice (Basmati)', 'Rice (Sona Masuri)', 'Maize', 'Mustard',
  'Cotton', 'Soybean', 'Sugarcane', 'Groundnut', 'Green Gram',
  'Tomato', 'Onion', 'Potato', 'Mango', 'Banana', 'Papaya', 'Guava'
];

export default function ProfileSetup() {
  const { userName, userRole, completeProfileSetup, SUPPORTED_LOCALES, language, t } = useApp();
  const [step, setStep] = useState(1);
  const [village, setVillage] = useState('');
  const [district, setDistrict] = useState('');
  const [state, setState] = useState('');
  const [landSize, setLandSize] = useState('');
  const [mainCrops, setMainCrops] = useState([]);
  const [customCrop, setCustomCrop] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState(language);

  const toggleCrop = (crop) => {
    setMainCrops(prev =>
      prev.includes(crop) ? prev.filter(c => c !== crop) : [...prev, crop]
    );
  };

  const addCustomCrop = () => {
    const c = customCrop.trim();
    if (c && !mainCrops.includes(c)) {
      setMainCrops(prev => [...prev, c]);
      setCustomCrop('');
    }
  };

  const handleFinish = () => {
    completeProfileSetup({ village, district, state, landSize, mainCrops, preferredLanguage });
  };

  const roleGrad = {
    farmer: 'from-emerald-700 to-green-600',
    buyer: 'from-amber-600 to-yellow-600',
    supplier: 'from-blue-700 to-cyan-600',
    expert: 'from-purple-700 to-indigo-600'
  }[userRole] || 'from-emerald-700 to-green-600';

  const steps = [
    { label: 'Location', icon: MapPin },
    { label: 'Farm Details', icon: Layers },
    { label: 'Crops', icon: Sprout },
    { label: 'Language', icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        {/* Header */}
        <div className="text-center mb-8">
          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-tr ${roleGrad} flex items-center justify-center mx-auto mb-4 shadow-xl`}>
            <Sprout className="w-9 h-9 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-white">Hello, {userName}!</h1>
          <p className="text-emerald-300 mt-1">Let's set up your farm profile to personalize CropCare.</p>
        </div>

        {/* Step Progress */}
        <div className="flex items-center justify-center gap-2 mb-8">
          {steps.map((s, i) => {
            const StepIcon = s.icon;
            const done = step > i + 1;
            const active = step === i + 1;
            return (
              <React.Fragment key={s.label}>
                <div className={`flex flex-col items-center gap-1`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
                    done ? 'bg-emerald-500 text-white' :
                    active ? 'bg-white text-emerald-700 ring-4 ring-emerald-400/40' :
                    'bg-white/10 text-white/40'
                  }`}>
                    {done ? <CheckCircle2 className="w-5 h-5" /> : <StepIcon className="w-5 h-5" />}
                  </div>
                  <span className={`text-xs font-semibold ${active ? 'text-white' : 'text-white/40'}`}>
                    {s.label}
                  </span>
                </div>
                {i < steps.length - 1 && (
                  <div className={`h-0.5 w-8 mb-5 rounded ${step > i + 1 ? 'bg-emerald-500' : 'bg-white/20'}`} />
                )}
              </React.Fragment>
            );
          })}
        </div>

        {/* Card */}
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-8 shadow-2xl border border-white/20 dark:border-slate-700">
          {/* Step 1: Location */}
          {step === 1 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Your Location</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">So we can show local mandi prices and weather.</p>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Village / Town</label>
                <input
                  type="text"
                  value={village}
                  onChange={e => setVillage(e.target.value)}
                  placeholder="e.g., Khanna"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">District</label>
                <input
                  type="text"
                  value={district}
                  onChange={e => setDistrict(e.target.value)}
                  placeholder="e.g., Ludhiana"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">State</label>
                <select
                  value={state}
                  onChange={e => setState(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="">Select your state</option>
                  {STATES.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
            </div>
          )}

          {/* Step 2: Farm Details */}
          {step === 2 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Farm Details</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Help us tailor your crop planning and recommendations.</p>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Total Land Size (Acres)</label>
                <input
                  type="number"
                  value={landSize}
                  onChange={e => setLandSize(e.target.value)}
                  placeholder="e.g., 14.5"
                  min="0"
                  step="0.5"
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>
              <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <p className="text-sm text-emerald-800 dark:text-emerald-300 font-semibold">
                  📍 Location saved: {[village, district, state].filter(Boolean).join(', ') || 'Not set — you can update later'}
                </p>
              </div>
            </div>
          )}

          {/* Step 3: Main Crops */}
          {step === 3 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Main Crops</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">Select all crops you grow or plan to grow.</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {CROP_SUGGESTIONS.map(crop => (
                  <button
                    key={crop}
                    onClick={() => toggleCrop(crop)}
                    className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
                      mainCrops.includes(crop)
                        ? 'bg-emerald-600 text-white border-emerald-600'
                        : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                    }`}
                  >
                    {mainCrops.includes(crop) && <CheckCircle2 className="w-3 h-3 inline mr-1" />}
                    {crop}
                  </button>
                ))}
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  value={customCrop}
                  onChange={e => setCustomCrop(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && addCustomCrop()}
                  placeholder="Add custom crop..."
                  className="flex-1 px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
                <button onClick={addCustomCrop} className="px-3 py-2 rounded-xl bg-emerald-600 text-white hover:bg-emerald-700 transition-colors">
                  <Plus className="w-4 h-4" />
                </button>
              </div>
              {mainCrops.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {mainCrops.map(c => (
                    <span key={c} className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                      {c}
                      <button onClick={() => toggleCrop(c)}><X className="w-3 h-3" /></button>
                    </span>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Step 4: Language */}
          {step === 4 && (
            <div className="space-y-5">
              <div>
                <h2 className="text-xl font-extrabold text-slate-900 dark:text-white mb-1">Preferred Language</h2>
                <p className="text-sm text-slate-500 dark:text-slate-400">CropCare will show everything in your chosen language.</p>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {SUPPORTED_LOCALES.map(loc => (
                  <button
                    key={loc.code}
                    onClick={() => setPreferredLanguage(loc.code)}
                    className={`p-4 rounded-2xl border-2 text-left transition-all ${
                      preferredLanguage === loc.code
                        ? 'border-emerald-600 bg-emerald-50 dark:bg-emerald-950/40'
                        : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-emerald-300'
                    }`}
                  >
                    <div className="text-2xl mb-1">{loc.flag}</div>
                    <div className="font-extrabold text-sm text-slate-900 dark:text-white">{loc.native}</div>
                    <div className="text-xs text-slate-500">{loc.name}</div>
                    {preferredLanguage === loc.code && (
                      <div className="mt-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex gap-3 mt-8">
            {step > 1 && (
              <button
                onClick={() => setStep(s => s - 1)}
                className="flex-1 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              >
                Back
              </button>
            )}
            {step < 4 ? (
              <button
                onClick={() => setStep(s => s + 1)}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 hover:from-emerald-800 hover:to-green-700 transition-all"
              >
                Next <ArrowRight className="w-4 h-4" />
              </button>
            ) : (
              <button
                onClick={handleFinish}
                className="flex-1 py-3 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 text-white font-extrabold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 hover:from-emerald-800 hover:to-green-700 transition-all"
              >
                Launch CropCare 🚀
              </button>
            )}
          </div>

          <button
            onClick={handleFinish}
            className="w-full mt-3 text-center text-xs text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 transition-colors"
          >
            Skip setup — I'll fill this in later
          </button>
        </div>
      </div>
    </div>
  );
}
