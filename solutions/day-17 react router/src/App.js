import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
    Outlet,
    Switch,
    Redirect,
    Prompt,
    withRouter,
    useParams,
} from 'react-router-dom'
import Header from './components/header/Header'


// Home component
const Home = (props) => <h1>Welcome Home</h1>
// About component
const About = (props) => <h1>About Us</h1>
// Contact component
const Contact = (props) => <h1>Contact Us</h1>
//Challenge component
const challenges = [
    {
        name: '30 Days Of Python',
        description:
          '30 Days of Python challenge is a step by step guide to learn Python in 30 days.',
        status: 'completed',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '20 Nov 2019 - 20 Dec 2019',
        slug: 'python',
        url:
          'https://github.com/https://https://github.com/Asabeneh/30-Days-Of-Python.com/Asabeneh/30-Days-Of-JavaScript/30-Days-Of-React',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 Days Of JavaScript',
        description:
          '30 Days of JavaScript challenge is a step by step guide to learn JavaScript in 30 days.',
        status: 'completed',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '1 Jan 2020 - 30 Jan 2020',
        slug: 'javascript',
        url: 'https://github.com/Asabeneh/30-Days-Of-JavaScript',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 Days Of React',
        description:
          '30 Days of React challenge is a step by step guide to learn React in 30 days.',
        status: 'ongoing',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '1 Oct 2020- 30 Oct 2020',
        slug: 'react',
        url: 'https://github.com/Asabeneh/30-Days-Of-React',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 HTML and CSS',
        description:
          '30 Days of HTML and CSS challenge is a step by step guide to learn HTML and CSS in 30 days.',
    
        status: 'coming',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '',
        slug: 'html-and-css',
        url: '',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 ReactNative',
        description:
          '30 Days of ReactNative challenge is a step by step guide to learn ReactNative in 30 days.',
        status: 'coming',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '',
        slug: 'reactnative',
        url: '',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 Data Analysis',
        description:
          '30 Days of Data Analysis challenge  is a step by step guide to learn about data, data visualization and data analysis in 30 days.',
        status: 'coming',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '',
        slug: 'data-analysis',
        url: '',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
      {
        name: '30 Machine Learning',
        description:
          '30 Days of Machine learning challenge  is a step by step guide to learn data cleaning, machine learning models and predictions in 30 days.',
        status: 'coming',
        days: 30,
        level: 'Beginners to Advanced',
        duration: '',
        slug: 'machine-learning',
        url: '',
        author: {
          firstName: 'Asabeneh',
          lastName: 'Yetayeh',
        },
      },
]

const Challenge = () => {

  let { subUrl } = useParams()
  let result = challenges.find((c) => c.slug === subUrl)
    return (  
    <div>
      <h1>{result.name}</h1>
      <p>{result.level}</p>
      <p>
          Author: {result.author.firstName} {result.author.lastName}
      </p>
      <p>{result.duration}</p>
      <small>Number of days: {result.days}</small>

      <p>{result.description}</p>
    </div>
)}

const Challenges = (props) => {
    
    return (
        <div>
            <h1>30 days of React Challenge</h1>
            <ul>
                {challenges.map(({ name, slug }) => (
                    <li>
                        <NavLink to={`/challenges/${slug}`}>{name}</NavLink>
                    </li>
                ))}
            </ul>
            <Outlet />
        </div>
    )
}

const NotFound = (props) => <h1>The page you were looking for is not found</h1>

const NavBar = () => (
    <ul>
        <li>
            <NavLink to='/'>Home</NavLink>
        </li>
        <li>
            <NavLink to='/about'>About Us</NavLink>
        </li>
        <li>
            <NavLink to='/contact'>Contact Us</NavLink>
        </li>
        <li>
            <NavLink to='/challenges/*'>Challenges</NavLink>
        </li>
    </ul>
)

class App extends Component {
  render() {
      return (
        <Router>
          <Header />
          <div className='App'>
            <NavBar />
            <Routes>
              <Route path='/about' element={ <About /> } />
              <Route path='/contact' element={ <Contact /> } />
              

              <Route path='/challenges/*' element={ <Challenges /> } >
                <Route path=':subUrl' element={<Challenge />} />
              </Route>

              <Route path='/' element={ <Home /> } />
              <Route element={ <NotFound /> } />
            </Routes>
          </div>
        </Router>
      )
  }
}

export default App