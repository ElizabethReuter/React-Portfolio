import React from "react";
import CardDeck from "react-bootstrap/CardDeck";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button'

const Portfolio = () => {
  return (
    <div>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Brew Finder</Card.Title>
            <Card.Text>
              Brew Finder
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Budget Tracker</Card.Title>
            <Card.Text>
              Budget
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Travel App</Card.Title>
            <Card.Text>
              Travel App
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardDeck>
      <CardDeck>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Workout Tracker</Card.Title>
            <Card.Text>
              Workout tracker
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Weather App</Card.Title>
            <Card.Text>
              Weather
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img variant="top" src="holder.js/100px160" />
          <Card.Body>
            <Card.Title>Note Taker</Card.Title>
            <Card.Text>
              Notes
            </Card.Text>
            <Button variant="primary">Visit</Button>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted"></small>
          </Card.Footer>
        </Card>
      </CardDeck>
    </div>
  );
};

export default Portfolio;
