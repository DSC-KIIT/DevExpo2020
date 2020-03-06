import React from "react"
import Header from "../components/Home/Header/header"
import Newsletter from "../components/Home/Newsletter/newsletter"
import Contact from "../components/Home/Contact/contact"

import './css/faq.css'

const FAQ = () => {
    return (
        <div>
            <Header></Header>
            
            <div className="faq-container">
                <div className="faq-header-container">
                    <h1>FAQs</h1>
                    <h6>
                        Here are some of the most frequently asked questions on devexpo <br></br>
                        anything else ? shoot your queries at : <span>dsckiit@gmail.com</span>
                    </h6>
                    <br></br>
                </div>
                
                <br></br>
                <br></br>

                <div className="faq-content-container">
                    <h3 className="question">
                        When is this happening ?
                    </h3>

                    <h3 className="answer">
                        Its happening on 14th and 15th March 2020 which is on <span>Saturday</span> and <span>Sunday</span>
                    </h3>
                    
                    <br></br>
                    <br></br>

                    <h3 className="question">
                        I am a college student can I participate ?
                    </h3>

                    <h3 className="answer">
                        Yes, why not! You can participate for sure.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        Are there any prerequisites to attend DevExpo ?
                    </h3>

                    <h3 className="answer">
                        There are no prerequisites to attend DevExpo 2.0. You just need to come with your inquisitive mind :)
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        What will I get to learn by attending DevExpo ?
                    </h3>

                    <h3 className="answer">
                        You will get hands on practical experience with some awesome personalities. You will get some cool <span>goodies</span> and <span>swags</span> <br></br>
                        And the most amazing part, <span>You can interact live with them</span>
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        For how many days DevExpo 2.0 happens ?
                    </h3>

                    <h3 className="answer">
                        It will be for 2 days. 14th and 15th March, 2020.
                    </h3>


                    <br></br>
                    <br></br>

                    <h3 className="question">
                        Whats new this time ?
                    </h3>

                    <h3 className="answer">
                        This time, its not only DSC KIIT but also in collaboration with Microsoft Student Partners Club (MSPC KIIT). <br></br>
                        So DevExpo 2.0 is <span>2x</span> fun ;-) <br></br><br></br>
                        Stay tuned for updates.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        Are there any fun activities happening in DevExpo ?
                    </h3>

                    <h3 className="answer">
                        Yeah ! For sure, there will be a lot of fun activities.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        What is the time duration of DevExpo 2.0 ?
                    </h3>

                    <h3 className="answer">
                        It will mostly be from morning to evening. Registered participants will be notified via email accordingly.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        What will I do there ?
                    </h3>

                    <h3 className="answer">
                        You will be learning from others experience's. You will be coding and interacting. <br></br> 
                        Have the chance to meet a lot of intresting people and connect with them.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        Are laptops required ?
                    </h3>

                    <h3 className="answer">
                        Yes, it would be nice if you have one. Bring it to DevExpo to get the most out of it.
                    </h3>

                    <br></br>
                    <br></br>

                    <h3 className="question">
                        Something more to ask ?
                    </h3>

                    <h3 className="answer">
                        Just give us a shoutout at <span>dsckiit@gmail.com</span>
                    </h3>

                    <br></br>
                    <br></br>
                    <br></br>
                </div>
            </div>

            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    )
}

export default FAQ