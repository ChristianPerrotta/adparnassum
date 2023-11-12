export function ClefChoice({staveNumber, clefs, pitches, setClefs, generateNewIntervals}) {

    // Single clef
    function isSingleClefSelected(value) {
        return (clefs[0] === value)
    }

    function handleSingleClefRadioClick(e) {
        let clef = e.currentTarget.value;
        setClefs([clef]);
        generateNewIntervals([clef], pitches.length);
    }

    // Double clef
    function isDoubleClefSelected(value) {
        let bothClefs = value.split("-");
        return (bothClefs[0] === clefs[0] && bothClefs[0] === clefs[0])
    }

    function handleDoubleClefRadioClick(e) {
        let bothClefs = e.currentTarget.value.split("-");
        setClefs(bothClefs);
        generateNewIntervals(bothClefs, pitches.length);
    }

    if (staveNumber === "single") {
        return (
            <>
                <p className="mt-3">Escolha a clave:</p>
                <div className="container">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffType" value="soprano" 
                        checked={isSingleClefSelected("soprano")} onChange={handleSingleClefRadioClick} />
                        <label className="form-check-label" htmlFor="soprano">
                            Soprano
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffType" value="alto" 
                        checked={isSingleClefSelected("alto")} onChange={handleSingleClefRadioClick} />
                        <label className="form-check-label" htmlFor="alto">
                            Alto
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffType" value="tenor" 
                        checked={isSingleClefSelected("tenor")} onChange={handleSingleClefRadioClick} />
                        <label className="form-check-label" htmlFor="tenor">
                            Tenor
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffType" value="bass" 
                        checked={isSingleClefSelected("bass")} onChange={handleSingleClefRadioClick} />
                        <label className="form-check-label" htmlFor="bass">
                            Baixo
                        </label>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <p className="mt-3">Escolha as claves:</p>
                <div className="container">
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffTypes" value="soprano-alto" 
                        checked={isDoubleClefSelected("soprano")} onChange={handleDoubleClefRadioClick} />
                        <label className="form-check-label" htmlFor="soprano-alto">
                            Soprano e Alto
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffTypes" value="alto-tenor" 
                        checked={isDoubleClefSelected("alto")} onChange={handleDoubleClefRadioClick} />
                        <label className="form-check-label" htmlFor="alto-tenor">
                            Alto e Tenor
                        </label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input className="form-check-input" type="radio" name="staffTypes" value="tenor-bass" 
                        checked={isDoubleClefSelected("tenor")} onChange={handleDoubleClefRadioClick} />
                        <label className="form-check-label" htmlFor="tenor-bass">
                            Tenor e Baixo
                        </label>
                    </div>
                </div>
            </>
        )
    }
}