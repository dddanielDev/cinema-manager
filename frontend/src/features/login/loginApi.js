import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setToken } from "./loginSlice";

export const loginApi = createApi({
  reducerPath: "loginApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5136/api/" }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (pin) => `Login?pin=${pin}`,
      onQueryStarted: async (_, { dispatch, queryFulfilled }) => {
        try {
          const { data } = await queryFulfilled;
          // Pass the data object directly to match the slice's expectations
          if (data && data.bearer) {
            dispatch(setToken({ bearer: data.bearer }));
          }
        } catch (error) {
          console.error("Login failed:", error);
        }
      },
    }),
  }),
});

export const { useLoginMutation } = loginApi;
