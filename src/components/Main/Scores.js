import { useSelector } from "react-redux";
import MediaCard from "../UI/MediaCard";

const Scores = (props) => {
  const scores = useSelector((state) => state.scores.scores);

  return (
    <MediaCard className={props.className}>
      <h2 className="font-semibold">Score</h2>
      <p className="font-bold">{scores}</p>
    </MediaCard>
  );
};

export default Scores;
