import React from 'react';
import ContentList from '../components/ContentList';

export default async function Movies() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/movies/popular`);
  const content = await res.json();

  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2">
        <div>
          <h1 className="mt-10 text-4xl font-bold">Popular movies</h1>
          <p className="text-gray-600 mt-4">
            Here are some popular movies that you might like.
          </p>
        </div>
        <ContentList content={content} />
      </div>
    </div>
  );
}
