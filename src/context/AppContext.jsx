import React, { createContext, useContext, useState, useEffect } from 'react';
import { t as translateFn, SUPPORTED_LOCALES } from '../i18n/index.js';

const AppContext = createContext(null);

const DEFAULT_FARM_PROFILE = {
  village: '',
  district: '',
  state: '',
  landSize: '',
  mainCrops: [],
  preferredLanguage: 'en'
};

export function AppProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(() =>
    localStorage.getItem('cropcare_auth') === 'true'
  );
  // Application Flow Step: 'logo' -> 'login' -> 'intro' -> 'main'
  const [flowStep, setFlowStep] = useState('logo');
  const [profileSetupDone, setProfileSetupDone] = useState(() =>
    localStorage.getItem('cropcare_profile_done') === 'true'
  );
  const [farmProfile, setFarmProfile] = useState(() => {
    try {
      const saved = localStorage.getItem('cropcare_farm_profile');
      return saved ? JSON.parse(saved) : DEFAULT_FARM_PROFILE;
    } catch { return DEFAULT_FARM_PROFILE; }
  });
  const [userName, setUserName] = useState(() =>
    localStorage.getItem('cropcare_name') || 'Farmer'
  );
  const [userRole, setUserRole] = useState(() =>
    localStorage.getItem('cropcare_role') || 'farmer'
  );
  const [language, setLanguageState] = useState(() =>
    localStorage.getItem('cropcare_lang') || 'en'
  );
  const [mode, setModeState] = useState(() =>
    localStorage.getItem('cropcare_mode') || 'easy'
  );
  const [theme, setThemeState] = useState(() =>
    localStorage.getItem('cropcare_theme') || 'dark'
  );
  const [fontSize, setFontSizeState] = useState(() =>
    localStorage.getItem('cropcare_fontsize') || 'normal'
  );
  const [highContrast, setHighContrastState] = useState(() =>
    localStorage.getItem('cropcare_highcontrast') === 'true'
  );
  const [activeNav, setActiveNav] = useState('dashboard');
  const [activeModule, setActiveModule] = useState(null); // for 18 modules
  const [activeDashboardTab, setActiveDashboardTab] = useState(() => {
    const role = localStorage.getItem('cropcare_role') || 'farmer';
    if (role === 'buyer') return 'procurement';
    if (role === 'supplier') return 'inventory';
    if (role === 'expert') return 'telemetry';
    return 'overview';
  });
  const [cart, setCart] = useState([]);
  const [notifications, setNotifications] = useState([
    { id: 'n1', type: 'alert', message: 'Rain forecast tomorrow — adjust spray schedule', read: false, time: '10m ago' },
    { id: 'n2', type: 'offer', message: 'New buyer bid: ₹2,580/qtl for your Wheat', read: false, time: '25m ago' },
    { id: 'n3', type: 'info', message: 'Soil moisture at 36% — optimal range', read: true, time: '1h ago' }
  ]);
  const [hasServerApiKey, setHasServerApiKey] = useState(true);
  const [runtimeApiKey, setRuntimeApiKey] = useState(() => {
    const saved = localStorage.getItem('cropcare_runtime_api_key') || import.meta.env.VITE_GEMINI_API_KEY || '';
    return saved && !saved.startsWith('AQ.') ? saved.trim() : '';
  });
  const [expertQueue, setExpertQueue] = useState([]);
  const [isConfigModalOpen, setIsConfigModalOpen] = useState(false);
  const [isIntroModalOpen, setIsIntroModalOpen] = useState(() => {
    return localStorage.getItem('cropcare_auth') === 'true' && !localStorage.getItem('cropcare_intro_seen');
  });
  const [scanHistory, setScanHistory] = useState(() => {
    try {
      const saved = localStorage.getItem('cropcare_scan_history');
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });

  // Sync theme to document element
  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);
    if (theme === 'dark') root.classList.add('dark');
    else root.classList.remove('dark');
    localStorage.setItem('cropcare_theme', theme);
  }, [theme]);

  // Sync font size
  useEffect(() => {
    const root = document.documentElement;
    root.classList.remove('text-sm', 'text-base', 'text-lg');
    if (fontSize === 'small') root.style.fontSize = '14px';
    else if (fontSize === 'large') root.style.fontSize = '18px';
    else root.style.fontSize = '16px';
    localStorage.setItem('cropcare_fontsize', fontSize);
  }, [fontSize]);

  // Sync high contrast
  useEffect(() => {
    const root = document.documentElement;
    if (highContrast) root.classList.add('high-contrast');
    else root.classList.remove('high-contrast');
    localStorage.setItem('cropcare_highcontrast', highContrast);
  }, [highContrast]);

  // Check backend server health
  useEffect(() => {
    async function checkHealth() {
      try {
        const res = await fetch('/api/health');
        if (res.ok) {
          const data = await res.json();
          setHasServerApiKey(data.hasApiKey);
        }
      } catch (err) {
        console.warn('Backend proxy not reachable:', err.message);
      }
    }
    checkHealth();
    const interval = setInterval(checkHealth, 15000);
    return () => clearInterval(interval);
  }, []);

  // Fetch expert queue
  useEffect(() => {
    async function fetchQueue() {
      try {
        const res = await fetch('/api/expert/queue');
        if (res.ok) {
          const data = await res.json();
          if (Array.isArray(data.queue)) setExpertQueue(data.queue);
        }
      } catch (e) { /* ignore */ }
    }
    fetchQueue();
  }, [userRole]);

  const t = (key, params = {}) => translateFn(key, language, params);

  const setLanguage = (newLang) => {
    if (['en', 'hi', 'ta', 'fr'].includes(newLang)) {
      setLanguageState(newLang);
      localStorage.setItem('cropcare_lang', newLang);
    }
  };

  const setMode = (newMode) => {
    if (['easy', 'detailed'].includes(newMode)) {
      setModeState(newMode);
      localStorage.setItem('cropcare_mode', newMode);
    }
  };

  const toggleTheme = () => {
    const nextTheme = theme === 'light' ? 'dark' : 'light';
    setThemeState(nextTheme);
  };

  const setFontSize = (size) => {
    if (['small', 'normal', 'large'].includes(size)) setFontSizeState(size);
  };

  const toggleHighContrast = () => setHighContrastState(prev => !prev);

  const replayLogo = () => setFlowStep('logo');
  const replayIntro = () => setFlowStep('intro');

  const login = (role, name) => {
    const finalRole = role || 'farmer';
    const fallbackName = finalRole === 'farmer' ? 'Kisan Mitra' : finalRole === 'buyer' ? 'AgriProcure' : finalRole === 'supplier' ? 'AgroMech Spares' : 'Agronomist';
    const finalName = (name || '').trim() || fallbackName;
    setUserRole(finalRole);
    setUserName(finalName);
    setIsAuthenticated(true);
    setProfileSetupDone(true);
    localStorage.setItem('cropcare_auth', 'true');
    localStorage.setItem('cropcare_profile_done', 'true');
    localStorage.setItem('cropcare_role', finalRole);
    localStorage.setItem('cropcare_name', finalName);

    if (finalRole === 'buyer') setActiveDashboardTab('procurement');
    else if (finalRole === 'supplier') setActiveDashboardTab('inventory');
    else if (finalRole === 'expert') setActiveDashboardTab('telemetry');
    else setActiveDashboardTab('overview');

    setActiveNav('dashboard');
    // Progress sequentially into Step 3: Intro
    setFlowStep('intro');
  };

  const completeProfileSetup = (profile) => {
    const updated = { ...DEFAULT_FARM_PROFILE, ...profile };
    setFarmProfile(updated);
    setProfileSetupDone(true);
    localStorage.setItem('cropcare_farm_profile', JSON.stringify(updated));
    localStorage.setItem('cropcare_profile_done', 'true');
    if (profile.preferredLanguage) setLanguage(profile.preferredLanguage);
    setActiveNav('dashboard');
    setFlowStep('main');
  };

  const logout = () => {
    setIsAuthenticated(false);
    setProfileSetupDone(false);
    localStorage.removeItem('cropcare_auth');
    localStorage.removeItem('cropcare_profile_done');
    setFlowStep('login');
  };

  const switchRole = (newRole) => {
    setUserRole(newRole);
    localStorage.setItem('cropcare_role', newRole);
    if (newRole === 'buyer') setActiveDashboardTab('procurement');
    else if (newRole === 'supplier') setActiveDashboardTab('inventory');
    else if (newRole === 'expert') setActiveDashboardTab('telemetry');
    else setActiveDashboardTab('overview');
    setActiveModule(null);
    setActiveNav('dashboard');
  };

  const addToCart = (item) => setCart(prev => [...prev, item]);
  const removeFromCart = (id) => setCart(prev => prev.filter(i => i.id !== id));

  const markNotificationRead = (id) =>
    setNotifications(prev => prev.map(n => n.id === id ? { ...n, read: true } : n));
  const markAllRead = () => setNotifications(prev => prev.map(n => ({ ...n, read: true })));

  const addScanToHistory = (result, imageDataUrl) => {
    const entry = {
      id: `SCAN-${Date.now()}`,
      timestamp: new Date().toISOString(),
      imageUrl: imageDataUrl,
      result
    };
    setScanHistory(prev => {
      const updated = [entry, ...prev].slice(0, 50);
      localStorage.setItem('cropcare_scan_history', JSON.stringify(updated));
      return updated;
    });
  };

  const saveRuntimeApiKey = async (key) => {
    const trimmed = (key || '').trim();
    setRuntimeApiKey(trimmed);
    localStorage.setItem('cropcare_runtime_api_key', trimmed);
    try {
      await fetch('/api/config/key', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ apiKey: trimmed })
      });
      setHasServerApiKey(true);
    } catch (e) {
      console.warn('Failed to notify backend of runtime key:', e);
    }
  };

  const addFeedbackToQueue = async (feedbackData) => {
    try {
      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...feedbackData, farmerName: userName })
      });
      if (res.ok) {
        const data = await res.json();
        setExpertQueue(prev => [data.item, ...prev]);
      }
    } catch (e) { console.error('Failed to submit feedback:', e); }
  };

  const reviewQueueItem = async (id, status, expertNotes) => {
    try {
      const res = await fetch(`/api/expert/review/${id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, expertNotes })
      });
      if (res.ok) {
        setExpertQueue(prev =>
          prev.map(item => item.id === id ? { ...item, status, expertNotes } : item)
        );
      }
    } catch (e) { console.error('Failed to update review item:', e); }
  };

  const navigateToModule = (moduleId) => {
    setActiveModule(moduleId);
    setActiveNav('module');
  };

  return (
    <AppContext.Provider
      value={{
        isAuthenticated, profileSetupDone, farmProfile,
        userName, userRole,
        language, mode, theme, fontSize, highContrast,
        activeNav, activeModule, activeDashboardTab,
        cart, cartCount: cart.length, notifications,
        unreadCount: notifications.filter(n => !n.read).length,
        hasServerApiKey: hasServerApiKey || !!runtimeApiKey,
        runtimeApiKey, expertQueue, isConfigModalOpen, isIntroModalOpen, setIsIntroModalOpen,
        scanHistory, SUPPORTED_LOCALES,
        t, setLanguage, setMode, theme, setTheme: (val) => setThemeState(val), toggleTheme, setFontSize, toggleHighContrast,
        setActiveNav, setActiveModule, navigateToModule, setActiveDashboardTab,
        flowStep, setFlowStep, replayLogo, replayIntro,
        login, logout, completeProfileSetup, switchRole,
        addToCart, removeFromCart,
        markNotificationRead, markAllRead,
        addScanToHistory, saveRuntimeApiKey, setIsConfigModalOpen,
        addFeedbackToQueue, reviewQueueItem
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
}
