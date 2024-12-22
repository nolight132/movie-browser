import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ContentList/ListLoading';
import { getPopularMovies } from '@/app/lib/tmdb';
import PaginationView from '@/app/components/ContentList/PagintationView';

const ContentList = dynamic(
  () => import('../../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[];

export default async function Movies({ page }: { page: number }) {
  const data: ApiResponse = await getPopularMovies(page);

  if (data.results.length > 0) {
    content = data.results;
  }

  return (
    <>
      <ContentList content={content} />
      <PaginationView totalPages={data.total_pages} />
    </>
  );
}
