import { createSlice } from "@reduxjs/toolkit";

const itemsSlice = createSlice({
    name :'items',
    initialState : {
        gcid : null,
        showgcid : false,
        gid : null,

    },
    reducers : {
        Addgcid(state,action){
            state.gcid = action.payload;
        },
        Ashowgcid(state,action){
            state.showgcid = true;
        },
        Addgid(state,action){
            state.gid = action.payload;
        },
    }
})

export const {Addgcid , Ashowgcid,Addgid} =  itemsSlice.actions;
export const itemsReducer = itemsSlice.reducer;