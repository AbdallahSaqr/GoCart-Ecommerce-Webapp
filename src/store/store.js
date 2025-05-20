import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "../slices/cart";

const store = configureStore({
  reducer: {  
    cart: cartreducer,
  }
});

export default store;