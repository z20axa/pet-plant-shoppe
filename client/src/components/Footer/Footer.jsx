import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>SHOP</h1>
          <span>CHECK PLANTS</span>
          <span>3PAWS CLUB</span>
          <span>OUR PROMISE</span>
        </div>

        <div className="item">
          <h1>About US</h1>
          <span>
          We are located in PA, our mission is to inspire green spaces by connecting people with plants. We believe a strong relationship with plants will lead to greener and more sustainable lifestyles. we deliver healthy, happy plants to you and your loved ones.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
          We aim to make plant buying and plant care easy & fun. If you have questions or feedback about an order, plant care, or your experience with Lively Root, here's how to contact us.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
        <img src="img/Logo.png" alt="" width="50" height="60"/>
          <span className="logo">Perfect Pet Plant Shoppe</span>
          <span className="copyright">
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className="right">
        </div>
      </div>
    </div>
  );
};

export default Footer;
