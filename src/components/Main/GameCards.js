import { useSelector } from "react-redux";
import ACard from "./ACard";

const GameCards = () => {
  const gameCards = useSelector((state) => state.gameCards.gameCards);

  return (
    <div>
      {gameCards.map((item, i) => (
        <ACard key={i} name={item.name} img={item.img} />
      ))}
    </div>
  );
};

export default GameCards;
