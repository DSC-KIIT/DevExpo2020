import React, {Component} from 'react'

import './landing.css'
import msp_full_logo from '../../../images/msp_full_logo.svg'
import dsckiit_full_logo_colour from '../../../images/dsckiit_logo_colour.svg'

class Landing extends Component {
    componentDidMount(){
        // code for timer
        const eventDate = new Date("March 14, 2020 9:00:00").getTime()

        let x = setInterval(()=>{
            let now = new Date().getTime();
            let distance = eventDate - now;

            // Time calculations for days, hours, minutes and seconds
            let days = Math.floor(distance / (1000 * 60 * 60 * 24));
            let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            let seconds = Math.floor((distance % (1000 * 60)) / 1000);

            const timerText = document.getElementById("timer")

            timerText.innerHTML = `<p>${days} DAYS ${hours} HRS ${minutes} MINS ${seconds} SECS</p>`

            if(distance < 0){
                clearInterval(x);
                timerText.innerHTML = "Its Show Time !!"
            }

        }, 1000)
    }

    render(){
        return (
            <div className="landing-container">
                <br></br>
                <div className="timer" id="timer"></div>

                <div className="landing-text">
                    <p>DevExpo 2.0</p>
                    <h1>EMPOWER STUDENTS <br></br> TO <br></br> EXPLORE AND INNOVATE</h1>
                    <h2>14 - 15 MARCH, KIIT BHUBANESWAR</h2>
                    <br></br>
                </div>
                <p className="presented-text">Presented By</p>
                <div className="logo-container">
                    <img alt="dsc_logo" style={{color: 'white'}} src={dsckiit_full_logo_colour} width="300"></img>
                    <p>x</p>
                    <img alt="msp_logo" src={msp_full_logo} width="300"></img>
                </div>
            </div>
        )
    }

}

export default Landing;

