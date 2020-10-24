import React, { useState } from "react";
import "./App.css";
//import SearchBar from "./SearchBar";
import themoviedb from "../apis/themoviedb";
import VideoList from "./VideoList";
import NavBar from "./NavBar";
document.body.style = "background: black;";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  // class App extends React.Component {
  //   state = { videos: [], selectedVideo: null };

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
    console.log(term);
    // const response = await themoviedb.get("/search/multi", {
    //   params: {
    //     query: term,
    //     language: "en-US",
    //     page: 1,
    //   }
    // });
    const promiseResponse = callPagesLoop(term);
    promiseResponse.then((result) => {
      console.log(result);
      console.log();
      // let response = [];
      // for (let i = 0; i <= result.length; i++) {
      //   console.log(...[i].data.results);
      //   const a = [...result[i].data.results];
      //   response.push(...a);
      //   //console.log(a);
      //   console.log(response);
      // }
      // const response = [];
      // for (let i = 0; i <= result.length; i++) {
      //   response.push(...result.data.results);
      // }

      const response = [
        ...result[0].data.results,
        ...result[1].data.results,
        ...result[2].data.results,
      ];
      console.log(response);
      // console.log(response);
      // this.setState({
      setVideos(response);
      // videos: response,
      //selectedVideo: response.ITEMS,
      //});
    });
  };

  const onVideoSelect = (video) => {
    //this.setState({ selectedVideo: video });
    setSelectedVideo(video);
  };

  return (
    <div className="back">
      <div className="ui container ">
        <NavBar onFormSubmit={onTermSubmit} />

        <div className="ui grid img-fit">
          <VideoList onVideoSelect={onVideoSelect} videos={videos} />
        </div>
      </div>
    </div>
  );
};

export default App;
