import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Select extends Component {


    render()
    {
        
        return 
            <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                <option value="none">None</option>
            </select>   
    }
}