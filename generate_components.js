const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('original_site.html', 'utf8');

function extract(startStr, endStr) {
  const start = html.indexOf(startStr);
  const end = html.indexOf(endStr, start);
  if (start === -1 || end === -1) return '';
  return html.substring(start, end + endStr.length);
}

const header = extract('<!-- Header area start -->', '<!-- Header area end -->');
const offcanvas = extract('<!-- Offcanvas area start -->', '<!-- Offcanvas area end -->');
const footer = extract('<!-- Footer area start -->', '<!-- Footer area end -->');
const modals = extract('<!-- Modal 1 -->', '<!-- Modal 3 -->\n<div class="modal__testimonial" id="modal_testimonial3">\n    <div class="modal__testimonial-content">\n        <span class="modal__close" id="modal_close3"><i class="fa-solid fa-xmark"></i></span>\n        <iframe src="" allowfullscreen></iframe>\n    </div>\n</div>');

// The main content inside <main>
const mainStartStr = '<main>';
const mainEndStr = '</main>';
let mainContent = '';
const mainStart = html.indexOf(mainStartStr);
const mainEnd = html.indexOf(mainEndStr);
if (mainStart !== -1 && mainEnd !== -1) {
  mainContent = html.substring(mainStart + mainStartStr.length, mainEnd);
}

// Helper to convert class= to className= and handle self-closing tags
function reactify(str) {
  return str
    .replace(/class=/g, 'className=')
    .replace(/<img([^>]*[^\/])>/g, '<img$1 />')
    .replace(/<br>/g, '<br />')
    .replace(/<input([^>]*[^\/])>/g, '<input$1 />')
    .replace(/<source([^>]*[^\/])>/g, '<source$1 />')
    .replace(/for=/g, 'htmlFor=')
    .replace(/style="([^"]*)"/g, (match, p1) => {
       // extremely naive style converter, usually we don't have many inline styles
       return match;
    });
}

fs.mkdirSync(path.join(__dirname, 'src', 'components'), { recursive: true });

fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Header.tsx'), `export default function Header() { return (<>${reactify(header)}</>); }`);
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Offcanvas.tsx'), `export default function Offcanvas() { return (<>${reactify(offcanvas)}</>); }`);
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Footer.tsx'), `export default function Footer() { return (<>${reactify(footer)}</>); }`);
fs.writeFileSync(path.join(__dirname, 'src', 'components', 'Modals.tsx'), `export default function Modals() { return (<>${reactify(modals)}</>); }`);

fs.writeFileSync(path.join(__dirname, 'src', 'app', 'page.tsx'), `export default function Home() { return (<>${reactify(mainContent)}</>); }`);

console.log('Components generated.');
