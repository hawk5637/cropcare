import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import {
  Layers3, Map, Sprout, LayoutGrid, MessageSquareHeart, Droplets, FlaskConical,
  Bug, CloudSun, Wrench, HeadphonesIcon, BarChart2, Store, Users, Warehouse,
  Truck, Wallet, PackageCheck, Accessibility, Search, ChevronRight, Sliders, Scale
} from 'lucide-react';

const MODULES = [
  { key: 'land-soil', name: 'Land & Soil', icon: Map, color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800', desc: 'Soil health, plot map, GPS boundaries', roles: ['farmer', 'expert'] },
  { key: 'seed', name: 'Seed', icon: Sprout, color: 'bg-green-100 dark:bg-green-950/40 text-green-700 dark:text-green-400 border-green-200 dark:border-green-800', desc: 'Variety selection, seed treatment, buy seeds', roles: ['farmer', 'supplier'] },
  { key: 'crop-planning', name: 'Crop Planning', icon: LayoutGrid, color: 'bg-lime-100 dark:bg-lime-950/40 text-lime-700 dark:text-lime-400 border-lime-200 dark:border-lime-800', desc: 'Sowing calendar, rotation, profit estimate', roles: ['farmer', 'expert'] },
  { key: 'resource-budget', name: 'Resource Budget Planner', icon: Scale, color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800', desc: 'Set water, fertilizer, labor & power caps with live trade-offs', roles: ['farmer', 'expert'] },
  { key: 'what-if-simulator', name: 'What-If Farm Simulator', icon: Sliders, color: 'bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800', desc: 'Simulate crop, water, and fertilizer scenarios', roles: ['farmer', 'expert'] },
  { key: 'ai-assistant', name: 'Farm Advisor AI', icon: MessageSquareHeart, color: 'bg-violet-100 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 border-violet-200 dark:border-violet-800', desc: 'Grounded agronomist AI & parcel telemetry advice', roles: ['farmer', 'buyer', 'supplier', 'expert'] },
  { key: 'water', name: 'Water & Irrigation', icon: Droplets, color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800', desc: 'Pump control, soil moisture, schedules', roles: ['farmer', 'expert'] },
  { key: 'fertilizer', name: 'Fertilizer', icon: FlaskConical, color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800', desc: 'NPK calculator, deficiency guide, buy inputs', roles: ['farmer', 'supplier', 'expert'] },
  { key: 'pest-disease', name: 'Pest & Disease', icon: Bug, color: 'bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border-red-200 dark:border-red-800', desc: 'Disease library, scan history, outbreak alerts', roles: ['farmer', 'expert'] },
  { key: 'weather', name: 'Weather', icon: CloudSun, color: 'bg-sky-100 dark:bg-sky-950/40 text-sky-700 dark:text-sky-400 border-sky-200 dark:border-sky-800', desc: '7-day forecast, spray advisor, farm action line', roles: ['farmer', 'buyer', 'expert'] },
  { key: 'machinery', name: 'Machinery & Labour', icon: Wrench, color: 'bg-orange-100 dark:bg-orange-950/40 text-orange-700 dark:text-orange-400 border-orange-200 dark:border-orange-800', desc: 'Rent tractors, hire workers, order parts', roles: ['farmer', 'supplier'] },
  { key: 'expert-support', name: 'Expert Support', icon: HeadphonesIcon, color: 'bg-indigo-100 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800', desc: 'Chat with agronomists, advisories, FAQ', roles: ['farmer', 'buyer', 'supplier', 'expert'] },
  { key: 'farm-management', name: 'Farm Management', icon: BarChart2, color: 'bg-teal-100 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800', desc: 'Ledger, P&L charts, harvest log, tasks', roles: ['farmer', 'expert'] },
  { key: 'market', name: 'Market', icon: Store, color: 'bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800', desc: 'Live mandi prices, alerts, list produce', roles: ['farmer', 'buyer'] },
  { key: 'buyer-management', name: 'Buyer Management', icon: Users, color: 'bg-yellow-100 dark:bg-yellow-950/40 text-yellow-700 dark:text-yellow-400 border-yellow-200 dark:border-yellow-800', desc: 'Verified buyers, bids, contracts', roles: ['farmer', 'buyer'] },
  { key: 'storage', name: 'Storage', icon: Warehouse, color: 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700', desc: 'Warehouse finder, lot tracker, pledge loans', roles: ['farmer', 'buyer', 'supplier'] },
  { key: 'logistics', name: 'Logistics', icon: Truck, color: 'bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800', desc: 'Book vehicles, track shipments live', roles: ['farmer', 'buyer', 'supplier'] },
  { key: 'payment', name: 'Payments & Finance', icon: Wallet, color: 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800', desc: 'Wallet, escrow, transactions, KCC loans', roles: ['farmer', 'buyer', 'supplier'] },
  { key: 'after-selling', name: 'After-Selling', icon: PackageCheck, color: 'bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border-purple-200 dark:border-purple-800', desc: 'Feedback, ratings, repeat buyers, analytics', roles: ['farmer', 'buyer'] },
  { key: 'accessibility', name: 'Accessibility', icon: Accessibility, color: 'bg-cyan-100 dark:bg-cyan-950/40 text-cyan-700 dark:text-cyan-400 border-cyan-200 dark:border-cyan-800', desc: 'Language, theme, font size, TTS voice', roles: ['farmer', 'buyer', 'supplier', 'expert'] }
];

const CATEGORIES = [
  { key: 'all', label: 'All Modules' },
  { key: 'farming', label: 'On-Farm', keys: ['land-soil', 'seed', 'crop-planning', 'resource-budget', 'what-if-simulator', 'water', 'fertilizer', 'pest-disease', 'weather', 'machinery'] },
  { key: 'market', label: 'Market & Sales', keys: ['market', 'buyer-management', 'storage', 'logistics', 'payment', 'after-selling'] },
  { key: 'support', label: 'Support', keys: ['ai-assistant', 'expert-support', 'farm-management', 'accessibility'] }
];

export default function ModulesHub() {
  const { setActiveNav, setActiveModule, userRole } = useApp();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');

  const openModule = (key) => {
    if (key === 'ai-assistant') {
      // ChatbotWidget is a floating widget; just navigate back to dashboard
      setActiveNav('dashboard');
      return;
    }
    setActiveModule(key);
    setActiveNav('module');
  };

  const activeCategoryKeys = CATEGORIES.find(c => c.key === category)?.keys || null;

  const filtered = MODULES.filter(m => {
    const matchesSearch = m.name.toLowerCase().includes(search.toLowerCase()) || m.desc.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = !activeCategoryKeys || activeCategoryKeys.includes(m.key);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-800 to-teal-800 text-white shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-4 right-8 w-32 h-32 rounded-full bg-white/20" />
          <div className="absolute bottom-2 left-1/3 w-20 h-20 rounded-full bg-white/10" />
        </div>
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-2">
            <Layers3 className="w-6 h-6 text-emerald-300" />
            <span className="text-emerald-300 font-semibold text-sm">CropCare Platform</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold mb-1">All Modules</h1>
          <p className="text-emerald-200 text-sm">18 integrated tools — select any module to open it</p>
        </div>
      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search modules..."
          className="w-full pl-10 pr-4 py-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
        />
      </div>

      {/* Category Filters */}
      <div className="flex gap-2 flex-wrap">
        {CATEGORIES.map(cat => (
          <button
            key={cat.key}
            onClick={() => setCategory(cat.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-bold border transition-all ${
              category === cat.key
                ? 'bg-emerald-600 text-white border-emerald-600'
                : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border-slate-200 dark:border-slate-700 hover:border-emerald-400'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Module Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filtered.map(m => {
          const Icon = m.icon;
          const accessible = m.roles.includes(userRole);
          return (
            <button
              key={m.key}
              onClick={() => openModule(m.key)}
              disabled={!accessible}
              className={`p-4 rounded-2xl border-2 text-left transition-all group ${
                accessible
                  ? `${m.color} hover:shadow-md hover:-translate-y-0.5 cursor-pointer`
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-100 dark:border-slate-800 opacity-40 cursor-not-allowed'
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${m.color}`}>
                  <Icon className="w-5 h-5" />
                </div>
                {accessible && (
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                )}
              </div>
              <div className="font-extrabold text-slate-900 dark:text-white text-sm leading-tight mb-1">{m.name}</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed line-clamp-2">{m.desc}</div>
              {!accessible && (
                <div className="text-[10px] font-bold text-slate-400 mt-2 uppercase">Not available for {userRole}</div>
              )}
            </button>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16">
          <Search className="w-12 h-12 text-slate-200 dark:text-slate-700 mx-auto mb-4" />
          <p className="text-slate-500">No modules found for "{search}"</p>
        </div>
      )}
    </div>
  );
}
