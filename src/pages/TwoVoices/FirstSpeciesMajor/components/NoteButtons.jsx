import { useEffect } from "react";

export default function NoteButtons(
    { addNote, moveNoteUp, moveNoteDown, previousNote, nextNote, handleAnalyze, cantusNotes, counterpoint }
    ) {
    
    let btnClasses = "btn btn-secondary disabled";
    let showTooltip = true;
    if (counterpoint.length === cantusNotes.length && !counterpoint.includes(undefined)) {
        btnClasses = "btn btn-success";
        showTooltip = false;
    }

    useEffect(() => {
        const tooltipBtn = new bootstrap.Tooltip(document.getElementById("analyze-btn"))
        if (showTooltip) {
            tooltipBtn.enable();
        } else {
            tooltipBtn.disable();
        }
    }, [showTooltip])
  
    return (
    <div className="container mt-3">
        <p>Adicionar nota:</p>
        <div className="btn-group me-2 mb-2" role="group">
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
        <div className="btn-group me-2 mb-2" role="group">
            <button className="btn btn-primary" onClick={moveNoteUp}>↑</button>
            <button className="btn btn-primary" onClick={moveNoteDown}>↓</button>
        </div>
        <div className="btn-group me-2 mb-2" role="group">
            <button className="btn btn-primary" onClick={previousNote}>Anterior</button>
            <button className="btn btn-primary" onClick={nextNote}>Próximo</button>
        </div>
        <div className="btn-group me-2 mb-2" data-bs-toggle="tooltip"
            data-bs-title="Finalize o contraponto por inteiro antes de analisar" id="analyze-btn">
            <button className={btnClasses} onClick={handleAnalyze}>Analisar</button>
        </div>
    </div>
  );
}