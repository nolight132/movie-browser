import React, { useState } from 'react';

const SearchInput = ({ onSearch }: { onSearch: (query: string) => void }) => {
  const [query, setQuery] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(query);
    setQuery(e.target.value);
  };

  return (
    <div className="flex flex-col mt-4">
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

export default SearchInput;
