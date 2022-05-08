import { useSelector } from "react-redux";
import bgCard from "../../assets/images/back.jpg";

const ACard = (props) => {
  const limit = useSelector((state) => state.limit.limit);

  const clickHandler = (cardName, index) => {
    if (props.hasClickedCards >= 2) {
      console.log("stop");
      return;
    }

    props.onChangeClickedCards();
    props.onChangeCardToMatch(cardName, index);
    props.onOpenCard(index);
  };

  return (
    <div
      id={props.id}
      onClick={() => clickHandler(props.name, props.id)}
      className={`relative w-full bg-[rgba(255,255,255,0.5)] preserve cursor-pointer transition-all duration-700 ease-in-out ${
        limit <= 0 ? "pointer-events-none" : ""
      } ${props.hasOpened ? "open" : ""}`}
    >
      <img
        src={props.img}
        alt="front card"
        className="w-full h-full absolute pointer-events-none"
      />
      <img
        src={bgCard}
        alt="back card"
        className="w-full h-full absolute pointer-events-none backface-hidden"
      />
    </div>
  );
};

export default ACard;
