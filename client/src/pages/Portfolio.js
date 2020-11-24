import React from "react";

const Portfolio = () => {
  return (
  <div className="container"> 
      <div className="row">
        <div className="col-md-6">
      <div className="container">
          <h1>Portfolio</h1>
          <hr/>
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <a href="https://elizabethreuter.github.io/Portfolio/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/Portfolio.png" alt="Responsive-Portfolio"/>
              </a>
            </div>
          <div className="col-md-6 col-sm-12">
              <a href="https://elizabethreuter.github.io/Homework-6-Weather/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/WeatherApp.png" alt="Weather-Dashboard"/>
              </a>
        </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
              <a href="https://fierce-dawn-26517.herokuapp.com/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/GameOfGames.png" alt="Game Of Games"/>
              </a>
          </div>
          <div className="col-md-6 col-sm-12">
              <a href="https://dry-gorge-64258.herokuapp.com/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/NoteTaker.png" alt="Note Taker"/>
              </a>
        </div>
        </div>
        <div className="row">
          <div className="col-md-6 col-sm-12">
              <a href="https://elizabethreuter.github.io/Brew-Finder/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/BrewFinder.png" alt="Brew-Finder"/>
              </a>
          </div>
          <div className="col-md-6 col-sm-12">
              <a href="https://elizabethreuter.github.io/HW-TemplateEngine-EmployeeSummary/" target="_blank">
                <img className="imgp img-fluid" src="./Assests/EmployeeSum.png" alt="Employee Summary"/>
              </a>
        </div>
        </div>
        </div>
      </div>
      <div className="col-md-6">
        
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
