import fs from 'fs';
import path from 'path';

const newPlants = [
  // --- VEGETABLES ---
  {
    name: "Okra / Bhindi",
    local_names: {
      hi: "भिंडी (Bhindi)",
      ta: "வெண்டைக்காய் (Vendaikkai)",
      te: "బెండకాయ (Bendakaya)",
      kn: "ಬೆಂಡೆಕಾಯಿ (Bendekayi)",
      ml: "വെണ്ടയ്ക്ക (Vendakka)",
      mr: "भेंडी (Bhendi)",
      gu: "ભીંડા (Bhinda)",
      pa: "ਭਿੰਡੀ (Bhindi)"
    },
    scientific_name: "Abelmoschus esculentus",
    category: "vegetable",
    how_to_identify_leaf: "Large, cordate, palmately 5-7 lobed leaves with coarse serrated edges, rough hairs on upper and lower surfaces, and long petioles.",
    how_to_identify_seed_or_fruit: "Elongated 5-8 ribbed pyramidal green pod (capsule) with pointy tip containing numerous spherical, greyish-black seeds.",
    lookalikes: ["Wild Okra (Abelmoschus moschatus)", "Cotton leaves (Gossypium)", "Roselle (Hibiscus sabdariffa)"],
    season: "Summer (Feb-March) and Kharif (June-July); warm humid climate",
    soil: "Well-drained sandy loam to clay loam rich in organic matter; pH 6.0-6.8",
    water: "Moderate; irrigation every 4-5 days in summer and 7-8 days in rainy season; sensitive to waterlogging",
    seed_rate_and_sowing: "Kharif: 8-10 kg/ha; Summer: 12-15 kg/ha; Spacing: 45x30 cm; Depth: 2-3 cm; Pre-soak seeds in water for 12 hours for rapid germination",
    nutrition_per_100g: {
      carbs_g: "7.45",
      fiber_g: "3.2",
      protein_g: "1.93",
      fat_g: "0.19",
      calories_kcal: "33",
      key_vitamins_minerals: ["Vitamin C", "Vitamin K", "Folate (B9)", "Magnesium", "Calcium", "Antioxidants (Polyphenols)"]
    },
    benefits: ["Rich in soluble mucilage fiber that aids gut digestion and manages cholesterol", "Low glycemic index beneficial for diabetics", "High vitamin C supports immune defenses"],
    risks_or_cautions: ["High in oxalates; consume in moderation if predisposed to calcium oxalate kidney stones"],
    medicinal_uses: ["Okra soaked water consumed in morning for blood sugar regulation", "Mucilage applied topically to calm skin irritation"],
    diseases: [
      {
        name: "Yellow Vein Mosaic Virus (YVMV)",
        type: "viral",
        symptoms: "Homogeneous interlacing of yellow veins enclosing green islands; leaves turn completely chlorotic yellow; fruits remain small, yellowish-white, and fibrous.",
        cause: "Begomovirus transmitted persistently by the Whitefly (Bemisia tabaci).",
        organic_treatment: ["Install yellow sticky traps @ 20-25 per acre", "Foliar spray of 5% Neem Seed Kernel Extract (NSKE) or 1% Neem Oil 1500 ppm", "Spray Verticillium lecanii @ 5g/L"],
        chemical_treatment_type: ["Thiamethoxam 25% WG @ 0.3g/L", "Acetamiprid 20% SP @ 0.5g/L", "Spiromesifen 22.9% SC @ 1 ml/L"],
        prevention: ["Sow resistant hybrid cultivars like Arka Anamika, Parbhani Kranti, Kashi Kranti", "Roguing and burning of infected early plants", "Barrier crops of maize/sorghum around borders"]
      },
      {
        name: "Shoot and Fruit Borer (Earias vittella)",
        type: "pest",
        symptoms: "Terminal shoots droop and wither; larvae bore into young flower buds and tender pods leaving boreholes plugged with excreta.",
        cause: "Lepidopteran spotted bollworm larvae boring inside shoots and pods.",
        organic_treatment: ["Pheromone traps with Ervitlure @ 12 traps/ha", "Release egg parasitoid Trichogramma chilonis @ 50,000/ha", "Spray Bacillus thuringiensis (Bt) @ 2g/L"],
        chemical_treatment_type: ["Emamectin benzoate 5% SG @ 0.5g/L", "Spinosad 45% SC @ 0.3ml/L", "Chlorantraniliprole 18.5% SC @ 0.4ml/L"],
        prevention: ["Clip and destroy withered shoots every week", "Avoid overlapping solanaceous/malvaceous crop cycles", "Hand-pick damaged pods at harvest"]
      }
    ]
  },
  {
    name: "Cabbage",
    local_names: {
      hi: "पत्ता गोभी / बंद गोभी (Patta Gobhi)",
      ta: "முட்டைக்கோஸ் (Muttaikos)",
      te: "క్యాబేజీ (Cabbage)",
      kn: "ಎಲೆಕೋಸು (Elekosu)",
      ml: "കാബേജ് (Cabbage)",
      mr: "कोबी (Kobi)",
      gu: "કોબીજ (Kobij)",
      pa: "ਬੰਦ ਗੋਭੀ (Band Gobhi)"
    },
    scientific_name: "Brassica oleracea var. capitata",
    category: "vegetable",
    how_to_identify_leaf: "Broad, waxy glaucous bluish-green leaves tightly folded into a dense, solid globular head with fleshy central veins.",
    how_to_identify_seed_or_fruit: "Head consists of compact overlapping crisp leaves; small siliqua pods bearing tiny rounded dark brown to black seeds.",
    lookalikes: ["Cauliflower in early rosette stage", "Kale (Brassica oleracea var. acephala)", "Brussels sprouts"],
    season: "Rabi cool-season crop (Sept-Nov nursery sowing; harvest Dec-March); hill areas grown in summer",
    soil: "Well-drained rich sandy loam to silt loam with pH 6.0-6.8; sensitive to boron and molybdenum deficiency",
    water: "Uniform soil moisture; 350-500 mm; dry spells followed by sudden heavy watering cause head splitting",
    seed_rate_and_sowing: "Early varieties: 500-600 g/ha; Late varieties: 350-400 g/ha; Transplant 25-30 day seedlings; Spacing: 45x45 cm or 60x45 cm",
    nutrition_per_100g: {
      carbs_g: "5.8",
      fiber_g: "2.5",
      protein_g: "1.28",
      fat_g: "0.1",
      calories_kcal: "25",
      key_vitamins_minerals: ["Vitamin C", "Vitamin K1", "Folate", "Glucosinolates", "Potassium"]
    },
    benefits: ["Potent anti-cancer glucosinolates and sulforaphane", "Aids weight loss and digestive regularity", "High vitamin K supports bone mineralization"],
    risks_or_cautions: ["Goitrogenic compounds can interfere with iodine uptake if consumed raw in very large quantities with thyroid disorder"],
    medicinal_uses: ["Warm cabbage leaf compress used for breast engorgement and joint inflammation", "Fermented cabbage (sauerkraut/kimchi) for probiotic restoration"],
    diseases: [
      {
        name: "Diamondback Moth - DBM (Plutella xylostella)",
        type: "pest",
        symptoms: "Shot-holes on leaves; larvae scrape the epidermal tissue creating transparent window panes on outer and inner head leaves.",
        cause: "Small grey-brown moth larvae that wriggle vigorously and drop down on a silk thread when touched.",
        organic_treatment: ["Mustard as a trap crop (2 rows of mustard for every 25 rows of cabbage)", "Spray Bacillus thuringiensis (Bt) var. kurstaki @ 2g/L in evening", "NSKE 5% spray"],
        chemical_treatment_type: ["Chlorantraniliprole 18.5% SC @ 0.3ml/L", "Spinetoram 11.7% SC @ 0.8ml/L", "Flubendiamide 39.35% SC @ 0.2ml/L"],
        prevention: ["Intercrop with tomato or coriander to repel adult moths", "Pheromone traps @ 10-12/ha for monitoring", "Avoid repeated use of single synthetic pyrethroid"]
      },
      {
        name: "Black Rot (Xanthomonas campestris pv. campestris)",
        type: "bacterial",
        symptoms: "Characteristic V-shaped yellow necrotic lesions with dark veins originating at leaf margins; vascular bundles in stem turn black.",
        cause: "Seed-borne and splash-dispersed bacterium entering through hydathodes along leaf edges.",
        organic_treatment: ["Hot water seed treatment at 50°C for 30 minutes", "Pseudomonas fluorescens @ 10g/L spray", "Copper Hydroxide @ 2g/L"],
        chemical_treatment_type: ["Streptocycline 1g in 10L water combined with Copper Oxychloride 25g", "Kasugamycin 3% SL"],
        prevention: ["Crop rotation for 3 years away from crucifers", "Use certified disease-free seeds", "Ensure raised beds with good drainage"]
      }
    ]
  },
  {
    name: "Cauliflower",
    local_names: {
      hi: "फूल गोभी (Phool Gobhi)",
      ta: "காலிஃபிளவர் (Cauliflower)",
      te: "కాలీఫ్లవర్ (Cauliflower)",
      kn: "ಹೂಕೋಸು (Hukosu)",
      ml: "കോളിഫ്ലവർ (Cauliflower)",
      mr: "फ्लॉवर (Flower)",
      gu: "ફૂલેવર (Phulevar)",
      pa: "ਫੁੱਲ ਗੋਭੀ (Phull Gobhi)"
    },
    scientific_name: "Brassica oleracea var. botrytis",
    category: "vegetable",
    how_to_identify_leaf: "Oblong, upright, dark green glaucous leaves with heavy central midribs enveloping a central white or creamy curd.",
    how_to_identify_seed_or_fruit: "Terminal curd made of densely clustered, aborted flower buds; spherical small reddish-brown seeds produced in mature siliquae.",
    lookalikes: ["Broccoli (Brassica oleracea var. italica)", "Cabbage in early stages"],
    season: "Rabi cool-season crop (Sept-Nov planting); requires cool night temperatures (15-20°C) for curd initiation",
    soil: "Deep, rich loam with high organic matter, excellent water holding and neutral pH 6.0-7.0",
    water: "Continuous moderate moisture; sensitive to waterlogging and drought; requires 350-450 mm",
    seed_rate_and_sowing: "Early: 600-750 g/ha; Mid/Late: 350-450 g/ha; Spacing: 45x45 cm (early) or 60x45 cm (late); Transplant 25-30 day seedlings",
    nutrition_per_100g: {
      carbs_g: "4.97",
      fiber_g: "2.0",
      protein_g: "1.92",
      fat_g: "0.28",
      calories_kcal: "25",
      key_vitamins_minerals: ["Vitamin C", "Choline", "Vitamin B6", "Potassium", "Sulforaphane", "Boron"]
    },
    benefits: ["Rich in choline supporting brain health and cellular membrane synthesis", "Low calorie carbohydrate substitute for keto diets", "High antioxidant sulforaphane reduces systemic inflammation"],
    risks_or_cautions: ["Can cause flatulence in individuals sensitive to raffinose oligosaccharides"],
    medicinal_uses: ["Steam preparations used in detoxifying metabolic diets", "Broth supports kidney fluid balance"],
    diseases: [
      {
        name: "Browning / Hollow Heart (Boron Deficiency)",
        type: "physiological",
        symptoms: "Curd surfaces develop rusty brown water-soaked spots; stems become hollow and discolored inside; curds turn bitter.",
        cause: "Deficiency of available soil boron, exacerbated in sandy leached soils or excessive nitrogen.",
        organic_treatment: ["Apply well-decomposed FYM or compost @ 15-20 tonnes/ha", "Mulching to maintain even moisture"],
        chemical_treatment_type: ["Soil application of Borax @ 10-15 kg/ha at land prep", "Foliar spray of Solubor (20% B) @ 1.5g/L at 30 and 45 DAS"],
        prevention: ["Test soil boron before planting", "Avoid over-dosing chemical nitrogen fertilizers", "Maintain pH around 6.5"]
      },
      {
        name: "Clubroot (Plasmodiophora brassicae)",
        type: "fungal",
        symptoms: "Plants wilt during daytime sun; roots develop club-shaped, spindle-like swelling or galls; stunted growth.",
        cause: "Soil-borne obligate protozoan parasite favored by wet, acidic soils (pH < 6.5).",
        organic_treatment: ["Apply agricultural lime to raise soil pH above 7.2", "Bio-control with Trichoderma harzianum @ 5 kg/ha"],
        chemical_treatment_type: ["Drenching with Carbendazim 50% WP @ 2g/L or Fluazinam 39.5% SC"],
        prevention: ["Crop rotation for 5-7 years with non-cruciferous crops", "Solarize nursery beds with clear polythene", "Use only disease-free nursery seedlings"]
      }
    ]
  },
  {
    name: "Bitter Gourd / Karela",
    local_names: {
      hi: "करेला (Karela)",
      ta: "பாகற்காய் (Pavakkai)",
      te: "కాకరకాయ (Kakarakaya)",
      kn: "ಹಾಗಲಕಾಯಿ (Hagalakayi)",
      ml: "പാവയ്ക്ക (Pavakka)",
      mr: "कारले (Karle)",
      gu: "કારેલા (Karela)",
      pa: "ਕਰੇਲਾ (Karela)"
    },
    scientific_name: "Momordica charantia",
    category: "vegetable",
    how_to_identify_leaf: "Slender climbing vine with simple tendrils; leaves deeply palmately 5-9 lobed, thin, bright green with pungent odor when crushed.",
    how_to_identify_seed_or_fruit: "Oblong, warty, ridged fruit with pointed tips; turns bright yellow-orange when ripe; seeds are flat, sculptured with a scarlet aril.",
    lookalikes: ["Spine gourd / Kantola (Momordica dioica)", "Snake gourd in tender phase"],
    season: "Summer (Jan-March) and Rainy/Kharif (June-July); thrives in warm temperatures 24-35°C",
    soil: "Well-drained sandy loam rich in organic matter; pH 6.0-7.0",
    water: "Irrigate every 4-6 days in summer, 8-10 days in rainy season; sensitive to standing water",
    seed_rate_and_sowing: "4-5 kg/ha; Seed treatment with Trichoderma viride 4g/kg; Sow in pits on bower / trellis system with spacing 2.0x1.5 m",
    nutrition_per_100g: {
      carbs_g: "3.7",
      fiber_g: "2.8",
      protein_g: "1.0",
      fat_g: "0.17",
      calories_kcal: "17",
      key_vitamins_minerals: ["Vitamin C", "Folate", "Charantin", "Polypeptide-p", "Vicene", "Zinc"]
    },
    benefits: ["Proven anti-hyperglycemic properties; charantin and polypeptide-p act as plant insulin", "Purifies blood and enhances liver functions", "Rich source of dietary folate and vitamin C"],
    risks_or_cautions: ["Excessive intake can trigger hypoglycemic drops in diabetics on insulin; avoid during pregnancy due to uterine stimulating actions"],
    medicinal_uses: ["Fresh bitter gourd juice taken empty stomach for diabetes management", "Decoction of leaves used for intestinal worms"],
    diseases: [
      {
        name: "Downy Mildew (Pseudoperonospora cubensis)",
        type: "fungal",
        symptoms: "Angular chlorotic yellow spots bounded by veins on upper leaf surfaces; purplish downy fungal growth on underside.",
        cause: "Oomycete fungus favored by cool nights, warm days, and prolonged leaf wetness.",
        organic_treatment: ["Spray Bordeaux mixture 1%", "Pseudomonas fluorescens 10g/L foliar spray", "Neem oil 3% with soft soap"],
        chemical_treatment_type: ["Metalaxyl 8% + Mancozeb 64% WP @ 2.5g/L", "Cymoxanil 8% + Mancozeb 64% WP @ 2g/L", "Mandipropamid 23.4% SC"],
        prevention: ["Provide trellis support to keep foliage off moist soil", "Avoid overhead furrow irrigation", "Ensure generous plant-to-plant ventilation"]
      },
      {
        name: "Melon Fruit Fly (Bactrocera cucurbitae)",
        type: "pest",
        symptoms: "Female fly punctures tender young fruits with ovipositor; maggots feed inside causing rotting, distortion, and premature dropping.",
        cause: "Dipteran fly ovipositing inside flesh of cucurbit fruits.",
        organic_treatment: ["Install Cue-lure pheromone fruit fly traps @ 15-20 per acre", "Bait spray using jaggery (100g) + Malathion (20ml) in 10L water in spot patches", "Bagging young fruits with paper covers"],
        chemical_treatment_type: ["Bait traps with Malathion 50% EC", "Neem-based repellant sprays", "Dichlorvos 76% EC @ 1ml/L (selective spray away from bees)"],
        prevention: ["Collect and deeply bury all dropped and infested fruits", "Deep summer ploughing to expose pupae to birds and sun", "Early morning harvest before fly activity peaks"]
      }
    ]
  },
  {
    name: "Bottle Gourd / Lauki",
    local_names: {
      hi: "लौकी / घिया (Lauki / Ghiya)",
      ta: "சுரைக்காய் (Suraikkai)",
      te: "సొరకాయ / ఆనపకాయ (Sorakaya)",
      kn: "ಸೋರೆಕಾಯಿ (Sorekayi)",
      ml: "ചുരയ്ക്ക (Churakka)",
      mr: "दूधी भोपळा (Dudhi Bhopla)",
      gu: "દૂધી (Dudhi)",
      pa: "ਘੀਆ (Ghiya)"
    },
    scientific_name: "Lagenaria siceraria",
    category: "vegetable",
    how_to_identify_leaf: "Vigorous annual climbing vine with bifid tendrils; large kidney-shaped to circular velvety leaves with musk-scented glands at base of petiole.",
    how_to_identify_seed_or_fruit: "Cylindrical or bottle-shaped pale green smooth fruit with white sponge-like interior pulp; flat, rectangular-ridged seeds with notched margin.",
    lookalikes: ["Ash gourd (Benincasa hispida)", "Calabash gourd", "Zucchini in early stage"],
    season: "Summer (Jan-March) and Kharif (June-July); warm climate (25-35°C)",
    soil: "Well-drained rich sandy loam to alluvial loam rich in decomposed humus; pH 6.0-7.5",
    water: "High water requirement; irrigate every 4-5 days in hot dry periods; drought causes bitter fruit",
    seed_rate_and_sowing: "3-4 kg/ha; Seed treatment with Thiram 3g/kg; Spacing 2.5x1.5 m on raised beds or pandal/trellis system",
    nutrition_per_100g: {
      carbs_g: "3.39",
      fiber_g: "1.2",
      protein_g: "0.62",
      fat_g: "0.02",
      calories_kcal: "14",
      key_vitamins_minerals: ["Vitamin C", "Potassium", "Zinc", "Magnesium", "Folate", "Water (96%)"]
    },
    benefits: ["96% water content provides natural hydration and cooling during harsh summers", "Lowers blood pressure and supports cardiac arterial health", "Excellent light diet for gastrointestinal recovery"],
    risks_or_cautions: ["CAUTION: Never consume bitter bottle gourd juice! Bitter taste indicates high concentration of toxic cucurbitacins which causes severe poisoning and gastrointestinal bleeding"],
    medicinal_uses: ["Ayurvedic remedy for cooling Pitta dosha and supporting urinary tract cleansing", "Pulp applied on soles to relieve burning feet sensation"],
    diseases: [
      {
        name: "Powdery Mildew (Podosphaera xanthii)",
        type: "fungal",
        symptoms: "White talcum-like powdery spots on both leaf surfaces and stems; leaves turn yellow, brown, and curl dry.",
        cause: "Airborne fungal spores favored by dry days and high night relative humidity (70-80%).",
        organic_treatment: ["Spray 10% milk-water solution in bright sunlight", "Wettable sulfur @ 2g/L", "Neem oil 3% with liquid soap"],
        chemical_treatment_type: ["Difenoconazole 25% EC @ 0.5ml/L", "Penconazole 10% EC @ 0.5ml/L", "Azoxystrobin 23% SC @ 1ml/L"],
        prevention: ["Proper spacing and pruning of secondary shoots to enhance sunlight penetration", "Avoid excess nitrogen", "Remove older infected lower leaves"]
      },
      {
        name: "Anthracnose (Colletotrichum orbiculare)",
        type: "fungal",
        symptoms: "Circular water-soaked brown spots on leaves that crack; circular sunken dark brown lesions on fruits exuding pinkish spore masses.",
        cause: "Seed-borne and debris-borne fungus spread by splashing rain drops.",
        organic_treatment: ["Hot water seed soak (50°C for 25 min)", "Trichoderma viride 5g/kg seed treatment", "Copper oxychloride @ 2.5g/L"],
        chemical_treatment_type: ["Carbendazim 12% + Mancozeb 63% WP @ 2g/L", "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L"],
        prevention: ["2-year rotation with non-cucurbit crops", "Deep ploughing of crop residue", "Use disease-free certified hybrid seeds"]
      }
    ]
  },
  {
    name: "Spinach / Palak",
    local_names: {
      hi: "पालक (Palak)",
      ta: "பசலைக்கீரை (Pasalai Keerai)",
      te: "పాలకూర (Palakura)",
      kn: "ಪಾಲಕ್ ಸೊಪ್ಪು (Palak Soppu)",
      ml: "പാലക് ചീര (Palak Cheera)",
      mr: "पालक (Palak)",
      gu: "પાલક (Palak)",
      pa: "ਪਾਲਕ (Palak)"
    },
    scientific_name: "Spinacia oleracea",
    category: "vegetable",
    how_to_identify_leaf: "Soft, succulent, deep-green, ovate to triangular leaves with fleshy succulent petioles arranged in a basal rosette.",
    how_to_identify_seed_or_fruit: "Minute greenish flowers on spike-like clusters; seeds are small hard round (smooth-seeded) or spiny burs.",
    lookalikes: ["Indian Spinach / Desi Palak (Beta vulgaris var. bengalensis)", "Swiss Chard", "Bathua (Chenopodium album)"],
    season: "Cool season crop (Sept-Nov peak); can be grown year-round in temperate and sub-tropical zones",
    soil: "Fertile sandy loam to silty loam rich in humus; pH 6.0-7.5; intolerant to highly acidic soils",
    water: "Frequent light irrigations; shallow-rooted crop requiring moist topsoil; water every 3-5 days in dry spells",
    seed_rate_and_sowing: "25-30 kg/ha for broadcast; 15-20 kg/ha for line sowing; Spacing: 20x5 cm; Depth: 1.5-2 cm",
    nutrition_per_100g: {
      carbs_g: "3.63",
      fiber_g: "2.2",
      protein_g: "2.86",
      fat_g: "0.39",
      calories_kcal: "23",
      key_vitamins_minerals: ["Iron", "Vitamin A (Beta-carotene)", "Vitamin K", "Folate", "Calcium", "Lutein & Zeaxanthin"]
    },
    benefits: ["Abundant lutein and zeaxanthin protect retina against macular degeneration", "High bioavailable nitrates improve endothelial and cardiovascular blood flow", "Non-heme iron and folate assist hemoglobin synthesis"],
    risks_or_cautions: ["High in soluble oxalates; persons prone to kidney stones should boil and discard blanching water"],
    medicinal_uses: ["Prescribed in traditional medicine for combatting mild anemia and fatigue", "Juice blended with carrot for vision tonic"],
    diseases: [
      {
        name: "Cercospora Leaf Spot (Cercospora beticola)",
        type: "fungal",
        symptoms: "Circular small spots with grayish-white centers and pronounced dark reddish-purple borders; leaves turn yellow and drop.",
        cause: "Seed and debris-borne fungus favored by warm humid rainy weather (25-30°C).",
        organic_treatment: ["Copper Hydroxide 2g/L spray", "Bio-fungicide Bacillus subtilis 5g/L", "Neem leaf decoction spray"],
        chemical_treatment_type: ["Mancozeb 75% WP @ 2.5g/L", "Propiconazole 25% EC @ 1ml/L", "Azoxystrobin 23% SC @ 1ml/L"],
        prevention: ["Avoid overhead sprinkler irrigation", "Ensure wide spacing for canopy airflow", "Collect and destroy crop debris immediately after harvest"]
      },
      {
        name: "Spinach Aphid (Myzus persicae)",
        type: "pest",
        symptoms: "Clusters of yellow to green wingless nymphs sucking sap under leaves; leaves cup downward and turn crinkled yellow; sooty mold follows.",
        cause: "Polyphagous green peach aphids vectoring multiple viral diseases.",
        organic_treatment: ["Strong water jet spray to dislodge colonies", "5% Neem oil with 2ml liquid soap per liter", "Release ladybird beetles (Coccinella septempunctata)"],
        chemical_treatment_type: ["Thiamethoxam 25% WG @ 0.3g/L", "Imidacloprid 17.8% SL @ 0.5ml/L", "Dimethoate 30% EC @ 1.5ml/L"],
        prevention: ["Yellow sticky cards @ 15 per acre", "Interplant with aromatic alliums (garlic/onion)", "Avoid excessive synthetic urea which creates succulent sap"]
      }
    ]
  },
  {
    name: "Carrot / Gajar",
    local_names: {
      hi: "गाजर (Gajar)",
      ta: "கேரட் (Carrot)",
      te: "క్యారెట్ (Carrot)",
      kn: "ಕ್ಯಾರೆಟ್ (Carrot)",
      ml: "കാരറ്റ് (Carrot)",
      mr: "गाजर (Gajar)",
      gu: "ગાજર (Gajar)",
      pa: "ਗਾਜਰ (Gajar)"
    },
    scientific_name: "Daucus carota subsp. sativus",
    category: "vegetable",
    how_to_identify_leaf: "Finely divided, pinnately decompound feathery lace-like leaves with long channelled petioles arising from crown.",
    how_to_identify_seed_or_fruit: "Enlarged fleshy taproot (orange, red, yellow, or purple) with smooth epidermis; seeds are small, ribbed, bristly schizocarps.",
    lookalikes: ["Wild Carrot / Queen Anne's Lace (Daucus carota)", "Parsnip (Pastinaca sativa)", "Fennel foliage"],
    season: "Rabi cool-season crop (Sept-Nov sowing in plains; March-July in temperate hills); optimal root color develops at 15-20°C",
    soil: "Deep, loose, friable sandy loam to light loam free of stones and gravel; pH 6.0-6.8; heavy or rocky soils cause forking/branching",
    water: "Moderate, consistent moisture; irrigate every 7-10 days; heavy water after dry spell causes longitudinal root cracking",
    seed_rate_and_sowing: "Asiatic varieties: 8-10 kg/ha; European varieties: 5-6 kg/ha; Sown on ridges 30-45 cm apart; Depth: 1-1.5 cm",
    nutrition_per_100g: {
      carbs_g: "9.58",
      fiber_g: "2.8",
      protein_g: "0.93",
      fat_g: "0.24",
      calories_kcal: "41",
      key_vitamins_minerals: ["Beta-carotene (Provitamin A)", "Lycopene", "Vitamin K1", "Potassium", "Biotin"]
    },
    benefits: ["Richest common vegetable source of Provitamin A beta-carotene, vital for night vision", "Lycopene in red Desi carrots promotes cardiovascular and prostate health", "Soluble pectin fiber lowers blood cholesterol levels"],
    risks_or_cautions: ["Excessive intake over weeks causes harmless temporary orange skin pigmentation known as carotenemia"],
    medicinal_uses: ["Fresh carrot juice prescribed for convalescence and digestive revitalisation", "Seeds traditionally used for menstrual regularization"],
    diseases: [
      {
        name: "Alternaria Leaf Blight (Alternaria dauci)",
        type: "fungal",
        symptoms: "Dark brown-black irregular necrotic spots bordered by yellow halos on older leaf margins; tops turn completely scorched and brittle.",
        cause: "Seed-borne and airborne conidia favored by warm humid rainy spells (20-28°C).",
        organic_treatment: ["Hot water seed treatment at 50°C for 20 minutes", "Spray copper oxychloride 2.5g/L", "Bio-agent Pseudomonas fluorescens 10g/L"],
        chemical_treatment_type: ["Mancozeb 75% WP @ 2.5g/L", "Iprodione 50% WP @ 2g/L", "Azoxystrobin 23% SC @ 1ml/L"],
        prevention: ["Minimum 3-year crop rotation without umbelliferous crops", "Use certified pathogen-free seed", "Ridge planting for optimal aeration"]
      },
      {
        name: "Root Knot Nematode (Meloidogyne incognita)",
        type: "pest",
        symptoms: "Taproots become stubby, forked, knobby with gall-like knots; foliage wilts during midday heat; low market value.",
        cause: "Microscopic endoparasitic soil nematodes invading tender root tips.",
        organic_treatment: ["Soil application of Neem cake @ 500 kg/ha", "Incorporate Paecilomyces lilacinus @ 5 kg/ha with enriched FYM", "Marigold (Tagetes erecta) crop rotation"],
        chemical_treatment_type: ["Fluopyram 34.48% SC @ 2ml/L drenching", "Carbofuran 3G @ 25 kg/ha (strictly pre-sowing)"],
        prevention: ["Deep summer ploughing to desiccate nematode egg masses", "Avoid using untreated canal water on light soils"]
      }
    ]
  },
  {
    name: "Radish / Mooli",
    local_names: {
      hi: "मूली (Mooli)",
      ta: "முள்ளங்கி (Mullangi)",
      te: "ముల్లంగి (Mullangi)",
      kn: "ಮೂಲಂಗಿ (Moolangi)",
      ml: "മുള്ളങ്കി (Mullangi)",
      mr: "मुळा (Mula)",
      gu: "મૂળો (Mulo)",
      pa: "ਮੂਲੀ (Mooli)"
    },
    scientific_name: "Raphanus sativus",
    category: "vegetable",
    how_to_identify_leaf: "Coarse, lyrate-pinnatifid basal rosette leaves with bristly hairs and large rounded terminal lobes.",
    how_to_identify_seed_or_fruit: "Cylindrical or tapering fleshy white or red edible root; siliqua pods spongy inside containing yellowish-brown oval seeds.",
    lookalikes: ["Turnip (Brassica rapa)", "Horse radish (Armoracia rusticana)", "Wild mustard leaves"],
    season: "Asiatic types: Year-round (best Aug-Nov); European types: Oct-Dec; Quick-maturing (30-45 days)",
    soil: "Friable, light sandy loam rich in organic matter; pH 5.5-6.8; heavy clay produces deformed pungent roots",
    water: "Regular frequent light waterings; moisture stress causes pithiness and excessively pungent roots",
    seed_rate_and_sowing: "Asiatic varieties: 10-12 kg/ha; European varieties: 8-10 kg/ha; Sown on ridges 30-45 cm apart; Depth: 1.5 cm",
    nutrition_per_100g: {
      carbs_g: "3.4",
      fiber_g: "1.6",
      protein_g: "0.68",
      fat_g: "0.1",
      calories_kcal: "16",
      key_vitamins_minerals: ["Vitamin C", "Glucosinolates", "Potassium", "Folate", "Anthocyanins"]
    },
    benefits: ["Natural diuretic helping flush out toxins and urinary gravel", "Glucosinolates and isothiocyanates stimulate gastric bile secretion and digestion", "Rich in vitamin C helping maintain skin elasticity"],
    risks_or_cautions: ["Can cause digestive gas and burping if eaten in excess on empty stomach"],
    medicinal_uses: ["Fresh radish juice traditionally taken in jaundice and liver sluggishness", "Leaves eaten as saag for constipation relief"],
    diseases: [
      {
        name: "White Rust (Albugo candida)",
        type: "fungal",
        symptoms: "Chalky white, blister-like pustules on undersides of leaves; upper leaf surface shows pale yellow patches; inflorescence gets malformed.",
        cause: "Oomycete pathogen favored by high humidity (80-90%) and temperatures between 12-18°C.",
        organic_treatment: ["Spray copper oxychloride 2.5g/L", "Bordeaux mixture 1%", "Neem oil 3% spray"],
        chemical_treatment_type: ["Metalaxyl 8% + Mancozeb 64% WP @ 2.5g/L", "Cymoxanil + Mancozeb @ 2g/L"],
        prevention: ["Crop rotation away from crucifers for 2 years", "Destroy wild brassica weeds around field borders", "Destroy infected crop residues after harvest"]
      }
    ]
  },
  {
    name: "Garlic / Lehsun",
    local_names: {
      hi: "लहसुन (Lehsun)",
      ta: "பூண்டு (Poondu)",
      te: "వెల్లుల్లి (Vellulli)",
      kn: "ಬೆಳ್ಳುಳ್ಳಿ (Bellulli)",
      ml: "വെളുത്തുള്ളി (Veluthulli)",
      mr: "लसूण (Lasun)",
      gu: "લસણ (Lasan)",
      pa: "ਲਸਣ (Lasan)"
    },
    scientific_name: "Allium sativum",
    category: "vegetable",
    how_to_identify_leaf: "Linear, flat, strap-shaped solid grey-green leaves with a central keel, arranged alternatively along a central pseudostem.",
    how_to_identify_seed_or_fruit: "Compound underground bulb consisting of 10-25 individual curved cloves (bulbils) enclosed in white or purplish papery tunics.",
    lookalikes: ["Elephant garlic (Allium ampeloprasum)", "Shallots (Allium cepa var. aggregatum)", "Leek in vegetative stage"],
    season: "Rabi season crop (Oct-Nov planting; harvest in March-April); cool growing season and long sunny dry days for bulb swelling",
    soil: "Well-drained rich sandy loam to silt loam with high organic humus; pH 6.0-7.2; waterlogged heavy soils rot cloves",
    water: "Moderate; irrigate every 7-10 days; stop irrigation 15 days before harvest to allow outer wrapper curing",
    seed_rate_and_sowing: "Cloves: 500-600 kg/ha; Select healthy plump outer cloves; Spacing: 15x10 cm; Plant upright with tip 2-3 cm deep",
    nutrition_per_100g: {
      carbs_g: "33.06",
      fiber_g: "2.1",
      protein_g: "6.36",
      fat_g: "0.5",
      calories_kcal: "149",
      key_vitamins_minerals: ["Allicin", "Selenium", "Vitamin C", "Vitamin B6", "Manganese", "Organosulfur compounds"]
    },
    benefits: ["Potent natural antimicrobial and antibacterial properties from allicin", "Helps lower systemic LDL cholesterol and regulate arterial blood pressure", "Inhibits platelet aggregation, reducing thrombosis risks"],
    risks_or_cautions: ["Natural blood thinning effect; stop consuming high medicinal doses 2 weeks prior to scheduled surgery"],
    medicinal_uses: ["Crushed clove boiled in milk used as remedy for coughs and asthma", "Warm garlic oil drops used traditionally for earaches"],
    diseases: [
      {
        name: "Purple Blotch (Alternaria porri)",
        type: "fungal",
        symptoms: "Water-soaked lesions that turn purple to brownish with chlorotic borders on leaves; leaf tips wither and fall over.",
        cause: "Airborne fungal spores favored by warm, humid rainy weather (22-28°C, RH >80%).",
        organic_treatment: ["Foliar spray of 5% NSKE", "Trichoderma viride spray @ 5g/L", "Bordeaux mixture 1%"],
        chemical_treatment_type: ["Mancozeb 75% WP @ 2.5g/L", "Tebuconazole 25.9% EC @ 1ml/L", "Difenoconazole 25% EC @ 1ml/L"],
        prevention: ["Clove treatment with Carbendazim 2g/kg before planting", "Maintain optimal drainage on raised beds", "Avoid excessive nitrogen top-dressing"]
      },
      {
        name: "Onion / Garlic Thrips (Thrips tabaci)",
        type: "pest",
        symptoms: "Silvery white patches and curly mottling along leaf gutters caused by rasping-sucking; leaves dry up from tips down.",
        cause: "Tiny yellowish-brown fringe-winged thrips feeding in leaf sheaths.",
        organic_treatment: ["Blue sticky traps @ 20 per acre", "Spray Verticillium lecanii @ 5g/L with surfactant", "Neem oil 1500 ppm @ 3ml/L"],
        chemical_treatment_type: ["Fipronil 5% SC @ 1.5ml/L", "Spinetoram 11.7% SC @ 1ml/L", "Acetamiprid 20% SP @ 0.5g/L"],
        prevention: ["Maintain moist soil as thrips pupate in dry soil fissures", "Intercrop with barrier rows of maize", "Overhead sprinkler washes thrips down"]
      }
    ]
  },
  {
    name: "Fenugreek / Methi",
    local_names: {
      hi: "मेथी (Methi)",
      ta: "வெந்தயம் (Vendhayam)",
      te: "మెంతులు (Menthulu)",
      kn: "ಮೆಂತ್ಯ (Menthya)",
      ml: "ഉലുവ (Uluva)",
      mr: "मेथी (Methi)",
      gu: "મેથી (Methi)",
      pa: "ਮੇਥੀ (Methi)"
    },
    scientific_name: "Trigonella foenum-graecum",
    category: "vegetable",
    how_to_identify_leaf: "Trifoliate compound leaves with three obovate, dentate leaflets that emit a warm, distinctive maple-like aroma when rubbed.",
    how_to_identify_seed_or_fruit: "Slender beaked pods (7-10 cm) containing 10-20 hard, yellowish-brown rhombic seeds with a deep oblique groove.",
    lookalikes: ["Kasuri Methi (Trigonella corniculata)", "Sweet Clover (Melilotus alba)", "Lucerne / Alfalfa"],
    season: "Rabi cool-season crop (Oct-Nov); tolerant to light frost; leaf harvesting begins within 25-30 days",
    soil: "Loamy to clayey loam with good drainage; pH 6.0-7.0; fixes atmospheric nitrogen",
    water: "Light irrigations; irrigate at 10-15 day intervals; seed crop requires 4-5 irrigations",
    seed_rate_and_sowing: "For leaves: 25-30 kg/ha; For seed: 15-20 kg/ha; Line spacing: 25-30 cm; Depth: 2-3 cm; Inoculate with Rhizobium meliloti",
    nutrition_per_100g: {
      carbs_g: "58.35",
      fiber_g: "24.6",
      protein_g: "23.0",
      fat_g: "6.41",
      calories_kcal: "323",
      key_vitamins_minerals: ["Galactomannan", "4-hydroxyisoleucine", "Iron", "Magnesium", "Manganese", "Diosgenin"]
    },
    benefits: ["Soluble galactomannan fiber slows carbohydrate absorption and improves insulin sensitivity", "Stimulates milk production in lactating mothers (galactagogue)", "High fiber aids bile acid excretion and lowers serum cholesterol"],
    risks_or_cautions: ["Can induce uterine contractions; large medicinal seed doses should be avoided during early pregnancy"],
    medicinal_uses: ["Soaked methi water taken in morning for arthritis and diabetes", "Poultice of seeds applied on boils and burns"],
    diseases: [
      {
        name: "Powdery Mildew (Erysiphe polygoni)",
        type: "fungal",
        symptoms: "White flour-like powdery coating covering leaves, stems, and seed pods; foliage turns yellow and prematurely withers.",
        cause: "Airborne fungal spores thriving in dry warm days followed by humid cool nights.",
        organic_treatment: ["Foliar spray of 1% wettable sulfur", "Spray diluted cow milk (1:9 in water)", "Neem oil 3ml/L"],
        chemical_treatment_type: ["Hexaconazole 5% EC @ 1ml/L", "Propiconazole 25% EC @ 1ml/L", "Dinocap 48% EC @ 1ml/L"],
        prevention: ["Early sowing in mid-October to escape late infection", "Use resistant varieties like Rmt-1, Rmt-305", "Collect and burn post-harvest crop debris"]
      }
    ]
  },
  {
    name: "Coriander / Dhaniya",
    local_names: {
      hi: "धनिया (Dhaniya)",
      ta: "கொத்தமல்லி (Kothamalli)",
      te: "కొత్తిమీర (Kothimeera)",
      kn: "ಕೊತ್ತಂಬರಿ (Kothambari)",
      ml: "മല്ലി (Malli)",
      mr: "धने / कोथिंबीर (Dhane / Kothimbir)",
      gu: "ધાણા (Dhana)",
      pa: "ਧਨੀਆ (Dhaniya)"
    },
    scientific_name: "Coriandrum sativum",
    category: "vegetable",
    how_to_identify_leaf: "Dimorphic foliage: lower basal leaves are broad, pinnately lobed with fan-like segments; upper flowering stem leaves are finely dissected lace-like.",
    how_to_identify_seed_or_fruit: "Globular, aromatic, ribbed schizocarp fruit (splitting into two mericarps) containing warm citrusy essential oils (linalool).",
    lookalikes: ["Flat-leaf Parsley (Petroselinum crispum)", "Celery foliage", "Poison Hemlock (Conium maculatum - WARNING)"],
    season: "Rabi cool-season crop (Oct-Nov); grown year-round for tender fresh green foliage under partial shade",
    soil: "Well-drained rich loamy to black cotton soils with pH 6.0-7.5; requires fine tilth seedbed",
    water: "Frequent light waterings; water stress induces premature bolting (flowering); 4-5 irrigations for seed crop",
    seed_rate_and_sowing: "For grain: 12-15 kg/ha; For green leaves: 20-25 kg/ha; Split seeds gently into two halves before sowing; Spacing: 30x10 cm",
    nutrition_per_100g: {
      carbs_g: "3.67",
      fiber_g: "2.8",
      protein_g: "2.13",
      fat_g: "0.52",
      calories_kcal: "23",
      key_vitamins_minerals: ["Vitamin K", "Vitamin A", "Linalool", "Potassium", "Vitamin C", "Quercetin"]
    },
    benefits: ["Rich in natural antioxidants that scavenge reactive oxygen species", "Promotes gastric enzyme secretion and reduces abdominal bloating", "Extracts exhibit heavy metal chelating affinity"],
    risks_or_cautions: ["Genetic variation (OR6A2 olfactory gene) causes some people to perceive fresh leaves as tasting soapy"],
    medicinal_uses: ["Coriander seed water infused overnight taken for thyroid balance and body cooling", "Decoction taken for indigestion and gas"],
    diseases: [
      {
        name: "Stem Gall (Protomyces macrosporus)",
        type: "fungal",
        symptoms: "Tumor-like swellings and blister galls on leaf veins, petioles, stems, and flower pedicels; seeds turn deformed and hollow.",
        cause: "Seed and soil-borne fungus stimulated by high humidity during flowering.",
        organic_treatment: ["Seed treatment with Trichoderma viride 4g/kg", "Spray Pseudomonas fluorescens 10g/L", "Copper oxychloride 2.5g/L"],
        chemical_treatment_type: ["Carbendazim 50% WP @ 1g/L", "Propiconazole 25% EC @ 1ml/L", "Thiophanate methyl 70% WP @ 1.5g/L"],
        prevention: ["Seed treatment with Thiram 3g/kg", "Crop rotation for 3 years in infested plots", "Use resistant varieties like RCr-41, Pant Haritima"]
      }
    ]
  },
  {
    name: "Green Peas / Matar",
    local_names: {
      hi: "मटर (Matar)",
      ta: "பட்டாணி (Pattani)",
      te: "బఠాణీ (Batani)",
      kn: "ಬಟಾಣಿ (Batani)",
      ml: "പട്ടാണി (Pattani)",
      mr: "मटार (Matar)",
      gu: "વટાણા (Vatana)",
      pa: "ਮਟਰ (Matar)"
    },
    scientific_name: "Pisum sativum",
    category: "pulse",
    how_to_identify_leaf: "Pinnate compound leaf with 1-3 pairs of oval leaflets; terminal leaflet modified into a branched curling tendril for climbing.",
    how_to_identify_seed_or_fruit: "Cylindrical green dehiscent legume pod containing 4-10 smooth or wrinkled spherical sweet green seeds.",
    lookalikes: ["Chickling pea / Khesari (Lathyrus sativus)", "Sweet pea (Lathyrus odoratus)"],
    season: "Rabi cool-season crop (Oct-Nov sowing; harvest in Jan-March); requires 10-18°C temperature",
    soil: "Well-drained loose loamy to silt loam soil; pH 6.0-7.5; highly sensitive to waterlogging and saline conditions",
    water: "2-3 irrigations; critical stages: pre-flowering and pod filling; excess water causes root rot",
    seed_rate_and_sowing: "Early varieties: 100-120 kg/ha; Main season: 80-90 kg/ha; Row spacing: 30x10 cm; Depth: 3-4 cm; Inoculate with Rhizobium leguminosarum",
    nutrition_per_100g: {
      carbs_g: "14.45",
      fiber_g: "5.7",
      protein_g: "5.42",
      fat_g: "0.4",
      calories_kcal: "81",
      key_vitamins_minerals: ["Vitamin C", "Vitamin K", "Thiamine (B1)", "Manganese", "Folate", "Iron"]
    },
    benefits: ["Substantial vegetable protein and prebiotic dietary fiber", "Supports cardiac health and helps maintain steady glycemic levels", "Fixes 40-50 kg atmospheric nitrogen per hectare, enriching soil"],
    risks_or_cautions: ["Contains purines; persons suffering from hyperuricemia or gout should moderate consumption"],
    medicinal_uses: ["Flour paste applied traditionally to soothe skin eruptions and acne", "Consumed as energizing postpartum nutritional stew"],
    diseases: [
      {
        name: "Powdery Mildew (Erysiphe pisi)",
        type: "fungal",
        symptoms: "White circular powdery patches on upper leaf surfaces, progressing to stems and pods; plants turn dull white and dry up early.",
        cause: "Obligate airborne biotrophic fungus prevalent during late winter dry spells.",
        organic_treatment: ["Foliar spray of Wettable Sulfur 80% WP @ 2g/L", "Spray 10% cow milk emulsion", "Neem seed kernel extract 5%"],
        chemical_treatment_type: ["Hexaconazole 5% EC @ 1ml/L", "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L", "Penconazole 10% EC @ 0.5ml/L"],
        prevention: ["Sow powdery mildew-resistant varieties like AP-3, Rachna, Pant Matar 1", "Early sowing in October", "Destroy vines after final picking"]
      }
    ]
  },
  {
    name: "Cucumber / Kheera",
    local_names: {
      hi: "खीरा (Kheera)",
      ta: "வெள்ளரிக்காய் (Vellarikkai)",
      te: "దోసకాయ (Dosakaya)",
      kn: "ಸೌತೆಕಾಯಿ (Southekayi)",
      ml: "വെള്ളരിക്ക (Vellarikka)",
      mr: "काकडी (Kakdi)",
      gu: "કાકડી (Kakdi)",
      pa: "ਖੀਰਾ (Kheera)"
    },
    scientific_name: "Cucumis sativus",
    category: "vegetable",
    how_to_identify_leaf: "Rough, hispid climbing vine with simple tendrils; leaves are triangular-ovate with 3-5 acute lobes and cordate base.",
    how_to_identify_seed_or_fruit: "Cylindrical elongated fruit with green mottled rind, crunchy water-rich flesh, and flat white elliptical seeds centered along carpels.",
    lookalikes: ["Zucchini (Cucurbita pepo)", "Kakri / Snake cucumber (Cucumis melo var. flexuosus)"],
    season: "Summer (Feb-March) and Rainy (June-July); polyhouse grown year-round; frost sensitive",
    soil: "Sandy loam rich in organic matter with quick percolation; pH 6.0-7.0",
    water: "High requirement; irrigate every 2-3 days in peak summer; consistent moisture prevents bitter cucumbers",
    seed_rate_and_sowing: "Open field: 2.5-3.5 kg/ha; Polyhouse parthenocarpic: 1.0-1.5 kg/ha; Spacing: 1.5x0.6 m; Depth: 2 cm",
    nutrition_per_100g: {
      carbs_g: "3.63",
      fiber_g: "0.5",
      protein_g: "0.65",
      fat_g: "0.11",
      calories_kcal: "15",
      key_vitamins_minerals: ["Cucurbitacin", "Vitamin K", "Potassium", "Silica", "Magnesium", "Water (95.2%)"]
    },
    benefits: ["95% water content provides intense cellular hydration and heat stroke prevention", "Silica content promotes healthy connective tissues, hair, and nails", "Fisetin antioxidant supports neuronal health and memory"],
    risks_or_cautions: ["Cucumbers tasting intensely bitter should be discarded immediately due to toxic cucurbitacin B/C accumulation"],
    medicinal_uses: ["Cucumber slices applied over eyes to reduce puffiness and dark circles", "Fresh juice consumed for natural soothing of acid reflux"],
    diseases: [
      {
        name: "Downy Mildew (Pseudoperonospora cubensis)",
        type: "fungal",
        symptoms: "Angular yellow spots on upper leaf surface restricted by leaf veins; purplish-gray downy mold on underside in morning dew.",
        cause: "Airborne oomycete favored by leaf wetness, warm days (25°C), and cool nights.",
        organic_treatment: ["Spray copper hydroxide @ 2g/L", "Pseudomonas fluorescens 10g/L", "Trichoderma harzianum soil drench"],
        chemical_treatment_type: ["Metalaxyl 8% + Mancozeb 64% WP @ 2.5g/L", "Dimethomorph 50% WP @ 1g/L", "Cyazofamid 34.5% SC @ 0.8ml/L"],
        prevention: ["Trellis training for air movement", "Drip irrigation to avoid leaf splashing", "Avoid overhead evening sprinkling"]
      }
    ]
  },

  // --- FRUITS ---
  {
    name: "Apple / Seb",
    local_names: {
      hi: "सेब (Seb)",
      ta: "ஆப்பிள் (Apple)",
      te: "యాపిల్ (Apple)",
      kn: "ಸೇಬು (Sebu)",
      ml: "ആപ്പിൾ (Apple)",
      mr: "सफरचंद (Safarchand)",
      gu: "સફરજન (Safarjan)",
      pa: "ਸੇਬ (Seb)"
    },
    scientific_name: "Malus domestica",
    category: "fruit",
    how_to_identify_leaf: "Alternate, simple, dark green oval leaves with serrated margins and softly pubescent downy undersides.",
    how_to_identify_seed_or_fruit: "Pome fruit with crisp, sweet, juicy flesh surrounding a 5-chambered cartilaginous core containing dark brown tear-drop seeds.",
    lookalikes: ["Pear (Pyrus communis)", "Quince (Cydonia oblonga)", "Crabapple"],
    season: "Temperate zone (Kashmir, Himachal, Uttarakhand); Flowering in April; Harvest July-October; requires 800-1200 chilling hours (<7°C)",
    soil: "Deep, fertile, well-aerated sandy loam with excellent drainage; pH 5.5-6.5; minimum 1.5 m soil depth",
    water: "1000-1250 mm distributed evenly; critical stages: fruit set, fruit enlargement; drip irrigation recommended",
    seed_rate_and_sowing: "Propagated via bench grafting or T-budding onto clonal rootstocks (M9, MM106) or seedling rootstocks; Spacing: 3x1.5 m (ultra high density) or 5x5 m",
    nutrition_per_100g: {
      carbs_g: "13.81",
      fiber_g: "2.4",
      protein_g: "0.26",
      fat_g: "0.17",
      calories_kcal: "52",
      key_vitamins_minerals: ["Quercetin", "Pectin", "Vitamin C", "Potassium", "Catechin", "Chlorogenic acid"]
    },
    benefits: ["Rich in pectin soluble fiber which feeds friendly gut microbes and lowers LDL", "Quercetin bioflavonoids protect brain neurons against oxidative stress", "Regular consumption linked to lower risk of cardiovascular disease and type 2 diabetes"],
    risks_or_cautions: ["Apple seeds contain amygdalin (cyanogenic glycoside); do not chew or consume large quantities of seeds"],
    medicinal_uses: ["Apple cider vinegar used for glycemic control and skin conditions", "Stewed apples prescribed in convalescence for easy gastrointestinal digestion"],
    diseases: [
      {
        name: "Apple Scab (Venturia inaequalis)",
        type: "fungal",
        symptoms: "Olive-green to velvety brown-black sooty circular lesions on leaves; infected fruits become scabbed, corky, cracked, and misshapen.",
        cause: "Ascomycete fungus overwintering on fallen dead leaves; ascospores released during spring rain.",
        organic_treatment: ["Spray Bordeaux mixture 1% or Copper Oxychloride 3g/L at silver tip stage", "Apply 5% urea spray on fallen orchard leaves in autumn to accelerate leaf decomposition"],
        chemical_treatment_type: ["Difenoconazole 25% EC @ 0.3ml/L", "Kresoxim-methyl 44.3% SC @ 0.5ml/L", "Captan 50% WP @ 2.5g/L", "Dodine 65% WP @ 1g/L"],
        prevention: ["Prune tree canopies to allow maximum air and sunlight penetration", "Collect and destroy fallen leaf litter", "Plant scab-resistant cultivars like Prima, Florina, Super Chief"]
      },
      {
        name: "Fire Blight (Erwinia amylovora)",
        type: "bacterial",
        symptoms: "Blossoms, twigs, and leaves suddenly turn black and shrivel as if scorched by fire; shepherd's crook bending at twig tips.",
        cause: "Bacterium spread by rain, insects (bees), and unsterilized pruning shears.",
        organic_treatment: ["Prune affected branches 30 cm below visible lesion; sterilize tools between each cut with 70% alcohol or bleach", "Copper hydroxide spray at dormant stage"],
        chemical_treatment_type: ["Streptocycline @ 0.5g/L during bloom", "Kasugamycin 3% SL"],
        prevention: ["Avoid heavy nitrogen fertilizers that trigger fast succulent terminal growth", "Inspect orchards weekly during early bloom"]
      }
    ]
  },
  {
    name: "Grapes / Angoor",
    local_names: {
      hi: "अंगूर (Angoor)",
      ta: "திராட்சை (Dhiratchai)",
      te: "ద్రాక్ష (Draksha)",
      kn: "ದ್ರಾಕ್ಷಿ (Drakshi)",
      ml: "മുന്തിരി (Munthiri)",
      mr: "द्राक्षे (Draksha)",
      gu: "દ્રાક્ષ (Draksh)",
      pa: "ਅੰਗੂਰ (Angoor)"
    },
    scientific_name: "Vitis vinifera",
    category: "fruit",
    how_to_identify_leaf: "Woody perennial climbing vine with leaf-opposed tendrils; leaves are large, palmately 3-5 lobed with cordate base and coarsely toothed margins.",
    how_to_identify_seed_or_fruit: "Succulent, globose to ellipsoidal berries (green, purple, or black) with waxy bloom; clustered on pendulous racemes; seeded or seedless.",
    lookalikes: ["Wild grape (Vitis riparia)", "Virginia creeper (Parthenocissus quinquefolia - toxic 5-leaflet vine)"],
    season: "Subtropical/Tropical (Maharashtra, Karnataka, AP, Tamil Nadu); Back-pruning in April, Forward-pruning in Oct; Harvest Feb-April",
    soil: "Well-drained sandy loam to medium black soil; pH 6.5-7.5; highly sensitive to poor drainage and water salinity (>2 dS/m)",
    water: "Precise drip irrigation; water curtailed during berry ripening to elevate sugar content (Brix 18-22°)",
    seed_rate_and_sowing: "Propagated through hard-wood stem cuttings grafted onto nematode-resistant rootstocks (Dogridge, Salt Creek); Spacing: 3x1.8 m on Bower or Y-trellis",
    nutrition_per_100g: {
      carbs_g: "18.1",
      fiber_g: "0.9",
      protein_g: "0.72",
      fat_g: "0.16",
      calories_kcal: "69",
      key_vitamins_minerals: ["Resveratrol", "Anthocyanins", "Vitamin K", "Potassium", "Copper", "Vitamin B6"]
    },
    benefits: ["Potent resveratrol in skins supports cardiovascular longevity and endothelial function", "Anthocyanins in red/black grapes safeguard cerebral cognitive memory", "Natural tartaric and malic acids aid digestive motility"],
    risks_or_cautions: ["High natural sugar content requires portion discipline in diabetes; toxic to domestic canines (dogs)"],
    medicinal_uses: ["Grape seed extract taken for chronic venous insufficiency and vascular elasticity", "Munakka (black raisins) soaked in water taken for mild constipation and iron nourishment"],
    diseases: [
      {
        name: "Downy Mildew (Plasmopara viticola)",
        type: "fungal",
        symptoms: "Yellow translucent 'oil spots' on upper leaf surface; dense white cottony fungal down on undersides; young berries turn grey-brown and drop.",
        cause: "Oomycete favored by wet rainy weather, temperatures 20-25°C, and leaf wetness >90 minutes.",
        organic_treatment: ["Bordeaux mixture 1% spray before and after monsoon", "Copper Oxychloride @ 2.5g/L", "Potassium phosphite 2ml/L"],
        chemical_treatment_type: ["Dimethomorph 50% WP @ 1g/L", "Metalaxyl 8% + Mancozeb 64% WP @ 2.5g/L", "Mandipropamid 23.4% SC @ 0.8ml/L", "Ametoctradin + Dimethomorph @ 1.5ml/L"],
        prevention: ["Canopy management through shoot thinning to ensure sunlight exposure", "Avoid low-hanging fruit bunches near wet ground", "Monitor with weather forecasting models"]
      },
      {
        name: "Powdery Mildew (Erysiphe necator)",
        type: "fungal",
        symptoms: "White powdery patches on both leaf surfaces; young berries develop white powdery growth, turn hard, and crack open exposing seeds.",
        cause: "Fungus thriving in dry shade and warm temperatures (25-28°C) without free water.",
        organic_treatment: ["Sulfur dusting @ 15-20 kg/ha or Wettable Sulfur 80% WP @ 2g/L", "Spray Ampelomyces quisqualis bio-fungicide", "Neem oil 5ml/L"],
        chemical_treatment_type: ["Difenoconazole 25% EC @ 0.5ml/L", "Penconazole 10% EC @ 0.5ml/L", "Tebuconazole 25.9% EC @ 0.7ml/L", "Azoxystrobin 23% SC @ 1ml/L"],
        prevention: ["Open canopy pruning to eliminate dense shade", "Apply sulfur preventive sprays before flowering", "Avoid over-irrigation"]
      }
    ]
  },
  {
    name: "Pomegranate / Anar",
    local_names: {
      hi: "अनार (Anar)",
      ta: "மாதுளை (Mathulai)",
      te: "దానిమ్మ (Danimma)",
      kn: "ದಾಳಿಂಬೆ (Dalimbe)",
      ml: "മാതളനാരങ്ങ (Mathalanaranga)",
      mr: "डाळिंब (Dalimb)",
      gu: "દાડમ (Dadam)",
      pa: "ਅਨਾਰ (Anar)"
    },
    scientific_name: "Punica granatum",
    category: "fruit",
    how_to_identify_leaf: "Shrub or small deciduous tree with spiny branches; leaves are opposite, glossy, narrow-oblong to lanceolate (3-7 cm) with entire margins.",
    how_to_identify_seed_or_fruit: "Hexagonal to spherical berry with thick leathery red-yellow rind (leathery pericarp) crowned by prominent calyx; interior filled with juicy jewel-like red arils containing edible seeds.",
    lookalikes: ["Guava in early vegetative stage", "Myrtle shrub"],
    season: "Tropical/Subtropical (Maharashtra, Gujarat, Rajasthan, Karnataka); Has 3 flowering flushes: Ambe Bahar (Jan-Feb), Mrig Bahar (June-July), Hasta Bahar (Sept-Oct)",
    soil: "Well-drained deep loamy to light alluvial soil; pH 6.5-7.5; tolerant to moderate salinity and drought",
    water: "Drip irrigation; requires regulated deficit irrigation during flowering to set bahar, followed by regular watering during fruit growth",
    seed_rate_and_sowing: "Propagated by air layering or semi-hardwood cuttings; Spacing: 4.5x3.0 m or 5x4 m (600-750 plants/ha)",
    nutrition_per_100g: {
      carbs_g: "18.7",
      fiber_g: "4.0",
      protein_g: "1.67",
      fat_g: "1.17",
      calories_kcal: "83",
      key_vitamins_minerals: ["Punicalagins", "Punicic acid", "Vitamin C", "Vitamin K", "Folate", "Potassium"]
    },
    benefits: ["Punicalagins provide extremely potent free-radical scavenging activity (3x green tea)", "Inhibits LDL oxidation and reduces atherosclerotic plaque formation", "Anti-inflammatory actions protect joint cartilage"],
    risks_or_cautions: ["Can interact with certain cytochrome P450-metabolized prescription drugs similar to grapefruit"],
    medicinal_uses: ["Decoction of fruit rind used in Ayurveda as an astringent for dysentery and diarrhea", "Fresh aril juice taken to support healthy hemoglobin levels"],
    diseases: [
      {
        name: "Bacterial Blight / Telya (Xanthomonas axonopodis pv. punicae)",
        type: "bacterial",
        symptoms: "Water-soaked dark brown spots on leaves; oily dark brown spots on fruits that develop characteristic L- or Y-shaped cracks; black nodal cankers on twigs causing branch snap.",
        cause: "Bacterium spread by rain splashes, infected cuttings, and wind; favored by temp 25-35°C and RH >70%.",
        organic_treatment: ["Paste nodal cankers with Bordeaux paste (1:1:10) after scraping", "Spray Copper Hydroxide 2g/L", "Bordeaux mixture 0.5-1% spray"],
        chemical_treatment_type: ["Streptocycline 0.5g/L + Copper Oxychloride 2.5g/L", "Bacterimycin 0.5g/L + 2-Bromo-2-nitropropane-1,3-diol (Bronopol) @ 0.5g/L"],
        prevention: ["Plant disease-free tissue-cultured or nursery plants from certified sources", "Sterilize secateurs with 2.5% sodium hypochlorite after pruning each tree", "Strict sanitation: collect and burn all fallen leaves, twigs, and cracked fruits"]
      },
      {
        name: "Pomegranate Fruit Borer / Anar Butterfly (Deudorix isocrates)",
        type: "pest",
        symptoms: "Larva bores into developing fruits, feeds on arils and seeds; bore-holes show dark brown frass pellets; fruits rot and drop.",
        cause: "Lycaenid butterfly laying eggs singly on flower calyx and tender fruits.",
        organic_treatment: ["Bag developing fruits (30-45 days old) with non-woven breathable poly bags or butter paper", "Spray NSKE 5% at flowering", "Light traps for adult butterflies"],
        chemical_treatment_type: ["Chlorantraniliprole 18.5% SC @ 0.3ml/L", "Spinosad 45% SC @ 0.4ml/L", "Emamectin benzoate 5% SG @ 0.5g/L"],
        prevention: ["Remove and destroy clipped calyx lobes where eggs are deposited", "Collect and deeply bury all bore-hole fruits", "Spray repellant neem formulation at petal fall"]
      }
    ]
  },
  {
    name: "Watermelon / Tarbooz",
    local_names: {
      hi: "तरबूज (Tarbooz)",
      ta: "தர்பூசணி (Tharpoosani)",
      te: "పుచ్చకాయ (Pucchakaya)",
      kn: "ಕಲ್ಲಂಗಡಿ (Kallangadi)",
      ml: "തണ്ണിമത്തൻ (Thannimathan)",
      mr: "कलिंगड (Kalingad)",
      gu: "તરબૂચ (Tarbuch)",
      pa: "ਤਰਬੂਜ਼ (Tarbooz)"
    },
    scientific_name: "Citrullus lanatus",
    category: "fruit",
    how_to_identify_leaf: "Trailing prostrate vine with long hairy stems and branched tendrils; leaves are deeply pinnatifid with 3-5 rounded pairs of sinuate lobes.",
    how_to_identify_seed_or_fruit: "Large globular to oblong pepo fruit with thick green striped or solid rind; crisp, sweet red or yellow flesh; flat oval black or brown seeds.",
    lookalikes: ["Muskmelon (Cucumis melo)", "Citron melon (Citrullus caffer)"],
    season: "Summer crop (Jan-March sowing; harvest in April-June); requires high temperature (28-35°C) and dry sunny climate for sweet ripening",
    soil: "Deep sandy riverbed loams (Diyara cultivation) or rich well-drained sandy loam; pH 6.0-7.0",
    water: "Moderate, consistent moisture; irrigate every 5-7 days; withhold irrigation 5-7 days prior to harvest to maximize sugar sweetness",
    seed_rate_and_sowing: "3.5-4.5 kg/ha; Hybrid seeds: 1.5-2.0 kg/ha; Spacing: 2.5-3.0 m x 0.9 m on channels or mulched drip beds; Depth: 2-3 cm",
    nutrition_per_100g: {
      carbs_g: "7.55",
      fiber_g: "0.4",
      protein_g: "0.61",
      fat_g: "0.15",
      calories_kcal: "30",
      key_vitamins_minerals: ["Lycopene", "L-Citrulline", "Vitamin C", "Vitamin A", "Potassium", "Water (91.4%)"]
    },
    benefits: ["91% water combined with electrolytes provides superior hydration during summer peak heat", "Highest natural food source of lycopene (40% higher than raw tomatoes)", "L-citrulline amino acid reduces muscle soreness and boosts nitric oxide production"],
    risks_or_cautions: ["High water and carbohydrate density may cause digestive upset if consumed late at night in large quantities"],
    medicinal_uses: ["Watermelon seed kernel tea used traditionally for kidney flush and urinary gravel", "Juice taken to relieve sunstroke exhaustion"],
    diseases: [
      {
        name: "Fusarium Wilt (Fusarium oxysporum f. sp. niveum)",
        type: "fungal",
        symptoms: "Vines wilt unilaterally starting from one branch during afternoon sun; vascular bundles in stem turn dark brown; plant collapses completely.",
        cause: "Soil-borne chlamydospores surviving in ground for up to 10 years; enters root wounds.",
        organic_treatment: ["Seed treatment with Trichoderma harzianum @ 10g/kg", "Soil incorporation of enriched Trichoderma-FYM compost @ 2.5 tonnes/ha", "Grafting onto bottle gourd or squash rootstock"],
        chemical_treatment_type: ["Drenching with Carbendazim 50% WP @ 2g/L or Thiophanate methyl @ 1.5g/L", "Prochloraz 45% EC"],
        prevention: ["Crop rotation for at least 5-6 years away from cucurbits", "Solarize soil beds with clear polythene mulch during peak May sun", "Use resistant hybrid cultivars"]
      },
      {
        name: "Gummy Stem Blight (Stagonosporopsis cucurbitacearum)",
        type: "fungal",
        symptoms: "Circular tan spots on leaves; water-soaked lesions on stem near crown that exude an amber-colored sticky gum; vines collapse.",
        cause: "Fungus favored by warm temperatures (24-28°C) and prolonged surface moisture.",
        organic_treatment: ["Spray copper oxychloride 2.5g/L", "Bordeaux mixture 1%", "Remove infected plant debris"],
        chemical_treatment_type: ["Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L", "Pyraclostrobin 20% WG @ 1g/L", "Mancozeb 75% WP @ 2.5g/L"],
        prevention: ["Drip irrigation under plastic mulch to prevent stem collar moisture", "Use certified disease-free seeds", "Deep summer ploughing"]
      }
    ]
  },
  {
    name: "Coconut / Nariyal",
    local_names: {
      hi: "नारियल (Nariyal)",
      ta: "தேங்காய் (Thengai)",
      te: "కొబ్బరికాయ (Kobbarikaya)",
      kn: "ತೆಂಗಿನಕಾಯಿ (Tenginakai)",
      ml: "തേങ്ങ (Thenga)",
      mr: "नारळ (Naral)",
      gu: "નાળિયેર (Naliyer)",
      pa: "ਨਾਰੀਅਲ (Nariyal)"
    },
    scientific_name: "Cocos nucifera",
    category: "plantation",
    how_to_identify_leaf: "Tall unbranched monocot palm (up to 30 m) topped by a graceful crown of 25-35 large pinnate fronds (4-6 m long) with lanceolate glossy leaflets.",
    how_to_identify_seed_or_fruit: "Large fibrous drupe with smooth green/yellow exocarp, thick fibrous mesocarp (coir husk), hard woody endocarp (shell), enclosing white edible solid endosperm and liquid coconut water.",
    lookalikes: ["Oil Palm (Elaeis guineensis)", "Arecanut / Betel Nut Palm (Areca catechu)", "Palmyra palm (Borassus flabellifer)"],
    season: "Perennial tropical palm; thrives in humid coastal zones (Kerala, Tamil Nadu, Karnataka, Andhra, Odisha, West Bengal, Goa); continuous monthly harvest",
    soil: "Deep sandy loams, coastal alluvial sands, red loams with good drainage; pH 5.2-8.0; water table at 1-2 m depth",
    water: "High requirement; 40-50 liters/palm/day under drip; drought causes premature button shedding and thin nut meat",
    seed_rate_and_sowing: "Propagated by selected 10-12 month old seed nuts; Spacing: 7.5x7.5 m in square or triangular planting (175 palms/ha); Plant in 1m³ pits filled with topsoil, red earth, and sand",
    nutrition_per_100g: {
      carbs_g: "15.23",
      fiber_g: "9.0",
      protein_g: "3.33",
      fat_g: "33.49",
      calories_kcal: "354",
      key_vitamins_minerals: ["Medium Chain Triglycerides (Lauric acid)", "Manganese", "Copper", "Selenium", "Potassium", "Iron"]
    },
    benefits: ["Medium chain triglycerides (MCTs like lauric acid) convert directly to hepatic energy and raise HDL cholesterol", "Tender coconut water is an isotonic natural rehydration solution rich in potassium and magnesium", "Virgin coconut oil exhibits potent antimicrobial, antiviral, and antifungal qualities"],
    risks_or_cautions: ["High saturated fat density; balance with overall daily caloric intake"],
    medicinal_uses: ["Tender coconut water consumed for urinary stones and rehydration during dengue/fevers", "Coconut oil applied for scalp nourishment and burn recovery"],
    diseases: [
      {
        name: "Bud Rot (Phytophthora palmivora)",
        type: "fungal",
        symptoms: "Central spindle leaf turns yellow, withers, and rots; foul decaying odor emanating from the crown bud; spindle pulls out easily when tugged.",
        cause: "Oomycete favored by heavy monsoon rains, high humidity, and cool windy conditions.",
        organic_treatment: ["Remove rotten tissue carefully from crown and apply Bordeaux paste (1:1:10)", "Drench crown with 1% Bordeaux mixture before monsoon onset (May & Sept)"],
        chemical_treatment_type: ["Placement of 5g Metalaxyl-Mancozeb sachets with perforated holes in crown", "Fosetyl-Aluminium 80% WP @ 2g/L crown wash"],
        prevention: ["Inspect crown of palms before and during monsoon", "Cut and burn heavily infected dead crowns immediately", "Apply balanced potash nutrition (1.2 kg MOP/palm/year) to harden tissues"]
      },
      {
        name: "Rhinoceros Beetle (Oryctes rhinoceros)",
        type: "pest",
        symptoms: "Characteristic V-shaped or geometric cuts on emerged fronds; fiber chewing and boreholes in soft tender crown bud tissue.",
        cause: "Large black beetle with cephalic horn boring into crown of palm.",
        organic_treatment: ["Extract beetles from boreholes using a flexible hooked wire", "Fill leaf axils with equal parts of sand and neem seed powder or neem cake (100g each)", "Treat FYM compost breeding pits with Metarhizium anisopliae bio-control"],
        chemical_treatment_type: ["Place naphthalene balls (3-4 balls) mixed with sand in innermost 2-3 leaf axils every 45 days", "Chlorpyrifos 20% EC @ 3ml/L drench on compost heaps"],
        prevention: ["Eliminate rotting palm logs and dead stumps", "Set up PVC pheromone traps (Oryctalure) @ 1 trap per 2 hectares", "Encourage barn owls in orchard"]
      }
    ]
  },

  // --- SEEDS, PULSES & MILLETS ---
  {
    name: "Chickpea / Chana",
    local_names: {
      hi: "चना / छोला (Chana)",
      ta: "கொண்டைக்கடலை (Kondaikadala)",
      te: "శనగలు (Sanagalu)",
      kn: "ಕಡಲೆಕಾಳು (Kadalekalu)",
      ml: "കടല (Kadala)",
      mr: "हरभरा (Harbhara)",
      gu: "ચણા (Chana)",
      pa: "ਛੋਲੇ (Chole)"
    },
    scientific_name: "Cicer arietinum",
    category: "pulse",
    how_to_identify_leaf: "Slender, branched herb (30-60 cm) covered with glandular hairs; leaves are odd-pinnate with 9-17 small, obovate, serrated leaflets that secrete malic acid (sour dew).",
    how_to_identify_seed_or_fruit: "Small swollen rhombic-ellipsoid pod (2-3 cm) containing 1-2 angular beaked seeds (brown/black in Desi; large cream-white in Kabuli).",
    lookalikes: ["Pigeon pea in early stage", "Vetch (Vicia sativa)"],
    season: "Rabi season crop (Oct-Nov sowing; harvest Feb-March); requires cool, dry weather and residual soil moisture",
    soil: "Deep, well-drained loams to heavy black cotton soils (vertisols); pH 6.0-8.0; sensitive to acidity and waterlogging",
    water: "Low water requirement; 1-2 protective irrigations: pre-flowering and pod development; excessive water causes vegetative overgrowth",
    seed_rate_and_sowing: "Desi types: 65-75 kg/ha; Kabuli types: 100-120 kg/ha; Row spacing: 30x10 cm; Depth: 6-8 cm (deeper than cereals to tap residual moisture); Inoculate with Mesorhizobium ciceri",
    nutrition_per_100g: {
      carbs_g: "60.65",
      fiber_g: "17.4",
      protein_g: "19.3",
      fat_g: "6.04",
      calories_kcal: "364",
      key_vitamins_minerals: ["Folate", "Iron", "Magnesium", "Phosphorus", "Zinc", "Potassium"]
    },
    benefits: ["Premier vegetarian plant protein staple of India", "Low glycemic index and high resistant starch support stable blood sugar", "Fixes up to 40 kg N/ha, enriching cropping sequence for subsequent Kharif cereals"],
    risks_or_cautions: ["High in oligosaccharides (raffinose, stachyose); soak thoroughly and cook with hing (asafoetida) to reduce flatulence"],
    medicinal_uses: ["Besan (chickpea flour) mixed with turmeric and milk used as classic Ayurvedic ubtan skin cleanser", "Chana sattu consumed for heatstroke resilience and sustained satiety"],
    diseases: [
      {
        name: "Fusarium Wilt (Fusarium oxysporum f. sp. ciceris)",
        type: "fungal",
        symptoms: "Foliage turns dull grey-green, withers, and droops without yellowing; brown to black discoloration of internal vascular xylem visible when root split longitudinally.",
        cause: "Soil-borne and seed-borne fungus surviving in soil as chlamydospores for over 6 years.",
        organic_treatment: ["Seed treatment with Trichoderma viride @ 5g/kg seed + Pseudomonas fluorescens 5g/kg", "Soil application of Trichoderma enriched FYM @ 2.5 tonnes/ha"],
        chemical_treatment_type: ["Seed treatment with Carbendazim 12% + Mancozeb 63% WP @ 2g/kg", "Carboxin 37.5% + Thiram 37.5% DS @ 2g/kg"],
        prevention: ["Sow wilt-resistant varieties like JG-11, JAKI-9218, Digvijay, Vishal", "Deep summer ploughing to desiccate fungal propagules", "Avoid early sowing when soil temperatures exceed 25°C"]
      },
      {
        name: "Gram Pod Borer (Helicoverpa armigera)",
        type: "pest",
        symptoms: "Larva feeds on tender foliage, then cuts circular holes into pods, thrusting its head inside while leaving body hanging outside to consume seeds.",
        cause: "Polyphagous noctuid moth laying spherical eggs singly on leaves, flowers, and pods.",
        organic_treatment: ["Install pheromone traps with Helilure @ 10-12 traps/ha", "Spray HaNPV (Helicoverpa armigera Nuclear Polyhedrosis Virus) @ 250 LE/ha in evening", "Release Trichogramma chilonis @ 100,000/ha", "Foliar spray of 5% NSKE"],
        chemical_treatment_type: ["Chlorantraniliprole 18.5% SC @ 0.3ml/L", "Emamectin benzoate 5% SG @ 0.4g/L", "Indoxacarb 14.5% SC @ 0.5ml/L", "Flubendiamide 39.35% SC @ 0.2ml/L"],
        prevention: ["Plant barrier or intercrop rows of coriander or marigold (1 row marigold for every 10 rows chickpea)", "Install bird perches (T-shaped bamboo sticks) @ 40-50/ha for insectivorous birds", "Nipping / topping of terminal shoots at 30-40 DAS"]
      }
    ]
  },
  {
    name: "Pigeon Pea / Arhar / Tur",
    local_names: {
      hi: "अरहर / तुअर (Arhar / Tur)",
      ta: "துவரம்பருப்பு (Thuvaram Paruppu)",
      te: "కందులు (Kandulu)",
      kn: "ತೊಗರಿ ಬೇಳೆ (Togari Bele)",
      ml: "തുവരപ്പരിപ്പ് (Thuvarapparippu)",
      mr: "तूर (Tur)",
      gu: "તુવેર (Tuver)",
      pa: "ਅਰਹਰ (Arhar)"
    },
    scientific_name: "Cajanus cajan",
    category: "pulse",
    how_to_identify_leaf: "Erect woody shrub (1.5-3.5 m); trifoliate leaves with oblong-lanceolate leaflets covered with fine velvety silvery hairs and glandular dots on underside.",
    how_to_identify_seed_or_fruit: "Oblong, glandular, pubescent pods (4-8 cm) with transverse depressions between 2-6 rounded or oval seeds (cream, brown, or red).",
    lookalikes: ["Crotalaria juncea (Sunn hemp)", "Wild pulse shrubs (Flemingia)"],
    season: "Kharif season crop (June-July sowing; harvest Dec-March for long duration; Oct-Nov for early); drought-hardy with deep taproot",
    soil: "Well-drained deep medium-heavy black loams or alluvial soils; pH 6.5-7.5; intolerant to standing water",
    water: "Rainfed deep-rooted crop; critical irrigation stages if drought occurs: flower bud initiation and pod development",
    seed_rate_and_sowing: "Sole crop: 15-20 kg/ha; Intercrop (with cotton/soybean): 8-10 kg/ha; Spacing: 90x20 cm or 120x30 cm; Depth: 4-5 cm; Inoculate with Rhizobium",
    nutrition_per_100g: {
      carbs_g: "62.78",
      fiber_g: "15.0",
      protein_g: "21.7",
      fat_g: "1.49",
      calories_kcal: "343",
      key_vitamins_minerals: ["Folate", "Thiamine (B1)", "Iron", "Magnesium", "Phosphorus", "Potassium"]
    },
    benefits: ["Core protein staple of Indian dal dishes (sambhar, dal tadka)", "Deep taproot breaks hard subsoil layers and recycles nutrients", "Extensive biomass contributes nitrogen and leaf mulch to improve soil fertility"],
    risks_or_cautions: ["Must be thoroughly boiled and cooked to neutralize lectin and trypsin inhibitors"],
    medicinal_uses: ["Warm paste of leaves applied to relieve painful swelling and ulcers", "Decoction taken for gargling in gingivitis"],
    diseases: [
      {
        name: "Sterility Mosaic Disease - SMD (Pigeonpea sterility mosaic virus)",
        type: "viral",
        symptoms: "Known as 'green plague': bushy, stunted plants with excessive branching, small pale mottled leaves, and complete absence of flowers and pods.",
        cause: "Emaravirus transmitted persistently by the microscopic eriophyid mite (Aceria cajani).",
        organic_treatment: ["Spray Wettable Sulfur 80% WP @ 2.5g/L or Micronized Sulfur", "Neem oil 3% spray on young crop"],
        chemical_treatment_type: ["Propargite 57% EC @ 2ml/L", "Fenazaquin 10% EC @ 1.5ml/L", "Spiromesifen 22.9% SC @ 1ml/L"],
        prevention: ["Grow resistant cultivars like Asha (ICPL 87119), BSMR-736, Maruti (ICP 8863)", "Rogue out early infected green bushy plants", "Avoid keeping ratoon or perennial crops which harbor vector mites"]
      },
      {
        name: "Fusarium Wilt (Fusarium udum)",
        type: "fungal",
        symptoms: "Gradual withering and yellowing of foliage from bottom up; purple-brown band on main stem bark extending upwards from ground line; brown xylem ring inside.",
        cause: "Soil-borne fungus surviving in deep soil layers on infected woody stubbles.",
        organic_treatment: ["Soil application of Trichoderma viride @ 5 kg/ha mixed with 250 kg FYM", "Intercropping with sorghum (sorghum root exudates suppress F. udum)"],
        chemical_treatment_type: ["Seed treatment with Thiram + Carbendazim (2:1) @ 2.5g/kg", "Carboxin + Thiram @ 2g/kg"],
        prevention: ["Crop rotation with tobacco, sorghum, or maize for 3-4 years", "Uproot and burn woody roots of harvested crop", "Use wilt-resistant cultivars (Maruti, Asha, BDN-2)"]
      }
    ]
  },
  {
    name: "Green Gram / Moong",
    local_names: {
      hi: "मूंग (Moong)",
      ta: "பாசிப்பயறு (Pasi Payaru)",
      te: "పెసలు (Pesalu)",
      kn: "ಹೆಸರು ಕಾಳು (Hesaru Kalu)",
      ml: "ചെറുപയർ (Cherupayar)",
      mr: "मूग (Moog)",
      gu: "મગ (Mag)",
      pa: "ਮੂੰਗੀ (Moongi)"
    },
    scientific_name: "Vigna radiata",
    category: "pulse",
    how_to_identify_leaf: "Erect to sub-erect annual herb (30-90 cm); leaves are trifoliate with large, ovate, entire leaflets having slightly hairy surfaces.",
    how_to_identify_seed_or_fruit: "Slender, cylindrical, pendulous pods (5-10 cm) turning dark brown-black when mature; containing 8-15 small, cylindrical or globular olive-green seeds with flat white hilum.",
    lookalikes: ["Black gram / Urad (Vigna mungo)", "Cowpea (Vigna unguiculata)"],
    season: "Kharif (June-July), Rabi (Oct-Nov in South India), and Zaid / Summer (March-April as catch crop; 60-65 days duration)",
    soil: "Well-drained fertile loamy to sandy loam soils; pH 6.5-7.5; sensitive to waterlogging and salinity",
    water: "Low requirement; 2-3 irrigations in summer (at 20 DAS, flowering, and pod development); rainfed in Kharif",
    seed_rate_and_sowing: "Kharif: 12-15 kg/ha; Summer: 20-25 kg/ha; Spacing: 30x10 cm; Depth: 3-4 cm; Inoculate with Rhizobium and PSB",
    nutrition_per_100g: {
      carbs_g: "62.62",
      fiber_g: "16.3",
      protein_g: "23.86",
      fat_g: "1.15",
      calories_kcal: "347",
      key_vitamins_minerals: ["Folate", "Manganese", "Magnesium", "Phosphorus", "Iron", "Potassium", "Copper"]
    },
    benefits: ["Easiest pulse to digest, producing least flatulence among all legumes", "Sprouted moong multiplies vitamin C and antioxidant bioavailability", "Excellent green manure crop fixing 35-40 kg atmospheric N/ha in short 60 days"],
    risks_or_cautions: ["Raw unsprouted beans contain phytates; soak before cooking"],
    medicinal_uses: ["Moong dal khichdi is the primary convalescent diet in Ayurveda for healing the digestive fire (Agni)", "Moong flour pack used to calm allergic hives and prickly heat"],
    diseases: [
      {
        name: "Yellow Mosaic Virus - MYMV (Mungbean yellow mosaic virus)",
        type: "viral",
        symptoms: "Irregular yellow chlorotic specks along veins that expand into bright golden-yellow mosaic patches; pods become stunted with shriveled seeds.",
        cause: "Geminivirus transmitted efficiently by the whitefly (Bemisia tabaci).",
        organic_treatment: ["Install yellow sticky traps @ 20-25 per acre", "Spray 5% NSKE or 1% Neem Oil 1500 ppm", "Spray Verticillium lecanii @ 5g/L"],
        chemical_treatment_type: ["Seed treatment with Imidacloprid 70% WS @ 5g/kg", "Foliar spray of Thiamethoxam 25% WG @ 0.3g/L or Acetamiprid 20% SP @ 0.5g/L"],
        prevention: ["Sow MYMV-resistant cultivars like Samrat, Meha, Virat, IPM-02-03, SML-668", "Synchronous sowing across village cluster", "Barrier crop of 2 rows of pearl millet or maize"]
      },
      {
        name: "Cercospora Leaf Spot (Cercospora canescens)",
        type: "fungal",
        symptoms: "Circular to irregular brown necrotic spots with greyish-white centers and reddish-brown borders; leaves turn yellow and drop prematurely.",
        cause: "Seed and debris-borne fungus favored by warm humid rainy conditions (25-30°C).",
        organic_treatment: ["Spray copper oxychloride 2.5g/L", "Pseudomonas fluorescens 10g/L foliar spray"],
        chemical_treatment_type: ["Carbendazim 50% WP @ 1g/L", "Mancozeb 75% WP @ 2g/L", "Tebuconazole 25.9% EC @ 1ml/L"],
        prevention: ["Seed treatment with Carbendazim 2g/kg", "Avoid dense planting", "Clean field sanitation"]
      }
    ]
  },
  {
    name: "Black Gram / Urad",
    local_names: {
      hi: "उड़द (Urad)",
      ta: "உளுந்து (Ulundu)",
      te: "మినుములు (Minumulu)",
      kn: "ಉದ್ದಿನ ಕಾಳು (Uddina Kalu)",
      ml: "ഉഴുന്ന് (Uzhunnu)",
      mr: "उडीद (Udid)",
      gu: "અડદ (Adad)",
      pa: "ਮਾਂਹ (Maah)"
    },
    scientific_name: "Vigna mungo",
    category: "pulse",
    how_to_identify_leaf: "Erect or spreading annual herb with coarse, dense, brownish-yellow hairs on stems and branches; trifoliate leaves with ovate to lanceolate leaflets.",
    how_to_identify_seed_or_fruit: "Cylindrical, erect or horizontal pods (4-7 cm) densely covered with bristly hairs; containing 6-10 oblong, dull or shiny black seeds with a white raised concave hilum.",
    lookalikes: ["Green Gram / Moong (Vigna radiata)", "Cowpea"],
    season: "Kharif (June-July), Rabi (Oct-Nov in rice fallows of southern/coastal belts), Summer (March-April; 70-75 days)",
    soil: "Well-drained loam to heavy black cotton soils; pH 6.5-7.8; tolerant to moderate alkalinity",
    water: "Low water requirement; 2-3 irrigations in summer; largely rainfed in Kharif; sensitive to waterlogging at flowering",
    seed_rate_and_sowing: "Kharif: 15-18 kg/ha; Rabi/Rice fallow: 20-25 kg/ha; Spacing: 30x10 cm; Depth: 3-4 cm; Inoculate with Rhizobium",
    nutrition_per_100g: {
      carbs_g: "58.99",
      fiber_g: "18.3",
      protein_g: "25.21",
      fat_g: "1.64",
      calories_kcal: "341",
      key_vitamins_minerals: ["Iron", "Folate", "Calcium", "Phosphorus", "Potassium", "Zinc", "Isoflavones"]
    },
    benefits: ["One of the richest pulse sources of protein (25%) and dietary iron", "High mucilage and foaming ability essential for fermenting idli/dosa batters", "Supports muscle mass building and tissue repair"],
    risks_or_cautions: ["Can increase uric acid levels; consume with ginger and cumin to improve digestibility"],
    medicinal_uses: ["Ayurvedic Vrishya (aphrodisiac and vitality replenisher)", "Warm urad dal poultice applied to relieve muscular sprains and paralysis stiffness"],
    diseases: [
      {
        name: "Yellow Mosaic Virus - YMV (Mungbean yellow mosaic virus)",
        type: "viral",
        symptoms: "Bright yellow mosaic patches on leaves; infected leaves turn fully yellow and chlorotic; flower buds drop, pods become deformed.",
        cause: "Begomovirus vectored by whitefly (Bemisia tabaci).",
        organic_treatment: ["Yellow sticky traps @ 20/acre", "5% NSKE spray", "Verticillium lecanii 5g/L"],
        chemical_treatment_type: ["Imidacloprid 17.8% SL @ 0.5ml/L", "Thiamethoxam 25% WG @ 0.3g/L", "Spiromesifen 22.9% SC @ 1ml/L"],
        prevention: ["Sow resistant cultivars like Shekhar-2, Pant U-31, Uttara, VBN-4, Mash-114", "Seed treatment with Imidacloprid 70% WS @ 5g/kg"]
      },
      {
        name: "Powdery Mildew (Erysiphe polygoni)",
        type: "fungal",
        symptoms: "White chalky powder on both leaf sides; severely affected leaves curl and drop prematurely; reduced grain filling.",
        cause: "Airborne fungal spores favored by dry days and humid nights during late vegetative/flowering phase.",
        organic_treatment: ["Wettable Sulfur 80% WP @ 2.5g/L", "Foliar spray of 10% cow milk solution", "Neem oil 3ml/L"],
        chemical_treatment_type: ["Hexaconazole 5% EC @ 1ml/L", "Propiconazole 25% EC @ 1ml/L", "Carbendazim 50% WP @ 1g/L"],
        prevention: ["Early sowing in season", "Clean field borders of wild legume weeds", "Plant resistant varieties"]
      }
    ]
  },
  {
    name: "Soybean / Soya",
    local_names: {
      hi: "सोयाबीन (Soybean)",
      ta: "சோயாபீன் (Soyabean)",
      te: "సోయాబీన్ (Soyabean)",
      kn: "ಸೋಯಾಬೀನ್ (Soyabean)",
      ml: "സോയാബീൻ (Soyabean)",
      mr: "सोयाबीन (Soyabean)",
      gu: "સોયાબીન (Soyabean)",
      pa: "ਸੋਇਆਬੀਨ (Soyabean)"
    },
    scientific_name: "Glycine max",
    category: "oilseed",
    how_to_identify_leaf: "Erect, bushy, hairy annual legume (40-100 cm); trifoliate leaves with ovate to elliptical leaflets covered in fine tawny or grey hairs; leaves turn yellow and drop at maturity.",
    how_to_identify_seed_or_fruit: "Slightly curved, hairy pods (3-5 cm) clustered in leaf axils; containing 2-4 spherical or oval yellow or buff-colored seeds with a distinct brown or black hilum.",
    lookalikes: ["Bush beans (Phaseolus vulgaris)", "Cowpea"],
    season: "Kharif season crop (June-July sowing; harvest Sept-Oct; 90-105 days duration); thrives in warm humid climates (25-32°C)",
    soil: "Well-drained deep fertile black soils (vertisols) or clayey loams rich in organic matter; pH 6.0-7.5; sensitive to salinity and waterlogging",
    water: "Rainfed in major belts (Madhya Pradesh, Maharashtra, Rajasthan); critical moisture periods: flowering and pod elongation (R1-R4 stages)",
    seed_rate_and_sowing: "65-75 kg/ha (aim for 400,000 plants/ha); Spacing: 45x5 cm; Depth: 2-3 cm (do NOT sow deeper than 4 cm); Inoculate with Bradyrhizobium japonicum and PSB",
    nutrition_per_100g: {
      carbs_g: "30.16",
      fiber_g: "9.3",
      protein_g: "36.49",
      fat_g: "19.94",
      calories_kcal: "446",
      key_vitamins_minerals: ["Isoflavones (Genistein, Daidzein)", "Manganese", "Iron", "Phosphorus", "Copper", "Vitamin K1"]
    },
    benefits: ["Highest protein density (38-40%) among all food legumes with near-complete amino acid profile", "Contains 18-20% heart-healthy polyunsaturated edible oil", "Soy isoflavones act as phytoestrogens supporting bone mineral retention and hormonal balance"],
    risks_or_cautions: ["Must be heat processed or cooked to deactivate anti-nutritional factors (trypsin inhibitor and lectins)"],
    medicinal_uses: ["Soy lecithin used for memory support and liver lipid emulsification", "Tofu and soy milk used as lactose-free, cholesterol-free milk alternatives"],
    diseases: [
      {
        name: "Asian Soybean Rust (Phakopsora pachyrhizi)",
        type: "fungal",
        symptoms: "Small water-soaked lesions that turn tan to reddish-brown polygon spots on leaf undersides; volcano-like pustules (uredinia) release masses of tan spores; rapid defoliation.",
        cause: "Extremely destructive airborne obligate fungus favored by prolonged leaf wetness (6-8 hours) and moderate temperatures (18-26°C).",
        organic_treatment: ["Spray 5% NSKE preventively", "Bio-fungicide Pseudomonas fluorescens 10g/L", "Copper oxychloride 2.5g/L"],
        chemical_treatment_type: ["Hexaconazole 5% EC @ 1ml/L", "Propiconazole 25% EC @ 1ml/L", "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L", "Tebuconazole 25.9% EC @ 1ml/L"],
        prevention: ["Early sowing with onset of monsoon", "Monitor field weekly from flowering onward", "Sow early-maturing tolerant varieties like JS-93-05, JS-95-60, NRC-37"]
      },
      {
        name: "Girdle Beetle (Obereopsis brevis)",
        type: "pest",
        symptoms: "Characteristic two parallel ring girdles made by female beetle on petiole or stem; leaves and upper branches droop, dry up, and snap off.",
        cause: "Longhorn beetle laying eggs inside hollowed petiole tissue between two girdles.",
        organic_treatment: ["Hand-pick and destroy girdled drooping petioles during early infestation", "Spray 5% Neem seed kernel extract @ 50 ml/L", "Beauveria bassiana 5g/L"],
        chemical_treatment_type: ["Chlorantraniliprole 18.5% SC @ 0.3ml/L", "Thiamethoxam 12.6% + Lambda-cyhalothrin 9.5% ZC @ 0.3ml/L", "Flubendiamide 39.35% SC @ 0.3ml/L"],
        prevention: ["Maintain clean bunds free of weed hosts", "Optimum plant population (avoid excessive dense crowding)", "Intercrop with pearl millet or maize"]
      }
    ]
  },
  {
    name: "Pearl Millet / Bajra",
    local_names: {
      hi: "बाजरा (Bajra)",
      ta: "கம்பு (Kambu)",
      te: "సజ్జలు (Sajjalu)",
      kn: "ಸಜ್ಜೆ (Sajje)",
      ml: "കമ്പ് (Kambu)",
      mr: "बाजरी (Bajri)",
      gu: "બાજરી (Bajri)",
      pa: "ਬਾਜਰਾ (Bajra)"
    },
    scientific_name: "Pennisetum glaucum",
    category: "cereal",
    how_to_identify_leaf: "Robust, erect annual grass (1.5-3.0 m) with thick fibrous stems; long, lanceolate, flat green leaves (20-100 cm) with scabrid margins and prominent ligules.",
    how_to_identify_seed_or_fruit: "Dense, cylindrical, candle-like spike or cob (15-50 cm) packed with small oval, obovate, or pear-shaped grey, yellow-brown, or ivory grains.",
    lookalikes: ["Sorghum / Jowar", "Elephant grass / Napier grass (Pennisetum purpureum)"],
    season: "Kharif season crop (June-July sowing; harvest Sept-Oct); supreme drought and heat tolerance (>42°C)",
    soil: "Sandy, shallow, light sandy loam or red desert soils; pH 6.5-8.5; excels where other cereals fail",
    water: "Extremely low (250-350 mm); rainfed crop; highly water-efficient C4 photosynthetic pathway",
    seed_rate_and_sowing: "Direct sowing: 4-5 kg/ha; Transplanted (in nurseries): 2.5-3 kg/ha; Spacing: 45x12 cm; Depth: 2-3 cm; Inoculate with Azospirillum",
    nutrition_per_100g: {
      carbs_g: "67.5",
      fiber_g: "11.5",
      protein_g: "11.6",
      fat_g: "4.78",
      calories_kcal: "378",
      key_vitamins_minerals: ["Iron (8 mg - highest among cereals)", "Zinc", "Magnesium", "Phosphorus", "Folate", "Gluten-free"]
    },
    benefits: ["National super-food nutri-cereal; exceptional iron (up to 8 mg/100g) combative against rural anemia", "Low glycemic index with high satiety index beneficial for diabetes management", "Gluten-free grain offering high dietary fiber and magnesium"],
    risks_or_cautions: ["Contains phytic acid and tannins; fermenting, soaking, or malting improves zinc and iron absorption"],
    medicinal_uses: ["Bajra roti eaten during winter for body warmth, stamina, and cardiovascular health", "Kambu koozh (fermented millet porridge) consumed in Tamil Nadu for heat dissipation and gut flora"],
    diseases: [
      {
        name: "Downy Mildew / Green Ear (Sclerospora graminicola)",
        type: "fungal",
        symptoms: "Foliage shows yellow chlorotic chlorosis on leaves; floral parts of the earhead are transformed into twisted green leafy structures resembling a green brush.",
        cause: "Oospore soil-borne and seed-borne fungus surviving in soil for over 5 years.",
        organic_treatment: ["Soak seeds in 1% salt water to float off infected light seeds", "Seed treatment with Pseudomonas fluorescens 10g/kg", "Rogue out early chlorotic plants"],
        chemical_treatment_type: ["Seed treatment with Metalaxyl 35% WS @ 6g/kg seed", "Foliar spray of Metalaxyl 8% + Mancozeb 64% WP @ 2g/L at 21 DAS"],
        prevention: ["Use resistant hybrids like HHB-67 Improved, RHB-173, GHB-558, MPMH-17", "Crop rotation with pulses", "Burn infected earhead debris"]
      },
      {
        name: "Ergot (Claviceps fusiformis)",
        type: "fungal",
        symptoms: "Small droplets of pinkish, honey-like viscous fluid (honey dew) ooze from infected spikelets, later hardening into dark brown sclerotia horn-like structures.",
        cause: "Airborne ascospores infecting stigma during flowering, favored by cloudy humid weather.",
        organic_treatment: ["Dip seed in 20% brine solution; healthy seeds sink, sclerotia float and can be skimmed off and burned", "Deep summer ploughing to bury sclerotia >5 cm"],
        chemical_treatment_type: ["Spray Mancozeb 75% WP @ 2.5g/L or Ziram @ 2g/L at early boot-leaf stage"],
        prevention: ["Sow synchronous flowering hybrids to prevent extended pollen windows", "Harvest early if rain occurs at maturity", "Never feed ergot-contaminated grain to livestock"]
      }
    ]
  },
  {
    name: "Sorghum / Jowar",
    local_names: {
      hi: "ज्वार (Jowar)",
      ta: "சோளம் (Cholam)",
      te: "జొన్నలు (Jonnalu)",
      kn: "ಜೋಳ (Jola)",
      ml: "ചോളം (Cholam)",
      mr: "ज्वारी (Jwari)",
      gu: "જુવાર (Juvar)",
      pa: "ਜਵਾਰ (Jawar)"
    },
    scientific_name: "Sorghum bicolor",
    category: "cereal",
    how_to_identify_leaf: "Tall, robust annual grass (2-4 m) resembling maize; leaves are alternate, linear-lanceolate (30-100 cm) with waxy white powdery bloom (bloom coats) and serrulate margins.",
    how_to_identify_seed_or_fruit: "Terminal compact or loose open panicle (10-40 cm) bearing hundreds of round to sub-globose seeds (white, cream, bronze, or red) partly enclosed by glumes.",
    lookalikes: ["Maize (Zea mays)", "Pearl millet", "Johnsongrass weed (Sorghum halepense)"],
    season: "Kharif (June-July) and Rabi (Sept-Oct in Maharashtra, Karnataka, Telangana); exceptional drought endurance",
    soil: "Clay loams, medium-heavy black cotton soils (vertisols); pH 6.0-8.5; tolerant to moderate alkalinity",
    water: "Low water requirement (350-450 mm); deep fibrous root system and waxy cuticles minimize water transpiration",
    seed_rate_and_sowing: "Grain crop: 8-10 kg/ha; Fodder crop: 25-30 kg/ha; Spacing: 45x15 cm; Depth: 3-4 cm; Inoculate with Azospirillum and PSB",
    nutrition_per_100g: {
      carbs_g: "72.09",
      fiber_g: "6.7",
      protein_g: "10.62",
      fat_g: "3.46",
      calories_kcal: "359",
      key_vitamins_minerals: ["Iron", "Phosphorus", "Potassium", "Polyphenols", "Tannins", "Thiamine (B1)"]
    },
    benefits: ["Rich in bioactive polyphenols and 3-deoxyanthocyanidins that reduce oxidative cell damage", "Naturally gluten-free grain providing complex steady carbohydrates", "Low glycemic index supports long-term diabetes dietary management"],
    risks_or_cautions: ["Young stunted plants (<45 days or under extreme drought) contain toxic cyanogenic glucoside dhurrin (HCN); do NOT feed stunted young green plants to livestock"],
    medicinal_uses: ["Jowar bhakri consumed for metabolic health, hypertension control, and obesity management", "Decoction of seeds used for soothing urinary burning"],
    diseases: [
      {
        name: "Sorghum Shoot Fly (Atherigona soccata)",
        type: "pest",
        symptoms: "Central leaf of young seedling (1-4 weeks old) dries up and produces characteristic 'dead heart' that emits unpleasant odor when pulled.",
        cause: "Dipteran grey-colored muscid fly laying small white cigar-shaped eggs on leaf underside.",
        organic_treatment: ["Install fishmeal traps @ 10-12 traps/ha to attract and trap adult flies", "Foliar spray of 5% NSKE", "Increase seed rate by 20% and rogue out dead hearts"],
        chemical_treatment_type: ["Seed treatment with Thiamethoxam 30% FS @ 10ml/kg or Imidacloprid 70% WS @ 7g/kg", "Soil application of Phorate 10G or Carbofuran 3G in seed furrow"],
        prevention: ["Complete sowing within 10-14 days of monsoon onset before fly population builds up", "Use resistant varieties like CSH-16, CSH-25, CSV-20", "Intercrop with pigeon pea"]
      },
      {
        name: "Grain Mold (Complex: Fusarium, Curvularia, Alternaria)",
        type: "fungal",
        symptoms: "Developing grains in panicle turn pink, black, or grey; grains become soft, powdery, low test-weight, and contaminated with mycotoxins.",
        cause: "Fungal complex favored by continuous rain and high humidity (>90%) during grain maturity.",
        organic_treatment: ["Harvest at physiological maturity (black layer formation) and dry artificially", "Spray 5% NSKE"],
        chemical_treatment_type: ["Spray Propiconazole 25% EC @ 1ml/L or Mancozeb @ 2.5g/L at flowering and milk stage"],
        prevention: ["Cultivate mold-tolerant hybrids with open/loose panicles", "Avoid late plantings that push maturity into late rains"]
      }
    ]
  },
  {
    name: "Finger Millet / Ragi",
    local_names: {
      hi: "रागी / मडुआ (Ragi / Madua)",
      ta: "கேழ்வரகு / ராகி (Kezhvaragu / Ragi)",
      te: "రాగులు (Ragulu)",
      kn: "ರಾಗಿ (Ragi)",
      ml: "പഞ്ഞപ്പുല്ല് / കൂവരക് (Panjippullu / Koovaraku)",
      mr: "नाचणी (Nachani)",
      gu: "રાગી (Ragi)",
      pa: "ਰਾਗੀ (Ragi)"
    },
    scientific_name: "Eleusine coracana",
    category: "cereal",
    how_to_identify_leaf: "Tufted, tillering annual grass (60-120 cm); leaves are linear-lanceolate, flat, light green with prominent midrib and compressed, overlapping sheaths.",
    how_to_identify_seed_or_fruit: "Inflorescence consists of 4-8 digital whorled spikes resembling fingers of an open hand; grains are tiny, spherical, reddish-brown to dark brown.",
    lookalikes: ["Goosegrass (Eleusine indica)", "Crabgrass (Digitaria sanguinalis)"],
    season: "Kharif crop (June-July sowing; harvest Oct-Nov); hill ragi grown in Uttarakhand; southern ragi in Karnataka/Tamil Nadu; can also be grown in Rabi",
    soil: "Well-drained sandy loam, red loams, lateritic or gravelly soils; pH 5.0-7.5; tolerant to mild soil acidity",
    water: "Low water requirement (350-500 mm); rainfed crop; survives dry spells and revives quickly with rainfall",
    seed_rate_and_sowing: "Direct seeding: 8-10 kg/ha; Transplanting: 4-5 kg/ha (nursery sown 20-25 days before); Spacing: 30x10 cm; Depth: 1-2 cm",
    nutrition_per_100g: {
      carbs_g: "72.6",
      fiber_g: "11.2",
      protein_g: "7.3",
      fat_g: "1.3",
      calories_kcal: "336",
      key_vitamins_minerals: ["Calcium (344 mg - 10x higher than rice/wheat)", "Iron", "Methionine", "Valine", "Tryptophan", "Polyphenols"]
    },
    benefits: ["Richest calcium source (344 mg/100g) among all food grains, crucial for bone density and pediatric development", "High polyphenols and dietary fiber produce slow glucose release, making it ideal for diabetes", "Naturally gluten-free grain packed with essential amino acid methionine"],
    risks_or_cautions: ["High calcium content requires adequate fluid intake; persons with history of kidney stones should consume balanced portions"],
    medicinal_uses: ["Ragi malt / porridge given to weaning infants and elderly for strength and recuperation", "Ragi mudde (steamed dough balls) provides long-lasting sustained stamina for agricultural laborers"],
    diseases: [
      {
        name: "Blast (Magnaporthe grisea)",
        type: "fungal",
        symptoms: "Leaf blast: spindle-shaped lesions with grey centers; Neck blast: blackening of neck node below panicle causing earhead to break and drop; Finger blast: fingers rot.",
        cause: "Airborne fungus favored by cool nights (20°C), RH >90%, and excessive nitrogen fertilizer.",
        organic_treatment: ["Seed treatment with Pseudomonas fluorescens @ 10g/kg", "Foliar spray of 5% NSKE or cow urine extract (10%)", "Trichoderma viride 5g/L"],
        chemical_treatment_type: ["Kitazin 48% EC @ 1ml/L", "Edifenphos 50% EC @ 1ml/L", "Tricyclazole 75% WP @ 0.6g/L"],
        prevention: ["Use blast-resistant varieties like GPU-28, ML-365, MR-1, KMR-301", "Avoid excess split doses of urea", "Treat seeds with Carbendazim 2g/kg"]
      }
    ]
  },
  {
    name: "Sunflower / Surajmukhi",
    local_names: {
      hi: "सूरजमुखी (Surajmukhi)",
      ta: "சூரியகாந்தி (Suriyakanthi)",
      te: "పొద్దుతిరుగుడు (Podduthirugudu)",
      kn: "ಸೂರ್ಯಕಾಂತಿ (Suryakanthi)",
      ml: "സൂര്യകാന്തി (Suryakanthi)",
      mr: "सूर्यफूल (Suryaphool)",
      gu: "સૂર્યમુખી (Suryamukhi)",
      pa: "ਸੂਰਜਮੁਖੀ (Surajmukhi)"
    },
    scientific_name: "Helianthus annuus",
    category: "oilseed",
    how_to_identify_leaf: "Robust, coarse, erect annual herb (1.0-3.0 m) with hispid-bristly stems; large, broad, alternate ovate leaves with serrated margins and rough scabrous texture.",
    how_to_identify_seed_or_fruit: "Large solitary flat capitulum flower head (10-35 cm) with golden-yellow ray florets; seeds are hard, wedge-shaped achenes (black or black-and-white striped).",
    lookalikes: ["Jerusalem artichoke (Helianthus tuberosus)", "Safflower (Carthamus tinctorius)"],
    season: "Day-neutral crop: can be grown in Kharif (July), Rabi (Oct-Nov), and Spring/Summer (Jan-Feb); needs bright sunshine for seed filling",
    soil: "Deep, fertile, well-drained loams, sandy loams, and black soils; pH 6.5-8.0; sensitive to soil crusting and boron deficiency",
    water: "Moderate (400-500 mm); critical stages: bud initiation (star stage), flowering, and seed filling (milky dough); drought during flowering causes hollow seeds",
    seed_rate_and_sowing: "Hybrids: 5 kg/ha; Open-pollinated varieties: 8-10 kg/ha; Spacing: 60x30 cm; Depth: 3-4 cm; Seed treatment with Thiram 3g/kg",
    nutrition_per_100g: {
      carbs_g: "20.0",
      fiber_g: "8.6",
      protein_g: "20.78",
      fat_g: "51.46",
      calories_kcal: "584",
      key_vitamins_minerals: ["Vitamin E (alpha-tocopherol)", "Linoleic acid (Omega-6)", "Selenium", "Magnesium", "Copper", "Phytosterols"]
    },
    benefits: ["One of the richest dietary sources of natural Vitamin E (alpha-tocopherol), a key antioxidant for skin and blood vessels", "Rich in polyunsaturated linoleic acid (65%) which reduces serum cholesterol", "Phytosterols inhibit intestinal absorption of dietary cholesterol"],
    risks_or_cautions: ["High calorie density; store seeds in cool dark containers as high unsaturated oils are prone to rancidity"],
    medicinal_uses: ["Cold-pressed sunflower oil applied topically for infant skin barrier protection", "Roasted unsalted seeds consumed for daily magnesium and selenium intake"],
    diseases: [
      {
        name: "Alternaria Blight (Alternaria helianthi)",
        type: "fungal",
        symptoms: "Circular to irregular dark brown-black necrotic spots surrounded by yellow halos on leaves, stems, and back of flower head; premature defoliation.",
        cause: "Seed and airborne fungus favored by warm humid rainy weather (25-30°C).",
        organic_treatment: ["Spray copper oxychloride @ 2.5g/L", "Pseudomonas fluorescens 10g/L foliar spray", "Neem seed kernel extract 5%"],
        chemical_treatment_type: ["Mancozeb 75% WP @ 2.5g/L", "Propiconazole 25% EC @ 1ml/L", "Iprodione 50% WP @ 2g/L"],
        prevention: ["Seed treatment with Carbendazim + Mancozeb (2g/kg)", "Maintain optimal plant spacing for aeration", "Destroy crop residues after harvest"]
      },
      {
        name: "Head Rot (Rhizopus arrhizus)",
        type: "fungal",
        symptoms: "Back of flower head develops water-soaked soft brown lesions; head rots into a soft pulpy mass covered with coarse black fungal mold; seeds drop off.",
        cause: "Fungus entering through mechanical wounds caused by insects, hail, or birds, aggravated by wet weather.",
        organic_treatment: ["Spray Bordeaux mixture 1%", "Prevent insect and bird damage"],
        chemical_treatment_type: ["Spray Mancozeb 75% WP @ 2.5g/L directed at back of head"],
        prevention: ["Control head-boring caterpillars early", "Avoid overhead sprinkler irrigation during flowering", "Harvest as soon as back of head turns yellow-brown"]
      }
    ]
  },
  {
    name: "Sesame / Til",
    local_names: {
      hi: "तिल (Til)",
      ta: "எள் (Ellu)",
      te: "నువ్వులు (Nuvvulu)",
      kn: "ಎಳ್ಳು (Ellu)",
      ml: "എള്ള് (Ellu)",
      mr: "तीळ (Til)",
      gu: "તલ (Tal)",
      pa: "ਤਿਲ (Til)"
    },
    scientific_name: "Sesamum indicum",
    category: "oilseed",
    how_to_identify_leaf: "Erect annual herb (50-120 cm); heteromorphic leaves: lower leaves opposite, broad and palmately lobed; upper leaves alternate, lanceolate with entire margins.",
    how_to_identify_seed_or_fruit: "Erect, oblong 4-grooved capsule pod (2-4 cm) containing numerous tiny, flat, pear-shaped seeds (white, brown, or black) with subtle sweet nutty flavor.",
    lookalikes: ["False sesame (Sesamum radiatum)", "Foxglove foliage (Digitalis - highly toxic lookalike)"],
    season: "Kharif (June-July in North/Central India), Semi-rabi (Aug-Sept), Summer (Jan-Feb in South/East India); requires warm sunny weather",
    soil: "Well-drained light sandy loam to medium loam; pH 6.0-7.5; highly sensitive to waterlogging and soil salinity",
    water: "Low water requirement (300-400 mm); drought tolerant; 2-3 protective irrigations at flowering and pod filling",
    seed_rate_and_sowing: "Broadcast: 5 kg/ha; Line sowing: 4 kg/ha; Mix seed with 4x dry sand for even broadcasting; Spacing: 30x10 cm; Depth: 1.5-2 cm",
    nutrition_per_100g: {
      carbs_g: "23.45",
      fiber_g: "11.8",
      protein_g: "17.73",
      fat_g: "49.67",
      calories_kcal: "573",
      key_vitamins_minerals: ["Sesamin & Sesamolin (Lignans)", "Calcium (975 mg - highest non-dairy source)", "Iron", "Magnesium", "Zinc", "Copper"]
    },
    benefits: ["Extraordinary calcium content (nearly 1,000 mg/100g) strengthens bone density and combats osteoporosis", "Unique sesamin lignans shield liver from oxidative damage and assist lipid metabolism", "Exceptional oil stability against rancidity due to natural sesamol antioxidants"],
    risks_or_cautions: ["One of the recognized food allergens; persons with sesame allergy must exercise strict caution"],
    medicinal_uses: ["Til oil (gingelly oil) used for Ayurvedic Abhyanga self-massage and oil pulling (Gandusha)", "Til-gud ladoos eaten during Makar Sankranti for winter thermogenesis"],
    diseases: [
      {
        name: "Phyllody (Candidatus Phytoplasma)",
        type: "bacterial",
        symptoms: "All floral parts transformed into green leafy structures; profuse abnormal branching creates a witches' broom appearance; no capsules or seeds form.",
        cause: "Phytoplasma transmitted by the leafhopper vector (Orosius albicinctus).",
        organic_treatment: ["Spray 5% NSKE to deter leafhoppers", "Rogue out and burn infected plants as soon as phyllody symptoms appear"],
        chemical_treatment_type: ["Imidacloprid 17.8% SL @ 0.5ml/L", "Thiamethoxam 25% WG @ 0.3g/L", "Dimethoate 30% EC @ 1.5ml/L"],
        prevention: ["Treat seeds with Imidacloprid 70% WS @ 5g/kg", "Synchronous community sowing", "Keep borders free of weed hosts (Parthenium, Croton)"]
      },
      {
        name: "Leaf and Pod Caterpillar / Antigastra (Antigastra catalaunalis)",
        type: "pest",
        symptoms: "Larva webs together top leaves and terminal shoots, feeding inside; later bores into flower buds and green capsules.",
        cause: "Small reddish-brown pyralid moth active during Kharif season.",
        organic_treatment: ["Hand-pick and crush webbed shoot clusters", "Spray Bacillus thuringiensis (Bt) @ 2g/L", "Spray 5% NSKE"],
        chemical_treatment_type: ["Chlorantraniliprole 18.5% SC @ 0.3ml/L", "Quinalphos 25% EC @ 2ml/L", "Emamectin benzoate 5% SG @ 0.4g/L"],
        prevention: ["Intercrop with green gram or cowpea", "Deep summer ploughing to expose pupae in soil"]
      }
    ]
  },
  {
    name: "Cumin / Jeera",
    local_names: {
      hi: "जीरा (Jeera)",
      ta: "சீரகம் (Seeragam)",
      te: "జీలకర్ర (Jeelakarra)",
      kn: "ಜೀರಿಗೆ (Jeerige)",
      ml: "ജീരകം (Jeerakam)",
      mr: "जिरे (Jire)",
      gu: "જીરું (Jiru)",
      pa: "ਜੀਰਾ (Jeera)"
    },
    scientific_name: "Cuminum cyminum",
    category: "spice",
    how_to_identify_leaf: "Slender, delicate, glabrous annual herb (20-40 cm); leaves are pinnately dissected into thread-like, filiform linear segments.",
    how_to_identify_seed_or_fruit: "Elongated oval schizocarp fruit (4-6 mm) with 8-9 prominent longitudinal ridges and short bristly hairs; distinctive warm, aromatic, earthy scent (cuminaldehyde).",
    lookalikes: ["Caraway (Carum carvi)", "Fennel seed (Foeniculum vulgare)", "Aniseed (Pimpinella anisum)"],
    season: "Rabi season crop (mid-Nov to early Dec sowing; harvest Feb-March in Gujarat and Rajasthan); requires cool, dry, frost-free weather",
    soil: "Well-drained sandy loam to light loamy soils rich in organic matter; pH 7.0-8.0; highly vulnerable to waterlogging",
    water: "Requires very light, careful irrigations (4-5 total); excess moisture or high humidity during flowering/seed set is catastrophic for cumin",
    seed_rate_and_sowing: "12-15 kg/ha; Seed treatment with Carbendazim 2g/kg; Line sowing at 25-30 cm; Depth: 1-1.5 cm; Never sow deeper than 2 cm",
    nutrition_per_100g: {
      carbs_g: "44.24",
      fiber_g: "10.5",
      protein_g: "17.81",
      fat_g: "22.27",
      calories_kcal: "375",
      key_vitamins_minerals: ["Cuminaldehyde", "Iron (66 mg - extraordinary content)", "Magnesium", "Manganese", "Calcium", "Zinc"]
    },
    benefits: ["Astonishing natural iron content (66 mg/100g), addressing iron deficiency anemia", "Stimulates pancreatic digestive enzyme secretion, aiding nutrient assimilation", "Potent carminative and anti-spasmodic qualities soothe digestive colic"],
    risks_or_cautions: ["Extremely concentrated essential oils; culinary amounts are safe, excessive oil extracts can slow blood clotting"],
    medicinal_uses: ["Jeera water (boiled cumin seeds) consumed for weight management and digestive acid balance", "Warm roasted jeera powder taken with jaggery to ease menstrual cramps"],
    diseases: [
      {
        name: "Fusarium Wilt (Fusarium oxysporum f. sp. cumini)",
        type: "fungal",
        symptoms: "Young plants wilt and collapse; older plants droop, leaves turn yellow from tip down; roots show dark vascular browning.",
        cause: "Devastating soil and seed-borne fungus surviving in soil for many years.",
        organic_treatment: ["Seed treatment with Trichoderma viride @ 5g/kg", "Soil application of Trichoderma enriched FYM @ 2.5 tonnes/ha", "Castor cake application @ 500 kg/ha"],
        chemical_treatment_type: ["Seed treatment with Carbendazim 50% WP @ 2g/kg", "Soil drenching with Carbendazim @ 1g/L"],
        prevention: ["Crop rotation with mustard or wheat for at least 3 years", "Use resistant varieties like Gujarat Cumin-4 (GC-4), RZ-223", "Deep summer ploughing in hot months"]
      },
      {
        name: "Blight (Alternaria burnsii)",
        type: "fungal",
        symptoms: "Minute dark brown spots on leaves and stems that expand into dark blighted areas; flowers fail to set seeds; seeds turn black and shriveled.",
        cause: "Airborne fungal spores favored by cloudy humid weather and winter rains during Jan-Feb.",
        organic_treatment: ["Spray copper oxychloride @ 2.5g/L preventively", "Neem oil 3% spray", "Avoid irrigation during cloudy overcast days"],
        chemical_treatment_type: ["Mancozeb 75% WP @ 2.5g/L", "Propiconazole 25% EC @ 1ml/L", "Azoxystrobin 18.2% + Difenoconazole 11.4% SC @ 1ml/L"],
        prevention: ["Early sowing before 25th November", "Spray preventive fungicide immediately if unseasonal winter rain or heavy morning fog is forecast", "Collect and burn infected debris"]
      }
    ]
  },

  // --- PLANTATION, COMMERCIAL & CASH CROPS ---
  {
    name: "Tea / Chai",
    local_names: {
      hi: "चाय (Chai)",
      ta: "தேயிலை (Theeyilai)",
      te: "తేయాకు (Theyaaku)",
      kn: "ಟೀ / ಚಹಾ (Tea / Chaha)",
      ml: "തേയില (Theyla)",
      mr: "चहा (Chaha)",
      gu: "ચા (Cha)",
      pa: "ਚਾਹ (Chah)"
    },
    scientific_name: "Camellia sinensis",
    category: "plantation",
    how_to_identify_leaf: "Evergreen perennial woody shrub pruned to table height (1-1.2 m); leaves are alternate, elliptic-lanceolate, glossy dark green with serrate margins and silvery pubescent buds ('two leaves and a bud').",
    how_to_identify_seed_or_fruit: "White fragrant flowers with numerous yellow stamens; fruit is a 3-lobed woody capsule containing 1-3 spherical brown seeds.",
    lookalikes: ["Camellia japonica", "Eurya nitida", "Wild tea relatives"],
    season: "Perennial plantation crop (Assam, Darjeeling, Dooars, Nilgiris, Munnar); Plucking flushes: First flush (March-April), Second flush (May-June), Monsoon flush, Autumn flush",
    soil: "Deep, well-drained, friable acidic loams rich in organic matter; pH 4.5-5.5 (strictly intolerant to alkaline or calcium-rich soils)",
    water: "High rainfall requirement (1500-2500 mm annually) well distributed; requires shade trees (Albizia lebbeck, silver oak) and high ambient humidity",
    seed_rate_and_sowing: "Propagated via single-node bi-clonal vegetative stem cuttings in polybags; Spacing: 105x75 cm or double hedge (13,000 to 15,000 bushes/ha)",
    nutrition_per_100g: {
      carbs_g: "0.2 (brewed)",
      fiber_g: "0.0",
      protein_g: "0.1",
      fat_g: "0.0",
      calories_kcal: "1",
      key_vitamins_minerals: ["EGCG (Epigallocatechin gallate)", "Theaflavins & Thearubigins", "L-Theanine", "Caffeine", "Fluoride", "Polyphenols"]
    },
    benefits: ["EGCG catechin is among the most clinically validated cardioprotective antioxidants", "L-Theanine amino acid promotes relaxed alertness by stimulating calming alpha brain waves", "Regular black/green tea intake enhances microvascular endothelial flexibility"],
    risks_or_cautions: ["Excessive intake on empty stomach can hinder non-heme iron absorption due to tannin binding"],
    medicinal_uses: ["Cooled black tea bags placed on eyes to relieve conjunctival swelling and sun irritation", "Green tea extracts studied for metabolic rate and lipid oxidization support"],
    diseases: [
      {
        name: "Blister Blight (Exobasidium vexans)",
        type: "fungal",
        symptoms: "Circular, pale yellow translucent spots on tender leaves; spots sink on upper surface and bulge on underside into chalky-white blister-like lesions.",
        cause: "Airborne obligate basidiomycete fungus favored by continuous wet overcast monsoon mist (<3-4 hours sunshine/day).",
        organic_treatment: ["Prune shade trees to allow sunshine into bush canopy", "Copper Oxychloride @ 2g/L foliar spray"],
        chemical_treatment_type: ["Copper Oxychloride 50% WP (210g) mixed with Hexaconazole 5% EC (200ml) per hectare", "Propiconazole 25% EC @ 1ml/L"],
        prevention: ["Strict 5-7 day plucking rounds during monsoon to remove tender susceptible tissue", "Maintain open bush tables with good air circulation"]
      },
      {
        name: "Tea Mosquito Bug (Helopeltis theivora)",
        type: "pest",
        symptoms: "Minute circular water-soaked spots on tender shoots and leaves; spots turn dark reddish-brown; tender shoots curl, blacken, and look scorched (die-back).",
        cause: "Mirid bug with distinct pin-like projection on thorax, injecting toxic saliva while sucking sap.",
        organic_treatment: ["Spray 5% Neem kernel extract", "Release predatory reduviid bugs", "Entomopathogenic fungus Beauveria bassiana @ 5g/L"],
        chemical_treatment_type: ["Clothianidin 50% WDG @ 0.2g/L", "Thiamethoxam 25% WG @ 0.3g/L", "Bifenthrin 8% SC @ 1ml/L"],
        prevention: ["Pluck thoroughly to starve young nymphs", "Weed clearing around tea bushes", "Target dawn and dusk for application when bugs are active"]
      }
    ]
  },
  {
    name: "Coffee",
    local_names: {
      hi: "कॉफ़ी / कहवा (Coffee / Kahwa)",
      ta: "காபி (Coffee)",
      te: "కాఫీ (Coffee)",
      kn: "ಕಾಫಿ (Coffee)",
      ml: "കാപ്പി (Kaapi)",
      mr: "कॉफी (Coffee)",
      gu: "કોફી (Coffee)",
      pa: "ਕੌਫ਼ੀ (Coffee)"
    },
    scientific_name: "Coffea arabica / Coffea canephora (Robusta)",
    category: "plantation",
    how_to_identify_leaf: "Perennial evergreen woody shrub with dimorphic branching; leaves are opposite, dark green, glossy, elliptical (10-15 cm) with undulating wavy margins and pointed tips.",
    how_to_identify_seed_or_fruit: "Clusters of fragrant white star-like jasmine flowers; fruit is a fleshy 2-seeded berry ('coffee cherry') ripening from green to bright ruby crimson red.",
    lookalikes: ["Psychotria", "Gardenia shrubs", "Wild Rubiaceae forest bushes"],
    season: "Perennial shade-grown plantation (Chikkamagaluru, Kodagu, Hassan, Wayanad, Araku Valley); Blossom in March-April; Harvest Nov-Feb (Arabica) & Jan-March (Robusta)",
    soil: "Deep, porous, rich volcanic or forest loams with high humus; pH 6.0-6.5; sensitive to water stagnation",
    water: "1500-2500 mm rainfall; blossom showers (backing showers) in March-April are mandatory for fruit set; sprinkler irrigation used if rains delay",
    seed_rate_and_sowing: "Raised from fresh certified parchment seeds in primary/secondary nurseries; Spacing: Arabica (2x2 m; 2500 plants/ha); Robusta (3x3 m; 1100 plants/ha); grown under two-tier forest shade",
    nutrition_per_100g: {
      carbs_g: "0.2 (brewed)",
      fiber_g: "0.0",
      protein_g: "0.3",
      fat_g: "0.0",
      calories_kcal: "2",
      key_vitamins_minerals: ["Chlorogenic acid", "Caffeine", "Caffeic acid", "Trigonelline", "Magnesium", "Niacin (B3)"]
    },
    benefits: ["Rich in chlorogenic acid which moderates post-prandial glucose absorption", "Caffeine enhances neuromuscular reaction time, vigilance, and physical endurance", "Epidemiological studies indicate lower incidence of neurodegenerative decline (Parkinson's and Alzheimer's)"],
    risks_or_cautions: ["Excessive intake (>4 cups daily) can trigger tachycardia, jitteriness, and insomnia; caution in anxiety disorders"],
    medicinal_uses: ["Coffee berry cascara tea consumed for concentrated antioxidant polyphenols", "Topical coffee grounds used as exfoliating skin scrub"],
    diseases: [
      {
        name: "Coffee Leaf Rust (Hemileia vastatrix)",
        type: "fungal",
        symptoms: "Yellow-orange powdery circular pustules on leaf undersides; matching chlorotic spots on upper surface; leaves drop prematurely causing severe tree dieback.",
        cause: "Airborne urediniospores favored by humid overcast monsoon weather (20-25°C) and water drops on leaf surfaces.",
        organic_treatment: ["Spray 0.5% neutral Bordeaux mixture pre-monsoon (May) and post-monsoon (October)", "Copper Oxychloride @ 2.5g/L"],
        chemical_treatment_type: ["Hexaconazole 5% EC @ 1ml/L", "Triadimefon 25% WP @ 1g/L", "Epoxiconazole 7.5% + Carbendazim 7.5% SC @ 1ml/L"],
        prevention: ["Plant rust-tolerant selections like Chandragiri, Selection 795, Selection 9", "Maintain optimal shade density (thin shade trees before monsoon)", "Prune dead wood and sucker shoots"]
      },
      {
        name: "Coffee White Stem Borer (Xylotrechus quadripes)",
        type: "pest",
        symptoms: "Ridges on main trunk bark; yellowing of foliage and wilting; branches snap easily; larvae bore extensive zigzag tunnels through hard hardwood.",
        cause: "Longhorn beetle whose grubs feed internally on hard wood of Arabica coffee trees.",
        organic_treatment: ["Bark scrubbing using coir rope or wire brush to dislodge eggs and pupae before flight periods (Oct-Dec and April-May)", "Apply 10% lime wash on main stem up to primary branches"],
        chemical_treatment_type: ["Chlorpyrifos 20% EC @ 3ml/L stem bark spray", "Clothianidin 50% WDG @ 0.5g/L"],
        prevention: ["Uproot and burn severely infested trees before beetle emergence", "Maintain uniform shade canopy (beetles prefer open sunny patches)", "Install pheromone traps during peak flight"]
      }
    ]
  },
  {
    name: "Rubber",
    local_names: {
      hi: "रबर (Rubber)",
      ta: "ரப்பர் (Rubber)",
      te: "రబ్బరు (Rubber)",
      kn: "ರಬ್ಬರ್ (Rubber)",
      ml: "റബ്ബർ (Rubber)",
      mr: "रबर (Rubber)",
      gu: "રબર (Rubber)",
      pa: "ਰਬੜ (Rubber)"
    },
    scientific_name: "Hevea brasiliensis",
    category: "plantation",
    how_to_identify_leaf: "Tall deciduous tree (up to 30 m) with smooth grey bark; leaves are alternate, trifoliate with three long elliptical leaflets (15-25 cm) with prominent pinnate veins and long petiole.",
    how_to_identify_seed_or_fruit: "Large 3-lobed woody capsule that explodes with loud pop when ripe, flinging 3 large, smooth, mottled brown seeds up to 15 meters.",
    lookalikes: ["Cassava / Tapioca foliage (Manihot esculenta)", "Hevea guianensis"],
    season: "Perennial plantation crop (Kerala, Kanyakumari, Tripura, Assam); Tapping begins at 7 years of age when trunk girth reaches 50 cm; tapped every alternate day",
    soil: "Deep, well-drained, porous red lateritic or clay loams; pH 4.5-5.5; minimum 1.0 m depth without hard laterite pan",
    water: "High rainfall requirement (2000-3000 mm distributed over 100-150 rainy days); requires warm humid tropical climate (25-34°C)",
    seed_rate_and_sowing: "Propagated by budded stumps or brown/green budding onto rootstock seedlings; Spacing: 4.9x4.9 m or 6.7x3.4 m (450-500 trees/ha)",
    nutrition_per_100g: {
      carbs_g: "N/A (Industrial Crop)",
      fiber_g: "N/A",
      protein_g: "N/A",
      fat_g: "N/A",
      calories_kcal: "N/A",
      key_vitamins_minerals: ["Natural cis-1,4-polyisoprene (Latex)", "Rubber seed oil contains oleic, linoleic, and palmitic fatty acids"]
    },
    benefits: ["Primary global source of natural rubber (polyisoprene), vital for automobile tires, aeronautics, and medical gloves", "Rubber wood serves as sustainable eco-friendly timber for furniture after 25-30 year latex life cycle", "Rubber seed oil used in industrial biofuels and non-drying paints"],
    risks_or_cautions: ["Natural latex contains antigenic proteins (Hev b allergens) which can cause severe type-I hypersensitivity in sensitized workers"],
    medicinal_uses: ["Latex is manufactured into hypoallergenic surgical grade examination gloves, catheters, and sterile medical equipment", "Seed oil explored for topical antibacterial fatty acids"],
    diseases: [
      {
        name: "Abnormal Leaf Fall (Phytophthora meadii)",
        type: "fungal",
        symptoms: "Water-soaked dull lesions on leaf petioles with a drop of coagulated latex in center; leaves fall while still green in large carpets; green pods rot.",
        cause: "Oomycete fungus active during heavy Southwest monsoon rain (July-August) with continuous overcast mist.",
        organic_treatment: ["Aerial spraying or high-pressure spray of 1% Bordeaux mixture before monsoon onset (May)", "Copper oxychloride in mineral spray oil"],
        chemical_treatment_type: ["Copper Oxychloride 50% WP suspended in spray oil (1:5) @ 30-40 L/ha", "Metalaxyl 8% + Mancozeb 64% WP @ 2.5g/L"],
        prevention: ["Complete pre-monsoon prophylactic spraying before mid-May", "Crown cleaning and eradication of epiphytes", "Plant tolerant clones like RRII 105, RRII 414"]
      },
      {
        name: "Pink Disease (Corticium salmonicolor)",
        type: "fungal",
        symptoms: "Cobweb-like white mycelial threads on branch forks during monsoon; turns into bright pink encrustation; bark cracks and exudes latex; branch dies back.",
        cause: "Fungus thriving in high humidity, attacking fork regions of young trees (2-6 years old).",
        organic_treatment: ["Scrape pink encrustation and apply Bordeaux paste (1:1:10) on affected branch crotches", "Prune completely dried dead branches below infection"],
        chemical_treatment_type: ["Brush with Copper Oxychloride paste (50g in 1L water) or Propiconazole 25% EC @ 2ml/L in light oil"],
        prevention: ["Inspect young plantation trees twice during rainy season", "Maintain adequate weed slashing around tree bases"]
      }
    ]
  },
  {
    name: "Jute / Patson",
    local_names: {
      hi: "पटसन / जूट (Patson / Jute)",
      ta: "சணல் (Sanal)",
      te: "జనపనార (Janapanara)",
      kn: "ಸೆಣಬು (Senabu)",
      ml: "ചണം (Chanam)",
      mr: "ताग (Taag)",
      gu: "શણ (Shan)",
      pa: "ਪਟਸਨ (Patson)"
    },
    scientific_name: "Corchorus olitorius / Corchorus capsularis",
    category: "commercial",
    how_to_identify_leaf: "Tall, slender, unbranched annual herb (2-4 m); alternate, ovate-lanceolate leaves (5-15 cm) with serrated margins; bottom two serrations prolonged into slender hair-like tail bristles.",
    how_to_identify_seed_or_fruit: "Small yellow flowers with 5 petals; fruit is a cylindrical 5-valved dehiscent capsule (Tossa) or globose wrinkled capsule (White jute) containing small black angular seeds.",
    lookalikes: ["Sunn hemp (Crotalaria juncea)", "Hibiscus cannabinus (Kenaf / Mesta)"],
    season: "Kharif season crop (March-May sowing; harvest July-August at small-pod stage); thrives in humid warm Ganges delta (West Bengal, Bihar, Assam)",
    soil: "Alluvial silts and loams deposited by river floods; pH 6.0-7.5; tolerant to temporary standing water once plant reaches 1 meter height",
    water: "High requirement; 1200-1500 mm rainfall; needs ample clean slow-moving water bodies for biological retting of harvested stalks",
    seed_rate_and_sowing: "Capsularis (White jute): 8-10 kg/ha; Olitorius (Tossa jute): 5-7 kg/ha; Line sowing: 25-30x5-7 cm; Depth: 2-3 cm; Inoculate with Azotobacter",
    nutrition_per_100g: {
      carbs_g: "N/A (Fiber Crop) / Leaves: 5.6",
      fiber_g: "Industrial Bast Fiber / Leaves: 2.0",
      protein_g: "Leaves: 4.5",
      fat_g: "Leaves: 0.3",
      calories_kcal: "Leaves: 34",
      key_vitamins_minerals: ["Lignocellulose bast fiber", "Young leaves (Ewedu/Mallow) contain Beta-carotene", "Iron", "Calcium", "Vitamin C"]
    },
    benefits: ["The 'Golden Fiber' of India: 100% biodegradable, recyclable, and carbon-negative natural packaging material", "Eliminates single-use plastic in agricultural grain sacks, geotextiles, and shopping bags", "Tender young leaves consumed as nutritious mucilaginous greens in eastern India and Africa"],
    risks_or_cautions: ["Retting wastewater requires biological management to avoid localized fish pond oxygen depletion"],
    medicinal_uses: ["Young jute leaves cooked as tonic soup for soothing gastric gastritis", "Seeds used traditionally as purgative and anthelmintic remedy"],
    diseases: [
      {
        name: "Stem Rot / Root Rot (Macrophomina phaseolina)",
        type: "fungal",
        symptoms: "Dark brown necrotic lesions on stem base; leaves droop and shed; bark shreds exposing dark sclerotial bodies; stalks snap easily during storms.",
        cause: "Seed and soil-borne fungus favored by hot dry weather followed by high rainfall and waterlogging.",
        organic_treatment: ["Seed treatment with Trichoderma viride @ 5g/kg", "Soil incorporation of neem cake @ 250 kg/ha", "Apply lime @ 2-4 tonnes/ha in acidic soils"],
        chemical_treatment_type: ["Seed treatment with Carbendazim 50% WP @ 2g/kg", "Foliar spray of Mancozeb 75% WP @ 2.5g/L or Carbendazim @ 1g/L"],
        prevention: ["Crop rotation with paddy rice to flood and suppress soil sclerotia", "Avoid soil compaction and provide field drainage channels", "Use resistant varieties like JRO-524, JRO-204"]
      },
      {
        name: "Yellow Mite (Polyphagotarsonemus latus)",
        type: "pest",
        symptoms: "Young apical leaves curl downwards, become boat-shaped, turn coppery-brown, and stop growing; internodes shorten producing bunchy tops.",
        cause: "Microscopic translucent yellow mites feeding on tender growing tips.",
        organic_treatment: ["Spray 5% NSKE or Neem oil 3ml/L", "Foliar spray of Wettable Sulfur 80% WP @ 2.5g/L", "Water jet spray to wash mites off tips"],
        chemical_treatment_type: ["Spiromesifen 22.9% SC @ 1ml/L", "Propargite 57% EC @ 2ml/L", "Fenazaquin 10% EC @ 1.5ml/L"],
        prevention: ["Avoid excessive nitrogen fertilization", "Early sowing in March", "Remove alternate weed hosts around channels"]
      }
    ]
  },
  {
    name: "Cardamom / Elaichi",
    local_names: {
      hi: "इलायची (Elaichi)",
      ta: "ஏலக்காய் (Yelakkai)",
      te: "ఏలకులు (Yelakulu)",
      kn: "ಏಲಕ್ಕಿ (Yelakki)",
      ml: "ഏലം (Elam)",
      mr: "वेलची (Velchi)",
      gu: "એલચી (Elchi)",
      pa: "ਇਲਾਇਚੀ (Elaichi)"
    },
    scientific_name: "Elettaria cardamomum",
    category: "spice",
    how_to_identify_leaf: "Robust perennial herb (2-4 m) forming thick clumps of pseudostems; large, alternate, lanceolate dark green leaves (30-60 cm) with silky smooth undersides.",
    how_to_identify_seed_or_fruit: "Horizontal prostrate or erect panicles arising from base of pseudostems; small, 3-sided, ovate green capsules containing 15-20 highly aromatic, pungent black seeds.",
    lookalikes: ["Large Cardamom / Badi Elaichi (Amomum subulatum)", "Ginger foliage (Zingiber officinale)", "Alpinia"],
    season: "Perennial shade crop of Western Ghats (Idukki in Kerala, Hassan/Kodagu in Karnataka, Anamalais in Tamil Nadu); Harvest flushes from Aug to Feb",
    soil: "Rich forest loams with deep humus and leaf litter; pH 5.0-6.5; excellent natural drainage on undulating hill slopes",
    water: "High requirement (1500-3500 mm); continuous cool humid conditions (15-25°C); requires sprinkler irrigation in summer dry months (Feb-April)",
    seed_rate_and_sowing: "Propagated by suckers (rhizome splits) or seedlings raised in polybags; Spacing: 2x2 m or 2.5x2.5 m (1600-2000 plants/ha); requires 50-60% filtered forest tree canopy shade",
    nutrition_per_100g: {
      carbs_g: "68.47",
      fiber_g: "28.0",
      protein_g: "10.76",
      fat_g: "6.7",
      calories_kcal: "311",
      key_vitamins_minerals: ["1,8-Cineole", "Terpinyl acetate", "Iron", "Manganese (14 mg - 700% DV)", "Magnesium", "Zinc"]
    },
    benefits: ["The 'Queen of Spices': extraordinary concentration of 1,8-cineole and terpinyl acetate for respiratory clarity", "Potent natural carminative that eliminates halitosis and soothes gastrointestinal spasms", "Supports healthy urinary flow and blood pressure regulation"],
    risks_or_cautions: ["Extremely concentrated essential oils; culinary use is completely safe, avoid excessive therapeutic oil doses in gallstone blockages"],
    medicinal_uses: ["Chewed as natural breath freshener and digestive after heavy meals", "Ground with warm milk to calm insomnia and nighttime coughs"],
    diseases: [
      {
        name: "Katte Disease / Mosaic (Cardamom mosaic virus)",
        type: "viral",
        symptoms: "Discontinuous chlorotic stripes on young leaves running parallel from midrib to margins; pseudostems become slender, clumps turn stunted, flowering panicles dry up.",
        cause: "Potyvirus transmitted non-persistently by the banana aphid (Pentalonia nigronervosa).",
        organic_treatment: ["Spray 5% Neem seed kernel extract or Neem oil 3ml/L to control aphid vector colonies", "Immediate roguing: dig up and chop entire infected clump and burn"],
        chemical_treatment_type: ["Dimethoate 30% EC @ 1.5ml/L", "Imidacloprid 17.8% SL @ 0.5ml/L", "Thiamethoxam 25% WG @ 0.3g/L applied to base of pseudostems"],
        prevention: ["Plant virus-free tissue cultured or certified nursery suckers", "Establish community disease-free buffer zones", "Never collect suckers from Katte-affected plantations"]
      },
      {
        name: "Cardamom Thrips (Sciothrips cardamomi)",
        type: "pest",
        symptoms: "Thrips lacerate tender flower buds and young capsules; mature capsules develop scabby, corky, wart-like incrustations ('scab' or 'pan-cracking'); low export grade.",
        cause: "Tiny yellowish-grey thrips living and multiplying inside leaf sheaths and flower bracts.",
        organic_treatment: ["Spray Verticillium lecanii @ 5g/L", "Neem oil 1500 ppm @ 3ml/L with liquid soap", "Blue sticky cards in shade"],
        chemical_treatment_type: ["Fipronil 5% SC @ 1.5ml/L", "Spinosad 45% SC @ 0.3ml/L", "Quinalphos 25% EC @ 2ml/L"],
        prevention: ["Regulate shade canopy: heavy shade promotes thrips breeding", "Remove dry hanging leaf sheaths before spraying", "Spray on flower panicles at 30-day intervals"]
      }
    ]
  },
  {
    name: "Black Pepper / Kali Mirch",
    local_names: {
      hi: "काली मिर्च (Kali Mirch)",
      ta: "கருமிளகு (Karumilagu)",
      te: "నల్ల మిరియాలు (Nalla Miriyalu)",
      kn: "ಕರಿಮೆಣಸು (Karimenasu)",
      ml: "കുരുമുളക് (Kurumulaku)",
      mr: "काळी मिरी (Kali Miri)",
      gu: "કાળા મરી (Kala Mari)",
      pa: "ਕਾਲੀ ਮਿਰਚ (Kali Mirch)"
    },
    scientific_name: "Piper nigrum",
    category: "spice",
    how_to_identify_leaf: "Perennial evergreen climbing woody vine climbing up to 10 m with aerial adventitious clasping roots; leaves are alternate, ovate to cordate, leathery dark green (10-18 cm) with 5-7 prominent curved arcuate veins.",
    how_to_identify_seed_or_fruit: "Slender pendulous catkin-like spikes (8-15 cm) bearing 20-50 small round sessile berries (drupes) that ripen from dark green to bright fiery red.",
    lookalikes: ["Long pepper (Piper longum)", "Betel leaf (Piper betle)", "Wild pepper (Piper argyrophyllum)"],
    season: "Perennial vine of Western Ghats (Kerala, Karnataka, Tamil Nadu); Flowering in May-June with monsoon; Harvest Dec-March when berries turn red",
    soil: "Well-drained rich red lateritic or loamy soils rich in leaf mold; pH 5.5-6.5; vulnerable to water stagnation at root zone",
    water: "High requirement (2000-3000 mm); thrives in warm humid climates (20-35°C); protective sprinkler irrigation during dry summer flushes",
    seed_rate_and_sowing: "Propagated by two-node runner cuttings rooted in polybags; Trained on live support trees (Silver oak, Arecanut, Erythrina) at spacing 3x3 m (1100 standards/ha)",
    nutrition_per_100g: {
      carbs_g: "63.95",
      fiber_g: "25.3",
      protein_g: "10.39",
      fat_g: "3.26",
      calories_kcal: "251",
      key_vitamins_minerals: ["Piperine", "Chavicine", "Iron", "Manganese", "Vitamin K", "Copper"]
    },
    benefits: ["The 'King of Spices': piperine alkaloid dramatically multiplies curcumin absorption (by up to 2000%)", "Stimulates hydrochloric acid secretion in stomach for enhanced protein digestion", "Natural antimicrobial and antioxidant shielding cellular lipids"],
    risks_or_cautions: ["Excessive doses can irritate sensitive gastric mucosa or reflux in active peptic ulcers"],
    medicinal_uses: ["Black pepper powder with honey taken for acute cough and sore throat relief", "Trikatu (Pepper, Long Pepper, Ginger) formula used in Ayurveda to stimulate metabolism"],
    diseases: [
      {
        name: "Quick Wilt / Foot Rot (Phytophthora capsici)",
        type: "fungal",
        symptoms: "Sudden yellowing and wilting of entire vine; black water-soaked lesions at collar region of stem (foot rot); roots rot and emit foul odor; whole vine dies in 2-3 weeks.",
        cause: "Oomycete water mold living in soil, spread rapidly through rain splash and water runoff during heavy monsoon rains.",
        organic_treatment: ["Drench root zone and spray vine with 1% Bordeaux mixture before monsoon (May-June) and post-monsoon (Aug-Sept)", "Soil application of Trichoderma harzianum @ 50g per vine with neem cake (1 kg)"],
        chemical_treatment_type: ["Drench collar region with Metalaxyl 8% + Mancozeb 64% WP @ 2g/L (5-10 liters per vine)", "Fosetyl-Aluminium 80% WP @ 2g/L foliar spray and soil drench", "Potassium phosphite @ 4ml/L"],
        prevention: ["Provide drainage channels between rows to prevent water stagnation", "Prune lower lateral branches up to 50 cm from ground before monsoon", "Plant tolerant varieties like Panniyur-1, IISR Thevam, IISR Shakthi"]
      },
      {
        name: "Pollu Beetle (Longitarsus nigripennis)",
        type: "pest",
        symptoms: "Adults scrape circular holes on tender leaves; grubs bore inside developing green berries, feeding on seed core; hollow black berries drop or remain dry (pollu).",
        cause: "Small, shining yellow-brown flea beetle with enlarged hind legs for jumping.",
        organic_treatment: ["Spray 5% NSKE or Neem oil 1500 ppm @ 3ml/L twice (July and October)", "Beauveria bassiana 5g/L spray"],
        chemical_treatment_type: ["Quinalphos 25% EC @ 2ml/L", "Dimethoate 30% EC @ 1.5ml/L applied to berries"],
        prevention: ["Regulate shade over vines (pollu beetle thrives in deep thick shade)", "Collect and destroy fallen withered berries", "Loosen soil around base in summer to expose pupae"]
      }
    ]
  }
];

// Read existing plantKnowledgeBase.json
const filePath = path.resolve('src/data/plantKnowledgeBase.json');
const existingData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

console.log(`Current plants count: ${existingData.length}`);

// Check which new plants are not already present
let addedCount = 0;
for (const p of newPlants) {
  const normName = p.name.toLowerCase().trim();
  const exists = existingData.some(e => 
    e.name.toLowerCase().trim() === normName ||
    e.scientific_name?.toLowerCase().trim() === p.scientific_name?.toLowerCase().trim()
  );

  if (!exists) {
    existingData.push(p);
    addedCount++;
    console.log(`+ Added: ${p.name} (${p.scientific_name})`);
  } else {
    console.log(`= Already exists: ${p.name}`);
  }
}

// Write back formatted
fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), 'utf-8');
console.log(`\nSuccessfully updated plantKnowledgeBase.json! Total plants now: ${existingData.length} (Added ${addedCount} new plants)`);
