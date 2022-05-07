import { useState } from "react";

import bgCard from "../../assets/images/back.jpg";

const ACard = (props) => {
  const [hasOpened, setHasOpened] = useState(false);

  const clickHandler = () => {
    setHasOpened(true);
  };

  return (
    <div
      name={props.name}
      id="a-card"
      onClick={clickHandler}
      className={`relative w-full bg-[rgba(255,255,255,0.5)] preserve cursor-pointer transition-all duration-700 ease-in-out ${
        hasOpened ? "open" : ""
      }`}
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
