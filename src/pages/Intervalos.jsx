import { useState } from "react";
import { ClefNumberRadios } from "../components/forIntervals/clefNumberRadios";
import { ClefChoice } from "../components/forIntervals/ClefChoice";
import { IntervalCanvas } from "../components/forIntervals/IntervalCanvas";
import { GenerateIntervalsBtns } from "../components/forIntervals/GenerateIntervalsBtns";
import { absolutePitch } from "../utils/absolutePitch";
import { IntervalButtons } from "../components/forIntervals/IntervalButtons";
import { ResultIntervals } from "../components/forIntervals/ResultIntervals";
import { fromInterval } from "../utils/fromInterval";
import { checkNoteWithinRange } from "../utils/checkNoteWithinRange";

export function Intervalos() {

    const diatonicScale = ["c", "d", "e", "f", "g", "a", "b"];

    const [staveNumber, setStaveNumber] = useState("single");
    const [clefs, setClefs] = useState(["soprano"]);
    const [pitches, setPitches] = useState(["c/4"]);
    const [intervals, setIntervals] = useState([5]);
    const [index, setIndex] = useState(0);
    const [result, setResult] = useState("none");

    function handleNewIntervals(e) {
        let newAmount = Number(e.currentTarget.value)
        generateNewIntervals(clefs, newAmount)
    }

    function handleIntervalPress(e) {
        if (index >= pitches.length) {
            setResult("none")
        } else {
            let clickedInterval = Number(e.currentTarget.value);
            console.log("The interval was " + intervals[index])
            console.log("You clicked " + clickedInterval)
            if(clickedInterval === intervals[index]) {
                setResult("right")
            } else {
                setResult("wrong")
            }
            setIndex(index+1)
        }
    }

    function generateNewIntervals(clefs, amount) {
        let newIntervals = [];
        let pitchesArray = [];
        let lowerClef = clefs.length == 1 ? clefs[0] : clefs[1]
        let upperClef = clefs[0]
        for (let i = 0; i < amount; i++) {
            do {
                var intv = Math.floor(Math.random() * 8 + 1)
                let newPitch = diatonicScale[Math.floor(Math.random()*7)]
                var newAbs = absolutePitch(newPitch, lowerClef)
                var noteFromInterval = fromInterval(newAbs, intv)
            } while (!checkNoteWithinRange(noteFromInterval, upperClef))

            newIntervals.push(intv)
            pitchesArray.push(newAbs)
        }
        setIntervals(newIntervals)
        setPitches(pitchesArray)
        setResult("none")
        setIndex(0)
    }

    return (
        <main className="container flex-shrink-0">
            <h1 className="mt-4">Treino de Intervalos</h1>
            <p>Quantas claves serão utilizadas simultaneamente?</p>

            <ClefNumberRadios 
                selectedRadioBtn={staveNumber}
                pitches={pitches}
                setStaveNumber={setStaveNumber}
                setClefs={setClefs}
                generateNewIntervals={generateNewIntervals}
            />
            
            <ClefChoice
                staveNumber={staveNumber}
                clefs={clefs}
                pitches={pitches}
                setClefs={setClefs}
                generateNewIntervals={generateNewIntervals}
            />

            <GenerateIntervalsBtns 
                handleNewIntervals={handleNewIntervals}
            />

            <IntervalCanvas
                clefs={clefs}
                pitches={pitches}
                intervals={intervals}
                index={index}
            />

            <ResultIntervals 
                intervals={intervals}
                index={index}
                result={result}
            />

            <IntervalButtons
                pitches={pitches}
                index={index}
                handleIntervalPress={handleIntervalPress}
            />

        </main>
    )
}