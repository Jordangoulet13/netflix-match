import React from "react";
import "./VideoItem.css";
const VideoItem = ({ video, onVideoSelect }) => {
  const image = `https://image.tmdb.org/t/p/original${video.poster_path}`;
  return (
    <div onClick={() => onVideoSelect(video)} className="column video-item">
      <img className="ui image" src={image} alt="" />
      <br />
      {/* <div className="content">
        <div className="header">{video.title}</div>
      </div> */}
    </div>
  );
};

export default VideoItem;
