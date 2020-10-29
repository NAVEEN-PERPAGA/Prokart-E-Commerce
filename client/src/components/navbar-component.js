import React, {Component} from 'react'
import {Link} from 'react-router-dom'


export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-success navbar-expand-lg">
                <Link to="/" className="navbar-brand" style={{fontSize:"25px", fontWeight:"bold"}}>PROKART</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="add_phone" className="nav-link">Add Phone</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}