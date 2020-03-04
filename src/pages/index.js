import React from "react"


import SEO from '../components/seo'
import Header from '../components/Home/Header/header'
import Landing from '../components/Home/Landing/landing'
import Contact from '../components/Home/Contact/contact'
import Newsletter from '../components/Home/Newsletter/newsletter'

import './css/home.css'

const IndexPage = () => (
  <div>
    <SEO title="DevExpo 2.0"></SEO>
    <Header></Header>
    <Landing></Landing>
    <br></br>
    <h1>Hello World</h1>
    <Newsletter/>
    <Contact/>
  </div>
)

export default IndexPage
