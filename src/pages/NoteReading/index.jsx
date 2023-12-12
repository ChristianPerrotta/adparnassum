import { useState } from "react";

import Canvas from "./components/Canvas"
import StaffRadios from "./components/StaffRadios";
import NoteButtons from "./components/NoteButtons";
import Result from "./components/Result";
import GenerateNoteBtns from "./components/GenerateNoteBtns";

import Note from "../../classes/Note";

export default function NoteReading() {

    const [clef, setClef] = useState("soprano");
    const [notes, setNotes] = useState([new Note("c", 4)]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("none");

    function handleNewNote(event) {
        let newAmountOfNotes = Number(event.currentTarget.value)
        generateNewNotes(clef, newAmountOfNotes)
    }

    function generateNewNotes(clef, amountOfNotes) {
        let notesArray = [];
        for (let i = 0; i < amountOfNotes; i++) {
            let newNote = Note.createRandom(clef)
            notesArray.push(newNote)
        }
        setNotes(notesArray)
        setResult("none")
        setIndex(0)
    }

    function handleNotePress(event) {
        if (index >= notes.length) {
            setResult("none")
        } else {
            let clickedPitch = event.currentTarget.value
            if(clickedPitch === notes[index].pitch) {
                setResult("right")
            } else {
                setResult("wrong")
            }
            setIndex(index+1)
        }
    }

    return (
        <main className="container flex-shrink-0">
            <h1 className="mt-4">Treino de Leitura</h1>
            <p>Escolha a clave para praticar:</p>
            
            <StaffRadios
                selectedRadioBtn={clef}
                notes={notes}
                setClef={setClef}
                setPitches={setNotes}
                generateNewNotes={generateNewNotes}
            />

            <GenerateNoteBtns handleNewNote={handleNewNote} />

            <Canvas
                notes={notes}
                clef={clef}
                index={index}
            />

            <Result
                result={result}
                notes={notes}
                index={index}
            />

            <NoteButtons
                handleNotePress={handleNotePress}
                index={index}
                notes={notes}
            />
        </main>
    )
}