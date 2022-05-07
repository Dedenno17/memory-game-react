import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const scoresSlice = createSlice({
  name: "scores",
  initialState: { scores: initialStateValue },
  reducers: {
    incrementScores: (state) => {
      state.scores += 10;
    },
    resetScores: (state) => {
      state.scores = initialStateValue;
    },
  },
});

export const { incrementScores, resetScores } = scoresSlice.actions;

export default scoresSlice.reducer;
