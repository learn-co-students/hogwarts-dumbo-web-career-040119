import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer.js'


class App extends Component {


  render() {
    return (
      <div className="App">
          <Nav />
          <TileContainer hogData = {hogs} />
      </div>
    )
  }
}

export default App;
