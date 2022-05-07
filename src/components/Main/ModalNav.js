import { useDispatch } from "react-redux";
import { resetCards } from "../../features/gameCards";
import { shuffleCards } from "../../features/gameCards";
import { setIsShowModalNav } from "../../features/isShowModalNav";
import { resetMatches } from "../../features/matches";
import { resetScores } from "../../features/score";
import ModalCard from "../UI/ModalCard";

const ModalNav = (props) => {
  const dispatch = useDispatch();

  const resetHandler = () => {
    dispatch(resetCards());
    dispatch(resetMatches());
    dispatch(resetScores());

    const timeOut = setTimeout(() => {
      dispatch(setIsShowModalNav(false));
      dispatch(shuffleCards());
      clearTimeout(timeOut);
    }, 300);
  };

  return (
    <ModalCard className="px-3 py-5 flex flex-col justify-evenly bg-primaryGreen z-50">
      <button
        className="mb-3 py-2 w-full border-b-2 border-b-white outline-none bg-transparent text-white hover:text-slate-600"
        onClick={resetHandler}
      >
        Reset
      </button>
      <button className="py-2 w-full border-b-2 border-b-white outline-none bg-transparent text-white hover:text-slate-600">
        Quit
      </button>
    </ModalCard>
  );
};

export default ModalNav;
