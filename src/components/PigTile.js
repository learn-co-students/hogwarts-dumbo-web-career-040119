import React, { Component } from 'react';

class PigTile extends Component {

  state = {
    flipCard: false
  };

  handleClick = () => {
    this.setState({
      flipCard: !this.state.flipCard
    });
  }


  render() {
    console.log(this.props);
    const slug = this.props.hog.name.split(" ").join("_").toLowerCase();;
    const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return (
      this.state.flipCard ?
      <div className={"ui card"} onClick={this.handleClick} >
        <h2>Weight: {this.props.hog[weight]}</h2>
        <h2>Specialty: {this.props.hog.specialty}</h2>
        <h4>Highest Medal Achieved: {this.props.medal}</h4>
      </div> :
      <div onClick={this.handleClick}>
        <h3>{this.props.hog.name}</h3>
        <img src={`./hog-imgs/${slug}.jpg`}/>
      </div>

    );
  }
}

export default PigTile;
