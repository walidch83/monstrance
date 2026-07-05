// app.js
// Core app logic: keyboard rendering, Web MIDI input, phrase practice loop, progress persistence.

const STORAGE_KEY = "monstrance_progress_v1";

const state = {
  hand: "right",
  phraseIndex: 0,
  forgivingVelocity: true,
  activeNotesPlayed: new Set(),
  midiInput: null,
};

// ---------- Keyboard rendering ----------
const KEYBOARD_START = 48; // C3
const KEYBOARD_END = 89;   // F6 approx, covers song range with margin
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
      el.style.left = (whiteIndex*42) + "px";
      kb.appendChild(el);
      whiteKeyEls[m] = { el, whiteIndex };
      whiteIndex++;
    }
  }
  kb.style.width = (whiteIndex*42) + "px";

  for (let m = KEYBOARD_START; m <= KEYBOARD_END; m++){
    const pitchClass = m % 12;
    if (BLACK_OFFSETS.includes(pitchClass)){
      const prevWhite = whiteKeyEls[m-1];
      if (!prevWhite) continue;
      const el = document.createElement("div");
      el.className = "black-key";
      el.dataset.note = m;
      el.style.left = (prevWhite.whiteIndex*42 + 30) + "px";
      kb.appendChild(el);
    }
  }
}

function getKeyEl(note){
  return document.querySelector('[data-note="'+note+'"]');
}

function clearKeyStates(){
  document.querySelectorAll(".white-key, .black-key").forEach(el=>{
    el.classList.remove("key-target","key-correct","key-wrong","key-dim");
  });
}

// ---------- Phrase logic ----------
function currentPhrase(){
  return SONG.phrases[state.phraseIndex];
}

function currentHandSequence(){
  const phrase = currentPhrase();
  if (state.hand === "both"){
    // merge right+left by index for simplicity
    const len = Math.max(phrase.right.length, phrase.left.length);
    const merged = [];
    for (let i=0;i<len;i++){
      const r = phrase.right[i] ? phrase.right[i].notes : [];
      const l = phrase.left[i] ? phrase.left[i].notes : [];
      merged.push({ notes: [...r, ...l] });
    }
    return merged;
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
      chip.textContent = hand + " · " + p.label + (data[key] ? " ✓" : "");
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
    inputs.forEach((input, i)=>{
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
  document.getElementById("forgiving-velocity").addEventListener("change", (e)=>{ state.forgivingVelocity = e.target.checked; });
  document.getElementById("reset-progress").addEventListener("click", ()=>{
    localStorage.removeItem(STORAGE_KEY);
    renderProgressPanel();
    showFeedback("Progress reset", "good");
  });
});
