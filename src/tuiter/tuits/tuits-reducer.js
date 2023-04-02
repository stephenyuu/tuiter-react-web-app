import { createSlice } from "@reduxjs/toolkit";
import {
  createTuitThunk,
  deleteTuitThunk,
  findTuitsThunk,
  updateTuitThunk,
} from "../../services/tuits-thunks";

const initialState = {
  tuits: [],
  loading: false,
};

/*
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
*/

const tuitsSlice = createSlice({
  name: "tuits",
  initialState,
  reducers: {
    /*
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
      */
  },
  extraReducers: {
    [findTuitsThunk.pending]: (state) => {
      state.loading = true;
      state.tuits = [];
    },
    [findTuitsThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = payload;
    },
    [findTuitsThunk.rejected]: (state, action) => {
      state.loading = false;
      state.error = action.error;
    },
    [deleteTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits = state.tuits.filter((t) => t._id !== payload);
    },
    [createTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      state.tuits.unshift(payload);
    },
    [updateTuitThunk.fulfilled]: (state, { payload }) => {
      state.loading = false;
      const tuitNdx = state.tuits.findIndex((t) => t._id === payload._id);
      state.tuits[tuitNdx] = {
        ...state.tuits[tuitNdx],
        ...payload,
      };
    },
  },
});

export default tuitsSlice.reducer;
export const { dislikeTuit, likeTuit, createTuit, deleteTuit } =
  tuitsSlice.actions;
