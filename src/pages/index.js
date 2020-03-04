import React from "react"

//import Image from "../components/image"
import SEO from '../components/seo'
import Header from '../components/Home/Header/header'
import Landing from '../components/Home/Landing/landing'

import './css/home.css'

const IndexPage = () => (
  <div>
    <SEO title="DevExpo 2.0"></SEO>
    <Header></Header>
    <Landing></Landing>
  </div>
)

export default IndexPage
