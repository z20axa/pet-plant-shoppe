import React, { useEffect } from "react";
import "./Cart.scss";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";
import { useLazyQuery } from "@apollo/client";
import { QUERY_CHECKOUT } from "../../utils/queries";
import { useSelector } from "react-redux";
import { removeItem, resetCart } from "../../redux/cartReducer";
import { useDispatch } from "react-redux";
import { makeRequest } from "../../makeRequest";
import { loadStripe } from "@stripe/stripe-js";
import auth from "../../utils/auth";

const Cart = () => {
  const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");
  const products = useSelector((state) => state.cart.products);
  const dispatch = useDispatch();
  const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);
  //
  console.log("AM I LOGGED IN???", auth.loggedIn())

  useEffect(() => {
    if (data) {
      stripePromise.then((res) => {
        res.redirectToCheckout({ sessionId: data.checkout.session });
      });
    }
  }, [data]);

  //

  const totalPrice = () => {
    let total = 0;
    products.forEach((item) => {
      total += item.quantity * item.plant.price;
    });
    return total.toFixed(2);
  };

  // const stripePromise = loadStripe(
  //   "pk_test_eOTMlr8usx1ctymXqrik0ls700lQCsX2UB"
  // );
  const handlePayment = async () => {
    // try {
    //   const stripe = await stripePromise;
    //   const res = await makeRequest.post("/orders", {
    //     products,
    //   });
    //   await stripe.redirectToCheckout({
    //     sessionId: res.data.stripeSession.id,
    //   });
    // } catch (err) {
    //   console.log(err);
    // }
    const productIds = [];
    products.forEach((item) => {
      console.log(item);
      for (let i = 0; i < item.quantity; i++) {
        productIds.push(item.plant._id);
      }
    });
    console.log(productIds);
    getCheckout({
      variables: { plants: productIds },
    });
  };
  return (
    <div className="cart">

      <h1>Plants in your cart</h1>
      {products?.map((item) => (
        <div className="item" key={item.plant._id}>
          <img src={item.plant.imageUrl} alt="" />
          <div className="details">
            <h1>{item.plant.name}</h1>
            <div className="price">
              {item.quantity} x ${item.plant.price}
            </div>
          </div>
          <DeleteOutlinedIcon
            className="delete"
            onClick={() => dispatch(removeItem(item.id))}
          />
        </div>
      ))}
      <div className="total">
        <span>TOTAL</span>
        <span>${totalPrice()}</span>
      </div>

      {auth.loggedIn() ? <button onClick={handlePayment}>PROCEED TO CHECKOUT</button> : <h1>PLEASE LOGIN TO CHECKOUT</h1>}
      <span className="reset" onClick={() => dispatch(resetCart())}>
        Reset Cart
      </span>
    </div>
  );
};

export default Cart;
