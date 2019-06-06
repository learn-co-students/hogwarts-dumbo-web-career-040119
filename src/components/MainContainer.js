import React, { Component } from 'react';
import App from './App.js'
import ItemCard from './ItemCard'

class MainContainer extends Component {


  render() {
    // debugger
    return (
      <div className= "ui grid container">
      {
        this.props.hogs.map((hog) => {
          return <ItemCard hog={hog} name={hog.name} img={hog.img} specialty={hog.specialty} weight={hog.weight} />
        })
      }
      </div>
    );
  }

}

export default MainContainer;
