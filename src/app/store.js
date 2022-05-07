import { configureStore } from "@reduxjs/toolkit";

// reducer
import gameCardsReducer from "../features/gameCards";
import isShowModalNavReducer from "../features/isShowModalNav";
import scoresReducer from "../features/score";
import matchesReducer from "../features/matches";
import isShowModalStartReducer from "../features/isShowModalStart";
import isShowModalTimeReducer from "../features/isShowModalTime";

export const store = configureStore({
  reducer: {
    gameCards: gameCardsReducer,
    isShowModalNav: isShowModalNavReducer,
    isShowModalStart: isShowModalStartReducer,
    isShowModalTime: isShowModalTimeReducer,
    matches: matchesReducer,
    scores: scoresReducer,
  },
});
