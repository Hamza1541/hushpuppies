import { createSlice } from "@reduxjs/toolkit";

const userSlice  = createSlice({
    name :'userss',
    initialState : {
       currentuser : null,
       iscurentuser : false,
       khamkha : false,


    },
    reducers : {
        currentuser(state,action){
            state.currentuser = action.payload;
        },
        iscurentuser(state,action){
            state.iscurentuser = action.payload;
        },

        skhamkha(state,action){
            state.khamkha = action.payload;
        }
    }
})

export const {currentuser,iscurentuser , skhamkha} =  userSlice.actions;
export const usersReducer = userSlice.reducer;