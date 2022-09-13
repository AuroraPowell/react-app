import { render } from '@testing-library/react'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

// component birth options and their "speed" or "order"
/*class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: '',
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(
      'I am getDerivedStateFromProps and I will be the second to run.'
    )
    return null
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
  }

  render() {
    console.log('I am render and I will be the third to run.')
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
      </div>
    )
  }
}
*/

// Set Timeout in componentDidMount()
/*class App extends Component {
  constructor(props) {
    super(props)
    console.log('I am  the constructor and  I will be the first to run.')
    this.state = {
      firstName: 'John',
    }
  }
  componentDidMount() {
    console.log('I am componentDidMount and I will be last to run.')
    // after 3 seconds it resets the state
    setTimeout(() => {
      this.setState({
        firstName: 'Asabeneh',
      })
    }, 3000)
  }

  render() {
    return (
      <div className='App'>
        <h1>React Component Life Cycle</h1>
        <h2>componentDidMount Method</h2>
        {this.state.firstName}
      </div>
    )
  }
}*/

class App extends Component {
    // code below implements API call using fetch()
    /*constructor(props) {
        super(props)
        console.log('I am the constructor and I will be the first to run.')
        this.state = {
            firstName: 'John',
            data: [],
        }
    }

    componentDidMount() {
        console.log('I am componentDidMount and I will be the last to run.')
        const API_URL = 'https://restcountries.eu/rest/v2/all'
        fetch(API_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    render() {
        return (
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <h1>Calling API</h1>
                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>
                        {this.state.data.map((country) => (
                            <div>
                                <div>
                                    {' '}
                                    <img src={country.flag} alt={country.name} />{' '}
                                </div>
                                <div>
                                    <h1>{country.name}</h1>
                                    <p>Capital: {country.capital}</p>
                                    <p>Population: {country.population}</p>
                                </div>
                            </div> 
                        ))}
                    </div>
                </div>
            </div>
        )
    }
}
*/

    // below, we render the data separately instead of including it in render()
    /*constructor(props) {
        super(props)
        console.log('I am the constructor and I will be the first to run.')
        this.state = {
            firstName: 'John',
            data: [],
        }
    }

    componentDidMount() {
        console.log('I am componentDidMount and I will be the last to run.')
        const API_URL = 'https://restcountries.com/v2/all'
        fetch(API_URL)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                console.log(data)
                this.setState({
                    data,
                })
            })
            .catch((error) => {
                console.log(error)
            })
    }
    
    renderCountries = () => {
        return this.state.data.map((country) => {
            return (
                <div>
                    <div>
                        {' '}
                        <img src={country.flag} alt={country.name} />{' '}
                    </div>
                    <div>
                        <h1>{country.name}</h1>
                        <p>Population: {country.population}</p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <h1>Calling API</h1>
                <div>
                    <p>There are {this.state.data.length} countries in the api</p>
                    <div className='countries-wrapper'>{this.renderCountries()}</div>
                </div>
            </div>
        )
    }
    */
    

    // getDerivedStateFromProps also called in updating phase 
    //      - it's the first method called when component gets updated


    // shouldComponentUpdate
    //      - should return boolean, if not true the application won't update
    //      - this can be used, for instance, to block when it reaches 
    //          certain point (game, subscription) or to block specific user


    // componentDidUpdate takes two parameters, prevProps prevState
    //      - called after component is updated in DOM

    /*constructor(props) {
        super(props)
        console.log('I am the constructor and I will be first to run.')
        this.state = { 
            firstName: 'John',
            day: 1,
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState)
        console.log(NextState.day)
        // if the return is true, the application will never update.
        if(nextState > 31){
            return false
        } else {
            return true
        }
    }

    // the doChallenge increments the day by one
    doChallenge = () => {
        this.setState({
            day: this.state.day + 1,
        })
    }
    render() {
        return (
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <button onClick={this.doChallenge}>Do Challenge</button>
                <p> Challenge: Day {this.state.day}</p>
                {this.state.congratulation && <h2>{this.state.congratulate}</h2>}
            </div>
        )
    }
    */

    constructor(props) {
        super(props)
        console.log('I am the constructor and I will be first to run.')
        this.state = {
            day: 1,
            congratulate: '',
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps,nextState)
        console.log(nextState.day)
        if(nextState.day > 31) {
            return false
        } else{
            return true
        }
    }

    doChallenge = () => {
        this.setState({
            day: this.state.day + 1,
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.day == 30) {
            this.setState({
                congratulate: 'Congratulations, Challenge has been completed!',
            })
        }
        console.log(prevState, prevProps)
    }

    render() {
        return (
            <div className='App'>
                <h1>React Component Life Cycle</h1>
                <h1>Updating Components</h1>
                <button onClick={this.doChallenge}>Do Challenge</button>
                <p>Challenge: Day {this.state.day}</p>
                {this.state.congratulate && <h2>{this.state.congratulate}</h2>}
            </div>
        )
    }
}

// ---___*UNMOUNTING*___---
/* Final phase in component lifecycle is unmounting. 
    This removes component from DOM. componentWillUnmount() method is 
    the only built-in method that gets called when a component is unmounted
*/
export default App

/*
    EXERCISES:
    1. What is component life cycles
        Loading, updating, and removal of components on/in/from DOM
    2. What is the purpose of life cycles
        to create elements within a webpage/program
    3. What are the three stages of component life cycle?
        mounting/rendering, updating, unmounting
    4. What does mounting mean?
        Creating component/element and loading it onto webpage
    5. What does updating mean?
        If state or props changes, a React component may change, so it is 
            necessary to update
    6. What does unmounting mean?
        Removal of React component
    7. What is the most common built-in mounting life cycle method?
        render()
    8. What are the mounting life cycle methods?
        constructor(), getDerivedStatefromProps, render(), componentDidMount()
    9. What are the updating life cycle methods?
        getDerivedStateFromProps(), shouldComponentUpdate(), render(), componentDidUpdate()
    10. What is the unmounting life cycle method?
        componentWillUnmount()
*/