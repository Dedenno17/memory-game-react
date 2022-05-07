import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showModalTimeSlice = createSlice({
  name: "showModalTime",
  initialState: { isShowModalTime: initialStateValue },
  reducers: {
    setIsShowModalTime: (state, action) => {
      state.isShowModalTime = action.payload;
    },
  },
});

export const { setIsShowModalTime } = showModalTimeSlice.actions;

export default showModalTimeSlice.reducer;
