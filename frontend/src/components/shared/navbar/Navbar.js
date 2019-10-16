import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = (props) => {

    return (
        <nav className="app-navbar navbar navbar-expand-sm bg-dark navbar-dark">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <NavLink className="nav-link" activeClassName="active" to="/">
                        Task
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;