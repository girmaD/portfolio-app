import React from 'react';
import { 
    LinkedinShareButton,
    LinkedinIcon,
    FacebookShareButton,
    FacebookIcon,
    TwitterShareButton,
    TwitterIcon
} from 'react-share';
import { Link } from 'react-scroll';

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="d-flex">
                            <p>Seattle 1220 NE 143rd st</p>
                        </div>
                        <div className="d-flex">
                            <a href="tel: 2064744266">+1(206)4744266</a>
                        </div>
                        <div className="d-flex">
                            <a href="email">girma.derib@gmail.com</a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <div className="row">
                            <div className="col">
                                <Link to="header" className="footer-nav">Home</Link>
                                <br />
                                <Link to="aboutme" className="footer-nav">About me</Link>
                                <br />
                                <Link to="services" className="footer-nav">Services</Link>
                                <br />
                            </div>
                            <div className="col">
                                <Link to="experience" className="footer-nav">Experience</Link>
                                <br />
                                <Link to="portfolio" className="footer-nav">Portfolio</Link>
                                <br />
                                <Link to="contact" className="footer-nav">Contact</Link>
                                <br />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/gerrymanderib"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <TwitterShareButton
                url={"https://www.facebook.com/gerrymanderib"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>              
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/girma-ebssa/"}
                quote={"FullStack Developer"}
                hashtag="#javascript"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;New Horizon | All Rights Reserved
            </p>
          </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer
