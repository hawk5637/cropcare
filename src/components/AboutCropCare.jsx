import React, { useState, useEffect, useRef } from 'react';
import { useApp } from '../context/AppContext';
import {
  Info, Zap, HelpCircle, Grid3x3, Target, TrendingUp,
  ChevronDown, ChevronRight, ArrowRight,
  BookOpen, Sprout, ShoppingCart, Truck, CreditCard, MessageSquare,
  Droplets, FlaskConical, Bug, CloudSun, Wrench, HeadphonesIcon,
  BarChart2, Store, Package, LogIn, UserCheck, Bot, ShieldCheck,
  Users, Wheat, Leaf, Globe, LayoutGrid, BadgeCheck, Star
} from 'lucide-react';

const PROBLEM_CARDS = [
  { icon: BookOpen, title: 'Right Information', desc: 'Farmers lack access to timely, localized agronomic guidance, weather forecasts, and best practices.', color: 'from-red-500 to-orange-500' },
  { icon: Sprout, title: 'Quality Inputs', desc: 'Counterfeit seeds, adulterated fertilizers, and substandard pesticides cause crop failures and financial loss.', color: 'from-amber-500 to-yellow-500' },
  { icon: Leaf, title: 'Crop Guidance', desc: 'Without expert support, disease identification, nutrient management, and pest control are guesswork.', color: 'from-emerald-500 to-green-500' },
  { icon: BarChart2, title: 'Market Prices', desc: 'Price discovery is opaque. Farmers sell at distress prices without knowing real mandi rates.', color: 'from-blue-500 to-cyan-500' },
  { icon: Users, title: 'Direct Buyers', desc: 'Middlemen capture value. Farmers rarely connect directly with buyers, processors, and exporters.', color: 'from-purple-500 to-indigo-500' },
  { icon: Wrench, title: 'Agri Services', desc: 'Access to machinery, cold storage, logistics, and financial services remains fragmented and costly.', color: 'from-pink-500 to-rose-500' }
];

const HOW_STEPS = [
  { step: 1, icon: LogIn, title: 'Sign Up', desc: 'Create your account in minutes. Choose your role — Farmer, Buyer, Supplier or Agronomist.', color: 'bg-emerald-600' },
  { step: 2, icon: UserCheck, title: 'Set Up Farm Profile', desc: 'Add your plots, soil data, crops and location. CropCare personalizes everything for you.', color: 'bg-blue-600' },
  { step: 3, icon: Bot, title: 'Get AI Guidance & Buy Inputs', desc: 'Use the AI scanner for disease detection, get personalized advice, and buy certified seeds and fertilizers.', color: 'bg-purple-600' },
  { step: 4, icon: ShoppingCart, title: 'Sell Produce & Get Paid', desc: 'List your harvest, find verified buyers, negotiate securely, and receive payment via escrow.', color: 'bg-amber-600' }
];

const MODULES_LIST = [
  { id: 'land-soil', icon: Globe, title: 'Land & Soil', desc: 'Plot management, Soil Health Index, soil tests', color: 'text-emerald-600', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { id: 'seed', icon: Sprout, title: 'Seed', desc: 'Certified catalog, scanner, variety comparison', color: 'text-green-600', bg: 'bg-green-50 dark:bg-green-950/30' },
  { id: 'crop-planning', icon: LayoutGrid, title: 'Crop Planning', desc: 'Sowing-to-harvest calendar, yield estimates', color: 'text-lime-600', bg: 'bg-lime-50 dark:bg-lime-950/30' },
  { id: 'ai-assistant', icon: Bot, title: 'AI Farm Assistant', desc: 'Full chat with voice, multilingual, image support', color: 'text-cyan-600', bg: 'bg-cyan-50 dark:bg-cyan-950/30' },
  { id: 'water', icon: Droplets, title: 'Water', desc: 'Irrigation schedules, water calculator, drip/sprinkler', color: 'text-blue-600', bg: 'bg-blue-50 dark:bg-blue-950/30' },
  { id: 'fertilizer', icon: FlaskConical, title: 'Fertilizer & Nutrients', desc: 'NPK calculator, deficiency guide, application calendar', color: 'text-violet-600', bg: 'bg-violet-50 dark:bg-violet-950/30' },
  { id: 'pest-disease', icon: Bug, title: 'Pest & Disease', desc: 'AI leaf scanner, disease library, outbreak alerts', color: 'text-red-600', bg: 'bg-red-50 dark:bg-red-950/30' },
  { id: 'weather', icon: CloudSun, title: 'Weather', desc: '7-day forecast, spray advisor, farm-day tips', color: 'text-sky-600', bg: 'bg-sky-50 dark:bg-sky-950/30' },
  { id: 'machinery', icon: Wrench, title: 'Machinery & Labour', desc: 'Rent tractors, hire labour, service requests', color: 'text-orange-600', bg: 'bg-orange-50 dark:bg-orange-950/30' },
  { id: 'expert-support', icon: HeadphonesIcon, title: 'Expert Support', desc: 'Ask agronomist, book a call, advisories', color: 'text-indigo-600', bg: 'bg-indigo-50 dark:bg-indigo-950/30' },
  { id: 'farm-management', icon: BarChart2, title: 'Farm Management', desc: 'Ledger, tasks, harvest log, P&L report', color: 'text-teal-600', bg: 'bg-teal-50 dark:bg-teal-950/30' },
  { id: 'market', icon: Store, title: 'Market', desc: 'Live mandi prices, price alerts, e-NAM listing', color: 'text-amber-600', bg: 'bg-amber-50 dark:bg-amber-950/30' },
  { id: 'buyer-management', icon: Users, title: 'Buyer Management', desc: 'Verified buyers, bids, contracts, offers', color: 'text-yellow-600', bg: 'bg-yellow-50 dark:bg-yellow-950/30' },
  { id: 'storage', icon: Package, title: 'Storage', desc: 'Cold storage finder, booking, spoilage tips', color: 'text-stone-600', bg: 'bg-stone-50 dark:bg-stone-950/30' },
  { id: 'logistics', icon: Truck, title: 'Logistics', desc: 'Book transport, live tracking, delivery OTP', color: 'text-slate-600', bg: 'bg-slate-50 dark:bg-slate-800' },
  { id: 'payment', icon: CreditCard, title: 'Payment', desc: 'Wallet, UPI, secure escrow, invoices', color: 'text-emerald-700', bg: 'bg-emerald-50 dark:bg-emerald-950/30' },
  { id: 'after-selling', icon: Star, title: 'After Selling', desc: 'Feedback, disputes, harvest-to-sale summary', color: 'text-rose-600', bg: 'bg-rose-50 dark:bg-rose-950/30' },
  { id: 'accessibility', icon: BadgeCheck, title: 'Accessibility', desc: 'Easy mode, voice, high contrast, 4 languages', color: 'text-purple-600', bg: 'bg-purple-50 dark:bg-purple-950/30' }
];

const IMPACT_STATS = [
  { label: 'Higher Yield', value: 28, suffix: '%', icon: TrendingUp, color: 'text-emerald-500', bg: 'bg-emerald-50 dark:bg-emerald-950/40' },
  { label: 'Lower Input Cost', value: 22, suffix: '%', icon: Zap, color: 'text-blue-500', bg: 'bg-blue-50 dark:bg-blue-950/40' },
  { label: 'Less Crop Loss', value: 35, suffix: '%', icon: ShieldCheck, color: 'text-purple-500', bg: 'bg-purple-50 dark:bg-purple-950/40' },
  { label: 'Better Price Realization', value: 18, suffix: '%', icon: BarChart2, color: 'text-amber-500', bg: 'bg-amber-50 dark:bg-amber-950/40' },
  { label: 'Farmers Reached', value: 12000, suffix: '+', icon: Users, color: 'text-rose-500', bg: 'bg-rose-50 dark:bg-rose-950/40' }
];

function AnimatedCounter({ target, suffix, duration = 1500 }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start = Math.min(start + step, target);
      setCount(start);
      if (start >= target) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [started, target, duration]);

  return <span ref={ref}>{count.toLocaleString('en-IN')}{suffix}</span>;
}

const SECTIONS = [
  { id: 'problem', icon: HelpCircle, label: 'The Problem' },
  { id: 'solution', icon: Zap, label: 'Our Solution' },
  { id: 'how-it-works', icon: Info, label: 'How It Works' },
  { id: 'features', icon: Grid3x3, label: '18 Features' },
  { id: 'goal', icon: Target, label: 'Our Goal' },
  { id: 'impact', icon: TrendingUp, label: 'Impact' }
];

export default function AboutCropCare() {
  const { navigateToModule, setActiveNav } = useApp();
  const [activeSection, setActiveSection] = useState('problem');
  const sectionRefs = useRef({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.25, rootMargin: '-80px 0px 0px 0px' }
    );
    Object.values(sectionRefs.current).forEach(ref => { if (ref) observer.observe(ref); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id) => {
    const el = sectionRefs.current[id];
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex gap-0">
      {/* Sticky Left Nav (desktop) */}
      <aside className="hidden lg:flex flex-col gap-1 w-52 shrink-0 sticky top-24 self-start h-fit">
        {SECTIONS.map(s => {
          const Icon = s.icon;
          const active = activeSection === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollTo(s.id)}
              className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl text-sm font-semibold text-left transition-all ${
                active
                  ? 'bg-emerald-600 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <Icon className="w-4 h-4 shrink-0" />
              {s.label}
            </button>
          );
        })}
      </aside>

      {/* Main Content */}
      <div className="flex-1 min-w-0 space-y-20 lg:pl-8">

        {/* Mobile section tabs */}
        <div className="lg:hidden flex overflow-x-auto gap-2 pb-2 -mx-4 px-4 scrollbar-hide">
          {SECTIONS.map(s => {
            const Icon = s.icon;
            const active = activeSection === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollTo(s.id)}
                className={`flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-bold whitespace-nowrap transition-all ${
                  active ? 'bg-emerald-600 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                {s.label}
              </button>
            );
          })}
        </div>

        {/* ── Section 1: Problem ── */}
        <section id="problem" ref={el => sectionRefs.current['problem'] = el}>
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-100 dark:bg-red-950/40 text-red-700 dark:text-red-400 border border-red-200 dark:border-red-800 mb-3">
              <HelpCircle className="w-3.5 h-3.5" /> The Problem
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Farmers struggle to get what they need, <span className="text-red-500">when they need it.</span>
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl">
              Despite contributing 18% of India's GDP, farmers lack consistent access to six critical pillars that determine success or failure of every harvest.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PROBLEM_CARDS.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={i} className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:-translate-y-0.5 transition-all">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${card.color} flex items-center justify-center mb-4 shadow-sm`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white mb-2">{card.title}</h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 2: Solution ── */}
        <section id="solution" ref={el => sectionRefs.current['solution'] = el}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-emerald-800 to-green-700 text-white relative overflow-hidden">
            <div className="absolute -right-12 -top-12 w-64 h-64 rounded-full bg-white/5" />
            <div className="absolute -left-6 -bottom-6 w-40 h-40 rounded-full bg-white/5" />
            <div className="relative z-10 max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white border border-white/20 mb-4">
                <Zap className="w-3.5 h-3.5" /> Our Solution
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
                One platform. All six pillars. In your language.
              </h2>
              <p className="text-lg text-emerald-100 leading-relaxed mb-8">
                CropCare unifies information, quality inputs, expert guidance, real-time prices, direct buyers, and agri-services in a single app — available in English, हिंदी, தமிழ், and Français — so every farmer can thrive, regardless of where they are.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {PROBLEM_CARDS.map((c, i) => {
                  const Icon = c.icon;
                  return (
                    <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur rounded-xl px-3 py-2">
                      <Icon className="w-4 h-4 text-emerald-200" />
                      <span className="text-sm font-semibold">{c.title}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 3: How It Works ── */}
        <section id="how-it-works" ref={el => sectionRefs.current['how-it-works'] = el}>
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-800 mb-3">
              <Info className="w-3.5 h-3.5" /> How It Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              4 steps from sign-up to payday
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">Simple enough for first-time smartphone users. Powerful enough for enterprise agri-businesses.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {HOW_STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="relative p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all group">
                  {i < 3 && (
                    <div className="hidden sm:block absolute top-1/2 -right-3 z-10 transform -translate-y-1/2">
                      {i % 2 === 0 && <ArrowRight className="w-5 h-5 text-slate-300 dark:text-slate-600" />}
                    </div>
                  )}
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 ${s.color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Step {s.step}</div>
                      <h3 className="text-lg font-extrabold text-slate-900 dark:text-white mb-1">{s.title}</h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ── Section 4: 18 Features ── */}
        <section id="features" ref={el => sectionRefs.current['features'] = el}>
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-purple-100 dark:bg-purple-950/40 text-purple-700 dark:text-purple-400 border border-purple-200 dark:border-purple-800 mb-3">
              <Grid3x3 className="w-3.5 h-3.5" /> 18 Feature Modules
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-3">
              Everything agriculture needs, in one place
            </h2>
            <p className="text-lg text-slate-500 dark:text-slate-400">Each module is tailored to your role. Click any to explore.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
            {MODULES_LIST.map((m) => {
              const Icon = m.icon;
              return (
                <button
                  key={m.id}
                  onClick={() => navigateToModule(m.id)}
                  className={`group p-4 rounded-2xl ${m.bg} border border-slate-200 dark:border-slate-800 text-left hover:shadow-md hover:-translate-y-0.5 transition-all`}
                >
                  <Icon className={`w-7 h-7 ${m.color} mb-3 group-hover:scale-110 transition-transform`} />
                  <div className="font-extrabold text-sm text-slate-900 dark:text-white mb-1">{m.title}</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{m.desc}</div>
                </button>
              );
            })}
          </div>
        </section>

        {/* ── Section 5: Main Goal ── */}
        <section id="goal" ref={el => sectionRefs.current['goal'] = el}>
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-600/10 via-transparent to-transparent" />
            <div className="relative z-10 text-center max-w-2xl mx-auto">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 mb-4">
                <Target className="w-3.5 h-3.5" /> Our Mission
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-6">
                Right information. Right inputs. Right buyers. Right time.
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                For <span className="text-emerald-400 font-bold">every farmer</span>, in every village, regardless of literacy, connectivity, or landholding size — CropCare ensures equal access to the tools and knowledge that make farming a dignified, profitable livelihood.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {['Right Information', 'Right Inputs', 'Right Buyers', 'Right Time'].map((g, i) => (
                  <div key={i} className="px-3 py-4 rounded-2xl bg-white/10 border border-white/10">
                    <div className="text-2xl mb-1">{['📚', '🌱', '🤝', '⏰'][i]}</div>
                    <div className="font-bold text-sm text-white">{g}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Section 6: Impact ── */}
        <section id="impact" ref={el => sectionRefs.current['impact'] = el}>
          <div className="mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 border border-amber-200 dark:border-amber-800 mb-3">
              <TrendingUp className="w-3.5 h-3.5" /> Impact
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-2">
              Real results, proven at scale
            </h2>
            <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5 text-sm">
              <span className="px-2 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-700 dark:text-amber-400 text-xs font-bold border border-amber-200 dark:border-amber-800">Demo Data</span>
              Simulated figures based on industry benchmarks. Actual results may vary.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {IMPACT_STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className={`p-5 rounded-2xl ${stat.bg} border border-slate-200 dark:border-slate-800 text-center`}>
                  <Icon className={`w-7 h-7 ${stat.color} mx-auto mb-3`} />
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>
                    <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                  </div>
                  <div className="text-xs font-bold text-slate-600 dark:text-slate-300">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-gradient-to-r from-emerald-700 to-green-600 text-white text-center">
            <h3 className="text-2xl font-extrabold mb-3">Ready to transform your farm?</h3>
            <p className="text-emerald-100 mb-6">Join thousands of farmers already using CropCare.</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <button
                onClick={() => setActiveNav('dashboard')}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white text-emerald-800 font-extrabold hover:bg-emerald-50 transition-colors shadow-lg"
              >
                Go to Dashboard <ArrowRight className="w-4 h-4" />
              </button>
              <a
                href="https://github.com/hawk5637/cropcare"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-900/80 hover:bg-emerald-950 text-white font-extrabold transition-colors border border-white/20 shadow-lg"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub Repository</span>
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
