import React from "react"

import "./contact.css"
import "./bootstrap/css/bootstrap.min.css"

import dscLogo from "../../../assets/Layer -2@2x.png"
import mspcLogo from "../../../assets/Group 49@2x.png"
import kiitLogo from "../../../assets/Layer -3@2x.png"
import kiitName from "../../../assets/KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY@2x.png"

import instaLogo from "../../../assets/Mask Group -8@2x.png"
import twitterLogo from "../../../assets/Mask Group -9@2x.png"
import fbLogo from "../../../assets/Mask Group -7@2x.png"

const contact = () => {
  return (
    <div className="contact-container">
      <div className="footer-dark d-none d-lg-block">
        <div className="container">
          <footer>
            <div className="row">
              <div className="col-sm-6 col-md-3 col-lg-6 col-xl-5 offset-xl-1 item">
                <h3>Presented By</h3>
                <br />
                <img alt="dsclogo" src={dscLogo} width={200} />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img alt="msplogo" src={mspcLogo} width={200} />
                <div>
                  <br />
                </div>
                <h3>University Partner</h3>
                <br />
                <img alt="kiitlogo" src={kiitLogo} width={100} />
                &nbsp;&nbsp;&nbsp;&nbsp;
                <img alt="kiitlogo2" src={kiitName} width={150} />
                <div>
                  <br />
                </div>
                <ul />
              </div>
              <div className="col-sm-6 col-md-3 col-lg-6 col-xl-5 item">
                <h3 className="text-right">For queries</h3>
                <ul>
                  <li>
                    <a href="mailto:dsckiit@gmail.com" className="text-right">
                      dsckiit@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="mailto:mspkiit@gmail.com" className="text-right">
                      mspkiit@gmail.com
                    </a>
                  </li>
                  <li>
                    <a href="tel:+91 8017729209" className="text-right">
                      +91 8017729209
                    </a>
                    <div>
                      <br />
                    </div>
                  </li>
                </ul>
                <h3 className="text-right">Address</h3>
                <p className="text-right">
                  CAMPUS 17 AUDI,&nbsp;
                  <br />
                  KALINGA INSTITUTE OF INDUSTRIAL TECHNOLOGY,
                  <br />
                  BHUBANESWAR, ODISHA -751024,INDIA
                </p>
              </div>
            </div>
          </footer>
          <hr style={{ color: "#ffffff" }} />
          <div className="row">
            <div className="col-lg-1"></div>
            <div className="col-lg-6">
              <a href="https://www.instagram.com/dsckiit/" target="__blank">
                <img alt="instalogo" src={instaLogo} width={20} />
              </a>{" "}
              &nbsp; &nbsp;
              <a href="https://www.facebook.com/dsckiit/" target="__blank">
                <img alt="fblogo" src={fbLogo} width={20} />
              </a>{" "}
              &nbsp; &nbsp;
              <a href="https://twitter.com/DscKiit" target="__blank">
                <img alt="twitterlogo" src={twitterLogo} width={20} />
              </a>
            </div>
            <div className="col-lg-4 privacy-text">
              <span>
                {" "}
                <a href="http://dsckiit.in" target="__blank">
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  Terms &amp; Conditions
                </a>{" "}
                &nbsp;&nbsp;
              </span>
              <span>
                <a href="http://dsckiit.in" target="__blank">
                  Privacy Policies
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/*FOR SMALL SCREENS */}
      <div class="d-lg-none">
        <div>
          <div className="footer-basic" style={{ backgroundColor: "#000000" }}>
            <br /> <br />
            <h3 className="text-center text-white">
              <strong>DevExpo 2.0</strong>
            </h3>
            <br></br>
            <div className="row" style={{width: '100%', margin: '0rem'}}>
              <div className="col text-center" style={{padding: '0rem'}}>
                <a href="https://www.instagram.com/dsckiit/" target="__blank">
                  <img alt="instalogo" src={instaLogo} width={20} />
                </a>{" "}
                &nbsp; &nbsp;
                <a href="https://www.facebook.com/dsckiit/" target="__blank">
                  <img alt="fblogo" src={fbLogo} width={20} />
                </a>{" "}
                &nbsp; &nbsp;
                <a href="https://twitter.com/DscKiit" target="__blank">
                  <img alt="twitterlogo" src={twitterLogo} width={20} />
                </a>
              </div>
            </div>
            <br />
            <div className="row privacy-text" style={{width: '100%', margin: '0rem'}}>
              <div className="col text-center" style={{margin: '0rem'}}>
                <span className="text-white">
                  <a href="http://dsckiit.in" target="__blank">
                    Privacy Policies
                  </a>
                </span>
              </div>
            </div>
            <div className="row privacy-text" style={{width: '100%', margin: '0rem'}}>
              <div className="col text-center" style={{margin: '0rem'}}>
                <span className="text-white">
                  <a href="http://dsckiit.in" target="__blank">
                    Terms &amp; Conditions
                  </a>
                </span>
              </div>
            </div>
            <br /> <br />
            <footer />
          </div>
        </div>
      </div>
    </div>
  )
}

export default contact
