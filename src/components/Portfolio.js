import React from 'react';
import Gamestock from '../images/user.png';
import Whalewatching from '../images/whaleWatching.png';
import EmployeeDir from '../images/EmpDir.png';
import Budget from '../images/budgetTrack.png';
import Fitness from '../images/fitnessTracker.png';
import Trip from '../images/tripPlanner.png';
import Weather from '../images/weather.png';
//font awesome import
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

import { PopupboxManager, PopupboxContainer} from 'react-popupbox'
import "react-popupbox/dist/react-popupbox.css";


const Portfolio = () => {
    //GameStock app
    const openPopupGameStock = () => {
        const content = (
        <>
            <img className="portfolio-image-popup" src={Gamestock} alt="GameStock project" />
            <p>A stock trading game to learn how to invest without the risk, made with React.</p>
            <b>Github: </b><a className="hyper-link" onClick={()=> window.open("https://github.com/seattletrade/gamestock")}>https://github.com/seattletrade/gamestock</a>
        </>
        )
        PopupboxManager.open({ content })
    }

    const popupboxConfigGameStock = {
        titleBar: {
          enable: true,
          text: "GameStock app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Whalewatching app
    const openPopupboxWhaleWatching = () => {
        const content = (
          <>
            <img className="portfolio-image-popup" src={Whalewatching} alt="Whalewatching Project..." />
            <p>An application a user posts a whale sighting, sends text notification on new post</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/watchNW/whale-watching")}>https://github.com/watchNW/whale-watching</a>
          </>
        )
        PopupboxManager.open({ content })
    }
    
    const popupboxConfigWhaleWatching = {
        titleBar: {
            enable: true,
            text: "Whalewatching app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //budget tracker app
    const openPopupboxBudget = () => {
        const content = (
          <>
            <img className="portfolio-image-popup" src={Budget} alt="Whalewatching Project..." />
            <p>A PWA budget tracking app</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/girmaD/Progressive_Web_APP_Budget_Tracker")}>https://github.com/girmaD/Progressive_Web_APP_Budget_Tracker</a>
          </>
        )
        PopupboxManager.open({ content })
    }
    
    const popupboxConfigBudget = {
        titleBar: {
            enable: true,
            text: "Whalewatching app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Fitness Trakcing app
    const openPopupboxFitness = () => {
        const content = (
          <>
            <img className="portfolio-image-popup" src={Fitness} alt="Whalewatching Project..." />
            <p>It displays the last workout performed with graghical illustration.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/girmaD/Workout_Tracker")}>https://github.com/girmaD/Workout_Tracker</a>
          </>
        )
        PopupboxManager.open({ content })
    }
    
    const popupboxConfigFitness = {
        titleBar: {
            enable: true,
            text: "Whalewatching app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Weather app
    const openPopupboxWeather = () => {
        const content = (
          <>
            <img className="portfolio-image-popup" src={Weather} alt="Whalewatching Project..." />
            <p>A weather app that displays current and forecasted weather data for a searched city.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/girmaD/Weather-Dashboard")}>https://github.com/girmaD/Weather-Dashboard</a>
          </>
        )
        PopupboxManager.open({ content })
    }
    
    const popupboxConfigWeather = {
        titleBar: {
            enable: true,
            text: "Whalewatching app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    //Employee Tracker
    const openPopupboxEmployee = () => {
        const content = (
          <>
            <img className="portfolio-image-popup" src={EmployeeDir} alt="Whalewatching Project..." />
            <p>This app uses Randon User API to display employees and to be searched and sorted by their name.</p>
            <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/girmaD/react-employee-directory")}>https://github.com/girmaD/react-employee-directory</a>
          </>
        )
        PopupboxManager.open({ content })
    }
    
    const popupboxConfigEmployee = {
        titleBar: {
            enable: true,
            text: "Whalewatching app."
        },
        fadeIn: true,
        fadeInSpeed: 500
    }

    return (
        <div id="portfolio" className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>     
                <div className="image-box-wrapper row justify-content-center">       
                    <div className="portfolio-image-box col-md-3" onClick={openPopupGameStock}>
                        <img className="portfolio-image" src={Gamestock} alt="gamestock-project"  />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>                
                    <div className="portfolio-image-box col-md-3" onClick={openPopupboxWhaleWatching}>
                        <img className="portfolio-image" src={Whalewatching} alt="whalewatching-project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>             
                    <div className="portfolio-image-box col-md-3" onClick={openPopupboxBudget}>
                        <img className="portfolio-image" src={Budget} alt="budget-tracker-project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>                
                
                    <div className="portfolio-image-box col-md-3" onClick={openPopupboxFitness}>
                        <img className="portfolio-image" src={Fitness} alt="fitness-tracker-project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>               
                
                    <div className="portfolio-image-box col-md-3" onClick={openPopupboxEmployee}>
                        <img className="portfolio-image" src={EmployeeDir} alt="employee-directory-project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>               
                
                    <div className="portfolio-image-box col-md-3" onClick={openPopupboxWeather}>
                        <img className="portfolio-image" src={Weather} alt="weather-project" />
                        <div className="overflow"></div>
                        <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
                    </div>
                </div>  
            </div>
            <PopupboxContainer {...popupboxConfigGameStock} />
            <PopupboxContainer {...popupboxConfigWhaleWatching} />
            <PopupboxContainer {...popupboxConfigBudget} />
            <PopupboxContainer {...popupboxConfigWeather} />
            <PopupboxContainer {...popupboxConfigEmployee} />
            <PopupboxContainer {...popupboxConfigFitness} />
        </div>
    )
}

export default Portfolio
