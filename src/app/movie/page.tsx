import React from "react";
import MovieListItem from "../components/MovieListItem";

async function fetchMovies(): Promise<Movie[]> {
  const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
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
      <h1 className="text-center mt-20 text-4xl font-bold">Popular movies</h1>
      <div>{movies.map((movie) => MovieListItem({ movie }))}</div>
    </div>
  );
}
