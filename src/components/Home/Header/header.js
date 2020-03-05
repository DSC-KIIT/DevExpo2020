import React from "react"
import { Link } from "gatsby"

import "./header.css"

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
