import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Truck, MapPin, Phone, Package, Clock, CheckCircle2, Star, Navigation2 } from 'lucide-react';

const TRANSPORTERS = [
  { id: 'T1', name: 'Jagdish Transport Co.', vehicle: 'Tata Ace (1 Ton)', price: '₹12/km', min: '₹400 minimum', rating: 4.7, phone: '+91-98881-22334', location: 'Khanna', available: true },
  { id: 'T2', name: 'Harpreet Logistics', vehicle: 'Eicher 10.5 Ton', price: '₹22/km', min: '₹1,200 minimum', rating: 4.8, phone: '+91-97809-88872', location: 'Ludhiana', available: true },
  { id: 'T3', name: 'Punjab Agri Transport', vehicle: 'Mahindra Supro 900kg', price: '₹10/km', min: '₹300 minimum', rating: 4.5, phone: '+91-94637-10021', location: 'Khanna', available: false }
];

const ACTIVE_SHIPMENTS = [
  { id: 'SHP-5521', from: 'Khanna Farm', to: 'ITC Warehouse, Ludhiana', crop: 'Wheat (180 Qtl)', driver: 'Sukhwinder Singh', status: 'In Transit', progress: 65, vehicle: 'PB-11-AG-4482', eta: '2 hours' },
  { id: 'SHP-5489', from: 'Parcel B-2', to: 'APMC Khanna', crop: 'Mustard Seeds (100 Qtl)', driver: 'Ramesh Lal', status: 'Delivered', progress: 100, vehicle: 'PB-08-CT-2291', eta: 'Completed' }
];

export default function LogisticsModule() {
  const [activeTab, setActiveTab] = useState('shipments');
  const [bookingVehicle, setBookingVehicle] = useState(null);
  const [booked, setBooked] = useState({});

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Truck className="w-7 h-7 text-blue-600" /> Logistics
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Book vehicles, track shipments, delivery management</p>
      </div>

      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {[['shipments', 'Shipment Tracker'], ['book', 'Book Transport']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-blue-700 dark:text-blue-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {activeTab === 'shipments' && (
        <div className="space-y-4">
          {ACTIVE_SHIPMENTS.map(s => (
            <div key={s.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-slate-900 dark:text-white text-sm">{s.id}</div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${s.status === 'Delivered' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'}`}>{s.status}</span>
              </div>

              <div className="flex items-center gap-2 mb-3 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" /> {s.from}
                <div className="flex-1 h-px bg-slate-200 dark:bg-slate-700 relative">
                  <div className={`h-px bg-blue-500 transition-all`} style={{ width: `${s.progress}%` }} />
                  <Truck className={`absolute -top-2 text-blue-600 w-4 h-4`} style={{ left: `${Math.min(s.progress - 5, 90)}%` }} />
                </div>
                <MapPin className="w-3.5 h-3.5 text-emerald-500 shrink-0" /> {s.to}
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs mb-3">
                {[['Crop', s.crop], ['Vehicle', s.vehicle], ['Driver', s.driver], ['ETA', s.eta]].map(([k, v]) => (
                  <div key={k}><span className="text-slate-400">{k}: </span><span className="font-semibold text-slate-700 dark:text-slate-300">{v}</span></div>
                ))}
              </div>

              {/* Progress bar */}
              <div className="h-2 rounded-full bg-slate-100 dark:bg-slate-800">
                <div className="h-2 rounded-full bg-blue-500 transition-all" style={{ width: `${s.progress}%` }} />
              </div>
              <div className="text-xs text-slate-400 mt-1">{s.progress}% complete</div>
            </div>
          ))}
        </div>
      )}

      {activeTab === 'book' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 text-sm text-blue-800 dark:text-blue-300">
            All transporters are GPS-tracked and verified on CropCare. Payments via escrow.
          </div>
          {TRANSPORTERS.map(t => (
            <div key={t.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-400 flex items-center justify-center text-white shrink-0">
                <Truck className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-slate-900 dark:text-white">{t.name}</div>
                <div className="text-xs text-slate-500">{t.vehicle} • {t.location}</div>
                <div className="flex items-center gap-1 mt-0.5 text-amber-500 text-xs"><Star className="w-3 h-3 fill-amber-500" />{t.rating}</div>
                <div className="text-xs font-bold text-blue-600 mt-0.5">{t.price} • {t.min}</div>
              </div>
              <div className="flex flex-col gap-2 items-end">
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${t.available ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>{t.available ? 'Available' : 'Busy'}</span>
                {t.available && (
                  <button onClick={() => setBooked(prev => ({ ...prev, [t.id]: true }))} className={`px-3 py-1.5 rounded-xl font-bold text-xs transition-all ${booked[t.id] ? 'bg-emerald-500 text-white cursor-default' : 'bg-blue-600 text-white hover:bg-blue-700'}`}>
                    {booked[t.id] ? '✓ Booked' : 'Book'}
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
