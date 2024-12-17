import React from 'react';
import dynamic from 'next/dynamic';
const SearchPageLogic = dynamic(() => import('./components/SearchPageLogic'));

const SearchPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center content-center">
      <div className="w-8/12">
        <SearchPageLogic />
      </div>
    </div>
  );
};

export default SearchPage;
