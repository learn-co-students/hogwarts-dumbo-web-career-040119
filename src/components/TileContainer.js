import React, { Component } from 'react';
import '../App.css';
import Tile from './Tile.js'


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
