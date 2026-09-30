import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Store, 
  TrendingUp, 
  TrendingDown, 
  Bell, 
  Plus, 
  Search, 
  Filter, 
  CheckCircle2, 
  ChevronRight, 
  BarChart2, 
  ShoppingCart, 
  ShieldCheck, 
  ArrowUpRight, 
  MapPin, 
  X 
} from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { APMC_STATES } from '../../services/mandiService';

const MANDI_PRICES = [
  // ─── VEGETABLES ─────────────────────────────────────
  { 
    id: 'mnd-tomato',
    crop: 'Tomato (Kolar Hybrid F1)', 
    category: 'Vegetables', 
    icon: '🍅', 
    mandi: 'Kolar APMC (Karnataka)', 
    state: 'Karnataka',
    price: 1850, 
    msp: 1400,
    arrivals: '3,800 Qtls',
    change: +140, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1520, 1580, 1640, 1690, 1720, 1790, 1850],
    specs: 'Moisture < 88%, Firmness > 90%, Export Table Grade A'
  },
  { 
    id: 'mnd-onion',
    crop: 'Onion (Lasalgaon Red Garwa)', 
    category: 'Vegetables', 
    icon: '🧅', 
    mandi: 'Lasalgaon APMC (Maharashtra)', 
    state: 'Maharashtra',
    price: 2420, 
    msp: 1950,
    arrivals: '9,200 Qtls',
    change: +80, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [2150, 2200, 2250, 2300, 2360, 2390, 2420],
    specs: 'Diameter 45-65mm, Pungency High, Storage Life 60 Days'
  },
  { 
    id: 'mnd-potato',
    crop: 'Potato (Agra Kufri Jyoti)', 
    category: 'Vegetables', 
    icon: '🥔', 
    mandi: 'Agra APMC (Uttar Pradesh)', 
    state: 'Uttar Pradesh',
    price: 1480, 
    msp: 1250,
    arrivals: '14,500 Qtls',
    change: +30, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1390, 1400, 1420, 1430, 1450, 1460, 1480],
    specs: 'Dry Matter 19.5%, Size 40-60mm, Sugar < 0.2%'
  },
  { 
    id: 'mnd-chilli',
    crop: 'Green Chilli (Guntur Teja S17)', 
    category: 'Vegetables', 
    icon: '🌶️', 
    mandi: 'Guntur APMC (Andhra Pradesh)', 
    state: 'Andhra Pradesh',
    price: 6800, 
    msp: 5200,
    arrivals: '4,100 Qtls',
    change: +250, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [6200, 6350, 6400, 6520, 6600, 6710, 6800],
    specs: 'Pungency 75,000 SHU, Deep Red, Moisture < 10%'
  },
  { 
    id: 'mnd-garlic',
    crop: 'Garlic (Mandsaur G-282 Bold)', 
    category: 'Vegetables', 
    icon: '🧄', 
    mandi: 'Mandsaur APMC (Madhya Pradesh)', 
    state: 'Madhya Pradesh',
    price: 14500, 
    msp: 11000,
    arrivals: '2,600 Qtls',
    change: +400, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [13200, 13500, 13700, 13900, 14100, 14300, 14500],
    specs: 'White Solid Cloves 18-22 per bulb, Diameter > 45mm'
  },
  { 
    id: 'mnd-ginger',
    crop: 'Ginger (Wayanad High-Curcumin)', 
    category: 'Vegetables', 
    icon: '🫚', 
    mandi: 'Wayanad APMC (Kerala)', 
    state: 'Kerala',
    price: 11200, 
    msp: 9500,
    arrivals: '1,450 Qtls',
    change: +350, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [10200, 10400, 10600, 10800, 10950, 11050, 11200],
    specs: 'Fibre < 4.2%, Moisture 82%, Rhizome Length > 10cm'
  },
  { 
    id: 'mnd-turmeric',
    crop: 'Turmeric (Erode Finger Salem)', 
    category: 'Vegetables', 
    icon: '🌿', 
    mandi: 'Erode APMC (Tamil Nadu)', 
    state: 'Tamil Nadu',
    price: 16800, 
    msp: 13500,
    arrivals: '3,200 Qtls',
    change: +550, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [15100, 15400, 15800, 16100, 16350, 16600, 16800],
    specs: 'Curcumin > 4.5%, Double Polished Finger, Moisture < 9%'
  },
  { 
    id: 'mnd-capsicum',
    crop: 'Capsicum (Shimla Bell Pepper)', 
    category: 'Vegetables', 
    icon: '🫑', 
    mandi: 'Shimla APMC (Himachal Pradesh)', 
    state: 'Himachal Pradesh',
    price: 4200, 
    msp: 3400,
    arrivals: '1,100 Qtls',
    change: +120, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [3700, 3800, 3900, 4000, 4080, 4150, 4200],
    specs: 'Blocky 4-Lobe Green, Wall Thickness 6mm, Grade A'
  },

  // ─── FRUITS ─────────────────────────────────────────
  { 
    id: 'mnd-mango',
    crop: 'Mango (Ratnagiri Alphonso Hapus)', 
    category: 'Fruits', 
    icon: '🥭', 
    mandi: 'Vashi APMC (Navi Mumbai)', 
    state: 'Maharashtra',
    price: 8500, 
    msp: 6800,
    arrivals: '5,200 Crates',
    change: +350, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [7500, 7700, 7900, 8100, 8250, 8350, 8500],
    specs: 'GI Certified, Brix 18.5°, Foam Export Packing'
  },
  { 
    id: 'mnd-orange',
    crop: 'Orange (Nagpur Mandarin Table)', 
    category: 'Fruits', 
    icon: '🍊', 
    mandi: 'Nagpur APMC (Maharashtra)', 
    state: 'Maharashtra',
    price: 3800, 
    msp: 3100,
    arrivals: '6,400 Qtls',
    change: +110, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [3400, 3480, 3550, 3620, 3700, 3750, 3800],
    specs: 'Juice 48%, Size 70-75mm, Brix 12.5°'
  },
  { 
    id: 'mnd-apple',
    crop: 'Apple (Kashmir Royal Delicious)', 
    category: 'Fruits', 
    icon: '🍎', 
    mandi: 'Sopore APMC (Kashmir)', 
    state: 'Jammu & Kashmir',
    price: 9200, 
    msp: 7500,
    arrivals: '8,900 Boxes',
    change: +150, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [8600, 8750, 8850, 8950, 9050, 9120, 9200],
    specs: 'Extra Fancy 75-80mm, Pressure 14 lbs, Tray Packed'
  },
  { 
    id: 'mnd-pomegranate',
    crop: 'Pomegranate (Solapur Bhagwa Ruby)', 
    category: 'Fruits', 
    icon: '🍎', 
    mandi: 'Solapur APMC (Maharashtra)', 
    state: 'Maharashtra',
    price: 11400, 
    msp: 9000,
    arrivals: '3,800 Qtls',
    change: +220, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [10500, 10700, 10900, 11100, 11250, 11320, 11400],
    specs: 'Deep Red Arils, Weight 300g+, Zero Sun Burn'
  },
  { 
    id: 'mnd-banana',
    crop: 'Banana (Jalgaon Grand Naine G-9)', 
    category: 'Fruits', 
    icon: '🍌', 
    mandi: 'Jalgaon APMC (Maharashtra)', 
    state: 'Maharashtra',
    price: 1950, 
    msp: 1600,
    arrivals: '12,000 Qtls',
    change: +60, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [1780, 1800, 1830, 1860, 1900, 1920, 1950],
    specs: 'Calibration 39-44mm, Pulp Firm, Export Cluster Pack'
  },
  { 
    id: 'mnd-litchi',
    crop: 'Litchi (Muzaffarpur Shahi Aromatic)', 
    category: 'Fruits', 
    icon: '🍒', 
    mandi: 'Muzaffarpur APMC (Bihar)', 
    state: 'Bihar',
    price: 7600, 
    msp: 6000,
    arrivals: '2,200 Qtls',
    change: +190, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [6800, 6950, 7100, 7250, 7400, 7500, 7600],
    specs: 'Shahi Variety, Thin Peel, High Sugar Pulp, GI Tagged'
  },
  { 
    id: 'mnd-grapes',
    crop: 'Grapes (Nashik Thompson Seedless)', 
    category: 'Fruits', 
    icon: '🍇', 
    mandi: 'Nashik APMC (Maharashtra)', 
    state: 'Maharashtra',
    price: 6200, 
    msp: 5100,
    arrivals: '7,400 Qtls',
    change: -90, 
    unit: '₹/qtl', 
    trend: 'down', 
    history: [6500, 6450, 6400, 6350, 6300, 6250, 6200],
    specs: 'Berry Size 16mm+, Brix 17°, Residue Tested Below MRL'
  },

  // ─── GRAINS & CROPS ─────────────────────────────────
  { 
    id: 'mnd-wheat-sharbati',
    crop: 'Wheat (Sharbati Golden Durum)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Indore APMC (Madhya Pradesh)', 
    state: 'Madhya Pradesh',
    price: 2680, 
    msp: 2275,
    arrivals: '16,500 Qtls',
    change: +65, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [2510, 2540, 2580, 2610, 2640, 2660, 2680],
    specs: 'Protein > 13.5%, Lustrous Bold Grain, Moisture < 11%'
  },
  { 
    id: 'mnd-wheat-hd2967',
    crop: 'Wheat (Punjab HD-2967 Mill Grade)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Khanna APMC (Punjab)', 
    state: 'Punjab',
    price: 2540, 
    msp: 2275,
    arrivals: '24,000 Qtls',
    change: +45, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [2380, 2410, 2440, 2490, 2510, 2530, 2540],
    specs: 'Hectolitre Weight 79 kg/hl, Sound Grain 98%'
  },
  { 
    id: 'mnd-basmati',
    crop: 'Basmati Rice (Pusa 1121 Extra Long)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Karnal APMC (Haryana)', 
    state: 'Haryana',
    price: 4380, 
    msp: 3600,
    arrivals: '11,200 Qtls',
    change: +110, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [4100, 4150, 4200, 4280, 4320, 4360, 4380],
    specs: 'Avg Grain Length 8.4mm, Elongation 2.5x, Moisture < 12%'
  },
  { 
    id: 'mnd-mustard',
    crop: 'Mustard (Rajasthan Pusa Bold)', 
    category: 'Grains & Crops', 
    icon: '🌼', 
    mandi: 'Alwar APMC (Rajasthan)', 
    state: 'Rajasthan',
    price: 5820, 
    msp: 5650,
    arrivals: '8,400 Qtls',
    change: +40, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [5700, 5720, 5740, 5770, 5790, 5800, 5820],
    specs: 'Oil Content 42.5%, Moisture < 8%, Foreign Matter < 1%'
  },
  { 
    id: 'mnd-cotton',
    crop: 'Cotton (Gujarat Shankar-6 Kapas)', 
    category: 'Grains & Crops', 
    icon: '🌱', 
    mandi: 'Rajkot APMC (Gujarat)', 
    state: 'Gujarat',
    price: 7200, 
    msp: 7020,
    arrivals: '14,000 Bales',
    change: +80, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [6980, 7020, 7070, 7120, 7150, 7180, 7200],
    specs: 'Staple Length 29.5mm, Micronaire 3.8-4.2, Ginning 34%'
  },
  { 
    id: 'mnd-soybean',
    crop: 'Soybean (Malwa Yellow JS-9560)', 
    category: 'Grains & Crops', 
    icon: '🌱', 
    mandi: 'Ujjain APMC (Madhya Pradesh)', 
    state: 'Madhya Pradesh',
    price: 4720, 
    msp: 4600,
    arrivals: '18,500 Qtls',
    change: +90, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [4450, 4500, 4550, 4610, 4650, 4680, 4720],
    specs: 'Oil 19.8%, Moisture < 10%, Split Beans < 4%'
  },
  { 
    id: 'mnd-chana',
    crop: 'Chickpea / Desi Chana (JG-11)', 
    category: 'Grains & Crops', 
    icon: '🫘', 
    mandi: 'Bikaner APMC (Rajasthan)', 
    state: 'Rajasthan',
    price: 6150, 
    msp: 5440,
    arrivals: '7,100 Qtls',
    change: +130, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [5800, 5880, 5950, 6020, 6080, 6110, 6150],
    specs: 'Bold Desi Grain, Moisture < 9.5%, Foreign Seeds < 0.5%'
  },
  { 
    id: 'mnd-jeera',
    crop: 'Cumin Seeds (Unjha Jeera Machine Clean)', 
    category: 'Grains & Crops', 
    icon: '🌾', 
    mandi: 'Unjha APMC (Gujarat)', 
    state: 'Gujarat',
    price: 25400, 
    msp: 22000,
    arrivals: '5,500 Bags',
    change: +650, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [23800, 24100, 24450, 24800, 25050, 25200, 25400],
    specs: 'Purity 99.5% Machine Cleaned, Volatile Oil > 3.2%'
  },
  { 
    id: 'mnd-groundnut',
    crop: 'Groundnut Pods (Saurashtra Bold TG-37A)', 
    category: 'Grains & Crops', 
    icon: '🥜', 
    mandi: 'Junagadh APMC (Gujarat)', 
    state: 'Gujarat',
    price: 6780, 
    msp: 6377,
    arrivals: '9,800 Qtls',
    change: +70, 
    unit: '₹/qtl', 
    trend: 'up', 
    history: [6500, 6560, 6610, 6670, 6720, 6750, 6780],
    specs: 'Shelling 73%, Oil 49.5%, Moisture < 7%'
  }
];

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Today'];
const CATEGORIES = ['All Mandis', 'Vegetables', 'Fruits', 'Grains & Crops'];

export default function MarketModule() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All Mandis');
  const [selectedState, setSelectedState] = useState('All India');
  const [selectedCrop, setSelectedCrop] = useState(MANDI_PRICES[0]);
  const [alertSet, setAlertSet] = useState({});
  
  // Modals for Selling and Buying
  const [sellModalOpen, setSellModalOpen] = useState(false);
  const [sellData, setSellData] = useState({ crop: '', qty: '', grade: 'Grade A+ (Export)', price: '', mandi: 'Local APMC' });
  const [sellDone, setSellDone] = useState(false);

  const [buyModalOpen, setBuyModalOpen] = useState(false);
  const [buyTargetCrop, setBuyTargetCrop] = useState(null);
  const [buyData, setBuyData] = useState({ qty: '50', deliveryDate: 'Immediate', paymentMode: 'Escrow Lock' });
  const [buyDone, setBuyDone] = useState(false);

  const filtered = MANDI_PRICES.filter(m => {
    const matchesSearch = m.crop.toLowerCase().includes(search.toLowerCase()) ||
      m.mandi.toLowerCase().includes(search.toLowerCase()) ||
      m.state.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'All Mandis' || m.category === activeCategory;
    const matchesState = selectedState === 'All India' || m.state.toLowerCase() === selectedState.toLowerCase() || m.mandi.toLowerCase().includes(selectedState.toLowerCase());
    return matchesSearch && matchesCat && matchesState;
  });

  const chartData = selectedCrop ? selectedCrop.history.map((v, i) => ({ day: DAYS[i], price: v })) : [];

  const handleAlertToggle = (crop) => {
    setAlertSet(prev => ({ ...prev, [crop]: !prev[crop] }));
  };

  const handleSellSubmit = (e) => {
    e.preventDefault();
    setSellDone(true);
    setSellModalOpen(false);
    setTimeout(() => setSellDone(false), 5000);
  };

  const handleBuySubmit = (e) => {
    e.preventDefault();
    setBuyDone(true);
    setBuyModalOpen(false);
    setTimeout(() => setBuyDone(false), 5000);
  };

  const triggerBuyModal = (crop) => {
    setBuyTargetCrop(crop);
    setBuyModalOpen(true);
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Header with Sell and Buy Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 border border-amber-300 dark:border-amber-800 mb-2">
            <Store className="w-3.5 h-3.5 text-amber-600" />
            <span>Govt. Agmarknet & e-NAM Real-Time Mandi Hub ({MANDI_PRICES.length} Commodities)</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            Live Mandi Trading & Procurement Cockpit
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Verified spot terminal rates, official CACP Minimum Support Prices (MSP), and electronic bidding across 24 Indian APMCs.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button 
            onClick={() => {
              setSellData({ crop: selectedCrop?.crop || 'Wheat (HD-2967)', qty: '100', grade: 'Grade A (Super)', price: selectedCrop?.price || 2500, mandi: selectedCrop?.mandi || 'Lasalgaon APMC' });
              setSellModalOpen(true);
            }} 
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-amber-600 text-white font-extrabold text-xs shadow-md shadow-amber-600/20 hover:bg-amber-700 transition-colors"
          >
            <Plus className="w-4 h-4" /> 
            <span>Sell Harvest Lot</span>
          </button>

          <button 
            onClick={() => triggerBuyModal(selectedCrop)} 
            className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
          >
            <ShoppingCart className="w-4 h-4" /> 
            <span>Procure / Buy Lot</span>
          </button>
        </div>
      </div>

      {/* Notifications */}
      {sellDone && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 animate-in fade-in">
          <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">Sale Lot Listed on e-NAM National Grid!</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-300">
              Verified institutional food processors & APMC commission agents can now submit sealed escrow bids.
            </div>
          </div>
        </div>
      )}

      {buyDone && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 animate-in fade-in">
          <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
          <div>
            <div className="font-bold text-emerald-900 dark:text-emerald-200 text-sm">Escrow Procurement Contract Locked!</div>
            <div className="text-xs text-emerald-700 dark:text-emerald-300">
              Contract note generated with digital APMC receipt. Funds held safely in e-NAM nodal escrow pending quality dispatch.
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

        <div className="flex items-center gap-2 w-full md:w-auto">
          <select
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
            className="py-2.5 px-3 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs font-semibold text-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500 cursor-pointer shrink-0"
          >
            {APMC_STATES.map(st => (
              <option key={st} value={st}>{st}</option>
            ))}
          </select>

          <div className="relative flex-1 md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Search crop, state, or APMC mandi..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
          </div>
        </div>
      </div>

      {/* Selected Crop 7-Day Chart Spotlight */}
      {selectedCrop && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200 dark:border-slate-800 shadow-md space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl">{selectedCrop.icon}</span>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                  {selectedCrop.crop} Price Dynamics
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-bold rounded-md bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300">
                  {selectedCrop.mandi}
                </span>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 flex flex-wrap items-center gap-3">
                <span>
                  Today's Spot: <strong className="text-slate-900 dark:text-white">₹{selectedCrop.price.toLocaleString('en-IN')} / qtl</strong>
                  <span className={`ml-1.5 font-bold ${selectedCrop.trend === 'up' ? 'text-emerald-600' : 'text-red-500'}`}>
                    {selectedCrop.change > 0 ? `+₹${selectedCrop.change}` : `₹${selectedCrop.change}`} today
                  </span>
                </span>
                <span>•</span>
                <span>Govt. CACP MSP: <strong className="text-emerald-600 font-bold">₹{selectedCrop.msp.toLocaleString('en-IN')}</strong></span>
                <span>•</span>
                <span>Daily Arrivals: <strong className="text-slate-700 dark:text-slate-300">{selectedCrop.arrivals}</strong></span>
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => triggerBuyModal(selectedCrop)}
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 shadow-sm"
              >
                <ShoppingCart className="w-3.5 h-3.5" />
                <span>Buy This Lot</span>
              </button>

              <button
                onClick={() => handleAlertToggle(selectedCrop.crop)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-colors flex items-center gap-1.5 ${
                  alertSet[selectedCrop.crop]
                    ? 'bg-amber-500 text-white border-amber-500 shadow-sm'
                    : 'border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                }`}
              >
                <Bell className="w-3.5 h-3.5" />
                <span>{alertSet[selectedCrop.crop] ? 'Alert Active' : 'Set Price Alert'}</span>
              </button>
            </div>
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
            key={item.id || item.crop}
            onClick={() => setSelectedCrop(item)}
            className={`p-5 rounded-3xl border transition-all cursor-pointer shadow-sm hover:shadow-md flex flex-col justify-between ${
              selectedCrop?.crop === item.crop
                ? 'bg-amber-50/40 dark:bg-amber-950/20 border-amber-400 dark:border-amber-600 ring-2 ring-amber-400/20'
                : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:border-amber-300'
            }`}
          >
            <div>
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-center gap-2.5">
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h4 className="font-extrabold text-slate-900 dark:text-white text-sm line-clamp-1">
                      {item.crop}
                    </h4>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-500 shrink-0" />
                      <span>{item.mandi}</span>
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

              {/* Specs & Arrivals */}
              <div className="mt-3 text-[11px] text-slate-500 dark:text-slate-400 space-y-1 bg-slate-50 dark:bg-slate-800/50 p-2.5 rounded-xl">
                <div className="flex justify-between">
                  <span>Govt MSP:</span>
                  <strong className="text-emerald-600 dark:text-emerald-400 font-bold">₹{item.msp.toLocaleString('en-IN')}/qtl</strong>
                </div>
                <div className="flex justify-between">
                  <span>Daily Arrivals:</span>
                  <strong className="text-slate-700 dark:text-slate-300">{item.arrivals}</strong>
                </div>
                {item.specs && (
                  <div className="text-[10px] text-slate-400 truncate pt-1 border-t border-slate-200/50 dark:border-slate-700/50">
                    {item.specs}
                  </div>
                )}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Spot Price</span>
                <span className="text-lg font-extrabold text-slate-900 dark:text-white">
                  ₹{item.price.toLocaleString('en-IN')} <span className="text-xs text-slate-500 font-semibold">{item.unit}</span>
                </span>
              </div>

              <div className="flex items-center gap-1.5">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    triggerBuyModal(item);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1 shadow-sm"
                >
                  <ShoppingCart className="w-3 h-3" />
                  <span>Buy</span>
                </button>

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
          </div>
        ))}
      </div>

      {/* Selling Modal */}
      {sellModalOpen && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Store className="w-5 h-5 text-amber-600" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  List Produce for e-NAM Direct Sale
                </h3>
              </div>
              <button onClick={() => setSellModalOpen(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <form onSubmit={handleSellSubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Crop / Commodity</label>
                <input
                  required
                  placeholder="e.g. Tomato F1, Onion Lasalgaon, Sharbati Wheat"
                  value={sellData.crop}
                  onChange={e => setSellData({ ...sellData, crop: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quantity (Quintals)</label>
                  <input
                    required
                    placeholder="e.g. 50"
                    type="number"
                    value={sellData.qty}
                    onChange={e => setSellData({ ...sellData, qty: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Quality Grade</label>
                  <select
                    value={sellData.grade}
                    onChange={e => setSellData({ ...sellData, grade: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
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
                  value={sellData.price}
                  onChange={e => setSellData({ ...sellData, price: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-500"
                />
              </div>

              <div className="p-3 bg-amber-50 dark:bg-amber-950/30 rounded-xl text-[11px] text-amber-800 dark:text-amber-300 space-y-1">
                <div className="font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-600" />
                  <span>e-NAM Zero-Counterparty Risk Guarantee</span>
                </div>
                <p>100% of payment is deposited into RBI-regulated escrow prior to dispatch from your farmgate.</p>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setSellModalOpen(false)}
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

      {/* Procurement / Buying Modal */}
      {buyModalOpen && buyTargetCrop && (
        <div className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 max-w-md w-full border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-in fade-in zoom-in-95">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingCart className="w-5 h-5 text-emerald-600" />
                <h3 className="font-extrabold text-slate-900 dark:text-white text-base">
                  Procure Mandi Lot ({buyTargetCrop.crop})
                </h3>
              </div>
              <button onClick={() => setBuyModalOpen(false)} className="text-slate-400 hover:text-slate-600">✕</button>
            </div>

            <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800/50 flex justify-between items-center text-xs">
              <div>
                <span className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold uppercase block">Current Terminal Rate</span>
                <strong className="text-base text-slate-900 dark:text-white font-black">₹{buyTargetCrop.price.toLocaleString('en-IN')} / qtl</strong>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-slate-500 block">Origin APMC</span>
                <strong className="text-slate-700 dark:text-slate-300 font-semibold">{buyTargetCrop.mandi}</strong>
              </div>
            </div>

            <form onSubmit={handleBuySubmit} className="space-y-3 text-xs">
              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Procurement Lot Size (Quintals)</label>
                <input
                  required
                  type="number"
                  min="5"
                  max="1000"
                  value={buyData.qty}
                  onChange={e => setBuyData({ ...buyData, qty: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div>
                <label className="font-bold text-slate-700 dark:text-slate-300 block mb-1">Delivery Timeline</label>
                <select
                  value={buyData.deliveryDate}
                  onChange={e => setBuyData({ ...buyData, deliveryDate: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                >
                  <option value="Immediate">Immediate Dispatch (Within 24 Hours)</option>
                  <option value="Within 3 Days">Within 3 Days (Scheduled Cold Chain)</option>
                  <option value="Within 7 Days">Within 7 Days (Forward Contract)</option>
                </select>
              </div>

              <div className="p-3 bg-slate-50 dark:bg-slate-800 rounded-xl space-y-1 text-slate-600 dark:text-slate-400">
                <div className="flex justify-between font-bold text-slate-900 dark:text-white">
                  <span>Estimated Total Valuation:</span>
                  <span>₹{(Number(buyData.qty || 0) * buyTargetCrop.price).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span>Mandatory e-NAM APMC Cess (1.5%):</span>
                  <span>₹{(Number(buyData.qty || 0) * buyTargetCrop.price * 0.015).toLocaleString('en-IN')}</span>
                </div>
              </div>

              <div className="pt-2 flex gap-2">
                <button
                  type="button"
                  onClick={() => setBuyModalOpen(false)}
                  className="flex-1 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-slate-600 dark:text-slate-400 hover:bg-slate-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-md shadow-emerald-600/20"
                >
                  Lock Escrow & Buy
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
