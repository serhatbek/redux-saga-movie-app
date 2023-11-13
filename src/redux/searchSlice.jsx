import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  results: [],
  totalResults: 0,
  page: 0,
  totalPages: 0,
  isFetching: false,
};

const searchSlice = createSlice({
  name: 'searchSlice',
  initialState,
  reducers: {
    searchMovies: (state) => {
      state.isFetching = true;
    },
    fetchedSearchMovies: (state, action) => {
      state.isFetching = false;
      state.results = action.payload.results;
      state.totalResults = action.payload.total_results;
      state.page = action.payload.page;
      state.totalPages = action.payload.total_pages;
    },
    resetState: (state) => {
      state = initialState;
      // state.results = [],
      // state.totalResults = 0,
      // state.page = 0,
      // state.totalPages = 0,
      // state.isFetching = false,
    },
  },
});

export const { searchMovies, fetchedSearchMovies, resetState } =
  searchSlice.actions;
export default searchSlice.reducer;
