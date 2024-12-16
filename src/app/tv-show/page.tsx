import React from 'react';
import Shows from './components/Shows';

export default function ShowsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-1/2">
        <div>
          <h1 className="mt-10 text-4xl font-bold">Popular TV shows</h1>
          <p className="text-gray-600 mt-4">
            Here are some popular TV shows that you might like.
          </p>
        </div>
        <Shows />
      </div>
    </div>
  );
}
