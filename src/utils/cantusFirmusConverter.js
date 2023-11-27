export function cantusFirmusConverter(cantusNum, mode) {

    const modes = {"io": 0, "dr": 1, "ph": 2, "ly": 3, "mx": 4, "ao": 5}
    const notes = ["c", "d", "e", "f", "g", "a", "b"]

    var cantus = []
    const offset = modes[mode];

    cantusNum.forEach((degree) => {
        let octave = 4
        let index = degree + offset - 1
        if (index > 6) {
            octave++;
            index = index - 7
        }
        let note = notes[index] + "/" + octave
        cantus.push(note)
    })

    return cantus
}