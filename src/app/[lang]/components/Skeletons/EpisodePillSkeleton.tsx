import { Separator } from '@/components/ui/separator';
import { Skeleton } from '@/components/ui/skeleton';

const EpisodePillSkeleton = () => (
  <div className="absolute top-2 left-2 flex bg-background/80 rounded-full">
    <div className="p-2 h-5 rounded-full shadow-lg text-sm flex gap-2 items-center justify-center text-gray-300 font-semibold">
      <Skeleton className="w-6 h-2 rounded-lg" />
      <Separator orientation="vertical" className="h-2 bg-foreground/90" />
      <Skeleton className="w-6 h-2 rounded-lg" />
    </div>
  </div>
);

export default EpisodePillSkeleton;
