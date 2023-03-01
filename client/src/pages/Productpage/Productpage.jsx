import React from "react";
import { useState } from "react";
import "./Productpage.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_PLANT } from "../../utils/queries";
import { ADD_FAV } from "../../utils/mutations";

const Productpage = () => {
  const id = useParams().id;

  const [quantity, setQuantity] = useState(1);
  const { data, loading } = useQuery(FIND_PLANT, {
    variables: { plantId: id },
  });
  const [addFav, {error}] = useMutation(ADD_FAV)

  const plantInfo = data?.plant || {};

  const dispatch = useDispatch();
function addingToFave(){
  addFav({variables: {plantId : plantInfo._id }})
  console.log("adding")
}
  console.log(plantInfo);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div className="plantCard">
            <h1>{plantInfo.name}</h1>
           <div classname="desc"> <h1>{plantInfo.description}</h1>
            <h2>{plantInfo.careLevel}</h2>
            <h2>{plantInfo.light}</h2>
            <h2>{plantInfo.price}</h2></div>
            <div>
              <img src={plantInfo.imageUrl} alt={plantInfo.name} className="cardImage" />
            </div>
          </div>
          <div>
            <button
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
            onClick={() => dispatch(addToCart({ plant: plantInfo, quantity }))}
          >
            <AddShoppingCartIcon /> ADD TO CART
          </button>
          <div className="links">
            <div className="item" onClick={()=> addingToFave()}>
              <FavoriteBorderIcon /> ADD TO FAVORITES
            </div>

            <button>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Productpage;
