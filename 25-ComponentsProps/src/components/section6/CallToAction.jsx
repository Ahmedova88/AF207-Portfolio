import React from 'react'
import Button from '../button/Button';

function CallToAction() {
    const CallToActionStyle = {
        height: '370px',
        color: 'white',
        backgroundColor: '#1D809FFF',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    }
    
  return (
    <div style={CallToActionStyle}>
        <h1 style={{paddingBottom: "20px"}}>The buttons below are impossible to resist...</h1>
        <div style={{gap: "25px", display: "flex"}}>
            <Button style={{cursor: "pointer", padding: "25px 45px", borderRadius: "8px", border: "none", backgroundColor: "#fff", color: "black", fontSize: "16px"}}>Click Me!</Button>
            <Button style={{cursor: "pointer", padding: "25px 45px", borderRadius: "8px", border: "none", backgroundColor: "#000", color: "white", fontSize: "16px"}}>Look at Me!</Button>
        </div>
    </div>
  )
}

export default CallToAction