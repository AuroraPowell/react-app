// App.js

import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './styles/header/header.scss'
import Header from './components/header/Header'
import axios from 'axios'
import moment from 'moment'
import {
    TiSocialLinkedinCircular,
    TiSocialGithubCircular,
    TiSocialTwitterCircular,
} from 'react-icons/ti'

const Footer = () => (
    <footer>
        <h3>30 Days of React</h3>
        <div>
            <TiSocialLinkedinCircular />
            <TiSocialGithubCircular />
            <TiSocialTwitterCircular />
        </div>
        <div>
            <small>Copyright &copy; {new Date().getFullYear()}</small>
        </div>
    </footer>
)
class App extends Component {
    state = {
        data: [],
    }
    componentDidMount() {
        const API_URL = 'https://restcountries.eu/rest/v3.1/all'
        axios
            .get(API_URL)
            .then((response) => {
                this.setState({
                    data: response.data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    renderCountries = () => {
        return this.state.data.map((country) => {
            const languageOrLanguages = 
                country.languages.length > 1 ? 'Languages' : 'Language'
            const formatLanguages = country.languages
                .map(({name }) => name)
                .join(', ')
            return (
                <div>
                    <div>
                        {' '}
                        <img src={country.flag} alt={country.name} width="200" />{' '}
                    </div>
                    <div>
                        <h1>{country.name}</h1>
                        <p>Capital: {country.capital}</p>
                        <p>
                            {languagesOrLanguages}: {formatLanguages}
                        </p>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            )
        })
    }
    render() {
        return (
            <div className='App'>
                <Header />
                <h1>Fetching Data Using Axios</h1>
                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>{this.renderCountries()}</div>
                </div>
                <div>
                    <h1>How to use moment</h1>
                    <p>This challenge was started {moment('2020-10-01').fromNow()}</p>
                    <p>The challenge will be over in {moment('2020-10-30').fromNow()}</p>
                    <p>Today is {moment(new Date()).format('MMMM DD, YYYY hh:mm')} or {moment(new Date()).format('HH:mm')}</p>
                </div>
                <Footer />
            </div>
        )
    }
}

export default App

/*
    1. What is a package?
        A library of code/methods 
    2. What is a third party package ?
        package not inherently included in main library of code
    3. Do you have to use third party packages?
        You don't, but it makes creating websites 
            or applications easier/more efficient
    4. How do you know the popularity and stability of a third party package?
        User ratings/reviews from package-manager, such as yarn or npm
    5. How many JavaScript packages are there on the npm registry?
        More than 1.4 million
    6. How do you install a third party package?
        through package manager (npm i/install package-name)
    7. What packages do you use most frequently?
        react
    8. What package do you use to fetch data?
        axios
    9. What is the purpose of classnames package?
        classnames package on npm shows that it can reactively change 
            class names within the code in order to change styles, 
            , access new elements, etc when certain events are triggered
    10. What is the purpose of validator package?
            validates strings' types (password, passport #, URL, mobile phone #, 
                etc) and also sanitizes strings in order to be read easily by methods
*/