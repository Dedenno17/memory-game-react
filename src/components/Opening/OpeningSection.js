import bgOp from "../../assets/images/bg-op.webp";
import AnimationCard from "./AnimationCard";

const OpeningSection = (props) => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden flex">
      <img
        src={bgOp}
        alt="background grass and trees"
        className="w-full m-auto scale-[3.5] sm:scale-[3] md:scale-[2] lg:scale-[1.5] xl:scale-[1] brightness-75"
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 flex flex-col items-center">
        <div className=" w-full h-[20%] flex">
          <h1 className="text-3xl m-auto font-bold text-red-700">
            Memory Game App
          </h1>
        </div>
        <div className=" w-full h-[10%] flex">
          <button
            type="button"
            className="m-auto outline-none rounded-md shadow-md py-3 px-10 text-white bg-primaryGreen"
          >
            New Game
          </button>
        </div>
        <div className=" w-full h-[15%] flex flex-col justify-center items-center">
          <p className="text-lg text-slate-800 font-semibold">
            Current Score: 20
          </p>
          <p className="text-lg text-slate-800 font-semibold">
            Your Highest Score: 50
          </p>
        </div>
        <AnimationCard />
      </div>
    </div>
  );
};

export default OpeningSection;
