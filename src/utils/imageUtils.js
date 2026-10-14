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
  }
};

/**
 * Normalizes an input string to find best matching vegetable or agricultural product
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

  // 1. Direct exact key match
  if (VEGETABLE_AND_CROP_IMAGE_MAP[clean]) {
    return VEGETABLE_AND_CROP_IMAGE_MAP[clean];
  }

  // 2. Partial word/substring match
  for (const [key, info] of Object.entries(VEGETABLE_AND_CROP_IMAGE_MAP)) {
    if (clean.includes(key) || key.includes(clean)) {
      return info;
    }
  }

  // 3. Fallback for unknown produce
  return {
    name: nameOrQuery,
    emoji: '🌿',
    image: generateAnimatedProduceSvg(nameOrQuery, '🌿', '#059669'),
    color: '#059669'
  };
}

/**
 * Returns an animated illustration SVG URL according to the vegetable / produce name
 */
export function getVegetableImage(nameOrQuery) {
  return getVegetableImageInfo(nameOrQuery).image;
}

/**
 * Returns an emoji according to the vegetable name
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
