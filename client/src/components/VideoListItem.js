import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {

    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video)}
        className="list-group-item">
            <div className="video-list media">

                <div className="media-left">
                    <img alt="video thumbnail" className="media-object" src={imageUrl} />
                </div>

                <div className="media-body">
                    <div className="has-text-weight-semibold">{video.snippet.title} </div>
                    <div>{video.snippet.description}</div>
                </div>
            </div>
            <hr />
        </li>
    );
};

export default VideoListItem;