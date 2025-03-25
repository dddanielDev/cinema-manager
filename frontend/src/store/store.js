import { configureStore } from '@reduxjs/toolkit';
import { moviesApi } from '../features/movies/moviesApi';
import moviesReducer from '../features/movies/moviesSlice';
import { hallsApi } from '../features/halls/hallsApi';
import { scheduleApi } from '../features/schedule/scheduleApi';

export const store = configureStore({
  reducer: {
    movies: moviesReducer,
    [moviesApi.reducerPath]: moviesApi.reducer,
    [hallsApi.reducerPath]: hallsApi.reducer,
    [scheduleApi.reducerPath]: scheduleApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware()
      .concat(moviesApi.middleware)
      .concat(hallsApi.middleware)
      .concat(scheduleApi.middleware),
});
