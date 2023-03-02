import React from "react";
import "./Contact.scss";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import PinterestIcon from "@mui/icons-material/Pinterest";
import { IconButton } from '@mui/material';

/// icons with links to social media in the bottom band
const Contact = () => {
  return (
    <div className="contact">
      <div className="wrapper">
        <span>We deliver healthy, happy plants to you and your loved ones.</span>
        <div className="icons">

          <IconButton href="https://www.facebook.com/">
            <FacebookIcon />
          </IconButton>
          <IconButton href="https://www.instagram.com/">
            <InstagramIcon />
          </IconButton>
          <IconButton href="https://twitter.com/">
            <TwitterIcon />
          </IconButton>
          <IconButton href="https://www.google.com/">
            <GoogleIcon />
          </IconButton>
          <IconButton href="https://www.pinterest.com/">
            <PinterestIcon />
          </IconButton>

        </div>
      </div>
    </div>
  );
};

export default Contact;
