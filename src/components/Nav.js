import piggy from '../porco.png'
import React from 'react'
import Searchbar from './Searchbar'

let Nav = (props) => {
	return (
		<div className='navWrapper'>
			<span className='headerText'>Hogwarts</span>
			<div className='TwirlyPig'>
				<a href='https://www.lowes.com/pd/LG-24-7-cu-ft-French-Door-Refrigerator-with-Ice-Maker-Stainless-steel/4746231'>
					<img src={piggy} className='App-logo' alt='piggy' />
				</a>
			</div>
			<span className='normalText'>A React App for County Fair Hog Fans</span>
			<br />
			<div className='ui menu'>
				<button onClick={props.name} className={props.nameToggled ? 'ui blue button' : 'ui button'}>Sort By Name</button>
				<button onClick={props.weight} className={props.weightToggled ? 'ui blue button' : 'ui button'}>Sort By Weight</button>
				<div className="inline field">
					<div className="ui toggle checkbox" style={{padding: '1em'}}>
						<input type="checkbox" tabIndex="0" style={{margin: '1em'}} onClick={props.greased}/>
						<label>Only Greasy</label>
					</div>
				</div>
				<div className='right menu'>
					<div className='item'>
						<Searchbar search={props.search}/>
				  </div>
				</div>
			</div>
		</div>
	)
}

export default Nav
