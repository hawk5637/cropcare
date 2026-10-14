// Smart Animated Produce & Crop Artwork Generator for CropCare
// Provides vibrant, lightweight vector animated illustrations for all vegetables, fruits, crops, and agricultural products.
// Completely replaces real-world photographs with lively CSS-animated SVG artwork.

function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

/**
 * Generates a vibrant, self-contained animated SVG illustration data URI for any produce item.
 * Includes floating bobbing motion, glowing radial aura, twinkling sparkles, and crisp typography.
 */
export function generateAnimatedProduceSvg(name, emoji = '🌱', mainColor = '#15803D') {
  const safeName = (name || 'Fresh Produce').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const id = 'crop_' + hashCode(safeName);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="${id}_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.92"/>
      <stop offset="55%" stop-color="${mainColor}" stop-opacity="0.45"/>
      <stop offset="100%" stop-color="#090d16" stop-opacity="0.96"/>
    </linearGradient>
    <radialGradient id="${id}_glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.75"/>
      <stop offset="65%" stop-color="${mainColor}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}_shadow" x="-25%" y="-25%" width="150%" height="150%">
      <feDropShadow dx="0" dy="12" stdDeviation="14" flood-color="#000000" flood-opacity="0.55"/>
    </filter>
  </defs>
  <style>
    @keyframes floatAnim {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-13px) rotate(2.5deg); }
    }
    @keyframes pulseGlow {
      0%, 100% { transform: scale(0.92); opacity: 0.4; }
      50% { transform: scale(1.18); opacity: 0.85; }
    }
    @keyframes sparkle1 {
      0%, 100% { transform: scale(0.3) rotate(0deg); opacity: 0.2; }
      50% { transform: scale(1.3) rotate(90deg); opacity: 1; }
    }
    @keyframes sparkle2 {
      0%, 100% { transform: scale(1.2) rotate(45deg); opacity: 0.9; }
      50% { transform: scale(0.3) rotate(135deg); opacity: 0.15; }
    }
    .anim-body {
      animation: floatAnim 3.2s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .anim-glow {
      animation: pulseGlow 4s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .anim-sparkle1 {
      animation: sparkle1 2.2s ease-in-out infinite;
      transform-origin: 200px 115px;
    }
    .anim-sparkle2 {
      animation: sparkle2 2.7s ease-in-out infinite;
      transform-origin: 400px 120px;
    }
  </style>
  
  <!-- Background Card -->
  <rect width="100%" height="100%" fill="url(#${id}_bg)" rx="24"/>
  
  <!-- Animated Glow Rings -->
  <circle cx="300" cy="175" r="145" fill="url(#${id}_glow)" class="anim-glow"/>
  <circle cx="300" cy="175" r="100" fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" stroke-dasharray="6 6"/>
  <circle cx="300" cy="175" r="80" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.25)" stroke-width="2"/>

  <!-- Twinkling Sparkles -->
  <g class="anim-sparkle1">
    <path d="M200 105 L203 113 L211 116 L203 119 L200 127 L197 119 L189 116 L197 113 Z" fill="#FDE047"/>
  </g>
  <g class="anim-sparkle2">
    <path d="M400 110 L403 118 L411 121 L403 124 L400 132 L397 124 L389 121 L397 118 Z" fill="#67E8F9"/>
  </g>

  <!-- Shadow Underneath Produce -->
  <ellipse cx="300" cy="252" rx="72" ry="12" fill="rgba(0,0,0,0.38)"/>

  <!-- Floating Produce Illustration -->
  <g class="anim-body" filter="url(#${id}_shadow)">
    <text x="300" y="190" font-size="96" text-anchor="middle" dominant-baseline="central" style="filter: drop-shadow(0 8px 16px rgba(0,0,0,0.35));">${emoji}</text>
  </g>

  <!-- Organic Quality Badge -->
  <rect x="180" y="278" width="240" height="28" rx="14" fill="rgba(0,0,0,0.55)" stroke="rgba(255,255,255,0.25)" stroke-width="1"/>
  <text x="300" y="296" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="11" font-weight="800" fill="#34D399" text-anchor="middle" letter-spacing="1">★ ANIMATED FARM PRODUCE ★</text>

  <!-- Typography -->
  <text x="300" y="342" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="22" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="-0.3">${safeName}</text>
  <text x="300" y="368" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="12" font-weight="600" fill="rgba(255,255,255,0.75)" text-anchor="middle">CropCare 100% Certified Harvest</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

// Master Dictionary of Animated Illustrations for Vegetables, Fruits & Crops
export const VEGETABLE_AND_CROP_IMAGE_MAP = {
  // ─── Vegetables ───────────────────────────────────────
  'tomato': {
    name: 'Tomato',
    emoji: '🍅',
    image: generateAnimatedProduceSvg('Fresh Tomato', '🍅', '#EF4444'),
    color: '#EF4444'
  },
  'potato': {
    name: 'Potato',
    emoji: '🥔',
    image: generateAnimatedProduceSvg('Golden Potato', '🥔', '#D97706'),
    color: '#D97706'
  },
  'onion': {
    name: 'Onion',
    emoji: '🧅',
    image: generateAnimatedProduceSvg('Red Onion', '🧅', '#DC2626'),
    color: '#DC2626'
  },
  'garlic': {
    name: 'Garlic',
    emoji: '🧄',
    image: generateAnimatedProduceSvg('White Garlic', '🧄', '#64748B'),
    color: '#64748B'
  },
  'ginger': {
    name: 'Ginger',
    emoji: '🫚',
    image: generateAnimatedProduceSvg('Fresh Ginger', '🫚', '#B45309'),
    color: '#B45309'
  },
  'chilli': {
    name: 'Chilli (Hot Pepper)',
    emoji: '🌶️',
    image: generateAnimatedProduceSvg('Hot Chilli', '🌶️', '#DC2626'),
    color: '#DC2626'
  },
  'green chilli': {
    name: 'Green Chilli',
    emoji: '🌶️',
    image: generateAnimatedProduceSvg('Green Chilli', '🌶️', '#15803D'),
    color: '#15803D'
  },
  'capsicum': {
    name: 'Capsicum / Bell Pepper',
    emoji: '🫑',
    image: generateAnimatedProduceSvg('Bell Pepper', '🫑', '#16A34A'),
    color: '#16A34A'
  },
  'brinjal': {
    name: 'Brinjal / Eggplant',
    emoji: '🍆',
    image: generateAnimatedProduceSvg('Purple Brinjal', '🍆', '#7C3AED'),
    color: '#7C3AED'
  },
  'eggplant': {
    name: 'Eggplant',
    emoji: '🍆',
    image: generateAnimatedProduceSvg('Eggplant', '🍆', '#7C3AED'),
    color: '#7C3AED'
  },
  'cabbage': {
    name: 'Cabbage',
    emoji: '🥬',
    image: generateAnimatedProduceSvg('Crisp Cabbage', '🥬', '#16A34A'),
    color: '#16A34A'
  },
  'cauliflower': {
    name: 'Cauliflower',
    emoji: '🥦',
    image: generateAnimatedProduceSvg('Cauliflower', '🥦', '#65A30D'),
    color: '#65A30D'
  },
  'okra': {
    name: 'Okra (Bhindi)',
    emoji: '🌿',
    image: generateAnimatedProduceSvg('Fresh Okra', '🌿', '#15803D'),
    color: '#15803D'
  },
  'bhindi': {
    name: 'Bhindi (Okra)',
    emoji: '🌿',
    image: generateAnimatedProduceSvg('Fresh Bhindi', '🌿', '#15803D'),
    color: '#15803D'
  },
  'ladyfinger': {
    name: 'Ladyfinger (Okra)',
    emoji: '🌿',
    image: generateAnimatedProduceSvg('Ladyfinger', '🌿', '#15803D'),
    color: '#15803D'
  },
  'carrot': {
    name: 'Carrot',
    emoji: '🥕',
    image: generateAnimatedProduceSvg('Sweet Carrot', '🥕', '#EA580C'),
    color: '#EA580C'
  },
  'peas': {
    name: 'Green Peas',
    emoji: '🫛',
    image: generateAnimatedProduceSvg('Sweet Green Peas', '🫛', '#16A34A'),
    color: '#16A34A'
  },
  'green peas': {
    name: 'Green Peas',
    emoji: '🫛',
    image: generateAnimatedProduceSvg('Green Peas', '🫛', '#16A34A'),
    color: '#16A34A'
  },
  'cucumber': {
    name: 'Cucumber',
    emoji: '🥒',
    image: generateAnimatedProduceSvg('Crisp Cucumber', '🥒', '#059669'),
    color: '#059669'
  },
  'spinach': {
    name: 'Spinach (Palak)',
    emoji: '🥬',
    image: generateAnimatedProduceSvg('Fresh Spinach', '🥬', '#15803D'),
    color: '#15803D'
  },
  'palak': {
    name: 'Palak (Spinach)',
    emoji: '🥬',
    image: generateAnimatedProduceSvg('Palak', '🥬', '#15803D'),
    color: '#15803D'
  },
  'coriander': {
    name: 'Coriander (Dhaniya)',
    emoji: '🌿',
    image: generateAnimatedProduceSvg('Fresh Coriander', '🌿', '#16A34A'),
    color: '#16A34A'
  },
  'mint': {
    name: 'Mint (Pudina)',
    emoji: '🍃',
    image: generateAnimatedProduceSvg('Fresh Mint', '🍃', '#10B981'),
    color: '#10B981'
  },
  'beetroot': {
    name: 'Beetroot',
    emoji: '🟣',
    image: generateAnimatedProduceSvg('Sweet Beetroot', '🟣', '#BE185D'),
    color: '#BE185D'
  },
  'bitter gourd': {
    name: 'Bitter Gourd (Karela)',
    emoji: '🥒',
    image: generateAnimatedProduceSvg('Bitter Gourd', '🥒', '#15803D'),
    color: '#15803D'
  },
  'karela': {
    name: 'Karela',
    emoji: '🥒',
    image: generateAnimatedProduceSvg('Karela', '🥒', '#15803D'),
    color: '#15803D'
  },
  'bottle gourd': {
    name: 'Bottle Gourd (Lauki)',
    emoji: '🥒',
    image: generateAnimatedProduceSvg('Bottle Gourd', '🥒', '#10B981'),
    color: '#10B981'
  },
  'lauki': {
    name: 'Lauki',
    emoji: '🥒',
    image: generateAnimatedProduceSvg('Lauki', '🥒', '#10B981'),
    color: '#10B981'
  },
  'pumpkin': {
    name: 'Pumpkin',
    emoji: '🎃',
    image: generateAnimatedProduceSvg('Orange Pumpkin', '🎃', '#EA580C'),
    color: '#EA580C'
  },
  'radish': {
    name: 'Radish (Mooli)',
    emoji: '🌱',
    image: generateAnimatedProduceSvg('White Radish', '🌱', '#64748B'),
    color: '#64748B'
  },

  // ─── Fruits ───────────────────────────────────────────
  'mango': {
    name: 'Mango (Alphonso)',
    emoji: '🥭',
    image: generateAnimatedProduceSvg('Alphonso Mango', '🥭', '#F59E0B'),
    color: '#F59E0B'
  },
  'orange': {
    name: 'Orange',
    emoji: '🍊',
    image: generateAnimatedProduceSvg('Nagpur Orange', '🍊', '#EA580C'),
    color: '#EA580C'
  },
  'apple': {
    name: 'Apple',
    emoji: '🍎',
    image: generateAnimatedProduceSvg('Kashmir Apple', '🍎', '#DC2626'),
    color: '#DC2626'
  },
  'banana': {
    name: 'Banana',
    emoji: '🍌',
    image: generateAnimatedProduceSvg('Ripe Banana', '🍌', '#EAB308'),
    color: '#EAB308'
  },
  'grapes': {
    name: 'Grapes',
    emoji: '🍇',
    image: generateAnimatedProduceSvg('Nashik Grapes', '🍇', '#7C3AED'),
    color: '#7C3AED'
  },
  'pomegranate': {
    name: 'Pomegranate (Anar)',
    emoji: '🍎',
    image: generateAnimatedProduceSvg('Bhagwa Pomegranate', '🍎', '#BE123C'),
    color: '#BE123C'
  },
  'anar': {
    name: 'Anar (Pomegranate)',
    emoji: '🍎',
    image: generateAnimatedProduceSvg('Anar', '🍎', '#BE123C'),
    color: '#BE123C'
  },
  'papaya': {
    name: 'Papaya',
    emoji: '🥭',
    image: generateAnimatedProduceSvg('Red Lady Papaya', '🥭', '#F97316'),
    color: '#F97316'
  },
  'guava': {
    name: 'Guava',
    emoji: '🍐',
    image: generateAnimatedProduceSvg('Allahabad Guava', '🍐', '#84CC16'),
    color: '#84CC16'
  },
  'watermelon': {
    name: 'Watermelon',
    emoji: '🍉',
    image: generateAnimatedProduceSvg('Sweet Watermelon', '🍉', '#15803D'),
    color: '#15803D'
  },
  'muskmelon': {
    name: 'Muskmelon',
    emoji: '🍈',
    image: generateAnimatedProduceSvg('Honey Muskmelon', '🍈', '#FBBF24'),
    color: '#FBBF24'
  },
  'strawberry': {
    name: 'Strawberry',
    emoji: '🍓',
    image: generateAnimatedProduceSvg('Sweet Strawberry', '🍓', '#E11D48'),
    color: '#E11D48'
  },
  'lemon': {
    name: 'Lemon',
    emoji: '🍋',
    image: generateAnimatedProduceSvg('Juicy Lemon', '🍋', '#FACC15'),
    color: '#FACC15'
  },
  'pineapple': {
    name: 'Pineapple',
    emoji: '🍍',
    image: generateAnimatedProduceSvg('Sweet Pineapple', '🍍', '#EAB308'),
    color: '#EAB308'
  },
  'coconut': {
    name: 'Coconut',
    emoji: '🥥',
    image: generateAnimatedProduceSvg('Fresh Coconut', '🥥', '#78350F'),
    color: '#78350F'
  },
  'custard apple': {
    name: 'Custard Apple (Sitaphal)',
    emoji: '🍈',
    image: generateAnimatedProduceSvg('Sitaphal', '🍈', '#65A30D'),
    color: '#65A30D'
  },

  // ─── Grains, Spices & Cash Crops ──────────────────────
  'wheat': {
    name: 'Wheat',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Golden Wheat', '🌾', '#D97706'),
    color: '#D97706'
  },
  'rice': {
    name: 'Rice (Paddy)',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Basmati Rice', '🌾', '#EAB308'),
    color: '#EAB308'
  },
  'paddy': {
    name: 'Paddy',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Golden Paddy', '🌾', '#EAB308'),
    color: '#EAB308'
  },
  'maize': {
    name: 'Maize (Corn)',
    emoji: '🌽',
    image: generateAnimatedProduceSvg('Sweet Corn', '🌽', '#EAB308'),
    color: '#EAB308'
  },
  'corn': {
    name: 'Corn',
    emoji: '🌽',
    image: generateAnimatedProduceSvg('Sweet Corn', '🌽', '#EAB308'),
    color: '#EAB308'
  },
  'cotton': {
    name: 'Cotton',
    emoji: '☁️',
    image: generateAnimatedProduceSvg('Raw White Cotton', '☁️', '#0284C7'),
    color: '#0284C7'
  },
  'sugarcane': {
    name: 'Sugarcane',
    emoji: '🎋',
    image: generateAnimatedProduceSvg('Juicy Sugarcane', '🎋', '#16A34A'),
    color: '#16A34A'
  },
  'mustard': {
    name: 'Mustard',
    emoji: '🌼',
    image: generateAnimatedProduceSvg('Yellow Mustard', '🌼', '#EAB308'),
    color: '#EAB308'
  },
  'soybean': {
    name: 'Soybean',
    emoji: '🫘',
    image: generateAnimatedProduceSvg('Nutritious Soybean', '🫘', '#CA8A04'),
    color: '#CA8A04'
  },
  'groundnut': {
    name: 'Groundnut / Peanut',
    emoji: '🥜',
    image: generateAnimatedProduceSvg('Bold Peanut', '🥜', '#92400E'),
    color: '#92400E'
  },
  'peanut': {
    name: 'Peanut',
    emoji: '🥜',
    image: generateAnimatedProduceSvg('Peanut', '🥜', '#92400E'),
    color: '#92400E'
  },
  'chickpea': {
    name: 'Chickpea (Chana)',
    emoji: '🫘',
    image: generateAnimatedProduceSvg('Desi Chana', '🫘', '#D97706'),
    color: '#D97706'
  },
  'chana': {
    name: 'Chana (Gram)',
    emoji: '🫘',
    image: generateAnimatedProduceSvg('Gram', '🫘', '#D97706'),
    color: '#D97706'
  },
  'turmeric': {
    name: 'Turmeric (Haldi)',
    emoji: '🟡',
    image: generateAnimatedProduceSvg('Salem Turmeric', '🟡', '#EAB308'),
    color: '#EAB308'
  },
  'cardamom': {
    name: 'Cardamom (Elaichi)',
    emoji: '🫛',
    image: generateAnimatedProduceSvg('Green Cardamom', '🫛', '#65A30D'),
    color: '#65A30D'
  },
  'black pepper': {
    name: 'Black Pepper',
    emoji: '⚫',
    image: generateAnimatedProduceSvg('Black Pepper', '⚫', '#1F2937'),
    color: '#1F2937'
  },
  'tea': {
    name: 'Tea (Chai)',
    emoji: '🍵',
    image: generateAnimatedProduceSvg('Assam Tea', '🍵', '#15803D'),
    color: '#15803D'
  },
  'coffee': {
    name: 'Coffee',
    emoji: '☕',
    image: generateAnimatedProduceSvg('Arabica Coffee', '☕', '#78350F'),
    color: '#78350F'
  },
  'sunflower': {
    name: 'Sunflower',
    emoji: '🌻',
    image: generateAnimatedProduceSvg('Sunflower', '🌻', '#F59E0B'),
    color: '#F59E0B'
  },
  'tulsi': {
    name: 'Holy Basil (Tulsi)',
    emoji: '🌿',
    image: generateAnimatedProduceSvg('Holy Basil (Tulsi)', '🌿', '#15803D'),
    color: '#15803D'
  },
  'neem': {
    name: 'Neem',
    emoji: '🍃',
    image: generateAnimatedProduceSvg('Organic Neem', '🍃', '#16A34A'),
    color: '#16A34A'
  },
  'rose': {
    name: 'Rose',
    emoji: '🌹',
    image: generateAnimatedProduceSvg('Damask Rose', '🌹', '#E11D48'),
    color: '#E11D48'
  },
  'tractor': {
    name: 'Tractor',
    emoji: '🚜',
    image: generateAnimatedProduceSvg('Power Tractor', '🚜', '#DC2626'),
    color: '#DC2626'
  },
  'harvester': {
    name: 'Combine Harvester',
    emoji: '🚜',
    image: generateAnimatedProduceSvg('Combine Harvester', '🚜', '#D97706'),
    color: '#D97706'
  },
  'drone': {
    name: 'Agri Drone',
    emoji: '🚁',
    image: generateAnimatedProduceSvg('Agri Drone Sprayer', '🚁', '#2563EB'),
    color: '#2563EB'
  },
  'spares': {
    name: 'Agricultural Spares',
    emoji: '⚙️',
    image: generateAnimatedProduceSvg('Machinery Spares', '⚙️', '#475569'),
    color: '#475569'
  },
  'fertilizer': {
    name: 'Fertilizer & Nutrients',
    emoji: '🧪',
    image: generateAnimatedProduceSvg('Bio-Fertilizer', '🧪', '#7C3AED'),
    color: '#7C3AED'
  },
  'pesticide': {
    name: 'Crop Protection',
    emoji: '🛡️',
    image: generateAnimatedProduceSvg('Bio-Pesticide', '🛡️', '#0284C7'),
    color: '#0284C7'
  },
  'basmati': {
    name: 'Pusa Basmati 1121 Rice',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Pusa Basmati 1121', '🌾', '#EAB308'),
    color: '#EAB308'
  },
  'moong': {
    name: 'Green Moong Pulse',
    emoji: '🫛',
    image: generateAnimatedProduceSvg('Green Moong Pulse', '🫛', '#16A34A'),
    color: '#16A34A'
  },
  'greengram': {
    name: 'Green Gram (Moong)',
    emoji: '🫛',
    image: generateAnimatedProduceSvg('Green Gram', '🫛', '#16A34A'),
    color: '#16A34A'
  },
  'bajra': {
    name: 'Pearl Millet (Bajra)',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Pearl Millet (Bajra)', '🌾', '#D97706'),
    color: '#D97706'
  },
  'pearlmillet': {
    name: 'Pearl Millet',
    emoji: '🌾',
    image: generateAnimatedProduceSvg('Pearl Millet', '🌾', '#D97706'),
    color: '#D97706'
  },
  'dragon fruit': {
    name: 'Dragon Fruit (Pitaya)',
    emoji: '🐉',
    image: generateAnimatedProduceSvg('Dragon Fruit (Pitaya)', '🐉', '#E11D48'),
    color: '#E11D48'
  },
  'urea': {
    name: 'IFFCO Neem Coated Urea',
    emoji: '🧪',
    image: generateAnimatedProduceSvg('Neem Coated Urea (46% N)', '🧪', '#16A34A'),
    color: '#16A34A'
  },
  'dap': {
    name: 'Di-Ammonium Phosphate (DAP)',
    emoji: '🧪',
    image: generateAnimatedProduceSvg('DAP (18-46-0)', '🧪', '#2563EB'),
    color: '#2563EB'
  },
  'vermicompost': {
    name: 'Organic Vermicompost',
    emoji: '🪱',
    image: generateAnimatedProduceSvg('Enriched Vermicompost', '🪱', '#78350F'),
    color: '#78350F'
  },
  'bio-fertilizer': {
    name: 'Bio-Fertilizer Consortia',
    emoji: '🧪',
    image: generateAnimatedProduceSvg('Bio-Fertilizer Consortia', '🧪', '#7C3AED'),
    color: '#7C3AED'
  }
};

/**
 * Generates high-torque industrial machinery vector illustration SVG data URI
 */
export function generateAnimatedEquipmentSvg(name, emoji = '🚜', mainColor = '#DC2626', badgeText = '★ HEAVY-DUTY MACHINERY ★', specText = 'VERIFIED PERFORMANCE') {
  const safeName = (name || 'Agricultural Machinery').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const id = 'eq_' + hashCode(safeName);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="${id}_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.98"/>
      <stop offset="50%" stop-color="${mainColor}" stop-opacity="0.38"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0.99"/>
    </linearGradient>
    <radialGradient id="${id}_glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="${mainColor}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}_shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>
  <style>
    @keyframes spinGearCW {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spinGearCCW {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes floatEquip {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.03); }
    }
    @keyframes pulseRing {
      0%, 100% { transform: scale(0.95); opacity: 0.35; }
      50% { transform: scale(1.15); opacity: 0.8; }
    }
    .gear-cw {
      animation: spinGearCW 20s linear infinite;
      transform-origin: 150px 140px;
    }
    .gear-ccw {
      animation: spinGearCCW 15s linear infinite;
      transform-origin: 450px 150px;
    }
    .equip-body {
      animation: floatEquip 3.6s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .equip-glow {
      animation: pulseRing 4s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
  </style>

  <!-- Background Base Card -->
  <rect width="100%" height="100%" fill="url(#${id}_bg)" rx="24"/>

  <!-- Technical Blueprint Grid Lines -->
  <path d="M0 80 H600 M0 160 H600 M0 240 H600 M0 320 H600" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <path d="M100 0 V400 M200 0 V400 M300 0 V400 M400 0 V400 M500 0 V400" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

  <!-- Left Rotating Gear Silhouette -->
  <g class="gear-cw" stroke="rgba(255,255,255,0.09)" stroke-width="2" fill="none">
    <circle cx="150" cy="140" r="50"/>
    <circle cx="150" cy="140" r="25"/>
    <path d="M150 78 V202 M88 140 H212 M106 96 L194 184 M106 184 L194 96" stroke-dasharray="8 6"/>
  </g>

  <!-- Right Rotating Gear Silhouette -->
  <g class="gear-ccw" stroke="${mainColor}" stroke-opacity="0.25" stroke-width="2" fill="none">
    <circle cx="450" cy="150" r="60"/>
    <circle cx="450" cy="150" r="30"/>
    <path d="M450 78 V222 M378 150 H522 M399 99 L501 201 M399 201 L501 99" stroke-dasharray="10 8"/>
  </g>

  <!-- Center Radial Glow -->
  <circle cx="300" cy="175" r="140" fill="url(#${id}_glow)" class="equip-glow"/>
  <circle cx="300" cy="175" r="95" fill="none" stroke="${mainColor}" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="5 5"/>

  <!-- Shadow Under Machine -->
  <ellipse cx="300" cy="250" rx="80" ry="14" fill="rgba(0,0,0,0.5)"/>

  <!-- Floating Machinery Icon -->
  <g class="equip-body" filter="url(#${id}_shadow)">
    <text x="300" y="190" font-size="94" text-anchor="middle" dominant-baseline="central" style="filter: drop-shadow(0 10px 20px rgba(0,0,0,0.6));">${emoji}</text>
  </g>

  <!-- Category & Certification Top Pill -->
  <rect x="160" y="274" width="280" height="26" rx="13" fill="rgba(15,23,42,0.88)" stroke="${mainColor}" stroke-width="1.5"/>
  <text x="300" y="291" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="${mainColor}" text-anchor="middle" letter-spacing="1">${badgeText}</text>

  <!-- Title & Specification Text -->
  <text x="300" y="340" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="19" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.3">${safeName}</text>
  <text x="300" y="366" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="0.5">${specText}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Generates engineering precision spare parts vector illustration SVG data URI
 */
export function generateAnimatedSpareSvg(name, emoji = '⚙️', mainColor = '#3B82F6', partCode = 'OEM-7492', specText = 'TOLERANCE TESTED • 100% GENUINE') {
  const safeName = (name || 'Tractor Spare Part').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const id = 'sp_' + hashCode(safeName);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="${id}_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080E1A" stop-opacity="0.99"/>
      <stop offset="50%" stop-color="${mainColor}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0.99"/>
    </linearGradient>
    <radialGradient id="${id}_glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.65"/>
      <stop offset="55%" stop-color="${mainColor}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}_shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>
  <style>
    @keyframes spinTechRing {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulseAura {
      0%, 100% { transform: scale(0.92); opacity: 0.45; }
      50% { transform: scale(1.16); opacity: 0.9; }
    }
    @keyframes floatPart {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-9px) rotate(3deg); }
    }
    .tech-ring {
      animation: spinTechRing 24s linear infinite;
      transform-origin: 300px 175px;
    }
    .part-aura {
      animation: pulseAura 3.8s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .part-body {
      animation: floatPart 3.4s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
  </style>

  <!-- Background Base Card -->
  <rect width="100%" height="100%" fill="url(#${id}_bg)" rx="24"/>

  <!-- Precision Engineering Grid Matrix -->
  <path d="M0 60 H600 M0 120 H600 M0 180 H600 M0 240 H600 M0 300 H600" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
  <path d="M60 0 V400 M120 0 V400 M180 0 V400 M240 0 V400 M300 0 V400 M360 0 V400 M420 0 V400 M480 0 V400 M540 0 V400" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>

  <!-- Rotating Precision Measurement Reticle -->
  <g class="tech-ring" stroke="${mainColor}" stroke-opacity="0.35" stroke-width="1.5" fill="none">
    <circle cx="300" cy="175" r="115" stroke-dasharray="8 6 2 6"/>
    <circle cx="300" cy="175" r="85" stroke-dasharray="16 8"/>
    <path d="M300 50 V70 M300 280 V300 M175 175 H195 M405 175 H425" stroke-width="2"/>
  </g>

  <!-- Center Radial Energy Glow -->
  <circle cx="300" cy="175" r="135" fill="url(#${id}_glow)" class="part-aura"/>

  <!-- Caliper Dimension Marks -->
  <path d="M190 125 H210 M190 225 H210 M200 125 V225" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <path d="M390 125 H410 M390 225 H410 M400 125 V225" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>

  <!-- Ground Shadow -->
  <ellipse cx="300" cy="252" rx="75" ry="12" fill="rgba(0,0,0,0.52)"/>

  <!-- Floating Spare Part Icon -->
  <g class="part-body" filter="url(#${id}_shadow)">
    <text x="300" y="190" font-size="92" text-anchor="middle" dominant-baseline="central" style="filter: drop-shadow(0 8px 16px rgba(0,0,0,0.55));">${emoji}</text>
  </g>

  <!-- Part Code Top Pill -->
  <rect x="160" y="274" width="280" height="26" rx="13" fill="rgba(15,23,42,0.88)" stroke="${mainColor}" stroke-width="1.5"/>
  <text x="300" y="291" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="#67E8F9" text-anchor="middle" letter-spacing="1">★ ${partCode} • OEM CERTIFIED ★</text>

  <!-- Title & Specification Text -->
  <text x="300" y="340" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="18.5" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.3">${safeName}</text>
  <text x="300" y="366" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="0.5">${specText}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

export const EQUIPMENT_IMAGE_MAP = {
  'mahindra-575': {
    name: 'Mahindra 575 DI (47 HP)',
    emoji: '🚜',
    color: '#DC2626',
    image: generateAnimatedEquipmentSvg('Mahindra 575 DI (47 HP)', '🚜', '#DC2626', '★ 47 HP HEAVY TRACTOR ★', '190 Nm Torque • 2WD/4WD High Pull')
  },
  'sonalika-tiger': {
    name: 'Sonalika Tiger DI 75 (75 HP)',
    emoji: '🚜',
    color: '#2563EB',
    image: generateAnimatedEquipmentSvg('Sonalika Tiger DI 75 (75 HP)', '🚜', '#2563EB', '★ 75 HP 4WD CRDi TRACTOR ★', 'CRDi High Output • AC Cabin • 4WD')
  },
  'johndeere-5310': {
    name: 'John Deere 5310 (55 HP)',
    emoji: '🚜',
    color: '#16A34A',
    image: generateAnimatedEquipmentSvg('John Deere 5310 (55 HP)', '🚜', '#16A34A', '★ GEARPRO DUAL CLUTCH ★', '55 HP • Wet Disc Brakes • Dual Clutch')
  },
  'swaraj-744': {
    name: 'Swaraj 744 FE High-Torque',
    emoji: '🚜',
    color: '#B91C1C',
    image: generateAnimatedEquipmentSvg('Swaraj 744 FE High-Torque', '🚜', '#B91C1C', '★ HIGH-TORQUE 48 HP ★', '3-Cylinder Fuel Saver • Multispeed PTO')
  },
  'swaraj-855': {
    name: 'Swaraj 855 FE Multi-Speed',
    emoji: '🚜',
    color: '#B91C1C',
    image: generateAnimatedEquipmentSvg('Swaraj 855 FE Multi-Speed', '🚜', '#B91C1C', '★ 52 HP MULTI-SPEED PTO ★', 'Heavy Drawbar Pull • Direct Injection')
  },
  'kubota-mu4501': {
    name: 'Kubota MU4501 4WD (45 HP)',
    emoji: '🚜',
    color: '#EA580C',
    image: generateAnimatedEquipmentSvg('Kubota MU4501 Japanese 4WD', '🚜', '#EA580C', '★ JAPANESE 4WD TECHNOLOGY ★', '45 HP High Torque • Dual PTO • Low Vibration')
  },
  'farmtrac-45': {
    name: 'Farmtrac 45 Classic (45 HP)',
    emoji: '🚜',
    color: '#0284C7',
    image: generateAnimatedEquipmentSvg('Farmtrac 45 Classic Powermaxx', '🚜', '#0284C7', '★ 45 HP CLASSIC POWERMAXX ★', '3-Stage Superfilter • 5-Star Diesel Saver')
  },
  'farmtrac-60': {
    name: 'Farmtrac 60 Powermaxx (55 HP)',
    emoji: '🚜',
    color: '#0284C7',
    image: generateAnimatedEquipmentSvg('Farmtrac 60 Powermaxx T20', '🚜', '#0284C7', '★ T20 CONSTANT MESH 55 HP ★', '55 HP • Balancer Shaft • 2500 kg Lift')
  },
  'preet-combine': {
    name: 'Preet 987 Deluxe Harvester',
    emoji: '🌾',
    color: '#D97706',
    image: generateAnimatedEquipmentSvg('Preet 987 Deluxe Harvester', '🌾', '#D97706', '★ MULTI-CROP COMBINE ★', 'Self-Propelled • 14ft Cutter Bar • Clean Grain')
  },
  'garuda-drone': {
    name: 'Garuda Kisan 16L Agro-Drone',
    emoji: '🚁',
    color: '#3B82F6',
    image: generateAnimatedEquipmentSvg('Garuda Kisan 16L Agro-Drone', '🚁', '#3B82F6', '★ DGCA CERTIFIED 16L DRONE ★', '16L Tank • AI Radar • 25 Acres/Day Spray')
  },
  'drone-service': {
    name: 'Autonomous Drone Spraying',
    emoji: '🚁',
    color: '#3B82F6',
    image: generateAnimatedEquipmentSvg('Autonomous Drone Spray Service', '🚁', '#3B82F6', '★ DGCA FLIGHT CERTIFIED ★', 'Ultra-Fine Micron Mist • Uniform Coverage')
  },
  'shaktiman-rotavator': {
    name: 'Shaktiman 7-Ft Rotary Tiller',
    emoji: '⚙️',
    color: '#E11D48',
    image: generateAnimatedEquipmentSvg('Shaktiman Semi-Champion 7-Ft', '⚙️', '#E11D48', '★ 48 BORON BLADES ROTARY ★', '7-Foot Width • Heavy Multi-Speed Gearbox')
  },
  'fieldking-cultivator': {
    name: 'Fieldking 9-Tyne Cultivator',
    emoji: '🚜',
    color: '#D97706',
    image: generateAnimatedEquipmentSvg('Fieldking 9-Tyne Spring Cultivator', '🚜', '#D97706', '★ 9-TYNE HEAVY SPRING ★', 'High Tensile Spring Steel • Deep Tilth')
  },
  'lemken-plough': {
    name: 'Lemken Opal 090 MB Plough',
    emoji: '🚜',
    color: '#2563EB',
    image: generateAnimatedEquipmentSvg('Lemken Opal 090 Reversible Plough', '🚜', '#2563EB', '★ HYDRAULIC REVERSIBLE PLOUGH ★', '2-Bottom Hydraulic Turn • Soil Inversion')
  },
  'aspee-sprayer': {
    name: 'Aspee Marut 16L Battery Sprayer',
    emoji: '🔋',
    color: '#10B981',
    image: generateAnimatedEquipmentSvg('Aspee Marut 16L Dual Battery', '🔋', '#10B981', '★ 16L DUAL BATTERY SPRAYER ★', '12V 12Ah Dual Battery • 8-Hour Continuous')
  },
  'power-tiller': {
    name: 'VST Shakti 135 DI Power Tiller',
    emoji: '🚜',
    color: '#DC2626',
    image: generateAnimatedEquipmentSvg('VST Shakti 135 DI Power Tiller', '🚜', '#DC2626', '★ 13.5 HP COMPACT POWER TILLER ★', 'Multi-Blade Rotary Tiller • Wet & Dry Field')
  },
  'iot-probe': {
    name: 'Solar 4G IoT Soil Node',
    emoji: '📡',
    color: '#06B6D4',
    image: generateAnimatedEquipmentSvg('Solar Wireless 4G IoT Soil Node', '📡', '#06B6D4', '★ SOLAR 4G SMART FIELD NODE ★', 'Volumetric Moisture • NPK Assay • Weather Sync')
  }
};

export const SPARES_IMAGE_MAP = {
  'fuel-injectors': {
    name: 'Bosch CRDi Diesel Injector',
    emoji: '🔌',
    color: '#3B82F6',
    image: generateAnimatedSpareSvg('Bosch CRDi Fuel Injector', '🔌', '#3B82F6', 'BOSCH-0445-CRDI', '1800 Bar Precision • Micron Spray Pattern')
  },
  'fuel-injector': {
    name: 'Bosch CRDi Diesel Injector',
    emoji: '🔌',
    color: '#3B82F6',
    image: generateAnimatedSpareSvg('Bosch CRDi Fuel Injector', '🔌', '#3B82F6', 'BOSCH-0445-CRDI', '1800 Bar Precision • Micron Spray Pattern')
  },
  'clutch-plate': {
    name: 'Luk Dual Clutch Plate (280mm)',
    emoji: '⚙️',
    color: '#EAB308',
    image: generateAnimatedSpareSvg('Luk Cerametallic Clutch Plate', '⚙️', '#EAB308', 'LUK-280-CERAM', 'Cerametallic Friction • Zero Slippage • Heavy Duty')
  },
  'clutch-assembly': {
    name: 'Tractor Dual Clutch Assembly',
    emoji: '⚙️',
    color: '#EAB308',
    image: generateAnimatedSpareSvg('Tractor Dual Clutch Assembly', '⚙️', '#EAB308', 'OEM-CLUTCH-DUAL', 'Dual Pressure Plate • Diaphragm Spring Loaded')
  },
  'battery-exide': {
    name: 'Exide Jai Kisan 88Ah Battery',
    emoji: '🔋',
    color: '#EF4444',
    image: generateAnimatedSpareSvg('Exide Jai Kisan 88Ah Battery', '🔋', '#EF4444', 'EXIDE-JK-88AH', 'Vibration-Proof Poly Container • High CCA')
  },
  'rotavator-blades': {
    name: 'Boron Steel Rotavator Blades',
    emoji: '🗡️',
    color: '#F59E0B',
    image: generateAnimatedSpareSvg('Shaktiman Boron Steel Blades', '🗡️', '#F59E0B', 'BORON-8MM-L48', 'Hardened Boron Alloy • 48 Pcs Set')
  },
  'hydraulic-filter': {
    name: 'Fleetguard Hydraulic Filter',
    emoji: '🛢️',
    color: '#10B981',
    image: generateAnimatedSpareSvg('Fleetguard Hydraulic Spin-On', '🛢️', '#10B981', 'FLEET-HF-6510', 'Micro-Glass Media • 10 Micron 250 Bar')
  },
  'fuel-lift-pump': {
    name: 'MICO Bosch Diesel Lift Pump',
    emoji: '⛽',
    color: '#6366F1',
    image: generateAnimatedSpareSvg('MICO Bosch Diesel Lift Pump', '⛽', '#6366F1', 'MICO-FEED-12V', 'Inline Diesel Feed • Heavy Plunger Action')
  },
  'steering-tie-rod': {
    name: 'Rane Power Steering Tie Rod',
    emoji: '🔩',
    color: '#8B5CF6',
    image: generateAnimatedSpareSvg('Rane Forged Tie Rod End Kit', '🔩', '#8B5CF6', 'RANE-STR-PAIR', 'Drop-Forged Ball Joint • Induction Hardened')
  },
  'tierod-end': {
    name: 'Tractor Steering Tie Rod End',
    emoji: '🔩',
    color: '#8B5CF6',
    image: generateAnimatedSpareSvg('Tractor Steering Tie Rod Assembly', '🔩', '#8B5CF6', 'OEM-TIEROD-END', 'Heavy Duty Ball Joint • Zero Backlash')
  },
  'front-axle-king-pin': {
    name: 'Talbros Front Axle King Pin',
    emoji: '🔩',
    color: '#EC4899',
    image: generateAnimatedSpareSvg('Talbros Front Axle King Pin Set', '🔩', '#EC4899', 'TALB-KP-32MM', 'Case-Hardened Alloy • Phosphor Bronze Bush')
  },
  'king-pin': {
    name: 'Tractor Front Axle King Pin',
    emoji: '🔩',
    color: '#EC4899',
    image: generateAnimatedSpareSvg('Tractor King Pin & Bush Kit', '🔩', '#EC4899', 'OEM-KINGPIN-SET', 'Precision Ground Spindle • Anti-Wear Bush')
  },
  'kirloskar-impeller': {
    name: 'Kirloskar 5HP Pump Impeller',
    emoji: '🌊',
    color: '#0284C7',
    image: generateAnimatedSpareSvg('Kirloskar 5HP Submersible Impeller', '🌊', '#0284C7', 'KIRL-SS-5HP', 'SS-304 Stainless Steel • Dynamic Balanced')
  },
  'castrol-oil': {
    name: 'Castrol Agri TransPlus 80W',
    emoji: '🛢️',
    color: '#F97316',
    image: generateAnimatedSpareSvg('Castrol Agri TransPlus 80W (20L)', '🛢️', '#F97316', 'CASTROL-80W-20L', 'UTTO Fluid • Anti-Chatter Wet Brakes')
  },
  'air-cleaner-filter': {
    name: 'Donaldson Dual Air Cleaner',
    emoji: '🌀',
    color: '#14B8A6',
    image: generateAnimatedSpareSvg('Donaldson Dual Radial Air Filter', '🌀', '#14B8A6', 'DONALD-RS-084', '99.9% Dust Efficiency • Radial-Seal Cartridge')
  },
  'air-cleaner': {
    name: 'Heavy-Duty Air Cleaner Element',
    emoji: '🌀',
    color: '#14B8A6',
    image: generateAnimatedSpareSvg('Heavy-Duty Air Cleaner Element', '🌀', '#14B8A6', 'OEM-AIR-CLEAN', 'Multi-Layer Fiber Media • Dual Stage Filtration')
  },
  'piston-ring-set': {
    name: 'Goetze Plasma-Moly Piston Rings',
    emoji: '⭕',
    color: '#A855F7',
    image: generateAnimatedSpareSvg('Goetze Engine Piston Ring Set', '⭕', '#A855F7', 'GOETZE-MOLY-4C', 'Plasma-Moly Coating • 4-Cylinder Complete')
  },
  'piston-rings': {
    name: 'Chrome-Plated Piston Rings',
    emoji: '⭕',
    color: '#A855F7',
    image: generateAnimatedSpareSvg('OEM Chrome-Plated Piston Ring Set', '⭕', '#A855F7', 'OEM-PISTON-4CYL', 'Chrome Compression Rings • Oil Scraper Rings')
  },
  'skf-bearings': {
    name: 'SKF Explorer Taper Bearings',
    emoji: '⚙️',
    color: '#3B82F6',
    image: generateAnimatedSpareSvg('SKF Explorer Taper Roller Bearings', '⚙️', '#3B82F6', 'SKF-EXP-32208', 'Matched Front Wheel Pair • Ultra-Low Friction')
  },
  'gates-vbelt': {
    name: 'Gates Tri-Power Agri V-Belt',
    emoji: '➰',
    color: '#E11D48',
    image: generateAnimatedSpareSvg('Gates Tri-Power Aramid V-Belt', '➰', '#E11D48', 'GATES-B-SECT', 'Aramid Tensile Cord • Molded Cogged Heat Proof')
  },
  'tiller-gearbox': {
    name: 'Power Tiller Gearbox Parts',
    emoji: '⚙️',
    color: '#F59E0B',
    image: generateAnimatedSpareSvg('Power Tiller Transmission Gearbox', '⚙️', '#F59E0B', 'VST-GBX-PARTS', 'Drop-Forged Bevel Gears • Case-Hardened Dog Clutches')
  },
  'cultivator-tines': {
    name: 'Cultivator Spring Tines & Points',
    emoji: '⚓',
    color: '#D97706',
    image: generateAnimatedSpareSvg('Cultivator Spring Tines & Points', '⚓', '#D97706', 'FK-TINES-9PC', 'En45 Spring Steel • Reversible Duckfoot Shovels')
  },
  'radiator-hose': {
    name: 'Radiator Heavy EPDM Hose Set',
    emoji: '〰️',
    color: '#06B6D4',
    image: generateAnimatedSpareSvg('Radiator Heavy EPDM Hose Set', '〰️', '#06B6D4', 'RAD-HOSE-EPDM', 'Reinforced Synthetic Aramid • -40°C to +140°C')
  },
  'alternator-kit': {
    name: '12V 45A Alternator Overhaul Kit',
    emoji: '⚡',
    color: '#EAB308',
    image: generateAnimatedSpareSvg('12V 45A Alternator Overhaul Kit', '⚡', '#EAB308', 'ALT-LUCAS-45A', 'Heavy Copper Stator • High-Amp Diode Rectifier')
  },
  'valve-seal-kit': {
    name: 'Spool Valve Hydraulic Seal Kit',
    emoji: '🔘',
    color: '#10B981',
    image: generateAnimatedSpareSvg('Hydraulic Cylinder Spool Seal Kit', '🔘', '#10B981', 'HYD-SEAL-VITON', 'Viton / PU High Pressure O-Rings • Zero Leak')
  }
};

/**
 * Returns animated equipment illustration metadata
 */
export function getEquipmentImageInfo(nameOrId) {
  if (!nameOrId || typeof nameOrId !== 'string') {
    return {
      name: 'Agricultural Equipment',
      emoji: '🚜',
      image: generateAnimatedEquipmentSvg('Agri Machinery', '🚜', '#DC2626'),
      color: '#DC2626'
    };
  }

  const clean = nameOrId.toLowerCase().trim().replace(/^mach-/, '').replace(/^veh-/, '');

  if (EQUIPMENT_IMAGE_MAP[clean]) {
    return EQUIPMENT_IMAGE_MAP[clean];
  }

  for (const [key, info] of Object.entries(EQUIPMENT_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  return {
    name: nameOrId,
    emoji: '🚜',
    image: generateAnimatedEquipmentSvg(nameOrId, '🚜', '#DC2626'),
    color: '#DC2626'
  };
}

export function getEquipmentImage(nameOrId) {
  return getEquipmentImageInfo(nameOrId).image;
}

/**
 * Returns animated spare part illustration metadata
 */
export function getSpareImageInfo(nameOrId) {
  if (!nameOrId || typeof nameOrId !== 'string') {
    return {
      name: 'Machinery Spare Part',
      emoji: '⚙️',
      image: generateAnimatedSpareSvg('Agri Spare Part', '⚙️', '#3B82F6'),
      color: '#3B82F6'
    };
  }

  const clean = nameOrId.toLowerCase().trim().replace(/^spar-/, '').replace(/^spare-/, '');

  if (SPARES_IMAGE_MAP[clean]) {
    return SPARES_IMAGE_MAP[clean];
  }

  for (const [key, info] of Object.entries(SPARES_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  return {
    name: nameOrId,
    emoji: '⚙️',
    image: generateAnimatedSpareSvg(nameOrId, '⚙️', '#3B82F6'),
    color: '#3B82F6'
  };
}

export function getSpareImage(nameOrId) {
  return getSpareImageInfo(nameOrId).image;
}

/**
 * Normalizes an input string to find best matching vegetable, crop, machinery, or spare part
 */
export function getVegetableImageInfo(nameOrQuery) {
  if (!nameOrQuery || typeof nameOrQuery !== 'string') {
    return {
      name: 'Fresh Agricultural Produce',
      emoji: '🌱',
      image: generateAnimatedProduceSvg('Farm Produce', '🌱', '#16A34A'),
      color: '#16A34A'
    };
  }

  const clean = nameOrQuery.toLowerCase().trim();
  const kebab = nameOrQuery.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase().trim();

  // 1. Direct equipment check
  const equipKey = clean.replace(/^mach-/, '').replace(/^veh-/, '');
  const equipKebab = kebab.replace(/^mach-/, '').replace(/^veh-/, '');
  if (EQUIPMENT_IMAGE_MAP[equipKey]) return EQUIPMENT_IMAGE_MAP[equipKey];
  if (EQUIPMENT_IMAGE_MAP[equipKebab]) return EQUIPMENT_IMAGE_MAP[equipKebab];

  // 2. Direct spares check
  const spareKey = clean.replace(/^spar-/, '').replace(/^spare-/, '');
  const spareKebab = kebab.replace(/^spar-/, '').replace(/^spare-/, '');
  if (SPARES_IMAGE_MAP[spareKey]) return SPARES_IMAGE_MAP[spareKey];
  if (SPARES_IMAGE_MAP[spareKebab]) return SPARES_IMAGE_MAP[spareKebab];

  // 3. Direct exact key match for produce
  if (VEGETABLE_AND_CROP_IMAGE_MAP[clean]) return VEGETABLE_AND_CROP_IMAGE_MAP[clean];
  if (VEGETABLE_AND_CROP_IMAGE_MAP[kebab]) return VEGETABLE_AND_CROP_IMAGE_MAP[kebab];

  // 4. Equipment keywords match
  for (const [key, info] of Object.entries(EQUIPMENT_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  // 5. Spares keywords match
  for (const [key, info] of Object.entries(SPARES_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  // 6. Partial word/substring match for produce
  for (const [key, info] of Object.entries(VEGETABLE_AND_CROP_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  // 7. Broad heuristic fallbacks
  if (/tractor|harvester|drone|tiller|plough|cultivator|rotavator|sprayer|machinery|vehicle/i.test(clean)) {
    return getEquipmentImageInfo(nameOrQuery);
  }

  if (/spare|filter|injector|clutch|battery|blade|bearing|belt|pump|pin|ring|hose|alternator|gearbox/i.test(clean)) {
    return getSpareImageInfo(nameOrQuery);
  }

  // 8. Default animated fallback
  return {
    name: nameOrQuery,
    emoji: '🌿',
    image: generateAnimatedProduceSvg(nameOrQuery, '🌿', '#059669'),
    color: '#059669'
  };
}

/**
 * Returns an animated illustration SVG URL according to produce/equipment/spare name
 */
export function getVegetableImage(nameOrQuery) {
  return getVegetableImageInfo(nameOrQuery).image;
}

/**
 * Returns an emoji according to name
 */
export function getVegetableEmoji(nameOrQuery) {
  return getVegetableImageInfo(nameOrQuery).emoji;
}

/**
 * Dynamic lightweight SVG fallback
 */
export function generateVegetableSvg(name, emoji = '🌱', color = '#15803D') {
  return generateAnimatedProduceSvg(name, emoji, color);
}

/**
 * Handles image loading errors gracefully by switching to animated SVG
 */
export function handleImageError(event, fallbackName = 'Produce') {
  const target = event.currentTarget || event.target;
  if (!target) return;
  const info = getVegetableImageInfo(fallbackName);
  target.src = info.image;
}
