import React, { Component } from 'react';
import Input from './input';
import { timers } from 'jquery';


class card extends Component {
    constructor() {
        super()

        this.state = {
            color:'BLUE',
            pluralNoun: ""
        }
    }

    handleInputChange() {
        this.setState({color:'red'})
    }

    render() {
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                <input/>
            </div>
        );
        return (
            <div className="card">
                <h1>{this.state.color}</h1>
                { Input('color') }
                { Input('plual noun') }
            </div>
        );
    }
}

export default card;