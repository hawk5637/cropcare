import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Sprout, 
  Droplet, 
  CloudSun, 
  LineChart, 
  ShieldCheck, 
  TrendingUp, 
  Play, 
  Square, 
  ArrowUpRight,
  Handshake,
  Bot,
  MapPin,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Camera,
  Compass
} from 'lucide-react';

export default function FarmerDashboard() {
  const { 
    userName, 
    mode, 
    setActiveNav, 
    activeDashboardTab, 
    setActiveDashboardTab, 
    setIsIntroModalOpen,
    t 
  } = useApp();

  const [isDripRunning, setIsDripRunning] = useState(false);
  const [soilMoisture, setSoilMoisture] = useState(36);
  const [bidsAccepted, setBidsAccepted] = useState([]);

  const toggleDrip = () => {
    setIsDripRunning(!isDripRunning);
    if (!isDripRunning) {
      setSoilMoisture(41);
    } else {
      setSoilMoisture(36);
    }
  };

  const handleAcceptBid = (bidId, buyer, amount) => {
    confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
    setBidsAccepted(prev => [...prev, bidId]);
  };

  const plots = [
    { id: 'plot-a', name: 'Parcel A-1 (Wheat HD-2967)', size: '6.5 Acres', moisture: soilMoisture, npk: '120:60:40', health: 'Optimal' },
    { id: 'plot-b', name: 'Parcel B-2 (Mustard Pusa Bold)', size: '4.0 Acres', moisture: 34, npk: '80:40:40', health: 'Good' },
    { id: 'plot-c', name: 'Parcel C-3 (Basmati Rice Nursery)', size: '4.0 Acres', moisture: 42, npk: '100:50:50', health: 'Vegetative' }
  ];

  const mandiRates = [
    { crop: 'Wheat (HD-2967)', mandi: 'Khanna APMC', spotPrice: '₹2,540 / qtl', change: '+₹45', trend: 'up' },
    { crop: 'Basmati Rice (1121)', mandi: 'Karnal APMC', spotPrice: '₹4,380 / qtl', change: '+₹110', trend: 'up' },
    { crop: 'Mustard (Pusa Bold)', mandi: 'Alwar APMC', spotPrice: '₹5,820 / qtl', change: '-₹20', trend: 'down' },
    { crop: 'Alphonso Mango', mandi: 'Vashi Market', spotPrice: '₹1,200 / crate', change: '+₹80', trend: 'up' }
  ];

  const buyerBids = [
    { id: 'BID-881', buyer: 'ITC Agri Business Ltd', crop: 'Wheat Grade-A (200 Qtls)', offerPrice: '₹2,580/qtl', escrowLocked: '₹5,16,000', expiry: '4 hours' },
    { id: 'BID-882', buyer: 'Adani Wilmar Procurement', crop: 'Mustard Seeds (100 Qtls)', offerPrice: '₹5,890/qtl', escrowLocked: '₹5,89,000', expiry: '12 hours' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-700 to-green-700 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>{t('roles.farmer.badge')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Welcome, {userName}
            </h2>
            <p className="text-xs sm:text-sm text-emerald-100 mt-1 max-w-xl">
              {t('roles.farmer.meta')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => setIsIntroModalOpen(true)}
              className="px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white border border-white/30 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
            >
              <Sparkles className="w-4 h-4 text-emerald-300 animate-pulse" />
              <span>Explore Tour</span>
            </button>

            <button
              onClick={toggleDrip}
              className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
                isDripRunning 
                  ? 'bg-amber-400 text-slate-900 shadow-md' 
                  : 'bg-white/20 hover:bg-white/30 text-white border border-white/30'
              }`}
            >
              {isDripRunning ? <Square className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
              <span>{isDripRunning ? 'Stop Drip Cycle' : t('roles.farmer.actions.triggerDrip')}</span>
            </button>

            <button
              onClick={() => setActiveNav('scanner')}
              className="px-4 py-2.5 rounded-xl bg-white text-emerald-800 font-extrabold text-xs shadow-md hover:bg-emerald-50 transition-colors flex items-center gap-1.5 cursor-pointer hover:scale-105 active:scale-95"
            >
              <Camera className="w-4 h-4 text-emerald-600" />
              <span>{t('roles.farmer.tabs.diagnostics')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Role KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.land')}</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">14.5 Acres</div>
          <div className="text-xs text-emerald-600 font-semibold mt-1">{t('roles.farmer.kpis.landSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.yield')}</div>
          <div className="text-2xl font-black text-amber-600 mt-1">242 Qtls</div>
          <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">{t('roles.farmer.kpis.yieldSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.income')}</div>
          <div className="text-2xl font-black text-blue-600 mt-1">₹13,00,100</div>
          <div className="text-xs text-blue-700 dark:text-blue-400 font-semibold mt-1">{t('roles.farmer.kpis.incomeSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.farmer.kpis.escrow')}</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">₹3,76,500</div>
          <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">{t('roles.farmer.kpis.escrowSub')}</div>
        </div>
      </div>

      {/* Interactive Platform Feature Spotlight Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
        <div 
          onClick={() => setActiveNav('scanner')}
          className="p-4 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 dark:from-emerald-950/40 dark:to-teal-950/20 border border-emerald-200 dark:border-emerald-800/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 text-white flex items-center justify-center group-hover:rotate-6 transition-transform">
              <Camera className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-200 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
              Live AI Doctor
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            Leaf Disease Scanner
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            Capture photos for instant ICAR remedies & organic spray formulas.
          </p>
        </div>

        <div 
          onClick={() => setActiveDashboardTab('mandi')}
          className="p-4 rounded-2xl bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/40 dark:to-yellow-950/20 border border-amber-200 dark:border-amber-800/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-amber-600 text-white flex items-center justify-center group-hover:rotate-6 transition-transform">
              <TrendingUp className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-amber-200 dark:bg-amber-900 text-amber-800 dark:text-amber-200">
              Live Mandi Ticker
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            Mandi Rates & MSP
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            Track daily APMC prices and lock guaranteed buyer purchase contracts.
          </p>
        </div>

        <div 
          onClick={() => setActiveNav('modules')}
          className="p-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/40 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center group-hover:rotate-6 transition-transform">
              <Sprout className="w-5 h-5" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-blue-200 dark:bg-blue-900 text-blue-800 dark:text-blue-200">
              18 Modules
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            Precision Farming Hub
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            Soil tests, drip irrigation, drone spraying, tractors & cold storage.
          </p>
        </div>

        <div 
          onClick={() => setIsIntroModalOpen(true)}
          className="p-4 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/40 dark:to-pink-950/20 border border-purple-200 dark:border-purple-800/60 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all cursor-pointer group"
        >
          <div className="flex items-center justify-between">
            <div className="w-9 h-9 rounded-xl bg-purple-600 text-white flex items-center justify-center group-hover:rotate-6 transition-transform">
              <Sparkles className="w-5 h-5 text-yellow-300" />
            </div>
            <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-purple-200 dark:bg-purple-900 text-purple-800 dark:text-purple-200">
              Interactive
            </span>
          </div>
          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white mt-2.5">
            Platform Intro & Tour
          </h4>
          <p className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
            Watch the animated guide explaining every smart feature of CropCare.
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {['overview', 'mandi', 'weather', 'bids'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveDashboardTab(tab)}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeDashboardTab === tab
                ? 'border-emerald-600 text-emerald-700 dark:text-emerald-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t(`roles.farmer.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Tab 1: Overview (Crops & Soil Telemetry) */}
      {(activeDashboardTab === 'overview' || !activeDashboardTab) && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Active Cultivated Parcels</h3>
            <div className="space-y-3">
              {plots.map((p) => (
                <div key={p.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <h4 className="font-extrabold text-sm text-slate-900 dark:text-white">{p.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{p.size} • Soil Health: {p.health}</p>
                    {mode === 'detailed' && (
                      <p className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 mt-1">
                        Sensor NPK Ratio: {p.npk} | pH: 6.8 | EC: 1.2 dS/m
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-xs text-slate-500 font-bold uppercase">Moisture</div>
                      <div className="text-lg font-black text-emerald-600">{p.moisture}%</div>
                    </div>
                    <button 
                      onClick={toggleDrip}
                      className="px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-slate-800 border border-emerald-300 dark:border-slate-700 text-xs font-bold text-emerald-800 dark:text-emerald-300"
                    >
                      Irrigate
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Weather & Spray Radar</h3>
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CloudSun className="w-6 h-6 text-amber-500" />
                  <div>
                    <div className="font-extrabold text-sm text-slate-900 dark:text-white">Partly Sunny • 28°C</div>
                    <div className="text-xs text-slate-500">Ludhiana, Punjab</div>
                  </div>
                </div>
                <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-[10px] font-bold rounded-md">
                  Optimal Spray
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Delta-T is 4.2 (ideal window). No rainfall predicted for the next 48 hours. Safe for fungicide spray on Parcel A-1.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Mandi Spot Rates */}
      {activeDashboardTab === 'mandi' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Live APMC Mandi Spot Prices</h3>
            <span className="text-xs text-emerald-600 font-bold">Refreshed 2m ago</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {mandiRates.map((m, idx) => (
              <div key={idx} className="py-3 flex items-center justify-between">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{m.crop}</div>
                  <div className="text-xs text-slate-500">{m.mandi}</div>
                </div>
                <div className="text-right">
                  <div className="font-extrabold text-sm text-slate-900 dark:text-white">{m.spotPrice}</div>
                  <div className={`text-xs font-bold ${m.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {m.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Direct Buyer Offers & Escrow */}
      {activeDashboardTab === 'bids' && (
        <div className="space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Direct-to-Farmer B2B Forward Tenders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {buyerBids.map((b) => {
              const isAccepted = bidsAccepted.includes(b.id);
              return (
                <div key={b.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                      {b.id}
                    </span>
                    <span className="text-[11px] text-slate-400">Expires in {b.expiry}</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{b.buyer}</h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5">{b.crop}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex justify-between items-center text-xs">
                    <div>
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Offer Rate</div>
                      <div className="font-extrabold text-slate-900 dark:text-white text-sm">{b.offerPrice}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 uppercase font-bold">Escrow Guaranteed</div>
                      <div className="font-extrabold text-emerald-600 text-sm">{b.escrowLocked}</div>
                    </div>
                  </div>
                  <button
                    disabled={isAccepted}
                    onClick={() => handleAcceptBid(b.id, b.buyer, b.offerPrice)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      isAccepted
                        ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 cursor-not-allowed'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-md'
                    }`}
                  >
                    {isAccepted ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        <span>Tender Accepted (Escrow Locked)</span>
                      </>
                    ) : (
                      <>
                        <Handshake className="w-4 h-4" />
                        <span>{t('roles.farmer.actions.acceptOffer')}</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

    </div>
  );
}
