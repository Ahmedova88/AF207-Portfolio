import React from 'react'
import style from './Testimonials.module.css'
import { BsChatRightQuoteFill } from "react-icons/bs";

function TestimonialCard({text}) {
  return (
    <div className={style.card}>
        <BsChatRightQuoteFill style={{color: "blue", fontSize: "35px"}}/>
        <div className={style.text_box}>
            <p>{text}</p>
      <p style={{color: "#6c757d", paddingTop: "10px"}}>- Client Name, Location</p>
        </div>
      
    </div>
  )
}

export default TestimonialCard