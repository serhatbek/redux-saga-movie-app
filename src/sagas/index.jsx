import {
  all,
  call,
  delay,
  put,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { fetchedSearchMovies, searchMovies } from '../redux/searchSlice';
import TheMovieDbApi from '../lib/api';

const api = new TheMovieDbApi(import.meta.env.VITE_APP_TMDB_KEY);

function* fetchSearchMovies(action) {
  yield delay(500);

  yield put(fetchedSearchMovies(yield call(api.searchMovies, action.payload)));
}

export default function* watcherSaga() {
  yield all([yield takeLatest(searchMovies.type, fetchSearchMovies)]);
}
