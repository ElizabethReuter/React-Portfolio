import React from 'react';
import Nav from '../components/Nav/Nav.js';
import About from '../components/About/About.js';
import Portfolio from '../components/Portfolio/Portfolio.js';
import Contact from '../components/Contact/Contact.js';
import Footer from '../components/Footer/Footer.js'
 
function Home () {
    return (
        <div>
          <Nav />
              <About />
              <Portfolio />
              <Contact />
          <Footer />
        </div>
    )
}

export default Home;
