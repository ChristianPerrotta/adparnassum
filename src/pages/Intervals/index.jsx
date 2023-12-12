import { useState } from "react";

import ClefChoice from "./components/ClefChoice";
import IntervalCanvas from "./components/IntervalCanvas";
import GenerateIntervalsBtns from "./components/GenerateIntervalsBtns";
import IntervalButtons from "./components/IntervalButtons";
import ResultIntervals from "./components/ResultIntervals";
import ClefNumberRadios from "./components/ClefNumberRadios";

import Note from "../../classes/Note";

export default function Intervals() {

    const [staveAmount, setStaveAmount] = useState("single");
    const [clefs, setClefs] = useState(["soprano"]);
    const [notes, setNotes] = useState([new Note("c", 4)]);
    const [intervals, setIntervals] = useState([5]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("none");

    function handleNewIntervals(event) {
        let newAmountOfNotes = Number(event.currentTarget.value)
        generateNewIntervals(clefs, newAmountOfNotes)
    }

    function handleIntervalPress(event) {
        if (index >= notes.length) {
            setResult("none")
        } else {
            let clickedInterval = Number(event.currentTarget.value);
            if(clickedInterval === intervals[index]) {
                setResult("right")
            } else {
                setResult("wrong")
            }
            setIndex(index+1)
        }
    }

    function generateNewIntervals(clefs, amountOfNotes) {
        let intervalsArray = [];
        let notesArray = [];
        let lowerClef = clefs.length == 1 ? clefs[0] : clefs[1]
        let upperClef = clefs[0]
        for (let i = 0; i < amountOfNotes; i++) {
            do {
                var interval = Note.randomInterval;
                var note = Note.createRandom(lowerClef)
                var noteFromInterval = Note.createNoteFromInterval(note, interval)
            } while (!Note.isNoteWithinClefRange(noteFromInterval, upperClef))

            intervalsArray.push(interval)
            notesArray.push(note)
        }
        setIntervals(intervalsArray)
        setNotes(notesArray)
        setResult("none")
        setIndex(0)
    }

    return (
        <main className="container flex-shrink-0">
            <h1 className="mt-4">Treino de Intervalos</h1>
            <p>Quantas claves serão utilizadas simultaneamente?</p>

            <ClefNumberRadios 
                selectedRadioBtn={staveAmount}
                notes={notes}
                setStaveNumber={setStaveAmount}
                setClefs={setClefs}
                generateNewIntervals={generateNewIntervals}
            />
            
            <ClefChoice
                staveNumber={staveAmount}
                clefs={clefs}
                notes={notes}
                setClefs={setClefs}
                generateNewIntervals={generateNewIntervals}
            />

            <GenerateIntervalsBtns 
                handleNewIntervals={handleNewIntervals}
            />

            <IntervalCanvas
                clefs={clefs}
                notes={notes}
                intervals={intervals}
                index={index}
            />

            <ResultIntervals 
                intervals={intervals}
                index={index}
                result={result}
            />

            <IntervalButtons
                notes={notes}
                index={index}
                handleIntervalPress={handleIntervalPress}
            />

        </main>
    )
}