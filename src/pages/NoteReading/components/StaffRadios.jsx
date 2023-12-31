export default function StaffRadios({selectedRadioBtn, notes, setClef, generateNewNotes}) {

    function isRadioSelected(value) {
        return (selectedRadioBtn === value)
    }

    function handleRadioClick(event) {
        let newClef = event.currentTarget.value;
        setClef(newClef);
        generateNewNotes(newClef, notes.length);
    }

    return (
        <div className="container">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffType" value="soprano" 
                checked={isRadioSelected("soprano")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="soprano">
                    Soprano
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffType" value="alto" 
                checked={isRadioSelected("alto")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="alto">
                    Alto
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffType" value="tenor"
                checked={isRadioSelected("tenor")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="tenor">
                    Tenor
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffType" value="bass"
                checked={isRadioSelected("bass")} onChange={handleRadioClick} />
                <label className="form-check-label" htmlFor="tenor">
                    Baixo
                </label>
            </div>
        </div>
    )
}