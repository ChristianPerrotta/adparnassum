export default class Counterpoint {

    static scale = ["c", "d", "e", "f", "g", "a", "b"];
    static intervalNames = ["uníssono", "segunda", "terça", "quarta", "quinta", "sexta", "sétima", "oitava", "nona", "décima", "décima primeira", "décima segunda", "décima terceira"]

    constructor(notes, cantusFirmus) {
        this.notes = notes
        this.cantusFirmus = cantusFirmus
        this.analysis = { melodicIntervals: [] }
    }

    analyze() {
        this.analysis.melodicIntervals = this.melodicIntervals;
    }

    get melodicIntervals() {
        let analysis = []
        for (let i = 1; i < this.notes.length; i++) {
            let noteNumeric = this.notes[i].numeric
            let prevNoteNumeric = this.notes[i-1].numeric
    
            let interval = Math.abs(parseInt(noteNumeric, 7) - parseInt(prevNoteNumeric, 7))
            let direction = interval === 0 ? "" :
            noteNumeric > prevNoteNumeric ? "ascendente" : "descendente";
    
            analysis.push({
                interval: Counterpoint.intervalNames[interval],
                direction: direction
            })
        }

        return analysis
    }
}