import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LoginIcon from '@mui/icons-material/Login';
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { IconButton } from "@mui/material";
import Auth from "../../utils/auth";
console.log(Auth.loggedIn());
const Navbar = () => {
  const [open, setOpen] = useState(false);
  const products = useSelector((state) => state.cart.products);

  return (
    (
      <div>
        <div className="logo">
          <img src="/img/Logo.png" alt="" width="50" height="60" />
          <Link className="link" to="/">
            Perfect Pet Plant Shoppe
          </Link>
        </div>
      </div>
    ),
    (
      <div className="navbar">
        <div className="wrapper">
          <div className="logo">
            <img src="/img/Logo.png" alt="" width="50" height="60" />
            <Link className="link" to="/">
              Perfect Pet Plant Shoppe
            </Link>
          </div>
          <div className="left">
            <div className="item">
              <Link className="link" to="/Products">
                SHOP |
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/Checkp">
                CHECK PLANTS |
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/Threep">
                3PAWS CLUB |
              </Link>
            </div>
            <div className="item">
              <Link className="link" to="/ourPro">
                OUR PROMISE
              </Link>
            </div>
          </div>
          {/* <div className="center">
          <img src="/img/Logo.png" alt="" width="50" height="60" />
          <Link className="link" to="/">Perfect Pet Plant Shoppe</Link>
        </div> */}
          <div className="right">
            <div className="icons">
              <IconButton href="/Checkp">
                <SearchIcon />
              </IconButton>
              {Auth.loggedIn() ? (
                <p className="logout" onClick={() => Auth.logout()}>LOGOUT</p>
              ) :(
                <IconButton href="/Signin">
                  < LoginIcon />
                </IconButton>
              )}

              <IconButton href="/Userprofile">
                <PersonOutlineOutlinedIcon />
              </IconButton>
              <div className="cartIcon" onClick={() => setOpen(!open)}>
                <ShoppingCartOutlinedIcon />
                <span>{products.length}</span>
              </div>
            </div>
          </div>
        </div>
        {open && <Cart />}
      </div>
    )
  );
};

export default Navbar;
