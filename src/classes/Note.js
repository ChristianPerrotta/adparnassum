import ranges from '../data/clefRanges.json';

export default class Note {
    constructor(pitch, octave) {
        this.pitch = pitch;
        this.octave = octave;
    }

    static scale = ["c", "d", "e", "f", "g", "a", "b"];

     get numeric() {
        return Number("" + this.octave + Note.scale.indexOf(this.pitch))
    }

    get notation() {
        return this.pitch + "/" + this.octave;
    }

    set notation(notation) {
        this.pitch = notation[0]
        this.octave = Number(notation[2])
    }

    static createRandom(clef) {
        let pitch = Note.scale[Math.floor(Math.random()*7)]
        let octave = Note.pickOctaveWithinClefRange(pitch, clef)
        let note = new Note(pitch, octave)
        return note
    }

    static pickOctaveWithinClefRange(pitch, clef) {
        let lowerLimit = ranges[clef].min.numeric;
        let upperLimit = ranges[clef].max.numeric;

        let minOctave = ranges[clef].min.octave;
        let maxOctave = ranges[clef].max.octave;

        do {
            var pickedOctave = Math.floor(Math.random() * (maxOctave - minOctave + 1) + minOctave)
            var newNoteNumeric = Number("" + pickedOctave + Note.scale.indexOf(pitch))
        } while((newNoteNumeric < lowerLimit || newNoteNumeric > upperLimit))

        return pickedOctave
    }

    static get randomInterval() {
        return Math.floor(Math.random() * 8 + 1)
    }

    static createNoteFromInterval(note, interval) {

        let octave = note.octave;

        let baseIndex = Note.scale.indexOf(note.pitch);
        let newIndex = baseIndex + interval - 1;

        if (newIndex > 6) {
            newIndex = newIndex - 7
            octave += 1 
        }

        let pitch = Note.scale[newIndex]
        let createdNote =  new Note(pitch, octave)

        return createdNote
    }

    static isNoteWithinClefRange(note, clef) {
        let lowerLimit = ranges[clef].min.numeric;
        let upperLimit = ranges[clef].max.numeric;

        if (note.numeric >= lowerLimit && note.numeric <= upperLimit) {
            return true
        } else {
            return false
        }
    }

    static getNextNote(note) {
        let currentOctave = note.octave
        if (note.pitch === "b") {
            var newPitch = "c";
            var newOctave = currentOctave + 1;
        } else {
            var newPitch = Note.scale[Note.scale.indexOf(note.pitch) + 1];
            var newOctave = currentOctave;
        }
        let newNote = new Note(newPitch, newOctave);
        return newNote;
    }
    
    static getPreviousNote(note) {
        let currentOctave = note.octave
        if (note.pitch === "c") {
            var newPitch = "b";
            var newOctave = currentOctave - 1;
        } else {
            var newPitch = Note.scale[Note.scale.indexOf(note.pitch) - 1];
            var newOctave = currentOctave;
        }
        let newNote = new Note(newPitch, newOctave);
        return newNote;
    }

}