import React from 'react';
import MovieListItem from '../components/MovieListItem';

async function fetchMovies(): Promise<Movie[]> {
  const apiKey = process.env.TMDB_API_KEY;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
  );
  const data = await res.json();
  return data.results;
}
export default async function Movies() {
  const movies = await fetchMovies();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center mt-10 text-4xl font-bold">Popular movies</h1>
      <div>
        <p className="text-center text-gray-600 mt-4">
          Here are some popular movies that you might like.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
        {movies.map((movie) => (
          <MovieListItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}
