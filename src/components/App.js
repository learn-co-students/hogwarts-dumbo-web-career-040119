import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from './PigPen';
import PigTile from './PigTile';
import FilterBar from './FilterBar';

const weight = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water';

class App extends Component {

  state = {
    //this will trigger true when clicked. This is for the greased toggle function.
    filterValue: false,
    //this will change the value that we've set below
    sortValue: ''
  }

  handleChange = (newSortValue) => {
    this.setState({
      //this will set state to the sorted value 'name','none','weight'
      sortValue: newSortValue,
    })
  }

  toggleFilter = (newFilterValue) => {
    this.setState({
      //this is the new filter value of true or
      filterValue: newFilterValue
    })
  }


  hogsToRender = () => {
    let finalHogs;
    //If the sort value is name it will sort it and return that. Else  it should return the original array.
    if(this.state.sortValue === "name") {
      //Sort mutates. So we copy the array instead of calling the original.
      finalHogs = [...hogs].sort((hogA, hogB) => {
        // The conditional must be a value. Which is why we need hogA.name and hogB.name. Sort uses a number value for the alphabet.
        if(hogA.name > hogB.name){
          return 1
        } else if(hogA.name < hogB.name){
          return -1
        } else {
          0
        }
      })
    } else if(this.state.sortValue === "weight"){
      finalHogs =  [...hogs].sort((hogA, hogB) => {
        if(hogA[weight] > hogB[weight]){
          return 1
          //[weight] is equal to = const weight : 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'. Now we're able to access it's value in our data.
        } else if(hogA[weight] < hogB[weight]){
          return -1
        } else {
          0
        }
      })
    } else {
        finalHogs = hogs
      }

  if(this.state.filterValue){
      finalHogs = finalHogs.filter(hog => {
        return hog.greased
      })
  }
  return finalHogs
}
// hogs={this.hogsToRender()} == this goes in PigPen!!



  render() {
    console.log(this.state.filterValue)
    return (
      //The reason we invoke hogsToRender() in PigPen is because  we pass an array if it needs to be sorted we send that array instead. Else we send the original array.
      <div className="App">
        <Nav />
        <FilterBar toggleFilter={this.toggleFilter} handleChange={this.handleChange}/>
        <PigPen hogs={this.hogsToRender()}/>
      </div>
    )
  }
}

export default App;
