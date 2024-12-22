import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ContentList/ListLoading';
import { getPopularMovies } from '@/app/lib/tmdb';

const ContentList = dynamic(
  () => import('../../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

export default async function Movies() {
  const content: Content[] = (await getPopularMovies(1)).results;

  return <ContentList content={content} />;
}
