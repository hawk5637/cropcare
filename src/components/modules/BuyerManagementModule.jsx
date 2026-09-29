import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Users, BadgeCheck, Star, ArrowRight, CheckCircle2, FileText, Clock } from 'lucide-react';

const BUYERS = [
  { id: 'B1', name: 'ITC Agri Business Ltd', type: 'APMC Wholesaler', verified: true, rating: 4.8, deals: 1240, crops: ['Wheat', 'Rice', 'Maize'], img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80' },
  { id: 'B2', name: 'Adani Wilmar Procurement', type: 'Agro-Processor', verified: true, rating: 4.7, deals: 890, crops: ['Soybean', 'Mustard', 'Cotton'], img: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?auto=format&fit=crop&w=400&q=80' },
  { id: 'B3', name: 'Rajesh Agrotech Corp', type: 'Export House', verified: true, rating: 4.6, deals: 540, crops: ['Basmati Rice', 'Wheat'], img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=400&q=80' }
];

const BIDS = [
  { id: 'BID-881', buyer: 'ITC Agri Business Ltd', crop: 'Wheat Grade-A', qty: '200 Qtl', price: '₹2,580/qtl', total: '₹5,16,000', escrow: 'Locked', expiry: '4 hours', status: 'pending' },
  { id: 'BID-882', buyer: 'Adani Wilmar', crop: 'Mustard Seeds', qty: '100 Qtl', price: '₹5,890/qtl', total: '₹5,89,000', escrow: 'Locked', expiry: '12 hours', status: 'pending' }
];

const CONTRACTS = [
  { id: 'CON-221', buyer: 'Rajesh Agrotech Corp', crop: 'Basmati Rice (1121)', qty: '500 Qtl', price: '₹4,500/qtl', delivery: '2026-11-15', status: 'active' }
];

export default function BuyerManagementModule() {
  const { userRole } = useApp();
  const [activeTab, setActiveTab] = useState('buyers');
  const [acceptedBids, setAcceptedBids] = useState({});
  const [newContract, setNewContract] = useState(false);

  const isBuyer = userRole === 'buyer';

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Users className="w-7 h-7 text-yellow-600" /> Buyer Management
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">{isBuyer ? 'Browse farmer listings, place bids, manage contracts' : 'Verified buyers, negotiate offers, secure contracts'}</p>
      </div>

      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit flex-wrap">
        {[['buyers', 'Buyer Directory'], ['bids', `${isBuyer ? 'My Bids' : 'Incoming Offers'}`], ['contracts', 'Contracts']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-yellow-700 dark:text-yellow-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'buyers' && (
        <div className="space-y-3">
          {BUYERS.map(b => (
            <div key={b.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <img src={b.img} alt={b.name} className="w-14 h-14 rounded-2xl object-cover shrink-0" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80'; }} />
              <div className="flex-1">
                <div className="flex items-center gap-1.5 font-extrabold text-slate-900 dark:text-white">
                  {b.name}
                  {b.verified && <BadgeCheck className="w-4 h-4 text-blue-500" />}
                </div>
                <div className="text-xs text-slate-500">{b.type} • {b.deals} successful deals</div>
                <div className="flex items-center gap-0.5 mt-0.5 text-amber-500 text-xs"><Star className="w-3 h-3 fill-amber-500" />{b.rating}</div>
                <div className="text-xs text-slate-400 mt-1">Buys: {b.crops.join(', ')}</div>
              </div>
              <button className="px-3 py-2 rounded-xl bg-yellow-600 text-white font-bold text-xs hover:bg-yellow-700 transition-colors">Connect</button>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'bids' && (
        <div className="space-y-4">
          {BIDS.map(bid => (
            <div key={bid.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-slate-900 dark:text-white">{bid.buyer}</div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 dark:bg-amber-950/40 dark:text-amber-400">
                  <Clock className="w-3 h-3 inline mr-0.5" />{bid.expiry}
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                {[['Crop', bid.crop], ['Quantity', bid.qty], ['Price', bid.price], ['Total', bid.total]].map(([k, v]) => (
                  <div key={k}><div className="text-xs text-slate-400">{k}</div><div className="font-bold text-slate-900 dark:text-white">{v}</div></div>
                ))}
              </div>
              <div className="flex items-center gap-1 text-xs text-emerald-600 mb-4">
                <CheckCircle2 className="w-3.5 h-3.5" /> Escrow: {bid.total} locked in secure vault
              </div>
              {acceptedBids[bid.id] ? (
                <div className="py-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-bold text-sm text-center border border-emerald-200 dark:border-emerald-800">✓ Offer Accepted</div>
              ) : (
                <div className="flex gap-3">
                  <button className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Counter Offer</button>
                  <button onClick={() => setAcceptedBids(prev => ({ ...prev, [bid.id]: true }))} className="flex-1 py-2.5 rounded-xl bg-yellow-600 text-white font-bold text-sm">Accept ₹{bid.price}</button>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {activeTab === 'contracts' && (
        <div className="space-y-4">
          {CONTRACTS.map(c => (
            <div key={c.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-slate-900 dark:text-white">{c.buyer}</div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400">Active</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {[['Crop', c.crop], ['Quantity', c.qty], ['Price', c.price], ['Delivery By', c.delivery]].map(([k, v]) => (
                  <div key={k}><div className="text-xs text-slate-400">{k}</div><div className="font-bold text-slate-900 dark:text-white">{v}</div></div>
                ))}
              </div>
              <div className="mt-4 flex gap-2">
                <button className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> View Contract
                </button>
                <button className="flex-1 py-2 rounded-xl bg-yellow-600 text-white font-bold text-xs flex items-center justify-center gap-1">
                  <ArrowRight className="w-3.5 h-3.5" /> Track Delivery
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => setNewContract(true)} className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 hover:border-yellow-400 hover:text-yellow-600 transition-colors">
            <FileText className="w-4 h-4" /> Create New Contract
          </button>
        </div>
      )}
    </div>
  );
}
