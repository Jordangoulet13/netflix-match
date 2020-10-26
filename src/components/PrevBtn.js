import React from "react";

const PrevBtn = ({ onButtonClick }) => {
  return (
    <div className="w-100 m-5">
      <button
        onClick={() => onButtonClick()}
        type="button"
        class="btn btn-default large-bg white "
      >
        <span class="fas fa-angle-left"></span> Prev
      </button>
    </div>
  );
};

export default PrevBtn;
