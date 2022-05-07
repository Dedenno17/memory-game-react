import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";
import Navbar from "./Navbar";

const MainSection = (props) => {
  return (
    <div className="relative flex w-full h-[100vh] overflow-hidden">
      <img
        src={background}
        alt="background nature"
        className="w-full m-auto scale-[3.5]"
      />
      <div className="absolute top-16 right-0 left-0 bottom-0 bg-transparent sm:bg-red-300 md:bg-green-300 lg:bg-yellow-400 xl:bg-blue-500">
        <Navbar />
        <ScoreAndMatches />
        <GameCards />
      </div>
    </div>
  );
};

export default MainSection;
