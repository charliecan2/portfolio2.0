import React, { useState } from 'react'
import './Navbar.scss'

function Navbar() {
    const [active, setActive] = useState(false);
    const toggleNavLink = (e) => {
        e.preventDefault();

        setActive(!active);
    }

    return (
        <nav className="navbar">
            <a href="#" className="toggle-button" onClick={(e) => toggleNavLink(e)}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </a>
            <div className={`navbar-links ${active && "active"}`}>
                <ul>
                    <li>
                        <a href="#">About</a>  
                    </li>
                    <li>
                    <a href="#">Projects</a>
                    </li>
                    <li>
                    <a href="#">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
