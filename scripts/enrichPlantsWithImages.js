import fs from 'fs';
import path from 'path';

// Curated high-resolution leaf and plant imagery for all 61 crops
const PLANT_IMAGES_AND_ICONS = {
  "Rice": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
    color: "#4ade80"
  },
  "Wheat": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    color: "#facc15"
  },
  "Maize": {
    icon: "🌽",
    leaf_image_url: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    color: "#eab308"
  },
  "Tomato": {
    icon: "🍅",
    leaf_image_url: "https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=600&q=80",
    color: "#ef4444"
  },
  "Potato": {
    icon: "🥔",
    leaf_image_url: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=600&q=80",
    color: "#a8a29e"
  },
  "Brinjal": {
    icon: "🍆",
    leaf_image_url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    color: "#8b5cf6"
  },
  "Chilli": {
    icon: "🌶️",
    leaf_image_url: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=600&q=80",
    color: "#dc2626"
  },
  "Onion": {
    icon: "🧅",
    leaf_image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    color: "#f97316"
  },
  "Mango": {
    icon: "🥭",
    leaf_image_url: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=600&q=80",
    color: "#f59e0b"
  },
  "Banana": {
    icon: "🍌",
    leaf_image_url: "https://images.unsplash.com/photo-1528825871115-3581a5387919?auto=format&fit=crop&w=600&q=80",
    color: "#fbbf24"
  },
  "Papaya": {
    icon: "🍈",
    leaf_image_url: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=600&q=80",
    color: "#ea580c"
  },
  "Guava": {
    icon: "🍐",
    leaf_image_url: "https://images.unsplash.com/photo-1536511135898-0348554d3b66?auto=format&fit=crop&w=600&q=80",
    color: "#84cc16"
  },
  "Neem": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80",
    color: "#16a34a"
  },
  "Tulsi": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=600&q=80",
    color: "#15803d"
  },
  "Aloe vera": {
    icon: "🪴",
    leaf_image_url: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09?auto=format&fit=crop&w=600&q=80",
    color: "#22c55e"
  },
  "Turmeric": {
    icon: "💛",
    leaf_image_url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    color: "#eab308"
  },
  "Ginger": {
    icon: "🫚",
    leaf_image_url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    color: "#d97706"
  },
  "Mustard": {
    icon: "🌼",
    leaf_image_url: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
    color: "#fde047"
  },
  "Groundnut": {
    icon: "🥜",
    leaf_image_url: "https://images.unsplash.com/photo-1525607551316-4a8e16d1f9ba?auto=format&fit=crop&w=600&q=80",
    color: "#d97706"
  },
  "Cotton": {
    icon: "☁️",
    leaf_image_url: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?auto=format&fit=crop&w=600&q=80",
    color: "#f8fafc"
  },
  "Sugarcane": {
    icon: "🎋",
    leaf_image_url: "https://images.unsplash.com/photo-1589308078059-be1415eab4c3?auto=format&fit=crop&w=600&q=80",
    color: "#65a30d"
  },
  "Variegated Foliage": {
    icon: "🍃",
    leaf_image_url: "https://images.unsplash.com/photo-1600411833196-7c1f6b1a8b90?auto=format&fit=crop&w=600&q=80",
    color: "#86efac"
  },
  "Citrus / Lemon": {
    icon: "🍋",
    leaf_image_url: "https://images.unsplash.com/photo-1533038590840-1cde6e668a91?auto=format&fit=crop&w=600&q=80",
    color: "#facc15"
  },
  "Rose": {
    icon: "🌹",
    leaf_image_url: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=600&q=80",
    color: "#f43f5e"
  },
  "Mint": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1608686207856-001b95cf60ca?auto=format&fit=crop&w=600&q=80",
    color: "#10b981"
  },
  "Betel Leaf": {
    icon: "🍃",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#059669"
  },
  "Okra / Bhindi": {
    icon: "🥒",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#16a34a"
  },
  "Cabbage": {
    icon: "🥬",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#22c55e"
  },
  "Cauliflower": {
    icon: "🥦",
    leaf_image_url: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=600&q=80",
    color: "#f8fafc"
  },
  "Bitter Gourd / Karela": {
    icon: "🥒",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#15803d"
  },
  "Bottle Gourd / Lauki": {
    icon: "🥒",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#86efac"
  },
  "Spinach / Palak": {
    icon: "🥬",
    leaf_image_url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    color: "#15803d"
  },
  "Carrot / Gajar": {
    icon: "🥕",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#f97316"
  },
  "Radish / Mooli": {
    icon: "🥣",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#e2e8f0"
  },
  "Garlic / Lehsun": {
    icon: "🧄",
    leaf_image_url: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=600&q=80",
    color: "#e2e8f0"
  },
  "Fenugreek / Methi": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=600&q=80",
    color: "#22c55e"
  },
  "Coriander / Dhaniya": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1588879460618-924b172a6b22?auto=format&fit=crop&w=600&q=80",
    color: "#16a34a"
  },
  "Green Peas / Matar": {
    icon: "🟢",
    leaf_image_url: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
    color: "#4ade80"
  },
  "Cucumber / Kheera": {
    icon: "🥒",
    leaf_image_url: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=600&q=80",
    color: "#22c55e"
  },
  "Apple / Seb": {
    icon: "🍎",
    leaf_image_url: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=600&q=80",
    color: "#ef4444"
  },
  "Grapes / Angoor": {
    icon: "🍇",
    leaf_image_url: "https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=600&q=80",
    color: "#a855f7"
  },
  "Pomegranate / Anar": {
    icon: "🫐",
    leaf_image_url: "https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=600&q=80",
    color: "#e11d48"
  },
  "Watermelon / Tarbooz": {
    icon: "🍉",
    leaf_image_url: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=600&q=80",
    color: "#10b981"
  },
  "Coconut / Nariyal": {
    icon: "🥥",
    leaf_image_url: "https://images.unsplash.com/photo-1544860707-c352cc5a92e3?auto=format&fit=crop&w=600&q=80",
    color: "#854d0e"
  },
  "Chickpea / Chana": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80",
    color: "#ca8a04"
  },
  "Pigeon Pea / Arhar / Tur": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80",
    color: "#d97706"
  },
  "Green Gram / Moong": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=600&q=80",
    color: "#16a34a"
  },
  "Black Gram / Urad": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1543362906-acfc16c67564?auto=format&fit=crop&w=600&q=80",
    color: "#374151"
  },
  "Soybean / Soya": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1599940824399-b87987ceb72a?auto=format&fit=crop&w=600&q=80",
    color: "#65a30d"
  },
  "Pearl Millet / Bajra": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    color: "#78716c"
  },
  "Sorghum / Jowar": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=600&q=80",
    color: "#b45309"
  },
  "Finger Millet / Ragi": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=600&q=80",
    color: "#831843"
  },
  "Sunflower / Surajmukhi": {
    icon: "🌻",
    leaf_image_url: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80",
    color: "#eab308"
  },
  "Sesame / Til": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=600&q=80",
    color: "#fbbf24"
  },
  "Cumin / Jeera": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1588879460618-924b172a6b22?auto=format&fit=crop&w=600&q=80",
    color: "#78350f"
  },
  "Tea / Chai": {
    icon: "🍵",
    leaf_image_url: "https://images.unsplash.com/photo-1563822249548-9a72b6353cd1?auto=format&fit=crop&w=600&q=80",
    color: "#059669"
  },
  "Coffee": {
    icon: "☕",
    leaf_image_url: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=600&q=80",
    color: "#78350f"
  },
  "Rubber": {
    icon: "🌲",
    leaf_image_url: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&w=600&q=80",
    color: "#166534"
  },
  "Jute / Patson": {
    icon: "🌾",
    leaf_image_url: "https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=600&q=80",
    color: "#ca8a04"
  },
  "Cardamom / Elaichi": {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#15803d"
  },
  "Black Pepper / Kali Mirch": {
    icon: "🌿",
    leaf_image_url: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=600&q=80",
    color: "#166534"
  }
};

const filePath = path.resolve('src/data/plantKnowledgeBase.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

let enrichedCount = 0;
for (const plant of data) {
  const meta = PLANT_IMAGES_AND_ICONS[plant.name] || {
    icon: "🌱",
    leaf_image_url: "https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=600&q=80",
    color: "#10b981"
  };

  plant.icon = meta.icon;
  plant.leaf_image_url = meta.leaf_image_url;
  plant.theme_color = meta.color;
  enrichedCount++;
}

fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
console.log(`Enriched ${enrichedCount} plants with leaf images, icons, and theme colors.`);
