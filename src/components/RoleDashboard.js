// Master Multi-Role Agriculture Dashboard Engine
// Dynamically renders customized cockpits for:
// 1. Farmer / Grower
// 2. Buyer / Wholesaler
// 3. Supplier / Mechanic
// 4. Agronomist / Expert
// Fully localized across English (en), Hindi (hi), Tamil (ta), and French (fr)

import { getFarmPlots, getWeatherForecast, getAiRecommendations, getDiagnosticSamples } from '../data/farmPlots.js';
import { getMandiCommodities, getBuyerBids } from '../data/mandiData.js';
import { translations } from '../data/translations.js';

export const roleDashboardTranslations = {
  en: {
    roles: {
      farmer: {
        badge: "Verified Kisan Member • Smart Farmgate Certified",
        title: "Farmer Operating Cockpit",
        meta: "Raipur Farm, Cluster A • 14.5 Acres • LoRaWAN Connected",
        statusPill: "Credit Score: 810 (AAA)",
        editBtn: "✏️ Edit Farm Data",
        syncBtn: "Sync IoT Probes",
        tabs: [
          { id: "overview", label: "My Crops & Soil", techLabel: "Farm Plots & Sensors", icon: "sprout" },
          { id: "mandi", label: "Today's Mandi Rates", techLabel: "Live APMC Spot Rates", icon: "line-chart" },
          { id: "weather", label: "Rain & Spray Radar", techLabel: "Meteorological Radar", icon: "cloud-sun" },
          { id: "diagnostics", label: "AI Disease Scanner", techLabel: "Crop Doctor Vision", icon: "bot" },
          { id: "bids", label: "Direct Buyer Offers", techLabel: "Forward Tender Room", icon: "handshake" }
        ],
        kpis: [
          { title: "Active Land Holdings", val: "14.5 Acres", sub: "3 Cultivated Plots • LoRa Probes", icon: "land-plot", color: "green" },
          { title: "Est. Season Yield", val: "242 Qtls", sub: "+18% above regional avg", icon: "wheat", color: "amber" },
          { title: "Projected Revenue", val: "₹13,00,100", sub: "▲ +28% YoY growth", icon: "circle-dollar-sign", color: "blue" },
          { title: "Escrow Bank Vault", val: "₹3,76,500", sub: "T+0 Instant Payout Locked", icon: "shield-check", color: "emerald" }
        ]
      },
      buyer: {
        badge: "Licensed Mandi Trader • B2B Escrow Verified #APMC-7749",
        title: "B2B Procurement & Escrow Trading Terminal",
        meta: "AgroTrade Wholesale Corp • Mandi License #DL-9082 • Delhi / Mumbai Hub",
        statusPill: "Escrow Capital: ₹42,50,000",
        editBtn: "✏️ Edit Trader Profile",
        syncBtn: "Refresh Market Feeds",
        tabs: [
          { id: "procurement", label: "Bulk Produce Lots", techLabel: "Bulk Procurement Desk", icon: "shopping-bag" },
          { id: "mandi_ticker", label: "Multi-Mandi Prices", techLabel: "Arbitrage & Spot Tickers", icon: "trending-up" },
          { id: "contracts", label: "Farmer Contracts", techLabel: "Forward Contracting", icon: "file-text" },
          { id: "logistics", label: "Cold-Chain Fleet", techLabel: "Reefer GPS Logistics", icon: "truck" },
          { id: "escrow", label: "Escrow Vault", techLabel: "Milestone Settlement", icon: "lock" }
        ],
        kpis: [
          { title: "Active Purchase Contracts", val: "18 Contracts", sub: "4 Agricultural States", icon: "file-text", color: "blue" },
          { title: "Procured Volume (MT)", val: "1,480 MT", sub: "Wheat, Basmati & Mangoes", icon: "package-check", color: "amber" },
          { title: "Active Escrow Capital", val: "₹42,50,000", sub: "100% Bank Guaranteed Vault", icon: "shield-check", color: "emerald" },
          { title: "Reefer Fleet In-Transit", val: "7 Trucks", sub: "Cold-Chain GPS Connected", icon: "truck", color: "purple" }
        ]
      },
      supplier: {
        badge: "OEM Authorized Partner • Mahindra, Sonalika & Shaktiman",
        title: "Machinery Inventory & Field Service Hub",
        meta: "Punjab Kisan Agri-Machinery Hub • Ludhiana Center • GSTIN: 03AABCK9921D",
        statusPill: "Dealer Rating: 4.95 ★",
        editBtn: "✏️ Edit Supplier Details",
        syncBtn: "Sync Inventory Levels",
        tabs: [
          { id: "inventory", label: "Machinery & Spares", techLabel: "OEM Spares Inventory", icon: "wrench" },
          { id: "service_dispatch", label: "Mechanic Visits", techLabel: "Field Service Dispatch", icon: "hard-hat" },
          { id: "orders", label: "Customer Orders", techLabel: "B2B Order Fulfillment", icon: "clipboard-list" },
          { id: "supply_analytics", label: "Sales & Demand", techLabel: "Consumption Analytics", icon: "bar-chart-2" }
        ],
        kpis: [
          { title: "Active Equipment SKUs", val: "142 SKUs", sub: "98.4% In-Stock Fulfillment", icon: "wrench", color: "amber" },
          { title: "Queued Dispatches", val: "26 Orders", sub: "₹8,94,200 Invoice Value", icon: "package", color: "blue" },
          { title: "Active Field Mechanics", val: "8 Vans En Route", sub: "Avg Response Time: 38 mins", icon: "hard-hat", color: "emerald" },
          { title: "Monthly Turnover", val: "₹24,80,000", sub: "▲ +34% MoM B2B Spares", icon: "trending-up", color: "purple" }
        ]
      },
      expert: {
        badge: "ICAR & PAU Certified Agronomist • Phytopathology Board",
        title: "Phytopathology Telemetry & Agronomy Decision Support",
        meta: "Senior Agronomist • National Agri ID #AGRO-9411 • Punjab & Haryana Agro-Climatic Zone",
        statusPill: "Consultations: 450+ Active",
        editBtn: "✏️ Edit Expert Profile",
        syncBtn: "Refresh Telemetry Probes",
        tabs: [
          { id: "telemetry", label: "Field Sensor Data", techLabel: "IoT Telemetry & NDVI", icon: "activity" },
          { id: "triage", label: "Leaf Doctor Reviews", techLabel: "AI Diagnostic Triage", icon: "microscope" },
          { id: "advisories", label: "Farmer Advisories", techLabel: "Advisory Publishing", icon: "radio" },
          { id: "soil_health", label: "Soil Health Index", techLabel: "NPK & Micronutrient Map", icon: "flask-conical" }
        ],
        kpis: [
          { title: "Monitored Telemetry Feeds", val: "1,840 Probes", sub: "Across 42 District Clusters", icon: "activity", color: "blue" },
          { title: "Pending Diagnostic Flags", val: "14 Alerts", sub: "Rust & Blight Scans Flagged", icon: "alert-triangle", color: "amber" },
          { title: "Published Advisories", val: "88 Protocols", sub: "12,400+ Farmers Reached", icon: "radio", color: "emerald" },
          { title: "Regional Soil Fertility", val: "78.4 / 100", sub: "Optimal NPK Balance Zone", icon: "flask-conical", color: "purple" }
        ]
      }
    }
  },

  hi: {
    roles: {
      farmer: {
        badge: "सत्यापित किसान सदस्य • स्मार्ट फार्मगेट प्रमाणित",
        title: "किसान परिचालन कॉकपिट",
        meta: "रायपुर फार्म, क्लस्टर ए • 14.5 एकड़ • लोरावान सेंसर कनेक्टेड",
        statusPill: "क्रेडिट स्कोर: 810 (AAA)",
        editBtn: "✏️ खेत डेटा बदलें",
        syncBtn: "सेंसर सिंक करें",
        tabs: [
          { id: "overview", label: "मेरी फसलें व मिट्टी", techLabel: "खेत प्लॉट व सेंसर", icon: "sprout" },
          { id: "mandi", label: "आज के मंडी भाव", techLabel: "लाइव एपीएमसी भाव", icon: "line-chart" },
          { id: "weather", label: "बारिश व स्प्रे रडार", techLabel: "मौसम पूर्वानुमान रडार", icon: "cloud-sun" },
          { id: "diagnostics", label: "AI फसल डॉक्टर", techLabel: "क्रॉप विजन डायग्नोस्टिक्स", icon: "bot" },
          { id: "bids", label: "खरीदारों के ऑफर", techLabel: "फॉरवर्ड टेंडर रूम", icon: "handshake" }
        ],
        kpis: [
          { title: "सक्रिय खेत जोत", val: "14.5 एकड़", sub: "3 खेती वाले प्लॉट • लाइव सेंसर", icon: "land-plot", color: "green" },
          { title: "अनुमानित कुल उपज", val: "242 क्विंटल", sub: "+18% क्षेत्रीय औसत से अधिक", icon: "wheat", color: "amber" },
          { title: "प्रक्षेपित फसल आय", val: "₹13,00,100", sub: "▲ +28% वार्षिक वृद्धि", icon: "circle-dollar-sign", color: "blue" },
          { title: "एस्क्रो बैंक तिजोरी", val: "₹3,76,500", sub: "T+0 तत्काल भुगतान सुरक्षित", icon: "shield-check", color: "emerald" }
        ]
      },
      buyer: {
        badge: "लाइसेंस प्राप्त मंडी व्यापारी • B2B एस्क्रो प्रमाणित #APMC-7749",
        title: "थोक खरीद एवं एस्क्रो व्यापार टर्मिनल",
        meta: "एग्रोट्रेड होलसेल कॉर्पोरेशन • मंडी लाइसेंस #DL-9082 • दिल्ली व मुंबई केंद्र",
        statusPill: "एस्क्रो पूँजी: ₹42,50,000",
        editBtn: "✏️ व्यापारी प्रोफ़ाइल बदलें",
        syncBtn: "मंडी भाव रीफ्रेश करें",
        tabs: [
          { id: "procurement", label: "थोक कृषि उपज लॉट", techLabel: "थोक खरीद डेस्क", icon: "shopping-bag" },
          { id: "mandi_ticker", label: "मल्टी-मंडी भाव", techLabel: "आर्बिट्रेज व स्पॉट टिकर", icon: "trending-up" },
          { id: "contracts", label: "किसान अनुबंध", techLabel: "सीधा फॉरवर्ड अनुबंध", icon: "file-text" },
          { id: "logistics", label: "कोल्ड-चेन ट्रक", techLabel: "रेफ्रिजरेटेड GPS लॉजिस्टिक्स", icon: "truck" },
          { id: "escrow", label: "एस्क्रो तिजोरी", techLabel: "माइलस्टोन भुगतान", icon: "lock" }
        ],
        kpis: [
          { title: "सक्रिय खरीद अनुबंध", val: "18 अनुबंध", sub: "4 प्रमुख उत्पादक राज्य", icon: "file-text", color: "blue" },
          { title: "खरीदी गई मात्रा (MT)", val: "1,480 टन", sub: "गेहूं, बासमती और आम", icon: "package-check", color: "amber" },
          { title: "सुरक्षित एस्क्रो राशि", val: "₹42,50,000", sub: "100% बैंक गारंटीकृत एस्क्रो", icon: "shield-check", color: "emerald" },
          { title: "मार्ग में कोल्ड-चेन ट्रक", val: "7 ट्रक", sub: "तापमान नियंत्रित जीपीएस", icon: "truck", color: "purple" }
        ]
      },
      supplier: {
        badge: "अधिकृत OEM पार्टनर • महिंद्रा, सोनालिका एवं शक्तिमान",
        title: "कृषि मशीनरी स्टॉक व फील्ड सर्विस हब",
        meta: "पंजाब किसान कृषि मशीनरी केंद्र • लुधियाना • जीएसटी: 03AABCK9921D",
        statusPill: "डीलर रेटिंग: 4.95 ★",
        editBtn: "✏️ आपूर्तिकर्ता विवरण बदलें",
        syncBtn: "स्टॉक सिंक करें",
        tabs: [
          { id: "inventory", label: "मशीनरी व स्पेयर पार्ट्स", techLabel: "ओईएम स्पेयर पार्ट्स स्टॉक", icon: "wrench" },
          { id: "service_dispatch", label: "मैकेनिक सर्विस", techLabel: "फील्ड ब्रेकडाउन सर्विस", icon: "hard-hat" },
          { id: "orders", label: "ग्राहक ऑर्डर", techLabel: "ऑर्डर पूर्ति व इनवॉइस", icon: "clipboard-list" },
          { id: "supply_analytics", label: "मांग व खपत रुझान", techLabel: "उपभोग विश्लेषण", icon: "bar-chart-2" }
        ],
        kpis: [
          { title: "सक्रिय उपकरण SKUs", val: "142 उत्पाद", sub: "98.4% रेडी-टू-डिस्पैच", icon: "wrench", color: "amber" },
          { title: "लंबित ऑर्डर डिस्पैच", val: "26 ऑर्डर", sub: "₹8,94,200 इनवॉइस मूल्य", icon: "package", color: "blue" },
          { title: "फील्ड मैकेनिक वैन", val: "8 वैन ऑन-रूट", sub: "औसत प्रतिक्रिया: 38 मिनट", icon: "hard-hat", color: "emerald" },
          { title: "मासिक आपूर्ति कारोबार", val: "₹24,80,000", sub: "▲ +34% मासिक वृद्धि", icon: "trending-up", color: "purple" }
        ]
      },
      expert: {
        badge: "ICAR एवं PAU प्रमाणित कृषि वैज्ञानिक • पौध संरक्षण बोर्ड",
        title: "पादप रोग टेलीमेट्री व कृषि वैज्ञानिक निर्णय केंद्र",
        meta: "वरिष्ठ कृषि वैज्ञानिक • राष्ट्रीय पहचान #AGRO-9411 • पंजाब व हरियाणा कृषि क्षेत्र",
        statusPill: "सक्रिय परामर्श: 450+ किसान",
        editBtn: "✏️ विशेषज्ञ प्रोफ़ाइल बदलें",
        syncBtn: "टेलीमेट्री सेंसर सिंक करें",
        tabs: [
          { id: "telemetry", label: "खेत सेंसर डेटा", techLabel: "IoT टेलीमेट्री व NDVI", icon: "activity" },
          { id: "triage", label: "रोग पर्ची सत्यापन", techLabel: "AI डायग्नोस्टिक ट्रायज", icon: "microscope" },
          { id: "advisories", label: "किसान परामर्श", techLabel: "क्षेत्रीय एडवाइजरी जारी करें", icon: "radio" },
          { id: "soil_health", label: "मृदा स्वास्थ्य सूचकांक", techLabel: "NPK व सूक्ष्म पोषक तत्व", icon: "flask-conical" }
        ],
        kpis: [
          { title: "सक्रिय टेलीमेट्री प्रोब", val: "1,840 सेंसर", sub: "42 जिला क्लस्टर से कनेक्टेड", icon: "activity", color: "blue" },
          { title: "समीक्षा हेतु रोग अलर्ट", val: "14 अलर्ट", sub: "रतुआ व झुलसा की पुष्टि लंबित", icon: "alert-triangle", color: "amber" },
          { title: "जारी की गई सलाहें", val: "88 प्रोटोकॉल", sub: "12,400+ किसानों तक पहुंच", icon: "radio", color: "emerald" },
          { title: "क्षेत्रीय मृदा उर्वरता", val: "78.4 / 100", sub: "संतुलित NPK पोषक तत्व क्षेत्र", icon: "flask-conical", color: "purple" }
        ]
      }
    }
  },

  ta: {
    roles: {
      farmer: {
        badge: "சான்றளிக்கப்பட்ட உழவர் • ஸ்மார்ட் பண்ணை அங்கீகாரம்",
        title: "உழவர் கட்டுப்பாட்டு மையம்",
        meta: "ராய்ப்பூர் பண்ணை, கிளஸ்டர் A • 14.5 ஏக்கர் • சென்சார் இணைக்கப்பட்டது",
        statusPill: "கிரெடிட் ஸ்கோர்: 810 (AAA)",
        editBtn: "✏️ பண்ணை தரவு திருத்து",
        syncBtn: "சென்சார்களை ஒத்திசை",
        tabs: [
          { id: "overview", label: "என் பயிர்கள் & மண்", techLabel: "பண்ணை நிலம் & சென்சார்", icon: "sprout" },
          { id: "mandi", label: "இன்றைய மண்டி விலை", techLabel: "நேரலை APMC சந்தை", icon: "line-chart" },
          { id: "weather", label: "மழை & மருந்து தெளிப்பு", techLabel: "வானிலை ரேடார்", icon: "cloud-sun" },
          { id: "diagnostics", label: "AI பயிர் மருத்துவர்", techLabel: "AI நோய் கண்டறிதல்", icon: "bot" },
          { id: "bids", label: "நேரடி கொள்முதல் ஏலம்", techLabel: "எஸ்க்ரோ டெண்டர் அறை", icon: "handshake" }
        ],
        kpis: [
          { title: "பயிரிடப்பட்ட நிலம்", val: "14.5 ஏக்கர்", sub: "3 நிலப்பிரிவுகள் • நேரலை சென்சார்", icon: "land-plot", color: "green" },
          { title: "எதிர்பார்க்கப்படும் மகசூல்", val: "242 குவிண்டால்", sub: "+18% பிராந்திய சராசரியை விட அதிகம்", icon: "wheat", color: "amber" },
          { title: "எதிர்பார்க்கப்படும் வருவாய்", val: "₹13,00,100", sub: "▲ +28% ஆண்டு வளர்ச்சி", icon: "circle-dollar-sign", color: "blue" },
          { title: "எஸ்க்ரோ வங்கி வைப்பு", val: "₹3,76,500", sub: "T+0 உடனடி வங்கி தீர்வு", icon: "shield-check", color: "emerald" }
        ]
      },
      buyer: {
        badge: "அங்கீகரிக்கப்பட்ட மண்டி வர்த்தகர் • B2B எஸ்க்ரோ சான்றிதழ் #APMC-7749",
        title: "மொத்த கொள்முதல் & எஸ்க்ரோ வர்த்தக மையம்",
        meta: "அக்ரோட்ரேட் ஹோல்சேல் கார்ப் • மண்டி உரிமம் #DL-9082 • டெல்லி / மும்பை மையம்",
        statusPill: "எஸ்க்ரோ இருப்பு: ₹42,50,000",
        editBtn: "✏️ வர்த்தகர் விவரம் திருத்து",
        syncBtn: "சந்தை விலை புதுப்பி",
        tabs: [
          { id: "procurement", label: "மொத்த விளைபொருட்கள்", techLabel: "மொத்த கொள்முதல் மேடை", icon: "shopping-bag" },
          { id: "mandi_ticker", label: "மண்டி நேரலை விலை", techLabel: "சந்தை ஒப்பீட்டு விலைகள்", icon: "trending-up" },
          { id: "contracts", label: "விவசாயி ஒப்பந்தங்கள்", techLabel: "நேரடி முன் ஒப்பந்தங்கள்", icon: "file-text" },
          { id: "logistics", label: "குளிர்சாதன லாரிகள்", techLabel: "GPS குளிர்பதன போக்குவரத்து", icon: "truck" },
          { id: "escrow", label: "எஸ்க்ரோ பெட்டகம்", techLabel: "மைல்கல் நிதி விடுவிப்பு", icon: "lock" }
        ],
        kpis: [
          { title: "செயலில் உள்ள ஒப்பந்தங்கள்", val: "18 ஒப்பந்தங்கள்", sub: "4 முக்கிய மாநிலங்கள்", icon: "file-text", color: "blue" },
          { title: "கொள்முதல் அளவு (MT)", val: "1,480 டன்", sub: "கோதுமை, பாஸ்மதி & மாம்பழம்", icon: "package-check", color: "amber" },
          { title: "பாதுகாப்பான எஸ்க்ரோ", val: "₹42,50,000", sub: "100% வங்கி உத்தரவாதம்", icon: "shield-check", color: "emerald" },
          { title: "வழியில் உள்ள லாரிகள்", val: "7 வாகனங்கள்", sub: "குளிர்பதன GPS கண்காணிப்பு", icon: "truck", color: "purple" }
        ]
      },
      supplier: {
        badge: "அங்கீகரிக்கப்பட்ட OEM கூட்டாளர் • மஹிந்திரா, சோனாலிகா & சக்திமான்",
        title: "இயந்திர உதிரிபாகங்கள் & சேவை மேலாண்மை மையம்",
        meta: "பஞ்சாப் கிசான் இயந்திர மையம் • லூதியானா • GST: 03AABCK9921D",
        statusPill: "டீலர் மதிப்பீடு: 4.95 ★",
        editBtn: "✏️ டீலர் சுயவிவரம் திருத்து",
        syncBtn: "இருப்பு நிலவரம் புதுப்பி",
        tabs: [
          { id: "inventory", label: "இயந்திரங்கள் & உதிரிபாகங்கள்", techLabel: "OEM பாகங்கள் இருப்பு", icon: "wrench" },
          { id: "service_dispatch", label: "மெக்கானிக் சேவை", techLabel: "கள பழுதுபார்ப்பு சேவை", icon: "hard-hat" },
          { id: "orders", label: "வாடிக்கையாளர் ஆர்டர்கள்", techLabel: "ஆர்டர் நிறைவேற்றுதல்", icon: "clipboard-list" },
          { id: "supply_analytics", label: "தேவை & நுகர்வு போக்கு", techLabel: "விற்பனை பகுப்பாய்வு", icon: "bar-chart-2" }
        ],
        kpis: [
          { title: "செயலில் உள்ள பாகங்கள்", val: "142 வகைகள்", sub: "98.4% உடனடி இருப்பு", icon: "wrench", color: "amber" },
          { title: "அனுப்ப வேண்டிய ஆர்டர்கள்", val: "26 ஆர்டர்கள்", sub: "மதிப்பு ₹8,94,200", icon: "package", color: "blue" },
          { title: "கள மெக்கானிக் வாகனங்கள்", val: "8 வாகனங்கள் வழியில்", sub: "சராசரி நேரம்: 38 நிமிடம்", icon: "hard-hat", color: "emerald" },
          { title: "மாதாந்திர விற்றுமுதல்", val: "₹24,80,000", sub: "▲ +34% மாதாந்திர உயர்வு", icon: "trending-up", color: "purple" }
        ]
      },
      expert: {
        badge: "ICAR & PAU சான்றளிக்கப்பட்ட வேளாண் விஞ்ஞானி",
        title: "பயிர் நோயியல் தொலைநிலை & முடிவெடுக்கும் மையம்",
        meta: "முதுநிலை வேளாண் விஞ்ஞானி • தேசிய அடையாளம் #AGRO-9411 • வட இந்திய வேளாண் மண்டலம்",
        statusPill: "ஆலோசனை: 450+ விவசாயிகள்",
        editBtn: "✏️ விஞ்ஞானி விவரம் திருத்து",
        syncBtn: "சென்சார் தகவல்களை புதுப்பி",
        tabs: [
          { id: "telemetry", label: "சென்சார் அளவீடுகள்", techLabel: "IoT தொலைநிலை & NDVI", icon: "activity" },
          { id: "triage", label: "நோய் அறிக்கை ஆய்வு", techLabel: "AI நோய் கண்டறிதல் சரிபார்ப்பு", icon: "microscope" },
          { id: "advisories", label: "விவசாயி ஆலோசனைகள்", techLabel: "பரிந்துரைகளை வெளியிடு", icon: "radio" },
          { id: "soil_health", label: "மண் ஆரோக்கிய குறியீடு", techLabel: "NPK & ஊட்டச்சத்து வரைபடம்", icon: "flask-conical" }
        ],
        kpis: [
          { title: "கண்காணிக்கப்படும் சென்சார்கள்", val: "1,840 கருவிகள்", sub: "42 மாவட்டங்களில் இயங்குகிறது", icon: "activity", color: "blue" },
          { title: "அவசர நோய் எச்சரிக்கைகள்", val: "14 வழக்குகள்", sub: "துரு & கருகல் ஆய்வு நிலுவை", icon: "alert-triangle", color: "amber" },
          { title: "வெளியிடப்பட்ட வழிகாட்டுதல்", val: "88 முறைகள்", sub: "12,400+ விவசாயிகள் பயன்", icon: "radio", color: "emerald" },
          { title: "மண் வளக் குறியீடு", val: "78.4 / 100", sub: "சீரான NPK ஊட்டச்சத்து மண்டலம்", icon: "flask-conical", color: "purple" }
        ]
      }
    }
  },

  fr: {
    roles: {
      farmer: {
        badge: "Exploitant Agricole Agréé • Certification Passerelle Bord-Champ",
        title: "Poste de Pilotage de l'Exploitant",
        meta: "Ferme Raipur, Secteur A • 14.5 Hectares • Connectivité LoRaWAN",
        statusPill: "Score Crédit: 810 (AAA)",
        editBtn: "✏️ Modifier Données Parcelle",
        syncBtn: "Synchroniser Sondes IoT",
        tabs: [
          { id: "overview", label: "Mes Cultures & Sols", techLabel: "Parcelles & Télémétrie", icon: "sprout" },
          { id: "mandi", label: "Cours du Jour", techLabel: "Cotations Marchés de Gros", icon: "line-chart" },
          { id: "weather", label: "Radar Pluie & Traitement", techLabel: "Météorologie Agricole", icon: "cloud-sun" },
          { id: "diagnostics", label: "Docteur des Plantes IA", techLabel: "Vision Pathologique IA", icon: "bot" },
          { id: "bids", label: "Offres Directes Acheteurs", techLabel: "Salle des Adjudications", icon: "handshake" }
        ],
        kpis: [
          { title: "Superficie Exploitée", val: "14.5 Ha", sub: "3 Parcelles en Culture • Sondes Live", icon: "land-plot", color: "green" },
          { title: "Rendement Estimé", val: "242 Qx", sub: "+18% au-dessus de la moyenne", icon: "wheat", color: "amber" },
          { title: "Revenu Prévisionnel", val: "13 00 100 ₹", sub: "▲ +28% de croissance annuelle", icon: "circle-dollar-sign", color: "blue" },
          { title: "Séquestre Bancaire Garanti", val: "3 76 500 ₹", sub: "Paiement T+0 Bloqué Sécurisé", icon: "shield-check", color: "emerald" }
        ]
      },
      buyer: {
        badge: "Négociant Agréé Marchés de Gros • Tiers de Confiance #APMC-7749",
        title: "Terminal de Négoce de Gros & Séquestre Bancaire",
        meta: "AgroTrade Wholesale Corp • Licence Négoce #DL-9082 • Plateforme Delhi / Mumbai",
        statusPill: "Fonds Séquestrés: 42 50 000 ₹",
        editBtn: "✏️ Modifier Profil Négociant",
        syncBtn: "Actualiser Cours & Offres",
        tabs: [
          { id: "procurement", label: "Lots Agricoles en Gros", techLabel: "Centrale d'Achat Récoltes", icon: "shopping-bag" },
          { id: "mandi_ticker", label: "Cotations Multi-Marchés", techLabel: "Arbitrage & Tickers Spot", icon: "trending-up" },
          { id: "contracts", label: "Contrats d'Approvisionnement", techLabel: "Contrats à Terme Bord-Champ", icon: "file-text" },
          { id: "logistics", label: "Flotte Frigorifique", techLabel: "Logistique Chaîne du Froid", icon: "truck" },
          { id: "escrow", label: "Séquestre Financier", techLabel: "Déblocage des Paliers T+0", icon: "lock" }
        ],
        kpis: [
          { title: "Contrats d'Achat Actifs", val: "18 Contrats", sub: "4 Grands Bassins Agricoles", icon: "file-text", color: "blue" },
          { title: "Volume Approvisionné (T)", val: "1 480 T", sub: "Blé Tendre, Basmati & Mangues", icon: "package-check", color: "amber" },
          { title: "Capital Sous Séquestre", val: "42 50 000 ₹", sub: "100% Garanti par Banque Partenaire", icon: "shield-check", color: "emerald" },
          { title: "Flotte Frigorifique en Route", val: "7 Camions", sub: "Suivi T°C & GPS Connecté", icon: "truck", color: "purple" }
        ]
      },
      supplier: {
        badge: "Partenaire Concessionnaire Agréé • Mahindra, Sonalika & Shaktiman",
        title: "Centre de Distribution Matériel & Pièces d'Origine",
        meta: "Punjab Kisan Agri-Machinery Hub • Centre Régional Ludhiana • TVA: 03AABCK9921D",
        statusPill: "Note Distributeur: 4.95 ★",
        editBtn: "✏️ Modifier Informations",
        syncBtn: "Synchroniser Stocks",
        tabs: [
          { id: "inventory", label: "Matériel & Pièces Détachées", techLabel: "Inventaire Pièces d'Origine", icon: "wrench" },
          { id: "service_dispatch", label: "Dépannage & Mécaniciens", techLabel: "Interventions Mécaniques", icon: "hard-hat" },
          { id: "orders", label: "Commandes Exploitants", techLabel: "Expéditions & Facturation", icon: "clipboard-list" },
          { id: "supply_analytics", label: "Analyse de la Demande", techLabel: "Consommation Pièces d'Usure", icon: "bar-chart-2" }
        ],
        kpis: [
          { title: "Références en Stock", val: "142 Pièces", sub: "Taux de Disponibilité 98.4%", icon: "wrench", color: "amber" },
          { title: "Expéditions en Attente", val: "26 Commandes", sub: "Valeur Facturée 8 94 200 ₹", icon: "package", color: "blue" },
          { title: "Ateliers Mobiles sur le Terrain", val: "8 Véhicules", sub: "Délai Moyen: 38 minutes", icon: "hard-hat", color: "emerald" },
          { title: "Chiffre d'Affaires Mensuel", val: "24 80 000 ₹", sub: "▲ +34% de progression mensuelle", icon: "trending-up", color: "purple" }
        ]
      },
      expert: {
        badge: "Agronome Agréé ICAR & PAU • Conseil Phytosanitaire National",
        title: "Télémétrie Phytosanitaire & Aide à la Décision Agronomique",
        meta: "Agronome Spécialiste • Immatriculation #AGRO-9411 • Zone Agro-Écologique Plaine du Gange",
        statusPill: "Exploitations Suivies: 450+",
        editBtn: "✏️ Modifier Profil Expert",
        syncBtn: "Actualiser Sondes Télémétriques",
        tabs: [
          { id: "telemetry", label: "Données Sondes & NDVI", techLabel: "Télémétrie IoT & Végétation", icon: "activity" },
          { id: "triage", label: "Validation Diagnostics IA", techLabel: "Triage & Signature Ordonnance", icon: "microscope" },
          { id: "advisories", label: "Bulletins d'Avertissement", techLabel: "Diffusion Bulletins Régionaux", icon: "radio" },
          { id: "soil_health", label: "Santé des Sols & NPK", techLabel: "Cartographie N-P-K & Oligos", icon: "flask-conical" }
        ],
        kpis: [
          { title: "Sondes Connectées Suivies", val: "1 840 Sondes", sub: "Réparties sur 42 Territoires", icon: "activity", color: "blue" },
          { title: "Alertes Maladies en Attente", val: "14 Alertes", sub: "Rouilles et Mildiou à Valider", icon: "alert-triangle", color: "amber" },
          { title: "Protocoles Publiés", val: "88 Protocoles", sub: "Diffusés à 12 400+ Exploitants", icon: "radio", color: "emerald" },
          { title: "Indice Fertilité des Sols", val: "78.4 / 100", sub: "Zone d'Équilibre NPK Optimale", icon: "flask-conical", color: "purple" }
        ]
      }
    }
  }
};

// Sub-component renderers for each role
export function renderRoleDashboard(
  activeTab = 'overview', 
  mandiSearch = '', 
  selectedDiagnosticSampleId = 'sample-wheat-rust', 
  currentLang = 'en', 
  understandingMode = 'easy',
  userName = '',
  userRole = 'farmer',
  customFarmData = null,
  customMandiData = null
) {
  const roleKey = ['farmer', 'buyer', 'supplier', 'expert'].includes(userRole) ? userRole : 'farmer';
  const rLang = roleDashboardTranslations[currentLang]?.roles[roleKey] || roleDashboardTranslations.en.roles[roleKey];
  const t = translations[currentLang] || translations.en;

  // Determine user initials
  const initials = userName
    ? userName.trim().split(/\s+/).map(p => p[0]).join('').slice(0, 2).toUpperCase()
    : (roleKey === 'buyer' ? 'BY' : roleKey === 'supplier' ? 'SU' : roleKey === 'expert' ? 'EX' : 'CC');

  const displayName = userName || (
    roleKey === 'farmer' ? (currentLang === 'hi' ? 'सरदार गुरप्रीत सिंह' : currentLang === 'ta' ? 'சர்தார் குர்பிரீத் சிங்' : currentLang === 'fr' ? 'Sardar Gurpreet Singh' : 'Sardar Gurpreet Singh') :
    roleKey === 'buyer' ? (currentLang === 'hi' ? 'राजेश के. मेहता (थोक व्यापारी)' : currentLang === 'ta' ? 'ராஜேஷ் கே. மேத்தா (மொத்த கொள்முதல்)' : currentLang === 'fr' ? 'Rajesh K. Mehta (Grossiste)' : 'Rajesh K. Mehta (Wholesale Buyer)') :
    roleKey === 'supplier' ? (currentLang === 'hi' ? 'विक्रमजीत शर्मा (मशीनरी डीलर)' : currentLang === 'ta' ? 'விக்ரம்ஜீத் சர்மா (டீலர்)' : currentLang === 'fr' ? 'Vikramjit Sharma (Distributeur)' : 'Vikramjit Sharma (Equipment Hub)') :
    (currentLang === 'hi' ? 'डॉ. अनन्या रॉय (वरिष्ठ पादप रोग विशेषज्ञ)' : currentLang === 'ta' ? 'டாக்டர் அனன்யா ராய் (வேளாண் விஞ்ஞானி)' : currentLang === 'fr' ? 'Dr. Ananya Roy (Phytopathologiste)' : 'Dr. Ananya Roy (Senior Phytopathologist)')
  );

  const displayMeta = customFarmData?.farmName || rLang.meta;

  // Validate activeTab for current role, default to first tab if invalid
  const validTabs = rLang.tabs.map(t => t.id);
  const currentTab = validTabs.includes(activeTab) ? activeTab : validTabs[0];

  return `
    <section class="section-padding dashboard-section" id="dashboard">
      <div class="container">
        <!-- Section Header -->
        <div class="section-head">
          <div class="badge-pill">
            <i data-lucide="sparkles" class="icon-xs" style="color: var(--primary-600);"></i>
            <span>${rLang.badge}</span>
          </div>
          <h2 class="section-title tracking-tight">${rLang.title}</h2>
          <p class="section-sub">
            ${understandingMode === 'easy' 
              ? (currentLang === 'hi' ? 'अपनी भूमिका के अनुसार लाइव आंकड़े देखें, सीधे कार्य करें और तुरंत सौदे निपटाएं।' : currentLang === 'ta' ? 'உங்கள் பங்கிற்கு ஏற்ப நேரலை தரவுகளை பார்க்கவும் மற்றும் உடனடி முடிவுகளை எடுக்கவும்.' : currentLang === 'fr' ? 'Consultez vos métriques en temps réel et déclenchez vos actions stratégiques en 1 clic.' : 'Access role-tailored real-time telemetry, execute operations, and complete transactions in one click.')
              : (currentLang === 'hi' ? 'एंटरप्राइज-ग्रेड रीयल-टाइम आर्किटेक्चर जो टेलीमेट्री, कॉन्ट्रैक्टिंग, सप्लाई-चेन और डायग्नोस्टिक्स को सिंक्रोनाइज़ करता है।' : currentLang === 'ta' ? 'தொழில்முறை B2B தொலைநிலை, விநியோகச் சங்கிலி மற்றும் ஆய்வறிக்கைகளை ஒருங்கிணைக்கும் கட்டுப்பாட்டு அறை.' : currentLang === 'fr' ? 'Architecture d\'entreprise synchronisant télémétrie parcellaires, contrats bord-champ, traçabilité logistique et sécurité financière T+0.' : 'Enterprise-grade operational console synchronizing real-time telemetry, forward contracts, supply logistics, and T+0 financial settlements.')
            }
          </p>
        </div>

        <!-- Dashboard Shell Wrapper -->
        <div class="dashboard-wrapper hover:-translate-y-1 transition-all duration-300 ease-in-out" id="dashboardWrapper">
          
          <!-- Top Profile Banner -->
          <div class="dash-topbar" style="background: linear-gradient(135deg, #1B4D3E 0%, #2E7D32 60%, #15803D 100%);">
            <div class="dash-user-profile">
              <div class="farmer-avatar" style="box-shadow: 0 4px 14px rgba(0,0,0,0.3);">${initials}</div>
              <div class="farmer-info">
                <h4 id="dashFarmerName" style="color: #FFFFFF; font-size: 1.25rem;">${displayName}</h4>
                <p id="dashFarmMeta" style="color: rgba(255, 255, 255, 0.85); font-size: 0.82rem;">${displayMeta}</p>
              </div>
            </div>

            <div class="dash-controls-right" style="display: flex; gap: 10px; align-items: center; flex-wrap: wrap;">
              <div class="badge-pill" style="background: rgba(255, 255, 255, 0.18); color: #FFFFFF; border-color: rgba(255, 255, 255, 0.35);">
                <i data-lucide="shield-check" class="icon-sm" style="color: #4ADE80;"></i>
                <span>${rLang.statusPill}</span>
              </div>

              <button class="btn btn-secondary btn-sm hover-scale" id="openEditFarmModalBtn" style="background: rgba(255, 255, 255, 0.2); color: #FFFFFF; border-color: rgba(255, 255, 255, 0.4); font-weight: 700; cursor: pointer;">
                <i data-lucide="edit-3" class="icon-sm"></i>
                <span>${rLang.editBtn}</span>
              </button>

              <button class="btn btn-secondary btn-sm" id="refreshDashboardBtn" style="background: rgba(255, 255, 255, 0.15); color: #FFFFFF; border-color: rgba(255, 255, 255, 0.3);">
                <i data-lucide="refresh-cw" class="icon-sm"></i>
                <span>${rLang.syncBtn}</span>
              </button>
            </div>
          </div>

          <!-- Dynamic Role Tab Bar -->
          <div class="dash-tab-bar" id="dashTabBar" role="tablist">
            ${rLang.tabs.map(tab => `
              <button 
                type="button"
                class="dash-tab transition-all duration-300 ease-in-out ${currentTab === tab.id ? 'active' : ''}" 
                data-tab="${tab.id}" 
                role="tab"
              >
                <i data-lucide="${tab.icon}" class="icon-sm"></i>
                <span>${understandingMode === 'easy' ? tab.label : tab.techLabel}</span>
              </button>
            `).join('')}
          </div>

          <!-- Dashboard Body -->
          <div class="dash-body">
            
            <!-- 4 Role-Specific KPI Cards -->
            <div class="dash-kpis-grid">
              ${rLang.kpis.map(kpi => {
                const bgMap = {
                  green: "var(--primary-50)",
                  amber: "#FFF8E1",
                  blue: "#E0F2FE",
                  emerald: "rgba(74, 222, 128, 0.15)",
                  purple: "#F3E8FF"
                };
                const colorMap = {
                  green: "var(--primary-700)",
                  amber: "#D97706",
                  blue: "#0284C7",
                  emerald: "#15803D",
                  purple: "#7E22CE"
                };
                return `
                  <div class="kpi-card hover-scale hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
                    <div class="kpi-icon-wrap" style="background: ${bgMap[kpi.color] || bgMap.green}; color: ${colorMap[kpi.color] || colorMap.green};">
                      <i data-lucide="${kpi.icon}" class="icon-md"></i>
                    </div>
                    <div class="kpi-meta">
                      <h5 class="tracking-wide">${kpi.title}</h5>
                      <div class="kpi-val tracking-tight">${kpi.val}</div>
                      <div class="kpi-change" style="color: ${colorMap[kpi.color] || colorMap.green};">${kpi.sub}</div>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>

            <!-- Tab Content Panel Renderers -->
            <div class="dash-tab-content-container" id="dashTabContent">
              ${renderRoleSpecificTabContent(roleKey, currentTab, currentLang, understandingMode, mandiSearch, selectedDiagnosticSampleId, customMandiData)}
            </div>

          </div>
        </div>
      </div>
    </section>
  `;
}

// Sub-renderers for each role's tabs
function renderRoleSpecificTabContent(role, tab, lang, mode, mandiSearch, selectedDiagnosticSampleId, customMandiData) {
  switch (role) {
    case 'buyer':
      return renderBuyerTabContent(tab, lang, mode, mandiSearch);
    case 'supplier':
      return renderSupplierTabContent(tab, lang, mode);
    case 'expert':
      return renderExpertTabContent(tab, lang, mode, selectedDiagnosticSampleId);
    case 'farmer':
    default:
      return renderFarmerTabContent(tab, lang, mode, mandiSearch, selectedDiagnosticSampleId, customMandiData);
  }
}

// -------------------------------------------------------------
// 1. BUYER TAB CONTENT
// -------------------------------------------------------------
function renderBuyerTabContent(tab, lang, mode, mandiSearch) {
  if (tab === 'procurement') {
    const lots = [
      { id: "lot-mango", name: "Alphonso Mango (Ratnagiri Export Grade)", qty: "350 Crates (4,200 Doz)", price: "₹1,180 / Crate", location: "Ratnagiri Mandi, Maharashtra", seller: "Konkan Mango Growers Co-op", brix: "18.2° Brix", status: "Verified Grade A" },
      { id: "lot-rice", name: "Basmati Rice Pusa-1121 (Aged 18 Mo)", qty: "800 Quintals (80 MT)", price: "₹4,450 / Qtl", location: "Karnal APMC, Haryana", seller: "Taraori Basmati FPO", brix: "Moisture 11.2%", status: "Export Certified" },
      { id: "lot-tomato", name: "Organic Red Tomato (Cold-Chain Washed)", qty: "450 Quintals (45 MT)", price: "₹1,950 / Qtl", location: "Nashik Cluster, Maharashtra", seller: "Godavari Veg Farmer Producer Co", brix: "Firm Red 95%", status: "Cold Pack Ready" },
      { id: "lot-apple", name: "Kashmiri Apples (Royal Delicious)", qty: "600 Boxes (14.4 MT)", price: "₹1,820 / Box", location: "Shopian Orchard Hub, J&K", seller: "Himalayan Apple Growers Guild", brix: "Grade AAA 16.5°", status: "Pre-Cooled" },
      { id: "lot-potato", name: "Desi Table Potato (Dry Matter 21%)", qty: "1,200 Quintals (120 MT)", price: "₹1,420 / Qtl", location: "Agra Mandi, Uttar Pradesh", seller: "Yamuna Agri Producers Society", brix: "CIPC Treated", status: "Cold Storage" },
      { id: "lot-wheat", name: "Certified Durum Wheat (Sharbati)", qty: "1,500 Quintals (150 MT)", price: "₹2,680 / Qtl", location: "Sehore APMC, Madhya Pradesh", seller: "Malwa Krishi Sangam", brix: "Hectolitre 82kg", status: "Zero Weevil" }
    ];

    return `
      <div class="dash-tab-pane active fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '📦 सीधे खेत से थोक खरीद लॉट' : lang === 'ta' ? '📦 பண்ணை நேரடி மொத்த கொள்முதல்' : lang === 'fr' ? '📦 Lots d\'Approvisionnement Bord-Champ' : '📦 Bulk Harvest Procurement Lots'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'सत्यापित किसान समूहों से सीधे थोक उपज खरीदें। 100% एस्क्रो सुरक्षा और गुणवत्ता प्रमाणन।' : lang === 'ta' ? 'சான்றளிக்கப்பட்ட விவசாயக் குழுக்களிடமிருந்து நேரடியாக வாங்குங்கள். முழு எஸ்க்ரோ பாதுகாப்பு.' : lang === 'fr' ? 'Approvisionnement direct auprès des coopératives certifiées avec garantie bancaire sous séquestre.' : 'Direct farmgate procurement from verified producer co-operatives with T+0 Escrow guarantee.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="createBuyerTenderBtn">
            <i data-lucide="plus-circle" class="icon-xs"></i>
            <span>${lang === 'hi' ? '➕ नया खरीद टेंडर जारी करें' : lang === 'ta' ? '➕ புதிய டெண்டர் வெளியிடு' : lang === 'fr' ? '➕ Publier un Nouvel Appel d\'Offre' : '➕ Create Purchase Tender'}</span>
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 18px;">
          ${lots.map(l => `
            <div class="buyer-lot-card hover-scale hover:shadow-lg transition-all duration-300" style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
              <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 10px;">
                <span class="badge-pill" style="font-size: 0.72rem; background: var(--primary-50); color: var(--primary-700); border-color: var(--primary-200);">
                  ${l.status}
                </span>
                <span style="font-size: 1.15rem; font-weight: 800; color: var(--primary-700);">${l.price}</span>
              </div>
              <h5 style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">${l.name}</h5>
              <div style="font-size: 0.8rem; color: var(--slate-600); margin-bottom: 4px;"><strong>${lang === 'hi' ? 'मात्रा:' : lang === 'ta' ? 'அளவு:' : lang === 'fr' ? 'Volume:' : 'Volume:'}</strong> ${l.qty} • ${l.brix}</div>
              <div style="font-size: 0.8rem; color: var(--slate-600); margin-bottom: 4px;"><strong>${lang === 'hi' ? 'स्थान:' : lang === 'ta' ? 'இடம்:' : lang === 'fr' ? 'Lieu:' : 'Location:'}</strong> ${l.location}</div>
              <div style="font-size: 0.78rem; color: var(--slate-500); margin-bottom: 14px;"><strong>${lang === 'hi' ? 'उत्पादक:' : lang === 'ta' ? 'உற்பத்தியாளர்:' : lang === 'fr' ? 'Producteur:' : 'Producer:'}</strong> ${l.seller}</div>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn btn-primary btn-sm hover-scale buyer-quote-btn" data-lot="${l.name}" data-price="${l.price}" style="flex: 1; font-weight: 700; font-size: 0.8rem;">
                  <i data-lucide="check" class="icon-nano"></i> ${lang === 'hi' ? 'लॉट बुक करें' : lang === 'ta' ? 'ஆர்டர் செய்' : lang === 'fr' ? 'Bloquer ce Lot' : 'Lock Lot & Order'}
                </button>
                <button type="button" class="btn btn-secondary btn-sm buyer-inspect-btn" data-lot="${l.name}" style="font-size: 0.8rem;">
                  <i data-lucide="eye" class="icon-nano"></i> ${lang === 'hi' ? 'QC रिपोर्ट' : lang === 'ta' ? 'QC ஆய்வு' : lang === 'fr' ? 'Rapport QC' : 'QC Report'}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (tab === 'mandi_ticker') {
    const tickers = [
      { crop: "Durum Wheat (Sharbati)", delhi: "₹2,680", mumbai: "₹2,790", indore: "₹2,420", nashik: "₹2,510", spread: "+₹370 / qtl", trend: "▲ Bullish" },
      { crop: "Basmati Rice (Pusa-1121)", delhi: "₹4,620", mumbai: "₹4,850", indore: "₹4,310", nashik: "₹4,490", spread: "+₹540 / qtl", trend: "▲ Bullish" },
      { crop: "Organic Red Tomato", delhi: "₹1,950", mumbai: "₹2,200", indore: "₹1,680", nashik: "₹1,550", spread: "+₹650 / qtl", trend: "▼ Softening" },
      { crop: "Mustard Seed (Pusa Bold)", delhi: "₹5,480", mumbai: "₹5,650", indore: "₹5,290", nashik: "₹5,380", spread: "+₹360 / qtl", trend: "▲ Firm" },
      { crop: "Alphonso Mango", delhi: "₹1,450", mumbai: "₹1,180", indore: "₹1,520", nashik: "₹1,380", spread: "+₹340 / crt", trend: "▲ High Demand" },
      { crop: "Soybean Seed (JS-335)", delhi: "₹4,890", mumbai: "₹5,120", indore: "₹4,750", nashik: "₹4,820", spread: "+₹370 / qtl", trend: "▲ Firm" }
    ];

    return `
      <div class="dash-tab-pane active fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '📈 मल्टी-मंडी आर्बिट्रेज व लाइव स्पॉट टिकर' : lang === 'ta' ? '📈 மல்டி-மண்டி சந்தை ஒப்பீடு' : lang === 'fr' ? '📈 Ticker des Cours Multi-Marchés & Arbitrage' : '📈 Multi-Mandi Arbitrage & Live Spot Ticker'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'चार प्रमुख कृषि केंद्रों के बीच रीयल-टाइम कीमतों की तुलना करें और अधिकतम मुनाफे के साथ खरीद योजना बनाएं।' : lang === 'ta' ? 'முக்கிய நகர சந்தைகளுக்கு இடையிலான விலைகளை ஒப்பிட்டு சிறந்த லாபத்தை ஈட்டுங்கள்.' : lang === 'fr' ? 'Comparez les écarts de cotations entre les 4 principales places de marché pour arbitrer vos ordres.' : 'Compare real-time price spreads across 4 major terminal hubs to optimize wholesale procurement margins.'}
          </p>
        </div>

        <div class="table-responsive" style="border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); overflow: hidden;">
          <table class="table" style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead style="background: var(--bg-card); border-bottom: 2px solid var(--border-light);">
              <tr>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">${lang === 'hi' ? 'फसल / जिंस' : lang === 'ta' ? 'விளைபொருள்' : lang === 'fr' ? 'Denrée' : 'Commodity'}</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">Delhi Azadpur</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">Mumbai Vashi</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">Indore APMC</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">Nashik APMC</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">${lang === 'hi' ? 'आर्बिट्रेज स्प्रेड' : lang === 'ta' ? 'விலை வித்தியாசம்' : lang === 'fr' ? 'Écart d\'Arbitrage' : 'Max Spread'}</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800; color: var(--slate-800);">${lang === 'hi' ? 'कार्रवाई' : lang === 'ta' ? 'செயல்' : lang === 'fr' ? 'Action' : 'Action'}</th>
              </tr>
            </thead>
            <tbody>
              ${tickers.map(t => `
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--bg-page);">
                  <td style="padding: 12px 16px; font-weight: 700; color: var(--slate-900); font-size: 0.88rem;">${t.crop}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: var(--primary-700);">${t.delhi}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: var(--primary-700);">${t.mumbai}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: var(--slate-700);">${t.indore}</td>
                  <td style="padding: 12px 16px; font-weight: 600; color: var(--slate-700);">${t.nashik}</td>
                  <td style="padding: 12px 16px; font-weight: 800; color: #16A34A;">${t.spread}</td>
                  <td style="padding: 12px 16px;">
                    <button type="button" class="btn btn-primary btn-xs hover-scale buyer-lock-spot-btn" data-crop="${t.crop}">
                      ${lang === 'hi' ? 'स्पॉट रेट लॉक करें' : lang === 'ta' ? 'விலை உறுதி செய்' : lang === 'fr' ? 'Fixer le Cours' : 'Lock Spot Rate'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (tab === 'contracts') {
    return `
      <div class="dash-tab-pane active fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '📝 सीधे किसान फॉरवर्ड अनुबंध व आपूर्ति समझौते' : lang === 'ta' ? '📝 நேரடி விவசாயி ஒப்பந்தங்கள்' : lang === 'fr' ? '📝 Contrats à Terme Directs avec les Exploitants' : '📝 Direct-to-Farmer Forward Supply Contracts'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'उत्पादक किसान संघों के साथ अग्रिम मूल्य निर्धारण, फसल कटाई की तारीखें और एस्क्रो सुरक्षा।' : lang === 'ta' ? 'முன் ஒப்பந்தங்கள், அறுவடை தேதிகள் மற்றும் உத்தரவாத எஸ்க்ரோ கட்டணங்கள்.' : lang === 'fr' ? 'Sécurisez vos récoltes futures avec prix garanti et séquestre bancaire T+0.' : 'Bilateral forward purchase agreements locking volume and pricing with grower FPOs.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="newContractBtn">
            <i data-lucide="plus" class="icon-xs"></i>
            <span>${lang === 'hi' ? 'नया अनुबंध बनाएं' : lang === 'ta' ? 'புதிய ஒப்பந்தம்' : lang === 'fr' ? 'Rédiger Contrat' : 'New Contract'}</span>
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div class="contract-strip" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: var(--primary-600); text-transform: uppercase;">CTR-2026-8812 • Verified FPO</div>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">Karnal Golden Basmati Syndicate • 1,200 Quintals Pusa-1121</div>
              <div style="font-size: 0.82rem; color: var(--slate-600); margin-top: 4px;">Harvest Window: Oct 15-28 • Locked Rate: ₹4,480/qtl • Escrow Vault: ₹53,76,000 (100% Funded)</div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="badge-pill" style="background: #DCFCE7; color: #166534;">✓ QC Stage 2 Passed</span>
              <button type="button" class="btn btn-secondary btn-sm buyer-contract-view-btn" data-id="CTR-2026-8812">
                ${lang === 'hi' ? 'दस्तावेज़ देखें' : lang === 'ta' ? 'விவரம்' : lang === 'fr' ? 'Détails' : 'View Terms'}
              </button>
            </div>
          </div>

          <div class="contract-strip" style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: var(--primary-600); text-transform: uppercase;">CTR-2026-9044 • Active Harvest</div>
              <div style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">Ratnagiri Alphonso Council • 500 Crates Export Grade Alphonso</div>
              <div style="font-size: 0.82rem; color: var(--slate-600); margin-top: 4px;">Harvest Window: Immediate Dispatch • Locked Rate: ₹1,180/crate • Escrow Vault: ₹5,90,000</div>
            </div>
            <div style="display: flex; gap: 8px; align-items: center;">
              <span class="badge-pill" style="background: #FEF3C7; color: #B45309;">🚚 In-Transit Loading</span>
              <button type="button" class="btn btn-secondary btn-sm buyer-contract-view-btn" data-id="CTR-2026-9044">
                ${lang === 'hi' ? 'दस्तावेज़ देखें' : lang === 'ta' ? 'விவரம்' : lang === 'fr' ? 'Détails' : 'View Terms'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  if (tab === 'logistics') {
    return `
      <div class="dash-tab-pane active fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '🚚 कोल्ड-चेन फ्लीट एवं जीपीएस लाइव ट्रैकिंग' : lang === 'ta' ? '🚚 குளிர்பதன லாரி GPS கண்காணிப்பு' : lang === 'fr' ? '🚚 Flotte Frigorifique Connectée & Télématique GPS' : '🚚 Cold-Chain Reefer Logistics & Fleet Tracker'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'तापमान नियंत्रण, वाहन स्थान और खेत से गोदाम तक डिलीवरी की ताज़ा स्थिति।' : lang === 'ta' ? 'வாகன வெப்பநிலை மற்றும் விநியோக நேர நேரலை கண்காணிப்பு.' : lang === 'fr' ? 'Surveillance continue des températures intérieures et géolocalisation des camions en temps réel.' : 'Active temperature logs and ETA telemetry for refrigerated farmgate transit.'}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 800; color: var(--slate-900);">Truck #HR-55-E-8821</span>
              <span class="badge-pill" style="background: #DCFCE7; color: #166534;">🟢 On Schedule</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;"><strong>Cargo:</strong> Durum Wheat (40 MT)</div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;"><strong>Route:</strong> Sehore Mandi ➔ Delhi Azadpur</div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;"><strong>Temp:</strong> 18.2°C • <strong>ETA:</strong> 3 hrs 40 mins</div>
            <div style="background: var(--bg-page); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 72%; height: 100%; background: #22C55E;"></div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm hover-scale buyer-track-btn" style="width: 100%;">
              <i data-lucide="navigation" class="icon-xs"></i> ${lang === 'hi' ? 'लाइव जीपीएस देखें' : lang === 'ta' ? 'GPS வரைபடம்' : lang === 'fr' ? 'Ouvrir Télématique' : 'View GPS Map'}
            </button>
          </div>

          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span style="font-weight: 800; color: var(--slate-900);">Reefer #MH-12-Q-4490</span>
              <span class="badge-pill" style="background: #E0F2FE; color: #0284C7;">❄️ Cold-Chain Active</span>
            </div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;"><strong>Cargo:</strong> Alphonso Mangoes (350 Crates)</div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;"><strong>Route:</strong> Ratnagiri ➔ Mumbai Vashi Port</div>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;"><strong>Temp:</strong> 8.5°C (Optimal) • <strong>ETA:</strong> 1 hr 15 mins</div>
            <div style="background: var(--bg-page); height: 8px; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
              <div style="width: 88%; height: 100%; background: #0284C7;"></div>
            </div>
            <button type="button" class="btn btn-secondary btn-sm hover-scale buyer-track-btn" style="width: 100%;">
              <i data-lucide="thermometer" class="icon-xs"></i> ${lang === 'hi' ? 'तापमान लॉग जांचें' : lang === 'ta' ? 'வெப்பநிலை பதிவு' : lang === 'fr' ? 'Télécharger Courbe T°C' : 'Audit Temp Log'}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  // Escrow tab
  return `
    <div class="dash-tab-pane active fade-in">
      <div style="background: linear-gradient(135deg, rgba(46, 125, 50, 0.1) 0%, rgba(74, 222, 128, 0.1) 100%); border: 1.5px solid var(--border-light); border-radius: var(--radius-xl); padding: 24px; margin-bottom: 20px;">
        <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
          <div>
            <span class="badge-pill" style="background: #DCFCE7; color: #166534; font-size: 0.72rem;">
              <i data-lucide="shield-check" class="icon-nano"></i> 100% RBI & e-NAM Regulated
            </span>
            <h4 style="font-size: 1.4rem; color: var(--slate-900); font-weight: 800; margin-top: 6px;">
              ${lang === 'hi' ? 'सुरक्षित बैंक एस्क्रो तिजोरी' : lang === 'ta' ? 'பாதுகாக்கப்பட்ட எஸ்க்ரோ வங்கி கணக்கு' : lang === 'fr' ? 'Coffre-Fort de Séquestre Bancaire Réglementé' : 'Protected B2B Escrow Capital Vault'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'खरीदार की जमा राशि तब तक सुरक्षित रहती है जब तक कि खेत पर गुणवत्ता और वजन का सत्यापन नहीं हो जाता।' : lang === 'ta' ? 'தரம் மற்றும் எடை சரிபார்க்கப்படும் வரை உங்கள் நிதி பாதுகாப்பாக இருக்கும்.' : lang === 'fr' ? 'Les fonds demeurent séquestrés et ne sont débloqués qu\'après inspection de pesée et de qualité au pont-bascule.' : 'Capital is locked upon contract award and disbursed to farmer bank accounts only after weighbridge QC verification.'}
            </p>
          </div>
          <div style="text-align: right;">
            <div style="font-size: 0.8rem; color: var(--slate-600); font-weight: 700;">${lang === 'hi' ? 'कुल एस्क्रो शेष:' : lang === 'ta' ? 'மொத்த இருப்பு:' : lang === 'fr' ? 'Solde Dépositaire:' : 'Total Locked Balance:'}</div>
            <div style="font-size: 1.8rem; font-weight: 900; color: var(--primary-700);">₹42,50,000</div>
            <button type="button" class="btn btn-primary btn-sm hover-scale" id="depositEscrowBtn" style="margin-top: 6px;">
              <i data-lucide="plus" class="icon-nano"></i> ${lang === 'hi' ? 'पूँजी जमा करें' : lang === 'ta' ? 'நிதி சேர்க்க' : lang === 'fr' ? 'Approvisionner' : 'Add Escrow Funds'}
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 2. SUPPLIER TAB CONTENT
// -------------------------------------------------------------
function renderSupplierTabContent(tab, lang, mode) {
  if (tab === 'service_dispatch') {
    const serviceTickets = [
      { id: "SR-104", issue: "Hydraulic Lift Pump Failure", equipment: "Mahindra 575 DI (50 HP)", farmer: "Sardar Baljit Singh", farm: "Amritsar Belt", mechanic: "Gurmeet Sharma (Mobile Unit 3)", eta: "35 mins", status: "En Route" },
      { id: "SR-105", issue: "Rotavator Blade Replacement (7ft)", equipment: "Shaktiman Rotary Tiller", farmer: "Rameshwar Patel", farm: "Indore Sub-cluster", mechanic: "Mohan Lal (Unit 1)", eta: "1 hr 10 mins", status: "Assigned" },
      { id: "SR-106", issue: "Fuel Injector Nozzle Calibration", equipment: "John Deere 5310 (55 HP)", farmer: "Manpreet Kaur", farm: "Ludhiana Farm Cluster", mechanic: "Agri-Express Spares Dispatched", eta: "Same-Day", status: "Parts Shipped" }
    ];

    return `
      <div class="dash-tab-pane active fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '🔧 फील्ड मशीनरी ब्रेकडाउन एवं मोबाइल मैकेनिक डिस्पैच' : lang === 'ta' ? '🔧 கள இயந்திர பழுதுபார்ப்பு & மெக்கானிக் சேவை' : lang === 'fr' ? '🔧 Dépannage Matériel & Déploiement Ateliers Mobiles' : '🔧 Farm Machinery Breakdown & Service Dispatch'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'किसानों के ट्रैक्टर और उपकरणों की खराबी का तत्काल निवारण। मोबाइल मैकेनिक वैन सीधे खेत पर पहुंचती हैं।' : lang === 'ta' ? 'டிராக்டர்கள் மற்றும் உபகரணங்களுக்கான விரைவான பழுதுபார்ப்பு சேவை.' : lang === 'fr' ? 'Gestion des appels d\'urgence et affectation des mécaniciens sur site pour tracteurs et rotavators.' : 'Urgent breakdown tickets logged by growers with real-time field mechanic dispatch.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="dispatchNewMechanicBtn">
            <i data-lucide="truck" class="icon-xs"></i>
            <span>${lang === 'hi' ? '➕ नया मैकेनिक डिस्पैच करें' : lang === 'ta' ? '➕ புதிய மெக்கானிக் அனுப்பு' : lang === 'fr' ? '➕ Dépêcher un Véhicule' : '➕ Dispatch Service Van'}</span>
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${serviceTickets.map(st => `
            <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                  <span class="badge-pill" style="font-size: 0.72rem; background: #FEF3C7; color: #B45309;">${st.id}</span>
                  <span style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">${st.issue}</span>
                </div>
                <div style="font-size: 0.85rem; color: var(--slate-700); margin-bottom: 4px;"><strong>${lang === 'hi' ? 'उपकरण:' : lang === 'ta' ? 'இயந்திரம்:' : lang === 'fr' ? 'Machine:' : 'Equipment:'}</strong> ${st.equipment} • <strong>${lang === 'hi' ? 'किसान:' : lang === 'ta' ? 'விவசாயி:' : lang === 'fr' ? 'Client:' : 'Grower:'}</strong> ${st.farmer} (${st.farm})</div>
                <div style="font-size: 0.8rem; color: var(--slate-500);"><strong>${lang === 'hi' ? 'मैकेनिक:' : lang === 'ta' ? 'மெக்கானிக்:' : lang === 'fr' ? 'Intervenant:' : 'Mechanic:'}</strong> ${st.mechanic} • <strong>ETA:</strong> ${st.eta}</div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn btn-primary btn-sm hover-scale supplier-resolve-btn" data-ticket="${st.id}">
                  <i data-lucide="check-circle" class="icon-nano"></i> ${lang === 'hi' ? 'सेवा पूर्ण चिह्नित करें' : lang === 'ta' ? 'முடிந்தது' : lang === 'fr' ? 'Clôturer Ticket' : 'Mark Completed'}
                </button>
                <button type="button" class="btn btn-secondary btn-sm supplier-call-btn" data-farmer="${st.farmer}">
                  <i data-lucide="phone" class="icon-nano"></i> ${lang === 'hi' ? 'कॉल करें' : lang === 'ta' ? 'அழைக்க' : lang === 'fr' ? 'Appeler' : 'Call'}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (tab === 'orders') {
    return `
      <div class="dash-tab-pane active fade-in">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '📦 किसान व एफपीओ स्पेयर पार्ट्स ऑर्डर पूर्ति' : lang === 'ta' ? '📦 உதிரிபாகங்கள் ஆர்டர்கள்' : lang === 'fr' ? '📦 Expéditions & Commandes Pièces Détachées' : '📦 Spare Parts & Machinery Order Fulfillment'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'मूल ओईएम वारंटी प्रमाण पत्र और जीएसटी बिलिंग के साथ ऑर्डर सत्यापित करें।' : lang === 'ta' ? 'சான்றளிக்கப்பட்ட உதிரிபாகங்கள் பில்லிங் மற்றும் உத்தரவாதம்.' : lang === 'fr' ? 'Traitement des commandes avec certificats de garantie constructeur et livraison express.' : 'Verify payments, issue genuine warranty certificates, and confirm dispatches.'}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
            <div>
              <div style="font-size: 0.75rem; font-weight: 800; color: var(--primary-600);">ORD-9912 • PAID VIA ESCROW</div>
              <div style="font-size: 1rem; font-weight: 800; color: var(--slate-900);">48x Boron Steel Rotavator Blades + 4x Oil Filter Kits</div>
              <div style="font-size: 0.82rem; color: var(--slate-600);">Customer: Moga Cooperative Farming Society • Total: ₹26,400</div>
            </div>
            <div style="display: flex; gap: 8px;">
              <button type="button" class="btn btn-primary btn-sm supplier-dispatch-btn" data-order="ORD-9912">
                <i data-lucide="package-check" class="icon-nano"></i> ${lang === 'hi' ? 'डिस्पैच पुष्टि करें' : lang === 'ta' ? 'அனுப்பப்பட்டது' : lang === 'fr' ? 'Expédier' : 'Confirm Dispatch'}
              </button>
              <button type="button" class="btn btn-secondary btn-sm">
                <i data-lucide="printer" class="icon-nano"></i> ${lang === 'hi' ? 'वारंटी बिल' : lang === 'ta' ? 'ரசீது' : lang === 'fr' ? 'Facture' : 'Print Invoice'}
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Inventory tab
  return `
    <div class="dash-tab-pane active fade-in">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '🚜 कृषि मशीनरी व प्रमाणित स्पेयर पार्ट्स स्टॉक प्रबंधन' : lang === 'ta' ? '🚜 இயந்திரங்கள் & உதிரிபாகங்கள் இருப்பு' : lang === 'fr' ? '🚜 Gestion des Stocks Matériel & Pièces d\'Origine OEM' : '🚜 Machinery & Spare Parts Inventory Management'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'स्टॉक स्तर, मूल्य और नए पार्ट्स जोड़ने की पूरी सुविधा।' : lang === 'ta' ? 'விலை மற்றும் இருப்பு நிலவரங்களை எளிதாக திருத்துங்கள்.' : lang === 'fr' ? 'Mise à jour en temps réel des pièces en magasin, alertes de réapprovisionnement et tarification.' : 'Live inventory levels, price overrides, and SKU additions with OEM tracking.'}
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm hover-scale" id="supplierAddPartBtn">
          <i data-lucide="plus" class="icon-xs"></i>
          <span>${lang === 'hi' ? '➕ नया स्पेयर / मशीनरी जोड़ें' : lang === 'ta' ? '➕ புதிய பாகம் சேர்க்க' : lang === 'fr' ? '➕ Ajouter Référence' : '➕ Add Equipment / Spare'}</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span class="badge-pill" style="background: #DCFCE7; color: #166534; font-size: 0.7rem;">In Stock (840 Units)</span>
            <span style="font-weight: 800; color: var(--primary-700);">₹480 / Pc</span>
          </div>
          <h5 style="font-size: 1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Heavy-Duty Boron Steel Blades</h5>
          <div style="font-size: 0.8rem; color: var(--slate-600); margin-bottom: 12px;">Fitment: Shaktiman, Fieldking, Maschio Rotavators</div>
          <button type="button" class="btn btn-secondary btn-sm hover-scale supplier-edit-stock-btn" style="width: 100%;">
            ✏️ ${lang === 'hi' ? 'स्टॉक व कीमत बदलें' : lang === 'ta' ? 'இருப்பு திருத்து' : lang === 'fr' ? 'Ajuster Stock' : 'Update Stock & Price'}
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span class="badge-pill" style="background: #DCFCE7; color: #166534; font-size: 0.7rem;">In Stock (42 Units)</span>
            <span style="font-weight: 800; color: var(--primary-700);">₹4,850 / Set</span>
          </div>
          <h5 style="font-size: 1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Tractor Clutch Plate Assembly</h5>
          <div style="font-size: 0.8rem; color: var(--slate-600); margin-bottom: 12px;">Fitment: Mahindra 575 DI, Swaraj 744 FE</div>
          <button type="button" class="btn btn-secondary btn-sm hover-scale supplier-edit-stock-btn" style="width: 100%;">
            ✏️ ${lang === 'hi' ? 'स्टॉक व कीमत बदलें' : lang === 'ta' ? 'இருப்பு திருத்து' : lang === 'fr' ? 'Ajuster Stock' : 'Update Stock & Price'}
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 16px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 8px;">
            <span class="badge-pill" style="background: #FEF3C7; color: #B45309; font-size: 0.7rem;">Showroom (3 Tractors)</span>
            <span style="font-weight: 800; color: var(--primary-700);">₹6,80,000</span>
          </div>
          <h5 style="font-size: 1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 6px;">Mahindra 575 DI (50 HP)</h5>
          <div style="font-size: 0.8rem; color: var(--slate-600); margin-bottom: 12px;">Full OEM Warranty • Subsidy Eligible</div>
          <button type="button" class="btn btn-secondary btn-sm hover-scale supplier-edit-stock-btn" style="width: 100%;">
            ✏️ ${lang === 'hi' ? 'स्टॉक व कीमत बदलें' : lang === 'ta' ? 'இருப்பு திருத்து' : lang === 'fr' ? 'Ajuster Stock' : 'Update Stock & Price'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 3. EXPERT TAB CONTENT
// -------------------------------------------------------------
function renderExpertTabContent(tab, lang, mode, selectedDiagnosticSampleId) {
  if (tab === 'triage') {
    const cases = [
      { id: "DX-401", crop: "Wheat (Durum)", disease: "Yellow Rust (Puccinia striiformis)", farmer: "Gurpreet S. (Ludhiana)", confidence: "97.4%", severity: "68% High", rx: "Propiconazole 25% EC @ 1 ml/L" },
      { id: "DX-402", crop: "Tomato", disease: "Early Blight (Alternaria solani)", farmer: "Santosh M. (Nashik)", confidence: "98.1%", severity: "54% Moderate", rx: "Mancozeb 75% WP @ 2.5 g/L" },
      { id: "DX-403", crop: "Alphonso Mango", disease: "Anthracnose & Leaf Burn", farmer: "Prashant R. (Ratnagiri)", confidence: "97.8%", severity: "58% Moderate", rx: "Copper Oxychloride @ 3 g/L" },
      { id: "DX-404", crop: "Cotton", disease: "Whitefly & Leaf Curl Virus", farmer: "Hardeep S. (Bathinda)", confidence: "96.5%", severity: "62% High", rx: "Diafenthiuron 50% WP @ 1.2 g/L" }
    ];

    return `
      <div class="dash-tab-pane active fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '🔬 AI लीफ स्कैनर रोग ट्रायज व डॉक्टर सत्यापन कतार' : lang === 'ta' ? '🔬 AI நோய் கண்டறிதல் & மருத்துவர் சரிபார்ப்பு' : lang === 'fr' ? '🔬 Triage Clinique IA & File de Validation des Ordonnances' : '🔬 AI Leaf Doctor Diagnostic Triage Queue'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'किसानों द्वारा अपलोड किए गए संदेहास्पद पत्ती नमूनों की समीक्षा करें और डिजिटल रूप से हस्ताक्षरित उपचार पर्ची जारी करें।' : lang === 'ta' ? 'விவசாயிகளின் இலை ஸ்கேன்களை சரிபார்த்து அதிகாரப்பூர்வ மருந்து பரிந்துரைகளை வழங்கவும்.' : lang === 'fr' ? 'Examinez les cas suspects détectés par les agriculteurs et validez les ordonnances agronomiques certifiées.' : 'Review flagged leaf scans, calibrate severity ratings, and issue signed digital agronomist prescriptions.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="expertOpenFullScannerBtn">
            <i data-lucide="camera" class="icon-xs"></i>
            <span>${lang === 'hi' ? '📸 फुल AI स्कैनर खोलें' : lang === 'ta' ? '📸 AI ஸ்கேனர் திறக்க' : lang === 'fr' ? '📸 Ouvrir Scanner Caméra' : '📸 Open Full Scanner'}</span>
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          ${cases.map(c => `
            <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                  <span class="badge-pill" style="font-size: 0.72rem; background: #FEE2E2; color: #DC2626;">${c.id}</span>
                  <span style="font-size: 1.05rem; font-weight: 800; color: var(--slate-900);">${c.crop} • ${c.disease}</span>
                </div>
                <div style="font-size: 0.82rem; color: var(--slate-600);"><strong>${lang === 'hi' ? 'किसान:' : lang === 'ta' ? 'விவசாயி:' : lang === 'fr' ? 'Exploitant:' : 'Farmer:'}</strong> ${c.farmer} • <strong>AI Confidence:</strong> ${c.confidence} • <strong>Severity:</strong> ${c.severity}</div>
                <div style="font-size: 0.8rem; color: var(--primary-700); margin-top: 4px;"><strong>${lang === 'hi' ? 'प्रस्तावित दवा:' : lang === 'ta' ? 'பரிந்துரை:' : lang === 'fr' ? 'Prescription:' : 'Prescription:'}</strong> ${c.rx}</div>
              </div>
              <div style="display: flex; gap: 8px;">
                <button type="button" class="btn btn-primary btn-sm hover-scale expert-sign-rx-btn" data-id="${c.id}" data-crop="${c.crop}">
                  <i data-lucide="check-check" class="icon-nano"></i> ${lang === 'hi' ? 'हस्ताक्षर व पर्ची भेजें' : lang === 'ta' ? 'மருந்து அனுப்பு' : lang === 'fr' ? 'Valider Ordonnance' : 'Sign & Issue Rx'}
                </button>
                <button type="button" class="btn btn-secondary btn-sm expert-inspect-scan-btn" data-id="${c.id}">
                  <i data-lucide="microscope" class="icon-nano"></i> ${lang === 'hi' ? 'छवि विश्लेषण' : lang === 'ta' ? 'ஆய்வு செய்' : lang === 'fr' ? 'Inspecter' : 'Inspect Scan'}
                </button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (tab === 'advisories') {
    return `
      <div class="dash-tab-pane active fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '📢 क्षेत्रीय आपातकालीन फसल परामर्श व स्प्रे अलर्ट प्रसारण' : lang === 'ta' ? '📢 அவசர விவசாய ஆலோசனைகள்' : lang === 'fr' ? '📢 Diffusion des Bulletins d\'Alerte Régionaux' : '📢 Regional Crop Health Advisories & Spray Alerts'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? '12,400+ किसानों के फोन पर सीधे एसएमएस और ऐप अलर्ट प्रसारित करें।' : lang === 'ta' ? '12,400+ விவசாயிகளுக்கு உடனடி விழிப்புணர்வு செய்திகள்.' : lang === 'fr' ? 'Transmettez des consignes phytosanitaires immédiates aux exploitants de la région.' : 'Broadcast urgent spray guidelines and pest forecasts to registered grower clusters.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="expertPublishAdvisoryBtn">
            <i data-lucide="send" class="icon-xs"></i>
            <span>${lang === 'hi' ? '➕ नया अलर्ट प्रसारित करें' : lang === 'ta' ? '➕ புதிய எச்சரிக்கை' : lang === 'fr' ? '➕ Publier Alerte' : '➕ Broadcast Alert'}</span>
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 12px;">
          <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 16px;">
            <div style="display: flex; justify-content: space-between; margin-bottom: 6px;">
              <span class="badge-pill" style="background: #FEE2E2; color: #DC2626; font-size: 0.72rem;">URGENT WEATHER ALERT • 12,400 FARMERS NOTIFIED</span>
              <span style="font-size: 0.78rem; color: var(--slate-500);">2 hours ago</span>
            </div>
            <h5 style="font-size: 1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 4px;">Unseasonal Western Disturbance Rain: High Yellow Rust Hazard</h5>
            <p style="font-size: 0.84rem; color: var(--slate-600); margin: 0;">Wheat farmers in Ludhiana, Jalandhar & Patiala: Apply Propiconazole 25% EC @ 1ml/L within 48h to prevent fungal spore germination on flag leaves.</p>
          </div>
        </div>
      </div>
    `;
  }

  // Telemetry tab
  return `
    <div class="dash-tab-pane active fade-in">
      <div style="margin-bottom: 18px;">
        <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
          ${lang === 'hi' ? '📡 बहु-प्लॉट आईओटी टेलीमेट्री व एनडीवीआई वनस्पति सूचकांक' : lang === 'ta' ? '📡 IoT மண் சென்சார் & NDVI குறியீடு' : lang === 'fr' ? '📡 Télémétrie IoT Multi-Parcellaire & Indices Végétatifs NDVI' : '📡 Multi-Plot IoT Telemetry & NDVI Vegetation Index'}
        </h4>
        <p style="font-size: 0.85rem; color: var(--slate-600);">
          ${lang === 'hi' ? 'जमीन के 10 सेमी, 20 सेमी, और 40 सेमी गहराई पर नमी, विद्युत चालकता (EC) और सौर विकिरण।' : lang === 'ta' ? 'மண்ணின் ஈரப்பதம், வெப்பநிலை மற்றும் செடிகளின் ஆரோக்கிய அளவீடுகள்.' : lang === 'fr' ? 'Surveillance des gradients d\'humidité (10cm, 20cm, 40cm), conductivité électrique et réflectance spectrale Sentinel-2.' : 'Multi-depth soil moisture curves, electrical conductivity, canopy temperature, and Sentinel-2 NDVI.'}
        </p>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
        <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-weight: 800; color: var(--slate-900);">Plot A: Durum Wheat</span>
            <span class="badge-pill" style="background: #DCFCE7; color: #166534;">NDVI: 0.84 (Optimal)</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;">Soil Moisture (10cm): <strong>36.2%</strong> (Adequate)</div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;">Soil Moisture (40cm): <strong>44.8%</strong> (Deep Reserve)</div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;">EC (Salinity): <strong>0.82 dS/m</strong> • pH: <strong>6.8</strong></div>
          <button type="button" class="btn btn-primary btn-sm hover-scale expert-telemetry-btn" style="width: 100%;">
            📊 ${lang === 'hi' ? 'विस्तृत स्पेक्ट्रम ग्राफ' : lang === 'ta' ? 'வரைபடம்' : lang === 'fr' ? 'Graphique Spectral' : 'Spectral Telemetry'}
          </button>
        </div>

        <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
          <div style="display: flex; justify-content: space-between; margin-bottom: 10px;">
            <span style="font-weight: 800; color: var(--slate-900);">Plot C: Organic Tomato</span>
            <span class="badge-pill" style="background: #FEE2E2; color: #DC2626;">NDVI: 0.62 (Stress)</span>
          </div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;">Canopy Wetness: <strong>4.8 Hours</strong> (Blight Risk)</div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 4px;">Soil Moisture (10cm): <strong>24.1%</strong> (Dry Crust)</div>
          <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;">EC (Salinity): <strong>1.45 dS/m</strong> • pH: <strong>7.2</strong></div>
          <button type="button" class="btn btn-primary btn-sm hover-scale expert-telemetry-btn" style="width: 100%;">
            📊 ${lang === 'hi' ? 'ड्रिप सुधार जारी करें' : lang === 'ta' ? 'பரிந்துரை' : lang === 'fr' ? 'Prescrire Drip' : 'Adjust Irrigation'}
          </button>
        </div>
      </div>
    </div>
  `;
}

// -------------------------------------------------------------
// 4. FARMER TAB CONTENT (Classic Rich Operating Cockpit)
// -------------------------------------------------------------
function renderFarmerTabContent(tab, lang, mode, mandiSearch, selectedDiagnosticSampleId, customMandiData) {
  const farmPlots = getFarmPlots(lang);
  const weatherForecast = getWeatherForecast(lang);
  const diagnosticSamples = getDiagnosticSamples(lang);
  const mandiCommodities = (customMandiData && customMandiData.length > 0) ? customMandiData : getMandiCommodities(lang);
  const buyerBids = getBuyerBids(lang);

  const selectedSample = diagnosticSamples.find(s => s.id === selectedDiagnosticSampleId) || diagnosticSamples[0];

  let filteredMandi = mandiCommodities;
  if (mandiSearch.trim()) {
    const q = mandiSearch.toLowerCase().trim();
    filteredMandi = filteredMandi.filter(m =>
      (m.name && m.name.toLowerCase().includes(q)) ||
      (m.mandi && m.mandi.toLowerCase().includes(q)) ||
      (m.category && m.category.toLowerCase().includes(q))
    );
  }

  if (tab === 'mandi') {
    return `
      <div class="dash-tab-pane active fade-in" id="tab-mandi">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? 'आज के लाइव मंडी भाव (1,200+ मंडियां)' : lang === 'ta' ? 'இன்றைய மண்டி நேரலை விலைகள்' : lang === 'fr' ? 'Cotations Réelles des Marchés APMC' : 'Today\'s Live Mandi Auction Rates'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'फसल बेचने से पहले आसपास की मंडियों के असली भाव जांचें और सीधे बेचें।' : lang === 'ta' ? 'அருகிலுள்ள சந்தை விலைகளை அறிந்து நேரடியாக விற்கவும்.' : lang === 'fr' ? 'Consultez les cours réels en vigueur avant d\'arbitrer votre vente bord-champ.' : 'Check verified auction prices in nearby APMCs and lock sales with zero brokerage.'}
            </p>
          </div>
          <div style="display: flex; gap: 8px;">
            <input 
              type="text" 
              id="mandiSearchInput" 
              placeholder="${lang === 'hi' ? 'फसल खोजें...' : lang === 'ta' ? 'பயிரை தேட...' : lang === 'fr' ? 'Chercher culture...' : 'Search crop...'}" 
              value="${mandiSearch}"
              class="form-input" 
              style="padding: 8px 12px; border-radius: var(--radius-md); border: 1px solid var(--border-light); font-size: 0.85rem;"
            />
          </div>
        </div>

        <div class="table-responsive" style="border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); overflow: hidden;">
          <table class="table" style="width: 100%; border-collapse: collapse; text-align: left;">
            <thead style="background: var(--bg-card); border-bottom: 2px solid var(--border-light);">
              <tr>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">Commodity</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">APMC Mandi</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">Modal Price</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">Min / Max Price</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">Trend</th>
                <th style="padding: 12px 16px; font-size: 0.82rem; font-weight: 800;">Action</th>
              </tr>
            </thead>
            <tbody>
              ${filteredMandi.map(m => `
                <tr style="border-bottom: 1px solid var(--border-subtle); background: var(--bg-page);">
                  <td style="padding: 12px 16px; font-weight: 700; color: var(--slate-900); font-size: 0.88rem;">${m.name}</td>
                  <td style="padding: 12px 16px; color: var(--slate-700);">${m.mandi}</td>
                  <td style="padding: 12px 16px; font-weight: 800; color: var(--primary-700); font-size: 0.95rem;">${m.modalPrice}</td>
                  <td style="padding: 12px 16px; font-size: 0.82rem; color: var(--slate-600);">${m.minPrice} - ${m.maxPrice}</td>
                  <td style="padding: 12px 16px; font-weight: 700; color: #16A34A;">${m.trend}</td>
                  <td style="padding: 12px 16px;">
                    <button type="button" class="btn btn-primary btn-xs hover-scale btn-sell-action" data-crop="${m.name}" data-price="${m.modalPrice}">
                      ${lang === 'hi' ? 'सीधे बेचें' : lang === 'ta' ? 'விற்க' : lang === 'fr' ? 'Vendre' : 'Sell Now'}
                    </button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  if (tab === 'weather') {
    return `
      <div class="dash-tab-pane active fade-in" id="tab-weather">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '🌦️ कृषि मौसम व 5-दिवसीय स्प्रे रडार' : lang === 'ta' ? '🌦️ விவசாய வானிலை & தெளிப்பு நேரம்' : lang === 'fr' ? '🌦️ Radar Météorologique & Fenêtres de Traitement à 5 Jours' : '🌦️ Agricultural Weather & 5-Day Precision Spray Forecast'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'बारिश, हवा की गति और सुरक्षित स्प्रे समय की सटीक जानकारी ताकि दवा व्यर्थ न हो।' : lang === 'ta' ? 'மழை மற்றும் காற்று வேகத்தை அறிந்து சரியான நேரத்தில் மருந்து தெளிக்கவும்.' : lang === 'fr' ? 'Fenêtres d\'intervention optimales pour éviter le lessivage des bouillies de traitement.' : 'Accurate rain probability, wind velocity, and humidity thresholds for safe foliar spraying.'}
          </p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 14px;">
          ${weatherForecast.slice(0, 5).map(w => `
            <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 16px; text-align: center;">
              <div style="font-size: 0.85rem; font-weight: 800; color: var(--slate-800); margin-bottom: 6px;">${w.day}</div>
              <div style="font-size: 1.8rem; margin-bottom: 6px;">${w.condition.includes('Rain') || w.condition.includes('बारिश') ? '🌧️' : '⛅'}</div>
              <div style="font-size: 1.2rem; font-weight: 900; color: var(--slate-900); margin-bottom: 4px;">${w.temp}</div>
              <div style="font-size: 0.78rem; color: var(--slate-600); margin-bottom: 6px;">${w.condition}</div>
              <span class="badge-pill" style="font-size: 0.7rem; background: ${w.spraySafe ? '#DCFCE7' : '#FEE2E2'}; color: ${w.spraySafe ? '#166534' : '#DC2626'};">
                ${w.spraySafe ? '✓ Safe to Spray' : '⚠️ Postpone Spray'}
              </span>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  if (tab === 'diagnostics') {
    return `
      <div class="dash-tab-pane active fade-in" id="tab-diagnostics">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
          <div>
            <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
              ${lang === 'hi' ? '📸 AI फसल रोग डॉक्टर एवं विजन निदान' : lang === 'ta' ? '📸 AI பயிர் நோய் மருத்துவர்' : lang === 'fr' ? '📸 Vision Foliaire & Diagnostic Pathologique IA' : '📸 AI Crop Doctor Vision & Foliar Diagnostics'}
            </h4>
            <p style="font-size: 0.85rem; color: var(--slate-600);">
              ${lang === 'hi' ? 'किसी भी बीमार पत्ती या बीज पर क्लिक करें। एआई तुरंत बीमारी की पहचान कर जैविक व रासायनिक इलाज बताता है।' : lang === 'ta' ? 'இலையை தேர்ந்தெடுத்து நோய் விவரம் மற்றும் மருந்துகளை உடனடியாக பெறவும்.' : lang === 'fr' ? 'Sélectionnez un échantillon pour simuler l\'analyse spectrale et générer l\'ordonnance de traitement.' : 'Select a crop leaf sample to simulate instant AI pathology recognition and treatment prescriptions.'}
            </p>
          </div>
          <button type="button" class="btn btn-primary btn-sm hover-scale" id="farmerOpenFullScannerBtn">
            <i data-lucide="camera" class="icon-xs"></i>
            <span>${lang === 'hi' ? 'कैमरा स्कैनर खोलें' : lang === 'ta' ? 'கேமரா திறக்க' : lang === 'fr' ? 'Ouvrir Scanner Caméra' : 'Open Full Camera Scanner'}</span>
          </button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
          <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
            <div style="position: relative; height: 200px; border-radius: var(--radius-md); overflow: hidden; margin-bottom: 14px;">
              <img src="${selectedSample.image}" alt="Disease Sample" style="width: 100%; height: 100%; object-fit: cover;" />
              <span class="badge-pill" style="position: absolute; top: 10px; right: 10px; background: rgba(15, 23, 42, 0.85); color: #4ADE80; font-weight: 800;">
                ${selectedSample.confidence} Match
              </span>
            </div>
            <h5 style="font-size: 1.15rem; font-weight: 800; color: var(--slate-900); margin-bottom: 4px;">${selectedSample.crop[lang] || selectedSample.crop.en}</h5>
            <div style="font-size: 0.9rem; font-weight: 700; color: #DC2626; margin-bottom: 8px;">${selectedSample.diseaseName[lang] || selectedSample.diseaseName.en}</div>
            <p style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 14px;">${selectedSample.symptoms[lang] || selectedSample.symptoms.en}</p>
            <div style="background: var(--bg-page); padding: 12px; border-radius: var(--radius-md); border-left: 4px solid var(--primary-600); margin-bottom: 14px;">
              <strong style="font-size: 0.8rem; color: var(--primary-700);">${lang === 'hi' ? 'जैविक उपचार:' : lang === 'ta' ? 'இயற்கை தீர்வு:' : lang === 'fr' ? 'Traitement Bio:' : 'Organic Prescription:'}</strong>
              <div style="font-size: 0.8rem; color: var(--slate-700); margin-top: 2px;">${selectedSample.organicTreatment[lang] || selectedSample.organicTreatment.en}</div>
            </div>
            <button type="button" class="btn btn-primary btn-sm hover-scale" id="orderSampleTreatmentBtn" style="width: 100%;">
              🛒 ${lang === 'hi' ? 'दवा किट मंगाएं' : lang === 'ta' ? 'மருந்து ஆர்டர் செய்' : lang === 'fr' ? 'Commander le Kit Bio' : 'Order Prescribed Treatment Kit'}
            </button>
          </div>

          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="font-size: 0.82rem; font-weight: 800; color: var(--slate-700); text-transform: uppercase;">
              ${lang === 'hi' ? 'त्वरित परीक्षण सैंपल चुनें:' : lang === 'ta' ? 'மாதிரி பயிர்கள்:' : lang === 'fr' ? 'Choisir Échantillon:' : 'Select Sample Leaf to Test:'}
            </div>
            ${diagnosticSamples.slice(0, 4).map(s => `
              <div 
                class="diag-sample-mini-card hover-scale hover:shadow-md transition-all duration-300 ${s.id === selectedDiagnosticSampleId ? 'active' : ''}" 
                data-sample-id="${s.id}"
                style="
                  display: flex; 
                  gap: 12px; 
                  align-items: center; 
                  padding: 10px; 
                  background: var(--bg-card); 
                  border: 1px solid ${s.id === selectedDiagnosticSampleId ? 'var(--primary-600)' : 'var(--border-light)'}; 
                  border-radius: var(--radius-md); 
                  cursor: pointer;
                "
              >
                <img src="${s.image}" style="width: 48px; height: 48px; border-radius: 8px; object-fit: cover;" />
                <div>
                  <div style="font-size: 0.88rem; font-weight: 800; color: var(--slate-900);">${s.crop[lang] || s.crop.en}</div>
                  <div style="font-size: 0.78rem; color: #DC2626; font-weight: 600;">${s.diseaseName[lang] || s.diseaseName.en}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  }

  if (tab === 'bids') {
    return `
      <div class="dash-tab-pane active fade-in" id="tab-bids">
        <div style="margin-bottom: 18px;">
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '🤝 बड़े खरीदारों के सीधे फॉरवर्ड टेंडर' : lang === 'ta' ? '🤝 நேரடி கொள்முதல் விலை ஏலம்' : lang === 'fr' ? '🤝 Offres Fermes & Adjudications d\'Acheteurs Agréés' : '🤝 Direct Buyer Forward Purchase Tenders'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'बड़ी खाद्य कंपनियां आपकी फसल के लिए बोली लगाती हैं। स्वीकार करते ही एस्क्रो में भुगतान लॉक हो जाता है।' : lang === 'ta' ? 'நிறுவனங்கள் நேரடியாக ஏலம் கோருகின்றன. ஏற்றுக்கொண்டவுடன் நிதி வங்கியில் முடக்கப்படும்.' : lang === 'fr' ? 'Offres d\'achat fermes émises par des transformateurs agro-industriels avec séquestre bancaire 100% garanti.' : 'Verified food processors and retail exporters bidding directly for your harvest.'}
          </p>
        </div>

        <div style="display: flex; flex-direction: column; gap: 14px;">
          ${buyerBids.map(b => `
            <div style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 14px;">
              <div>
                <div style="display: flex; gap: 8px; align-items: center; margin-bottom: 6px;">
                  <span class="badge-pill" style="font-size: 0.72rem; background: #DCFCE7; color: #166534;">100% Escrow Funded</span>
                  <span style="font-size: 1.1rem; font-weight: 800; color: var(--slate-900);">${b.buyer}</span>
                </div>
                <div style="font-size: 0.88rem; color: var(--slate-700); margin-bottom: 4px;"><strong>Commodity:</strong> ${b.commodity} • <strong>Lot:</strong> ${b.lotSize}</div>
                <div style="font-size: 0.82rem; color: var(--slate-500);"><strong>Offered Price:</strong> <span style="font-weight: 800; color: var(--primary-700); font-size: 1rem;">${b.price}</span> • Terms: ${b.terms}</div>
              </div>
              <button type="button" class="btn btn-primary btn-sm hover-scale btn-accept-tender" data-buyer="${b.buyer}" data-price="${b.price}">
                <i data-lucide="lock" class="icon-nano"></i> ${lang === 'hi' ? 'स्वीकारें व एस्क्रो लॉक करें' : lang === 'ta' ? 'ஏற்க & எஸ்க்ரோ செய்' : lang === 'fr' ? 'Accepter l\'Offre' : 'Accept Offer & Lock Escrow'}
              </button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }

  // Overview tab (Plots & soil sensors)
  return `
    <div class="dash-tab-pane active fade-in" id="tab-overview">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 18px; flex-wrap: wrap; gap: 12px;">
        <div>
          <h4 style="font-size: 1.25rem; color: var(--slate-900); font-weight: 800;">
            ${lang === 'hi' ? '🌱 सक्रिय खेत प्लॉट एवं मिट्टी सेंसर टेलीमेट्री' : lang === 'ta' ? '🌱 பயிர்கள் & மண் ஈரப்பதம்' : lang === 'fr' ? '🌱 Parcelles Actives & Télémétrie Sols LoRaWAN' : '🌱 Active Farm Plots & Soil Sensor Telemetry'}
          </h4>
          <p style="font-size: 0.85rem; color: var(--slate-600);">
            ${lang === 'hi' ? 'खेत में लगे लोरावान प्रोब से मिट्टी की नमी, तापमान और ड्रिप सिंचाई का सीधा नियंत्रण।' : lang === 'ta' ? 'மண் ஈரப்பதத்தை அறிந்து துல்லியமாக பாசனம் செய்யவும்.' : lang === 'fr' ? 'Contrôle en direct des vannes de micro-irrigation et lecture des sondes capacitatives.' : 'Real-time LoRaWAN moisture telemetry, soil EC, and one-click drip irrigation triggers.'}
          </p>
        </div>
        <button type="button" class="btn btn-primary btn-sm hover-scale" id="triggerAllDripBtn">
          <i data-lucide="droplet" class="icon-xs"></i>
          <span>${lang === 'hi' ? '💧 सभी खेतों में ड्रिप शुरू करें' : lang === 'ta' ? '💧 பாசனம் தொடங்க' : lang === 'fr' ? '💧 Déclencher Micro-Irrigation' : '💧 Trigger Micro-Drip Cycle'}</span>
        </button>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 18px;">
        ${farmPlots.map(p => `
          <div class="plot-card hover-scale hover:shadow-lg transition-all duration-300" style="background: var(--bg-card); border: 1.5px solid var(--border-light); border-radius: var(--radius-lg); padding: 18px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px;">
              <span class="badge-pill" style="font-size: 0.72rem; background: var(--primary-50); color: var(--primary-700);">
                ${p.id.toUpperCase()} • ${p.crop}
              </span>
              <span style="font-size: 0.8rem; font-weight: 700; color: #16A34A;">NDVI: ${p.healthScore}</span>
            </div>
            <h5 style="font-size: 1.1rem; font-weight: 800; color: var(--slate-900); margin-bottom: 4px;">${p.name}</h5>
            <div style="font-size: 0.82rem; color: var(--slate-600); margin-bottom: 12px;">Area: <strong>${p.area}</strong> • Sown: <strong>${p.sowingDate}</strong></div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-bottom: 14px;">
              <div style="background: var(--bg-page); padding: 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.72rem; color: var(--slate-500); font-weight: 700;">Soil Moisture</div>
                <div style="font-size: 1rem; font-weight: 800; color: var(--primary-700);">${p.moisture}</div>
              </div>
              <div style="background: var(--bg-page); padding: 8px; border-radius: var(--radius-sm); border: 1px solid var(--border-subtle);">
                <div style="font-size: 0.72rem; color: var(--slate-500); font-weight: 700;">Soil Temp / pH</div>
                <div style="font-size: 1rem; font-weight: 800; color: var(--slate-800);">${p.temp} • ${p.ph}</div>
              </div>
            </div>

            <button type="button" class="btn btn-secondary btn-sm hover-scale plot-drip-btn" data-plot="${p.id}" style="width: 100%; font-weight: 700;">
              💧 ${lang === 'hi' ? '20 मिनट ड्रिप चलाएं' : lang === 'ta' ? 'பாசனம் இயக்கு' : lang === 'fr' ? 'Cycle Drip 20 min' : 'Run 20-min Drip Cycle'}
            </button>
          </div>
        `).join('')}
      </div>
    </div>
  `;
}
