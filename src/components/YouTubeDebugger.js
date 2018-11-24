import React, {Component} from "react"

export default class YoutubeDebugger extends Component{

	constructor(props){
		super(props)
		this.state = {
				errors: [],
			    user: null,
			    settings: {
			      bitrate: 8,
			      video: {
			        resolution: '1080p'
			      }
			    }
		}
	}

	handleBitrateClick = (e) => {
		this.setState({
		      settings: {
		        ...this.state.settings,
		        bitrate: 12
		      }
    })
	}

	handleResolutionClick = (e) => {

		this.setState({
		      settings: {
		        ...this.state.settings,
		        video: {
		          resolution: '720p'
		        }
		      }
    })
	}

	render(){
		return(
			<div>
			<button className="bitrate" onClick={this.handleBitrateClick}> Bitrate </button>
			<button className="resolution" onClick={this.handleResolutionClick}> reso </button>
			</div>
			)
	}
}