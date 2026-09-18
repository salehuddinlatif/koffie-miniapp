# KOFFIE Mini App

Telegram Mini App untuk KOFFIE (Jln. Mentol, Segamat) — static HTML/JS, served via GitHub Pages.

- **URL kekal:** https://salehuddinlatif.github.io/koffie-miniapp/
- **Bot:** @koffieebot (order bot standalone, di PC owner)
- **Edit:** `data.js` (menu/harga/info), `index.html` (UI), `assets/`

## Deploy

Push ke `main` → GitHub Pages auto-rebuild (~1-2 min). Source of truth folder PC: `koffie-pages/`.

```bash
cd koffie-pages
# edit data.js / index.html / assets
git add -A && git commit -m "kemas kini menu" && git push origin main
```
