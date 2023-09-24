import { createSlice } from "@reduxjs/toolkit";

const searchSlice =  createSlice({
    name : 'search',
    initialState :  {
        isearch : false,
        searchterm : null,
    },
    reducers : {
        setissearch(state,action){
            state.isearch =  action.payload
        },
        setsearchterm(state,action){
            state.searchterm = action.payload;
        }
    }
})

export const { setissearch, setsearchterm} = searchSlice.actions;
export const searchReducer = searchSlice.reducer;