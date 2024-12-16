import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ListLoading';

const ContentList = dynamic(() => import('../components/ContentList'), {
  loading: () => <ListLoading />,
});

async function fetchContent() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/movies/popular`, {
    cache: 'force-cache',
  });
  const data = await res.json();
  return data || [];
}

export default async function Movies() {
  const content = await fetchContent();

  return <ContentList content={content} />;
}
