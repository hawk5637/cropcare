import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { Droplets, Calendar, Activity, Calculator, CloudRain, AlertCircle, CheckCircle2, Info, Tractor, Timer } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const IRRIGATION_PLANS = {
  'Wheat HD-2967': [
    { stage: 'Crown Root Initiation', dap: 21, water_mm: 55, notes: 'Critical — do not miss. Stress here reduces tillers.' },
    { stage: 'Tillering', dap: 45, water_mm: 50, notes: 'If rainfall >25mm, skip this irrigation.' },
    { stage: 'Jointing', dap: 65, water_mm: 60, notes: 'Apply before noon. Avoid evening irrigation.' },
    { stage: 'Flag Leaf', dap: 80, water_mm: 55, notes: 'Very sensitive to moisture stress.' },
    { stage: 'Heading & Flowering', dap: 95, water_mm: 50, notes: 'Avoid waterlogging — check drainage.' },
    { stage: 'Grain Filling', dap: 110, water_mm: 45, notes: 'Last irrigation. Helps improve grain weight.' }
  ],
  'Basmati Rice 1121': [
    { stage: 'Transplanting', dap: 0, water_mm: 80, notes: 'Maintain 5cm standing water for 2 weeks.' },
    { stage: 'Tillering', dap: 30, water_mm: 70, notes: 'Intermittent flooding increases root growth.' },
    { stage: 'Panicle Initiation', dap: 60, water_mm: 75, notes: 'Critical stage — maintain continuous flooding.' },
    { stage: 'Heading', dap: 80, water_mm: 70, notes: 'Drought stress reduces panicle length.' },
    { stage: 'Grain Filling', dap: 95, water_mm: 60, notes: 'Alternate wetting and drying recommended.' }
  ]
};

const MOISTURE_DATA = Array.from({ length: 14 }, (_, i) => ({
  day: `Day ${i + 1}`,
  moisture: Math.round(28 + Math.sin(i * 0.5) * 8 + (i === 6 ? 12 : 0)),
  optimal: 38,
  critical: 25
}));

const WATER_TIPS = [
  { tip: 'Irrigate in the morning (6-9am) to reduce evaporation losses by up to 30%', icon: '🌅' },
  { tip: 'Use soil moisture probe readings — visual estimation is unreliable', icon: '📡' },
  { tip: 'Drip irrigation for vegetable crops saves 40-60% water vs. flood irrigation', icon: '💧' },
  { tip: 'After rain of 25mm+, skip the next scheduled irrigation to prevent root rot', icon: '🌧️' }
];

export default function WaterModule() {
  const { mode } = useApp();
  const [selectedCrop, setSelectedCrop] = useState('Wheat HD-2967');
  const [pumpRunning, setPumpRunning] = useState(false);
  const [pumpTime, setPumpTime] = useState(0);
  const timerRef = useRef(null);

  const plan = IRRIGATION_PLANS[selectedCrop] || IRRIGATION_PLANS['Wheat HD-2967'];

  const togglePump = () => {
    if (!pumpRunning) {
      setPumpRunning(true);
      timerRef.current = setInterval(() => setPumpTime(t => t + 1), 1000);
    } else {
      setPumpRunning(false);
      clearInterval(timerRef.current);
      setPumpTime(0);
    }
  };

  useEffect(() => () => clearInterval(timerRef.current), []);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Droplets className="w-7 h-7 text-blue-600" /> Water & Irrigation
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Irrigation schedules, water calculator, soil moisture trends</p>
      </div>

      {/* Pump Control */}
      <div className={`p-5 rounded-2xl border-2 ${pumpRunning ? 'bg-blue-50 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'} transition-all`}>
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-extrabold text-slate-900 dark:text-white">Drip Pump Control</h3>
            <p className="text-sm text-slate-500">{pumpRunning ? `Running: ${formatTime(pumpTime)}` : 'Pump is OFF — Ready to start'}</p>
          </div>
          <button
            onClick={togglePump}
            className={`w-14 h-14 rounded-2xl font-bold text-xs flex items-center justify-center transition-all shadow-md ${
              pumpRunning ? 'bg-red-500 text-white animate-pulse' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            {pumpRunning ? '⏸ Stop' : '▶ Start'}
          </button>
        </div>
        {pumpRunning && (
          <div className="mt-3 flex items-center gap-2 text-sm text-blue-700 dark:text-blue-300">
            <div className="w-2 h-2 rounded-full bg-blue-500 animate-ping" />
            Drip system active — Parcel A-1 (Wheat)
          </div>
        )}
      </div>

      {/* Soil Moisture Trend */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
        <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
          <Activity className="w-4 h-4 text-blue-500" /> Soil Moisture Trend (14 Days)
        </h3>
        <ResponsiveContainer width="100%" height={180}>
          <AreaChart data={MOISTURE_DATA}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="day" tick={{ fontSize: 10 }} interval={2} />
            <YAxis domain={[20, 50]} tick={{ fontSize: 10 }} unit="%" />
            <Tooltip formatter={(v) => `${v}%`} />
            <Area type="monotone" dataKey="optimal" stroke="#3b82f6" strokeDasharray="4 4" fill="none" strokeWidth={1.5} name="Optimal" />
            <Area type="monotone" dataKey="critical" stroke="#ef4444" strokeDasharray="4 4" fill="none" strokeWidth={1.5} name="Critical" />
            <Area type="monotone" dataKey="moisture" stroke="#3b82f6" fill="url(#moistureGrad)" strokeWidth={2} name="Moisture" />
            <defs>
              <linearGradient id="moistureGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Irrigation Plan */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            <Calendar className="w-4 h-4 text-blue-500" /> Irrigation Schedule
          </h3>
          <select
            value={selectedCrop}
            onChange={e => setSelectedCrop(e.target.value)}
            className="text-sm px-3 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none"
          >
            {Object.keys(IRRIGATION_PLANS).map(c => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>
        <div className="divide-y divide-slate-100 dark:divide-slate-800">
          {plan.map((item, i) => (
            <div key={i} className="flex items-start gap-4 px-5 py-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/30 flex items-center justify-center shrink-0">
                <Droplets className="w-5 h-5 text-blue-600" />
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-slate-900 dark:text-white text-sm">{item.stage}</span>
                  <span className="text-xs font-bold text-blue-600 bg-blue-50 dark:bg-blue-950/40 px-2 py-0.5 rounded-full">{item.water_mm} mm</span>
                </div>
                <div className="text-xs text-slate-400 mt-0.5">DAP {item.dap}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400 mt-1 italic">{item.notes}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Water Calculator */}
      {mode === 'detailed' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
            <Calculator className="w-4 h-4 text-blue-500" /> Water Requirement Calculator
          </h3>
          <div className="grid grid-cols-3 gap-3 text-sm mb-4">
            {[['Area', '6.5 acres'], ['Crop', 'Wheat'], ['Stage', 'Tillering']].map(([k, v]) => (
              <div key={k} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800">
                <div className="text-xs text-slate-400">{k}</div>
                <div className="font-bold text-slate-900 dark:text-white mt-0.5">{v}</div>
              </div>
            ))}
          </div>
          <div className="p-4 rounded-xl bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800">
            <div className="text-sm font-bold text-blue-800 dark:text-blue-300">
              Total Water Required: <span className="text-xl">142,000 L</span> (≈ 5.4 hours @ 7 HP pump)
            </div>
          </div>
        </div>
      )}

      {/* Water Saving Tips */}
      <div className="space-y-2">
        <h3 className="font-extrabold text-slate-900 dark:text-white">💡 Water Saving Tips</h3>
        {WATER_TIPS.map((t, i) => (
          <div key={i} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700">
            <span className="text-xl">{t.icon}</span>
            <p className="text-sm text-slate-600 dark:text-slate-300">{t.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
