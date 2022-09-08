// src/shared/Button

import React from 'react'

const buttonStyles = {
    padding: 10,
    border: 'grey 2px',
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 15,
    color: 'black'
  }  

const Button = ({ text, onClick, }) => {
    return(
        <button style={buttonStyles} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button