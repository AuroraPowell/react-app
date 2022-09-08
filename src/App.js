import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'

/*const Cat = ({ cat: { name, temperament, description, weight, life_span, image }}) => {

  let url = image?.url
  let imperialWeight = weight.imperial
  const weightsFormat = []
  
  return (
    <></>
    /*<div className='cat'>
      <div className='cat_pic'>
        {url && <img src={url} alt={name} width='300px' margin='10px'/>}
      </div>
      <h3 className='cat_name'>{name}</h3>
      <div class='cat_info'>
        <p>
          <span>Temperament: </span>
          {temperament} <br />
          <span>Life Span: </span> 
          {life_span} years <br />
          <span>Weight: </span>
          {imperialWeight} lbs <br />
          <span>Description</span> <br />
          {description}
        </p>
      </div>
  </div>
  )
}*/

const containerStyle = {
  heigh: '20%',
  width: '70%',
  backgroundColor: 'lavender',
  position: 'relative',
  textAlign: 'center',
  padding: '20px',
  top: '50%',
  margin: 'auto',
  display: 'inline auto',
  alignItems: 'center',
  justifyContent: 'center',
}

const pStyle = {
  
}

const circleStyle = {
  border: '2px dotted black',
  borderRadius: '50%',
  width: 70,
  height: 70,
  fontSize: 18,
  position: 'relative',
  display: 'inline-block',
  float: 'left',
}

const circleText = {
  color: 'black',
  position: 'absolute',
  top: '30%',
  width: '100%',
  textAlign: 'center',
  display: 'inline auto',
} 

const container = {
  whiteSpace: 'nowrap',
}

const sum = list => list.reduce((a,b) => a + b, 0)
const average = list => sum(list) / list.length

const getAverageOfSpan = (getProperty, data) => {
  let averages = data.map((cat) => {
    let stringValue = getProperty(cat) // gets string of range of weights
    let values = stringValue.split(' ') //turns to array
    let low = parseInt(values[0]) // gets lower end of range
    let high = parseInt(values[values.length - 1]) // higher end of range
    
    var list=[] //housing for range values to later average
    for(var i = low; i <= high; i++){
      list.push(i)
    }
    return average(list)
  })

  let totalAvg = average(averages)
  
  return totalAvg.toFixed(2)
}

class App extends Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.fetchCatData()
  }
  fetchCatData = async () => {
    const url = 'https://api.thecatapi.com/v1/breeds'
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

  

  getAverageWeight = () => {
    return getAverageOfSpan((cat) => cat.weight.imperial, this.state.data)
  }

  getAverageLife = () => {
    return getAverageOfSpan((cat) => cat.life_span, this.state.data)
  }

  
  
  render() {  
    return (
      <div className='App'>
        <div style={containerStyle}>
          <h2>30 Days Of React</h2>
          <strong>Cats Paradise</strong>
          <p>There are {this.state.data.length} cat breeds</p>
          <div className='cats-wrapper' style={container}>
            <div style={{display: 'inline-flex', alignItems: 'center'}}>
              On average, a cat can weigh about <div className='circle' style={circleStyle}><div className='circleText' style={circleText}>{this.getAverageWeight()}</div></div> lbs and live <div className='years' style={circleStyle}><div className='circleText' style={circleText}>{this.getAverageLife()}</div></div> years.
            </div>
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