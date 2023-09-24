import { createSlice } from "@reduxjs/toolkit";

export const navSlice = createSlice({
    name : 'nav',
    initialState : {
        path : 'home',
        navbar : false,
        a : null,
        signin : false,
    },
    reducers : {
        AddPath(state,action){
            state.path = action.payload;
            window.history.pushState({},'',action.payload);
        },
        showNav(state,action){
            state.navbar = action.payload;
        },
        seta(state,action){
            state.a = action.payload;
        },
        setsignin(state,action){
            state.signin = action.payload;
        },
        setsigninn(state,action){
            state.signin = !state.signin;
        }
    }
})
export const {AddPath,showNav,seta,setsignin, setsigninn} = navSlice.actions;
export const navReducer = navSlice.reducer;