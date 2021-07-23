import React from 'react'
import './Hero.scss'
import Navbar from '../Navbar/Navbar';
import LinkButton from '../Button/LinkButton';
import { faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Hero() {
    return (
        <header className="hero">
            <Navbar />
            <div className="hero-content">
                <div className="text-md">Hello, my name is Carlos Cantu</div><br /><br />
                <div className="text-md">Full-Stack Web Developer</div>
                <div className="text-xl">
                    Forging an <i>inituitive user experience</i> through <span>design.</span>
                </div>
                <LinkButton 
                href={"https://github.com/charliecan2"}
                text={"GitHub"}
                faIcon={faGithub}
                />
                <LinkButton 
                href={"https://www.linkedin.com/in/carlos-cantu-7b57a5162/"}
                text={"LinkedIn"}
                faIcon={faLinkedin}
                />
                <LinkButton
                href={`${process.env.PUBLIC_URL}/assets/documents/carlos-cantu-resume.pdf`}
                text={"Resume"}
                faIcon={faFileAlt}
                />
            </div>
        </header>
    )
}

export default Hero;
