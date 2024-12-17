import React from 'react';
import Movies from './components/Movies';

export default function MoviesPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-8/12">
        <div>
          <h1 className="mt-10 text-4xl font-bold">Popular movies</h1>
          <p className="text-gray-600 mt-4">
            Here are some popular movies that you might like.
          </p>
        </div>
        <Movies />
      </div>
    </div>
  );
}
