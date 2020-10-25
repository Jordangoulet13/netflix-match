import React, { useState } from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelect }) => {
  const [toggle, setToggle] = useState(false);
  const [toggleDelete, setToggleDelete] = useState(true);

  const onMouseHover = (video) => {
    setToggle(true);
    console.log(toggle);
  };

  const mouseOut = () => {
    setToggle(false);
    setToggleDelete(false);
    console.log(toggleDelete);
  };

  const image = `https://image.tmdb.org/t/p/original${video.poster_path}`;
  return (
    <div
      onClick={() => onVideoSelect(video)}
      onMouseOver={() => setToggle(true)}
      onMouseOut={() => setToggle(false)}
      className={toggle ? "container column video-item" : "column video-item"}
    >
      <img className="ui image zoom card-img-top" src={image} alt="" />
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
