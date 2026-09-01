// Runs after the client and SSR builds. Renders the app to an HTML string
// and inlines it into dist/index.html's #root, so search engines and AI
// crawlers that don't execute JavaScript still see real content instead of
// an empty shell. main.jsx then hydrates this markup client-side.
import { readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const { render } = await import(resolve("dist-ssr/entry-server.js"));
const appHtml = render();

const indexPath = resolve("dist/index.html");
const template = readFileSync(indexPath, "utf-8");
const html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
writeFileSync(indexPath, html);

rmSync(resolve("dist-ssr"), { recursive: true, force: true });

console.log("Prerendered app HTML into dist/index.html");
