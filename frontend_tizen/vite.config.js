import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import htmlHashShim from './vite.html-hash-shim.js'

// Vite configuration compatible with Node 18 and Vite 5
// Rollup settings are left to Vite defaults; a local rollup.config.mjs exists as a shim for stability.
export default defineConfig({
  plugins: [htmlHashShim(), react()],
})
