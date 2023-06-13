import { configureStore } from "@reduxjs/toolkit";
import { yurtsReducer } from "./yurts/yurtsSlice";

export const store = configureStore({
  reducer: {
    yurts: yurtsReducer,
  },
});
