import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from './PigPen';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'

class App extends Component {

  state = {
    nameSorted: false,
    weightSorted: false,
    greasedOnly: false,
    filter: ''
  }

  toggleByName = () => {
    this.setState({
      nameSorted: !this.state.nameSorted,
      weightSorted: false
    })
  }

  toggleByWeight = () => {
    this.setState({
      nameSorted: false,
      weightSorted: !this.state.weightSorted
    })
  }

  toggleByGrease = () => {
    this.setState({
      greasedOnly: !this.state.greasedOnly
    })
    console.log(this.state.greasedOnly)
  }

  changeSearch = (input) => {
    this.setState({
      filter: input
    })
  }

  sortHogs = (hogs) => {
    if (this.state.nameSorted) {
      return [...hogs].sort((a, b) => a.name === b.name ? 0 : (a.name > b.name) ? 1 : -1)
    } else if (this.state.weightSorted) {
      return [...hogs].sort((a, b) => a[weight] === b[weight] ? 0 : (a[weight] < b[weight]) ? 1 : -1)
    } else {
      return hogs
    }
  }

  addFilterAndQuarantineTheUngreased = (hogs) => {
    let tempHogs = hogs
    if (this.state.greasedOnly) {
      tempHogs = tempHogs.filter(hog => hog.greased === true)
    }
    let shownHogs = this.sortHogs(tempHogs)
    return shownHogs.filter(hog => hog.name.toLowerCase().includes(this.state.filter.toLowerCase()))
  }

  render() {
    return (
      <div className='App'>
        <Nav name={this.toggleByName} weight={this.toggleByWeight}
        greased={this.toggleByGrease} search={this.changeSearch.bind(this)}
        nameToggled={this.state.nameSorted} weightToggled={this.state.weightSorted} />

        <PigPen hogs={this.addFilterAndQuarantineTheUngreased(hogs)}/>
      </div>
    )
  }
}

export default App;
