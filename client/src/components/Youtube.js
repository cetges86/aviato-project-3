import React, { Component } from "react";
import YTsearch from 'youtube-api-search';
import Searchbar from "./Searchbar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import _ from "lodash";

const API_KEY = "AIzaSyB-xKZip_08qHzFG4dRG1Hbwo0byxZ3t2Q"

class Youtube extends Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    componentDidMount = (props) => {
        console.log(props)
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
            <h3 className="has-text-centered">Youtube Search</h3>
            <Searchbar onSearchTermChange={videoSearch} />
            <VideoDetail video={this.state.selectedVideo} />
            <VideoList
                onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                videos={this.state.videos} />
        </div>
        );
    };

}

export default Youtube;