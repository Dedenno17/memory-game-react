import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import bgOp from "../../assets/images/bg-op.webp";
import AnimationCard from "./AnimationCard";
import jungleOst from "../../assets/audio/jungle-ost.mp3";
import click from "../../assets/audio/click-sound.wav";
import { setIsShowModalStart } from "../../features/isShowModalStart";
import { setIsShowModalTime } from "../../features/isShowModalTime";
import { resetCards } from "../../features/gameCards";

const OpeningSection = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const currentScore = useSelector((state) => state.scoreBoard.currentScore);
  const highestScore = useSelector((state) => state.scoreBoard.highestScore);

  const audioClick = new Audio(click);

  const audioBg = new Audio(jungleOst);
  audioBg.volume = 0.3;
  audioBg.autoplay = true;
  audioBg.loop = true;

  const newGameHandler = () => {
    audioClick.play();
    audioBg.pause();
    audioBg.currentTime = 0;
    navigate("/main");
    dispatch(setIsShowModalTime(false));
    dispatch(resetCards());
    dispatch(setIsShowModalStart(true));
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex">
      <img
        src={bgOp}
        alt="background grass and trees"
        className="w-full m-auto scale-[3.5] sm:scale-[3] md:scale-[2] lg:scale-[1.5] xl:scale-[1.2] brightness-75"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center">
        <div className=" w-full h-[20%] flex lg:order-1">
          <h1 className="text-3xl m-auto font-bold text-red-700 lg:text-5xl">
            Memory Game App
          </h1>
        </div>
        <div className=" w-full h-[10%] flex lg:order-4">
          <button
            type="button"
            className="m-auto outline-none rounded-md shadow-md py-3 px-10 text-white bg-primaryGreen lg:hover:bg-secondaryGreen xl:text-2xl"
            onClick={newGameHandler}
          >
            New Game
          </button>
        </div>
        <div className=" w-full h-[15%] flex flex-col justify-center items-center lg:order-3">
          <p className="text-lg text-slate-800 font-semibold lg:text-2xl">
            Current Score: {currentScore}
          </p>
          <p className="text-lg text-slate-800 font-semibold lg:text-2xl">
            Your Highest Score: {highestScore}
          </p>
        </div>
        <AnimationCard />
      </div>
    </div>
  );
};

export default OpeningSection;
