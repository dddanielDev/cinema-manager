import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithAuth } from "../base/baseQuery";

export const scheduleApi = createApi({
  reducerPath: "scheduleApi",
  baseQuery: baseQueryWithAuth,
  endpoints: (builder) => ({
    getSchedule: builder.query({
      query: () => "schedule",
    }),
    addSchedule: builder.mutation({
      query: (item) => ({
        url: "schedule",
        method: "POST",
        body: item,
        headers: { "Content-Type": "application/json" },
      }),
    }),
  }),
});

export const { useGetScheduleQuery, useAddScheduleMutation } = scheduleApi;
