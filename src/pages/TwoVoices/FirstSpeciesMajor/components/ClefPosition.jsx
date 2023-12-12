import React from 'react'

export default function ClefPosition ({ clef, clefPosition, setClefPosition }) {

    if(clef === "alto") {
        var upperClef = "soprano";
        var lowerClef = "tenor";
    } else { // clef = tenor
        var upperClef = "alto";
        var lowerClef = "baixo";
    }

    function handleClefPosition(event) {
        setClefPosition(event.target.value)
    }

    function isRadioSelected(inputValue) {
        return (inputValue === clefPosition)
    }

    return (
        <div className="container">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffPosition" value="upper" 
                checked={isRadioSelected("upper")} onChange={handleClefPosition} id="upper" />
                <label className="form-check-label" htmlFor="upper">
                    Clave acima ({upperClef})
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffPosition" value="lower" 
                checked={isRadioSelected("lower")} onChange={handleClefPosition} id="lower" />
                <label className="form-check-label" htmlFor="lower">
                    Clave abaixo ({lowerClef})
                </label>
            </div>
        </div>
    )
}