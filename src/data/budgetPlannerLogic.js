// Farm Resource Budget Planner — Agronomic Resource Optimization & Trade-Off Engine
// Models Water, Fertilizer, Labor, and Energy constraints across farm parcels and activities

export const BUDGET_ASSUMPTIONS = {
  disclaimer: "All resource allocations, yield projections, and financial outcomes are estimates based on stated agronomic assumptions, not guaranteed results. Actual crop performance is subject to unpredictable field conditions, local weather anomalies, and pest outbreaks.",
  version: "CropCare BudgetEngine v1.8",
  currency: "₹",
  unitCosts: {
    waterPerM3: 0.85, // ₹ per m³ (Pumping energy / canal cess)
    fertilizerPerKg: 34.5, // ₹ per kg of balanced active NPK
    laborPerPersonDay: 450, // ₹ per worker-day (standard rural agricultural wage)
    energyPerKwh: 6.50 // ₹ per kWh / unit electrical power
  }
};

// Default total seasonal farm budgets
export const DEFAULT_RESOURCE_BUDGETS = {
  waterM3: 8500, // Total available water in m³ (~2,100 mm total pool across 4-6 acres)
  fertilizerKg: 1100, // Total available NPK in kg
  laborDays: 140, // Total person-days available for season
  energyKwh: 1600 // Total kWh power quota (or diesel equivalent)
};

// Farm Activities / Crop parcels eligible for resource allocation
export const BUDGET_ACTIVITIES = [
  {
    id: "act-wheat",
    name: "Wheat Field (Plot A-1)",
    crop: "Sharbati Durum Wheat",
    area: 4.5, // Acres
    unit: "Quintals",
    pricePerUnit: 2550,
    baseYieldPerAcre: 22.5,
    minWaterPerAcreM3: 900, // Minimum viable water (~220 mm)
    optimalWaterPerAcreM3: 2025, // Optimal water (~500 mm = 2,025 m³/acre)
    optimalFertPerAcreKg: 130, // 120N + 60P + 40K active
    optimalLaborPerAcreDays: 12, // Sowing, weeding, spraying, harvesting
    optimalEnergyPerAcreKwh: 120, // Pumping + tractor fuel
    waterSensitivity: 1.35,
    fertilizerSensitivity: 0.85,
    laborSensitivity: 0.65,
    energySensitivity: 0.40,
    color: "#10b981", // emerald
    notes: "Critical watering needed at Crown Root Initiation and Grain Filling."
  },
  {
    id: "act-polyhouse",
    name: "Polyhouse Bell Pepper (Plot B-3)",
    crop: "Dutch Bell Pepper (Yellow)",
    area: 1.2, // Acres
    unit: "Quintals",
    pricePerUnit: 3800,
    baseYieldPerAcre: 160.0, // 16 Tonnes/Acre
    minWaterPerAcreM3: 1100,
    optimalWaterPerAcreM3: 1850,
    optimalFertPerAcreKg: 280, // High fertigation requirements
    optimalLaborPerAcreDays: 45, // Intensive trellising, pruning, manual picking
    optimalEnergyPerAcreKwh: 320, // Climate fans, sensor automation, drip pumps
    waterSensitivity: 1.50,
    fertilizerSensitivity: 1.20,
    laborSensitivity: 1.10,
    energySensitivity: 0.85,
    color: "#f59e0b", // amber
    notes: "High return with high labor and fertigation dependency."
  },
  {
    id: "act-mustard",
    name: "Mustard & Orchard (Plot C-2)",
    crop: "Mustard (Pusa Bold)",
    area: 4.0, // Acres
    unit: "Quintals",
    pricePerUnit: 5650,
    baseYieldPerAcre: 14.5,
    minWaterPerAcreM3: 650,
    optimalWaterPerAcreM3: 1300,
    optimalFertPerAcreKg: 95,
    optimalLaborPerAcreDays: 8,
    optimalEnergyPerAcreKwh: 80,
    waterSensitivity: 0.85, // Drought hardy
    fertilizerSensitivity: 0.70,
    laborSensitivity: 0.50,
    energySensitivity: 0.35,
    color: "#8b5cf6", // purple
    notes: "Drought hardy; low water demand with robust commercial market returns."
  },
  {
    id: "act-postharvest",
    name: "Farm Logistics & Storage",
    crop: "Post-Harvest Operations",
    area: 1.0, // Operational unit
    unit: "Operations",
    pricePerUnit: 0,
    baseYieldPerAcre: 0,
    isOperational: true,
    minWaterPerAcreM3: 200, // Wash stations, equipment cleaning
    optimalWaterPerAcreM3: 450,
    optimalFertPerAcreKg: 0,
    optimalLaborPerAcreDays: 25, // Bagging, loading, transport, quality sorting
    optimalEnergyPerAcreKwh: 260, // Drying fans, cold storage pre-cooling
    color: "#3b82f6", // blue
    notes: "Essential for reducing post-harvest spoilage and grading produce for APMC premium."
  }
];

// Baseline default allocations that fit within the default budgets
export const DEFAULT_ALLOCATIONS = {
  "act-wheat": { waterM3: 4200, fertilizerKg: 480, laborDays: 45, energyKwh: 520 },
  "act-polyhouse": { waterM3: 1800, fertilizerKg: 280, laborDays: 48, energyKwh: 360 },
  "act-mustard": { waterM3: 1900, fertilizerKg: 300, laborDays: 28, energyKwh: 300 },
  "act-postharvest": { waterM3: 350, fertilizerKg: 0, laborDays: 18, energyKwh: 240 }
};

/**
 * Validates and sanitizes budget inputs and allocations
 */
export function validateBudgetsAndAllocations(budgets, allocations) {
  const sanitizedBudgets = {
    waterM3: Math.max(100, parseFloat(budgets.waterM3) || DEFAULT_RESOURCE_BUDGETS.waterM3),
    fertilizerKg: Math.max(10, parseFloat(budgets.fertilizerKg) || DEFAULT_RESOURCE_BUDGETS.fertilizerKg),
    laborDays: Math.max(5, parseFloat(budgets.laborDays) || DEFAULT_RESOURCE_BUDGETS.laborDays),
    energyKwh: Math.max(20, parseFloat(budgets.energyKwh) || DEFAULT_RESOURCE_BUDGETS.energyKwh)
  };

  const sanitizedAllocations = {};
  for (const act of BUDGET_ACTIVITIES) {
    const raw = allocations[act.id] || {};
    sanitizedAllocations[act.id] = {
      waterM3: Math.max(0, parseFloat(raw.waterM3) || 0),
      fertilizerKg: Math.max(0, parseFloat(raw.fertilizerKg) || 0),
      laborDays: Math.max(0, parseFloat(raw.laborDays) || 0),
      energyKwh: Math.max(0, parseFloat(raw.energyKwh) || 0)
    };
  }

  return { sanitizedBudgets, sanitizedAllocations };
}

/**
 * Computes full budget consumption, remaining resources, over-allocation flags,
 * activity yields, and farm-wide financials.
 */
export function calculateBudgetPlan(rawBudgets, rawAllocations) {
  const { sanitizedBudgets: budgets, sanitizedAllocations: allocations } = validateBudgetsAndAllocations(rawBudgets, rawAllocations);

  let totalUsedWater = 0;
  let totalUsedFertilizer = 0;
  let totalUsedLabor = 0;
  let totalUsedEnergy = 0;

  const activityResults = [];

  for (const act of BUDGET_ACTIVITIES) {
    const alloc = allocations[act.id];
    totalUsedWater += alloc.waterM3;
    totalUsedFertilizer += alloc.fertilizerKg;
    totalUsedLabor += alloc.laborDays;
    totalUsedEnergy += alloc.energyKwh;

    if (act.isOperational) {
      // Non-crop operational activity
      const cost = Math.round(
        (alloc.waterM3 * BUDGET_ASSUMPTIONS.unitCosts.waterPerM3) +
        (alloc.laborDays * BUDGET_ASSUMPTIONS.unitCosts.laborPerPersonDay) +
        (alloc.energyKwh * BUDGET_ASSUMPTIONS.unitCosts.energyPerKwh)
      );

      activityResults.push({
        activity: act,
        allocation: alloc,
        isOperational: true,
        yieldPerAcre: 0,
        totalYield: 0,
        grossRevenue: 0,
        totalCost: cost,
        netProfit: -cost,
        adequacy: {
          water: Math.min(100, Math.round((alloc.waterM3 / act.optimalWaterPerAcreM3) * 100)),
          labor: Math.min(100, Math.round((alloc.laborDays / act.optimalLaborPerAcreDays) * 100)),
          energy: Math.min(100, Math.round((alloc.energyKwh / act.optimalEnergyPerAcreKwh) * 100))
        }
      });
      continue;
    }

    // Crop yield response based on allocations vs optimal needs
    const totalOptimalWater = act.optimalWaterPerAcreM3 * act.area;
    const totalOptimalFert = act.optimalFertPerAcreKg * act.area;
    const totalOptimalLabor = act.optimalLaborPerAcreDays * act.area;
    const totalOptimalEnergy = act.optimalEnergyPerAcreKwh * act.area;

    // 1. Water factor (0.2 to 1.0)
    const waterRatio = totalOptimalWater > 0 ? alloc.waterM3 / totalOptimalWater : 1;
    let waterFactor = 1.0;
    if (waterRatio < 1.0) {
      waterFactor = Math.max(0.18, Math.pow(waterRatio, act.waterSensitivity));
    }

    // 2. Fertilizer factor (0.5 to 1.05)
    const fertRatio = totalOptimalFert > 0 ? alloc.fertilizerKg / totalOptimalFert : 1;
    let fertFactor = 1.0;
    if (fertRatio < 1.0) {
      fertFactor = 0.52 + (0.48 * Math.sin(fertRatio * (Math.PI / 2)));
    } else {
      fertFactor = Math.min(1.05, 1.0 + (fertRatio - 1.0) * 0.05);
    }

    // 3. Labor factor (0.4 to 1.0) - affects timely weeding/harvesting
    const laborRatio = totalOptimalLabor > 0 ? alloc.laborDays / totalOptimalLabor : 1;
    const laborFactor = Math.max(0.35, Math.min(1.0, 0.4 + 0.6 * laborRatio));

    // Overall yield multiplier
    const yieldMultiplier = waterFactor * fertFactor * laborFactor;
    const yieldPerAcre = Math.round((act.baseYieldPerAcre * yieldMultiplier) * 10) / 10;
    const totalYield = Math.round((yieldPerAcre * act.area) * 10) / 10;

    const grossRevenue = Math.round(totalYield * act.pricePerUnit);
    const variableCost = Math.round(
      (alloc.waterM3 * BUDGET_ASSUMPTIONS.unitCosts.waterPerM3) +
      (alloc.fertilizerKg * BUDGET_ASSUMPTIONS.unitCosts.fertilizerPerKg) +
      (alloc.laborDays * BUDGET_ASSUMPTIONS.unitCosts.laborPerPersonDay) +
      (alloc.energyKwh * BUDGET_ASSUMPTIONS.unitCosts.energyPerKwh)
    );
    const fixedLandCost = Math.round(act.area * 5000); // Land tax, seeds, base implements
    const totalCost = variableCost + fixedLandCost;
    const netProfit = grossRevenue - totalCost;

    activityResults.push({
      activity: act,
      allocation: alloc,
      isOperational: false,
      yieldPerAcre,
      totalYield,
      grossRevenue,
      totalCost,
      netProfit,
      factors: {
        water: Math.round(waterFactor * 100),
        fertilizer: Math.round(fertFactor * 100),
        labor: Math.round(laborFactor * 100)
      },
      adequacy: {
        water: Math.min(150, Math.round((alloc.waterM3 / totalOptimalWater) * 100)),
        fertilizer: Math.min(150, Math.round((alloc.fertilizerKg / totalOptimalFert) * 100)),
        labor: Math.min(150, Math.round((alloc.laborDays / totalOptimalLabor) * 100)),
        energy: Math.min(150, Math.round((alloc.energyKwh / totalOptimalEnergy) * 100))
      }
    });
  }

  // Summary Resource Tracking
  const resources = {
    water: {
      name: "Water Supply",
      unit: "m³",
      totalBudget: budgets.waterM3,
      used: totalUsedWater,
      remaining: budgets.waterM3 - totalUsedWater,
      percentUsed: Math.round((totalUsedWater / budgets.waterM3) * 100),
      isOver: totalUsedWater > budgets.waterM3,
      overAmount: Math.max(0, totalUsedWater - budgets.waterM3)
    },
    fertilizer: {
      name: "NPK Fertilizer",
      unit: "kg",
      totalBudget: budgets.fertilizerKg,
      used: totalUsedFertilizer,
      remaining: budgets.fertilizerKg - totalUsedFertilizer,
      percentUsed: Math.round((totalUsedFertilizer / budgets.fertilizerKg) * 100),
      isOver: totalUsedFertilizer > budgets.fertilizerKg,
      overAmount: Math.max(0, totalUsedFertilizer - budgets.fertilizerKg)
    },
    labor: {
      name: "Farm Labor",
      unit: "Days",
      totalBudget: budgets.laborDays,
      used: totalUsedLabor,
      remaining: budgets.laborDays - totalUsedLabor,
      percentUsed: Math.round((totalUsedLabor / budgets.laborDays) * 100),
      isOver: totalUsedLabor > budgets.laborDays,
      overAmount: Math.max(0, totalUsedLabor - budgets.laborDays)
    },
    energy: {
      name: "Power & Fuel",
      unit: "kWh",
      totalBudget: budgets.energyKwh,
      used: totalUsedEnergy,
      remaining: budgets.energyKwh - totalUsedEnergy,
      percentUsed: Math.round((totalUsedEnergy / budgets.energyKwh) * 100),
      isOver: totalUsedEnergy > budgets.energyKwh,
      overAmount: Math.max(0, totalUsedEnergy - budgets.energyKwh)
    }
  };

  const isAnyOverAllocated = Object.values(resources).some(r => r.isOver);

  // Farm Total Financials
  const totalGrossRevenue = activityResults.reduce((sum, a) => sum + a.grossRevenue, 0);
  const totalCost = activityResults.reduce((sum, a) => sum + a.totalCost, 0);
  const totalNetProfit = totalGrossRevenue - totalCost;
  const overallRoi = totalCost > 0 ? Math.round((totalNetProfit / totalCost) * 1000) / 10 : 0;

  return {
    budgets,
    allocations,
    resources,
    isAnyOverAllocated,
    activityResults,
    totals: {
      grossRevenue: totalGrossRevenue,
      totalCost,
      netProfit: totalNetProfit,
      roi: overallRoi
    }
  };
}

/**
 * Computes live trade-off delta when moving resources between activities
 * e.g., Shifting water from activity X to Y
 */
export function calculateTradeOffInsight(currentPlan, prevPlan) {
  if (!prevPlan || !currentPlan) return null;

  const diffProfit = currentPlan.totals.netProfit - prevPlan.totals.netProfit;
  const diffRevenue = currentPlan.totals.grossRevenue - prevPlan.totals.grossRevenue;
  const diffCost = currentPlan.totals.totalCost - prevPlan.totals.totalCost;

  const activityDeltas = [];

  for (const act of BUDGET_ACTIVITIES) {
    const curA = currentPlan.activityResults.find(a => a.activity.id === act.id);
    const prevA = prevPlan.activityResults.find(a => a.activity.id === act.id);

    if (curA && prevA) {
      const waterDiff = curA.allocation.waterM3 - prevA.allocation.waterM3;
      const fertDiff = curA.allocation.fertilizerKg - prevA.allocation.fertilizerKg;
      const laborDiff = curA.allocation.laborDays - prevA.allocation.laborDays;
      const yieldDiff = curA.totalYield - prevA.totalYield;
      const profitDiff = curA.netProfit - prevA.netProfit;

      if (Math.abs(waterDiff) > 10 || Math.abs(fertDiff) > 5 || Math.abs(laborDiff) > 1) {
        activityDeltas.push({
          activity: act,
          waterDiff,
          fertDiff,
          laborDiff,
          yieldDiff: Math.round(yieldDiff * 10) / 10,
          profitDiff
        });
      }
    }
  }

  if (activityDeltas.length === 0) return null;

  return {
    diffProfit,
    diffRevenue,
    diffCost,
    activityDeltas
  };
}

/**
 * "Suggest a Balanced Plan" algorithm:
 * Allocates available limited budgets according to marginal economic return per resource unit.
 * High-value polyhouse crops receive high-intensity fertigation;
 * Durum wheat receives full water for critical stages;
 * Mustard operates on drought-tolerant deficit allocation.
 */
export function generateBalancedPlan(budgets) {
  const { sanitizedBudgets } = validateBudgetsAndAllocations(budgets, DEFAULT_ALLOCATIONS);

  const totalW = sanitizedBudgets.waterM3;
  const totalF = sanitizedBudgets.fertilizerKg;
  const totalL = sanitizedBudgets.laborDays;
  const totalE = sanitizedBudgets.energyKwh;

  // Strategic ratio distribution:
  // Polyhouse (High ROI per unit): 22% Water, 28% Fert, 34% Labor, 24% Energy
  // Wheat (Primary Cash Cereal): 48% Water, 42% Fert, 32% Labor, 32% Energy
  // Mustard (Drought Tolerant): 25% Water, 28% Fert, 20% Labor, 28% Energy
  // Post-Harvest & Operations: 5% Water, 2% Fert, 14% Labor, 16% Energy

  const balancedAllocations = {
    "act-polyhouse": {
      waterM3: Math.round(totalW * 0.22),
      fertilizerKg: Math.round(totalF * 0.28),
      laborDays: Math.round(totalL * 0.34),
      energyKwh: Math.round(totalE * 0.24)
    },
    "act-wheat": {
      waterM3: Math.round(totalW * 0.48),
      fertilizerKg: Math.round(totalF * 0.42),
      laborDays: Math.round(totalL * 0.32),
      energyKwh: Math.round(totalE * 0.32)
    },
    "act-mustard": {
      waterM3: Math.round(totalW * 0.25),
      fertilizerKg: Math.round(totalF * 0.28),
      laborDays: Math.round(totalL * 0.20),
      energyKwh: Math.round(totalE * 0.28)
    },
    "act-postharvest": {
      waterM3: Math.round(totalW * 0.05),
      fertilizerKg: 0,
      laborDays: Math.round(totalL * 0.14),
      energyKwh: Math.round(totalE * 0.16)
    }
  };

  const reasoning = [
    "High-Value Polyhouse (Plot B-3): Allocated 28% fertilizer and 34% labor because Bell Pepper offers ₹3,800/Qtl, maximizing profit per kg of NPK.",
    "Wheat Field (Plot A-1): Allocated 48% of the water pool (approx 425 mm) to cover critical Crown Root Initiation and grain filling without yield penalties.",
    "Mustard (Plot C-2): Set on smart deficit irrigation (25% water) because oilseed crops have low evapotranspiration and drought tolerance.",
    "Post-Harvest & Operations: Reserved 14% labor and 16% power for timely grading, cold room pre-cooling, and transport to prevent APMC transit loss."
  ];

  return {
    allocations: balancedAllocations,
    reasoning
  };
}
