# GYMLOG

Personal workout tracker. Logs exercises (with weight, sets, reps, body part), times your session, recommends post-workout stretches based on what you trained, and visualises which muscles you worked via a body silhouette.

All data is stored locally on your device (no server, no account, no internet required after install).

## Features
- **Workout logger** — exercise name, body part, weight (kg), sets, reps
- **Auto-starting timer** — starts when you log your first exercise; pause / resume / end
- **Body silhouette** — muscles light up as you log work for them
- **Stretch recommendations** — dynamic + isometric stretches per body part trained
- **History** — every completed workout saved with duration, exercises, and total volume
- **Offline-capable PWA** — installable on your phone, works without internet

## Files
- `index.html` — the entire app
- `manifest.webmanifest` — PWA manifest (enables Add to Home Screen)
- `sw.js` — service worker (offline caching)
- `icon.svg` — app icon

## Deploy to GitHub Pages
1. Create a new GitHub repository (e.g. `gymlog`).
2. Upload all four files to the repo root.
3. Go to **Settings → Pages**.
4. Under *Source*, select `main` branch and `/ (root)`. Save.
5. Wait ~1 minute. Your app is live at `https://<your-username>.github.io/gymlog/`.

## Install on your phone
1. Open the GitHub Pages URL in **Chrome (Android)** or **Safari (iOS)**.
2. **Android**: tap menu → *Add to Home screen* → *Install*.
3. **iOS**: tap Share → *Add to Home Screen*.

It will then launch full-screen with its own icon, exactly like a native app.

## Data
All data lives in your browser's `localStorage`. To reset, clear site data in your browser settings. Data does not sync across devices — if you want that later, it would need a backend (Firebase, Supabase, or similar).

## Customising
- **Change units (kg → lbs)**: in `index.html`, search `(kg)` and replace.
- **Change accent colour**: in `index.html`, find `--accent: #ff4d1f` near the top of the `<style>` block.
- **Add/edit stretches**: in `index.html`, find the `STRETCHES` constant in the JS section.
- **Add body parts**: edit the `<select id="exBodyPart">` options and add a matching entry in `STRETCHES`.
