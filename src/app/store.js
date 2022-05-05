import { configureStore } from "@reduxjs/toolkit";

// reducer
import gameCardsReducer from "../features/gameCards";

export const store = configureStore({
  reducer: {
    gameCards: gameCardsReducer,
  },
});
