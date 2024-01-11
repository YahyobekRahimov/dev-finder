import { createSlice } from "@reduxjs/toolkit";

const devSlice = createSlice({
   name: "Developer found",
   initialState: {},
   reducers: {
      fetchDev: (state, { payload }) => {
         state = payload;
         return state;
      },
   },
});

export const { fetchDev } = devSlice.actions;

export default devSlice.reducer;
