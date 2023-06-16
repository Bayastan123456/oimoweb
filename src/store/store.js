import { configureStore } from "@reduxjs/toolkit";
import { yurtsReducer } from "./yurts/yurtsSlice";
import { authReducer } from "./auth/authSlice";

export const store = configureStore({
  reducer: {
    yurts: yurtsReducer,
    auth: authReducer,
  },
});
