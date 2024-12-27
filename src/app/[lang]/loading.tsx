import { LoadingSpinner } from '@/components/ui/spinner';

const ListLoading = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full h-96 flex justify-center items-center ${className}`}
    >
      <LoadingSpinner className="size-8" />
    </div>
  );
};

export default ListLoading;
