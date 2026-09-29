// Frontend mirror of Farm Advisor project data & context helper
export { APP_NAME, PROJECT_DATA, buildFarmAdvisorPrompt } from '../../api/_advisorContext.js';

export const STARTER_QUESTIONS = [
  {
    id: "q-why-crop",
    text: "Why was this crop recommended?",
    icon: "🌱",
    category: "Crop Choice"
  },
  {
    id: "q-soil-factors",
    text: "How do my soil moisture and NPK affect this crop?",
    icon: "🧪",
    category: "Soil & Nutrients"
  },
  {
    id: "q-water-fert",
    text: "What water and fertilizer schedule should I follow now?",
    icon: "💧",
    category: "Irrigation & Fertigation"
  }
];
