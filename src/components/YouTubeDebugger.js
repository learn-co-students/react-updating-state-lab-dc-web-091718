import React, { Component } from 'react';

export default class YouTubeDebugger extends Component {

    constructor () {
        super();
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

    handleBitRateClick = ( ) => {
        this.setState({
            settings: {
                ...this.state.settings,
                bitrate: 12
            }
        })
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
                video: {
                    resolution: '720p'
                }
            }
        })
    }

    render () {
        return (
            <React.Fragment>
                <button className="bitrate" onClick={this.handleBitRateClick}></button>
                <button className="resolution" onClick={this.handleResolutionClick}></button>
            </React.Fragment>
        )
    }
}
