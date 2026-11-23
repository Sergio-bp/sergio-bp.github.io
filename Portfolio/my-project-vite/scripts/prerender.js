// Writes the server-rendered page into dist/index.html, so the content is part of the HTML
// itself: visible without JavaScript and to crawlers, and painted before the JS bundle loads.
// Runs after `vite build` and the SSR build of src/entry-server.js (see `npm run build`).
import { readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const indexPath = path.join(projectRoot, "dist", "index.html");
const ssrDir = path.join(projectRoot, "dist-ssr");

const { render, PRERENDERED_LANGUAGE } = await import(pathToFileURL(path.join(ssrDir, "entry-server.js")).href);

const placeholder = '<div id="root"></div>';
const template = await readFile(indexPath, "utf8");
if (!template.includes(placeholder)) {
  throw new Error(`Could not find ${placeholder} in dist/index.html`);
}

const appHtml = render(PRERENDERED_LANGUAGE);
// A replacer function keeps any "$" in the markup from being read as a replacement pattern.
const html = template.replace(placeholder, () => `<div id="root" data-prerendered="${PRERENDERED_LANGUAGE}">${appHtml}</div>`);

await writeFile(indexPath, html);
await rm(ssrDir, { recursive: true, force: true });
console.log(`Prerendered dist/index.html in "${PRERENDERED_LANGUAGE}" (${(appHtml.length / 1024).toFixed(1)} kB of markup)`);
