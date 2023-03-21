import { createSlice } from "@reduxjs/toolkit";
import initialTuits from "./tuits.json";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: initialTuits,
  reducers: {
    updateTuitStats: (state, action) => {
      state = state.map((tuit) =>
        tuit._id === action.payload._id ? action.payload : tuit
      );
    },
  },
});

export default tuitsSlice.reducer;
export const { updateTuitStats } = tuitsSlice.actions;
