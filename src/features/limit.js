import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 60;

export const limitSlice = createSlice({
  name: "limit",
  initialState: { limit: initialStateValue },
  reducers: {
    setLimit: (state) => {
      state.limit = state.limit - 1;
    },
  },
});

export const { setLimit } = limitSlice.actions;

export default limitSlice.reducer;
