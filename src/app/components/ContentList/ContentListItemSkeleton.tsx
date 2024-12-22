'use client';

import { Skeleton } from '@/components/ui/skeleton'; // Assuming you have a Skeleton component
import { Card, CardContent, CardDescription } from '@/components/ui/card';
import Link from 'next/link';
import EpisodePillSkeleton from './EpisodePillSkeleton';
import { StarSolid } from '@mynaui/icons-react';

export default function ContentListItemSkeleton() {
  return (
    <Card className="relative w-60 lg:hover:scale-105 transition-all">
      <Link href="#" className="block">
        <div className="w-full h-80 relative">
          <Skeleton className="w-full h-full rounded-t-lg" />
        </div>

        <CardContent className="p-4">
          <EpisodePillSkeleton />

          <div className="pb-2">
            <div className="w-full flex justify-between items-center">
              <Skeleton className="w-20 h-3 rounded-full" />
              <Skeleton className="w-10 h-3 rounded-full" />
            </div>
            <div className="flex items-center mt-1">
              <StarSolid
                style={{ color: '#FFD700' }}
                className="w-4 h-4 mr-1"
              />
              <Skeleton className="w-5 h-3 rounded-full"></Skeleton>
            </div>
          </div>

          <CardDescription>
            {/* Skeleton for Overview */}
            <Skeleton className="w-48 h-3 rounded-lg" />
            <Skeleton className="w-36 h-3 rounded-lg mt-2" />
          </CardDescription>
        </CardContent>
      </Link>
    </Card>
  );
}
