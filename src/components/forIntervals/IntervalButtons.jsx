export function IntervalButtons({handleIntervalPress, index, pitches}) {

    function isBtnDisabled() {
        return (index >= pitches.length)
    }
    
    return (
        <div className="d-flex gap-2">
            <button type="button" className="btn btn-primary my-3" value={1}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Uníssono</button>

            <button type="button" className="btn btn-primary my-3" value={2}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Segunda</button>

            <button type="button" className="btn btn-primary my-3" value={3}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Terça</button>

            <button type="button" className="btn btn-primary my-3" value={4}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Quarta</button>

            <button type="button" className="btn btn-primary my-3" value={5}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Quinta</button>

            <button type="button" className="btn btn-primary my-3" value={6}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Sexta</button>

            <button type="button" className="btn btn-primary my-3" value={7}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Sétima</button>

            <button type="button" className="btn btn-primary my-3" value={8}
            disabled={isBtnDisabled()} onClick={handleIntervalPress}>Oitava</button>
        </div>
    )
}