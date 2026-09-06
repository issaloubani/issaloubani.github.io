// Renders dist/cv/ to a real PDF at build time, so the site can offer a
// download instead of asking the visitor to use their print dialog.
//
// Uses playwright-core against the Chrome that is already installed (locally,
// and preinstalled on GitHub's ubuntu runners) rather than pulling down a
// bundled browser, which would add ~300 MB to install and CI time.

import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright-core';

const ROOT = path.resolve(fileURLToPath(new URL('../dist', import.meta.url)));
const OUT = path.join(ROOT, 'issa-loubani-cv.pdf');
const PORT = 4399;

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.mp4': 'video/mp4',
  '.json': 'application/json',
  '.woff2': 'font/woff2',
};

// Minimal static server. Avoids depending on astro preview, which is awkward
// to spawn portably from a script on Windows.
function serve() {
  const server = createServer(async (req, res) => {
    try {
      const url = decodeURIComponent((req.url || '/').split('?')[0]);
      let file = path.join(ROOT, url);
      if (!file.startsWith(ROOT)) {
        res.writeHead(403).end();
        return;
      }
      if (existsSync(file) && !path.extname(file)) file = path.join(file, 'index.html');
      if (url.endsWith('/')) file = path.join(ROOT, url, 'index.html');
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': TYPES[path.extname(file)] || 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end('not found');
    }
  });
  return new Promise((resolve) => server.listen(PORT, () => resolve(server)));
}

const server = await serve();

const browser = await chromium.launch({ channel: 'chrome' });
const page = await browser.newPage();

await page.goto(`http://localhost:${PORT}/cv/`, { waitUntil: 'networkidle' });

// Google Fonts load async; without this the PDF can render in fallback faces.
await page.evaluate(() => document.fonts.ready);

await page.emulateMedia({ media: 'print' });
await page.pdf({
  path: OUT,
  format: 'A4',
  printBackground: false,
  preferCSSPageSize: true, // respect the @page margin in the print stylesheet
});

await browser.close();
server.close();

const { size } = await import('node:fs').then((fs) => fs.statSync(OUT));
console.log(`wrote ${path.relative(process.cwd(), OUT)} (${(size / 1024).toFixed(0)} KB)`);
