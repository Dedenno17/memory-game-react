import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";
import jungleOst from "../../assets/audio/jungle-ost.mp3";
import click from "../../assets/audio/click-sound.wav";
import Navbar from "./Navbar";
import Matches from "./Matches";
import Scores from "./Scores";
import ModalNav from "./ModalNav";
import ModalStart from "./ModalStart";
import ModalTime from "./ModalTime";
import ModalWin from "./ModalWin";

const MainSection = (props) => {
  const navigate = useNavigate();

  const audioClick = new Audio(click);

  const [isPlayingAudioBg, setIsPlayingAudioBg] = useState(true);
  const audioBgPlayerRef = useRef();

  const toggleAudioBgHandler = () => {
    setIsPlayingAudioBg((prevState) => !prevState);
  };

  const quitGameHandler = () => {
    audioClick.play();
    toggleAudioBgHandler();
    props.onReset();
    navigate("/");
  };

  const resetHandler = () => {
    audioClick.play();
    props.onReset();
  };

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

  useEffect(() => {
    audioBgPlayerRef.current.volume = 0.1;
    if (isPlayingAudioBg) {
      audioBgPlayerRef.current.play();
    } else {
      audioBgPlayerRef.current.pause();
      audioBgPlayerRef.current.currentTime = 0;
    }
  }, [isPlayingAudioBg]);

  return (
    <div className="relative flex w-full h-[100vh] overflow-hidden">
      <audio
        ref={audioBgPlayerRef}
        src={jungleOst}
        muted={false}
        autoPlay={false}
        loop={true}
      />
      <img
        src={background}
        alt="background nature"
        className="w-full m-auto scale-[3.5] sm:scale-[3] md:scale-[2] lg:scale-[1.5] xl:scale-[1.2]"
      />
      <div className="absolute top-20 right-0 left-0 bottom-0 bg-transparent lg:flex lg:justify-center lg:top-0">
        <Navbar />
        <ScoreAndMatches />
        <div className="hidden lg:flex lg:w-[20%] lg:flex-col lg:justify-between lg:items-center lg:p-4 xl:w-[15%]">
          <Matches className="w-full h-24 p-3 text-center text-3xl text-white" />
          <button
            type="button"
            className="lg:w-full lg:px-4 lg:py-2 outline-none rounded-lg shadow-lg text-white bg-primaryGreen text-xl active:scale-95 hover:bg-secondaryGreen"
            onClick={resetHandler}
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
            onClick={quitGameHandler}
          >
            Quit
          </button>
        </div>
      </div>
      {isShowModalTime && <ModalTime onStopAudioBg={toggleAudioBgHandler} />}
      {isShowModalNav && (
        <ModalNav onReset={resetHandler} onQuit={quitGameHandler} />
      )}
      {isWin && (
        <ModalWin
          onQuit={quitGameHandler}
          onPlayAudioBg={toggleAudioBgHandler}
          onReset={resetHandler}
        />
      )}
      {isShowModalStart && (
        <ModalStart
          onHide={props.onHide}
          onReset={resetHandler}
          onQuit={quitGameHandler}
        />
      )}
    </div>
  );
};

export default MainSection;
