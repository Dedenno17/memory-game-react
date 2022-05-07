import Matches from "./Matches";
import Scores from "./Scores";

const ScoreAndMatches = (props) => {
  return (
    <div className="w-full flex justify-evenly items-center pt-3 pb-5 text-white lg:hidden">
      <Matches className="p-4 text-lg text-center" />
      <Scores className="py-4 px-7 text-lg text-center text-white" />
    </div>
  );
};

export default ScoreAndMatches;
