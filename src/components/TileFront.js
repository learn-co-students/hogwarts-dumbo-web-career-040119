import React, { Component } from 'react';


import aug from '../hog-imgs/augustus_gloop.jpg';
import bay from '../hog-imgs/bay_of_pigs.jpg';
import cher from '../hog-imgs/cherub.jpg';
import gal from '../hog-imgs/galaxy_note.jpg';
import leg from '../hog-imgs/leggo_my_eggo.jpg';
import mud from '../hog-imgs/mudblood.jpg';
import pig from '../hog-imgs/piggy_smalls.jpg';
import pork from '../hog-imgs/porkchop.jpg';
import rain from '../hog-imgs/rainbowdash.jpg';
import sob from '../hog-imgs/sobriety.jpg';
import pro from '../hog-imgs/the_prosciutto_concern.jpg';
import tro from '../hog-imgs/trouble.jpg';
import truf from '../hog-imgs/truffleshuffle.jpg';

const pigMap = {
  'Mudblood' : mud,
  'Porkchop' : pork,
  'Cherub' : cher,
  'Piggy smalls' : pig,
  'Trouble' : tro,
  'Sobriety' : sob,
  'Rainbowdash' : rain,
  'TruffleShuffle' : truf,
  'Bay of Pigs' : bay,
  'The Prosciutto Concern' : pro,
  'Galaxy Note' : gal,
  'Leggo My Eggo' : leg,
  'Augustus Gloop' : aug
}


class TileFront extends Component {

  render() {
    console.log(this.props.name)
    return (
      <div className= "card-front">
        <img src={pigMap[this.props.name]} alt="of this pig"/>
        <h3>{this.props.name}</h3>
      </div>
    );
  }

}

export default TileFront;
