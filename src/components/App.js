import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import FilterBar from './FilterBar';
import MainContainer from './MainContainer'


class App extends Component {

state= {
  filterValue: false,
  sortValue: ""
}

  handleChange = (newSortValue) => {
    this.setState({
      sortValue: newSortValue
    })
  }

  toggleFilter = () => {
    this.setState({
      filterValue: !this.state.filterValue
    })
  }

  hogsToRender = () => {
    if(this.state.sortValue === "name") {
      return [...hogs].sort((hogA, hogB) => {
        if(hogA.name > hogB.name){
          return 1
        } else if(hogA.name < hogB.name){
          return -1
        }else {
          0
        }
      })
    } else if(this.state.sortValue === "weight") {
      return [...hogs].sort((hogA, hogB) => {
        if(hogA.weight > hogB.weight){
          return 1
        } else if(hogA.weight < hogB.weight){
          return -1
        }else {
          0
        }
      })
    }else {
      return hogs
    }
  }

  applyFilter = (finalHogs) => {
    if(this.state.filterValue) {
      return finalHogs.filter(hog => {
        return hog.greased
      })
    } else {
      return finalHogs
    }
  }


  render() {
    // console.log(this.hogsToRender()); //we are calling the return f.
    return (
      <div className="App">
          < Nav />
          < FilterBar handleChange={this.handleChange} toggleFilter={this.toggleFilter} />
          <MainContainer hogs={this.applyFilter(this.hogsToRender())}/>

      </div>
    )
  }
}

export default App;
