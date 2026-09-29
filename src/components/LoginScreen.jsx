import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';
import { 
  Sprout, 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Sun, 
  Moon, 
  Globe, 
  Check, 
  Tractor, 
  ShoppingBag, 
  Wrench, 
  Microscope,
  Key
} from 'lucide-react';

export default function LoginScreen({ onLoginSuccess }) {
  const { 
    login, 
    language, 
    setLanguage, 
    theme, 
    toggleTheme, 
    SUPPORTED_LOCALES,
    setIsConfigModalOpen,
    t 
  } = useApp();

  const [selectedRole, setSelectedRole] = useState('farmer');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [isVerifying, setIsVerifying] = useState(false);

  const roles = [
    {
      id: 'farmer',
      icon: Tractor,
      title: t('auth.roles.farmer.title'),
      desc: t('auth.roles.farmer.desc'),
      badge: 'e-NAM Kisan',
      gradient: 'from-emerald-700 to-green-600',
      demoName: 'Ramesh Patel'
    },
    {
      id: 'buyer',
      icon: ShoppingBag,
      title: t('auth.roles.buyer.title'),
      desc: t('auth.roles.buyer.desc'),
      badge: 'APMC Wholesaler',
      gradient: 'from-amber-600 to-yellow-600',
      demoName: 'Rajesh Agrotech Corp'
    },
    {
      id: 'supplier',
      icon: Wrench,
      title: t('auth.roles.supplier.title'),
      desc: t('auth.roles.supplier.desc'),
      badge: 'OEM Partner',
      gradient: 'from-blue-700 to-cyan-600',
      demoName: 'Punjab Kisan Spares'
    },
    {
      id: 'expert',
      icon: Microscope,
      title: t('auth.roles.expert.title'),
      desc: t('auth.roles.expert.desc'),
      badge: 'ICAR Agronomist',
      gradient: 'from-purple-700 to-indigo-600',
      demoName: 'Dr. Gurpreet PAU'
    }
  ];

  const handleDemoLogin = () => {
    const curRole = roles.find(r => r.id === selectedRole) || roles[0];
    setName(curRole.demoName);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
    login(selectedRole, curRole.demoName);
    if (onLoginSuccess) onLoginSuccess();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsVerifying(true);
    setTimeout(() => {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.6 }
      });
      login(selectedRole, name);
      setIsVerifying(false);
      if (onLoginSuccess) onLoginSuccess();
    }, 400);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-950 via-slate-900 to-emerald-900 text-white flex flex-col justify-between p-4 sm:p-6 lg:p-8 relative overflow-hidden">
      
      {/* Background Decorative Rings */}
      <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-emerald-600/10 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-green-500/10 blur-3xl pointer-events-none"></div>

      {/* Top Utility Bar on Login */}
      <div className="max-w-5xl mx-auto w-full flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-green-400 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <Sprout className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-extrabold text-xl tracking-tight text-white">{t('app.name')}</h1>
            <p className="text-xs text-emerald-400 font-medium">{t('app.tagline')}</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Prominent Language Switcher */}
          <div className="flex items-center bg-white/10 backdrop-blur-md rounded-xl p-1 border border-white/15">
            {SUPPORTED_LOCALES.map((loc) => (
              <button
                key={loc.code}
                onClick={() => setLanguage(loc.code)}
                className={`px-2.5 py-1 text-xs font-bold rounded-lg transition-all ${
                  language === loc.code
                    ? 'bg-emerald-500 text-white shadow-sm'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                <span>{loc.flag}</span>
                <span className="hidden sm:inline ml-1">{loc.code.toUpperCase()}</span>
              </button>
            ))}
          </div>

          {/* Quick API Key Settings */}
          <button
            onClick={() => setIsConfigModalOpen(true)}
            className="p-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white/80 transition-colors"
            title="Configure Gemini API Key"
          >
            <Key className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Login Card */}
      <div className="max-w-2xl mx-auto w-full my-8 z-10">
        <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl rounded-3xl p-6 sm:p-10 shadow-2xl border border-white/20 dark:border-slate-800 text-slate-900 dark:text-white transition-all">
          
          <div className="text-center mb-8">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('auth.subtitle')}</span>
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              {t('auth.title')}
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              {t('app.subTagline')}
            </p>
          </div>

          {/* Role Tabs */}
          <div className="mb-6">
            <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2.5">
              {t('auth.roleSelectLabel')}
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {roles.map((r) => {
                const Icon = r.icon;
                const isSelected = selectedRole === r.id;
                return (
                  <button
                    key={r.id}
                    type="button"
                    onClick={() => {
                      setSelectedRole(r.id);
                      setName(r.demoName);
                    }}
                    className={`p-3 rounded-2xl border text-left transition-all relative overflow-hidden group ${
                      isSelected
                        ? 'border-emerald-600 bg-emerald-50/80 dark:bg-emerald-950/40 shadow-md ring-2 ring-emerald-500/20'
                        : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                    }`}
                  >
                    <div className={`w-8 h-8 rounded-xl bg-gradient-to-tr ${r.gradient} flex items-center justify-center text-white mb-2 shadow-sm`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="font-bold text-xs leading-tight text-slate-900 dark:text-white">
                      {r.title.split('/')[0]}
                    </div>
                    <div className="text-[10px] text-emerald-700 dark:text-emerald-400 font-semibold mt-0.5">
                      {r.badge}
                    </div>
                  </button>
                );
              })}
            </div>
            
            {/* Role Detailed Description Box */}
            <div className="mt-3 p-3 rounded-xl bg-slate-100/70 dark:bg-slate-800/70 text-xs text-slate-600 dark:text-slate-300 border border-slate-200/60 dark:border-slate-700/60">
              <strong className="text-emerald-700 dark:text-emerald-400 font-semibold">
                {roles.find(r => r.id === selectedRole)?.title}:
              </strong>{' '}
              {roles.find(r => r.id === selectedRole)?.desc}
            </div>
          </div>

          {/* Form Inputs */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                {t('auth.nameLabel')}
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t('auth.namePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-1.5">
                {t('auth.phoneLabel')}
              </label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t('auth.phonePlaceholder')}
                className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 font-semibold text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 text-slate-900 dark:text-white"
              />
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={handleDemoLogin}
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-100 hover:bg-emerald-200 dark:bg-emerald-950 dark:hover:bg-emerald-900 text-emerald-800 dark:text-emerald-300 font-extrabold text-sm border border-emerald-300 dark:border-emerald-700 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                <Sparkles className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{t('auth.demoQuickLogin')}</span>
              </button>

              <button
                type="submit"
                disabled={isVerifying}
                className="flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-700 to-green-600 hover:from-emerald-800 hover:to-green-700 text-white font-extrabold text-sm shadow-lg shadow-emerald-700/25 flex items-center justify-center gap-2 transition-all hover:scale-[1.01]"
              >
                {isVerifying ? (
                  <span>{t('auth.verifying')}</span>
                ) : (
                  <>
                    <span>{t('auth.submitLogin')}</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Security Notice */}
          <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center gap-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>{t('auth.securityNotice')}</span>
          </div>

        </div>
      </div>

      {/* Footer Info */}
      <div className="max-w-5xl mx-auto w-full text-center text-xs text-white/60 z-10">
        CropCare Enterprise Agri-Platform • {t('app.demoBadge')} • &copy; 2026
      </div>

    </div>
  );
}
