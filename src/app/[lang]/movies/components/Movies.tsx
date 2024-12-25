import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../components/skeletons/ListLoading';
import { getPopularMovies } from '@/app/[lang]/lib/tmdb';
import PaginationView from '@/app/[lang]/components/ContentList/PagintationView';
import { Locale } from '@/i18n-config';
import { getDictionary } from '@/get-dictionary';

const ContentList = dynamic(
  () => import('../../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  }
);

let content: Content[];

export default async function Movies({
  page,
  lang,
}: {
  page: number;
  lang: Locale;
}) {
  const dictionary = await getDictionary(lang);
  const data: ApiResponse = await getPopularMovies(page, lang);

  if (data.results.length > 0) {
    content = data.results;
  }

  return (
    <>
      <ContentList content={content} dictionary={dictionary} />
      <PaginationView totalPages={data.total_pages} />
    </>
  );
}
