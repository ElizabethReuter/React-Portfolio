import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import ProfilePic from './photo1.jpg';
import "./style.css";


const About = () => {
  return (
    <Jumbotron fluid>
        <Container className="jumbotron">
              <Container>
                <Row>
                  <Col xs={6} md={4}>
                    <Image src={ProfilePic} rounded className="image"/>
                  </Col>
                  <Col>
                    <h1>Elizabeth Reuter</h1>
                    <h4>Full Stack Developer</h4>
                    <p> 
                    Elizabeth is a results-oriented software engineer leveraging background in corporate travel industry. She earned a certificate in Full Stack Web Development from Northwestern University Coding Boot Camp. Her skills include frontend and backend development, analytical thinking and creative problem solving. Able to apply customer service concepts to web development to improve user experience for clients, employees and administration. Elizabeth's strengths are in creativity, teamwork, and building projects from visualization to execution. 
                    </p>
                  </Col>
                </Row>
              </Container>
        </Container>
    </Jumbotron>
  );
};

export default About;