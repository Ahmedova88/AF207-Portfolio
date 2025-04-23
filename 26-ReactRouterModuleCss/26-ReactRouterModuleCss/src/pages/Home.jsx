import React from 'react'
import Header from '../components/header/Header'
import Features from '../components/features/Features'
import PricingCards from '../components/pricingCards/PricingCards'
import Testimonials from '../components/testimonials/Testimonials'

function Home() {
  return (
    <div>
        <Header/>
        <Features/>
        <PricingCards/>
        <Testimonials/> 
    </div>
  )
}

export default Home