import React, { Component } from 'react';
import Input from './input';
import { timers } from 'jquery';


class card extends Component {
    constructor() {
        super()

        this.state = {
            color: "",
            pluralNoun: ""
        }
    
    this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        this.setState({ [event.target.name]: event.target.value })
    }

    render() {
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <h2>{this.state.pluralnoun}</h2>
                {Input('Color', this.state.color, this.handleInputChange, 'color')}
                {Input('Plural Noun', this.state.pluralnoun, this.handleInputChange, 'pluralnoun')}
            </div>
        );
    }
}

export default card;