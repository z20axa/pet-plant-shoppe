import { createSlice} from "@reduxjs/toolkit";



const initialState = {
  products: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      
      const item = state.products.find(
        (item) => item.plant._id === action.payload.plant._id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else {
        state.products.push(action.payload);
      }
      console.log("STATE ONCE DONE", state);
    },
    removeItem: (state, action) => {
     
      state.products = state.products.filter(
        (item) => item.plant._id !== action.payload
      );
    },
    resetCart: (state) => {
      state.products = [];
    },
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, removeItem, resetCart } = cartSlice.actions;

export default cartSlice.reducer;
