export function renderPillarModal() {
  return `
    <div class="modal-backdrop" id="pillarModalBackdrop">
      <div class="modal-dialog" id="pillarModalContent" style="max-width: 680px;">
        <button class="modal-close-btn" id="closePillarModalBtn" aria-label="Close modal">
          <i data-lucide="x" class="icon-sm"></i>
        </button>

        <div id="pillarModalDynamicBody">
          <!-- Dynamically populated via JS when clicking a pillar card -->
        </div>
      </div>
    </div>
  `;
}

export function generatePillarModalContent(pillar, understandingMode = 'easy') {
  const isEasy = understandingMode === 'easy';
  const tagline = isEasy ? (pillar.easyTagline || pillar.tagline) : pillar.tagline;
  const summary = isEasy ? (pillar.easySummary || pillar.summary) : pillar.detailedSummary;
  const benefits = isEasy ? (pillar.easyBenefits || pillar.benefits) : pillar.detailedBenefits;

  return `
    <div style="display: flex; align-items: flex-start; gap: 18px; margin-bottom: 20px;">
      <div class="pillar-icon-box" style="width: 58px; height: 58px; background: var(--primary-600); color: #FFFFFF; font-size: 1.4rem;">
        <i data-lucide="${pillar.icon}" class="icon-lg"></i>
      </div>
      <div>
        <span class="pillar-category-tag" style="background: var(--primary-50); color: var(--primary-800);">${pillar.category}</span>
        <h3 class="tracking-tight" style="font-size: 1.6rem; font-weight: 800; color: var(--slate-950); margin-top: 6px;">
          ${pillar.title} ${pillar.emoji}
        </h3>
        <p style="font-size: 0.95rem; font-weight: 600; color: var(--earth-500); margin-top: 2px;">
          ${tagline}
        </p>
      </div>
    </div>

    <div style="background: var(--slate-50); border: 1px solid var(--border-light); border-radius: var(--radius-md); padding: 18px; margin-bottom: 20px;">
      <h5 style="font-size: 0.85rem; font-weight: 700; color: var(--slate-500); text-transform: uppercase; margin-bottom: 6px;">
        ${isEasy ? 'How This Helps Your Farm' : 'Functional Architecture Overview'}
      </h5>
      <p style="font-size: 0.95rem; color: var(--slate-700); line-height: 1.6;">
        ${summary}
      </p>
    </div>

    <div style="margin-bottom: 24px;">
      <h5 style="font-size: 0.9rem; font-weight: 700; color: var(--slate-900); margin-bottom: 12px;">
        ${isEasy ? 'Key Advantages For You:' : 'Core Operational Capabilities:'}
      </h5>
      <ul style="list-style: none; display: flex; flex-direction: column; gap: 10px;">
        ${benefits.map(b => `
          <li style="display: flex; align-items: flex-start; gap: 10px; font-size: 0.9rem; color: var(--slate-700);">
            <i data-lucide="check-circle" class="icon-sm" style="color: var(--primary-600); margin-top: 2px; flex-shrink: 0;"></i>
            <span>${b}</span>
          </li>
        `).join('')}
      </ul>
    </div>

    <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid var(--border-subtle); padding-top: 20px; flex-wrap: wrap; gap: 12px;">
      <div style="background: var(--primary-50); border: 1px solid var(--primary-100); padding: 8px 16px; border-radius: var(--radius-full); font-weight: 700; font-size: 0.85rem; color: var(--primary-800);">
        ${isEasy ? 'Farmer Guarantee: ' + pillar.metric : 'Performance Benchmark: ' + pillar.metric}
      </div>

      <button class="btn btn-primary pillar-action-btn" data-action="${pillar.actionLabel}" data-pillar="${pillar.title}">
        <i data-lucide="zap" class="icon-sm"></i>
        <span>${pillar.actionLabel}</span>
      </button>
    </div>
  `;
}
