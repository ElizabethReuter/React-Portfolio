import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Row from 'react-bootstrap/Row';
import './style.css';

const Contact = () => {
  return (
    <Jumbotron className="Jumbotron">
      <Row className="h1">
      <h1>Get in Touch!</h1>
      </Row>
      <Row className="icons">
      <a href = "mailto: elizabeth.j.reuter@gmail.com" target="_blank"><i class="fa fa-envelope fa-5x" aria-hidden="true"></i></a>
      <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank"><i class="fab fa-linkedin fa-5x" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/"></i></a>
      <a class="grey-text text-lighten-3" href="https://github.com/ElizabethReuter" target="_blank"><i class="fab fa-github fa-5x" href="https://github.com/ElizabethReuter"></i></a>
      </Row>
      <Row className="h4">
      <h4>Email</h4>
      <h4>Linkedin</h4>
      <h4>Github</h4>
      </Row>
    </Jumbotron>
    
  );
};

export default Contact;
