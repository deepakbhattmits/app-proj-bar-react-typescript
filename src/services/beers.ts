// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const beerApi = createApi({
  reducerPath: "beerApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.punkapi.com/v2/" }),
  endpoints: (builder: any) => ({
    getAllBeers: builder.query({
      query: () => "beers",
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetAllBeersQuery } = beerApi;
