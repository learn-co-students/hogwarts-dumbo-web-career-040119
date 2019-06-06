import React, { Component } from 'react';
import PigTile from './PigTile';

class PigPen extends Component {

  render() {
    return (
      <div className="ui grid container">
        {this.props.hogs.map((hog, index) => {
          return <PigTile key= {index} hog = {hog}/>
        })}
      </div>
    );
  }

}

export default PigPen;
