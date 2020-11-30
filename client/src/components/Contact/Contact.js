import React from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import "./style.css";



const Contact = () => {
  return (
    <Container fluid className="Jumbotron">
      <Row className="h1" style={{display: 'flex', justifyContent: 'center'}}>
      <h1>Get in Touch!</h1>
      </Row>
      <Row className="icons" style={{display: 'flex', justifyContent: 'center'}}>
        <div className="email">
            <a href = "mailto: elizabeth.j.reuter@gmail.com" target="_blank"><i class="fa fa-envelope fa-8x" aria-hidden="true"></i></a>
            <h4>Email</h4>
        </div>
        <div className="linkedin">
            <a class="grey-text text-lighten-3" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank"><i class="fab fa-linkedin fa-8x" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/"></i></a>
            <h4>Linkedin</h4>
        </div>
        <div className="github">
            <a class="grey-text text-lighten-3" href="https://github.com/ElizabethReuter" target="_blank"><i class="fab fa-github fa-8x" href="https://github.com/ElizabethReuter"></i></a>
            <h4>Github</h4>
        </div>
      </Row>
    </Container>
    
  );
};

export default Contact;
