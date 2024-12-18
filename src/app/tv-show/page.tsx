import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ListLoading';

const Shows = dynamic(() => import('./components/Shows'), {
  loading: () => <ListLoading />,
  ssr: true,
});

export default function ShowsPage() {
  return (
    <div className="min-h-screen flex flex-col items-center">
      <div className="w-8/12">
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
