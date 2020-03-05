import React from "react"

import './events.css'

const Events = () => {
  return (
    <div className="events-container">
        <div className="events-header">
            <h1>14th March, 2020 (10am to 6pm)</h1>
        </div>

        <div className="events-details-container">
            <div className="event-name">
                <p>Flash Coding Session</p>
            </div>

            <div className="event-description">
                <p>Quick coding questions will be arranged for participants that will involve short and creative questions</p>
            </div>

            <div className="event-name">
                <p>TechQuiz</p>
            </div>

            <div className="event-description">
                <p>Tech Quizzing competition with various rounds</p>
            </div>

            <div className="event-name">
                <p>Tech Magic</p>
            </div>

            <div className="event-description">
                <p>Magic with a bit of tech influence</p>
            </div>

            <div className="event-name">
                <p>Tech Battle</p>
            </div>

            <div className="event-description">
                <p>Will include debates and discussions over various tech battle topics</p>
            </div>

            <div className="event-name">
                <p>And many other surprises ...</p>
            </div>

            <div className="event-description">
                <p>Hey, we cannot tell you everything, but sure there is more stuff to be excited about.</p>
            </div>
        </div>
    </div>
  )
}

export default Events
