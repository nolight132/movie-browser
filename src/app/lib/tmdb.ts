const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMulti = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&query=${query}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }

  return response.json();
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?query=${query}&page=${page}&api_key=${TMDB_API_KEY}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchTvShows = async (query: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?query=${query}&page=${page}&api_key=${TMDB_API_KEY}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?page=${page}&api_key=${TMDB_API_KEY}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularTvShows = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?page=${page}&api_key=${TMDB_API_KEY}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};
