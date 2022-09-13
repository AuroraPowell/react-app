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
    }

    
    handleLogin = () => {
        this.setState({
            loggedIn: !this.state.loggedIn
        })
    }

    showDate = (time) => {
        const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
        ]

        const month = months[time.getMonth()].slice(0,3)
        const year = time.getFullYear()
        const date = time.getDate()
        return `${month} ${date}, ${year}`
    }

    handleTime = () => {
        let message = this.showDate(new Date())
        this.setState({ message })
    }

    greetPeople = () => {
        let message = 'Welcome to 30 Days Of React Challenge, 2020'
        this.setState({ message })
    }

    render() {
        const data = {
            welcome: '30 Days Of React',
            title: 'Getting Started React',
            subtitle: 'JavaScript Library',
            author: {
                firstName: 'Asabeneh',
                lastName: 'Yetayeh',
            },
            date: 'Oct 9, 2020',
        }
        const techs = ['HTML','CSS','JS']

        return (
            <div className='app'>
                <Header {...data}/>
                <Main 
                    techs={techs}
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    loggedIn={this.state.loggedIn}
                    handleLogin={this.handleLogin}
                    message={this.state.message}
                />
                <Footer date={new Date()} />
            </div>
        )
    }
}

export default App