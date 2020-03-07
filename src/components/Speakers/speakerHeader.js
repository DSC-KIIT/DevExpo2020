import React from "react"

import "./css/speakerHeader.css"

import triangle from "../../images/speaker_page_assets/header1.svg"
import circle from "../../images/speaker_page_assets/header2.svg"
import rectangle from "../../images/speaker_page_assets/header3.svg"

const SpeakerHeader = () => {
  return (
    <div className="speaker-header-container">
      <img className="triangle" alt="triangle" src={triangle}></img>
      <img className="circle" alt="circle" src={circle}></img>
      <img className="rectangle" alt="rectangle" src={rectangle}></img>

      <h1>Speakers</h1>
      <h4>Exciting talks by them on design and tech</h4>
    </div>
  )
}

export default SpeakerHeader
