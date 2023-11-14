import axios from 'axios';

const API_ENDPOINT = `https://www.omdbapi.com/?apikey=${
  import.meta.env.VITE_APP_MOVIE_API_KEY
}`;

export const fetchMovies = async (movieName) => {
  const res = await axios.get(`${API_ENDPOINT}&s=${movieName}`);
  return res;
};
