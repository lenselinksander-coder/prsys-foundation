#!/usr/bin/env node
/**
 * PRSYS Foundation — Systeemcheck
 * Valideert de volledige stack zonder de server te hoeven starten.
 *
 * Gebruik: node scripts/systeemcheck.mjs
 *          of:  npm run systeemcheck
 */

import { existsSync, readdirSync } from 'fs';
import { execSync } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');

// ANSI kleuren (werken in alle terminals)
const GREEN  = '\x1b[32m';
const RED    = '\x1b[31m';
const YELLOW = '\x1b[33m';
const CYAN   = '\x1b[36m';
const BOLD   = '\x1b[1m';
const RESET  = '\x1b[0m';

const OK   = `${GREEN}✓${RESET}`;
const FAIL = `${RED}✗${RESET}`;
const WARN = `${YELLOW}⚠${RESET}`;

/** @type {Array<{naam: string, status: 'ok'|'warn'|'fail', detail: string}>} */
const resultaten = [];

function check(naam, ok, detail, level = 'fail') {
  const status = ok ? 'ok' : level;
  resultaten.push({ naam, status, detail });
}

function exec(cmd, cwd = ROOT) {
  try {
    const out = execSync(cmd, { cwd, stdio: 'pipe', timeout: 30_000 });
    return { ok: true, output: out.toString().trim() };
  } catch (e) {
    return { ok: false, output: (e.stderr ?? e.stdout ?? e.message ?? '').toString().trim() };
  }
}

// ── 1. .env bestand ──────────────────────────────────────────────────────────
const envPath = path.join(ROOT, '.env');
const envOk = existsSync(envPath);
check('.env bestand', envOk, envOk ? 'aanwezig' : 'ontbreekt — kopieer .env.example', 'warn');

// ── 2. node_modules aanwezig ─────────────────────────────────────────────────
const webModules = existsSync(path.join(ROOT, 'web', 'node_modules'));
check('web/node_modules', webModules, webModules ? 'geïnstalleerd' : 'voer npm install uit');

const backendModules = existsSync(path.join(ROOT, 'backend', 'node_modules'));
check('backend/node_modules', backendModules, backendModules ? 'geïnstalleerd' : 'voer npm install uit');

// ── 3. TypeScript compilatie — web ───────────────────────────────────────────
const tsWebConfig = path.join(ROOT, 'web', 'tsconfig.app.json');
if (existsSync(tsWebConfig)) {
  const tsWeb = exec(
    `npx --prefix ${path.join(ROOT, 'web')} tsc --noEmit --project tsconfig.app.json`,
    path.join(ROOT, 'web')
  );
  check('TypeScript (web)', tsWeb.ok, tsWeb.ok ? 'geen fouten' : tsWeb.output.split('\n')[0]);
} else {
  check('TypeScript (web)', false, 'tsconfig.app.json niet gevonden');
}

// ── 4. TypeScript compilatie — backend ───────────────────────────────────────
const tsBackendConfig = path.join(ROOT, 'backend', 'tsconfig.json');
if (existsSync(tsBackendConfig)) {
  const tsBackend = exec(
    `npx --prefix ${path.join(ROOT, 'backend')} tsc --noEmit`,
    path.join(ROOT, 'backend')
  );
  check('TypeScript (backend)', tsBackend.ok, tsBackend.ok ? 'geen fouten' : tsBackend.output.split('\n')[0]);
} else {
  check('TypeScript (backend)', false, 'tsconfig.json niet gevonden');
}

// ── 5. Python beschikbaar en >= 3.10 ─────────────────────────────────────────
const pyVersion = exec('python3 --version');
if (pyVersion.ok) {
  const match = pyVersion.output.match(/(\d+)\.(\d+)/);
  const [major, minor] = match ? [parseInt(match[1]), parseInt(match[2])] : [0, 0];
  const pyOk = major > 3 || (major === 3 && minor >= 10);
  check('Python >= 3.10', pyOk, pyVersion.output);
} else {
  check('Python >= 3.10', false, 'python3 niet gevonden');
}

// ── 6. taogate CLI beschikbaar ───────────────────────────────────────────────
const taogateCmd = exec('python3 -m taogate --help', ROOT);
check('taogate CLI', taogateCmd.ok, taogateCmd.ok ? 'bereikbaar' : 'voer pip install -e . uit', 'warn');

// ── 7. lessons/ aanwezig met inhoud ──────────────────────────────────────────
const lessonsDir = path.join(ROOT, 'lessons');
if (existsSync(lessonsDir)) {
  const levels = readdirSync(lessonsDir, { withFileTypes: true })
    .filter(d => d.isDirectory()).length;
  check('lessons/ directory', true, `${levels} niveau(s) aanwezig`);
} else {
  check('lessons/ directory', false, 'map ontbreekt');
}

// ── Rapportage ────────────────────────────────────────────────────────────────
const maxNaam = Math.max(...resultaten.map(r => r.naam.length));

console.log(`\n${BOLD}${CYAN}PRSYS Foundation — Systeemcheck${RESET}`);
console.log('─'.repeat(60));

for (const r of resultaten) {
  const icon = r.status === 'ok' ? OK : r.status === 'warn' ? WARN : FAIL;
  const naam = r.naam.padEnd(maxNaam);
  console.log(`  ${icon}  ${naam}  ${r.detail}`);
}

console.log('─'.repeat(60));

const fouten = resultaten.filter(r => r.status === 'fail').length;
const waarschuwingen = resultaten.filter(r => r.status === 'warn').length;

if (fouten === 0 && waarschuwingen === 0) {
  console.log(`${GREEN}${BOLD}Alle checks geslaagd — systeem is gereed.${RESET}\n`);
  process.exit(0);
} else if (fouten === 0) {
  console.log(`${YELLOW}${BOLD}${waarschuwingen} waarschuwing(en) — systeem is bruikbaar maar niet volledig.${RESET}\n`);
  process.exit(0);
} else {
  console.log(`${RED}${BOLD}${fouten} fout(en), ${waarschuwingen} waarschuwing(en) — systeem niet gereed.${RESET}\n`);
  process.exit(1);
}
