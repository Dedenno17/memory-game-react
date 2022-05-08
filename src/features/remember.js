import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 10;

export const rememberSlice = createSlice({
  name: "remember",
  initialState: { remember: initialStateValue },
  reducers: {
    setRemember: (state) => {
      state.remember = state.remember - 1;
    },
  },
});

export const { setRemember } = rememberSlice.actions;

export default rememberSlice.reducer;
