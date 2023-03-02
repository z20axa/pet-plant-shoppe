

import { Link } from "react-router-dom";

import "./Categories.scss";


/// setup for imfo required to be shown by querry
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

                 
                  <div>{plant.name}</div>
                  <div>{plant._price}</div>

                </div>
              ))}       
        </div>   
        </div>
     
    )
}


