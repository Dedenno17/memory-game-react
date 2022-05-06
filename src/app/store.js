import { configureStore } from "@reduxjs/toolkit";

// reducer
import gameCardsReducer from "../features/gameCards";
import isShowModalNavReducer from "../features/isShowModalNav";

export const store = configureStore({
  reducer: {
    gameCards: gameCardsReducer,
    isShowModalNav: isShowModalNavReducer,
  },
});
