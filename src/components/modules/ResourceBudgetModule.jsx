import React, { useState, useMemo, useEffect, useRef } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  PieChart, 
  BarChart3, 
  Droplets, 
  FlaskConical, 
  Users, 
  Zap, 
  AlertTriangle, 
  RotateCcw, 
  Sparkles, 
  CheckCircle2, 
  TrendingUp, 
  DollarSign, 
  Scale, 
  HelpCircle, 
  ArrowRight, 
  Sliders, 
  Layers,
  ChevronDown,
  ChevronUp,
  Info,
  ShieldCheck,
  Bot
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { 
  BUDGET_ASSUMPTIONS, 
  DEFAULT_RESOURCE_BUDGETS, 
  BUDGET_ACTIVITIES, 
  DEFAULT_ALLOCATIONS, 
  calculateBudgetPlan, 
  calculateTradeOffInsight, 
  generateBalancedPlan 
} from '../../data/budgetPlannerLogic.js';

export default function ResourceBudgetModule() {
  const { setActiveNav, setActiveModule } = useApp();

  // Total Resource Budgets
  const [budgets, setBudgets] = useState({ ...DEFAULT_RESOURCE_BUDGETS });

  // Current Allocations per Activity
  const [allocations, setAllocations] = useState({ ...DEFAULT_ALLOCATIONS });

  // Previous plan snapshot for live trade-off delta detection
  const [prevPlan, setPrevPlan] = useState(null);

  // Active activity tab for mobile view (or all activities)
  const [selectedActivityId, setSelectedActivityId] = useState(BUDGET_ACTIVITIES[0].id);

  // Balanced plan reasoning state
  const [balancedReasoning, setBalancedReasoning] = useState(null);
  const [showBudgetModal, setShowBudgetModal] = useState(false);
  const [showAssumptions, setShowAssumptions] = useState(false);

  // Calculate live plan
  const currentPlan = useMemo(() => {
    return calculateBudgetPlan(budgets, allocations);
  }, [budgets, allocations]);

  // Keep a ref to previous plan for trade-off calculations
  const planRef = useRef(currentPlan);
  const [tradeOffDelta, setTradeOffDelta] = useState(null);

  const handleAllocationChange = (activityId, resourceKey, value) => {
    const num = Math.max(0, parseFloat(value) || 0);
    
    // Save snapshot of current before update
    setPrevPlan(currentPlan);

    setAllocations(prev => {
      const updated = {
        ...prev,
        [activityId]: {
          ...prev[activityId],
          [resourceKey]: num
        }
      };
      return updated;
    });
  };

  // Recalculate trade-off insight when plan changes
  useEffect(() => {
    if (prevPlan) {
      const insight = calculateTradeOffInsight(currentPlan, prevPlan);
      setTradeOffDelta(insight);
    }
  }, [currentPlan, prevPlan]);

  const handleBudgetChange = (resourceKey, value) => {
    const num = Math.max(1, parseFloat(value) || 1);
    setBudgets(prev => ({
      ...prev,
      [resourceKey]: num
    }));
  };

  const handleReset = () => {
    setBudgets({ ...DEFAULT_RESOURCE_BUDGETS });
    setAllocations({ ...DEFAULT_ALLOCATIONS });
    setPrevPlan(null);
    setTradeOffDelta(null);
    setBalancedReasoning(null);
  };

  const handleApplyBalancedPlan = () => {
    const { allocations: balanced, reasoning } = generateBalancedPlan(budgets);
    setPrevPlan(currentPlan);
    setAllocations(balanced);
    setBalancedReasoning(reasoning);
  };

  // Chart data for resource distribution across activities
  const resourceChartData = useMemo(() => {
    return currentPlan.activityResults.map(a => ({
      name: a.activity.name.split(' (')[0],
      'Water (m³)': a.allocation.waterM3,
      'Fertilizer (kg)': a.allocation.fertilizerKg,
      'Labor (Days)': a.allocation.laborDays * 10, // scaled for chart visibility
      'Energy (kWh)': a.allocation.energyKwh
    }));
  }, [currentPlan]);

  const selectedActivity = BUDGET_ACTIVITIES.find(a => a.id === selectedActivityId) || BUDGET_ACTIVITIES[0];
  const selectedResult = currentPlan.activityResults.find(r => r.activity.id === selectedActivityId);

  return (
    <div className="space-y-6">
      
      {/* Disclaimer Banner */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-4 text-amber-900 dark:text-amber-200 flex items-start gap-3 shadow-sm">
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <strong className="font-extrabold uppercase tracking-wide">Simulation Estimates Only: </strong>
          <span>{BUDGET_ASSUMPTIONS.disclaimer}</span>
        </div>
      </div>

      {/* Over-Allocation Critical Warning Alert */}
      {currentPlan.isAnyOverAllocated && (
        <div className="bg-rose-50 dark:bg-rose-950/50 border-2 border-rose-400 dark:border-rose-800 rounded-2xl p-4 text-rose-900 dark:text-rose-200 animate-pulse flex items-start gap-3 shadow-md">
          <AlertTriangle className="w-5 h-5 text-rose-600 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <strong className="font-black uppercase tracking-wider">⚠️ Resource Over-Allocation Detected: </strong>
            <span>
              Your current allocation exceeds the available budget for:{' '}
              {Object.values(currentPlan.resources)
                .filter(r => r.isOver)
                .map(r => `${r.name} (+${r.overAmount.toLocaleString()} ${r.unit} over limit)`)
                .join(', ')}.
              Please reduce usage in some parcels or tap "Suggest a Balanced Plan" below.
            </span>
          </div>
        </div>
      )}

      {/* Main Header & Actions */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-600 text-white flex items-center justify-center shadow-md">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">Farm Resource Budget Planner</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Allocate limited water, fertilizer, labor, and power across your parcels with live trade-off feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Global Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleApplyBalancedPlan}
            className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-extrabold text-xs shadow-md transition-all flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            title="Auto-optimize allocations based on marginal crop return"
          >
            <Sparkles className="w-4 h-4 text-emerald-200" />
            <span>Suggest a Balanced Plan</span>
          </button>

          <button
            type="button"
            onClick={() => setShowBudgetModal(!showBudgetModal)}
            className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-200 font-bold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1.5"
          >
            <Sliders className="w-4 h-4 text-slate-500" />
            <span>Adjust Total Limits</span>
          </button>

          <button
            type="button"
            onClick={handleReset}
            className="px-3 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-600 dark:text-slate-300 font-bold text-xs border border-slate-200 dark:border-slate-700 transition-colors flex items-center gap-1"
            title="Reset to default budgets"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Expandable Total Budget Limits Panel */}
      {showBudgetModal && (
        <div className="bg-slate-50 dark:bg-slate-900/90 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-inner animate-in fade-in duration-200">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-600" /> Set Total Seasonal Farm Quotas
            </h3>
            <span className="text-xs text-slate-400">Total pool to distribute across all plots</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold text-blue-600 mb-1 flex items-center gap-1">
                <Droplets className="w-3.5 h-3.5" /> Total Water Supply (m³)
              </label>
              <input
                type="number"
                min="100"
                max="50000"
                step="250"
                value={budgets.waterM3}
                onChange={(e) => handleBudgetChange('waterM3', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-sm text-slate-900 dark:text-white"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">e.g. 8,500 m³ (~2,100 mm across all plots)</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold text-purple-600 mb-1 flex items-center gap-1">
                <FlaskConical className="w-3.5 h-3.5" /> Total Fertilizer Pool (kg)
              </label>
              <input
                type="number"
                min="50"
                max="10000"
                step="50"
                value={budgets.fertilizerKg}
                onChange={(e) => handleBudgetChange('fertilizerKg', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-sm text-slate-900 dark:text-white"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Total NPK bags available</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold text-amber-600 mb-1 flex items-center gap-1">
                <Users className="w-3.5 h-3.5" /> Total Available Labor (Days)
              </label>
              <input
                type="number"
                min="10"
                max="1000"
                step="5"
                value={budgets.laborDays}
                onChange={(e) => handleBudgetChange('laborDays', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-sm text-slate-900 dark:text-white"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Worker person-days allocated for season</span>
            </div>

            <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl border border-slate-200 dark:border-slate-700">
              <label className="block text-xs font-bold text-sky-600 mb-1 flex items-center gap-1">
                <Zap className="w-3.5 h-3.5" /> Total Energy / Fuel Quota (kWh)
              </label>
              <input
                type="number"
                min="50"
                max="10000"
                step="50"
                value={budgets.energyKwh}
                onChange={(e) => handleBudgetChange('energyKwh', e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-sm text-slate-900 dark:text-white"
              />
              <span className="text-[10px] text-slate-400 mt-1 block">Electrical power units or diesel equivalent</span>
            </div>
          </div>
        </div>
      )}

      {/* Balanced Plan Reasoning Card (When Suggest Plan is clicked) */}
      {balancedReasoning && (
        <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/40 border border-emerald-300 dark:border-emerald-800/80 rounded-3xl p-5 shadow-sm space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-extrabold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-emerald-600" /> Balanced Plan Recommendation Rationale
            </span>
            <button
              onClick={() => setBalancedReasoning(null)}
              className="text-xs font-bold text-slate-400 hover:text-slate-600"
            >
              Dismiss
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-xs text-emerald-950 dark:text-emerald-200">
            {balancedReasoning.map((reason, idx) => (
              <div key={idx} className="flex items-start gap-2 bg-white/70 dark:bg-slate-900/60 p-2.5 rounded-xl border border-emerald-200/60 dark:border-emerald-900/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                <span>{reason}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* 4 LIVE RESOURCE PROGRESS BARS */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {Object.entries(currentPlan.resources).map(([key, r]) => {
          const isOver = r.isOver;
          const isNear = !isOver && r.percentUsed >= 85;

          const progressColor = isOver 
            ? 'bg-rose-500' 
            : isNear 
            ? 'bg-amber-500' 
            : key === 'water' 
            ? 'bg-blue-600' 
            : key === 'fertilizer' 
            ? 'bg-purple-600' 
            : key === 'labor' 
            ? 'bg-amber-600' 
            : 'bg-sky-600';

          return (
            <div 
              key={key} 
              className={`p-4 rounded-3xl border transition-all ${
                isOver 
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-300 dark:border-rose-800 shadow-md ring-2 ring-rose-400/20' 
                  : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="font-extrabold text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  {key === 'water' && <Droplets className="w-3.5 h-3.5 text-blue-500" />}
                  {key === 'fertilizer' && <FlaskConical className="w-3.5 h-3.5 text-purple-500" />}
                  {key === 'labor' && <Users className="w-3.5 h-3.5 text-amber-500" />}
                  {key === 'energy' && <Zap className="w-3.5 h-3.5 text-sky-500" />}
                  {r.name}
                </span>
                <span className={`text-[11px] font-black px-2 py-0.5 rounded-full ${
                  isOver 
                    ? 'bg-rose-200 text-rose-800 dark:bg-rose-900/60 dark:text-rose-200' 
                    : isNear 
                    ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300' 
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300'
                }`}>
                  {r.percentUsed}% Used
                </span>
              </div>

              {/* Progress Bar */}
              <div className="w-full h-3 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden my-2">
                <div 
                  className={`h-full rounded-full transition-all duration-300 ${progressColor}`} 
                  style={{ width: `${Math.min(100, r.percentUsed)}%` }} 
                />
              </div>

              <div className="flex items-center justify-between text-xs mt-2">
                <span className="text-slate-500 dark:text-slate-400">
                  Allocated: <strong className="text-slate-900 dark:text-white">{r.used.toLocaleString()}</strong> / {r.totalBudget.toLocaleString()} {r.unit}
                </span>
              </div>

              <div className={`text-[11px] font-bold mt-1 ${isOver ? 'text-rose-600 dark:text-rose-400' : 'text-slate-500'}`}>
                {isOver ? (
                  <span>⚠️ Deficit: -{r.overAmount.toLocaleString()} {r.unit} (Over-allocated)</span>
                ) : (
                  <span>Remaining: {r.remaining.toLocaleString()} {r.unit} left</span>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ========================================================================= */}
      {/* LIVE TRADE-OFF DELTA INDICATOR (Shows changes on every adjustment) */}
      {/* ========================================================================= */}
      {tradeOffDelta && (
        <div className="bg-slate-900 text-white rounded-3xl p-4 shadow-lg border border-slate-800 animate-in fade-in duration-200 flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-lime-500 text-slate-950 flex items-center justify-center shrink-0 font-bold">
              Δ
            </div>
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-lime-400">Live Trade-Off Delta:</div>
              <div className="text-xs sm:text-sm font-semibold text-slate-200">
                {tradeOffDelta.activityDeltas.map((d, i) => (
                  <span key={i} className="mr-3">
                    <strong>{d.activity.name.split(' (')[0]}: </strong>
                    {d.waterDiff !== 0 && `${d.waterDiff > 0 ? '+' : ''}${d.waterDiff} m³ water `}
                    {d.fertDiff !== 0 && `${d.fertDiff > 0 ? '+' : ''}${d.fertDiff} kg fert `}
                    {d.yieldDiff !== 0 && `(${d.yieldDiff > 0 ? '+' : ''}${d.yieldDiff} ${d.activity.unit} yield) `}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 text-xs shrink-0 pt-2 md:pt-0 border-t md:border-t-0 border-slate-800">
            <div>
              <span className="text-slate-400">Net Profit Change: </span>
              <strong className={tradeOffDelta.diffProfit >= 0 ? 'text-emerald-400' : 'text-rose-400'}>
                {tradeOffDelta.diffProfit >= 0 ? '+' : ''}₹{tradeOffDelta.diffProfit.toLocaleString()}
              </strong>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* ALLOCATION CONTROLS PER ACTIVITY & REAL-TIME IMPACT */}
      {/* ========================================================================= */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        
        {/* Left Column: Activity Selector & Sliders */}
        <div className="lg:col-span-7 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
            <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
              <Sliders className="w-4 h-4 text-emerald-600" /> Resource Allocation per Activity
            </h3>
            <span className="text-xs text-slate-400">Slide to shift resources</span>
          </div>

          {/* Activity Tabs */}
          <div className="flex gap-2 overflow-x-auto scrollbar-none pb-1">
            {BUDGET_ACTIVITIES.map(a => (
              <button
                key={a.id}
                type="button"
                onClick={() => setSelectedActivityId(a.id)}
                className={`px-3 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap border ${
                  selectedActivityId === a.id
                    ? 'bg-emerald-600 text-white border-emerald-600 shadow-sm'
                    : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
                }`}
              >
                {a.name.split(' (')[0]}
              </button>
            ))}
          </div>

          {/* Selected Activity Details & Sliders */}
          <div className="bg-slate-50/80 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/80 dark:border-slate-700/80 space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="font-extrabold text-base text-slate-900 dark:text-white">
                  {selectedActivity.name}
                </h4>
                <p className="text-xs text-slate-500">{selectedActivity.crop} • {selectedActivity.area} Acres • {selectedActivity.notes}</p>
              </div>
              <div className="text-right">
                <div className="text-xs text-slate-400 font-bold uppercase">Estimated Return</div>
                <div className="text-sm font-black text-emerald-600 dark:text-emerald-400">
                  ₹{selectedResult?.netProfit.toLocaleString()} Net
                </div>
              </div>
            </div>

            {/* 1. Water Allocation Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-blue-500" /> Water Allocation (m³)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">
                    Adequacy: {selectedResult?.adequacy.water}%
                  </span>
                  <input
                    type="number"
                    min="0"
                    max={budgets.waterM3}
                    step="50"
                    value={allocations[selectedActivity.id]?.waterM3 || 0}
                    onChange={(e) => handleAllocationChange(selectedActivity.id, 'waterM3', e.target.value)}
                    className="w-20 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-xs text-right"
                  />
                  <span className="text-xs font-bold text-slate-500">m³</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={budgets.waterM3}
                step="50"
                value={allocations[selectedActivity.id]?.waterM3 || 0}
                onChange={(e) => handleAllocationChange(selectedActivity.id, 'waterM3', e.target.value)}
                className="w-full accent-blue-600 cursor-pointer"
              />
            </div>

            {/* 2. Fertilizer Allocation Slider */}
            {!selectedActivity.isOperational && (
              <div>
                <div className="flex items-center justify-between mb-1.5 text-xs">
                  <label className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                    <FlaskConical className="w-3.5 h-3.5 text-purple-500" /> Fertilizer NPK (kg)
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-slate-400">
                      Adequacy: {selectedResult?.adequacy.fertilizer}%
                    </span>
                    <input
                      type="number"
                      min="0"
                      max={budgets.fertilizerKg}
                      step="10"
                      value={allocations[selectedActivity.id]?.fertilizerKg || 0}
                      onChange={(e) => handleAllocationChange(selectedActivity.id, 'fertilizerKg', e.target.value)}
                      className="w-20 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-xs text-right"
                    />
                    <span className="text-xs font-bold text-slate-500">kg</span>
                  </div>
                </div>
                <input
                  type="range"
                  min="0"
                  max={budgets.fertilizerKg}
                  step="10"
                  value={allocations[selectedActivity.id]?.fertilizerKg || 0}
                  onChange={(e) => handleAllocationChange(selectedActivity.id, 'fertilizerKg', e.target.value)}
                  className="w-full accent-purple-600 cursor-pointer"
                />
              </div>
            )}

            {/* 3. Labor Allocation Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-amber-500" /> Labor Allocation (Person-Days)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">
                    Adequacy: {selectedResult?.adequacy.labor}%
                  </span>
                  <input
                    type="number"
                    min="0"
                    max={budgets.laborDays}
                    step="1"
                    value={allocations[selectedActivity.id]?.laborDays || 0}
                    onChange={(e) => handleAllocationChange(selectedActivity.id, 'laborDays', e.target.value)}
                    className="w-20 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-xs text-right"
                  />
                  <span className="text-xs font-bold text-slate-500">Days</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={budgets.laborDays}
                step="1"
                value={allocations[selectedActivity.id]?.laborDays || 0}
                onChange={(e) => handleAllocationChange(selectedActivity.id, 'laborDays', e.target.value)}
                className="w-full accent-amber-600 cursor-pointer"
              />
            </div>

            {/* 4. Energy Allocation Slider */}
            <div>
              <div className="flex items-center justify-between mb-1.5 text-xs">
                <label className="font-bold text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-sky-500" /> Power & Pumping Energy (kWh)
                </label>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] text-slate-400">
                    Adequacy: {selectedResult?.adequacy.energy}%
                  </span>
                  <input
                    type="number"
                    min="0"
                    max={budgets.energyKwh}
                    step="10"
                    value={allocations[selectedActivity.id]?.energyKwh || 0}
                    onChange={(e) => handleAllocationChange(selectedActivity.id, 'energyKwh', e.target.value)}
                    className="w-20 px-2 py-0.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 font-extrabold text-xs text-right"
                  />
                  <span className="text-xs font-bold text-slate-500">kWh</span>
                </div>
              </div>
              <input
                type="range"
                min="0"
                max={budgets.energyKwh}
                step="10"
                value={allocations[selectedActivity.id]?.energyKwh || 0}
                onChange={(e) => handleAllocationChange(selectedActivity.id, 'energyKwh', e.target.value)}
                className="w-full accent-sky-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Right Column: Overall Plan Summary & Stacked Recharts */}
        <div className="lg:col-span-5 space-y-5">
          
          {/* Farm-Wide Financial Outcome Card */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4 text-emerald-600" /> Plan Financial Outcome
              </span>
              <span className={`text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase ${
                currentPlan.isAnyOverAllocated
                  ? 'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300'
                  : 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300'
              }`}>
                {currentPlan.isAnyOverAllocated ? '❌ Over Budget' : '✅ Feasible Plan'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3.5">
              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Gross Farm Revenue</div>
                <div className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  ₹{currentPlan.totals.grossRevenue.toLocaleString()}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-800">
                <div className="text-[10px] font-bold text-slate-400 uppercase">Total Input Costs</div>
                <div className="text-xl font-black text-slate-900 dark:text-white mt-1">
                  ₹{currentPlan.totals.totalCost.toLocaleString()}
                </div>
              </div>

              <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 col-span-2">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 uppercase">
                      Estimated Farm Net Profit
                    </div>
                    <div className="text-2xl font-black text-emerald-700 dark:text-emerald-300 mt-0.5">
                      ₹{currentPlan.totals.netProfit.toLocaleString()}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500 font-semibold">Total ROI</div>
                    <div className="text-lg font-black text-emerald-600">{currentPlan.totals.roi}%</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Output Yields Summary per parcel */}
            <div className="pt-2">
              <div className="text-xs font-extrabold text-slate-500 mb-2">Projected Crop Yields:</div>
              <div className="space-y-1.5">
                {currentPlan.activityResults.filter(a => !a.isOperational).map(a => (
                  <div key={a.activity.id} className="flex items-center justify-between text-xs py-1 px-2.5 rounded-xl bg-slate-50 dark:bg-slate-800">
                    <span className="font-bold text-slate-800 dark:text-slate-200">{a.activity.crop.split(' ')[0]}</span>
                    <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                      {a.totalYield} {a.activity.unit} <span className="text-[10px] text-slate-400 font-normal">({a.yieldPerAcre}/Ac)</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Allocation Bar Chart Across Parcels */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 mb-3">
              Resource Distribution Across Activities
            </h4>
            <div className="w-full h-56">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={resourceChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tick={{ fontSize: 10, fontWeight: 'bold' }} />
                  <YAxis tick={{ fontSize: 10 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '10px', color: '#fff', fontSize: '11px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '10px' }} />
                  <Bar dataKey="Water (m³)" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Fertilizer (kg)" fill="#a855f7" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Labor (Days)" fill="#f59e0b" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="Energy (kWh)" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* COLLAPSIBLE ASSUMPTIONS & FORMULA PANEL */}
      {/* ========================================================================= */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <button
          type="button"
          onClick={() => setShowAssumptions(!showAssumptions)}
          className="w-full p-4 flex items-center justify-between text-left font-extrabold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
        >
          <span className="flex items-center gap-2">
            <Info className="w-4 h-4 text-emerald-600" /> View Assumptions, Resource Unit Costs & Response Math
          </span>
          {showAssumptions ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
        </button>

        {showAssumptions && (
          <div className="p-6 pt-2 border-t border-slate-100 dark:border-slate-800 space-y-4 text-xs">
            <p className="text-slate-500">
              The budget planner applies continuous diminishing-return models to allocate finite farm resources:
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="font-bold text-blue-600">Water Cost: ₹0.85 / m³</div>
                <div className="text-[11px] text-slate-400 mt-1">Based on submersible borewell pump lift tariffs.</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="font-bold text-purple-600">Fertilizer Cost: ₹34.5 / kg</div>
                <div className="text-[11px] text-slate-400 mt-1">Weighted average active NPK wholesale procurement.</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="font-bold text-amber-600">Labor Cost: ₹450 / Day</div>
                <div className="text-[11px] text-slate-400 mt-1">Standard rural agricultural manual wage rate.</div>
              </div>
              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl">
                <div className="font-bold text-sky-600">Energy Cost: ₹6.50 / kWh</div>
                <div className="text-[11px] text-slate-400 mt-1">State agricultural grid power tariff schedule.</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 font-mono text-[11px] text-slate-600 dark:text-slate-300">
              Yield_Multiplier = (Water_Ratio^Sensitivity) × (0.52 + 0.48 × sin(Fert_Ratio × π/2)) × (0.4 + 0.6 × Labor_Ratio)
            </div>
          </div>
        )}
      </div>

    </div>
  );
}
