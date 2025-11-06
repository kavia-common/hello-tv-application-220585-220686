#!/usr/bin/env node
/**
 * PUBLIC_INTERFACE
 * Ensures the locally installed Vite is Node 18–compatible (5.x).
 * Warns (non-blocking) if vite major version is not 5 to avoid halting CI/dev startup,
 * but still surfaces potential incompatibility.
 */
import { createRequire } from 'module';
const require = createRequire(import.meta.url);

// Ensure eslint understands we are in a Node context for globals like process.
const nodeProcess = globalThis.process;

function warn(msg) {
  console.warn(`[vite-guard] WARNING: ${msg}`);
}

function info(msg) {
  console.log(`[vite-guard] ${msg}`);
}

let vitePkg;
try {
  vitePkg = require('vite/package.json');
} catch (e) {
  warn('Vite is not installed in node_modules. Run `npm ci` in frontend_tizen` if startup fails.');
  // Non-blocking: continue and let npm script attempt to run, which will provide a clearer error.
  nodeProcess.exit(0);
}

const version = vitePkg?.version || '';
const major = Number(String(version).split('.')[0] || 0);

if (!version) {
  warn('Unable to read vite version from vite/package.json. Proceeding anyway.');
  nodeProcess.exit(0);
}

if (major !== 5) {
  warn(
    `Detected vite@${version}. Node 18 is only compatible with vite@5.x in this project. ` +
    'If you encounter errors like "crypto.hash is not a function" or Node version guards, ' +
    'remove node_modules and package-lock.json, then run `npm ci`.'
  );
  nodeProcess.exit(0);
}

info(`OK: vite@${version} (compatible with Node 18)`);
nodeProcess.exit(0);
