import { createApi , fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";

const genderApi = createApi({
    reducerPath : 'gender',
    baseQuery : fetchBaseQuery({
        baseUrl : 'http://localhost:3007',
    }),
    endpoints(builder){
        return {
            fetchGender : builder.query({
                query : () => {
                    return {
                        url : '/gender',
                        method : 'GET'
                    }
                    
                }
            }),
            fetchGid : builder.query({
                query : (gid) => {
                    return {
                        url : '/gender',
                        method : 'GET',
                        params : {
                            id: gid
                        }
                    }
                }
            })
        }
    }
})
export const {useFetchGenderQuery,useFetchGidQuery } = genderApi;
export {genderApi};