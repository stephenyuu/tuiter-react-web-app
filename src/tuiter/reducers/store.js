import { configureStore } from "@reduxjs/toolkit";
import tuitsReducer from "../tuits/tuits-reducer";
import whoReducer from "./who-reducer";

const store = configureStore({
  reducer: {
    who: whoReducer,
    tuitsData: tuitsReducer,
  },
});

export default store;
