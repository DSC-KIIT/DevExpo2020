import React from "react"

import Header from "../components/Home/Header/header"
import AgendaHead from "../components/Agenda/agendaHead"
import Events from "../components/Agenda/events"
import Newsletter from "../components/Home/Newsletter/newsletter"
import Contact from "../components/Home/Contact/contact"

const AgendaPage = () => {
  return (
    <div>
      <Header></Header>
      <AgendaHead></AgendaHead>
      <Events></Events>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </div>
    
    )
}

export default AgendaPage
