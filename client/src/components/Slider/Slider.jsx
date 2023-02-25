import React, { useState } from "react";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import "./Slider.scss";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "https://images.squarespace-cdn.com/content/v1/58ae1edf6b8f5b3f0835935a/1633792426568-MA8F8CLBYX7Q1L9NL9OB/IMG_3501.JPG?format=1500w",
    "https://images.pexels.com/photos/12034442/pexels-photo-12034442.jpeg",
    "https://images.pexels.com/photos/6231613/pexels-photo-6231613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    ];

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="slider">
      <div className="container" style={{transform:`translateX(-${currentSlide * 100}vw)`}}>
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
          <WestOutlinedIcon />
        </div>
        <div className="icon" onClick={nextSlide}>
          <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
