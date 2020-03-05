import React from "react"

import SEO from "../components/seo"
import Header from "../components/Home/Header/header"
import Landing from "../components/Home/Landing/landing"
import ExcitingExpo from "../components/Home/ExcitingExpo/excitingExpo"
import Contact from "../components/Home/Contact/contact"
import Newsletter from "../components/Home/Newsletter/newsletter"

import "./css/home.css"

const IndexPage = () => (
  <div>
    <SEO title="DevExpo 2.0"></SEO>
    <Header></Header>
    <Landing></Landing>
    {/* <ExcitingExpo></ExcitingExpo> */}
    <Newsletter></Newsletter>
    <Contact></Contact>
  </div>
)

export default IndexPage
