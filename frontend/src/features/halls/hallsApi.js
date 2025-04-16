import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../base/baseQuery";

export const hallsApi = createApi({
  reducerPath: "hallsApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getHalls: builder.query({
      query: () => "cinemahalls",
    }),
    addHall: builder.mutation({
      query: (newHall) => ({
        url: "cinemahalls",
        method: "POST",
        body: newHall,
        headers: {
          "Content-Type": "application/json",
        },
      }),
    }),
  }),
});

export const { useGetHallsQuery, useAddHallMutation } = hallsApi;
