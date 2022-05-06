import ModalCard from "../UI/ModalCard";

const ModalNav = (props) => {
  return (
    <ModalCard className="px-3 py-5 flex flex-col justify-evenly bg-white z-50">
      <button className="mb-3 py-2 w-full border-b-2 border-b-primaryGreen outline-none bg-transparent text-slate-700 hover:text-primaryGreen">
        Reset
      </button>
      <button className="py-2 w-full border-b-2 border-b-primaryGreen outline-none bg-transparent text-slate-700 hover:text-primaryGreen">
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNav;
