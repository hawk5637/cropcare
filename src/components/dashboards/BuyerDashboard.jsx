import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  ShoppingBag, 
  TrendingUp, 
  FileText, 
  Truck, 
  Lock, 
  ShieldCheck, 
  Plus, 
  Check, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

export default function BuyerDashboard() {
  const { 
    userName, 
    mode, 
    activeDashboardTab, 
    setActiveDashboardTab, 
    t 
  } = useApp();

  const [escrowDeposited, setEscrowDeposited] = useState(4250000);
  const [lockedLots, setLockedLots] = useState([]);

  const handleLockLot = (lotName) => {
    confetti({ particleCount: 75, spread: 60, origin: { y: 0.6 } });
    setLockedLots(prev => [...prev, lotName]);
  };

  const handleDeposit = () => {
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    setEscrowDeposited(prev => prev + 1000000);
  };

  const procurementLots = [
    { id: 'LOT-901', name: 'Basmati Rice (Pusa 1121)', volume: '200 MT', farmer: 'Ludhiana Kisan Cluster', price: '₹4,380/qtl', moisture: '11.8%', qic: 'Verified A+' },
    { id: 'LOT-902', name: 'Sharbati Wheat (HD-2967)', volume: '150 MT', farmer: 'Karnal Farmers FPO', price: '₹2,540/qtl', moisture: '10.5%', qic: 'Verified A+' },
    { id: 'LOT-903', name: 'Alphonso Mangoes (GI Tag)', volume: '40 MT', farmer: 'Ratnagiri Orchards', price: '₹950/crate', moisture: 'Export Grade', qic: 'Verified GI' }
  ];

  const arbitrageSpread = [
    { commodity: 'Wheat HD-2967', originMandi: 'Khanna (₹2,510)', targetMandi: 'Delhi Azadpur (₹2,690)', spread: '+₹180/qtl', margin: '7.1%' },
    { commodity: 'Basmati Pusa 1121', originMandi: 'Karnal (₹4,350)', targetMandi: 'Mumbai Vashi (₹4,780)', spread: '+₹430/qtl', margin: '9.8%' },
    { commodity: 'Mustard Bold', originMandi: 'Alwar (₹5,800)', targetMandi: 'Jaipur (₹6,120)', spread: '+₹320/qtl', margin: '5.5%' }
  ];

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-700 via-amber-600 to-yellow-600 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-200" />
              <span>{t('roles.buyer.badge')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {userName} — Procurement Terminal
            </h2>
            <p className="text-xs sm:text-sm text-amber-100 mt-1 max-w-xl">
              {t('roles.buyer.meta')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleDeposit}
              className="px-4 py-2.5 rounded-xl bg-white text-amber-900 font-extrabold text-xs shadow-md hover:bg-amber-50 transition-colors flex items-center gap-1.5"
            >
              <Plus className="w-4 h-4 text-amber-700" />
              <span>{t('roles.buyer.actions.depositVault')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Role KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.buyer.kpis.contracts')}</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">18 Contracts</div>
          <div className="text-xs text-amber-600 font-semibold mt-1">{t('roles.buyer.kpis.contractsSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.buyer.kpis.volume')}</div>
          <div className="text-2xl font-black text-amber-600 mt-1">1,480 MT</div>
          <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">{t('roles.buyer.kpis.volumeSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.buyer.kpis.escrow')}</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">₹{(escrowDeposited / 100000).toFixed(2)}L</div>
          <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">{t('roles.buyer.kpis.escrowSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.buyer.kpis.fleet')}</div>
          <div className="text-2xl font-black text-purple-600 mt-1">7 Trucks</div>
          <div className="text-xs text-purple-700 dark:text-purple-400 font-semibold mt-1">{t('roles.buyer.kpis.fleetSub')}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {['procurement', 'mandiTicker', 'contracts', 'logistics', 'escrow'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveDashboardTab(tab)}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeDashboardTab === tab
                ? 'border-amber-600 text-amber-700 dark:text-amber-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t(`roles.buyer.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Tab 1: Bulk Produce Lots */}
      {(activeDashboardTab === 'procurement' || !activeDashboardTab) && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Active Farmgate Produce Lots</h3>
            <span className="text-xs text-amber-600 font-bold">100% Escrow Protected</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {procurementLots.map((lot) => {
              const isLocked = lockedLots.includes(lot.id);
              return (
                <div key={lot.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                      {lot.id}
                    </span>
                    <span className="text-xs text-emerald-600 font-bold">{lot.qic}</span>
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{lot.name}</h4>
                    <p className="text-xs text-slate-500 mt-0.5">{lot.farmer}</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex justify-between text-xs">
                    <div>
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Volume</div>
                      <div className="font-extrabold text-slate-900 dark:text-white">{lot.volume}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-[10px] text-slate-500 font-bold uppercase">Spot Price</div>
                      <div className="font-extrabold text-amber-600">{lot.price}</div>
                    </div>
                  </div>
                  <button
                    disabled={isLocked}
                    onClick={() => handleLockLot(lot.id)}
                    className={`w-full py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      isLocked 
                        ? 'bg-slate-100 text-slate-400 dark:bg-slate-800 cursor-not-allowed'
                        : 'bg-amber-600 hover:bg-amber-700 text-white shadow-md'
                    }`}
                  >
                    {isLocked ? (
                      <>
                        <Check className="w-4 h-4 text-emerald-600" />
                        <span>Procurement Locked</span>
                      </>
                    ) : (
                      <>
                        <Lock className="w-3.5 h-3.5" />
                        <span>{t('roles.buyer.actions.lockSpot')}</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Arbitrage & Tickers */}
      {activeDashboardTab === 'mandiTicker' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Multi-Mandi Arbitrage Spreads</h3>
            <span className="text-xs text-emerald-600 font-bold">Real-time Spreads</span>
          </div>

          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {arbitrageSpread.map((a, idx) => (
              <div key={idx} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{a.commodity}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{a.originMandi} ➔ {a.targetMandi}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-extrabold text-sm text-emerald-600">{a.spread}</div>
                    <div className="text-[11px] text-slate-400">Net Margin: {a.margin}</div>
                  </div>
                  <button
                    onClick={() => handleLockLot(a.commodity)}
                    className="px-3 py-1.5 rounded-lg bg-amber-50 dark:bg-slate-800 border border-amber-300 dark:border-slate-700 text-xs font-bold text-amber-800 dark:text-amber-300 hover:bg-amber-100"
                  >
                    Lock Spread
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 3: Forward Farmer Contracts */}
      {activeDashboardTab === 'contracts' && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Active Forward Farmer Contracts & FPO Agreements</h3>
              <p className="text-xs text-slate-500">Legal e-Contracts stamped with automated WDRA & e-NAM trade guarantees</p>
            </div>
            <button
              onClick={() => confetti({ particleCount: 50, spread: 45 })}
              className="px-4 py-2 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs flex items-center gap-1.5 shadow-sm"
            >
              <Plus className="w-4 h-4" />
              <span>Create Forward Contract</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: 'CTR-2026-081', farmer: 'Khanna Progressive Kisan FPO', crop: 'Sharbati Durum Wheat', qty: '120 MT', price: '₹2,580/Qtl', advance: '₹6,19,200 (Paid)', status: 'Active (Harvest in 12d)' },
              { id: 'CTR-2026-082', farmer: 'Karnal Basmati Growers Union', crop: '1121 Pusa Steam Basmati', qty: '80 MT', price: '₹3,820/Qtl', advance: '₹6,11,200 (Paid)', status: 'Quality Assayed' },
              { id: 'CTR-2026-083', farmer: 'Malwa Organic Soybean Cluster', crop: 'Non-GMO Yellow Soybean', qty: '50 MT', price: '₹4,750/Qtl', advance: '₹4,75,000 (Paid)', status: 'In Transit' }
            ].map((c) => (
              <div key={c.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                    {c.id}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600">{c.status}</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{c.crop}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">Supplier: {c.farmer}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 flex justify-between text-xs">
                  <div>
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Agreed Quantity</div>
                    <div className="font-extrabold text-slate-900 dark:text-white">{c.qty} @ {c.price}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] text-slate-500 font-bold uppercase">Escrow Advance</div>
                    <div className="font-extrabold text-amber-600">{c.advance}</div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => alert(`Downloading verified legal contract ${c.id}...`)}
                    className="flex-1 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-xs font-bold text-slate-800 dark:text-slate-200"
                  >
                    Download e-Contract PDF
                  </button>
                  <button 
                    onClick={() => alert(`Assay report for ${c.id}: Moisture 11.2%, Foreign Matter 0.4%, Grade: FAQ Premium`)}
                    className="px-3 py-2 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-800 text-xs font-bold text-amber-800 dark:text-amber-300"
                  >
                    View Lab Assay
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab 4: Cold-Chain Logistics */}
      {activeDashboardTab === 'logistics' && (
        <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Reefer Truck GPS Telematics</h3>
          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800 space-y-2 text-xs">
            <div className="flex items-center justify-between font-bold text-slate-900 dark:text-white">
              <span>Truck #PB-08-AX-9941 (Alphonso Mango 20 MT)</span>
              <span className="text-emerald-600">Temp: +4.2°C (Optimal)</span>
            </div>
            <p className="text-slate-500">Route: NH-48 Karnal bypass ➔ Delhi Azadpur Mandi. ETA: 2h 15m.</p>
          </div>
        </div>
      )}

      {/* Tab 5: Bank Escrow Settlement */}
      {activeDashboardTab === 'escrow' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-xs">
                <ShieldCheck className="w-4 h-4" />
                <span>WDRA & RBI Scheduled Bank Escrow Protected</span>
              </div>
              <h3 className="font-extrabold text-lg text-slate-900 dark:text-white mt-1">Escrow Liquidity & Milestone Release Desk</h3>
              <p className="text-xs text-slate-500">Guarantees T+0 payout to farmers instantly when electronic warehouse receipt (e-NWR) is signed.</p>
            </div>
            <button
              onClick={handleDeposit}
              className="px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-2 shadow-md shrink-0"
            >
              <Plus className="w-4 h-4" />
              <span>Add ₹5,00,000 to Vault</span>
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800">
              <div className="text-[11px] font-bold text-emerald-700 dark:text-emerald-300 uppercase">Available Vault Balance</div>
              <div className="text-2xl font-black text-emerald-800 dark:text-emerald-200 mt-1">₹{(escrowDeposited / 100000).toFixed(2)} Lakhs</div>
              <div className="text-[11px] text-emerald-600 mt-1">Active in SBI Escrow Account #...8892</div>
            </div>
            <div className="p-4 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800">
              <div className="text-[11px] font-bold text-amber-700 dark:text-amber-300 uppercase">Committed To Active Lots</div>
              <div className="text-2xl font-black text-amber-800 dark:text-amber-200 mt-1">₹17,05,400</div>
              <div className="text-[11px] text-amber-600 mt-1">Locked across 3 FPO contracts</div>
            </div>
            <div className="p-4 rounded-xl bg-purple-50 dark:bg-purple-950/40 border border-purple-200 dark:border-purple-800">
              <div className="text-[11px] font-bold text-purple-700 dark:text-purple-300 uppercase">T+0 Settled (This Month)</div>
              <div className="text-2xl font-black text-purple-800 dark:text-purple-200 mt-1">₹68,40,000</div>
              <div className="text-[11px] text-purple-600 mt-1">100% dispute-free disbursements</div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
