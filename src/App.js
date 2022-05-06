import React from "react";
import { useSelector } from "react-redux";
import MainSection from "./components/Main/MainSection";
import ModalNav from "./components/Main/ModalNav";

function App() {
  const isShowModalNav = useSelector(
    (state) => state.isShowModalNav.isShowModalNav
  );

  return (
    <div className="App">
      <MainSection />
      {isShowModalNav && <ModalNav />}
    </div>
  );
}

export default App;
