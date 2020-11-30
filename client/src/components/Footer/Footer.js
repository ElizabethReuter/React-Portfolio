import React from "react";
import "./style.css";
import Row from 'react-bootstrap/Row';


function Footer() {

  return (
    <footer className="footer-bottom">
      <div className="container">
        <Row className="footerText">
         Elizabeth Reuter © 2020 Copyright
         </Row>
        </div>
    </footer>
  );
}

export default Footer;