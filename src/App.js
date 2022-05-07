import React from "react";
import { useSelector } from "react-redux";

import MainSection from "./components/Main/MainSection";
import ModalNav from "./components/Main/ModalNav";
import { useDispatch } from "react-redux";
import { resetCards } from "./features/gameCards";
import { shuffleCards } from "./features/gameCards";
import { setIsShowModalNav } from "./features/isShowModalNav";
import { resetMatches } from "./features/matches";
import { resetScores } from "./features/score";

function App() {
  const dispatch = useDispatch();

  const isShowModalNav = useSelector(
    (state) => state.isShowModalNav.isShowModalNav
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

  return (
    <div className="App">
      <MainSection onReset={resetHandler} />
      {isShowModalNav && <ModalNav onReset={resetHandler} />}
    </div>
  );
}

export default App;
