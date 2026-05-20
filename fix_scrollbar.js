const fs = require('fs');
let c = fs.readFileSync('src/app/pricing/page.tsx', 'utf8');
c = c.replace(/<div className="list-items-content">\s*<ul>/g, '<div className="list-items-content">\n                    <ul className="listscroll">');
fs.writeFileSync('src/app/pricing/page.tsx', c);
console.log('Added listscroll classes to pricing/page.tsx');
