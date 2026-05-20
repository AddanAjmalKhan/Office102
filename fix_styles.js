const fs = require('fs');

const fixFile = (path) => {
  let content = fs.readFileSync(path, 'utf8');
  content = content.replace(/style="color: #e74c0a;"/g, "style={{ color: '#e74c0a' }}");
  content = content.replace(/style="--bs-nav-link-color: white; overflow-x: auto !important;"/g, "style={{ '--bs-nav-link-color': 'white', overflowX: 'auto !important' } as React.CSSProperties}");
  content = content.replace(/style="font-size: clamp\(30px, 12vw, 50px\);"/g, "style={{ fontSize: 'clamp(30px, 12vw, 50px)' }}");
  content = content.replace(/style="list-style: none; display: inline"/g, "style={{ listStyle: 'none', display: 'inline' }}");
  content = content.replace(/tabindex="0"/g, 'tabIndex={0}');
  fs.writeFileSync(path, content);
};

['src/app/contact-us/page.tsx', 'src/app/pricing/page.tsx', 'src/app/faqs/page.tsx'].forEach(f => {
  if (fs.existsSync(f)) {
    fixFile(f);
    console.log('Fixed', f);
  }
});
