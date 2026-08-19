import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.resolve(root, 'dist');
const ssrDir = path.resolve(root, 'dist-ssr');
const indexPath = path.resolve(distDir, 'index.html');

async function prerender() {
  console.log('🚀 Running SSG Prerendering step...');
  
  if (!fs.existsSync(indexPath)) {
    throw new Error(`dist/index.html not found at ${indexPath}`);
  }

  const ssrEntryPath = path.resolve(ssrDir, 'entry-ssr.js');
  if (!fs.existsSync(ssrEntryPath)) {
    throw new Error(`dist-ssr/entry-ssr.js not found at ${ssrEntryPath}`);
  }

  const { render } = await import(`file://${ssrEntryPath.replace(/\\/g, '/')}`);
  const { html } = render();

  let indexHtml = fs.readFileSync(indexPath, 'utf-8');
  
  // Replace <div id="root"></div> with rendered static HTML
  const prerenderedHtml = indexHtml.replace(
    '<div id="root"></div>',
    `<div id="root">${html}</div>`
  );

  fs.writeFileSync(indexPath, prerenderedHtml, 'utf-8');
  console.log(`✅ SSG Prerendering complete! Raw HTML size: ${Math.round(prerenderedHtml.length / 1024)} KB.`);

  // Clean up temporary dist-ssr folder
  try {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('🧹 Cleaned up temporary dist-ssr directory.');
  } catch (err) {
    console.warn('Could not remove dist-ssr:', err.message);
  }
}

prerender().catch((err) => {
  console.error('❌ SSG Prerendering error:', err);
  process.exit(1);
});
