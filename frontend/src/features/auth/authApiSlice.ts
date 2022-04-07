import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_API } from '../../constants/endpoints'

export interface LoginCredentials {
  email: string,
  password: string,
}

export interface RegistrationCredentials {
  first_name: string,
  last_name: string,
  email: string,
  password: string,
}

export const authApiSlice = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_API,
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json')
      return headers
  }
  }),
  endpoints(builder){
    return{
      login: builder.mutation<any, LoginCredentials> ({
        query(credentials: LoginCredentials){
          return{
            url: '/login',
            method: 'POST',
            body: {user: credentials},
          }
        },
        transformResponse(apiResponse, meta) {
          console.log("$$$$")
          console.log(apiResponse)
          // Filter user object to only what we want
          // So if API changes in future, front end does not crash
          const filteredKeys = ['id', 'first_name', 'last_name', 'email'];
          const filteredResponse = filteredKeys
            .reduce((obj, key) => ({ ...obj, [key]: apiResponse[key] }), {});

          return filteredResponse
        }
      }),
      register: builder.mutation<any, RegistrationCredentials> ({
        query(credentials: RegistrationCredentials){
          return{
            url: '/signup',
            method: 'POST',
            body: {user: credentials},
          }
        },
        transformResponse(apiResponse, meta) {
          // Filter user object to only what we want
          // So if API changes in future, front end does not crash
          const filteredKeys = ['id', 'name', 'email', 'location'];
          const filteredResponse = filteredKeys
            .reduce((obj, key) => ({ ...obj, [key]: apiResponse[key] }), {});

          return filteredResponse
        }
      }),
      logout: builder.mutation<boolean, void>({
        query() {
          return {
            url: `/logout`,
            method: 'DELETE',
          }
        },
      }),
    }
  }
})

export const { useLoginMutation, useRegisterMutation, useLogoutMutation } = authApiSlice;