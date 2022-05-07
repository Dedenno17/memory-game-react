import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showModalStartSlice = createSlice({
  name: "showModalStart",
  initialState: { isShowModalStart: initialStateValue },
  reducers: {
    setIsShowModalStart: (state, action) => {
      state.isShowModalStart = action.payload;
    },
  },
});

export const { setIsShowModalStart } = showModalStartSlice.actions;

export default showModalStartSlice.reducer;
