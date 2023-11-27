import ranges from "../data/clefRanges.json"

export function pickClef(cantus) {

    const scale = ["c", "d", "e", "f", "g", "a", "b"];

    var upperLimit = 0;
    var lowerLimit = 100;

    cantus.forEach((note) => {
        let noteNumeric = Number("" + note[2] + scale.indexOf(note[0]));
        if (noteNumeric > upperLimit) upperLimit = noteNumeric
        if (noteNumeric < lowerLimit) lowerLimit = noteNumeric
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