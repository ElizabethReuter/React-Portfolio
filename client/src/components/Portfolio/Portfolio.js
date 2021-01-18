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
            <Card.Text>
            Gives users one application to all information needed for travel within the US. Users can find flight info, best places to stay, top news headlines, highest rated attractions and current information or restrictions due to COVID-19.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={BudgetImg} />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <a href="https://floating-cove-95561.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
            <Card.Text>
            The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should populate the total when brought back online.            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={BrewImg} />
          <Card.Body>
            <Card.Title>Brew Finder</Card.Title>
            <a href="https://elizabethreuter.github.io/Brew-Finder/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
            <Card.Text>
            Connecting users to available breweries throughout cities across the United States and information regarding each brewery            </Card.Text>
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
            <Card.Text>
            A consumer will reach their fitness goals more quickly when they track their workout progress. A user can add exercises to a previous workout plan and add new exercises to a new workout plan.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={WeatherImg} />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <a href="https://elizabethreuter.github.io/Homework-6-Weather/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
            <Card.Text>
              Gives uses the option to see the weather outlook for multiple cities, along with the ability to save each city search for the future.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" src={NotesImg} />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <a href="https://dry-gorge-64258.herokuapp.com/" target="_blank">
            <Button variant="primary" className="button">Visit</Button>
            </a>
            <Card.Text>
            For users that need to keep track of a lot of information, it's easy to forget or be unable to recall something important. Being able to take persistent notes allows users to have written information available when needed.            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Portfolio;
