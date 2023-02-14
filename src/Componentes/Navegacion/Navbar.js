import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/'>
                    <img src='./logo.png' width='50' />
                    </Link>
                    <Link className="navbar-brand" to='/'>PelisPlus</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <li className="nav-item">
                             <Link type="button" class="btn btn-success" to='/Login'>Iniciar Seccion</Link>
                    </li>
                    <li className="nav-item">
                             <Link type="button" class="btn btn-success" to='/Regis' > Registrarse</Link>
                    </li>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/Peliculas'>Peliculas</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Inicio'>Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to='/Favoritos'>Favoritos</Link>
                            </li>
                            
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav><br/>

        </div>
    )
}

export default Navbar
