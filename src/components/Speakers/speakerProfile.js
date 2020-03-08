import React from 'react'

import './css/speakerProfile.css'

// Headshots
import AprajitKar from "../../images/speaker_headshots/AprajitKar.jpg"
import ChetanKVS from "../../images/speaker_headshots/ChetanKVS.jpg"
import ChiragMishra from "../../images/speaker_headshots/ChiragMishra.jpg"
import PrajnyasisBiswal from "../../images/speaker_headshots/PrajnyasisBiswal.jpg"
import SabyasachiMukhopadhyay from "../../images/speaker_headshots/SabyasachiMukhopadhyay.jpg"

// // Assets
// import Ellipse2a from "../../images/speaker_page_assets/Ellipse2a.svg"
// import Ellipse2b from "../../images/speaker_page_assets/Ellipse2b.svg"
// import Ellipse3a from "../../images/speaker_page_assets/Ellipse3a.svg"
// import Ellipse3b from "../../images/speaker_page_assets/Ellipse3b.svg"
// import Ellipse4a from "../../images/speaker_page_assets/Ellipse4a.svg"
// import Ellipse4b from "../../images/speaker_page_assets/Ellipse4b.svg"
// import Ellipse5a from "../../images/speaker_page_assets/Ellipse5a.svg"
// import Ellipse5b from "../../images/speaker_page_assets/Ellipse5b.svg"
// import Ellipse6a from "../../images/speaker_page_assets/Ellipse6a.svg"
// import Ellipse6b from "../../images/speaker_page_assets/Ellipse6b.svg"

// import Reactangle2 from "../../images/speaker_page_assets/Rectangle2.svg"
// import Reactangle3 from "../../images/speaker_page_assets/Rectangle3.svg"
// import Reactangle4 from "../../images/speaker_page_assets/Rectangle4.svg"
// import Reactangle5 from "../../images/speaker_page_assets/Rectangle5.svg"
// import Reactangle6 from "../../images/speaker_page_assets/Rectangle6.svg"



const SpeakerProfiles = () => {
    return (
        <div className="speaker-profiles-container">
            <div className="speaker">
                <img alt="chetankvs" src={ChetanKVS}></img>
                <h1>Chetan KVS</h1>
                <h4>PRODUCT DESIGNER AT UNACADEMY</h4>
            </div>

            <div className="speaker">
                <img alt="chiragmishra" src={ChiragMishra}></img>
                <h1>Chirag Mishra</h1>
                <h4>SDE II AT MICROSOFT INDIA</h4>
            </div>

            <div className="speaker">
                <img alt="aprajitkar" src={AprajitKar}></img>
                <h1>Aprajit Kar</h1>
                <h4>DESIGNING FOR MOBILITY AT GOJEK</h4>
            </div>

            <div className="speaker">
                <img alt="sm" src={SabyasachiMukhopadhyay}></img>
                <h1>Sabyasachi Mukhopadhyay</h1>
                <h4>GDE AI/ML</h4>
            </div>

            <div className="speaker">
                <img alt="prajnyasis" src={PrajnyasisBiswal}></img>
                <h1>Prajnyasis Biswal</h1>
                <h4>PROGRAM MANAGER, SKILLENZA</h4>
            </div>
        </div>
    )

}

export default SpeakerProfiles