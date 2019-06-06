import React, { Fragment } from 'react';

class HogCard extends React.Component {

  // set initial state of each card
  state = {
    clicked: false
  }

  // when card clicked, set state to it's inverse
  toggleDetails = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    // variable for loooooong image file
    const slug = this.props.name.replace(/\s/g, "_").toLowerCase()

    return (
      // set on click event to trigger toggleDetails function ^
      // conditional rendering
      <div onClick={this.toggleDetails} className="ui card">
        { this.state.clicked ?
          <Fragment>
            <h1>{this.props.name}</h1>
            <h2>Specialty: {this.props.specialty}</h2>
            <h3>Weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.ratio}</h3>
            <h4>Highest Medal Achieved: {this.props.medal}</h4>
          </Fragment>
          :
          <Fragment>
          <img src={`./hog-imgs/${slug}.jpg`} alt={this.props.name}/>
          <h2>{this.props.name}</h2>
          </Fragment>
        }
      </div>
    );
  }
}

export default HogCard;
