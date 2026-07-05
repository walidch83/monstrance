// song-data.js
// Monstrance Clock - Ghost (Indio Marcato, A Ghoul Writer)
// Rebuilt from the AUTHORITATIVE MusicXML score export (monstrance-clock-ghost.mxl),
// parsed with music21 - this correctly resolves chords, held/tied notes, and
// exact measure boundaries, superseding the earlier MIDI-only extraction which
// undercounted sustained notes in ~15% of measures. Cross-verified against the
// reference MIDI file: content matches once tied notes are accounted for.
// Right hand = treble staff, Left hand = bass staff. Key: Bb major, 4/4, 105bpm.
// MIDI note numbers: 60 = middle C (C4). 't' = seconds from phrase start.

const SONG = {
  title: "Monstrance Clock",
  artist: "Ghost",
  bpm: 105,
  phrases: [
  {
    "id": "phrase-1",
    "label": "Phrase 1 (bars 1-8)",
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
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          75,
          79
        ],
        "name": "Eb5+G5",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          75,
          79
        ],
        "name": "Eb5+G5",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          77
        ],
        "name": "C5+F5",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          77
        ],
        "name": "C5+F5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          72,
          76
        ],
        "name": "C5+E5",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 16.286,
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
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 8.571,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          46,
          55
        ],
        "name": "G2+Bb2+G3",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          50,
          58,
          62
        ],
        "name": "D3+Bb3+D4",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          50,
          58,
          62
        ],
        "name": "D3+Bb3+D4",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          63,
          67
        ],
        "name": "G3+Eb4+G4",
        "t": 12.0,
        "dur": 0.857
      },
      {
        "notes": [
          55,
          63,
          67
        ],
        "name": "G3+Eb4+G4",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 13.143,
        "dur": 0.857
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          52,
          60,
          64
        ],
        "name": "E3+C4+E4",
        "t": 14.286,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-2",
    "label": "Phrase 2 (bars 9-16)",
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
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 5.714,
        "dur": 0.857
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 8.0,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.143,
        "dur": 0.143
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 8.286,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.429,
        "dur": 0.143
      },
      {
        "notes": [
          68
        ],
        "name": "Ab4",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 9.143,
        "dur": 0.857
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 10.286,
        "dur": 0.857
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 11.143,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 11.286,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 11.429,
        "dur": 0.857
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 12.286,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 12.429,
        "dur": 0.143
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          71
        ],
        "name": "B4",
        "t": 13.429,
        "dur": 0.143
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 13.571,
        "dur": 0.143
      },
      {
        "notes": [
          71
        ],
        "name": "B4",
        "t": 13.714,
        "dur": 2.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 16.0,
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
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53
        ],
        "name": "Bb2+F3",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          36
        ],
        "name": "C2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 15.429,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 17.714,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-3",
    "label": "Phrase 3 (bars 17-24)",
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
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 11.429,
        "dur": 0.857
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 13.714,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 16.0,
        "dur": 2.286
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
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.0,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 8.143,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 8.286,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 8.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-4",
    "label": "Phrase 4 (bars 25-32)",
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
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.286,
        "dur": 0.857
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 13.714,
        "dur": 2.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 16.0,
        "dur": 1.143
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 17.429,
        "dur": 0.857
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
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.0,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 8.143,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 8.286,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 8.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-5",
    "label": "Phrase 5 (bars 33-40)",
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
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.429,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 10.571,
        "dur": 0.857
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 17.714,
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
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-6",
    "label": "Phrase 6 (bars 41-48)",
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
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 6.857,
        "dur": 0.857
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 10.857,
        "dur": 0.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 11.0,
        "dur": 0.143
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 11.429,
        "dur": 1.143
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 12.571,
        "dur": 0.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 12.714,
        "dur": 0.143
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          73
        ],
        "name": "Db5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          60
        ],
        "name": "C4",
        "t": 13.714,
        "dur": 0.143
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 13.857,
        "dur": 0.143
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          60
        ],
        "name": "C4",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          62
        ],
        "name": "D4",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 16.0,
        "dur": 1.714
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 17.714,
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
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-7",
    "label": "Phrase 7 (bars 49-56)",
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
      },
      {
        "notes": [
          69,
          77,
          81
        ],
        "name": "A4+F5+A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          72,
          77
        ],
        "name": "F4+C5+F5",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          70,
          74
        ],
        "name": "D4+Bb4+D5",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          67,
          72
        ],
        "name": "C4+G4+C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          77,
          81
        ],
        "name": "A4+F5+A5",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          72,
          77
        ],
        "name": "F4+C5+F5",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          74,
          79
        ],
        "name": "G4+D5+G5",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          70,
          74
        ],
        "name": "D4+Bb4+D5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          67,
          72
        ],
        "name": "C4+G4+C5",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          69,
          74
        ],
        "name": "D4+A4+D5",
        "t": 13.714,
        "dur": 1.714
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 16.0,
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
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          44
        ],
        "name": "Ab2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          44,
          51
        ],
        "name": "Ab2+Eb3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          50,
          57
        ],
        "name": "D3+A3",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          50
        ],
        "name": "D3",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53
        ],
        "name": "Bb2+F3",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          36
        ],
        "name": "C2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 15.429,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55
        ],
        "name": "C3+G3",
        "t": 17.714,
        "dur": 0.571
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-8",
    "label": "Phrase 8 (bars 57-64)",
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
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 11.429,
        "dur": 0.857
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          69
        ],
        "name": "D4+A4",
        "t": 13.714,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 16.0,
        "dur": 2.286
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
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.0,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 8.143,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 8.286,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 8.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-9",
    "label": "Phrase 9 (bars 65-72)",
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
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 6.286,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          69
        ],
        "name": "A4",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          73
        ],
        "name": "A4+Db5",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          74
        ],
        "name": "Bb4+D5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.714,
        "dur": 0.429
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 10.143,
        "dur": 0.143
      },
      {
        "notes": [
          69,
          72
        ],
        "name": "A4+C5",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 10.857,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          70
        ],
        "name": "F4+Bb4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          69
        ],
        "name": "F4+A4",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          70
        ],
        "name": "Bb4",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 13.714,
        "dur": 2.286
      },
      {
        "notes": [
          62,
          67,
          74
        ],
        "name": "D4+G4+D5",
        "t": 16.0,
        "dur": 1.143
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          62,
          67
        ],
        "name": "D4+G4",
        "t": 17.429,
        "dur": 0.857
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
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          50
        ],
        "name": "F2+D3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          49
        ],
        "name": "Db3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.0,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          50
        ],
        "name": "Db2+D3",
        "t": 8.143,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          49
        ],
        "name": "D2+Db3",
        "t": 8.286,
        "dur": 0.143
      },
      {
        "notes": [
          38,
          50
        ],
        "name": "D2+D3",
        "t": 8.429,
        "dur": 0.143
      },
      {
        "notes": [
          37,
          49
        ],
        "name": "Db2+Db3",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          43
        ],
        "name": "F2+G2",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 10.286,
        "dur": 0.571
      },
      {
        "notes": [
          46,
          51
        ],
        "name": "Bb2+Eb3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          51
        ],
        "name": "C3+Eb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          41,
          46
        ],
        "name": "Bb1+F2+Bb2",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          38,
          41
        ],
        "name": "D2+F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          36,
          43
        ],
        "name": "C2+G2",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          38
        ],
        "name": "D2",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          29,
          36,
          41
        ],
        "name": "F1+C2+F2",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          34
        ],
        "name": "Bb1",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          36,
          41
        ],
        "name": "C2+F2",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          38,
          43
        ],
        "name": "D2+G2",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          34,
          38,
          43
        ],
        "name": "Bb1+D2+G2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          31,
          38,
          43
        ],
        "name": "G1+D2+G2",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          31
        ],
        "name": "G1",
        "t": 17.714,
        "dur": 0.571
      }
    ]
  },
  {
    "id": "phrase-10",
    "label": "Phrase 10 (bars 73-80)",
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
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 9.429,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 10.571,
        "dur": 0.857
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 11.429,
        "dur": 1.143
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 14.857,
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
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 5.429,
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
        "t": 5.714,
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
        "t": 6.857,
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
        "t": 7.714,
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
        "t": 8.0,
        "dur": 1.143
      },
      {
        "notes": [
          63,
          67,
          70,
          75
        ],
        "name": "Eb4+G4+Bb4+Eb5",
        "t": 9.143,
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
        "t": 10.0,
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
        "t": 10.286,
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
        "t": 11.429,
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
        "t": 12.286,
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
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 13.429,
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
        "t": 13.714,
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
        "t": 14.571,
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
        "t": 14.857,
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
        "t": 16.0,
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
        "t": 16.857,
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
        "t": 17.143,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-11",
    "label": "Phrase 11 (bars 81-88)",
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
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 9.429,
        "dur": 0.571
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 10.571,
        "dur": 0.857
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 11.429,
        "dur": 1.143
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          65
        ],
        "name": "F4",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          82
        ],
        "name": "Bb5",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67
        ],
        "name": "Bb3+G4",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          58,
          67,
          81
        ],
        "name": "Bb3+G4+A5",
        "t": 16.571,
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
        "t": 16.857,
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
        "t": 17.143,
        "dur": 1.143
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
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 5.143,
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
        "t": 5.429,
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
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 6.571,
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
        "t": 6.857,
        "dur": 0.857
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 7.429,
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
        "t": 7.714,
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
        "t": 8.0,
        "dur": 1.143
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 8.857,
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
        "t": 9.143,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 9.714,
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
        "t": 10.0,
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
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 11.143,
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
        "t": 11.429,
        "dur": 0.857
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 12.0,
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
        "t": 12.286,
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
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 13.429,
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
        "t": 13.714,
        "dur": 0.857
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          58
        ],
        "name": "Bb3",
        "t": 14.286,
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
        "t": 14.571,
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
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          55
        ],
        "name": "G3",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 15.429,
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
        "t": 16.0,
        "dur": 0.857
      },
      {
        "notes": [
          57
        ],
        "name": "A3",
        "t": 16.0,
        "dur": 2.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.571,
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
        "t": 16.857,
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
        "t": 17.143,
        "dur": 1.143
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-12",
    "label": "Phrase 12 (bars 89-96)",
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
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.429,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 10.571,
        "dur": 0.857
      },
      {
        "notes": [
          86,
          94
        ],
        "name": "D6+Bb6",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 11.429,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82
        ],
        "name": "G5+Bb5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 17.714,
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
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-13",
    "label": "Phrase 13 (bars 97-104)",
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
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 5.714,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.429,
        "dur": 0.571
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 10.571,
        "dur": 0.857
      },
      {
        "notes": [
          86,
          94
        ],
        "name": "D6+Bb6",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 11.429,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82
        ],
        "name": "G5+Bb5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 12.571,
        "dur": 0.857
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 14.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          70
        ],
        "name": "G4+Bb4",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          67
        ],
        "name": "G4",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          86,
          94
        ],
        "name": "Bb5+D6+Bb6",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          84,
          93
        ],
        "name": "A5+C6+A6",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          82,
          91
        ],
        "name": "G5+Bb5+G6",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          81,
          89
        ],
        "name": "F5+A5+F6",
        "t": 17.714,
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
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          58
        ],
        "name": "G3+Bb3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          48,
          55,
          60
        ],
        "name": "C3+G3+C4",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          48
        ],
        "name": "C3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 12.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 12.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          51,
          53
        ],
        "name": "Eb3+F3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          55,
          57
        ],
        "name": "G3+A3",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          53,
          58
        ],
        "name": "Bb2+F3+Bb3",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-14",
    "label": "Phrase 14 (bars 105-112)",
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
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          70,
          82
        ],
        "name": "Bb4+Bb5",
        "t": 6.857,
        "dur": 1.143
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 8.0,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.143,
        "dur": 2.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 11.429,
        "dur": 2.286
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          87,
          91
        ],
        "name": "G5+Eb6+G6",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 2.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          91
        ],
        "name": "G5+G6",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          82,
          91,
          94
        ],
        "name": "Bb5+G6+Bb6",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          87,
          91
        ],
        "name": "G5+Eb6+G6",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          77,
          86,
          89
        ],
        "name": "F5+D6+F6",
        "t": 17.714,
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
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 7.429,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 12.0,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 16.571,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 18.0,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-15",
    "label": "Phrase 15 (bars 113-120)",
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
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          82,
          86
        ],
        "name": "D5+Bb5+D6",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          72,
          79,
          84
        ],
        "name": "C5+G5+C6",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          82,
          86
        ],
        "name": "D5+Bb5+D6",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          72,
          79,
          84
        ],
        "name": "C5+G5+C6",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          81,
          89,
          93
        ],
        "name": "A5+F6+A6",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          81,
          86
        ],
        "name": "D5+A5+D6",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          77,
          84,
          89
        ],
        "name": "F5+C6+F6",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          79,
          86,
          91
        ],
        "name": "G5+D6+G6",
        "t": 17.429,
        "dur": 0.286
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
      },
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 5.143,
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
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 5.714,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 6.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.286,
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
        "t": 6.571,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 6.857,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53
        ],
        "name": "A2+F3",
        "t": 7.143,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 7.429,
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
        "t": 7.714,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 8.0,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 8.286,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 8.571,
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
        "t": 8.857,
        "dur": 0.286
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 9.143,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 9.429,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 9.714,
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
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 10.286,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 10.571,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.857,
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
        "t": 11.143,
        "dur": 0.286
      },
      {
        "notes": [
          46
        ],
        "name": "Bb2",
        "t": 11.429,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55
        ],
        "name": "Bb2+G3",
        "t": 11.714,
        "dur": 0.286
      },
      {
        "notes": [
          46,
          55,
          58
        ],
        "name": "Bb2+G3+Bb3",
        "t": 12.0,
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
        "t": 12.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          39
        ],
        "name": "Eb2",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46
        ],
        "name": "Eb2+Bb2",
        "t": 14.0,
        "dur": 0.286
      },
      {
        "notes": [
          39,
          46,
          51
        ],
        "name": "Eb2+Bb2+Eb3",
        "t": 14.286,
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
        "t": 14.571,
        "dur": 0.286
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 14.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50
        ],
        "name": "G2+D3",
        "t": 15.143,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 15.429,
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
        "t": 15.714,
        "dur": 0.286
      },
      {
        "notes": [
          45
        ],
        "name": "A2",
        "t": 16.0,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53
        ],
        "name": "A2+F3",
        "t": 16.286,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          57
        ],
        "name": "A2+F3+A3",
        "t": 16.571,
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
        "t": 16.857,
        "dur": 0.286
      },
      {
        "notes": [
          41
        ],
        "name": "F2",
        "t": 17.143,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48
        ],
        "name": "F2+C3",
        "t": 17.429,
        "dur": 0.286
      },
      {
        "notes": [
          41,
          48,
          53
        ],
        "name": "F2+C3+F3",
        "t": 17.714,
        "dur": 0.286
      }
    ]
  },
  {
    "id": "phrase-16",
    "label": "Phrase 16 (bars 121-128)",
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
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 17.714,
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
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.143,
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
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.857,
        "dur": 2.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 9.429,
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
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
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
        "t": 10.571,
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
        "t": 11.429,
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
        "t": 12.571,
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
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 14.0,
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
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          53,
          55
        ],
        "name": "G2+F3+G3",
        "t": 16.0,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-17",
    "label": "Phrase 17 (bars 129-136)",
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
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 17.714,
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
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.143,
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
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.857,
        "dur": 2.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 9.429,
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
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
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
        "t": 10.571,
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
        "t": 11.429,
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
        "t": 12.571,
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
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 14.0,
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
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 16.0,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-18",
    "label": "Phrase 18 (bars 137-144)",
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
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          58,
          65,
          70
        ],
        "name": "Bb3+F4+Bb4",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          57,
          67,
          69
        ],
        "name": "A3+G4+A4",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          55,
          62,
          67
        ],
        "name": "G3+D4+G4",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          53,
          60,
          65
        ],
        "name": "F3+C4+F4",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          69,
          81
        ],
        "name": "A4+A5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          74,
          86
        ],
        "name": "D5+D6",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          65,
          77
        ],
        "name": "F4+F5",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          67,
          79
        ],
        "name": "G4+G5",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          62,
          74
        ],
        "name": "D4+D5",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          60,
          72
        ],
        "name": "C4+C5",
        "t": 17.714,
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
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.143,
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
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.857,
        "dur": 2.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 9.429,
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
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
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
        "t": 10.571,
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
        "t": 11.429,
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
        "t": 12.571,
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
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 14.0,
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
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          43
        ],
        "name": "G2",
        "t": 16.0,
        "dur": 2.286
      },
      {
        "notes": [
          53
        ],
        "name": "F3",
        "t": 16.0,
        "dur": 1.143
      },
      {
        "notes": [
          51
        ],
        "name": "Eb3",
        "t": 17.143,
        "dur": 1.143
      }
    ]
  },
  {
    "id": "phrase-19",
    "label": "Phrase 19 (bars 145-152)",
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
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 5.143,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 6.857,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 7.429,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 8.0,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 8.571,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 9.143,
        "dur": 0.571
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 9.714,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 10.286,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 11.429,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 12.0,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 12.571,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 13.143,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 13.714,
        "dur": 0.571
      },
      {
        "notes": [
          81
        ],
        "name": "A5",
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          86
        ],
        "name": "D6",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          77
        ],
        "name": "F5",
        "t": 16.0,
        "dur": 0.571
      },
      {
        "notes": [
          79
        ],
        "name": "G5",
        "t": 16.571,
        "dur": 0.571
      },
      {
        "notes": [
          74
        ],
        "name": "D5",
        "t": 17.143,
        "dur": 0.571
      },
      {
        "notes": [
          72
        ],
        "name": "C5",
        "t": 17.714,
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
      },
      {
        "notes": [
          46,
          53,
          55,
          58
        ],
        "name": "Bb2+F3+G3+Bb3",
        "t": 4.857,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.143,
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
        "t": 5.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 5.714,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 6.857,
        "dur": 2.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 9.429,
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
        "t": 10.0,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 10.286,
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
        "t": 10.571,
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
        "t": 11.429,
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
        "t": 12.571,
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
        "t": 13.429,
        "dur": 0.286
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 13.714,
        "dur": 0.286
      },
      {
        "notes": [
          45,
          53,
          55,
          58
        ],
        "name": "A2+F3+G3+Bb3",
        "t": 14.0,
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
        "t": 14.286,
        "dur": 0.571
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 14.857,
        "dur": 1.143
      },
      {
        "notes": [
          43,
          50,
          55
        ],
        "name": "G2+D3+G3",
        "t": 16.0,
        "dur": 2.286
      }
    ]
  },
  {
    "id": "phrase-20",
    "label": "Phrase 20 (bars 153-153)",
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
