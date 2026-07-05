# Monstrance Clock — MIDI Practice App

A tiny, fun, browser-based practice tool for learning "Monstrance Clock" by Ghost on a MIDI keyboard.
No music theory, no scales — just highlighted keys, phrase-by-phrase practice, and live MIDI feedback.

## How it works
- Open `index.html` in a MIDI-capable browser (Chrome/Edge recommended) with your MIDI keyboard connected via USB.
- Pick a hand: Right → Left → Both.
- The keyboard highlights the next note(s) to play for the current phrase.
- Play them — correct notes turn green and the app auto-advances to the next step.
- Toggle "Just messing around" to ignore velocity (great for slow practice); untick it once you want to play at real dynamics.
- Progress is saved automatically in your browser (localStorage) — close the tab and come back anytime.

## Note on accuracy
The `chorus-riff` phrase in `song-data.js` was transcribed directly from the attached sheet music PDF.
The `intro` and `verse` phrases are draft placeholders to get the app working — please listen to the
track and adjust the note arrays in `song-data.js` to match exactly; each note is a MIDI number
(60 = middle C).

## Deploying
Push to GitHub, then import the repo in Vercel as a static site (no build step needed).
