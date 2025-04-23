import React from 'react'
import style from './Testimonials.module.css'
import TestimonialCard from './TestimonialCard';

const cards = [
    {
        text: 'Thank you for putting together such a great product. We loved working with you and the whole team, and we will be recommending you to others!'
    },
    {
        text: 'The whole team was a huge help with putting things together for our company and brand. We will be hiring them again in the near future for additional work!'
    }
]

function Testimonials() {
  return (
    <div className={style.container}>
      <h1 style={{fontSize: "32px"}}>Customer testimonials</h1>
      <p style={{fontSize: "20px"}}>Our customers love working with us</p>
      <div className={style.cards}>
        {cards.map((card, index) => (
        <TestimonialCard key={index} {...card} />
      ))}

      </div>
      
    </div>
  )
}

export default Testimonials