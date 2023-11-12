import { useEffect } from "react"
import { Formatter, Renderer, Stave, StaveNote, Voice } from "vexflow"
import { fromInterval } from "../../utils/fromInterval"

export function IntervalCanvas({clefs, intervals, pitches, index}) {

    useEffect(() => {
        const canvasElement = document.getElementById("interval-canvas")
        const renderer = new Renderer(canvasElement, Renderer.Backends.CANVAS)

        var offset = 10;
        // two notes in single stave
        if (clefs.length === 1) {
            
            renderer.resize(662,130)
            const context = renderer.getContext()
            
            pitches.forEach((p, i) => {
                const staveMeasure = new Stave(offset, 0, 120);

                if (i === 0) staveMeasure.addClef(clefs[0])
                staveMeasure.setContext(context).draw();

                let notesLowerVoice = [new StaveNote({keys: [p], duration: "w", clef: clefs[0]})]
                
                let addedNote = fromInterval(p, intervals[i])
                let notesUpperVoice = [new StaveNote({keys: [addedNote], duration: "w", clef: clefs[0]})]
                if (i === index) {
                    notesUpperVoice[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
                    notesLowerVoice[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
                }

                // creating the voices
                const voices = [
                    new Voice({num_beats: 4, beat_value: 4}).addTickables(notesUpperVoice),
                    new Voice({num_beats: 4, beat_value: 4}).addTickables(notesLowerVoice)
                ]

                new Formatter().joinVoices(voices).format(voices, 350)

                voices.forEach(v => v.draw(context, staveMeasure))
                offset = staveMeasure.width + staveMeasure.x;
            })
        }
        
        // each note in separate clef
        else {
            renderer.resize(662,200)
            const context = renderer.getContext()

            pitches.forEach((p, i) => {
                //upper stave
                const staveMeasureUpper = new Stave(offset, 0, 120);
                if (i === 0) staveMeasureUpper.addClef(clefs[0])
                staveMeasureUpper.setContext(context).draw();

                let addedNote = fromInterval(p, intervals[i])
                let notesMeasureUpper = [new StaveNote({keys: [addedNote], duration: "w", clef: clefs[0]})];
                if (i === index) notesMeasureUpper[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
                Formatter.FormatAndDraw(context, staveMeasureUpper, notesMeasureUpper);


                //lower stave
                const staveMeasureLower = new Stave(offset, 70, 120);
                if (i === 0) staveMeasureLower.addClef(clefs[1])
                staveMeasureLower.setContext(context).draw();

                let notesMeasureLower = [new StaveNote({keys: [p], duration: "w", clef: clefs[1]})]
                if (i === index) notesMeasureLower[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});

                Formatter.FormatAndDraw(context, staveMeasureLower, notesMeasureLower);

                offset = staveMeasureUpper.width + staveMeasureUpper.x;
            })
        }
    })

    return <canvas id="interval-canvas" />
}