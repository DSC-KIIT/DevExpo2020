import React from "react"
import {Link} from 'gatsby'

import "./excitingExpo.css"
import speakerImage from "../../../images/five.jpg"
import speakerImage2 from "../../../images/four.jpg"
import audienceImage from "../../../images/two.jpg"
import audienceImage2 from "../../../images/three.jpg"

const ExcitingExpo = () => {
  return (
    <div className="exciting-expo-container">
      <div className="details-text-container">
        <h1>
          You are about to <br></br>
          witness the most <br></br>
          exciting expo from <br></br>
          <span>Bhubaneswar, India</span>
        </h1>

        <h3>
          It will be held this year on <br></br>
          March 14th and 15th at the Architecture Auditorium, <br></br>
          KIIT Deemed to be University, Odisha <br></br>
        </h3>
      </div>

      <div className="image-container">
        <img loading="lazy" alt="speaker" src={speakerImage}></img>
      </div>

      <div className="details-container-two">
        <img loading="lazy" alt="speaker2" src={speakerImage2}></img>
        
        <h1>
            <br></br>
            Join us for <span>two days</span> of immense knowledge and high tech insights. 
            Get to talk to <span>industry experts</span>, ask queries and much more.
        </h1>

        <br></br>

        <button>
            <Link style={{ color: "white", textDecoration: "none" }} to="/agenda">
                See Agenda
            </Link>
        </button>

        <button>
            <Link style={{ color: "white", textDecoration: "none" }} to="/faq">
                Visit FAQs
            </Link>
        </button>
      </div>

      <div className="image-container-two">
        <img alt="audience" loading="lazy" src={audienceImage}></img>
        <img alt="audience2" loading="lazy" src={audienceImage2}></img>
      </div>

    </div>
  )
}

export default ExcitingExpo
