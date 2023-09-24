import { CreateApi,createApi,fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";


const userApi = createApi({
    reducerPath : 'users',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            createUser :  builder.mutation({
                query : ({firstname,lastname,email,password}) =>{
                    return {
                        url : '/users',
                        method : 'POST',
                        body : {
                            name : firstname,
                            lastname : lastname,
                            email : email,
                            password : password,
                            profilepic: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/538.jpg",
                        }
                    }
                }
            }),
            fetchUser : builder.query({
                query : (pass) => {
                    return {
                        url : '/users',
                        method : 'GET',
                        params : {
                            password : pass
                        }
                    }
                }
            })
        }
    }
})
export const {useCreateUserMutation, useFetchUserQuery} = userApi;
export {userApi};