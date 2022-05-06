import { createSlice } from "@reduxjs/toolkit";

const initialStateValue = false;

export const showModalNavSlice = createSlice({
  name: "showModalNav",
  initialState: { isShowModalNav: initialStateValue },
  reducers: {
    setIsShowModalNav: (state, action) => {
      state.isShowModalNav = action.payload;
    },
  },
});

export const { setIsShowModalNav } = showModalNavSlice.actions;

export default showModalNavSlice.reducer;
