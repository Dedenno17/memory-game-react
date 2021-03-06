import { configureStore } from "@reduxjs/toolkit";

// reducer
import gameCardsReducer from "../features/gameCards";
import isShowModalNavReducer from "../features/isShowModalNav";
import scoresReducer from "../features/score";
import matchesReducer from "../features/matches";
import isShowModalStartReducer from "../features/isShowModalStart";
import isShowModalTimeReducer from "../features/isShowModalTime";
import limitReducer from "../features/limit";
import rememberReducer from "../features/remember";
import resultReducer from "../features/result";
import animationCardsReducer from "../features/animationCards";
import scoreBoardReducer from "../features/scoreBoard";
import cardToMatchAnimationReducer from "../features/cardToMatchAnimation";

export const store = configureStore({
  reducer: {
    animationCards: animationCardsReducer,
    cardToMatchAnimation: cardToMatchAnimationReducer,
    gameCards: gameCardsReducer,
    isShowModalNav: isShowModalNavReducer,
    isShowModalStart: isShowModalStartReducer,
    isShowModalTime: isShowModalTimeReducer,
    limit: limitReducer,
    matches: matchesReducer,
    remember: rememberReducer,
    result: resultReducer,
    scores: scoresReducer,
    scoreBoard: scoreBoardReducer,
  },
});
