const fs = require('fs');
let c = fs.readFileSync('src/app/pricing/page.tsx', 'utf8');

c = c.replace(/className="wc-btn-primary btn-hover btn-item"/g, 'className="btn btn-primary"');
c = c.replace(/'--bs-nav-pills-link-active-bg': '#e74c0a'/g, "'--bs-nav-pills-link-active-bg': 'transparent'");

fs.writeFileSync('src/app/pricing/page.tsx', c);
console.log('Fixed buttons and pills in pricing/page.tsx');
