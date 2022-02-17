import React from "react";

import leftArrow from "../image/left-arrow.svg";
import rightArrow from "../image/right-arrow.svg";

export  function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
export default BtnSlider