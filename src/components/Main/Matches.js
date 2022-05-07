import { useSelector } from "react-redux";
import MediaCard from "../UI/MediaCard";

const Matches = (props) => {
  const matches = useSelector((state) => state.matches.matches);

  return (
    <MediaCard className={props.className}>
      <h2 className="font-semibold">Matches</h2>
      <p className="font-bold">{matches}</p>
    </MediaCard>
  );
};

export default Matches;
