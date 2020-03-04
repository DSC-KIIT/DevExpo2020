import React from "react"

//import Image from "../components/image"
import Header from '../components/Home/Header/header'
import Contact from '../components/Home/Contact/contact'
import Newsletter from '../components/Home/Newsletter/newsletter'
import SEO from '../components/seo'

import './css/home.css'

const IndexPage = () => (
  <div>
    <SEO title="DevExpo 2.0"></SEO>
    <Header></Header>
    <br></br>
    <h1>Hello World</h1>
    <Newsletter/>
    <Contact/>    
  </div>
)

export default IndexPage
