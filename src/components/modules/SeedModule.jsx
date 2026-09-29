import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { 
  Sprout, 
  Search, 
  ShoppingCart, 
  CheckCircle2, 
  Star, 
  GitCompare as Compare, 
  Camera, 
  ArrowRight,
  Filter,
  Check,
  ShieldCheck,
  Award,
  Sparkles
} from 'lucide-react';

const SEED_CATALOG = [
  // ─── VEGETABLES (14 Items) ──────────────────────────
  { 
    id: 'V1', 
    variety: 'Tomato Hybrid F1 (Abhinav)', 
    crop: 'Tomato', 
    category: 'Vegetables',
    icon: '🍅',
    duration: '65-70 days after transplanting', 
    yield: '30-35 tonnes/acre', 
    resistance: 'TLCV (Tomato Leaf Curl), Bacterial Wilt', 
    certification: 'ICAR / Seminis Certified', 
    price: '₹750/10g packet', 
    season: 'All Seasons (Kharif/Rabi)', 
    img: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?auto=format&fit=crop&w=400&q=80', 
    germination: '94%', 
    purity: '99.8%', 
    suitable: ['Red Loam', 'Clay Loam', 'Sandy Loam'] 
  },
  { 
    id: 'V2', 
    variety: 'Onion Red Super (Bhima Super)', 
    crop: 'Onion', 
    category: 'Vegetables',
    icon: '🧅',
    duration: '110-120 days', 
    yield: '120-140 qtl/acre', 
    resistance: 'Purple Blotch, Basal Rot', 
    certification: 'DOGR / ICAR Certified', 
    price: '₹1,450/kg', 
    season: 'Kharif / Late Kharif', 
    img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=400&q=80', 
    germination: '88%', 
    purity: '99.0%', 
    suitable: ['Sandy Loam', 'Deep Friable Loam'] 
  },
  { 
    id: 'V3', 
    variety: 'Potato Seed Tubers (Kufri Jyoti)', 
    crop: 'Potato', 
    category: 'Vegetables',
    icon: '🥔',
    duration: '90-100 days', 
    yield: '100-120 qtl/acre', 
    resistance: 'Late Blight Moderate, Wart Immune', 
    certification: 'CPRI Shimla Certified', 
    price: '₹2,600/50kg bag', 
    season: 'Rabi', 
    img: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80', 
    germination: '96%', 
    purity: '99.5%', 
    suitable: ['Well-drained Sandy Loam', 'Alluvial Soil'] 
  },
  { 
    id: 'V4', 
    variety: 'Hot Chilli Hybrid (Teja 4 F1)', 
    crop: 'Chilli', 
    category: 'Vegetables',
    icon: '🌶️',
    duration: '150-160 days', 
    yield: '25-30 qtl/acre dry', 
    resistance: 'Anthracnose & Thrips Tolerance', 
    certification: 'Govt. Certified F1', 
    price: '₹890/10g packet', 
    season: 'Kharif / Rabi', 
    img: 'https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=400&q=80', 
    germination: '91%', 
    purity: '99.2%', 
    suitable: ['Black Cotton', 'Loamy Soil'] 
  },
  { 
    id: 'V5', 
    variety: 'Capsicum Bell Pepper (Indra Green)', 
    crop: 'Capsicum', 
    category: 'Vegetables',
    icon: '🫑',
    duration: '75-80 days', 
    yield: '18-22 tonnes/acre', 
    resistance: 'Tobacco Mosaic Virus (TMV)', 
    certification: 'Syngenta Certified', 
    price: '₹1,200/10g packet', 
    season: 'Polyhouse / Kharif / Rabi', 
    img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?auto=format&fit=crop&w=400&q=80', 
    germination: '93%', 
    purity: '99.5%', 
    suitable: ['Loamy', 'Rich Organic Soils'] 
  },
  { 
    id: 'V6', 
    variety: 'Cauliflower (Pusa Snowball K-1)', 
    crop: 'Cauliflower', 
    category: 'Vegetables',
    icon: '🥦',
    duration: '110-120 days', 
    yield: '12-15 tonnes/acre', 
    resistance: 'Black Rot, Downy Mildew', 
    certification: 'IARI Certified', 
    price: '₹620/50g', 
    season: 'Rabi (Winter)', 
    img: 'https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=400&q=80', 
    germination: '89%', 
    purity: '98.5%', 
    suitable: ['Loamy', 'Clay Loam'] 
  },
  { 
    id: 'V7', 
    variety: 'Cabbage (Golden Acre F1)', 
    crop: 'Cabbage', 
    category: 'Vegetables',
    icon: '🥬',
    duration: '60-65 days after transplant', 
    yield: '15-18 tonnes/acre', 
    resistance: 'Yellowing & Head Splitting', 
    certification: 'NSC Certified', 
    price: '₹480/50g', 
    season: 'Rabi / Early Winter', 
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', 
    germination: '92%', 
    purity: '99.0%', 
    suitable: ['Moist Sandy Loam', 'Clay Loam'] 
  },
  { 
    id: 'V8', 
    variety: 'Spinach / Palak (All Green)', 
    crop: 'Spinach', 
    category: 'Vegetables',
    icon: '🌱',
    duration: '35-40 days (multiple cuts)', 
    yield: '5-6 tonnes/acre', 
    resistance: 'Bolting resistant, Leaf spot', 
    certification: 'IARI Certified', 
    price: '₹220/250g', 
    season: 'Year-round', 
    img: 'https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=400&q=80', 
    germination: '87%', 
    purity: '98.0%', 
    suitable: ['Loam', 'Sandy Loam'] 
  },
  { 
    id: 'V9', 
    variety: 'Okra / Bhindi (Radhika F1 Hybrid)', 
    crop: 'Okra', 
    category: 'Vegetables',
    icon: '🌿',
    duration: '45-50 days', 
    yield: '6-8 tonnes/acre', 
    resistance: 'YVMV (Yellow Vein Mosaic) & ELCV', 
    certification: 'Advanta Certified', 
    price: '₹550/100g', 
    season: 'Summer / Kharif', 
    img: 'https://images.unsplash.com/photo-1625944525533-473f1a3d54e7?auto=format&fit=crop&w=400&q=80', 
    germination: '91%', 
    purity: '99.0%', 
    suitable: ['Alluvial', 'Clay Loam'] 
  },
  { 
    id: 'V10', 
    variety: 'Brinjal / Eggplant (Pusa Purple Cluster)', 
    crop: 'Brinjal', 
    category: 'Vegetables',
    icon: '🍆',
    duration: '120-130 days', 
    yield: '14-16 tonnes/acre', 
    resistance: 'Phomopsis Blight, Little Leaf', 
    certification: 'IARI Certified', 
    price: '₹340/50g', 
    season: 'Kharif / Rabi', 
    img: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=400&q=80', 
    germination: '90%', 
    purity: '98.5%', 
    suitable: ['Well-drained Loam', 'Silt Loam'] 
  },
  { 
    id: 'V11', 
    variety: 'Carrot (Pusa Rudhira Red)', 
    crop: 'Carrot', 
    category: 'Vegetables',
    icon: '🥕',
    duration: '85-90 days', 
    yield: '10-12 tonnes/acre', 
    resistance: 'High Carotene, Heat Tolerant', 
    certification: 'IARI Certified', 
    price: '₹420/200g', 
    season: 'Rabi (Winter)', 
    img: 'https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=400&q=80', 
    germination: '88%', 
    purity: '99.0%', 
    suitable: ['Deep Loose Sandy Loam'] 
  },
  { 
    id: 'V12', 
    variety: 'Cucumber Hybrid (Malini F1)', 
    crop: 'Cucumber', 
    category: 'Vegetables',
    icon: '🥒',
    duration: '42-45 days', 
    yield: '15-18 tonnes/acre', 
    resistance: 'Downy & Powdery Mildew', 
    certification: 'Seminis F1', 
    price: '₹680/50g', 
    season: 'Summer / Kharif', 
    img: 'https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=400&q=80', 
    germination: '95%', 
    purity: '99.5%', 
    suitable: ['Sandy Loam', 'Rich Organic'] 
  },
  { 
    id: 'V13', 
    variety: 'Bitter Gourd / Karela (Pale Green F1)', 
    crop: 'Bitter Gourd', 
    category: 'Vegetables',
    icon: '🥒',
    duration: '55-60 days', 
    yield: '6-8 tonnes/acre', 
    resistance: 'Mosaic Virus, Fruit Fly Tolerant', 
    certification: 'National Seeds F1', 
    price: '₹490/50g', 
    season: 'Zaid / Kharif', 
    img: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80', 
    germination: '89%', 
    purity: '98.5%', 
    suitable: ['Sandy Loam', 'Medium Black'] 
  },
  { 
    id: 'V14', 
    variety: 'Garlic Cloves Seed (Yamuna Safed G-282)', 
    crop: 'Garlic', 
    category: 'Vegetables',
    icon: '🧄',
    duration: '140-150 days', 
    yield: '65-75 qtl/acre', 
    resistance: 'Thrips & Purple Blotch', 
    certification: 'NHRDF Certified', 
    price: '₹3,200/25kg', 
    season: 'Rabi', 
    img: 'https://images.unsplash.com/photo-1540148426945-6cf22a6b2383?auto=format&fit=crop&w=400&q=80', 
    germination: '96%', 
    purity: '99.8%', 
    suitable: ['Well-drained Clay Loam'] 
  },

  // ─── FRUITS & PLANTATIONS (12 Items) ─────────────────
  { 
    id: 'F1', 
    variety: 'Mango Grafted Saplings (Alphonso / Hapus)', 
    crop: 'Mango', 
    category: 'Fruits',
    icon: '🥭',
    duration: '3-4 years to first fruit', 
    yield: '8-10 tonnes/acre at maturity', 
    resistance: 'Anthracnose Tolerant Rootstock', 
    certification: 'Konkan Krishi Vidyapeeth Certified', 
    price: '₹220/grafted plant', 
    season: 'Monsoon Planting (Jul-Aug)', 
    img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=400&q=80', 
    germination: '100% (Living Sapling)', 
    purity: 'True-to-Type', 
    suitable: ['Laterite', 'Red Loam', 'Well-drained Black'] 
  },
  { 
    id: 'F2', 
    variety: 'Banana Tissue Culture (Grand Naine G-9)', 
    crop: 'Banana', 
    category: 'Fruits',
    icon: '🍌',
    duration: '11-12 months', 
    yield: '35-40 tonnes/acre (30kg bunch)', 
    resistance: 'Panama Wilt Tolerant (Virus-indexed)', 
    certification: 'DBT Accredited TC Lab', 
    price: '₹18/plantlet (min 100)', 
    season: 'All Year with drip', 
    img: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80', 
    germination: '99% Survival', 
    purity: '100% Virus-Free', 
    suitable: ['Fertile Clay Loam', 'Alluvial'] 
  },
  { 
    id: 'F3', 
    variety: 'Pomegranate Air-Layered (Bhagwa Super)', 
    crop: 'Pomegranate', 
    category: 'Fruits',
    icon: '🍎',
    duration: '18-24 months to harvest', 
    yield: '6-8 tonnes/acre', 
    resistance: 'Bacterial Blight Screened', 
    certification: 'NRCP Solapur Certified', 
    price: '₹85/plant', 
    season: 'Monsoon / Mrig Bahar', 
    img: 'https://images.unsplash.com/photo-1541344999736-83eca872f241?auto=format&fit=crop&w=400&q=80', 
    germination: '98% Rooting', 
    purity: 'True-to-Variety', 
    suitable: ['Light Loam', 'Sandy Gravel'] 
  },
  { 
    id: 'F4', 
    variety: 'Papaya Hybrid Seeds (Red Lady 786)', 
    crop: 'Papaya', 
    category: 'Fruits',
    icon: '🍈',
    duration: '8-9 months to first harvest', 
    yield: '40-50 tonnes/acre (60kg/tree)', 
    resistance: 'Papaya Ring Spot Virus Tolerant', 
    certification: 'Known-You Seed Certified', 
    price: '₹550/10g packet (approx 500 seeds)', 
    season: 'Feb-Mar / Jun-Jul', 
    img: 'https://images.unsplash.com/photo-1617112848923-cc2234396a8d?auto=format&fit=crop&w=400&q=80', 
    germination: '92%', 
    purity: '99.5%', 
    suitable: ['Sandy Loam', 'High Drainage Soil'] 
  },
  { 
    id: 'F5', 
    variety: 'Guava Hybrid Saplings (VNR Bihi Giant)', 
    crop: 'Guava', 
    category: 'Fruits',
    icon: '🍐',
    duration: '15-18 months', 
    yield: '12-15 tonnes/acre (Jumbo 400g fruit)', 
    resistance: 'Wilt & Fruit Borer Resistance', 
    certification: 'VNR Nursery Certified', 
    price: '₹140/grafted plant', 
    season: 'June - September', 
    img: 'https://images.unsplash.com/photo-1536511135899-8d4847e9eecf?auto=format&fit=crop&w=400&q=80', 
    germination: '98% Plant Survival', 
    purity: 'Authentic VNR', 
    suitable: ['Alluvial', 'Deep Clay Loam'] 
  },
  { 
    id: 'F6', 
    variety: 'Watermelon Hybrid (Maxx / Black Beauty F1)', 
    crop: 'Watermelon', 
    category: 'Fruits',
    icon: '🍉',
    duration: '75-80 days', 
    yield: '25-30 tonnes/acre', 
    resistance: 'Fusarium Wilt & Anthracnose', 
    certification: 'Syngenta Certified', 
    price: '₹850/50g', 
    season: 'Summer (Jan-March)', 
    img: 'https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=400&q=80', 
    germination: '95%', 
    purity: '99.5%', 
    suitable: ['Riverbed Sandy', 'Sandy Loam'] 
  },
  { 
    id: 'F7', 
    variety: 'Muskmelon Hybrid (Kundan F1)', 
    crop: 'Muskmelon', 
    category: 'Fruits',
    icon: '🍈',
    duration: '65-70 days', 
    yield: '10-12 tonnes/acre (13° Brix Sweetness)', 
    resistance: 'Powdery Mildew Race 1 & 2', 
    certification: 'Nunhems Certified', 
    price: '₹1,100/50g', 
    season: 'Zaid / Spring', 
    img: 'https://images.unsplash.com/photo-1596707325608-251f251e60f0?auto=format&fit=crop&w=400&q=80', 
    germination: '93%', 
    purity: '99.0%', 
    suitable: ['Sandy Loam', 'Warm Riverbeds'] 
  },
  { 
    id: 'F8', 
    variety: 'Citrus / Orange Grafted (Nagpur Santra)', 
    crop: 'Orange', 
    category: 'Fruits',
    icon: '🍊',
    duration: '3 years to bearing', 
    yield: '8-10 tonnes/acre', 
    resistance: 'Phytophthora Gummosis Screened', 
    certification: 'CCRI Nagpur Certified', 
    price: '₹95/plant', 
    season: 'Monsoon Planting', 
    img: 'https://images.unsplash.com/photo-1582979512210-99b6a53386f9?auto=format&fit=crop&w=400&q=80', 
    germination: '96% Survival', 
    purity: 'Rangpur Lime Rootstock', 
    suitable: ['Medium to Deep Black Cotton'] 
  },
  { 
    id: 'F9', 
    variety: 'Apple Low-Chill Saplings (HRMN-99)', 
    crop: 'Apple', 
    category: 'Fruits',
    icon: '🍎',
    duration: '2nd year onwards (Tropical/Warm apple)', 
    yield: '10-12 tonnes/acre at maturity', 
    resistance: 'Scab Resistant, Low Chilling (100 hrs)', 
    certification: 'NIF India Certified', 
    price: '₹280/plant', 
    season: 'Dec - Feb', 
    img: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80', 
    germination: '95% Survival', 
    purity: 'Clonal Rootstock', 
    suitable: ['Plain Loamy', 'Sub-tropical Soils'] 
  },
  { 
    id: 'F10', 
    variety: 'Grapes Rootstock (Thompson Seedless)', 
    crop: 'Grapes', 
    category: 'Fruits',
    icon: '🍇',
    duration: '18 months to first cane harvest', 
    yield: '12-15 tonnes/acre table grape', 
    resistance: 'Downy Mildew & Nematode on Dogridge', 
    certification: 'NRC Grapes Pune Certified', 
    price: '₹65/rooted vine', 
    season: 'Oct - Dec', 
    img: 'https://images.unsplash.com/photo-1537640538966-79f369143f8f?auto=format&fit=crop&w=400&q=80', 
    germination: '97% Take', 
    purity: 'Certified Clonal Vine', 
    suitable: ['Light Loam', 'Well-aerated Gravel'] 
  },
  { 
    id: 'F11', 
    variety: 'Dragon Fruit Cuttings (Red Flesh Royal)', 
    crop: 'Dragon Fruit', 
    category: 'Fruits',
    icon: '🐉',
    duration: '12-14 months', 
    yield: '5-6 tonnes/acre (requires RCC trellis)', 
    resistance: 'Drought & Heat Tolerant up to 48°C', 
    certification: 'ICAR-IIHR Certified', 
    price: '₹45/rooted cutting', 
    season: 'March - August', 
    img: 'https://images.unsplash.com/photo-1527325678964-54921661f888?auto=format&fit=crop&w=400&q=80', 
    germination: '99% Survival', 
    purity: 'Red Pulp High Bx', 
    suitable: ['Sandy Soil', 'Rocky Arid Land'] 
  },
  { 
    id: 'F12', 
    variety: 'Strawberry Runners (Winter Dawn)', 
    crop: 'Strawberry', 
    category: 'Fruits',
    icon: '🍓',
    duration: '60-70 days', 
    yield: '6-8 tonnes/acre', 
    resistance: 'Anthracnose & Root Rot Screened', 
    certification: 'Mahabaleshwar Growers Certified', 
    price: '₹14/runner (min 100)', 
    season: 'September - October', 
    img: 'https://images.unsplash.com/photo-1543528176-61b239494933?auto=format&fit=crop&w=400&q=80', 
    germination: '95% Rooting', 
    purity: 'Elite Crown Runner', 
    suitable: ['Acidic Sandy Loam (pH 5.5-6.5)'] 
  },

  // ─── FIELD CROPS & SEEDS (8 Items) ──────────────────
  { 
    id: 'S1', 
    variety: 'Wheat Certified (HD-2967)', 
    crop: 'Wheat', 
    category: 'Grains & Cash Crops',
    icon: '🌾',
    duration: '140-150 days', 
    yield: '45-50 qtl/acre', 
    resistance: 'Yellow Rust, Powdery Mildew', 
    certification: 'ICAR / NSC Certified', 
    price: '₹2,800/40kg', 
    season: 'Rabi (Nov-Dec)', 
    img: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=400&q=80', 
    germination: '95%', 
    purity: '99.5%', 
    suitable: ['Loamy', 'Sandy Loam'] 
  },
  { 
    id: 'S2', 
    variety: 'Basmati Rice (Pusa-1121)', 
    crop: 'Rice', 
    category: 'Grains & Cash Crops',
    icon: '🌾',
    duration: '145 days', 
    yield: '35-40 qtl/acre (Extra Long Grain)', 
    resistance: 'Blast Tolerant', 
    certification: 'IARI Certified', 
    price: '₹3,200/25kg', 
    season: 'Kharif', 
    img: 'https://images.unsplash.com/photo-1536304993881-ff6e9eefa2a6?auto=format&fit=crop&w=400&q=80', 
    germination: '92%', 
    purity: '99.0%', 
    suitable: ['Clay Loam', 'Heavy Soils'] 
  },
  { 
    id: 'S3', 
    variety: 'Hybrid Maize Seeds (Pioneer 3302)', 
    crop: 'Maize', 
    category: 'Grains & Cash Crops',
    icon: '🌽',
    duration: '95-105 days', 
    yield: '70-80 qtl/acre', 
    resistance: 'Fall Armyworm & Stem Borer', 
    certification: 'Pioneer Certified', 
    price: '₹1,950/5kg', 
    season: 'Kharif / Rabi', 
    img: 'https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=400&q=80', 
    germination: '96%', 
    purity: '99.8%', 
    suitable: ['Loamy', 'Sandy Loam', 'Clay'] 
  },
  { 
    id: 'S4', 
    variety: 'Cotton Bt Seeds (Bollgard II RCH-659)', 
    crop: 'Cotton', 
    category: 'Grains & Cash Crops',
    icon: '🌱',
    duration: '160-170 days', 
    yield: '25-30 qtl/acre', 
    resistance: 'Bollworm Complex (Cry1Ac+Cry2Ab)', 
    certification: 'DBT Approved GEAC', 
    price: '₹864/450g packet', 
    season: 'Kharif', 
    img: 'https://images.unsplash.com/photo-1471189374-c9b3fa71be7e?auto=format&fit=crop&w=400&q=80', 
    germination: '90%', 
    purity: '98.5%', 
    suitable: ['Deep Black Cotton Soils'] 
  },
  { 
    id: 'S5', 
    variety: 'Soybean Certified (JS-335)', 
    crop: 'Soybean', 
    category: 'Grains & Cash Crops',
    icon: '🌱',
    duration: '95-100 days', 
    yield: '20-25 qtl/acre', 
    resistance: 'Charcoal Rot & Collar Rot', 
    certification: 'MPSDC Certified', 
    price: '₹2,400/30kg bag', 
    season: 'Kharif', 
    img: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=400&q=80', 
    germination: '90%', 
    purity: '98.0%', 
    suitable: ['Black Cotton', 'Medium Loam'] 
  },
  { 
    id: 'S6', 
    variety: 'Mustard (Pusa Bold)', 
    crop: 'Mustard', 
    category: 'Grains & Cash Crops',
    icon: '🌼',
    duration: '110-120 days', 
    yield: '14-16 qtl/acre (41% Oil Content)', 
    resistance: 'White Rust & Alternaria', 
    certification: 'IARI Certified', 
    price: '₹1,200/5kg', 
    season: 'Rabi', 
    img: 'https://images.unsplash.com/photo-1519162808019-7de1683fa2ad?auto=format&fit=crop&w=400&q=80', 
    germination: '93%', 
    purity: '99.0%', 
    suitable: ['Sandy Loam', 'Light Alluvial'] 
  },
  { 
    id: 'S7', 
    variety: 'Chickpea / Desi Chana (JG-11)', 
    crop: 'Chickpea', 
    category: 'Grains & Cash Crops',
    icon: '🫘',
    duration: '95-100 days', 
    yield: '18-20 qtl/acre', 
    resistance: 'Fusarium Wilt Immune', 
    certification: 'ICRISAT Certified', 
    price: '₹2,200/25kg', 
    season: 'Rabi', 
    img: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=400&q=80', 
    germination: '94%', 
    purity: '99.0%', 
    suitable: ['Black Soils', 'Sandy Loam'] 
  },
  { 
    id: 'S8', 
    variety: 'Groundnut High-Yield (Kadiri Lepakshi 1812)', 
    crop: 'Groundnut', 
    category: 'Grains & Cash Crops',
    icon: '🥜',
    duration: '105-110 days', 
    yield: '25-28 qtl/acre (51% Oil Content)', 
    resistance: 'Tikka Disease & Stem Rot', 
    certification: 'ANGRAU Certified', 
    price: '₹2,350/25kg', 
    season: 'Kharif / Rabi', 
    img: 'https://images.unsplash.com/photo-1567890669958-87f30dc2a1e7?auto=format&fit=crop&w=400&q=80', 
    germination: '91%', 
    purity: '98.5%', 
    suitable: ['Red Sandy Loam', 'Well Drained'] 
  }
];

const CATEGORIES = ['All', 'Vegetables', 'Fruits', 'Grains & Cash Crops'];

export default function SeedModule() {
  const { mode, setActiveNav, addToCart } = useApp();
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [selected, setSelected] = useState(null);
  const [compareList, setCompareList] = useState([]);
  const [added, setAdded] = useState({});

  const filtered = SEED_CATALOG.filter(s => {
    const matchesSearch = s.variety.toLowerCase().includes(search.toLowerCase()) ||
      s.crop.toLowerCase().includes(search.toLowerCase()) ||
      s.resistance.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = activeCategory === 'All' || s.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleCompare = (id) => {
    setCompareList(prev => prev.includes(id)
      ? prev.filter(i => i !== id)
      : prev.length < 2 ? [...prev, id] : [...prev.slice(1), id]
    );
  };

  const handleAddToCart = (seed) => {
    addToCart({ id: seed.id, name: seed.variety, price: seed.price, category: seed.category });
    setAdded(prev => ({ ...prev, [seed.id]: true }));
    setTimeout(() => setAdded(prev => ({ ...prev, [seed.id]: false })), 2000);
  };

  const compareSeeds = compareList.map(id => SEED_CATALOG.find(s => s.id === id)).filter(Boolean);

  return (
    <div className="space-y-6 animate-in fade-in duration-200">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-green-100 dark:bg-green-950 text-green-800 dark:text-green-300 border border-green-300 dark:border-green-800 mb-2">
            <Sprout className="w-3.5 h-3.5 text-green-600" />
            <span>ICAR & Govt. Certified Seed Hub</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
            Seeds, Vegetables & Fruit Nursery
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-sm mt-0.5">
            Certified vegetable seeds, hybrid grafts, tissue culture fruit saplings & field crops
          </p>
        </div>
        <button
          onClick={() => setActiveNav('scanner')}
          className="self-start sm:self-auto flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white font-extrabold text-xs shadow-md shadow-emerald-600/20 hover:bg-emerald-700 transition-colors"
        >
          <Camera className="w-4 h-4" />
          <span>Launch Seed / Leaf Scanner</span>
        </button>
      </div>

      {/* Category Pills & Search */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
          {CATEGORIES.map(cat => {
            const count = cat === 'All' 
              ? SEED_CATALOG.length 
              : SEED_CATALOG.filter(s => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-2 rounded-xl text-xs font-bold shrink-0 transition-all ${
                  activeCategory === cat
                    ? 'bg-emerald-600 text-white shadow-md shadow-emerald-600/20'
                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:border-emerald-300'
                }`}
              >
                <span>{cat}</span>
                <span className={`ml-1.5 px-1.5 py-0.5 rounded-full text-[10px] ${
                  activeCategory === cat ? 'bg-white/20 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-500'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        <div className="relative md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search tomato, mango, potato, wheat..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>

      {/* Compare Banner */}
      {compareList.length > 0 && (
        <div className="flex items-center gap-3 p-4 rounded-2xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 animate-in fade-in">
          <Compare className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-semibold text-blue-900 dark:text-blue-200">
            Comparing ({compareList.length}/2): {compareList.map(id => SEED_CATALOG.find(s => s.id === id)?.variety).join(' vs ')}
          </span>
          <button 
            onClick={() => setCompareList([])} 
            className="ml-auto text-xs text-blue-600 dark:text-blue-400 font-bold hover:underline"
          >
            Clear Comparison
          </button>
        </div>
      )}

      {/* Comparison Table */}
      {compareSeeds.length === 2 && (
        <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 overflow-x-auto shadow-md">
          <table className="w-full text-xs">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/80 border-b border-slate-200 dark:border-slate-700">
                <th className="text-left px-5 py-3 font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider text-[10px]">Specification</th>
                {compareSeeds.map(s => (
                  <th key={s.id} className="text-left px-5 py-3 font-extrabold text-emerald-700 dark:text-emerald-400 text-sm">
                    {s.icon} {s.variety}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {[
                ['Category', 'category'],
                ['Crop Species', 'crop'],
                ['Maturity / Duration', 'duration'],
                ['Expected Yield', 'yield'],
                ['Disease Resistance', 'resistance'],
                ['Season', 'season'],
                ['Germination Rate', 'germination'],
                ['Purity', 'purity'],
                ['Certification', 'certification'],
                ['Price / Unit', 'price']
              ].map(([label, key]) => (
                <tr key={key} className="border-t border-slate-100 dark:border-slate-800 hover:bg-slate-50/50 dark:hover:bg-slate-800/40">
                  <td className="px-5 py-2.5 font-medium text-slate-500">{label}</td>
                  {compareSeeds.map(s => (
                    <td key={s.id} className="px-5 py-2.5 font-bold text-slate-900 dark:text-white">
                      {s[key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Catalog Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {filtered.map(seed => (
          <div 
            key={seed.id}
            className="group bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
          >
            {/* Image Header with Badge */}
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 dark:bg-slate-800">
              <img 
                src={seed.img} 
                alt={seed.variety} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent"></div>
              
              <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold bg-white/90 dark:bg-slate-900/90 text-slate-800 dark:text-white backdrop-blur-sm shadow-sm">
                <span>{seed.icon}</span>
                <span>{seed.category}</span>
              </div>

              <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-emerald-600 text-white shadow-sm">
                {seed.germination} Germ.
              </div>

              <div className="absolute bottom-2.5 left-3 right-3">
                <span className="text-xs font-extrabold text-white drop-shadow-md truncate block">
                  {seed.crop}
                </span>
              </div>
            </div>

            {/* Body */}
            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div>
                <h3 className="font-extrabold text-slate-900 dark:text-white text-sm tracking-tight leading-snug line-clamp-1">
                  {seed.variety}
                </h3>
                <div className="text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 mt-0.5 flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{seed.certification}</span>
                </div>

                {/* Specs Pill List */}
                <div className="grid grid-cols-2 gap-2 mt-3 text-[11px]">
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80">
                    <span className="text-slate-400 text-[10px] block">Duration</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 truncate block">{seed.duration}</span>
                  </div>
                  <div className="p-2 rounded-xl bg-slate-50 dark:bg-slate-800/80">
                    <span className="text-slate-400 text-[10px] block">Yield</span>
                    <span className="font-bold text-slate-700 dark:text-slate-300 truncate block">{seed.yield}</span>
                  </div>
                </div>

                <div className="mt-2.5 p-2 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 text-[11px]">
                  <span className="text-emerald-800 dark:text-emerald-300 font-bold block">Resistant To:</span>
                  <span className="text-slate-600 dark:text-slate-300 line-clamp-1">{seed.resistance}</span>
                </div>
              </div>

              {/* Price & Action Footer */}
              <div className="pt-2 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between gap-2">
                <div>
                  <span className="text-[10px] text-slate-400 block uppercase font-bold">Mandi Price</span>
                  <span className="text-base font-extrabold text-emerald-700 dark:text-emerald-400">
                    {seed.price}
                  </span>
                </div>

                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => toggleCompare(seed.id)}
                    className={`p-2 rounded-xl border text-xs transition-colors ${
                      compareList.includes(seed.id)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300'
                    }`}
                    title="Compare specifications"
                  >
                    <Compare className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => handleAddToCart(seed)}
                    className={`px-3 py-2 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm ${
                      added[seed.id]
                        ? 'bg-emerald-700 text-white'
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    {added[seed.id] ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Added</span>
                      </>
                    ) : (
                      <>
                        <ShoppingCart className="w-3.5 h-3.5" />
                        <span>Order</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
}
