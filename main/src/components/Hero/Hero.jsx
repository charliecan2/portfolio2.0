import React from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar';

function Hero() {
    return (
        <header className="hero">
            <Navbar />
            <div className="hero-content">
                <div className="text-md">Hello, my name is <span>Carlos Cantu</span></div>
                <div className="text-xl">
                    Forging an <i>inituitive user experience</i> through <span>design.</span>
                </div>
            </div>
        </header>
    )
}

export default Hero;
