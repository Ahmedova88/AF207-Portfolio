import React from 'react'

function ServiceItem({icon, title, description}) {
  return (
    <div style={{ textAlign: "center", width: 200 }}>
      <div style={{
        fontSize: 48,
        marginBottom: 10,
        width: "112px",
        height: "112px",
        borderRadius: "50%",
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: "0 auto",
        color: "#1D809FFF"
    }}>
  {icon}
</div>

      <h4 style={{margin: "15px 0", fontSize: "24px"}}><strong>{title}</strong></h4>
      <p>{description}</p>
    </div>
  )
}

export default ServiceItem