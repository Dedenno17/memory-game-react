import { useSelector } from "react-redux";

import bgCard from "../../assets/images/back.jpg";

const AnimationCard = (props) => {
  const gameCards = useSelector((state) => state.gameCards.gameCards);

  //   const cardUiSm = gameCards.filter(
  //     (card) => card.name === "cat" || card.name === "bee"
  //   );

  return (
    <div className="flex  w-full h-[55%] ">
      <div className="w-3/4 h-3/4 m-auto grid grid-cols-2 grid-rows-2 bg-[rgba(0,0,0,0.3)] backdrop-blur-[5px] shadow-lg perspective-2000">
        {gameCards.map((item, i) => (
          <div
            className="relative w-full bg-[rgba(255,255,255,0.5)] preserve cursor-pointer transition-all duration-700 ease-in-out"
            key={i}
          >
            <img
              src={item.img}
              alt="animal card"
              className="w-full h-full absolute pointer-events-none"
            />
            <img
              src={bgCard}
              alt="back card"
              className="w-full h-full absolute pointer-events-none backface-hidden"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimationCard;
