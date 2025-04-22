import React from 'react'
import ServiceItem from './ServiceItem';
import { GoDeviceMobile } from "react-icons/go";
import { SlPencil } from "react-icons/sl";
import { SlLike } from "react-icons/sl";
import { SlMustache } from "react-icons/sl";

const services = [
    { icon: <GoDeviceMobile />, title: "Responsive", description: "Looks great on any screen size!" },
    { icon: <SlPencil />, title: "Redesigned", description: "Freshly redesigned for modern web." },
    { icon: <SlLike />, title: "Favorited", description: "Millions of users love it!" },
    { icon: <SlMustache />, title: "Question", description: "I mustache you a question..." }
  ];
  

function Services() {
    const ServicesStyle = {
        marginBottom: '10px',
        height: '555px',
        color: 'white',
        backgroundColor: '#1D809FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }

  return (
    <div style={ServicesStyle}>
        <h3 style={{color: "#ECB807FF"}}>SERVICES</h3>
        <h1 style={{fontSize: "48px"}}>What We Offer</h1>
        <div style={{display: "flex", gap: "60px", marginTop: "40px"}}>
            {services.map((service, index) => {
                return <ServiceItem key={index} {...service} />;
            })}
        </div>
    </div>
  )
}

export default Services