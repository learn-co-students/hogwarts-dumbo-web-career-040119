import React, { Component, Fragment } from 'react'

export default class HogTilesSpecific extends Component {
    state = {
        expand: false,
        hide: false
    }

    handleClick = () => {
       this.setState({
           expand: !this.state.expand
       })
    }

    handleHideClick = () => {
        this.setState({
            hide: !this.state.hide
        })
    }

    render() {
        // console.log(this.props.hog)
        return (
        <div className= "ui eight wide column" onClick={this.handleClick}>
            {/* <button onClick={this.handleClick}>Hide</button> */}
            {
                this.state.expand ?
                <Fragment>
                    <h1>{this.props.hog.name}</h1>
                    {/* <img src={this.props.hog.image}></img>  */}
                    <h3>{this.props.hog.specialty}</h3>
                    <p>Greased? {this.props.hog.greased ? "No" : "Yes"}</p>
                    <p>weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water: {this.props.hog[`weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water`]}</p>
                    <p>Medal: {this.props.hog[`highest medal achieved`].toUpperCase()}</p>
                    
                </Fragment>
                :
                <Fragment>
                    <h1>{this.props.hog.name}</h1>
                    <img src={this.props.hog.image}></img> 
                </Fragment>
            }

        </div>
        )
    }
}
