import React, { useState, useEffect, useRef } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  RefreshCw, 
  Radio, 
  ExternalLink, 
  SlidersHorizontal,
  ChevronRight,
  ShieldCheck,
  Search,
  X
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { getLiveMandiPrices, triggerLiveMandiTick, APMC_STATES } from '../services/mandiService';
import LiveMandiModal from './LiveMandiModal';

export default function LiveMandiTicker() {
  const { language, setActiveNav, setActiveModule } = useApp();
  const [commodities, setCommodities] = useState([]);
  const [isLivePaused, setIsLivePaused] = useState(false);
  const [selectedCommodity, setSelectedCommodity] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lastSyncTime, setLastSyncTime] = useState(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
  const [selectedState, setSelectedState] = useState('All India');
  const scrollContainerRef = useRef(null);

  // Initialize and subscribe to live ticks
  useEffect(() => {
    const initial = getLiveMandiPrices(language);
    setCommodities([...initial]);

    // Live auction tick interval (every 12 seconds)
    const interval = setInterval(() => {
      if (!isLivePaused) {
        const updated = triggerLiveMandiTick();
        if (updated && updated.length > 0) {
          setCommodities([...updated]);
          setLastSyncTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
        }
      }
    }, 12000);

    return () => clearInterval(interval);
  }, [language, isLivePaused]);

  // Filter for ticker display if a specific state is chosen
  const displayedItems = selectedState === 'All India' 
    ? commodities 
    : commodities.filter(c => c.state === selectedState || (c.mandi && c.mandi.includes(selectedState)));

  const handleOpenModule = () => {
    if (setActiveNav) {
      setActiveNav('module');
      if (setActiveModule) setActiveModule('market');
    }
  };

  return (
    <>
      <div className="bg-slate-900 border-b border-emerald-900/40 text-slate-200 text-xs py-2 px-3 sm:px-6 relative overflow-hidden select-none z-30 shadow-inner">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3">
          
          {/* Live Status Indicator */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 font-extrabold text-[11px] tracking-wide">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <Radio className="w-3 h-3 text-emerald-400" />
              <span>LIVE APMC</span>
            </span>

            {/* Quick State Selector Dropdown */}
            <div className="hidden lg:flex items-center gap-1 text-[11px] text-slate-400">
              <select
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
                className="bg-slate-800 text-emerald-300 text-[11px] font-semibold py-0.5 px-2 rounded-md border border-slate-700 focus:outline-none focus:border-emerald-500 cursor-pointer"
              >
                {APMC_STATES.map(st => (
                  <option key={st} value={st}>{st}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Scrolling Live Mandi Price Badges */}
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => setIsLivePaused(true)}
            onMouseLeave={() => setIsLivePaused(false)}
            className="flex-1 overflow-x-auto scrollbar-none flex items-center gap-3 py-0.5"
            style={{ scrollBehavior: 'smooth' }}
          >
            {displayedItems.map((item) => {
              const isUp = item.trend !== 'down';
              return (
                <div
                  key={item.id}
                  onClick={() => {
                    setSelectedCommodity(item);
                    setIsModalOpen(true);
                  }}
                  className="shrink-0 flex items-center gap-2 px-3 py-1 rounded-lg bg-slate-800/90 hover:bg-slate-700/90 border border-slate-700/60 hover:border-emerald-500/50 cursor-pointer transition-all shadow-sm group"
                  title="Click to view full mandi auction breakdown & MSP comparison"
                >
                  <span className="font-bold text-white text-[11px] group-hover:text-emerald-300 transition-colors">
                    {item.name}
                  </span>
                  <span className="text-[10px] text-slate-400 hidden sm:inline">
                    ({item.mandi?.split(',')[0]})
                  </span>
                  <span className="font-extrabold text-emerald-300 text-[11px]">
                    ₹{item.modalPrice?.toLocaleString('en-IN') || item.price}
                  </span>
                  <span className={`flex items-center text-[10px] font-bold ${isUp ? 'text-emerald-400' : 'text-rose-400'}`}>
                    {isUp ? <TrendingUp className="w-3 h-3 mr-0.5" /> : <TrendingDown className="w-3 h-3 mr-0.5" />}
                    {isUp ? '+' : ''}{item.change}%
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right Action: Full Screen Live Market Terminal */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-2.5 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white font-extrabold text-[11px] flex items-center gap-1 shadow-sm transition-all cursor-pointer"
            >
              <span>Explore All Rates</span>
              <ChevronRight className="w-3 h-3" />
            </button>
          </div>

        </div>
      </div>

      {/* Comprehensive Live Mandi Rates Modal */}
      {isModalOpen && (
        <LiveMandiModal
          isOpen={isModalOpen}
          onClose={() => {
            setIsModalOpen(false);
            setSelectedCommodity(null);
          }}
          preSelectedCommodity={selectedCommodity}
          onNavigateToMarket={handleOpenModule}
        />
      )}
    </>
  );
}
