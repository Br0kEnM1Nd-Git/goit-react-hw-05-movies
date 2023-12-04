import axios from 'axios';

axios.defaults.params = {
  api_key: 'ac8fbb226a37f835673d1586bcf6a4c6',
};
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

class Api {
  async getTrending() {
    const { data } = await axios.get('trending/movie/day');
    return data.results;
  }

  async searchMovies(query) {
    const { data } = await axios.get(`search/movie?${query}`);
    return data;
  }

  async getMovieDetails(movieId) {
    const { data } = await axios.get(`movie/${movieId}`);
    return data;
  }

  async getMovieCast(movieId) {
    const { data } = await axios.get(`movie/${movieId}/credits`);
    return data;
  }

  async getMovieReviews(movieId) {
    const { data } = await axios.get(`movie/${movieId}/reviews`);
    return data;
  }
}

const api = new Api();
export default api;
