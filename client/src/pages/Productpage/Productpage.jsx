import React from "react";
import { useState } from "react";
import "./Productpage.scss";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartReducer";
import { useQuery, useMutation } from "@apollo/client";
import { FIND_PLANT } from "../../utils/queries";
import { ADD_FAV } from "../../utils/mutations";

import auth from "../../utils/auth";
console.log(auth.loggedIn());

const Productpage = () => {
  const [buttonText, setButtonText] = useState("Add To Favorite");
  const id = useParams().id;

  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { data, loading } = useQuery(FIND_PLANT, {
    variables: { plantId: id },
  });
  const [addFav, { error }] = useMutation(ADD_FAV)

  const plantInfo = data?.plant || {};

  const dispatch = useDispatch();

  async function addingToFave() {
    console.log("adding")
    console.log(auth.loggedIn())
    if (auth.loggedIn()) {
      setButtonText("Adding")
      await addFav({ variables: { plantId: plantInfo._id } })
      setButtonText("Added")
    }

    else {
      navigate("/Signin");
    }

  }

  // function addingToTheCart(){
  //   if(!Auth.loggedIn) 

  //   else

  //   dispatch(addToCart({ plant: plantInfo, quantity }))
  // }
  console.log(plantInfo);
  return (
    <div>

      {loading ? (
        <h1>Loading...</h1>
      ) : (

        <div className="container">
          <div >
            <img src={plantInfo.imageUrl} alt={plantInfo.name} className="cardImage" />
          </div>
          <div className="plantCard">
            <h1>{plantInfo.name}</h1>
            <div className="desc"><br></br>
              <h2>{plantInfo.description}</h2><br></br><br></br>
              <h2>Care level :<b> {plantInfo.careLevel}</b></h2>
              <h2>Safe for : <b>{plantInfo.animalSafe}</b></h2>
              <h2>Light Required : <b>{plantInfo.light}</b></h2>
              <h3>price : ${plantInfo.price}</h3></div>
          </div>

          <div className="plus-minus-container">
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
            <div className="itemto">

              <FavoriteBorderIcon />
              <button
                type="itemto"
                onClick={() => {
                  addingToFave()
                  // setButtonText("Added");
                  // setTimeout(() => {
                  //   setButtonText("Add To Favorite");
                  // }, 1000);
                }}>
                {error}
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
