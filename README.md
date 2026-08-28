# GYMLOG

Personal workout tracker. Logs exercises (with weight, sets, reps, body part), times your session, recommends post-workout stretches based on what you trained, visualises which muscles you worked via a body silhouette — and doubles as the data collection method for the **Windmill Dunk Study** (Study tab).

All data is stored locally on your device (no server, no account, no internet required after install).

## Features
- **Workout logger** — exercise name, body part, weight (kg/lb), sets, reps
- **Auto-starting timer** — starts when you log your first exercise; pause / resume / end
- **End-of-session capture** — ending a workout now asks for session type + knee/back pain (0-10) + RPE before saving, feeding the Study tab automatically
- **Body silhouette** — muscles light up as you log work for them
- **Stretch recommendations** — dynamic + isometric stretches per body part trained
- **History** — every completed workout saved with duration, exercises, total volume, and its session type/pain/RPE
- **Study tab** — the Windmill Dunk Study protocol built into the app:
  - **Phase Tracker** — current phase, days to the Dec 31 2026 goal, days to the next bi-weekly re-test (auto-computed from the Aug 20 baseline)
  - **Pain / RPE log** — quick knee/back pain + RPE entry for any session (Arms + Shoulders, Chest + Pull, Leg Day A/B, Basketball, Mobility, Re-Test), with the protocol's action thresholds shown inline as you move the sliders
  - **Adverse Event Log** — auto-populated whenever knee or back pain logs at 3+, matching the protocol's threshold table
  - **Outcome Measures / Re-Test log** — standing/running vertical jump, broad jump, 10m/20m sprint, squat/bench top set, calf raise max, max pull-ups, bodyweight, body fat%, charted over time
  - **Windmill Attempts** — pass/fail log of actual dunk attempts, with a running clean-pass count
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
All data lives in your browser's `localStorage` (keys: `gymlog_current`, `gymlog_history`, `gymlog_profile`, `gymlog_unit_prefs`, `gymlog_pain_log`, `gymlog_test_results`, `gymlog_windmill_attempts`). To reset, clear site data in your browser settings. Data does not sync across devices — if you want that later, it would need a backend (Firebase, Supabase, or similar). Use **Export** on the History tab regularly as a backup — it now includes the Study tab's pain log, test results, and windmill attempts alongside your workouts.

## Customising
- **Change units (kg → lbs)**: in `index.html`, search `(kg)` and replace.
- **Change accent colour**: in `index.html`, find `--accent: #ff4d1f` near the top of the `<style>` block.
- **Add/edit stretches**: in `index.html`, find the `STRETCH_LIBRARY` constant in the JS section.
- **Add body parts**: edit the `<select id="exBodyPart">` options and add a matching entry in the stretch targets.
- **Update the study protocol**: in `index.html`, find `STUDY_BASELINE`, `STUDY_GOAL`, and `STUDY_PHASES` in the JS section — these drive the Phase Tracker and re-test countdown. `getPainAction()` holds the pain-threshold guidance if those ever change.
