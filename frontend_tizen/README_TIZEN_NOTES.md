# Tizen Hello TV - Ocean Professional

- Dev: npm run dev (serves on port 3000; container previews on 3000 through proxy)
- Preview: npm run preview (port 3000)
- Build: npm run build (outputs to dist/)
- Package (Tizen WGT): npm run build && npm run package:tizen

Notes:
- Back key is handled gracefully. In browser preview it logs, on device it uses tizen.application.getCurrentApplication().exit().
- Theme is defined in src/App.css with Ocean Professional variables (primary #2563EB, secondary #F59E0B).
- Vite and @vitejs/plugin-react are pinned to Node 18–compatible versions (Vite 5.4.x, plugin-react 4.x). No Node 20-only APIs are used.
- If you see "Vite requires Node.js 20.19+" or "crypto.hash is not a function", perform a clean install to ensure Vite 5 is used:
  1) rm -rf node_modules package-lock.json
  2) npm ci
  The .npmrc enables overrides to pin vite@5.4.x, and scripts include a vite-guard to prevent running with incompatible versions.
