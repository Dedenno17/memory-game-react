import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 60;

export const limitSlice = createSlice({
  name: "limit",
  initialState: { limit: initialStateValue },
  reducers: {
    setLimit: (state) => {
      state.limit = state.limit - 1;
    },
    resetLimit: (state) => {
      state.limit = initialStateValue;
    },
  },
});

export const { setLimit, resetLimit } = limitSlice.actions;

export default limitSlice.reducer;
