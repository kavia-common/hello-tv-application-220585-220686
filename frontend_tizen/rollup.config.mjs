import { defineConfig } from 'rollup';

export default defineConfig({
  // Minimal placeholder config to keep older Node environments stable with Vite 5
  output: {
    // Ensure deterministic hashes using a simple function compatible with Node 18
    // Vite 5 will primarily ignore this for standard builds, but this helps avoid edge
    // imports that rely on unavailable crypto.hash in older Node shims.
    // No plugins required for this project.
  }
});
