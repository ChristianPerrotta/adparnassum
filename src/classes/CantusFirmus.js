import cantusFirmi from "../data/cantusFirmus.json";
import ranges from "../data/clefRanges.json"
import Note from "../classes/Note";

export default class CantusFirmus {

    static modeOffsets = {"io": 0, "dr": 1, "ph": 2, "ly": 3, "mx": 4, "ao": 5}
    static scale = ["b", "c", "d", "e", "f", "g", "a", "b"]

    constructor(index) {
        this.degrees = cantusFirmi[index - 1].cantus
        this.mode = cantusFirmi[index - 1].mode
    }

    get notes() {
        let notes = []
        let offset = CantusFirmus.modeOffsets[this.mode];

        this.degrees.forEach((degree) => {
            var octave = 4
            var index = degree + offset
            if (index < 0) {
                index = index*(-1)
                index = index + offset*2;
                octave--;
            }
            if (index > 7) {
                octave++;
                index = index - 7
            }
            let pitch = CantusFirmus.scale[index]
            let note = new Note(pitch, octave)
            notes.push(note)
        })

        return notes
    }

    pickClef() {
        var upperLimit = 0;
        var lowerLimit = 100;

        this.notes.forEach((note) => {
            if (note.numeric > upperLimit) upperLimit = note.numeric
            if (note.numeric < lowerLimit) lowerLimit = note.numeric
        })

        var pickedClef = "none was found";
        Object.keys(ranges).forEach((clef) => {
            let clefLowerLimit = ranges[clef].min.numeric;
            let clefUpperLimit = ranges[clef].max.numeric;
            if (upperLimit <= clefUpperLimit && lowerLimit >= clefLowerLimit) {
                pickedClef = clef;
            }
        })
        
        return pickedClef
    }
}