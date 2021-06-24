import React from 'react';
import './YoutubeCom.css';

const YoutubeComp = (props) => {
    return(
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="logo512.png" alt="" />
                <p className="time">{props.time}</p>
            </div>
            <p className="title">{props.title}</p>
            <p className="desc">{props.desc}</p>
        </div>
    )
}

YoutubeComp.defaultProps = {
    time:"0.00",
    title:"Hello World",
    desc:"Pengenalan React JS"
}

export default YoutubeComp;