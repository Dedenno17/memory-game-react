import bgCard from "../../assets/images/back.jpg";

const ACard = (props) => {
  return (
    <div name={props.name}>
      <img src={props.img} alt="front card" />
      <img src={bgCard} alt="back card" />
    </div>
  );
};

export default ACard;
