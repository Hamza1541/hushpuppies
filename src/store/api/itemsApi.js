import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from '@faker-js/faker';

const itemsApi = createApi({
    reducerPath : 'items',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            additem : builder.mutation({
                query : (id) => {
                    return {
                        url : '/items',
                        method : 'POST',
                        body : {
                            collectionid : id,
                            name : faker.internet.userName(),
                            pic : faker.image.avatar(),
                            pic1 : faker.internet.userName(),
                            price : Math.floor(Math.random() * (10000 - 4500 + 1)) + 1,
                            qty : Math.floor(Math.random() * (5 - 1 + 1)) + 1,

                            

                        }
                    }
                }
            }),
            fetchitems : builder.query({
                query : (id) => {
                    return {
                        url : '/items',
                        method : 'GET',
                        params : {
                            collectionid : id,
                        }
                    }
                }
            })
        }
    }
})
export const {useAdditemMutation, useFetchitemsQuery} = itemsApi;
export {itemsApi};