import React, { useEffect, useState } from "react";
import "./App.css";
import themoviedb from "../apis/themoviedb";
import VideoList from "./VideoList";
import NavBar from "./NavBar";
import VideoCard from "./VideoCard";
import PrevBtn from "./PrevBtn";
import NextBtn from "./NextBtn";

document.body.style = "background: black;";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [counter, setCounter] = useState(2);
  const [term, setTerm] = useState("");

  const onTermSubmit = async (term, counter) => {
    const response = await themoviedb.get("/search/multi", {
      params: {
        query: term,
        language: "en-US",
        page: counter,
      },
    });
    setTerm(term);
    setVideos(response.data.results);
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video);
  };

  const onNext = () => {
    setCounter(counter + 1);
    const response = onTermSubmit(term, counter);
    console.log(response);
    console.log(counter);
  };

  const onPrev = () => {
    setCounter(counter - 1);
    onTermSubmit(term, counter);
    console.log(counter);
  };

  return (
    <div>
      <div className="ui container ">
        <NavBar onFormSubmit={onTermSubmit} />
        <VideoCard selectedVideo={selectedVideo} />
        <div className="ui grid doubling eight column row mt-5 mb-2">
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
        <div class="btn-group grid w-100 adjust" role="group">
          <PrevBtn onButtonClick={onPrev} />
          <NextBtn onButtonClick={onNext} />
        </div>
      </div>
    </div>
  );
};

export default App;
