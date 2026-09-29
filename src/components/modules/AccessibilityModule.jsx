import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Accessibility, Sun, Moon, Type, Globe, Volume2, VolumeX, Smartphone, Languages, RefreshCw, CheckCircle2 } from 'lucide-react';

const LANGUAGES = [
  { code: 'hi', name: 'हिंदी', label: 'Hindi', flag: '🇮🇳' },
  { code: 'en', name: 'English', label: 'English', flag: '🇬🇧' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ', label: 'Punjabi', flag: '🇮🇳' },
  { code: 'mr', name: 'मराठी', label: 'Marathi', flag: '🇮🇳' },
  { code: 'gu', name: 'ગુજરાતી', label: 'Gujarati', flag: '🇮🇳' },
  { code: 'ta', name: 'தமிழ்', label: 'Tamil', flag: '🇮🇳' },
  { code: 'kn', name: 'ಕನ್ನಡ', label: 'Kannada', flag: '🇮🇳' },
  { code: 'te', name: 'తెలుగు', label: 'Telugu', flag: '🇮🇳' }
];

const FONT_SIZES = [
  { key: 'small', label: 'Small', size: 'text-xs', sample: 'Aa' },
  { key: 'medium', label: 'Medium', size: 'text-sm', sample: 'Aa' },
  { key: 'large', label: 'Large', size: 'text-base', sample: 'Aa' },
  { key: 'xlarge', label: 'X-Large', size: 'text-xl', sample: 'Aa' }
];

export default function AccessibilityModule() {
  const { theme, setTheme, toggleTheme, language, setLanguage, mode, setMode } = useApp();
  const [fontSize, setFontSize] = useState('medium');
  const [tts, setTts] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleTts = (text) => {
    if (tts && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utt = new SpeechSynthesisUtterance(text || 'CropCare accessibility settings updated');
      utt.lang = language === 'hi' ? 'hi-IN' : language === 'pa' ? 'hi-IN' : 'en-IN';
      window.speechSynthesis.speak(utt);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Accessibility className="w-7 h-7 text-cyan-600" /> Accessibility & Settings
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Language, theme, font size, voice, and accessibility settings</p>
      </div>

      {/* Language */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Languages className="w-5 h-5 text-cyan-600" /> Language / भाषा चुनें
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {LANGUAGES.map(lang => (
            <button
              key={lang.code}
              onClick={() => { setLanguage && setLanguage(lang.code); handleTts(lang.name); }}
              className={`flex items-center gap-2 p-3 rounded-xl border-2 text-left transition-all ${
                language === lang.code
                  ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30'
                  : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:border-cyan-300'
              }`}
            >
              <span className="text-lg">{lang.flag}</span>
              <div>
                <div className="font-bold text-slate-900 dark:text-white text-xs">{lang.name}</div>
                <div className="text-[10px] text-slate-400">{lang.label}</div>
              </div>
              {language === lang.code && <CheckCircle2 className="w-4 h-4 text-cyan-500 ml-auto shrink-0" />}
            </button>
          ))}
        </div>
      </div>

      {/* Theme */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Sun className="w-5 h-5 text-amber-500" /> Display Theme
        </h3>
        <div className="flex gap-3">
          {[['light', Sun, 'Light Mode', 'Bright & clean (White)'], ['dark', Moon, 'Dark Mode', 'Deep slate & black (Dark)']].map(([t, Icon, label, desc]) => (
            <button
              key={t}
              onClick={() => setTheme ? setTheme(t) : toggleTheme()}
              className={`flex-1 flex items-center gap-3 p-4 rounded-xl border-2 transition-all ${
                theme === t ? 'border-amber-500 bg-amber-50 dark:bg-amber-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-amber-300'
              }`}
            >
              <Icon className={`w-5 h-5 ${t === 'light' ? 'text-amber-500' : 'text-indigo-400'}`} />
              <div className="text-left">
                <div className="font-bold text-slate-900 dark:text-white text-sm">{label}</div>
                <div className="text-xs text-slate-400">{desc}</div>
              </div>
              {theme === t && <CheckCircle2 className="w-4 h-4 text-amber-500 ml-auto" />}
            </button>
          ))}
        </div>
      </div>

      {/* Information Density */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
          <Smartphone className="w-5 h-5 text-slate-500" /> Information Density
        </h3>
        <p className="text-xs text-slate-400 mb-4">Simple mode shows only key info. Detailed mode shows charts and expert data.</p>
        <div className="flex gap-3">
          {[['simple', 'Simple Mode', 'Ideal for field use. Key stats only.'], ['detailed', 'Detailed Mode', 'Full data, charts, and advanced tools.']].map(([m, label, desc]) => (
            <button
              key={m}
              onClick={() => setMode && setMode(m)}
              className={`flex-1 p-4 rounded-xl border-2 transition-all ${
                mode === m ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-cyan-300'
              }`}
            >
              <div className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{label}</div>
              <div className="text-xs text-slate-400">{desc}</div>
              {mode === m && <div className="mt-2 flex items-center gap-1 text-xs text-cyan-600 font-bold"><CheckCircle2 className="w-3.5 h-3.5" /> Active</div>}
            </button>
          ))}
        </div>
      </div>

      {/* Font Size */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Type className="w-5 h-5 text-slate-500" /> Font Size
        </h3>
        <div className="grid grid-cols-4 gap-2">
          {FONT_SIZES.map(f => (
            <button
              key={f.key}
              onClick={() => setFontSize(f.key)}
              className={`p-3 rounded-xl border-2 text-center transition-all ${
                fontSize === f.key ? 'border-cyan-500 bg-cyan-50 dark:bg-cyan-950/30' : 'border-slate-200 dark:border-slate-700 hover:border-cyan-300'
              }`}
            >
              <div className={`font-extrabold text-slate-900 dark:text-white ${f.size}`}>{f.sample}</div>
              <div className="text-[10px] text-slate-400 mt-1">{f.label}</div>
            </button>
          ))}
        </div>
      </div>

      {/* Voice / TTS */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
              {tts ? <Volume2 className="w-5 h-5 text-cyan-600" /> : <VolumeX className="w-5 h-5 text-slate-400" />}
              Voice Readout (TTS)
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">Reads weather alerts and mandi prices aloud</p>
          </div>
          <button
            onClick={() => { setTts(!tts); if (!tts) handleTts('Voice readout is now enabled for CropCare.'); }}
            className={`w-12 h-6 rounded-full transition-all relative ${tts ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-all ${tts ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>
        {tts && (
          <button onClick={() => handleTts('Wheat price today is 2540 rupees per quintal at Khanna APMC. Weather today is partly cloudy with 14 km wind.')} className="mt-3 text-xs text-cyan-600 font-bold flex items-center gap-1 hover:underline">
            <Volume2 className="w-3.5 h-3.5" /> Test Voice Readout
          </button>
        )}
      </div>

      {/* High Contrast */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white">High Contrast Mode</h3>
            <p className="text-xs text-slate-400 mt-0.5">Increases text-background contrast for outdoor visibility</p>
          </div>
          <button
            onClick={() => setHighContrast(!highContrast)}
            className={`w-12 h-6 rounded-full transition-all relative ${highContrast ? 'bg-cyan-600' : 'bg-slate-200 dark:bg-slate-700'}`}
          >
            <div className={`w-5 h-5 rounded-full bg-white shadow-sm absolute top-0.5 transition-all ${highContrast ? 'right-0.5' : 'left-0.5'}`} />
          </button>
        </div>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className={`w-full py-4 rounded-2xl font-extrabold text-sm flex items-center justify-center gap-2 transition-all shadow-lg ${
          saved ? 'bg-emerald-500 text-white' : 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white hover:from-cyan-700 hover:to-blue-700'
        }`}
      >
        {saved ? <><CheckCircle2 className="w-5 h-5" /> Settings Saved!</> : <><RefreshCw className="w-5 h-5" /> Save All Settings</>}
      </button>
    </div>
  );
}
