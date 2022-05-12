import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { cardsToMatch: [] };

export const cardsToMatchSlice = createSlice({
  name: "cardsToMatch",
  initialState: initialStateValue,
  reducers: {
    setCardsToMatch: (state, action) => {
      state.cardsToMatch = action.payload;
    },
  },
});

export const { setCardsToMatch } = cardsToMatchSlice.actions;

export default cardsToMatchSlice.reducer;
