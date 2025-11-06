#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * Ensures the locally installed Vite is Node 18–compatible (5.x).
 * Exits with non-zero code if vite major version is not 5 to prevent accidental use of Vite 7 on Node 18.
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Ensure eslint understands we are in a Node context for globals like process.
const nodeProcess = globalThis.process;

function fail(msg) {
  // use nodeProcess instead of bare process for linter friendliness
  console.error(`[vite-guard] ${msg}`);
  nodeProcess.exit(1);
}

let vitePkg;
try {
  vitePkg = require('vite/package.json');
} catch (e) {
  fail('Vite is not installed in node_modules. Run `npm ci` in frontend_tizen.');
}

const version = vitePkg?.version || '';
const major = Number(String(version).split('.')[0] || 0);

if (!version) {
  fail('Unable to read vite version from vite/package.json');
}

if (major !== 5) {
  fail(
    `Detected vite@${version}. This project requires vite@5.x for Node 18. ` +
    'Please remove node_modules and package-lock.json, ensure .npmrc has enable-overrides=true, and run `npm ci`.'
  );
}

console.log(`[vite-guard] OK: vite@${version} (compatible with Node 18)`);
nodeProcess.exit(0);
