# Safety Response 2026

Mobile-first interactive safety game for Safety Forward 2026 – Western Region Manufacturing.

## Files
- `index.html` — participant game
- `industrial_scene_reference.jpg` — Mission 1 industrial scene
- `leaderboard.html` — separate organizer/display Top 3 page
- `Code.gs` — Google Apps Script backend for Google Sheets

## Game flow
1. Enter participant name.
2. Complete 5 missions.
3. Mission 1: select exactly 3 areas. Submit is enabled for ANY 3 selections. Correct selected areas turn green; incorrect selections turn red; missed correct hazards are shown green.
4. Missions 2–4: choose the safest response.
5. Mission 5 ends the game immediately after the decision.
6. Participant sees only final score and completion time. No replay/Top 3 button is shown.
7. Organizer can open `leaderboard.html` separately to display the live Top 3.

## Google Sheets setup
1. Create a Google Sheet.
2. Open Extensions → Apps Script.
3. Paste the contents of `Code.gs`.
4. Deploy → New deployment → Web app.
5. Execute as: Me.
6. Who has access: Anyone.
7. Copy the Web App URL.
8. In BOTH `index.html` and `leaderboard.html`, replace:
   `PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE`
   with your Web App URL.
9. Upload the updated files to GitHub Pages.

The Sheet will use a `Scores` tab with:
`Timestamp | Name | Score | Time (sec)`

Leaderboard ranking is highest score first, then fastest completion time when scores are tied.

## GitHub Pages
Upload these files to the repository root and make sure the participant file is named exactly `index.html`.
Then enable Settings → Pages → Deploy from branch → `main` → `/ (root)`.

Participant page: the repository's GitHub Pages URL.
Organizer leaderboard: the same URL followed by `/leaderboard.html`.
