import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yurts: [],
};

export const yurtsSlice = createSlice({
  name: "@yurts",
  initialState,
  reducers: {
    setYurts(state, action) {
      state.yurts = action.payload;
    },
  },
});

export const yurtsReducer = yurtsSlice.reducer;
export const { setYurts } = yurtsSlice.actions;
