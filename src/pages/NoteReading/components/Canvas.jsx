import { useEffect } from "react";
import { Renderer, Stave, StaveNote, Formatter } from "vexflow"

export default function Canvas({notes, clef, index}) {

    useEffect(() => {
        const canvasElement = document.getElementById("canvas");
        const renderer = new Renderer(canvasElement, Renderer.Backends.CANVAS)
        renderer.resize(662,130);
        const context = renderer.getContext();
    
        var offset = 10;
        
        //making a stave for each note
        notes.forEach((note, i) => {
            const staveMeasure = new Stave(offset, 0, 120)
    
            if (i === 0) staveMeasure.addClef(clef); 
            staveMeasure.setContext(context).draw();
    
            let notesMeasure = [new StaveNote({keys: [note.notation], duration: "w", clef: clef})];
    
            if (i === index) notesMeasure[0].setStyle({fillStyle: "orange", strokeStyle: "orange"});
            Formatter.FormatAndDraw(context, staveMeasure, notesMeasure);
    
            offset = staveMeasure.width + staveMeasure.x;
        })
    })

    return <canvas id="canvas" />
}