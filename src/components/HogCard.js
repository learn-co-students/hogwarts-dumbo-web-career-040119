import React, { Fragment } from 'react';
import HogContainer from './HogContainer'

class HogCard extends React.Component {

  state = {
    clicked: false
  }

  toggleDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
  console.log(this.state.clicked)

  return (
    <div onClick={this.toggleDetails} className="ui card">
    <img src={this.props.image}/>
      <h2>{this.props.name}</h2>
      { this.state.clicked ?
        <div>
          <h3>Specialty: {this.props.specialty}</h3>
          <p>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.ratio}</p>
          <h4>Highest Medal Achieved: {this.props.medal}</h4>
        </div>
        :
        null
      }
    </div>
  );
}

}

export default HogCard;
