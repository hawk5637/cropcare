const fs = require('fs');
const files = ['index.html', 'package.json', 'README.md', '.env', '.env.example'];
for (const f of files) {
  if (fs.existsSync(f)) {
    const text = fs.readFileSync(f, 'utf8');
    if (text.toLowerCase().includes('gemini-2.0') || text.toLowerCase().includes('2.0 flash') || text.toLowerCase().includes('powered by')) {
      console.log(`Found in ${f}`);
    }
  }
}
