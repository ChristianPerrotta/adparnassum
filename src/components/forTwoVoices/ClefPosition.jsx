import React from 'react'

const ClefPosition = ({ clef, clefPos, setClefPos }) => {

    if(clef === "alto") {
        var upperClef = "soprano";
        var lowerClef = "tenor";
    } else { // clef = tenor
        var upperClef = "alto";
        var lowerClef = "baixo";
    }

    function handleClefPosition(e) {
        setClefPos(e.target.value)
    }

    function isRadioSelected(val) {
        return (val === clefPos)
    }

    return (
        <div className="container">
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffPosition" value="upper" 
                checked={isRadioSelected("upper")} onChange={handleClefPosition} />
                <label className="form-check-label" htmlFor="upper">
                    Clave acima ({upperClef})
                </label>
            </div>
            <div className="form-check form-check-inline">
                <input className="form-check-input" type="radio" name="staffPosition" value="lower" 
                checked={isRadioSelected("lower")} onChange={handleClefPosition} />
                <label className="form-check-label" htmlFor="lower">
                    Clave abaixo ({lowerClef})
                </label>
            </div>
        </div>
    )
}

export default ClefPosition