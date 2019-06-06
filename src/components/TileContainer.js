import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import Tile from './Tile.js'
import Detail from './Detail.js'

class TileContainer extends Component {

  render() {
    return (
      <div>
      {this.props.hogData.map(hog => <Tile hog ={hog} />)}
      </div>


    )
  }
}

export default TileContainer;
