import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import SortBar from './SortBar'

class App extends Component {
// set initial state, array of hogs from imported file
  state = {
    hogs: hogs
  }

  hideHog = (hName) => {
    console.log("HIDE ME")
    const showHogs = hogs.filter(hog => {
      return hog.name !== hName
    })
    this.setState({
      hogs: showHogs
    })
  }

// filter all hogs by grease status, then set state with new array
  greasedHogs = () => {
    const greased = hogs.filter(hog => {
      return hog.greased
    })
    this.setState({
      hogs: greased
    })
  }

// sort a copy of hogs array alphabetically by name, set state with new sorted array
  sortHogsName = () => {
    console.log("clicked sort by name")
    const alphaHogs = [...hogs].sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: alphaHogs
    })
  }

// sort a copy of hogs array ascending by weight, set state with new sorted array
  sortHogsWeight = () => {
    console.log("clicked sort by weight")
    const fatPigs = [...hogs].sort((a,b) => (a.ratio > b.ratio) ? 1 : -1)
    this.setState({
      hogs: fatPigs
    })
  }

// set state to original hogs order from imported file
  defaultSort = () => {
    this.setState({
      hogs: hogs
    })
  }

  render() {
    // pass all functions for sorting / filtering to sort bar
    // pass hogs array
    return (
      <div className="App">
          <Nav />
          <SortBar defaultSort={this.defaultSort} sortHogsName={this.sortHogsName} sortHogsWeight={this.sortHogsWeight} greasedHogs={this.greasedHogs}/>
          <HogContainer hogs={this.state.hogs} hideHog={this.hideHog}/>
      </div>
    )
  }
}

export default App;
