const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

export const getDetails = async (c: Content, lang: string) => {
  const isMovie: boolean = !!c.title;
  if (isMovie) {
    return await getMovieDetails(c.id, lang);
  }
  return await getTvShowDetails(c.id, lang);
};

export const getMovieDetails = async (id: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/movie/${id}?api_key=${TMDB_API_KEY}&include_adult=false&language=${lang}&append_to_response=credits`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTvShowDetails = async (id: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/tv/${id}?api_key=${TMDB_API_KEY}&include_adult=false&language=${lang}&append_to_response=credits`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchMulti = async (
  query: string,
  page: number,
  lang: string,
) => {
  if (!query || query === ' ') {
    return await getTopRatedTvShows(page, lang);
  }
  const response = await fetch(
    `${BASE_URL}/search/multi?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&query=${query}`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }

  return response.json();
};

export const searchMovies = async (
  query: string,
  page: number,
  lang: string,
) => {
  const response = await fetch(
    `${BASE_URL}/search/movie?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&query=${query}`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const searchTvShows = async (
  query: string,
  page: number,
  lang: string,
) => {
  const response = await fetch(
    `${BASE_URL}/search/tv?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&query=${query}`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularMovies = async (page: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/movie/popular?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getPopularTvShows = async (page: number, lang: string) => {
  if (lang !== 'en') {
    return await getTopRatedTvShows(page, lang);
  }
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&without_genres=16&sort_by=vote_count.desc&vote_average.gte=7`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTopRatedMovies = async (page: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/movie/top_rated?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTopRatedTvShows = async (page: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/discover/tv?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&without_genres=16&sort_by=vote_count.desc&vote_average.gte=7`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};

export const getTrendingTvShows = async (page: number, lang: string) => {
  const response = await fetch(
    `${BASE_URL}/trending/all/day?api_key=${TMDB_API_KEY}&page=${page}&include_adult=false&language=${lang}&without_genres=16`,
  );
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.status_message || 'Failed to search');
  }
  return response.json();
};
