import React from 'react';
import './YoutubeCom.css';

const YoutubeComp = () => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="logo512.png" alt="" />
                <p className="time">7.12</p>
            </div>
            <p className="title">title here</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YoutubeComp;