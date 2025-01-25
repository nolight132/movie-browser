'use client';
import { Button } from '@/components/ui/button';
import { useRouter, usePathname } from 'next/navigation';
import { Filter, Delete } from '@mynaui/icons-react';
import type { getDictionary } from '@/get-dictionary';

const Filters = ({
  setInput,
  dictionary,
}: {
  setInput: (input: string) => void;
  dictionary: Awaited<ReturnType<typeof getDictionary>>['search'];
}) => {
  const router = useRouter();
  const pathname = usePathname();

  const clear = () => {
    setInput('');
  };

  return (
    <div className="flex gap-3">
      <Button variant="outline" className="sm:flex items-center hidden">
        <Filter className="mr-2" />
        {dictionary.filters.filters_button_label}
      </Button>
      <Button
        variant={'default'}
        onClick={clear}
        className="sm:flex items-center hidden"
      >
        <Delete className="mr-2" />
        {dictionary.filters.clear_button_label}
      </Button>

      <Button variant="outline" className="sm:hidden">
        <Filter />
      </Button>
      <Button variant={'default'} onClick={clear} className="sm:hidden">
        <Delete />
      </Button>
    </div>
  );
};

export default Filters;
