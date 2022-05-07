import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = 0;

export const mathcesSlice = createSlice({
  name: "matches",
  initialState: { matches: initialStateValue },
  reducers: {
    setMatches: (state) => {
      state.matches += 1;
    },
  },
});

export const { setMatches } = mathcesSlice.actions;

export default mathcesSlice.reducer;
