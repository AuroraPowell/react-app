import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import validator from 'validator'

const options = [
    {
        value: '',
        label: '-- Select Country --',
    },
    {
        value: 'Finland',
        label: 'Finland',
    },
    {
        value: 'Sweden',
        label: 'Sweden',
    },
    {
        value: 'Norway',
        label: 'Norway',
    },
    {
        value: 'Denmark',
        label: 'Denmark',
    },
    
]

// mapping the options to list(array) of JSX options

const selectOptions = options.map(({ value, label }) => (
    <option value={value}> {label}</option>
))


class App extends Component {
    // declaring initial state
    state = {
        firstName: '',
        lastName: '',
        email: '',
        country: '',
        tel: '',
        dateOfBirth: '',
        favoriteColor: '',
        weight: '',
        gender: '',
        file: '',
        bio: '',
        skills: {
            html: false,
            css: false,
            javascript: false,
        },
        touched: {
            firstName: false,
            lastName: false,
        }
    }

    handleChange = (e) => {
        /*
        we can get the name and value like this: e.target.name, e.target.value
        but we can also destructure name and value from e.target
        const name = e.target.name
        const value = e.target.value
        */
        const { name, value, type, checked } = e.target
        
        // [variablename] to use a variable name as a key in an object
        // name refers to the name attribute of the input elements
        //this.setState({ [name]: value })
    
        if (type === 'checkbox') {
            this.setState({
                skills: { ...this.state.skills, [name]: checked },
            })
        } else if (type === 'file') {
            console.log(type, 'check here')
            this.setState({ [name]: e.target.files[0] })
            const file = e.target.files[0]
            //this.validateFile(file)
            
        
        } else {
            this.setState({ [name]: value })
        }
    }
    validateFile = (file) => {
        const extensions = ['jpg','jpeg','png','gif']
        let fileName = file.name
        const ext = fileName.split('.').pop()
        extensions.includes(ext) && console.log('FILE TYPE ACCEPTED')
        !extensions.includes(ext) && alert('File Type Not Accepted')
    }
    handleBlur = (e) => {
        const { name, value } = e.target
        this.setState({ touched: { ...this.state.touched, [name]: true }})
    }
    validate = () => {
        // Object to collect error feedback and to display on the form
        const errors = {
            firstName: '',
        }

        if (
            (this.state.touched.firstName && this.state.firstName.length < 3) ||
            (this.state.touched.firstName && this.state.firstName.length > 12)
        ) {
            errors.firstName = 'First name must be between 2 and 12'
        }
        return errors 
    }
    
    handleSubmit = (e) => {
        /*
        e.preventDefault()
        stops the default behavior of form element
        specifically refreshing of page
        */
        e.preventDefault()

        const {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills,
        } = this.state

        const formattedSkills = []
        for (const key in skills) {
            //console.log(key)
            if (skills[key]) {
                formattedSkills.push(key.toUpperCase())
            }
        }
        const data = {
            firstName,
            lastName,
            email,
            tel,
            dateOfBirth,
            favoriteColor,
            weight,
            country,
            gender,
            bio,
            file,
            skills: formattedSkills,
        }
        /*
        this is the place where we connect backend api
        to send the data to the database
        */

       console.log(data)
    }

    render() {
        /*
            accessing the state value and this value 
            will inject to the input in the value attribute
        */
          
        const { firstName } = this.validate()
        return (
            <div className='App'>
                <h3>Add Student</h3>
                <form onSubmit={this.handleSubmit} noValidate>
                    <div className='row'>
                        <div className='form-group'>
                            <label htmlFor='firstName'>First Name </label>
                            <input
                                type='text'
                                id='firstName'
                                name='firstName'
                                placeholder='First Name'
                                value={this.state.firstName}
                                onBlur={this.handleBlur}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='lastName'>Last Name </label>
                            <input
                                type='text'
                                name='lastName'
                                placeholder='Last Name'
                                value={this.state.lastName}
                                onChange={this.handleChange}
                            />
                        </div>
                        <div className='form-group'>
                            <label htmlFor='email'>Email </label>
                            <input 
                                type='email'
                                name='email'
                                placeholder='Email'
                                value={this.state.email}
                                onChange={this.handleChange}
                            />
                        </div>
                    </div>

                    <div className='form-group'>
                        <label htmlFor='tel'>Telephone </label>
                        <input
                            type='tel'
                            name='tel'    
                            value={this.state.tel}
                            onChange={this.handleChange}
                            placeholder='Tel'
                        />                    
                    </div>
                    <div className='form-group'>
                        <label htmlFor='dateOfBirth'>Date of birth </label>
                        <input
                            type='date'
                            name='dateOfBirth'
                            placeholder='Date of Birth'
                            value={this.state.dateOfBirth}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='favoriteColor'>Favorite Color</label>
                        <input
                            type='color'
                            name='favoriteColor'
                            id='favoriteColor'
                            placeholder='Favorite Color'
                            value={this.state.favoriteColor}
                            onChange={this.handleChange}
                        />
                    </div>
                    <div className='form-group'>
                        <label htmlFor='weight'>Weight </label>
                        <input
                            type='number'
                            id='weight'
                            name='weight'
                            value={this.state.weight}
                            onChange={this.handleChange}
                            placeholder='Weight in Kg'
                        />
                    </div>
                    <div>
                        <label htmlFor='country'>Country </label><br />
                        <select name='country' onChange={this.handleChange} id='country'>
                            {selectOptions}
                        </select>
                    </div>

                    <div>
                        <p>Gender</p>
                        <div>
                            <input
                                type='radio'
                                id='female'
                                name='gender'
                                value='Female'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Female'}
                            />
                            <label htmlFor='female'>Female</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='male'
                                name='gender'
                                value='Male'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Male'}
                            />
                            <label htmlFor='male'>Male</label>
                        </div>
                        <div>
                            <input
                                type='radio'
                                id='other'
                                name='gender'
                                value='Other'
                                onChange={this.handleChange}
                                checked={this.state.gender === 'Other'}
                            />
                            <label htmlFor='other'>Other</label>
                        </div>
                    </div>
                    
                    <div>
                        <p>Select your skills</p>
                        <div>
                            <input  
                                type='checkbox'
                                id='html'
                                name='html'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='html'>HTML</label>
                        </div>
                        <div>
                            <input 
                                type='checkbox'
                                id='css'
                                name='css'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='css'>CSS</label>
                        </div>
                        <div>
                            <input 
                                type='checkbox'
                                id='javascript'
                                name='javascript'
                                onChange={this.handleChange}
                            />
                            <label htmlFor='javascript'>JavaScript</label>
                        </div>
                    </div>

                    <div>
                        <label htmlFor='bio'>Bio</label> <br />
                        <textarea
                            id='bio'
                            name='bio'
                            value={this.state.bio}
                            onChange={this.handleChange}
                            cols='120'
                            rows='10'
                            placeholder='Write about yourself...'
                        />
                    </div>

                    <div>
                        <input type='file' name='file' id='file' accept='image/*' onChange={this.handleChange} />
                        <label htmlFor='file'>File (Type: image) </label>
                    </div>
                    <div>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default App

/*
1. What is the importance of form?
    How you get data from user, interactive
2. How many input types do you know?
    Text, number, email, tel, password, checkbox, radio, color, image, file, 
        date, button, submit
3. Mention at least four attributes of an input element
    name, id, value, placeholder, onChange
4. What is the importance of htmlFor?
    Combines form data with a label, for readability
5. Write an input type which is not given in the example if there is?

6. What is a controlled input?
    Input that follows a particular style (email requiring '@', 
    telephone being a string of numbers, etc)
7. What do you need to write a controlled input?
    set value holder, placeholder, id, name pointing to label field
8. What event type do you use to listen changes on an input field?
    onChange() - in order to update the logged data, otherwise partial values
    would be stored.
9. What is the value of a checked checkbox?
    true?
10. When do you use onChange, onBlur, onSubmit?
    onChange - updating values as they are changed/put in; adaptive/reactive
    onBlur - performing function if focus goes away (eg: not completely filling
        an email form and reminding user to enter a valid email address, or other
        form type)
    onSubmit - storing values and passing to backend
11. What is the purpose of writing e.preventDefault() inside the submit handler method?
        in order to not clear information and refresh the page
12. How do you bind data in React? The first input field example is data binding in React.
        store value in state and update using onChange instead of saving 
13. What is validation?
        ensuring the input is following rules of user input - email must have '@',
        names must be more than 2 characters (though this is messy), etc.
14. What is the event type you use to listen when an input changes?
        onChange
15. What are event types do you use to validate an input?

*/