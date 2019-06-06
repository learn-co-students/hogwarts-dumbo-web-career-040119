import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer.js'
import Detail from './Detail.js'

class App extends Component {

  state = {

    isInDetailView : false

  }

  render() {
    return (
      <div className="App">
          <Nav />
          {this.isInDetailView ? <Detail /> : <TileContainer hogData = {hogs}/>}


      </div>
    )
  }
}

export default App;
