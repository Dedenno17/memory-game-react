import { useDispatch } from "react-redux";

import { setIsShowModalNav } from "../../features/isShowModalNav";
import ModalCard from "../UI/ModalCard";

const ModalNav = (props) => {
  const dispatch = useDispatch();

  return (
    <ModalCard className="px-3 py-5 flex flex-col justify-evenly bg-slate-200 z-50">
      <div className="relative w-full h-full">
        <span
          className="flex justify-center items-center absolute text-sm text-center w-7 h-7 text-white border-white border-2 bg-red-500 p-4 -top-7 -right-5 rounded-full"
          onClick={() => dispatch(setIsShowModalNav(false))}
        >
          X
        </span>
        <button
          className="mb-3 py-2 w-full border-b-2 border-b-primaryGreen outline-none bg-transparent text-slate-800 hover:text-slate-500"
          onClick={props.onReset}
        >
          Reset
        </button>
        <button className="py-2 w-full border-b-2 border-b-primaryGreen outline-none bg-transparent text-slate-800 hover:text-slate-500">
          Quit
        </button>
      </div>
    </ModalCard>
  );
};

export default ModalNav;
