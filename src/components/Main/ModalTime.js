import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { resetCards } from "../../features/gameCards";
import { setIsShowModalTime } from "../../features/isShowModalTime";

import { setLimit } from "../../features/limit";
import { setRemember } from "../../features/remember";

const ModalTime = (props) => {
  const limit = useSelector((state) => state.limit.limit);
  const remember = useSelector((state) => state.remember.remember);

  const dispatch = useDispatch();

  useEffect(() => {
    if (remember <= 0) {
      dispatch(resetCards());
      dispatch(setIsShowModalTime(false));
    }
    if (remember > 0) {
      const timeout = setTimeout(() => {
        dispatch(setRemember());
        clearTimeout(timeout);
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [remember]);

  useEffect(() => {
    if (remember <= 0) {
      dispatch(setIsShowModalTime(true));
      if (limit > 0) {
        const timeout = setTimeout(() => {
          dispatch(setLimit());
          clearTimeout(timeout);
        }, 1000);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit, remember]);

  return createPortal(
    <div className="rounded-lg shadow-lg bg-slate-200 px-8 py-4 absolute -top-20 left-1/2 -translate-x-1/2 z-50 animate-goDownTime">
      {remember > 0 && (
        <p className="text-2xl text-primaryGreen font-bold">{remember}</p>
      )}
      {remember <= 0 && (
        <p className="text-2xl text-red-500 font-bold">{limit}</p>
      )}
    </div>,
    document.getElementById("time")
  );
};

export default React.memo(ModalTime);
