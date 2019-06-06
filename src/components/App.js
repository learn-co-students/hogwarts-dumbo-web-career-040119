import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer'
import SortBar from './SortBar'

class App extends Component {

  state = {
    hogs: hogs
  }

  greasedHogs = () => {
    const greased = hogs.filter(hog => {
      return hog.greased
    })
    this.setState({
      hogs: greased
    })
    console.log("greasy pigs", greased)
  }

  sortHogsName = () => {
    console.log("clicked sort by name")
    const alphaHogs = [...hogs].sort((a,b) => (a.name > b.name) ? 1 : -1)
    this.setState({
      hogs: alphaHogs
    })
  }

  sortHogsWeight = () => {
    console.log("clicked sort by weight")
    const fatPigs = [...hogs].sort((a,b) => (a.ratio > b.ratio) ? 1 : -1)
    this.setState({
      hogs: fatPigs
    })
  }

  defaultSort = () => {
    this.setState({
      hogs: hogs
    })
  }

  render() {
    // console.log(this.sortHogsName())
    return (
      <div className="App">
          <Nav />
          <SortBar defaultSort={this.defaultSort} sortHogsName={this.sortHogsName} sortHogsWeight={this.sortHogsWeight} greasedHogs={this.greasedHogs}/>
          <HogContainer hogs={this.state.hogs}/>
      </div>
    )
  }
}

export default App;
