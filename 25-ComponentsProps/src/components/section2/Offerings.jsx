import React from 'react'
import Button from '../button/Button';



function Offerings() {
    const offeringsStyle = {
        height: '430px',
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
      };

  return (
    <div style={offeringsStyle}>
        <h1 style={{paddingBottom: "10px"}}>Stylish Portfolio is the perfect theme for your next project!</h1>
        <p style={{fontSize: "20px", marginBottom: "40px"}}>This theme features a flexible, UX friendly sidebar menu and stock photos from our friends at <a href="">Unsplash</a>!</p>
        <Button style={{cursor: "pointer", padding: "25px 45px", borderRadius: "8px", border: "none", backgroundColor: "#000", color: "white", fontSize: "16px"}}>
        What We Offer
        </Button>
    </div>
  )
}

export default Offerings