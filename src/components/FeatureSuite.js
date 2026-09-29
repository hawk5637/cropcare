import { getPillarsData, pillarCategories } from '../data/pillarsData.js';
import { translations } from '../data/translations.js';

export function renderFeatureSuite(activeCategory = 'All', searchQuery = '', currentLang = 'en', understandingMode = 'easy') {
  const t = translations[currentLang] || translations.en;
  const categories = pillarCategories[currentLang] || pillarCategories.en;
  const allLabel = categories[0];

  const pillars = getPillarsData(currentLang);
  let filteredPillars = pillars;

  // Filter by category
  if (activeCategory !== 'All' && activeCategory !== allLabel) {
    filteredPillars = filteredPillars.filter(p => p.category === activeCategory);
  }

  // Filter by search query
  if (searchQuery.trim()) {
    const q = searchQuery.toLowerCase().trim();
    filteredPillars = filteredPillars.filter(p =>
      p.title.toLowerCase().includes(q) ||
      p.tagline.toLowerCase().includes(q) ||
      (p.easyTagline && p.easyTagline.toLowerCase().includes(q)) ||
      (p.easySummary && p.easySummary.toLowerCase().includes(q)) ||
      p.detailedSummary.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q)
    );
  }

  return `
    <section class="section-padding features-section p-6 md:p-8" id="features">
      <div class="container">
        <!-- Section Header -->
        <div class="section-head">
          <div class="badge-pill">
            <i data-lucide="grid" class="icon-sm"></i>
            <span>${t.features.badge}</span>
          </div>
          <h2 class="section-title tracking-tight font-bold">
            ${t.features.title}
          </h2>
          <p class="section-subtitle tracking-normal">
            ${understandingMode === 'easy' ? t.features.subtitleEasy : t.features.subtitleDetailed}
          </p>
        </div>

        <!-- Controls: Category Filter Pills & Search Input -->
        <div class="features-controls">
          <div class="filter-pills" id="pillarFilterPills" role="tablist">
            ${categories.map((cat, idx) => {
              const isSelected = (idx === 0 && (activeCategory === 'All' || activeCategory === allLabel)) || activeCategory === cat;
              return `
                <button 
                  class="filter-btn ${isSelected ? 'active' : ''} transition-all duration-300 ease-in-out" 
                  data-category="${cat}"
                  role="tab"
                  aria-selected="${isSelected}"
                >
                  ${cat}
                </button>
              `;
            }).join('')}
          </div>

          <div class="search-input-wrap">
            <i data-lucide="search" class="icon-sm search-icon"></i>
            <input 
              type="text" 
              id="pillarSearchInput" 
              placeholder="${understandingMode === 'easy' 
                ? (currentLang === 'hi' ? 'खोजें, जैसे: मिट्टी, स्प्रे, मंडी...' : currentLang === 'ta' ? 'தேடுங்கள், எ.கா: மண், உரம், மண்டி...' : currentLang === 'fr' ? 'Rechercher : sol, semis, cours...' : 'Search tool, e.g. Soil, Spray, Mandi...') 
                : (currentLang === 'hi' ? 'तकनीकी खोज, जैसे: टेलीमेट्री, आर्बिट्राज...' : currentLang === 'ta' ? 'தொழில்நுட்ப தேடல்...' : currentLang === 'fr' ? 'Recherche avancée : télémétrie, arbitrage...' : 'Search pillar, e.g. Telemetry, Arbitrage...')}" 
              value="${searchQuery}" 
            />
          </div>
        </div>

        <!-- 18 Pillars Grid: Organized Card Grid with Optimal Whitespace & Card Lift -->
        <div class="pillars-grid gap-6" id="pillarsGrid">
          ${filteredPillars.length > 0 ? filteredPillars.map(pillar => `
            <div class="pillar-card hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out" data-pillar-id="${pillar.id}" tabindex="0" role="button">
              <div class="pillar-header">
                <div class="pillar-icon-box">
                  <i data-lucide="${pillar.icon}" class="icon-md"></i>
                </div>
                <span class="pillar-category-tag">${pillar.category}</span>
              </div>

              <div>
                <h3 class="pillar-card-title tracking-tight font-bold">
                  <span>${pillar.title}</span>
                  <span style="font-size: 1.1rem;">${pillar.emoji}</span>
                </h3>
                <div class="pillar-tagline">
                  ${understandingMode === 'easy' ? (pillar.easyTagline || pillar.tagline) : pillar.tagline}
                </div>
              </div>

              <p class="pillar-summary">
                ${understandingMode === 'easy' ? (pillar.easySummary || pillar.summary) : pillar.detailedSummary}
              </p>

              <div class="pillar-footer">
                <span class="pillar-metric-pill">${pillar.metric}</span>
                <span class="pillar-cta-text">
                  <span>${understandingMode === 'easy' 
                    ? (currentLang === 'hi' ? 'संक्षिप्त दृश्य' : currentLang === 'ta' ? 'விரைவு பார்வை' : currentLang === 'fr' ? 'Aperçu Rapide' : 'Quick View') 
                    : (currentLang === 'hi' ? 'विस्तृत विवरण' : currentLang === 'ta' ? 'விவரக்குறிப்புகள்' : currentLang === 'fr' ? 'Spécifications' : 'Explore Specs')}</span>
                  <i data-lucide="arrow-up-right" class="icon-sm"></i>
                </span>
              </div>
            </div>
          `).join('') : `
            <div style="grid-column: 1 / -1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px dashed var(--border-light);">
              <i data-lucide="search-x" class="icon-xl" style="color: var(--slate-400); margin: 0 auto 12px auto;"></i>
              <h4 style="font-size: 1.2rem; color: var(--slate-700);">
                ${currentLang === 'hi' ? 'कोई सुविधा नहीं मिली' : currentLang === 'ta' ? 'எந்த தூண்களும் பொருந்தவில்லை' : currentLang === 'fr' ? 'Aucun résultat trouvé' : 'No pillars matched your search'}
              </h4>
              <p style="color: var(--slate-500); font-size: 0.9rem; margin-top: 6px;">
                ${currentLang === 'hi' ? 'कृपया अन्य शब्द खोजें या फ़िल्टर रीसेट करें।' : currentLang === 'ta' ? 'வடிகட்டியை மீட்டமைக்கவும்.' : currentLang === 'fr' ? 'Essayez de réinitialiser les filtres.' : 'Try adjusting your keyword or clearing the filter.'}
              </p>
              <button class="btn btn-secondary btn-sm" id="resetPillarsBtn" style="margin-top: 16px;">
                ${currentLang === 'hi' ? 'फ़िल्टर हटाएं' : currentLang === 'ta' ? 'வடிகட்டிகளை மீட்டமை' : currentLang === 'fr' ? 'Réinitialiser les Filtres' : 'Reset Filters'}
              </button>
            </div>
          `}
        </div>
      </div>
    </section>
  `;
}
