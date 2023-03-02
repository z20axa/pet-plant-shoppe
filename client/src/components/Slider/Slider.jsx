import React, { useState } from "react";
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "img/catplant2.jpeg",
    "img/5.png",
    "img/plants-4.jpg",
  ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">

      <div className="container" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
        <div className="homequote">
          <span>
            EVERYONE NEEDS A <br></br>
            PLANT TO GROW WITH
          </span>
        </div>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
      </div>
      <div className="icons">
        <div className="icon" onClick={prevSlide}>
          <ChevronLeftIcon/>
        </div>
        <div className="icon" onClick={nextSlide}>
          <ChevronRightIcon/>
        </div>
      </div>
    </div>
  );

};

export default Slider;
