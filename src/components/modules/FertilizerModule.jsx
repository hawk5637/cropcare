import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { FlaskConical, Calculator, CheckCircle2, AlertCircle, ShoppingCart, Calendar, BookOpen } from 'lucide-react';

const NPK_DATA = {
  Wheat: { n: [40, 40, 40], p: [60, 0, 0], k: [40, 0, 0], stages: ['Basal (Sowing)', 'CRI Stage (21 DAP)', 'Jointing (45 DAP)'] },
  Rice: { n: [30, 30, 40], p: [50, 0, 0], k: [40, 0, 0], stages: ['Basal (Transplant)', 'Tillering (21 DAT)', 'Panicle Initiation'] },
  Maize: { n: [50, 40, 35], p: [60, 0, 0], k: [40, 0, 0], stages: ['Basal', 'Knee-High (V6)', 'Tasseling'] },
  Cotton: { n: [30, 40, 30], p: [40, 0, 0], k: [40, 0, 0], stages: ['Basal', 'Squaring', 'Boll Development'] },
  Mustard: { n: [40, 20, 0], p: [30, 0, 0], k: [20, 0, 0], stages: ['Basal (Sowing)', 'Rosette Stage', 'N/A'] }
};

const DEFICIENCY_GUIDE = [
  { nutrient: 'Nitrogen (N)', symptom: 'Yellowing starts from older (lower) leaves, spreads upward. Overall pale green color.', treatment: 'Urea top-dressing 20 kg/acre OR foliar spray Urea 2%', organic: '10 kg/acre Vermicompost, well-rotted FYM', color: 'text-yellow-600 bg-yellow-50 dark:bg-yellow-950/30 border-yellow-200 dark:border-yellow-800' },
  { nutrient: 'Phosphorus (P)', symptom: 'Purple or reddish discoloration of stems and undersides of leaves. Stunted root growth.', treatment: 'DAP 25 kg/acre OR SSP 50 kg/acre', organic: 'Rock phosphate + PSB (Phosphate Solubilizing Bacteria)', color: 'text-purple-600 bg-purple-50 dark:bg-purple-950/30 border-purple-200 dark:border-purple-800' },
  { nutrient: 'Potassium (K)', symptom: 'Brown leaf margins and tips (scorching) starting from older leaves. Weak stems, lodging.', treatment: 'MOP (Muriate of Potash) 20 kg/acre', organic: 'Wood ash 50 kg/acre, banana peel compost', color: 'text-orange-600 bg-orange-50 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800' },
  { nutrient: 'Zinc (Zn)', symptom: 'White or buff interveinal stripes on new leaves. Common after rice transplanting.', treatment: 'ZnSO₄ 10 kg/acre soil application OR foliar spray 0.5%', organic: 'Add zinc-enriched compost; avoid high P application', color: 'text-slate-600 bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700' },
  { nutrient: 'Iron (Fe)', symptom: 'Interveinal chlorosis on young/new leaves — yellow with green veins.', treatment: 'FeSO₄ 0.5% foliar spray × 2-3 applications 10 days apart', organic: 'Drench with chelated iron solution near root zone', color: 'text-rose-600 bg-rose-50 dark:bg-rose-950/30 border-rose-200 dark:border-rose-800' }
];

const FERTILIZER_ITEMS = [
  { name: 'Urea', cat: 'N', price: '₹266/bag', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80' },
  { name: 'DAP', cat: 'P', price: '₹1,350/bag', img: 'https://images.unsplash.com/photo-1565108264043-39be61b756b1?auto=format&fit=crop&w=400&q=80' },
  { name: 'Vermicompost', cat: 'Organic', price: '₹12/kg', img: 'https://images.unsplash.com/photo-1616849778027-1d0a72a1ca21?auto=format&fit=crop&w=400&q=80' }
];

export default function FertilizerModule() {
  const { mode, addToCart } = useApp();
  const [crop, setCrop] = useState('Wheat');
  const [acres, setAcres] = useState(6.5);
  const [activeTab, setActiveTab] = useState('calculator');

  const data = NPK_DATA[crop];
  const totalN = data.n.reduce((a, b) => a + b, 0);
  const totalP = data.p.reduce((a, b) => a + b, 0);
  const totalK = data.k.reduce((a, b) => a + b, 0);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <FlaskConical className="w-7 h-7 text-violet-600" /> Fertilizer & Nutrients
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">NPK calculator, deficiency guide, and application calendar</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {[['calculator', Calculator, 'Calculator'], ['deficiency', BookOpen, 'Deficiency Guide'], ['buy', ShoppingCart, 'Buy Inputs']].map(([tab, Icon, label]) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-violet-700 dark:text-violet-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}
          >
            <Icon className="w-3.5 h-3.5" /> {label}
          </button>
        ))}
      </div>

      {/* Calculator Tab */}
      {activeTab === 'calculator' && (
        <>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">NPK Dose Calculator</h3>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Crop</label>
                <select value={crop} onChange={e => setCrop(e.target.value)} className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500">
                  {Object.keys(NPK_DATA).map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1.5">Plot Size (Acres)</label>
                <input type="number" value={acres} onChange={e => setAcres(+e.target.value)} min={0.5} step={0.5} className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-violet-500" />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-3 mb-4">
              {[['Nitrogen (N)', totalN, '#8b5cf6'], ['Phosphorus (P)', totalP, '#3b82f6'], ['Potassium (K)', totalK, '#f59e0b']].map(([name, val, color]) => (
                <div key={name} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-center">
                  <div className="text-xs text-slate-500 mb-1">{name}</div>
                  <div className="text-2xl font-black" style={{ color }}>{Math.round(val * acres)}</div>
                  <div className="text-xs text-slate-400">kg/total</div>
                  <div className="text-xs font-bold mt-0.5 text-slate-600 dark:text-slate-400">{val} kg/acre</div>
                </div>
              ))}
            </div>
          </div>

          {/* Application calendar */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
            <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-extrabold text-slate-900 dark:text-white">{crop} — Application Schedule</h3>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {data.stages.map((stage, i) => (
                data.n[i] + data.p[i] + data.k[i] > 0 && (
                  <div key={i} className="flex items-center gap-4 px-5 py-3.5">
                    <div className="w-8 h-8 rounded-full bg-violet-100 dark:bg-violet-950/30 flex items-center justify-center shrink-0 text-sm font-black text-violet-700 dark:text-violet-400">
                      {i + 1}
                    </div>
                    <div className="flex-1">
                      <div className="font-semibold text-slate-900 dark:text-white text-sm">{stage}</div>
                      <div className="text-xs text-slate-500 mt-0.5">
                        N: {Math.round(data.n[i] * acres)}kg &nbsp;|&nbsp; P: {Math.round(data.p[i] * acres)}kg &nbsp;|&nbsp; K: {Math.round(data.k[i] * acres)}kg
                      </div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${i === 0 ? 'bg-violet-100 text-violet-700 dark:bg-violet-950/40 dark:text-violet-400' : 'bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400'}`}>
                      {i === 0 ? 'Upcoming' : 'Scheduled'}
                    </span>
                  </div>
                )
              ))}
            </div>
          </div>
        </>
      )}

      {/* Deficiency Guide Tab */}
      {activeTab === 'deficiency' && (
        <div className="space-y-4">
          {DEFICIENCY_GUIDE.map((d, i) => (
            <div key={i} className={`p-5 rounded-2xl border ${d.color}`}>
              <h3 className="font-extrabold mb-2">{d.nutrient} Deficiency</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <span className="font-bold">Symptoms: </span>{d.symptom}
                </div>
                <div>
                  <span className="font-bold">Chemical treatment: </span>{d.treatment}
                </div>
                <div>
                  <span className="font-bold">Organic option: </span>{d.organic}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Buy Inputs Tab */}
      {activeTab === 'buy' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {FERTILIZER_ITEMS.map(item => (
            <div key={item.name} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <img src={item.img} alt={item.name} className="w-full h-28 object-cover" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="p-4">
                <div className="font-extrabold text-slate-900 dark:text-white mb-0.5">{item.name}</div>
                <div className="text-xs text-slate-500 mb-3">{item.cat} Fertilizer • {item.price}</div>
                <button
                  onClick={() => addToCart({ id: item.name, name: item.name, price: item.price, category: 'Fertilizer' })}
                  className="w-full py-2 rounded-xl bg-violet-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-violet-700 transition-colors"
                >
                  <ShoppingCart className="w-3.5 h-3.5" /> Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
