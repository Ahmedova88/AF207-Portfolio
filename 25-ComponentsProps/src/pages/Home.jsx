import React from 'react'
import About from "../components/section1/About"
import Offerings from '../components/section2/Offerings'
import CallToAction from '../components/section6/CallToAction'
import Services from '../components/section3/Services'

function Home() {
  return (
    <div>
        <About/>
        <Offerings/>
        <Services/>
        <CallToAction/>
    </div>
  )
}

export default Home