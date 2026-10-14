import handler from './api/identify.js';

async function test() {
  // Test 1: Live camera leaf capture with no cropHint
  console.log('--- TEST 1: Live camera leaf capture (no cropHint) ---');
  let result1 = null;
  await handler({
    method: 'POST',
    body: {
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP...'],
      organ: 'leaf',
      colorStats: { greenRatio: 0.65, avgBrightness: 110 }
    }
  }, {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => { result1 = { code, data }; }
    })
  });
  console.log('Result 1 tier:', result1?.data?.tier);
  console.log('Result 1 topMatch:', result1?.data?.topMatch?.scientificName, result1?.data?.topMatch?.confidencePct + '%');

  // Test 2: Seed capture with no cropHint
  console.log('\n--- TEST 2: Seed capture (organ: seed, no cropHint) ---');
  let result2 = null;
  await handler({
    method: 'POST',
    body: {
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP...'],
      organ: 'seed',
      colorStats: { yellowRatio: 0.45, avgBrightness: 130 }
    }
  }, {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => { result2 = { code, data }; }
    })
  });
  console.log('Result 2 tier:', result2?.data?.tier);
  console.log('Result 2 topMatch:', result2?.data?.topMatch?.scientificName, result2?.data?.topMatch?.confidencePct + '%');

  // Test 3: Non-plant image (grey/black background, non-botanical)
  console.log('\n--- TEST 3: Non-plant image ---');
  let result3 = null;
  await handler({
    method: 'POST',
    body: {
      images: ['data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAP...'],
      organ: 'leaf',
      colorStats: { isNonPlant: true, greenRatio: 0.01, avgBrightness: 80 }
    }
  }, {
    setHeader: () => {},
    status: (code) => ({
      json: (data) => { result3 = { code, data }; }
    })
  });
  console.log('Result 3 tier:', result3?.data?.tier);
  console.log('Result 3 message:', result3?.data?.message);
}

test();
