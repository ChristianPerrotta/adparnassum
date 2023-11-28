export function cantusFirmusConverter(cantusNum, mode) {

    const modes = {"io": 0, "dr": 1, "ph": 2, "ly": 3, "mx": 4, "ao": 5}
    const notes = ["b", "c", "d", "e", "f", "g", "a", "b"]

    var cantus = []
    var offset = modes[mode];

    cantusNum.forEach((degree) => {
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
        let note = notes[index] + "/" + octave
        cantus.push(note)
    })

    return cantus
}