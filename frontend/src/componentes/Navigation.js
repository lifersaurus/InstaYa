import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import instaya from '../instaya.png'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-white bg-white p-3">
                <div className="container">
                    <Link className="navbar-brand" to="/">

                        <img src={instaya} />
                            
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Fechas recogida</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Crear fecha de recogida</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/user" className="nav-link">Crear usuario</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}