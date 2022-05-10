import { useNavigate } from "react-router-dom";

import ModalCard from "../UI/ModalCard";
import elephant from "../../assets/images/smart-elephant.png";

const ModalWin = (props) => {
  const navigate = useNavigate();

  return (
    <ModalCard className="p-5 flex flex-col items-center bg-slate-200 w-full">
      <div className="flex-grow text-center w-full">
        <h2 className="text-3xl text-primaryGreen font-bold mb-3">
          Congratulation!!
        </h2>
        <p className="text-md text-slate-800">You have paired all Cards!!</p>
      </div>
      <div className="flex-grow-2 w-full flex justify-center items-center my-4">
        <img
          src={elephant}
          alt="astronout unicorn playing ukulele"
          className="w-[50%] md:w-[30%] lg:w-[20%] xl:w-[30%]"
        />
      </div>
      <div className="w-full flex justify-evenly">
        <button
          type="button"
          className="outline-none text-sm bg-primaryGreen py-2 px-5 cursor-pointer rounded-md shadow-md text-white hover:bg-secondaryGreen"
          onClick={props.onReset}
        >
          Play Again
        </button>
        <button
          type="button"
          className="outline-none text-sm bg-red-500 py-2 cursor-pointer px-5 rounded-md shadow-md text-white hover:bg-red-700"
          onClick={() => navigate("/")}
        >
          Quit
        </button>
      </div>
    </ModalCard>
  );
};

export default ModalWin;
