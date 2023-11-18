
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

  export const TopChartsApi = createApi({
    reducerPath: "TopChartsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/charts',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', '74a4bcc708mshbe6e431cd26a545p1b99d4jsn4fcf03461d22')
        return headers
        },
    }),
    endpoints: (builder) => ({
      getTopCharts: builder.query({ query: () => '/track'})
    })
  })

  export const {
    useGetTopChartsQuery,
  } = TopChartsApi