import { useEffect } from "react"
import { Formatter, Renderer, Stave, StaveNote } from "vexflow"

export function TwoVoicesCanvas({clef, clefPos, cantus, index, counterpoint}) {

    const allClefs = ["bass", "tenor", "alto", "soprano"];
    const clefRestPosition = {"soprano": "b/4", "alto": "e/4", "tenor": "c/4", "bass": "f/3"}
    const canvasWidth = 100 * cantus.length + 20;

    if(clefPos === "upper") {
        // upper is counterpoint, lower is CF
        var lowerClef = clef;
        var lowerNotes = cantus;
        var upperClef = allClefs[allClefs.indexOf(clef) + 1];
        var upperNotes = counterpoint;
    } else {
        var upperClef = clef;
        var lowerClef = allClefs[allClefs.indexOf(clef) - 1];
        var upperNotes = cantus;
        var lowerNotes = counterpoint;
    }

    useEffect(() => {
        const canvasElement = document.getElementById("two-voices-canvas")
        const renderer = new Renderer(canvasElement, Renderer.Backends.CANVAS)

        var offset = 10;

        renderer.resize(canvasWidth,200)
        const context = renderer.getContext()

        cantus.forEach((p, i) => {
            //upper stave
            const staveMeasureUpper = new Stave(offset, 0, 100);
            if (i === 0) staveMeasureUpper.addClef(upperClef)
            staveMeasureUpper.setContext(context).draw();

            let upperNote = upperNotes[i]
            let upperDuration = "w";
            let alignUpper = false;
            if (upperNote == null) {
                upperNote = clefRestPosition[upperClef]
                upperDuration = "wr"
                alignUpper = true;
            }
            let notesMeasureUpper = [new StaveNote({keys: [upperNote], duration: upperDuration, 
                                                    clef: upperClef, align_center: alignUpper})];
            if (i === index) notesMeasureUpper[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
            Formatter.FormatAndDraw(context, staveMeasureUpper, notesMeasureUpper);


            //lower stave
            const staveMeasureLower = new Stave(offset, 70, 100);
            if (i === 0) staveMeasureLower.addClef(lowerClef)
            staveMeasureLower.setContext(context).draw();

            let lowerNote = lowerNotes[i];
            let lowerDuration = "w";
            let alignLower = false;
            if (lowerNote == null) {
                lowerNote = clefRestPosition[lowerClef];
                lowerDuration = "wr";
                alignLower = true;
            }
            let notesMeasureLower = [new StaveNote({keys: [lowerNote], duration: lowerDuration, 
                                                    clef: lowerClef, align_center: alignLower})]
            if (i === index) notesMeasureLower[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});

            Formatter.FormatAndDraw(context, staveMeasureLower, notesMeasureLower);

            offset = staveMeasureUpper.width + staveMeasureUpper.x;
            })
    })

    return <canvas id="two-voices-canvas" />
}