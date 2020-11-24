import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import { Link } from "react-router-dom";

function Nav() {
  const [store] = useStoreContext();

  return (
    <nav class="navbar navbar-expand-lg navbar-light nav-align-custom">
        <a class="navbar-brand" href="https://www.linkedin.com/in/elizabeth-reuter-2132411b0/" target="_blank">Elizabeth Reuter</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="index.html">About <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="portfolio.html">Portfolio</a>
            </li>
            <li class="nav-item">
              <Link to="contact">Contact</Link>
            </li>
          </ul>
        </div>
      </nav>
  );
}

export default Nav;
