const fs = require('fs');
let c = fs.readFileSync('src/app/pricing/page.tsx', 'utf8');
c = c.replace(/className=" btn btn-primary"/g, 'className="wc-btn-primary btn-hover btn-item"');
fs.writeFileSync('src/app/pricing/page.tsx', c);
console.log('Fixed buttons');
