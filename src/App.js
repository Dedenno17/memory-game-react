import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { useDispatch } from "react-redux";

import MainSection from "./components/Main/MainSection";
import ModalNav from "./components/Main/ModalNav";
import ModalStart from "./components/Main/ModalStart";
import { resetCards } from "./features/gameCards";
import { shuffleCards } from "./features/gameCards";
import { setIsShowModalNav } from "./features/isShowModalNav";
import { resetMatches } from "./features/matches";
import { resetScores } from "./features/score";
import { setIsShowModalStart } from "./features/isShowModalStart";

function App() {
  const dispatch = useDispatch();

  const isShowModalNav = useSelector(
    (state) => state.isShowModalNav.isShowModalNav
  );

  const isShowModalStart = useSelector(
    (state) => state.isShowModalStart.isShowModalStart
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
  };

  useEffect(() => {
    dispatch(setIsShowModalStart(true));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <MainSection onReset={resetHandler} />
      {isShowModalNav && <ModalNav onReset={resetHandler} />}
      {isShowModalStart && <ModalStart onHide={hideModalStartHandler} />}
    </div>
  );
}

export default App;
