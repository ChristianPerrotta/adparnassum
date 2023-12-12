export default function ClefNumberRadios({selectedRadioBtn, notes, setStaveNumber, setClefs, generateNewIntervals}) {

    function handleRadioClick(event) {
        let staveNumber = event.currentTarget.value;
        setStaveNumber(staveNumber);
        if (staveNumber === "separated") {
            setClefs(["soprano", "alto"]);
            generateNewIntervals(["soprano", "alto"], notes.length)
        } else {
            setClefs(["soprano"])
            generateNewIntervals(["soprano"], notes.length)
        }
    }

    function isRadioSelected(value) {
        return (selectedRadioBtn === value)
    }

    return (
        <div className="container">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffNumber" value="single" 
                checked={isRadioSelected("single")} onChange={handleRadioClick} id="single" />
                <label className="form-check-label" htmlFor="single">
                    Única clave
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffNumber" value="separated" 
                checked={isRadioSelected("separated")} onChange={handleRadioClick} id="separated" />
                <label className="form-check-label" htmlFor="separated">
                    Claves separadas
                </label>
            </div>
        </div>
    )
}