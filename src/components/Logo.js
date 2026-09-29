// Professional Custom Vector Inline SVG Logo: CropCare
// Upgraded Emblem: A stylized, interlocking shield (symbolizing care/protection/trust) 
// and a dual-leaf element (symbolizing agriculture, growth, and harvest)
// Paired with the bold brand text "CropCare" styled with precise tracking (tracking-tight font-extrabold text-green-700 dark:text-green-400)

export function renderCropCareLogo(size = 'md', showTagline = true, taglineText = 'Better Farms, Brighter Futures') {
  const sizeMap = {
    sm: { box: 36, titleSize: '1.25rem', tagSize: '0.65rem' },
    md: { box: 44, titleSize: '1.55rem', tagSize: '0.72rem' },
    lg: { box: 54, titleSize: '1.95rem', tagSize: '0.82rem' }
  };
  const config = sizeMap[size] || sizeMap.md;

  return `
    <div class="cropcare-logo-container" style="display: flex; align-items: center; gap: 12px; cursor: pointer; text-decoration: none;">
      <!-- Custom Inline SVG: Stylized Interlocking Shield & Dual-Leaf Emblem -->
      <div class="cropcare-logo-icon hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300 ease-in-out" style="width: ${config.box}px; height: ${config.box}px; flex-shrink: 0; position: relative;">
        <svg 
          viewBox="0 0 48 48" 
          width="${config.box}" 
          height="${config.box}" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          style="display: block; width: 100%; height: 100%; filter: drop-shadow(0 4px 10px rgba(22, 101, 52, 0.35));"
        >
          <defs>
            <!-- Shield Exterior Deep Emerald Gradient (Symbolizing Care & Protection) -->
            <linearGradient id="shieldExteriorGrad" x1="6" y1="4" x2="42" y2="44" gradientUnits="userSpaceOnUse">
              <stop stop-color="#14532D"/>
              <stop offset="0.4" stop-color="#166534"/>
              <stop offset="0.8" stop-color="#15803D"/>
              <stop offset="1" stop-color="#16A34A"/>
            </linearGradient>

            <!-- Shield Rim Protective Edge Gradient -->
            <linearGradient id="shieldRimGrad" x1="4" y1="3" x2="44" y2="45" gradientUnits="userSpaceOnUse">
              <stop stop-color="#4ADE80"/>
              <stop offset="0.5" stop-color="#22C55E"/>
              <stop offset="1" stop-color="#15803D"/>
            </linearGradient>

            <!-- Shield Interior Lustrous Field -->
            <linearGradient id="shieldInteriorGrad" x1="24" y1="8" x2="24" y2="42" gradientUnits="userSpaceOnUse">
              <stop stop-color="#052E16" stop-opacity="0.85"/>
              <stop offset="0.6" stop-color="#064E3B" stop-opacity="0.95"/>
              <stop offset="1" stop-color="#022C22"/>
            </linearGradient>

            <!-- Primary Canopy Leaf Gradient (Right Sweep) -->
            <linearGradient id="primaryCanopyLeaf" x1="16" y1="38" x2="38" y2="10" gradientUnits="userSpaceOnUse">
              <stop stop-color="#22C55E"/>
              <stop offset="0.4" stop-color="#4ADE80"/>
              <stop offset="0.85" stop-color="#86EFAC"/>
              <stop offset="1" stop-color="#DCFCE7"/>
            </linearGradient>

            <!-- Secondary Seedling Leaf Gradient (Left Interlock) -->
            <linearGradient id="secondarySeedlingLeaf" x1="20" y1="32" x2="12" y2="16" gradientUnits="userSpaceOnUse">
              <stop stop-color="#15803D"/>
              <stop offset="0.5" stop-color="#22C55E"/>
              <stop offset="1" stop-color="#4ADE80"/>
            </linearGradient>

            <!-- Subtle Protective Glow -->
            <filter id="careShieldGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-color="#4ADE80" flood-opacity="0.35"/>
            </filter>
          </defs>

          <!-- 1. The Stylized Protective Shield Base (Care / Security) -->
          <path 
            d="M24 3.5 C34.5 3.5 42 7 43 12 C43 27.5 34.5 38.5 24 45 C13.5 38.5 5 27.5 5 12 C6 7 13.5 3.5 24 3.5 Z" 
            fill="url(#shieldExteriorGrad)" 
            stroke="url(#shieldRimGrad)" 
            stroke-width="1.8"
            stroke-linejoin="round"
          />

          <!-- 2. Inner Shield Recess / Depth Chamber -->
          <path 
            d="M24 6.8 C32.5 6.8 38.5 9.5 39.5 13.8 C39.5 26.5 32.5 35.8 24 41.2 C15.5 35.8 8.5 26.5 8.5 13.8 C9.5 9.5 15.5 6.8 24 6.8 Z" 
            fill="url(#shieldInteriorGrad)" 
            stroke="#22C55E" 
            stroke-width="0.8"
            stroke-opacity="0.4"
          />

          <!-- Subtle Shield Symmetry Centerline -->
          <line x1="24" y1="7" x2="24" y2="41" stroke="#22C55E" stroke-width="0.8" stroke-dasharray="2 2" stroke-opacity="0.3" />

          <!-- 3. Interlocking Dual-Leaf Agriculture Element -->
          
          <!-- Secondary Left Leaf (Rising from stem, cradled within shield wing) -->
          <path 
            d="M22 34 C20 28 13 24 12 17 C16 16 23 18 24 24 C24.5 27 23.5 31 22 34 Z" 
            fill="url(#secondarySeedlingLeaf)" 
            stroke="#14532D" 
            stroke-width="1"
            stroke-linejoin="round"
          />
          <!-- Secondary Left Leaf Vein -->
          <path d="M22 32 C20 27 16 22 13 18" stroke="#DCFCE7" stroke-width="1.2" stroke-linecap="round" opacity="0.8" />
          <path d="M19 25 C17 24 15 25 15 25" stroke="#DCFCE7" stroke-width="0.8" stroke-linecap="round" opacity="0.7" />

          <!-- Primary Right Leaf (Gracefully sweeping canopy interlocking with top of shield) -->
          <path 
            d="M17 38 C17 38 18 25 26 17 C32 11 38 10 38 10 C38 10 38 16 34 23 C28 32 17 38 17 38 Z" 
            fill="url(#primaryCanopyLeaf)" 
            stroke="#15803D" 
            stroke-width="1.2"
            stroke-linejoin="round"
            filter="url(#careShieldGlow)"
          />

          <!-- Primary Leaf Central Vein (Biological vitality line) -->
          <path d="M18 36 C22 30 27 22 36 12" stroke="#FFFFFF" stroke-width="1.6" stroke-linecap="round" opacity="0.95" />
          
          <!-- Delicate Side Veins -->
          <path d="M24 26 C28 27 31 29 31 29" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.85" />
          <path d="M28 21 C31 22 34 23 34 23" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.85" />
          <path d="M21 30 C23 33 24 35 24 35" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" opacity="0.85" />

          <!-- 4. Interlocking Care Crest & Digital Spark / Node -->
          <!-- Interlocking Golden-Amber Dewdrop / IoT Care Center Node -->
          <circle cx="24" cy="17" r="2.6" fill="#FACC15" stroke="#15803D" stroke-width="1" />
          <circle cx="24" cy="17" r="1.3" fill="#FFFFFF" />

          <!-- Base Stem Root Anchor (Soil Grounding) -->
          <path d="M20 40 C22 41.5 26 41.5 28 40" stroke="#4ADE80" stroke-width="1.4" stroke-linecap="round" opacity="0.7" />
        </svg>
      </div>

      <!-- Brand Typography: Styled with precise tracking (tracking-tight font-extrabold text-green-700 dark:text-green-400) -->
      <div class="cropcare-brand-text" style="display: flex; flex-direction: column; justify-content: center; line-height: 1;">
        <div class="tracking-tight font-extrabold text-green-700 dark:text-green-400" style="font-size: ${config.titleSize}; display: flex; align-items: center; letter-spacing: -0.04em; font-weight: 800;">
          Crop<span class="text-green-500" style="color: var(--primary-500); margin-left: 0.5px;">Care</span>
        </div>
        ${showTagline ? `
          <div class="cropcare-tagline-text tracking-wide" style="font-size: ${config.tagSize}; font-weight: 700; color: var(--earth-500); letter-spacing: 0.05em; text-transform: uppercase; margin-top: 3px;">
            ${taglineText}
          </div>
        ` : ''}
      </div>
    </div>
  `;
}

export const renderCroporaLogo = renderCropCareLogo;

