import React from 'react';
import Shows from './components/Shows';
import PageWrapper from '../components/PageWrapper';

export default async function ShowsPage({ searchParams }: Props) {
  const page = parseInt((await searchParams).page || '1', 10);
  return (
    <PageWrapper>
      <div>
        <h1 className="mt-10 text-4xl font-bold">Popular TV shows</h1>
        <p className="text-gray-600 mt-4">
          Here are some popular TV shows that you might like.
        </p>
      </div>
      <Shows page={page} />
    </PageWrapper>
  );
}
