import { useState } from "react";
import cantusFirmi from "../../data/cantusFirmus.json";
import ClefPosition from "../../components/forTwoVoices/ClefPosition";
import { TwoVoicesCanvas } from "../../components/forTwoVoices/TwoVoicesCanvas";
import { cantusFirmusConverter } from "../../utils/cantusFirmusConverter";
import { pickClef } from "../../utils/pickClef";

export function PrimeiraEspecieMaior() {

    const scale = ["c", "d", "e", "f", "g", "a", "b"]

    const [cantusIndex, setCantusIndex] = useState(1);
    const [clefPos, setClefPos] = useState("upper");
    const [counterpoint, setCounterpoint] = useState([]);
    const [index, setIndex] = useState(0);

    const {cantus: cantusNum, mode} = cantusFirmi[cantusIndex - 1];
    const cantus = cantusFirmusConverter(cantusNum, mode)
    
    const amount = cantusFirmi.length;
    const clef = pickClef(cantus);

    //decide if the radio buttons to choose clef will be rendered
    const chooseClef = (clef === "alto" || clef === "tenor") ? true : false;

    function adjustClefPosition(newIndex) {
        if (cantusFirmi[newIndex - 1].clef === "bass") {
            setClefPos("upper");
        } else if (cantusFirmi[newIndex - 1].clef === "soprano") {
            setClefPos("lower");
        }
    }

    function handleCantusIndex(e) {
        let newIndex = Number(e.target.value);
        if(newIndex && newIndex <= amount && newIndex > 0) {
            setCantusIndex(newIndex);
            adjustClefPosition(newIndex);
            setCounterpoint([]);
        }
    }

    function handleRandomCantus() {
        let newIndex = Math.floor(Math.random() * amount) + 1;
        setCantusIndex(newIndex);
        adjustClefPosition(newIndex);
    }

    function addNote(e) {
        var octave = "/4";
        if (clefPos === "lower") octave = "/3";
        let note = e.target.value + octave;
        let cp = counterpoint;
        cp[index] = note;
        setCounterpoint([...cp]);
    }

    function moveNoteUp() {
        if (counterpoint[index] !== undefined) {
            let currentNote = counterpoint[index][0]
            let currentOctave = Number(counterpoint[index][2])
            if (currentNote === "b") {
                var newNote = "c";
                var newOctave = currentOctave + 1;
            } else {
                var newNote = scale[scale.indexOf(currentNote) + 1];
                var newOctave = currentOctave;
            }
            let note = newNote + "/" + newOctave;
            let cp = counterpoint;
            cp[index] = note;
            setCounterpoint([...cp]);
        }
    }

    function moveNoteDown() {
        if (counterpoint[index] !== undefined) {
            let currentNote = counterpoint[index][0]
            let currentOctave = Number(counterpoint[index][2])
            if (currentNote === "c") {
                var newNote = "b";
                var newOctave = currentOctave - 1;
            } else {
                var newNote = scale[scale.indexOf(currentNote) - 1];
                var newOctave = currentOctave;
            }
            let note = newNote + "/" + newOctave;
            let cp = counterpoint;
            cp[index] = note;
            setCounterpoint([...cp]);
        }
    }

    function nextNote() {
        if (index !== cantus.length) {
            setIndex(prev => prev + 1);
        }
    }

    function previousNote() {
        if (index !== 1) {
            setIndex(prev => prev - 1);
        }
    }

    return (
        <main className="container flex-shrink-0">
            <h1 className="mt-4">Contraponto Simples a Duas Vozes</h1>
            <h2>Primeira Espécie</h2>
            <p>Escreva o contraponto a partir do <i>cantus firmus</i> dado. No momento, há {amount} <i>cantus firmi</i> disponíveis.</p>
            <div className="row">
                <div className="col-lg-4 col-sm-3">
                    <div className="input-group">
                        <span className="input-group-text">Cantus firmus</span>
                        <input className="form-control" type="number" name="cantusfirmi" 
                        value={cantusIndex} step="1" min="1" max={amount} 
                        onChange={handleCantusIndex} />
                        <button className="btn btn-outline-secondary" type="button" onClick={handleRandomCantus}>
                            Aleatório
                        </button>
                    </div>
                </div>
            </div>
            {chooseClef ?
                <div className="mt-3">
                    <p>Escrever contraponto em qual clave?</p>
                    {<ClefPosition 
                        clef={clef}
                        clefPos={clefPos}
                        setClefPos={setClefPos}
                    />}
                </div>
                :
                null}
            <div className="container overflow-auto" style={{width: "100%" + "px", overflow: "auto"}}>
                <TwoVoicesCanvas
                    clef={clef}
                    clefPos={clefPos}
                    cantus={cantus}
                    index={index}
                    counterpoint={counterpoint}
                />
            </div>
            <div className="container mt-3">
                <p>Adicionar nota:</p>
                <div className="btn-toolbar mb-3" role="toolbar" aria-label="Toolbar with button groups">
                    <div className="btn-group me-2" role="group">
                        <button className="btn btn-outline-primary" 
                        onClick={addNote} value="c">Dó</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="d">Ré</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="e">Mi</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="f">Fá</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="g">Sol</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="a">Lá</button>
                        <button className="btn btn-outline-primary"
                        onClick={addNote} value="b">Si</button>
                    </div>
                    <div className="btn-group me-2" role="group">
                        <button className="btn btn-primary" onClick={moveNoteUp}>↑</button>
                        <button className="btn btn-primary" onClick={moveNoteDown}>↓</button>
                    </div>
                    <div className="btn-group" role="group">
                        <button className="btn btn-primary" onClick={previousNote}>Anterior</button>
                        <button className="btn btn-primary" onClick={nextNote}>Próximo</button>
                    </div>
                </div>
            </div>

        </main>
    )
}