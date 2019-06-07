import React, { Component } from 'react';

class TileFront extends Component {

  render() {
    const slug = this.props.name.replace(/\s/g, '_').toLowerCase()
    return (
      <div className= 'card-front'>
        <img src={`./hog-imgs/${slug}.jpg`} alt='of this pig'/>
        <h3>{this.props.name}</h3>
      </div>
    );
  }

}

export default TileFront;
