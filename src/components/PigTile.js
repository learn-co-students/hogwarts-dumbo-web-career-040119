import React, { Component } from 'react';
import TileBack from './TileBack';
import TileFront from './TileFront';

class PigTile extends Component {
  render() {
    return (
      <div className='ui six wide column pigTile'>
        <TileFront name={this.props.hog.name}/>
        <TileBack hog= {this.props.hog}/>
      </div>
    );
  }
}

export default PigTile;
