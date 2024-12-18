'use client';

import { useEffect, useState } from 'react';

export default function EpisodePill({
  isMovie,
  content,
}: {
  isMovie: boolean;
  content: Content;
}) {
  const [details, setDetails] = useState<Content | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDetails = async () => {
      if (!isMovie) {
        const res = await fetch(`/api/tv/${content.id}`);
        const fetchedDetails: Content = await res.json();
        setDetails(fetchedDetails);
        setLoading(false); // Set loading to false when data is fetched
      }
    };
    fetchDetails();
  }, [isMovie, content]);

  if (isMovie || loading || !details) {
    return null; // Or a fallback component if you want something to show before loading finishes
  }

  return (
    <div className="absolute top-2 left-2 flex bg-gray-500/80 rounded-full">
      <div className="p-2 h-6 rounded-full shadow-lg text-xs flex gap-2 items-center justify-center text-white font-semibold">
        <div>
          {details.number_of_seasons}{' '}
          {details.number_of_seasons === 1 ? 'Season' : 'Seasons'}
        </div>
        <div className="h-3 border-l border-gray-400"></div>
        <div>
          {details.number_of_episodes}{' '}
          {details.number_of_episodes === 1 ? 'Episode' : 'Episodes'}
        </div>
      </div>
    </div>
  );
}
