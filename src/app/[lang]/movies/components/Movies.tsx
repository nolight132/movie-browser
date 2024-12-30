import React from 'react';
import dynamic from 'next/dynamic';
import ListLoading from '../../loading';
import { getPopularMovies } from '@/app/[lang]/lib/tmdb';
import PaginationView from '@/app/[lang]/components/ContentList/PagintationView';
import { getDictionary } from '@/get-dictionary';
import type { Locale } from '@/i18n-config';

const ContentList = dynamic(
  () => import('../../components/ContentList/ContentList'),
  {
    loading: () => <ListLoading />,
  },
);

export default async function Movies({
  page,
  lang,
}: {
  page: number;
  lang: Locale;
}) {
  const dictionary = await getDictionary(lang);
  const data: ApiResponse = await getPopularMovies(page, lang);

  return (
    <>
      <ContentList content={data.results} dictionary={dictionary} />
      <PaginationView totalPages={data.total_pages} />
    </>
  );
}
