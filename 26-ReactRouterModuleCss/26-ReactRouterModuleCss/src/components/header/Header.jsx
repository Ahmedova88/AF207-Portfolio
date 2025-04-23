import React from 'react'
import Button from '../button/Button'
import style from '../header/Header.module.css'

function Header() {
  return (
    <div className={style.header}>
        <h1 className={style.h1}>Present your business in a whole <br /> new way</h1>
        <p className={style.p}>Quickly design and customize responsive mobile-first sites with <br />Bootstrap, the world’s most popular front-end open source toolkit!</p>
        <div style={{ display: "flex", gap: "20px" }}>
            <Button className={style.button1}>Get started</Button>
            <Button className={style.button2}>Learn more</Button>
        </div>
        
    </div>
  )
}

export default Header