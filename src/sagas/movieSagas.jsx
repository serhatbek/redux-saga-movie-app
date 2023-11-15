import { put, takeLatest, fork, call } from 'redux-saga/effects';
import {
  getMovie,
  getMovies,
  setMovie,
  setMovies,
} from '../redux/feature/movieSlice';
import { fetchMovies, fetchMovie } from '../lib/api';

function* onLoadMoviesAsync({ payload }) {
  try {
    const movieName = payload;
    const response = yield call(fetchMovies, movieName);
    if (response.status === 200) {
      yield put(setMovies({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovieAsync({ payload }) {
  try {
    const movieID = payload;
    const response = yield call(fetchMovie, movieID);
    if (response.status === 200) {
      yield put(setMovie({ ...response.data }));
    }
  } catch (error) {
    console.log(error);
  }
}

function* onLoadMovies() {
  yield takeLatest(getMovies.type, onLoadMoviesAsync);
}

function* onLoadMovie() {
  yield takeLatest(getMovie.type, onLoadMovieAsync);
}

export const moviesSagas = [fork(onLoadMovies), fork(onLoadMovie)];
