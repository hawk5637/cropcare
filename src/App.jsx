import React from 'react';
import { useApp } from './context/AppContext';
import Header from './components/Header.jsx';
import LoginScreen from './components/LoginScreen.jsx';
import FarmerDashboard from './components/dashboards/FarmerDashboard.jsx';
import BuyerDashboard from './components/dashboards/BuyerDashboard.jsx';
import SupplierDashboard from './components/dashboards/SupplierDashboard.jsx';
import ExpertDashboard from './components/dashboards/ExpertDashboard.jsx';
import LeafScanner from './components/LeafScanner.jsx';
import CatalogSection from './components/CatalogSection.jsx';
import ChatbotWidget from './components/ChatbotWidget.jsx';
import ApiKeyModal from './components/ApiKeyModal.jsx';
import AboutCropCare from './components/AboutCropCare.jsx';
import ProfileSetup from './components/ProfileSetup.jsx';
import ModulesHub from './components/ModulesHub.jsx';
import PlatformIntroModal from './components/PlatformIntroModal.jsx';

// All 18 modules
import LandSoilModule from './components/modules/LandSoilModule.jsx';
import SeedModule from './components/modules/SeedModule.jsx';
import CropPlanningModule from './components/modules/CropPlanningModule.jsx';
import WaterModule from './components/modules/WaterModule.jsx';
import FertilizerModule from './components/modules/FertilizerModule.jsx';
import PestDiseaseModule from './components/modules/PestDiseaseModule.jsx';
import WeatherModule from './components/modules/WeatherModule.jsx';
import MachineryModule from './components/modules/MachineryModule.jsx';
import ExpertSupportModule from './components/modules/ExpertSupportModule.jsx';
import FarmManagementModule from './components/modules/FarmManagementModule.jsx';
import MarketModule from './components/modules/MarketModule.jsx';
import BuyerManagementModule from './components/modules/BuyerManagementModule.jsx';
import StorageModule from './components/modules/StorageModule.jsx';
import LogisticsModule from './components/modules/LogisticsModule.jsx';
import PaymentModule from './components/modules/PaymentModule.jsx';
import AfterSellingModule from './components/modules/AfterSellingModule.jsx';
import AccessibilityModule from './components/modules/AccessibilityModule.jsx';
import FarmAdvisorModule from './components/modules/FarmAdvisorModule.jsx';
import WhatIfSimulatorModule from './components/modules/WhatIfSimulatorModule.jsx';
import ResourceBudgetModule from './components/modules/ResourceBudgetModule.jsx';

const MODULE_MAP = {
  'land-soil': LandSoilModule,
  'seed': SeedModule,
  'crop-planning': CropPlanningModule,
  'ai-assistant': FarmAdvisorModule,
  'farm-advisor': FarmAdvisorModule,
  'what-if-simulator': WhatIfSimulatorModule,
  'resource-budget': ResourceBudgetModule,
  'budget-planner': ResourceBudgetModule,
  'water': WaterModule,
  'fertilizer': FertilizerModule,
  'pest-disease': PestDiseaseModule,
  'weather': WeatherModule,
  'machinery': MachineryModule,
  'expert-support': ExpertSupportModule,
  'farm-management': FarmManagementModule,
  'market': MarketModule,
  'buyer-management': BuyerManagementModule,
  'storage': StorageModule,
  'logistics': LogisticsModule,
  'payment': PaymentModule,
  'after-selling': AfterSellingModule,
  'accessibility': AccessibilityModule
};

export default function App() {
  const { 
    isAuthenticated, 
    userRole, 
    activeNav, 
    setActiveNav, 
    activeModule, 
    profileSetupDone,
    isIntroModalOpen,
    setIsIntroModalOpen
  } = useApp();

  if (!isAuthenticated) {
    return (
      <>
        <LoginScreen />
        <ApiKeyModal />
      </>
    );
  }

  // Show profile setup on first login
  if (isAuthenticated && !profileSetupDone) {
    return (
      <>
        <ProfileSetup />
        <ApiKeyModal />
      </>
    );
  }

  const renderActiveView = () => {
    // Module view
    if (activeNav === 'module' && activeModule) {
      const ModuleComponent = MODULE_MAP[activeModule];
      if (ModuleComponent) {
        return (
          <div className="space-y-4">
            <button
              onClick={() => setActiveNav('modules')}
              className="flex items-center gap-1.5 text-sm font-semibold text-slate-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              ← Back to Modules
            </button>
            <ModuleComponent />
          </div>
        );
      }
    }

    if (activeNav === 'modules') return <ModulesHub />;
    if (activeNav === 'scanner') return <LeafScanner />;
    if (activeNav === 'catalog') return <CatalogSection />;
    if (activeNav === 'about') return <AboutCropCare />;

    // Role-based dynamic dashboard (default)
    switch (userRole) {
      case 'buyer':    return <BuyerDashboard />;
      case 'supplier': return <SupplierDashboard />;
      case 'expert':   return <ExpertDashboard />;
      case 'farmer':
      default:         return <FarmerDashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 flex flex-col transition-colors duration-200">
      <Header />
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-6">
        {renderActiveView()}
      </main>
      <PlatformIntroModal 
        isOpen={isIntroModalOpen} 
        onClose={() => setIsIntroModalOpen(false)} 
      />
      <ChatbotWidget />
      <ApiKeyModal />
    </div>
  );
}
