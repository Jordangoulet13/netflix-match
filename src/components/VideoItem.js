import React, { useState, useEffect } from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const [toggle, setToggle] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => {
        const ismobile = window.innerWidth < 1200;
        if (ismobile !== isMobile) setIsMobile(ismobile);
      },
      false
    );
  }, [isMobile]);

  const image = `https://image.tmdb.org/t/p/original${video.poster_path}`;
  return (
    <div
      onClick={() => onVideoSelect(video)}
      onMouseOver={() => setToggle(true)}
      onMouseOut={() => setToggle(false)}
      className={toggle ? "container column video-item" : "column video-item"}
    >
      <img
        className={isMobile ? "ui image pad " : "ui image zoom pad  "}
        src={image}
        alt=""
      />
      {toggle ? <p class="card-body text-block">{video.title}</p> : <div></div>}
    </div>
  );
};

export default VideoItem;

//   /* <p class="card-text">{video.overview}</p> */
//   <a href="#" class="btn btn-primary">
//   Go somewhere
// </a>

{
  /* <div class="card" style="width: 18rem;">
  <img class="card-img-top" src="..." alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div> */
}
