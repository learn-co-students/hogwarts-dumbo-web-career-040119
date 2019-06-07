import React, { Component } from 'react';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class TileBack extends Component {

  capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  medals = {
    diamond: '💎',
    platinum: '🏆',
    gold: '🏅',
    silver: '🥈',
    bronze: '🥉',
    wood: '🌲'
  }

  render() {
    return (
      <div className='card-back'>
        <h3>Specialty: {this.props.hog.specialty}</h3>
        <h3>Grease Status: {this.props.hog.greased ? 'Super Greasy' : 'Squeaky Clean'}</h3>
        <h3>Weight (in # o' fridges): {this.props.hog[weight]}</h3>
        <h3>Highest Medal: {this.capitalize(this.props.hog['highest medal achieved'])}
        {' ' + this.medals[this.props.hog['highest medal achieved']]}</h3>
      </div>
    );
  }

}

export default TileBack;
