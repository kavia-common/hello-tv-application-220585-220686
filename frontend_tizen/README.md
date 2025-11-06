# React + Vite (Node 18 compatible)

This app uses Vite 5.4.x pinned and @vitejs/plugin-react 4.x to ensure compatibility with Node 18.

- Dev: npm run dev (port 3000)
- Build: npm run build
- Preview: npm run preview (port 3000)

The dev server uses the local Vite binary (node ./node_modules/vite/bin/vite.js) to ensure the pinned Vite 5.x is used.

If an older cache still pulls a newer Vite, perform a clean install so overrides take effect:
1) rm -rf node_modules package-lock.json
2) npm ci
