import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name :'cart',
    initialState : {
    cart : [],

    },
    reducers : {
        addtocart(state, action) {
            return {
              ...state,
              cart: [...state.cart, action.payload],
            };
          },
          emptyCart(state, action) {
            return {
              ...state,
              cart: [], 
            };
          },
    }
})

export const {addtocart,emptyCart} =  cartSlice.actions;
export const cartReducer = cartSlice.reducer;