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
    getMovie: (id) => {
      return id;
    },
    setMovie: (state, action) => {
      state.movie = action.payload;
    },
  },
});

export const { getMovies, setMovies, getMovie, setMovie, resetMovie } =
  movieSlice.actions;
export default movieSlice.reducer;
