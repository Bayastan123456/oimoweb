import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  yurts: [],
};

export const yurtsSlice = createSlice({
  name: "@yurts",
  initialState,
  reducers: {},
});

export const yurtsReducer = yurtsSlice.reducer;
