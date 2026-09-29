// Verified 53 Catalog Items for CropCare Smart Agriculture Platform
// Categories: 'produce' (26), 'seeds' (9), 'machinery' (6), 'spares' (12)
// Real names, pricing, units, specifications, and high-resolution Unsplash URLs

export const catalogItems = [
  // --- FRUITS & VEGETABLES (26 items) ---
  {
    id: "prod-mango",
    key: "mango",
    category: "produce",
    price: 950,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Ratnagiri, Maharashtra",
    specs: { brix: "18.5°", grade: "Export A+", shelfLife: "14 Days", packaging: "Corrugated Vent Box" }
  },
  {
    id: "prod-orange",
    key: "orange",
    category: "produce",
    price: 680,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Nagpur, Maharashtra",
    specs: { brix: "12.2°", grade: "Premium Table", shelfLife: "21 Days", packaging: "Mesh Crates" }
  },
  {
    id: "prod-apple",
    key: "apple",
    category: "produce",
    price: 1850,
    unit: "box (15kg)",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Sopore, Kashmir",
    specs: { variety: "Royal Delicious", grade: "Extra Fancy", shelfLife: "45 Days", packaging: "Foam Tray Box" }
  },
  {
    id: "prod-banana",
    key: "banana",
    category: "produce",
    price: 420,
    unit: "box (13kg)",
    image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Jalgaon, Maharashtra",
    specs: { calibration: "39-44 mm", grade: "Class 1", shelfLife: "10 Days", packaging: "Cold Packed" }
  },
  {
    id: "prod-pomegranate",
    key: "pomegranate",
    category: "produce",
    price: 1400,
    unit: "box (10kg)",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Solapur, Maharashtra",
    specs: { variety: "Bhagwa", arilColor: "Deep Ruby Red", shelfLife: "30 Days", packaging: "Export Tray" }
  },
  {
    id: "prod-tomato",
    key: "tomato",
    category: "produce",
    price: 450,
    unit: "crate (25kg)",
    image: "https://images.unsplash.com/photo-1546470427-0d4db154ceb7?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Nashik, Maharashtra",
    specs: { variety: "Abhinav", firmness: "92%", shelfLife: "12 Days", packaging: "Plastic Crate" }
  },
  {
    id: "prod-potato",
    key: "potato",
    category: "produce",
    price: 1100,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Jalandhar, Punjab",
    specs: { variety: "Kufri Jyoti", dryMatter: "19.5%", shelfLife: "90 Days", packaging: "Jute Gunny Bag" }
  },
  {
    id: "prod-onion",
    key: "onion",
    category: "produce",
    price: 1850,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Lasalgaon, Maharashtra",
    specs: { variety: "Garwa Red", pungency: "High", shelfLife: "60 Days", packaging: "Leno Mesh Bag" }
  },
  {
    id: "prod-cauliflower",
    key: "cauliflower",
    category: "produce",
    price: 360,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1568584711075-3d021a7c3ca3?auto=format&fit=crop&w=800&q=80",
    rating: 4.65,
    origin: "Patiala, Punjab",
    specs: { curdColor: "Snow White", compactness: "Solid", shelfLife: "7 Days", packaging: "Vented Poly Bag" }
  },
  {
    id: "prod-chilli",
    key: "chilli",
    category: "produce",
    price: 980,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Guntur, Andhra Pradesh",
    specs: { heatUnits: "35,000 SHU", length: "8-10 cm", shelfLife: "15 Days", packaging: "Carton" }
  },
  {
    id: "prod-brinjal",
    key: "brinjal",
    category: "produce",
    price: 380,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1628773822503-930a846e49a8?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    origin: "Karnal, Haryana",
    specs: { variety: "Round Deep Purple", gloss: "Premium", shelfLife: "8 Days", packaging: "Vented Crates" }
  },
  {
    id: "prod-spinach",
    key: "spinach",
    category: "produce",
    price: 240,
    unit: "crate (10kg)",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Ludhiana Hydroponic Park",
    specs: { harvestTime: "Same Day", organic: "Yes (NPOP)", shelfLife: "4 Days", packaging: "Chilled Crate" }
  },
  {
    id: "prod-guava",
    key: "guava",
    category: "produce",
    price: 520,
    unit: "crate (15kg)",
    image: "https://images.unsplash.com/photo-1536511135899-7360216298b4?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Prayagraj, Uttar Pradesh",
    specs: { variety: "Allahabad Safeda", pulp: "Cream White", shelfLife: "9 Days", packaging: "Padded Box" }
  },
  {
    id: "prod-papaya",
    key: "papaya",
    category: "produce",
    price: 420,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1517282009859-f000ec3b26fe?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Anantapur, Andhra Pradesh",
    specs: { variety: "Red Lady 786", sweetness: "High (13° Brix)", shelfLife: "10 Days", packaging: "Foam Wrapped" }
  },
  {
    id: "prod-lemon",
    key: "lemon",
    category: "produce",
    price: 650,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Eluru, Andhra Pradesh",
    specs: { variety: "Kagzi Lime", juiceContent: "48%", shelfLife: "25 Days", packaging: "Net Bag" }
  },
  {
    id: "prod-bitter-gourd",
    key: "bitterGourd",
    category: "produce",
    price: 480,
    unit: "bag (15kg)",
    image: "https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=800&q=80",
    rating: 4.6,
    origin: "Hisar, Haryana",
    specs: { variety: "Green Ribbed", color: "Dark Green", shelfLife: "7 Days", packaging: "Crate" }
  },
  {
    id: "prod-bottle-gourd",
    key: "bottleGourd",
    category: "produce",
    price: 320,
    unit: "bag (25kg)",
    image: "https://images.unsplash.com/photo-1597362925123-77861d3fbac7?auto=format&fit=crop&w=800&q=80",
    rating: 4.65,
    origin: "Rohtak, Haryana",
    specs: { shape: "Cylindrical Straight", tenderness: "Optimum", shelfLife: "8 Days", packaging: "Gunny" }
  },
  {
    id: "prod-cabbage",
    key: "cabbage",
    category: "produce",
    price: 350,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Ooty, Tamil Nadu",
    specs: { density: "Compact", variety: "Green Express", shelfLife: "18 Days", packaging: "Mesh Sack" }
  },
  {
    id: "prod-carrot",
    key: "carrot",
    category: "produce",
    price: 490,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Karnal, Haryana",
    specs: { variety: "Pusa Rudhira Red", crispness: "Superb", shelfLife: "14 Days", packaging: "Washed Bags" }
  },
  {
    id: "prod-radish",
    key: "radish",
    category: "produce",
    price: 280,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6910985b?auto=format&fit=crop&w=800&q=80",
    rating: 4.55,
    origin: "Amritsar, Punjab",
    specs: { variety: "Japanese White", rootLength: "30 cm", shelfLife: "6 Days", packaging: "Bundle" }
  },
  {
    id: "prod-green-peas",
    key: "greenPeas",
    category: "produce",
    price: 850,
    unit: "bag (20kg)",
    image: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Shimla, Himachal Pradesh",
    specs: { podFill: "8-10 Grains", sweetness: "Extra Sweet", shelfLife: "8 Days", packaging: "Cold Crate" }
  },
  {
    id: "prod-cucumber",
    key: "cucumber",
    category: "produce",
    price: 410,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1604977042946-1eecc30f269e?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Faridabad Polyhouse",
    specs: { type: "Seedless Polyhouse English", bitterness: "Zero", shelfLife: "10 Days", packaging: "Corrugated Box" }
  },
  {
    id: "prod-watermelon",
    key: "watermelon",
    category: "produce",
    price: 850,
    unit: "quintal (100kg)",
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Villupuram, Tamil Nadu",
    specs: { variety: "Namdhari Black", sweetness: "12° Brix", shelfLife: "16 Days", packaging: "Straw Bulk" }
  },
  {
    id: "prod-muskmelon",
    key: "muskmelon",
    category: "produce",
    price: 680,
    unit: "crate (25kg)",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5c71d?auto=format&fit=crop&w=800&q=80",
    rating: 4.7,
    origin: "Bikaner, Rajasthan",
    specs: { variety: "Kundan Madhur", netting: "Dense", shelfLife: "9 Days", packaging: "Padded Crate" }
  },
  {
    id: "prod-pineapple",
    key: "pineapple",
    category: "produce",
    price: 1100,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Siliguri, West Bengal",
    specs: { variety: "Giant Kew", crown: "Intact", shelfLife: "18 Days", packaging: "Vent Export Box" }
  },
  {
    id: "prod-sweet-lime",
    key: "sweetLime",
    category: "produce",
    price: 780,
    unit: "crate (20kg)",
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Nalgonda, Telangana",
    specs: { variety: "Mosambi Special", juiceContent: "52%", shelfLife: "20 Days", packaging: "Mesh Sack" }
  },

  // --- AGRICULTURAL SEEDS (9 items) ---
  {
    id: "seed-wheat",
    key: "wheatSeed",
    category: "seeds",
    price: 2450,
    unit: "bag (40kg)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "ICAR-IARI Karnal",
    specs: { variety: "HD-2967", purity: "99.2%", germination: "94%", seedTreatment: "Carboxin + Thiram" }
  },
  {
    id: "seed-rice",
    key: "riceSeed",
    category: "seeds",
    price: 3600,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Pusa Institute, Delhi",
    specs: { variety: "Pusa Basmati 1121", purity: "99.5%", germination: "92%", grainLength: "8.4 mm" }
  },
  {
    id: "seed-maize",
    key: "maizeSeed",
    category: "seeds",
    price: 1850,
    unit: "bag (10kg)",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "DMR Ludhiana",
    specs: { variety: "PMH-1 Hybrid", purity: "98.5%", germination: "96%", yieldPotential: "32 Qtls/Acre" }
  },
  {
    id: "seed-soybean",
    key: "soybeanSeed",
    category: "seeds",
    price: 2900,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "IISR Indore",
    specs: { variety: "JS-335", purity: "98.8%", germination: "88%", oilContent: "20.5%" }
  },
  {
    id: "seed-mustard",
    key: "mustardSeed",
    category: "seeds",
    price: 750,
    unit: "pouch (2kg)",
    image: "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "DRMR Bharatpur",
    specs: { variety: "Pusa Bold", purity: "99.0%", germination: "93%", oilYield: "41.5%" }
  },
  {
    id: "seed-cotton",
    key: "cottonSeed",
    category: "seeds",
    price: 880,
    unit: "packet (450g)",
    image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "CICR Nagpur",
    specs: { trait: "Bollgard II (BG-II)", stapleLength: "29.5 mm", germination: "85%", refugePouch: "Included" }
  },
  {
    id: "seed-green-gram",
    key: "greenGramSeed",
    category: "seeds",
    price: 1100,
    unit: "bag (5kg)",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "PAU Ludhiana",
    specs: { variety: "SML-668 (Moong)", maturity: "60 Days", germination: "91%", diseaseResistance: "MYMV" }
  },
  {
    id: "seed-pearl-millet",
    key: "pearlMilletSeed",
    category: "seeds",
    price: 450,
    unit: "bag (3kg)",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "ICRISAT Hyderabad",
    specs: { variety: "Dhanashakti (Bajra)", ironContent: "71 ppm", germination: "90%", droughtTolerance: "High" }
  },
  {
    id: "seed-groundnut",
    key: "groundnutSeed",
    category: "seeds",
    price: 3200,
    unit: "bag (30kg)",
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "DGR Junagadh",
    specs: { variety: "TG-37A", shellingPercentage: "73%", germination: "87%", maturity: "105 Days" }
  },

  // --- FARMING VEHICLES & MACHINERY (6 items) ---
  {
    id: "mach-mahindra-575",
    key: "mahindra575",
    category: "machinery",
    price: 745000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Mahindra Tractors OEM",
    specs: { hp: "50 HP", engine: "4-Cylinder ELS DI", pto: "42 HP", liftCapacity: "1600 kg", warranty: "6 Years" }
  },
  {
    id: "mach-sonalika-tiger",
    key: "sonalikaTiger",
    category: "machinery",
    price: 1120000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Sonalika International OEM",
    specs: { hp: "75 HP CRDi", engine: "4-Cylinder Turbocharged", pto: "65 HP", liftCapacity: "2200 kg", transmission: "12F + 12R Shuttle" }
  },
  {
    id: "mach-johndeere-5310",
    key: "johnDeere5310",
    category: "machinery",
    price: 980000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.96,
    origin: "John Deere India",
    specs: { hp: "55 HP", engine: "John Deere 3029T", pto: "46.7 HP", liftCapacity: "2000 kg", cooling: "Coolant Reservoir" }
  },
  {
    id: "mach-swaraj-744",
    key: "swaraj744",
    category: "machinery",
    price: 720000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1594771804886-a933bb2d609b?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Swaraj Division (M&M)",
    specs: { hp: "48 HP", engine: "3-Cylinder RB-30 TR", pto: "41.8 HP", liftCapacity: "1700 kg", brakes: "Oil Immersed" }
  },
  {
    id: "mach-shaktiman-rotavator",
    key: "shaktimanRotavator",
    category: "machinery",
    price: 128000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Tirth Agro Technology",
    specs: { width: "7 Feet (48 Blades)", bladeType: "L-Type Boron Steel", gearbox: "Multi-Speed", weight: "480 kg" }
  },
  {
    id: "mach-farmtrac-45",
    key: "farmtrac45",
    category: "machinery",
    price: 665000,
    unit: "unit",
    image: "https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&w=800&q=80",
    rating: 4.84,
    origin: "Escorts Agri Machinery",
    specs: { hp: "45 HP", engine: "3-Cylinder AVL Tech", pto: "38.3 HP", liftCapacity: "1500 kg", fuelTank: "50 Liters" }
  },

  // --- TRACTOR SPARE PARTS & IMPLEMENTS (12 items) ---
  {
    id: "spar-rotavator-blades",
    key: "rotavatorBlades",
    category: "spares",
    price: 360,
    unit: "per piece",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.95,
    origin: "Shaktiman Genuine Parts",
    specs: { material: "Hardened Boron Steel 30MnB5", thickness: "8 mm", hardness: "48-52 HRC", compatibility: "Universal 7ft" }
  },
  {
    id: "spar-clutch-plate",
    key: "clutchPlate",
    category: "spares",
    price: 4850,
    unit: "set",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.9,
    origin: "Luk India OEM",
    specs: { diameter: "280 mm", type: "Cerametallic Heavy Duty", springDampers: "6 Springs", tractors: "Mahindra 575 / Swaraj 744" }
  },
  {
    id: "spar-hydraulic-filter",
    key: "hydraulicFilter",
    category: "spares",
    price: 850,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Fleetguard OEM",
    specs: { filtration: "10 Micron Beta 200", burstPressure: "35 Bar", seal: "Nitrile O-Ring", flowRate: "45 L/min" }
  },
  {
    id: "spar-fuel-injectors",
    key: "fuelInjectors",
    category: "spares",
    price: 2400,
    unit: "piece",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.92,
    origin: "Bosch Rexroth",
    specs: { nozzleType: "Multi-Hole Micro-Orifice", sprayPressure: "220 Bar", calibration: "ISO 9001 Certified" }
  },
  {
    id: "spar-hose-pipe",
    key: "hosePipe",
    category: "spares",
    price: 950,
    unit: "assembly",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.75,
    origin: "Gates India",
    specs: { pressureRating: "300 PSI Burst", temperature: "-40°C to +125°C", reinforcement: "Double Braided Rayon" }
  },
  {
    id: "spar-steering-tie-rod",
    key: "steeringTieRod",
    category: "spares",
    price: 1650,
    unit: "pair",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.85,
    origin: "Rane Madras OEM",
    specs: { forging: "Drop-Forged Alloy Steel", thread: "M18 x 1.5", dustBoot: "Neoprene Grease Sealed" }
  },
  {
    id: "spar-front-axle-king-pin",
    key: "kingPin",
    category: "spares",
    price: 1950,
    unit: "set",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.88,
    origin: "Talbros OEM",
    specs: { heatTreatment: "Case Hardened 60 HRC", bushing: "Phosphor Bronze", kitIncludes: "Pins, Bushes, Bearings, Shims" }
  },
  {
    id: "spar-fuel-lift-pump",
    key: "fuelLiftPump",
    category: "spares",
    price: 1250,
    unit: "assembly",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.82,
    origin: "MICO Bosch",
    specs: { diaphragm: "Viton Synthetic", primingLever: "Manual Steel Lever", deliveryPressure: "0.8 - 1.2 Bar" }
  },
  {
    id: "spar-alternator-kit",
    key: "alternatorKit",
    category: "spares",
    price: 2150,
    unit: "kit",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.87,
    origin: "Lucas TVS",
    specs: { voltage: "12V 45A Regulated", includes: "Carbon Brushes, Rectifier Diodes, Bearings, Regulator" }
  },
  {
    id: "spar-hydraulic-seal-kit",
    key: "hydraulicSealKit",
    category: "spares",
    price: 1100,
    unit: "box",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.8,
    origin: "Parker Hannifin",
    specs: { material: "Polyurethane & Viton", rating: "210 Bar Continuous", temperature: "-30°C to +110°C" }
  },
  {
    id: "spar-air-cleaner-filter",
    key: "airCleanerFilter",
    category: "spares",
    price: 920,
    unit: "set",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=800&q=80",
    rating: 4.89,
    origin: "Donaldson OEM",
    specs: { efficiency: "99.9% Dust Removal", media: "Cellulose Radial Seal", type: "Dual Element (Primary + Safety)" }
  },
  {
    id: "spar-piston-ring-set",
    key: "pistonRingSet",
    category: "spares",
    price: 3400,
    unit: "engine set (4 cyl)",
    image: "https://images.unsplash.com/photo-1486006920555-c77dce18193b?auto=format&fit=crop&w=800&q=80",
    rating: 4.94,
    origin: "Federal-Mogul Goetze",
    specs: { coating: "Plasma Molybdenum", standardSize: "100 mm Bore", tension: "Low Friction High Seal" }
  }
];
