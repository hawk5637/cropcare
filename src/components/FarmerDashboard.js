// Re-export role-based dynamic dashboard engine
import { renderRoleDashboard } from './RoleDashboard.js';

export function renderFarmerDashboard(
  activeTab = 'overview', 
  mandiSearch = '', 
  selectedDiagnosticSampleId = 'sample-wheat-rust', 
  currentLang = 'en', 
  understandingMode = 'easy',
  userName = '',
  userRole = 'farmer',
  customFarmData = null,
  customMandiData = null
) {
  return renderRoleDashboard(
    activeTab,
    mandiSearch,
    selectedDiagnosticSampleId,
    currentLang,
    understandingMode,
    userName,
    userRole,
    customFarmData,
    customMandiData
  );
}

export { renderRoleDashboard };
