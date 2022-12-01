import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navbar extends Component {

    render() {
        let mode = this.props.mode.mode;
        let style = this.props.mode.style;
        return (
            <nav className={`navbar navbar-expand-lg navbar-${mode} bg-${mode} fixed-top`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">NewsJunkie</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li>

                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </Link>
                                <ul className="dropdown-menu" style={style} >
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/general">General</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/business">Business</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/entertainment">Entertainment</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/health">Health</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/science">Science</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/sports">Sports</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="dropdown-item" style={style} to="/technology">Technology</Link>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                        <div className="form-check form-switch">
                            <input className="form-check-input" onClick={this.props.handleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label text-primary" htmlFor="flexSwitchCheckDefault">{this.props.btnText}</label>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}
