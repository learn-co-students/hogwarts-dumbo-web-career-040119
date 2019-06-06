import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import TileContainer from './TileContainer'

class Tile extends Component {
  render() {
    console.log(this.props.hog)
    return (
      <div className="Tile">
      {this.props.hog.name}

      </div>
    )
  }
}

export default Tile;
