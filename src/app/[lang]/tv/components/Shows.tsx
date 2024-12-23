import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/ContentList/ListLoading';
import { getPopularTvShows } from '@/app/[lang]/lib/tmdb';
import PaginationView from '@/app/[lang]/components/ContentList/PagintationView';
import { Locale } from '@/i18n-config';

const ContentList = dynamic(
  () => import('../../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[];

export default async function Shows({
  page,
  lang,
}: {
  page: number;
  lang: Locale;
}) {
  const data: ApiResponse = await getPopularTvShows(page, lang);

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
