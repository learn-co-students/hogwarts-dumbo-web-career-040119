import React from 'react';

const SortBar = (props) => {

  const handleChange = (event) => {
    if (event.target.value === "name") {
      props.sortHogsName()
    } else if (event.target.value === "weight") {
      props.sortHogsWeight()
    } else {
      props.defaultSort()
    }
  }


  return (
    <div className="" align="right">
    <select onChange={handleChange}>
      <option>Sort By:</option>
      <option value="name">Sort By Name</option>
      <option value="weight">Sort By Weight</option>
    </select>
    <button onClick={props.greasedHogs}>SHOW ME GREASY HOGS</button>
    </div>
  )
};

export default SortBar
