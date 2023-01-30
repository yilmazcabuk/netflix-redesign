import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const api = axios.create({
  baseURL: BASE_URL,
  params: { api_key: API_KEY },
});

const requests = {
  fetchTrending: () =>
    api.get('/trending/all/week', {
      params: {
        language: 'en-US',
      },
    }),
  fetchNetflixOriginals: () =>
    api.get('/discover/movie', {
      params: {
        with_networks: 213,
      },
    }),
  fetchTopRated: () =>
    api.get('/movie/top_rated', {
      params: {
        language: 'en-US',
      },
    }),
  fetchActionMovies: () =>
    api.get('/discover/movie', {
      params: {
        language: 'en-US',
        with_genres: 28,
      },
    }),
  fetchComedyMovies: () =>
    api.get('/discover/movie', {
      params: {
        language: 'en-US',
        with_genres: 35,
      },
    }),
  fetchHorrorMovies: () =>
    api.get('/discover/movie', {
      params: {
        language: 'en-US',
        with_genres: 27,
      },
    }),
  fetchRomanceMovies: () =>
    api.get('/discover/movie', {
      params: {
        language: 'en-US',
        with_genres: 10749,
      },
    }),
  fetchDocumentaries: () =>
    api.get('/discover/movie', {
      params: {
        language: 'en-US',
        with_genres: 99,
      },
    }),
};
export default requests;
