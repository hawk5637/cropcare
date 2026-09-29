// AI Crop Doctor & Leaf Scanner Component
// Real-Time Camera Stream, File Upload, Instant Sample Gallery & Multi-Lingual Gemini Vision Diagnostics
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

export const cropDiseasesDatabase = [
  // ================= 1. FRUIT LEAVES & PATHOLOGY =================
  {
    id: "sample-mango-anthracnose",
    category: "fruit",
    crop: {
      en: "Mango (Alphonso & Kesar)",
      hi: "आम (अल्फांसो व केसर आम)",
      ta: "மாம்பழம் (அல்போன்சா மா இலை)",
      fr: "Manguier (Feuillage Mangue Alphonso)"
    },
    diseaseName: {
      en: "Mango Anthracnose & Leaf Burn (Colletotrichum gloeosporioides)",
      hi: "आम का एन्थ्रेक्नोज़ व पत्ती झुलसा रोग (कोलेटोट्राइकम)",
      ta: "மா இலை கருகல் & ஆந்த்ராக்னோஸ் நோய்",
      fr: "Anthracnose du Manguier & Dessèchement Foliaire"
    },
    pathogenType: {
      en: "Fruit Tree Foliar Ascomycete Fungus",
      hi: "कवक जनित फलदार पत्ती व मंजर रोग",
      ta: "பழ மர பூஞ்சை இலை நோய்",
      fr: "Champignon Ascomycète Foliaire Arboricole"
    },
    severity: "58% Moderate Severity",
    severityLevel: "medium",
    confidence: "97.8%",
    image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Dark brown to black angular necrotic spots on mango leaves, leaf tip burn, blossom blight, tear-staining on fruits.",
      hi: "पत्तियों और नई टहनियों पर गहरे भूरे-काले अनियमित धब्बे, पत्ती के छोरों का सूखना और बौर का झड़ना।",
      ta: "இலைகளில் கரும்பழுப்பு நிற புள்ளிகள், இலை நுனி காய்ந்து போகுதல், பூக்கள் உதிர்தல்.",
      fr: "Taches nécrotiques brun foncé angulaires sur limbe, brûlure de l'apex et dessèchement des inflorescences."
    },
    organicTreatment: {
      en: "Foliar spray of 5% Neem Seed Kernel Extract (NSKE) or Copper Oxychloride 50% WP @ 3g/L with cow urine tonic every 10 days.",
      hi: "5% नीम की निंबोली का अर्क (NSKE) या कॉपर ऑक्सीक्लोराइड 3 ग्राम/लीटर गोमूत्र के साथ मिलाकर 10 दिन के अंतराल पर छिड़कें।",
      ta: "வேப்பங்கொட்டை சாறு 5% அல்லது காப்பர் ஆக்சிகுளோரைடு (3 கிராம்/லிட்டர்) தெளிக்கவும்.",
      fr: "Pulvérisation d'extrait de graines de neem (NSKE 5%) ou oxychlorure de cuivre à 3g/L avec purin d'ortie."
    },
    chemicalTreatment: {
      en: "Azoxystrobin 18.2% + Difenoconazole 11.4% SC (Amistar Top) @ 1 ml/L or Carbendazim 50% WP (Bavistin) @ 1 g/L.",
      hi: "एज़ॉक्सीस्ट्रोबिन + डाइफेनोकोनाज़ोल (एमिस्टार टॉप) 1 मिली/लीटर या कार्बेन्डाजिम 50% डब्ल्यूपी (बाविस्टिन) 1 ग्राम/लीटर का छिड़काव करें।",
      ta: "அசோக்சிஸ்ட்ரோபின் + டைபினோகோனசோல் (1 மிலி/லிட்டர்) அல்லது கார்பென்டாசிம் (1 கிராம்/லிட்டர்) தெளிக்கவும்.",
      fr: "Azoxystrobine 18.2% + Difénoconazole 11.4% SC à 1 ml/L ou Carbendazime 50% WP à 1 g/L."
    },
    prevention: {
      en: "Post-harvest canopy pruning to ensure sunlight reaches internal branches. Collect and incinerate fallen blighted foliage.",
      hi: "कटाई के बाद बागीचे में हवा व धूप के लिए छंटाई करें। गिरी हुई बीमार पत्तियों को एकत्र कर जला दें।",
      ta: "மரத்தின் அடர்த்தியான கிளைகளை கவாத்து செய்யவும். உதிர்ந்த பாதிக்கப்பட்ட இலைகளை சேகரித்து அழிக்கவும்.",
      fr: "Élagage aéré après récolte pour favoriser la pénétration de la lumière. Brûler les feuilles tombées infectées."
    }
  },
  {
    id: "sample-guava-bronzing",
    category: "fruit",
    crop: {
      en: "Guava (Allahabad Safeda & L-49)",
      hi: "अमरूद (इलाहाबादी सफेदा व एल-49)",
      ta: "கொய்யா (கொய்யா இலை & தண்டு)",
      fr: "Goyavier (Feuillage Goyave L-49)"
    },
    diseaseName: {
      en: "Guava Wilt & Bronzing (Fusarium oxysporum / Micronutrient Deficiency)",
      hi: "अमरूद का उकठा व तांबाई पत्ती रोग (फ्युजेरियम / जिंक कमी)",
      ta: "கொய்யா வாடல் நோய் & செம்பழுப்பு இலை",
      fr: "Flétrissement Vasculaire & Bronzage du Goyavier"
    },
    pathogenType: {
      en: "Soil-borne Vascular Fungi & Zinc Starvation",
      hi: "मृदा जनित संवहनी कवक व जिंक पोषक तत्व न्यूनता",
      ta: "வாஸ்குலர் பூஞ்சை & துத்தநாக குறைபாடு",
      fr: "Champignon Vasculaire & Carence en Zinc"
    },
    severity: "42% Moderate Severity",
    severityLevel: "medium",
    confidence: "96.5%",
    image: "https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Foliage turns dull purplish-bronze, interveinal chlorosis, terminal twigs die back, gradual canopy wilting.",
      hi: "पत्तियां कांस्य-बैंगनी या लाल-पीली पड़ जाती हैं, नसों के बीच पीलापन, टहनियों का ऊपर से सूखना व उकठा लगना।",
      ta: "இலைகள் செம்பழுப்பு அல்லது மஞ்சள் நிறமாக மாறும், கிளைகள் நுனியிலிருந்து வாடி உலர்தல்.",
      fr: "Feuillage prenant une teinte bronze violacée, chlorose internervaire, dépérissement des rameaux terminaux."
    },
    organicTreatment: {
      en: "Root zone drenching with Trichoderma harzianum @ 25g/tree mixed with 5kg decomposed Farm Yard Manure (FYM) and neem cake.",
      hi: "ट्राइकोडर्मा हरजिएनम 25 ग्राम प्रति पेड़ 5 किलो सड़ी गोबर खाद व नीम खली में मिलाकर तने के चारों ओर मिट्टी में मिलाएं।",
      ta: "டிரைக்கோடெர்மா ஹார்சியானம் 25 கிராம் மற்றும் 5 கிலோ மக்கிய தொழுவுரம் மரத்தின் தூரில் இடவும்.",
      fr: "Ensemencement au sol de Trichoderma harzianum à 25g par arbre mélangé à 5kg de compost mûr et tourteau de neem."
    },
    chemicalTreatment: {
      en: "Foliar spray of Zinc Sulphate (21%) @ 5g/L + Boric Acid @ 2g/L. Drench root zone with Carbendazim 50% WP @ 2g/L.",
      hi: "जिंक सल्फेट 5 ग्राम/लीटर + बोरिक एसिड 2 ग्राम/लीटर का पर्णीय छिड़काव करें। जड़ों में कार्बेन्डाजिम 2 ग्राम/लीटर का घोल डालें।",
      ta: "துத்தநாக சல்பேட் 5 கிராம்/லிட்டர் + போரிக் அமிலம் 2 கிராம்/லிட்டர் இலைவழி தெளிக்கவும்.",
      fr: "Pulvérisation de sulfate de zinc à 5g/L + acide borique à 2g/L. Bassinage racinaire au Carbendazime à 2g/L."
    },
    prevention: {
      en: "Maintain orchard soil pH between 6.5 and 7.5. Avoid mechanical root injuries during inter-culture hoeing.",
      hi: "चूने के प्रयोग से मिट्टी का पीएच 6.5 से 7.5 बनाए रखें। जुताई के समय अमरूद की जड़ों को कटने से बचाएं।",
      ta: "மண் அமிலத்தன்மையை 6.5 - 7.5 அளவில் பராமரிக்கவும். உழவு செய்யும்போது வேர்களுக்கு சேதம் ஏற்படுவதை தவிர்க்கவும்.",
      fr: "Maintenir le pH du sol entre 6.5 et 7.5 par chaulage. Éviter d'endommager les racines lors du sarclage."
    }
  },
  {
    id: "sample-healthy-crop",
    category: "leaf",
    crop: {
      en: "Healthy Green Plant (Vigorous Foliage)",
      hi: "स्वस्थ फसल की पत्ती (रोगमुक्त हरा पौधा)",
      ta: "ஆரோக்கியமான பசுமை பயிர் இலை",
      fr: "Culture Saine & Vigoureuse (Zéro Pathogène)"
    },
    diseaseName: {
      en: "Healthy Foliage — Zero Pathogens Detected",
      hi: "पूर्णतः स्वस्थ फसल — कोई रोग या कीट नहीं पाया गया",
      ta: "ஆரோக்கியமான இலை — நோய்த்தொற்று இல்லை",
      fr: "Feuillage Sain — Aucun Agent Pathogène Détecté"
    },
    pathogenType: {
      en: "Normal Plant Physiology • Optimal Chlorophyll a/b",
      hi: "सामान्य पादप शरीर क्रिया विज्ञान • संतुलित क्लोरोफिल",
      ta: "சீரான தாவர வளர்ச்சி & பச்சையம்",
      fr: "Physiologie Végétale Normale • Équilibre Chlorophyllien"
    },
    severity: "0% Clean Healthy Status",
    severityLevel: "low",
    confidence: "99.4%",
    image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Glossy deep green leaf blade, intact cellular cuticle, active stomatal conductance, robust vegetative vigour index (NDVI: 0.88).",
      hi: "गहरा चमकदार हरा रंग, मजबूत पत्ती की सतह, रंध्रों की सक्रियता और उत्कृष्ट वानस्पतिक स्वास्थ्य (NDVI: 0.88)।",
      ta: "பளபளப்பான கரும்பச்சை இலை பரப்பு, வலுவான தாவர வளர்ச்சி குறியீடு (NDVI: 0.88).",
      fr: "Limbe vert foncé brillant, cuticule intacte, conductance stomatique optimale, vigueur végétative maximale (NDVI: 0.88)."
    },
    organicTreatment: {
      en: "No fungicides or pesticides required! Continue routine balanced organic compost top-dressing and drip watering.",
      hi: "किसी कीटनाशक या फफूंदनाशी की आवश्यकता नहीं है! नियमित जैविक खाद और समय पर सिंचाई जारी रखें।",
      ta: "மருந்துகள் தேவையில்லை! வழக்கமான இயற்கை உரம் மற்றும் சொட்டுநீர் பாசனத்தை தொடரவும்.",
      fr: "Aucun fongicide ni pesticide requis ! Poursuivre la fertilisation organique équilibrée et l'irrigation au goutte-à-goutte."
    },
    chemicalTreatment: {
      en: "Zero chemical intervention required. Save inputs cost and maintain beneficial predatory insect population.",
      hi: "रासायनिक दवाओं पर शून्य खर्च। मित्र कीटों (लेडीबर्ड भृंग) को सुरक्षित रखें।",
      ta: "ரசாயன மருந்து செலவு மிச்சம். நன்மை செய்யும் பூச்சிகளை பாதுகாக்கவும்.",
      fr: "Zéro intervention chimique requise. Économisez vos intrants et préservez la faune entomologique auxiliaire."
    },
    prevention: {
      en: "Apply prophylactic seaweed extract bio-stimulant @ 2 ml/L every 21 days to sustain plant immunity.",
      hi: "फसल की रोग प्रतिरोधक क्षमता बनाए रखने के लिए समय-समय पर समुद्री शैवाल अर्क (सीवीड) 2 मिली/लीटर का छिड़काव करें।",
      ta: "நோய் எதிர்ப்பு சக்தியை தக்கவைக்க கடல்பாசி சாறு (2 மிலி/லிட்டர்) தெளிக்கலாம்.",
      fr: "Application préventive de biostimulant à base d'extraits d'algues brunes à 2 ml/L pour stimuler les défenses naturelles."
    }
  },
  {
    id: "sample-rice-bacterial-blight",
    category: "leaf",
    crop: {
      en: "Rice / Paddy (Basmati & Sona Masoori)",
      hi: "धान / चावल (बासमती व सोना मसूरी)",
      ta: "நெல் / அரிசி (பாஸ்மதி நெற்பயிர்)",
      fr: "Riz / Paddy (Riz Basmati & Sona Masoori)"
    },
    diseaseName: {
      en: "Bacterial Leaf Blight (Xanthomonas oryzae pv. oryzae)",
      hi: "धान का जीवाणु झुलसा / अंगमारी (बैक्टीरियल लीफ ब्लाइट)",
      ta: "நெல் பாக்டீரியா இலை கருகல் நோய்",
      fr: "Flétrissement Bactérien du Riz (Xanthomonas oryzae)"
    },
    pathogenType: {
      en: "Bacterial Vascular Pathogen",
      hi: "जीवाणु जनित संवहनी रोग (बैक्टीरिया)",
      ta: "பாக்டீரியா நோய்",
      fr: "Bactérie Vasculaire Phytopathogène"
    },
    severity: "62% High Severity",
    severityLevel: "high",
    confidence: "96.9%",
    image: "https://images.unsplash.com/photo-1536657464919-892534f60d6e?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Water-soaked lesions on leaf margins turning wavy yellow-white with milky bacterial ooze droplets in early mornings, kresek wilting.",
      hi: "पत्तियों के किनारों से शुरू होकर लहरदार पीले-सफेद सूखते हुए धब्बे, सुबह के समय पत्तियों पर दूधिया जीवाणु बूंदें।",
      ta: "இலை ஓரங்களில் அலை அலையான மஞ்சள்-வெள்ளை கருகல் கோடுகள், காலை நேரத்தில் கசியும் பாக்டீரியா திரவம்.",
      fr: "Lésions translucides évoluant en bandes ondulées blanc-jaunâtre le long des marges foliaires, gouttelettes d'exsudat laiteux."
    },
    organicTreatment: {
      en: "Foliar spray of Fresh Cow Dung Extract (20kg in 100L water, filtered) or Pseudomonas fluorescens @ 10g/L.",
      hi: "ताजे गोबर का अर्क (20 किग्रा 100 लीटर पानी में घोलकर छाना हुआ) या स्यूडोमोनास फ्लोरोसेंस 10 ग्राम/लीटर का छिड़काव करें।",
      ta: "சாண சாறு கரைசல் அல்லது சூடோமோனாஸ் ஃப்ளோரசன்ஸ் (10 கிராம்/லிட்டர்) தெளிக்கவும்.",
      fr: "Pulvérisation foliaire de filtrat de bouse de vache fraîche ou Pseudomonas fluorescens à 10g/L."
    },
    chemicalTreatment: {
      en: "Streptocycline (Streptomycin Sulphate + Tetracycline) @ 6g + Copper Oxychloride @ 500g in 200L water per acre.",
      hi: "स्ट्रेप्टोसाइक्लिन 6 ग्राम + कॉपर ऑक्सीक्लोराइड 500 ग्राम को 200 लीटर पानी में घोलकर प्रति एकड़ छिड़कें।",
      ta: "ஸ்ட்ரெப்டோசைக்ளின் 6 கிராம் + காப்பர் ஆக்சிகுளோரைடு 500 கிராம் 200 லிட்டர் நீரில் கலந்து ஏக்கருக்கு தெளிக்கவும்.",
      fr: "Sulfate de streptomycine + tétracycline à 6g avec oxychlorure de cuivre à 500g dans 200L d'eau par hectare."
    },
    prevention: {
      en: "Avoid deep standing water in nursery. Split nitrogen application into 3 equal doses; never top-dress during stormy days.",
      hi: "खेत में लंबे समय तक पानी न भरने दें। यूरिया को एक साथ डालने के बजाय तीन बार में दें।",
      ta: "வயலில் அதிகப்படியான நீர் தேங்குவதை தவிர்க்கவும். தழைச்சத்தை பிரித்து இடவும்.",
      fr: "Drainer les excès d'eau stagnante. Fractionner les apports d'azote; ne jamais surdoser en période orageuse."
    }
  },
  // ================= 2. FIELD CROP LEAF PATHOLOGIES =================
  {
    id: "sample-wheat-rust",
    category: "leaf",
    crop: {
      en: "Wheat (Durum & Bread Wheat)",
      hi: "गेहूं (शरबती व कठिया गेहूं)",
      ta: "கோதுமை (கோதுமை பயிர்)",
      fr: "Blé (Blé Tendre & Blé Dur)"
    },
    diseaseName: {
      en: "Stripe Rust / Yellow Rust (Puccinia striiformis)",
      hi: "पीला रतुआ / हल्दी रोग (पक्सीनिया स्ट्राइफॉर्मिस)",
      ta: "மஞ்சள் துரு நோய் (Puccinia striiformis)",
      fr: "Rouille Jaune Striée (Puccinia striiformis)"
    },
    pathogenType: {
      en: "Fungal Pathogen (Basidiomycota)",
      hi: "कवक जनित रोग (फफूंद)",
      ta: "பூஞ்சை தொற்று நோய்",
      fr: "Pathogène Fongique (Basidiomycète)"
    },
    severity: "68% High Severity",
    severityLevel: "high",
    confidence: "97.4%",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Bright yellow pustules forming parallel stripes on leaf blades, powdery yellow dust rubs onto fingers, stunted grain filling.",
      hi: "पत्तियों पर पीले रंग की धारियाँ और हल्दी जैसा पीला पाउडर जो उंगलियों पर चिपकता है; दाना बारीक रह जाता है।",
      ta: "இலைகளில் மஞ்சள் நிற வரிகள் தோன்றும், கைகளில் மஞ்சள் தூள் ஒட்டும்; தானிய வளர்ச்சி பாதிக்கப்படும்.",
      fr: "Pustules jaune vif disposées en stries parallèles sur le limbe; poussière jaune au toucher; grain échaudé."
    },
    organicTreatment: {
      en: "Foliar spray of Sour Buttermilk (Chhachh) mixed with Asafoetida (Hing) @ 5L/acre, or Trichoderma viride @ 5g/L water during overcast mornings.",
      hi: "खट्टी छाछ में 100 ग्राम हींग मिलाकर 5 लीटर प्रति एकड़ छिड़कें, या ट्राइकोडर्मा विरिडी 5 ग्राम/लीटर पानी में मिलाकर सुबह छिड़काव करें।",
      ta: "புளித்த மோர் மற்றும் பெருங்காயம் கரைசல் அல்லது டிரைக்கோடெர்மா விரிடி (5 கிராம்/லிட்டர்) தெளிக்கவும்.",
      fr: "Pulvérisation foliaire de petit-lait fermenté avec asafoetida ou Trichoderma viride à 5g/L le matin."
    },
    chemicalTreatment: {
      en: "Propiconazole 25% EC (Tilt) @ 1 ml/L or Tebuconazole 25.9% EC @ 1.2 ml/L in 200L water per acre. Repeat after 12 days if humidity persists.",
      hi: "प्रोपिकोनाज़ोल 25% ईसी (टिल्ट) 1 मिली/लीटर या टेबुकोनाज़ोल 25.9% ईसी 1.2 मिली/लीटर पानी में घोलकर 200 लीटर प्रति एकड़ छिड़कें। 12 दिन बाद दोहराएं।",
      ta: "புரோபிகோனசோல் 25% EC (1 மிலி/லிட்டர்) அல்லது டெபுகோனசோல் 200 லிட்டர் நீரில் கலந்து ஏக்கருக்கு தெளிக்கவும்.",
      fr: "Propiconazole 25% EC à 1 ml/L ou Tébuconazole 25.9% EC à 1.2 ml/L dans 200L d'eau par hectare."
    },
    prevention: {
      en: "Sow rust-resistant varieties (HD-2967, PBW-550, HD-3086). Avoid excess nitrogen fertilizers during foggy January weeks.",
      hi: "रतुआ-रोधी बीज (एचडी-2967, पीबीडब्ल्यू-550) ही बोएं। जनवरी के कोहरे वाले मौसम में यूरिया का अधिक उपयोग न करें।",
      ta: "துரு நோய் எதிர்ப்பு ரகங்களை பயிரிடவும். பனி காலத்தில் அதிகப்படியான யூரியாவை தவிர்க்கவும்.",
      fr: "Semer des variétés résistantes (HD-2967). Éviter les excès d'azote minéral durant les brouillards hivernaux."
    }
  },
  {
    id: "sample-tomato-blight",
    category: "leaf",
    crop: {
      en: "Tomato (Solanum lycopersicum)",
      hi: "टमाटर (देसी व हाइब्रिड टमाटर)",
      ta: "தக்காளி (நாட்டு & வீரிய ரகம்)",
      fr: "Tomate (Solanum lycopersicum)"
    },
    diseaseName: {
      en: "Early Blight & Late Blight (Alternaria / Phytophthora)",
      hi: "अगेती व पछेती झुलसा (अल्टरनेरिया / फाइटोफ्थोरा)",
      ta: "ஆரம்பகால மற்றும் பின்கால கருகல் நோய் (Blight)",
      fr: "Mildiou & Alternariose de la Tomate"
    },
    pathogenType: {
      en: "Fungal Leaf Pathogen",
      hi: "कवक / फफूंद जनित पत्ती रोग",
      ta: "பூஞ்சை இலை நோய்",
      fr: "Champignon Foliaire Ascomycète"
    },
    severity: "54% Moderate Severity",
    severityLevel: "medium",
    confidence: "98.1%",
    image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Concentric target-board rings on lower older leaves, water-soaked dark patches, yellow chlorotic halo, defoliation.",
      hi: "निचली पत्तियों पर गोल छल्लेदार भूरे धब्बे जिनके चारों ओर पीला घेरा होता है; पत्तियां पीली पड़कर झड़ने लगती हैं।",
      ta: "கீழ் இலைகளில் வட்ட வடிவ பழுப்பு நிற புள்ளிகள், இலைகள் முன்கூட்டியே உதிர்தல்.",
      fr: "Taches brunes concentriques en 'œil de cible' sur vieilles feuilles, halo chlorotique jaune, défoliation précoce."
    },
    organicTreatment: {
      en: "Neem oil spray (1500 ppm) @ 4 ml/L water with liquid soap, or Copper Oxychloride + Cow urine foliar tonic every 7 days.",
      hi: "नीम का तेल (1500 ppm) 4 मिली/लीटर पानी में साबुन के साथ घोलकर छिड़कें, या गोमूत्र व नीम अर्क का हर 7 दिन में स्प्रे करें।",
      ta: "வேப்ப எண்ணெய் (1500 ppm) 4 மிலி/லிட்டர் நீரில் கலந்து தெளிக்கவும், அல்லது மாட்டு சிறுநீர் கரைசல் பயன்படுத்தவும்.",
      fr: "Huile de neem (1500 ppm) à 4 ml/L avec savon noir émulsifiant, ou macération de prêle à 10%."
    },
    chemicalTreatment: {
      en: "Mancozeb 75% WP (Dithane M-45) @ 2.5 g/L or Azoxystrobin 23% SC @ 1 ml/L. Ensure spray reaches underside of canopy.",
      hi: "मैनकोजेब 75% डब्ल्यूपी (डाइथेन एम-45) 2.5 ग्राम/लीटर या एज़ॉक्सीस्ट्रोबिन 23% एससी 1 मिली/लीटर पानी में मिलाकर पौधों पर अच्छी तरह छिड़कें।",
      ta: "மேன்கோசெப் 75% WP (2.5 கிராம்/லிட்டர்) அல்லது அசோக்சிஸ்ட்ரோபின் 23% SC (1 மிலி/லிட்டர்) தெளிக்கவும்.",
      fr: "Mancozèbe 75% WP à 2.5 g/L ou Azoxystrobine 23% SC à 1 ml/L avec mouillant foliaire."
    },
    prevention: {
      en: "Mulch soil with straw to prevent fungal spore splashing from rain. Drip irrigate instead of overhead sprinklers.",
      hi: "मिट्टी पर पुआल की मल्चिंग करें ताकि सिंचाई के छींटों से फफूंद न फैले। फव्वारे के बजाय ड्रिप से पानी दें।",
      ta: "மண்ணை வைக்கோல் கொண்டு மூடவும், மேல்நிலை தெளிப்பான்களுக்கு பதிலாக சொட்டுநீர் பாசனத்தை பயன்படுத்தவும்.",
      fr: "Paillage végétal pour limiter les éclaboussures de terre. Préférer le goutte-à-goutte à l'aspersion."
    }
  },
  {
    id: "sample-powdery-mildew",
    category: "leaf",
    crop: {
      en: "Cucurbits, Peas & Melons",
      hi: "सब्जियां, मटर व कद्दू वर्गीय फसलें",
      ta: "காய்கறி, பட்டாணி & கொடி பயிர்கள்",
      fr: "Cucurbitacées, Pois & Légumes"
    },
    diseaseName: {
      en: "Powdery Mildew (Erysiphe / Podosphaera)",
      hi: "चूर्णिल आसिता / छाछिया रोग (पाउडरी मिल्ड्यू)",
      ta: "சாம்பல் நோய் (Powdery Mildew)",
      fr: "Oïdium / Blanc des Plantes (Erysiphe)"
    },
    pathogenType: {
      en: "Obligate Fungal Mycelium",
      hi: "सफेद फफूंद माइसीलियम संक्रमण",
      ta: "பூஞ்சை சாம்பல் தொற்று",
      fr: "Champignon Ascomycète Ectoparasite"
    },
    severity: "58% Moderate Infestation",
    severityLevel: "medium",
    confidence: "98.6%",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Talcum-powder-like white spots covering upper leaf surface, progressing to gray felt; leaves curl upward and scorch dry.",
      hi: "पत्तियों की ऊपरी सतह पर सफेद पाउडर जैसी फफूंद, पत्तियां मुड़कर सूखने लगती हैं और प्रकाश संश्लेषण बंद हो जाता है।",
      ta: "இலைகளின் மேல் பகுதியில் வெள்ளை நிற சாம்பல் போன்ற படலம், இலைகள் காய்ந்து உதிர்தல்.",
      fr: "Feutrage blanc farineux caractéristique couvrant la face supérieure des feuilles, jaunissement et dessèchement."
    },
    organicTreatment: {
      en: "Milk foliar spray (1 part fresh milk to 9 parts water in bright sunlight), or Potassium Bicarbonate @ 3g/L + Wettable Sulfur 80% WDG.",
      hi: "कच्चे दूध का स्प्रे (1 भाग दूध + 9 भाग पानी धूप में), या पोटेशियम बाईकार्बोनेट 3 ग्राम/लीटर + घुलनशील सल्फर का छिड़काव करें।",
      ta: "பால் கரைசல் (1:9 விகிதம்) அல்லது நனையும் கந்தகம் (Sulfur 80% WDG) 3 கிராம்/லிட்டர் நீரில் தெளிக்கவும்.",
      fr: "Pulvérisation foliaire de petit-lait (10% dans l'eau au soleil) ou bicarbonate de potassium à 3 g/L."
    },
    chemicalTreatment: {
      en: "Hexaconazole 5% SC (Contaf) @ 2 ml/L or Dinocap 48% EC @ 1 ml/L. Ensure complete wetting of leaf surfaces.",
      hi: "हेक्साकोनाज़ोल 5% एससी (कॉन्टाफ) 2 मिली/लीटर या डिनोकैप 48% ईसी 1 मिली/लीटर पानी में मिलाकर छिड़कें।",
      ta: "ஹெக்சாகோனசோல் 5% SC (2 மிலி/லிட்டர்) நீரில் கலந்து இலைகள் நன்கு நனையுமாறு தெளிக்கவும்.",
      fr: "Hexaconazole 5% SC à 2 ml/L ou Difenoconazole à 0.5 ml/L avec agent tensioactif."
    },
    prevention: {
      en: "Prune dense lower foliage to enhance air circulation and sunlight penetration. Avoid excess overhead evening irrigation.",
      hi: "पौधों के बीच हवा और धूप का आवागमन बनाए रखें। शाम के समय पत्तियों पर पानी का छिड़काव न करें।",
      ta: "செடிகளுக்கிடையே போதிய காற்று மற்றும் சூரிய ஒளி கிடைக்க வழி செய்யவும். மாலை நேர பாசனத்தை தவிர்க்கவும்.",
      fr: "Aérer le feuillage par effeuillage raisonné pour limiter l'hygrométrie sous canopée."
    }
  },
  {
    id: "sample-leaf-spot",
    category: "leaf",
    crop: {
      en: "Groundnut, Spinach & Pulses",
      hi: "मूंगफली, पालक व दलहन फसलें",
      ta: "நிலக்கடலை, கீரை & பருப்பு வகைகள்",
      fr: "Arachide, Épinard & Légumineuses"
    },
    diseaseName: {
      en: "Cercospora & Septoria Leaf Spot (Tikka Disease)",
      hi: "टिक्का रोग / पत्ती धब्बा (सर्कोस्पोरा लीफ स्पॉट)",
      ta: "டிக்கா இலைப்புள்ளி நோய் (Cercospora Leaf Spot)",
      fr: "Cercosporiose / Taches Foliaires (Maladie de Tikka)"
    },
    pathogenType: {
      en: "Fungal Necrotic Lesion Pathogen",
      hi: "नेक्रोटिक फफूंद घाव जनित रोग",
      ta: "இலை திசு அழுகல் பூஞ்சை",
      fr: "Pathogène Fongique Nécrotrophique"
    },
    severity: "48% Medium Severity",
    severityLevel: "medium",
    confidence: "96.9%",
    image: "https://images.unsplash.com/photo-1567894340315-735d7c361db0?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Small dark circular necrotic spots with pronounced chlorotic yellow halo rings, coalescing into large dead leaf blotches.",
      hi: "पत्तियों पर गोल काले-भूरे धब्बे जिनके चारों ओर चमकदार पीला छल्ला होता है; पत्तियां समय से पहले गिर जाती हैं।",
      ta: "இலைகளில் மஞ்சள் நிற வளையத்துடன் கூடிய கரும்பழுப்பு வட்ட புள்ளிகள், இலைகள் உதிர்தல்.",
      fr: "Lésions circulaires brun foncé bordées d'un halo jaune vif, coalescentes provoquant la sénescence prématurée."
    },
    organicTreatment: {
      en: "Foliar spray of Pseudomonas fluorescens (10g/L) or Bordeaux Mixture (1%) at first sign of circular lesions.",
      hi: "स्यूडोमोनास फ्लोरेसेंस 10 ग्राम/लीटर या 1% बोर्डो मिश्रण का पत्तों पर समान छिड़काव करें।",
      ta: "சூடோமோனாஸ் ஃப்ளோரசன்ஸ் (10 கிராம்/லிட்டர்) அல்லது 1% போர்டோ கலவை தெளிக்கவும்.",
      fr: "Bio-fongicide Pseudomonas fluorescens à 10g/L ou Bouillie Bordelaise à 1% en préventif."
    },
    chemicalTreatment: {
      en: "Carbendazim 12% + Mancozeb 63% WP (Saaf) @ 2 g/L or Chlorothalonil 75% WP @ 2 g/L every 14 days.",
      hi: "कार्बेन्डाजिम 12% + मैनकोजेब 63% डब्ल्यूपी (साफ) 2 ग्राम/लीटर पानी में घोलकर 14 दिन के अंतराल पर छिड़कें।",
      ta: "கார்பென்டாசிம் + மேன்கோசெப் (Saaf) 2 கிராம்/லிட்டர் நீரில் கலந்து 14 நாட்கள் இடைவெளியில் தெளிக்கவும்.",
      fr: "Carbendazime + Mancozèbe (Saaf) à 2 g/L ou Chlorothalonil 75% WP à 2 g/L tous les 14 jours."
    },
    prevention: {
      en: "2-year crop rotation with non-host cereals. Treat seeds with Trichoderma before planting.",
      hi: "फसल चक्र अपनाएं (अनाज वाली फसलें लगाएं)। बुवाई से पहले बीजों का ट्राइकोडर्मा से उपचार करें।",
      ta: "பயிர் சுழற்சி முறையை பின்பற்றவும். விதைப்பதற்கு முன் டிரைக்கோடெர்மா கொண்டு விதை நேர்த்தி செய்யவும்.",
      fr: "Rotation triennale avec céréales. Désinfection biologique des semences au Trichoderma."
    }
  },
  {
    id: "sample-aphid-damage",
    category: "leaf",
    crop: {
      en: "Mustard, Cotton & Vegetables",
      hi: "सरसों, कपास व मौसमी सब्जियां",
      ta: "கடுகு, பருத்தி & காய்கறிகள்",
      fr: "Moutarde, Coton & Cultures Maraîchères"
    },
    diseaseName: {
      en: "Aphid Infestation & Sooty Mold (Lipaphis erysimi)",
      hi: "माहू / चेपा कीट प्रकोप व काली फफूंद (एफिड्स)",
      ta: "அசுவினி பூச்சி தாக்குதல் & கரும்பூஞ்சை (Aphids)",
      fr: "Attaque de Pucerons & Fumagine Noire"
    },
    pathogenType: {
      en: "Sap-Sucking Insect Pest Vector",
      hi: "रस चूसक कीट एवं रोग संवाहक",
      ta: "சாறு உறிஞ்சும் பூச்சி & பூஞ்சை",
      fr: "Hémiptère Piqueur-Suceur (Aphididae)"
    },
    severity: "72% High Severity",
    severityLevel: "high",
    confidence: "97.9%",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Dense clusters of green/black aphids under leaves and apical buds, sticky honeydew excretions, black sooty mold fungus.",
      hi: "पत्तियों व कोमल टहनियों पर चिपचिपा काला-हरा माहू का झुंड, चिपचिपा मधु स्राव और काली फफूंद की चादर।",
      ta: "இலைகளின் அடியில் பச்சை/கருப்பு அசுவினி பூச்சிகள், தேன் போன்ற பிசுபிசுப்பான கழிவு மற்றும் கரும்பூஞ்சை.",
      fr: "Colonies denses de pucerons sous les feuilles, miellat visqueux favorisant le développement de fumagine noire."
    },
    organicTreatment: {
      en: "Spray 5% Neem Seed Kernel Extract (NSKE) or Verticillium lecanii @ 5 g/L. Spray soap solution (10g/L) to dissolve honeydew.",
      hi: "5% नीम बीज गिरी अर्क (NSKE) या वर्टिसिलियम लेकानी 5 ग्राम/लीटर छिड़कें। साबुन के हल्के घोल से धोएं।",
      ta: "5% வேப்பங்கொட்டை சாறு அல்லது வெர்ட்டிசிலியம் லெக்கானி (5 கிராம்/லிட்டர்) மாலை வேளையில் தெளிக்கவும்.",
      fr: "Extrait de graines de neem (NSKE 5%) ou champignon entomopathogène Verticillium lecanii à 5 g/L."
    },
    chemicalTreatment: {
      en: "Imidacloprid 17.8% SL @ 0.5 ml/L or Thiamethoxam 25% WG @ 0.3 g/L during late evening to protect honeybees.",
      hi: "इमिडाक्लोप्रिड 17.8% एसएल 0.5 मिली/लीटर या थायमेथॉक्सम 25% डब्ल्यूजी 0.3 ग्राम/लीटर शाम के समय छिड़कें ताकि मधुमक्खियां सुरक्षित रहें।",
      ta: "இமிடாக்ளோபிரிட் 17.8% SL (0.5 மிலி/லிட்டர்) அல்லது தயோமெத்தாக்சம் 25% WG (0.3 கிராம்/லிட்டர்) தெளிக்கவும்.",
      fr: "Imidaclopride 17.8% SL à 0.5 ml/L ou Thiaméthoxame 25% WG à 0.3 g/L à appliquer au crépuscule pour préserver les pollinisateurs."
    },
    prevention: {
      en: "Intercrop with Yellow Mustard/Marigold. Install 20 yellow sticky traps per acre to intercept winged migrants.",
      hi: "खेत में प्रति एकड़ 20 पीले स्टिकी ट्रैप लगाएं। खेत के किनारे गेंदा या सरसों की सुरक्षा पट्टी लगाएं।",
      ta: "ஏக்கருக்கு 20 மஞ்சள் ஒட்டும் பொறிகளை அமைக்கவும். வரப்புகளில் சாமந்தி பயிரிடவும்.",
      fr: "Installation de pièges collants jaunes (20/ha). Bandes fleuries attractives pour syrphes et coccinelles."
    }
  },
  {
    id: "sample-cotton-curl",
    category: "leaf",
    crop: {
      en: "Bt Cotton (Gossypium hirsutum)",
      hi: "कपास (बीटी कॉटन)",
      ta: "பருத்தி (Bt பருத்தி)",
      fr: "Coton Bt (Gossypium hirsutum)"
    },
    diseaseName: {
      en: "Cotton Leaf Curl Virus (CLCuV)",
      hi: "कपास पत्ता मरोड़ वायरस (लीफ कर्ल)",
      ta: "பருத்தி இலை சுருள் வைரஸ் (CLCuV)",
      fr: "Virus de l'Enroulement des Feuilles du Coton"
    },
    pathogenType: {
      en: "Begomovirus (Whitefly-Transmitted)",
      hi: "सफेद मक्खी जनित विषाणु (वायरस)",
      ta: "வெள்ளை ஈ மூலம் பரவும் வைரஸ்",
      fr: "Begomovirus Transmis par Aleurode"
    },
    severity: "76% Critical Stage",
    severityLevel: "critical",
    confidence: "96.7%",
    image: "https://images.unsplash.com/photo-1594489428504-5c0c480a15fd?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Upward or downward leaf curling, thick swollen veins, cup-shaped leaf enations, severely stunted bolls.",
      hi: "पत्तियों का ऊपर या नीचे की ओर मुड़ना, नसों का मोटा और गहरा हरा होना, पौधे की बढ़वार रुकना व टिंडे न बनना।",
      ta: "இலைகள் மேல்நோக்கி அல்லது கீழ்நோக்கி சுருங்குதல், நரம்புகள் தடித்தல், காய்கள் சிறுத்து போதல்.",
      fr: "Enroulement foliaire marqué vers le haut ou le bas, épaississement des nervures, nanisme sévère des capsules."
    },
    organicTreatment: {
      en: "Install 25 Yellow Sticky Traps per acre to trap vector whiteflies. Spray 5% Neem Seed Kernel Extract (NSKE) every 5 days.",
      hi: "खेत में प्रति एकड़ 25 पीले चिपचिपे ट्रैप लगाएं। सफेद मक्खी को रोकने के लिए 5% नीम गिरी अर्क छिड़कें।",
      ta: "ஏக்கருக்கு 25 மஞ்சள் ஒட்டும் பொறிகளை வைக்கவும். 5% வேப்பங்கொட்டை சாறு தெளிக்கவும்.",
      fr: "Poser 25 pièges chromotropes jaunes par hectare pour piéger les aleurodes. Pulvériser extrait de margousier (NSKE) 5%."
    },
    chemicalTreatment: {
      en: "Diafenthiuron 50% WP @ 1.2 g/L or Afidopyropen 50 g/L DC @ 2 ml/L to immediately control vector whitefly populations.",
      hi: "सफेद मक्खी को तुरंत समाप्त करने के लिए डायाफेंथियूरॉन 50% डब्ल्यूपी 1.2 ग्राम/लीटर या अफिडोपायरोपेन 2 मिली/लीटर मिलाकर छिड़कें।",
      ta: "டயாஃபெந்தியூரான் 50% WP (1.2 கிராம்/லிட்டர்) தெளித்து வெள்ளை ஈக்களை உடனே கட்டுப்படுத்தவும்.",
      fr: "Diafenthiuron 50% WP à 1.2 g/L ou Afidopyropen 50 g/L DC à 2 ml/L pour éradiquer les aleurodes vectrices."
    },
    prevention: {
      en: "Eradicate alternate weed hosts (Kangi buti, Peeli buti) on field bunds. Plant resistant hybrid seeds.",
      hi: "खेत की मेड़ों से खरपतवार (कंघी बूटी, पीली बूटी) नष्ट करें ताकि सफेद मक्खी न पनप सके।",
      ta: "வரப்புகளில் உள்ள களைகளை அழிக்கவும். நோய் எதிர்ப்பு வீரிய விதைகளை பயன்படுத்தவும்.",
      fr: "Désherbage rigoureux des bordures de champs pour supprimer les adventices réservoirs du virus."
    }
  },
  {
    id: "sample-apple-scab",
    category: "fruit",
    crop: {
      en: "Apple (Malus domestica)",
      hi: "सेब (कश्मीरी व हिमाचली सेब)",
      ta: "ஆப்பிள் (காஷ்மீர் & இமாச்சல்)",
      fr: "Pommier (Malus domestica)"
    },
    diseaseName: {
      en: "Apple Scab (Venturia inaequalis)",
      hi: "सेब का स्कैब / पपड़ी रोग (वेंचुरिया इनइक्वलिस)",
      ta: "ஆப்பிள் சொறி நோய் (Apple Scab)",
      fr: "Tavelure du Pommier (Venturia inaequalis)"
    },
    pathogenType: {
      en: "Ascomycete Fungal Infection",
      hi: "कवक / फफूंद जनित छाल व फल रोग",
      ta: "பூஞ்சை நோய் தொற்று",
      fr: "Ascomycète Fongique Parasite"
    },
    severity: "42% Early Onset",
    severityLevel: "low",
    confidence: "98.9%",
    image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Olive-green to velvety dark brown lesions on young leaves, deformed cracked fruit skin reducing market value.",
      hi: "पत्तियों पर जैतूनी हरे से मखमली भूरे रंग के धब्बे; फलों पर खुरदुरी पपड़ी और दरारें जिससे फल का भाव गिर जाता है।",
      ta: "இலைகளில் கரும்பழுப்பு புள்ளிகள் மற்றும் பழத்தின் தோலில் விரிசல்கள் தோன்றி சந்தை மதிப்பை குறைக்கும்.",
      fr: "Taches vert olive puis brun velouté sur feuilles et fruits, crevasses et déformations dépréciant la récolte."
    },
    organicTreatment: {
      en: "Spray Liquid Sulfur 80% WDG @ 3 g/L or Bordeaux Mixture (1%) during silver-tip to petal-fall stages.",
      hi: "पंखुड़ी गिरने के समय घुलनशील सल्फर 80% डब्ल्यूडीजी 3 ग्राम/लीटर या 1% बोर्डो मिश्रण का छिड़काव करें।",
      ta: "திரவ கந்தகம் (Sulfur 80%) 3 கிராம்/லிட்டர் அல்லது 1% போர்டோ கலவை தெளிக்கவும்.",
      fr: "Soufre mouillable 80% WDG à 3 g/L ou Bouillie Bordelaise à 1% au stade débourrement."
    },
    chemicalTreatment: {
      en: "Difenoconazole 25% EC (Score) @ 0.5 ml/L or Captan 50% WP @ 2.5 g/L within 48 hours of rain wetting period.",
      hi: "डिफेनोकोनाज़ोल 25% ईसी (स्कोर) 0.5 मिली/लीटर या कैप्टन 50% डब्ल्यूपी 2.5 ग्राम/लीटर बारिश के 48 घंटे के भीतर छिड़कें।",
      ta: "டிஃபெனோகோனசோல் 25% EC (0.5 மிலி/லிட்டர்) அல்லது கேப்டன் 50% WP மழை பெய்த 48 மணி நேரத்திற்குள் தெளிக்கவும்.",
      fr: "Difénoconazole 25% EC à 0.5 ml/L ou Captane 50% WP à 2.5 g/L sous 48h après une pluie contaminatrice."
    },
    prevention: {
      en: "Collect and burn fallen autumn leaves or spray 5% Urea in late autumn to speed up leaf decomposition.",
      hi: "पतझड़ में गिरी पत्तियों को इकट्ठा करके नष्ट करें या 5% यूरिया का छिड़काव करें ताकि पत्तियां जल्दी गल जाएं।",
      ta: "இலையுதிர் காலத்தில் விழுந்த இலைகளை அப்புறப்படுத்தவும், யூரியா கரைசல் தெளிக்கவும்.",
      fr: "Broyage des feuilles mortes au sol et pulvérisation d'urée à 5% à l'automne pour accélérer la décomposition."
    }
  },
  {
    id: "sample-chilli-curl",
    category: "leaf",
    crop: {
      en: "Green Chilli (Capsicum annuum)",
      hi: "हरी मिर्च (तीखी मिर्च)",
      ta: "பச்சை மிளகாய்",
      fr: "Piment Vert (Capsicum annuum)"
    },
    diseaseName: {
      en: "Chilli Leaf Curl & Thrips Infestation",
      hi: "मिर्च मरोड़िया रोग व थ्रिप्स कीट प्रकोप",
      ta: "மிளகாய் இலை சுருட்டல் & த்ரிப்ஸ் பூச்சி",
      fr: "Enroulement Foliaire du Piment & Attaque de Thrips"
    },
    pathogenType: {
      en: "Thrips & Mite Vector Damage",
      hi: "थ्रिप्स व माइट कीट जनित प्रकोप",
      ta: "பூச்சி மற்றும் சிலந்தி தாக்குதல்",
      fr: "Dégâts Mixtes Thrips & Acariens Jaunes"
    },
    severity: "62% High Severity",
    severityLevel: "high",
    confidence: "97.8%",
    image: "https://images.unsplash.com/photo-1588252303782-cb80119abd6d?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Upward boat-shaped curling of leaves from thrips, bronzing under surface, stunted bush-like plant growth.",
      hi: "पत्तियां नाव के आकार में ऊपर की ओर मुड़ जाती हैं, पत्तियों के नीचे का भाग भूरा-तांबिया हो जाता है और फूल झड़ने लगते हैं।",
      ta: "இலைகள் படகு வடிவில் மேல்நோக்கி சுருங்குதல், பூக்கள் உதிர்தல் மற்றும் செடி வளர்ச்சி குறைதல்.",
      fr: "Feuilles crispées en nacelle vers le haut, face inférieure bronzée, chute des fleurs et nanisme."
    },
    organicTreatment: {
      en: "Spray Agniastra / Dashparni Ark @ 30 ml/L or Verticillium lecanii entomopathogenic fungi @ 5 g/L in evening.",
      hi: "दशपर्णी अर्क या ब्रह्मास्त्र 30 मिली/लीटर पानी में मिलाकर शाम के समय छिड़कें, या वर्टिसिलियम लेकानी 5 ग्राम/लीटर डालें।",
      ta: "அக்னி அஸ்திரம் அல்லது தசபர்ணி அர்க்கம் (30 மிலி/லிட்டர்) தெளிக்கவும்.",
      fr: "Purin d'ail et piment fermenté à 5% ou pulvérisation de Verticillium lecanii à 5 g/L le soir."
    },
    chemicalTreatment: {
      en: "Fipronil 5% SC @ 2 ml/L or Spinetoram 11.7% SC @ 1 ml/L. Add sticker-spreader for heavy monsoon foliage.",
      hi: "फिप्रोनिल 5% एससी 2 मिली/लीटर या स्पिनेटोरम 11.7% एससी 1 मिली/लीटर पानी में सिलिकॉन स्प्रेडर मिलाकर छिड़कें।",
      ta: "ஃபிப்ரோனில் 5% SC (2 மிலி/லிட்டர்) அல்லது ஸ்பினெட்டோரம் 11.7% SC (1 மிலி/லிட்டர்) தெளிக்கவும்.",
      fr: "Fipronil 5% SC à 2 ml/L ou Spinétorame 11.7% SC à 1 ml/L avec agent mouillant homologué."
    },
    prevention: {
      en: "Intercrop with 2 rows of Maize or Sorghum as a border barrier. Install blue sticky traps for thrips.",
      hi: "खेत के चारों ओर 2 कतार मक्का या ज्वार की सुरक्षा बाड़ लगाएं। थ्रिप्स के लिए नीले स्टिकी ट्रैप लगाएं।",
      ta: "வரப்பில் சோளம் அல்லது மக்காச்சோளத்தை பாதுகாப்பு பயிராக நடவும். நீல நிற ஒட்டும் பொறிகளை பயன்படுத்தவும்.",
      fr: "Semer des bordures de maïs ou sorgho comme barrière physique. Poser des pièges englués bleus."
    }
  },

  // ================= 2. SEED RECOGNITION & PURITY GRADING =================
  {
    id: "sample-seed-wheat",
    category: "seed",
    crop: {
      en: "Wheat Seeds (HD-2967 Variety)",
      hi: "प्रमाणित गेहूं बीज (एचडी-2967 किस्म)",
      ta: "சான்றளிக்கப்பட்ட கோதுமை விதைகள் (HD-2967)",
      fr: "Semences de Blé Certifiées (Variété HD-2967)"
    },
    diseaseName: {
      en: "Seed Variety: HD-2967 • Grade A+ Certified (99.2% Purity)",
      hi: "बीज किस्म पहचान: एचडी-2967 • ग्रेड A+ प्रमाणित (99.2% शुद्धता)",
      ta: "விதை ரகம்: HD-2967 • தரம் A+ சான்றளிக்கப்பட்டது (99.2% தூய்மை)",
      fr: "Identification Variétale: HD-2967 • Certifié Grade A+ (Pureté 99.2%)"
    },
    pathogenType: {
      en: "Seed Purity & Viability Inspection",
      hi: "बीज भौतिक शुद्धता व अंकुरण क्षमता जांच",
      ta: "விதை தூய்மை மற்றும் முளைப்பு திறன் ஆய்வு",
      fr: "Contrôle de Pureté Variétale & Vigueur Germinative"
    },
    severity: "Grade A+ (99.2% Purity / 92% Germination)",
    severityLevel: "low",
    confidence: "99.4%",
    image: "https://images.unsplash.com/photo-1574943320219-553eb213f72d?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Plump amber-colored kernels, uniform 1000-grain weight (42.5g), moisture 10.8%, zero noxious weed seed admixture detected.",
      hi: "चमकदार सुनहरे कठोर दाने, 1000 दानों का वजन 42.5 ग्राम, नमी 10.8%, खरपतवार बीजों की मिलावट शून्य पायी गयी।",
      ta: "பருப்பான தங்க நிற தானியங்கள், 1000 விதை எடை 42.5 கிராம், ஈரப்பதம் 10.8%, பிற களை விதைகள் இல்லை.",
      fr: "Grains ambrés charnus très réguliers, PMG 42.5g, humidité 10.8%, absence totale de graines d'adventices nuisibles."
    },
    organicTreatment: {
      en: "Pre-sowing biological priming: Treat 100 kg seed with Azotobacter chroococcum (500g) + PSB (500g) slurry with jaggery water.",
      hi: "जैविक बीजोपचार: 100 किग्रा बीज को एजोटोबैक्टर (500 ग्राम) + पीएसबी (500 ग्राम) व गुड़ के घोल से उपचारित करके छांव में सुखाएं।",
      ta: "விதை நேர்த்தி: 100 கிலோ விதைக்கு அசோஸ்பைரில்லம் மற்றும் பாஸ்போபாக்டீரியா கரைசல் கலந்து நிழலில் உலர்த்தவும்.",
      fr: "Inoculation biologique pré-semis avec Azotobacter et bactéries solubilisatrices de phosphate (PSB)."
    },
    chemicalTreatment: {
      en: "Chemical seed dressing: Carboxin 37.5% + Thiram 37.5% DS (Vitavax Power) @ 2.5 g/kg seed to prevent loose smut and root rot.",
      hi: "रासायनिक बीजोपचार: कार्बोक्सिन + थीरम (विटावैक्स पावर) 2.5 ग्राम प्रति किग्रा बीज की दर से बुवाई से पहले उपचारित करें।",
      ta: "கார்பாக்சின் + தீரம் (Vitavax Power) 2.5 கிராம்/கிலோ விதை என்ற விகிதத்தில் கலந்து விதை நேர்த்தி செய்யவும்.",
      fr: "Pelliculage fongicide homologué Carboxine 37.5% + Thirame 37.5% à 2.5 g/kg contre le charbon nu."
    },
    prevention: {
      en: "Sow at 100-110 kg/acre using seed-cum-fertilizer drill at 4-5 cm depth into moist seedbed during Nov 1-15 optimal window.",
      hi: "1-15 नवंबर के बीच 100-110 किग्रा/एकड़ की दर से सीड ड्रिल द्वारा 4-5 सेमी की गहराई पर पर्याप्त नमी में बोएं।",
      ta: "நவம்பர் 1-15 நாட்களுக்குள் ஏக்கருக்கு 100 கிலோ வீதம் விதை துளையிடும் கருவி கொண்டு 5 செமீ ஆழத்தில் விதைக்கவும்.",
      fr: "Semis au semoir en ligne à 4-5 cm de profondeur en terre ressuyée (dose 110 kg/ha)."
    }
  },
  {
    id: "sample-seed-rice",
    category: "seed",
    crop: {
      en: "Basmati Rice Seeds (Pusa-1121)",
      hi: "पूसा बासमती धान बीज (पीबी-1121)",
      ta: "பூசா பாசுமதி நெல் விதைகள் (Pusa-1121)",
      fr: "Semences de Riz Basmati (Pusa-1121)"
    },
    diseaseName: {
      en: "Seed Variety: Pusa-1121 Basmati • Extra Long Slender (98.8% Purity)",
      hi: "बीज किस्म: पूसा-1121 बासमती • एक्स्ट्रा लंबा दाना (98.8% शुद्धता)",
      ta: "விதை ரகம்: பூசா-1121 பாசுமதி • நீண்ட மெல்லிய தானியம் (98.8% தூய்மை)",
      fr: "Variété Pusa-1121 Basmati • Grain Extra Long Élancé (Pureté 98.8%)"
    },
    pathogenType: {
      en: "Varietal Genetics & Broken Grain Ratio Check",
      hi: "आनुवंशिक शुद्धता एवं टूटे दानों का परीक्षण",
      ta: "மரபணு தூய்மை மற்றும் உடைசல் பரிசோதனை",
      fr: "Contrôle Génétique Variétal & Taux de Brisures"
    },
    severity: "Grade A Certified (98.8% Purity / 1.1% Broken)",
    severityLevel: "low",
    confidence: "98.9%",
    image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Extra-long slender paddy grains (8.4 mm), 98.8% varietal purity, broken grains under 1.1%, natural 2-AP aroma marker intact.",
      hi: "8.4 मिमी लंबा पतला दाना, 98.8% प्रजातीय शुद्धता, टूटा दाना 1.1% से कम, बासमती की प्राकृतिक खुशबू संरक्षित।",
      ta: "8.4 மிமீ நீளமுள்ள தானியங்கள், 98.8% ரக தூய்மை, 1.1% க்கும் குறைவான உடைசல், நறுமண குணம் பாதுகாக்கப்பட்டது.",
      fr: "Grains paddy effilés 8.4 mm, pureté variétale 98.8%, brisures inférieures à 1.1%, arôme naturel préservé."
    },
    organicTreatment: {
      en: "Saltwater floatation test (10% brine to float empty chaff), followed by overnight soaking in Trichoderma harzianum @ 10g/L.",
      hi: "10% नमक के पानी में डालकर हल्के थोथे बीज अलग करें, फिर ट्राइकोडर्मा 10 ग्राम/लीटर में रात भर भिगोएं।",
      ta: "உப்பு நீரில் இட்டு பதர் விதைகளை நீக்கவும், பின்னர் டிரைக்கோடெர்மா கரைசலில் ஊறவைத்து விதைக்கவும்.",
      fr: "Tri densimétrique en bain d'eau salée à 10% puis trempage au Trichoderma harzianum à 10g/L."
    },
    chemicalTreatment: {
      en: "Soak in Carbendazim 50% WP (1g/L) + Streptocycline (0.1g/L) for 24 hours to prevent bakanae/foot-rot disease.",
      hi: "कार्बेन्डाजिम 50% डब्ल्यूपी 1 ग्राम/लीटर + स्ट्रेप्टोसाइक्लिन 1 ग्राम/10 लीटर पानी में 24 घंटे भिगोकर सुखाएं (बकाने रोग बचाव)।",
      ta: "கார்பென்டாசிம் (1 கிராம்/லிட்டர்) மற்றும் ஸ்ட்ரெப்டோசைக்ளின் கரைசலில் 24 மணி நேரம் ஊற வைக்கவும்.",
      fr: "Trempage 24h dans solution Carbendazime (1g/L) + Streptocycline (0.1g/L) contre le bakanae."
    },
    prevention: {
      en: "Nursery sowing between May 25 - June 10. Transplant 21-25 day seedlings at 20x15 cm spacing with 2 seedlings/hill.",
      hi: "25 मई से 10 जून के बीच नर्सरी डालें। 21-25 दिन की पौध को 20x15 सेमी दूरी पर 2 पौधे प्रति थान रोपें।",
      ta: "மே 25 - ஜூன் 10 வரை நாற்றங்கால் அமைக்கவும். 21-25 நாள் நாற்றுகளை நடவு செய்யவும்.",
      fr: "Semis en pépinière fin mai. Repiquage de plants de 21-25 jours à écartement 20x15 cm."
    }
  },
  {
    id: "sample-seed-maize",
    category: "seed",
    crop: {
      en: "Hybrid Maize Seeds (Pioneer Double Cob)",
      hi: "हाइब्रिड संकर मक्का बीज (डबल भुट्टा)",
      ta: "வீரிய மக்காச்சோள விதைகள் (Double Cob)",
      fr: "Semences de Maïs Hybride (Double Épi)"
    },
    diseaseName: {
      en: "Hybrid Seed: Yellow Flint Vigor • Grade A+ (99.4% Purity)",
      hi: "संकर बीज पहचान: पीला फ्लिंट संकर • ग्रेड A+ (99.4% शुद्धता)",
      ta: "வீரிய விதை: மஞ்சள் ஃப்ளிண்ட் ரகம் • தரம் A+ (99.4% தூய்மை)",
      fr: "Hybride Maïs: Grain Corné Jaune • Grade A+ (Pureté 99.4%)"
    },
    pathogenType: {
      en: "Seed Vigor & Protective Coating Inspection",
      hi: "बीज ओज एवं रासायनिक सुरक्षा कोटिंग जांच",
      ta: "விதை வீரியம் & பாதுகாப்பு பூச்சு ஆய்வு",
      fr: "Vigueur Germinative & Contrôle de l'Enrobage Phytosanitaire"
    },
    severity: "Grade A+ (99.4% Purity / 95% Germination)",
    severityLevel: "low",
    confidence: "99.1%",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Uniform bright orange-yellow flint kernels, factory precision pink fungicide polymer coating, zero weevil bore holes.",
      hi: "एकसमान चमकदार नारंगी-पीले दाने, फैक्ट्री द्वारा गुलाबी कवकनाशी पॉलीमर लेप, घुन व छेद से 100% मुक्त।",
      ta: "பளபளப்பான மஞ்சள்-ஆரஞ்சு நிற தானியங்கள், இளஞ்சிவப்பு பூஞ்சாண பூச்சு, வண்டு துளைகள் இல்லை.",
      fr: "Grains cornés jaune-orangé réguliers, pelliculage rose polymère protecteur d'origine industrielle intact."
    },
    organicTreatment: {
      en: "Coating with Beejamrit (fermented cow dung, urine, lime & soil) or biological mycorrhizal consortium (VAM @ 10g/kg).",
      hi: "बीजामृत (गोबर, गोमूत्र, चूना व खेत की मिट्टी का घोल) अथवा माइकोराइजा (VAM 10 ग्राम/किग्रा) से लेप करें।",
      ta: "பீஜாமிர்தம் அல்லது மைக்கோரைசா (10 கிராம்/கிலோ) பூசி நிழலில் உலர்த்தி விதைக்கவும்.",
      fr: "Inoculation mycorhizienne (champignons VAM à 10g/kg) pour stimuler l'enracinement précoce."
    },
    chemicalTreatment: {
      en: "Factory pre-treated with Thiamethoxam 30% FS (shoot fly protection) + Fludioxonil + Metalaxyl-M (damping off shield).",
      hi: "फैक्ट्री द्वारा थायमेथॉक्सम 30% एफएस (तना मक्खी सुरक्षा) एवं मैटालेक्सिल कवकनाशी से पहले से उपचारित।",
      ta: "தயாமெத்தாக்சம் 30% FS மற்றும் மெட்டலாக்சில் மருந்து பூசப்பட்டு முன்கூட்டியே பாதுகாக்கப்பட்டது.",
      fr: "Semence certifiée pré-traitée en usine au Thiaméthoxame 30% FS (anti-mouche) + Métalaxyl-M."
    },
    prevention: {
      en: "Maintain plant population of 26,000-28,000 plants/acre (60 cm row-to-row x 20 cm plant-to-plant) at 3-4 cm depth.",
      hi: "पंक्ति से पंक्ति 60 सेमी और पौधे से पौधे 20 सेमी की दूरी पर 3-4 सेमी गहराई में बोएं (प्रति एकड़ 26,000 पौधे)।",
      ta: "வரிசைக்கு வரிசை 60 செமீ, செடிக்கு செடி 20 செமீ இடைவெளியில் 4 செமீ ஆழத்தில் விதைக்கவும்.",
      fr: "Semis monograine de précision à 60 cm d'inter-rang et 20 cm sur le rang (densité 75 000 grains/ha)."
    }
  },
  {
    id: "sample-seed-soybean",
    category: "seed",
    crop: {
      en: "Soybean Seeds (JS-335 Variety)",
      hi: "प्रमाणित सोयाबीन बीज (जेएस-335 किस्म)",
      ta: "சான்றளிக்கப்பட்ட சோயாபீன் விதைகள் (JS-335)",
      fr: "Semences de Soja Certifiées (Variété JS-335)"
    },
    diseaseName: {
      en: "Seed Variety: JS-335 Certified • High Oil & Protein (98.6% Purity)",
      hi: "बीज किस्म: जेएस-335 प्रमाणित • उच्च तेल व प्रोटीन (98.6% शुद्धता)",
      ta: "விதை ரகம்: JS-335 • அதிக எண்ணெய் & புரதம் (98.6% தூய்மை)",
      fr: "Variété JS-335 Certifiée • Haute Teneur en Huile & Protéines (98.6%)"
    },
    pathogenType: {
      en: "Mechanical Damage Index & Germination Check",
      hi: "यांत्रिक क्षति सूचकांक व अंकुरण दर परीक्षण",
      ta: "விதை சேத குறியீடு மற்றும் முளைப்பு ஆய்வு",
      fr: "Indice d'Endommagement Mécanique & Taux de Germination"
    },
    severity: "Grade A+ (98.6% Purity / 88% Germination)",
    severityLevel: "low",
    confidence: "98.7%",
    image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?auto=format&fit=crop&w=700&q=80",
    symptoms: {
      en: "Spherical yellow seeds with brown hilum, zero mechanical coat cracks, moisture 9.4%, germination test exceeds 88%.",
      hi: "गोल पीले दाने, भूरी आंख (हिलम), छिलके पर यांत्रिक दरार शून्य, नमी 9.4%, अंकुरण परीक्षण 88% से अधिक।",
      ta: "பழுப்பு நிற கண்ணுடன் கூடிய உருண்டையான மஞ்சள் விதைகள், உடைந்த விதைகள் இல்லை, முளைப்பு திறன் 88% அதிகம்.",
      fr: "Grains sphériques jaunes à hile brun, tégument intact sans micro-fissures, humidité 9.4%."
    },
    organicTreatment: {
      en: "Bio-inoculation: Inoculate 30 kg seed with Bradyrhizobium japonicum (500g) + PSB (500g) culture 1 hour before sowing in shade.",
      hi: "राइजोबियम कल्चर (500 ग्राम) + पीएसबी (500 ग्राम) से प्रति 30 किग्रा बीज को बुवाई से 1 घंटा पहले छांव में उपचारित करें।",
      ta: "பிராடிரைசோபியம் ஜபோனிகம் பாக்டீரியா மற்றும் பாஸ்போபாக்டீரியா கொண்டு விதை நேர்த்தி செய்யவும்.",
      fr: "Inoculation à l'ombre 1h avant semis avec la souche Bradyrhizobium japonicum (500g/30kg de graines)."
    },
    chemicalTreatment: {
      en: "Chemical seed treatment: Carboxin + Thiram (2g/kg) or Trichoderma viride (10g/kg) to prevent collar rot and rhizoctonia.",
      hi: "कार्बोक्सिन + थीरम 2 ग्राम प्रति किग्रा अथवा ट्राइकोडर्मा विरिडी 10 ग्राम प्रति किग्रा से बीज उपचार करें।",
      ta: "கார்பாக்சின் + தீரம் (2 கிராம்/கிலோ) அல்லது டிரைக்கோடெர்மா விரிடி (10 கிராம்/கிலோ) கலந்து விதைக்கவும்.",
      fr: "Traitement des semences à la Carboxine + Thirame à 2g/kg contre les fontes de semis et rhizoctone."
    },
    prevention: {
      en: "Sow at 30-35 kg/acre on broad bed furrow (BBF) or ridges at 45x5 cm spacing when monsoon delivers 75-100 mm rain.",
      hi: "मानसून की 75-100 मिमी बारिश के बाद 30-35 किग्रा/एकड़ की दर से 45x5 सेमी पर उथली क्यारियों (BBF) में बोएं।",
      ta: "பருவமழை பெய்தவுடன் ஏக்கருக்கு 30-35 கிலோ வீதம் 45x5 செமீ இடைவெளியில் மேட்டுப்பாத்தி முறையில் விதைக்கவும்.",
      fr: "Semis à 30-35 kg/ha sur billons ou planches surélevées (BBF) à écartement 45x5 cm dès 75 mm de pluie."
    }
  }
];

const scannerTranslations = {
  en: {
    badge: "Gemini Vision Multi-Object & Pathology AI",
    title: "AI Camera Scanner & Crop Doctor (Leaves, Seeds & Diseases)",
    subtitleEasy: "Snap a photo of any leaf, stem, fruit, or seed, or click any sample below. Our AI doctor immediately identifies seed varieties, checks purity, detects plant diseases, and provides safe cures!",
    subtitleDetailed: "Real-time dual-modality computer vision engine performing foliar pathogen classification, lesion severity indexing, and seed varietal purity / germination grading across agricultural crops.",
    cameraTab: "Live Camera Viewfinder",
    uploadTab: "Upload Crop Photo",
    sampleTab: "Quick Test Samples (Instant)",
    allFilter: "All Samples (12)",
    leafFilter: "🍃 Leaves & Diseases",
    seedFilter: "🌾 Seeds & Purity Grade",
    fruitFilter: "🍎 Fruits & Stems",
    startCam: "Start Live Camera",
    snapPhoto: "Snap Photo & Analyze",
    stopCam: "Stop Camera",
    switchCam: "Flip Camera",
    dropzoneTitle: "Snap a Photo or Drag & Drop Crop Image",
    dropzoneSub: "Supports JPG, PNG, WEBP (Leaves, Seeds, Stems, Fruit, Roots)",
    browseFiles: "Browse Crop Images",
    orUseSample: "Instant Multi-Object Diagnostic Samples:",
    diagnosingTitle: "CropCare Gemini AI Analyzing Agricultural Specimen...",
    diagnosingSub: "Extracting morphology, chlorosis patterns, seed hilum, and pathological signatures...",
    diagnosticResults: "CropCare Verified Diagnostic Report",
    detectedDisease: "Diagnosis / Varietal Identification",
    pathogenLabel: "Classification / Inspection Mode",
    severityLabel: "Severity / Purity Index",
    confidenceLabel: "Vision AI Confidence",
    symptomsTitle: "Visual Symptoms & Quality Metrics",
    organicTitle: "Organic Solution & Bio-Remedy",
    chemicalTitle: "Recommended Commercial Prescription",
    preventionTitle: "Agronomic Prevention & Cultural Practices",
    orderBioKitBtn: "🛒 Order Prescribed Treatment Kit",
    askAiMoreBtn: "💬 Ask Gemini AI Doctor More Questions",
    downloadReportBtn: "📥 Download Printable Prescription PDF",
    scanAnotherBtn: "📸 Scan Another Specimen / Reset",
    liveCameraActive: "Live Camera Connected. Position specimen inside the green target reticle.",
    cameraError: "Camera access not available or blocked. Please upload a photo or use instant samples below.",
    seedBadgeText: "Verified Seed Purity Analysis",
    leafBadgeText: "Leaf Pathology Diagnostic"
  },
  hi: {
    badge: "जेमिनी विज़न मल्टी-ऑब्जेक्ट व फसल पैथोलॉजी AI",
    title: "एआई कैमरा स्कैनर एवं क्रॉप डॉक्टर (पत्ती, बीज व रोग पहचान)",
    subtitleEasy: "किसी भी पत्ती, तने, फल या बीज की फोटो लें या नीचे दिए गए सैंपल पर क्लिक करें। हमारा एआई डॉक्टर तुरंत बीज की किस्म पहचानता है, शुद्धता जांचता है, और बीमारी का सटीक इलाज बताता है!",
    subtitleDetailed: "रीयल-टाइम कंप्यूटर विज़न इंजन जो पत्तियों के रोगों का वर्गीकरण, घाव घनत्व विश्लेषण, और बीज किस्म शुद्धता व अंकुरण ग्रेडिंग का सटीक विश्लेषण करता है।",
    cameraTab: "लाइव कैमरा स्कैनर",
    uploadTab: "फोटो अपलोड करें",
    sampleTab: "त्वरित परीक्षण सैंपल (1-क्लिक)",
    allFilter: "सभी सैंपल (12)",
    leafFilter: "🍃 पत्ती व फसल रोग",
    seedFilter: "🌾 बीज पहचान व शुद्धता",
    fruitFilter: "🍎 फल व तना रोग",
    startCam: "कैमरा चालू करें",
    snapPhoto: "फोटो लें और जांचें",
    stopCam: "कैमरा बंद करें",
    switchCam: "कैमरा बदलें",
    dropzoneTitle: "फसल, पत्ती या बीज की फोटो यहां खींचें या डालें",
    dropzoneSub: "JPG, PNG, WEBP समर्थित (पत्ती, बीज, फल, तना व जड़)",
    browseFiles: "फ़ोटो फ़ाइल चुनें",
    orUseSample: "त्वरित बहु-ऑब्जेक्ट निदान सैंपल:",
    diagnosingTitle: "क्रॉपकेयर जेमिनी AI कृषि नमूने का विश्लेषण कर रहा है...",
    diagnosingSub: "पत्तियों के धब्बे, फफूंद के बीजाणु, बीज की किस्म व शुद्धता की जांच जारी है...",
    diagnosticResults: "क्रॉपकेयर प्रमाणित निदान एवं उपचार पर्ची",
    detectedDisease: "रोग पहचान / बीज किस्म प्रमाणीकरण",
    pathogenLabel: "निरीक्षण श्रेणी / रोगज़नक़ प्रकार",
    severityLabel: "तीव्रता स्तर / शुद्धता सूचकांक",
    confidenceLabel: "एआई विज़न सटीकता",
    symptomsTitle: "खेत में दिखने वाले लक्षण व गुणवत्ता मानक",
    organicTitle: "जैविक व घरेलू उपचार",
    chemicalTitle: "प्रमाणित रासायनिक दवा व मात्रा",
    preventionTitle: "फसल बचाव के जरूरी उपाय",
    orderBioKitBtn: "🛒 अनुशंसित बायो-किट सीधे मंगाएं",
    askAiMoreBtn: "💬 जेमिनी AI डॉक्टर से और सवाल पूछें",
    downloadReportBtn: "📥 उपचार पर्ची (PDF) डाउनलोड करें",
    scanAnotherBtn: "📸 दूसरा नमूना स्कैन करें",
    liveCameraActive: "कैमरा सक्रिय है। पौधे या बीज को हरे चौकोर फ्रेम के बीच में रखें।",
    cameraError: "कैमरा उपलब्ध नहीं है। कृपया फ़ोटो अपलोड करें या नीचे दिए गए सैंपल इस्तेमाल करें।",
    seedBadgeText: "प्रमाणित बीज शुद्धता विश्लेषण",
    leafBadgeText: "पत्ती रोग निदान"
  },
  ta: {
    badge: "ஜெமினி விஷன் பயிர் நோய் & விதை AI",
    title: "AI கேமரா ஸ்கேனர் & பயிர் மருத்துவர் (இலை, விதை & நோய்கள்)",
    subtitleEasy: "பாதிக்கப்பட்ட இலை, தண்டு, காய் அல்லது விதையின் புகைப்படத்தை எடுக்கவும். எங்கள் AI மருத்துவர் உடனடியாக விதை ரகத்தை அடையாளம் கண்டு, தூய்மையை சோதித்து, நோய்களுக்கான சரியான மருந்தை பரிந்துரைக்கும்!",
    subtitleDetailed: "மல்டி-ஆப்ஜெக்ட் கணினி பார்வை இயந்திரம். இலை நோயியல், பூஞ்சை தொற்றுகள் மற்றும் விதை தூய்மை / முளைப்புத்திறன் தரநிலைகளை துல்லியமாக கண்டறியும்.",
    cameraTab: "நேரடி கேமரா ஸ்கேனர்",
    uploadTab: "படம் பதிவேற்றுக",
    sampleTab: "மாதிரி சோதனைகள்",
    allFilter: "அனைத்தும் (12)",
    leafFilter: "🍃 இலை நோய்கள்",
    seedFilter: "🌾 விதை ரகம் & தூய்மை",
    fruitFilter: "🍎 பழம் & தண்டுகள்",
    startCam: "கேமராவை திறக்க",
    snapPhoto: "புகைப்படம் எடுத்து சோதிக்க",
    stopCam: "கேமராவை நிறுத்த",
    switchCam: "கேமராவை மாற்ற",
    dropzoneTitle: "பயிர் அல்லது விதையின் புகைப்படத்தை இங்கே இழுத்து விடவும்",
    dropzoneSub: "JPG, PNG, WEBP கோப்புகள் (இலைகள், விதைகள், பழங்கள், தண்டுகள்)",
    browseFiles: "படத்தை தேர்வு செய்ய",
    orUseSample: "உடனடி மாதிரி சோதனைகள்:",
    diagnosingTitle: "க்ராப்கேர் AI பயிர் மாதிரியை பரிசோதிக்கிறது...",
    diagnosingSub: "இலை நரம்புகள், மஞ்சள் புள்ளிகள் மற்றும் விதை தூய்மையை ஸ்கேன் செய்கிறது...",
    diagnosticResults: "பயிர் நோய் அறிக்கை & மருந்து பரிந்துரை",
    detectedDisease: "கண்டறியப்பட்ட நோய் / விதை ரகம்",
    pathogenLabel: "தொற்று வகை / ஆய்வு முறை",
    severityLabel: "தாக்குதலின் தீவிரம் / தூய்மை விகிதம்",
    confidenceLabel: "AI துல்லியம்",
    symptomsTitle: "பயிரில் காணப்படும் அறிகுறிகள் & தர அளவீடுகள்",
    organicTitle: "இயற்கை மற்றும் மூலிகை தீர்வுகள்",
    chemicalTitle: "பரிந்துரைக்கப்பட்ட விவசாய மருந்துகள்",
    preventionTitle: "வருமுன் காக்கும் மேலாண்மை வழிகள்",
    orderBioKitBtn: "🛒 பரிந்துரைக்கப்பட்ட மருந்தை ஆர்டர் செய்ய",
    askAiMoreBtn: "💬 AI மருத்துவரிடம் கூடுதல் கேள்விகள் கேட்க",
    downloadReportBtn: "📥 மருத்துவ அறிக்கையை பதிவிறக்க",
    scanAnotherBtn: "📸 மற்றொரு இலையை சோதிக்க",
    liveCameraActive: "கேமரா இணைக்கப்பட்டுள்ளது. இலையை பச்சை கட்டத்திற்குள் வைக்கவும்.",
    cameraError: "கேமரா இயங்கவில்லை. படத்தை பதிவேற்றவும் அல்லது மாதிரிகளை பயன்படுத்தவும்.",
    seedBadgeText: "சான்றளிக்கப்பட்ட விதை ஆய்வு",
    leafBadgeText: "இலை நோய் பகுப்பாய்வு"
  },
  fr: {
    badge: "Intelligence Vision Multi-Objets & Pathologie Gemini",
    title: "Scanner Caméra IA & Docteur des Plantes (Feuilles, Semences & Maladies)",
    subtitleEasy: "Prenez en photo une feuille, tige, fruit ou semence, ou choisissez un échantillon. Notre docteur IA identifie les variétés de semences, vérifie la pureté, détecte les maladies et prescrit les traitements adaptés !",
    subtitleDetailed: "Moteur de vision par ordinateur double-modalité réalisant la classification des agents pathogènes foliaires, l'indice de sévérité des lésions et le calibrage de pureté germinative des semences.",
    cameraTab: "Viseur Caméra en Direct",
    uploadTab: "Téléverser une Photo",
    sampleTab: "Échantillons Tests Rapides",
    allFilter: "Tous les Échantillons (12)",
    leafFilter: "🍃 Maladies Foliaires",
    seedFilter: "🌾 Variétés & Pureté Semences",
    fruitFilter: "🍎 Fruits & Tiges",
    startCam: "Activer la Caméra",
    snapPhoto: "Capturer & Analyser",
    stopCam: "Arrêter Caméra",
    switchCam: "Changer Caméra",
    dropzoneTitle: "Capturez ou glissez-déposez la photo de votre culture",
    dropzoneSub: "Formats acceptés: JPG, PNG, WEBP (Feuilles, Semences, Tiges, Fruits)",
    browseFiles: "Parcourir les Fichiers",
    orUseSample: "Échantillons Diagnostiques Multi-Objets :",
    diagnosingTitle: "Analyse Agronomique Gemini IA en Cours...",
    diagnosingSub: "Extraction des nervures, nécroses foliaires, hile de semence et pureté...",
    diagnosticResults: "Ordonnance & Diagnostic Certifié CropCare",
    detectedDisease: "Diagnostic Pathologique / Variété Identifiée",
    pathogenLabel: "Classe Étiologique / Mode d'Inspection",
    severityLabel: "Indice de Sévérité / Pureté",
    confidenceLabel: "Indice de Confiance IA",
    symptomsTitle: "Symptômes Cliniques & Métriques de Qualité",
    organicTitle: "Solutions Biologiques & Remèdes Naturels",
    chemicalTitle: "Prescription Commerciale Homologuée",
    preventionTitle: "Bonnes Pratiques Agronomiques Préventives",
    orderBioKitBtn: "🛒 Commander le Kit Phytosanitaire Préconisé",
    askAiMoreBtn: "💬 Poser d'Autres Questions à l'IA",
    downloadReportBtn: "📥 Télécharger l'Ordonnance Numérique (PDF)",
    scanAnotherBtn: "📸 Scanner un Autre Échantillon",
    liveCameraActive: "Caméra connectée. Cadrez le spécimen au centre du réticule vert.",
    cameraError: "Caméra indisponible. Veuillez importer une photo ou tester nos échantillons.",
    seedBadgeText: "Contrôle de Pureté des Semences",
    leafBadgeText: "Diagnostic Pathologique Végétal"
  }
};

export function renderLeafScannerSection(currentLang = 'en', understandingMode = 'easy', activeSampleId = 'sample-wheat-rust', isAnalyzing = false, capturedImage = null, activeFilter = 'all') {
  const t = scannerTranslations[currentLang] || scannerTranslations.en;
  const activeDisease = cropDiseasesDatabase.find(d => d.id === activeSampleId) || cropDiseasesDatabase[0];
  const displayImage = capturedImage || activeDisease.image;
  const isSeed = activeDisease.category === 'seed';

  const filteredSamples = activeFilter === 'all' 
    ? cropDiseasesDatabase 
    : cropDiseasesDatabase.filter(d => d.category === activeFilter);

  return `
    <section class="leaf-scanner-section p-6 md:p-10" id="leafScannerSection" style="background: var(--bg-page); min-height: 80vh;">
      <div class="container" style="max-width: 1280px; margin: 0 auto;">
        
        <!-- Header Section -->
        <div style="text-align: center; max-width: 860px; margin: 0 auto 36px;">
          <span class="badge-pill" style="margin-bottom: 12px; background: rgba(34, 197, 94, 0.12); border-color: rgba(34, 197, 94, 0.3); color: var(--primary-700);">
            <i data-lucide="camera" class="icon-xs" style="color: var(--primary-600);"></i>
            <span>${t.badge}</span>
          </span>
          <h2 class="tracking-tight font-extrabold" style="font-size: clamp(1.8rem, 3.2vw, 2.6rem); color: var(--slate-900); margin-bottom: 12px; line-height: 1.2;">
            ${t.title}
          </h2>
          <p style="font-size: 1.05rem; color: var(--slate-600); line-height: 1.6;">
            ${understandingMode === 'easy' ? t.subtitleEasy : t.subtitleDetailed}
          </p>
        </div>

        <!-- Main Interactive Scanner Grid -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 32px; align-items: start;">
          
          <!-- Left Column: Camera Viewfinder & Upload Dropzone -->
          <div class="scanner-input-card" style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-xl); padding: 24px; box-shadow: var(--shadow-lg);">
            
            <!-- Viewfinder Mode Tabs -->
            <div style="display: flex; gap: 8px; margin-bottom: 20px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 14px;">
              <button type="button" class="btn btn-sm btn-primary" id="scannerCameraTabBtn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <i data-lucide="video" class="icon-xs"></i>
                <span>${t.cameraTab}</span>
              </button>
              <button type="button" class="btn btn-sm btn-secondary" id="scannerUploadTabBtn" style="flex: 1; display: flex; align-items: center; justify-content: center; gap: 6px;">
                <i data-lucide="upload-cloud" class="icon-xs"></i>
                <span>${t.uploadTab}</span>
              </button>
            </div>

            <!-- Viewport Screen Container -->
            <div 
              id="scannerViewportBox" 
              style="
                position: relative; 
                width: 100%; 
                height: 330px; 
                background: #0F172A; 
                border-radius: var(--radius-lg); 
                overflow: hidden; 
                display: flex; 
                align-items: center; 
                justify-content: center;
                border: 2px dashed rgba(74, 222, 128, 0.4);
                box-shadow: inset 0 0 30px rgba(0,0,0,0.6);
              "
            >
              <!-- Live Video Stream Element -->
              <video 
                id="cameraVideoStream" 
                autoplay 
                playsinline 
                muted 
                style="width: 100%; height: 100%; object-fit: cover; display: none;"
              ></video>

              <!-- Hidden Canvas for frame snapshot -->
              <canvas id="cameraSnapCanvas" style="display: none;"></canvas>

              <!-- Image Preview (When captured or sample chosen) -->
              <img 
                id="scannerPreviewImg" 
                src="${displayImage}" 
                alt="Crop Scanner Specimen" 
                style="width: 100%; height: 100%; object-fit: cover; display: block;" 
              />

              <!-- Overlay Scanner Reticle / Target Frame -->
              <div 
                id="scannerReticle" 
                style="
                  position: absolute; 
                  inset: 24px; 
                  border: 2px solid rgba(74, 222, 128, 0.75); 
                  border-radius: var(--radius-md); 
                  pointer-events: none;
                  box-shadow: 0 0 20px rgba(74, 222, 128, 0.25);
                "
              >
                <!-- Reticle Corner Accents -->
                <div style="position: absolute; top: -2px; left: -2px; width: 18px; height: 18px; border-top: 4px solid #4ADE80; border-left: 4px solid #4ADE80;"></div>
                <div style="position: absolute; top: -2px; right: -2px; width: 18px; height: 18px; border-top: 4px solid #4ADE80; border-right: 4px solid #4ADE80;"></div>
                <div style="position: absolute; bottom: -2px; left: -2px; width: 18px; height: 18px; border-bottom: 4px solid #4ADE80; border-left: 4px solid #4ADE80;"></div>
                <div style="position: absolute; bottom: -2px; right: -2px; width: 18px; height: 18px; border-bottom: 4px solid #4ADE80; border-right: 4px solid #4ADE80;"></div>
              </div>

              <!-- Animated Laser Line when Analyzing -->
              <div 
                id="scannerLaserLine" 
                class="scan-laser-bar" 
                style="
                  position: absolute; 
                  top: 0; 
                  left: 0; 
                  right: 0; 
                  height: 3px; 
                  background: linear-gradient(90deg, transparent, #4ADE80, #22C55E, transparent); 
                  box-shadow: 0 0 16px #4ADE80, 0 0 28px #22C55E;
                  display: ${isAnalyzing ? 'block' : 'none'};
                "
              ></div>

              <!-- Viewport Live Status Pill -->
              <div 
                id="scannerStatusBadge"
                style="
                  position: absolute; 
                  bottom: 12px; 
                  left: 12px; 
                  right: 12px; 
                  background: rgba(15, 23, 42, 0.88); 
                  backdrop-filter: blur(8px); 
                  padding: 8px 14px; 
                  border-radius: var(--radius-full); 
                  font-size: 0.78rem; 
                  color: #E2E8F0; 
                  display: flex; 
                  align-items: center; 
                  justify-content: space-between;
                  border: 1px solid rgba(255, 255, 255, 0.15);
                "
              >
                <div style="display: flex; align-items: center; gap: 6px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                  <span style="width: 8px; height: 8px; border-radius: 50%; background: #4ADE80; box-shadow: 0 0 8px #4ADE80; flex-shrink: 0;"></span>
                  <span id="scannerStatusText" style="overflow: hidden; text-overflow: ellipsis;">${activeDisease.crop[currentLang] || activeDisease.crop.en}</span>
                </div>
                <span style="font-weight: 700; color: #4ADE80; flex-shrink: 0;" id="scannerConfidenceText">${activeDisease.confidence} Match</span>
              </div>
            </div>

            <!-- Viewfinder Interactive Action Buttons -->
            <div style="margin-top: 16px; display: flex; gap: 10px; flex-wrap: wrap;">
              <button 
                type="button" 
                id="startCameraBtn" 
                class="btn btn-primary hover-scale" 
                style="flex: 1; padding: 12px; font-weight: 800; display: flex; align-items: center; justify-content: center; gap: 8px;"
              >
                <i data-lucide="camera" class="icon-sm"></i>
                <span id="startCameraBtnLabel">${t.startCam}</span>
              </button>

              <button 
                type="button" 
                id="snapPhotoBtn" 
                class="btn hover-scale" 
                style="display: none; padding: 12px 18px; background: #22C55E; color: #0F172A; font-weight: 800; border-radius: var(--radius-md); align-items: center; gap: 6px;"
              >
                <i data-lucide="aperture" class="icon-sm"></i>
                <span>${t.snapPhoto}</span>
              </button>

              <label 
                for="leafFileInput" 
                class="btn btn-secondary hover-scale" 
                style="padding: 12px 16px; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; cursor: pointer; margin: 0;"
                title="${t.browseFiles}"
              >
                <i data-lucide="image" class="icon-sm"></i>
                <span>${t.browseFiles}</span>
              </label>
              <input type="file" id="leafFileInput" accept="image/*" style="display: none;" />
            </div>

            <!-- Preloaded Quick-Test Multi-Object Samples Gallery -->
            <div style="margin-top: 24px; padding-top: 18px; border-top: 1px solid var(--border-subtle);">
              
              <!-- Filter Pills for Samples -->
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
                <span style="font-size: 0.8rem; font-weight: 800; color: var(--slate-700); text-transform: uppercase; letter-spacing: 0.04em;">
                  ${t.orUseSample}
                </span>
                
                <div style="display: flex; gap: 4px; flex-wrap: wrap;" id="scannerCategoryFilters">
                  <button type="button" class="btn btn-xs ${activeFilter === 'all' ? 'btn-primary' : 'btn-secondary'} scanner-filter-btn" data-filter="all">
                    ${t.allFilter}
                  </button>
                  <button type="button" class="btn btn-xs ${activeFilter === 'leaf' ? 'btn-primary' : 'btn-secondary'} scanner-filter-btn" data-filter="leaf">
                    ${t.leafFilter}
                  </button>
                  <button type="button" class="btn btn-xs ${activeFilter === 'seed' ? 'btn-primary' : 'btn-secondary'} scanner-filter-btn" data-filter="seed">
                    ${t.seedFilter}
                  </button>
                  <button type="button" class="btn btn-xs ${activeFilter === 'fruit' ? 'btn-primary' : 'btn-secondary'} scanner-filter-btn" data-filter="fruit">
                    ${t.fruitFilter}
                  </button>
                </div>
              </div>

              <!-- Samples Grid -->
              <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 8px; max-height: 280px; overflow-y: auto; padding-right: 4px;">
                ${filteredSamples.map(d => {
                  const isSel = d.id === activeSampleId;
                  const isSeedSample = d.category === 'seed';
                  return `
                    <button 
                      type="button" 
                      class="sample-disease-btn hover-scale ${isSel ? 'active' : ''}" 
                      data-sample-id="${d.id}"
                      style="
                        padding: 8px 10px; 
                        border-radius: var(--radius-md); 
                        border: 1.5px solid ${isSel ? 'var(--primary-600)' : 'var(--border-light)'}; 
                        background: ${isSel ? 'var(--primary-50)' : 'var(--bg-page)'}; 
                        cursor: pointer; 
                        text-align: left; 
                        display: flex; 
                        flex-direction: column; 
                        gap: 4px;
                        transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);
                      "
                    >
                      <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span style="font-size: 0.72rem; font-weight: 800; color: ${isSel ? 'var(--primary-700)' : 'var(--slate-500)'};">
                          ${isSeedSample ? '🌾 ' : d.category === 'fruit' ? '🍎 ' : '🍃 '}${d.crop[currentLang] ? d.crop[currentLang].split(' ')[0] : 'Crop'}
                        </span>
                        <span style="font-size: 0.65rem; font-weight: 800; padding: 1px 5px; border-radius: 4px; background: ${isSeedSample ? '#E0F2FE' : d.severityLevel === 'critical' ? '#FEE2E2' : d.severityLevel === 'high' ? '#FEF3C7' : '#DCFCE7'}; color: ${isSeedSample ? '#0369A1' : d.severityLevel === 'critical' ? '#991B1B' : d.severityLevel === 'high' ? '#92400E' : '#166534'};">
                          ${isSeedSample ? 'SEED' : d.severityLevel.toUpperCase()}
                        </span>
                      </div>
                      <div style="font-size: 0.76rem; font-weight: 700; color: var(--slate-900); line-height: 1.25; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                        ${d.diseaseName[currentLang] || d.diseaseName.en}
                      </div>
                    </button>
                  `;
                }).join('')}
              </div>
            </div>

          </div>

          <!-- Right Column: Instant AI Diagnostic Report & Prescription Solutions -->
          <div class="scanner-report-card" id="scannerReportContainer" style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-xl); padding: 28px; box-shadow: var(--shadow-lg);">
            
            <!-- Diagnosis Card Header -->
            <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px; flex-wrap: wrap; gap: 12px; border-bottom: 1px solid var(--border-subtle); padding-bottom: 16px;">
              <div>
                <span class="badge-pill" style="margin-bottom: 6px; background: rgba(34, 197, 94, 0.1); border-color: rgba(34, 197, 94, 0.3); color: var(--primary-700);">
                  <i data-lucide="${isSeed ? 'award' : 'check-circle-2'}" class="icon-xs"></i>
                  <span>${isSeed ? t.seedBadgeText : t.diagnosticResults}</span>
                </span>
                <h3 class="tracking-tight font-extrabold" style="font-size: 1.45rem; color: var(--slate-900); margin: 0;" id="reportCropTitle">
                  ${activeDisease.crop[currentLang] || activeDisease.crop.en}
                </h3>
              </div>

              <!-- Severity / Purity Badge -->
              <div style="text-align: right;">
                <span 
                  class="badge-pill" 
                  id="reportSeverityBadge"
                  style="
                    font-size: 0.82rem; 
                    padding: 4px 12px; 
                    font-weight: 800;
                    background: ${isSeed ? '#E0F2FE' : activeDisease.severityLevel === 'critical' ? '#FEE2E2' : activeDisease.severityLevel === 'high' ? '#FEF3C7' : '#DCFCE7'}; 
                    color: ${isSeed ? '#0369A1' : activeDisease.severityLevel === 'critical' ? '#991B1B' : activeDisease.severityLevel === 'high' ? '#92400E' : '#166534'};
                    border-color: ${isSeed ? '#7DD3FC' : activeDisease.severityLevel === 'critical' ? '#FCA5A5' : activeDisease.severityLevel === 'high' ? '#FCD34D' : '#86EFAC'};
                  "
                >
                  ${activeDisease.severity}
                </span>
                <div style="font-size: 0.72rem; color: var(--slate-400); margin-top: 3px;">
                  Confidence: <strong style="color: var(--primary-600);">${activeDisease.confidence}</strong>
                </div>
              </div>
            </div>

            <!-- Pathogen / Seed Identification Box -->
            <div style="background: var(--bg-page); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px; margin-bottom: 20px;">
              <div style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em; color: var(--slate-400); margin-bottom: 4px;">
                ${t.detectedDisease}
              </div>
              <h4 class="tracking-tight font-extrabold" style="font-size: 1.25rem; color: ${isSeed ? 'var(--primary-700)' : '#DC2626'}; margin-bottom: 6px;" id="reportDiseaseName">
                ${activeDisease.diseaseName[currentLang] || activeDisease.diseaseName.en}
              </h4>
              <div style="font-size: 0.8rem; color: var(--slate-600); display: flex; align-items: center; gap: 6px;">
                <i data-lucide="${isSeed ? 'check-check' : 'microscope'}" class="icon-xs" style="color: var(--primary-600);"></i>
                <span id="reportPathogenType">${activeDisease.pathogenType[currentLang] || activeDisease.pathogenType.en}</span>
              </div>
            </div>

            <!-- Symptoms / Quality Metrics Box -->
            <div style="margin-bottom: 18px;">
              <div style="font-size: 0.8rem; font-weight: 800; color: var(--slate-700); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <i data-lucide="${isSeed ? 'sparkles' : 'alert-triangle'}" class="icon-xs" style="color: ${isSeed ? '#0284C7' : '#D97706'};"></i>
                <span>${t.symptomsTitle}</span>
              </div>
              <p style="font-size: 0.88rem; color: var(--slate-600); line-height: 1.55; margin: 0; background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-md); border-left: 3px solid ${isSeed ? '#0284C7' : '#D97706'};" id="reportSymptoms">
                ${activeDisease.symptoms[currentLang] || activeDisease.symptoms.en}
              </p>
            </div>

            <!-- Organic Treatment / Seed Priming Box -->
            <div style="margin-bottom: 18px;">
              <div style="font-size: 0.8rem; font-weight: 800; color: var(--primary-700); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <i data-lucide="leaf" class="icon-xs" style="color: var(--primary-600);"></i>
                <span>${t.organicTitle}</span>
              </div>
              <div style="font-size: 0.88rem; color: var(--slate-800); line-height: 1.55; background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: var(--radius-md); padding: 12px 14px;" id="reportOrganic">
                ${activeDisease.organicTreatment[currentLang] || activeDisease.organicTreatment.en}
              </div>
            </div>

            <!-- Chemical Prescription / Seed Dressing Box -->
            <div style="margin-bottom: 18px;">
              <div style="font-size: 0.8rem; font-weight: 800; color: #0369A1; margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <i data-lucide="flask-conical" class="icon-xs" style="color: #0284C7;"></i>
                <span>${t.chemicalTitle}</span>
              </div>
              <div style="font-size: 0.88rem; color: var(--slate-800); line-height: 1.55; background: rgba(2, 132, 199, 0.08); border: 1px solid rgba(2, 132, 199, 0.2); border-radius: var(--radius-md); padding: 12px 14px;" id="reportChemical">
                ${activeDisease.chemicalTreatment[currentLang] || activeDisease.chemicalTreatment.en}
              </div>
            </div>

            <!-- Agronomic Prevention & Sowing Practice Box -->
            <div style="margin-bottom: 24px;">
              <div style="font-size: 0.8rem; font-weight: 800; color: var(--slate-700); margin-bottom: 6px; display: flex; align-items: center; gap: 6px;">
                <i data-lucide="shield-check" class="icon-xs" style="color: var(--primary-600);"></i>
                <span>${t.preventionTitle}</span>
              </div>
              <div style="font-size: 0.85rem; color: var(--slate-600); line-height: 1.5; background: var(--bg-page); padding: 10px 14px; border-radius: var(--radius-md);" id="reportPrevention">
                ${activeDisease.prevention[currentLang] || activeDisease.prevention.en}
              </div>
            </div>

            <!-- Diagnostic Call-To-Action Buttons -->
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <button 
                type="button" 
                class="btn btn-primary hover-scale" 
                id="orderPrescribedKitBtn"
                data-crop="${activeDisease.crop.en}"
                data-disease="${activeDisease.diseaseName.en}"
                style="padding: 13px; font-weight: 800; font-size: 0.92rem; display: flex; align-items: center; justify-content: center; gap: 8px; border-radius: var(--radius-md);"
              >
                <i data-lucide="${isSeed ? 'package-check' : 'shopping-cart'}" class="icon-sm"></i>
                <span>${isSeed ? '📦 Order Certified Seed Lot' : t.orderBioKitBtn}</span>
              </button>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <button 
                  type="button" 
                  class="btn btn-secondary hover-scale" 
                  id="scannerAskAiDoctorBtn"
                  data-disease="${activeDisease.diseaseName.en}"
                  style="padding: 10px; font-size: 0.825rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px;"
                >
                  <i data-lucide="bot" class="icon-xs" style="color: var(--primary-600);"></i>
                  <span>${t.askAiMoreBtn}</span>
                </button>

                <button 
                  type="button" 
                  class="btn btn-secondary hover-scale" 
                  id="downloadPrescriptionBtn"
                  style="padding: 10px; font-size: 0.825rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 6px;"
                >
                  <i data-lucide="download" class="icon-xs"></i>
                  <span>${t.downloadReportBtn}</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}
