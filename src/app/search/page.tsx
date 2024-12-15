'use client';

import React, { useState } from 'react';
import MovieList from '../components/ContentList';
import SearchInput from '../components/SearchInput';

const res = await fetch('/api/movies/popular');
const data = await res.json();

const MoviePage = () => {
  const [movies, setContent] = useState<Content[]>(data);
  const [query, setQuery] = useState<string>('');

  const fetchContent = async (query: string) => {
    if (!query) return;

    try {
      const res = await fetch(`/api/search?query=${query}`);
      const data = await res.json();
      setContent(data || []);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
    fetchContent(newQuery);
  };

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2">
        <div>
          <h1 className="text-4xl font-bold mt-10">
            Search for: &ldquo;{query}&ldquo;
          </h1>
          <SearchInput onSearch={handleSearch} />
        </div>
        <MovieList content={movies} />
      </div>
    </div>
  );
};

export default MoviePage;
