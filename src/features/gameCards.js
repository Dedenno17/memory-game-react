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
  { img: bee, name: "bee" },
  { img: bee, name: "bee" },
  { img: cat, name: "cat" },
  { img: cat, name: "cat" },
  { img: dog, name: "dog" },
  { img: dog, name: "dog" },
  { img: fox, name: "fox" },
  { img: fox, name: "fox" },
  { img: frog, name: "frog" },
  { img: frog, name: "frog" },
  { img: monkey, name: "monkey" },
  { img: monkey, name: "monkey" },
  { img: pig, name: "pig" },
  { img: pig, name: "pig" },
  { img: wolf, name: "wolf" },
  { img: wolf, name: "wolf" },
];

export const gameCardsSlice = createSlice({
  name: "gameCards",
  initialState: { gameCrads: initialStateValue },
  reducers: {
    shuffleCards: (state) => {
      const newGameCards = state.gameCrads.sort(() => Math.random() - 0.5);
      state.gameCrads = newGameCards;
    },
  },
});

export const { shuffleCards } = gameCardsSlice.actions;

export default gameCardsSlice.reducer;
