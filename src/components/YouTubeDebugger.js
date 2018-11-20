// Code YouTubeDebugger Component Here
import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

  constructor(props) {
    super(props)
    this.state = { errors: [], user: null, settings: { bitrate: 8, video: { resolution: '1080p' } } }
  }
  clickFn1 = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        bitrate: 12
      }),
    })
  }
  clickFn2 = () => {
    this.setState({
      settings: Object.assign({}, this.state.settings, {
        video: Object.assign({}, this.state.settings.video, {
          resolution: '720p'
        })
      }),
    })
  }

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.clickFn1}>Bitrate</button>
      <button className='resolution' onClick={this.clickFn2}>Resolution</button>
      </div>
    )
  }

}
