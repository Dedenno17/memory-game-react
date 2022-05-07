import ModalCard from "../UI/ModalCard";

const ModalStart = (props) => {
  return (
    <ModalCard className="py-5 px-3 bg-slate-200">
      <h1 className="text-xl text-slate-800 text-center font-bold">
        Rule Of the Game
      </h1>
      <div className="mt-2 border-t-primaryGreen border-t-2 p-5 text-center">
        <p className="text-md text-slate-800">
          You have{" "}
          <span className="text-lg text-red-500 font-bold">60 seconds</span> to
          match all the cards. Click the card you want to match and see if your
          choice is right!!
        </p>
        <button
          type="button"
          className="mt-5 py-2 px-5 bg-primaryGreen rounded-md shadow-sm text-white text-sm font-semibold"
          onClick={props.onHide}
        >
          OK
        </button>
      </div>
    </ModalCard>
  );
};

export default ModalStart;
