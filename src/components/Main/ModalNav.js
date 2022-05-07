import ModalCard from "../UI/ModalCard";

const ModalNav = (props) => {
  return (
    <ModalCard className="px-3 py-5 flex flex-col justify-evenly bg-primaryGreen z-50">
      <button className="mb-3 py-2 w-full border-b-2 border-b-white outline-none bg-transparent text-white hover:text-slate-600">
        Reset
      </button>
      <button className="py-2 w-full border-b-2 border-b-white outline-none bg-transparent text-white hover:text-slate-600">
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNav;
