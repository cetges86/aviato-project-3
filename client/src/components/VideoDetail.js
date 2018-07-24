import React from 'react';

const VideoDetail = ({ video }) => {

    if (!video) {
        return <div>Loading...</div>
    }
    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    return (
        <div className="video-detail">
            <div className="is-half is-offset-one-quarter">
                <iframe className="embed-responsive-item" src={url}></iframe>
            </div>
            <div className="detail">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoDetail;