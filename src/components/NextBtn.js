import React from "react";
import "./NextBtn.css";
const next = () => {};

const NextBtn = () => {
  return (
    <div className="w-100">
      <button onClick={() => next()} className="btn"></button>
      <button type="button" class="btn btn-default large-bg white ">
        <span class="fas fa-angle-right"></span> Next
      </button>
    </div>
  );
};

export default NextBtn;
