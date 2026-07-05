// app.js
// Monstrance Clock — MIDI Practice Ritual
// Core logic: Web Audio piano engine, phrase playback, keyboard rendering,
// Web MIDI input, note matching, progress persistence.

const STORAGE_KEY = "monstrance_progress_v2";

const state = {
  hand: "right",
  phraseIndex: 0,
  forgivingVelocity: true,
  activeNotesPlayed: new Set(),
  midiInput: null,
  isPlayingDemo: false,
};

// ---------------------------------------------------------------
// Web Audio piano engine (simple additive/FM synth piano voice —
// no external samples needed, works offline, decent piano-ish tone)
// ---------------------------------------------------------------
let audioCtx = null;
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

// Plays a single note with a piano-like envelope: quick attack,
// exponential decay, layered harmonics for a fuller tone.
function playNote(midiNote, startTime, duration, velocity = 0.85){
  const ctx = ensureAudioCtx();
  const freq = midiToFreq(midiNote);
  const t0 = startTime;
  const gainMain = ctx.createGain();
  gainMain.gain.setValueAtTime(0, t0);
  gainMain.gain.linearRampToValueAtTime(velocity * 0.5, t0 + 0.008);
  gainMain.gain.exponentialRampToValueAtTime(0.0008, t0 + duration + 1.1);
  gainMain.connect(ctx.destination);

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
  });
}

// Plays an entire phrase's sequence (right, left, or merged) in real time,
// scheduled using the note "t" offsets already extracted from the MIDI file.
function playPhraseAudio(seq, onDone){
  const ctx = ensureAudioCtx();
  const now = ctx.currentTime + 0.05;
  let maxEnd = 0;
  seq.forEach(step=>{
    step.notes.forEach(n=>{
      playNote(n, now + step.t, step.dur);
    });
    maxEnd = Math.max(maxEnd, step.t + step.dur);
  });
  state.isPlayingDemo = true;
  setTimeout(()=>{
    state.isPlayingDemo = false;
    if (onDone) onDone();
  }, (maxEnd + 0.3) * 1000);
}

// ---------- Keyboard rendering ----------
const KEYBOARD_START = 24; // C1, covers full song range with margin
const KEYBOARD_END = 96;   // C7
const NOTE_NAMES = ["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"];
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

  for (let m = KEYBOARD_START; m <= KEYBOARD_END; m++){
    const pitchClass = m % 12;
    if (!BLACK_OFFSETS.includes(pitchClass)){
      const el = document.createElement("div");
      el.className = "white-key";
      el.dataset.note = m;
      el.textContent = midiToName(m).replace(/[0-9-]/g,"");
      el.style.left = (whiteIndex*30) + "px";
      kb.appendChild(el);
      whiteKeyEls[m] = { el, whiteIndex };
      whiteIndex++;
    }
  }
  kb.style.width = (whiteIndex*30) + "px";

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
    // group near-simultaneous notes (within 40ms) into single steps
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
  clearKeyStates();
  showFeedback("Listen closely...", "good");

  seq.forEach(step=>{
    setTimeout(()=>{
      step.notes.forEach(n=>{
        const el = getKeyEl(n);
        if (el) el.classList.add("key-demo");
      });
      setTimeout(()=>{
        step.notes.forEach(n=>{
          const el = getKeyEl(n);
          if (el) el.classList.remove("key-demo");
        });
      }, step.dur * 1000 + 60);
    }, step.t * 1000 + 50);
  });

  playPhraseAudio(seq, ()=>{
    showFeedback("Your turn — play it back", "good");
    stepIndex = 0;
    state.activeNotesPlayed.clear();
    highlightCurrentStep();
  });
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
  document.getElementById("replay-phrase").addEventListener("click", ()=> { stepIndex=0; state.activeNotesPlayed.clear(); highlightCurrentStep(); showFeedback("Reset to start of phrase", "good"); });
  document.getElementById("play-demo").addEventListener("click", playCurrentPhraseDemo);
  document.getElementById("forgiving-velocity").addEventListener("change", (e)=>{ state.forgivingVelocity = e.target.checked; });
  document.getElementById("reset-progress").addEventListener("click", ()=>{
    localStorage.removeItem(STORAGE_KEY);
    renderProgressPanel();
    showFeedback("Progress reset", "good");
  });
});
