// song-data.js
// Monstrance Clock - Ghost (Indio Marcato, A Ghoul Writer)
// Rebuilt from the AUTHORITATIVE MusicXML score export (monstrance-clock-ghost.mxl),
// parsed with music21 - this correctly resolves chords, held/tied notes, and
// exact measure boundaries. Right hand = treble staff, Left hand = bass staff.
// Key: Bb major, 4/4, 105bpm. MIDI note numbers: 60 = middle C (C4).
// 't' = seconds from each sub-phrase's own start.
//
// SUB-PHRASE SPLIT: the original 20 phrases (8 bars each) were too long to
// follow in one pass, so each has been split into ~2-bar sub-phrases below
// (77 total). No notes were added or removed in this split -- every note
// count matches the original 8-bar phrases exactly, just grouped into
// shorter, easier-to-learn chunks.

const SONG = {
  title: "Monstrance Clock",
  artist: "Ghost",
  bpm: 105,
  phrases: [
  {
    "id": "phrase-1",
    "label": "Phrase 1 (bars 1-2)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.857,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-2",
    "label": "Phrase 2 (bars 3-4)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 4.0,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-3",
    "label": "Phrase 3 (bars 5-6)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          75,
          79
        ],
        "name": "Eb5+G5",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          75,
          79
        ],
        "name": "Eb5+G5",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          77
        ],
        "name": "C5+F5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          77
        ],
        "name": "C5+F5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43,
          46,
          55
        ],
        "name": "G2+Bb2+G3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          50,
          58,
          62
        ],
        "name": "D3+Bb3+D4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          50,
          58,
          62
        ],
        "name": "D3+Bb3+D4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          63,
          67
        ],
        "name": "G3+Eb4+G4",
        "t": 2.857,
        "dur": 0.857
      },
      {
        "notes": [
          55,
          63,
          67
        ],
        "name": "G3+Eb4+G4",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 4.0,
        "dur": 0.857
      }
    ]
  },
  {
    "id": "phrase-4",
    "label": "Phrase 4 (bars 7-8)",
    "verified": true,
    "right": [
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.572,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          52,
          60,
          64
        ],
        "name": "E3+C4+E4",
        "t": 0.572,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-5",
    "label": "Phrase 5 (bars 9-10)",
    "verified": true,
    "right": [
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 1.143,
        "dur": 0.857
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          64
        ],
        "name": "E4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          64
        ],
        "name": "E4",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          63
        ],
        "name": "Eb4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 4.571,
        "dur": 0.857
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-6",
    "label": "Phrase 6 (bars 11-12)",
    "verified": true,
    "right": [
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 1.143,
        "dur": 0.857
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 3.429,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.572,
        "dur": 0.143
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 3.715,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.858,
        "dur": 0.143
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-7",
    "label": "Phrase 7 (bars 13-14)",
    "verified": true,
    "right": [
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 1.143,
        "dur": 0.857
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.143,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.143,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 3.286,
        "dur": 0.143
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          71
        ],
        "name": "B4",
        "t": 4.286,
        "dur": 0.143
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.428,
        "dur": 0.143
      },
      {
        "notes": [
          71
        ],
        "name": "B4",
        "t": 4.571,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53
        ],
        "name": "Bb2+F3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          36
        ],
        "name": "C2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-8",
    "label": "Phrase 8 (bars 15-16)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.286,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-9",
    "label": "Phrase 9 (bars 17-18)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.714,
        "dur": 0.857
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          46
        ],
        "name": "D2+Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          44
        ],
        "name": "Db2+Ab2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-10",
    "label": "Phrase 10 (bars 19-20)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.572,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 3.715,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 3.858,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-11",
    "label": "Phrase 11 (bars 21-22)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 4.571,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-12",
    "label": "Phrase 12 (bars 23-24)",
    "verified": true,
    "right": [
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 2.286,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-13",
    "label": "Phrase 13 (bars 25-26)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.857
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          46
        ],
        "name": "D2+Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          44
        ],
        "name": "Db2+Ab2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-14",
    "label": "Phrase 14 (bars 27-28)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.715,
        "dur": 0.857
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.572,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 3.715,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 3.858,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-15",
    "label": "Phrase 15 (bars 29-30)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 4.571,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-16",
    "label": "Phrase 16 (bars 31-32)",
    "verified": true,
    "right": [
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 3.715,
        "dur": 0.857
      }
    ],
    "left": [
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-17",
    "label": "Phrase 17 (bars 33-34)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-18",
    "label": "Phrase 18 (bars 35-36)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-19",
    "label": "Phrase 19 (bars 37-38)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-20",
    "label": "Phrase 20 (bars 39-40)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-21",
    "label": "Phrase 21 (bars 41-42)",
    "verified": true,
    "right": [
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 1.429,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-22",
    "label": "Phrase 22 (bars 43-44)",
    "verified": true,
    "right": [
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-23",
    "label": "Phrase 23 (bars 45-46)",
    "verified": true,
    "right": [
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 1.714,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.857,
        "dur": 0.143
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 3.428,
        "dur": 0.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.571,
        "dur": 0.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          73
        ],
        "name": "Db5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          60
        ],
        "name": "C4",
        "t": 4.571,
        "dur": 0.143
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-24",
    "label": "Phrase 24 (bars 47-48)",
    "verified": true,
    "right": [
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.143,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          60
        ],
        "name": "C4",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 2.286,
        "dur": 1.714
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 4.0,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-25",
    "label": "Phrase 25 (bars 49-50)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          77,
          81
        ],
        "name": "A4+F5+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          72,
          77
        ],
        "name": "F4+C5+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          70,
          74
        ],
        "name": "D4+Bb4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          67,
          72
        ],
        "name": "C4+G4+C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-26",
    "label": "Phrase 26 (bars 51-52)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          77,
          81
        ],
        "name": "A4+F5+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          72,
          77
        ],
        "name": "F4+C5+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          70,
          74
        ],
        "name": "D4+Bb4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          67,
          72
        ],
        "name": "C4+G4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-27",
    "label": "Phrase 27 (bars 53-54)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          77,
          81
        ],
        "name": "A4+F5+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          72,
          77
        ],
        "name": "F4+C5+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          70,
          74
        ],
        "name": "D4+Bb4+D5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          67,
          72
        ],
        "name": "C4+G4+C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 4.571,
        "dur": 1.714
      }
    ],
    "left": [
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53
        ],
        "name": "Bb2+F3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          36
        ],
        "name": "C2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-28",
    "label": "Phrase 28 (bars 55-56)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 2.286,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-29",
    "label": "Phrase 29 (bars 57-58)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.714,
        "dur": 0.857
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          46
        ],
        "name": "D2+Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          44
        ],
        "name": "Db2+Ab2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-30",
    "label": "Phrase 30 (bars 59-60)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.572,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 3.715,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 3.858,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-31",
    "label": "Phrase 31 (bars 61-62)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 4.571,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-32",
    "label": "Phrase 32 (bars 63-64)",
    "verified": true,
    "right": [
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 2.286,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-33",
    "label": "Phrase 33 (bars 65-66)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 3.714,
        "dur": 0.857
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          46
        ],
        "name": "D2+Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          45
        ],
        "name": "Db2+A2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          44
        ],
        "name": "Db2+Ab2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          43
        ],
        "name": "G1+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-34",
    "label": "Phrase 34 (bars 67-68)",
    "verified": true,
    "right": [
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.286,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 3.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 3.572,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 3.715,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 3.858,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-35",
    "label": "Phrase 35 (bars 69-70)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.571,
        "dur": 0.429
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.0,
        "dur": 0.143
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 1.714,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 4.571,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 4.571,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-36",
    "label": "Phrase 36 (bars 71-72)",
    "verified": true,
    "right": [
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 3.715,
        "dur": 0.857
      }
    ],
    "left": [
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 4.0,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-37",
    "label": "Phrase 37 (bars 73-74)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          60,
          63,
          67
        ],
        "name": "G3+C4+Eb4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          57,
          60,
          65
        ],
        "name": "F3+A3+C4+F4",
        "t": 3.429,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 4.571,
        "dur": 0.857
      }
    ]
  },
  {
    "id": "phrase-38",
    "label": "Phrase 38 (bars 75-76)",
    "verified": true,
    "right": [
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          60,
          63,
          67
        ],
        "name": "G3+C4+Eb4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          57,
          60,
          65
        ],
        "name": "F3+A3+C4+F4",
        "t": 3.429,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-39",
    "label": "Phrase 39 (bars 77-78)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          60,
          63,
          67
        ],
        "name": "G3+C4+Eb4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          57,
          60,
          65
        ],
        "name": "F3+A3+C4+F4",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 4.571,
        "dur": 0.857
      }
    ]
  },
  {
    "id": "phrase-40",
    "label": "Phrase 40 (bars 79-80)",
    "verified": true,
    "right": [
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          60,
          63,
          67
        ],
        "name": "G3+C4+Eb4+G4",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          60,
          63,
          67,
          72
        ],
        "name": "C4+Eb4+G4+C5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          57,
          60,
          65
        ],
        "name": "F3+A3+C4+F4",
        "t": 3.429,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-41",
    "label": "Phrase 41 (bars 81-82)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          48,
          51,
          55
        ],
        "name": "G2+C3+Eb3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          45,
          48,
          53
        ],
        "name": "F2+A2+C3+F3",
        "t": 3.429,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 4.571,
        "dur": 0.857
      }
    ]
  },
  {
    "id": "phrase-42",
    "label": "Phrase 42 (bars 83-84)",
    "verified": true,
    "right": [
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          48,
          51,
          55
        ],
        "name": "G2+C3+Eb3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          45,
          48,
          53
        ],
        "name": "F2+A2+C3+F3",
        "t": 3.429,
        "dur": 1.143
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-43",
    "label": "Phrase 43 (bars 85-86)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.0,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          48,
          51,
          55
        ],
        "name": "G2+C3+Eb3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51,
          55,
          60
        ],
        "name": "C3+Eb3+G3+C4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          45,
          48,
          53
        ],
        "name": "F2+A2+C3+F3",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 4.571,
        "dur": 0.857
      }
    ]
  },
  {
    "id": "phrase-44",
    "label": "Phrase 44 (bars 87-88)",
    "verified": true,
    "right": [
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67
        ],
        "name": "Bb3+G4",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67,
          81
        ],
        "name": "Bb3+G4+A5",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67,
          79,
          81
        ],
        "name": "Bb3+G4+G5+A5",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67,
          79,
          81
        ],
        "name": "Bb3+G4+G5+A5",
        "t": 3.429,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          55,
          58,
          63
        ],
        "name": "Eb3+G3+Bb3+Eb4",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          48,
          51,
          55
        ],
        "name": "G2+C3+Eb3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 1.715,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          46,
          50,
          55
        ],
        "name": "G2+Bb2+D3+G3",
        "t": 2.286,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 2.286,
        "dur": 2.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          46,
          50,
          55
        ],
        "name": "G2+Bb2+D3+G3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          39,
          43,
          48
        ],
        "name": "C2+Eb2+G2+C3",
        "t": 3.429,
        "dur": 1.143
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-45",
    "label": "Phrase 45 (bars 89-90)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-46",
    "label": "Phrase 46 (bars 91-92)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-47",
    "label": "Phrase 47 (bars 93-94)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          86,
          94
        ],
        "name": "D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82
        ],
        "name": "G5+Bb5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-48",
    "label": "Phrase 48 (bars 95-96)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-49",
    "label": "Phrase 49 (bars 97-98)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-50",
    "label": "Phrase 50 (bars 99-100)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-51",
    "label": "Phrase 51 (bars 101-102)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          86,
          94
        ],
        "name": "D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82
        ],
        "name": "G5+Bb5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 3.428,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-52",
    "label": "Phrase 52 (bars 103-104)",
    "verified": true,
    "right": [
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 1.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-53",
    "label": "Phrase 53 (bars 105-106)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 0.0,
        "dur": 2.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 2.286,
        "dur": 2.286
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          87,
          91
        ],
        "name": "G5+Eb6+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 4.571,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-54",
    "label": "Phrase 54 (bars 107-108)",
    "verified": true,
    "right": [
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 3.429,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-55",
    "label": "Phrase 55 (bars 109-110)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 2.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.286,
        "dur": 2.286
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          87,
          91
        ],
        "name": "G5+Eb6+G6",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 4.571,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 2.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-56",
    "label": "Phrase 56 (bars 111-112)",
    "verified": true,
    "right": [
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          87,
          91
        ],
        "name": "G5+Eb6+G6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-57",
    "label": "Phrase 57 (bars 113-114)",
    "verified": true,
    "right": [
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          82,
          86
        ],
        "name": "D5+Bb5+D6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72,
          79,
          84
        ],
        "name": "C5+G5+C6",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51,
          55
        ],
        "name": "Eb2+Bb2+Eb3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55,
          58
        ],
        "name": "G2+D3+G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55
        ],
        "name": "Bb2+G3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58,
          63
        ],
        "name": "Bb2+G3+Bb3+Eb4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-58",
    "label": "Phrase 58 (bars 115-116)",
    "verified": true,
    "right": [
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          82,
          86
        ],
        "name": "D5+Bb5+D6",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72,
          79,
          84
        ],
        "name": "C5+G5+C6",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51,
          55
        ],
        "name": "Eb2+Bb2+Eb3+G3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55,
          58
        ],
        "name": "G2+D3+G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53
        ],
        "name": "A2+F3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.858,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57,
          60
        ],
        "name": "A2+F3+A3+C4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          57
        ],
        "name": "F2+C3+F3+A3",
        "t": 4.286,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-59",
    "label": "Phrase 59 (bars 117-118)",
    "verified": true,
    "right": [
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          82,
          86
        ],
        "name": "D5+Bb5+D6",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          72,
          79,
          84
        ],
        "name": "C5+G5+C6",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 0.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.571,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51,
          55
        ],
        "name": "Eb2+Bb2+Eb3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.428,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55,
          58
        ],
        "name": "G2+D3+G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55
        ],
        "name": "Bb2+G3",
        "t": 2.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58,
          63
        ],
        "name": "Bb2+G3+Bb3+Eb4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-60",
    "label": "Phrase 60 (bars 119-120)",
    "verified": true,
    "right": [
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 3.715,
        "dur": 0.286
      }
    ],
    "left": [
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51,
          55
        ],
        "name": "Eb2+Bb2+Eb3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 1.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.715,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55,
          58
        ],
        "name": "G2+D3+G3+Bb3",
        "t": 2.0,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 2.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53
        ],
        "name": "A2+F3",
        "t": 2.572,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 2.857,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57,
          60
        ],
        "name": "A2+F3+A3+C4",
        "t": 3.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 3.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 3.715,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 4.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-61",
    "label": "Phrase 61 (bars 121-122)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-62",
    "label": "Phrase 62 (bars 123-124)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-63",
    "label": "Phrase 63 (bars 125-126)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          45,
          46,
          52,
          53,
          55,
          57,
          58
        ],
        "name": "A2+Bb2+E3+F3+G3+A3+Bb3",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-64",
    "label": "Phrase 64 (bars 127-128)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          53,
          55
        ],
        "name": "G2+F3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-65",
    "label": "Phrase 65 (bars 129-130)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          50,
          53,
          55
        ],
        "name": "F2+D3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-66",
    "label": "Phrase 66 (bars 131-132)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-67",
    "label": "Phrase 67 (bars 133-134)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          45,
          46,
          52,
          53,
          55,
          57,
          58
        ],
        "name": "A2+Bb2+E3+F3+G3+A3+Bb3",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-68",
    "label": "Phrase 68 (bars 135-136)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-69",
    "label": "Phrase 69 (bars 137-138)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          50,
          53,
          55
        ],
        "name": "F2+D3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-70",
    "label": "Phrase 70 (bars 139-140)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-71",
    "label": "Phrase 71 (bars 141-142)",
    "verified": true,
    "right": [
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          45,
          46,
          52,
          53,
          55,
          57,
          58
        ],
        "name": "A2+Bb2+E3+F3+G3+A3+Bb3",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-72",
    "label": "Phrase 72 (bars 143-144)",
    "verified": true,
    "right": [
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 2.286,
        "dur": 2.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 3.429,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-73",
    "label": "Phrase 73 (bars 145-146)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          50,
          53,
          55
        ],
        "name": "F2+D3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.429,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-74",
    "label": "Phrase 74 (bars 147-148)",
    "verified": true,
    "right": [
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.858,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.572,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.858,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-75",
    "label": "Phrase 75 (bars 149-150)",
    "verified": true,
    "right": [
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 0.0,
        "dur": 0.571
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 0.571,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.428,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 4.571,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.286,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 1.428,
        "dur": 0.857
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 2.286,
        "dur": 1.143
      },
      {
        "notes": [
          45,
          46,
          52,
          53,
          55,
          57,
          58
        ],
        "name": "A2+Bb2+E3+F3+G3+A3+Bb3",
        "t": 3.428,
        "dur": 0.857
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 4.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 4.571,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-76",
    "label": "Phrase 76 (bars 151-152)",
    "verified": true,
    "right": [
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 2.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 2.857,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 3.429,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 4.0,
        "dur": 0.571
      }
    ],
    "left": [
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 0.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53,
          55
        ],
        "name": "F2+C3+F3+G3",
        "t": 0.572,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 1.143,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 2.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-77",
    "label": "Phrase 77 (bars 153-153)",
    "verified": true,
    "right": [
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 0.0,
        "dur": 1.143
      }
    ],
    "left": [
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 0.0,
        "dur": 1.143
      }
    ]
  }
]
};
