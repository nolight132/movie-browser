import { Skeleton } from '@/components/ui/skeleton';

const EpisodePillSkeleton = () => (
  <div className="absolute top-2 left-2 flex bg-background/80 rounded-full">
    <div className="p-2 h-6 rounded-full shadow-lg text-sm flex gap-2 items-center justify-center text-gray-300 font-semibold">
      <Skeleton className="w-6 h-3 rounded-lg" />
      <div className="h-3 border-l"></div>
      <Skeleton className="w-6 h-3 rounded-lg" />
    </div>
  </div>
);

export default EpisodePillSkeleton;
