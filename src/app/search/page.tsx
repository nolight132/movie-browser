"use client"; // This makes the component a Client Component

import React, { useState } from "react";
import MovieListItem from "../components/MovieListItem";

const MovieSearchInput = ({
  onSearch,
}: {
  onSearch: (query: string) => void;
}) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onSearch(query);
  };

  return (
    <div className="flex flex-col items-center mt-10">
      <input
        className="w-64 p-2 text-black rounded-md"
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search for movies..."
      />
    </div>
  );
};

const MovieList = ({ movies }: { movies: Movie[] }) => {
  if (!movies.length)
    return <p className="text-center mt-4">No movies found</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-10">
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );
};

const MoviePage = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [query, setQuery] = useState<string>("");

  const fetchMovies = async (query: string) => {
    if (!query) return;

    try {
      const res = await fetch(`/api/search?query=${query}`);

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      // Ensure the response has a body before parsing as JSON
      const data = await res.json();
      if (!data || !Array.isArray(data)) {
        // If the response is empty or not an array, log an error or handle it accordingly
        console.error("Invalid response:", data);
        return;
      }

      setMovies(data || []);
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    fetchMovies(newQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <h1 className="text-center text-4xl font-bold mt-10">
        Search for Movies
      </h1>
      <MovieSearchInput onSearch={handleSearch} />
      <p className="text-center text-gray-600 mt-4">
        Results for: &ldquo;{query}&ldquo;
      </p>
      <MovieList movies={movies} />
    </div>
  );
};

export default MoviePage;
