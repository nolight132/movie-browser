'use client';

import { useEffect, useState } from 'react';

export default function EpisodePill({ content }: { content: Content }) {
  const [seasons, setSeasons] = useState<number | null>(null);
  const [episodes, setEpisodes] = useState<number | null>(null);

  useEffect(() => {
    // Check if the details are already cached in localStorage
    const cachedData = localStorage.getItem(`tv-show-${content.id}`);

    if (cachedData) {
      // Parse the cached data and set it
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

        // Store the fetched data in localStorage
        localStorage.setItem(`tv-show-${content.id}`, JSON.stringify(data));

        setSeasons(data.number_of_seasons);
        setEpisodes(data.number_of_episodes);
      };

      fetchDetails();
    }
  }, [content.id]);

  if (seasons === null || episodes === null) {
    return (
      <div className="absolute top-2 left-2 flex bg-gray-500/80 rounded-full">
        <div className="p-2 h-6 rounded-full shadow-lg text-xs flex gap-2 items-center justify-center text-white font-semibold">
          <div className="w-12 bg-gray-300 animate-pulse h-3"></div>
          <div className="h-3 border-l border-gray-400"></div>
          <div className="w-12 bg-gray-300 animate-pulse h-3"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute top-2 left-2 flex bg-gray-500/80 rounded-full">
      <div className="p-2 h-6 rounded-full shadow-lg text-xs flex gap-2 items-center justify-center text-white font-semibold">
        <div>
          {seasons} {seasons === 1 ? 'Season' : 'Seasons'}
        </div>
        <div className="h-3 border-l border-gray-400"></div>
        <div>
          {episodes} {episodes === 1 ? 'Episode' : 'Episodes'}
        </div>
      </div>
    </div>
  );
}
