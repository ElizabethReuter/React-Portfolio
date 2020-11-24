import React from "react";
import { Link } from "react-router-dom";

function Nav() {

  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-align-custom">
        <a className="navbar-brand" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank">Elizabeth Reuter</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link to="home">About</Link>
            </li>
            <li className="nav-item">
              <Link to="portfolio">Portfolio</Link>
            </li>
            <li className="nav-item">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
