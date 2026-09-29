import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { BarChart2, Plus, TrendingUp, TrendingDown, Download, CheckCircle2, Clock, Package, DollarSign } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const EXPENSES = [
  { id: 'E1', date: '2026-09-01', category: 'Seeds', item: 'Wheat HD-2967 (40 kg × 5 bags)', amount: 14000, plot: 'Parcel A-1', type: 'debit' },
  { id: 'E2', date: '2026-09-05', category: 'Fertilizer', item: 'DAP 50 kg × 6 bags', amount: 8100, plot: 'Parcel A-1', type: 'debit' },
  { id: 'E3', date: '2026-09-08', category: 'Labour', item: 'Field preparation (3 days × 2 workers)', amount: 3900, plot: 'All Plots', type: 'debit' },
  { id: 'E4', date: '2026-09-10', category: 'Machinery', item: 'Tractor rental (Rotavator + Ploughing)', amount: 4250, plot: 'Parcel A-1', type: 'debit' },
  { id: 'E5', date: '2026-09-15', category: 'Pesticide', item: 'Propiconazole 25EC (2L)', amount: 1200, plot: 'Parcel A-1', type: 'debit' },
  { id: 'I1', date: '2026-09-20', category: 'Produce Sale', item: 'Mustard (100 qtl) — Alwar APMC', amount: 582000, plot: 'Parcel B-2', type: 'credit' }
];

const PIE_DATA = [
  { name: 'Seeds', value: 14000, color: '#22c55e' },
  { name: 'Fertilizer', value: 8100, color: '#3b82f6' },
  { name: 'Labour', value: 3900, color: '#f59e0b' },
  { name: 'Machinery', value: 4250, color: '#8b5cf6' },
  { name: 'Pesticide', value: 1200, color: '#ef4444' }
];

const MONTH_DATA = [
  { month: 'Jun', income: 0, expense: 12000 },
  { month: 'Jul', income: 0, expense: 18000 },
  { month: 'Aug', income: 320000, expense: 8000 },
  { month: 'Sep', income: 582000, expense: 31450 }
];

const TASKS = [
  { id: 'T1', task: 'Apply second N split (Urea 20 kg/acre)', plot: 'Parcel A-1', due: '2026-10-05', done: false },
  { id: 'T2', task: 'Soil moisture check after rain', plot: 'All Plots', due: '2026-09-29', done: true },
  { id: 'T3', task: 'Submit harvest report to APMC', plot: 'Parcel B-2', due: '2026-09-30', done: false }
];

export default function FarmManagementModule() {
  const [activeTab, setActiveTab] = useState('ledger');
  const [tasks, setTasks] = useState(TASKS);
  const totalExpenses = EXPENSES.filter(e => e.type === 'debit').reduce((a, e) => a + e.amount, 0);
  const totalIncome = EXPENSES.filter(e => e.type === 'credit').reduce((a, e) => a + e.amount, 0);
  const profit = totalIncome - totalExpenses;

  const toggleTask = (id) => setTasks(prev => prev.map(t => t.id === id ? { ...t, done: !t.done } : t));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <BarChart2 className="w-7 h-7 text-teal-600" /> Farm Management
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Ledger, tasks, harvest log, and profit/loss reports</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-3 gap-4">
        {[
          { label: 'Total Income', value: `₹${(totalIncome/1000).toFixed(0)}K`, icon: TrendingUp, color: 'text-emerald-600 bg-emerald-50 dark:bg-emerald-950/30' },
          { label: 'Total Expenses', value: `₹${(totalExpenses/1000).toFixed(1)}K`, icon: TrendingDown, color: 'text-red-600 bg-red-50 dark:bg-red-950/30' },
          { label: 'Net Profit', value: `₹${(profit/1000).toFixed(0)}K`, icon: DollarSign, color: 'text-teal-600 bg-teal-50 dark:bg-teal-950/30' }
        ].map(k => {
          const Icon = k.icon;
          return (
            <div key={k.label} className={`p-4 rounded-2xl ${k.color} border border-slate-200 dark:border-slate-800`}>
              <Icon className={`w-5 h-5 ${k.color.split(' ')[0]} mb-2`} />
              <div className="text-xs text-slate-500">{k.label}</div>
              <div className="font-extrabold text-slate-900 dark:text-white text-lg">{k.value}</div>
            </div>
          );
        })}
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit flex-wrap">
        {[['ledger', 'Ledger'], ['chart', 'P&L Chart'], ['tasks', 'Tasks']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-teal-700 dark:text-teal-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Ledger Tab */}
      {activeTab === 'ledger' && (
        <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
          <div className="px-5 py-4 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
            <h3 className="font-extrabold text-slate-900 dark:text-white">Income & Expense Ledger</h3>
            <button className="text-xs font-bold text-teal-600 flex items-center gap-1 hover:underline">
              <Download className="w-3.5 h-3.5" /> Export
            </button>
          </div>
          <div className="divide-y divide-slate-100 dark:divide-slate-800">
            {EXPENSES.map(e => (
              <div key={e.id} className="flex items-center gap-4 px-5 py-3.5">
                <div className={`w-8 h-8 rounded-xl flex items-center justify-center ${e.type === 'credit' ? 'bg-emerald-100 dark:bg-emerald-950/40' : 'bg-red-100 dark:bg-red-950/40'}`}>
                  {e.type === 'credit' ? <TrendingUp className="w-4 h-4 text-emerald-600" /> : <TrendingDown className="w-4 h-4 text-red-500" />}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-slate-900 dark:text-white text-sm truncate">{e.item}</div>
                  <div className="text-xs text-slate-400">{e.date} • {e.plot}</div>
                </div>
                <div className={`font-black text-sm ${e.type === 'credit' ? 'text-emerald-600' : 'text-red-500'}`}>
                  {e.type === 'credit' ? '+' : '-'}₹{e.amount.toLocaleString('en-IN')}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Chart Tab */}
      {activeTab === 'chart' && (
        <div className="space-y-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Monthly Income vs Expense</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={MONTH_DATA}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                <YAxis tick={{ fontSize: 10 }} tickFormatter={v => `₹${v/1000}K`} />
                <Tooltip formatter={v => `₹${v.toLocaleString('en-IN')}`} />
                <Legend />
                <Bar dataKey="income" fill="#22c55e" name="Income" radius={4} />
                <Bar dataKey="expense" fill="#ef4444" name="Expense" radius={4} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Expense Breakdown</h3>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={PIE_DATA} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`} labelLine={false}>
                  {PIE_DATA.map((entry, i) => <Cell key={i} fill={entry.color} />)}
                </Pie>
                <Tooltip formatter={v => `₹${v.toLocaleString('en-IN')}`} />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Tasks Tab */}
      {activeTab === 'tasks' && (
        <div className="space-y-3">
          {tasks.map(t => (
            <div key={t.id} className={`flex items-center gap-4 p-4 rounded-2xl border transition-all ${t.done ? 'bg-slate-50 dark:bg-slate-800/50 border-slate-100 dark:border-slate-800 opacity-60' : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 shadow-sm'}`}>
              <button
                onClick={() => toggleTask(t.id)}
                className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-all ${t.done ? 'border-emerald-500 bg-emerald-500' : 'border-slate-300 dark:border-slate-600'}`}
              >
                {t.done && <CheckCircle2 className="w-4 h-4 text-white" />}
              </button>
              <div className="flex-1">
                <div className={`font-semibold text-sm ${t.done ? 'line-through text-slate-400' : 'text-slate-900 dark:text-white'}`}>{t.task}</div>
                <div className="text-xs text-slate-400 mt-0.5 flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Due: {t.due} • {t.plot}
                </div>
              </div>
            </div>
          ))}
          <button className="w-full py-3 rounded-xl border-2 border-dashed border-slate-200 dark:border-slate-700 text-slate-500 text-sm font-semibold flex items-center justify-center gap-2 hover:border-teal-400 hover:text-teal-600 transition-colors">
            <Plus className="w-4 h-4" /> Add Task
          </button>
        </div>
      )}
    </div>
  );
}
