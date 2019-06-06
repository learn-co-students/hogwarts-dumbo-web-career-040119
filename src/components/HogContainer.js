import React from 'react';
import HogCard from './HogCard'


const HogContainer = (props) => {
  return (
    <div className="ui cards">
      {props.hogs.map(hog =>
      <HogCard name={hog.name} image={hog.image} specialty={hog.specialty} ratio={hog.ratio} medal={hog.medal} />
      )}
    </div>
  )
};

export default HogContainer
