import React from "react"
import { Link } from "gatsby"

import "./header.css"

const toggleMenu = () => {
  const x = document.getElementById("menuButton")
  x.classList.toggle("change")

  const mobileNavContainer = document.getElementById("mobileNavContainer");
  mobileNavContainer.classList.toggle("make-menu-visible")
}

const Header = () => (
  <header>
    <div className="nav-container">
      <ul>
        <li className="brand">DevExpo</li>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/agenda">
            Agenda
          </Link>
        </li>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/faq">
            FAQ
          </Link>
        </li>
        <li id="menuButton" className="menuButton" onClick={toggleMenu}>
          <div class="bar1"></div>
          <div class="bar2"></div>
          <div class="bar3"></div>
        </li>
      </ul>
    </div>

    <div id="mobileNavContainer" className="mobile-nav-container">
      <ul>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/">
            Home
          </Link>
        </li>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/agenda">
            Agenda
          </Link>
        </li>
        <li className="links">
          <Link style={{ color: "white", textDecoration: "none" }} to="/faq">
            FAQ
          </Link>
        </li>
      </ul>
    </div>

    <div className="venue-button-container">
      <div className="venue-text">
        <p>
          14 - 15 March, 2020<br></br>
          <span>KIIT Campus 17 Auditorium, BBSR</span>
        </p>
      </div>

      <div className="register-button">
        <button>
          <a href="https://bit.ly/DevExpo2020">Register Here</a>
        </button>
      </div>
    </div>
  </header>
)

export default Header
