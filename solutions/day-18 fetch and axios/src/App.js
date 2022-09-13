import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

const Country = ({ country: { name, flags, population } }) => {
  return (
    <div className='country'>
      <div className='country_flag'>
        <img src={flags.png} alt={name.common} />
      </div>
      <h3 className='country_name'>{name.common}</h3>
      <div class='country_text'>
        <p>
          <span>Population: </span>
          {population}
        </p>
      </div>
    </div>
  )
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCountryData()
  }
  fetchCountryData = async () => {
    const url = 'https://restcountries.com/v3.1/all'
    try {
      const response = await axios.get(url)
      const data = await response.data
      this.setState({
        data,
      })
    } catch (error) {
      console.log(error)
    }
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
              <Country country={country} />
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default App

{/*
What is HTTP request?
  a request for resource made by a client to a host that contains resource/data
What are the most common HTTP requests?
  POST, GET, DELETE, PUT, PATCH
What is fetch?
  built in HTTP request method for javascript
What is axios?
  third party request tools 
What is the difference between fetch and axios?
  axios is faster/cleaner
Do you prefer fetch to axios for make HTTP requests?
  axios, because it actually works, since the fetch tutorials didn't work. :/





*/}