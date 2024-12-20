import React from 'react';
import Movies from './components/Movies';
import PageWrapper from '../components/PageWrapper';

export default function MoviesPage() {
  return (
    <PageWrapper>
      <div>
        <h1 className="mt-10 text-4xl font-bold">Popular movies</h1>
        <p className="text-gray-600 mt-4">
          Here are some popular movies that you might like.
        </p>
      </div>
      <Movies />
    </PageWrapper>
  );
}
