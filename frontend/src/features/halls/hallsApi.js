import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const hallsApi = createApi({
  reducerPath: 'hallsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5136/api/' }),
  endpoints: builder => ({
    getHalls: builder.query({
      query: () => 'cinemahalls',
    }),
    addHall: builder.mutation({
      query: newHall => ({
        url: 'cinemahalls',
        method: 'POST',
        body: newHall,
        headers: {
          'Content-Type': 'application/json',
        },
      }),
    }),
  }),
});

export const { useGetHallsQuery, useAddHallMutation } = hallsApi;
