import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    bearer: null,
  },
  reducers: {
    setToken: (state, action) => {
      state.bearer = action.payload.bearer;
    },
    clearToken: (state) => {
      state.bearer = null;
    },
  },
});

export const { clearToken, setToken } = loginSlice.actions;
export default loginSlice.reducer;
