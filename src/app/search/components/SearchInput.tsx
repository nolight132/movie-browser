'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Filters from './Filters';

const SearchInput = ({ query }: { query: string }) => {
  const [input, setInput] = useState(query);
  const [debouncedInput, setDebouncedInput] = useState(query);
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 100);

    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    if (debouncedInput) {
      router.push(`/search?query=${encodeURIComponent(debouncedInput)}`);
    } else {
      router.push('/search');
    }
  }, [debouncedInput, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex gap-3 items-center max-w-screen">
      <Input
        className="max-w-80 p-2 rounded-md"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder="Stranger Things..."
      />
      <Filters setInput={setInput} />
    </div>
  );
};

export default SearchInput;
