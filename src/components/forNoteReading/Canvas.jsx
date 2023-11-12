import { useEffect } from "react";
import { Renderer, Stave, StaveNote, Formatter } from "vexflow"

export function Canvas({pitches, clef, index}) {

    useEffect(() => {
        const canvasElement = document.getElementById("canvas");
        const renderer = new Renderer(canvasElement, Renderer.Backends.CANVAS)
        renderer.resize(662,130);
        const context = renderer.getContext();
    
        var offset = 10;
        //making a stave for each note
        pitches.forEach((p, i) => {
            const staveMeasure = new Stave(offset, 0, 120)
    
            if (i === 0) staveMeasure.addClef(clef); 
            staveMeasure.setContext(context).draw();
    
            let notesMeasure = [new StaveNote({keys: [p], duration: "w", clef: clef})];
    
            if (i === index) notesMeasure[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
            Formatter.FormatAndDraw(context, staveMeasure, notesMeasure);
    
            offset = staveMeasure.width + staveMeasure.x;
        })
    })

    return <canvas id="canvas" />
}