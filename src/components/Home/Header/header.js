import React from 'react'
import { Link } from 'gatsby'

import './header.css'

const Header = () => (
    <header>
        <h3>DevExpo</h3>
        <h4>
            <Link to="/">Home</Link>
        </h4>
        
        <h4>
            <Link to="/agenda">Agenda</Link>
        </h4>

        <div>
            <p>
                14 - 15 March, 2020
                KIIT Campus 7 Auditorium, BBSR
            </p>
        </div>

        <div>
            <button>Register Here</button>
        </div>
    </header>
)


export default Header