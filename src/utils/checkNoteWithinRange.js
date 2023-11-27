import ranges from "../data/clefRanges.json"

export function checkNoteWithinRange(pitch, clef) {
    const scale = ["c", "d", "e", "f", "g", "a", "b"];

    // OLD WAY: finding the numeric limis by hand
    // now I simply added them to the json file
    // and now I can access them directly

    // let minOctave = ranges[clef].min.octave; // a number
    // let maxOctave = ranges[clef].max.octave; // a number
    // let minPitch = ranges[clef].min.pitch; // a letter (note)
    // let maxPitch = ranges[clef].max.pitch; // a letter (note)

    // the following two variables express the note with a decimal number,
    // that is, the number 13 indicates the octave 1 and the note 3 (e)
    //let lowerLimit = Number("" + minOctave + scale.indexOf(minPitch));
    //let upperLimit = Number("" + maxOctave + scale.indexOf(maxPitch));

    //simpler way of doing the same thing
    let lowerLimit = ranges[clef].min.numeric;
    let upperLimit = ranges[clef].max.numeric;

    // the following variable is the numeric notation of the given note to check
    // pitch[2] gives the octave, and pitch[0] is the note letter
    let givenNote = Number("" + pitch[2] + scale.indexOf(pitch[0]));

    if (givenNote >= lowerLimit && givenNote <= upperLimit) {
        return true
    } else {
        return false
    }
}