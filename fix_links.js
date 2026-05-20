const fs = require('fs');
const files = [
  'src/components/Header.tsx',
  'src/components/Offcanvas.tsx',
  'src/components/Footer.tsx',
  'src/app/page.tsx'
];

files.forEach(f => {
  let c = fs.readFileSync(f, 'utf8');
  c = c.replace(/href=["']([^"']+)\.php["']/g, 'href="/$1"');
  c = c.replace(/href=["']\/index["']/g, 'href="/"');
  c = c.replace(/href=["']index\.php["']/g, 'href="/"');
  fs.writeFileSync(f, c);
});
console.log('Links updated.');
