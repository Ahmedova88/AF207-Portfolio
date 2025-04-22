import React from 'react';
import Button from '../button/Button';

function About() {
  const aboutStyle = {
    backgroundImage: "url('https://startbootstrap.github.io/startbootstrap-stylish-portfolio/assets/img/bg-masthead.jpg')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
    color: 'black',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  };

  return (
    <div style={aboutStyle}>
      <h1 style={{fontSize: "88px", }}>Stylish Portfolio</h1>
      <h3 style={{fontSize: "28px", fontStyle: "italic", marginBottom: "40px"}}>A Free Bootstrap Theme by Start Bootstrap</h3>
      <Button style={{cursor: "pointer", padding: "25px 45px", borderRadius: "8px", border: "none", backgroundColor: "#1D809FFF", color: "white", fontSize: "16px"}}>
        Find Out More
      </Button>
    </div>
  );
}

export default About;
