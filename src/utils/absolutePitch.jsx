import ranges from "../data/clefRanges.json"

export function absolutePitch(pitch, clef) {
    const scale = ["c", "d", "e", "f", "g", "a", "b"];

    let minOctave = ranges[clef].min.octave;
    let maxOctave = ranges[clef].max.octave;
    let minPitch = ranges[clef].min.pitch;
    let maxPitch = ranges[clef].max.pitch;

    let lowerLimit = Number("" + minOctave + scale.indexOf(minPitch))
    let upperLimit = Number("" + maxOctave + scale.indexOf(maxPitch))

    do {
        var pickedOctave = Math.floor(Math.random() * (maxOctave - minOctave + 1) + minOctave)
        var abs = Number("" + pickedOctave + scale.indexOf(pitch))
    } while((abs < lowerLimit || abs > upperLimit))

    return "" + pitch + "/" + pickedOctave
}