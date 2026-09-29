import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  Globe, Plus, MapPin, Droplets, FlaskConical, AlertCircle,
  ChevronRight, BarChart2, CheckCircle2, Info, Leaf, Activity
} from 'lucide-react';
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from 'recharts';

const DEMO_PLOTS = [
  { id: 'A1', name: 'Parcel A-1', crop: 'Wheat HD-2967', acres: 6.5, ph: 7.2, nitrogen: 120, phosphorus: 60, potassium: 40, organicCarbon: 0.8, moisture: 36, ec: 0.42, soilType: 'Loamy', health: 88 },
  { id: 'B2', name: 'Parcel B-2', crop: 'Mustard Pusa Bold', acres: 4.0, ph: 7.0, nitrogen: 80, phosphorus: 40, potassium: 40, organicCarbon: 0.6, moisture: 34, ec: 0.38, soilType: 'Sandy Loam', health: 74 },
  { id: 'C3', name: 'Parcel C-3', crop: 'Basmati Rice 1121', acres: 4.0, ph: 6.8, nitrogen: 100, phosphorus: 50, potassium: 50, organicCarbon: 1.1, moisture: 42, ec: 0.45, soilType: 'Clay Loam', health: 81 }
];

const getHealthColor = (score) => {
  if (score >= 85) return '#22c55e';
  if (score >= 70) return '#f59e0b';
  return '#ef4444';
};

const getHealthLabel = (score) => {
  if (score >= 85) return 'Excellent';
  if (score >= 70) return 'Good';
  if (score >= 55) return 'Fair';
  return 'Poor';
};

function SoilGauge({ score }) {
  const color = getHealthColor(score);
  const data = [{ value: score }];
  return (
    <div className="relative w-32 h-20">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="100%" innerRadius="60%" outerRadius="100%" startAngle={180} endAngle={0} data={data}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar background dataKey="value" cornerRadius={8} fill={color} />
        </RadialBarChart>
      </ResponsiveContainer>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 text-center">
        <div className="text-2xl font-black" style={{ color }}>{score}</div>
        <div className="text-xs font-bold text-slate-500">{getHealthLabel(score)}</div>
      </div>
    </div>
  );
}

export default function LandSoilModule() {
  const { mode } = useApp();
  const [selectedPlot, setSelectedPlot] = useState(DEMO_PLOTS[0]);
  const [showAddPlot, setShowAddPlot] = useState(false);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Globe className="w-7 h-7 text-emerald-600" /> Land & Soil
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Manage plots, soil health, and get personalized recommendations</p>
        </div>
        <button
          onClick={() => setShowAddPlot(true)}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md"
        >
          <Plus className="w-4 h-4" /> Add Plot
        </button>
      </div>

      {/* Plot Tabs */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {DEMO_PLOTS.map(p => (
          <button
            key={p.id}
            onClick={() => setSelectedPlot(p)}
            className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-bold transition-all border ${
              selectedPlot.id === p.id
                ? 'bg-emerald-600 text-white border-emerald-600 shadow-md'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
            }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      {/* Plot Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Soil Health Index */}
        <div className="col-span-1 bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col items-center">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 self-start">Soil Health Index</h3>
          <SoilGauge score={selectedPlot.health} />
          <div className="mt-6 w-full space-y-2">
            {[
              { label: 'Organic Carbon', value: `${selectedPlot.organicCarbon}%`, ok: selectedPlot.organicCarbon >= 0.8 },
              { label: 'pH Level', value: selectedPlot.ph, ok: selectedPlot.ph >= 6.5 && selectedPlot.ph <= 7.5 },
              { label: 'EC (dS/m)', value: selectedPlot.ec, ok: selectedPlot.ec < 0.6 }
            ].map(item => (
              <div key={item.label} className="flex items-center justify-between text-sm">
                <span className="text-slate-600 dark:text-slate-400">{item.label}</span>
                <span className={`font-bold flex items-center gap-1 ${item.ok ? 'text-emerald-600' : 'text-amber-500'}`}>
                  {item.ok ? <CheckCircle2 className="w-3.5 h-3.5" /> : <AlertCircle className="w-3.5 h-3.5" />}
                  {item.value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Plot Details */}
        <div className="col-span-2 space-y-4">
          {/* Info card */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">{selectedPlot.name}</h3>
                <p className="text-sm text-slate-500">{selectedPlot.crop} • {selectedPlot.acres} Acres</p>
              </div>
              <span className="flex items-center gap-1 text-xs font-bold px-2.5 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400">
                <MapPin className="w-3 h-3" /> {selectedPlot.soilType}
              </span>
            </div>
            {/* NPK */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: 'Nitrogen (N)', value: selectedPlot.nitrogen, unit: 'kg/ha', good: 120, icon: '🟦', status: selectedPlot.nitrogen >= 100 ? 'optimal' : 'low' },
                { label: 'Phosphorus (P)', value: selectedPlot.phosphorus, unit: 'kg/ha', icon: '🟨', status: selectedPlot.phosphorus >= 50 ? 'optimal' : 'low' },
                { label: 'Potassium (K)', value: selectedPlot.potassium, unit: 'kg/ha', icon: '🟥', status: selectedPlot.potassium >= 40 ? 'optimal' : 'low' }
              ].map(npk => (
                <div key={npk.label} className={`p-3 rounded-xl border ${npk.status === 'optimal' ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-800' : 'bg-amber-50 dark:bg-amber-950/30 border-amber-200 dark:border-amber-800'}`}>
                  <div className="text-xs text-slate-500 mb-0.5">{npk.label}</div>
                  <div className="text-xl font-black text-slate-900 dark:text-white">{npk.value}</div>
                  <div className="text-xs text-slate-400">{npk.unit}</div>
                  <div className={`text-xs font-bold mt-1 ${npk.status === 'optimal' ? 'text-emerald-600' : 'text-amber-600'}`}>
                    {npk.status === 'optimal' ? '✓ Optimal' : '↑ Low'}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-extrabold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" /> Soil Recommendations
            </h4>
            <div className="space-y-2">
              {[
                { rec: 'Apply 10 kg/acre Vermicompost to boost organic carbon above 1%', type: 'organic' },
                { rec: `pH is optimal (${selectedPlot.ph}) — no liming required this season`, type: 'good' },
                { rec: 'Consider micronutrient mix (Zinc + Boron) before sowing', type: 'info' }
              ].map((r, i) => (
                <div key={i} className={`flex items-start gap-2 p-3 rounded-xl text-sm ${
                  r.type === 'good' ? 'bg-emerald-50 dark:bg-emerald-950/20 text-emerald-800 dark:text-emerald-300' :
                  r.type === 'organic' ? 'bg-blue-50 dark:bg-blue-950/20 text-blue-800 dark:text-blue-300' :
                  'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" />
                  {r.rec}
                </div>
              ))}
            </div>
          </div>

          {/* Soil test upload */}
          {mode === 'detailed' && (
            <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <h4 className="font-bold text-slate-900 dark:text-white mb-3">Upload Soil Test Report</h4>
              <div className="border-2 border-dashed border-slate-300 dark:border-slate-700 rounded-xl p-6 text-center">
                <Leaf className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto mb-2" />
                <p className="text-sm text-slate-500">Drag & drop a PDF or image of your soil test report</p>
                <button className="mt-3 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
                  Browse Files
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Add Plot Modal */}
      {showAddPlot && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setShowAddPlot(false)}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 w-full max-w-md shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white mb-4">Add New Plot</h3>
            <div className="space-y-3">
              {['Plot Name', 'Area (Acres)', 'GPS Pin', 'Soil Type', 'Current Crop'].map(field => (
                <div key={field}>
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">{field}</label>
                  <input className="mt-1 w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500" placeholder={`Enter ${field.toLowerCase()}`} />
                </div>
              ))}
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setShowAddPlot(false)} className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Cancel</button>
              <button onClick={() => setShowAddPlot(false)} className="flex-1 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm">Add Plot</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
