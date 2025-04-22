import React from 'react'

const Button = (props) => {
    return <button style={props.style}>{props.children}</button>
}

export default Button