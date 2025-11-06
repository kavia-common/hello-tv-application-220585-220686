# Tizen Hello TV - Ocean Professional

- Dev: npm run dev (serves on port 5173 by Vite; container previews on 3000 through proxy)
- Preview: npm run preview (port 4173)
- Build: npm run build (outputs to dist/)
- Package (Tizen WGT): npm run build && npm run package:tizen

Notes:
- Back key is handled gracefully. In browser preview it logs, on device it uses tizen.application.getCurrentApplication().exit().
- Theme is defined in src/App.css with Ocean Professional variables (primary #2563EB, secondary #F59E0B).
- If CI uses Node 18, Vite and plugin are pinned to Vite 5 to ensure compatibility.
