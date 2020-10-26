import React from "react";

const next = () => {};

const PrevBtn = () => {
  return (
    <div className="w-100 m-5">
      <button onClick={() => next()} className="btn"></button>
      <button type="button" class="btn btn-default large-bg white ">
        <span class="fas fa-angle-left"></span> Prev
      </button>
    </div>
  );
};

export default PrevBtn;
