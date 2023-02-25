import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      autoplay:true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src="img/plants-5.jpg" alt="" width="400" height="200"/>
          </div>
          <div>
          <img src="img/plants-5.jpg" alt="" width="400" height="200"/>
          </div>
          <div>
          <img src="img/plants-5.jpg" alt="" width="400" height="200"/>
          </div>
          <div>
          <img src="img/Logo.png" alt="" width="250" height="170"/>
          </div>
          <div>
          <img src="img/Logo.png" alt="" width="250" height="170"/>
          </div>
          <div>
          <img src="img/Logo.png" alt="" width="250" height="170"/>
          </div>
        </Slider>
      </div>
    );
  }
}