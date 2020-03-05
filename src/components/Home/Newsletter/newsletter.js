import React from "react"

import './newsletter.css'

const submit = () => {
    console.log("Submitted")
}

const newsletter = () => {
  return (
    <div className="newsletter-container">
      <form onSubmit={submit}>
        <h1>Subscribe to our newsletter to keep <br></br> yourself updated about events</h1>
        <input className="email-input" type="email" placeholder="Enter your email address"></input>
        <input type="submit"></input>
      </form>
        
    </div>
  )
}

export default newsletter
