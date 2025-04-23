import React from 'react'
import PricingCard from './PricingCard'
import style from './PricingCards.module.css'


  const cards = [
    {
    title: 'FREE',
    price: '$0',
    users: '1 users',
    features: [
      '5GB storage',
      'Unlimited public projects',
      'Community access',
      'Unlimited private projects',
      'Dedicated support',
      'Free linked domain',
      'Monthly status reports'
    ]
  },
  {
    title: 'PRO',
    price: '$9',
    users: '5 users',
    features: [
      '5GB storage',
      'Unlimited public projects',
      'Community access',
      'Unlimited private projects',
      'Dedicated support',
      'Free linked domain',
      'Monthly status reports'
    ]
  },
  {
    title: 'ENTERPRISE',
    price: '$49',
    users: 'Unlimited users',
    features: [
      '5GB storage',
      'Unlimited public projects',
      'Community access',
      'Unlimited private projects',
      'Dedicated support',
      'Unlimited linked domains',
      'Monthly status reports'
    ]
  }
  ]

function PricingCards() {
  return (
    <div className={style.container}>
      <h1 style={{fontSize: "32px"}}>Pay as you grow</h1>
      <p style={{fontSize: "20px"}}>With our no hassle pricing plans</p>
      <div className={style.cards}>
        {cards.map((card, index) => (
        <PricingCard key={index} {...card} />
      ))}
      </div>
      
    </div>
  )
}

export default PricingCards