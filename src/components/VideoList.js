import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";
//videos instead of props destructuring props
const VideoList = ({ videos, onVideoSelect }) => {
  const renderedList = videos.map((video) => {
    if (video.hasOwnProperty("poster_path") && video.poster_path != null) {
      return (
        <VideoItem key={video.id} onVideoSelect={onVideoSelect} video={video} />
      );
    }
  });
  return <div className=" doubling eight column row">{renderedList}</div>;
};

export default VideoList;
