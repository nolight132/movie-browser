'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ListLoading';
import SearchInput from './SearchInput';
const ContentList = dynamic(() => import('../../components/ContentList'), {
  loading: () => <ListLoading />,
});

const SearchPageLogic = () => {
  const [content, setContent] = useState<Content[]>([]);
  const [query, setQuery] = useState<string>('');

  const setInitialContent = async () => {
    const res = await fetch(`/api/movies/popular`);
    const data = await res.json();
    setContent(data || []);
  };
  useEffect(() => {
    setInitialContent();
  }, []);

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
    fetchContent(newQuery);
    setQuery(newQuery);
  };

  return (
    <div>
      <h1 className="text-4xl font-bold mt-10">
        {query ? `Search for: “${query}”` : 'Search for something!'}
      </h1>
      <SearchInput onSearch={handleSearch} />
      <ContentList content={content} />
    </div>
  );
};

export default SearchPageLogic;
