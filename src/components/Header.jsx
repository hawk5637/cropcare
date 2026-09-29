import React, { useState, useRef, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { 
  Sprout, 
  Sun, 
  Moon, 
  Globe, 
  Check, 
  ChevronDown, 
  ShoppingBag, 
  Key, 
  User, 
  LogOut, 
  Sparkles,
  LayoutDashboard,
  Camera,
  Layers,
  Grid3x3,
  BookOpen
} from 'lucide-react';

export default function Header() {
  const { 
    userRole, 
    userName, 
    language, 
    setLanguage, 
    mode, 
    setMode, 
    theme, 
    toggleTheme, 
    activeNav, 
    setActiveNav, 
    logout, 
    switchRole, 
    cartCount,
    setIsConfigModalOpen,
    setIsIntroModalOpen,
    SUPPORTED_LOCALES,
    t 
  } = useApp();

  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const langRef = useRef(null);
  const profileRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangMenuOpen(false);
      }
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileMenuOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLocale = SUPPORTED_LOCALES.find(l => l.code === language) || SUPPORTED_LOCALES[0];

  const roleNameMap = {
    farmer: t('auth.roles.farmer.title'),
    buyer: t('auth.roles.buyer.title'),
    supplier: t('auth.roles.supplier.title'),
    expert: t('auth.roles.expert.title')
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md border-b border-emerald-900/10 dark:border-slate-800 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">
          
          {/* Brand Logo & Tagline */}
          <div 
            onClick={() => setActiveNav('dashboard')}
            className="flex items-center gap-3 cursor-pointer group select-none shrink-0"
          >
            <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-emerald-800 via-emerald-700 to-green-600 flex items-center justify-center shadow-md shadow-emerald-800/20 group-hover:scale-105 transition-transform duration-200">
              <Sprout className="w-6 h-6 text-white" />
            </div>
            <div className="hidden xs:block">
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 dark:text-white">
                  {t('app.name')}
                </span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-bold uppercase rounded-md bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800">
                  {roleNameMap[userRole]}
                </span>
              </div>
              <p className="text-[11px] font-medium text-emerald-700 dark:text-emerald-400 truncate max-w-[200px] sm:max-w-none">
                {t('app.tagline')}
              </p>
            </div>
          </div>

          {/* Quick Navigation Tabs (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 p-1 rounded-xl border border-slate-200 dark:border-slate-700/60">
            <button
              onClick={() => setActiveNav('dashboard')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeNav === 'dashboard'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <LayoutDashboard className="w-3.5 h-3.5" />
              <span>{t('header.dashboard')}</span>
            </button>

            <button
              onClick={() => setActiveNav('scanner')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeNav === 'scanner'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Camera className="w-3.5 h-3.5" />
              <span>{t('header.scanner')}</span>
            </button>

            <button
              onClick={() => setActiveNav('catalog')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeNav === 'catalog'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>{t('header.marketplace')}</span>
            </button>

            <button
              onClick={() => setActiveNav('modules')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeNav === 'modules'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <Grid3x3 className="w-3.5 h-3.5" />
              <span>Modules</span>
            </button>

            <button
              onClick={() => setActiveNav('about')}
              className={`flex items-center gap-2 px-3 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeNav === 'about'
                  ? 'bg-white dark:bg-slate-700 text-emerald-700 dark:text-emerald-400 shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              <BookOpen className="w-3.5 h-3.5" />
              <span>About</span>
            </button>

            <button
              onClick={() => setIsIntroModalOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold rounded-lg text-emerald-800 dark:text-emerald-200 bg-emerald-100/80 dark:bg-emerald-950/80 hover:bg-emerald-200 dark:hover:bg-emerald-900 border border-emerald-300 dark:border-emerald-800 transition-all shadow-sm cursor-pointer hover:scale-105 active:scale-95"
              title="Replay animated platform tour"
            >
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>Tour</span>
            </button>
          </nav>

          {/* Right Header Actions */}
          <div className="flex items-center gap-1.5 sm:gap-2">

            {/* Easy Mode vs Detailed Mode Toggle */}
            <div className="hidden lg:flex items-center bg-slate-100 dark:bg-slate-800 p-0.5 rounded-lg border border-slate-200 dark:border-slate-700 text-xs">
              <button
                onClick={() => setMode('easy')}
                title={t('header.modes.easyDesc')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                  mode === 'easy'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                🍃 {t('header.modes.easyShort')}
              </button>
              <button
                onClick={() => setMode('detailed')}
                title={t('header.modes.detailedDesc')}
                className={`px-2.5 py-1 rounded-md font-semibold transition-all ${
                  mode === 'detailed'
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
                }`}
              >
                🔬 {t('header.modes.detailedShort')}
              </button>
            </div>

            {/* CRITICAL: Prominent Language Selector (Desktop & Mobile ALWAYS Visible) */}
            <div className="relative" ref={langRef}>
              <button
                type="button"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
                className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-emerald-50 dark:bg-slate-800 border border-emerald-300 dark:border-slate-700 text-emerald-900 dark:text-emerald-300 font-bold text-xs hover:bg-emerald-100 dark:hover:bg-slate-700 transition-colors shadow-sm"
                aria-label={t('header.languageLabel')}
              >
                <span className="text-sm">{currentLocale.flag}</span>
                <span className="hidden sm:inline">{currentLocale.native}</span>
                <span className="sm:hidden uppercase">{currentLocale.code}</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform ${langMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {langMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-44 bg-white dark:bg-slate-800 rounded-xl shadow-xl border border-slate-200 dark:border-slate-700 py-1.5 z-50 animate-in fade-in zoom-in-95 duration-100">
                  <div className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400 border-b border-slate-100 dark:border-slate-700/60 mb-1">
                    {t('header.languageLabel')}
                  </div>
                  {SUPPORTED_LOCALES.map((loc) => (
                    <button
                      key={loc.code}
                      onClick={() => {
                        setLanguage(loc.code);
                        setLangMenuOpen(false);
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-xs font-semibold text-left transition-colors ${
                        language === loc.code
                          ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400'
                          : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700/50'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <span>{loc.flag}</span>
                        <span>{loc.native}</span>
                        <span className="text-[10px] text-slate-400">({loc.code.toUpperCase()})</span>
                      </div>
                      {language === loc.code && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Theme Toggle (Light / Dark) */}
            <button
              onClick={toggleTheme}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border font-bold text-xs transition-all shadow-sm ${
                theme === 'dark'
                  ? 'bg-slate-800 text-amber-300 border-slate-700 hover:bg-slate-700'
                  : 'bg-amber-50 text-amber-800 border-amber-300 hover:bg-amber-100'
              }`}
              title={theme === 'light' ? 'Switch to Dark Mode' : 'Switch to Light Mode'}
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-indigo-400 fill-indigo-400/20" />
                  <span className="hidden sm:inline">Dark</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-amber-500 fill-amber-500/20" />
                  <span className="hidden sm:inline">Light</span>
                </>
              )}
            </button>

            {/* Cart Pill */}
            <button
              onClick={() => setActiveNav('catalog')}
              className="relative p-2 rounded-lg text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
              title="Cart"
            >
              <ShoppingBag className="w-4 h-4" />
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[10px] font-extrabold flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* User Profile & Role Dropdown */}
            <div className="relative" ref={profileRef}>
              <button
                onClick={() => setProfileMenuOpen(!profileMenuOpen)}
                className="flex items-center gap-2 pl-1.5 pr-2 py-1 rounded-full border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
              >
                <div className="w-7 h-7 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center uppercase shadow-sm">
                  {userName.charAt(0) || 'U'}
                </div>
                <span className="hidden sm:inline text-xs font-bold text-slate-800 dark:text-slate-200 max-w-[100px] truncate">
                  {userName}
                </span>
                <ChevronDown className="w-3 h-3 text-slate-400" />
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 mt-1.5 w-60 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-700 p-2 z-50">
                  <div className="p-3 bg-emerald-50 dark:bg-slate-900 rounded-xl mb-2">
                    <p className="font-bold text-sm text-slate-900 dark:text-white truncate">{userName}</p>
                    <p className="text-xs text-emerald-700 dark:text-emerald-400 font-semibold">{roleNameMap[userRole]}</p>
                    <div className="mt-1 flex items-center gap-1 text-[11px] text-slate-500">
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>{t('header.profile.verified')}</span>
                    </div>
                  </div>

                  {/* Role Switcher */}
                  <div className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-slate-400">
                    {t('header.profile.switchRole')}
                  </div>
                  <div className="grid grid-cols-2 gap-1 mb-2">
                    {['farmer', 'buyer', 'supplier', 'expert'].map((r) => (
                      <button
                        key={r}
                        onClick={() => {
                          switchRole(r);
                          setProfileMenuOpen(false);
                        }}
                        className={`px-2 py-1.5 text-xs font-semibold rounded-lg text-left transition-all ${
                          userRole === r
                            ? 'bg-emerald-600 text-white font-bold'
                            : 'bg-slate-50 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 hover:bg-slate-100'
                        }`}
                      >
                        {r === 'farmer' && '🌾 ' + t('auth.roles.farmer.title').split('/')[0]}
                        {r === 'buyer' && '🏢 ' + t('auth.roles.buyer.title').split('/')[0]}
                        {r === 'supplier' && '⚙️ ' + t('auth.roles.supplier.title').split('/')[0]}
                        {r === 'expert' && '🔬 ' + t('auth.roles.expert.title').split('/')[0]}
                      </button>
                    ))}
                  </div>

                  <div className="border-t border-slate-100 dark:border-slate-700 my-1"></div>

                  <button
                    onClick={() => {
                      setIsConfigModalOpen(true);
                      setProfileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg text-left transition-colors"
                  >
                    <Key className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{t('header.profile.settings')}</span>
                  </button>

                  <button
                    onClick={() => {
                      logout();
                      setProfileMenuOpen(false);
                    }}
                    className="w-full flex items-center gap-2 px-3 py-2 text-xs font-bold text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 rounded-lg text-left transition-colors"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                    <span>{t('header.profile.signOut')}</span>
                  </button>
                </div>
              )}
            </div>

          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation Bar */}
      <div className="md:hidden flex items-center justify-around bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-2 px-1">
        <button
          onClick={() => setActiveNav('dashboard')}
          className={`flex flex-col items-center gap-1 text-[11px] font-semibold py-1 px-3 rounded-lg ${
            activeNav === 'dashboard' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'
          }`}
        >
          <LayoutDashboard className="w-4 h-4" />
          <span>{t('header.dashboard')}</span>
        </button>

        <button
          onClick={() => setActiveNav('scanner')}
          className={`flex flex-col items-center gap-1 text-[11px] font-semibold py-1 px-3 rounded-lg ${
            activeNav === 'scanner' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'
          }`}
        >
          <Camera className="w-4 h-4" />
          <span>{t('header.scanner')}</span>
        </button>

        <button
          onClick={() => setActiveNav('catalog')}
          className={`flex flex-col items-center gap-1 text-[11px] font-semibold py-1 px-3 rounded-lg ${
            activeNav === 'catalog' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'
          }`}
        >
          <Layers className="w-4 h-4" />
          <span>Market</span>
        </button>

        <button
          onClick={() => setActiveNav('modules')}
          className={`flex flex-col items-center gap-1 text-[11px] font-semibold py-1 px-3 rounded-lg ${
            activeNav === 'modules' ? 'text-emerald-700 dark:text-emerald-400 font-bold' : 'text-slate-500'
          }`}
        >
          <Grid3x3 className="w-4 h-4" />
          <span>Modules</span>
        </button>

        <button
          onClick={() => setMode(mode === 'easy' ? 'detailed' : 'easy')}
          className="flex flex-col items-center gap-1 text-[11px] font-semibold py-1 px-3 text-slate-500"
        >
          <span className="text-sm">{mode === 'easy' ? '🍃' : '🔬'}</span>
          <span>{mode === 'easy' ? t('header.modes.easyShort') : t('header.modes.detailedShort')}</span>
        </button>
      </div>
    </header>
  );
}
