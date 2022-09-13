// index.js
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'

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
    margin: '3px auto',
    cursor: 'pointer',
    fontSize: 22,
    color: 'white',
}

// class based component
class Header extends React.Component {
  render() {
    const {
      welcome,
      title,
      subtitle,
      author: { firstName, lastName },
      date,
    } = this.props.data

    return (
      <header style={this.props.styles}>
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

const Message = ({ message }) => (
    <div>
        <h4>{message}</h4>
    </div>
)

// conditionally rendered components
const Login = () => (
    <div>
        <h3>Please Login</h3>
    </div>
)
const Welcome = (props) => (
    <div>
        <h1>Welcome to 30 Days Of React</h1>
    </div>
)

class TechList extends React.Component {
    render() {
        const { techs } = this.props
        const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
        return techsFormatted
    }
}

// Main Component
// Class Component
class Main extends React.Component {
    render() {
        const {
            techs,
            greetPeople,
            handleTime,
            loggedIn,
            handleLogin,
            message,
        } = this.props

        const status = loggedIn ? <Welcome /> : <Login />
        
        // CONSTANT REPEATING CALL TO RENDER - VERY MESSY
        //setTimeout(handleTime)
        return (
            <main>
                <div className='main-wrapper'>
                    <p>Prerequisite to get started react.js:</p>
                    <ul>
                        <TechList techs={this.props.techs} />
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
                        {!loggedIn && <p>Please login to access more information about 30 Days Of React
                            challenge</p>}
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
}

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
class App extends React.Component {
  state = {
    loggedIn: false,
    techs: ['HTML','CSS','JS'],
    message: 'Click Show Time or Greet People to change me',
    styles : {
        backgroundColor: '',
    },
  }

  handleLogin = () => {
    this.setState({
        loggedIn: !this.state.loggedIn,
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

    const month = time.getMonth() + 1
    const year = time.getFullYear()
    const date = time.getDate()
    let season = ''
    let color = '' 
    console.log('Month: ' + month)

    3 <= month && month <= 5 ? season = 'spring' 
        : (6 <= month && month <= 8 ? season = 'summer'
            : (9 <= month && month <= 11 ? season = 'autumn' : season = 'winter')) 

    
    
    
    season === 'summer' ? color = 'red' 
        : (season === 'autumn' ? color = 'orange'
            : (season === 'winter' ? color = 'blue' 
                : color = 'violet'))
    
    console.log(season + ' is color ' + color)
    return color
  }
  handleTime = () => {
    let backgroundColor = this.showDate(new Date())
    this.setState({ 
        styles: {
            backgroundColor: backgroundColor,
        }
     })
  }
  greetPeople = () => {
    let message = 'Welcome to 30 Days Of React Challenge, 2020'
    this.setState({ message })
  }

  changeBackground = () => {
    this.setState({
        styles: {
            backgroundColor: (
                this.showDate(new Date())
            )
        }
    })
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

    // We can destructure state
    //const { loggedIn, techs } = this.state

    // conditional rendering using if and else statement
    {/*
    let status
    let text

    if (this.state.loggedIn) {
        status = <h1>Welcome to 30 Days Of React</h1>
        text = 'Logout'
    } else {
        status = <h3>Please Login</h3>
        text = 'Login'
    }

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button text={text} style={buttonStyles} onClick={this.handleLogin} />
      </div>
    )

    */}


    //conditional rendering using ternary operator
    {/*let status = this.state.loggedIn ? (
        <h1>Welcome to 30 Days Of React</h1>
    ) : (
        <h3>Please Login</h3>
    )

    

    return (
      <div className='app'>
        <Header data={data} />
        {status}
        <Button
            text={this.state.loggedIn ? 'Logout' : 'Login'}
            style={buttonStyles}
            onClick={this.handleLogin}
        />
      </div>
    )*/}

    //conditional rendering a component
    //const status = loggedIn ? <Welcome /> : <Login />

    return (
        <div className='app' style={this.state.styles} >
            <Header data={data} />
            {/*{status}     <<< used in rendering w/ ternary operator 
            <Button
                text={loggedIn ? 'Logout' : 'Login'}
                style={buttonStyles}
                onClick={this.handleLogin}
            />
            {techs.length === 3 && (
                <p>You have all the prerequisite courses to get started React</p>
            )}
            {!loggedIn && (
                <p>
                    Please login to access more information about 30 Days Of React 
                    challenge
                </p>
            )}*/}

            <Main 
                techs={this.state.techs}
                handleTime={this.handleTime}
                greetPeople={this.greetPeople}
                loggedIn={this.state.loggedIn}
                handleLogin={this.handleLogin}
                message={this.state.message}
                
            />

            <Footer date={new Date()}  />
        </div>
    )
  }
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)