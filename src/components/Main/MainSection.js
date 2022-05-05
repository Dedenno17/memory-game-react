import GameCard from "./GameCard";
import ScoreAndMatches from "./ScoreAndMatches";

const MainSection = (props) => {
  return (
    <div>
      <ScoreAndMatches />
      <GameCard />
    </div>
  );
};

export default MainSection;
