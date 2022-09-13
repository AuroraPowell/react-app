// src/App.js
import React, { Component } from 'react'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'



{/*// named export in arrow function
// export const App = () => <h1>Welcome to 30 Days Of React</h1>

// named export in regular function, function declaration
/*export function App () {
    return <h1>Welcome to 30 Days Of React</h1>
}*/

// export default in arrow function
//export default const App = () => <h1> Welcome to 30 Days Of React</h1>

// export default function
/*export default function App () {
    return <h1>Welcome to 30 Days Of React</h1>
}*/

// *-_-* Recommended for most of the cases: *-_-*
/*(const App = () => <h1> Welcome to 30 Days Of React</h1>
export default App*/}

class App extends Component {
    state = {
        loggedIn: false,
        techs: ['HTML', 'CSS', 'JS'],
        message: '',
        firstName: '',
        key: '',
        left: '',
        top: '',
    }

    handleClick = (e) => {
        // e gives an event object
        // check the value of e using console.log(e)
        this.setState({
          message: 'Welcome to the world of events',
        })
      }
    
      // triggered whenever the mouse moves
    handleMouseMove = (e) => {
        this.setState({ message: 'mouse is moving' })
    }
    
    // to get value when an input field changes a value
    handleChange = (e) => {
        this.setState({
          firstName: e.target.value,
          message: e.target.value,
        })
    }
    
    // to get keyboard key code when an input field is pressed
    // it works with input and textarea
    handleKeyPress = (e) => {
        this.setState({
          message:
            `${e.target.value} has been pressed and the keycode is` + e.charCode,
        })
    }

    // Blurring happens when a mouse leave an input field
    handleBlur = (e) => {
        this.setState({ message: 'Input field has been blurred' })
    }
      
    // This event triggers during a text copy
    handleCopy = (e) => {
        this.setState({
          message: 'Using 30 Days Of React for commercial purpose is not allowed',
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(e.target)
        console.log(data.get('firstName'))
    }

    handleMouseEnter = (e) => {
        const element = document.getElementsByClassName('mouse-enter')
        let winWidth = window.innerWidth
        let winHeight = window.innerHeight

        let top = this.getRandomNumber(0, winHeight)
        let left = this.getRandomNumber(0, winWidth)
        this.setState({ top })
        this.setState({ left })
    }

    getRandomNumber = (min, max) => {
        return Math.floor(Math.random() * (max - min) + min)
    }

    render() {
        return (
            <div>
                <h1>Welcome to the World of Events</h1>

                <button onClick={this.handleClick}>Click Me</button>
                <button onMouseMove={this.handleMouseMove}>Move mouse on me</button>
                <p onCopy={this.handleCopy}>
                    Check copy right permission by copying this text
                </p>

                <p>{this.state.message}</p>
                <label htmlFor=''>Test for onKeyPress Event: </label>
                <input type='text' onKeyPress={this.handleKeyPress} />
                <br />

                <label htmlFor=''> Test for onBlur Event: </label>
                <input type='text' onBlur={this.handleBlur} />

                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor='firstName'>First Name: </label>
                        <input  
                            onChange={this.handleChange}
                            name='firstName'
                            value={this.state.value}
                        />
                    </div>

                    <div>
                        <input type='submit' value='Submit' />
                    </div>
                </form>

                <div className='mouse-enter' onMouseEnter={this.handleMouseEnter} 
                    style={{width: 200, height:200, backgroundColor: 'pink',
                    position: 'absolute', top: `${this.state.top}px`, left: `${this.state.left}px`}}>
                    <h3>Hover on Me</h3>
                </div>
            </div>
        )
    }
}

export default App