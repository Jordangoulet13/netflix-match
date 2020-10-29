import React from "react";
import "./NextBtn.css";
//const next = () => {};

const NextBtn = ({ onClicked }) => {
  return (
    <div className="w-100 m-5">
      <button
        type="button"
        class="btn btn-default large-bg white  "
        onClick={() => onClicked()}
      >
        <span class="fas fa-angle-right"></span> Next
      </button>
    </div>
  );
};

export default NextBtn;
