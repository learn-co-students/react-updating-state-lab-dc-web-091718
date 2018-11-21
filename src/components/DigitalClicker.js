// Code DigitalClicker Component Here
import React, {Component} from 'react';
  class DigitalClicker extends Component{
    constructor(){
      super()
      this.state={
        timesClicked: 0
      }
    }
    increaseCount = () => {


      // eslint-disable-next-line
      this.setState(prevState => ({
        timesClicked: prevState.timesClicked+1
      }))
    }
    render(){
      return(
        <button onClick={this.increaseCount} type="button" >{this.state.timesClicked}</button>
      )
    }
  }
export default DigitalClicker;
