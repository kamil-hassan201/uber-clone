import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";

export const store = configureStore({
  reducer: {
    nav: navReducer,
  },
});

// types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
