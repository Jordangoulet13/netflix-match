import React from "react";
import "./NextBtn.css";

const NextBtn = ({ onButtonClick }) => {
  return (
    <div className="w-100 m-5">
      <button
        onClick={() => onButtonClick()}
        type="button"
        class="btn btn-default large-bg white  "
      >
        <span class="fas fa-angle-right"></span> Next
      </button>
    </div>
  );
};

export default NextBtn;
