import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { HeadphonesIcon, MessageSquare, Phone, Star, BookOpen, Send, CheckCircle2, Clock } from 'lucide-react';

const EXPERTS = [
  { id: 'E1', name: 'Dr. Gurpreet Singh', title: 'Senior Agronomist', org: 'Punjab Agricultural University', rating: 4.9, reviews: 312, languages: ['Punjabi', 'Hindi', 'English'], speciality: 'Wheat, Rice, Crop diseases', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80', available: true },
  { id: 'E2', name: 'Dr. Priya Nambiar', title: 'Plant Pathologist', org: 'ICAR-IARI', rating: 4.8, reviews: 208, languages: ['Malayalam', 'Tamil', 'English'], speciality: 'Tomato, Mango, Fungal diseases', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80', available: true },
  { id: 'E3', name: 'Dr. Amresh Yadav', title: 'Soil Scientist', org: 'NRCS, Nagpur', rating: 4.7, reviews: 185, languages: ['Hindi', 'Marathi', 'English'], speciality: 'Soil health, Cotton, Soybean', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80', available: false }
];

const ADVISORIES = [
  { id: 'ADV1', title: 'Stripe Rust Alert — Wheat Kharif 2026', author: 'Dr. Gurpreet Singh', date: '2026-09-27', category: 'Disease Alert', body: 'Yellow stripe rust (Puccinia striiformis) has been detected in Ludhiana and Patiala districts. Recommended action: Spray Propiconazole 25EC at 1ml/L as a preventive measure. Avoid late sowing. Use resistant variety HD-3086.' },
  { id: 'ADV2', title: 'Best Time to Sow Rabi Wheat 2026-27', author: 'Dr. Amresh Yadav', date: '2026-09-20', category: 'Agronomy', body: 'Optimal sowing window for wheat is 1-15 November. Seed rate: 40-45 kg/acre for timely sowing. Apply Zinc sulfate 10 kg/acre as basal dose for areas showing Zn deficiency.' }
];

const FAQS = [
  { q: 'What is the ideal pH for wheat cultivation?', a: '6.5 to 7.5. Below 6.0, apply agricultural lime at 250 kg/acre. Above 7.5, use gypsum 100 kg/acre to reduce sodicity.' },
  { q: 'How many times should I irrigate wheat?', a: 'Wheat requires 4-6 irrigations depending on variety and soil type. Critical stages: CRI (21 DAP), Tillering (45 DAP), Jointing (65 DAP), Heading (90 DAP).' },
  { q: 'How to identify Basmati vs. non-Basmati rice?', a: 'Basmati grains are longer (>6.0 mm), slender, and aroma-positive. Look for elongation ratio >1.7 on cooking. Use certified seed to ensure authenticity.' }
];

export default function ExpertSupportModule() {
  const { userRole } = useApp();
  const [activeTab, setActiveTab] = useState('experts');
  const [question, setQuestion] = useState('');
  const [asked, setAsked] = useState(false);
  const [selectedFaq, setSelectedFaq] = useState(null);

  const handleAsk = () => { if (question.trim()) { setAsked(true); setTimeout(() => setAsked(false), 3000); setQuestion(''); } };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
          <HeadphonesIcon className="w-7 h-7 text-indigo-600" /> Expert Support
        </h1>
        <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">Ask an agronomist, book a call, read advisories</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit flex-wrap">
        {[['experts', 'Experts'], ['ask', 'Ask Question'], ['advisories', 'Advisories'], ['faq', 'FAQ']].map(([tab, label]) => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-3 py-2 rounded-lg text-xs font-bold transition-all ${activeTab === tab ? 'bg-white dark:bg-slate-900 text-indigo-700 dark:text-indigo-400 shadow-sm' : 'text-slate-600 dark:text-slate-400'}`}>
            {label}
          </button>
        ))}
      </div>

      {/* Experts Tab */}
      {activeTab === 'experts' && (
        <div className="space-y-4">
          {EXPERTS.map(e => (
            <div key={e.id} className="flex items-center gap-4 p-4 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="relative">
                <img src={e.img} alt={e.name} className="w-16 h-16 rounded-2xl object-cover" onError={el => { el.target.src = 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80'; }} />
                <div className={`absolute -bottom-1 -right-1 w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 ${e.available ? 'bg-emerald-500' : 'bg-slate-400'}`} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-extrabold text-slate-900 dark:text-white">{e.name}</div>
                <div className="text-xs text-slate-500">{e.title} • {e.org}</div>
                <div className="text-xs text-indigo-600 dark:text-indigo-400 mt-0.5">{e.speciality}</div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5 text-amber-500 text-xs"><Star className="w-3 h-3 fill-amber-500" /> {e.rating}</div>
                  <span className="text-xs text-slate-400">({e.reviews} reviews)</span>
                  <span className="text-xs text-slate-400">{e.languages.join(', ')}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <button className="px-3 py-1.5 rounded-xl bg-indigo-600 text-white font-bold text-xs hover:bg-indigo-700 transition-colors">
                  <MessageSquare className="w-3.5 h-3.5 inline mr-1" />Chat
                </button>
                {e.available && (
                  <button className="px-3 py-1.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-400 font-bold text-xs border border-emerald-200 dark:border-emerald-800 hover:bg-emerald-100 transition-colors">
                    <Phone className="w-3.5 h-3.5 inline mr-1" />Call
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Ask Question Tab */}
      {activeTab === 'ask' && (
        <div className="space-y-4">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-extrabold text-slate-900 dark:text-white mb-4">Ask an Agronomist</h3>
            <textarea
              value={question}
              onChange={e => setQuestion(e.target.value)}
              placeholder="Describe your farm problem in detail. Include crop name, symptoms you see, and any treatments already applied..."
              className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 h-28 resize-none"
            />
            <p className="text-xs text-slate-400 mt-1">You can also attach a photo using the AI Scanner button.</p>
            {asked && (
              <div className="mt-3 flex items-center gap-2 p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">Question submitted! An expert will respond within 2 hours.</span>
              </div>
            )}
            <button
              onClick={handleAsk}
              className="mt-3 w-full py-3 rounded-xl bg-indigo-600 text-white font-bold text-sm flex items-center justify-center gap-2 hover:bg-indigo-700 transition-colors"
            >
              <Send className="w-4 h-4" /> Submit Question
            </button>
          </div>
          {userRole === 'expert' && (
            <div className="p-4 rounded-2xl bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800">
              <h4 className="font-bold text-purple-800 dark:text-purple-300 mb-2">Your Answer Inbox</h4>
              <div className="text-sm text-slate-600 dark:text-slate-400">3 pending questions from farmers need your response.</div>
            </div>
          )}
        </div>
      )}

      {/* Advisories Tab */}
      {activeTab === 'advisories' && (
        <div className="space-y-4">
          {ADVISORIES.map(a => (
            <div key={a.id} className="bg-white dark:bg-slate-900 rounded-2xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
              <div className="flex items-start justify-between mb-2">
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${a.category === 'Disease Alert' ? 'bg-red-100 text-red-700 dark:bg-red-950/40 dark:text-red-400' : 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'}`}>{a.category}</span>
                <span className="text-xs text-slate-400">{a.date}</span>
              </div>
              <h3 className="font-extrabold text-slate-900 dark:text-white mb-1">{a.title}</h3>
              <p className="text-xs text-slate-500 mb-3">By {a.author}</p>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">{a.body}</p>
            </div>
          ))}
        </div>
      )}

      {/* FAQ Tab */}
      {activeTab === 'faq' && (
        <div className="space-y-3">
          {FAQS.map((f, i) => (
            <div key={i} className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
              <button
                onClick={() => setSelectedFaq(selectedFaq === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left"
              >
                <span className="font-semibold text-slate-900 dark:text-white text-sm">{f.q}</span>
                <span className="text-slate-400 ml-2">{selectedFaq === i ? '▲' : '▼'}</span>
              </button>
              {selectedFaq === i && (
                <div className="px-5 pb-4 text-sm text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-800 pt-3">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
