import React from 'react'

import './css/speakerProfile.css'

// Headshots
import ChetanKVS from "../../images/speaker_headshots/ChetanKVS.jpg"
import PrajnyasisBiswal from "../../images/speaker_headshots/PrajnyasisBiswal.jpg"
// import AprajitKar from "../../images/speaker_headshots/AprajitKar.jpg"
// import ChiragMishra from "../../images/speaker_headshots/ChiragMishra.jpg"
// import SabyasachiMukhopadhyay from "../../images/speaker_headshots/SabyasachiMukhopadhyay.jpg"

// Social Media Icons


const SpeakerProfiles = () => {
    return (
        <div className="speaker-profiles-container">
            <div className="speaker">
                <img className="speaker-pic" alt="chetankvs" src={ChetanKVS}></img>
                <div className="socialmedia">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/design_pilot/?hl=en">
                        <img alt="instalogo" src="https://img.icons8.com/color/50/000000/instagram-new.png" />
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chethan-kvs-048583106/">
                        <img alt="linkedin" src="https://img.icons8.com/color/50/000000/linkedin.png"></img>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/KvsChethan">
                        <img alt="twitter" src="https://img.icons8.com/color/50/000000/twitter.png"></img>
                    </a>
                </div>

                <h1>Chethan KVS</h1>
                <h4>PRODUCT DESIGNER AT UNACADEMY</h4>
            </div>

            {/* <div className="speaker">
                <img className="speaker-pic" alt="chiragmishra" src={ChiragMishra}></img>
                <div className="socialmedia">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/chirag-mishra/">
                        <img alt="linkedin" src="https://img.icons8.com/color/50/000000/linkedin.png"></img>
                    </a>

                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/chiragmishra93">
                        <img alt="fblogo" src="https://img.icons8.com/color/50/000000/facebook-new.png" />
                    </a>
                </div>

                <h1>Chirag Mishra</h1>
                <h4>SDE II AT MICROSOFT INDIA</h4>
            </div> */}

            {/* <div className="speaker">
                <img className="speaker-pic" alt="aprajitkar" src={AprajitKar}></img>

                <div className="socialmedia">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/aprajitkar/">
                        <img alt="linkedin" src="https://img.icons8.com/color/50/000000/linkedin.png"></img>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/aprajit_kar">
                        <img alt="twitter" src="https://img.icons8.com/color/50/000000/twitter.png"></img>
                    </a>
                </div>

                <h1>Aprajit Kar</h1>
                <h4>DESIGNING FOR MOBILITY AT GOJEK</h4>
            </div> */}

            {/* <div className="speaker">
                <img className="speaker-pic" alt="sm" src={SabyasachiMukhopadhyay}></img>

                <div className="socialmedia">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/SM2017Official">
                        <img alt="fblogo" src="https://img.icons8.com/color/50/000000/facebook-new.png" />
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sabyasachi-mukhopadhyay-303a1027/">
                        <img alt="linkedin" src="https://img.icons8.com/color/50/000000/linkedin.png"></img>
                    </a>
                </div>


                <h1>Sabyasachi Mukhopadhyay</h1>
                <h4>GDE AI/ML</h4>
            </div> */}

            <div className="speaker">
                <img className="speaker-pic" alt="prajnyasis" src={PrajnyasisBiswal}></img>

                <div className="socialmedia">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/iampbiswal/">
                        <img alt="linkedin" src="https://img.icons8.com/color/50/000000/linkedin.png"></img>
                    </a>
                    
                    <a target="_blank" rel="noopener noreferrer" href="https://twitter.com/iampbiswal">
                        <img alt="twitter" src="https://img.icons8.com/color/50/000000/twitter.png"></img>
                    </a>
                </div>

                
                <h1>Prajnyasis Biswal</h1>
                <h4>PROGRAM MANAGER, SKILLENZA</h4>
            </div>
        </div>
    )

}

export default SpeakerProfiles