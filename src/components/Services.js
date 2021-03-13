import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNodeJs, faReact, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons'
import { faDesktop, faLaptopCode, faCode } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
    return (
        <div className="services">
            <h1 className="py-5">My Services</h1>
            <div className="container">
                <div className="row">
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                            <div className="circle"><FontAwesomeIcon className="icon" icon={faLaptopCode} size="2x"/></div>
                            <h3>Fullstack Web Development</h3>
                            <p >Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faCode} size="2x"/></div>
                            <h3>Frontend Web Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faNode} size="2x"/></div>
                            <h3>Backend Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faReact} size="2x"/></div>
                            <h3>React Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-6">
                        <div className="box">
                        <div className="circle"><FontAwesomeIcon className="icon" icon={faNodeJs} size="2x"/></div>
                            <h3>JavaScript Development</h3>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
