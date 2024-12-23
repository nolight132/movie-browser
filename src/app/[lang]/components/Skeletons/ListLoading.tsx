import { LoadingSpinner } from '@/components/ui/spinner';

const ListLoading = () => {
  return (
    <div className="w-full h-96 flex justify-center items-center">
      <LoadingSpinner className="size-8" />
    </div>
  );
};

export default ListLoading;
