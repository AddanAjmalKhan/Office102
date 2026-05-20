const fs = require('fs');
const path = require('path');
const https = require('https');

const pages = [
  'about',
  'our-services',
  'our-portfolio',
  'pricing',
  'faqs',
  'contact-us',
  'privacy-policy',
  'terms-and-conditions'
];

function reactify(str) {
  return str
    .replace(/class=/g, 'className=')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<source([^>]*[^\/])>/g, '<source$1 />')
    .replace(/for=/g, 'htmlFor=')
    .replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
}

pages.forEach(page => {
  const url = `https://office101llc.com/${page}.php`;
  https.get(url, (res) => {
    let html = '';
    res.on('data', chunk => html += chunk);
    res.on('end', () => {
      const mainStartStr = '<main>';
      const mainEndStr = '</main>';
      const mainStart = html.indexOf(mainStartStr);
      const mainEnd = html.indexOf(mainEndStr);
      
      let mainContent = '';
      if (mainStart !== -1 && mainEnd !== -1) {
        mainContent = html.substring(mainStart + mainStartStr.length, mainEnd);
      } else {
        mainContent = '<div>Page content not found</div>';
      }

      // Also download any new assets found in this page
      const regex = /(?:href|src)=["'](assets\/[^"']+)["']/g;
      let match;
      while ((match = regex.exec(html)) !== null) {
        const asset = match[1];
        const localPath = path.join(__dirname, 'public', asset);
        if (!fs.existsSync(localPath)) {
          fs.mkdirSync(path.dirname(localPath), { recursive: true });
          https.get(`https://office101llc.com/${asset}`, (imgRes) => {
            if (imgRes.statusCode === 200) {
              const file = fs.createWriteStream(localPath);
              imgRes.pipe(file);
            }
          });
        }
      }

      // update links in the content from .php to NextJS routes
      let fixedContent = reactify(mainContent);
      fixedContent = fixedContent.replace(/href=["']([^"']+)\.php["']/g, 'href="/$1"');
      fixedContent = fixedContent.replace(/href=["']index["']/g, 'href="/"');

      const dirPath = path.join(__dirname, 'src', 'app', page);
      fs.mkdirSync(dirPath, { recursive: true });
      fs.writeFileSync(path.join(dirPath, 'page.tsx'), `export default function ${page.replace(/-/g, '')}() { return (<>${fixedContent}</>); }`);
      console.log(`Created page: ${page}`);
    });
  }).on('error', (err) => console.error(err));
});
