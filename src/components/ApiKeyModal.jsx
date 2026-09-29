import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { Key, X, Check, AlertCircle, Shield, ExternalLink } from 'lucide-react';

export default function ApiKeyModal() {
  const { 
    isConfigModalOpen, 
    setIsConfigModalOpen, 
    hasServerApiKey, 
    runtimeApiKey, 
    saveRuntimeApiKey,
    t 
  } = useApp();

  const [inputKey, setInputKey] = useState(runtimeApiKey);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isConfigModalOpen) return null;

  const handleSave = (e) => {
    e.preventDefault();
    saveRuntimeApiKey(inputKey);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      setIsConfigModalOpen(false);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 w-full max-w-lg overflow-hidden">
        
        {/* Header */}
        <div className="p-6 bg-gradient-to-r from-emerald-800 to-green-700 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Key className="w-5 h-5 text-emerald-200" />
            </div>
            <div>
              <h3 className="font-bold text-lg">Google Gemini Vision API Setup</h3>
              <p className="text-xs text-emerald-100">CropCare Backend Proxy Configuration</p>
            </div>
          </div>
          <button 
            onClick={() => setIsConfigModalOpen(false)}
            className="p-1 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-slate-800 dark:text-slate-200">
          
          {/* Status Banner */}
          <div className={`p-4 rounded-2xl border flex items-start gap-3 ${
            hasServerApiKey 
              ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-300 dark:border-emerald-800 text-emerald-900 dark:text-emerald-300' 
              : 'bg-amber-50 dark:bg-amber-950/40 border-amber-300 dark:border-amber-800 text-amber-900 dark:text-amber-300'
          }`}>
            {hasServerApiKey ? (
              <Check className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
            ) : (
              <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5 shrink-0" />
            )}
            <div>
              <div className="font-bold text-sm">
                {hasServerApiKey ? 'Gemini API Key Active' : 'No Gemini API Key Detected'}
              </div>
              <p className="text-xs mt-0.5 opacity-90 leading-relaxed">
                {hasServerApiKey 
                  ? 'Real multimodal AI vision diagnosis is active via Google Gemini.' 
                  : 'Add your Gemini API key below or in your server .env file to enable live image analysis.'}
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSave} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                Gemini API Key (AI Studio)
              </label>
              <input
                type="password"
                value={inputKey}
                onChange={(e) => setInputKey(e.target.value)}
                placeholder="AIzaSy..."
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-mono text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500">
              <a 
                href="https://aistudio.google.com/app/apikey" 
                target="_blank" 
                rel="noreferrer"
                className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1"
              >
                <span>Get a free API Key from Google AI Studio</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            <div className="pt-2 flex justify-end gap-2">
              <button
                type="button"
                onClick={() => setIsConfigModalOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-sm font-semibold hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
              >
                {t('common.cancel')}
              </button>
              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow-md shadow-emerald-600/20 transition-all flex items-center gap-2"
              >
                {savedSuccess ? (
                  <>
                    <Check className="w-4 h-4" />
                    <span>Saved!</span>
                  </>
                ) : (
                  <span>{t('common.save')}</span>
                )}
              </button>
            </div>
          </form>

          {/* Privacy Note */}
          <div className="text-[11px] text-slate-400 flex items-center gap-1.5">
            <Shield className="w-3.5 h-3.5 text-slate-400" />
            <span>The API key is securely transmitted to your local backend proxy and never exposed in public client bundles.</span>
          </div>

        </div>
      </div>
    </div>
  );
}
