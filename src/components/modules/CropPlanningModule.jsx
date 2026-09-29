import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { LayoutGrid, Calendar, ChevronRight, Sprout, Droplets, FlaskConical, Tractor, Package, TrendingUp, Sliders } from 'lucide-react';

const CROPS = ['Wheat', 'Rice (Basmati)', 'Maize', 'Cotton', 'Mustard', 'Soybean', 'Sugarcane', 'Tomato', 'Onion'];
const SEASONS = ['Rabi (Oct-Mar)', 'Kharif (Jun-Oct)', 'Zaid (Mar-Jun)'];
const PLOTS = ['Parcel A-1 (6.5 Acres)', 'Parcel B-2 (4.0 Acres)', 'Parcel C-3 (4.0 Acres)'];

const generateCalendar = (crop, season) => {
  const CALENDAR_MAP = {
    Wheat: [
      { week: 'W1-W2', activity: 'Land Preparation & Ploughing', type: 'land', icon: Tractor },
      { week: 'W3', activity: 'Seed Treatment & Sowing (HD-2967)', type: 'seed', icon: Sprout },
      { week: 'W4-W5', activity: 'First Irrigation (Crown Root Initiation)', type: 'water', icon: Droplets },
      { week: 'W6-W7', activity: 'Basal Dose: DAP 50 kg/acre + Urea 25 kg', type: 'fertilizer', icon: FlaskConical },
      { week: 'W8', activity: 'Weed Control Spray (Isoproturon)', type: 'spray', icon: Package },
      { week: 'W9-W10', activity: 'Second Irrigation + Top Dress Urea', type: 'water', icon: Droplets },
      { week: 'W12-W14', activity: 'Flag Leaf Stage Irrigation + Fungicide', type: 'spray', icon: Package },
      { week: 'W18-W20', activity: 'Grain Filling Irrigation', type: 'water', icon: Droplets },
      { week: 'W20-W22', activity: 'Harvest & Threshing', type: 'harvest', icon: Package }
    ],
    'Rice (Basmati)': [
      { week: 'W1', activity: 'Nursery Preparation & Seed Sowing', type: 'seed', icon: Sprout },
      { week: 'W3-W4', activity: 'Main Field Preparation & Puddling', type: 'land', icon: Tractor },
      { week: 'W4-W5', activity: 'Transplanting (25-day seedlings)', type: 'seed', icon: Sprout },
      { week: 'W6', activity: 'Basal Dose: DAP 30 kg/acre', type: 'fertilizer', icon: FlaskConical },
      { week: 'W7-W8', activity: 'First N Split: Urea 20 kg/acre', type: 'fertilizer', icon: FlaskConical },
      { week: 'W10', activity: 'Weedicide Application', type: 'spray', icon: Package },
      { week: 'W12-W14', activity: 'Panicle Initiation: Final N Dose', type: 'fertilizer', icon: FlaskConical },
      { week: 'W16-W18', activity: 'Blast/BLB monitoring & treatment', type: 'spray', icon: Package },
      { week: 'W20-W22', activity: 'Harvest — 85% grain maturity', type: 'harvest', icon: Package }
    ]
  };
  return CALENDAR_MAP[crop] || CALENDAR_MAP['Wheat'];
};

const TYPE_COLORS = {
  land: 'bg-amber-100 dark:bg-amber-950/30 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800',
  seed: 'bg-green-100 dark:bg-green-950/30 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800',
  water: 'bg-blue-100 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800',
  fertilizer: 'bg-purple-100 dark:bg-purple-950/30 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800',
  spray: 'bg-orange-100 dark:bg-orange-950/30 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800',
  harvest: 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800'
};

export default function CropPlanningModule() {
  const { mode, setActiveNav, setActiveModule } = useApp();
  const [crop, setCrop] = useState('Wheat');
  const [season, setSeason] = useState(SEASONS[0]);
  const [plot, setPlot] = useState(PLOTS[0]);
  const [generated, setGenerated] = useState(false);
  const [calendar, setCalendar] = useState([]);

  const handleGenerate = () => {
    setCalendar(generateCalendar(crop, season));
    setGenerated(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <LayoutGrid className="w-7 h-7 text-lime-600" /> Crop Planning
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Generate a sowing-to-harvest calendar with reminders and profit estimates</p>
      </div>

      {/* Planner Form */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Plan Your Crop</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Crop</label>
            <select value={crop} onChange={e => { setCrop(e.target.value); setGenerated(false); }} className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500">
              {CROPS.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Season</label>
            <select value={season} onChange={e => { setSeason(e.target.value); setGenerated(false); }} className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500">
              {SEASONS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Plot</label>
            <select value={plot} onChange={e => setPlot(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-lime-500">
              {PLOTS.map(p => <option key={p} value={p}>{p}</option>)}
            </select>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleGenerate}
            className="flex-1 py-3 rounded-xl bg-gradient-to-r from-lime-600 to-green-600 text-white font-extrabold text-sm shadow-md hover:from-lime-700 hover:to-green-700 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Calendar className="w-4 h-4" /> Generate Crop Calendar
          </button>
          <button
            type="button"
            onClick={() => {
              setActiveNav('module');
              setActiveModule('what-if-simulator');
            }}
            className="py-3 px-5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sliders className="w-4 h-4" /> Simulate What-If Scenarios
          </button>
        </div>
      </div>

      {/* Generated Calendar */}
      {generated && (
        <>
          {/* Summary KPIs */}
          <div className="grid grid-cols-3 gap-4">
            {[
              { label: 'Expected Yield', value: '45-50 qtl/acre', icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' },
              { label: 'Estimated Cost', value: '₹18,000/acre', icon: FlaskConical, color: 'text-blue-600 bg-blue-50 dark:bg-blue-950/30' },
              { label: 'Projected Profit', value: '₹47,000/acre', icon: TrendingUp, color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/30' }
            ].map(k => {
              const Icon = k.icon;
              return (
                <div key={k.label} className={`p-4 rounded-2xl ${k.color} border border-slate-200 dark:border-slate-800`}>
                  <Icon className={`w-5 h-5 ${k.color.split(' ')[0]} mb-2`} />
                  <div className="text-xs text-slate-500 dark:text-slate-400">{k.label}</div>
                  <div className="font-extrabold text-slate-900 dark:text-white text-sm mt-0.5">{k.value}</div>
                </div>
              );
            })}
          </div>

          {/* Calendar Timeline */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-slate-900 dark:text-white">{crop} — {season} Calendar</h3>
              <p className="text-xs text-slate-500 mt-0.5">{plot}</p>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {calendar.map((item, i) => {
                const Icon = item.icon;
                const colorClass = TYPE_COLORS[item.type] || 'bg-slate-100 text-slate-600';
                return (
                  <div key={i} className="flex items-center gap-4 px-5 py-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 border ${colorClass}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{item.activity}</div>
                      <div className="text-xs text-slate-400 mt-0.5">{item.week}</div>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${colorClass}`}>
                      {item.type.charAt(0).toUpperCase() + item.type.slice(1)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Rotation suggestion */}
          <div className="p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">
              💡 Crop Rotation Suggestion: After {crop}, consider growing Green Gram or Sunflower to restore soil nitrogen and break pest cycles.
            </p>
          </div>
        </>
      )}
    </div>
  );
}
