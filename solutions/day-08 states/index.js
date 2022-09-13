import { isLabelWithInternallyDisabledControl } from '@testing-library/user-event/dist/utils'
import React from 'react'
import ReactDOM from 'react-dom'
import auroraImage from './images/user.jpg'
import { countriesData } from './data/countries'

//Function to show months date year
const showDate = (time) => {
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
    return ` ${month} ${date} ${year}`
}
// User Card Component
const UserCard = ({ user: { firstName, lastName, image } }) => (
    <div className='user-card'>
        <img src={image} alt={firstName} width='250px' />
        <h2>
            {firstName} {lastName}
        </h2>
    </div>
)

const CountryGenerator  = ({ country: { name, capital, languages, population, flag, currency} }) => (

    <div className='user-card'>
        <div className='flag-name'>
            <img src={flag} alt={name} />
            <h1>{name}</h1>
        </div>
        <div className='country-info'>
            <p><strong>Capital</strong> {capital}</p>
            <p><strong>Language</strong> {languages}</p>
            <p><strong>Population</strong> {population}</p>
            <p><strong>Currency</strong> {currency}</p>
        </div>
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

const lightStyle = {
    backgroundColor: '',
    color: '',
}

const darkStyle = {
    backgroundColor: '#121230',
    color: 'white',
}

// Header Component
// class base component
class Header extends React.Component {
    constructor(props) {
        super(props)
        // the code inside the constructor run before any other code
    }
    render() {
        //console.log(this.props.data)
        const {
            welcome,
            title,
            subtitle,
            author: { firstName, lastName },
            date,
        } = this.props.data

        return (
            <header className='header'>
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
}

const Count = ({ count, addOne, minusOne }) => (
    <div>
        <h1>Count: {count}</h1>
        <div>
            <Button text='+1' onClick={addOne} style={buttonStyles} />
            <Button text='-1' onClick={minusOne} style={buttonStyles} />
        </div>
    </div>
)

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
        const { 
            techs,
            user,
            greetPeople,
            handleTime,
            changeBackground,
            count,
            addOne,
            minusOne,
            country,
            countries,
            handleCountry
        } = this.props

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
                    <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
                    <Button
                        text='Change Background'
                        onClick={changeBackground}
                        style={buttonStyles}
                    />
                    <Count count={count} addOne={addOne} minusOne={minusOne} />
                    <CountryGenerator country={country} />
                    <Button 
                        text='Select Random Country'
                        onClick={handleCountry}
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
            <footer className='footer'>
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
    state = {
        count: 0,
        styles: {
            backgroundColor: '',
            color: '',
        },
        country: {},
        countries: countriesData
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
        return ` ${month} ${date}, ${year}`
    }
    addOne = () => {
        this.setState({ count: this.state.count + 1 })
    }
    minusOne = () => {
        this.setState({ count: this.state.count - 1 })
    }
    handleTime = () => {
        alert(this.showDate(new Date()))
    }
    greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2020')
    }
    handleCountry = () => {
        const country = this.state.countries[Math.floor(Math.random() * this.state.countries.length)]
        this.setState({country})
    }

    // CHANGE BACKGROUND - NEED HELP
    changeBackground = () => {
        console.log('background change called')
        this.setState({
            styles: {
                backgroundColor: this.state.styles.backgroundColor === '' ? 'red' : ''
            }
        })
        console.log(this.state.styles.backgroundColor)
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
        const countries = countriesData
        
        return (
            <div className='app' style={this.state.styles}>
                <Header data={data} /> 
                {this.state.backgroundColor}
                <Main 
                    user={user}
                    techs={techs} 
                    handleTime={this.handleTime}
                    greetPeople={this.greetPeople}
                    changeBackground={this.changeBackground}
                    addOne={this.addOne}
                    minusOne={this.minusOne}
                    count={this.state.count}
                    countries={countries}
                    handleCountry={this.handleCountry}
                    country={this.state.country}
                />
                <Footer date={new Date()} />
            </div>
        )
    }
}

const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)