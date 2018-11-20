import React, { Component } from 'react'

export default class DigitalClicker extends Component {
	constructor(props) {
		super(props)
		this.state = {
			timesClicked: 0
		}
	}

	handleClick = () => {
		this.setState({timesClicked: (1+this.state.timesClicked)})
	}
	
	render() {
		return (
		<div>
			Clicked <button onClick={this.handleClick}>{this.state.timesClicked}</button> Times
		</div>
		)
	}
}
