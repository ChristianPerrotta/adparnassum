export function ClefNumberRadios({selectedRadioBtn, pitches, setStaveNumber, setClefs, generateNewIntervals}) {

    function handleRadioClick(e) {
        let staveNumber = e.currentTarget.value;
        setStaveNumber(staveNumber);
        if (staveNumber === "separated") {
            setClefs(["soprano", "alto"]);
            generateNewIntervals(["soprano", "alto"], pitches.length)
        } else {
            setClefs(["soprano"])
            generateNewIntervals(["soprano"], pitches.length)
        }
    }

    function isRadioSelected(value) {
        return (selectedRadioBtn === value)
    }

    return (
        <div className="container">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffNumber" value="single" 
                checked={isRadioSelected("single")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="single">
                    Única clave
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffNumber" value="separated" 
                checked={isRadioSelected("separated")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="separated">
                    Claves separadas
                </label>
            </div>
        </div>
    )
}