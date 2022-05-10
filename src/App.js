import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

// components
import MainSection from "./components/Main/MainSection";
import ModalNav from "./components/Main/ModalNav";
import ModalStart from "./components/Main/ModalStart";
import ModalTime from "./components/Main/ModalTime";
import ModalWin from "./components/Main/ModalWin";

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

function App() {
  const dispatch = useDispatch();

  const isShowModalNav = useSelector(
    (state) => state.isShowModalNav.isShowModalNav
  );

  const isShowModalStart = useSelector(
    (state) => state.isShowModalStart.isShowModalStart
  );

  const isShowModalTime = useSelector(
    (state) => state.isShowModalTime.isShowModalTime
  );

  const remember = useSelector((state) => state.remember.remember);

  const isWin = useSelector((state) => state.result.isWin);

  const resetHandler = () => {
    dispatch(resetCards());
    dispatch(resetMatches());
    dispatch(openAllCards());

    const timeOut = setTimeout(() => {
      dispatch(setIsShowModalNav(false));
      dispatch(setIsShowModalTime(true));
      dispatch(resetRemember());
      dispatch(resetLimit());
      dispatch(shuffleCards());
      dispatch(setResult(false));
      if (remember <= 0) {
        dispatch(resetScores());
      }
      clearTimeout(timeOut);
    }, 300);
  };

  const hideModalStartHandler = () => {
    dispatch(setIsShowModalStart(false));
    dispatch(openAllCards());
    dispatch(setIsShowModalTime(true));
  };

  useEffect(() => {
    dispatch(setIsShowModalStart(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {/* <OpeningSection /> */}
      <MainSection onReset={resetHandler} />
      {isShowModalTime && <ModalTime />}
      {isShowModalNav && <ModalNav onReset={resetHandler} />}
      {isWin && <ModalWin onReset={resetHandler} />}
      {isShowModalStart && <ModalStart onHide={hideModalStartHandler} />}
    </div>
  );
}

export default App;
