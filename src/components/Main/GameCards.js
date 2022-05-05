import { useSelector } from "react-redux";
import ACard from "./ACard";

const GameCards = () => {
  const gameCards = useSelector((state) => state.gameCards.gameCards);

  return (
    <div className="container w-full h-[65vh] grid grid-cols-4 grid-rows-4 bg-[rgba(0, 0, 0, 0.2)] backdrop-blur-lg perspective-2000">
      {gameCards.map((item, i) => (
        <ACard key={i} name={item.name} img={item.img} />
      ))}
    </div>
  );
};

export default GameCards;
