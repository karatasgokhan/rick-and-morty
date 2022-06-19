import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rickandmortyapi.com/api",
});

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRickAndMortyLocation: builder.query({
      query: () => ({
        url: "/location",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetRickAndMortyLocationQuery } = rickAndMortyApi;
