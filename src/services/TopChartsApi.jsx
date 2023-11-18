
import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'


  export const TopChartsApi = createApi({
    reducerPath: "TopChartsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam.p.rapidapi.com/charts',
        prepareHeaders: (headers) => {
          headers.set('X-RapidAPI-Key', import.meta.env.VITE_API_KEY)
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