import React from 'react'
import ReactDOM from 'react-dom'

import userPic from './images/user.jpg'
import iconpic from './images/icon.png'
import clockIcon from './images/clock.png'

const pic = (
    <div>
        <img src={userPic} width="300" alt='Ripley 8 holds Call, endearingly' />
    </div>
)

const icon = (
    <img src = {iconpic} width="20px"/>
)

const clock = (
    <img src={clockIcon} width="20px"/>
)


// JSX element, header
{/*const welcome = 'Welcome to 30 Days Of React Challenge'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const author = {
  firstName: 'Asabeneh',
  lastName: 'Yetayeh',
}
const date = 'Oct 2, 2020'*/}

// Function to display time in Month Date, Year format eg Oct 4, 2020
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
      return ` ${month} ${date}, ${year}`
}

// Header Component
const Header = ({
    data: {
        welcome,
        title,
        subtitle,
        author: { firstName, lastName },
        date,
    },
}) => {
    return (
        <header>
            <div className='header-wrapper'>
                <h1>{welcome}</h1>
                <h2>{title}</h2>
                <h3>{subtitle}</h3>
                <p>
                    {firstName} {lastName}
                </p>
                <small>{showDate(date)}</small>
            </div>
        </header>
    )
}

// JSX Element, subscribe box div
const Subscribe = () => {
    const saveInfo = () => {
        alert('wowza')
    }
    
    return (
     <div className='subscribe-box'>
        <div className='subscribe'>
            <h1>SUBSCRIBE</h1>
            <p>Sign up with your email address to receive news and updates.</p>
            <div className='input-fields'>
                <input type='text' id='first' placeholder='First name'/>
                <input type='text' id='last' placeholder='Last name'/>
                <input type='text' id='email' placeholder='Email'/>
            </div>
            <button onClick={saveInfo} >Subscribe</button>           
        </div>
    </div>
    )
}


// User Card Component
const TechList = ({ techs }) => {
    const techsList = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsList
}
const SkillList = ({ skills }) => {
    const skillsList = skills.map((skill) => <li key={skill}>{skill}</li>)
    return skillsList
}
const UserCard = ({ user: { firstName, lastName, image, skills, date} }) => (
    <div className='user-card'>
        <img src={image} width="300" alt={firstName} />
        <h2>{firstName} {lastName}</h2>
        <p>Junior Developer</p>
        <h2>Skills</h2>
        <SkillList skills={skills}/>
        <p>Joined on {showDate(date)}</p>

    </div>
)

const hexaColor = () => {
    let str = '0123456789abcdef'
    let color = ''
    for(let i = 0; i<6; i++){
        let index = Math.floor(Math.random() * str.length)
        color += str[index]
    }
    let hexcode = '#' + color
    return hexcode
    
}

const hexStyle = (hexaColor) => ({
    backgroundColor: hexaColor
})
const HexaBar = () => {
    const val = hexaColor()
    return (
        <li className='hex' style={hexStyle(val)}>{val}</li>
    )
}

const Button = ({ text, onClick, style}) => (
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
    fontSize: 18,
    color: 'white',
}

// Main Component
const Main = ({ user, techs, greetPeople, handleTime}) => (
    <main>
        <div className='main-wrapper'>
            <p>Prerequisite to get started react.js:</p>
            <ul>
                <TechList techs={techs} />
            </ul>
            {/*<Subscribe />*/}
            
            <UserCard user={user}/>
            {/*<Button text='Greet People' onClick={greetPeople} style={buttonStyles} />
            <Button text='Show Time' onClick={handleTime} style={buttonStyles} />
            <ul className='hexList'><HexaBar /><HexaBar /><HexaBar /></ul>
            */}
        </div>
    </main>
)

// JSX Element, footer
const Footer = ({ copyRight }) => (
    <footer>
        <div className='footer-wrapper'>
            <p>Copyright {copyRight.getFullYear()}</p>
        </div>
    </footer>
)

// JSX Element, app, a container or a parent
const App = () => {
    const data = {
        welcome: 'Welcome to 30 Days Of React',
        title: 'Getting Started React',
        subtitle: 'JavaScript Library',
        author: {
            firstName: 'Aurora',
            lastName: 'Powell'
        },
        date: new Date(),
    }
    const date = new Date()
    const techs = ['HTML', 'CSS', 'JavaScript']
    const skills = ['Fuckin', 'Pissing', 'Shidding']
    // copying the author from data object to user variable using spread operator
    const user = { ...data.author, image: userPic, skills, date}

    const handleTime = () => {
        alert(showDate(new Date()))
    }
    const greetPeople = () => {
        alert('Welcome to 30 Days Of React Challenge, 2020')
    }

    return (
        <div className='app'>
            <Header data={data} />
            <Main 
                user={user}
                techs={techs}
                handleTime={handleTime}
                greetPeople={greetPeople}
            />
            <Footer copyRight={date} />
        </div>
    )
}
  
const rootElement = document.getElementById('root')

ReactDOM.render(<App />, rootElement)