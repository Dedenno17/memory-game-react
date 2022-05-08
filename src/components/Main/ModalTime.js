import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";

import { setLimit } from "../../features/limit";

const ModalTime = (props) => {
  const limit = useSelector((state) => state.limit.limit);

  const dispatch = useDispatch();

  useEffect(() => {
    limit > 0 && setTimeout(() => dispatch(setLimit()), 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  console.log("load");

  return createPortal(
    <div className="rounded-lg shadow-lg bg-slate-200 px-8 py-4 absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-goDownTime">
      <p className="text-2xl text-red-500 font-bold">{limit}</p>
    </div>,
    document.getElementById("time")
  );
};

export default React.memo(ModalTime);
