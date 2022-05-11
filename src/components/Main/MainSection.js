import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";
import Navbar from "./Navbar";
import Matches from "./Matches";
import Scores from "./Scores";
import ModalNav from "./ModalNav";
import ModalStart from "./ModalStart";
import ModalTime from "./ModalTime";
import ModalWin from "./ModalWin";

const MainSection = (props) => {
  const navigate = useNavigate();

  // const quitGameHandler = () => {
  //   navigate('/');
  // };

  const isShowModalNav = useSelector(
    (state) => state.isShowModalNav.isShowModalNav
  );

  const isShowModalStart = useSelector(
    (state) => state.isShowModalStart.isShowModalStart
  );

  const isShowModalTime = useSelector(
    (state) => state.isShowModalTime.isShowModalTime
  );

  const isWin = useSelector((state) => state.result.isWin);

  return (
    <div className="relative flex w-full h-[100vh] overflow-hidden">
      <img
        src={background}
        alt="background nature"
        className="w-full m-auto scale-[3.5] sm:scale-[3] md:scale-[2] lg:scale-[1.5] xl:scale-[1]"
      />
      <div className="absolute top-20 right-0 left-0 bottom-0 bg-transparent lg:flex lg:justify-center lg:top-0">
        <Navbar />
        <ScoreAndMatches />
        <div className="hidden lg:flex lg:w-[20%] lg:flex-col lg:justify-between lg:items-center lg:p-4 xl:w-[15%]">
          <Matches className="w-full h-24 p-3 text-center text-3xl text-white" />
          <button
            type="button"
            className="lg:w-full lg:px-4 lg:py-2 outline-none rounded-lg shadow-lg text-white bg-primaryGreen text-xl active:scale-95 hover:bg-secondaryGreen"
            onClick={() => props.onReset()}
          >
            Reset
          </button>
        </div>
        <GameCards />
        <div className="hidden lg:flex lg:w-[20%] lg:flex-col lg:justify-between lg:items-center lg:p-4 xl:w-[15%]">
          <Scores className="w-full h-24 p-3 text-center text-3xl text-white" />
          <button
            type="button"
            className="lg:w-full lg:px-4 lg:py-2 outline-none rounded-lg shadow-lg text-white bg-primaryGreen text-xl active:scale-95 hover:bg-secondaryGreen"
            onClick={() => navigate("/")}
          >
            Quit
          </button>
        </div>
      </div>
      {isShowModalTime && <ModalTime />}
      {isShowModalNav && <ModalNav onReset={props.onReset} />}
      {isWin && <ModalWin onReset={props.onReset} />}
      {isShowModalStart && (
        <ModalStart onHide={props.onHide} onReset={props.onReset} />
      )}
    </div>
  );
};

export default MainSection;
