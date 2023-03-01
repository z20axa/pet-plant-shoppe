import React from "react";
import "./Footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h2><Link style={{ textDecoration: 'none', color: 'white' }} to="/">
            Home
          </Link>
          </h2>
          <span><Link style={{ textDecoration: 'none' }} to="/Products">
          SHOP
          </Link></span>
          <span><Link style={{ textDecoration: 'none' }} to="/Checkp">
          CHECK PLANTS
          </Link></span>
          <span><Link style={{ textDecoration: 'none' }} to="/threepawsClub">
          3PAWS CLUB
          </Link></span>
          <span><Link style={{ textDecoration: 'none' }} to="/Ourpro">
          OUR PROMISE
          </Link></span>
        </div>
        <div className="item">
          <h2>Social Media</h2>
          <span><Link style={{ textDecoration: 'none'}} to="https://www.facebook.com/">
          Facebook
          </Link></span>
          <span><Link style={{ textDecoration: 'none'}} to="https://www.instagram.com/">
          Instagram
          </Link></span>
          <span><Link style={{ textDecoration: 'none'}} to="https://twitter.com/">
          Twitter
          </Link></span>
          <span><Link style={{ textDecoration: 'none'}} to="https://www.google.com/">
          Google
          </Link></span>
          <span><Link style={{ textDecoration: 'none'}} to="https://www.pinterest.com/">
          Pinterest
          </Link></span>
        </div>
        <div className="item">
          <h2>Open Hours</h2>
          <span>
            Monday - Friday: 8:00 AM- 5:00 PM<br></br>
            Saturday - Sunday: Closed
          </span>
        </div>
        <div className="item">
          <h2>Contact us</h2>
          <span>
            Phone: 123-456-7890<br></br>
            Email: hello@reallygreatsite.com<br></br>
            Address: 123 Anywhere St.Any City PA 12345
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="center">
          <img src="img/Logo.png" alt="" width="40" height="50" />
          <span className="logo">Perfect Pet Plant Shoppe</span>
          <span className="copyright">
            © Copyright 2023. Made by group three, All Rights Reserved
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
