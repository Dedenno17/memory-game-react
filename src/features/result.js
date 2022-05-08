import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const resultSlice = createSlice({
  name: "result",
  initialState: { isWin: initialStateValue },
  reducers: {
    setResult: (state, action) => {
      state.isWin = action.payload;
    },
  },
});

export const { setResult } = resultSlice.actions;

export default resultSlice.reducer;
