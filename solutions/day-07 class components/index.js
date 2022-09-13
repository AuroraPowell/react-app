import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import ReactDOM from 'react-dom'
import auroraImage from './images/user.jpg'

//Function to show months date year

// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
        <img src={image} alt={firstName} width='250px' />
        <h2>
            {firstName} {lastName}
        </h2>
    </div>
)

// A button component
const Button = ({ text, onClick, style }) => (
    <button style={style} onClick={onClick}>
        {text}
    </button>
)

// CSS styles in JavaScript Object
const buttonStyles = {
    backgroundColor: '#61dbfb',
    padding: 10,
    border: 'none',
    borderRadius: 5,
    margin: 3,
    curser: 'pointer',
    fontSize: 18,
    color: 'white',
}

// Header Component
// class base component
class Header extends React.Component {
    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2020')
    }
    render(){
        console.log(this.props.data)
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data
        return (
            <header>
                <div className='header-wrapper'>
                    <h1>{welcome}</h1>
                    <h2>{title}</h2>
                    <h3>{subtitle}</h3>
                    <p>
                        {firstName} {lastName}
                    </p>
                    <small>{date}</small>
                    <button onClick={this.greetPeople}> Greet </button>
                </div>
            </header>
        )
    }
}

// TechList Component
// class base component
class TechList extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { techs } = this.props
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

// Main Component
// class base component
class Main extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
                    </ul>
                    <UserCard user={this.props.user} />
                    <Button
                        text='Greet People'
                        onClick={this.props.greetPeople}
                        style={buttonStyles}
                    />
                    <Button 
                        text='Show Time'
                        onClick={this.props.handleTime}
                        style={buttonStyles}
                    />
                </div>
            </main>
        )
    }
}

// Footer Component
// class base component
class Footer extends React.Component {
    constructor(props) { 
        super(props)
    }
    render() {
        return (
            <footer>
                <div className='footer-wrapper'>
                    <p>Copyright {this.props.date.getFullYear()}</p>
                </div>
            </footer>
        )
    }
}

// The App, or parent or container component
// class base component
class App extends React.Component {
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
        return ` ${month} ${date}, ${year}`
    }
    handleTime = () => {
        alert(this.showDate(new Date()))
    }
    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2020')
    }
    render() {
        const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Aurora',
            lastName: 'Powell',
        },
        date: 'Oct 7, 2020',
        }
        const techs = ['HTML','CSS','JavaScript']
        const user = { ...data.author, image: auroraImage }

        return (
            <div className='app'>
                <Header data={data} />
                <Main 
                    user={user}
                    techs={techs} 
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                />
                <Footer date={new Date()} />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)