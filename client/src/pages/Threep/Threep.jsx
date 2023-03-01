import React from "react";
import Contact from '../../components/Contact/Contact';
import Slick from "../../components/Slick/Slick";
import Gallery from "../../components/gallery/gallery";
import "./Threep.scss";


const Threep = () => {
    return (
      <div className="future">
        
        <div>
       Stop by later to see what our future holds
        </div>
        <br></br>
        <div>Newsletter and Our customers conversations are coming soon...</div>     
        <br></br>
        <Gallery/>
        <Contact />
        <Slick />
      </div>
    );
  };
  
  export default Threep;
