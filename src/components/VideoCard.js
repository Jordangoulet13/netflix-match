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
    if (selectedVideo.poster_path != null) {
      image = `https://image.tmdb.org/t/p/original${selectedVideo.poster_path}`;
    }

    return (
      <div className="" ref={vCard}>
        {cardVisable ? (
          <div>
            <div class="card m-3">
              <img class="card-img-top" src={image} alt="Card image cap" />
              <div class="card-body">
                <h5 class="card-title">{selectedVideo.title}</h5>
                <p class="card-text">{selectedVideo.overview}</p>
                <p class="card-text">
                  <small class="text-muted">
                    Release Date: {selectedVideo.release_date}
                  </small>
                </p>
                <p class="card-text">
                  <small class="text-muted">
                    Rating: {selectedVideo.vote_average}
                  </small>
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

/* <div>
      {cardVisable ? (
        <div
          class="card"
          //   ref={(element) => {
          //     dropdownMenu = element;
          //   }}
          ref={vCard}
        >
          <img class="card-img-top" src="" alt="Card image cap" />
          <div class="card-body">
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      ) : null}
    </div> */

// {menu ? (
//   ) : null}
// </div>

// <div>
// <div class=" ui card" ref={vCard}>
//   <div class="image ">
//     <img src={image} />
//   </div>
//   <div class="content right">
//     <div class="header">{selectedVideo.title}</div>
//     <div class="description">{selectedVideo.overview}</div>
//   </div>
//   <div class="ui two bottom attached buttons">
//     <div class="ui button">
//       <i class="add icon"></i>
//       Queue
//     </div>
//     <div class="ui primary button">
//       <i class="play icon"></i>
//       Watch
//     </div>
//   </div>
// </div>
// <div class="ui popup">
//   <div class="header">User Rating</div>
//   <div class="ui star rating" data-rating="3"></div>
// </div>
// </div>
