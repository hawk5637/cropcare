import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Bug, Camera, History, AlertTriangle, CheckCircle2, ShieldAlert, 
  ArrowRight, Search, Filter, Sparkles, Sprout, BookOpen, ShieldCheck 
} from 'lucide-react';
import plantKnowledgeBase from '../../data/plantKnowledgeBase.json';

const OUTBREAK_ALERTS = [
  { district: 'Ludhiana, Punjab', disease: 'Wheat Stripe Rust', severity: 'High', date: '2026-09-25', affected: '3,200 acres' },
  { district: 'Jalandhar, Punjab', disease: 'Aphid Outbreak', severity: 'Medium', date: '2026-09-27', affected: '850 acres' },
  { district: 'Karnal, Haryana', disease: 'Rice Brown Planthopper', severity: 'Low', date: '2026-09-28', affected: '420 acres' },
  { district: 'Nashik, Maharashtra', disease: 'Tomato Early Blight', severity: 'Medium', date: '2026-09-27', affected: '1,100 acres' }
];

const CROP_IMAGES = {
  'Rice': 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
  'Wheat': 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
  'Maize (Corn)': 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
  'Tomato': 'https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80',
  'Potato': 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
  'Cotton': 'https://images.unsplash.com/photo-1471189374-c9b3fa71be7e?auto=format&fit=crop&w=800&q=80',
  'Sugarcane': 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
  'Mustard / Rapeseed': 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80',
  'Onion': 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
  'Chilli (Hot Pepper)': 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
  'Soybean': 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
  'Groundnut (Peanut)': 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80',
  'Chickpea (Gram / Chana)': 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80',
  'Pigeon Pea (Arhar / Tur)': 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
  'Mango': 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
  'Banana': 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
  'Neem (Margosa)': 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
  'Holy Basil (Tulsi)': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  'Turmeric': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  'Ginger': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
  'Brinjal (Eggplant / Aubergine)': 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80'
};

const DEFAULT_CROP_IMG = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80';

export default function PestDiseaseModule() {
  const { setActiveNav } = useApp();
  const [activeTab, setActiveTab] = useState('library');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedCrop, setSelectedCrop] = useState('all');
  const [selectedDisease, setSelectedDisease] = useState(null);

  // Compile all diseases from knowledge base
  const allDiseases = useMemo(() => {
    const list = [];
    plantKnowledgeBase.forEach(plant => {
      if (Array.isArray(plant.diseases)) {
        plant.diseases.forEach(d => {
          list.push({
            crop: plant.name,
            scientific_name: plant.scientific_name,
            category: plant.category || 'other',
            local_names: plant.local_names,
            name: d.name,
            type: d.type || 'fungal',
            symptoms: d.symptoms || '',
            cause: d.cause || '',
            organic: d.organic_treatment || [],
            chemical: d.chemical_treatment_type || [],
            prevention: d.prevention || [],
            img: CROP_IMAGES[plant.name] || DEFAULT_CROP_IMG,
            severity: d.type === 'pest' || d.name.toLowerCase().includes('blast') || d.name.toLowerCase().includes('rust') ? 'High' : 'Medium'
          });
        });
      }
    });
    return list;
  }, []);

  const categories = useMemo(() => {
    const cats = new Set(plantKnowledgeBase.map(p => p.category).filter(Boolean));
    return ['all', ...Array.from(cats)];
  }, []);

  const crops = useMemo(() => {
    return ['all', ...plantKnowledgeBase.map(p => p.name)];
  }, []);

  const filteredDiseases = useMemo(() => {
    return allDiseases.filter(d => {
      const matchCat = selectedCategory === 'all' || d.category === selectedCategory;
      const matchCrop = selectedCrop === 'all' || d.crop === selectedCrop;
      const q = searchQuery.toLowerCase().trim();
      const matchSearch = !q || 
        d.name.toLowerCase().includes(q) ||
        d.crop.toLowerCase().includes(q) ||
        d.symptoms.toLowerCase().includes(q) ||
        d.cause.toLowerCase().includes(q);
      return matchCat && matchCrop && matchSearch;
    });
  }, [allDiseases, selectedCategory, selectedCrop, searchQuery]);

  const SCAN_HISTORY = [
    { id: 'SH1', date: '2026-09-26', species: 'Wheat', disease: 'Stripe Rust (Puccinia striiformis)', severity: 'Moderate', status: 'treated' },
    { id: 'SH2', date: '2026-09-22', species: 'Tomato', disease: 'Healthy Specimen', severity: 'None', status: 'healthy' },
    { id: 'SH3', date: '2026-09-18', species: 'Cotton', disease: 'Bollworm (Helicoverpa armigera)', severity: 'Severe', status: 'treated' },
    { id: 'SH4', date: '2026-09-12', species: 'Neem', disease: 'Healthy Medicinal Leaf', severity: 'None', status: 'healthy' }
  ];

  return (
    <div className="space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-6 rounded-3xl bg-gradient-to-r from-red-800 via-rose-800 to-amber-900 text-white shadow-lg relative overflow-hidden">
        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-white/20 text-white border border-white/30 backdrop-blur-sm">
              ICAR & FAO Grounded
            </span>
            <span className="text-xs text-rose-200">
              {allDiseases.length} Certified Phytopathology Records
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold flex items-center gap-2.5">
            <Bug className="w-8 h-8 text-rose-300" /> Pest & Disease Clinical Hub
          </h1>
          <p className="text-rose-100 text-sm mt-1 max-w-xl">
            Real-time phytopathological diagnosis, organic ICAR remedies, chemical active ingredients, and local outbreak telemetry.
          </p>
        </div>
        <button
          onClick={() => setActiveNav('scanner')}
          className="relative z-10 flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white text-rose-800 font-extrabold text-sm hover:bg-rose-50 transition-all shadow-md shrink-0"
        >
          <Camera className="w-4 h-4 text-rose-600" /> Launch AI Scanner
        </button>
      </div>

      {/* Outbreak Alerts */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <h3 className="font-extrabold text-slate-900 dark:text-white text-sm flex items-center gap-1.5">
            <AlertTriangle className="w-4 h-4 text-rose-600 animate-pulse" /> Live Regional Outbreak Alerts
          </h3>
          <span className="text-xs text-slate-500">Updated today</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
          {OUTBREAK_ALERTS.map((a, i) => (
            <div key={i} className={`flex items-center gap-3 p-3.5 rounded-2xl border transition-all ${
              a.severity === 'High' ? 'bg-red-50 dark:bg-red-950/20 border-red-200 dark:border-red-800/60' :
              a.severity === 'Medium' ? 'bg-amber-50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-800/60' :
              'bg-emerald-50 dark:bg-emerald-950/20 border-emerald-200 dark:border-emerald-800/60'
            }`}>
              <div className={`p-2 rounded-xl shrink-0 ${
                a.severity === 'High' ? 'bg-red-100 dark:bg-red-900/50 text-red-600 dark:text-red-400' :
                a.severity === 'Medium' ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-600 dark:text-amber-400' :
                'bg-emerald-100 dark:bg-emerald-900/50 text-emerald-600 dark:text-emerald-400'
              }`}>
                <AlertTriangle className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-900 dark:text-white text-sm truncate">{a.disease}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{a.district} • {a.affected}</div>
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full ${
                a.severity === 'High' ? 'bg-red-100 text-red-700 dark:bg-red-950 dark:text-red-400 border border-red-200 dark:border-red-800' :
                a.severity === 'Medium' ? 'bg-amber-100 text-amber-700 dark:bg-amber-950 dark:text-amber-400 border border-amber-200 dark:border-amber-800' :
                'bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
              }`}>{a.severity}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-2xl w-fit">
        {[
          ['library', BookOpen, `Phytopathology Library (${allDiseases.length})`],
          ['history', History, 'Scan History']
        ].map(([tab, Icon, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeTab === tab 
                ? 'bg-white dark:bg-slate-900 text-rose-700 dark:text-rose-400 shadow-sm' 
                : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            <Icon className="w-3.5 h-3.5" /> {label}
          </button>
        ))}
      </div>

      {/* Disease Library Tab */}
      {activeTab === 'library' && (
        <div className="space-y-4">
          {/* Search & Filter Bar */}
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search diseases, crops, symptoms (e.g. blast, rust, yellowing, neem)..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-rose-500"
                />
              </div>
              <div className="flex items-center gap-2">
                <select
                  value={selectedCrop}
                  onChange={e => setSelectedCrop(e.target.value)}
                  className="px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-700 dark:text-slate-300 font-medium focus:outline-none focus:ring-2 focus:ring-rose-500"
                >
                  <option value="all">All Crops ({crops.length - 1})</option>
                  {crops.filter(c => c !== 'all').map(c => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Category pills */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 text-xs">
              <span className="text-slate-400 font-bold mr-1 flex items-center gap-1 shrink-0">
                <Filter className="w-3 h-3" /> Category:
              </span>
              {categories.map(cat => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1 rounded-full font-bold whitespace-nowrap capitalize transition-all ${
                    selectedCategory === cat
                      ? 'bg-rose-600 text-white shadow-sm'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {cat.replace('_', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>Showing {filteredDiseases.length} of {allDiseases.length} verified diseases</span>
            {(searchQuery || selectedCategory !== 'all' || selectedCrop !== 'all') && (
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory('all'); setSelectedCrop('all'); }}
                className="text-rose-600 dark:text-rose-400 font-semibold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>

          {/* Disease Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredDiseases.map((d, i) => (
              <div
                key={i}
                className="group rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-rose-300 dark:hover:border-rose-700 shadow-sm hover:shadow-md transition-all overflow-hidden flex flex-col justify-between"
              >
                <div className="flex items-start gap-3.5 p-4">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="w-20 h-20 rounded-xl object-cover shrink-0 border border-slate-100 dark:border-slate-800"
                    onError={e => { e.target.src = DEFAULT_CROP_IMG; }}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-1 mb-1">
                      <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                        {d.crop}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                        d.severity === 'High' 
                          ? 'bg-red-100 text-red-700 dark:bg-red-950/50 dark:text-red-400' 
                          : 'bg-amber-100 text-amber-700 dark:bg-amber-950/50 dark:text-amber-400'
                      }`}>
                        {d.severity} Risk
                      </span>
                    </div>
                    <h3 className="font-extrabold text-sm text-slate-900 dark:text-white line-clamp-1 group-hover:text-rose-600 dark:group-hover:text-rose-400 transition-colors">
                      {d.name}
                    </h3>
                    <div className="text-[11px] text-slate-400 italic mb-1.5">{d.scientific_name}</div>
                    <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {d.symptoms}
                    </p>
                  </div>
                </div>

                <div className="px-4 py-2.5 bg-slate-50/80 dark:bg-slate-800/40 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between">
                  <span className="text-xs text-slate-500 dark:text-slate-400 capitalize flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                    {d.type} infection
                  </span>
                  <button
                    onClick={() => setSelectedDisease(d)}
                    className="text-xs font-bold text-rose-600 dark:text-rose-400 flex items-center gap-1 hover:underline"
                  >
                    Clinical Guide <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filteredDiseases.length === 0 && (
            <div className="text-center py-12 rounded-3xl bg-slate-50 dark:bg-slate-900 border border-dashed border-slate-300 dark:border-slate-800">
              <Bug className="w-10 h-10 text-slate-300 dark:text-slate-700 mx-auto mb-2" />
              <div className="font-bold text-slate-700 dark:text-slate-300 text-sm">No matching diseases found</div>
              <p className="text-xs text-slate-400 mt-1">Try another keyword or reset the crop filters.</p>
            </div>
          )}
        </div>
      )}

      {/* Scan History Tab */}
      {activeTab === 'history' && (
        <div className="space-y-3">
          {SCAN_HISTORY.map(s => (
            <div key={s.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                s.status === 'healthy' ? 'bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600' : 'bg-rose-100 dark:bg-rose-950/40 text-rose-600'
              }`}>
                {s.status === 'healthy' ? <CheckCircle2 className="w-5 h-5" /> : <Bug className="w-5 h-5" />}
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-900 dark:text-white text-sm truncate">{s.species} — {s.disease}</div>
                <div className="text-xs text-slate-500 dark:text-slate-400">{s.date} • Severity: {s.severity}</div>
              </div>
              <span className={`text-xs font-bold px-2.5 py-0.5 rounded-full shrink-0 ${
                s.status === 'healthy' 
                  ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                  : 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
              }`}>
                {s.status === 'healthy' ? 'Healthy' : 'Treated'}
              </span>
            </div>
          ))}
          <button
            onClick={() => setActiveNav('scanner')}
            className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-rose-600 to-red-600 text-white font-extrabold text-sm flex items-center justify-center gap-2 hover:opacity-90 transition-opacity shadow-md"
          >
            <Camera className="w-4 h-4" /> Scan a New Specimen Now
          </button>
        </div>
      )}

      {/* Disease Detail Modal */}
      {selectedDisease && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto" onClick={() => setSelectedDisease(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl w-full max-w-lg shadow-2xl my-4 overflow-hidden border border-slate-200 dark:border-slate-800" onClick={e => e.stopPropagation()}>
            <div className="relative h-44">
              <img
                src={selectedDisease.img}
                alt={selectedDisease.name}
                className="w-full h-full object-cover"
                onError={e => { e.target.src = DEFAULT_CROP_IMG; }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4 right-4 text-white">
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded bg-rose-600 text-white mr-2">
                  {selectedDisease.crop}
                </span>
                <span className="text-xs text-rose-200 italic">{selectedDisease.scientific_name}</span>
                <h3 className="text-xl font-extrabold text-white mt-0.5">{selectedDisease.name}</h3>
              </div>
            </div>

            <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto">
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-500" /> Symptoms & Visual Diagnostics
                </h4>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                  {selectedDisease.symptoms}
                </p>
              </div>

              {selectedDisease.cause && (
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white mb-1 text-sm">Pathogen & Favourable Conditions</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                    {selectedDisease.cause}
                  </p>
                </div>
              )}

              {selectedDisease.organic && selectedDisease.organic.length > 0 && (
                <div>
                  <h4 className="font-bold text-emerald-700 dark:text-emerald-400 mb-1.5 text-sm flex items-center gap-1.5">
                    <Sprout className="w-4 h-4 text-emerald-500" /> ICAR Recommended Organic Treatment
                  </h4>
                  <ul className="space-y-1.5 bg-emerald-50/50 dark:bg-emerald-950/20 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/40">
                    {selectedDisease.organic.map((o, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{o}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {selectedDisease.chemical && selectedDisease.chemical.length > 0 && (
                <div>
                  <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-1.5 text-sm flex items-center gap-1.5">
                    <ShieldAlert className="w-4 h-4 text-blue-500" /> Chemical Treatment (Active Ingredients)
                  </h4>
                  <ul className="space-y-1.5 bg-blue-50/50 dark:bg-blue-950/20 p-3 rounded-xl border border-blue-100 dark:border-blue-900/40">
                    {selectedDisease.chemical.map((c, i) => (
                      <li key={i} className="text-xs text-slate-700 dark:text-slate-300 flex items-start gap-2">
                        <ShieldAlert className="w-3.5 h-3.5 text-blue-500 shrink-0 mt-0.5" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-[11px] text-slate-400 italic mt-1 ml-1">
                    * Always follow registered label directions and consult your local Krishi Vigyan Kendra (KVK).
                  </p>
                </div>
              )}

              {selectedDisease.prevention && selectedDisease.prevention.length > 0 && (
                <div>
                  <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-1.5 text-sm flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-slate-500" /> Cultural & Preventive Management
                  </h4>
                  <ul className="space-y-1.5 bg-slate-50 dark:bg-slate-800/50 p-3 rounded-xl">
                    {selectedDisease.prevention.map((p, i) => (
                      <li key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="flex gap-2 pt-2">
                <button
                  onClick={() => {
                    setSelectedDisease(null);
                    setActiveNav('scanner');
                  }}
                  className="flex-1 py-3 rounded-xl bg-rose-600 text-white font-extrabold text-sm hover:bg-rose-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Camera className="w-4 h-4" /> Scan This Crop
                </button>
                <button
                  onClick={() => setSelectedDisease(null)}
                  className="px-6 py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
