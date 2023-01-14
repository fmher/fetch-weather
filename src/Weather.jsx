import React, { Component } from 'react'
import axios from 'axios'

export default class Weather extends Component {
    state = {
        input: '',
        temp: '',
        apiResponse: {}
    }

    // handle the change of the input
    handleInputChange = e => {
        this.setState({
            input: e.target.value
        })
    }

    handleFormSubmit = async e => {
        try {
            e.preventDefault()
            // ping api with the value from state
            const url = `https://api.openweathermap.org/data/2.5/weather?zip=${this.state.input},us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial`
            const response = await axios.get(url)
            console.log(response.data)
            // toss the api's response into state
            this.setState({
                apiResponse: response.data,
                input: ''
            })
            // clear the input
        } catch (err) {
            console.warn(err)
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleFormSubmit}>
                    <label for='zipcode'>Zipcode</label>
                    <input 
                        required
                        type='text'
                        id='zipcode'
                        onChange={this.handleInputChange}
                        value={this.state.input}
                    />

                    <button type='submit'>Fetch me some Weather</button>
                </form>

                <p>temp: {this.state.apiResponse.main?.temp}</p>
                <p>low: {this.state.apiResponse.main?.temp_min}</p>
                <p>max: {this.state.apiResponse.main?.temp_max}</p>
            </div>
        )
    }
}