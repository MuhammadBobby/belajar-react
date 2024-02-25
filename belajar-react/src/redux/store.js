import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

console.log("onCreate Store", store.getState());

store.subscribe(() => {
  console.log("state changed", store.getState());
});

export default store;
