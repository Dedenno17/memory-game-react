import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = { cardsToMatch: [] };

export const cardsToMatchSlice = createSlice({
  name: "cardsToMatch",
  initialState: initialStateValue,
  reducers: {
    resetCardsToMatch: (state) => {
      state.cardsToMatch = [];
    },
    setCardsToMatch: (state, action) => {
      const newState = {
        index: action.payload.randomValue,
        name: action.payload.name,
      };
      state.cardsToMatch = [...state.cardsToMatch, newState];
    },
  },
});

export const { setCardsToMatch, resetCardsToMatch } = cardsToMatchSlice.actions;

export default cardsToMatchSlice.reducer;
