import axios from 'axios';

export default class TheMovieDbApi {
  apiBaseUrl = 'https://www.themoviedb.org/3';
  apiKey;

  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  searchMovies = async (query) => {
    const res = await axios.get(
      `${this.apiBaseUrl}/search/movie?api_key=${this.apiKey}&query=${query}`,
      {
        headers: {
          Authorization: 'bearer ' + this.apiKey,
          mode: 'no-cors',
        },
      }
    );
    return res;
  };

  getGenres = async () => {
    const res = await axios.get(
      `${this.apiBaseUrl}/genre/movie?api_key=${this.apiKey}`
    );
    return res;
  };
}
