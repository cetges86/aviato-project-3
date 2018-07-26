import React, { Component } from "react";
import YTsearch from 'youtube-api-search';
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import YTlogo from "../img/youtube.png";
import _ from "lodash";

const API_KEY = "AIzaSyB-xKZip_08qHzFG4dRG1Hbwo0byxZ3t2Q"

class Youtube extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount = () => {
        this.videoSearch("How to get a job after bootcamp");
    }

    videoSearch = (term) => {
        YTsearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 600);

        return (<div>
            <div className="media">
                <div className="media-left">
                    <img className="youtube-logo" alt="youtube logo" src={YTlogo} />
                </div>
                <div className="media-right">
                    <p id="search" className="is-size-4">Search</p>
            </div>
            </div>
            <Searchbar onSearchTermChange={videoSearch} />
            <br />
            <div className="box">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <VideoDetail video={this.state.selectedVideo} />
                    </div>
                </div>
            </div>
            <br />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />
        </div>
        );
    };

}

export default Youtube;