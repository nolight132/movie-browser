'use client';

import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import Filters from './Filters';
import type { getDictionary } from '@/get-dictionary';

const SearchInput = ({
  query,
  dictionary,
}: {
  query: string;
  dictionary: Awaited<ReturnType<typeof getDictionary>>;
}) => {
  const [input, setInput] = useState(query);
  const [debouncedInput, setDebouncedInput] = useState(query);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedInput(input);
    }, 100);

    return () => clearTimeout(timer);
  }, [input]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (debouncedInput) {
      params.set('query', encodeURIComponent(debouncedInput));
    } else {
      params.delete('query');
    }

    const newUrl = params.toString() ? `${pathname}?${params.toString()}` : pathname;

    router.push(newUrl);
  }, [debouncedInput, router, pathname]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div className="flex gap-3 items-center max-w-screen">
      <Input
        className="max-w-full sm:max-w-80 p-2 rounded-md"
        type="text"
        value={input}
        onChange={handleInputChange}
        placeholder={dictionary.placeholder}
      />
      <Filters setInput={setInput} dictionary={dictionary} />
    </div>
  );
};

export default SearchInput;
