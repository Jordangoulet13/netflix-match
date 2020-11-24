import React, { useState, useRef, useEffect } from "react";
import "./VideoCard.css";
import altPic from "./img/alt-image.png";

const VideoCard = ({ selectedVideo }) => {
  const [cardVisable, setCardVisable] = useState(false);
  let vCard = useRef(null);

  const showCard = () => {
    setCardVisable(true);
    document.addEventListener("click", closeCard);
  };

  const closeCard = (event) => {
    if (vCard !== event.target) {
      setCardVisable(false);
      document.removeEventListener("click", closeCard);
    }
  };

  useEffect(() => {
    showCard();
  }, [selectedVideo]);

  if (!selectedVideo) {
    return <div className="move"></div>;
  } else {
    let image = altPic;
    let title = "N/A";
    let overview = "N/A";
    let release_date = "N/A";
    let vote_average = "N/A";
    if (selectedVideo.poster_path != null) {
      image = `https://image.tmdb.org/t/p/original${selectedVideo.poster_path}`;
    }
    if (selectedVideo.release_date != null) {
      release_date = selectedVideo.release_date;
    }
    if (selectedVideo.vote_average != null) {
      vote_average = selectedVideo.vote_average;
    }
    if (selectedVideo.title != null) {
      title = selectedVideo.title;
    }
    if (selectedVideo.overview != null) {
      overview = selectedVideo.overview;
    }

    return (
      <div className="" ref={vCard}>
        {cardVisable ? (
          <div>
            <div class="card m-3">
              <img class="card-img-top" src={image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{overview}</p>
                <p class="card-text">
                  <small class="text-muted">
                    Release Date: {release_date} {"    "}
                  </small>
                  <small class="text-muted">Rating: {vote_average}</small>
                </p>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
};
export default VideoCard;
