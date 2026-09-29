import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Microscope, 
  Activity, 
  Radio, 
  FlaskConical, 
  ShieldCheck, 
  Check, 
  AlertTriangle, 
  Send,
  FileCheck
} from 'lucide-react';

export default function ExpertDashboard() {
  const { 
    userName, 
    mode, 
    activeDashboardTab, 
    setActiveDashboardTab, 
    expertQueue, 
    reviewQueueItem, 
    t 
  } = useApp();

  const [advisoryText, setAdvisoryText] = useState(
    'High humidity alert: Night temperatures dropping to 14°C in Ludhiana & Karnal. Favorable conditions for Stripe Rust in PBW-550 wheat. Spray Azoxystrobin @ 1ml/L as preventive measure.'
  );
  const [advisorySent, setAdvisorySent] = useState(false);

  const handleBroadcast = (e) => {
    e.preventDefault();
    confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
    setAdvisorySent(true);
    setTimeout(() => setAdvisorySent(false), 3000);
  };

  const handleSignDiagnosis = (id) => {
    confetti({ particleCount: 70, spread: 60, origin: { y: 0.6 } });
    reviewQueueItem(id, 'approved', 'Verified and digitally signed by Senior Agronomist.');
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-purple-800 via-purple-700 to-indigo-800 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-purple-200" />
              <span>{t('roles.expert.badge')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {userName} — Phytopathology Decision Console
            </h2>
            <p className="text-xs sm:text-sm text-purple-100 mt-1 max-w-xl">
              {t('roles.expert.meta')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setActiveDashboardTab('advisories')}
              className="px-4 py-2.5 rounded-xl bg-white text-purple-900 font-extrabold text-xs shadow-md hover:bg-purple-50 transition-colors flex items-center gap-1.5"
            >
              <Radio className="w-4 h-4 text-purple-700" />
              <span>{t('roles.expert.actions.broadcastAdvisory')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Role KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.expert.kpis.probes')}</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">1,840 Probes</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">{t('roles.expert.kpis.probesSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.expert.kpis.flags')}</div>
          <div className="text-2xl font-black text-amber-600 mt-1">
            {expertQueue.filter(q => q.status === 'pending').length} Flags
          </div>
          <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">{t('roles.expert.kpis.flagsSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.expert.kpis.advisories')}</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">88 Bulletins</div>
          <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">{t('roles.expert.kpis.advisoriesSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.expert.kpis.soilScore')}</div>
          <div className="text-2xl font-black text-purple-600 mt-1">78.4 / 100</div>
          <div className="text-xs text-purple-700 dark:text-purple-400 font-semibold mt-1">{t('roles.expert.kpis.soilScoreSub')}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {['telemetry', 'triage', 'advisories', 'soilHealth'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveDashboardTab(tab)}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeDashboardTab === tab
                ? 'border-purple-600 text-purple-700 dark:text-purple-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t(`roles.expert.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Tab: Triage (AI Leaf Doctor Reviews) */}
      {(activeDashboardTab === 'triage' || !activeDashboardTab) && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">AI Diagnostic Triage & Feedback Review Queue</h3>
              <p className="text-xs text-slate-500">Live review queue populated by farmer feedback and AI leaf scanner flags</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {expertQueue.map((item) => (
              <div key={item.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-purple-700 dark:text-purple-400 bg-purple-50 dark:bg-purple-950 px-2 py-0.5 rounded">
                    Case #{item.id}
                  </span>
                  <span className={`text-xs font-bold ${item.status === 'approved' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>

                <div>
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                    {item.originalDiagnosis?.species || 'Agricultural Specimen'} — {item.originalDiagnosis?.disease_name || 'Healthy'}
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Farmer: <strong>{item.farmerName}</strong> • {item.userCorrection}
                  </p>
                </div>

                {item.expertNotes && (
                  <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-xs text-purple-900 dark:text-purple-200 border border-purple-200 dark:border-purple-800/60">
                    <strong>Agronomist Rx:</strong> {item.expertNotes}
                  </div>
                )}

                <div className="flex gap-2">
                  <button
                    disabled={item.status === 'approved'}
                    onClick={() => handleSignDiagnosis(item.id)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all flex items-center justify-center gap-1.5 ${
                      item.status === 'approved'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 cursor-not-allowed'
                        : 'bg-purple-600 hover:bg-purple-700 text-white shadow-md'
                    }`}
                  >
                    <FileCheck className="w-4 h-4" />
                    <span>{item.status === 'approved' ? 'Prescription Signed' : t('roles.expert.actions.signRx')}</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Advisories */}
      {activeDashboardTab === 'advisories' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Broadcast Regional Agricultural Advisory</h3>
          <p className="text-xs text-slate-500">
            Publish official alerts directly to 12,400+ farmers across Punjab and Haryana via SMS and push notifications.
          </p>

          <form onSubmit={handleBroadcast} className="space-y-3">
            <textarea
              rows={4}
              value={advisoryText}
              onChange={(e) => setAdvisoryText(e.target.value)}
              className="w-full p-4 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs font-medium focus:outline-none focus:ring-2 focus:ring-purple-500 text-slate-900 dark:text-white"
            />

            <div className="flex justify-between items-center">
              <span className="text-xs text-emerald-600 font-bold">
                {advisorySent ? 'Broadcast sent to 12,400+ farmers successfully!' : 'Covers 42 districts'}
              </span>

              <button
                type="submit"
                className="px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs shadow-md shadow-purple-600/20 flex items-center gap-1.5"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Publish Advisory</span>
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Tab: Telemetry & NDVI */}
      {activeDashboardTab === 'telemetry' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Sentinel-2 Multi-Spectral NDVI Telemetry</h3>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-2 text-xs">
            <div className="flex justify-between font-bold text-slate-900 dark:text-white">
              <span>Cluster A-Raipur (Coordinates: 30.9010° N, 75.8573° E)</span>
              <span className="text-emerald-600">NDVI: 0.84 (High Chlorophyll Canopy)</span>
            </div>
            <p className="text-slate-500">Soil Moisture: 36% | NPK Balance: 120:60:40 kg/ha | Soil Organic Carbon: 0.72% (Optimal).</p>
          </div>
        </div>
      )}

    </div>
  );
}
