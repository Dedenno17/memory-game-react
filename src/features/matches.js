import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const mathcesSlice = createSlice({
  name: "matches",
  initialState: { matches: initialStateValue },
  reducers: {
    incrementMatches: (state) => {
      state.matches += 1;
    },
    resetMatches: (state) => {
      state.matches = initialStateValue;
    },
  },
});

export const { incrementMatches, resetMatches } = mathcesSlice.actions;

export default mathcesSlice.reducer;
