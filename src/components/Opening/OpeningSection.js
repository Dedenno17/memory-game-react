const OpeningSection = (props) => {
  return (
    <div className="relative w-full h-[100vh] overflow-hidden">
      <img src="" alt="" />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-red-400 flex flex-col items-center">
        <div className=" w-full h-[20%] flex">
          <h1 className="text-3xl m-auto font-bold text-slate-800">
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
        <div className="flex  w-full h-[55%]">
          <div className="w-3/4 h-3/4 m-auto grid grid-cols-2 grid-rows-2 bg-yellow-400">
            <div className="bg-primaryGreen"></div>
            <div className="bg-orange-400"></div>
            <div className="bg-blue-400"></div>
            <div className="bg-purple-400"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OpeningSection;
