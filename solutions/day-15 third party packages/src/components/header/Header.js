// src/components/header/Header.js
import React from 'react'
import headerStyles from '../../styles/header/header.module.scss'

// We can all destructure the class name

const {header, headerWrapper} = headerStyles

const Header = () => (
    <header className={headerStyles.header}>
        <div className={headerStyles.headerWrapper}>
            <h1>30 Days Of React</h1>
            <h2>Getting Started React</h2>
            <h3>JavaScript Library</h3>
            <p>Instructor: Asabeneh Yetayeh</p>
            <small>Oct 15, 2020</small>
        </div>
    </header>
)

export default Header