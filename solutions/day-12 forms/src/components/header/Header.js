// src/components/header/Header.js
import React from 'react'

const Header = ( { welcome,title,subtitle,firstName,lastName,date }) => {   
     
    return(
        <header>    
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{date}</small>
            </div>
        </header>
    )
}

export default Header