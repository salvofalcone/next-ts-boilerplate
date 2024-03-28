//Store
import { createSlice } from "@reduxjs/toolkit";

//Interfaces
import { TopBarInterface } from "@/utils/interfaces";
const initialState: TopBarInterface = {
  activePage: "home",
};

export const topbarSlice = createSlice({
  name: " topbar",
  initialState,
  reducers: {
    setActivePage: (state, action) => {
      state.activePage = action.payload;
    },
  },
});

//reducers export
export const topbarActions = topbarSlice.actions;

//slice export
export default topbarSlice;
