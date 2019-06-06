import React, { Component } from 'react';
import MainContainer from './MainContainer.js'


class ItemCard extends Component {

  state = {
    flipCard: false
  }

  handleClick = () => {
    this.setState({
      flipCard: !this.state.flipCard
    })
  }

  render() {
    return (
      this.state.flipCard ?
      //if true
      <div onClick={this.handleClick} className= "pigTile">
      <p>Weight: {this.props.weight}</p>
      <p>specialty: {this.props.specialty}</p>
      <p>-----------------------------------------------------</p>
      </div>
      :
      //if false
       <div onClick={this.handleClick} className= "backTitle">
        <h3>{this.props.name}</h3>
        <img src={this.props.img}/>
        </div>

    );
  }

}

export default ItemCard;
