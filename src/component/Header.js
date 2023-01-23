import React from "react"
import { Link } from "react-router-dom"

function Header() {
    return (
        <>

            <nav className="navbar navbar-expand-lg  bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/" style={{ color: 'blue', fontWeight: '800' }}>IMAGE UPLOADER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'gray', fontWeight: '500' }}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/register" style={{ color: 'gray', fontWeight: '500' }}>Register</Link>
                            </li>


                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Header