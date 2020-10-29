import React, { useState, useEffect } from "react";
import VideoItem from "./VideoItem";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";
import "./VideoList.css";
//videos instead of props destructuring props
const VideoList = ({ videos, onVideoSelect }) => {
  let [count, setCount] = useState(0);
  let [counted, setCounted] = useState(31);
  let counts = 0;
  const next = () => {
    console.log("clicked");
    // setCount(counted);
    // setCounted(counted + 31);
    // videos = videos.slice(30, 60);
  };

  const renderedList = videos.map((video) => {
    if (
      video.hasOwnProperty("poster_path") &&
      video.poster_path != null &&
      video.hasOwnProperty("title")
    ) {
      console.log(video);
      while (count <= counted) {
        count++;
        console.log(count);
        return (
          <React.Fragment>
            <VideoItem
              key={video.id}
              onVideoSelect={onVideoSelect}
              video={video}
            />
          </React.Fragment>
        );
      }
    } else {
      counts++;
    }
  });
  console.log(counts);
  return (
    <React.Fragment>
      {renderedList}
      <div class="btn-group grid w-100 adjust" role="group">
        <PrevBtn />
        <NextBtn onClicked={next} />
      </div>
    </React.Fragment>
  );
};

export default VideoList;
