import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../base/baseQuery";

export const moviesApi = createApi({
  reducerPath: "moviesApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getMovies: builder.query({
      query: () => "movies",
    }),
    addMovie: builder.mutation({
      query: (newMovie) => ({
        url: "movies",
        method: "POST",
        body: newMovie,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetMoviesQuery, useAddMovieMutation } = moviesApi;
