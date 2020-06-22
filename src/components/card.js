import React, { Component } from 'react';
import Input from './input';


class card extends Component {
    render() {
        return (
            <div className="card">
                { Input('color') }
                { Input('plual noun') }
            </div>
        )
    }
}

export default card;