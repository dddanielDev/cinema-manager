import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../base/baseQuery";

export const availableFeaturesApi = createApi({
  reducerPath: "availableFeaturesApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getAvailableFeatures: builder.query({
      query: () => "AvailableFeatures",
    }),
  }),
});

export const { useGetAvailableFeaturesQuery } = availableFeaturesApi;
