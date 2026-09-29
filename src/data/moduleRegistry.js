// Module Registry — maps moduleId to role access and module component
// Roles: 'farmer' | 'buyer' | 'supplier' | 'expert'

export const MODULE_REGISTRY = [
  { id: 'land-soil',        roles: ['farmer', 'expert'],            title: { en: 'Land & Soil', hi: 'भूमि और मिट्टी', ta: 'நிலம் & மண்', fr: 'Terre & Sol' } },
  { id: 'seed',             roles: ['farmer', 'supplier'],          title: { en: 'Seed', hi: 'बीज', ta: 'விதை', fr: 'Semences' } },
  { id: 'crop-planning',    roles: ['farmer'],                      title: { en: 'Crop Planning', hi: 'फसल योजना', ta: 'பயிர் திட்டமிடல்', fr: 'Planification' } },
  { id: 'resource-budget',  roles: ['farmer', 'expert'],            title: { en: 'Resource Budget Planner', hi: 'संसाधन बजट योजना', ta: 'வள பட்ஜெட் திட்டமிடல்', fr: 'Planificateur de Budget' } },
  { id: 'what-if-simulator', roles: ['farmer', 'expert'],           title: { en: 'What-If Farm Simulator', hi: 'व्हाट-इफ फार्म सिम्युलेटर', ta: 'பண்ணை உருவகப்படுத்துதல்', fr: 'Simulateur Agricole' } },
  { id: 'ai-assistant',     roles: ['farmer', 'buyer', 'supplier', 'expert'], title: { en: 'Farm Advisor AI', hi: 'फार्म एडवाइजर AI', ta: 'பண்ணை ஆலோசகர் AI', fr: 'Conseiller Agricole IA' } },
  { id: 'water',            roles: ['farmer'],                      title: { en: 'Water', hi: 'सिंचाई', ta: 'நீர் பாசனம்', fr: 'Eau' } },
  { id: 'fertilizer',       roles: ['farmer', 'expert'],            title: { en: 'Fertilizer & Nutrients', hi: 'खाद और पोषण', ta: 'உரம் & ஊட்டச்சத்து', fr: 'Fertilisant' } },
  { id: 'pest-disease',     roles: ['farmer', 'expert'],            title: { en: 'Pest & Disease', hi: 'कीट और रोग', ta: 'பூச்சி & நோய்', fr: 'Ravageurs' } },
  { id: 'weather',          roles: ['farmer', 'buyer', 'supplier', 'expert'], title: { en: 'Weather', hi: 'मौसम', ta: 'வானிலை', fr: 'Météo' } },
  { id: 'machinery',        roles: ['farmer', 'supplier'],          title: { en: 'Machinery & Labour', hi: 'मशीनरी', ta: 'இயந்திரம்', fr: 'Machines' } },
  { id: 'expert-support',   roles: ['farmer', 'expert'],            title: { en: 'Expert Support', hi: 'विशेषज्ञ सहायता', ta: 'நிபுணர் ஆதரவு', fr: 'Expert' } },
  { id: 'farm-management',  roles: ['farmer'],                      title: { en: 'Farm Management', hi: 'खेत प्रबंधन', ta: 'பண்ணை மேலாண்மை', fr: 'Gestion Ferme' } },
  { id: 'market',           roles: ['farmer', 'buyer'],             title: { en: 'Market', hi: 'बाजार', ta: 'சந்தை', fr: 'Marché' } },
  { id: 'buyer-management', roles: ['farmer', 'buyer'],             title: { en: 'Buyer Management', hi: 'खरीददार प्रबंधन', ta: 'வாங்குபவர் மேலாண்மை', fr: 'Acheteurs' } },
  { id: 'storage',          roles: ['farmer', 'buyer'],             title: { en: 'Storage', hi: 'भंडारण', ta: 'சேமிப்பு', fr: 'Stockage' } },
  { id: 'logistics',        roles: ['farmer', 'buyer', 'supplier'], title: { en: 'Logistics', hi: 'लॉजिस्टिक्स', ta: 'தளவாடங்கள்', fr: 'Logistique' } },
  { id: 'payment',          roles: ['farmer', 'buyer', 'supplier', 'expert'], title: { en: 'Payment', hi: 'भुगतान', ta: 'கட்டணம்', fr: 'Paiement' } },
  { id: 'after-selling',    roles: ['farmer', 'buyer'],             title: { en: 'After Selling', hi: 'बिक्री के बाद', ta: 'விற்பனைக்கு பிறகு', fr: 'Après vente' } },
  { id: 'accessibility',    roles: ['farmer', 'buyer', 'supplier', 'expert'], title: { en: 'Accessibility', hi: 'पहुंच', ta: 'அணுகல்', fr: 'Accessibilité' } }
];

export function getModuleTitle(id, lang = 'en') {
  const m = MODULE_REGISTRY.find(m => m.id === id);
  return m ? (m.title[lang] || m.title.en) : id;
}

export function hasModuleAccess(id, role) {
  const m = MODULE_REGISTRY.find(m => m.id === id);
  return m ? m.roles.includes(role) : false;
}
