import React, { Component } from 'react';
import Header from './header';
import Card from './card';

 class home extends Component {
  render() {
    return (
      <div className='home'>
        { Header() }
        <Card />
      </div>
    );
  }
}

// things we need to fix
// placeholder
// gray & green number labls

// btn space/card-height

export default home;