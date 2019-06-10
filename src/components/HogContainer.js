import React from 'react';
import HogCard from './HogCard'

const HogContainer = (props) => {


  // map over hogs array from props, and create a hog card for each
  return (
    <div className="ui cards">
      {props.hogs.map(hog =>
      <HogCard hideHog={props.hideHog} key={hog.name} name={hog.name} image={hog.image} specialty={hog.specialty} ratio={hog.ratio} medal={hog.medal} />
    )}
    </div>
  )
};

export default HogContainer
