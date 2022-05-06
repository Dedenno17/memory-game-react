import { createPortal } from "react-dom";

const ModalBackground = () => {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-transparent fixed top-0 left-0 right-0 bottom-0"></div>
  );
};

const ModalContent = (props) => {
  const classes = `${props.className} w-3/4 fixed top-10 left-[50%] translate-x-[-50%] rounded-lg shadow-lg`;

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
