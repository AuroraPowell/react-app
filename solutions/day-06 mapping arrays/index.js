import React from 'react'
import ReactDOM from 'react-dom'

// Mapping Arrays of Numbers
{/*const Numbers = ({ numbers }) => {
    //modifying array to array of li JSX
    const list = numbers.map((num) => <li key={num}>{num}</li>)
    return list
}

//App Component

const App = () => {
    const numbers = [1,2,3,4,5]

    return (
        <div className='container'>
            <div>
                <h1>Numbers List</h1>
                <ul>
                    <Numbers numbers={numbers} />
                </ul>
            </div>
        </div>
    )
}*/}

// Mapping Arrays of Arrays
{/*const skills = [
    ['HTML', 10],
    ['CSS', 7],
    ['JavaScript', 9],
    ['React', 8],
]

// Skill Component
const Skill = ({ skill: [tech, level] }) => (
    <li key={tech}>
        {tech} {level}
    </li>
)

// Skills Component
const Skills = ({ skills }) => {
    const skillsList= skills.map((skill) => <Skill key={skill} skill={skill} />)
    console.log(skillsList)
    return <ul>{skillsList}</ul>
}

const App = () => {
    return (
        <div className='container'>
            <div>
                <h1>Skills Level</h1>
                <Skills skills={skills} />
            </div>
        </div>
    )
}*/}

{/*// Mapping Arrays of Objects
const countries = [
    { name: 'Finland', city: 'Helsinki'},
    { name: 'Sweden', city: 'Stockholm'},
    { name: 'Denmark', city: 'Copenhagen'},
    { name: 'Norway', city: 'Oslo'},
    { name: 'Iceland', city: 'Reykjavik'},
]

// Country component
const Country = ({ country: { name, city} }) => {
    return (
        <div>
            <h1>{name}</h1>
            <small>{city}</small>
        </div>
    )
}

const Countries = ({ countries }) => {
    const countryList = countries.map((country) => (
        <Country key={country.name} country={country} />
        ))
    return <div>{countryList}</div>
}

const App = () => (
    <div className='container'>
        <div>
            <h1>Countries List</h1>
            <Countries countries={countries} />
        </div>
    </div>
)*/}

// Key in mapping arrays

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)