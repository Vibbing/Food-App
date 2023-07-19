import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
},
reducers: {
    addItem: (state, action) => {
        state.items.push(action.payload)     // in this the state represents the initial state and action.payload means that we are sending the data to the redux store to its specified slice 
    },
    removeItem : (state,action) => {
        state.items.pop()
    },
    clearCart : (state) => {
        state.items = []
    }
},
});

export const { addItem, removeItem, clearCart} = cartSlice.actions;  // we call it as actions in here but in the slice we are using action

export default cartSlice.reducer;  // it will combine all the reducers in the slice and export it all in one name called reducer, u can see that its called reducers and we are exporting reducer
