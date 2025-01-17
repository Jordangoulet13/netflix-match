import React from "react";
import VideoItem from "./VideoItem";
import "./VideoList.css";
//videos instead of props destructuring props
const VideoList = ({ videos, onVideoSelect }) => {
  let count = 0;
  console.log(videos);
  const renderedList = videos.map((video) => {
    while (count <= 15) {
      count++;

      return (
        <VideoItem key={video.id} onVideoSelect={onVideoSelect} video={video} />
      );
    }
  });

  return <React.Fragment>{renderedList}</React.Fragment>;
};

export default VideoList;
