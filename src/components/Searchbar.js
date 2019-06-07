import React, { Component } from 'react';

class Searchbar extends Component {

  state = {
    filterInput: ''
  }

  handleSubmit = () => {
    this.props.search(this.state.filterInput)
  }

  checkKey = (event) => {
    if (event.key === "Enter") {
      this.handleSubmit(event)
    }
  }

  handleChange = (event) => {
    event.preventDefault()

    this.setState({
      filterInput: event.target.value
    })
  }

  render() {
    return (
      <div className='ui icon input'>
        <input placeholder='Search...' type='text' onKeyDown={this.checkKey.bind(this)} onChange={this.handleChange} />
        <button id="search-button" onClick={this.handleSubmit.bind(this)}>
          <i className='search icon'></i>
        </button>
      </div>
    );
  }

}

export default Searchbar;
