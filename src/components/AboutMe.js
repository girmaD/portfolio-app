import React from 'react';
import girmad from '../girmad.jpg';


const AboutMe = () => {
    return (
        <div id="aboutme" className="container py-5">
          <div className="row">              
              <div className="col-lg-6 " >
                <div className="photo-wrapper mb-5">                  
                  <img className="profile-img" src={girmad} alt="author..."/>
                </div>
              </div>
              <div className="col-lg-6 ">
                <h1 className="about-heading">About Me</h1>
                <p>
                My name is Girma D. Ebbsa. Currently, I am studying Full Stack Web Development bootcamp and University of Washington. I, recently developed interest in software development and started taking courses both online and in class. First, I took Introduction to software development and testing at Hahu IT, Bellevue, WA. Then, I took a 47 hour Web developemt bootcamp course on Udemy. These newly gained knowledges motivated me to start class at University of Washington coding bootcamp.
                </p>
                <p>
                My background is Economics. I have taken a bunch of Math, statistics and econometrics courses that taught me, more than anything, to be analytical. I believe my background gives me a unique perspective in the web developemt world.
                </p>
                <p>
                I am a friendly person who enjoy interacting with people. I like having conversation about current topics. I am an ardent news reader. I sometimes believe I read too much news that I need. But it has helped me to understand the world I live in.
                </p>
              </div>
          </div>  
        </div>
    )
}

export default AboutMe
