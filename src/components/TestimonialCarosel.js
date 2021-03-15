import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import avatar1 from "../images/avatars/avatar-1.png"
import avatar2 from "../images/avatars/avatar-2.png"
import avatar3 from "../images/avatars/avatar-3.png"

const TestimonialCarosel = () => {
    return (
        <Carousel 
            showArrows={true}
            infiniteLoop={true}
            showThumbs={false}
            showStatus={false}
            autoPlay={true}
            interval={3000}
        >
            <>
                <img src={avatar1} alt="first-testimonial" />
                <div className="myCarousel">
                    <h3>John Doe</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </>            
            <>
                <img src={avatar2} alt="second-testimonial" />
                <div className="myCarousel">
                    <h3>Jaimy Doe</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </>            
            <>
                <img src={avatar3} alt="third-testimonial" />
                <div className="myCarousel">
                    <h3>Jennifer Doe</h3>
                    <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                </div>
            </>            
        </Carousel>
    )
}

export default TestimonialCarosel
