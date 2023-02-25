import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { Link } from "react-router-dom";
import "./Navbar.scss"
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";


const Navbar = () => {
  const [open,setOpen] = useState(false)
  const products = useSelector((state) => state.cart.products);

  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">

          <div className="item">
            <Link className ="link" to="/products/1">SHOP |</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/2">CHECK PLANTS |</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/3">3PAWS CLUB |</Link>
          </div>
          <div className="item">
            <Link className ="link" to="/products/4">OUR PROMISE</Link>
          </div>
        </div>
        <div className="center">
        <img src="img/Logo.png" alt="" width="50" height="60"/>
          <Link className ="link" to="/">Perfect Pet Plant Shoppe</Link>
        </div>
        <div className="right">
          <div className="icons">
            <SearchIcon/>
            <PersonOutlineOutlinedIcon/>
            <FavoriteBorderOutlinedIcon/>
            <div className="cartIcon" onClick={()=>setOpen(!open)}>
              <ShoppingCartOutlinedIcon/>
              <span>{products.length}</span>
            </div>
          </div>
        </div>
      </div>
      {open && <Cart/>}
    </div>
  );
};

export default Navbar;