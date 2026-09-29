// Centralized Translation Dictionary for CropCare Platform
// Complete coverage of all UI strings across English (EN), Hindi (HI), Tamil (TA), and French (FR)
// Zero untranslated fallbacks

export const translations = {
  en: {
    app: {
      name: "CropCare",
      tagline: "Better Farms, Brighter Futures",
      subTagline: "From Soil to Success",
      onlineStatus: "IoT Mesh Synced",
      demoBadge: "Production Ready v2.5"
    },
    auth: {
      title: "Welcome to CropCare",
      subtitle: "Enterprise-Grade Smart Agriculture Ecosystem",
      nameLabel: "Your Full Name",
      namePlaceholder: "e.g., Ramesh Patel",
      phoneLabel: "Mobile Number / Kisan ID",
      phonePlaceholder: "98765 43210",
      roleSelectLabel: "Select Your Operating Role",
      demoQuickLogin: "Demo Quick Login",
      submitLogin: "Sign In to Cockpit",
      verifying: "Verifying e-NAM KYC...",
      securityNotice: "Biometric & Aadhaar e-KYC Secured • APMC Regulated",
      roles: {
        farmer: {
          title: "Farmer / Grower",
          desc: "Plan crops, monitor soil moisture, detect leaf diseases, and sell direct to buyers."
        },
        buyer: {
          title: "Buyer / Wholesaler",
          desc: "Procure bulk produce lots, track mandi arbitrage, lock forward contracts, and audit escrow."
        },
        supplier: {
          title: "Supplier / Mechanic",
          desc: "Manage machinery inventory, dispatch field service vans, and fulfill B2B spare orders."
        },
        expert: {
          title: "Agronomist / Expert",
          desc: "Analyze NDVI telemetry, review AI scanner diagnoses, and broadcast farmer advisories."
        }
      }
    },
    header: {
      overview: "Overview",
      workflow: "6-Step Workflow",
      pillars: "18 Core Pillars",
      dashboard: "Live Dashboard",
      marketplace: "Catalog & Spares",
      scanner: "AI Leaf Doctor",
      advisory: "Expert Hub",
      modes: {
        easy: "Easy Mode",
        detailed: "Detailed Mode",
        easyShort: "Simple",
        detailedShort: "Advanced",
        easyDesc: "Conversational text, visual cards & simple actions",
        detailedDesc: "B2B telemetry, sensor matrices & engineering specs"
      },
      themes: {
        light: "Light Theme",
        dark: "Dark OLED Theme"
      },
      profile: {
        verified: "Verified Member",
        signOut: "Sign Out",
        settings: "Settings & API Key",
        switchRole: "Switch Operating Role"
      },
      languageLabel: "Language"
    },
    roles: {
      farmer: {
        badge: "Verified Kisan Member • Farmgate Certified #FG-8821",
        title: "Farmer Operating Cockpit",
        meta: "Raipur Farm, Cluster A • 14.5 Acres • LoRaWAN Connected",
        status: "Credit Rating: 810 (AAA)",
        editData: "Edit Farm Data",
        syncProbes: "Sync IoT Probes",
        tabs: {
          overview: "My Crops & Soil",
          mandi: "Today's Mandi Rates",
          weather: "Rain & Spray Radar",
          diagnostics: "AI Leaf Doctor",
          bids: "Direct Buyer Offers"
        },
        kpis: {
          land: "Active Land Holdings",
          landSub: "3 Cultivated Plots • LoRa Probes",
          yield: "Est. Season Yield",
          yieldSub: "+18% above regional avg",
          income: "Projected Revenue",
          incomeSub: "▲ +28% YoY growth",
          escrow: "Escrow Bank Vault",
          escrowSub: "T+0 Instant Payout Locked"
        },
        actions: {
          triggerDrip: "Trigger Drip Cycle",
          directSell: "Sell at Mandi Spot",
          acceptOffer: "Accept Forward Bid",
          orderKit: "Order Treatment Kit",
          consultExpert: "Call Agronomist"
        }
      },
      buyer: {
        badge: "Licensed Mandi Trader • B2B Escrow Verified #APMC-7749",
        title: "B2B Procurement & Escrow Trading Terminal",
        meta: "AgroTrade Wholesale Corp • Mandi License #DL-9082 • Delhi / Mumbai Hub",
        status: "Escrow Capital: ₹42,50,000",
        editData: "Edit Trader Profile",
        syncProbes: "Refresh Market Feeds",
        tabs: {
          procurement: "Bulk Produce Lots",
          mandiTicker: "Multi-Mandi Prices",
          contracts: "Farmer Contracts",
          logistics: "Cold-Chain Fleet",
          escrow: "Escrow Vault"
        },
        kpis: {
          contracts: "Active Purchase Contracts",
          contractsSub: "4 Agricultural States",
          volume: "Procured Volume (MT)",
          volumeSub: "Wheat, Basmati & Mangoes",
          escrow: "Active Escrow Capital",
          escrowSub: "100% Bank Guaranteed Vault",
          fleet: "Reefer Fleet In-Transit",
          fleetSub: "Cold-Chain GPS Connected"
        },
        actions: {
          createTender: "Create Procurement Tender",
          submitQuote: "Submit Counter Quote",
          inspectLot: "Verify QIC Certificate",
          lockSpot: "Lock Spot Contract",
          newContract: "New Forward Contract",
          trackFleet: "Live GPS Track",
          depositVault: "Deposit Escrow Funds"
        }
      },
      supplier: {
        badge: "OEM Authorized Partner • Mahindra, Sonalika & Shaktiman",
        title: "Machinery Inventory & Field Service Hub",
        meta: "Punjab Kisan Agri-Machinery Hub • Ludhiana Center • GSTIN: 03AABCK9921D",
        status: "Dealer Rating: 4.95 ★",
        editData: "Edit Supplier Details",
        syncProbes: "Sync Stock Levels",
        tabs: {
          inventory: "Machinery & Spares",
          serviceDispatch: "Mechanic Visits",
          orders: "Customer Orders",
          supplyAnalytics: "Sales & Demand"
        },
        kpis: {
          skus: "Active Equipment SKUs",
          skusSub: "98.4% In-Stock Fulfillment",
          dispatches: "Queued Dispatches",
          dispatchesSub: "₹8,94,200 Invoice Value",
          mechanics: "Active Field Mechanics",
          mechanicsSub: "Avg Response Time: 38 mins",
          turnover: "Monthly Turnover",
          turnoverSub: "▲ +34% MoM B2B Spares"
        },
        actions: {
          dispatchMechanic: "Dispatch Service Van",
          resolveTicket: "Mark Job Completed",
          callFarmer: "Contact Customer",
          dispatchOrder: "Ship Courier Waybill",
          addPart: "Add New Part SKU",
          adjustStock: "Adjust Stock Buffer"
        }
      },
      expert: {
        badge: "ICAR & PAU Certified Agronomist • Phytopathology Board",
        title: "Phytopathology Telemetry & Agronomy Decision Support",
        meta: "Senior Agronomist • National Agri ID #AGRO-9411 • Punjab & Haryana Agro-Climatic Zone",
        status: "Consultations: 450+ Active",
        editData: "Edit Expert Profile",
        syncProbes: "Refresh Sensor Feeds",
        tabs: {
          telemetry: "Field Sensor Data",
          triage: "Leaf Doctor Reviews",
          advisories: "Farmer Advisories",
          soilHealth: "Soil Health Index"
        },
        kpis: {
          probes: "Monitored Telemetry Feeds",
          probesSub: "Across 42 District Clusters",
          flags: "Pending Diagnostic Flags",
          flagsSub: "Rust & Blight Scans Flagged",
          advisories: "Published Advisories",
          advisoriesSub: "12,400+ Farmers Reached",
          soilScore: "Regional Soil Fertility",
          soilScoreSub: "Optimal NPK Balance Zone"
        },
        actions: {
          signRx: "Sign Digital Prescription",
          microscopy: "Inspect Microscopy",
          broadcastAdvisory: "Broadcast Regional Alert",
          exportTelemetry: "Export Sensor Log",
          reviewDiagnosis: "Approve Diagnosis",
          correctDiagnosis: "Correct Crop / Disease"
        }
      }
    },
    scanner: {
      badge: "Powered by Google Gemini",
      title: "AI Leaf Scanner & Crop Doctor",
      subtitle: "Accurate multimodal vision analysis for leaves, stems, fruits, and seeds",
      cameraTab: "Live Camera",
      uploadTab: "Upload Image",
      startCamera: "Start Camera",
      stopCamera: "Stop Camera",
      snapPhoto: "Snap Photo",
      retakePhoto: "Retake Photo",
      dragPrompt: "Drag & drop leaf, fruit, or seed photo here",
      supportPrompt: "Supports JPG, PNG, WebP up to 8 MB. Automatically resized & compressed.",
      analyzing: "Analyzing Agricultural Specimen...",
      analyzingSteps: {
        classifying: "Classifying specimen object type...",
        morphology: "Identifying botanical species & leaf venation...",
        pathology: "Evaluating fungal & bacterial pathogen markers...",
        prescribing: "Generating organic & chemical prescriptions..."
      },
      lowConfidenceTitle: "Low Confidence Notice",
      lowConfidenceMsg: "Species confidence is below 70%. We're showing top possibilities rather than guessing.",
      nonPlantTitle: "Non-Plant Object Detected",
      nonPlantMsg: "This photo does not appear to be an agricultural leaf, fruit, or seed.",
      disclaimer: "AI-assisted result — consult a certified agronomist for critical treatments.",
      verdictHealthy: "Specimen is Healthy & Vigorous ✅",
      verdictDiseased: "Pathology Detected",
      treatNow: "Apply Treatment Plan",
      buyMedicine: "Order Prescribed Medicine",
      askExpert: "Escalate to Agronomist",
      correctCrop: "Correct Crop Name",
      wasCorrectPrompt: "Was this diagnosis accurate?",
      yesCorrect: "Yes, accurate 👍",
      noIncorrect: "No, incorrect 👎",
      feedbackSubmitted: "Thank you! Your feedback has been sent to the Agronomist review queue.",
      errorTitle: "Diagnostic Analysis Error",
      retryBtn: "Retry Scan",
      configureKey: "Configure Gemini API Key",
      details: {
        objectType: "Specimen Type",
        species: "Identified Species",
        confidence: "Confidence Rating",
        alternatives: "Alternative Candidates",
        healthStatus: "Health Assessment",
        diseaseName: "Pathology / Pest",
        severity: "Severity Level",
        visualEvidence: "Visual Evidence (Morphological Cues)",
        organicTx: "Organic / Biological Treatment",
        chemicalTx: "Scientific Chemical Treatment (Active Ingredient & Dose)",
        prevention: "Long-Term Prevention Protocol"
      }
    },
    catalog: {
      title: "Verified Agricultural Marketplace & Spares",
      subtitle: "Direct procurement of fresh produce, certified seeds, tractors, and genuine OEM spares",
      searchPlaceholder: "Search crops, seeds, tractors, or spare parts...",
      allCategory: "All Categories",
      produceCategory: "Fruits & Vegetables (26)",
      seedsCategory: "Certified Seeds (9)",
      machineryCategory: "Vehicles & Machinery (6)",
      sparesCategory: "Tractor Spares (12)",
      sortBy: "Sort By",
      priceAsc: "Price: Low to High",
      priceDesc: "Price: High to Low",
      ratingDesc: "Highest Rated",
      inStock: "In Stock",
      addToCart: "Add to Cart",
      buyNow: "Buy Now",
      requestQuote: "Request B2B Quote",
      specsTitle: "Engineering & Agronomic Specifications",
      origin: "Origin / Farmgate",
      cartTotal: "Cart Total",
      items: {
        mango: "Alphonso Mango",
        orange: "Nagpur Orange",
        apple: "Kashmiri Apple",
        banana: "Cavendish Banana",
        pomegranate: "Fresh Pomegranate",
        tomato: "Organic Tomato",
        potato: "Desi Potato",
        onion: "Red Onion",
        cauliflower: "Cauliflower",
        chilli: "Green Chilli",
        brinjal: "Brinjal (Eggplant)",
        spinach: "Fresh Spinach",
        guava: "Allahabad Guava",
        papaya: "Red Lady Papaya",
        lemon: "Kagzi Lemon",
        bitterGourd: "Bitter Gourd (Karela)",
        bottleGourd: "Bottle Gourd (Lauki)",
        cabbage: "Fresh Cabbage",
        carrot: "Pusa Red Carrot",
        radish: "White Radish",
        greenPeas: "Shimla Green Peas",
        cucumber: "Polyhouse Cucumber",
        watermelon: "Namdhari Watermelon",
        muskmelon: "Kundan Muskmelon",
        pineapple: "Giant Kew Pineapple",
        sweetLime: "Mosambi Sweet Lime",
        wheatSeed: "Certified Wheat Seeds (HD-2967)",
        riceSeed: "Basmati Rice Seeds (Pusa-1121)",
        maizeSeed: "Hybrid Maize Seeds (PMH-1)",
        soybeanSeed: "Soybean Seeds (JS-335)",
        mustardSeed: "Mustard Seeds (Pusa Bold)",
        cottonSeed: "Cotton Bt Seeds (BG-II)",
        greenGramSeed: "Green Gram Seeds (Moong SML-668)",
        pearlMilletSeed: "Pearl Millet Seeds (Bajra Dhanashakti)",
        groundnutSeed: "Groundnut Seeds (TG-37A)",
        mahindra575: "Mahindra 575 DI (50 HP)",
        sonalikaTiger: "Sonalika Tiger DI 75 (75 HP)",
        johnDeere5310: "John Deere 5310 (55 HP)",
        swaraj744: "Swaraj 744 FE (48 HP)",
        shaktimanRotavator: "Shaktiman Rotary Tiller (Rotavator 7ft)",
        farmtrac45: "Escorts Farmtrac 45 (45 HP)",
        rotavatorBlades: "Heavy-Duty Boron Steel Rotavator Blades",
        clutchPlate: "Tractor Clutch Plate & Cover Assembly",
        hydraulicFilter: "Hydraulic Lift Pump Filters",
        fuelInjectors: "Diesel Engine Fuel Injectors",
        hosePipe: "Water Pump Hose Pipe Assembly",
        steeringTieRod: "Steering Box Tie Rod End",
        kingPin: "Front Axle King Pin Assembly",
        fuelLiftPump: "Fuel Lift Pump Assembly",
        alternatorKit: "Alternator Dynamo Repair Kit",
        hydraulicSealKit: "Hydraulic Control Valve Seal Kit",
        airCleanerFilter: "Air Cleaner Element Filter",
        pistonRingSet: "Engine Piston Ring Set"
      }
    },
    chat: {
      title: "CropCare AI Agronomist",
      subtitle: "Powered by Google Gemini",
      placeholder: "Ask about crop diseases, NPK fertilizers, mandi prices, or tractor repairs...",
      send: "Send",
      clear: "Clear Chat",
      typing: "Gemini AI is analyzing agricultural records...",
      suggestions: [
        "What fertilizer is best for wheat at 30 days?",
        "How do I treat Powdery Mildew organically?",
        "Compare Sonalika Tiger vs Mahindra 575 for heavy rotavator use",
        "What are current Basmati mandi spot rates?"
      ],
      attachPhoto: "Attach Leaf / Specimen Photo",
      disclaimer: "Official CropCare advisory. If unsure, Gemini indicates lack of data rather than inventing facts."
    },
    common: {
      close: "Close",
      cancel: "Cancel",
      save: "Save Changes",
      retry: "Retry",
      back: "Back",
      loading: "Loading...",
      success: "Success",
      error: "Error",
      escrowLocked: "Locked in Bank Escrow",
      active: "Active",
      pending: "Pending",
      completed: "Completed"
    }
  },

  hi: {
    app: {
      name: "क्रॉपकेयर",
      tagline: "बेहतर खेती, सुनहरा भविष्य",
      subTagline: "मिट्टी से सफलता तक",
      onlineStatus: "आईओटी मेश सिंक",
      demoBadge: "प्रोडक्शन रेडी v2.5"
    },
    auth: {
      title: "क्रॉपकेयर में आपका स्वागत है",
      subtitle: "उन्नत एंटरप्राइज कृषि इकोसिस्टम",
      nameLabel: "आपका पूरा नाम",
      namePlaceholder: "उदा. श्याम डी.",
      phoneLabel: "मोबाइल नंबर / किसान आईडी",
      phonePlaceholder: "98765 43210",
      roleSelectLabel: "अपनी परिचालन भूमिका चुनें",
      demoQuickLogin: "त्वरित डेमो लॉगिन",
      submitLogin: "कॉकपिट में प्रवेश करें",
      verifying: "ई-नाम सत्यापन जारी...",
      securityNotice: "बायोमेट्रिक व आधार प्रमाणीकरण • एपीएमसी लाइसेंस",
      roles: {
        farmer: {
          title: "किसान / उत्पादक",
          desc: "फसल योजना, मृदा नमी विश्लेषण, पत्ती रोग पहचान और सीधे खरीदार को बिक्री।"
        },
        buyer: {
          title: "थोक खरीदार / व्यापारी",
          desc: "थोक कृषि उपज खरीद, मंडी आर्बिट्रेज, फॉरवर्ड अनुबंध और एस्क्रो ट्रेजरी।"
        },
        supplier: {
          title: "डीलर / मैकेनिक",
          desc: "मशीनरी स्टॉक, फील्ड सर्विस वैन डिस्पैच और स्पेयर पार्ट्स ऑर्डर पूर्ति।"
        },
        expert: {
          title: "कृषि वैज्ञानिक / विशेषज्ञ",
          desc: "उपग्रह एनडीवीआई टेलीमेट्री, एआई रोग निदान समीक्षा और क्षेत्रीय परामर्श।"
        }
      }
    },
    header: {
      overview: "सिंहावलोकन",
      workflow: "6-चरणीय कार्यप्रवाह",
      pillars: "18 प्रमुख स्तंभ",
      dashboard: "लाइव कॉकपिट",
      marketplace: "मंडी व स्पेयर पार्ट्स",
      scanner: "एआई पत्ती डॉक्टर",
      advisory: "वैज्ञानिक हब",
      modes: {
        easy: "सरल मोड",
        detailed: "विस्तृत मोड",
        easyShort: "सरल",
        detailedShort: "विस्तृत",
        easyDesc: "सरल बोलचाल, बड़े कार्ड और आसान बटन",
        detailedDesc: "बी2बी टेलीमेट्री, सेंसर आंकड़े और तकनीकी विवरण"
      },
      themes: {
        light: "उज्ज्वल थीम",
        dark: "डार्क ओलेड थीम"
      },
      profile: {
        verified: "सत्यापित सदस्य",
        signOut: "लॉग आउट करें",
        settings: "सेटिंग्स व एपीआई कुंजी",
        switchRole: "भूमिका बदलें"
      },
      languageLabel: "भाषा"
    },
    roles: {
      farmer: {
        badge: "प्रमाणित किसान सदस्य • फार्मगेट प्रमाणित #FG-8821",
        title: "किसान परिचालन कॉकपिट",
        meta: "रायपुर फार्म, क्लस्टर ए • 14.5 एकड़ • लोरावान कनेक्टेड",
        status: "क्रेडिट स्कोर: 810 (AAA)",
        editData: "खेत डेटा बदलें",
        syncProbes: "सेंसर सिंक करें",
        tabs: {
          overview: "मेरी फसलें व मिट्टी",
          mandi: "आज के मंडी भाव",
          weather: "बारिश व स्प्रे रडार",
          diagnostics: "एआई फसल डॉक्टर",
          bids: "खरीदारों के ऑफर"
        },
        kpis: {
          land: "सक्रिय खेत जोत",
          landSub: "3 खेती वाले प्लॉट • लाइव सेंसर",
          yield: "अनुमानित कुल उपज",
          yieldSub: "+18% क्षेत्रीय औसत से अधिक",
          income: "प्रक्षेपित फसल आय",
          incomeSub: "▲ +28% वार्षिक वृद्धि",
          escrow: "एस्क्रो बैंक तिजोरी",
          escrowSub: "T+0 तत्काल भुगतान सुरक्षित"
        },
        actions: {
          triggerDrip: "ड्रिप सिंचाई चालू करें",
          directSell: "मंडी भाव पर बेचें",
          acceptOffer: "फॉरवर्ड टेंडर स्वीकार करें",
          orderKit: "उपचार किट ऑर्डर करें",
          consultExpert: "वैज्ञानिक से बात करें"
        }
      },
      buyer: {
        badge: "लाइसेंस प्राप्त मंडी व्यापारी • B2B एस्क्रो प्रमाणित #APMC-7749",
        title: "थोक खरीद एवं एस्क्रो व्यापार टर्मिनल",
        meta: "एग्रोट्रेड होलसेल कॉर्पोरेशन • मंडी लाइसेंस #DL-9082 • दिल्ली व मुंबई केंद्र",
        status: "एस्क्रो पूँजी: ₹42,50,000",
        editData: "व्यापारी प्रोफ़ाइल बदलें",
        syncProbes: "मंडी भाव रीफ्रेश करें",
        tabs: {
          procurement: "थोक कृषि उपज लॉट",
          mandiTicker: "मल्टी-मंडी भाव",
          contracts: "किसान अनुबंध",
          logistics: "कोल्ड-चेन ट्रक",
          escrow: "एस्क्रो तिजोरी"
        },
        kpis: {
          contracts: "सक्रिय खरीद अनुबंध",
          contractsSub: "4 प्रमुख उत्पादक राज्य",
          volume: "खरीदी गई मात्रा (MT)",
          volumeSub: "गेहूं, बासमती और आम",
          escrow: "सुरक्षित एस्क्रो राशि",
          escrowSub: "100% बैंक गारंटीकृत एस्क्रो",
          fleet: "मार्ग में कोल्ड-चेन ट्रक",
          fleetSub: "तापमान नियंत्रित जीपीएस"
        },
        actions: {
          createTender: "खरीद टेंडर जारी करें",
          submitQuote: "काउंटर कोटेशन भेजें",
          inspectLot: "क्यूआईसी प्रमाणपत्र जांचें",
          lockSpot: "स्पॉट कॉन्ट्रैक्ट लॉक करें",
          newContract: "नया फसल अनुबंध बनाएं",
          trackFleet: "लाइव जीपीएस ट्रैक करें",
          depositVault: "एस्क्रो में धन जमा करें"
        }
      },
      supplier: {
        badge: "अधिकृत OEM पार्टनर • महिंद्रा, सोनालिका एवं शक्तिमान",
        title: "कृषि मशीनरी स्टॉक व फील्ड सर्विस हब",
        meta: "पंजाब किसान कृषि मशीनरी केंद्र • लुधियाना • जीएसटी: 03AABCK9921D",
        status: "डीलर रेटिंग: 4.95 ★",
        editData: "आपूर्तिकर्ता विवरण बदलें",
        syncProbes: "स्टॉक सिंक करें",
        tabs: {
          inventory: "मशीनरी व स्पेयर पार्ट्स",
          serviceDispatch: "मैकेनिक सर्विस",
          orders: "ग्राहक ऑर्डर",
          supplyAnalytics: "मांग व खपत रुझान"
        },
        kpis: {
          skus: "सक्रिय उपकरण SKUs",
          skusSub: "98.4% रेडी-टू-डिस्पैच",
          dispatches: "लंबित ऑर्डर डिस्पैच",
          dispatchesSub: "₹8,94,200 इनवॉइस मूल्य",
          mechanics: "फील्ड मैकेनिक वैन",
          mechanicsSub: "औसत प्रतिक्रिया: 38 मिनट",
          turnover: "मासिक आपूर्ति कारोबार",
          turnoverSub: "▲ +34% मासिक वृद्धि"
        },
        actions: {
          dispatchMechanic: "सर्विस वैन भेजें",
          resolveTicket: "कार्य पूर्ण चिह्नित करें",
          callFarmer: "ग्राहक को कॉल करें",
          dispatchOrder: "वेबिल के साथ रवाना करें",
          addPart: "नया स्पेयर पार्ट जोड़ें",
          adjustStock: "स्टॉक स्तर बदलें"
        }
      },
      expert: {
        badge: "ICAR एवं PAU प्रमाणित कृषि वैज्ञानिक • पौध संरक्षण बोर्ड",
        title: "पादप रोग टेलीमेट्री व कृषि वैज्ञानिक निर्णय केंद्र",
        meta: "वरिष्ठ कृषि वैज्ञानिक • राष्ट्रीय पहचान #AGRO-9411 • पंजाब व हरियाणा",
        status: "सक्रिय परामर्श: 450+ किसान",
        editData: "विशेषज्ञ प्रोफ़ाइल बदलें",
        syncProbes: "सेंसर सिंक करें",
        tabs: {
          telemetry: "खेत सेंसर डेटा",
          triage: "रोग पर्ची सत्यापन",
          advisories: "किसान परामर्श",
          soilHealth: "मृदा स्वास्थ्य सूचकांक"
        },
        kpis: {
          probes: "सक्रिय टेलीमेट्री प्रोब",
          probesSub: "42 जिला क्लस्टर से कनेक्टेड",
          flags: "समीक्षा हेतु रोग अलर्ट",
          flagsSub: "रतुआ व झुलसा की पुष्टि लंबित",
          advisories: "जारी की गई सलाहें",
          advisoriesSub: "12,400+ किसानों तक पहुंच",
          soilScore: "क्षेत्रीय मृदा उर्वरता",
          soilScoreSub: "संतुलित NPK पोषक तत्व क्षेत्र"
        },
        actions: {
          signRx: "डिजिटल नुस्खा प्रमाणित करें",
          microscopy: "माइक्रोस्कोपी जांचें",
          broadcastAdvisory: "क्षेत्रीय अलर्ट जारी करें",
          exportTelemetry: "टेलीमेट्री लॉग डाउनलोड करें",
          reviewDiagnosis: "रोग निदान स्वीकृत करें",
          correctDiagnosis: "फसल/रोग संशोधन करें"
        }
      }
    },
    scanner: {
      badge: "गूगल जेमिनी एआई",
      title: "एआई पत्ती स्कैनर व फसल डॉक्टर",
      subtitle: "पत्तियों, तनों, फलों और बीजों की सटीक मल्टीमॉडल विजन पहचान",
      cameraTab: "लाइव कैमरा",
      uploadTab: "फोटो अपलोड करें",
      startCamera: "कैमरा शुरू करें",
      stopCamera: "कैमरा बंद करें",
      snapPhoto: "फोटो खींचें",
      retakePhoto: "दोबारा फोटो लें",
      dragPrompt: "पत्ती, फल या बीज की फोटो यहाँ खींचकर लाएं",
      supportPrompt: "JPG, PNG, WebP 8 MB तक समर्थित। स्वतः संपीड़ित।",
      analyzing: "कृषि नमूने का विश्लेषण किया जा रहा है...",
      analyzingSteps: {
        classifying: "नमूने के प्रकार का वर्गीकरण...",
        morphology: "वानस्पतिक प्रजाति व शिरा विन्यास की पहचान...",
        pathology: "कवक व जीवाणु रोगजनकों का मूल्यांकन...",
        prescribing: "जैविक व रासायनिक उपचार तैयार किया जा रहा है..."
      },
      lowConfidenceTitle: "कम विश्वास सूचना",
      lowConfidenceMsg: "प्रजाति पहचान का विश्वास 70% से कम है। हम अनुमान लगाने के बजाय शीर्ष संभावनाएं दिखा रहे हैं।",
      nonPlantTitle: "गैर-पौधा वस्तु पहचानी गई",
      nonPlantMsg: "यह फोटो किसी कृषि फसल, पत्ती, फल या बीज की नहीं लगती।",
      disclaimer: "एआई-सहायता प्राप्त परिणाम — गंभीर स्थिति में प्रमाणित कृषि वैज्ञानिक से संपर्क करें।",
      verdictHealthy: "नमूना पूर्णतः स्वस्थ व रोगमुक्त है ✅",
      verdictDiseased: "रोग के लक्षण पाए गए",
      treatNow: "उपचार योजना लागू करें",
      buyMedicine: "निर्धारित दवाई खरीदें",
      askExpert: "कृषि वैज्ञानिक से पूछें",
      correctCrop: "सही फसल का नाम बताएं",
      wasCorrectPrompt: "क्या यह रोग निदान सही था?",
      yesCorrect: "हाँ, बिल्कुल सही 👍",
      noIncorrect: "नहीं, गलत है 👎",
      feedbackSubmitted: "धन्यवाद! आपकी प्रतिक्रिया विशेषज्ञ समीक्षा कतार में भेज दी गई है।",
      errorTitle: "विश्लेषण में त्रुटि",
      retryBtn: "पुनः प्रयास करें",
      configureKey: "जेमिनी एपीआई कुंजी दर्ज करें",
      details: {
        objectType: "नमूना प्रकार",
        species: "पहचानी गई प्रजाति",
        confidence: "सटीकता विश्वास",
        alternatives: "वैकल्पिक संभावनाएं",
        healthStatus: "स्वास्थ्य स्थिति",
        diseaseName: "रोग / कीट का नाम",
        severity: "रोग की गंभीरता",
        visualEvidence: "दृश्य साक्ष्य (आकारिकीय लक्षण)",
        organicTx: "जैविक उपचार विधि",
        chemicalTx: "वैज्ञानिक रासायनिक उपचार (सक्रिय घटक व मात्रा)",
        prevention: "दीर्घकालिक रोकथाम सलाह"
      }
    },
    catalog: {
      title: "सत्यापित कृषि उपज, बीज व मशीनरी बाजार",
      subtitle: "ताजी उपज, प्रमाणित बीज, ट्रैक्टर और असली स्पेयर पार्ट्स की सीधी खरीद",
      searchPlaceholder: "फसल, बीज, ट्रैक्टर या स्पेयर पार्ट्स खोजें...",
      allCategory: "सभी श्रेणियां",
      produceCategory: "फल व सब्जियां (26)",
      seedsCategory: "प्रमाणित बीज (9)",
      machineryCategory: "कृषि मशीनरी व वाहन (6)",
      sparesCategory: "ट्रैक्टर स्पेयर पार्ट्स (12)",
      sortBy: "क्रमबद्ध करें",
      priceAsc: "कीमत: कम से ज्यादा",
      priceDesc: "कीमत: ज्यादा से कम",
      ratingDesc: "उच्चतम रेटिंग",
      inStock: "उपलब्ध",
      addToCart: "कार्ट में जोड़ें",
      buyNow: "अभी खरीदें",
      requestQuote: "थोक भाव मांगें",
      specsTitle: "इंजीनियरिंग एवं कृषि तकनीकी विवरण",
      origin: "उत्पत्ति स्थल / फार्मगेट",
      cartTotal: "कुल मूल्य",
      items: {
        mango: "अल्फांसो आम",
        orange: "नागपुरी संतरा",
        apple: "कश्मीरी सेब",
        banana: "कैवेंडिश केला",
        pomegranate: "ताजा अनार",
        tomato: "ऑर्गेनिक टमाटर",
        potato: "देसी आलू",
        onion: "लाल प्याज",
        cauliflower: "फूलगोभी",
        chilli: "हरी मिर्च",
        brinjal: "गोल बैंगन",
        spinach: "ताजा पालक",
        guava: "इलाहाबादी अमरूद",
        papaya: "रेड लेडी पपीता",
        lemon: "कागजी नींबू",
        bitterGourd: "करेला",
        bottleGourd: "लौकी",
        cabbage: "पत्तागोभी",
        carrot: "पूसा लाल गाजर",
        radish: "सफेद मूली",
        greenPeas: "शिमला हरी मटर",
        cucumber: "पॉलीहाउस खीरा",
        watermelon: "नामधारी तरबूज",
        muskmelon: "कुंदन खरबूजा",
        pineapple: "जायंट क्यू अनानास",
        sweetLime: "मोसंबी",
        wheatSeed: "प्रमाणित गेहूं बीज (HD-2967)",
        riceSeed: "बासमती धान बीज (पूसा-1121)",
        maizeSeed: "हाइब्रिड मक्का बीज (PMH-1)",
        soybeanSeed: "सोयाबीन बीज (JS-335)",
        mustardSeed: "सरसों बीज (पूसा बोल्ड)",
        cottonSeed: "कपास बीटी बीज (BG-II)",
        greenGramSeed: "मूंग दाल बीज (SML-668)",
        pearlMilletSeed: "बाजरा बीज (धनशक्ति)",
        groundnutSeed: "मूंगफली बीज (TG-37A)",
        mahindra575: "महिंद्रा 575 DI (50 HP)",
        sonalikaTiger: "सोनालिका टाइगर DI 75 (75 HP)",
        johnDeere5310: "जॉन डियर 5310 (55 HP)",
        swaraj744: "स्वराज 744 FE (48 HP)",
        shaktimanRotavator: "शक्तिमान रोटावेटर (7 फीट)",
        farmtrac45: "एस्कॉर्ट्स फार्मट्रैक 45 (45 HP)",
        rotavatorBlades: "बोरोन स्टील रोटावेटर ब्लेड",
        clutchPlate: "ट्रैक्टर क्लच प्लेट व कवर असेंबली",
        hydraulicFilter: "हाइड्रोलिक लिफ्ट पंप फिल्टर",
        fuelInjectors: "डीजल इंजन फ्यूल इंजेक्टर",
        hosePipe: "वाटर पंप होस पाइप असेंबली",
        steeringTieRod: "स्टीयरिंग बॉक्स टाई रॉड एंड",
        kingPin: "फ्रंट एक्सल किंग पिन असेंबली",
        fuelLiftPump: "फ्यूल लिफ्ट पंप असेंबली",
        alternatorKit: "अल्टरनेटर डायनमो रिपेयर किट",
        hydraulicSealKit: "हाइड्रोलिक कंट्रोल वाल्व सील किट",
        airCleanerFilter: "एयर क्लीनर एलिमेंट फिल्टर",
        pistonRingSet: "इंजन पिस्टन रिंग सेट"
      }
    },
    chat: {
      title: "क्रॉपकेयर एआई कृषि सलाहकार",
      subtitle: "गूगल जेमिनी द्वारा संचालित",
      placeholder: "फसल रोग, खाद की मात्रा, मंडी भाव या ट्रैक्टर मरम्मत के बारे में पूछें...",
      send: "भेजें",
      clear: "चैट मिटाएं",
      typing: "जेमिनी एआई कृषि अभिलेखों का विश्लेषण कर रहा है...",
      suggestions: [
        "गेहूं की फसल में 30 दिन पर कौन सा खाद डालें?",
        "पाउडरी मिल्ड्यू का जैविक उपचार क्या है?",
        "सोनालिका टाइगर और महिंद्रा 575 की रोटावेटर तुलना",
        "आज के बासमती चावल के मंडी भाव क्या हैं?"
      ],
      attachPhoto: "पत्ती या नमूने की फोटो लगाएं",
      disclaimer: "क्रॉपकेयर आधिकारिक सलाह। अनिश्चित होने पर जेमिनी मनगढ़ंत जवाब देने के बजाय स्पष्ट मना करता है।"
    },
    common: {
      close: "बंद करें",
      cancel: "रद्द करें",
      save: "सुरक्षित करें",
      retry: "पुनः प्रयास",
      back: "पीछे जाएं",
      loading: "लोड हो रहा है...",
      success: "सफल",
      error: "त्रुटि",
      escrowLocked: "बैंक एस्क्रो में सुरक्षित",
      active: "सक्रिय",
      pending: "लंबित",
      completed: "पूर्ण"
    }
  },

  ta: {
    app: {
      name: "பயிர்பாதுகாப்பு (CropCare)",
      tagline: "சிறந்த பண்ணைகள், பிரகாசமான எதிர்காலம்",
      subTagline: "மண்ணிலிருந்து வெற்றி வரை",
      onlineStatus: "சென்சார் இணைக்கப்பட்டது",
      demoBadge: "தயார் v2.5"
    },
    auth: {
      title: "பயிர்பாதுகாப்பிற்கு நல்வரவு",
      subtitle: "தொழில்முறை ஸ்மார்ட் விவசாய தளம்",
      nameLabel: "உங்கள் முழுப் பெயர்",
      namePlaceholder: "எ.கா. ஷியாம் டி.",
      phoneLabel: "கைபேசி எண் / உழவர் அடையாள எண்",
      phonePlaceholder: "98765 43210",
      roleSelectLabel: "உங்கள் செயல்பாட்டு பங்கைத் தேர்வு செய்யவும்",
      demoQuickLogin: "டெமோ விரைவு உள்நுழைவு",
      submitLogin: "தளத்திற்குள் நுழைக",
      verifying: "சரிபார்க்கப்படுகிறது...",
      securityNotice: "ஆதார் மற்றும் பயோமெட்ரிக் அங்கீகாரம் பெற்றது",
      roles: {
        farmer: {
          title: "உழவர் / விவசாயி",
          desc: "பயிர் திட்டம், மண் ஈரப்பதம், இலை நோய் கண்டறிதல் மற்றும் நேரடி விற்பனை."
        },
        buyer: {
          title: "மொத்த கொள்முதலாளர்",
          desc: "மொத்த கொள்முதல், சந்தை விலை மதிப்பீடு, ஒப்பந்தங்கள் மற்றும் எஸ்க்ரோ வைப்பு."
        },
        supplier: {
          title: "இயந்திர டீலர் / மெக்கானிக்",
          desc: "உதிரி பாகங்கள் கையிருப்பு, நடமாடும் சர்வீஸ் வேன்கள் மற்றும் விநியோகம்."
        },
        expert: {
          title: "வேளாண் விஞ்ஞானி",
          desc: "செயற்கைக்கோள் என்டிவிஐ தரவு, ஏஐ நோய் சரிபார்ப்பு மற்றும் விவசாய ஆலோசனைகள்."
        }
      }
    },
    header: {
      overview: "கண்ணோட்டம்",
      workflow: "6-படி செயல்முறை",
      pillars: "18 முக்கிய அம்சங்கள்",
      dashboard: "நேரலை அறை",
      marketplace: "சந்தை & உதிரிபாகங்கள்",
      scanner: "ஏஐ இலை மருத்துவர்",
      advisory: "விஞ்ஞானி ஆலோசனை",
      modes: {
        easy: "எளிய பார்வை",
        detailed: "விரிவான பார்வை",
        easyShort: "எளியது",
        detailedShort: "விரிவானது",
        easyDesc: "எளிய உரை, பெரிய படங்கள் & நேரடி பொத்தான்கள்",
        detailedDesc: "தொழில்முறை வரைபடங்கள், சென்சார் எண்கள் & விவரக்குறிப்புகள்"
      },
      themes: {
        light: "வெளிச்ச தீம்",
        dark: "இருண்ட ஓலெட் தீம்"
      },
      profile: {
        verified: "சான்றளிக்கப்பட்ட உறுப்பினர்",
        signOut: "வெளியேறு",
        settings: "அமைப்புகள் & ஏபிஐ சாவி",
        switchRole: "பங்கை மாற்று"
      },
      languageLabel: "மொழி"
    },
    roles: {
      farmer: {
        badge: "சான்றளிக்கப்பட்ட உழவர் • பண்ணை அங்கீகாரம் #FG-8821",
        title: "உழவர் கட்டுப்பாட்டு மையம்",
        meta: "ராய்ப்பூர் பண்ணை, கிளஸ்டர் A • 14.5 ஏக்கர் • சென்சார் இணைக்கப்பட்டது",
        status: "கிரெடிட் ஸ்கோர்: 810 (AAA)",
        editData: "பண்ணை தரவு திருத்து",
        syncProbes: "சென்சார்களை ஒத்திசை",
        tabs: {
          overview: "என் பயிர்கள் & மண்",
          mandi: "இன்றைய மண்டி விலை",
          weather: "மழை & மருந்து தெளிப்பு",
          diagnostics: "ஏஐ இலை மருத்துவர்",
          bids: "கொள்முதல் சலுகைகள்"
        },
        kpis: {
          land: "சாகுபடி நிலம்",
          landSub: "3 பயிர் நிலங்கள் • நேரலை சென்சார்",
          yield: "எதிர்பார்க்கும் மகசூல்",
          yieldSub: "+18% சராசரியை விட அதிகம்",
          income: "மதிப்பிடப்பட்ட வருமானம்",
          incomeSub: "▲ +28% ஆண்டு வளர்ச்சி",
          escrow: "வங்கி எஸ்க்ரோ பாதுகாப்பு",
          escrowSub: "T+0 உடனடி பணம் உறுதி"
        },
        actions: {
          triggerDrip: "சொட்டுநீர் பாசனம் துவங்கு",
          directSell: "மண்டி விலைக்கு விற்பனை",
          acceptOffer: "ஒப்பந்தத்தை ஏற்றிடு",
          orderKit: "மருந்து பெட்டகம் வாங்கு",
          consultExpert: "விஞ்ஞானியிடம் பேசு"
        }
      },
      buyer: {
        badge: "உரிமம் பெற்ற மண்டி வணிகர் • B2B எஸ்க்ரோ #APMC-7749",
        title: "மொத்த கொள்முதல் மற்றும் வர்த்தக மையம்",
        meta: "அக்ரோடிரேட் நிறுவனம் • மண்டி உரிமம் #DL-9082 • டெல்லி / மும்பை",
        status: "எஸ்க்ரோ வைப்பு நிதி: ₹42,50,000",
        editData: "சுயவிவரம் திருத்து",
        syncProbes: "சந்தை விலையை புதுப்பி",
        tabs: {
          procurement: "மொத்த விளைபொருட்கள்",
          mandiTicker: "பல மண்டி விலைகள்",
          contracts: "உழவர் ஒப்பந்தங்கள்",
          logistics: "குளிர்சாதன லாரிகள்",
          escrow: "எஸ்க்ரோ வைப்பு நிதி"
        },
        kpis: {
          contracts: "செயலில் உள்ள ஒப்பந்தங்கள்",
          contractsSub: "4 முக்கிய மாநிலங்கள்",
          volume: "கொள்முதல் அளவு (MT)",
          volumeSub: "கோதுமை, பாசுமதி & மாம்பழம்",
          escrow: "பாதுகாப்பான எஸ்க்ரோ நிதி",
          escrowSub: "100% வங்கி உத்தரவாதம்",
          fleet: "பயணத்தில் உள்ள லாரிகள்",
          fleetSub: "ஜிபிஎஸ் இணைக்கப்பட்டது"
        },
        actions: {
          createTender: "டெண்டர் வெளியிடு",
          submitQuote: "விலைப்புள்ளி அனுப்பு",
          inspectLot: "தரச் சான்றிதழைப் பார்",
          lockSpot: "விலையை உறுதி செய்",
          newContract: "புதிய ஒப்பந்தம் போடு",
          trackFleet: "ஜிபிஎஸ் நேரலை பார்",
          depositVault: "எஸ்க்ரோவில் பணம் செலுத்து"
        }
      },
      supplier: {
        badge: "அங்கீகரிக்கப்பட்ட OEM கூட்டாளர் • மஹிந்திரா, சோனாலிகா",
        title: "இயந்திர இருப்பு மற்றும் களப் பராமரிப்பு",
        meta: "பஞ்சாப் கிசான் இயந்திர மையம் • லூதியானா • ஜிஎஸ்டி: 03AABCK9921D",
        status: "மதிப்பீடு: 4.95 ★",
        editData: "விவரங்களை மாற்று",
        syncProbes: "கையிருப்பை ஒத்திசை",
        tabs: {
          inventory: "இயந்திரங்கள் & பாகங்கள்",
          serviceDispatch: "மெக்கானிக் சேவைகள்",
          orders: "வாடிக்கையாளர் ஆர்டர்கள்",
          supplyAnalytics: "விற்பனை புள்ளிவிவரம்"
        },
        kpis: {
          skus: "இருப்பில் உள்ள பாகங்கள்",
          skusSub: "98.4% உடனடி விநியோகம்",
          dispatches: "அனுப்ப வேண்டிய ஆர்டர்கள்",
          dispatchesSub: "₹8,94,200 மதிப்பு",
          mechanics: "கள மெக்கானிக் வேன்கள்",
          mechanicsSub: "சராசரி நேரம்: 38 நிமிடம்",
          turnover: "மாதாந்திர வருவாய்",
          turnoverSub: "▲ +34% வளர்ச்சி"
        },
        actions: {
          dispatchMechanic: "சர்வீஸ் வேனை அனுப்பு",
          resolveTicket: "பணியை முடித்திடு",
          callFarmer: "வாடிக்கையாளரை அழை",
          dispatchOrder: "ஆர்டரை அனுப்பி வை",
          addPart: "புதிய பாகம் சேர்",
          adjustStock: "கையிருப்பை மாற்று"
        }
      },
      expert: {
        badge: "ICAR சான்றளிக்கப்பட்ட வேளாண் விஞ்ஞானி • தாவரவியல்",
        title: "பயிர் நோய் கண்காணிப்பு மற்றும் அறிவியல் மையம்",
        meta: "மூத்த விஞ்ஞானி • தேசிய அடையாள எண் #AGRO-9411",
        status: "செயலில் உள்ள ஆலோசனைகள்: 450+",
        editData: "சுயவிவரம் திருத்து",
        syncProbes: "சென்சார்களை புதுப்பி",
        tabs: {
          telemetry: "சென்சார் நேரலை தரவு",
          triage: "இலை நோய் சரிபார்ப்பு",
          advisories: "விவசாய ஆலோசனைகள்",
          soilHealth: "மண் வளக் குறியீடு"
        },
        kpis: {
          probes: "கண்காணிக்கப்படும் சென்சார்கள்",
          probesSub: "42 மாவட்டங்களில்",
          flags: "நிலுவையில் உள்ள நோய்கள்",
          flagsSub: "துரு மற்றும் கருகல் நோய்",
          advisories: "வெளியிடப்பட்ட ஆலோசனைகள்",
          advisoriesSub: "12,400+ விவசாயிகள்",
          soilScore: "மண் வள மதிப்பீடு",
          soilScoreSub: "சரியான NPK விகிதம்"
        },
        actions: {
          signRx: "மருந்து சீட்டில் கையொப்பமிடு",
          microscopy: "நுண்ணோக்கி படம் பார்",
          broadcastAdvisory: "எச்சரிக்கை செய்தி அனுப்பு",
          exportTelemetry: "சென்சார் தரவை பதிவிறக்கு",
          reviewDiagnosis: "நோயை உறுதி செய்",
          correctDiagnosis: "பயிர் பெயரை மாற்று"
        }
      }
    },
    scanner: {
      badge: "கூகிள் ஜெமினி விஷன் ஏஐ",
      title: "ஏஐ இலை ஸ்கேனர் & பயிர் மருத்துவர்",
      subtitle: "இலைகள், தண்டுகள், பழங்கள் மற்றும் விதைகளை துல்லியமாக கண்டறியும் அமைப்பு",
      cameraTab: "நேரலை கேமரா",
      uploadTab: "படம் பதிவேற்று",
      startCamera: "கேமராவை துவங்கு",
      stopCamera: "கேமராவை நிறுத்து",
      snapPhoto: "படம் எடு",
      retakePhoto: "மீண்டும் படம் எடு",
      dragPrompt: "இலை, காய் அல்லது விதையின் படத்தை இங்கே இடவும்",
      supportPrompt: "JPG, PNG, WebP (8 MB வரை). தானாகவே சுருக்கப்படும்.",
      analyzing: "பயிர் மாதிரி ஆய்வு செய்யப்படுகிறது...",
      analyzingSteps: {
        classifying: "மாதிரியின் வகையை கண்டறிதல்...",
        morphology: "தாவர இனம் மற்றும் நரம்பமைப்பை ஆய்வு செய்தல்...",
        pathology: "பூஞ்சை மற்றும் பாக்டீரியா தொற்றுகளை மதிப்பீடு செய்தல்...",
        prescribing: "இயற்கை மற்றும் வேதியியல் மருந்துகளை பரிந்துரைத்தல்..."
      },
      lowConfidenceTitle: "குறைந்த துல்லியம் எச்சரிக்கை",
      lowConfidenceMsg: "துல்லியம் 70% க்கும் குறைவாக உள்ளது. யூகிப்பதற்குப் பதிலாக சாத்தியமான தேர்வுகளை காட்டுகிறோம்.",
      nonPlantTitle: "பயிர் அல்லாத படம் கண்டறியப்பட்டது",
      nonPlantMsg: "இந்த படம் விவசாய இலை, பழம் அல்லது விதை இல்லை.",
      disclaimer: "ஏஐ பரிந்துரை மட்டுமே — தீவிர பாதிப்பிற்கு வேளாண் அதிகாரியை அணுகவும்.",
      verdictHealthy: "பயிர் ஆரோக்கியமாக உள்ளது ✅",
      verdictDiseased: "நோய் பாதிப்பு உள்ளது",
      treatNow: "மருந்து தெளிப்பு திட்டம்",
      buyMedicine: "பரிந்துரைக்கப்பட்ட மருந்து வாங்கு",
      askExpert: "விஞ்ஞானியிடம் ஆலோசனை பெறு",
      correctCrop: "பயிர் பெயரை திருத்து",
      wasCorrectPrompt: "இந்த நோய் கண்டறிதல் சரியானதா?",
      yesCorrect: "ஆம், சரியானது 👍",
      noIncorrect: "இல்லை, தவறானது 👎",
      feedbackSubmitted: "நன்றி! உங்கள் கருத்து விஞ்ஞானி பார்வைக்கு அனுப்பப்பட்டுள்ளது.",
      errorTitle: "பகுப்பாய்வு பிழை",
      retryBtn: "மீண்டும் முயற்சி செய்",
      configureKey: "ஜெமினி ஏபிஐ சாவி உள்ளிடுக",
      details: {
        objectType: "மாதிரி வகை",
        species: "கண்டறியப்பட்ட பயிர்",
        confidence: "துல்லிய நம்பிக்கை",
        alternatives: "பிற சாத்தியங்கள்",
        healthStatus: "ஆரோக்கிய நிலை",
        diseaseName: "நோய் / பூச்சியின் பெயர்",
        severity: "தீவிர நிலை",
        visualEvidence: "காட்சி சான்றுகள் (அடையாளங்கள்)",
        organicTx: "இயற்கை வழி மருத்துவம்",
        chemicalTx: "விஞ்ஞான முறை வேதியியல் மருந்து (மருந்தின் பெயர் & அளவு)",
        prevention: "நீண்ட கால தடுப்பு முறைகள்"
      }
    },
    catalog: {
      title: "விளைபொருட்கள், விதைகள் மற்றும் இயந்திரங்கள் சந்தை",
      subtitle: "புதிய காய்கறிகள், விதைகள், டிராக்டர்கள் மற்றும் உதிரிபாகங்கள் நேரடி விற்பனை",
      searchPlaceholder: "பயிர்கள், விதைகள், டிராக்டர்கள் அல்லது உதிரிபாகங்களை தேடவும்...",
      allCategory: "அனைத்து பிரிவுகளும்",
      produceCategory: "பழங்கள் & காய்கறிகள் (26)",
      seedsCategory: "சான்றளிக்கப்பட்ட விதைகள் (9)",
      machineryCategory: "இயந்திரங்கள் & டிராக்டர்கள் (6)",
      sparesCategory: "உதிரி பாகங்கள் (12)",
      sortBy: "வரிசைப்படுத்து",
      priceAsc: "விலை: குறைவு முதல் அதிகம்",
      priceDesc: "விலை: அதிகம் முதல் குறைவு",
      ratingDesc: "அதிக மதிப்பீடு",
      inStock: "இருப்பில் உள்ளது",
      addToCart: "கூடையில் சேர்",
      buyNow: "உடனே வாங்கு",
      requestQuote: "மொத்த விலை கேட்க",
      specsTitle: "தொழில்நுட்ப மற்றும் விவசாய விவரங்கள்",
      origin: "உற்பத்தி இடம்",
      cartTotal: "மொத்த தொகை",
      items: {
        mango: "அல்போன்சா மாம்பழம்",
        orange: "நாக்பூர் ஆரஞ்சு",
        apple: "காஷ்மீர் ஆப்பிள்",
        banana: "கேவண்டிஷ் வாழை",
        pomegranate: "மாதுளை",
        tomato: "இயற்கை தக்காளி",
        potato: "உருளைக்கிழங்கு",
        onion: "சிவப்பு வெங்காயம்",
        cauliflower: "காலிஃபிளவர்",
        chilli: "பச்சை மிளகாய்",
        brinjal: "கத்தரிக்காய்",
        spinach: "பசலைக்கீரை",
        guava: "கொய்யாப்பழம்",
        papaya: "பப்பாளி",
        lemon: "எலுமிச்சை",
        bitterGourd: "பாகற்காய்",
        bottleGourd: "சுரைக்காய்",
        cabbage: "முட்டைகோஸ்",
        carrot: "கேரட்",
        radish: "முள்ளங்கி",
        greenPeas: "பச்சை பட்டாணி",
        cucumber: "வெள்ளரிக்காய்",
        watermelon: "தர்பூசணி",
        muskmelon: "முலாம் பழம்",
        pineapple: "அன்னாசிப்பழம்",
        sweetLime: "சாத்துக்குடி",
        wheatSeed: "சான்றளிக்கப்பட்ட கோதுமை விதை (HD-2967)",
        riceSeed: "பாசுமதி நெல் விதை (பூசா-1121)",
        maizeSeed: "மக்காச்சோள விதை (PMH-1)",
        soybeanSeed: "சோயாபீன் விதை (JS-335)",
        mustardSeed: "கடுகு விதை (பூசா போல்ட்)",
        cottonSeed: "பருத்தி பி.டி விதை (BG-II)",
        greenGramSeed: "பாசிப்பயறு விதை (SML-668)",
        pearlMilletSeed: "கம்பு விதை (தனசக்தி)",
        groundnutSeed: "வேர்க்கடலை விதை (TG-37A)",
        mahindra575: "மஹிந்திரா 575 DI (50 HP)",
        sonalikaTiger: "சோனாலிகா டைகர் DI 75 (75 HP)",
        johnDeere5310: "ஜான் டீர் 5310 (55 HP)",
        swaraj744: "சுவராஜ் 744 FE (48 HP)",
        shaktimanRotavator: "சக்திமான் ரோட்டவேட்டர் (7 அடி)",
        farmtrac45: "பாம்க்ட்ராக் 45 (45 HP)",
        rotavatorBlades: "போரான் ஸ்டீல் ரோட்டவேட்டர் பிளேடுகள்",
        clutchPlate: "டிராக்டர் கிளட்ச் பிளேட் அசெம்பிளி",
        hydraulicFilter: "ஹைட்ராலிக் லிப்ட் பில்டர்",
        fuelInjectors: "டீசல் என்ஜின் பியூயல் இன்ஜெக்டர்",
        hosePipe: "வாட்டர் பம்ப் ஹோஸ் பைப்",
        steeringTieRod: "ஸ்டீயரிங் பாக்ஸ் டை ராட்",
        kingPin: "முன் அச்சு கிங் பின்",
        fuelLiftPump: "பியூயல் லிப்ட் பம்ப்",
        alternatorKit: "ஆல்டர்னேட்டர் டைனமோ கிட்",
        hydraulicSealKit: "ஹைட்ராலிக் வால்வ் சீல் கிட்",
        airCleanerFilter: "ஏர் கிளீனர் பில்டர்",
        pistonRingSet: "என்ஜின் பிஸ்டன் ரிங் செட்"
      }
    },
    chat: {
      title: "பயிர்பாதுகாப்பு ஏஐ விவசாய உதவியாளர்",
      subtitle: "கூகிள் ஜெமினி ஆதரவுடன்",
      placeholder: "பயிர் நோய், உரம், மண்டி விலை அல்லது டிராக்டர் பழுது பற்றி கேட்கவும்...",
      send: "அனுப்பு",
      clear: "அழித்திடு",
      typing: "ஜெமினி ஏஐ வேளாண் தகவல்களை ஆராய்கிறது...",
      suggestions: [
        "கோதுமை பயிருக்கு 30-ஆம் நாளில் என்ன உரம் இட வேண்டும்?",
        "சாம்பல் நோய்க்கு இயற்கை மருத்துவம் என்ன?",
        "சோனாலிகா மற்றும் மஹிந்திரா டிராக்டர் ஒப்பீடு",
        "இன்றைய பாசுமதி நெல்லின் மண்டி விலை என்ன?"
      ],
      attachPhoto: "இலை அல்லது மாதிரியின் படத்தை இணைக்கவும்",
      disclaimer: "பயிர்பாதுகாப்பு அதிகாரப்பூர்வ ஆலோசனை. தகவல் தெரியவில்லை எனில் ஜெமினி பொய்யாக கூறாமல் வெளிப்படையாக தெரிவிக்கும்."
    },
    common: {
      close: "மூடு",
      cancel: "ரத்து செய்",
      save: "சேமி",
      retry: "மீண்டும் செய்",
      back: "பின்னால்",
      loading: "ஏற்றப்படுகிறது...",
      success: "வெற்றி",
      error: "பிழை",
      escrowLocked: "வங்கி எஸ்க்ரோவில் உள்ளது",
      active: "செயலில்",
      pending: "நிலுவை",
      completed: "முடிந்தது"
    }
  },

  fr: {
    app: {
      name: "CropCare",
      tagline: "Des Terres Meilleures, un Avenir Plus Radieux",
      subTagline: "Du Sol au Succès",
      onlineStatus: "Réseau IoT Synchronisé",
      demoBadge: "Prêt pour Production v2.5"
    },
    auth: {
      title: "Bienvenue sur CropCare",
      subtitle: "Plateforme Agricole Intelligente de Classe Entreprise",
      nameLabel: "Votre Nom Complet",
      namePlaceholder: "ex. Jean Dupont",
      phoneLabel: "Numéro de Mobile / Identifiant Agricole",
      phonePlaceholder: "98765 43210",
      roleSelectLabel: "Sélectionnez Votre Rôle Opérationnel",
      demoQuickLogin: "Connexion Démo Rapide",
      submitLogin: "Accéder au Poste de Pilotage",
      verifying: "Vérification de l'Identité KYC...",
      securityNotice: "Authentification Biométrique & Sécurisée • Agréé APMC",
      roles: {
        farmer: {
          title: "Exploitant / Agriculteur",
          desc: "Planification des cultures, sondes d'humidité, diagnostic foliaire et vente directe."
        },
        buyer: {
          title: "Acheteur / Grossiste",
          desc: "Approvisionnement en gros, cours des marchés, contrats à terme et gestion du séquestre."
        },
        supplier: {
          title: "Fournisseur / Mécanicien",
          desc: "Gestion des stocks de matériel, dépannage sur le terrain et expédition de pièces détachées."
        },
        expert: {
          title: "Agronome / Spécialiste",
          desc: "Télémétrie NDVI, validation des diagnostics IA et diffusion des alertes régionales."
        }
      }
    },
    header: {
      overview: "Vue d'Ensemble",
      workflow: "Processus en 6 Étapes",
      pillars: "18 Piliers Majeurs",
      dashboard: "Poste de Pilotage",
      marketplace: "Catalogue & Pièces",
      scanner: "Docteur Foliaire IA",
      advisory: "Pôle Agronomie",
      modes: {
        easy: "Mode Simple",
        detailed: "Mode Détaillé",
        easyShort: "Simple",
        detailedShort: "Détaillé",
        easyDesc: "Langage direct, grandes cartes et boutons visuels",
        detailedDesc: "Télémétrie B2B, matrices capteurs et fiches techniques"
      },
      themes: {
        light: "Thème Clair",
        dark: "Thème Sombre OLED"
      },
      profile: {
        verified: "Membre Vérifié",
        signOut: "Se Déconnecter",
        settings: "Paramètres & Clé API",
        switchRole: "Changer de Rôle"
      },
      languageLabel: "Langue"
    },
    roles: {
      farmer: {
        badge: "Agriculteur Certifié • Qualité Bord-Champ #FG-8821",
        title: "Poste de Pilotage Exploitant",
        meta: "Ferme Raipur, Secteur A • 14,5 Hectares • Connecté LoRaWAN",
        status: "Score Financier: 810 (AAA)",
        editData: "Modifier les Données",
        syncProbes: "Synchroniser les Sondes",
        tabs: {
          overview: "Mes Cultures & Sols",
          mandi: "Cours des Marchés",
          weather: "Radar Pluie & Traitement",
          diagnostics: "Docteur Foliaire IA",
          bids: "Offres d'Achat Directes"
        },
        kpis: {
          land: "Surfaces Exploitées",
          landSub: "3 Parcelles Connectées LoRa",
          yield: "Rendement Estimé",
          yieldSub: "+18% par rapport à la moyenne",
          income: "Revenu Projeté",
          incomeSub: "▲ +28% de croissance annuelle",
          escrow: "Coffre Bancaire Séquestre",
          escrowSub: "Règlement T+0 Garanti"
        },
        actions: {
          triggerDrip: "Activer la Micro-Irrigation",
          directSell: "Vendre au Cours Comptant",
          acceptOffer: "Accepter l'Offre à Terme",
          orderKit: "Commander le Traitement",
          consultExpert: "Appeler l'Agronome"
        }
      },
      buyer: {
        badge: "Négociant Agréé • Séquestre Bancaire B2B #APMC-7749",
        title: "Terminal d'Achat B2B & Séquestre",
        meta: "AgroTrade Wholesale Corp • Licence Marché #DL-9082 • Pôle Delhi / Mumbai",
        status: "Fonds en Séquestre: ₹42,50,000",
        editData: "Modifier le Profil Acheteur",
        syncProbes: "Actualiser les Cours",
        tabs: {
          procurement: "Lots Disponibles en Gros",
          mandiTicker: "Cours Multi-Marchés",
          contracts: "Contrats Agriculteurs",
          logistics: "Flotte Frigorifique",
          escrow: "Coffre Séquestre"
        },
        kpis: {
          contracts: "Contrats d'Achat Actifs",
          contractsSub: "4 Régions Agricoles",
          volume: "Volume Approvisionné (MT)",
          volumeSub: "Blé, Riz Basmati & Mangues",
          escrow: "Séquestre Garanti",
          escrowSub: "100% Sécurisé en Banque",
          fleet: "Camions Frigo en Route",
          fleetSub: "Suivi GPS Connecté"
        },
        actions: {
          createTender: "Publier un Appel d'Offres",
          submitQuote: "Proposer une Contre-Offre",
          inspectLot: "Consulter la Fiche Qualité",
          lockSpot: "Bloquer l'Achat Comptant",
          newContract: "Nouveau Contrat à Terme",
          trackFleet: "Suivre la Flotte par GPS",
          depositVault: "Approvisionner le Séquestre"
        }
      },
      supplier: {
        badge: "Partenaire Constructeur Agréé • Mahindra, Sonalika & Shaktiman",
        title: "Hub Logistique Pièces & Assistance Terrain",
        meta: "Centre Machines Agricoles • Ludhiana • TVA: 03AABCK9921D",
        status: "Note Distributeur: 4.95 ★",
        editData: "Modifier les Infos Fournisseur",
        syncProbes: "Synchroniser les Stocks",
        tabs: {
          inventory: "Matériel & Pièces",
          serviceDispatch: "Interventions Mécaniques",
          orders: "Commandes Clients",
          supplyAnalytics: "Analyse des Ventes"
        },
        kpis: {
          skus: "Références Disponibles",
          skusSub: "98.4% Disponibilité Immédiate",
          dispatches: "Expéditions en Attente",
          dispatchesSub: "₹8,94,200 Valeur Facturée",
          mechanics: "Équipes Mécaniques Mobiles",
          mechanicsSub: "Délai Moyen: 38 min",
          turnover: "Chiffre d'Affaires Mensuel",
          turnoverSub: "▲ +34% sur Pièces Détachées"
        },
        actions: {
          dispatchMechanic: "Envoyer un Fourgon Atelier",
          resolveTicket: "Clôturer l'Intervention",
          callFarmer: "Contacter le Client",
          dispatchOrder: "Expédier avec Bordereau",
          addPart: "Ajouter une Référence",
          adjustStock: "Ajuster le Stock Tampon"
        }
      },
      expert: {
        badge: "Agronome Certifié ICAR • Conseil Phytosanitaire",
        title: "Télémétrie Pathologique & Aide à la Décision Agronomique",
        meta: "Agronome Référent • N° National #AGRO-9411 • Bassin Pendjab & Haryana",
        status: "Consultations Actives: 450+",
        editData: "Modifier le Profil Expert",
        syncProbes: "Actualiser les Capteurs",
        tabs: {
          telemetry: "Données Capteurs Parcellaires",
          triage: "Validation des Diagnostics IA",
          advisories: "Bulletins Techniques",
          soilHealth: "Indice de Santé des Sols"
        },
        kpis: {
          probes: "Sondes Parcellaires Actives",
          probesSub: "Sur 42 Bassins de Production",
          flags: "Alertes Sanitaires à Valider",
          flagsSub: "Cas de Rouille et Brûlure",
          advisories: "Bulletins Publiés",
          advisoriesSub: "12,400+ Exploitants Informés",
          soilScore: "Fertilité Moyenne des Sols",
          soilScoreSub: "Zone à Équilibre NPK Optimal"
        },
        actions: {
          signRx: "Valider l'Ordonnance Digitale",
          microscopy: "Examiner la Microscopie",
          broadcastAdvisory: "Diffuser une Alerte Régionale",
          exportTelemetry: "Exporter le Relevé Capteurs",
          reviewDiagnosis: "Approuver le Diagnostic",
          correctDiagnosis: "Corriger l'Espèce / Pathologie"
        }
      }
    },
    scanner: {
      badge: "Vision IA Multimodale Google Gemini",
      title: "Scanner Foliaire IA & Docteur des Plantes",
      subtitle: "Reconnaissance d'images haute précision pour feuilles, tiges, fruits et semences",
      cameraTab: "Caméra en Direct",
      uploadTab: "Téléverser une Image",
      startCamera: "Démarrer la Caméra",
      stopCamera: "Arrêter la Caméra",
      snapPhoto: "Prendre une Photo",
      retakePhoto: "Reprendre la Photo",
      dragPrompt: "Glissez-déposez la photo d'une feuille, d'un fruit ou d'une graine",
      supportPrompt: "Formats JPG, PNG, WebP jusqu'à 8 Mo. Redimensionné et compressé automatiquement.",
      analyzing: "Analyse du Spécimen Végétal en Cours...",
      analyzingSteps: {
        classifying: "Classification du type d'organe végétal...",
        morphology: "Identification botanique et nervation foliaire...",
        pathology: "Détection des marqueurs fongiques et bactériens...",
        prescribing: "Génération des prescriptions biologiques et chimiques..."
      },
      lowConfidenceTitle: "Indice de Confiance Faible",
      lowConfidenceMsg: "L'indice de confiance est inférieur à 70%. Nous présentons les hypothèses les plus probables sans affirmer un résultat incertain.",
      nonPlantTitle: "Objet Non Végétal Détecté",
      nonPlantMsg: "Cette photo ne correspond pas à un végétal ou une semence agricole.",
      disclaimer: "Résultat assisté par IA — consultez un agronome agréé pour les cas sévères.",
      verdictHealthy: "Spécimen Sain & Vigoureux ✅",
      verdictDiseased: "Pathologie Végétale Détectée",
      treatNow: "Appliquer le Protocole",
      buyMedicine: "Commander le Traitement",
      askExpert: "Transmettre à l'Agronome",
      correctCrop: "Corriger le Nom de la Culture",
      wasCorrectPrompt: "Ce diagnostic est-il exact ?",
      yesCorrect: "Oui, tout à fait exact 👍",
      noIncorrect: "Non, inexact 👎",
      feedbackSubmitted: "Merci ! Votre retour a été transmis à la file de validation des agronomes.",
      errorTitle: "Erreur lors de l'Analyse",
      retryBtn: "Réessayer l'Analyse",
      configureKey: "Configurer la Clé API Gemini",
      details: {
        objectType: "Type d'Organe",
        species: "Espèce Identifiée",
        confidence: "Niveau de Confiance",
        alternatives: "Candidats Alternatifs",
        healthStatus: "Bilan Sanitaire",
        diseaseName: "Nom de la Pathologie / Nuisible",
        severity: "Degré de Sévérité",
        visualEvidence: "Preuves Visuelles Morphologiques",
        organicTx: "Traitement Biologique & Naturel",
        chemicalTx: "Traitement Chimique Raisonné (Matière Active & Dosage)",
        prevention: "Recommandations Prophylactiques"
      }
    },
    catalog: {
      title: "Marché Agricole Vérifié & Pièces Détachées",
      subtitle: "Approvisionnement direct en fruits, légumes, semences certifiées, tracteurs et pièces OEM",
      searchPlaceholder: "Rechercher une culture, semence, tracteur ou pièce...",
      allCategory: "Toutes les Catégories",
      produceCategory: "Fruits & Légumes Frais (26)",
      seedsCategory: "Semences Certifiées (9)",
      machineryCategory: "Tracteurs & Machines (6)",
      sparesCategory: "Pièces Détachées Tracteurs (12)",
      sortBy: "Trier Par",
      priceAsc: "Prix : Croissant",
      priceDesc: "Prix : Décroissant",
      ratingDesc: "Meilleures Notes",
      inStock: "En Stock",
      addToCart: "Ajouter au Panier",
      buyNow: "Acheter Immédiatement",
      requestQuote: "Demander un Devis de Gros",
      specsTitle: "Spécifications Techniques & Agronomiques",
      origin: "Origine / Exploitation",
      cartTotal: "Total du Panier",
      items: {
        mango: "Mangue Alphonso",
        orange: "Orange de Nagpur",
        apple: "Pomme du Cachemire",
        banana: "Banane Cavendish",
        pomegranate: "Grenade Fraîche",
        tomato: "Tomate Biologique",
        potato: "Pomme de Terre Traditionnelle",
        onion: "Oignon Rouge",
        cauliflower: "Chou-Fleur",
        chilli: "Piment Vert",
        brinjal: "Aubergine Ronde",
        spinach: "Épinards Frais",
        guava: "Goyave d'Allahabad",
        papaya: "Papaye Red Lady",
        lemon: "Citron Kagzi",
        bitterGourd: "Margose (Courge Amère)",
        bottleGourd: "Calebassier (Lauki)",
        cabbage: "Chou Pommé",
        carrot: "Carotte Rouge Pusa",
        radish: "Radis Blanc",
        greenPeas: "Petits Pois de Shimla",
        cucumber: "Concombre Sous Serre",
        watermelon: "Pastèque Namdhari",
        muskmelon: "Melon Kundan",
        pineapple: "Ananas Géant Kew",
        sweetLime: "Lime Douce (Mosambi)",
        wheatSeed: "Semences de Blé Certifiées (HD-2967)",
        riceSeed: "Semences de Riz Basmati (Pusa-1121)",
        maizeSeed: "Semences de Maïs Hybride (PMH-1)",
        soybeanSeed: "Semences de Soja (JS-335)",
        mustardSeed: "Graines de Moutarde (Pusa Bold)",
        cottonSeed: "Semences de Coton Bt (BG-II)",
        greenGramSeed: "Graines de Haricot Mungo (SML-668)",
        pearlMilletSeed: "Graines de Millet Perlé (Dhanashakti)",
        groundnutSeed: "Semences d'Arachide (TG-37A)",
        mahindra575: "Mahindra 575 DI (50 CV)",
        sonalikaTiger: "Sonalika Tiger DI 75 (75 CV)",
        johnDeere5310: "John Deere 5310 (55 CV)",
        swaraj744: "Swaraj 744 FE (48 CV)",
        shaktimanRotavator: "Rotavator Shaktiman (Fraise Rotative 7ft)",
        farmtrac45: "Escorts Farmtrac 45 (45 CV)",
        rotavatorBlades: "Lames de Rotavator en Acier au Bore",
        clutchPlate: "Disque & Mécanisme d'Embrayage Tracteur",
        hydraulicFilter: "Filtres de Pompe de Relevage Hydraulique",
        fuelInjectors: "Injecteurs de Carburant Diesel",
        hosePipe: "Durites de Pompe à Eau Haute Résistance",
        steeringTieRod: "Rotule de Barre de Direction",
        kingPin: "Ensemble Pivot de Fusée Essieu Avant",
        fuelLiftPump: "Pompe d'Alimentation Carburant",
        alternatorKit: "Kit de Réparation Alternateur Dynamo",
        hydraulicSealKit: "Pochette de Joints Distributeur Hydraulique",
        airCleanerFilter: "Cartouche de Filtre à Air Primaire & Sécurité",
        pistonRingSet: "Jeu de Segments de Piston Moteur"
      }
    },
    chat: {
      title: "Assistant Agronome IA CropCare",
      subtitle: "Propulsé par Google Gemini",
      placeholder: "Posez vos questions sur les maladies, engrais, cours ou pannes mécaniques...",
      send: "Envoyer",
      clear: "Effacer la Conversation",
      typing: "L'IA Gemini analyse les données agronomiques...",
      suggestions: [
        "Quel engrais appliquer sur blé au 30ème jour ?",
        "Comment traiter l'oïdium de manière biologique ?",
        "Comparer Sonalika Tiger et Mahindra 575 au rotavator",
        "Quels sont les cours actuels du riz basmati ?"
      ],
      attachPhoto: "Joindre une photo de feuille / spécimen",
      disclaimer: "Conseil officiel CropCare. En cas de doute, l'IA indique son manque de données plutôt que d'inventer des faits."
    },
    common: {
      close: "Fermer",
      cancel: "Annuler",
      save: "Enregistrer",
      retry: "Réessayer",
      back: "Retour",
      loading: "Chargement...",
      success: "Succès",
      error: "Erreur",
      escrowLocked: "Sécurisé en Séquestre Bancaire",
      active: "Actif",
      pending: "En Attente",
      completed: "Terminé"
    }
  }
};
