import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import Image from 'react-bootstrap/Image'
import NavImg from './watercolor.jpg'



function Nav() {
  return (
<div className="container bg-img">
  <Image src={NavImg} fluid />
  <nav className="navbar navbar-expand-lg navbar-light bg-light topnav">
      <Link className="navbar-brand navName" to="/">
        Elizabeth Reuter
      </Link>
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
            <li className="nav-item">
            <Link
              to="/contact"
              className={window.location.pathname === "/contact" ? "nav-link active" : "nav-link"}
            >
              Contact
            </Link>
          </li>
          </li>
        </ul>
      </div>
  </nav>
</div>
    );
}

export default Nav;
