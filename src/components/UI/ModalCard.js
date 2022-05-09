import { createPortal } from "react-dom";
import { useDispatch } from "react-redux";
import { setIsShowModalNav } from "../../features/isShowModalNav";

const ModalBackground = () => {
  const dispatch = useDispatch();

  const hideModalNavHandler = () => {
    dispatch(setIsShowModalNav(false));
  };

  return (
    <div
      className="bg-gradient-to-b from-slate-800 to-transparent fixed top-0 left-0 right-0 bottom-0 z-40"
      onClick={hideModalNavHandler}
    ></div>
  );
};

const ModalContent = (props) => {
  const classes = `${props.className} w-3/4 fixed top-2 opacity-0 left-[50%] translate-x-[-50%] rounded-lg shadow-lg z-50 animate-goDown sm:w-1/2 lg:w-[40%] xl:w-[30%]`;

  return <div className={classes}>{props.children}</div>;
};

const portal = document.getElementById("modal");

const ModalCard = (props) => {
  return (
    <>
      {createPortal(<ModalBackground />, portal)}
      {createPortal(
        <ModalContent className={props.className}>
          {props.children}
        </ModalContent>,
        portal
      )}
    </>
  );
};

export default ModalCard;
