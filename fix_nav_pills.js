const fs = require('fs');
let c = fs.readFileSync('src/app/pricing/page.tsx', 'utf8');
c = c.replace(/style=\{\{ '--bs-nav-link-color': 'white', overflowX: 'auto !important' \} as React\.CSSProperties\}/g, "style={{ '--bs-nav-link-color': 'white', '--bs-nav-pills-link-active-bg': '#e74c0a', overflowX: 'auto !important' } as React.CSSProperties}");
fs.writeFileSync('src/app/pricing/page.tsx', c);
console.log('Fixed nav pills');
