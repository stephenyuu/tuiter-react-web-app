import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "./tuits.json";

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuitsArray,
  reducers: {
    dislikeTuit: (state, action) => {
      const tuitIndex = state.findIndex(
        (tuit) => tuit._id === action.payload._id
      );
      state[tuitIndex].liked = false;
      state[tuitIndex].likes = state[tuitIndex].likes - 1;
    },
    likeTuit: (state, action) => {
      const tuitIndex = state.findIndex(
        (tuit) => tuit._id === action.payload._id
      );
      state[tuitIndex].liked = true;
      state[tuitIndex].likes = state[tuitIndex].likes + 1;
    },
  },
});

export default tuitsSlice.reducer;
export const { dislikeTuit, likeTuit } = tuitsSlice.actions;
