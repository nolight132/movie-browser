import React from 'react';
import Movies from './components/Movies';
import PageWrapper from '../components/PageWrapper';

export default async function MoviesPage({ searchParams }: Props) {
  const page = parseInt((await searchParams).page || '1', 10);
  return (
    <PageWrapper>
      <div>
        <h1 className="mt-10 text-4xl font-bold">Popular movies</h1>
        <p className="text-gray-600 mt-4">
          Here are some popular movies that you might like.
        </p>
      </div>
      <Movies page={page} />
    </PageWrapper>
  );
}
