import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const scheduleApi = createApi({
  reducerPath: 'scheduleApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5136/api/' }),
  endpoints: builder => ({
    getSchedule: builder.query({
      query: () => 'schedule',
    }),
    addSchedule: builder.mutation({
      query: item => ({
        url: 'schedule',
        method: 'POST',
        body: item,
        headers: { 'Content-Type': 'application/json' },
      }),
    }),
  }),
});

export const { useGetScheduleQuery, useAddScheduleMutation } = scheduleApi;
