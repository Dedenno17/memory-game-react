import { useSelector } from "react-redux";
import MediaCard from "../UI/MediaCard";

const ScoreAndMatches = (props) => {
  const matches = useSelector((state) => state.matches.matches);
  const scores = useSelector((state) => state.scores.scores);

  return (
    <div className="w-full flex justify-evenly items-center pt-3 pb-5 text-white">
      <MediaCard className="p-4 text-lg text-center">
        <h2 className="font-semibold">Mathces</h2>
        <p className="font-bold">{matches}</p>
      </MediaCard>
      <MediaCard className="py-4 px-7 text-lg text-center text-white">
        <h2 className="font-semibold">Score</h2>
        <p className="font-bold">{scores}</p>
      </MediaCard>
    </div>
  );
};

export default ScoreAndMatches;
