import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
  favCount_val: 0,
  movies: [],
};
const favouriteSlice = createSlice({
  name: "favourite_slice",
  initialState: INITIAL_STATE,
  reducers: {
    increaseCounter: (state, action) => {
      state.favCount_val = state.favCount_val + 1;
    },
    decreaseCounter: (state, action) => {
      state.favCount_val = state.favCount_val - 1;
    },

    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },

    removeMovie: (state, action) => {
      state.movies = state.movies.filter(
        (movie) => movie.id !== action.payload
      );
    },
      

  },
});
export const { increaseCounter, decreaseCounter, addMovie, removeMovie } =
  favouriteSlice.actions;

export default favouriteSlice.reducer;
