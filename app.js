// app.js
// Monstrance Clock — MIDI Practice Ritual
// Core logic: Web Audio piano engine (single-instance, stoppable, speed-controlled),
// phrase playback, keyboard rendering, Web MIDI input, note matching, progress persistence.

const STORAGE_KEY = "monstrance_progress_v2";

const state = {
  hand: "right",
  phraseIndex: 0,
  forgivingVelocity: true,
  activeNotesPlayed: new Set(),
  midiInput: null,
  isPlayingDemo: false,
  playbackSpeed: 1.0,
};

// ---------------------------------------------------------------
// Web Audio piano engine — single active playback session at a time.
// All scheduled oscillators + visual-highlight timeouts are tracked
// so a new "play" or "restart" always fully stops the previous one
// before starting, and a dedicated Stop button can kill it instantly.
// ---------------------------------------------------------------
let audioCtx = null;
let activeSources = [];   // { osc, gainMain } currently scheduled/playing
let activeTimeouts = [];  // setTimeout ids for visual key highlighting
let playbackToken = 0;    // increments every time a new playback starts;
                           // stale callbacks check this before acting

function ensureAudioCtx(){
  if (!audioCtx){
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }
  if (audioCtx.state === "suspended") audioCtx.resume();
  return audioCtx;
}

function midiToFreq(m){
  return 440 * Math.pow(2, (m - 69) / 12);
}

// Immediately silences and disconnects every currently scheduled note,
// clears all pending visual-highlight timeouts, and marks demo mode off.
// Call this before starting any new playback, and on the Stop button.
function stopAllPlayback(){
  playbackToken++; // invalidate any in-flight completion callbacks

  const ctx = audioCtx;
  const now = ctx ? ctx.currentTime : 0;
  activeSources.forEach(({ osc, gainMain })=>{
    try{
      gainMain.gain.cancelScheduledValues(now);
      gainMain.gain.setValueAtTime(gainMain.gain.value, now);
      gainMain.gain.linearRampToValueAtTime(0.0001, now + 0.03);
      osc.stop(now + 0.04);
    }catch(e){ /* already stopped */ }
  });
  activeSources = [];

  activeTimeouts.forEach(id => clearTimeout(id));
  activeTimeouts = [];

  state.isPlayingDemo = false;
  clearKeyStates();
  updatePlaybackButtons();
}

// ---------------------------------------------------------------
// Master bus with a limiter/compressor, so stacking many simultaneous
// notes (e.g. "Both Hands" mode with full chords in each hand) never
// clips or distorts the output — this was the source of the audio
// overload/clipping reported when playing dense both-hand passages.
// ---------------------------------------------------------------
let masterBus = null;
function ensureMasterBus(){
  const ctx = ensureAudioCtx();
  if (!masterBus){
    const compressor = ctx.createDynamicsCompressor();
    compressor.threshold.value = -18;
    compressor.knee.value = 24;
    compressor.ratio.value = 12;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;

    const masterGain = ctx.createGain();
    masterGain.gain.value = 0.9;

    compressor.connect(masterGain);
    masterGain.connect(ctx.destination);
    masterBus = { compressor, masterGain };
  }
  return masterBus;
}

// Plays a single note with a piano-like envelope: quick attack,
// exponential decay, layered harmonics for a fuller tone. Routes
// through the shared master bus (compressor) instead of straight to
// destination, and scales per-note gain down as more notes stack up
// simultaneously, so chords in "Both Hands" mode never clip.
function playNote(midiNote, startTime, duration, velocity = 0.85, polyphonyScale = 1){
  const ctx = ensureAudioCtx();
  const bus = ensureMasterBus();
  const freq = midiToFreq(midiNote);
  const t0 = startTime;
  const safeVelocity = velocity * polyphonyScale;

  const gainMain = ctx.createGain();
  gainMain.gain.setValueAtTime(0, t0);
  gainMain.gain.linearRampToValueAtTime(safeVelocity * 0.5, t0 + 0.008);
  gainMain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration + 1.1);
  gainMain.connect(bus.compressor);

  const harmonics = [
    { ratio: 1,   gain: 1.0,  type: "triangle" },
    { ratio: 2,   gain: 0.35, type: "sine" },
    { ratio: 3,   gain: 0.12, type: "sine" },
    { ratio: 4,   gain: 0.06, type: "sine" }
  ];

  harmonics.forEach(h=>{
    const osc = ctx.createOscillator();
    osc.type = h.type;
    osc.frequency.setValueAtTime(freq * h.ratio, t0);
    const hGain = ctx.createGain();
    hGain.gain.value = h.gain;
    osc.connect(hGain);
    hGain.connect(gainMain);
    osc.start(t0);
    osc.stop(t0 + duration + 1.2);
    activeSources.push({ osc, gainMain });
  });
}

// Plays an entire phrase's sequence (right, left, or merged), scheduled
// using the note "t" offsets from the MIDI file, stretched by the current
// playback speed (e.g. speed=0.25 plays 4x slower).
function playPhraseAudio(seq, onDone){
  stopAllPlayback(); // ensure only ONE engine ever runs at a time
  const myToken = playbackToken; // (was incremented inside stopAllPlayback, but
                                   // we want THIS session's token, so re-read it)
  const token = playbackToken;

  const ctx = ensureAudioCtx();
  const speed = state.playbackSpeed;
  const now = ctx.currentTime + 0.05;
  let maxEnd = 0;

  seq.forEach(step=>{
    const scaledT = step.t / speed;
    const scaledDur = Math.max(step.dur / speed, 0.05);
    // More simultaneous notes in this step (e.g. both-hands chords) means
    // each individual note is scaled down so the combined loudness stays
    // consistent and never overloads the output.
    const polyphonyScale = 1 / Math.sqrt(Math.max(step.notes.length, 1));
    step.notes.forEach(n=>{
      playNote(n, now + scaledT, scaledDur, 0.85, polyphonyScale);
    });
    maxEnd = Math.max(maxEnd, scaledT + scaledDur);

    const highlightOnId = setTimeout(()=>{
      if (token !== playbackToken) return;
      step.notes.forEach(n=>{
        const el = getKeyEl(n);
        if (el) el.classList.add("key-demo");
      });
    }, scaledT * 1000 + 50);
    activeTimeouts.push(highlightOnId);

    const highlightOffId = setTimeout(()=>{
      if (token !== playbackToken) return;
      step.notes.forEach(n=>{
        const el = getKeyEl(n);
        if (el) el.classList.remove("key-demo");
      });
    }, (scaledT + scaledDur) * 1000 + 60);
    activeTimeouts.push(highlightOffId);
  });

  state.isPlayingDemo = true;
  updatePlaybackButtons();

  const doneId = setTimeout(()=>{
    if (token !== playbackToken) return; // a newer playback superseded this one
    state.isPlayingDemo = false;
    updatePlaybackButtons();
    if (onDone) onDone();
  }, (maxEnd + 0.3) * 1000);
  activeTimeouts.push(doneId);
}

function updatePlaybackButtons(){
  const playBtn = document.getElementById("play-demo");
  const stopBtn = document.getElementById("stop-demo");
  if (!playBtn || !stopBtn) return;
  if (state.isPlayingDemo){
    playBtn.disabled = true;
    playBtn.textContent = "🔊 Playing...";
    stopBtn.classList.add("visible");
  } else {
    playBtn.disabled = false;
    playBtn.textContent = "🔊 Play this phrase";
    stopBtn.classList.remove("visible");
  }
}

// ---------- Keyboard rendering ----------
const KEYBOARD_START = 24; // C1, covers full song range with margin
const KEYBOARD_END = 96;   // C7
const NOTE_NAMES = ["C","Db","D","Eb","E","F","Gb","G","Ab","A","Bb","B"];
const BLACK_OFFSETS = [1,3,6,8,10];

function midiToName(m){
  const name = NOTE_NAMES[m % 12];
  const octave = Math.floor(m/12) - 1;
  return name + octave;
}

function buildKeyboard(){
  const kb = document.getElementById("keyboard");
  kb.innerHTML = "";
  let whiteIndex = 0;
  const whiteKeyEls = {};

  // White keys are plain flex children with NO inline "left" offset —
  // the flex container already places them sequentially at the correct
  // position. Adding "left" on top of flex flow was the bug that made
  // notes appear octaves apart: it compounded an extra offset per key.
  for (let m = KEYBOARD_START; m <= KEYBOARD_END; m++){
    const pitchClass = m % 12;
    if (!BLACK_OFFSETS.includes(pitchClass)){
      const el = document.createElement("div");
      el.className = "white-key";
      el.dataset.note = m;
      el.textContent = midiToName(m).replace(/[0-9-]/g,"");
      kb.appendChild(el);
      whiteKeyEls[m] = { el, whiteIndex };
      whiteIndex++;
    }
  }
  kb.style.width = (whiteIndex*30) + "px";

  // Black keys are the ONLY keys that need absolute positioning, since
  // they sit between two white keys rather than occupying their own
  // flex slot. Their offset is computed from the preceding white key's
  // real index, not from any inline-left value on that white key.
  for (let m = KEYBOARD_START; m <= KEYBOARD_END; m++){
    const pitchClass = m % 12;
    if (BLACK_OFFSETS.includes(pitchClass)){
      const prevWhite = whiteKeyEls[m-1];
      if (!prevWhite) continue;
      const el = document.createElement("div");
      el.className = "black-key";
      el.dataset.note = m;
      el.style.left = (prevWhite.whiteIndex*30 + 20) + "px";
      kb.appendChild(el);
    }
  }
}

function getKeyEl(note){
  return document.querySelector('[data-note="'+note+'"]');
}

function clearKeyStates(){
  document.querySelectorAll(".white-key, .black-key").forEach(el=>{
    el.classList.remove("key-target","key-correct","key-wrong","key-dim","key-demo");
  });
}

// ---------- Phrase logic ----------
function currentPhrase(){
  return SONG.phrases[state.phraseIndex];
}

function currentHandSequence(){
  const phrase = currentPhrase();
  if (state.hand === "both"){
    const merged = [...phrase.right, ...phrase.left]
      .slice()
      .sort((a,b)=> a.t - b.t);
    const grouped = [];
    merged.forEach(step=>{
      const last = grouped[grouped.length-1];
      if (last && Math.abs(last.t - step.t) < 0.04){
        last.notes = [...new Set([...last.notes, ...step.notes])];
      } else {
        grouped.push({ t: step.t, dur: step.dur, notes: [...step.notes] });
      }
    });
    return grouped;
  }
  return phrase[state.hand];
}

let stepIndex = 0;

function renderPhraseLabel(){
  document.getElementById("phrase-label").textContent =
    (state.phraseIndex+1) + " / " + SONG.phrases.length + " — " + currentPhrase().label;
}

function highlightCurrentStep(){
  clearKeyStates();
  const seq = currentHandSequence();
  if (!seq || !seq.length) return;
  const step = seq[stepIndex];
  step.notes.forEach(n=>{
    const el = getKeyEl(n);
    if (el) el.classList.add("key-target");
  });
}

function showFeedback(msg, type){
  const banner = document.getElementById("feedback-banner");
  banner.textContent = msg;
  banner.className = type || "";
  if (type === "good"){
    setTimeout(()=>{ if(banner.textContent===msg) banner.textContent=""; }, 1600);
  }
}

function advanceStep(){
  const seq = currentHandSequence();
  stepIndex++;
  if (stepIndex >= seq.length){
    stepIndex = 0;
    markPhraseDone();
    showFeedback("Phrase complete! 🎉", "good");
  } else {
    showFeedback("Nice, keep going ➜", "good");
  }
  state.activeNotesPlayed.clear();
  highlightCurrentStep();
}

function checkPlayedNotes(){
  if (state.isPlayingDemo) return;
  const seq = currentHandSequence();
  if (!seq || !seq.length) return;
  const target = new Set(seq[stepIndex].notes);
  const played = state.activeNotesPlayed;

  let allCorrect = target.size > 0 && [...target].every(n=>played.has(n));
  let hasWrong = [...played].some(n=>!target.has(n));

  if (hasWrong){
    showFeedback("Not quite — try again", "bad");
    target.forEach(n=>{ const el=getKeyEl(n); if(el) el.classList.add("key-wrong"); });
  } else if (allCorrect){
    advanceStep();
  }
}

// ---------- Demo playback ----------
function playCurrentPhraseDemo(){
  const seq = currentHandSequence();
  if (!seq || !seq.length) return;
  showFeedback("Listen closely...", "good");

  playPhraseAudio(seq, ()=>{
    showFeedback("Your turn — play it back", "good");
    stepIndex = 0;
    state.activeNotesPlayed.clear();
    highlightCurrentStep();
  });
}

function restartCurrentPhrase(){
  const wasPlayingDemo = state.isPlayingDemo;
  stopAllPlayback(); // instant kill, no lingering fade-out wait
  stepIndex = 0;
  state.activeNotesPlayed.clear();
  if (wasPlayingDemo){
    playCurrentPhraseDemo();
  } else {
    highlightCurrentStep();
    showFeedback("Reset to start of phrase", "good");
  }
}

// ---------- Progress persistence ----------
function loadProgress(){
  try{
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};
  }catch(e){ return {}; }
}
function saveProgress(data){
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}
function markPhraseDone(){
  const data = loadProgress();
  const key = state.hand + ":" + currentPhrase().id;
  data[key] = true;
  saveProgress(data);
  renderProgressPanel();
}
function renderProgressPanel(){
  const data = loadProgress();
  const list = document.getElementById("progress-list");
  list.innerHTML = "";
  ["right","left","both"].forEach(hand=>{
    SONG.phrases.forEach(p=>{
      const key = hand + ":" + p.id;
      const chip = document.createElement("span");
      chip.className = "progress-chip" + (data[key] ? " done" : "");
      chip.textContent = hand + " · " + p.label.split(" (")[0] + (data[key] ? " ✓" : "");
      chip.addEventListener("click", ()=>{
        stopAllPlayback();
        state.hand = hand;
        document.querySelectorAll(".hand-tab").forEach(b=> b.classList.toggle("active", b.dataset.hand===hand));
        setPhrase(SONG.phrases.indexOf(p));
      });
      list.appendChild(chip);
    });
  });
}

// ---------- MIDI ----------
function initMIDI(){
  if (!navigator.requestMIDIAccess){
    document.getElementById("midi-indicator").textContent = "⚠️ Web MIDI not supported in this browser";
    return;
  }
  navigator.requestMIDIAccess().then(access=>{
    const select = document.getElementById("midi-input-select");
    select.innerHTML = "";
    const inputs = Array.from(access.inputs.values());
    if (!inputs.length){
      document.getElementById("midi-indicator").textContent = "⚠️ No MIDI device found";
      return;
    }
    inputs.forEach((input)=>{
      const opt = document.createElement("option");
      opt.value = input.id;
      opt.textContent = input.name;
      select.appendChild(opt);
    });
    function attach(input){
      state.midiInput = input;
      input.onmidimessage = handleMIDIMessage;
      document.getElementById("midi-indicator").textContent = "✅ Connected: " + input.name;
    }
    attach(inputs[0]);
    select.onchange = ()=>{
      const chosen = inputs.find(i=>i.id === select.value);
      if (chosen) attach(chosen);
    };
    access.onstatechange = ()=> initMIDI();
  }).catch(()=>{
    document.getElementById("midi-indicator").textContent = "⚠️ MIDI access denied";
  });
}

function handleMIDIMessage(event){
  const [status, note, velocity] = event.data;
  const command = status & 0xf0;
  const el = getKeyEl(note);

  if (command === 0x90 && velocity > 0){
    if (state.forgivingVelocity || velocity >= 20){
      state.activeNotesPlayed.add(note);
      if (el) el.classList.add(target(el)?"key-correct":"key-wrong");
    }
    checkPlayedNotes();
  } else if (command === 0x80 || (command===0x90 && velocity===0)){
    state.activeNotesPlayed.delete(note);
  }
}
function target(el){ return el.classList.contains("key-target"); }

// ---------- UI wiring ----------
function setHand(hand){
  stopAllPlayback();
  state.hand = hand;
  stepIndex = 0;
  state.activeNotesPlayed.clear();
  document.querySelectorAll(".hand-tab").forEach(b=>{
    b.classList.toggle("active", b.dataset.hand === hand);
  });
  renderPhraseLabel();
  highlightCurrentStep();
}

function setPhrase(idx){
  stopAllPlayback();
  state.phraseIndex = Math.max(0, Math.min(SONG.phrases.length-1, idx));
  stepIndex = 0;
  state.activeNotesPlayed.clear();
  renderPhraseLabel();
  highlightCurrentStep();
}

document.addEventListener("DOMContentLoaded", ()=>{
  buildKeyboard();
  renderPhraseLabel();
  highlightCurrentStep();
  renderProgressPanel();
  initMIDI();

  document.querySelectorAll(".hand-tab").forEach(btn=>{
    btn.addEventListener("click", ()=> setHand(btn.dataset.hand));
  });
  document.getElementById("prev-phrase").addEventListener("click", ()=> setPhrase(state.phraseIndex-1));
  document.getElementById("next-phrase").addEventListener("click", ()=> setPhrase(state.phraseIndex+1));
  document.getElementById("play-demo").addEventListener("click", playCurrentPhraseDemo);
  document.getElementById("stop-demo").addEventListener("click", stopAllPlayback);
  document.getElementById("replay-phrase").addEventListener("click", restartCurrentPhrase);
  document.getElementById("forgiving-velocity").addEventListener("change", (e)=>{ state.forgivingVelocity = e.target.checked; });
  document.getElementById("playback-speed").addEventListener("change", (e)=>{
    state.playbackSpeed = parseFloat(e.target.value);
  });
  document.getElementById("reset-progress").addEventListener("click", ()=>{
    localStorage.removeItem(STORAGE_KEY);
    renderProgressPanel();
    showFeedback("Progress reset", "good");
  });
});
