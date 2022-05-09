import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 10;

export const rememberSlice = createSlice({
  name: "remember",
  initialState: { remember: initialStateValue },
  reducers: {
    setRemember: (state) => {
      state.remember = state.remember - 1;
    },
    resetRemember: (state) => {
      state.remember = initialStateValue;
    },
  },
});

export const { setRemember, resetRemember } = rememberSlice.actions;

export default rememberSlice.reducer;
