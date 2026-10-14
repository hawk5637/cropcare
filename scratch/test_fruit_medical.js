import { getFruitMedicalProfile } from '../api/_knowledge.js';

console.log('=== TEST FRUIT MEDICAL DATABASE & BOTANICAL ENRICHMENT ===\n');

const testFruits = ['Mango', 'Guava', 'Papaya', 'Banana', 'Pomegranate', 'Lemon & Citrus', 'Dragon Fruit', 'Jackfruit', 'Tomato', 'Neem', 'Holy Basil / Tulsi'];

for (const name of testFruits) {
  const profile = getFruitMedicalProfile(name);
  if (!profile) {
    console.error(`❌ Failed to retrieve profile for: ${name}`);
    process.exit(1);
  }
  console.log(`✅ [${profile.name}] (${profile.scientific})`);
  console.log(`   - Family: ${profile.family}`);
  console.log(`   - Bioactives: ${profile.bioactives.map(b => b.compound).join(', ')}`);
  console.log(`   - Nutrition (100g): Calories ${profile.nutrition_per_100g.calories || 'N/A'}, Vit C: ${profile.nutrition_per_100g.vitamin_c || 'N/A'}`);
  console.log(`   - Key Benefit: ${profile.medical_benefits[0]}`);
  console.log(`   - Clinical Tip: ${profile.actionable_insight}`);
  console.log(`   - USDA / Evidence: ${profile.usda_fdc_id || profile.pubmed_ref}\n`);
}

console.log('🎉 ALL FRUIT & BOTANICAL MEDICAL PROFILES VERIFIED!');
