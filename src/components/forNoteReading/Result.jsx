export function Result({result, pitches, index}) {

    const pitchNames = {
        "c": "dó",
        "d": "ré",
        "e": "mi",
        "f": "fá",
        "g": "sol",
        "a": "lá",
        "b": "si"
    }

    if (result === "none") {
        return null
    }

    if (result === "right") {
        return (
            <div className="row">
                <div className="alert alert-success col-lg-8" role="alert">
                    Correto! A nota é {pitchNames[pitches[index-1][0]]}!
                </div>
            </div>
        )
    }

    if (result === "wrong") {
        return(
            <div className="row">
                <div className="alert alert-danger col-lg-8" role="alert">
                    A nota não está certa... O correto seria {pitchNames[pitches[index-1][0]]}.
                </div>
            </div>
        )
    }
}