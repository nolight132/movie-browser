const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getDetails = async (c: Content) => {
  const isMovie: boolean = c.title ? true : false;
  if (isMovie) {
    return await getMovieDetails(c.id);
  } else {
    return await getTvShowDetails(c.id);
  }
};

export const getMovieDetails = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTvShowDetails = async (id: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${TMDB_API_KEY}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchMulti = async (query: string, page: number) => {
  if (!query || query === ' ') {
    return await getTopRatedTvShows(page);
  }
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }

  return response.json();
};

export const searchMovies = async (query: string, page: number) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchTvShows = async (query: string, page: number) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&query=${query}`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularMovies = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularTvShows = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/popular?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTopRatedMovies = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTopRatedTvShows = async (page: number) => {
  const response = await fetch(
    `${BASE_URL}/tv/top_rated?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false`
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};
