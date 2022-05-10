import { createSlice } from "@reduxjs/toolkit";

// image
import bee from "../assets/images/bee.png";
import cat from "../assets/images/cat.png";
import dog from "../assets/images/dog.png";
import fox from "../assets/images/fox.png";
import frog from "../assets/images/frog.png";
import monkey from "../assets/images/monkey.png";
import pig from "../assets/images/pig.png";
import wolf from "../assets/images/wolf.png";

const initialStateValue = [
  { img: bee, name: "bee", hasOpened: false },
  { img: bee, name: "bee", hasOpened: false },
  { img: cat, name: "cat", hasOpened: false },
  { img: cat, name: "cat", hasOpened: false },
  { img: dog, name: "dog", hasOpened: false },
  { img: dog, name: "dog", hasOpened: false },
  { img: fox, name: "fox", hasOpened: false },
  { img: fox, name: "fox", hasOpened: false },
  { img: frog, name: "frog", hasOpened: false },
  { img: frog, name: "frog", hasOpened: false },
  { img: monkey, name: "monkey", hasOpened: false },
  { img: monkey, name: "monkey", hasOpened: false },
  { img: pig, name: "pig", hasOpened: false },
  { img: pig, name: "pig", hasOpened: false },
  { img: wolf, name: "wolf", hasOpened: false },
  { img: wolf, name: "wolf", hasOpened: false },
];

export const animationCardsSlice = createSlice({
  name: "animationCards",
  initialState: { cards: initialStateValue },
  reducers: {
    shuffleAnimationCards: (state) => {
      const newGameCards = [...state.cards];
      newGameCards.sort(() => Math.random() - 0.5);

      state.cards = newGameCards;
    },
    resetAnimationCards: (state) => {
      const newGameCards = [...state.cards];
      for (let i = 0; i < newGameCards.length; i++) {
        newGameCards[i].hasOpened = false;
      }

      state.cards = newGameCards;
    },
    setHasOpenedCard: (state, action) => {
      const newState = [...state.cards];
      newState[action.payload.index].hasOpened = action.payload.hasOpened;

      state.cards = newState;
    },
    openAllAnimationCards: (state) => {
      const newGameCards = [...state.cards];
      for (let i = 0; i < newGameCards.length; i++) {
        newGameCards[i].hasOpened = true;
      }

      state.cards = newGameCards;
    },
  },
});

export const {
  shuffleAnimationCards,
  resetAnimationCards,
  setHasOpenedCard,
  openAllAnimationCards,
} = animationCardsSlice.actions;

export default animationCardsSlice.reducer;
