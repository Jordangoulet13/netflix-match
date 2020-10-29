import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import "./VideoList.css";
//videos instead of props destructuring props
const VideoList = ({ videos, onVideoSelect }) => {
  let [count, setCount] = useState(0);
  let [counted, setCounted] = useState(31);
  const next = () => {
    setCount(counted);
    setCounted(counted + 31);
    videos.slice(5, 30);
    console.log(videos);
  };

  const renderedList = videos.map((video) => {
    if (
      video.hasOwnProperty("poster_path") &&
      video.poster_path != null &&
      video.hasOwnProperty("title")
    ) {
      //console.log(video);
      // while (count <= counted) {
      //   count++;
      //   console.log(count);
      return (
        <React.Fragment>
          <VideoItem
            key={video.id}
            onVideoSelect={onVideoSelect}
            video={video}
          />
        </React.Fragment>
      );
      // }
    }
  });

  return (
    <React.Fragment>
      {renderedList}
      <div class="btn-group grid w-100 adjust" role="group">
        <PrevBtn />
        <NextBtn onNextClick={next} />
      </div>
    </React.Fragment>
  );
};

export default VideoList;
