import React, { Suspense } from 'react';
import Shows from './components/Shows';
import PageWrapper from '../components/PageWrapper';
import { getDictionary } from '@/get-dictionary';
import ListLoading from '../loading';

const ShowsPage = async ({ params, searchParams }: Props) => {
  const resolvedParams = await params;
  const resolvedSearchParams = await searchParams;

  const { page } = resolvedSearchParams;
  const { lang } = resolvedParams;
  const dictionary = await getDictionary(lang);

  const pageInt = parseInt(page || '1', 10);
  return (
    <PageWrapper>
      <div>
        <h1 className="mt-10 text-4xl font-bold">{dictionary.movies.title}</h1>
        <p className="text-muted-foreground mt-4">
          {dictionary.movies.description}
        </p>
      </div>
      <Shows page={pageInt} lang={lang} />
    </PageWrapper>
  );
};

export default function SuspenseShowsPage(props: Props) {
  return (
    <Suspense fallback={<ListLoading className="h-screen" />}>
      <ShowsPage {...props} />
    </Suspense>
  );
}
