// song-data.js
// Monstrance Clock - Ghost (Indio Marcato / A Ghoul Writer arrangement)
//
// TRANSCRIPTION NOTE (read this before practicing):
// - "outro-riff" below is transcribed DIRECTLY and ACCURATELY from the
//   attached sheet music (the LilyPond-notated final section, bars 123-155).
//   You can trust these notes.
// - "intro" and "verse" are DRAFT PLACEHOLDERS only, meant to demonstrate
//   the app's structure. The source PDF's notation for those sections used
//   music glyphs that could not be reliably read as exact pitches. Please
//   verify/replace these two phrases by ear or with a cleaner score before
//   relying on them.
//
// MIDI note numbers: 60 = middle C (C4).

const SONG = {
  title: "Monstrance Clock",
  artist: "Ghost",
  phrases: [
    {
      id: "intro",
      label: "Intro (verify by ear)",
      verified: false,
      right: [
        { notes: [77], name: "F5" },
        { notes: [77], name: "F5" },
        { notes: [79], name: "G5" },
        { notes: [81], name: "A5" },
        { notes: [84], name: "C6" }
      ],
      left: [
        { notes: [53], name: "F3" },
        { notes: [55], name: "G3" },
        { notes: [60], name: "C4" },
        { notes: [60], name: "C4" }
      ]
    },
    {
      id: "verse",
      label: "Verse (verify by ear)",
      verified: false,
      right: [
        { notes: [70], name: "Bb4" },
        { notes: [72], name: "C5" },
        { notes: [74], name: "D5" },
        { notes: [76], name: "E5" }
      ],
      left: [
        { notes: [58], name: "Bb3" },
        { notes: [55], name: "G3" },
        { notes: [50], name: "D3" }
      ]
    },
    {
      id: "outro-riff",
      label: "Outro riff (verified)",
      verified: true,
      right: [
        { notes: [77], name: "F5" },
        { notes: [77], name: "F5" },
        { notes: [79], name: "G5" },
        { notes: [81], name: "A5" },
        { notes: [84], name: "C6" },
        { notes: [84], name: "C6" },
        { notes: [86], name: "D6" },
        { notes: [86], name: "D6" },
        { notes: [84], name: "C6" },
        { notes: [84], name: "C6" },
        { notes: [82], name: "Bb5" },
        { notes: [82], name: "Bb5" }
      ],
      left: [
        { notes: [53], name: "F3" },
        { notes: [55], name: "G3" },
        { notes: [60], name: "C4" },
        { notes: [60], name: "C4" },
        { notes: [62], name: "D4" },
        { notes: [60], name: "C4" },
        { notes: [58], name: "Bb3" },
        { notes: [58], name: "G3" }
      ]
    },
    {
      id: "final-chord",
      label: "Final chord (verified)",
      verified: true,
      right: [
        { notes: [77, 72, 69], name: "F5+C5+A4" },
        { notes: [77, 72, 69], name: "F5+C5+A4" },
        { notes: [77, 72, 69], name: "F5+C5+A4 (hold)" }
      ],
      left: [
        { notes: [53, 48, 45], name: "F3+C3+A2" },
        { notes: [53, 48, 45], name: "F3+C3+A2" },
        { notes: [53, 48, 45], name: "F3+C3+A2 (hold)" }
      ]
    }
  ]
};
