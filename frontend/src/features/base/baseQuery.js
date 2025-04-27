import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Base URL for all API requests
const BASE_URL = "http://localhost:5136/api/";

// Base query without authentication (for login)
export const baseQueryWithoutAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
});

// Base query with authentication for protected endpoints
export const baseQueryWithAuth = fetchBaseQuery({
  baseUrl: BASE_URL,
  prepareHeaders: (headers, { getState }) => {
    // Get token from Redux store
    const token = getState().login?.bearer;

    // If token exists, add authorization header
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }

    return headers;
  },
});
