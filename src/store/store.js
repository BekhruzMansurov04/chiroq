import { configureStore } from "@reduxjs/toolkit";
import lightReducer from "./lightReducer";

const store = configureStore({
  reducer: {
    light: lightReducer,
  },
});

export default store;