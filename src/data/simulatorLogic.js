// What-If Farm Simulator — Agronomic Simulation Engine & Assumptions
// Uses CropCare field telemetry, ICAR agronomic baselines, and soil-water response curves

export const SIMULATION_ASSUMPTIONS = {
  disclaimer: "These are estimates based on the assumptions shown, not guaranteed outcomes. Real-world yields depend on in-field microclimate, seed vigour, pest incursions, and weather extremes.",
  version: "CropCare SimEngine v2.4",
  lastUpdated: "2026 Season",
  electricityPumpingCostPerM3: 0.85, // ₹0.85 per m³ water lifted / pressurized
  waterMmToM3PerAcre: 4.047, // 1 mm rainfall/irrigation over 1 Acre = 4.04686 m³ of water
  nativeSoilFertilityRatio: 0.55 // Yield percentage achieved with 0 applied fertilizer
};

export const CROPS_DATA = {
  wheat: {
    id: "wheat",
    name: "Sharbati Durum Wheat",
    variety: "HI-8759 (Pusa Tejas)",
    season: "Rabi (Oct - Mar)",
    baseYieldPerAcre: 22.5, // Quintals
    yieldUnit: "Quintals",
    optimalWaterMm: 500, // mm total crop evapotranspiration requirement
    minViableWaterMm: 220,
    waterSensitivityExp: 1.35, // Sensitivity exponent (higher = more vulnerable to water stress)
    optimalNpkPerAcre: { n: 120, p: 60, k: 40 }, // kg/acre
    baseCostPerAcre: 19500, // Land preparation, certified seeds, machinery, harvesting
    baseMarketPricePerUnit: 2550, // ₹ per Quintal
    category: "Cereal Grain",
    riskProfile: "Low-to-Medium",
    notes: "Requires cool winters and timely irrigation at Crown Root Initiation and Grain Filling."
  },
  rice: {
    id: "rice",
    name: "Pusa Basmati Rice 1121",
    variety: "PB-1121 Premium Export",
    season: "Kharif (Jun - Nov)",
    baseYieldPerAcre: 20.0,
    yieldUnit: "Quintals",
    optimalWaterMm: 1250,
    minViableWaterMm: 650,
    waterSensitivityExp: 1.75, // Very high drought sensitivity
    optimalNpkPerAcre: { n: 100, p: 50, k: 50 },
    baseCostPerAcre: 26500,
    baseMarketPricePerUnit: 4150,
    category: "Cereal Grain",
    riskProfile: "High Water Exposure",
    notes: "Requires continuous soil saturation during tillering and panicle emergence."
  },
  mustard: {
    id: "mustard",
    name: "Mustard (Pusa Bold)",
    variety: "Pusa Bold 42% Oil",
    season: "Rabi (Sep - Feb)",
    baseYieldPerAcre: 14.5,
    yieldUnit: "Quintals",
    optimalWaterMm: 320,
    minViableWaterMm: 160,
    waterSensitivityExp: 0.85, // Highly drought hardy
    optimalNpkPerAcre: { n: 80, p: 40, k: 40 },
    baseCostPerAcre: 13500,
    baseMarketPricePerUnit: 5650,
    category: "Oilseed",
    riskProfile: "Low Risk",
    notes: "Drought-tolerant crop with high commercial return and low water demand."
  },
  bell_pepper: {
    id: "bell_pepper",
    name: "Dutch Bell Pepper (Yellow)",
    variety: "Inspiration F1 Polyhouse",
    season: "Protected / Year-round",
    baseYieldPerAcre: 160.0, // 16 Tonnes = 160 Quintals
    yieldUnit: "Quintals",
    optimalWaterMm: 460,
    minViableWaterMm: 280,
    waterSensitivityExp: 1.5,
    optimalNpkPerAcre: { n: 160, p: 70, k: 210 },
    baseCostPerAcre: 105000, // Polyhouse trellis, high-tech fertigation, specialized pruning
    baseMarketPricePerUnit: 3800, // ₹3,800/Qtl (₹38/kg)
    category: "High-Value Horticulture",
    riskProfile: "High Capital / High Margin",
    notes: "High return potential with intensive fertigation and microclimate management."
  },
  cotton: {
    id: "cotton",
    name: "Bt Hybrid Cotton",
    variety: "Bollgard II Hybrid",
    season: "Kharif (May - Dec)",
    baseYieldPerAcre: 13.5,
    yieldUnit: "Quintals",
    optimalWaterMm: 700,
    minViableWaterMm: 350,
    waterSensitivityExp: 1.2,
    optimalNpkPerAcre: { n: 110, p: 55, k: 50 },
    baseCostPerAcre: 24500,
    baseMarketPricePerUnit: 7200,
    category: "Commercial Fiber",
    riskProfile: "Medium-to-High",
    notes: "Requires deep soil moisture and careful bollworm monitoring during squaring."
  },
  maize: {
    id: "maize",
    name: "Hybrid Grain Maize",
    variety: "Pioneer P3396",
    season: "Kharif & Rabi",
    baseYieldPerAcre: 28.0,
    yieldUnit: "Quintals",
    optimalWaterMm: 550,
    minViableWaterMm: 270,
    waterSensitivityExp: 1.15,
    optimalNpkPerAcre: { n: 120, p: 60, k: 40 },
    baseCostPerAcre: 18000,
    baseMarketPricePerUnit: 2250,
    category: "Coarse Grain & Feed",
    riskProfile: "Medium Risk",
    notes: "Fast growing with high grain yield; vulnerable to moisture stress during silking."
  }
};

export const SOIL_PROFILES = {
  loamy: {
    id: "loamy",
    name: "Loamy (Optimal)",
    multiplier: 1.05,
    percolationLossFactor: 1.0,
    description: "Ideal balance of silt, sand, and clay. Optimal water retention and root aeration."
  },
  sandy_loam: {
    id: "sandy_loam",
    name: "Sandy Loam",
    multiplier: 0.95,
    percolationLossFactor: 1.2, // 20% more water lost to drainage
    description: "Fast-draining, warmer soil. Lower water retention, requires frequent light watering."
  },
  clay_loam: {
    id: "clay_loam",
    name: "Clay Loam",
    multiplier: 1.02,
    percolationLossFactor: 0.88, // Holds water longer
    description: "High moisture and nutrient holding capacity. Heavy soil prone to waterlogging."
  },
  black_soil: {
    id: "black_soil",
    name: "Black Soil (Regur)",
    multiplier: 1.00,
    percolationLossFactor: 0.92,
    description: "Rich in calcium and magnesium. Shrinks and cracks during dry spells."
  }
};

export const IRRIGATION_METHODS = {
  drip: {
    id: "drip",
    name: "Precision Drip Irrigation",
    efficiency: 0.92,
    costPerAcre: 3500, // Drip line maintenance, filtration, drippers
    yieldBonus: 1.06, // +6% yield from direct root-zone feeding
    description: "92% application efficiency. Directly waters root zone with negligible evaporation."
  },
  sprinkler: {
    id: "sprinkler",
    name: "Micro-Sprinkler",
    efficiency: 0.78,
    costPerAcre: 1900,
    yieldBonus: 1.01,
    description: "78% efficiency. Good for uneven topography, vulnerable to high wind evaporation."
  },
  flood: {
    id: "flood",
    name: "Traditional Flood / Furrow",
    efficiency: 0.54,
    costPerAcre: 700,
    yieldBonus: 0.96, // Slight risk of root suffocation
    description: "54% efficiency. High percolation and runoff losses; potential waterlogging."
  }
};

/**
 * Validates user simulation inputs and sanitizes invalid values
 */
export function validateSimulatorInputs(inputs) {
  const errors = {};
  const sanitized = { ...inputs };

  // Land Area
  const area = parseFloat(sanitized.area);
  if (isNaN(area) || area <= 0) {
    errors.area = "Land area must be greater than 0 Acres.";
    sanitized.area = 1.0;
  } else if (area > 100) {
    errors.area = "Maximum simulation area is 100 Acres.";
    sanitized.area = 100;
  } else {
    sanitized.area = area;
  }

  // Water Available
  const water = parseFloat(sanitized.waterMm);
  if (isNaN(water) || water < 0) {
    errors.waterMm = "Water availability cannot be negative.";
    sanitized.waterMm = 300;
  } else if (water > 2500) {
    errors.waterMm = "Water availability capped at 2500 mm.";
    sanitized.waterMm = 2500;
  } else {
    sanitized.waterMm = water;
  }

  // Fertilizer Percentage
  const fert = parseFloat(sanitized.fertPct);
  if (isNaN(fert) || fert < 0) {
    errors.fertPct = "Fertilizer dosage cannot be negative.";
    sanitized.fertPct = 100;
  } else if (fert > 200) {
    errors.fertPct = "Fertilizer intensity capped at 200%.";
    sanitized.fertPct = 200;
  } else {
    sanitized.fertPct = fert;
  }

  // Price Override
  if (sanitized.priceOverride !== undefined && sanitized.priceOverride !== null && sanitized.priceOverride !== "") {
    const price = parseFloat(sanitized.priceOverride);
    if (isNaN(price) || price <= 0) {
      errors.priceOverride = "Market price must be a positive number.";
      sanitized.priceOverride = null;
    } else {
      sanitized.priceOverride = price;
    }
  } else {
    sanitized.priceOverride = null;
  }

  return { isValid: Object.keys(errors).length === 0, errors, sanitized };
}

/**
 * Core simulation model
 * Computes Yield, Resources, Costs, Revenues, Net Profit, and Risk Level
 */
export function runFarmSimulation(rawInputs) {
  const { sanitized } = validateSimulatorInputs(rawInputs);
  const crop = CROPS_DATA[sanitized.cropId] || CROPS_DATA.wheat;
  const soil = SOIL_PROFILES[sanitized.soilId] || SOIL_PROFILES.loamy;
  const irrigation = IRRIGATION_METHODS[sanitized.irrigationId] || IRRIGATION_METHODS.drip;

  const area = sanitized.area;
  const appliedWaterMm = sanitized.waterMm;
  const fertPct = sanitized.fertPct; // 0 to 200%
  const effectiveMarketPrice = sanitized.priceOverride || crop.baseMarketPricePerUnit;

  // 1. Water Response Factor
  // Effective water reaching root zone adjusted by irrigation system efficiency and soil percolation
  const effectiveWaterMm = appliedWaterMm * irrigation.efficiency / soil.percolationLossFactor;
  let waterFactor = 1.0;

  if (effectiveWaterMm < crop.optimalWaterMm) {
    if (effectiveWaterMm <= crop.minViableWaterMm) {
      // Severe drought penalty
      const ratio = Math.max(0, effectiveWaterMm / crop.optimalWaterMm);
      waterFactor = Math.max(0.12, Math.pow(ratio, crop.waterSensitivityExp * 1.4));
    } else {
      // Deficit irrigation curve
      const ratio = effectiveWaterMm / crop.optimalWaterMm;
      waterFactor = Math.pow(ratio, crop.waterSensitivityExp);
    }
  } else if (effectiveWaterMm > crop.optimalWaterMm * 1.35) {
    // Waterlogging penalty for non-rice crops
    if (crop.id !== 'rice') {
      const excessRatio = (effectiveWaterMm - (crop.optimalWaterMm * 1.35)) / crop.optimalWaterMm;
      waterFactor = Math.max(0.75, 1.0 - (excessRatio * 0.25));
    } else {
      waterFactor = 1.02; // Rice benefits from ample standing water
    }
  }

  // 2. Fertilizer Response Factor (Mitscherlich-Baule diminishing return)
  // At 0%: returns native soil baseline (55%). At 100%: 100%. Above 100%: modest gain with plateau.
  const fertRatio = fertPct / 100;
  let fertilizerFactor = 1.0;
  if (fertRatio <= 1.0) {
    fertilizerFactor = SIMULATION_ASSUMPTIONS.nativeSoilFertilityRatio + 
      ((1.0 - SIMULATION_ASSUMPTIONS.nativeSoilFertilityRatio) * Math.sin(fertRatio * (Math.PI / 2)));
  } else {
    // Diminishing returns above recommended dose
    const excess = fertRatio - 1.0;
    fertilizerFactor = 1.0 + (0.08 * (1 - Math.exp(-excess * 2)));
  }

  // 3. Expected Yield Calculation
  const totalMultiplier = waterFactor * fertilizerFactor * soil.multiplier * irrigation.yieldBonus;
  const expectedYieldPerAcre = Math.round((crop.baseYieldPerAcre * totalMultiplier) * 10) / 10;
  const totalYield = Math.round((expectedYieldPerAcre * area) * 10) / 10;

  // 4. Resource Usage
  const waterPerAcreM3 = Math.round(appliedWaterMm * SIMULATION_ASSUMPTIONS.waterMmToM3PerAcre);
  const totalWaterM3 = Math.round(waterPerAcreM3 * area);

  const appliedNPerAcre = Math.round(crop.optimalNpkPerAcre.n * fertRatio);
  const appliedPPerAcre = Math.round(crop.optimalNpkPerAcre.p * fertRatio);
  const appliedKPerAcre = Math.round(crop.optimalNpkPerAcre.k * fertRatio);
  const totalNpkPerAcre = appliedNPerAcre + appliedPPerAcre + appliedKPerAcre;
  const totalNpkKg = Math.round(totalNpkPerAcre * area);

  // 5. Cost Breakdown
  // Fertilizer cost: Approx ₹35 per kg average active nutrient
  const fertilizerCostPerAcre = Math.round(totalNpkPerAcre * 34.5);
  // Water pumping cost: electricity / diesel per m³
  const pumpingCostPerAcre = Math.round(waterPerAcreM3 * SIMULATION_ASSUMPTIONS.electricityPumpingCostPerM3);
  const irrigationEquipCostPerAcre = irrigation.costPerAcre;
  const waterTotalCostPerAcre = pumpingCostPerAcre + irrigationEquipCostPerAcre;

  const totalCostPerAcre = Math.round(crop.baseCostPerAcre + fertilizerCostPerAcre + waterTotalCostPerAcre);
  const totalCost = Math.round(totalCostPerAcre * area);

  // 6. Revenue & Profit
  const grossRevenue = Math.round(totalYield * effectiveMarketPrice);
  const netProfit = Math.round(grossRevenue - totalCost);
  const roiPct = totalCost > 0 ? Math.round((netProfit / totalCost) * 1000) / 10 : 0;
  const profitPerAcre = Math.round(netProfit / area);

  // 7. Risk Level Assessment (0 to 100 score)
  let riskScore = 15; // Baseline farm operating risk

  // Water deficit risk
  if (appliedWaterMm < crop.optimalWaterMm) {
    const deficitPct = (crop.optimalWaterMm - appliedWaterMm) / crop.optimalWaterMm;
    riskScore += deficitPct * 45;
  }
  // Flood irrigation efficiency risk
  if (irrigation.id === 'flood') {
    riskScore += 12;
  }
  // Fertilizer overdose penalty / disease susceptibility
  if (fertRatio > 1.3) {
    riskScore += (fertRatio - 1.3) * 35;
  } else if (fertRatio < 0.4) {
    riskScore += 15; // severe under-nourishment
  }
  // Financial exposure risk for high-capex crops
  if (totalCostPerAcre > 50000 && netProfit < totalCost * 0.2) {
    riskScore += 20;
  }

  riskScore = Math.min(100, Math.max(5, Math.round(riskScore)));

  let riskLevel = "Low Risk";
  let riskColor = "emerald";
  if (riskScore > 70) {
    riskLevel = "Critical Risk";
    riskColor = "rose";
  } else if (riskScore > 48) {
    riskLevel = "High Risk";
    riskColor = "orange";
  } else if (riskScore > 28) {
    riskLevel = "Moderate Risk";
    riskColor = "amber";
  }

  return {
    inputs: sanitized,
    crop,
    soil,
    irrigation,
    outputs: {
      yieldPerAcre: expectedYieldPerAcre,
      totalYield,
      yieldUnit: crop.yieldUnit,
      grossRevenue,
      totalCost,
      totalCostPerAcre,
      netProfit,
      profitPerAcre,
      roiPct,
      waterPerAcreM3,
      totalWaterM3,
      appliedWaterMm,
      appliedNPerAcre,
      appliedPPerAcre,
      appliedKPerAcre,
      totalNpkKg,
      totalNpkPerAcre,
      costBreakdown: {
        baseLaborAndSeeds: crop.baseCostPerAcre * area,
        fertilizer: fertilizerCostPerAcre * area,
        waterPumpingAndEquip: waterTotalCostPerAcre * area
      },
      factors: {
        waterFactor: Math.round(waterFactor * 100) / 100,
        fertilizerFactor: Math.round(fertilizerFactor * 100) / 100,
        soilMultiplier: soil.multiplier,
        irrigationBonus: irrigation.yieldBonus
      },
      risk: {
        score: riskScore,
        level: riskLevel,
        color: riskColor
      }
    }
  };
}

/**
 * Generates an automated one-line "What changed?" comparative summary between two scenarios
 */
export function generateWhatChangedSummary(scenA, scenB) {
  if (!scenA || !scenB) return "";

  const diffProfit = scenB.outputs.netProfit - scenA.outputs.netProfit;
  const diffYield = scenB.outputs.totalYield - scenA.outputs.totalYield;
  const diffWater = scenB.outputs.totalWaterM3 - scenA.outputs.totalWaterM3;
  const diffCost = scenB.outputs.totalCost - scenA.outputs.totalCost;

  const changes = [];
  if (scenA.inputs.cropId !== scenB.inputs.cropId) {
    changes.push(`swapped crop from ${scenA.crop.name.split(' ')[0]} to ${scenB.crop.name.split(' ')[0]}`);
  }
  if (scenA.inputs.irrigationId !== scenB.inputs.irrigationId) {
    changes.push(`switched irrigation to ${scenB.irrigation.name}`);
  }
  if (Math.abs(scenA.inputs.waterMm - scenB.inputs.waterMm) > 20) {
    changes.push(`adjusted water (${scenA.inputs.waterMm}mm → ${scenB.inputs.waterMm}mm)`);
  }
  if (Math.abs(scenA.inputs.fertPct - scenB.inputs.fertPct) > 10) {
    changes.push(`adjusted fertilizer intensity to ${scenB.inputs.fertPct}%`);
  }
  if (scenA.inputs.area !== scenB.inputs.area) {
    changes.push(`changed land area from ${scenA.inputs.area} to ${scenB.inputs.area} Acres`);
  }

  const changePrefix = changes.length > 0 ? `By ${changes.join(', ')}: ` : "";

  if (diffProfit >= 0) {
    const profitStr = `+₹${Math.abs(diffProfit).toLocaleString()}`;
    const yieldStr = diffYield >= 0 ? `+${diffYield.toFixed(1)} ${scenB.outputs.yieldUnit}` : `${diffYield.toFixed(1)} ${scenB.outputs.yieldUnit}`;
    const waterStr = diffWater <= 0 ? `saves ${Math.abs(diffWater).toLocaleString()} m³ water` : `uses ${diffWater.toLocaleString()} m³ more water`;
    return `${changePrefix}Estimated profit increases by ${profitStr} (Yield: ${yieldStr}), and ${waterStr} with ${scenB.outputs.risk.level.toLowerCase()}.`;
  } else {
    const profitStr = `-₹${Math.abs(diffProfit).toLocaleString()}`;
    return `${changePrefix}Estimated profit decreases by ${profitStr} due to higher input costs or water/crop mismatches (Risk: ${scenB.outputs.risk.level}).`;
  }
}

/**
 * Pre-configured default comparison scenarios
 */
export const DEFAULT_SAVED_SCENARIOS = [
  {
    id: "scen-1",
    title: "Scenario 1: Baseline Wheat (Flood Irrigation)",
    description: "Standard 4.5 Acres of Durum Wheat using traditional flood watering and 100% fertilizer.",
    inputs: {
      cropId: "wheat",
      soilId: "loamy",
      irrigationId: "flood",
      area: 4.5,
      waterMm: 450,
      fertPct: 100,
      priceOverride: null
    }
  },
  {
    id: "scen-2",
    title: "Scenario 2: Optimized Wheat (Precision Drip)",
    description: "Switching to precision drip irrigation with balanced 100% NPK saves water and lifts yield.",
    inputs: {
      cropId: "wheat",
      soilId: "loamy",
      irrigationId: "drip",
      area: 4.5,
      waterMm: 450,
      fertPct: 100,
      priceOverride: null
    }
  },
  {
    id: "scen-3",
    title: "Scenario 3: Crop Diversification (Mustard)",
    description: "Switching 4.5 Acres to drought-tolerant Mustard to reduce water and pumping expenses.",
    inputs: {
      cropId: "mustard",
      soilId: "loamy",
      irrigationId: "drip",
      area: 4.5,
      waterMm: 320,
      fertPct: 90,
      priceOverride: null
    }
  }
];
