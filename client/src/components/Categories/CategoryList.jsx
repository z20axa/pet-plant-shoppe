import React, { useState } from "react";
import "./Categories.scss";


export default function CategoryList({plants}){
    return(
        <div className="categories">
        <div className="col">

              {plants.map((plant, index) => (
                <div key ={index}>
                 
                  <div><img src={plant.imageUrl} alt={plant.name}/></div>
                  <div>{plant.name}</div>
                  <div>{plant._price}</div>
                </div>
              ))}       
        </div>   
        </div>
     
    )
}


