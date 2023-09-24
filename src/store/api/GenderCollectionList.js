import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from '@faker-js/faker';

const gendercollectionlistApi = createApi({
    reducerPath : 'gclist',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            addgcollectionlist : builder.mutation({
                query : (id) =>  {
                    return {
                        url : '/lists',
                        method : 'POST',
                        body : {
                            gcid : id,
                            name : faker.internet.userName(),
                            pic : faker.image.avatar(),
                        }
                    }
                }
            }),
            fetchgcollection : builder.query({
                query : (id) => {
                    return {
                        url : '/lists',
                        method : 'GET',
                        params : {
                            gcid : id
                        }

                    }
                }
            }),
            fetchanother : builder.query({
                query : (id) => {
                    return {
                        url : '/lists',
                        method : 'GET',
                        params : {
                            id : id,
                        }
                    }
                }
            }),
            fetchforsearch : builder.query({
                query : () =>{
                    return {
                        url : './lists',
                        method : 'GET',

                    }
                }
            })
        }
    }
})
export const {useAddgcollectionlistMutation , useFetchgcollectionQuery, useFetchanotherQuery,useFetchforsearchQuery} = gendercollectionlistApi;
export {gendercollectionlistApi};