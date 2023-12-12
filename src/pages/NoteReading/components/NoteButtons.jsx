export default function NoteButtons({handleNotePress, index, notes}) {

    function isBtnDisabled() {
        return (index >= notes.length)
    }

    return (
        <div className="d-flex gap-2">
            <button type="button" className="btn btn-primary my-3" value="c"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Dó</button>

            <button type="button" className="btn btn-primary my-3" value="d"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Ré</button>

            <button type="button" className="btn btn-primary my-3" value="e"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Mi</button>

            <button type="button" className="btn btn-primary my-3" value="f"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Fá</button>

            <button type="button" className="btn btn-primary my-3" value="g"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Sol</button>

            <button type="button" className="btn btn-primary my-3" value="a"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Lá</button>

            <button type="button" className="btn btn-primary my-3" value="b"
            disabled={isBtnDisabled()} onClick={handleNotePress}>Si</button>
        </div>
    )
}