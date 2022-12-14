// src/components/main/Main.js

import React from 'react'
import Button from '../../shared/Button'
import TechList from './TechList'

const Main = ({techs, handleTime, greetPeople, loggedIn, handleLogin, message}) => {
    
    const buttonStyles = {
        backgroundColor: '#61dbfb',
        padding: 10,
        border: 'none',
        borderRadius: 5,
        margin: 3,
        cursor: 'pointer',
        fontSize: 22,
        color: 'white',
        margin: '0 auto',
    }
    const Welcome = () => (
        <div>
            <h1>Welcome to 30 Days Of React</h1>
        </div>
    )
    const Login = () => (
        <div>
            <h3>Please Login</h3>
        </div>
    )
    const Message = ({ message }) => (
        <div>
            <h1>{message}</h1>
        </div>
    )
    const status = loggedIn ? <Welcome /> : <Login />

    return (
        <main>
            <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
                <TechList techs={techs} />
            </ul>
            {techs.length === 3 && (
                <p>You have all the prerequisite courses to get started React</p>
            )}
            <div>
                <Button
                    text='Show Time'
                    onClick={handleTime}
                    style={buttonStyles}
                />{' '}
                <Button
                    text='Greet People'
                    onClick={greetPeople}
                    style={buttonStyles}
                />
                {!loggedIn && <p>Please login to access more information about 30 Days Of React challenge</p>}
            </div>
            <div style={{ margin: 30 }}>
                <Button
                    text={loggedIn ? 'Logout' : 'Login'}
                    style={buttonStyles}
                    onClick={handleLogin}
                />
            <br />
            {status}
            </div>
          <Message message={message} />
            </div>
        </main>
    )
}

export default Main