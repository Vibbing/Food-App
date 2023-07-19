import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";

const store = configureStore({
    reducer: {                 // in this we have exported the cart slice and we have added the slices all reducers into the store and for that we have used reducer which is an object which takes the cart name as a key and the imported name as the value
        cart: cartSlice
    }
})

export default store;

