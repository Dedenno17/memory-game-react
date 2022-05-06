import MediaCard from "../UI/MediaCard";

const ScoreAndMatches = (props) => {
  return (
    <div className="w-full flex justify-evenly items-center pt-3 pb-5">
      <MediaCard className="p-4 text-lg text-center">
        <h2 className="font-semibold">Mathces</h2>
        <p className="font-bold">2</p>
      </MediaCard>
      <MediaCard className="py-4 px-7 text-lg text-center">
        <h2 className="font-semibold">Score</h2>
        <p className="font-bold">2</p>
      </MediaCard>
    </div>
  );
};

export default ScoreAndMatches;
