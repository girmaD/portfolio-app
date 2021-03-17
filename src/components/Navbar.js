import logo from '../ge.png'
import "../App.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img className="logo mt-4 p-0" src={logo}/></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff'}}/>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link smooth={true} to="header" className="nav-link" aria-current="page" href="#">Home</Link>
                        </li>
                        <li  className="nav-item">
                            <Link smooth={true} to="aboutme" className="nav-link" href="#">About Me</Link>
                        </li>
                        <li  className="nav-item">
                            <Link smooth={true} to="services" className="nav-link" href="#">Skills</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="experience" className="nav-link" href="#">Experience</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="portfolio" className="nav-link" href="#">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="testimonials" className="nav-link" href="#">References</Link>
                        </li>
                        <li className="nav-item">
                            <Link smooth={true} to="contact" className="nav-link" href="#">Contact</Link>
                        </li>
                        
                    </ul>
                    
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar


