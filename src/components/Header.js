import React from 'react'
import Typed from 'react-typed';
import { Link } from 'react-scroll';

const Header = () => {
    return (
        <div id="header" className="header-wrapper">
            <div className="main-info">
                <h1>Girma Ebssa</h1>
                <Typed className="typed-text"
                    strings={["Frontend Developer", "Backend Developer", "Full Stack Developer", "React Developer", "Javascript Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <Link to="contact" className="btn-main-offer">Contact Me</Link>

            </div>
        </div>

    )
}

export default Header
