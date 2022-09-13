import React, { Component } from 'react'
import Header from './components/header/Header'

const Button = ({ onClick, text, style }) => {
    return (
        <button onClick={onClick} style={style}>
            {text}
        </button>
    )
}

const buttonWithStyle = (CompParam, name = 'default') => {
    const colors = [
        {
            name: 'default',
            backgroundColor: '#e7e7e7',
            color: '#000000',
        },
        {
            name: 'react',
            backgroundColor: '#61dbfb',
            color: '#ffffff',
        },
        {
            name: 'success',
            backgroundColor: '#4CAF50',
            color: '#ffffff',
        },
        {
            name: 'info',
            backgroundColor: '#2196F3',
            color: '#ffffff',
        },
        {
            name: 'warning',
            backgroundColor: '#ff9800',
            color: '#ffffff',
        },
        {
            name: 'danger',
            backgroundColor: '#f44336',
            color: '#ffffff',
        },
    ]
    const { backgroundColor, color } = colors.find((c) => c.name === name)

    const buttonStyles = {
        backgroundColor,
        padding: '10px 25px',
        border: 'none',
        borderRadius: 5,
        margin: 3,
        cursor: 'pointer',
        fontSize: 18,
        color,
    }
    return (props) => {
        return <CompParam {...props} style={buttonStyles} />
    }
}

const NewButton = buttonWithStyle(Button)
const ReactButton = buttonWithStyle(Button, 'react')
const InfoButton = buttonWithStyle(Button, 'info')
const SuccessButton = buttonWithStyle(Button, 'success')
const WarningButton = buttonWithStyle(Button, 'warning')
const DangerButton = buttonWithStyle(Button, 'danger')

class App extends Component {
    render() {
        return (
            <div className='App'>
                <Button text='No Style' onClick={() => alert('I am not styled yet')} />
                <NewButton 
                    text='Styled Button'
                    onClick={() => alert('I am the default style')}
                />
                <ReactButton text='React' onClick={() => alert('I have react color')} />
                <InfoButton
                    text='Info'
                    onClick={() => alert('I am styled with info color')}
                />
                <SuccessButton text='Success' onClick={() => alert('I am successful')} />
                <WarningButton
                    text='Warning'
                    onClick={() => alert('I warn you many times')}
                />
                <DangerButton 
                    text='Danger'
                    onClick={() => alert('Oh no, you can not restore it')}
                />
            </div>
        )
    }
}

export default App 

/*
1. What is higher order function?
    a function that takes in another function as parameter and returns function
2. What is higher order component?
    a component that takes another component as parameter and returns component
3. What is the difference between higher order function and higher order component?
    not many aside from function/component
4. A higher order component can allow us to enhance a component. (T or F)
    T
*/