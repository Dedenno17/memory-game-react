import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";
// import background from "../../assets/images/bg.webp";

const MainSection = (props) => {
  return (
    <div className="w-full h-[100vh] bg-sky-400">
      <ScoreAndMatches />
      <GameCards />
    </div>
  );
};

export default MainSection;
