import React from 'react'

import './css/speakerProfile.css'

// Headshots
import AprajitKar from "../../images/speaker_headshots/AprajitKar.jpg"
import ChetanKVS from "../../images/speaker_headshots/ChetanKVS.jpg"
import ChiragMishra from "../../images/speaker_headshots/ChiragMishra.jpg"
import PrajnyasisBiswal from "../../images/speaker_headshots/PrajnyasisBiswal.jpg"
import SabyasachiMukhopadhyay from "../../images/speaker_headshots/SabyasachiMukhopadhyay.jpg"

// Assets
import Ellipse2a from "../../images/speaker_page_assets/Ellipse2a.svg"
import Ellipse2b from "../../images/speaker_page_assets/Ellipse2b.svg"
import Ellipse3a from "../../images/speaker_page_assets/Ellipse3a.svg"
import Ellipse3b from "../../images/speaker_page_assets/Ellipse3b.svg"
import Ellipse4a from "../../images/speaker_page_assets/Ellipse4a.svg"
import Ellipse4b from "../../images/speaker_page_assets/Ellipse4b.svg"
import Ellipse5a from "../../images/speaker_page_assets/Ellipse5a.svg"
import Ellipse5b from "../../images/speaker_page_assets/Ellipse5b.svg"
import Ellipse6a from "../../images/speaker_page_assets/Ellipse6a.svg"
import Ellipse6b from "../../images/speaker_page_assets/Ellipse6b.svg"





const SpeakerProfiles = () => {
    return (
        <div className="speaker-profiles-container">
            <div className="speaker">
                <img className="ellipse1" src={Ellipse3a}></img>
                <img className="ellipse2" src={Ellipse3b}></img>
                <img src={ChetanKVS}></img>
            </div>
        </div>
    )

}

export default SpeakerProfiles