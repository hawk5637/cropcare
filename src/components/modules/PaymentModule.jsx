import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { CreditCard, Wallet, ArrowUpRight, ArrowDownLeft, Shield, CheckCircle2, Clock, Download, RefreshCw, Lock } from 'lucide-react';

const TRANSACTIONS = [
  { id: 'TXN-9012', type: 'credit', label: 'Sale — Wheat 180 Qtl to ITC Agri', amount: 464400, date: '2026-09-25', method: 'IMPS', status: 'Success', ref: 'IMPS202609250012' },
  { id: 'TXN-8934', type: 'credit', label: 'Sale — Mustard 100 Qtl to Adani Wilmar', amount: 582000, date: '2026-09-20', method: 'NEFT', status: 'Success', ref: 'NEFT202609200099' },
  { id: 'TXN-8812', type: 'debit', label: 'Machinery Booking — Rotavator 2 days', amount: 4250, date: '2026-09-15', method: 'UPI', status: 'Success', ref: 'UPI202609151234' },
  { id: 'TXN-8771', type: 'debit', label: 'Seed Purchase — HD-2967 5 bags', amount: 14000, date: '2026-09-01', method: 'UPI', status: 'Success', ref: 'UPI202609010088' },
  { id: 'TXN-8700', type: 'credit', label: 'Subsidy — PM-KISAN Q3 2026', amount: 2000, date: '2026-08-28', method: 'DBT', status: 'Success', ref: 'DBT202608280001' }
];

const ESCROW_ACTIVE = [
  { id: 'ESC-441', buyer: 'ITC Agri Business Ltd', crop: 'Wheat Grade-A (Bid #BID-881)', amount: 516000, lockedOn: '2026-09-26', releaseOn: 'On delivery confirmation', status: 'Locked' }
];

const LOANS = [
  { id: 'LN-2021', name: 'KCC — Kisan Credit Card', limit: '₹4,00,000', outstanding: '₹85,000', dueDate: '2026-12-31', interest: '4% p.a.', bank: 'Punjab National Bank', status: 'Active' },
  { id: 'LN-2019', name: 'Storage Pledge Loan', limit: '₹2,00,000', outstanding: '₹0', dueDate: 'Cleared', interest: '7% p.a.', bank: 'State Bank of India', status: 'Closed' }
];

export default function PaymentModule() {
  const [activeTab, setActiveTab] = useState('wallet');
  const [pin, setPin] = useState('');
  const [pinVerified, setPinVerified] = useState(false);
  const [pinError, setPinError] = useState(false);

  const totalIn = TRANSACTIONS.filter(t => t.type === 'credit').reduce((a, t) => a + t.amount, 0);
  const totalOut = TRANSACTIONS.filter(t => t.type === 'debit').reduce((a, t) => a + t.amount, 0);
  const balance = totalIn - totalOut;

  const verifyPin = () => {
    if (pin === '1234') { setPinVerified(true); setPinError(false); }
    else { setPinError(true); setPin(''); }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <Wallet className="w-7 h-7 text-emerald-600" /> Payments & Finance
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">CropCare wallet, escrow, transaction history, and loans</p>
      </div>

      {/* Balance Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-br from-emerald-700 to-teal-800 text-white shadow-xl">
        <div className="flex items-center justify-between mb-1">
          <span className="text-emerald-300 text-sm font-semibold">CropCare Wallet Balance</span>
          <Shield className="w-5 h-5 text-emerald-300" />
        </div>
        <div className="text-4xl font-black mb-1">₹{balance.toLocaleString('en-IN')}</div>
        <div className="text-emerald-300 text-xs mb-4">Linked: Punjab National Bank KCC ••• 4421</div>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/15 backdrop-blur rounded-xl p-3">
            <div className="text-xs text-emerald-200 mb-0.5 flex items-center gap-1"><ArrowDownLeft className="w-3 h-3" /> Total Received</div>
            <div className="font-bold text-sm">₹{totalIn.toLocaleString('en-IN')}</div>
          </div>
          <div className="bg-white/15 backdrop-blur rounded-xl p-3">
            <div className="text-xs text-emerald-200 mb-0.5 flex items-center gap-1"><ArrowUpRight className="w-3 h-3" /> Total Spent</div>
            <div className="font-bold text-sm">₹{totalOut.toLocaleString('en-IN')}</div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit flex-wrap">
        {[['wallet', 'Transactions'], ['escrow', 'Escrow'], ['loans', 'Loans & KCC']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Transactions Tab */}
      {activeTab === 'wallet' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 dark:text-white">Transaction History</h3>
            <button className="text-xs font-bold text-emerald-600 flex items-center gap-1"><Download className="w-3.5 h-3.5" /> Export</button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {TRANSACTIONS.map(t => (
              <div key={t.id} className="flex items-center gap-3 px-5 py-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${t.type === 'credit' ? 'bg-emerald-100 dark:bg-emerald-950/40' : 'bg-red-100 dark:bg-red-950/40'}`}>
                  {t.type === 'credit' ? <ArrowDownLeft className="w-4 h-4 text-emerald-600" /> : <ArrowUpRight className="w-4 h-4 text-red-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm truncate">{t.label}</div>
                  <div className="text-xs text-slate-400">{t.date} • {t.method}</div>
                </div>
                <div className={`font-black text-sm ${t.type === 'credit' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {t.type === 'credit' ? '+' : '-'}₹{t.amount.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Escrow Tab */}
      {activeTab === 'escrow' && (
        <div className="space-y-4">
          <div className="p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 flex items-start gap-3">
            <Lock className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
            <div className="text-sm text-blue-800 dark:text-blue-300">
              <strong>CropCare Escrow:</strong> Buyer funds are locked in secure escrow before you ship. Released to you automatically after delivery is confirmed.
            </div>
          </div>
          {ESCROW_ACTIVE.map(e => (
            <div key={e.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border-2 border-blue-200 dark:border-blue-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-slate-900 dark:text-white">Escrow #{e.id}</div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400 flex items-center gap-1"><Lock className="w-3 h-3" /> {e.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[['Buyer', e.buyer], ['Crop/Bid', e.crop], ['Amount Locked', `₹${e.amount.toLocaleString('en-IN')}`], ['Locked On', e.lockedOn], ['Release', e.releaseOn]].map(([k, v]) => (
                  <div key={k} className={k === 'Amount Locked' ? 'col-span-2' : ''}>
                    <div className="text-xs text-slate-400">{k}</div>
                    <div className={`font-bold text-slate-900 dark:text-white mt-0.5 ${k === 'Amount Locked' ? 'text-xl text-emerald-600' : 'text-sm'}`}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Loans Tab */}
      {activeTab === 'loans' && (
        <div className="space-y-4">
          {LOANS.map(loan => (
            <div key={loan.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-center justify-between mb-3">
                <div className="font-extrabold text-slate-900 dark:text-white">{loan.name}</div>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${loan.status === 'Active' ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' : 'bg-slate-100 text-slate-500 dark:bg-slate-800'}`}>{loan.status}</span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                {[['Bank', loan.bank], ['Limit', loan.limit], ['Outstanding', loan.outstanding], ['Due', loan.dueDate], ['Interest', loan.interest]].map(([k, v]) => (
                  <div key={k}><div className="text-xs text-slate-400">{k}</div><div className="font-bold text-slate-900 dark:text-white">{v}</div></div>
                ))}
              </div>
              {loan.status === 'Active' && (
                <button className="w-full py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors">Repay Now via UPI</button>
              )}
            </div>
          ))}
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            <div className="font-bold text-slate-900 dark:text-white mb-1">Need a new loan?</div>
            <p className="text-sm text-slate-500 mb-3">Apply for crop loan, KCC enhancement, or storage pledge loan with pre-filled data from your CropCare profile.</p>
            <button className="w-full py-2.5 rounded-xl bg-blue-600 text-white font-bold text-sm hover:bg-blue-700 transition-colors">Apply for Loan</button>
          </div>
        </div>
      )}
    </div>
  );
}
