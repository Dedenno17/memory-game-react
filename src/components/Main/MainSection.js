import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
import background from "../../assets/images/bg.webp";

const MainSection = (props) => {
  return (
    <div className="w-full h-[100vh] relative flex">
      <img
        src={background}
        alt="background nature"
        className="m-auto scale-[350%]"
      />
      <div className="absolute top-0 right-0 left-0">
        <ScoreAndMatches />
        <GameCards />
      </div>
    </div>
  );
};

export default MainSection;
