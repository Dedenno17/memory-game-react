import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { currentScore: 0, highestScore: 0 };

export const scoreBoardSlice = createSlice({
  name: "scoreBoard",
  initialState: initialStateValue,
  reducers: {
    setScoreBoard: (state, action) => {
      state.currentScore = action.payload;
      if (action.payload > state.highestScore) {
        state.highestScore = action.payload;
      }
    },
  },
});

export const { setScoreBoard } = scoreBoardSlice.actions;

export default scoreBoardSlice.reducer;
