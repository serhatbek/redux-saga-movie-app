import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  movieList: [],
  movie: {},
};

const movieSlice = createSlice({
  name: 'movie',
  initialState,
  reducers: {
    getMovies: (name) => {
      return name;
    },
    setMovies: (state, action) => {
      state.movieList = action.payload;
    },
  },
});

export const { getMovies, setMovies } = movieSlice.actions;
export default movieSlice.reducer;
