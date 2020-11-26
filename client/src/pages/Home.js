import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from '../components/Nav/Nav.js';
import About from '../components/About/About.js';
import Portfolio from '../components/Portfolio/Portfolio.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js'
 
function Home () {
    return (
      <Router>
        <div>
          <Nav />
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/contact" component={Contact} />
          <Footer />
        </div>
      </Router>
    )
}

export default Home;
