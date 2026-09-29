import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Warehouse, MapPin, Thermometer, Droplets, Package, Plus, AlertTriangle } from 'lucide-react';

const STORAGES = [
  { id: 'S1', name: 'Punjab Warehousing Corp — Khanna Hub', type: 'Government CWC', location: 'Khanna, Punjab', capacity: '50,000 Qtl', occupied: '32,000 Qtl', rate: '₹4.50/Qtl/Month', temp: 18, humidity: 45, crops: ['Wheat', 'Rice'], available: true, features: ['Fumigation', 'Moisture monitoring', 'Security 24x7', 'e-KYC receipt', 'Bank linkage for loans'] },
  { id: 'S2', name: 'Kohinoor Cold Chain — Ludhiana', type: 'Private Cold Storage', location: 'Ludhiana, Punjab', capacity: '8,000 Qtl', occupied: '6,200 Qtl', rate: '₹18/Qtl/Month', temp: 2, humidity: 92, crops: ['Potato', 'Onion', 'Tomato'], available: true, features: ['Controlled atmosphere', 'RFID tracking', 'Insurance available'] },
  { id: 'S3', name: 'FCI Regional Depot — Patiala', type: 'FCI Buffer Stock', location: 'Patiala, Punjab', capacity: '1,20,000 Qtl', occupied: '98,000 Qtl', rate: '₹3.20/Qtl/Month', temp: 22, humidity: 55, crops: ['Wheat', 'Rice', 'Maize'], available: false, features: ['CCTV surveillance', 'Weighbridge', 'Transport connections'] }
];

const MY_LOTS = [
  { id: 'L1', crop: 'Wheat HD-2967', qty: '180 Qtl', storage: 'Punjab Warehousing Corp — Khanna Hub', checkin: '2026-09-15', checkout: '2026-11-15', fee: '₹1,620', receipt: 'NWR-202600881' },
  { id: 'L2', crop: 'Mustard Seeds', qty: '50 Qtl', storage: 'Kohinoor Cold Chain — Ludhiana', checkin: '2026-09-20', checkout: '2026-10-20', fee: '₹900', receipt: 'WR-202601224' }
];

export default function StorageModule() {
  const [selectedStorage, setSelectedStorage] = useState(null);
  const [activeTab, setActiveTab] = useState('find');
  const [bookingDone, setBookingDone] = useState({});

  const handleBook = (id) => { setBookingDone(prev => ({ ...prev, [id]: true })); setSelectedStorage(null); };

  const getOccupancyPct = (occupied, capacity) => {
    const occ = parseInt(occupied.replace(/[^0-9]/g, ''));
    const cap = parseInt(capacity.replace(/[^0-9]/g, ''));
    return Math.round((occ / cap) * 100);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Warehouse className="w-7 h-7 text-slate-600 dark:text-slate-400" /> Storage
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Find warehouses, cold storage, track your stored lots</p>
      </div>

      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {[['find', 'Find Storage'], ['my-lots', 'My Lots']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'find' && (
        <div className="space-y-4">
          {STORAGES.map(s => {
            const pct = getOccupancyPct(s.occupied, s.capacity);
            return (
              <div key={s.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
                <div className="p-5">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center gap-2 font-extrabold text-slate-900 dark:text-white">
                        <Warehouse className="w-5 h-5 text-slate-500" /> {s.name}
                      </div>
                      <div className="text-xs text-slate-500 mt-0.5 flex items-center gap-1"><MapPin className="w-3 h-3" />{s.location} • {s.type}</div>
                    </div>
                    <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.available ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400'}`}>
                      {s.available ? 'Available' : 'Full'}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-4 gap-3 text-sm my-3">
                    {[
                      ['Rate', s.rate], ['Capacity', s.capacity],
                      ['Temp', `${s.temp}°C`], ['Humidity', `${s.humidity}%`]
                    ].map(([k, v]) => (
                      <div key={k} className="text-center p-2 rounded-xl bg-slate-50 dark:bg-slate-800">
                        <div className="text-xs text-slate-400">{k}</div>
                        <div className="font-bold text-slate-900 dark:text-white text-xs mt-0.5">{v}</div>
                      </div>
                    ))}
                  </div>

                  {/* Occupancy Bar */}
                  <div className="mb-3">
                    <div className="flex justify-between text-xs text-slate-500 mb-1">
                      <span>Occupancy</span><span>{pct}% ({s.occupied} / {s.capacity})</span>
                    </div>
                    <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                      <div className={`h-2 rounded-full transition-all ${pct > 90 ? 'bg-red-500' : pct > 70 ? 'bg-amber-500' : 'bg-emerald-500'}`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>

                  {pct > 90 && <div className="flex items-center gap-1.5 text-xs text-amber-600 mb-3"><AlertTriangle className="w-3.5 h-3.5" /> Near capacity — book in advance</div>}

                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.features.map(f => <span key={f} className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">{f}</span>)}
                  </div>

                  <div className="flex gap-2">
                    <button onClick={() => setSelectedStorage(s)} className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">View Details</button>
                    {s.available && (
                      <button onClick={() => handleBook(s.id)} disabled={bookingDone[s.id]} className={`flex-1 py-2.5 rounded-xl font-bold text-xs transition-all ${bookingDone[s.id] ? 'bg-emerald-500 text-white cursor-default' : 'bg-slate-800 dark:bg-white text-white dark:text-slate-900 hover:bg-slate-700 dark:hover:bg-slate-100'}`}>
                        {bookingDone[s.id] ? '✓ Booked' : 'Book Space'}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {activeTab === 'my-lots' && (
        <div className="space-y-4">
          {MY_LOTS.map(lot => (
            <div key={lot.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <div className="font-extrabold text-slate-900 dark:text-white">{lot.crop}</div>
                  <div className="text-xs text-slate-500">{lot.storage}</div>
                </div>
                <div className="text-right">
                  <div className="font-black text-slate-900 dark:text-white">{lot.qty}</div>
                  <div className="text-xs text-slate-400">{lot.fee}/month</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                {[['Check-in', lot.checkin], ['Check-out Due', lot.checkout], ['Receipt No.', lot.receipt], ['Status', 'In Storage']].map(([k, v]) => (
                  <div key={k}><span className="text-slate-400">{k}: </span><span className="font-semibold text-slate-700 dark:text-slate-300">{v}</span></div>
                ))}
              </div>
              <div className="mt-3 flex gap-2">
                <button className="flex-1 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">Download Receipt</button>
                <button className="flex-1 py-2 rounded-xl bg-blue-50 dark:bg-blue-950/30 text-blue-700 dark:text-blue-400 font-bold text-xs border border-blue-200 dark:border-blue-800">Apply for Loan</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
