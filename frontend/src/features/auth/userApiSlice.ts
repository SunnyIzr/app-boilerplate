import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BACKEND_API } from '../../constants/endpoints'

export interface User {
  id: number | null,
  first_name: string | null,
  last_name: string | null,
  email: string | null,
}

export const userApiSlice = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_API,
    prepareHeaders(headers) {
      headers.set('Content-Type', 'application/json')
      return headers
  }
  }),
  endpoints(builder){
    return{
      dashboard: builder.query<User, void> ({
        query(){
          return{
            url: '/dashboard.json',
            method: 'GET',
          }
        }
      })
    }
  }
})

export const { useDashboardQuery } = userApiSlice;