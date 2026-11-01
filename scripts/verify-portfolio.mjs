import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';

const distHtmlPath = path.resolve('dist/index.html');
assert.ok(fs.existsSync(distHtmlPath), 'dist/index.html must exist before verification');

const html = fs.readFileSync(distHtmlPath, 'utf8');

// R-02: No em-dashes in rendered output.
assert.equal(html.includes('\u2014'), false, 'Rendered HTML must not contain em-dash characters');

// R-24 & R-26: Every in-page anchor href="#..." must match a real id="..." in the document.
const ids = new Set(Array.from(html.matchAll(/\bid="([^"]+)"/g), (m) => m[1]));
const anchorTargets = Array.from(html.matchAll(/\bhref="#([^"]+)"/g), (m) => m[1]);
assert.ok(anchorTargets.length >= 5, 'Expected multiple in-page navigation anchors');
for (const target of anchorTargets) {
  assert.ok(ids.has(target), `Anchor #${target} has no matching id in dist/index.html`);
}

// R-38 & AI-only scope: Verify all 4 pure AI repos exist and non-AI repos are excluded.
const requiredAiRepos = [
  'https://github.com/Hansel-vlnt/Bludai',
  'https://github.com/Hansel-vlnt/ag-mcp-local-llm',
  'https://github.com/Hansel-vlnt/mata-mata',
  'https://github.com/Hansel-vlnt/face-recog-Huggingface',
];
for (const repo of requiredAiRepos) {
  assert.ok(html.includes(repo), `Missing verified AI repository link: ${repo}`);
}

const excludedNonAiRepos = [
  'predikbanjir',
  'Klasifikasi-Berita-PKP',
  'n8n-nlp',
  'IGRS-Analysis',
  'CAT-NEW',
  'SimPerKaSa',
  'gemini-app-mcp',
];
for (const excluded of excludedNonAiRepos) {
  assert.equal(
    html.includes(excluded),
    false,
    `Excluded non-AI or empty repository "${excluded}" must not appear in dist/index.html`
  );
}

// Modern Web Guidance: All modal <dialog> elements must declare closedby="any".
const dialogs = Array.from(html.matchAll(/<dialog\b[^>]*>/g), (m) => m[0]);
assert.equal(dialogs.length, 2, 'Expected mobile nav dialog and blueprint modal dialog');
for (const tag of dialogs) {
  assert.ok(tag.includes('closedby="any"'), `Dialog tag missing closedby="any": ${tag}`);
}

console.log('verify-portfolio PASS:', {
  anchorsChecked: anchorTargets.length,
  aiReposVerified: requiredAiRepos.length,
  excludedReposChecked: excludedNonAiRepos.length,
  dialogsVerified: dialogs.length,
});
