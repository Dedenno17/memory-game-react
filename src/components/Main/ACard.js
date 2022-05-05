import bgCard from "../../assets/images/back.jpg";

const ACard = (props) => {
  return (
    <div
      name={props.name}
      id="a-card"
      className="relative w-full bg-[rgba(255,255,255,0.5)] backdrop-blur-lg preserve cursor-pointer transition-all duration-700 ease-in-out"
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
