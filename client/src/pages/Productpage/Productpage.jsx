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
  const [buttonText, setButtonText] = useState("Add To Favorite");
  const id = useParams().id;

  const [quantity, setQuantity] = useState(1);
  const { data, loading } = useQuery(FIND_PLANT, {
    variables: { plantId: id },
  });
  const [addFav, { error }] = useMutation(ADD_FAV)

  const plantInfo = data?.plant || {};

  const dispatch = useDispatch();
  function addingToFave() {
    addFav({ variables: { plantId: plantInfo._id } })
    console.log("adding")
  }
  console.log(plantInfo);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (

        <div classname="container">
          <div >
            <img src={plantInfo.imageUrl} alt={plantInfo.name} className="cardImage" />
          </div>
          <div className="plantCard">
            <h1>{plantInfo.name}</h1>
            <div classname="desc">
              <h2>{plantInfo.description}</h2>
              <h2>care level : {plantInfo.careLevel}</h2>
              <h3>price : ${plantInfo.price}</h3></div>
          </div>

          <div classname="container">
            <button className="plantc"
              onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
            >
              -
            </button>
            {quantity}
            <button className="plantc" onClick={() => setQuantity((prev) => prev + 1)}>+</button>
          </div>
          <button
            className="add"
            onClick={() => dispatch(addToCart({ plant: plantInfo, quantity }))}
          >
            <AddShoppingCartIcon />
            ADD TO CART
          </button>
          <div className="linked">
            <div className="itemto" onClick={() => addingToFave()}>

              <FavoriteBorderIcon />
              <button
                type="itemto"
                onClick={() => {
                  setButtonText("Added");
                  setTimeout(() => {
                    setButtonText("Add To Favorite");
                  }, 1000);
                }}>
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

  );
};
export default Productpage;
