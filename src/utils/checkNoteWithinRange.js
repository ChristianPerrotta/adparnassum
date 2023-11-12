import ranges from "../data/clefRanges.json"

export function checkNoteWithinRange(pitch, clef) {
    const scale = ["c", "d", "e", "f", "g", "a", "b"];

    let minOctave = ranges[clef].min.octave; // a number
    let maxOctave = ranges[clef].max.octave; // a number
    let minPitch = ranges[clef].min.pitch; // a letter (note)
    let maxPitch = ranges[clef].max.pitch; // a letter (note)

    // the following two variables express the note with a decimal number,
    // that is, the number 13 indicates the octave 1 and the note 3 (e)
    let lowerLimit = Number("" + minOctave + scale.indexOf(minPitch));
    let upperLimit = Number("" + maxOctave + scale.indexOf(maxPitch));

    // the following variable is the decimal notation of the given note to check
    // pitch[2] gives the octave, and pitch[0] is the note letter
    let givenNote = Number("" + pitch[2] + scale.indexOf(pitch[0]));

    if (givenNote >= lowerLimit && givenNote <= upperLimit) {
        return true
    } else {
        return false
    }
}