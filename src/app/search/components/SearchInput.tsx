'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';

const SearchInput = ({ query }: { query: string }) => {
  const [input, setInput] = useState(query);
  const router = useRouter();

  useEffect(() => {
    if (input) {
      router.push(`/search?query=${encodeURIComponent(input)}`);
    } else {
      router.push('/search');
    }
  }, [input, router]);
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <Input
      className="w-64 p-2 mt-4 rounded-md"
      type="text"
      value={input}
      onChange={handleInputChange}
      placeholder="Stranger Things..."
    />
  );
};

export default SearchInput;
