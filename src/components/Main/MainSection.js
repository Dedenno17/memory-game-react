import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";
import Navbar from "./Navbar";
import Matches from "./Matches";
import Scores from "./Scores";

const MainSection = (props) => {
  return (
    <div className="relative flex w-full h-[100vh] overflow-hidden">
      <img
        src={background}
        alt="background nature"
        className="w-full m-auto scale-[3.5] sm:scale-[3] md:scale-[2] lg:scale-[1.5] xl:scale-[1]"
      />
      <div className="absolute top-16 right-0 left-0 bottom-0 bg-transparent lg:flex lg:justify-center lg:top-0">
        <Navbar />
        <ScoreAndMatches />
        <div className="hidden lg:flex lg:w-[20%] lg:flex-col lg:justify-between lg:items-center lg:p-4 xl:w-[15%]">
          <Matches className="w-full h-24 p-3 text-center text-3xl text-white" />
          <button
            type="button"
            className="lg:w-full lg:px-4 lg:py-2 outline-none rounded-lg shadow-lg text-white bg-primaryGreen text-xl active:scale-95"
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
            className="lg:w-full lg:px-4 lg:py-2 outline-none rounded-lg shadow-lg text-white bg-primaryGreen text-xl active:scale-95"
          >
            Quit
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
