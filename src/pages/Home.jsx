import { useState } from "react";
import { Canvas } from "../components/forNoteReading/Canvas"
import { StaffRadios } from "../components/forNoteReading/StaffRadios";
import { absolutePitch } from "../utils/absolutePitch";
import { NoteButtons } from "../components/forNoteReading/NoteButtons";
import { Result } from "../components/forNoteReading/Result";
import { GenerateNoteBtns } from "../components/forNoteReading/generateNoteBtns";

export function HomePage() {

    const diatonicScale = ["c", "d", "e", "f", "g", "a", "b"];

    const [clef, setClef] = useState("soprano");
    const [pitches, setPitches] = useState(["c/4"]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("none");

    function handleNewNote(e) {
        let newAmount = Number(e.currentTarget.value)
        generateNewPitches(clef, newAmount)
    }

    function generateNewPitches(clef, amount) {
        let pitchesArray = [];
        for (let i = 1; i <= amount; i++) {
            let newPitch = diatonicScale[Math.floor(Math.random()*7)]
            pitchesArray.push(absolutePitch(newPitch, clef))
        }
        setPitches(pitchesArray)
        setResult("none")
        setIndex(0)
    }

    function handleNotePress(e) {
        if (index >= pitches.length) {
            setResult("none")
        } else {
            let clickedPitch = e.currentTarget.value
            if(clickedPitch === pitches[index][0]) {
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
                pitches={pitches}
                setClef={setClef}
                setPitches={setPitches}
                generateNewPitches={generateNewPitches}
            />

            <GenerateNoteBtns handleNewNote={handleNewNote} />

            <Canvas
                pitches={pitches}
                clef={clef}
                index={index}
            />

            <Result
                result={result}
                pitches={pitches}
                index={index}
            />

            <NoteButtons
                handleNotePress={handleNotePress}
                index={index}
                pitches={pitches}
            />
        </main>
    )
}