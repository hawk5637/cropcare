import React, { useState, useEffect } from 'react';
import { 
  X, 
  Search, 
  RefreshCw, 
  TrendingUp, 
  TrendingDown, 
  MapPin, 
  ShieldCheck, 
  ArrowUpRight, 
  Bell, 
  Layers, 
  SlidersHorizontal,
  ChevronRight,
  ExternalLink,
  Award
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { 
  getLiveMandiPrices, 
  triggerLiveMandiTick, 
  searchMandiPrices, 
  APMC_STATES, 
  COMMODITY_CATEGORIES,
  MANDI_DATA_SOURCES 
} from '../services/mandiService';

export default function LiveMandiModal({ isOpen, onClose, preSelectedCommodity, onNavigateToMarket }) {
  const { language } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedState, setSelectedState] = useState(preSelectedCommodity?.state || 'All India');
  const [selectedCategory, setSelectedCategory] = useState(preSelectedCommodity?.category || 'All Categories');
  const [selectedSource, setSelectedSource] = useState('All Sources');
  const [commodities, setCommodities] = useState([]);
  const [activeItem, setActiveItem] = useState(preSelectedCommodity || null);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [alertSuccess, setAlertSuccess] = useState(null);
  const [lastSync, setLastSync] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));

  useEffect(() => {
    loadData();
  }, [language]);

  const loadData = () => {
    const list = getLiveMandiPrices(language);
    setCommodities([...list]);
    if (preSelectedCommodity) {
      const match = list.find(x => x.id === preSelectedCommodity.id) || preSelectedCommodity;
      setActiveItem(match);
    } else if (list.length > 0) {
      setActiveItem(list[0]);
    }
  };

  const handleManualSync = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const updated = triggerLiveMandiTick();
      setCommodities([...updated]);
      if (activeItem) {
        const refreshed = updated.find(x => x.id === activeItem.id);
        if (refreshed) setActiveItem(refreshed);
      }
      setLastSync(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      setIsRefreshing(false);
    }, 600);
  };

  const handleSetAlert = (cropName) => {
    setAlertSuccess(`SMS & WhatsApp alerts activated for ${cropName}! You will receive real-time price updates.`);
    setTimeout(() => setAlertSuccess(null), 4000);
  };

  const filteredCommodities = searchMandiPrices({
    query: searchTerm,
    state: selectedState,
    category: selectedCategory,
    source: selectedSource
  });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl w-full max-w-5xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-200 dark:border-slate-800 bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-300">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-lg sm:text-xl font-extrabold tracking-tight">Real Live Mandi Prices</h2>
                <span className="px-2 py-0.5 rounded-full bg-emerald-400 text-slate-950 font-black text-[10px] uppercase">
                  Agmarknet / e-NAM Live
                </span>
              </div>
              <p className="text-xs text-emerald-200 mt-0.5">
                Official APMC spot auction prices, government MSP benchmarks, and multi-source daily arrivals • Last synced {lastSync}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleManualSync}
              disabled={isRefreshing}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
              title="Sync latest live APMC bids"
            >
              <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Filter Controls Bar */}
        <div className="p-3 sm:p-4 bg-slate-50 dark:bg-slate-900/60 border-b border-slate-200 dark:border-slate-800 flex flex-wrap gap-2.5 items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1 min-w-[200px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search crop, variety, or mandi (e.g. Wheat, Indore, Kapas)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 focus:outline-none focus:border-emerald-500 font-medium text-slate-900 dark:text-white"
            />
          </div>

          {/* State & Category & Source Selectors */}
          <div className="flex flex-wrap items-center gap-2">
            <select
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              className="py-2 px-2.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {APMC_STATES.map(st => (
                <option key={st} value={st}>{st}</option>
              ))}
            </select>

            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="py-2 px-2.5 text-xs rounded-xl bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {COMMODITY_CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>

            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="py-2 px-2.5 text-xs rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-700 font-bold text-emerald-800 dark:text-emerald-300 focus:outline-none focus:border-emerald-500 cursor-pointer"
            >
              {MANDI_DATA_SOURCES.map(src => (
                <option key={src} value={src}>{src}</option>
              ))}
            </select>
          </div>
        </div>

        {alertSuccess && (
          <div className="mx-4 mt-3 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-300 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-xs font-semibold flex items-center justify-between">
            <span>{alertSuccess}</span>
            <button onClick={() => setAlertSuccess(null)} className="text-emerald-600 hover:text-emerald-800">
              <X className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Modal Body: Two column layout */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Left Column: Commodities List (7 cols) */}
          <div className="lg:col-span-7 space-y-2.5">
            <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-1">
              <span>Showing {filteredCommodities.length} Commodities</span>
              <span>Sorted by Market Activity</span>
            </div>

            {filteredCommodities.length === 0 ? (
              <div className="p-8 text-center bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700">
                <p className="font-bold text-slate-700 dark:text-slate-300">No commodities found matching "{searchTerm}"</p>
                <p className="text-xs text-slate-500 mt-1">Try switching the state filter to "All India" or clearing the search box.</p>
              </div>
            ) : (
              <div className="space-y-2 max-h-[52vh] overflow-y-auto pr-1">
                {filteredCommodities.map((item) => {
                  const isSelected = activeItem?.id === item.id;
                  const isUp = item.trend !== 'down';
                  const spreadVsMsp = item.msp ? (item.modalPrice - item.msp) : 0;

                  return (
                    <div
                      key={item.id}
                      onClick={() => setActiveItem(item)}
                      className={`p-3.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                        isSelected 
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-500 shadow-md ring-1 ring-emerald-500/20' 
                          : 'bg-white dark:bg-slate-800/80 hover:bg-slate-50 dark:hover:bg-slate-800 border-slate-200 dark:border-slate-700'
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-extrabold text-sm text-slate-900 dark:text-white truncate">
                            {item.name}
                          </h4>
                          <span className="px-1.5 py-0.5 rounded text-[9px] font-bold bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 shrink-0">
                            {item.category}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-400 mt-1">
                          <span className="flex items-center gap-1 truncate">
                            <MapPin className="w-3 h-3 text-emerald-600 dark:text-emerald-400" />
                            {item.mandi}
                          </span>
                          <span>• Arrivals: {item.arrivals}</span>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <div className="font-black text-base text-emerald-600 dark:text-emerald-400">
                          ₹{item.modalPrice?.toLocaleString('en-IN')}
                        </div>
                        <div className={`text-[11px] font-extrabold flex items-center justify-end ${isUp ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                          {isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                          {isUp ? '+' : ''}{item.change}%
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          {/* Right Column: Detailed Commodity Focus Card (5 cols) */}
          <div className="lg:col-span-5">
            {activeItem ? (
              <div className="bg-slate-50 dark:bg-slate-800/90 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 sm:p-5 flex flex-col justify-between space-y-4 shadow-sm">
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="flex items-center gap-1.5 flex-wrap">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                          {activeItem.category}
                        </span>
                        <span className="px-1.5 py-0.5 rounded text-[9px] font-extrabold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                          {activeItem.primarySource || 'Agmarknet'}
                        </span>
                        {activeItem.marketSentiment && (
                          <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold ${
                            activeItem.marketSentiment === 'Bullish'
                              ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300'
                              : activeItem.marketSentiment === 'Bearish'
                              ? 'bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300'
                              : 'bg-slate-100 text-slate-800 dark:bg-slate-700 dark:text-slate-300'
                          }`}>
                            {activeItem.marketSentiment === 'Bullish' ? '📈 Bullish' : activeItem.marketSentiment === 'Bearish' ? '📉 Bearish' : '⚖️ Stable'}
                          </span>
                        )}
                      </div>
                      <h3 className="font-extrabold text-lg text-slate-900 dark:text-white leading-tight mt-1">
                        {activeItem.name}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-emerald-500" />
                        {activeItem.mandi} ({activeItem.state})
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                        {activeItem.demandLevel}
                      </span>
                      {activeItem.arrivalTrend && (
                        <span className="text-[10px] text-slate-500 font-semibold">
                          Arrival: {activeItem.arrivalTrend}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Price Banner */}
                  <div className="mt-4 p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700/80">
                    <div className="flex items-baseline justify-between">
                      <span className="text-xs font-bold text-slate-500">Live Modal Auction Price</span>
                      <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-bold bg-emerald-50 dark:bg-emerald-950/80 px-2 py-0.5 rounded">
                        {activeItem.lastUpdated}
                      </span>
                    </div>
                    <div className="flex items-baseline gap-2 mt-1">
                      <span className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                        ₹{activeItem.modalPrice?.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs font-medium text-slate-500">/ {activeItem.unit}</span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Min Price</span>
                        <span className="font-bold text-slate-700 dark:text-slate-300">₹{activeItem.minPrice?.toLocaleString('en-IN')}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 text-[10px] uppercase font-bold block">Max Price</span>
                        <span className="font-bold text-emerald-600 dark:text-emerald-400">₹{activeItem.maxPrice?.toLocaleString('en-IN')}</span>
                      </div>
                    </div>
                  </div>

                  {/* MSP Benchmark Comparison */}
                  {activeItem.msp && (
                    <div className="mt-3 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 text-xs flex items-center justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-extrabold text-amber-800 dark:text-amber-300 block">
                          Govt. MSP Benchmark
                        </span>
                        <span className="font-bold text-slate-800 dark:text-slate-200">
                          ₹{activeItem.msp.toLocaleString('en-IN')} / Quintal
                        </span>
                      </div>
                      <div className="text-right">
                        <span className="text-[10px] uppercase font-extrabold text-slate-500 block">Spread over MSP</span>
                        <span className="font-extrabold text-emerald-600 dark:text-emerald-400">
                          {activeItem.modalPrice >= activeItem.msp 
                            ? `+₹${(activeItem.modalPrice - activeItem.msp).toLocaleString('en-IN')} (Profitable)` 
                            : `-₹${(activeItem.msp - activeItem.modalPrice).toLocaleString('en-IN')}`}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Quality Specifications */}
                  {activeItem.qualitySpecs && (
                    <div className="mt-3 text-xs">
                      <span className="text-slate-400 text-[10px] uppercase font-bold block mb-1">
                        Required Mandi Quality Standard
                      </span>
                      <p className="p-2.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                        {activeItem.qualitySpecs}
                      </p>
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => handleSetAlert(activeItem.name)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-900 dark:bg-slate-700 hover:bg-slate-800 dark:hover:bg-slate-600 text-white font-extrabold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Bell className="w-3.5 h-3.5 text-amber-300" />
                    <span>Set Daily Price Alert on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => {
                      onClose();
                      if (onNavigateToMarket) onNavigateToMarket();
                    }}
                    className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-xs flex items-center justify-center gap-1.5 shadow-md shadow-emerald-600/30 transition-all cursor-pointer"
                  >
                    <span>View Mandi Buyer Contracts & Sell</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ) : (
              <div className="p-8 text-center text-slate-400 bg-slate-50 dark:bg-slate-800 rounded-2xl">
                Select a commodity to view auction details
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
