import { useDispatch } from "react-redux";
import { setIsShowModalNav } from "../../features/isShowModalNav";

const Hamburger = (props) => {
  const dispatch = useDispatch();

  const showModalNavHandler = () => {
    dispatch(setIsShowModalNav(true));
  };

  return (
    <div className="w-8 h-7" onClick={showModalNavHandler}>
      <div className="w-full h-full flex flex-col justify-between cursor-pointer">
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
        <span className="block w-full h-[5px] bg-primaryGreen"></span>
      </div>
    </div>
  );
};

export default Hamburger;
