'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { Filter, Delete } from '@mynaui/icons-react';

const Filters = ({ setInput }: { setInput: (input: string) => void }) => {
  const router = useRouter();

  const clear = () => {
    router.push('/search');
    setInput('');
  };

  return (
    <div className="flex gap-3">
      <Button variant="outline" className="sm:flex items-center hidden">
        <Filter className="mr-2" />
        Filters
      </Button>
      <Button
        variant={'default'}
        onClick={clear}
        className="sm:flex items-center hidden"
      >
        <Delete className="mr-2" />
        Clear
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
