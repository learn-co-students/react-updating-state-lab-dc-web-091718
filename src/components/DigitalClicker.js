// Code DigitalClicker Component Here
import React, { Component } from 'react';

export default class Cell extends Component {

  constructor(props) {
    super(props)
    this.state = {
      timesClicked: 0
    }
  }
  clickFn = () => {
    this.setState({
      timesClicked: this.state.timesClicked+1
    })
  }


  render() {
    return (
      <div>
      <button onClick={this.clickFn}>{this.state.timesClicked}</button>
      </div>
    )
  }

}
