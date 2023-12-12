export default function GenerateNoteBtns ({ handleNewNote }) {
    return (
        <div className="d-flex gap-3">
            <button type="button" className="btn btn-primary my-3" value="1" onClick={handleNewNote}>Gerar 1 nota</button>
            <button type="button" className="btn btn-primary my-3" value="3" onClick={handleNewNote}>Gerar 3 notas</button>
            <button type="button" className="btn btn-primary my-3" value="5" onClick={handleNewNote}>Gerar 5 notas</button>
        </div>
    )
}