import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogTiles from './HogTiles'

class App extends Component {

  state = {
    sortName: false,
    sortWeight: false,
    sortGrease: false
}

 handleName = () => {
        this.setState({
            sortName: !this.state.sortName
        })
    this.state.sortName ? hogs.sort((a,b) => {
        return (a.name < b.name) ? 1 : -1
    }) : hogs.sort((a,b) => {
        return (a.name > b.name) ? 1 : -1
    }) 
}

handleWeight = () => {
    this.setState({
        sortWeight: !this.state.sortWeight
    })
this.state.sortWeight ? hogs.sort((a,b) => {
    return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1
}) : hogs.sort((a,b) => {
    return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1
}) 

}

handleGrease = () => {
    this.setState({
        sortGrease: !this.state.sortGrease
    })
}
  render() {
    return (
      <div className="App">   
          < Nav />
              <button style={{width: '10vh'}} onClick= {this.handleName}>Sort by Name</button>
              <button style={{width: '10vh'}} onClick= {this.handleWeight}>Sort by Weight</button>
              <button style={{width: '10vh'}} onClick= {this.handleGrease}>Sort by Grease</button>
          <HogTiles hogs = {this.state.sortGrease ? hogs.filter(hog => { return hog.greased}) : hogs} />
      </div>
    )
  }
}

export default App;
