import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sliders, 
  BarChart3, 
  BookOpen, 
  RotateCcw, 
  Save, 
  Trash2, 
  ShieldAlert, 
  Sparkles, 
  TrendingUp, 
  Droplets, 
  FlaskConical, 
  Layers, 
  CheckCircle2, 
  AlertTriangle, 
  HelpCircle, 
  ArrowRight, 
  Trophy,
  ArrowUpRight,
  Info,
  DollarSign,
  PieChart,
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
  CROPS_DATA, 
  SOIL_PROFILES, 
  IRRIGATION_METHODS, 
  SIMULATION_ASSUMPTIONS, 
  DEFAULT_SAVED_SCENARIOS, 
  runFarmSimulation, 
  validateSimulatorInputs,
  generateWhatChangedSummary 
} from '../../data/simulatorLogic.js';

export default function WhatIfSimulatorModule() {
  const { setActiveNav, setActiveModule } = useApp();

  // Active inputs
  const [activeInputs, setActiveInputs] = useState({
    cropId: 'wheat',
    soilId: 'loamy',
    irrigationId: 'drip',
    area: 4.5,
    waterMm: 480,
    fertPct: 100,
    priceOverride: ''
  });

  const [activeTab, setActiveTab] = useState('simulate'); // 'simulate' | 'compare' | 'assumptions'
  const [savedScenarios, setSavedScenarios] = useState(() => {
    return DEFAULT_SAVED_SCENARIOS.map(s => ({
      ...s,
      result: runFarmSimulation(s.inputs)
    }));
  });

  const [compareAId, setCompareAId] = useState(savedScenarios[0]?.id || 'scen-1');
  const [compareBId, setCompareBId] = useState(savedScenarios[1]?.id || 'scen-2');
  const [saveSuccessMsg, setSaveSuccessMsg] = useState(null);

  // Validation
  const validation = useMemo(() => validateSimulatorInputs(activeInputs), [activeInputs]);
  
  // Real-time calculation of current simulation
  const currentResult = useMemo(() => {
    return runFarmSimulation(activeInputs);
  }, [activeInputs]);

  const handleInputChange = (field, value) => {
    setActiveInputs(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleReset = () => {
    setActiveInputs({
      cropId: 'wheat',
      soilId: 'loamy',
      irrigationId: 'drip',
      area: 4.5,
      waterMm: 480,
      fertPct: 100,
      priceOverride: ''
    });
    setSaveSuccessMsg('Simulation reset to default baseline.');
    setTimeout(() => setSaveSuccessMsg(null), 3000);
  };

  const handleSaveScenario = () => {
    const newId = `scen-${Date.now().toString().slice(-4)}`;
    const cropName = CROPS_DATA[activeInputs.cropId]?.name.split(' ')[0] || 'Crop';
    const method = IRRIGATION_METHODS[activeInputs.irrigationId]?.name.split(' ')[0] || 'Irrigation';
    const title = `Scenario ${savedScenarios.length + 1}: ${cropName} (${method}, ${activeInputs.area} Ac)`;
    
    const newScen = {
      id: newId,
      title,
      description: `${activeInputs.area} Acres with ${activeInputs.waterMm}mm water & ${activeInputs.fertPct}% NPK`,
      inputs: { ...activeInputs },
      result: currentResult
    };

    setSavedScenarios(prev => [...prev, newScen]);
    setCompareBId(newId);
    setSaveSuccessMsg(`Saved "${title}" to your comparison list!`);
    setTimeout(() => setSaveSuccessMsg(null), 4000);
  };

  const handleDeleteScenario = (id) => {
    setSavedScenarios(prev => prev.filter(s => s.id !== id));
  };

  // Compare scenarios data for recharts
  const chartData = useMemo(() => {
    return savedScenarios.map(s => ({
      name: s.title.replace('Scenario ', 'S'),
      fullTitle: s.title,
      'Net Profit (₹1,000)': Math.round(s.result.outputs.netProfit / 1000),
      'Total Yield (Qtl)': Math.round(s.result.outputs.totalYield),
      'Water Used (m³ 100s)': Math.round(s.result.outputs.totalWaterM3 / 100),
      'Total Cost (₹1,000)': Math.round(s.result.outputs.totalCost / 1000)
    }));
  }, [savedScenarios]);

  // Identify Best Option per Metric across saved scenarios
  const bestMetrics = useMemo(() => {
    if (savedScenarios.length === 0) return {};
    let highestProfit = -Infinity, highestProfitId = null;
    let highestYield = -Infinity, highestYieldId = null;
    let lowestCost = Infinity, lowestCostId = null;
    let lowestWater = Infinity, lowestWaterId = null;
    let lowestRisk = Infinity, lowestRiskId = null;

    savedScenarios.forEach(s => {
      const out = s.result.outputs;
      if (out.netProfit > highestProfit) { highestProfit = out.netProfit; highestProfitId = s.id; }
      if (out.totalYield > highestYield) { highestYield = out.totalYield; highestYieldId = s.id; }
      if (out.totalCost < lowestCost) { lowestCost = out.totalCost; lowestCostId = s.id; }
      if (out.totalWaterM3 < lowestWater) { lowestWater = out.totalWaterM3; lowestWaterId = s.id; }
      if (out.risk.score < lowestRisk) { lowestRisk = out.risk.score; lowestRiskId = s.id; }
    });

    return { highestProfitId, highestYieldId, lowestCostId, lowestWaterId, lowestRiskId };
  }, [savedScenarios]);

  // "What Changed?" summary between selected comparison scenarios
  const whatChangedText = useMemo(() => {
    const scenA = savedScenarios.find(s => s.id === compareAId)?.result;
    const scenB = savedScenarios.find(s => s.id === compareBId)?.result;
    return generateWhatChangedSummary(scenA, scenB);
  }, [savedScenarios, compareAId, compareBId]);

  return (
    <div className="space-y-6">
      
      {/* Disclaimer Banner */}
      <div className="bg-amber-50 dark:bg-amber-950/40 border-2 border-amber-300 dark:border-amber-800 rounded-2xl p-4 text-amber-900 dark:text-amber-200 flex items-start gap-3 shadow-sm">
        <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
        <div className="text-xs sm:text-sm">
          <strong className="font-extrabold uppercase tracking-wide">Simulation Estimates Only: </strong>
          <span>{SIMULATION_ASSUMPTIONS.disclaimer}</span>
        </div>
      </div>

      {/* Main Header & Tab Navigation */}
      <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-lime-600 to-green-600 text-white flex items-center justify-center shadow-md">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-2xl font-black text-slate-900 dark:text-white">What-If Farm Simulator</h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Model crop choices, water scenarios, and fertilizer variations before investing real money.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1.5 rounded-2xl gap-1 text-xs font-bold">
          <button
            onClick={() => setActiveTab('simulate')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'simulate'
                ? 'bg-white dark:bg-slate-900 text-lime-700 dark:text-lime-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <Sliders className="w-4 h-4" /> Simulator Controls
          </button>
          <button
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'compare'
                ? 'bg-white dark:bg-slate-900 text-lime-700 dark:text-lime-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BarChart3 className="w-4 h-4" /> Compare Scenarios ({savedScenarios.length})
          </button>
          <button
            onClick={() => setActiveTab('assumptions')}
            className={`px-4 py-2 rounded-xl transition-all flex items-center gap-1.5 ${
              activeTab === 'assumptions'
                ? 'bg-white dark:bg-slate-900 text-lime-700 dark:text-lime-400 shadow-sm'
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
            }`}
          >
            <BookOpen className="w-4 h-4" /> Assumptions & Math
          </button>
        </div>
      </div>

      {saveSuccessMsg && (
        <div className="px-4 py-2.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-bold flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccessMsg}</span>
          </div>
          <button onClick={() => setActiveTab('compare')} className="underline text-emerald-700 hover:text-emerald-900">
            View Comparison →
          </button>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 1: SIMULATOR CONTROLS & REAL-TIME OUTPUTS */}
      {/* ========================================================================= */}
      {activeTab === 'simulate' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Left Column: Interactive Inputs (Sliders, Dropdowns, Numbers) */}
          <div className="lg:col-span-5 bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-sm uppercase tracking-wider text-slate-800 dark:text-slate-200 flex items-center gap-2">
                <Sliders className="w-4 h-4 text-lime-600" /> Farm Variables
              </h3>
              <button
                type="button"
                onClick={handleReset}
                className="text-xs font-bold text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 flex items-center gap-1 transition-colors"
                title="Reset all inputs to default values"
              >
                <RotateCcw className="w-3.5 h-3.5" /> Reset
              </button>
            </div>

            {/* Quick Presets */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2">
                Quick Scenario Presets:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setActiveInputs(prev => ({ ...prev, waterMm: 280, fertPct: 70, irrigationId: 'flood' }))}
                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-amber-50 text-[11px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-amber-400 text-center transition-all"
                >
                  💧 Drought / Deficit
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInputs(prev => ({ ...prev, waterMm: 500, fertPct: 100, irrigationId: 'drip' }))}
                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-emerald-50 text-[11px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-emerald-400 text-center transition-all"
                >
                  🌱 Balanced Optimal
                </button>
                <button
                  type="button"
                  onClick={() => setActiveInputs(prev => ({ ...prev, waterMm: 700, fertPct: 130, irrigationId: 'drip' }))}
                  className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800 hover:bg-purple-50 text-[11px] font-bold text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-purple-400 text-center transition-all"
                >
                  🚀 High-Input Intensive
                </button>
              </div>
            </div>

            {/* 1. Crop Selection */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Target Crop
              </label>
              <select
                value={activeInputs.cropId}
                onChange={(e) => handleInputChange('cropId', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold focus:ring-2 focus:ring-lime-500 focus:outline-none"
              >
                {Object.values(CROPS_DATA).map(c => (
                  <option key={c.id} value={c.id}>
                    {c.name} ({c.season}) — Base: {c.baseYieldPerAcre} {c.yieldUnit}/Ac
                  </option>
                ))}
              </select>
            </div>

            {/* 2. Land Area */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300">
                  Land Area (Acres)
                </label>
                <span className="text-xs font-extrabold text-lime-700 dark:text-lime-400 bg-lime-100 dark:bg-lime-950/60 px-2 py-0.5 rounded-md">
                  {activeInputs.area} Acres
                </span>
              </div>
              <input
                type="range"
                min="0.5"
                max="30"
                step="0.5"
                value={activeInputs.area}
                onChange={(e) => handleInputChange('area', parseFloat(e.target.value))}
                className="w-full accent-lime-600 cursor-pointer"
              />
              <div className="flex gap-1.5 mt-1.5">
                {[1, 2.5, 4.5, 10, 20].map(val => (
                  <button
                    key={val}
                    type="button"
                    onClick={() => handleInputChange('area', val)}
                    className={`px-2 py-0.5 rounded text-[10px] font-bold border ${
                      activeInputs.area === val
                        ? 'bg-lime-600 text-white border-lime-600'
                        : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700'
                    }`}
                  >
                    {val} Ac
                  </button>
                ))}
              </div>
            </div>

            {/* 3. Water Availability */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <Droplets className="w-3.5 h-3.5 text-blue-500" /> Water Availability (Total mm)
                </label>
                <span className="text-xs font-extrabold text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60 px-2 py-0.5 rounded-md">
                  {activeInputs.waterMm} mm
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="1500"
                step="25"
                value={activeInputs.waterMm}
                onChange={(e) => handleInputChange('waterMm', parseInt(e.target.value, 10))}
                className="w-full accent-blue-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>150 mm (Severe drought)</span>
                <span>Optimal: {CROPS_DATA[activeInputs.cropId]?.optimalWaterMm} mm</span>
                <span>1500 mm (Flood/Surplus)</span>
              </div>
            </div>

            {/* 4. Irrigation System */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5">
                Irrigation Method
              </label>
              <div className="grid grid-cols-3 gap-2">
                {Object.values(IRRIGATION_METHODS).map(im => (
                  <button
                    key={im.id}
                    type="button"
                    onClick={() => handleInputChange('irrigationId', im.id)}
                    className={`p-2.5 rounded-xl border text-left transition-all ${
                      activeInputs.irrigationId === im.id
                        ? 'bg-blue-50 dark:bg-blue-950/50 border-blue-500 text-blue-900 dark:text-blue-200 shadow-sm'
                        : 'bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400'
                    }`}
                  >
                    <div className="text-xs font-extrabold">{im.name.split(' ')[0]}</div>
                    <div className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 mt-0.5">
                      {Math.round(im.efficiency * 100)}% eff.
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* 5. Fertilizer Intensity */}
            <div>
              <div className="flex items-center justify-between mb-1">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1">
                  <FlaskConical className="w-3.5 h-3.5 text-purple-500" /> Fertilizer (NPK Intensity)
                </label>
                <span className="text-xs font-extrabold text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60 px-2 py-0.5 rounded-md">
                  {activeInputs.fertPct}% Dose
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="150"
                step="10"
                value={activeInputs.fertPct}
                onChange={(e) => handleInputChange('fertPct', parseInt(e.target.value, 10))}
                className="w-full accent-purple-600 cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                <span>0% (Zero chemical)</span>
                <span>100% (ICAR Recommended)</span>
                <span>150% (High risk)</span>
              </div>
            </div>

            {/* 6. Soil Type */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 mb-1.5 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-amber-600" /> Soil Profile
              </label>
              <select
                value={activeInputs.soilId}
                onChange={(e) => handleInputChange('soilId', e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-semibold focus:ring-2 focus:ring-lime-500 focus:outline-none"
              >
                {Object.values(SOIL_PROFILES).map(sp => (
                  <option key={sp.id} value={sp.id}>
                    {sp.name} — {sp.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Save Current Scenario Action */}
            <button
              type="button"
              onClick={handleSaveScenario}
              className="w-full py-3 rounded-2xl bg-gradient-to-r from-lime-600 to-green-600 hover:from-lime-700 hover:to-green-700 text-white font-black text-sm shadow-md flex items-center justify-center gap-2 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save This Scenario to Compare
            </button>
          </div>

          {/* Right Column: Real-time Simulation Results Cards */}
          <div className="lg:col-span-7 space-y-5">
            
            {/* Simulation Results Badge Header */}
            <div className="flex items-center justify-between bg-slate-100 dark:bg-slate-800/80 px-4 py-2.5 rounded-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-lime-500" /> Live Simulated Outcome
              </span>
              <span className={`px-2.5 py-0.5 rounded-full text-xs font-black uppercase ${
                currentResult.outputs.risk.color === 'emerald' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300' :
                currentResult.outputs.risk.color === 'amber' ? 'bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300 border border-amber-300' :
                currentResult.outputs.risk.color === 'orange' ? 'bg-orange-100 text-orange-800 dark:bg-orange-950/60 dark:text-orange-300 border border-orange-300' :
                'bg-rose-100 text-rose-800 dark:bg-rose-950/60 dark:text-rose-300 border border-rose-300'
              }`}>
                {currentResult.outputs.risk.level} ({currentResult.outputs.risk.score}/100)
              </span>
            </div>

            {/* 4 Primary Output KPI Cards */}
            <div className="grid grid-cols-2 gap-3.5">
              
              {/* 1. Expected Yield */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Expected Harvest Yield</div>
                <div className="text-3xl font-black text-slate-900 dark:text-white mt-1">
                  {currentResult.outputs.totalYield.toLocaleString()} <span className="text-sm font-semibold text-slate-500">{currentResult.outputs.yieldUnit}</span>
                </div>
                <div className="text-xs font-bold text-emerald-600 dark:text-emerald-400 mt-1 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>{currentResult.outputs.yieldPerAcre} {currentResult.outputs.yieldUnit} / Acre</span>
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  Baseline: {currentResult.crop.baseYieldPerAcre} Qtl/Ac (Water factor: {Math.round(currentResult.outputs.factors.waterFactor * 100)}%)
                </div>
              </div>

              {/* 2. Net Profit */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm relative overflow-hidden">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Projected Net Profit</div>
                <div className={`text-3xl font-black mt-1 ${currentResult.outputs.netProfit >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}`}>
                  ₹{Math.abs(currentResult.outputs.netProfit).toLocaleString()}
                  {currentResult.outputs.netProfit < 0 && <span className="text-xs ml-1">(Loss)</span>}
                </div>
                <div className="text-xs font-bold text-slate-500 dark:text-slate-400 mt-1">
                  ROI: <span className="font-extrabold text-slate-900 dark:text-white">{currentResult.outputs.roiPct}%</span> • ₹{currentResult.outputs.profitPerAcre.toLocaleString()} / Acre
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  Gross Revenue: ₹{currentResult.outputs.grossRevenue.toLocaleString()}
                </div>
              </div>

              {/* 3. Resource Usage */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Water & Resource Consumption</div>
                <div className="text-2xl font-black text-blue-600 dark:text-blue-400 mt-1">
                  {currentResult.outputs.totalWaterM3.toLocaleString()} <span className="text-xs font-semibold">m³</span>
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-300 font-semibold mt-1">
                  {currentResult.outputs.waterPerAcreM3.toLocaleString()} m³/Acre ({activeInputs.waterMm} mm)
                </div>
                <div className="text-[11px] font-bold text-purple-600 dark:text-purple-400 mt-2">
                  Total NPK: {currentResult.outputs.totalNpkKg} kg ({currentResult.outputs.totalNpkPerAcre} kg/Ac)
                </div>
              </div>

              {/* 4. Total Cost */}
              <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
                <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Total Estimated Expenses</div>
                <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">
                  ₹{currentResult.outputs.totalCost.toLocaleString()}
                </div>
                <div className="text-xs text-slate-500 mt-1">
                  ₹{currentResult.outputs.totalCostPerAcre.toLocaleString()} / Acre total production cost
                </div>
                <div className="text-[10px] text-slate-400 mt-2">
                  Seeds/Ops: ₹{currentResult.outputs.costBreakdown.baseLaborAndSeeds.toLocaleString()} | Fert: ₹{currentResult.outputs.costBreakdown.fertilizer.toLocaleString()} | Water: ₹{currentResult.outputs.costBreakdown.waterPumpingAndEquip.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Diagnostic Rationale Panel */}
            <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-700 dark:text-slate-200 flex items-center gap-1.5">
                <Info className="w-4 h-4 text-emerald-600" /> Agronomic Influences & Response
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-bold text-blue-600 mb-0.5">Water Adequacy</div>
                  <div className="text-slate-700 dark:text-slate-300">
                    {activeInputs.waterMm >= currentResult.crop.optimalWaterMm
                      ? 'Full moisture satisfied. No drought penalty applied.'
                      : `${Math.round((1 - currentResult.outputs.factors.waterFactor) * 100)}% yield penalty due to deficit irrigation.`}
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-bold text-purple-600 mb-0.5">Nutrient Response</div>
                  <div className="text-slate-700 dark:text-slate-300">
                    Fertilizer factor at {Math.round(currentResult.outputs.factors.fertilizerFactor * 100)}% using diminishing-return curve.
                  </div>
                </div>
                <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/60 dark:border-slate-700/60">
                  <div className="font-bold text-amber-600 mb-0.5">Soil & Irrigation Match</div>
                  <div className="text-slate-700 dark:text-slate-300">
                    {currentResult.soil.name} yields {currentResult.soil.multiplier}x with {Math.round(currentResult.irrigation.efficiency * 100)}% drip efficiency.
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Action to consult Farm Advisor AI */}
            <div className="bg-gradient-to-r from-emerald-50 to-lime-50 dark:from-emerald-950/30 dark:to-lime-950/30 p-4 rounded-3xl border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <h5 className="font-black text-xs sm:text-sm text-emerald-900 dark:text-emerald-100">Want an AI Agronomist Review?</h5>
                  <p className="text-[11px] text-emerald-700 dark:text-emerald-300">
                    Ask Farm Advisor AI to explain this simulation using your live plot telemetry.
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => {
                  setActiveNav('module');
                  setActiveModule('ai-assistant');
                }}
                className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shrink-0 transition-colors shadow-sm flex items-center gap-1"
              >
                <span>Ask AI</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 2: SIDE-BY-SIDE COMPARISON & BEST OPTION HIGHLIGHTING */}
      {/* ========================================================================= */}
      {activeTab === 'compare' && (
        <div className="space-y-6">
          
          {/* Comparison Selector & "What Changed?" summary */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <h3 className="font-black text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <BarChart3 className="w-5 h-5 text-lime-600" /> Scenario Comparative Analysis
                </h3>
                <p className="text-xs text-slate-500">
                  Compare saved strategies side by side. The best performer for each agricultural metric is highlighted with 🏆.
                </p>
              </div>

              {/* Selector for What Changed diff */}
              <div className="flex items-center gap-2 text-xs">
                <span className="font-bold text-slate-500">Compare:</span>
                <select
                  value={compareAId}
                  onChange={(e) => setCompareAId(e.target.value)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-xs"
                >
                  {savedScenarios.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
                <span className="font-bold text-slate-400">vs</span>
                <select
                  value={compareBId}
                  onChange={(e) => setCompareBId(e.target.value)}
                  className="px-2.5 py-1.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 font-bold text-xs"
                >
                  {savedScenarios.map(s => (
                    <option key={s.id} value={s.id}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* One-Line "What Changed?" Summary Banner */}
            {whatChangedText && (
              <div className="p-3.5 rounded-2xl bg-lime-50 dark:bg-lime-950/40 border border-lime-200 dark:border-lime-800/60 text-xs font-semibold text-lime-900 dark:text-lime-200 flex items-start gap-2.5 shadow-inner">
                <Sparkles className="w-4 h-4 text-lime-600 shrink-0 mt-0.5" />
                <div>
                  <span className="font-black uppercase tracking-wider text-lime-800 dark:text-lime-300">What Changed? </span>
                  <span>{whatChangedText}</span>
                </div>
              </div>
            )}
          </div>

          {/* Interactive Recharts Comparison Chart */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 mb-4">
              Financial & Resource Comparison Bar Chart
            </h4>
            <div className="w-full h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
                  <XAxis dataKey="name" tick={{ fontSize: 12, fontWeight: 'bold' }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                  />
                  <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '10px' }} />
                  <Bar dataKey="Net Profit (₹1,000)" fill="#10b981" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Total Yield (Qtl)" fill="#f59e0b" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Total Cost (₹1,000)" fill="#64748b" radius={[6, 6, 0, 0]} />
                  <Bar dataKey="Water Used (m³ 100s)" fill="#3b82f6" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Detailed Side-by-Side Comparison Table with Best Highlighted */}
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-slate-100 dark:border-slate-800 font-extrabold text-xs uppercase tracking-wider text-slate-500">
              Metric-by-Metric Breakdown (Best in Green 🏆)
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-slate-50 dark:bg-slate-800/60 border-b border-slate-200 dark:border-slate-800 text-slate-400 font-bold">
                    <th className="p-3.5">Metric</th>
                    {savedScenarios.map(s => (
                      <th key={s.id} className="p-3.5 min-w-[160px]">
                        <div className="flex items-center justify-between">
                          <span className="text-slate-900 dark:text-white font-extrabold text-xs">{s.title}</span>
                          {savedScenarios.length > 2 && (
                            <button
                              onClick={() => handleDeleteScenario(s.id)}
                              className="text-slate-400 hover:text-rose-500 p-1"
                              title="Delete scenario"
                            >
                              <Trash2 className="w-3 h-3" />
                            </button>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-700 dark:text-slate-300">
                  
                  {/* Crop & Irrigation */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Crop & Irrigation</td>
                    {savedScenarios.map(s => (
                      <td key={s.id} className="p-3.5">
                        <div className="font-extrabold text-slate-900 dark:text-white">{s.result.crop.name}</div>
                        <div className="text-[11px] text-slate-400">{s.result.irrigation.name} ({s.inputs.area} Ac)</div>
                      </td>
                    ))}
                  </tr>

                  {/* Expected Yield */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Expected Total Yield</td>
                    {savedScenarios.map(s => {
                      const isBest = s.id === bestMetrics.highestYieldId;
                      return (
                        <td key={s.id} className={`p-3.5 ${isBest ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-sm">{s.result.outputs.totalYield.toLocaleString()} {s.result.outputs.yieldUnit}</span>
                            {isBest && <span className="text-xs" title="Highest Yield">🏆</span>}
                          </div>
                          <div className="text-[11px] text-slate-400">{s.result.outputs.yieldPerAcre} {s.result.outputs.yieldUnit}/Ac</div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Net Profit */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Estimated Net Profit</td>
                    {savedScenarios.map(s => {
                      const isBest = s.id === bestMetrics.highestProfitId;
                      return (
                        <td key={s.id} className={`p-3.5 ${isBest ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
                          <div className="flex items-center gap-1.5">
                            <span className={`font-black text-sm ${s.result.outputs.netProfit >= 0 ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600'}`}>
                              ₹{s.result.outputs.netProfit.toLocaleString()}
                            </span>
                            {isBest && <span className="text-xs" title="Highest Net Profit">🏆</span>}
                          </div>
                          <div className="text-[11px] text-slate-400">ROI: {s.result.outputs.roiPct}%</div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Total Cost */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Total Expenses</td>
                    {savedScenarios.map(s => {
                      const isBest = s.id === bestMetrics.lowestCostId;
                      return (
                        <td key={s.id} className={`p-3.5 ${isBest ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold">₹{s.result.outputs.totalCost.toLocaleString()}</span>
                            {isBest && <span className="text-xs" title="Lowest Total Cost">🏆</span>}
                          </div>
                          <div className="text-[11px] text-slate-400">₹{s.result.outputs.totalCostPerAcre.toLocaleString()}/Ac</div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Water Used */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Total Water Volume</td>
                    {savedScenarios.map(s => {
                      const isBest = s.id === bestMetrics.lowestWaterId;
                      return (
                        <td key={s.id} className={`p-3.5 ${isBest ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
                          <div className="flex items-center gap-1.5">
                            <span className="font-extrabold text-blue-600">{s.result.outputs.totalWaterM3.toLocaleString()} m³</span>
                            {isBest && <span className="text-xs" title="Lowest Water Usage">🏆</span>}
                          </div>
                          <div className="text-[11px] text-slate-400">{s.inputs.waterMm} mm applied</div>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Risk Level */}
                  <tr>
                    <td className="p-3.5 font-bold text-slate-500">Risk Assessment</td>
                    {savedScenarios.map(s => {
                      const isBest = s.id === bestMetrics.lowestRiskId;
                      return (
                        <td key={s.id} className={`p-3.5 ${isBest ? 'bg-emerald-50/70 dark:bg-emerald-950/30' : ''}`}>
                          <div className="flex items-center gap-1.5">
                            <span className="font-black">{s.result.outputs.risk.level}</span>
                            {isBest && <span className="text-xs" title="Safest Option">🏆</span>}
                          </div>
                          <div className="text-[10px] text-slate-400">Score: {s.result.outputs.risk.score}/100</div>
                        </td>
                      );
                    })}
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================================= */}
      {/* TAB 3: ASSUMPTIONS, FORMULAS & TRANSPARENCY PANEL */}
      {/* ========================================================================= */}
      {activeTab === 'assumptions' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
            <h3 className="text-lg font-black text-slate-900 dark:text-white flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-lime-600" /> Simulation Assumptions & Agronomic Formulas
            </h3>
            <p className="text-xs text-slate-500 leading-relaxed">
              CropCare's What-If Simulator uses transparent biological response curves rather than black-box AI.
              All formulas and parameters are listed below for full farmer confidence.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              
              {/* Formula 1 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
                  <span>1. Water Deficit & Evapotranspiration Curve</span>
                </div>
                <div className="font-mono bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-blue-600 dark:text-blue-400">
                  Effective_Water = Applied_Water_mm × Irrigation_Efficiency / Soil_Percolation_Loss<br />
                  Water_Factor = (Effective_Water / Optimal_Water)^Sensitivity_Exponent
                </div>
                <p className="text-slate-500 text-[11px]">
                  When effective water drops below optimal, yield drops non-linearly according to the crop's drought vulnerability index (e.g. Rice = 1.75 exponent, Mustard = 0.85).
                </p>
              </div>

              {/* Formula 2 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
                  <span>2. Mitscherlich-Baule Fertilizer Response</span>
                </div>
                <div className="font-mono bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-purple-600 dark:text-purple-400">
                  Fert_Factor = 0.55 + 0.45 × sin((Dose_Pct / 100) × π/2)
                </div>
                <p className="text-slate-500 text-[11px]">
                  Zero applied fertilizer yields 55% from native organic soil carbon. 100% recommended dose achieves 100% yield potential. Over-fertilization (&gt;100%) produces diminishing returns with pest penalties.
                </p>
              </div>

              {/* Formula 3 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
                  <span>3. Financial P&L & Water Conversion</span>
                </div>
                <div className="font-mono bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-emerald-600 dark:text-emerald-400">
                  Total_Yield = Base_Yield × Water_Factor × Fert_Factor × Soil_Multiplier<br />
                  Net_Profit = (Total_Yield × Mandi_Price) - Total_Expenses
                </div>
                <p className="text-slate-500 text-[11px]">
                  1 mm of rainfall/irrigation over 1 Acre equals 4.047 m³ of water. Pumping power is modeled at ₹0.85 per m³ lifted.
                </p>
              </div>

              {/* Formula 4 */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-xs space-y-2">
                <div className="font-extrabold text-slate-900 dark:text-white flex items-center gap-1.5 text-sm">
                  <span>4. Multi-Factor Risk Index (0 - 100)</span>
                </div>
                <div className="font-mono bg-white dark:bg-slate-900 p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 text-amber-600 dark:text-amber-400">
                  Risk_Score = Baseline(15) + Water_Deficit_Score + Overdose_Penalty + Capex_Exposure
                </div>
                <p className="text-slate-500 text-[11px]">
                  Classifies risk into Low (0-30), Moderate (31-60), High (61-80), and Critical (81-100) to protect farmers from capital loss.
                </p>
              </div>

            </div>

            {/* Baseline Crop Table */}
            <div className="pt-4 border-t border-slate-100 dark:border-slate-800">
              <h4 className="font-extrabold text-xs uppercase tracking-wider text-slate-500 mb-3">
                CropCare Baseline Agronomic Constants
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead>
                    <tr className="bg-slate-50 dark:bg-slate-800 text-slate-400 font-bold">
                      <th className="p-2.5">Crop</th>
                      <th className="p-2.5">Base Yield/Ac</th>
                      <th className="p-2.5">Optimal Water</th>
                      <th className="p-2.5">NPK Ratio</th>
                      <th className="p-2.5">Base Cost/Ac</th>
                      <th className="p-2.5">Mandi Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                    {Object.values(CROPS_DATA).map(c => (
                      <tr key={c.id}>
                        <td className="p-2.5 font-bold text-slate-800 dark:text-slate-200">{c.name}</td>
                        <td className="p-2.5">{c.baseYieldPerAcre} {c.yieldUnit}</td>
                        <td className="p-2.5">{c.optimalWaterMm} mm</td>
                        <td className="p-2.5">{c.optimalNpkPerAcre.n}:{c.optimalNpkPerAcre.p}:{c.optimalNpkPerAcre.k}</td>
                        <td className="p-2.5">₹{c.baseCostPerAcre.toLocaleString()}</td>
                        <td className="p-2.5 font-bold text-emerald-600">₹{c.baseMarketPricePerUnit}/Qtl</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
