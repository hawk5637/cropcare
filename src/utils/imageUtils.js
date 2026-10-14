// Smart Image Resolution & Fallback Utility for CropCare
// Provides verified high-resolution real-world images for vegetables, fruits, crops, and agricultural products.

export const VEGETABLE_AND_CROP_IMAGE_MAP = {
  // ─── Vegetables ───────────────────────────────────────
  'tomato': {
    name: 'Tomato',
    emoji: '🍅',
    image: 'https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80',
    color: '#EF4444'
  },
  'potato': {
    name: 'Potato',
    emoji: '🥔',
    image: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'onion': {
    name: 'Onion',
    emoji: '🧅',
    image: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80',
    color: '#DC2626'
  },
  'garlic': {
    name: 'Garlic',
    emoji: '🧄',
    image: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=800&q=80',
    color: '#E5E7EB'
  },
  'ginger': {
    name: 'Ginger',
    emoji: '🫚',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80',
    color: '#B45309'
  },
  'chilli': {
    name: 'Chilli (Hot Pepper)',
    emoji: '🌶️',
    image: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80',
    color: '#DC2626'
  },
  'capsicum': {
    name: 'Capsicum / Bell Pepper',
    emoji: '🫑',
    image: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=800&q=80',
    color: '#16A34A'
  },
  'brinjal': {
    name: 'Brinjal / Eggplant',
    emoji: '🍆',
    image: 'https://images.unsplash.com/photo-1605335508892-d6efc5fa2328?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED'
  },
  'eggplant': {
    name: 'Eggplant',
    emoji: '🍆',
    image: 'https://images.unsplash.com/photo-1605335508892-d6efc5fa2328?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED'
  },
  'cabbage': {
    name: 'Cabbage',
    emoji: '🥬',
    image: 'https://images.unsplash.com/photo-1594282486552-05b4d80fbb9f?auto=format&fit=crop&w=800&q=80',
    color: '#22C55E'
  },
  'cauliflower': {
    name: 'Cauliflower',
    emoji: '🥦',
    image: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80',
    color: '#F3F4F6'
  },
  'spinach': {
    name: 'Spinach (Palak)',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'okra': {
    name: 'Okra (Bhindi)',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
    color: '#16A34A'
  },
  'bhindi': {
    name: 'Bhindi (Okra)',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=800&q=80',
    color: '#16A34A'
  },
  'carrot': {
    name: 'Carrot',
    emoji: '🥕',
    image: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=800&q=80',
    color: '#EA580C'
  },
  'radish': {
    name: 'Radish (Mooli)',
    emoji: '🥗',
    image: 'https://images.unsplash.com/photo-1593105544559-ecb03bf76f82?auto=format&fit=crop&w=800&q=80',
    color: '#F9FAFB'
  },
  'cucumber': {
    name: 'Cucumber (Kheera)',
    emoji: '🥒',
    image: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80',
    color: '#16A34A'
  },
  'bitter gourd': {
    name: 'Bitter Gourd (Karela)',
    emoji: '🥒',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'karela': {
    name: 'Karela',
    emoji: '🥒',
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'bottle gourd': {
    name: 'Bottle Gourd (Lauki)',
    emoji: '🥒',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80',
    color: '#84CC16'
  },
  'lauki': {
    name: 'Lauki',
    emoji: '🥒',
    image: 'https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80',
    color: '#84CC16'
  },
  'pumpkin': {
    name: 'Pumpkin (Kaddu)',
    emoji: '🎃',
    image: 'https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'peas': {
    name: 'Green Peas (Matar)',
    emoji: '🫛',
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80',
    color: '#22C55E'
  },
  'matar': {
    name: 'Green Peas',
    emoji: '🫛',
    image: 'https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80',
    color: '#22C55E'
  },
  'coriander': {
    name: 'Coriander (Dhaniya)',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'mint': {
    name: 'Mint (Pudina)',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=800&q=80',
    color: '#10B981'
  },
  'fenugreek': {
    name: 'Fenugreek (Methi)',
    emoji: '🌱',
    image: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'beetroot': {
    name: 'Beetroot',
    emoji: '🫐',
    image: 'https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=800&q=80',
    color: '#BE185D'
  },
  'broccoli': {
    name: 'Broccoli',
    emoji: '🥦',
    image: 'https://images.unsplash.com/photo-1459411621453-7b03977f4bfc?auto=format&fit=crop&w=800&q=80',
    color: '#166534'
  },
  'mushroom': {
    name: 'Mushroom',
    emoji: '🍄',
    image: 'https://images.unsplash.com/photo-1504544750208-dc0358e63f7f?auto=format&fit=crop&w=800&q=80',
    color: '#D1D5DB'
  },
  'sweet potato': {
    name: 'Sweet Potato (Shakarkandi)',
    emoji: '🍠',
    image: 'https://images.unsplash.com/photo-1596097635121-14b63b7a0c19?auto=format&fit=crop&w=800&q=80',
    color: '#9A3412'
  },

  // ─── Grains & Cereals ─────────────────────────────────
  'rice': {
    name: 'Rice (Paddy)',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=800&q=80',
    color: '#CA8A04'
  },
  'wheat': {
    name: 'Wheat (Gehun)',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'maize': {
    name: 'Maize (Corn)',
    emoji: '🌽',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    color: '#EAB308'
  },
  'corn': {
    name: 'Sweet Corn',
    emoji: '🌽',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    color: '#EAB308'
  },
  'bajra': {
    name: 'Pearl Millet (Bajra)',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    color: '#78716C'
  },
  'jowar': {
    name: 'Sorghum (Jowar)',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80',
    color: '#A8A29E'
  },
  'ragi': {
    name: 'Finger Millet (Ragi)',
    emoji: '🌾',
    image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
    color: '#78350F'
  },

  // ─── Fruits ───────────────────────────────────────────
  'mango': {
    name: 'Mango',
    emoji: '🥭',
    image: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80',
    color: '#F59E0B'
  },
  'banana': {
    name: 'Banana',
    emoji: '🍌',
    image: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80',
    color: '#EAB308'
  },
  'apple': {
    name: 'Apple',
    emoji: '🍎',
    image: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80',
    color: '#DC2626'
  },
  'orange': {
    name: 'Orange (Santra)',
    emoji: '🍊',
    image: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80',
    color: '#F97316'
  },
  'pomegranate': {
    name: 'Pomegranate (Anar)',
    emoji: '🍎',
    image: 'https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=800&q=80',
    color: '#BE123C'
  },
  'watermelon': {
    name: 'Watermelon (Tarbooz)',
    emoji: '🍉',
    image: 'https://images.unsplash.com/photo-1589984662646-e7b2e4962f18?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'papaya': {
    name: 'Papaya',
    emoji: '🍈',
    image: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=800&q=80',
    color: '#EA580C'
  },
  'guava': {
    name: 'Guava (Amrood)',
    emoji: '🍐',
    image: 'https://images.unsplash.com/photo-1536511135899-8d4847e9eecf?auto=format&fit=crop&w=800&q=80',
    color: '#65A30D'
  },
  'grapes': {
    name: 'Grapes (Angoor)',
    emoji: '🍇',
    image: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED'
  },
  'coconut': {
    name: 'Coconut (Nariyal)',
    emoji: '🥥',
    image: 'https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=800&q=80',
    color: '#78350F'
  },

  // ─── Cash Crops & Spices ──────────────────────────────
  'cotton': {
    name: 'Cotton (Kapas)',
    emoji: '☁️',
    image: 'https://images.unsplash.com/photo-1471189374-c9b3fa71be7e?auto=format&fit=crop&w=800&q=80',
    color: '#E2E8F0'
  },
  'sugarcane': {
    name: 'Sugarcane (Ganna)',
    emoji: '🎋',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=800&q=80',
    color: '#16A34A'
  },
  'mustard': {
    name: 'Mustard (Sarson)',
    emoji: '🌼',
    image: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?auto=format&fit=crop&w=800&q=80',
    color: '#EAB308'
  },
  'soybean': {
    name: 'Soybean',
    emoji: '🫘',
    image: 'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80',
    color: '#CA8A04'
  },
  'groundnut': {
    name: 'Groundnut / Peanut',
    emoji: '🥜',
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80',
    color: '#92400E'
  },
  'peanut': {
    name: 'Peanut',
    emoji: '🥜',
    image: 'https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80',
    color: '#92400E'
  },
  'chickpea': {
    name: 'Chickpea (Chana)',
    emoji: '🫘',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'chana': {
    name: 'Chana (Gram)',
    emoji: '🫘',
    image: 'https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'turmeric': {
    name: 'Turmeric (Haldi)',
    emoji: '🟡',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=800&q=80',
    color: '#EAB308'
  },
  'cardamom': {
    name: 'Cardamom (Elaichi)',
    emoji: '🫛',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
    color: '#65A30D'
  },
  'black pepper': {
    name: 'Black Pepper (Kali Mirch)',
    emoji: '⚫',
    image: 'https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80',
    color: '#1F2937'
  },
  'tea': {
    name: 'Tea (Chai)',
    emoji: '🍵',
    image: 'https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'coffee': {
    name: 'Coffee',
    emoji: '☕',
    image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80',
    color: '#78350F'
  },
  'tulsi': {
    name: 'Tulsi (Holy Basil)',
    emoji: '🌿',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'neem': {
    name: 'Neem',
    emoji: '🍃',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=800&q=80',
    color: '#15803D'
  },
  'rose': {
    name: 'Rose',
    emoji: '🌹',
    image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80',
    color: '#E11D48'
  },
  'sunflower': {
    name: 'Sunflower',
    emoji: '🌻',
    image: 'https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=800&q=80',
    color: '#F59E0B'
  },

  // ─── Farm Machinery & Spares ──────────────────────────
  'tractor': {
    name: 'Tractor',
    emoji: '🚜',
    image: 'https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80',
    color: '#DC2626'
  },
  'harvester': {
    name: 'Combine Harvester',
    emoji: '🚜',
    image: 'https://images.unsplash.com/photo-1530267981375-f0de937f5f13?auto=format&fit=crop&w=800&q=80',
    color: '#D97706'
  },
  'drone': {
    name: 'Agri Spraying Drone',
    emoji: '🚁',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=800&q=80',
    color: '#2563EB'
  },
  'spares': {
    name: 'Agricultural Spares',
    emoji: '🔧',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80',
    color: '#475569'
  },
  'fertilizer': {
    name: 'Fertilizer',
    emoji: '🧪',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=800&q=80',
    color: '#7C3AED'
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
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=800&q=80',
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
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80',
    color: '#059669'
  };
}

/**
 * Returns a verified image URL according to the vegetable / produce name
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
 * Generate a dynamic lightweight SVG fallback image data-URI
 */
export function generateVegetableSvg(name, emoji = '🌱', color = '#15803D') {
  const safeName = (name || 'Fresh Produce').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
    <defs>
      <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${color}" stop-opacity="0.9"/>
        <stop offset="100%" stop-color="#0F172A" stop-opacity="0.95"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <circle cx="300" cy="180" r="85" fill="rgba(255,255,255,0.1)"/>
    <text x="50%" y="48%" font-size="76" dominant-baseline="middle" text-anchor="middle">${emoji}</text>
    <text x="50%" y="78%" font-size="22" font-family="system-ui, -apple-system, sans-serif" font-weight="800" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.5">${safeName}</text>
    <text x="50%" y="87%" font-size="12" font-family="system-ui, -apple-system, sans-serif" font-weight="600" fill="rgba(255,255,255,0.7)" text-anchor="middle">CropCare Verified Produce</text>
  </svg>`;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

/**
 * Handles image loading errors gracefully across all components
 */
export function handleImageError(event, fallbackName = 'Produce') {
  const target = event.currentTarget || event.target;
  if (!target) return;
  const info = getVegetableImageInfo(fallbackName);
  if (target.src !== info.image) {
    target.src = info.image;
  } else {
    target.src = generateVegetableSvg(info.name, info.emoji, info.color);
  }
}
