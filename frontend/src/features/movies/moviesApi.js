import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5136/api/' }),
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => 'movies',
    }),
    addMovie: builder.mutation({
      query: (newMovie) => ({
        url: 'movies',
        method: 'POST',
        body: newMovie,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useAddMovieMutation } = moviesApi;