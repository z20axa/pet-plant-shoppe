import React, { useState } from "react";


export default function productData({plant}){
    return(
        <div className="categories">
        <div className="col">
          
            
              {plants.map((plant, index) => (
                <div key ={index}>
                  <div>{plant.name}</div>
                  <div><img src={plant.imageUrl} alt={plant.name}/></div>
                  <div>{plant._id}</div>
                </div>
              ))}
          
  
            
          
        </div>
        
       
        </div>
     
    )
}