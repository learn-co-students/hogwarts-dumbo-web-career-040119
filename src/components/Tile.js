import React, { Component } from 'react';
import '../App.css';
import TileContainer from './TileContainer'
import Detail from './Detail.js'

class Tile extends Component {

  state = {
    clicked: false
  }

  handleDetailsClick = () => {
      //when clicked, change clicked to true
      this.setState({ clicked: !this.state.clicked });
  };


  render() {
    return (
      <div className="single-hog-tile" onClick={this.handleDetailsClick}>
        {console.log(this.state.clicked)}
        <img src= {this.props.hog.image_url} />
        <p>{this.props.hog.name}</p>
        {this.state.clicked ?
         <div>
           <p> {this.props.hog.specialty} </p>
           <p> greased: {this.props.hog.greased ? 'true' : 'false'} </p>
           <p> highest medal achieved: {this.props.hog['highest medal achieved']}</p>
           <p> weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</p>
         </div>
         : null
        }
      </div>
    )
  }
}

export default Tile;
