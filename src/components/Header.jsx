import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Ad Parnassum</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                    aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/">Leitura</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/intervalos">Intervalos</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Duas Vozes
                            </a>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/duasvozes/primeiraespecie">Primeira Espécie</Link></li>
                            </ul>
                        </li>
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
}