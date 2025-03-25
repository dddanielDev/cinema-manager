import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: {
    list: [],
  },
  reducers: {
    addMovie: (state, action) => {
      state.list.push(action.payload);
    },
    setMovies: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { addMovie, setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;
