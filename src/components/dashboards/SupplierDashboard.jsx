import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Wrench, 
  HardHat, 
  ClipboardList, 
  BarChart2, 
  ShieldCheck, 
  Truck, 
  Check, 
  PhoneCall, 
  Plus 
} from 'lucide-react';

export default function SupplierDashboard() {
  const { 
    userName, 
    mode, 
    activeDashboardTab, 
    setActiveDashboardTab, 
    t 
  } = useApp();

  const [serviceTickets, setServiceTickets] = useState([
    { id: 'SR-104', machine: 'Mahindra 575 DI', issue: 'Hydraulic lift cylinder seal leakage', farmer: 'Harjit Singh (Raipur)', priority: 'High', status: 'Dispatched', eta: '24 mins' },
    { id: 'SR-105', machine: 'Sonalika Tiger DI 75', issue: 'Fuel injector nozzle spray low pressure', farmer: 'Gurwinder S. (Karnal)', priority: 'Medium', status: 'Assigned', eta: '45 mins' },
    { id: 'SR-106', machine: 'Shaktiman Rotavator 7ft', issue: 'Rotavator blade mounting shear bolt broken', farmer: 'Prem Kumar (Amritsar)', priority: 'Urgent', status: 'En Route', eta: '12 mins' }
  ]);

  const [orders, setOrders] = useState([
    { id: 'ORD-9912', item: 'Boron Steel Rotavator Blades (Set of 48)', buyer: 'Doaba Kisan Co-Op', total: '₹17,280', status: 'Packing' },
    { id: 'ORD-9914', item: 'Tractor Clutch Plate Assembly (Mahindra 575)', buyer: 'Malwa Agri Repairs', total: '₹9,700', status: 'Ready to Dispatch' }
  ]);

  const handleResolveTicket = (ticketId) => {
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    setServiceTickets(prev => prev.map(t => t.id === ticketId ? { ...t, status: 'Resolved' } : t));
  };

  const handleDispatchOrder = (orderId) => {
    confetti({ particleCount: 60, spread: 50, origin: { y: 0.6 } });
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: 'Dispatched (Waybill Generated)' } : o));
  };

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      
      {/* Top Banner Card */}
      <div className="p-6 rounded-3xl bg-gradient-to-r from-blue-800 via-blue-700 to-indigo-700 text-white shadow-xl relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/15 text-white border border-white/20 mb-2">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-200" />
              <span>{t('roles.supplier.badge')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {userName} — Equipment & Spares Hub
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-xl">
              {t('roles.supplier.meta')}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => {
                confetti({ particleCount: 50, spread: 50, origin: { y: 0.6 } });
              }}
              className="px-4 py-2.5 rounded-xl bg-white text-blue-900 font-extrabold text-xs shadow-md hover:bg-blue-50 transition-colors flex items-center gap-1.5"
            >
              <Truck className="w-4 h-4 text-blue-700" />
              <span>{t('roles.supplier.actions.dispatchMechanic')}</span>
            </button>
          </div>
        </div>
      </div>

      {/* 4 Role KPI Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.supplier.kpis.skus')}</div>
          <div className="text-2xl font-black text-slate-900 dark:text-white mt-1">142 SKUs</div>
          <div className="text-xs text-blue-600 font-semibold mt-1">{t('roles.supplier.kpis.skusSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.supplier.kpis.dispatches')}</div>
          <div className="text-2xl font-black text-amber-600 mt-1">26 Orders</div>
          <div className="text-xs text-amber-700 dark:text-amber-400 font-semibold mt-1">{t('roles.supplier.kpis.dispatchesSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.supplier.kpis.mechanics')}</div>
          <div className="text-2xl font-black text-emerald-600 mt-1">8 Vans En Route</div>
          <div className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold mt-1">{t('roles.supplier.kpis.mechanicsSub')}</div>
        </div>

        <div className="p-4 sm:p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">{t('roles.supplier.kpis.turnover')}</div>
          <div className="text-2xl font-black text-purple-600 mt-1">₹24,80,000</div>
          <div className="text-xs text-purple-700 dark:text-purple-400 font-semibold mt-1">{t('roles.supplier.kpis.turnoverSub')}</div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-slate-200 dark:border-slate-800 overflow-x-auto">
        {['inventory', 'serviceDispatch', 'orders', 'supplyAnalytics'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveDashboardTab(tab)}
            className={`py-3 px-4 font-bold text-xs uppercase tracking-wider border-b-2 transition-all shrink-0 ${
              activeDashboardTab === tab
                ? 'border-blue-600 text-blue-700 dark:text-blue-400'
                : 'border-transparent text-slate-500 hover:text-slate-800 dark:hover:text-slate-200'
            }`}
          >
            {t(`roles.supplier.tabs.${tab}`)}
          </button>
        ))}
      </div>

      {/* Tab: Service Dispatch */}
      {(activeDashboardTab === 'serviceDispatch' || activeDashboardTab === 'inventory' || !activeDashboardTab) && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Emergency Breakdown Requests</h3>
            <span className="text-xs text-blue-600 font-bold">Fast Response Guarantee</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {serviceTickets.map((st) => (
              <div key={st.id} className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950 px-2 py-0.5 rounded">
                    {st.id}
                  </span>
                  <span className="text-xs text-amber-600 font-bold">ETA: {st.eta}</span>
                </div>
                <div>
                  <h4 className="font-extrabold text-base text-slate-900 dark:text-white">{st.machine}</h4>
                  <p className="text-xs text-slate-500 mt-0.5">{st.issue}</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800 text-xs text-slate-600 dark:text-slate-300">
                  Farmer: <strong>{st.farmer}</strong>
                </div>
                <div className="flex gap-2">
                  <button
                    disabled={st.status === 'Resolved'}
                    onClick={() => handleResolveTicket(st.id)}
                    className={`flex-1 py-2 text-xs font-bold rounded-xl transition-all ${
                      st.status === 'Resolved'
                        ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 cursor-not-allowed'
                        : 'bg-blue-600 hover:bg-blue-700 text-white shadow-md'
                    }`}
                  >
                    {st.status === 'Resolved' ? 'Completed ✅' : t('roles.supplier.actions.resolveTicket')}
                  </button>
                  <button
                    onClick={() => alert(`Calling ${st.farmer}...`)}
                    className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    title="Call Farmer"
                  >
                    <PhoneCall className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Tab: Orders */}
      {activeDashboardTab === 'orders' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-4">
          <h3 className="font-extrabold text-base text-slate-900 dark:text-white">Active B2B Spares Orders</h3>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {orders.map((o) => (
              <div key={o.id} className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-sm text-slate-900 dark:text-white">{o.item}</div>
                  <div className="text-xs text-slate-500 mt-0.5">Order #{o.id} • {o.buyer}</div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="font-extrabold text-sm text-slate-900 dark:text-white">{o.total}</div>
                    <div className="text-xs text-blue-600 font-semibold">{o.status}</div>
                  </div>
                  <button
                    onClick={() => handleDispatchOrder(o.id)}
                    className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-sm"
                  >
                    Dispatch Waybill
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
