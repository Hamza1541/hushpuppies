import {  createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { faker } from '@faker-js/faker';

const genderCollectionApi = createApi({
    reducerPath: 'gcollection',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            addgCollection : builder.mutation({
                query : (id) => {
                    return {
                        url : '/gcollection',
                        method : 'POST',
                        body : {
                            gid : id,
                            name : faker.internet.userName(),
                            pic : faker.image.avatar(),
                            

                        }
                    }
                }
            }),
            fetchCollection : builder.query({
                query : (a) => {
                    return {
                        url : '/gcollection',
                        method : 'GET',
                        params : {
                            gid : a
                        }
                    }
                }
            }),
            fetchgc : builder.query({
                query : (gcid) => {
                    return {
                        url : '/gcollection',
                        method : 'GET',
                        params : {
                            id : gcid
                        }
                    }
                }
            })
        }
    }
})
export const {useAddgCollectionMutation , useFetchCollectionQuery, useFetchgcQuery} = genderCollectionApi;
export {genderCollectionApi};