const fs = require('fs');
const path = require('path');
function walk(dir) {
  let res = [];
  for (const f of fs.readdirSync(dir)) {
    if (['node_modules', '.git', 'dist', '.vercel', 'scratch'].includes(f)) continue;
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory()) res = res.concat(walk(p));
    else res.push(p);
  }
  return res;
}
for (const f of walk('src').concat(walk('api'))) {
  const content = fs.readFileSync(f, 'utf8');
  if (content.toLowerCase().includes('gemini-2.0') || content.toLowerCase().includes('2.0 flash') || content.toLowerCase().includes('powered by')) {
    const lines = content.split('\n');
    lines.forEach((l, idx) => {
      if (l.toLowerCase().includes('gemini-2.0') || l.toLowerCase().includes('2.0 flash') || l.toLowerCase().includes('powered by')) {
        console.log(`${f}:${idx+1}: ${l.trim().slice(0, 100)}`);
      }
    });
  }
}
