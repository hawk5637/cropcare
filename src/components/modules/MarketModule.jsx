import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Store, TrendingUp, TrendingDown, Bell, Plus, Search, Filter, CheckCircle2, ChevronRight, BarChart2 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const MANDI_PRICES = [
  // ─── VEGETABLES ─────────────────────────────────────
  { 
    crop: 'Tomato (Hybrid)', 
    category: 'Vegetables', 
    icon: '🍅', 
    mandi: 'Kolar APMC (Karnataka)', 
    price: 1850, 
    change: +140, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1520, 1580, 1640, 1690, 1720, 1790, 1850] 
  },
  { 
    crop: 'Onion (Nashik Red)', 
    category: 'Vegetables', 
    icon: '🧅', 
    mandi: 'Lasalgaon APMC (Maharashtra)', 
    price: 2420, 
    change: +80, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [2150, 2200, 2250, 2300, 2360, 2390, 2420] 
  },
  { 
    crop: 'Potato (Kufri Jyoti)', 
    category: 'Vegetables', 
    icon: '🥔', 
    mandi: 'Agra APMC (Uttar Pradesh)', 
    price: 1480, 
    change: +30, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1390, 1400, 1420, 1430, 1450, 1460, 1480] 
  },
  { 
    crop: 'Green Chilli (Teja)', 
    category: 'Vegetables', 
    icon: '🌶️', 
    mandi: 'Guntur APMC (Andhra Pradesh)', 
    price: 6800, 
    change: +250, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [6200, 6350, 6400, 6520, 6600, 6710, 6800] 
  },
  { 
    crop: 'Cauliflower', 
    category: 'Vegetables', 
    icon: '🥦', 
    mandi: 'Azadpur APMC (Delhi)', 
    price: 1650, 
    change: -40, 
    unit: '₹/qtl', 
    trend: 'down', 
    history: [1750, 1730, 1720, 1700, 1690, 1670, 1650] 
  },
  { 
    crop: 'Garlic (G-282)', 
    category: 'Vegetables', 
    icon: '🧄', 
    mandi: 'Mandsaur APMC (Madhya Pradesh)', 
    price: 14500, 
    change: +400, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [13200, 13500, 13700, 13900, 14100, 14300, 14500] 
  },

  // ─── FRUITS ─────────────────────────────────────────
  { 
    crop: 'Mango (Alphonso / Hapus)', 
    category: 'Fruits', 
    icon: '🥭', 
    mandi: 'Vashi APMC (Navi Mumbai)', 
    price: 8500, 
    change: +350, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [7500, 7700, 7900, 8100, 8250, 8350, 8500] 
  },
  { 
    crop: 'Banana (Grand Naine G-9)', 
    category: 'Fruits', 
    icon: '🍌', 
    mandi: 'Jalgaon APMC (Maharashtra)', 
    price: 1950, 
    change: +60, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1780, 1800, 1830, 1860, 1900, 1920, 1950] 
  },
  { 
    crop: 'Apple (Royal Delicious)', 
    category: 'Fruits', 
    icon: '🍎', 
    mandi: 'Shimla APMC (Himachal Pradesh)', 
    price: 9200, 
    change: +150, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [8600, 8750, 8850, 8950, 9050, 9120, 9200] 
  },
  { 
    crop: 'Pomegranate (Bhagwa)', 
    category: 'Fruits', 
    icon: '🍎', 
    mandi: 'Solapur APMC (Maharashtra)', 
    price: 11400, 
    change: +220, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [10500, 10700, 10900, 11100, 11250, 11320, 11400] 
  },
  { 
    crop: 'Grapes (Thompson Seedless)', 
    category: 'Fruits', 
    icon: '🍇', 
    mandi: 'Nashik APMC (Maharashtra)', 
    price: 6200, 
    change: -90, 
    unit: '₹/qtl', 
    trend: 'down', 
    history: [6500, 6450, 6400, 6350, 6300, 6250, 6200] 
  },
  { 
    crop: 'Papaya (Red Lady 786)', 
    category: 'Fruits', 
    icon: '🍈', 
    mandi: 'Anantapur APMC (Andhra Pradesh)', 
    price: 1850, 
    change: +50, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1690, 1720, 1750, 1780, 1800, 1820, 1850] 
  },

  // ─── GRAINS & CASH CROPS ────────────────────────────
  { 
    crop: 'Wheat (HD-2967)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Khanna APMC (Punjab)', 
    price: 2540, 
    change: +45, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [2380, 2410, 2440, 2490, 2510, 2530, 2540] 
  },
  { 
    crop: 'Basmati Rice (1121)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Karnal APMC (Haryana)', 
    price: 4380, 
    change: +110, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [4100, 4150, 4200, 4280, 4320, 4360, 4380] 
  },
  { 
    crop: 'Mustard (Pusa Bold)', 
    category: 'Grains & Crops', 
    icon: '🌼', 
    mandi: 'Alwar APMC (Rajasthan)', 
    price: 5820, 
    change: -20, 
    unit: '₹/qtl', 
    trend: 'down', 
    history: [5900, 5880, 5870, 5850, 5840, 5830, 5820] 
  },
  { 
    crop: 'Cotton (Kapas)', 
    category: 'Grains & Crops', 
    icon: '🌱', 
    mandi: 'Rajkot APMC (Gujarat)', 
    price: 7200, 
    change: -80, 
    unit: '₹/qtl', 
    trend: 'down', 
    history: [7400, 7380, 7360, 7330, 7300, 7250, 7200] 
  },
  { 
    crop: 'Maize (Hybrid)', 
    category: 'Grains & Crops', 
    icon: '🌽', 
    mandi: 'Davangere APMC (Karnataka)', 
    price: 1980, 
    change: +30, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1880, 1900, 1920, 1940, 1960, 1970, 1980] 
  },
  { 
    crop: 'Soybean (JS-335)', 
    category: 'Grains & Crops', 
    icon: '🌱', 
    mandi: 'Indore APMC (Madhya Pradesh)', 
    price: 4520, 
    change: +60, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [4300, 4350, 4380, 4420, 4460, 4490, 4520] 
  }
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];
const CATEGORIES = ['All Mandis', 'Vegetables', 'Fruits', 'Grains & Crops'];

export default function MarketModule() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Mandis');
  const [selectedCrop, setSelectedCrop] = useState(MANDI_PRICES[0]);
  const [alertSet, setAlertSet] = useState({});
  const [listing, setListing] = useState(false);
  const [listingData, setListingData] = useState({ crop: '', qty: '', grade: '', price: '', notes: '' });
  const [listingDone, setListingDone] = useState(false);

  const filtered = MANDI_PRICES.filter(m => {
    const matchesSearch = m.crop.toLowerCase().includes(search.toLowerCase()) ||
      m.mandi.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'All Mandis' || m.category === activeCategory;
    return matchesSearch && matchesCat;
  });

  const chartData = selectedCrop ? selectedCrop.history.map((v, i) => ({ day: DAYS[i], price: v })) : [];

  const handleAlertToggle = (crop) => {
    setAlertSet(prev => ({ ...prev, [crop]: !prev[crop] }));
  };

  const handleListingSubmit = (e) => {
    e.preventDefault();
    setListingDone(true);
    setListing(false);
    setTimeout(() => setListingDone(false), 4000);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 mb-2">
            <Store className="w-3.5 h-3.5 text-amber-600" />
            <span>e-NAM Real-Time Terminal Rates</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            Mandi Rates & Commodity Prices
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Live APMC market prices for vegetables, fruits, grains, and cash crops with 7-day trend analytics
          </p>
        </div>
        <button 
          onClick={() => setListing(true)} 
          className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-600/20 hover:bg-amber-700 transition-colors"
        >
          <Plus className="w-4 h-4" /> 
          <span>List Produce for Direct Sale</span>
        </button>
      </div>

      {listingDone && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 animate-in fade-in">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">Produce Listing Published!</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-300">
              Verified buyers and institutional food processors in your region can now submit sealed escrow bids.
            </div>
          </div>
        </div>
      )}

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map(cat => {
            const count = cat === 'All Mandis' 
              ? MANDI_PRICES.length 
              : MANDI_PRICES.filter(m => m.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeCategory === cat
                    ? 'bg-amber-600 text-white shadow-md shadow-amber-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-amber-300'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search crop or APMC mandi..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
          />
        </div>
      </div>

      {/* Selected Crop 7-Day Chart Spotlight */}
      {selectedCrop && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xl">{selectedCrop.icon}</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {selectedCrop.crop} Price Trend
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                  {selectedCrop.mandi}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                Current spot rate: <strong className="text-slate-900 dark:text-white">₹{selectedCrop.price.toLocaleString('en-IN')} / qtl</strong>
                <span className={`ml-2 font-bold ${selectedCrop.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {selectedCrop.change > 0 ? `+₹${selectedCrop.change}` : `₹${selectedCrop.change}`} today
                </span>
              </p>
            </div>

            <button
              onClick={() => handleAlertToggle(selectedCrop.crop)}
              className={`self-start sm:self-auto px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                alertSet[selectedCrop.crop]
                  ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                  : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
              }`}
            >
              <Bell className="w-3.5 h-3.5" />
              <span>{alertSet[selectedCrop.crop] ? 'Alert Active' : 'Set Price Alert'}</span>
            </button>
          </div>

          <div className="h-56 w-full pt-2">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" strokeOpacity={0.4} />
                <XAxis dataKey="day" stroke="#94a3b8" fontSize={11} />
                <YAxis stroke="#94a3b8" fontSize={11} domain={['auto', 'auto']} tickFormatter={v => `₹${v}`} />
                <Tooltip 
                  formatter={(val) => [`₹${val}/qtl`, 'Rate']}
                  contentStyle={{ backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff', fontSize: '12px' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke={selectedCrop.trend === 'up' ? '#10b981' : '#f59e0b'} 
                  strokeWidth={3} 
                  dot={{ r: 4, fill: '#10b981' }} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Mandi Rates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map(item => (
          <div
            key={item.crop}
            onClick={() => setSelectedCrop(item)}
            className={`p-4 rounded-3xl border transition-all cursor-pointer shadow-sm hover:shadow-md ${
              selectedCrop?.crop === item.crop
                ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-400 dark:border-amber-600 ring-2 ring-amber-400/20'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-300'
            }`}
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h4 className="font-extrabold text-slate-900 dark:text-white text-sm">
                    {item.crop}
                  </h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">
                    {item.mandi}
                  </p>
                </div>
              </div>

              <span className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold flex items-center gap-0.5 ${
                item.trend === 'up' 
                  ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300' 
                  : 'bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300'
              }`}>
                {item.trend === 'up' ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                <span>{item.change > 0 ? `+₹${item.change}` : `₹${item.change}`}</span>
              </span>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Today's Rate</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                  ₹{item.price.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-semibold">{item.unit}</span>
                </span>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleAlertToggle(item.crop);
                }}
                className={`p-2 rounded-xl border text-xs transition-colors ${
                  alertSet[item.crop]
                    ? 'bg-amber-500 text-white border-amber-500'
                    : 'border-slate-200 dark:border-slate-700 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                title="Toggle Price Alert"
              >
                <Bell className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Listing Modal */}
      {listing && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                List Produce for Direct Procurement
              </h3>
              <button onClick={() => setListing(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <form onSubmit={handleListingSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Crop / Commodity</label>
                <input
                  required
                  placeholder="e.g. Tomato F1, Onion Nashik Red, Basmati Rice"
                  value={listingData.crop}
                  onChange={e => setListingData({ ...listingData, crop: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quantity</label>
                  <input
                    required
                    placeholder="e.g. 50 Quintals"
                    value={listingData.qty}
                    onChange={e => setListingData({ ...listingData, qty: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quality Grade</label>
                  <select
                    value={listingData.grade}
                    onChange={e => setListingData({ ...listingData, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select Grade</option>
                    <option value="Grade A+ (Export)">Grade A+ (Export)</option>
                    <option value="Grade A (Super)">Grade A (Super)</option>
                    <option value="Grade B (Processing)">Grade B (Processing)</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Expected Reserve Price (₹/qtl)</label>
                <input
                  required
                  placeholder="e.g. 2400"
                  type="number"
                  value={listingData.price}
                  onChange={e => setListingData({ ...listingData, price: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setListing(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-bold shadow-md shadow-amber-600/20"
                >
                  Publish Listing
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
