'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ListLoading';
import SearchInput from './SearchInput';
const ContentList = dynamic(() => import('../../components/ContentList'), {
  loading: () => <ListLoading />,
});

const SearchPageLogic = () => {
  const [content, setContent] = useState<Content[]>([]);
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
    <div>
      <h1 className="text-4xl font-bold mt-10">
        Search for: &ldquo;{query}&ldquo;
      </h1>
      <SearchInput onSearch={handleSearch} />
      <ContentList content={content} />
    </div>
  );
};

export default SearchPageLogic;
