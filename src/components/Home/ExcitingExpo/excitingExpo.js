import React from "react"

import "./excitingExpo.css"
import speakerImage from "../../../images/five.jpg"

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

    </div>
  )
}

export default ExcitingExpo
