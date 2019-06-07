import React, { Component } from 'react';

class Sort extends Component {

  //this function is going to pass the selected  values from the form to our app to update state.
  sortChange = (event) => {
    this.props.handleChange(event.target.value)
  }

  render() {
    return (
      <div>
        <select onChange={this.sortChange}>
          <option value=''>None</option>
          <option value="weight">Weight</option>
          <option value="name">Name</option>
        </select>
      </div>
    );
  }

}

export default Sort;
