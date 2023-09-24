import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const favApi = createApi({
    reducerPath : 'fav',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            addtofav : builder.mutation({
                invalidatesTags : ['newusercame'],
                query : ({item,curentuser}) => {
                   
                    return  {
                        url : '/fav',
                        method : 'POST',
                        body : {
                            userid : curentuser.id,
                           item : item
                         }
                    }
                }
            }),
            fetchfav : builder.query({
                providesTags : ['newusercame'],
                query : (curentuser)=> {
                    return {
                        url : '/fav',
                        method : 'GET',
                        params : {
                            userid : curentuser.id,
                        }
                    }
                }
            })
        }
    }
})

export const {useAddtofavMutation, useFetchfavQuery} = favApi;
export {favApi};