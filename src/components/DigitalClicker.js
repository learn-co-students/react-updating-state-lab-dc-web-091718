// Code DigitalClicker Component Here
import React, {Component} from "react"

export default class DigitalClicker extends Component{

	constructor(props){
		super(props)
		this.state = {
			timesClicked: 0
		}
	}

	render(){
		return(
			<button onClick={() => {let newval = this.state.timesClicked + 1; this.setState({timesClicked: newval})}}>{this.state.timesClicked}</button> 
			)
	}
}