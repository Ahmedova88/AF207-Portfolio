import React from 'react'
import style from './PricingCards.module.css'
import Button from '../button/Button'

function PricingCard({ title, price, users, features }) {
  return (
    <div className={style.card}>
      <h4 className={style.title}>{title}</h4>
      <h1 className={style.price}>{price} <span>/ mo.</span></h1>
      <ul>
        <li><strong>{users}</strong></li>
        {features.map((f, i) => <li key={i} className={style.features}>✓ {f}</li>)}
      </ul>
      <Button className={style.button}>Choose plan</Button>
    </div>
  )
}

export default PricingCard