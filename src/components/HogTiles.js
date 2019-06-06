import React, { Component, Fragment} from 'react'
import HogTilesSpecific from './HogTilesSpecific'


export default class HogTiles extends Component {
    state = {
        sortName: false,
        sortWeight: false,
        sortGrease: false
    }

     handleName = () => {
            this.setState({
                sortName: !this.state.sortName
            })
        this.state.sortName ? this.props.hogs.sort((a,b) => {
            return (a.name < b.name) ? 1 : -1
        }) : this.props.hogs.sort((a,b) => {
            return (a.name > b.name) ? 1 : -1
        }) 
    }

    handleWeight = () => {
        this.setState({
            sortWeight: !this.state.sortWeight
        })
    this.state.sortWeight ? this.props.hogs.sort((a,b) => {
        return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] < b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1
    }) : this.props.hogs.sort((a,b) => {
        return (a['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'] > b['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']) ? 1 : -1
    }) 

    }

    handleGrease = () => {
        this.setState({
            sortGrease: !this.state.sortGrease
        })
    this.state.sortGrease ? this.props.hogs.sort((a,b) => {
        return (a.greased < b.greased) ? 1 : -1
    }) : this.props.hogs.sort((a,b) => {
        return (a.greased > b.greased) ? 1 : -1
    }) 
    }
    
    render() {
        
        return (
        <div>
            <button onClick= {this.handleName}>Sort by Name</button>
            <button onClick= {this.handleWeight}>Sort by Weight</button>
            <button onClick= {this.handleGrease}>Sort by Grease</button>
            
            <div className="ui grid container">
                {this.props.hogs.map(hog => {
                    return <HogTilesSpecific hog = {hog}/>
                })}
            </div>  
        </div>
        )
    }
}
