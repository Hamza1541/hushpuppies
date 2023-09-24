import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { navReducer, AddPath,showNav,seta,setsignin, setsigninn } from './slices/navslice';
import { itemsReducer, Addgcid , Ashowgcid,Addgid} from "./slices/itemSlice";
import { userApi } from "./api/usersApi";
import { favApi } from "./api/favApi";
import {usersReducer,currentuser,iscurentuser,skhamkha} from "./slices/userSlice";
import { cartReducer, addtocart,emptyCart } from "./slices/cartslice";
import { searchReducer,setissearch,setsearchterm } from "./slices/searchslice";

import { genderApi } from "./api/GenderApi";
import {genderCollectionApi} from "./api/GenderCollectionApi";
import {gendercollectionlistApi} from "./api/GenderCollectionList";
import { itemsApi } from "./api/itemsApi";

export const store = configureStore({
    reducer : {
        gender : genderApi.reducer,
        gcollection : genderCollectionApi.reducer,
        gclist : gendercollectionlistApi.reducer,
        items : itemsApi.reducer,
        navbar : navReducer,
        itemsl : itemsReducer,
        users : userApi.reducer,
        userss : usersReducer,
        fav : favApi.reducer,
        cart : cartReducer,
        search : searchReducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(genderApi.middleware,genderCollectionApi.middleware,
            gendercollectionlistApi.middleware,itemsApi.middleware,userApi.middleware,favApi.middleware);
      },
})
setupListeners(store.dispatch);
export {useCreateUserMutation, useFetchUserQuery} from './api/usersApi';
export { useFetchGenderQuery,useFetchGidQuery } from './api/GenderApi';
export {useAddgCollectionMutation , useFetchCollectionQuery,useFetchgcQuery} from './api/GenderCollectionApi';
export {useAddgcollectionlistMutation , useFetchgcollectionQuery , useFetchanotherQuery,useFetchforsearchQuery } from './api/GenderCollectionList';
export {useAdditemMutation, useFetchitemsQuery } from './api/itemsApi';
export {useAddtofavMutation,  useFetchfavQuery} from "./api/favApi";
export {AddPath,Addgcid,Ashowgcid,Addgid,showNav,seta,setsignin, setsigninn,currentuser,
    iscurentuser,skhamkha, addtocart,emptyCart,setissearch,setsearchterm};
