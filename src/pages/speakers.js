import React from 'react'

import Header from "../components/Home/Header/header"
import Speakers from "../components/Speakers/speakers"
import Newsletter from "../components/Home/Newsletter/newsletter"
import Contact from "../components/Home/Contact/contact"

const SpeakersPage = () => {
    return (
        <div>
            <Header></Header>
            <Speakers></Speakers>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    )
}

export default SpeakersPage