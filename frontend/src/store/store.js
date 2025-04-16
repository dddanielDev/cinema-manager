import { configureStore } from "@reduxjs/toolkit";
import { moviesApi } from "../features/movies/moviesApi";
import moviesReducer from "../features/movies/moviesSlice";
import loginReducer from "../features/login/loginSlice";
import { hallsApi } from "../features/halls/hallsApi";
import { scheduleApi } from "../features/schedule/scheduleApi";
import { loginApi } from "../features/login/loginApi";
import { availableFeaturesApi } from "../features/availableFeatures/availableFeaturesApi";

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    login: loginReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [hallsApi.reducerPath]: hallsApi.reducer,
    [scheduleApi.reducerPath]: scheduleApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer,
    [availableFeaturesApi.reducerPath]: availableFeaturesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(loginApi.middleware)
      .concat(availableFeaturesApi.middleware)
      .concat(moviesApi.middleware)
      .concat(hallsApi.middleware)
      .concat(scheduleApi.middleware),
});
