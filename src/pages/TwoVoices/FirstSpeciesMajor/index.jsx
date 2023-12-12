import { useState } from "react";

import cantusFirmi from "../../../data/cantusFirmus.json";

import ClefPosition from "./components/ClefPosition";
import TwoVoicesCanvas from "./components/TwoVoicesCanvas";
import NoteButtons from "./components/NoteButtons";

import CantusFirmus from "../../../classes/CantusFirmus";
import Counterpoint from "../../../classes/Counterpoint";

import Note from "../../../classes/Note";

export default function FirstSpeciesMajor() {

    const [cantusIndex, setCantusIndex] = useState(1);
    const [clefPosition, setClefPosition] = useState("upper");
    const [counterpoint, setCounterpoint] = useState([]);
    const [index, setIndex] = useState(0);

    const cantus = new CantusFirmus(cantusIndex)
    const cantusNotes = cantus.notes
    const clef = cantus.pickClef();
    
    const amountOfCantusFirmi = cantusFirmi.length;

    //decide if the radio buttons to choose clef will be rendered
    const chooseClef = (clef === "alto" || clef === "tenor") ? true : false;

    function adjustClefPosition(newIndex) {
        if (cantusFirmi[newIndex - 1].clef === "bass") {
            setClefPosition("upper");
        } else if (cantusFirmi[newIndex - 1].clef === "soprano") {
            setClefPosition("lower");
        }
    }

    function handleCantusIndex(event) {
        let newIndex = Number(event.target.value);
        if(newIndex && newIndex <= amountOfCantusFirmi && newIndex > 0) {
            setCantusIndex(newIndex);
            adjustClefPosition(newIndex);
            setCounterpoint([]);
            setIndex(0);
        }
    }

    function handleRandomCantus() {
        let newIndex = Math.floor(Math.random() * amountOfCantusFirmi) + 1;
        setCantusIndex(newIndex);
        adjustClefPosition(newIndex);
        setCounterpoint([]);
        setIndex(0);
    }

    function addNote(event) {
        var octave = 4;
        if (clefPosition === "lower") octave = 3;
        let pitch = event.target.value;
        let note = new Note(pitch, octave)
        counterpoint[index] = note;
        setCounterpoint([...counterpoint]);
    }

    function moveNoteUp() {
        if (counterpoint[index] !== undefined) {
            let currentNote = counterpoint[index]
            let newNote = Note.getNextNote(currentNote)
            counterpoint[index] = newNote;
            setCounterpoint([...counterpoint]);
        }
    }

    function moveNoteDown() {
        if (counterpoint[index] !== undefined) {
            let currentNote = counterpoint[index];
            let newNote = Note.getPreviousNote(currentNote);
            counterpoint[index] = newNote;
            setCounterpoint([...counterpoint]);
        }
    }

    function nextNote() {
        if (index < cantusNotes.length - 1) {
            setIndex(prev => prev + 1);
        }
    }

    function previousNote() {
        if (index > 0) {
            setIndex(prev => prev - 1);
        }
    }

    function handleAnalyze() {
        let finishedCounterpoint = new Counterpoint(counterpoint, cantus)
        finishedCounterpoint.analyze()

        // TODO: create user-readable analysis
        console.log(finishedCounterpoint.analysis);
    }

    return (
        <main className="container flex-shrink-0">
            <h1 className="mt-4">Contraponto Simples a Duas Vozes</h1>
            <h2>Primeira Espécie</h2>
            <p>Escreva o contraponto a partir do <i>cantus firmus</i> dado. No momento, há {amountOfCantusFirmi} <i>cantus firmi</i> disponíveis.</p>
            <div className="row">
                <div className="col-lg-4 col-sm-3">
                    <div className="input-group">
                        <span className="input-group-text">Cantus firmus</span>
                        <input className="form-control" type="number" name="cantusfirmi" 
                        value={cantusIndex} step="1" min="1" max={amountOfCantusFirmi} 
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
                        clefPosition={clefPosition}
                        setClefPosition={setClefPosition}
                    />}
                </div>
                :
                null}
            <div className="container overflow-auto" style={{width: "100%" + "px", overflow: "auto"}}>
                <TwoVoicesCanvas
                    clef={clef}
                    clefPosition={clefPosition}
                    cantusNotes={cantusNotes}
                    index={index}
                    counterpoint={counterpoint}
                />
            </div>
            <NoteButtons
                addNote={addNote}
                moveNoteUp={moveNoteUp}
                moveNoteDown={moveNoteDown}
                previousNote={previousNote}
                nextNote={nextNote}
                handleAnalyze={handleAnalyze}
                cantusNotes={cantusNotes}
                counterpoint={counterpoint}
            />
        </main>
    )
}