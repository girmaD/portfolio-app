import React from 'react';
import Gamestock from '../images/user.png';
import Whalewatching from '../images/whaleWatching.png';
import EmployeeDir from '../images/EmpDir.png';
import Budget from '../images/budgetTrack.png';
import Fitness from '../images/fitnessTracker.png';
import Trip from '../images/tripPlanner.png';
import Weather from '../images/weather.png';

const Portfolio = () => {
    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
              
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Gamestock} alt="gamestock-project" />
                        <div className="overflow"></div>
                    </div>
              
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Whalewatching} alt="whalewatching-project" />
                        <div className="overflow"></div>
                    </div>
                
              
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Budget} alt="budget-tracker-project" />
                        <div className="overflow"></div>
                    </div>
                
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Fitness} alt="fitness-tracker-project" />
                        <div className="overflow"></div>
                    </div>
                
               
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={EmployeeDir} alt="employee-directory-project" />
                        <div className="overflow"></div>
                    </div>
                
                
                    <div className="portfolio-image-box">
                        <img className="portfolio-image" src={Trip} alt="trip-planner-project" />
                        <div className="overflow"></div>
                    </div>
               
            </div>
        </div>
    )
}

export default Portfolio
