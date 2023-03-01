import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./Categories.scss";



export default function CategoryList({plants}){
    return(
        <div className="categories">
        <div className="col">

              {plants.map((plant, index) => (
                <div key ={index}>
                 <Link
                 to={`/Productpage/${plant._id}`}>
                  <div><img src={plant.imageUrl} alt={plant.name}/></div>
                  </Link>

                  {/* <div>{plant._id}</div> */}
                  {/* <Link
                  className ="text-light"
                  to={`/plants/${plant._id}`}>
                       <div>
            <h1>{plantInfo.name}</h1>
            <h1>{plantInfo.description}</h1>
            <h1>{plantInfo.careLevel}</h1>
            <h1>{plantInfo.light}</h1>
            <h1>{plantInfo.price}</h1>
            <div>
              <img src={plantInfo.imageUrl} alt={plant.name} />
            </div>
          </div>
                  </Link> */}
                  
                 

                

                  <div>{plant.name}</div>
                  <div>{plant._price}</div>

                </div>
              ))}       
        </div>   
        </div>
     
    )
}


