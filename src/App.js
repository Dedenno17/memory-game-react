import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// components
import MainSection from "./components/Main/MainSection";

import { openAllCards, resetCards } from "./features/gameCards";
import { shuffleCards } from "./features/gameCards";
import { setIsShowModalNav } from "./features/isShowModalNav";
import { resetMatches } from "./features/matches";
import { resetScores } from "./features/score";
import { setIsShowModalStart } from "./features/isShowModalStart";
import { setIsShowModalTime } from "./features/isShowModalTime";
import { resetRemember } from "./features/remember";
import { resetLimit } from "./features/limit";
import { setResult } from "./features/result";
import OpeningSection from "./components/Opening/OpeningSection";
import flipCard from "./assets/audio/page-flip.wav";

function App() {
  const dispatch = useDispatch();

  const remember = useSelector((state) => state.remember.remember);

  const audioFlipCard = new Audio(flipCard);

  const resetHandler = () => {
    dispatch(resetCards());
    dispatch(setIsShowModalNav(false));
    dispatch(resetMatches());
    dispatch(setIsShowModalTime(false));

    const timeOut = setTimeout(() => {
      audioFlipCard.play();
      dispatch(openAllCards());
      dispatch(setIsShowModalTime(true));
      dispatch(resetRemember());
      dispatch(resetLimit());
      dispatch(shuffleCards());
      dispatch(setResult(false));
      if (remember <= 0) {
        dispatch(resetScores());
      }
      clearTimeout(timeOut);
    }, 800);
  };

  const hideModalStartHandler = () => {
    dispatch(setIsShowModalStart(false));
    audioFlipCard.play();
    dispatch(openAllCards());
    dispatch(setIsShowModalTime(true));
  };

  useEffect(() => {
    dispatch(setIsShowModalStart(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<OpeningSection onReset={resetHandler} />} />
          <Route
            path="/main"
            element={
              <MainSection
                onReset={resetHandler}
                onHide={hideModalStartHandler}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
