const fs = require('fs');
const path = require('path');
const https = require('https');

const baseUrl = 'https://office101llc.com/';
const html = fs.readFileSync('original_site.html', 'utf8');
const regex = /(?:href|src)=["'](assets\/[^"']+)["']/g;
let match;
const urls = new Set();
while ((match = regex.exec(html)) !== null) {
  urls.add(match[1]);
}
// Also include style.css from root if needed, but it's not in assets. We already downloaded it.

urls.forEach(asset => {
  const fileUrl = baseUrl + asset;
  const localPath = path.join(__dirname, 'public', asset);
  fs.mkdirSync(path.dirname(localPath), { recursive: true });
  https.get(fileUrl, (res) => {
    if (res.statusCode === 200) {
      const file = fs.createWriteStream(localPath);
      res.pipe(file);
    }
  }).on('error', (e) => {
    console.error(e);
  });
});
console.log('Started downloading ' + urls.size + ' assets.');
