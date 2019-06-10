import React, { Component, Fragment} from 'react'
import HogTilesSpecific from './HogTilesSpecific'


export default class HogTiles extends Component {
    render() {
        return (
        <div>  
            <div className="ui grid container">
                {this.props.hogs.map(hog => {
                    return <HogTilesSpecific hog = {hog}/>
                })}
            </div>  
        </div>
        )
    }
}
