import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { Wrench, Search, ShoppingCart, Calendar, Star, Truck, CheckCircle2, Clock, User } from 'lucide-react';

const MACHINERY = [
  { id: 'M1', name: 'Mahindra 575 DI', category: 'Tractor', hp: 50, price: '₹850/day', status: 'Available', img: 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80', specs: '50 HP, 2WD, Power steering, Oil-immersed brakes', rating: 4.7 },
  { id: 'M2', name: 'Sonalika Tiger DI 75', category: 'Tractor', hp: 75, price: '₹1,100/day', status: 'Available', img: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=800&q=80', specs: '75 HP, 4WD, AC cabin, Digital dash', rating: 4.5 },
  { id: 'M3', name: 'Shaktiman Rotavator', category: 'Implement', hp: null, price: '₹400/day', status: 'Booked', img: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80', specs: '7-ft working width, 42 L-blades, Adjustable depth', rating: 4.3 },
  { id: 'M4', name: 'John Deere 5310', category: 'Tractor', hp: 55, price: '₹950/day', status: 'Available', img: 'https://images.unsplash.com/photo-1584132967334-10e028bd69f7?auto=format&fit=crop&w=800&q=80', specs: '55 HP, 8F+4R gears, Wet disc brakes', rating: 4.8 }
];

const LABOUR = [
  { id: 'L1', name: 'Balwinder Singh', skill: 'Tractor Operator', rate: '₹650/day', rating: 4.8, location: 'Khanna', experience: '8 yrs' },
  { id: 'L2', name: 'Sukhwinder Kaur', skill: 'Harvesting Labour', rate: '₹500/day', rating: 4.6, location: 'Ludhiana', experience: '5 yrs' },
  { id: 'L3', name: 'Ramesh Kumar', skill: 'Spray Technician', rate: '₹700/day', rating: 4.9, location: 'Khanna', experience: '10 yrs' }
];

const PARTS = [
  { id: 'P1', name: 'Rotavator Blades (Boron Steel)', price: '₹2,800/set', img: 'https://images.unsplash.com/photo-1533093818119-ac1fa47a6d59?auto=format&fit=crop&w=800&q=80' },
  { id: 'P2', name: 'Clutch Plate & Cover Assembly', price: '₹4,500', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80' },
  { id: 'P3', name: 'Hydraulic Pump Filter', price: '₹850', img: 'https://images.unsplash.com/photo-1565108264043-39be61b756b1?auto=format&fit=crop&w=800&q=80' }
];

export default function MachineryModule() {
  const { addToCart } = useApp();
  const [activeTab, setActiveTab] = useState('machinery');
  const [bookingModal, setBookingModal] = useState(null);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingHours, setBookingHours] = useState(8);
  const [booked, setBooked] = useState({});

  const handleBook = () => {
    setBooked(prev => ({ ...prev, [bookingModal.id]: true }));
    setBookingModal(null);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Wrench className="w-7 h-7 text-orange-600" /> Machinery & Labour
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Browse and rent tractors, hire labour, order spare parts</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
        {[['machinery', 'Machinery'], ['labour', 'Labour'], ['parts', 'Spare Parts']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-orange-700 dark:text-orange-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Machinery Tab */}
      {activeTab === 'machinery' && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {MACHINERY.map(m => (
            <div key={m.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="relative h-36">
                <img src={m.img} alt={m.name} className="w-full h-full object-cover" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80'; }} />
                <div className={`absolute top-2 right-2 px-2 py-0.5 rounded-full text-xs font-bold ${m.status === 'Available' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>{m.status}</div>
                <div className="absolute top-2 left-2 px-2 py-0.5 rounded-full text-xs font-bold bg-black/50 text-white backdrop-blur-sm">{m.category}</div>
              </div>
              <div className="p-4">
                <div className="flex items-start justify-between mb-1">
                  <h3 className="font-extrabold text-slate-900 dark:text-white">{m.name}</h3>
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs"><Star className="w-3.5 h-3.5 fill-amber-500" /> {m.rating}</div>
                </div>
                <p className="text-xs text-slate-500 mb-1">{m.specs}</p>
                <p className="text-emerald-600 font-bold text-sm mb-3">{m.price}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => setBookingModal(m)}
                    disabled={m.status !== 'Available' || booked[m.id]}
                    className={`flex-1 py-2 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 transition-all ${
                      booked[m.id] ? 'bg-emerald-100 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 cursor-default' :
                      m.status === 'Available' ? 'bg-orange-600 text-white hover:bg-orange-700' :
                      'bg-slate-100 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    {booked[m.id] ? <><CheckCircle2 className="w-3.5 h-3.5" /> Booked</> : <><Calendar className="w-3.5 h-3.5" /> Book Now</>}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Labour Tab */}
      {activeTab === 'labour' && (
        <div className="space-y-3">
          {LABOUR.map(l => (
            <div key={l.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-orange-500 to-amber-400 flex items-center justify-center text-white font-black text-lg shrink-0">
                {l.name[0]}
              </div>
              <div className="flex-1">
                <div className="font-extrabold text-slate-900 dark:text-white">{l.name}</div>
                <div className="text-sm text-slate-500">{l.skill} • {l.experience} exp. • {l.location}</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                  <span className="text-xs font-bold text-amber-600">{l.rating}</span>
                  <span className="text-xs text-slate-500 ml-2 font-bold">{l.rate}</span>
                </div>
              </div>
              <button className="px-3 py-2 rounded-xl bg-orange-600 text-white font-bold text-xs hover:bg-orange-700 transition-colors">
                Hire
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Spare Parts Tab */}
      {activeTab === 'parts' && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {PARTS.map(p => (
            <div key={p.id} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
              <img src={p.img} alt={p.name} className="w-full h-28 object-cover" onError={e => { e.target.src = 'https://images.unsplash.com/photo-1533093818119-ac1fa47a6d59?auto=format&fit=crop&w=800&q=80'; }} />
              <div className="p-4">
                <h3 className="font-bold text-slate-900 dark:text-white text-sm mb-0.5">{p.name}</h3>
                <p className="text-emerald-600 font-bold text-sm mb-3">{p.price}</p>
                <button onClick={() => addToCart({ id: p.id, name: p.name, price: p.price, category: 'Parts' })} className="w-full py-2 rounded-xl bg-orange-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 hover:bg-orange-700 transition-colors">
                  <ShoppingCart className="w-3.5 h-3.5" /> Order Part
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Booking Modal */}
      {bookingModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setBookingModal(null)}>
          <div className="bg-white dark:bg-slate-900 rounded-3xl p-6 w-full max-w-sm shadow-2xl" onClick={e => e.stopPropagation()}>
            <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-4">Book {bookingModal.name}</h3>
            <div className="space-y-3">
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Date</label>
                <input type="date" value={bookingDate} onChange={e => setBookingDate(e.target.value)} className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div>
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Hours Required</label>
                <input type="number" value={bookingHours} onChange={e => setBookingHours(e.target.value)} min={1} max={12} className="mt-1 w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-orange-500" />
              </div>
              <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/30 border border-orange-200 dark:border-orange-800">
                <div className="text-sm font-bold text-orange-800 dark:text-orange-300">Estimated Cost: {bookingModal.price.split('/')[0]} × {bookingHours}h = {bookingModal.price}</div>
              </div>
            </div>
            <div className="flex gap-3 mt-5">
              <button onClick={() => setBookingModal(null)} className="flex-1 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm">Cancel</button>
              <button onClick={handleBook} className="flex-1 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-sm">Confirm Booking</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
