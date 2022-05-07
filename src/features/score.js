import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const scoresSlice = createSlice({
  name: "scores",
  initialState: { scores: initialStateValue },
  reducers: {
    setScores: (state, action) => {
      state.scores += 10;
    },
  },
});

export const { setScores } = scoresSlice.actions;

export default scoresSlice.reducer;
