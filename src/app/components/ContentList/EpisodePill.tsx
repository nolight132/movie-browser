'use client';

import { useEffect, useState } from 'react';
import EpisodePillSkeleton from './EpisodePillSkeleton';
import { Separator } from '@/components/ui/separator';

export default function EpisodePill({ content }: { content: Content }) {
  const [seasons, setSeasons] = useState<number | null>(null);
  const [episodes, setEpisodes] = useState<number | null>(null);

  useEffect(() => {
    const cachedData = localStorage.getItem(`tv-show-${content.id}`);

    if (cachedData) {
      const data = JSON.parse(cachedData);
      setSeasons(data.number_of_seasons);
      setEpisodes(data.number_of_episodes);
    } else {
      const fetchDetails = async () => {
        const res = await fetch(`/api/tv/${content.id}`);
        if (!res.ok) {
          console.error('Error fetching TV show details');
          return;
        }
        const data = await res.json();
        localStorage.setItem(`tv-show-${content.id}`, JSON.stringify(data));
        setSeasons(data.number_of_seasons);
        setEpisodes(data.number_of_episodes);
      };

      fetchDetails();
    }
  }, [content.id]);

  if (!seasons || !episodes) {
    return <EpisodePillSkeleton />;
  }

  return (
    <div className="absolute top-2 left-2 flex bg-background/90 rounded-full">
      <div className="p-2 h-5 rounded-full shadow-lg text-xs flex gap-2 items-center justify-center text-foreground/90 font-semibold">
        <div>{seasons}S</div>
        <Separator orientation="vertical" className="h-2 bg-foreground/90" />
        <div>{episodes}EP</div>
      </div>
    </div>
  );
}
