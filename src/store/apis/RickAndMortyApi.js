import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rickandmortyapi.com/api",
});

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRickAndMortyLocation: builder.query({
      query: (pageNumber) => ({
        url: `location?page=${pageNumber}`,
        method: "GET",
      }),
    }),
    getRickAndMortyLocationResidants: builder.query({
      query: (number) => ({
        url: `location/${number}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRickAndMortyLocationQuery,
  useGetRickAndMortyLocationResidantsQuery,
} = rickAndMortyApi;
