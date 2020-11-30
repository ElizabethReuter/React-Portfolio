import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Image from 'react-bootstrap/Image'
import NavImg from './watercolor.jpg'
import Row from 'react-bootstrap/Row';

function Nav() {
  return (
<div className="container">
  <nav className="navbar navbar-expand-lg navbar-light">
  <Image src={NavImg} fluid />
    <Row className="h1">
      <Link className="navbar-brand navName" to="/">
        Elizabeth Reuter
      </Link>
    </Row>
    <Row className="navLinks">
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                window.location.pathname === "/" || window.location.pathname === "/about"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </Link>
              </li>
            <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
        </Row>
  </nav>
</div>
    );
}

export default Nav;
