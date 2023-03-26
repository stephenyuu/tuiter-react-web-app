import { createSlice } from "@reduxjs/toolkit";
import tuitsArray from "./tuits.json";

const currentUser = {
  userName: "ElonMusk",
  handle: "@elonmusk",
  image: "tuiter-ceo-pfp.jpeg",
};

const templateTuit = {
  ...currentUser,
  topic: "Energy",
  time: "2h",
  liked: false,
  replies: 0,
  retuits: 0,
  likes: 0,
};

const tuitsSlice = createSlice({
  name: "tuits",
  initialState: tuitsArray,
  reducers: {
    deleteTuit: (state, action) => {
      const index = state.findIndex(tuit => tuit._id === action.payload);
      state.splice(index, 1);
    },
    createTuit: (state, action) => {
      state.unshift({
        ...action.payload,
        ...templateTuit,
        _id: (new Date()).getTime(),
      })
    },
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
export const { dislikeTuit, likeTuit, createTuit, deleteTuit } = tuitsSlice.actions;
