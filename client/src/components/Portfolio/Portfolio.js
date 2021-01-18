import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import BrewImg from './images/BrewFinder.png';
import TravelImg from './images/Travel.jpg';
import BudgetImg from './images/budget.png';
import NotesImg from './images/Notes.png';
import WeatherImg from './images/Weather.png';
import WorkoutImg from './images/Workout.png';
import "./style.css";



const Portfolio = () => {
  return (
    <div>
      <CardDeck className="cardText">
        <Card>
          <Card.Img variant="top" src={TravelImg} />
          <Card.Body>
            <Card.Title>Travel Pocket Wizard</Card.Title>
            <a href="https://travel-pocket-wizard.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={BudgetImg} />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <a href="https://floating-cove-95561.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={BrewImg} />
          <Card.Body>
            <Card.Title>Brew Finder</Card.Title>
            <a href="https://elizabethreuter.github.io/Brew-Finder/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
      <CardDeck className="cardText">
        <Card>
          <Card.Img variant="top" src={WorkoutImg} />
          <Card.Body>
            <Card.Title>Workout Tracker</Card.Title>
            <a href="https://evening-citadel-08477.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={WeatherImg} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <a href="https://elizabethreuter.github.io/Homework-6-Weather/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={NotesImg} />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <a href="https://dry-gorge-64258.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Portfolio;
