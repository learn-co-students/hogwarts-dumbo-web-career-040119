import React, { Component } from 'react';

class TileBack extends Component {

  render() {
    console.log(this.props)
    return (
      <div className="card-back">
        <h3>Specialty: {this.props.hog.specialty}</h3>
        Grease Status: {this.props.hog.greased ? 'super-greasy' : 'squeaky clean'}
      </div>
    );
  }

}

export default TileBack;
