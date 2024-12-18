'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

const SearchInput = ({ query }: { query: string }) => {
  const [input, setInput] = useState(query);
  const router = useRouter();

  useEffect(() => {
    if (input) {
      router.push(`/search?query=${encodeURIComponent(input)}`);
    }
  }, [input, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
    e.preventDefault();
  };

  return (
    <input
      className="w-64 p-2 mt-4 text-black rounded-md"
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Search for movies..."
    />
  );
};

export default SearchInput;
