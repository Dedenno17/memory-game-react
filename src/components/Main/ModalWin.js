import ModalCard from "../UI/ModalCard";

const ModalWin = (props) => {
  return (
    <ModalCard className="p-5 flex flex-col items-center bg-slate-200 w-full">
      <div className="flex-grow text-center w-full">
        <h2 className="text-3xl text-primaryGreen font-bold mb-3">
          Congratulation!!
        </h2>
        <p className="text-md text-slate-800">You have paired all Cards!!</p>
      </div>
      <div className="flex-grow-2 w-full flex justify-center items-center my-4">
        <img src="" alt="Happy Animal riding a car" className="" />
      </div>
      <div className="w-full flex justify-evenly">
        <button
          type="button"
          className="outline-none text-sm bg-primaryGreen py-2 px-5 cursor-pointer rounded-md shadow-md text-white"
        >
          Play Again
        </button>
        <button
          type="button"
          className="outline-none text-sm bg-red-500 py-2 cursor-pointer px-5 rounded-md shadow-md text-white"
        >
          Quit
        </button>
      </div>
    </ModalCard>
  );
};

export default ModalWin;
