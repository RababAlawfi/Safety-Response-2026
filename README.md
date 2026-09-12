# Safety Response 2026 — Leaderboard Edition

## What this version does
- 5 English safety missions
- Black + gold game UI
- Highest score wins
- If scores tie, fastest completion time wins
- Saves Name, Score and Time to Google Sheets
- Displays a live Top 3 leaderboard

## 1. Create the Google Sheet
Create a new Google Sheet. You do NOT need to create the Scores tab manually; the script creates it.

## 2. Add Apps Script
In the Sheet:
Extensions → Apps Script

Delete the sample code and paste everything from `Code.gs`.

## 3. Deploy as Web App
Deploy → New deployment → Web app

Recommended settings:
- Execute as: Me
- Who has access: Anyone

Copy the Web app URL.

## 4. Connect the game
Open `index.html` and replace:

PASTE_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE

with your Web App URL.

## 5. Upload to GitHub Pages
Upload:
- index.html
- industrial_scene_reference.jpg

Enable GitHub Pages for the repository.

## Ranking rule
1. Highest Score
2. Fastest Time if Score is tied

The leaderboard always sorts using those two rules and displays the Top 3.

## Important
For a live event, use one published GitHub Pages URL for all participants. Everyone's results will go into the same Google Sheet.

The current game image is a visual reference crop. Replace `industrial_scene_reference.jpg` later with the final approved industrial scene if you want a cleaner full-screen image.
