import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../components/ListLoading';

const ContentList = dynamic(() => import('../components/ContentList'), {
  loading: () => <ListLoading />,
});

async function fetchContent() {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/tv/popular`, {
    cache: 'force-cache',
  });
  const data = await res.json();
  return data || [];
}

export default async function Shows() {
  const content = await fetchContent();

  return <ContentList content={content} />;
}
