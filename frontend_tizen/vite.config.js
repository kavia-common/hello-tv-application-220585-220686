import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// PUBLIC_INTERFACE
// Vite config for Tizen TV app compatible with Node 18 and Vite 5.x.
// Uses only Node-18-safe APIs and avoids custom hashing or Node 20-only code paths.
export default defineConfig({
  plugins: [react()],
})
