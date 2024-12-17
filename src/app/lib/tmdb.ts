const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const searchMulti = async (query: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }

  return response.json();
};

export const searchMovies = async (query: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchTvShows = async (query: string, page = 1) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularTvShows = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTopRatedMovies = async (page = 1) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};