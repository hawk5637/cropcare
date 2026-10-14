import { answerDirectly } from '../api/chat.js';
import { generateGeneralResponse } from '../src/data/agronomyBrain.js';

console.log('=== TEST SUITE FOR GENERAL ASSISTANT CHAT ===\n');

const testCases = [
  {
    name: '1. Vague help request',
    input: 'Hey help me with this',
    history: [],
    expectedMatch: 'Sure, what do you need help with?'
  },
  {
    name: '2. Math calculation',
    input: 'What is 25 x 18?',
    history: [],
    expectedMatch: '450'
  },
  {
    name: '3. Capital of France',
    input: 'Capital of France?',
    history: [],
    expectedMatch: 'Paris'
  },
  {
    name: '4. Tanglish query on Neem leaf',
    input: 'Neem leaf use enna?',
    history: [],
    expectedMatch: 'pesticide' // checks Tanglish / short answer
  },
  {
    name: '5. Follow-up "Explain more"',
    input: 'Explain more',
    history: [
      { sender: 'user', text: 'Capital of France?' },
      { sender: 'model', text: 'Paris' }
    ],
    expectedMatch: 'Paris' // should continue about Paris
  }
];

let allPassed = true;

for (const tc of testCases) {
  console.log(`--- [TEST] ${tc.name} ---`);
  console.log(`Input: "${tc.input}"`);
  
  // Test api/chat direct engine
  const apiReply = answerDirectly(tc.input, tc.history);
  console.log(`api/chat answer: "${apiReply}"`);

  // Test agronomyBrain client generator
  const brainReply = generateGeneralResponse(tc.input, 'en', 'Farmer', null, 'auto', tc.history);
  console.log(`agronomyBrain answer: "${brainReply}"`);

  const apiPass = apiReply.toLowerCase().includes(tc.expectedMatch.toLowerCase());
  const brainPass = brainReply.toLowerCase().includes(tc.expectedMatch.toLowerCase());

  if (apiPass && brainPass) {
    console.log(`RESULT: PASS ✅\n`);
  } else {
    console.log(`RESULT: FAIL ❌ (Expected to match: "${tc.expectedMatch}")\n`);
    allPassed = false;
  }
}

if (allPassed) {
  console.log('🎉 ALL 5 GENERAL ASSISTANT TESTS PASSED ACCURATELY!');
} else {
  console.error('❌ SOME TESTS FAILED');
  process.exit(1);
}
