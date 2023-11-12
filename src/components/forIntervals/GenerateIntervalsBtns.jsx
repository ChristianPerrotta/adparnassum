export function GenerateIntervalsBtns ({handleNewIntervals}) {
    return (
        <div className="d-flex gap-3">
            <button type="button" className="btn btn-primary my-3" value="1" onClick={handleNewIntervals}>Gerar 1 intervalo</button>
            <button type="button" className="btn btn-primary my-3" value="3" onClick={handleNewIntervals}>Gerar 3 intervalos</button>
            <button type="button" className="btn btn-primary my-3" value="5" onClick={handleNewIntervals}>Gerar 5 intervalos</button>
        </div>
    )
}