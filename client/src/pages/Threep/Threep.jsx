import React from "react";
import Contact from '../../components/Contact/Contact';
import Slick from "../../components/Slick/Slick";
import "./Threep.scss";


const Threep = () => {
    return (
      <div className="future">
        
        <div>
       Stop by later to see what our future holds
        </div>
        <br></br>
        <div className="newsnote">
        <p className="newsnote">Newsletter and Our customers conversations are coming soon...</p>
        </div>
        <br></br>
        <Slick />
     
        <Contact />
      </div>
    );
  };
  
  export default Threep;
