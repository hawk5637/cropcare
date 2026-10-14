// Test script to verify animated SVGs for equipment and spares
function hashCode(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function generateAnimatedEquipmentSvg(name, emoji = '🚜', mainColor = '#DC2626', badgeText = '★ HEAVY-DUTY MACHINERY ★', specText = 'VERIFIED PERFORMANCE') {
  const safeName = (name || 'Agricultural Machinery').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const id = 'eq_' + hashCode(safeName);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="${id}_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#0F172A" stop-opacity="0.98"/>
      <stop offset="50%" stop-color="${mainColor}" stop-opacity="0.4"/>
      <stop offset="100%" stop-color="#020617" stop-opacity="0.99"/>
    </linearGradient>
    <radialGradient id="${id}_glow" cx="50%" cy="45%" r="55%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.6"/>
      <stop offset="60%" stop-color="${mainColor}" stop-opacity="0.12"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}_shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="12" flood-color="#000000" flood-opacity="0.6"/>
    </filter>
  </defs>
  <style>
    @keyframes spinGearCW {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes spinGearCCW {
      from { transform: rotate(0deg); }
      to { transform: rotate(-360deg); }
    }
    @keyframes floatEquip {
      0%, 100% { transform: translateY(0px) scale(1); }
      50% { transform: translateY(-10px) scale(1.03); }
    }
    @keyframes pulseRing {
      0%, 100% { transform: scale(0.95); opacity: 0.35; }
      50% { transform: scale(1.15); opacity: 0.8; }
    }
    .gear-cw {
      animation: spinGearCW 20s linear infinite;
      transform-origin: 150px 140px;
    }
    .gear-ccw {
      animation: spinGearCCW 15s linear infinite;
      transform-origin: 450px 150px;
    }
    .equip-body {
      animation: floatEquip 3.6s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .equip-glow {
      animation: pulseRing 4s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
  </style>

  <!-- Background Base Card -->
  <rect width="100%" height="100%" fill="url(#${id}_bg)" rx="24"/>

  <!-- Technical Blueprint Grid Lines -->
  <path d="M0 80 H600 M0 160 H600 M0 240 H600 M0 320 H600" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>
  <path d="M100 0 V400 M200 0 V400 M300 0 V400 M400 0 V400 M500 0 V400" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>

  <!-- Left Rotating Gear Silhouette -->
  <g class="gear-cw" stroke="rgba(255,255,255,0.09)" stroke-width="2" fill="none">
    <circle cx="150" cy="140" r="50"/>
    <circle cx="150" cy="140" r="25"/>
    <path d="M150 78 V202 M88 140 H212 M106 96 L194 184 M106 184 L194 96" stroke-dasharray="8 6"/>
  </g>

  <!-- Right Rotating Gear Silhouette -->
  <g class="gear-ccw" stroke="${mainColor}" stroke-opacity="0.25" stroke-width="2" fill="none">
    <circle cx="450" cy="150" r="60"/>
    <circle cx="450" cy="150" r="30"/>
    <path d="M450 78 V222 M378 150 H522 M399 99 L501 201 M399 201 L501 99" stroke-dasharray="10 8"/>
  </g>

  <!-- Center Radial Glow -->
  <circle cx="300" cy="175" r="140" fill="url(#${id}_glow)" class="equip-glow"/>
  <circle cx="300" cy="175" r="95" fill="none" stroke="${mainColor}" stroke-width="1.5" stroke-opacity="0.4" stroke-dasharray="5 5"/>

  <!-- Shadow Under Machine -->
  <ellipse cx="300" cy="250" rx="80" ry="14" fill="rgba(0,0,0,0.5)"/>

  <!-- Floating Machinery Icon -->
  <g class="equip-body" filter="url(#${id}_shadow)">
    <text x="300" y="190" font-size="94" text-anchor="middle" dominant-baseline="central" style="filter: drop-shadow(0 10px 20px rgba(0,0,0,0.6));">${emoji}</text>
  </g>

  <!-- Category & Certification Top Pill -->
  <rect x="180" y="274" width="240" height="26" rx="13" fill="rgba(15,23,42,0.85)" stroke="${mainColor}" stroke-width="1.5"/>
  <text x="300" y="291" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="${mainColor}" text-anchor="middle" letter-spacing="1">${badgeText}</text>

  <!-- Title & Specification Text -->
  <text x="300" y="340" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="20" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.3">${safeName}</text>
  <text x="300" y="366" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="0.5">${specText}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

function generateAnimatedSpareSvg(name, emoji = '⚙️', mainColor = '#3B82F6', partCode = 'OEM-7492', specText = 'TOLERANCE TESTED • 100% GENUINE') {
  const safeName = (name || 'Tractor Spare Part').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const id = 'sp_' + hashCode(safeName);

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="400" viewBox="0 0 600 400">
  <defs>
    <linearGradient id="${id}_bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#080E1A" stop-opacity="0.99"/>
      <stop offset="50%" stop-color="${mainColor}" stop-opacity="0.32"/>
      <stop offset="100%" stop-color="#030712" stop-opacity="0.99"/>
    </linearGradient>
    <radialGradient id="${id}_glow" cx="50%" cy="45%" r="50%">
      <stop offset="0%" stop-color="${mainColor}" stop-opacity="0.65"/>
      <stop offset="55%" stop-color="${mainColor}" stop-opacity="0.15"/>
      <stop offset="100%" stop-color="${mainColor}" stop-opacity="0"/>
    </radialGradient>
    <filter id="${id}_shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#000000" flood-opacity="0.65"/>
    </filter>
  </defs>
  <style>
    @keyframes spinTechRing {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    @keyframes pulseAura {
      0%, 100% { transform: scale(0.92); opacity: 0.45; }
      50% { transform: scale(1.16); opacity: 0.9; }
    }
    @keyframes floatPart {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-9px) rotate(3deg); }
    }
    .tech-ring {
      animation: spinTechRing 24s linear infinite;
      transform-origin: 300px 175px;
    }
    .part-aura {
      animation: pulseAura 3.8s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
    .part-body {
      animation: floatPart 3.4s ease-in-out infinite;
      transform-origin: 300px 175px;
    }
  </style>

  <!-- Background Base Card -->
  <rect width="100%" height="100%" fill="url(#${id}_bg)" rx="24"/>

  <!-- Precision Engineering Grid Matrix -->
  <path d="M0 60 H600 M0 120 H600 M0 180 H600 M0 240 H600 M0 300 H600" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>
  <path d="M60 0 V400 M120 0 V400 M180 0 V400 M240 0 V400 M300 0 V400 M360 0 V400 M420 0 V400 M480 0 V400 M540 0 V400" stroke="rgba(255,255,255,0.035)" stroke-width="1"/>

  <!-- Rotating Precision Measurement Reticle -->
  <g class="tech-ring" stroke="${mainColor}" stroke-opacity="0.35" stroke-width="1.5" fill="none">
    <circle cx="300" cy="175" r="115" stroke-dasharray="8 6 2 6"/>
    <circle cx="300" cy="175" r="85" stroke-dasharray="16 8"/>
    <path d="M300 50 V70 M300 280 V300 M175 175 H195 M405 175 H425" stroke-width="2"/>
  </g>

  <!-- Center Radial Energy Glow -->
  <circle cx="300" cy="175" r="135" fill="url(#${id}_glow)" class="part-aura"/>

  <!-- Caliper Dimension Marks -->
  <path d="M190 125 H210 M190 225 H210 M200 125 V225" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>
  <path d="M390 125 H410 M390 225 H410 M400 125 V225" stroke="rgba(255,255,255,0.18)" stroke-width="1"/>

  <!-- Ground Shadow -->
  <ellipse cx="300" cy="252" rx="75" ry="12" fill="rgba(0,0,0,0.52)"/>

  <!-- Floating Spare Part Icon -->
  <g class="part-body" filter="url(#${id}_shadow)">
    <text x="300" y="190" font-size="92" text-anchor="middle" dominant-baseline="central" style="filter: drop-shadow(0 8px 16px rgba(0,0,0,0.55));">${emoji}</text>
  </g>

  <!-- Part Code Top Pill -->
  <rect x="170" y="274" width="260" height="26" rx="13" fill="rgba(15,23,42,0.85)" stroke="${mainColor}" stroke-width="1.5"/>
  <text x="300" y="291" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="10.5" font-weight="800" fill="#67E8F9" text-anchor="middle" letter-spacing="1">★ ${partCode} • OEM CERTIFIED ★</text>

  <!-- Title & Specification Text -->
  <text x="300" y="340" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="19" font-weight="900" fill="#FFFFFF" text-anchor="middle" letter-spacing="0.3">${safeName}</text>
  <text x="300" y="366" font-family="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif" font-size="11.5" font-weight="700" fill="rgba(255,255,255,0.7)" text-anchor="middle" letter-spacing="0.5">${specText}</text>
</svg>`;

  return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
}

console.log('Generated sample equipment SVG:', generateAnimatedEquipmentSvg('Mahindra 575 DI (47 HP)').slice(0, 80));
console.log('Generated sample spare SVG:', generateAnimatedSpareSvg('Bosch CRDi Fuel Injector').slice(0, 80));

