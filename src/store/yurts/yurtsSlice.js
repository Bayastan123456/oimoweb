import { createSlice } from "@reduxjs/toolkit";
import { getOneYurt } from "./yurtsActions";

const initialState = {
  yurts: [],
  yurtDetails: {},
};

export const yurtsSlice = createSlice({
  name: "@yurts",
  initialState,
  reducers: {
    setYurts(state, action) {
      state.yurts = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getOneYurt.fulfilled, (state, action) => {
      state.yurtDetails = action.payload;
    });
  },
});

export const yurtsReducer = yurtsSlice.reducer;
export const { setYurts } = yurtsSlice.actions;
