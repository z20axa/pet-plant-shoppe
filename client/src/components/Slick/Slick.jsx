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
      slidesToShow: 5,
      slidesToScroll: 5
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img src="img/plants-2.jpg" alt="" width="350" height="200"/>
          </div>
          <div>
          <img src="img/catplpant5.jpeg" alt="" width="350" height="200"/>
          </div>
          <div>
          <img src="img/1.PNG" alt="" width="350" height="200"/>
          </div>
          <div>
          <img src="img/4.jpg" alt="" width="350" height="200"/>
          </div>
          <div>
          <img src="img/plants-5.jpg" alt="" width="350" height="200"/>
          </div>
          <div>
          <img src="img/catplants3.jpeg" alt="" width="350" height="200"/>
          </div>
        </Slider>
      </div>
    );
  }
}