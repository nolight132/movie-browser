import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ListLoading';
import { getPopularTvShows } from '@/app/lib/tmdb';

const ContentList = dynamic(() => import('../../components/ContentList'), {
  loading: () => <ListLoading />,
});

export default async function Shows() {
  const content = (await getPopularTvShows(1)).results;

  return <ContentList content={content} />;
}
