import React from 'react';
import dynamic from 'next/dynamic';
const SearchPageLogic = dynamic(() => import('../components/SearchPageLogic'));

const SearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2">
        <SearchPageLogic />
      </div>
    </div>
  );
};

export default SearchPage;
