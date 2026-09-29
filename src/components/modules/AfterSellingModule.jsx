import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { PackageCheck, Star, MessageSquare, TrendingUp, Award, ThumbsUp, Repeat2, Share2, CheckCircle2, BarChart2 } from 'lucide-react';
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const COMPLETED_ORDERS = [
  { id: 'ORD-8821', buyer: 'ITC Agri Business Ltd', crop: 'Wheat HD-2967', qty: '180 Qtl', amount: '₹4,64,400', date: '2026-09-25', rating: null, feedback: null },
  { id: 'ORD-8780', buyer: 'Adani Wilmar', crop: 'Mustard Seeds', qty: '100 Qtl', amount: '₹5,82,000', date: '2026-09-20', rating: 5, feedback: 'Excellent quality. Moisture content perfectly within spec. Would buy again!' },
  { id: 'ORD-8741', buyer: 'Rajesh Exports', crop: 'Basmati Rice 1121', qty: '80 Qtl', amount: '₹3,50,000', date: '2026-09-15', rating: 4, feedback: 'Good quality but slight delay in documentation.' }
];

const QUALITY_RADAR = [
  { axis: 'Moisture', A: 95 }, { axis: 'Purity', A: 92 }, { axis: 'Packaging', A: 88 },
  { axis: 'Punctuality', A: 80 }, { axis: 'Communication', A: 96 }, { axis: 'Consistency', A: 85 }
];

const SEASON_HISTORY = [
  { season: 'Kharif 22', sales: 840000 }, { season: 'Rabi 23', sales: 1250000 },
  { season: 'Kharif 23', sales: 920000 }, { season: 'Rabi 24', sales: 1480000 },
  { season: 'Kharif 24', sales: 1120000 }, { season: 'Rabi 25', sales: 1820000 },
  { season: 'Kharif 25', sales: 1046400 }
];

export default function AfterSellingModule() {
  const [pendingRatings, setPendingRatings] = useState({ 'ORD-8821': 0 });
  const [ratingDone, setRatingDone] = useState({});
  const [activeTab, setActiveTab] = useState('orders');

  const avgRating = COMPLETED_ORDERS.filter(o => o.rating).reduce((a, o) => a + o.rating, 0) / COMPLETED_ORDERS.filter(o => o.rating).length;

  const handleRating = (orderId, rating) => {
    setPendingRatings(prev => ({ ...prev, [orderId]: rating }));
  };

  const submitRating = (orderId) => {
    setRatingDone(prev => ({ ...prev, [orderId]: true }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <PackageCheck className="w-7 h-7 text-purple-600" /> After-Selling
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Feedback, ratings, repeat buyers, performance analytics</p>
      </div>

      {/* Reputation Score */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Avg Rating', value: `${avgRating.toFixed(1)} ⭐`, color: 'bg-amber-50 dark:bg-amber-950/30 text-amber-600 border-amber-200 dark:border-amber-800' },
          { label: 'Total Orders', value: COMPLETED_ORDERS.length, color: 'bg-purple-50 dark:bg-purple-950/30 text-purple-600 border-purple-200 dark:border-purple-800' },
          { label: 'Repeat Buyers', value: '2 / 3', color: 'bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 border-emerald-200 dark:border-emerald-800' }
        ].map(k => (
          <div key={k.label} className={`p-4 rounded-2xl ${k.color} border`}>
            <div className="text-xs text-slate-500 dark:text-slate-400">{k.label}</div>
            <div className="font-extrabold text-slate-900 dark:text-white text-lg mt-1">{k.value}</div>
          </div>
        ))}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit flex-wrap">
        {[['orders', 'Orders & Feedback'], ['quality', 'Quality Score'], ['history', 'Season History']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-purple-700 dark:text-purple-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'orders' && (
        <div className="space-y-4">
          {COMPLETED_ORDERS.map(order => (
            <div key={order.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <div className="font-extrabold text-slate-900 dark:text-white">{order.id}</div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">Delivered</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                {[['Buyer', order.buyer], ['Crop', order.crop], ['Quantity', order.qty], ['Received', order.amount]].map(([k, v]) => (
                  <div key={k}><span className="text-slate-400">{k}: </span><span className="font-semibold text-slate-700 dark:text-slate-300">{v}</span></div>
                ))}
              </div>

              {order.rating && (
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 mb-2">
                  <div className="flex items-center gap-1 mb-1">
                    {[1,2,3,4,5].map(s => <Star key={s} className={`w-4 h-4 ${s <= order.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-200 dark:text-slate-700'}`} />)}
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-400 italic">"{order.feedback}"</p>
                </div>
              )}

              {!order.rating && !ratingDone[order.id] && (
                <div className="p-3 rounded-xl bg-purple-50 dark:bg-purple-950/30 border border-purple-200 dark:border-purple-800">
                  <div className="text-xs font-bold text-purple-700 dark:text-purple-400 mb-2">Rate your buyer</div>
                  <div className="flex items-center gap-1 mb-3">
                    {[1,2,3,4,5].map(s => (
                      <button key={s} onClick={() => handleRating(order.id, s)}>
                        <Star className={`w-6 h-6 transition-all ${s <= (pendingRatings[order.id] || 0) ? 'fill-amber-400 text-amber-400' : 'text-slate-300 dark:text-slate-600 hover:text-amber-400'}`} />
                      </button>
                    ))}
                  </div>
                  {pendingRatings[order.id] > 0 && (
                    <button onClick={() => submitRating(order.id)} className="w-full py-2 rounded-xl bg-purple-600 text-white font-bold text-xs hover:bg-purple-700 transition-colors">Submit Rating</button>
                  )}
                </div>
              )}

              {ratingDone[order.id] && (
                <div className="flex items-center gap-2 text-sm text-emerald-600 font-semibold"><CheckCircle2 className="w-4 h-4" /> Rating submitted. Thank you!</div>
              )}

              <div className="flex gap-2 mt-3">
                <button className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1">
                  <Repeat2 className="w-3.5 h-3.5" /> Reorder
                </button>
                <button className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1">
                  <Share2 className="w-3.5 h-3.5" /> Share Invoice
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'quality' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-1">Quality Performance Radar</h3>
          <p className="text-xs text-slate-400 mb-4">Based on buyer feedback across {COMPLETED_ORDERS.filter(o => o.rating).length} completed orders</p>
          <ResponsiveContainer width="100%" height={250}>
            <RadarChart data={QUALITY_RADAR}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="axis" tick={{ fontSize: 11, fill: '#94a3b8' }} />
              <Radar name="Score" dataKey="A" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.3} strokeWidth={2} />
            </RadarChart>
          </ResponsiveContainer>
          <div className="mt-4 p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800">
            <p className="text-sm font-semibold text-amber-800 dark:text-amber-300">💡 Improve punctuality: 2 of 3 buyers mentioned slight documentation delays. Upload documents in advance using the Contracts section.</p>
          </div>
        </div>
      )}

      {activeTab === 'history' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Season-wise Sales Revenue</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={SEASON_HISTORY}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="season" tick={{ fontSize: 9 }} />
              <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `₹${(v/100000).toFixed(1)}L`} />
              <Tooltip formatter={v => `₹${v.toLocaleString('en-IN')}`} />
              <Bar dataKey="sales" fill="#8b5cf6" radius={[4,4,0,0]} name="Revenue" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
