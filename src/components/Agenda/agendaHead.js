import React from 'react'

import './agendaHead.css'

import agenda_arrow from "../../images/agendaarrow.svg"

const AgendaHead = () => {
    return (
        <div className="agenda-head-container">
            <div>
                <img alt="agenda_arrow" src={agenda_arrow} height="150px" style={{margin: '1.2rem'}}></img>
            </div>
            
            <div>
                <h1>Agenda</h1>
                <h6>Strap in. Hang tight. Houston, we're ready for takeoff <span role="img" aria-label="rocket">🚀</span></h6>
                <br></br>
            </div>
        </div>
    )
}

export default AgendaHead