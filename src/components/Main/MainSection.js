import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";
import Hamburger from "./Hamburger";

const MainSection = (props) => {
  return (
    <div className="relative flex w-full h-[100vh]">
      <img
        src={background}
        alt="background nature"
        className="w-full m-auto scale-[3.5]"
      />
      <div className="absolute top-0 right-0 left-0 bottom-0 bg-transparent">
        <Hamburger />
        <ScoreAndMatches />
        <GameCards />
      </div>
    </div>
  );
};

export default MainSection;
