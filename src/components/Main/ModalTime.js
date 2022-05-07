import { createPortal } from "react-dom";

const ModalTime = (props) => {
  return createPortal(
    <div className="rounded-lg shadow-lg bg-slate-200 px-8 py-4 absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-goDownTime">
      <p className="text-2xl text-red-500 font-bold">60</p>
    </div>,
    document.getElementById("time")
  );
};

export default ModalTime;
