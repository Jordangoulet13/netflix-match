import React, { useState } from "react";
import "./App.css";
//import SearchBar from "./SearchBar";
import themoviedb from "../apis/themoviedb";
import VideoList from "./VideoList";
import NavBar from "./NavBar";
import VideoCard from "./VideoCard";
import NextBtn from "./NextBtn";
import PrevBtn from "./PrevBtn";
document.body.style = "background: black;";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const callPagesLoop = async (term) => {
    let counter = 1;
    const response = [];
    while (counter <= 3) {
      response.push(
        await themoviedb.get("/search/multi", {
          params: {
            query: term,
            language: "en-US",
            page: counter,
          },
        })
      );
      counter++;
    }
    return response;
  };

  const onTermSubmit = async (term) => {
    const promiseResponse = callPagesLoop(term);
    promiseResponse.then((result) => {
      const response = [
        ...result[0].data.results,
        ...result[1].data.results,
        ...result[2].data.results,
      ];

      setVideos(response);
    });
  };

  const onVideoSelect = (video) => {
    setSelectedVideo(video);
    console.log(video);
  };

  return (
    <div>
      <VideoCard selectedVideo={selectedVideo} />

      <div className="ui container ">
        <NavBar onFormSubmit={onTermSubmit} />
        <div className="ui grid doubling eight column row mt-5 mb-2">
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
        <div class="btn-group grid w-100 adjust" role="group">
          <PrevBtn />
          <NextBtn />
        </div>
      </div>
    </div>
  );
};

export default App;
