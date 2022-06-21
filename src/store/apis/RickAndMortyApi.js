import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://rickandmortyapi.com/api",
});

export const rickAndMortyApi = createApi({
  reducerPath: "rickAndMortyApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getRickAndMortyLocations: builder.query({
      query: (pageNumber) => ({
        url: `location?page=${pageNumber}`,
        method: "GET",
      }),
    }),
    getRickAndMortyLocation: builder.query({
      query: (locationId) => ({
        url: `location/${locationId}`,
        method: "GET",
      }),
    }),
    getRickAndMortyCharacter: builder.query({
      query: (characterId) => ({
        url: `character/${characterId}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetRickAndMortyCharacterQuery,
  useGetRickAndMortyLocationQuery,
  useGetRickAndMortyLocationsQuery,
} = rickAndMortyApi;
