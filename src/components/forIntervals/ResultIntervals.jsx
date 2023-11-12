export function ResultIntervals({result, intervals, index}) {

    const intervalNames = ["uníssono", "segunda", "terça", "quarta", "quinta", "sexta", "sétima", "oitava"]

    if (result === "none") {
        return null
    }

    if (result === "right") {
        return (
            <div className="row">
                <div className="alert alert-success col-lg-8" role="alert">
                    Correto! O intervalo é de {intervalNames[intervals[index-1]-1]}!
                </div>
            </div>
        )
    }

    if (result === "wrong") {
        return(
            <div className="row">
                <div className="alert alert-danger col-lg-8" role="alert">
                    O intervalo não está certo... O correto seria {intervalNames[intervals[index-1]-1]}.
                </div>
            </div>
        )
    }
}