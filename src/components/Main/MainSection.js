import GameCards from "./GameCards";
import ScoreAndMatches from "./ScoreAndMatches";

const MainSection = (props) => {
  return (
    <div>
      <ScoreAndMatches />
      <GameCards />
    </div>
  );
};

export default MainSection;
