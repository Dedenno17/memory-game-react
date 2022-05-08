import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import MainSection from "./components/Main/MainSection";
import ModalNav from "./components/Main/ModalNav";
import ModalStart from "./components/Main/ModalStart";
import ModalTime from "./components/Main/ModalTime";
import { openAllCards, resetCards } from "./features/gameCards";
import { shuffleCards } from "./features/gameCards";
import { setIsShowModalNav } from "./features/isShowModalNav";
import { resetMatches } from "./features/matches";
import { resetScores } from "./features/score";
import { setIsShowModalStart } from "./features/isShowModalStart";
import { setIsShowModalTime } from "./features/isShowModalTime";

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

  const resetHandler = () => {
    dispatch(resetCards());
    dispatch(resetMatches());
    dispatch(resetScores());

    const timeOut = setTimeout(() => {
      dispatch(setIsShowModalNav(false));
      dispatch(shuffleCards());
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
      <MainSection onReset={resetHandler} />
      {isShowModalTime && <ModalTime />}
      {isShowModalNav && <ModalNav onReset={resetHandler} />}
      {isShowModalStart && <ModalStart onHide={hideModalStartHandler} />}
    </div>
  );
}

export default App;
